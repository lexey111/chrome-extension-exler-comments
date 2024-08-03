import {h} from 'preact'
import {FC, useCallback, useMemo, useState} from 'preact/compat'
import {getRandomLine} from '../../../../consts/random-lipsum'
import {HideMode} from '../../../types'

type HideModeItemProps = {
    index: number
    hideMode?: HideMode
}

function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function randomDateText() {
    return new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(randomDate(new Date(2024, 0, 1), new Date()))
}

function traverseToClass(el: HTMLDivElement, className: string) {
    let traversedEl: HTMLElement | null = el

    while (traversedEl && !traversedEl.classList.contains(className)) {
        traversedEl = traversedEl.parentElement
    }
    return traversedEl
}

export const HideModeItem: FC<HideModeItemProps> = ({index, hideMode}) => {
    const date = useMemo(() => randomDateText(), [])

    const randomContent = useMemo(() => {
        return <div>
            <p>{getRandomLine()}</p>
            <p>{getRandomLine()}</p>
            {Math.random() > 0.5 && <p>{getRandomLine()}</p>}
            {Math.random() > 0.5 && <p>{getRandomLine()}</p>}
        </div>
    }, [])

    const [randomPlus] = useState(Math.floor(Math.random() * 100))
    const [randomMinus] = useState(Math.floor(Math.random() * 100))

    const classHideName = hideMode === 'default'
        ? ' hide-comment-blur'
        : hideMode === 'overlay'
            ? ' hide-comment-overlay'
            : hideMode === 'collapse'
                ? ' hide-comment-collapse'
                : ''

    const handleDismiss = useCallback((e: MouseEvent) => {
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
    }, [])

    return <div className={'hide-comment hide-mode-item' + classHideName}>
        {randomContent}

        {hideMode === 'default' && <div className={'hide-comment-content hide-comment-content-default'}>
            <span className={'hide-comment-content-handler'} onClick={handleDismiss}>
                <i className={'gg-eye'}></i>
            </span>
        </div>}

        {hideMode === 'overlay' && <div className={'hide-comment-content hide-comment-content-overlay'}>
            <span className={'hide-comment-content-handler'} onClick={handleDismiss}>
                <i className={'gg-eye'}></i>
            </span>
            <div className={'hide-comment-overlay-content'}>
                <div className={'hide-comment-content-brief'}>
                    <span className={'hide-comment-content-user'}>User 2</span>
                    <span className={'hide-comment-content-date'}>{date}</span>
                    <span className={'hide-comment-content-minus'}>-{randomMinus}</span>|
                    <span className={'hide-comment-content-plus'}>+{randomPlus}</span>
                </div>
            </div>
        </div>}

        {hideMode === 'collapse' && <div className={'hide-comment-content hide-comment-content-collapse'}>
            <div className={'hide-comment-content-brief'}>
                <span className={'hide-comment-content-handler'} onClick={handleDismiss}>
                    <i className={'gg-eye'}></i>
                </span>
                <span className={'hide-comment-content-user'}>User 2</span>
                <span className={'hide-comment-content-date'}>{date}</span>
                <span className={'hide-comment-content-minus'}>-{randomMinus}</span>|
                <span className={'hide-comment-content-plus'}>+{randomPlus}</span>
            </div>
        </div>}

        <div className={'hide-mode-item-footer'}>
            <span className={'user'}>User {index}</span>
            <span className={'time'}>{date}</span>
            <span className={'icons'}><i></i><i></i><i></i><i></i></span>
            <span className={'karma'}>
                <span className={'karma-minus'}>{randomMinus} <b></b></span>
                <span className={'karma-plus'}><b></b> {randomPlus}</span>
            </span>
        </div>
    </div>
}

