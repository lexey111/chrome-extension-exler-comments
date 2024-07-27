import {h} from 'preact'
import {HideModeItem} from './hide-mode-item.component'
import {I18n} from '../../../../i18n'
import {useEffect} from 'preact/compat'
import {useHideMode} from '../../../hooks'

export const HideModeExample = () => {

    useEffect(() => {
        const details = document.querySelector('details')
        if (!details) {
            return
        }
        const handleOpen = (e: MouseEvent) => {
            if (details.hasAttribute('open')) {
                e.preventDefault()
                details.classList.add('closing')
            }
        }
        const handleClose = (e: AnimationEvent) => {
            if (e.animationName === 'close') {
                details.removeAttribute('open')
                details.classList.remove('closing')
            }
        }

        details.addEventListener('click', handleOpen)
        details.addEventListener('animationend', handleClose)

        return () => {
            details.removeEventListener('click', handleOpen)
            details.removeEventListener('animationend', handleClose)
        }
    }, [])

    const {hideMode} = useHideMode()

    return <details className={'hide-mode-settings'} open>
        <summary className={'hide-mode-selector'}>
            <I18n code={'preview'}/>
        </summary>
        <div className={'hide-mode-example'}>
            <div className={'hide-mode-items'}>
                <HideModeItem index={1}/>
                <HideModeItem index={2} hideMode={hideMode || 'default'}/>
                <HideModeItem index={3}/>
            </div>
        </div>
    </details>
}

