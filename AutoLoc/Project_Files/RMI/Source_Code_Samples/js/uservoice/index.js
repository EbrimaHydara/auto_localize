// copy protection
const protectedElms = document.querySelectorAll('.js-copy-protect');
protectedElms.forEach(elm => {
  elm.onselectstart =  () => false;
  elm.onmousedown =  () => false;
});

// fixed button
function fixedBottomBtn() {
    let scrollY = window.pageYOffset;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn || !trigger ) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn);
