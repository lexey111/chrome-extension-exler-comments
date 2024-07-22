import {ComponentChildren, h} from 'preact'
import {FC, useEffect, useState} from 'preact/compat'
import {LanguageCode, languageCodes, languageStorageKey} from '../../types/consts'
import {LanguageContext} from './language.context'

type LanguageAwareComponentProps = {
    children: ComponentChildren
}

export const LanguageAwareWrapper: FC<LanguageAwareComponentProps> = ({children}) => {
    const [activeLanguage, setActiveLanguage] = useState<LanguageCode | null>(null)

    useEffect(() => {
        const processCurrentLanguage = async () => {
            const storedLanguage = await chrome.storage.sync.get([languageStorageKey])

            let actual: LanguageCode = 'EN'
            if (languageCodes.includes(storedLanguage[languageStorageKey])) {
                actual = storedLanguage[languageStorageKey]
            }
            setActiveLanguage(actual)
        }

        const handleLangChanges = (changes: {
            [p: string]: chrome.storage.StorageChange
        }, areaName: chrome.storage.AreaName) => {
            if (areaName === 'sync' && changes?.[languageStorageKey]?.newValue) {
                void processCurrentLanguage()
            }
        }

        chrome.storage.onChanged.addListener(handleLangChanges)
        void processCurrentLanguage()

        return () => {
            chrome.storage.onChanged.removeListener(handleLangChanges)
        }
    }, [setActiveLanguage])

    return <LanguageContext.Provider value={activeLanguage}>
        {children}
    </LanguageContext.Provider>
}
