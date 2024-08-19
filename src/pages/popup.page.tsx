import {h} from 'preact'
import {I18n, LanguageAwareWrapper, LanguageSelector} from '../i18n'
import {GoSettings} from './components/popup'
import {OnOff, StatTable} from './components/shared'
import {useOnOff} from './hooks'
import {useEffect} from 'preact/compat'
import {useRules} from './hooks/useRules'

export const PopupPage = () => {
    const {on} = useOnOff()

    const {rules} = useRules()

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

        {rules.length > 0 && <StatTable/>}
        {rules.length === 0 && <div className={'no-rules-info'}><I18n code={'no_rules_popup'}/></div>}

        <GoSettings/>

    </LanguageAwareWrapper>
}

