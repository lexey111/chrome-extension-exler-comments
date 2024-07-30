import {h} from 'preact'
import {FC} from 'preact/compat'
import {Rules} from '../../../types'
import {RuleRecord} from './rule-record.component'
import {I18n} from '../../../../i18n'

export type RuleRecordsProps = {
    rules: Rules
    onClick: (id: string) => void
    onDelete: (id: string) => void
}

export const RuleRecords: FC<RuleRecordsProps> = ({rules, onClick, onDelete}) => {
    if (!rules || rules.length === 0) {
        return null
    }

    return <table className={'records'}>
        <thead>
            <tr>
                <th><I18n code={'user_name_nick'}/></th>
                <th><I18n code={'hide_from'}/></th>
                <th><I18n code={'hide_to'}/></th>
                <th><I18n code={'only_negative'}/></th>
                <th className={'actions'}></th>
            </tr>
        </thead>
        <tbody>
            {rules.map(r => {
                return <RuleRecord rule={r} key={r.id} onClick={onClick} onDelete={onDelete}/>
            })}
        </tbody>
    </table>
}

