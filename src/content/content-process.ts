import {storeStat} from './content-stat'
import {ProcessSettings} from '../content-script'
import {resetPage} from './content-reset'
import {getHideFragment} from './content-fragments'

export const processPage = async (settings: ProcessSettings) => {
    const container = document.querySelector('.comments-list')
    if (!container) {
        return
    }

    const comments = container.querySelectorAll('.comments-item')
    if (!comments || comments.length === 0) {
        // nothing to process - no comments
        return
    }
    await resetPage(comments)

    if (!settings.on) {
        // nothing to process - deactivated
        return
    }

    if (settings.rules.length === 0) {
        // nothing to process - no rules
        return
    }

    const globalHideNegative = settings.rules.some(r => r.user === '*')

    // .comments-list -> .comments-item-section -> div -> .comments-item | .comments-item-child -> .comments-item
    let counter = 0

    const classHideName = settings.hideMode === 'default'
        ? 'hide-comment-blur'
        : settings.hideMode === 'overlay'
            ? 'hide-comment-overlay'
            : settings.hideMode === 'collapse'
                ? 'hide-comment-collapse'
                : ''

    comments.forEach(comment => {
        const from = (comment.querySelector('a.profile-link:not(.reply-to)')?.textContent || '').trim()
        const to = (comment.querySelector('a.reply-to')?.textContent || '').trim()

        const plusStr = (comment.querySelector('span.plus-value')?.textContent || '').trim()
        const minusStr = (comment.querySelector('span.minus-value')?.textContent || '').trim()

        const dateStr = (comment.querySelector('.blog-item-date')?.textContent || '').trim()

        const plus = parseInt(plusStr, 10)
        const minus = parseInt(minusStr, 10)
        const isNegativeBalance = plus - minus < 0

        let shouldProcess = globalHideNegative && isNegativeBalance

        if (!shouldProcess) {
            const userInRules = settings.rules.find(r => (r.user === from || r.user === to))
            if (userInRules) {
                if ((from === userInRules.user && userInRules.hideFrom) || (to === userInRules.user && userInRules.hideTo)) {
                    shouldProcess = !userInRules.onlyNegativeBalance || (userInRules.onlyNegativeBalance && isNegativeBalance)
                }
            }
        }


        if (shouldProcess) {
            comment.classList.add('hide-comment')
            comment.classList.add(classHideName)

            comment.appendChild(getHideFragment(settings.hideMode, {
                user: from,
                toUser: to,
                plus,
                minus,
                dateStr
            }))
            counter++
        }
    })

    await storeStat(counter, comments.length)
}