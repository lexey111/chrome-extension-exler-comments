export const hideModeCodes = ['default', 'overlay', 'collapse'] as const

export type HideMode = typeof hideModeCodes[number]