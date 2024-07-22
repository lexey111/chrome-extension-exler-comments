import {h} from 'preact'
import {HideModeItemComponent} from './hide-mode-item.component'

export const HideModeComponent = () => {
    return <div className={'hide-mode-selector'}>
        <div className={'hide-mode-example'}>
            <div className={'hide-mode-item'}>
                <HideModeItemComponent index={1}/>
                <HideModeItemComponent index={2}/>
                <HideModeItemComponent index={3}/>
            </div>
        </div>
    </div>
}

