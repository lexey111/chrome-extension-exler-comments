import {LanguageCode, languageCodes} from '../types/consts'
import {UA} from './ua'
import {EN} from './en'
import {RU} from './ru'

export type StringI18nKey = keyof typeof EN

export const langs: Record<LanguageCode, Record<StringI18nKey, string>> = {
    EN: EN,
    UA: UA,
    RU: RU
}