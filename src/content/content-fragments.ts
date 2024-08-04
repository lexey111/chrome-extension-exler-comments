import {HideMode} from '../pages/types'

export type ModeParams = {
    user: string
    toUser?: string
    dateStr?: string
    plus: number
    minus: number
}

const traverseToClass = (el: HTMLDivElement, className: string) => {
    let traversedEl: HTMLElement | null = el

    while (traversedEl && !traversedEl.classList.contains(className)) {
        traversedEl = traversedEl.parentElement
    }
    return traversedEl
}

const handleDismiss = (e: MouseEvent) => {
    e.preventDefault()
    if (!e?.target) {
        return false
    }
    const target = e.target as HTMLDivElement
    const commentExtensionContent = traverseToClass(target, 'hide-comment-content')
    const commentBody = traverseToClass(target, 'hide-comment')

    if (!commentBody || !commentExtensionContent) {
        return false
    }

    const classNames = Array.from(commentBody.classList).filter(name => name.startsWith('hide-comment'))
    classNames.forEach((name) => {
        commentBody.classList.remove(name)
    })
    commentExtensionContent.remove()
}


const getFragmentForBlur = () => {
    const div = document.createElement('div')
    div.classList.add('hide-comment-content')
    div.classList.add('hide-comment-content-default')

    const handler = document.createElement('span')
    handler.classList.add('hide-comment-content-handler')
    handler.innerHTML = '<i class="gg-eye"></i>'
    handler.onclick = (e) => handleDismiss(e)

    div.append(handler)
    return div
}

const getFragmentForOverlay = (params: ModeParams) => {
    const div = document.createElement('div')
    div.classList.add('hide-comment-content')
    div.classList.add('hide-comment-content-overlay')

    const handler = document.createElement('span')
    handler.classList.add('hide-comment-content-handler')
    handler.innerHTML = '<i class="gg-eye"></i>'
    handler.onclick = (e) => handleDismiss(e)

    div.append(handler)

    const contentDiv = document.createElement('div')
    contentDiv.classList.add('hide-comment-overlay-content')

    contentDiv.innerHTML = `<div class="hide-comment-content-brief">
            <span class="hide-comment-content-user">${params.user}${params.toUser ? ' → ' + params.toUser : ''}</span>
            ${params.dateStr ? '<span class="hide-comment-content-date">' + params.dateStr + '</span>' : ''}
            <span class="hide-comment-content-minus">-${params.minus}</span>|
            <span class="hide-comment-content-plus">+${params.plus}</span>
        </div>`

    div.append(contentDiv)
    return div
}

const getFragmentForCollapse = (params: ModeParams) => {
    const div = document.createElement('div')
    div.classList.add('hide-comment-content')
    div.classList.add('hide-comment-content-collapse')

    const briefDiv = document.createElement('div')
    briefDiv.classList.add('hide-comment-content-brief')


    briefDiv.innerHTML = `<span class="hide-comment-content-user">${params.user}${params.toUser ? ' → ' + params.toUser : ''}</span>
            ${params.dateStr ? '<span class="hide-comment-content-date">' + params.dateStr + '</span>' : ''}
            <span class="hide-comment-content-minus">-${params.minus}</span>|
            <span class="hide-comment-content-plus">+${params.plus}</span>`

    const handler = document.createElement('span')
    handler.classList.add('hide-comment-content-handler')
    handler.innerHTML = '<i class="gg-eye"></i>'
    handler.onclick = (e) => handleDismiss(e)

    briefDiv.prepend(handler)

    div.append(briefDiv)

    return div
}

export const getHideFragment = (mode: HideMode, modeParams: ModeParams) => {
    if (mode === 'overlay') {
        return getFragmentForOverlay(modeParams)
    }

    if (mode === 'collapse') {
        return getFragmentForCollapse(modeParams)
    }

    return getFragmentForBlur()
}
