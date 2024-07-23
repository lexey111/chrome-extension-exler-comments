import {h} from 'preact'
import {FC} from 'preact/compat'
import {LanguageContext} from './language.context'
import {LANG_DATA, i18nKey} from '../../i18n'

type I18nProps = {
    code?: i18nKey
}

export const I18n: FC<I18nProps> = ({code}) => {
    if (!code) {
        return null
    }

    return <LanguageContext.Consumer>
        {(langCode) => {
            if (!langCode) {
                return <span>...</span>
            }
            const text = LANG_DATA[langCode][code as i18nKey] || ''

            return (<span>
                {text}
            </span>)
        }}
    </LanguageContext.Consumer>
}

