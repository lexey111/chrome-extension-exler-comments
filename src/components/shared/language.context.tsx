import {createContext} from 'preact'
import {LanguageCode} from '../../resources/langs'

export const LanguageContext = createContext<LanguageCode | null>('EN')
