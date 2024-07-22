export const languageCodes = ['EN', 'UA', 'RU'] as const
export type LanguageCode = typeof languageCodes[number]

export const languageStorageKey = 'activeLanguage'
export const statStorageKey = 'stat'
export const allTimeStatStorageKey = 'all_stat'


export const settingsPageStorageKey = 'settings_page'

