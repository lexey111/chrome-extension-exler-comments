import {useCallback, useEffect, useState} from 'preact/compat'
import {hideModeStorageKey} from '../../consts/storage-keys.consts'
import {HideMode} from '../types'

export const getHideModeState = async (): Promise<HideMode> => {
    const storedState = await chrome.storage.sync.get([hideModeStorageKey])
    let actual: HideMode = 'default'
    if (storedState[hideModeStorageKey] === 'collapse') {
        actual = 'collapse'
    }
    if (storedState[hideModeStorageKey] === 'overlay') {
        actual = 'overlay'
    }
    return actual
}

export const useHideMode = () => {
    const [_hideMode, set_HideMode] = useState<HideMode | null>(null)

    useEffect(() => {
        const processCurrentState = async () => {
            const actual = await getHideModeState()
            set_HideMode(actual)
        }

        const handleStateChanges = (changes: {
            [p: string]: chrome.storage.StorageChange
        }, areaName: chrome.storage.AreaName) => {
            if (areaName === 'sync' && changes?.[hideModeStorageKey]?.newValue) {
                void processCurrentState()
            }
        }

        chrome.storage.onChanged.addListener(handleStateChanges)
        void processCurrentState()

        return () => {
            chrome.storage.onChanged.removeListener(handleStateChanges)
        }
    }, [set_HideMode])

    const setHideMode = useCallback(async (mode: HideMode) => {
        void chrome.storage.sync.set({[hideModeStorageKey]: mode})
        set_HideMode(mode)
    }, [set_HideMode])

    return {
        hideMode: _hideMode,
        setHideMode
    }
}