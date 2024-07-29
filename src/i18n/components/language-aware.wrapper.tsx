import {ComponentChildren, h} from 'preact'
import {FC, useCallback} from 'preact/compat'
import {LanguageContext} from './language.context'
import {useLanguage} from '../hooks'
import {i18nKey, LANG_DATA} from '../index'

type LanguageAwareComponentProps = {
    children: ComponentChildren
}

export const LanguageAwareWrapper: FC<LanguageAwareComponentProps> = ({children}) => {
    const {activeLanguage} = useLanguage()

    const translate = useCallback((code: i18nKey) => {
        return LANG_DATA[activeLanguage || 'EN'][code as i18nKey] || code
    }, [activeLanguage])

    return <LanguageContext.Provider value={{langCode: activeLanguage || 'EN', translate}}>
        {children}
    </LanguageContext.Provider>
}
