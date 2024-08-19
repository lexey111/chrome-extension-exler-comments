import {I18nKey} from './index'

export const UA: Record<I18nKey, string> = {
    title: 'Exler\'s site | вогнегасник коментарів',
    enable_processing: 'Увімкнути обробку',
    statistics: 'Статистика',
    has_been_hidden: 'приховано',
    total: 'всього оброблено',
    in_current_session: 'В поточній сесії',
    for_all_time: 'За весь час',
    reset_stat: 'Скинути статистику',
    settings: 'Налагодження',
    hide_mode: 'Режим приховування',
    select_mode: 'Оберіть режим приховування:',
    select_mode_default: 'Стандартний (просте розмиття)',
    select_mode_collapse: 'Схлопування',
    select_mode_overlay: 'Перекриття',
    preview: 'Попередній перегляд',
    open_settings_page: 'Відкрити налагодження...',
    rules: 'Правила',
    no_rules: 'Поки що немає жодного правила. Будь ласка, натисніть кнопку "Додати" нижче, щоб створити перше.',
    no_rules_popup: 'Немає правил для застосування. Будь ласка, натисніть "Відкрити налагодження" нижче, щоб задати правила.',
    add_rule: 'Додати правило',
    cancel: 'Відміна',
    save: 'Зберегти',
    create: 'Створити',
    user_placeholder: 'Гриць Якович Вареник',
    user_name_nick: 'Ім\'я користувача (нік)',
    create_record: 'Створити запис',
    save_record: 'Зберегти запис',
    hide_from: 'Приховати "від кого"',
    hide_to: 'Приховати "кому"',
    only_negative: 'Тільки якщо баланс +/- від\'ємний',
    please_select_from_to: 'Будь ласка, виберіть "від кого", "кому" або обидва варіанти',
    user_already_exists: 'Це ім\'я користувача вже існує в правилах',
    delete: 'Видалити',
    confirm: 'Підтвердження',
    are_you_sure: 'Ви впевнені, що хочете видалити запис?',
    star_user_hint: 'Ви можете використовувати ім\'я користувача "*" та "Тільки якщо від\'ємний...", щоб приховати всі коментарі з від\'ємним балансом',
    mode_blur: 'розмивання',
    mode_overlay: 'перекриття',
    mode_collapse: 'згортання',
} as const