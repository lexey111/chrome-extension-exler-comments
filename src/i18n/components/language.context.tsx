import {createContext} from 'preact'
import {LanguageCode} from '../index'

export const LanguageContext = createContext<LanguageCode | null>('EN')
