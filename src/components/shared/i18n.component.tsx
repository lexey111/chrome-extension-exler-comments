import {h} from 'preact'
import {FC} from 'preact/compat'
import {LanguageContext} from './language.context'
import {langs, StringI18nKey} from '../../resources/langs'

type I18nProps = {
    code?: StringI18nKey
}

export const I18n: FC<I18nProps> = ({code, children}) => {
    if (!code) {
        return null
    }

    return <LanguageContext.Consumer>
        {(langCode) => {
            if (!langCode) {
                return <span>...</span>
            }
            const text = langs[langCode][code as StringI18nKey] || ''

            return (<span>
                {text}
            </span>)
        }}
    </LanguageContext.Consumer>
}

