import {h} from 'preact'
import {FC} from 'preact/compat'
import {getRandomLine} from '../../consts/random-lipsum'

type HideModeItemProps = {
    index: number
}

function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const HideModeItem: FC<HideModeItemProps> = ({index}) => {
    const date = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(randomDate(new Date(2024, 0, 1), new Date()))

    return <div className={'hide-mode-item'}>
        <p>{getRandomLine()}</p>
        <p>{getRandomLine()}</p>
        {Math.random() > 0.5 && <p>{getRandomLine()}</p>}
        {Math.random() > 0.5 && <p>{getRandomLine()}</p>}

        <div className={'hide-mode-item-footer'}>
            <span className={'user'}>User {index}</span>
            <span className={'time'}>{date}</span>
            <span className={'icons'}><i></i><i></i><i></i><i></i></span>
            <span className={'karma'}>
                <span className={'karma-minus'}>{Math.floor(Math.random() * 100)} <b></b></span>
                <span className={'karma-plus'}><b></b> {Math.floor(Math.random() * 100)}</span>
            </span>
        </div>
    </div>
}

