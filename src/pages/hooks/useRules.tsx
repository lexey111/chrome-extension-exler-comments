import {useCallback, useEffect, useState} from 'preact/compat'
import {rulesStorageKey} from '../../consts/storage-keys.consts'
import {Rules} from '../types'

export const getRuleState = async (): Promise<Rules> => {
    const storedState = await chrome.storage.sync.get([rulesStorageKey])
    let actual: Rules = []
    try {
        actual = JSON.parse(storedState[rulesStorageKey])
    } catch (e) {
        //
    }
    return actual
}

// simple and immediate apply
export const useRules = () => {
    const [_rules, set_rules] = useState<Rules>([])

    useEffect(() => {
        const processCurrentState = async () => {
            const actual = await getRuleState()
            set_rules(actual)
        }

        const handleStateChanges = (changes: {
            [p: string]: chrome.storage.StorageChange
        }, areaName: chrome.storage.AreaName) => {
            if (areaName === 'sync' && changes?.[rulesStorageKey]?.newValue) {
                void processCurrentState()
            }
        }

        chrome.storage.onChanged.addListener(handleStateChanges)
        void processCurrentState()

        return () => {
            chrome.storage.onChanged.removeListener(handleStateChanges)
        }
    }, [set_rules])

    const setRules = useCallback(async (rules: Rules) => {
        void chrome.storage.sync.set({[rulesStorageKey]: rules})
        set_rules(rules)
    }, [set_rules])

    return {
        rules: _rules,
        setRules
    }
}