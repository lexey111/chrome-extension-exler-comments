export type Rule = {
    id: string,
    user: string
    hideFrom: boolean
    hideTo: boolean
    onlyNegativeBalance: boolean
}

export type Rules = Array<Rule>

export const defaultRule = {
    id: 'default', user: '*', onlyNegativeBalance: true, hideFrom: false, hideTo: false
}