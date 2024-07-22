import {h} from 'preact'
import {useCallback} from 'preact/compat'
import {LanguageCode, languageCodes, languageStorageKey} from '../../types/consts'
import {LanguageContext} from './language.context'

export const LanguageComponent = () => {
    const setCode = useCallback((code: LanguageCode) => {
        void chrome.storage.sync.set({[languageStorageKey]: code})
    }, [])

    return <LanguageContext.Consumer>
        {(langCode) => {
            return (<span className={'language-selector'}>
                <ul>
                    {languageCodes.map(code => <li key={code}>
                        <a
                            href="#" onClick={() => setCode(code)}
                            className={code === langCode ? 'active' : ''}>{code}</a>
                    </li>)}
                </ul>
            </span>)
        }}
    </LanguageContext.Consumer>
}

