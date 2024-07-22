import {h} from 'preact'
import {LanguageComponent} from '../shared/language.component'
import {GoSettingsComponent} from './go-settings.component'
import {LanguageAwareWrapper} from '../shared/language-aware.wrapper'
import {useEffect, useState} from 'preact/compat'
import {allTimeStatStorageKey, statStorageKey} from '../../types/consts'
import {ResetStatComponent} from './reset-stat.component'

export const PopupPage = () => {
    const [stat, setStat] = useState({processed: 0, total: 0})
    const [allStat, setAllStat] = useState({processed: 0, total: 0})

    useEffect(() => {
        const processCurrentStat = async () => {
            const storedStat = await chrome.storage.sync.get([statStorageKey])
            console.log('stored stat', storedStat)
            setStat({processed: storedStat?.[statStorageKey]?.processed ?? 0, total: storedStat?.[statStorageKey]?.total ?? 0})

            const storedAllStat = await chrome.storage.sync.get([allTimeStatStorageKey])
            console.log('stored storedAllStat', storedAllStat)
            setAllStat({processed: storedAllStat?.[allTimeStatStorageKey]?.processed ?? 0, total: storedAllStat?.[allTimeStatStorageKey]?.total ?? 0})
        }

        const handleLangChanges = (changes: {
            [p: string]: chrome.storage.StorageChange
        }, areaName: chrome.storage.AreaName) => {
            if (areaName === 'sync' && changes?.[statStorageKey]?.newValue) {
                console.log('update!')
                void processCurrentStat()
            }
        }

        chrome.storage.onChanged.addListener(handleLangChanges)
        void processCurrentStat()

        return () => {
            chrome.storage.onChanged.removeListener(handleLangChanges)
        }
    }, [setStat, setAllStat])

    return <LanguageAwareWrapper>

        <h1>Exler's site | comments fire extinguisher
            <span className={'language-selector'}><LanguageComponent/></span>
        </h1>
        <h2>Statistics</h2>
        {JSON.stringify(stat, null, 2)}
        <br/>
        {JSON.stringify(allStat, null, 2)}
        <ResetStatComponent/>
        <hr/>

        <GoSettingsComponent/>
    </LanguageAwareWrapper>
}

