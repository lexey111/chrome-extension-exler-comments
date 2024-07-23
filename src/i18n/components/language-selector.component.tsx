import {h} from 'preact'
import {useCallback, useContext} from 'preact/compat'
import {languageStorageKey} from '../../consts/storage-keys.consts'
import {LanguageContext} from './language.context'
import {LANGUAGE_CODES, LanguageCode} from '../index'

export const LanguageSelector = () => {
    const setCode = useCallback((code: LanguageCode) => {
        void chrome.storage.sync.set({[languageStorageKey]: code})
    }, [])

    const langCode = useContext(LanguageContext)

    return <span className={'language-selector'}>
        <ul>
            {LANGUAGE_CODES.map(code => <li key={code}>
                <a
                    href="#" onClick={() => setCode(code)}
                    className={code === langCode ? 'active' : ''}>{code}</a>
            </li>)}
        </ul>
    </span>
}

