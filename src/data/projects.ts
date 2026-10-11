export const TELEGRAM = 'https://t.me/aiarchitectorrr'
export const TELEGRAM_LABEL = 't.me/aiarchitectorrr'
export const INSTAGRAM = 'https://www.instagram.com/automatorrr/'
export const GITHUB = 'https://github.com/automatorr192-dev'

type Media = { src: string; widths: number[]; w: number; h: number; portrait?: boolean; alt: string }

export type Project = {
  id: string
  name: string
  kind: string
  task: string
  solution: string
  note?: string
  stack: string
  demo?: string
  code?: string
  media?: Media
  metric?: { value: string; label: string }
}

export const projects: Project[] = [
  {
    id: 'ai-crm',
    name: 'AI-CRM',
    kind: 'CRM с ИИ-разметкой заявок',
    task: 'Заявки рассыпаны по директу, почте и форме на сайте. Пока до них дойдут руками, клиент уходит к тому, кто ответил первым.',
    solution: 'Все заявки попадают в одну воронку. Модель подписывает тему, срочность и черновик ответа, уведомление приходит в Telegram и MAX. Роли, напоминания и журнал действий.',
    note: 'Требования собраны из 36 реальных ТЗ на CRM с бирж. 159 тестов.',
    stack: 'Python · FastAPI · SQLAlchemy · Postgres · OpenRouter · aiogram · Docker',
    code: 'https://github.com/automatorr192-dev/ai-crm',
    media: { src: 'works/ai-crm', widths: [480, 800, 1200], w: 1200, h: 750, alt: 'Доска сделок AI-CRM: колонки стадий с карточками заявок' },
  },
  {
    id: 'document-helper',
    name: 'Документ-хелпер',
    kind: 'Разбор договоров в Telegram',
    task: 'Договор подписывают все, а читают до конца единицы. Плохой пункт замечают, когда деньги уже сгорели. Юрист берёт от 3 000 ₽ и отвечает за день-два.',
    solution: 'Бросаешь PDF или Word в мини-апп. Опасные пункты подсвечиваются в тексте, рядом перевод на человеческий и безопасная редакция, на выходе протокол разногласий в Word.',
    stack: 'Python · aiogram · Pydantic · pdfplumber · OpenRouter · Docker',
    code: 'https://github.com/automatorr192-dev/document-helper',
    metric: { value: '1 минута', label: 'и около 8 ₽ на первый проход по договору' },
  },
  {
    id: 'quiz-bot',
    name: 'Квиз-бот',
    kind: 'Карта автоматизаций для бизнеса',
    task: 'Владелец тонет в рутине и не знает, что автоматизировать первым. Типовые советы не учитывают его нишу и размер команды.',
    solution: 'Семь вопросов в Telegram или MAX, и модель собирает персональную карту автоматизаций. Лид с ответами сразу уходит менеджеру, есть выгрузка в Excel и CRM.',
    stack: 'Python · aiogram 3 · MAX Bot API · OpenRouter · SQLite · Docker',
    metric: { value: '2 минуты', label: 'от первого вопроса до готовой карты' },
  },
  {
    id: 'nebula',
    name: 'Nebula',
    kind: 'Магазин в Telegram',
    task: 'Продавать цифровые товары, не уводя покупателя из Telegram в браузер.',
    solution: 'Мини-апп с каталогом, карточкой товара и корзиной на нативной главной кнопке Telegram. Бот открывает витрину одним нажатием.',
    note: 'Оплата пока имитируется, Telegram Stars — следующий этап.',
    stack: 'Python · aiogram 3 · FastAPI · Telegram Mini Apps · Docker',
    demo: 'https://automatorr192-dev.github.io/nebula-shop/',
    code: 'https://github.com/automatorr192-dev/nebula-shop',
    media: { src: 'works/nebula', widths: [360, 720], w: 720, h: 1558, portrait: true, alt: 'Каталог Nebula в мини-аппе Telegram' },
  },
  {
    id: 'glyanets',
    name: 'Глянец',
    kind: 'Запись на детейлинг',
    task: 'Запись по телефону и в переписке съедает время администратора, а клиент не видит цену и свободное время.',
    solution: 'Мини-апп: услуга и класс машины, сразу цена, свободные слоты на две недели и запись в пару касаний. Клиент видит, на каком этапе работа над машиной.',
    note: 'Демо: записи хранятся в браузере.',
    stack: 'Vite · React 19 · TypeScript · Telegram Mini Apps',
    demo: 'https://automatorr192-dev.github.io/glyanets/',
    code: 'https://github.com/automatorr192-dev/glyanets',
    media: { src: 'works/glyanets', widths: [360, 720], w: 720, h: 1558, portrait: true, alt: 'Главный экран Глянца: машина в работе и список услуг' },
  },
  {
    id: 'rovno',
    name: 'Ровно',
    kind: 'Лендинг ремонта квартир',
    task: 'Заказчик ремонта боится, что смета вырастет, а сроки уедут.',
    solution: 'Сайт продаёт главное: смета в договоре, оплата по этапам, фотоотчёт каждый день. Этапы ремонта собраны в 3D-сцену, калькулятор считает цену и срок.',
    note: 'Компания вымышленная.',
    stack: 'HTML · CSS · JavaScript · Three.js',
    demo: 'https://automatorr192-dev.github.io/rovno/',
    code: 'https://github.com/automatorr192-dev/rovno',
    media: { src: 'works/rovno', widths: [480, 800, 1200], w: 1200, h: 750, alt: 'Первый экран лендинга Ровно' },
  },
  {
    id: 'pech',
    name: 'Печь',
    kind: 'Сайт сети ресторанов',
    task: 'Гостю сети из восьми ресторанов нужно быстро найти ближайший и забронировать стол.',
    solution: 'Меню с фотографиями, восемь адресов на схеме Москвы с отметкой «открыто сейчас» и бронь в несколько шагов. Компанию больше 12 человек сайт ведёт в банкет.',
    note: 'Сеть вымышленная.',
    stack: 'HTML · CSS · JavaScript',
    demo: 'https://automatorr192-dev.github.io/pech/',
    code: 'https://github.com/automatorr192-dev/pech',
    media: { src: 'works/pech', widths: [480, 800, 1200], w: 1200, h: 750, alt: 'Первый экран сайта Печь' },
  },
  {
    id: 'capy',
    name: '$CAPY',
    kind: 'Лендинг мемкоина',
    task: 'За несколько секунд передать характер монеты и ответить осторожному покупателю: сожжена ли ликвидность, есть ли налог.',
    solution: 'Англоязычный лендинг с иллюстрированным первым экраном, «правилами дома» вместо whitepaper, живым графиком и FAQ.',
    note: 'Монета вымышленная.',
    stack: 'HTML · CSS · JavaScript',
    demo: 'https://automatorr192-dev.github.io/capy/',
    code: 'https://github.com/automatorr192-dev/capy',
    media: { src: 'works/capy', widths: [480, 800, 1200], w: 1200, h: 750, alt: 'Первый экран лендинга $CAPY с капибарой' },
  },
]
