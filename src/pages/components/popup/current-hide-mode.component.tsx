import {useHideMode} from '../../hooks'
import {h} from 'preact'
import {I18n, I18nKey} from '../../../i18n'

export const CurrentHideMode = () => {
    const {hideMode,} = useHideMode()
    const modeName: I18nKey = hideMode === 'overlay' ? 'mode_overlay' : hideMode === 'collapse' ? 'mode_collapse' : 'mode_blur'
    return <I18n className={'tag'} code={modeName}/>
}