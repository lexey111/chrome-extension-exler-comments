export type Rule = {
    id: string,
    user: string
    hideFrom: boolean
    hideTo: boolean
    hideBranch: boolean
    onlyNegativeBalance: boolean
}

export type Rules = Array<Rule>