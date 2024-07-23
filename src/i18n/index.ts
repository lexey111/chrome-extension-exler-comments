export const LANGUAGE_CODES = ['EN', 'UA', 'RU'] as const

export type LanguageCode = typeof LANGUAGE_CODES[number]

import {UA} from './ua'
import {EN} from './en'
import {RU} from './ru'

export type i18nKey = keyof typeof EN

export const LANG_DATA: Record<LanguageCode, Record<i18nKey, string>> = {
    EN: EN,
    UA: UA,
    RU: RU
}

export * from './components/i18n.component'
export * from './components/language-selector.component'
export * from './components/language-aware.wrapper'
export * from './components/language.context'