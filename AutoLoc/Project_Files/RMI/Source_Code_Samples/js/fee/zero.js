// fixed button

(function(){
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');
    function fixedBottomBtn() {
        let scrollY = window.pageYOffset;
        const triggerRect = trigger.getBoundingClientRect();
        const triggerY = scrollY + triggerRect.top;

        if ( scrollY + window.innerHeight > triggerY ) {
            fixedBtn.setAttribute('aria-expanded', 'true');
        } else {
            fixedBtn.setAttribute('aria-expanded', 'false');
        }
    }
    if( fixedBtn && trigger ) {
        window.addEventListener('scroll', fixedBottomBtn);
    }
})();
