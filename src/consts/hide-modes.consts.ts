export const HIDE_MODES = {
    blur: 'blur',
    collapse: 'collapse',
} as const

export type HideModeKey = keyof typeof HIDE_MODES
