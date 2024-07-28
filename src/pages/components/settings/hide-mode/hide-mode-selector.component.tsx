import {h} from 'preact'
import {I18n} from '../../../../i18n'
import {useCallback} from 'preact/compat'
import {useHideMode} from '../../../hooks'
import {hideModeCodes} from '../../../types'

export const HideModeSelector = () => {
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
            <span className={'legend'}><I18n code={'select_mode'}/></span>
            {hideModeCodes.map(code => {
                return <div>
                    <input
                        type="radio" id={code} name="hide_mode" value={code} checked={hideMode === code}
                        onChange={handleHideMode}
                        className="custom-radio"/>
                    <label htmlFor={code}><I18n code={`select_mode_${code}`}/></label>
                </div>
            })}
        </fieldset>
    </div>
}

