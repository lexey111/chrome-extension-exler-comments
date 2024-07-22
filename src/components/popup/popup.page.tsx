import {h} from 'preact'
import {LanguageComponent} from '../shared/language.component'
import {GoSettingsComponent} from './go-settings.component'
import {LanguageAwareWrapper} from '../shared/language-aware.wrapper'
import {StatComponent} from '../shared/stat.component'
import {I18n} from '../shared/i18n.component'

export const PopupPage = () => {

    return <LanguageAwareWrapper>

        <h1>
            <I18n code={'title'}/>
            <span className={'language-selector'}><LanguageComponent/></span>
        </h1>
        <StatComponent/>

        <GoSettingsComponent/>
    </LanguageAwareWrapper>
}

