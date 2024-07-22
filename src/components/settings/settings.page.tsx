import {h} from 'preact'
import {HeaderComponent} from './header.component'
import {LanguageAwareWrapper} from '../shared/language-aware.wrapper'
import {useEffect} from 'preact/compat'
import {settingsPageStorageKey} from '../../consts/storage-keys.consts'
import {StatComponent} from '../shared/stat.component'
import {DisclaimerComponent} from './disclaimer.component'
import {HideModeComponent} from './hide-mode.component'

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
            <HeaderComponent/>
            <StatComponent/>
            <HideModeComponent/>
            <DisclaimerComponent/>
        </LanguageAwareWrapper>
    </div>
}
