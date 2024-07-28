import {h} from 'preact'
import {FC} from 'preact/compat'
import {Rule} from '../../../types'

export type RuleProps = {
    rule: Rule
}

export const RuleRecord: FC<RuleProps> = ({rule}) => {
    return <div className={'rule-record'}>
        {JSON.stringify(rule, null, 2)}
    </div>
}

