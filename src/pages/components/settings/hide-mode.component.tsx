import {h} from 'preact'
import {HideModeItem} from './hide-mode-item.component'
import {I18n} from '../../../i18n'
import {useEffect} from 'preact/compat'

export const HideMode = () => {

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

    return <div>
        <h2><I18n code={'hide_mode'}/></h2>
        <fieldset>
            <legend>Select hide mode:</legend>

            <div>
                <input type="radio" id="default" name="hide_mode" value="default" checked/>
                <label htmlFor="default">Default (blur)</label>
            </div>

            <div>
                <input type="radio" id="collapse" name="hide_mode" value="collapse" checked/>
                <label htmlFor="collapse">Collapse</label>
            </div>

            <div>
                <input type="radio" id="overlay" name="hide_mode" value="overlay" checked/>
                <label htmlFor="overlay">Overlay</label>
            </div>

        </fieldset>
        <details className={'hide-mode-settings'}>
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
    </div>
}

