import {h} from 'preact'
import {I18n} from '../../../../i18n'
import {useRules} from '../../../hooks/useRules'
import {NoRules} from './no-rules.component'
import {AddRule} from './add-rule.component'
import {RuleDialog} from './rule-dialog.component'
import {useCallback, useState} from 'preact/compat'
import {Rule} from '../../../types'
import {generateUID} from './rule-utils'
import {RuleRecords} from './rule-records.component'
import {DeleteConfirmationDialog} from './delete-confirmation-dialog.component'

export const Rules = () => {
    const {rules, setRules} = useRules()
    const [open, setOpen] = useState(false)
    const [confirmationOpen, setConfirmationOpen] = useState(false)
    const [id, setId] = useState('')

    const handleConfirm = useCallback(async (rule: Rule | null) => {
        if (!rule) {
            setOpen(() => false)
            return
        }

        const newRules = rule.id === ''
            ? [...rules, {...rule, id: generateUID()}]
            : rules.map(r => (r.id === rule.id ? rule : r))

        await setRules(newRules)

        setOpen(() => false)
    }, [rules, setRules])

    const handleCreateIntent = useCallback(() => {
        setId(() => '')
        setOpen(() => true)
    }, [])

    const handleRecordClick = useCallback((id: string) => {
        setId(() => id)
        setOpen(() => true)
    }, [])

    const handleDeleteClick = useCallback((id: string) => {
        setId(() => id)
        setConfirmationOpen(() => true)
    }, [])

    const handleRemove = useCallback(async () => {
        const newRules = rules.filter(r => (r.id !== id))

        await setRules(newRules)

        setConfirmationOpen(() => false)
    }, [id])

    return <div>
        <h2><I18n code={'rules'}/></h2>
        {rules.length === 0 && <NoRules/>}

        <AddRule onClick={handleCreateIntent}/>

        <RuleRecords rules={rules} onClick={handleRecordClick} onDelete={handleDeleteClick}/>

        <RuleDialog
            open={open}
            id={id}
            rules={rules}
            onConfirm={handleConfirm}
            onCancel={() => setOpen(false)}/>

        <DeleteConfirmationDialog
            open={confirmationOpen}
            onConfirm={handleRemove}
            onCancel={() => setConfirmationOpen(false)}/>
    </div>
}

