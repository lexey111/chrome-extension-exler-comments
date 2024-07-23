import {h} from 'preact'
import {LanguageSelector} from '../../i18n/components/language-selector.component'
import {I18n} from '../../i18n/components/i18n.component'

export const Header = () => {
    return <div className={'app-header'}>
        <h1>
            <I18n code={'title'}/>
        </h1>
        <h2>
            <I18n code={'settings'}/>
            <span className={'language-selector'}><LanguageSelector/></span>
        </h2>
    </div>
}

