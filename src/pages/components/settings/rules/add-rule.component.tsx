import {h} from 'preact'
import {I18n} from '../../../../i18n'
import {FC} from 'preact/compat'

export type AddRuleProps = {
    onClick: () => void
}

export const AddRule:FC<AddRuleProps> = ({onClick}) => {
    return <div className={'add-rules'}>
        <button className={'primary'} onClick={onClick}>
            <I18n code={'add_rule'}/>
        </button>
    </div>
}

