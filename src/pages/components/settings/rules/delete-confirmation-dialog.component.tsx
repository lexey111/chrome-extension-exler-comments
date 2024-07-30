import {h} from 'preact'
import {FC, useEffect} from 'preact/compat'
import {I18n} from '../../../../i18n'

export type DeleteConfirmationDialogProps = {
    open: boolean
    onConfirm: () => void
    onCancel: () => void
}

export const DeleteConfirmationDialog: FC<DeleteConfirmationDialogProps> = ({open, onConfirm, onCancel}) => {
    useEffect(() => {
        const dialog = document.querySelector('dialog#confirm_delete')
        if (!dialog) {
            return
        }

        if (open) {
            (dialog as HTMLDialogElement).showModal()
        } else {
            (dialog as HTMLDialogElement)?.close()
        }
    }, [open])

    return <dialog onCancel={onCancel} id={'confirm_delete'}>
        <button onClick={onCancel} className={'dialog-cancel'}>&times;</button>
        <h2><I18n code={'confirm'}/></h2>

        <div className={'dialog-body'}>
            <I18n code={'are_you_sure'}/>
        </div>

        <form method="dialog">
            <div className={'actions'}>
                <button
                    onClick={onCancel}
                    className={'ghost'}
                    autofocus>
                    <I18n code={'cancel'}/>
                </button>

                <button
                    onClick={onConfirm}
                    className={'danger'}>
                    <I18n code={'delete'}/>
                </button>
            </div>
        </form>
    </dialog>
}

