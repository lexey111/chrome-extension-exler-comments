import {h} from 'preact'
import {useCallback} from 'preact/compat'
import {allTimeStatStorageKey, statStorageKey} from '../../types/consts'

export const ResetStatComponent = () => {
    const resetStat = useCallback(async () => {
        await chrome.storage.sync.set({[statStorageKey]: {processed: 0, total: 0}})
        await chrome.storage.sync.set({[allTimeStatStorageKey]: {processed: 0, total: 0}})

    }, [])
    return <div>
        <a href="#" onClick={resetStat}>Reset stat</a>
    </div>
}

