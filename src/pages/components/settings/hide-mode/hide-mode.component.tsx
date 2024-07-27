import {h} from 'preact'
import {HideModeSelector} from './hide-mode-selector.component'
import {HideModeExample} from './hide-mode-example.component'

export const HideMode = () => {
    return <div>
        <HideModeSelector/>
        <HideModeExample/>
    </div>
}

