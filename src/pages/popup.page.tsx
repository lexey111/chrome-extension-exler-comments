import {h} from 'preact'
import {I18n, LanguageAwareWrapper, LanguageSelector} from '../i18n'
import {GoSettings} from './components/popup'
import {OnOff, StatTable} from './components/shared'
import {useOnOff} from './hooks'
import {useEffect} from 'preact/compat'

export const PopupPage = () => {
    const {on} = useOnOff()
    useEffect(() => {
        if (!on) {
            document.body.classList.add('disabled')
        } else {
            document.body.classList.remove('disabled')
        }
    }, [on])

    return <LanguageAwareWrapper>
        <h1>
            <I18n code={'title'}/>
            <span className={'language-selector'}><LanguageSelector/></span>
        </h1>
        <OnOff/>

        <StatTable/>
        <GoSettings/>

    </LanguageAwareWrapper>
}

