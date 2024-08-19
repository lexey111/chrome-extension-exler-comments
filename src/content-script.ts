import {hideModeStorageKey, onOffStorageKey, rulesStorageKey} from './consts/storage-keys.consts'

import {defaultRule, HideMode, Rules} from './pages/types'
import {processPage} from './content/content-process'

export type ProcessSettings = {
    on: boolean,
    hideMode: HideMode,
    rules: Rules
}

const settings: ProcessSettings = {
    on: false,
    hideMode: 'default',
    rules: []
}

async function init() {
    const getOnOffState = async () => {
        const storedState = await chrome.storage.sync.get([onOffStorageKey])
        settings.on = storedState[onOffStorageKey] !== 'off'
    }

    const getRuleState = async () => {
        const storedState = await chrome.storage.sync.get([rulesStorageKey])
        let actual: Rules = []
        try {
            actual = storedState[rulesStorageKey] ? JSON.parse(storedState[rulesStorageKey]) : [{...defaultRule}]
        } catch (e) {
            //console.error(e)
        }
        if (actual) {
            settings.rules = actual
        }
    }

    const getHideModeState = async () => {
        const storedState = await chrome.storage.sync.get([hideModeStorageKey])
        let actual: HideMode = 'default'
        if (storedState[hideModeStorageKey] === 'collapse') {
            actual = 'collapse'
        }
        if (storedState[hideModeStorageKey] === 'overlay') {
            actual = 'overlay'
        }
        settings.hideMode = actual
    }

    const updateState = async () => {
        await getOnOffState()
        await getRuleState()
        await getHideModeState()

        await processPage(settings)
    }

    const handleStateChanges = (changes: {
        [p: string]: chrome.storage.StorageChange
    }, areaName: chrome.storage.AreaName) => {
        let needProcess = false
        if (areaName === 'sync' && (changes?.[onOffStorageKey]?.newValue || changes?.[hideModeStorageKey]?.newValue || changes?.[rulesStorageKey]?.newValue)) {
            needProcess = true
        }

        if (needProcess) {
            void updateState()
        }
    }
    chrome.storage.onChanged.addListener(handleStateChanges)

    void updateState()
}

void init()
