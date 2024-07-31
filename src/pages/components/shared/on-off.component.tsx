import {FC} from 'preact/compat'
import {h} from 'preact'
import {useOnOff} from '../../hooks'
import {CurrentHideMode} from '../popup/current-hide-mode.component'
import {Switch} from './switch.component'
import {useRules} from '../../hooks/useRules'
import {I18n} from '../../../i18n'

export const OnOff: FC = () => {
    const {on, toggleOnOffState} = useOnOff()
    const {rules} = useRules()

    return <Switch
        on={on}
        onChange={toggleOnOffState}
        titleKey={'enable_processing'}>
        <CurrentHideMode/>
        {rules.length > 0 && <span className={'tag'}><I18n code={'rules'}/>: {rules.length}</span>}
    </Switch>
}