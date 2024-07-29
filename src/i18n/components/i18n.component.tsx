import {h} from 'preact'
import {FC, useContext, useMemo} from 'preact/compat'
import {LanguageContext} from './language.context'
import {i18nKey} from '../index'

type I18nProps = {
    code: i18nKey
}

export const I18n: FC<I18nProps> = ({code}) => {
    const {langCode, translate} = useContext(LanguageContext)

    if (!code || !langCode) {
        return <span>...</span>
    }

    const text = useMemo(() => translate(code), [code, langCode])

    return <span>
        {text}
    </span>
}

