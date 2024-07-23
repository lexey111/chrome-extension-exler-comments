import {h} from 'preact'
import {I18n, LanguageAwareWrapper, LanguageSelector} from '../i18n'
import {GoSettings} from './popup'
import {StatTable} from './shared'

export const PopupPage = () => {
    return <LanguageAwareWrapper>
        <h1>
            <I18n code={'title'}/>
            <span className={'language-selector'}><LanguageSelector/></span>
        </h1>

        <StatTable/>
        <GoSettings/>

    </LanguageAwareWrapper>
}

