import {h} from 'preact'
import {I18n} from '../../../../i18n'

export const NoRules = () => {
    return <div className={'alert-info'}>
        <I18n code={'no_rules'}/>
    </div>
}

