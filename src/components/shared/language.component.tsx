import {h} from 'preact'
import {useCallback} from 'preact/compat'
import {languageStorageKey} from '../../consts/storage-keys.consts'
import {LanguageContext} from './language.context'
import {LanguageCode, LANGUAGE_CODES} from '../../i18n'

export const LanguageComponent = () => {
    const setCode = useCallback((code: LanguageCode) => {
        void chrome.storage.sync.set({[languageStorageKey]: code})
    }, [])

    return <LanguageContext.Consumer>
        {(langCode) => {
            return (<span className={'language-selector'}>
                <ul>
                    {LANGUAGE_CODES.map(code => <li key={code}>
                        <a
                            href="#" onClick={() => setCode(code)}
                            className={code === langCode ? 'active' : ''}>{code}</a>
                    </li>)}
                </ul>
            </span>)
        }}
    </LanguageContext.Consumer>
}

