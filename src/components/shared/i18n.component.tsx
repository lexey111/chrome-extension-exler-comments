import {ComponentChild, h} from 'preact'
import {FC} from 'preact/compat'
import {LanguageContext} from './language.context'
import {langs, StringI18nKey} from '../../resources/langs'

type I18nProps = {
    code?: StringI18nKey
    children?: ComponentChild
}

export const I18n: FC<I18nProps> = ({code, children}) => {
    let keyCode: string | undefined = code

    if (!code) {
        keyCode = children?.toString()
    }

    if (!keyCode) {
        return null
    }

    return <LanguageContext.Consumer>
        {(langCode) => {
            if (!langCode) {
                return <span></span>
            }
            const text = langs[langCode][keyCode as StringI18nKey] || ''

            return (<span>
                {text || 'unknown code ' + keyCode}
            </span>)
        }}
    </LanguageContext.Consumer>
}

