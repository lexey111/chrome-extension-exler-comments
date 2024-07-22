import {h} from 'preact'
import {HeaderComponent} from './header.component'
import {LanguageAwareWrapper} from '../shared/language-aware.wrapper'
import {I18n} from '../shared/i18n.component'
import {useEffect} from 'preact/compat'
import {settingsPageStorageKey} from '../../types/consts'

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
            data
            <I18n>test</I18n>
            <I18n>test232</I18n>
            <I18n code={'test3'}/>
        </LanguageAwareWrapper>
    </div>
}
