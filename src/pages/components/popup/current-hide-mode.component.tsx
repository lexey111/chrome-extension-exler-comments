import {useHideMode} from '../../hooks'
import {h} from 'preact'

export const CurrentHideMode = () => {
    const {hideMode,} = useHideMode()
    const modeName = hideMode === 'overlay' ? 'overlay' : hideMode === 'collapse' ? 'collapse' : 'blur'
    return <span className={'tag'}>{modeName}</span>
}