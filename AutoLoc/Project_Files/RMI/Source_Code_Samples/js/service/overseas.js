const trigger = document.getElementById('js-trigger');
const fixedBtn = document.getElementById('js-fixed-btn');

const adjustPadding = (wrapperHeight, target) => {
    target.style.paddingBottom = `${wrapperHeight}px`
}

const fixedBottomBtn = () => {
    let scrollY = window.pageYOffset;
    if (!fixedBtn || !trigger) return;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;
    if (scrollY > triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}
window.addEventListener('scroll', fixedBottomBtn, { passive: true });

const footerElem = document.getElementsByClassName('g-Footer')

if (footerElem[0] && fixedBtn) {
    const e = fixedBtn
    let wrapperHeight = 100
    setTimeout(() => {
    wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
    adjustPadding(wrapperHeight, footerElem[0])
    }, 500)
    window.addEventListener('resize', () => {
    wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
    adjustPadding(wrapperHeight, footerElem[0])
    })
}