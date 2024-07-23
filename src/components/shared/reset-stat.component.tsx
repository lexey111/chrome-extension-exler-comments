import {h} from 'preact'
import {useCallback} from 'preact/compat'
import {allTimeStatStorageKey, statStorageKey} from '../../consts/storage-keys.consts'
import {I18n} from '../../i18n/components/i18n.component'

export const ResetStat = () => {
    const resetStat = useCallback(async () => {
        await chrome.storage.sync.set({[statStorageKey]: {processed: 0, total: 0}})
        await chrome.storage.sync.set({[allTimeStatStorageKey]: {processed: 0, total: 0}})

    }, [])

    return <div class={'reset-stat-container'}>
        <a href="#" onClick={resetStat}><I18n code={'reset_stat'}/></a>
    </div>
}

