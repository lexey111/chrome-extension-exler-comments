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

        const handleCloseDone = (e: AnimationEvent) => {
            if (e.animationName === 'close') {
                details.removeAttribute('open')
                details.classList.remove('closing')
            }
        }

        details.addEventListener('animationend', handleCloseDone)

        return () => {
            details.removeEventListener('animationend', handleCloseDone)
        }
    }, [])

    const {hideMode} = useHideMode()
    const handleOpen = (e: MouseEvent) => {
        const details = document.querySelector('details')
        if (details?.hasAttribute('open')) {
            e.preventDefault()
            details?.classList.add('closing')
        }
    }

    return <details className={'hide-mode-settings'}>
        <summary className={'hide-mode-selector'} onClick={handleOpen}>
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

