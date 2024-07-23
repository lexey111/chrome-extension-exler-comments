import {h} from 'preact'
import {LanguageSelector} from '../i18n/components/language-selector.component'
import {GoSettings} from './popup/go-settings.component'
import {LanguageAwareWrapper} from '../i18n/components/language-aware.wrapper'
import {StatTable} from './shared/stat-table.component'
import {I18n} from '../i18n/components/i18n.component'

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

