import {createContext} from 'preact'
import {LanguageCode} from '../../i18n'

export const LanguageContext = createContext<LanguageCode | null>('EN')
