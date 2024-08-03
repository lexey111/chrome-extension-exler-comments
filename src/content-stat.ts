import {allTimeStatStorageKey, statStorageKey} from './consts/storage-keys.consts'

export const storeStat = async (applied: number, totalCommentsProcessed: number) => {
    // todo: send badge/counter to background process (icon counter, stat)
    await chrome.storage.sync.set({[statStorageKey]: {processed: applied, total: totalCommentsProcessed}})

    const currentTotalStat = await chrome.storage.sync.get([allTimeStatStorageKey])
    const newProcessed = (currentTotalStat?.[allTimeStatStorageKey]?.processed ?? 0) + applied
    const newTotal = (currentTotalStat?.[allTimeStatStorageKey]?.total ?? 0) + totalCommentsProcessed

    await chrome.storage.sync.set({[allTimeStatStorageKey]: {processed: newProcessed, total: newTotal}})
}