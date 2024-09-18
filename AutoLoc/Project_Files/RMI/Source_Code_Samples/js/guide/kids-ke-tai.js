import { themeStr } from '../common/theme';
import SmoothScroll from "smooth-scroll";
new SmoothScroll('.js-fixedMenuScroll', {
    speed: 400,
    offset: window.matchMedia(`(min-width: ${themeStr.min.l})`).matches ? 76 : 64,
    emitEvents: true,
});

const fixedElements = () => {
    let scrollY = window.scrollY;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');
    const usualNav = document.getElementById('js-usual-nav');
    const fixedNav = document.getElementById('js-fixed-nav');

    const triggerRect = trigger.getBoundingClientRect();
    const usualNavRect = usualNav.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;
    const usualNavY = scrollY + usualNavRect.top;

    if (scrollY > triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
    if (scrollY > usualNavY) {
        fixedNav.setAttribute('aria-hidden', 'false');
    } else {
        fixedNav.setAttribute('aria-hidden', 'true');
    }
}
window.addEventListener('scroll', fixedElements, { passive: true });

