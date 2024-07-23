import {h} from 'preact'
import {Disclaimer, Header, HideMode} from './settings'
import {LanguageAwareWrapper} from '../i18n'
import {useEffect} from 'preact/compat'
import {settingsPageStorageKey} from '../consts/storage-keys.consts'
import {StatTable} from './shared'

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
