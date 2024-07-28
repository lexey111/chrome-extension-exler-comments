import {h} from 'preact'
import {FC, useCallback, useEffect, useState} from 'preact/compat'
import {I18n} from '../../../../i18n'
import {useRules} from '../../../hooks/useRules'
import {Rule} from '../../../types'
import {Switch} from '../../shared'

export type RuleDialogProps = {
    open: boolean
    id?: string
    onConfirm: () => void
    onCancel: () => void
}

export const RuleDialog: FC<RuleDialogProps> = ({id, open, onConfirm, onCancel}) => {
    const {rules} = useRules()

    const [rule, setRule] = useState<Rule | null>(null)

    const isNew = !id

    useEffect(() => {
        const dialog = document.querySelector('dialog')

        if (open) {
            const knownRule = rules.find((r) => r.id === id)
            if (!knownRule) {
                setRule(() => ({
                    id: '',
                    user: '',
                    hideFrom: true,
                    hideTo: false,
                    onlyNegativeBalance: true
                }))
            } else {
                setRule(() => ({...knownRule}))
            }
            dialog?.showModal()
        } else {
            dialog?.close()
        }
    }, [open])

    const handleNameChange = useCallback((e: Event) => {
        setRule(v => {
            if (!v) {
                return null
            }
            return {...v, user: (e.target as HTMLInputElement)?.value || ''}
        })
    }, [])

    const handleFromChange = useCallback((checked?: boolean) => {
        setRule(v => {
            if (!v) {
                return null
            }
            return {...v, hideFrom: checked || false}
        })
    }, [])

    const handleToChange = useCallback((checked?: boolean) => {
        setRule(v => {
            if (!v) {
                return null
            }
            return {...v, hideTo: checked || false}
        })
    }, [])

    const handleNegativeChange = useCallback((checked?: boolean) => {
        setRule(v => {
            if (!v) {
                return null
            }
            return {...v, onlyNegativeBalance: checked || false}
        })
    }, [])

    const userExists = isNew ? rules.findIndex(r => r.user === (rule?.user || '').trim()) !== -1 : false
    const isNameValid = userExists ? false : (rule?.user || '').trim() !== ''
    const isCheckboxesValid = rule?.hideTo || rule?.hideFrom
    const hasUser = !!(rule?.user || '').trim()

    const userClassName = isNameValid ? 'valid' : 'invalid'

    return <dialog onCancel={onCancel}>
        <button onClick={onCancel} className={'dialog-cancel'}>&times;</button>
        {isNew && <h2>Create record</h2>}
        {!isNew && <h2>Update record</h2>}

        <form method="dialog">
            <fieldset className={userClassName}>
                <label>* User name (nickname)</label>
                <input
                    type="text"
                    value={rule?.user}
                    onChange={handleNameChange} autofocus={true}/>
            </fieldset>
            <div className={'switches'}>

                <fieldset>
                    <Switch
                        on={rule?.hideFrom}
                        onChange={handleFromChange}
                        title={<span>Hide From</span>}>
                        {hasUser && <span className={'tag'}>{rule?.user}</span>}
                    </Switch>
                </fieldset>

                <fieldset>
                    <Switch
                        on={rule?.hideTo}
                        onChange={handleToChange}
                        title={<span>Hide To</span>}>
                        {hasUser && <span className={'tag'}>{rule?.user}</span>}
                    </Switch>
                </fieldset>

                <fieldset>
                    <Switch
                        on={rule?.onlyNegativeBalance}
                        onChange={handleNegativeChange}
                        title={<span>Only if negative +/- balance</span>}/>
                </fieldset>
            </div>

            {!isCheckboxesValid && <div className={'alert-warning'}>Please select rule when hide</div>}
            {userExists && <div className={'alert-warning'}>This user name already exists in rules</div>}

            <div className={'actions'}>
                <button onClick={onCancel} className={'ghost'}><I18n code={'cancel'}/></button>
                <button
                    onClick={onConfirm}
                    className={'primary'}
                    disabled={!isNameValid || !isCheckboxesValid}>
                    <I18n code={isNew ? 'create' : 'save'}/></button>
            </div>
        </form>
    </dialog>
}

