export const HIDE_MODES = {
    blur: 'blur',
    collapse: 'collapse',
    overflow: 'overflow',
} as const

export type HideModeKey = keyof typeof HIDE_MODES
