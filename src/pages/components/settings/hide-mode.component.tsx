import {h} from 'preact'
import {HideModeItem} from './hide-mode-item.component'
import {I18n} from '../../../i18n'

export const HideMode = () => {
    return <details className={'hide-mode-settings'}>
        <summary className={'hide-mode-selector'}>
            <I18n code={'preview'}/>
        </summary>
        <div className={'hide-mode-example'}>
            <div className={'hide-mode-items'}>
                <HideModeItem index={1}/>
                <HideModeItem index={2}/>
                <HideModeItem index={3}/>
            </div>
        </div>
    </details>
}

