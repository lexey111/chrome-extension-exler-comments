import {h} from 'preact'
import {Footer, Header, HideMode} from './components/settings'
import {LanguageAwareWrapper} from '../i18n'
import {useEffect} from 'preact/compat'
import {settingsPageStorageKey} from '../consts/storage-keys.consts'
import {OnOff, StatTable} from './components/shared'
import {useOnOff} from './hooks'

const storeTabId = async () => {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true})
    await chrome.storage.sync.set({[settingsPageStorageKey]: tabs[0].id})
    return tabs[0].id
}

export const SettingsPage = () => {
    useEffect(() => {
        // register/unregister tab in storage
        void storeTabId()
    }, [])

    const {on} = useOnOff()

    useEffect(() => {
        if (!on) {
            document.body.classList.add('disabled')
        } else {
            document.body.classList.remove('disabled')
        }
    }, [on])

    return <LanguageAwareWrapper>
        <Header/>
        <OnOff/>
        <StatTable/>
        <HideMode/>
        <Footer/>
    </LanguageAwareWrapper>
}
