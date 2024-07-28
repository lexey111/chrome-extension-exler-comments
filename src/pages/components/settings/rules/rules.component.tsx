import {h} from 'preact'
import {I18n} from '../../../../i18n'
import {useRules} from '../../../hooks/useRules'
import {RuleRecord} from './rule-record.component'
import {NoRules} from './no-rules.component'
import {AddRule} from './add-rule.component'
import {RuleDialog} from './rule-dialog.component'
import {useCallback, useState} from 'preact/compat'

export const Rules = () => {
    const {rules} = useRules()
    const [open, setOpen] = useState(false)
    const [, setId] = useState('')

    const handleConfirm = useCallback(() => {
        setOpen(() => false)
    }, [])

    const handleCreateIntent = useCallback(() => {
        setId(() => '')
        setOpen(() => true)
    }, [])

    return <div>
        <h2><I18n code={'rules'}/></h2>
        {rules.length === 0 && <NoRules/>}

        <AddRule onClick={handleCreateIntent}/>

        {rules.map(r => {
            return <RuleRecord rule={r} key={r.id}/>
        })}

        <RuleDialog
            open={open}
            onConfirm={handleConfirm}
            onCancel={() => setOpen(false)}/>
    </div>
}

