export type Rule = {
    id: string,
    user: string
    hideFrom: boolean
    hideTo: boolean
    onlyNegativeBalance: boolean
}

export type Rules = Array<Rule>