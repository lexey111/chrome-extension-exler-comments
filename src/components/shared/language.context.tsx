import {createContext} from 'preact'
import {LanguageCode} from '../../types/consts'

export const LanguageContext = createContext<LanguageCode | null>('EN')
