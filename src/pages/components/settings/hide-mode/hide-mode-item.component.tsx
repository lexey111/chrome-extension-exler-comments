import {h} from 'preact'
import {FC, useMemo, useState} from 'preact/compat'
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
        ? ' hide-comment'
        : hideMode === 'overlay'
            ? ' hide-comment-overlay'
            : hideMode === 'collapse'
                ? ' hide-comment-collapse'
                : ''

    return <div className={'hide-mode-item' + classHideName}>
        {randomContent}
        {hideMode === 'overlay' && <div className={'hide-comment-overlay-content'}>
            <div className={'hide-comment-content-brief'}>
                <span className={'hide-comment-content-user'}>User 2</span>,
                <span className={'hide-comment-content-minus'}>-{randomMinus}</span>|
                <span className={'hide-comment-content-plus'}>+{randomPlus}</span>
            </div>
        </div>}
        {hideMode === 'collapse' && <div className={'hide-comment-collapse-content'}>
            <div className={'hide-comment-content-brief'}>
                <span className={'hide-comment-content-user'}>User 2</span>,
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

