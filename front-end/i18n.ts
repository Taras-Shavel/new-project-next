import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            myProxiesZero: "My proxies (0)",
            purchaseProxies: "Purchase proxies",
            dashboard: "Dashboard",
            myProxies: "My proxies",
            topUpBalance: "Top up balance",
            transactions: "Transactions",
            support: "Support",
            balance: "Balance",
            overview: "OverView",
            proxies: "Proxies",
            amountSpent: "Amount spent",
            latestTransactions: "Latest transactions",
            name: "Name",
            method: "Method",
            created: "Created on",
            amount: "Amount",
            status: "Status",
            view: "View",
            active: "Active",
            cancelled: "Cancelled",
            previous: "Previuos",
            next: "Next",

        }
    },
    ua: {
        translation: {
            myProxiesZero: "Мої проксі (0)",
            purchaseProxies: "Придбати проксі",
            dashboard: "Панель управління",
            myProxies: "Мої проксі",
            topUpBalance: "Поповнити баланс",
            transactions: "Транзакції",
            support: "Підтримка",
            balance: "Баланс",
            overview: "Огляд",
            proxies: "Проксі",
            amountSpent: "Витрачена сума",
            latestTransactions: "Останні транзакції",
            name: "Ім'я",
            method: "Метод",
            created: "Створено",
            amount: "Сума",
            status: "Статус",
            view: "Переглянути",
            Active: "Активний",
            Cancelled: "Скасований",
            previous: "Попередній",
            next: "Наступний",
        }
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Мова за замовчуванням
        fallbackLng: 'en', // Мова, яку використовувати, якщо переклад відсутній
        interpolation: {
            escapeValue: false, // React вже екранує значення, тому escape не потрібен
        },
    });

export default i18n;
