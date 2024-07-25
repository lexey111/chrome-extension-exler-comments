import {h} from 'preact'
import {useContext} from 'preact/compat'
import {LanguageContext} from './language.context'
import {LANGUAGE_CODES} from '../index'
import {useLanguage} from '../hooks'

export const LanguageSelector = () => {
    const {setLanguage} = useLanguage()
    const langCode = useContext(LanguageContext)

    return <span className={'language-selector'}>
        <ul>
            {LANGUAGE_CODES.map(code => <li key={code}>
                <a
                    href="#" onClick={() => setLanguage(code)}
                    className={code === langCode ? 'active' : ''}>{code}</a>
            </li>)}
        </ul>
    </span>
}

