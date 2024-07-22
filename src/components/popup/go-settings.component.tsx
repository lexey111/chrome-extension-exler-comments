import {h} from 'preact'
import {useCallback} from 'preact/compat'
import {I18n} from '../shared/i18n.component'
import {settingsPageStorageKey} from '../../types/consts'

const getStoredTabId = async () => {
    const currentMayBeSettings = await chrome.storage.sync.get([settingsPageStorageKey])
    return isNaN(Number(currentMayBeSettings[settingsPageStorageKey])) ? -1 : Number(currentMayBeSettings[settingsPageStorageKey])
}

export const GoSettingsComponent = () => {
    const goSettings = useCallback(async (e: Event) => {
        e.preventDefault()
        e.stopPropagation()

        const tabs = await chrome.tabs.query({})
        const existingTabId = await getStoredTabId()
        const existingTab = existingTabId ? tabs.find(tab => tab.id === existingTabId) : undefined

        if (existingTab && existingTab.id) {
            await chrome.tabs.update(existingTab.id, {active: true})
        } else {
            chrome.tabs.create({'url': 'settings.html'}, (tab) => {
                chrome.tabs.update(tab.id!, {active: true})
            })
        }
        window.close()
        return false
    }, [])


    return <a href='#' onClick={goSettings}>
        <I18n code={'open_settings_page'}/>
    </a>
}

