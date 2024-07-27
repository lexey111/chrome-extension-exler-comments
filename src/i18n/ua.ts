import {i18nKey} from './index'

export const UA:Record<i18nKey, string> = {
    title: 'Exler\'s site | вогнегасник коментарів',
    enable_processing: 'Увімкнути обробку',
    has_been_hidden: 'приховано',
    total: 'всього оброблено',
    in_current_session: 'В поточній сесії',
    for_all_time: 'За весь час',
    reset_stat: 'Скинути статистику',
    settings: 'Налагодження',
    hide_mode: 'Режим приховування',
    select_mode: 'Оберіть режим приховування:',
    select_mode_default: 'Стандартний (розмиття)',
    select_mode_collapse: 'Схлопування',
    select_mode_overlay: 'Перекриття',
    preview: 'Попередній перегляд',
    open_settings_page: 'Відкрити налагодження...'
} as const