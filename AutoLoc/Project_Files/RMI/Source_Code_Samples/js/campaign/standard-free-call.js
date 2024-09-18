import SmoothScroll from "smooth-scroll";
new SmoothScroll('.js-under-prev-user-scroll', {
    speed: 100,
    offset: 40,
    emitEvents: true,
})

const trigger = document.getElementById('js-fixed-btn-trigger');
const fixedBtn = document.getElementById('js-fixed-btn');
let throttleTimeout;
const fixedTopBtn = () => {
    let scrollY = window.pageYOffset;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if (scrollY >= triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}
const throttle = (callback, delay) => {
    if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
            callback();
            throttleTimeout = null;
        }, delay);
    }
};
if (fixedBtn && trigger) {
    window.addEventListener('scroll', () => {
        throttle(fixedTopBtn, 200);
    });
}
