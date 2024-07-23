import {h} from 'preact'
import {Header} from './settings/header.component'
import {LanguageAwareWrapper} from '../i18n/components/language-aware.wrapper'
import {useEffect} from 'preact/compat'
import {settingsPageStorageKey} from '../consts/storage-keys.consts'
import {StatTable} from './shared/stat-table.component'
import {Disclaimer} from './settings/disclaimer.component'
import {HideMode} from './settings/hide-mode.component'

const storeTabId = async () => {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true})
    await chrome.storage.sync.set({[settingsPageStorageKey]: tabs[0].id})
    return tabs[0].id
}

export const SettingsPage = () => {
    // register/unregister tab in storage
    useEffect(() => {
        void storeTabId()
    }, [])
    return <div>
        <LanguageAwareWrapper>
            <Header/>
            <StatTable/>
            <HideMode/>
            <Disclaimer/>
        </LanguageAwareWrapper>
    </div>
}
