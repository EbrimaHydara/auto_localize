/**
 * fixed bottom btn
 */
const fixedBottomBtn = () => {
    let scrollY = window.scrollY;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');
    const footerArea = document.getElementsByClassName('areaCampaign-Layout_Footer')[0];

    if (!fixedBtn || !trigger) return;
    const fixedRect = fixedBtn.getBoundingClientRect().height;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if (scrollY > triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
        footerArea.style.paddingBottom = `${fixedRect}px`;
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn, { passive: true });
