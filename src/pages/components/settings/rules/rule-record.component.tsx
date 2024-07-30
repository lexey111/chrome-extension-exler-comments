import {h} from 'preact'
import {FC, useCallback} from 'preact/compat'
import {Rule} from '../../../types'
import {I18n} from '../../../../i18n'

export type RuleProps = {
    rule: Rule
    onClick: (id: string) => void
    onDelete: (id: string) => void
}

export const RuleRecord: FC<RuleProps> = ({rule, onClick, onDelete}) => {
    const handleClick = useCallback(() => {
        onClick(rule.id)
    }, [rule, onClick])

    return <tr>
        <td onClick={handleClick}>{rule.user}</td>
        <td onClick={handleClick}>{rule.hideTo && <span className={'checkmark'}></span>}</td>
        <td onClick={handleClick}>{rule.hideFrom && <span className={'checkmark'}></span>}</td>
        <td onClick={handleClick}>{rule.onlyNegativeBalance && <span className={'checkmark'}></span>}</td>
        <td className={'actions'}>
            <button className={'action-danger'} onClick={() => onDelete(rule.id)}><I18n code={'delete'}/></button>
        </td>
    </tr>
}

