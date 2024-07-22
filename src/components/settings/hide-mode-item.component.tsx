import {h} from 'preact'
import {FC} from 'preact/compat'
import {getRandomLine} from '../../consts/random-lipsum'

type HideModeItemProps = {
    index: number
}

export const HideModeItemComponent: FC<HideModeItemProps> = ({index}) => {
    const date = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(new Date)

    return <div className={'hide-mode-item'}>
        <p>
            {getRandomLine()}
        </p>
        <p>
            {getRandomLine()}
        </p>
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

