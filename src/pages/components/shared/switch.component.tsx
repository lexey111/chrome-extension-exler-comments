import {FC, useCallback} from 'preact/compat'
import {ComponentChildren, h} from 'preact'
import {I18n, i18nKey} from '../../../i18n'

export type SwitchProps = {
    on?: boolean | null
    onChange: (state?: boolean) => void
    titleKey?: i18nKey
    title?: any
    children?: ComponentChildren
}

export const Switch: FC<SwitchProps> = ({on, onChange, title, titleKey, children}) => {
    if (typeof on !== 'boolean') {
        return <div className="switch-container">
            <label className="switch">
                <span className="slider round"></span>
            </label>
            ...
        </div>
    }

    const handleChange = useCallback((e: Event) => {
        e.preventDefault()
        onChange((e.target as HTMLInputElement)?.checked)
        return false
    }, [onChange])

    const handleToggle = useCallback(() => {
        onChange(!on)
    }, [onChange, on])

    return <div className="switch-container">
        <label className="switch">
            <input type="checkbox" checked={on} onChange={handleChange}/>
            <span className="slider round"></span>
        </label>
        <div onClick={handleToggle}>
            {titleKey && <I18n code={titleKey}/>}
            {title}
            {children}
        </div>
    </div>
}