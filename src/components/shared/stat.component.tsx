import {h} from 'preact'
import {useEffect, useState} from 'preact/compat'
import {allTimeStatStorageKey, statStorageKey} from '../../consts/storage-keys.consts'
import {ResetStatComponent} from './reset-stat.component'
import {I18n} from './i18n.component'

export const StatComponent = () => {
    const [stat, setStat] = useState({processed: 0, total: 0})
    const [allStat, setAllStat] = useState({processed: 0, total: 0})

    useEffect(() => {
        const processCurrentStat = async () => {
            const storedStat = await chrome.storage.sync.get([statStorageKey])
            setStat({
                processed: storedStat?.[statStorageKey]?.processed ?? 0,
                total: storedStat?.[statStorageKey]?.total ?? 0
            })

            const storedAllStat = await chrome.storage.sync.get([allTimeStatStorageKey])
            setAllStat({
                processed: storedAllStat?.[allTimeStatStorageKey]?.processed ?? 0,
                total: storedAllStat?.[allTimeStatStorageKey]?.total ?? 0
            })
        }

        const handleLangChanges = (changes: {
            [p: string]: chrome.storage.StorageChange
        }, areaName: chrome.storage.AreaName) => {
            if (areaName === 'sync' && changes?.[statStorageKey]?.newValue) {
                void processCurrentStat()
            }
        }

        chrome.storage.onChanged.addListener(handleLangChanges)
        void processCurrentStat()

        return () => {
            chrome.storage.onChanged.removeListener(handleLangChanges)
        }
    }, [setStat, setAllStat])

    return <div className={'extension-stat'}>
        <table>
            <thead>
                <tr>
                    <th><I18n code={'has_been_hidden'}/></th>
                    <th><I18n code={'total'}/></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}><I18n code={'in_current_session'}/></td>
                </tr>
                <tr>
                    <td>{stat.processed}</td>
                    <td>{stat.total}</td>
                </tr>
                <tr>
                    <td colSpan={2}><I18n code={'for_all_time'}/></td>
                </tr>
                <tr>
                    <td>{allStat.processed}</td>
                    <td>{allStat.total}</td>
                </tr>
            </tbody>
        </table>

        <ResetStatComponent/>
    </div>
}

