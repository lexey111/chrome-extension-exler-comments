import {h} from 'preact'
import {HideModeItem} from './hide-mode-item.component'

export const HideMode = () => {
    return <div className={'hide-mode-selector'}>
        <div className={'hide-mode-example'}>
            <div className={'hide-mode-item'}>
                <HideModeItem index={1}/>
                <HideModeItem index={2}/>
                <HideModeItem index={3}/>
            </div>
        </div>
    </div>
}

