import {h} from 'preact'
import {FC, useEffect} from 'preact/compat'
import {I18n} from '../../../../i18n'

export type RuleDialogProps = {
    open: boolean
    id?: string
    onConfirm: () => void
    onCancel: () => void
}

export const RuleDialog: FC<RuleDialogProps> = ({id, open, onConfirm, onCancel}) => {
    const isNew = !id

    useEffect(() => {
        const dialog = document.querySelector('dialog')
        if (open) {
            dialog?.showModal()
        } else {
            dialog?.close()
        }
    }, [open])

    return <dialog onCancel={onCancel}>
        <button onClick={onCancel} className={'dialog-cancel'}>&times;</button>
        <p>Greetings, one and all!</p>
        <form method="dialog">
            <div className={'actions'}>
                <button onClick={onCancel} className={'ghost'}><I18n code={'cancel'}/></button>
                <button onClick={onConfirm} className={'primary'}><I18n code={isNew ? 'create' : 'save'}/></button>
            </div>
        </form>
    </dialog>
}

