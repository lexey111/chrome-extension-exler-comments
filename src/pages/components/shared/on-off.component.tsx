import {FC} from 'preact/compat'
import {h} from 'preact'
import {useOnOff} from '../../hooks'
import {CurrentHideMode} from '../popup/current-hide-mode.component'
import {Switch} from './switch.component'

export const OnOff: FC = () => {
    const {on, toggleOnOffState} = useOnOff()

    return <Switch
        on={on}
        onChange={toggleOnOffState}
        titleKey={'enable_processing'}>
        <CurrentHideMode/>
    </Switch>
}