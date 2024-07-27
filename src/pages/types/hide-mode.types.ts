export const hideModeCodes = ['default', 'collapse', 'overlay'] as const

export type HideMode = typeof hideModeCodes[number]