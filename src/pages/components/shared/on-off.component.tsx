import {FC} from 'preact/compat'
import {h} from 'preact'
import {useOnOff} from '../../hooks'
import {I18n} from '../../../i18n'
import {CurrentHideMode} from '../popup/current-hide-mode.component'

export const OnOff: FC = () => {
    const {on, toggleOnOffState} = useOnOff()

    if (typeof on !== 'boolean') {
        return <div className="switch-container">
            <label className="switch">
                <span className="slider round"></span>
            </label>
            ...
        </div>
    }

    return <div className="switch-container">
        <label className="switch">
            <input type="checkbox" checked={on === true} onChange={toggleOnOffState}/>
            <span className="slider round"></span>
        </label>
        <I18n code={'enable_processing'}/><CurrentHideMode/>
    </div>
}