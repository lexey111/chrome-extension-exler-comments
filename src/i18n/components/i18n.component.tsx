import {h} from 'preact'
import {FC, useContext} from 'preact/compat'
import {LanguageContext} from './language.context'
import {i18nKey, LANG_DATA} from '../index'

type I18nProps = {
    code?: i18nKey
}

export const I18n: FC<I18nProps> = ({code}) => {
    const langCode = useContext(LanguageContext)

    if (!code || !langCode) {
        return <span>...</span>
    }

    return <span>
        {LANG_DATA[langCode][code as i18nKey]}
    </span>
}

