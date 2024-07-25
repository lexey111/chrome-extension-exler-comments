import {h} from 'preact'
import {HideModeItem} from './hide-mode-item.component'
import {I18n} from '../../../i18n'
import {useCallback, useEffect} from 'preact/compat'
import {useHideMode} from '../../hooks'

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

    const {hideMode, setHideMode} = useHideMode()

    const handleHideMode = useCallback(async (event: any) => {
        const target = event?.target?.value
        if (target === 'default') {
            await setHideMode('default')
        }
        if (target === 'collapse') {
            await setHideMode('collapse')
        }
        if (target === 'overlay') {
            await setHideMode('overlay')
        }
    }, [])

    return <div>
        <h2><I18n code={'hide_mode'}/></h2>
        <fieldset>
            <legend><I18n code={'select_mode'}/></legend>
            <div>
                <input
                    type="radio" id="default" name="hide_mode" value="default" checked={hideMode === 'default'}
                    onChange={handleHideMode}
                    class="custom-radio"/>
                <label htmlFor="default"><I18n code={'select_mode_default'}/></label>
            </div>

            <div>
                <input
                    type="radio" id="collapse" name="hide_mode" value="collapse" checked={hideMode === 'collapse'}
                    onChange={handleHideMode}
                    class="custom-radio"/>
                <label htmlFor="collapse"><I18n code={'select_mode_collapse'}/></label>
            </div>

            <div>
                <input
                    type="radio" id="overlay" name="hide_mode" value="overlay" checked={hideMode === 'overlay'}
                    onChange={handleHideMode}
                    class="custom-radio"/>
                <label htmlFor="overlay"><I18n code={'select_mode_overlay'}/></label>
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

