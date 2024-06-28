// plugins/i18n.js
import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(async ({ vueApp }) => {
    const messages = {
        en: await import('../locales/en.json'),
        ru: await import('../locales/ru.json'),
        am: await import('../locales/am.json'),
    };

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages,
    });

    vueApp.use(i18n);

    return {
        provide: {
            i18n,
        },
    };
});
