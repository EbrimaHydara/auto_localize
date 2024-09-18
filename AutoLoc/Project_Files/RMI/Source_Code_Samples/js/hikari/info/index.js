import ScrollHint from 'scroll-hint';

window.addEventListener('DOMContentLoaded', ()=> {
    new ScrollHint('.js-scrollable', {
        i18n: {
            scrollable: 'スクロール\nできます'
        }
    });
});