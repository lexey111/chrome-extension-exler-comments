import {LanguageCode} from '../types/consts'
import {UA} from './ua'
import {EN} from './en'
import {RU} from './ru'

export type StringI18nKey = |
    'test' |
    'test2' |
    'test3' |
    'settings' |
    'open_settings_page'

export const langs: Record<LanguageCode, Record<StringI18nKey, string>> = {
    EN: EN,
    UA: UA,
    RU: RU
}