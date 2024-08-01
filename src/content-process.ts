import {storeStat} from './content-stat'
import {ProcessSettings} from './content-script'
import {resetPage} from './content-reset'

console.log('> Processing Loaded!')

function prepareBlurFragment() {
    const div = document.createElement('div')
    div.classList.add('hide-comment-content')
    div.classList.add('hide-comment-content-default')
    div.innerHTML = `<span class="hide-comment-content-handler" onClick={handleDismiss}>
                <i class="gg-eye"></i>
            </span>`

    return div
}

export const processPage = async (settings: ProcessSettings) => {
    console.log('Processing page...')

    const container = document.querySelector('.comments-list')
    if (!container) {
        return
    }

    const comments = container.querySelectorAll('.comments-item')
    if (!comments || comments.length === 0) {
        return
    }
    resetPage(comments)
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

        const plus = parseInt(plusStr, 10)
        const minus = parseInt(minusStr, 10)


        if (from === 'Alex Exler' || to === 'Alex Exler') {
            console.log('APPLY 1', classHideName)
            console.log('APPLY 2', comment)
            console.log(`  ${from} -> ${to}`)
            console.log(` -${minus} | +${plus}`)

            comment.classList.add('hide-comment')
            comment.classList.add(classHideName)

            comment.appendChild(prepareBlurFragment())
            console.log('append!')
            counter++
        }
    })

    await storeStat(counter, comments.length)
}