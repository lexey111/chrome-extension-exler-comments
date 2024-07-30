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
    rules: 'Правила',
    no_rules: 'Пока нет ни одного правила. Пожалуйста, нажмите кнопку "Добавить" ниже, чтобы создать первое.',
    add_rule: 'Добавить правило',
    cancel: 'Отмена',
    save: 'Сохранить',
    create: 'Создать',
    user_placeholder: 'Иван Иванов',
    user_name_nick: 'Имя пользователя (ник)',
    create_record: 'Создать запись',
    save_record: 'Сохранить запись',
    hide_from: 'Скрыть если "от кого"',
    hide_to: 'Скрыть если "кому"',
    only_negative: 'Только если отрицательный +/- баланс',
    please_select_from_to: 'Пожалуйста, выберите "От кого", "Кому" или оба варианта',
    user_already_exists: 'Это имя пользователя уже существует в правилах',
    delete: 'Удалить',
    confirm: 'Подтвердить',
    are_you_sure: 'Вы уверены, что хотите удалить запись?',
} as const