import {i18nKey} from './index'

export const RU: Record<i18nKey, string> = {
    title: 'Exler\'s site | огнетушитель комментариев',
    enable_processing: 'Включить обработку',
    has_been_hidden: 'скрыто',
    total: 'всего обработано',
    in_current_session: 'В текущей сессии',
    for_all_time: 'За всё время',
    reset_stat: 'Сбросить статистику',
    settings: 'Настройки',
    hide_mode: 'Режим скрытия',
    select_mode: 'Выберите режим скрытия:',
    select_mode_default: 'Стандартный (простое размытие)',
    select_mode_collapse: 'Схлопывание',
    select_mode_overlay: 'Наложение',
    preview: 'Предварительный просмотр',
    open_settings_page: 'Открыть настройки...',
    rules: 'Правила'
} as const