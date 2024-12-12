import type {NavLink, NavLinkSocials} from "@/types/navigation";

export const NavigationList:NavLink[] = [
    {
        href: '/crypto',
        name: 'Криптовалюта'
    },
    {
        href: '/stock-market',
        name: 'Фондовый рынок'
    },
    {
        href: '/earn',
        name: 'Earn 🔥'
    },
    {
        href: '/p2p',
        name: 'P2P'
    },
    {
      href: '/lanch',
      name: 'Лаунч'
    },
    {
        href: '/rewards',
        name: 'Вознаграждения',
        isDisabled: true
    }
];

export const NavigationListFooter1:NavLink[] = [
    {
        href: '/crypto',
        name: 'Криптовалюта'
    },
    {
        href: '/stoke-market',
        name: 'Фондовый рынок'
    },
    {
        href: '/p2p',
        name: 'P2P'
    },
    {
        href: '/earn',
        name: 'Earn'
    },
    {
        href: '/laynch',
        name: 'Лаунчпад'
    },
    {
        href: '/academy',
        name: 'Академия'
    },
]

export const NavigationListFooter2:NavLink[] = [
    {
        href: '/about',
        name: 'О нас'
    },
    {
        href: '/partners',
        name: 'Партнёрская программа'
    },
    {
        href: '/stock-news',
        name: 'Биржевые новости'
    },
    {
        href: '/economy',
        name: 'Экономический календарь'
    }
]

export const NavigationListFooter3:NavLink[] = [
    {
        href: '/aml',
        name: 'AML/KYC процедуры'
    },
    {
        href: '/cookies',
        name: 'Использование файлов Cookies'
    },
    {
        href: '/policy',
        name: 'Политика конфиденциальности'
    },
    {
        href: '/use',
        name: 'Условия пользования'
    }
]

export const NavListSocials:NavLinkSocials[] = [
    {
        href: '/img/icon-tg.svg',
        name: 'TG'
    },
    {
        href: '/img/icon-play.svg',
        name: 'Youtube'
    },
    {
        href: '/img/icon-x.svg',
        name: 'X'
    }
]
