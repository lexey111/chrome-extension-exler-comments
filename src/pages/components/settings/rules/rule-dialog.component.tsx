import {Fragment, h} from 'preact'
import {FC, useCallback, useContext, useEffect, useState} from 'preact/compat'
import {I18n, LanguageContext} from '../../../../i18n'
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
    const {translate} = useContext(LanguageContext)
    const placeholder = translate('user_placeholder')

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
        {isNew && <h2><I18n code={'create_record'}/></h2>}
        {!isNew && <h2><I18n code={'save_record'}/></h2>}

        <form method="dialog">
            <fieldset className={userClassName}>
                <label>* <I18n code={'user_name_nick'}/></label>
                <input
                    type="text"
                    maxLength={64}
                    placeholder={placeholder}
                    value={rule?.user}
                    onChange={handleNameChange} autofocus={true}/>
            </fieldset>
            <div className={'switches'}>

                <fieldset>
                    <Switch
                        on={rule?.hideFrom}
                        onChange={handleFromChange}
                        title={<I18n code={'hide_from'}/>}>
                        {hasUser && <Fragment>=<span className={'tag'}>{rule?.user}</span></Fragment>}
                    </Switch>
                </fieldset>

                <fieldset>
                    <Switch
                        on={rule?.hideTo}
                        onChange={handleToChange}
                        title={<I18n code={'hide_to'}/>}>
                        {hasUser && <Fragment>=<span className={'tag'}>{rule?.user}</span></Fragment>}
                    </Switch>
                </fieldset>

                <fieldset>
                    <Switch
                        on={rule?.onlyNegativeBalance}
                        onChange={handleNegativeChange}
                        title={<I18n code={'only_negative'}/>}/>
                </fieldset>
            </div>

            {!isCheckboxesValid && <div className={'alert-warning'}><I18n code={'please_select_from_to'}/></div>}
            {userExists && <div className={'alert-warning'}><I18n code={'user_already_exists'}/></div>}

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

