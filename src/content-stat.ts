import {allTimeStatStorageKey, statStorageKey} from './consts/storage-keys.consts'

console.log('> Stat Loaded!')

export const storeStat = async (hided: number, total: number) => {

    await chrome.storage.sync.set({[statStorageKey]: {processed: hided, total: total}})

    const totalStat = await chrome.storage.sync.get([allTimeStatStorageKey])
    console.log('totalStat', totalStat)
    const newProcessed = (totalStat?.[allTimeStatStorageKey]?.processed ?? 0) + hided
    const newTotal = (totalStat?.[allTimeStatStorageKey]?.total ?? 0) + total
    await chrome.storage.sync.set({[allTimeStatStorageKey]: {processed: newProcessed, total: newTotal}})

    console.log('new totalStat', {[allTimeStatStorageKey]: {processed: newProcessed, total: newTotal}})
}