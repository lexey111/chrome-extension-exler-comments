import {createContext} from 'preact'
import {i18nKey, LanguageCode} from '../index'

export type I18nContext = {
    langCode: LanguageCode,
    translate: (code: i18nKey) => string
}

export const LanguageContext = createContext<I18nContext>({
    langCode: 'EN',
    translate: (code) => code
})
