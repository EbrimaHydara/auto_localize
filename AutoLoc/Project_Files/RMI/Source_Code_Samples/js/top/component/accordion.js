export const accordion = () => {
    const topImportantNotices = document.getElementById("js-top-Important_Notices");
    const accordionTop = document.getElementById('accordion-top');
    const accordionContentTop = document.getElementById('accordion-content-top');
    const noticesClose = sessionStorage.getItem('important-notices-close');

    accordionTop.addEventListener('click', () => {
        setTimeout(() => {
            if (accordionTop.getAttribute('aria-expanded') === 'false') {
                sessionStorage.setItem('important-notices-close', true);
            } else {
                sessionStorage.setItem('important-notices-close', false);
            }
        }, 0);
    });

    window.addEventListener('DOMContentLoaded', () => {
        const staticContents = document.getElementById('attention-info').childElementCount;

        if (staticContents >= 1) {
            topImportantNotices.style.display = 'block';
        }

        if (noticesClose === 'true') {
            accordionTop.setAttribute('aria-expanded', false);
            accordionContentTop.setAttribute('aria-hidden', true);
        } else {
            accordionTop.setAttribute('aria-expanded', true);
            accordionContentTop.setAttribute('aria-hidden', false);
        }
    });
};
