import {h} from 'preact'
import {LanguageComponent} from '../shared/language.component'
import {I18n} from '../shared/i18n.component'

export const HeaderComponent = () => {
    return <div className={'app-header'}>
        <h1>
            <I18n code={'title'}/>
        </h1>
        <h2>
            <I18n code={'settings'}/>
            <span className={'language-selector'}><LanguageComponent/></span>
        </h2>
    </div>
}

