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

$(function() {
    let $triggers = null;
    $triggers = $('.js-tab-btn');

    const switchTabContent = () => {
        if ($triggers.length < 1) return
        
        $triggers.each(function() {
            const tab = $(this)[0];
            const items = tab.querySelectorAll('*[role="tab-btn"]');
            const contents = tab.querySelectorAll('*[role="tab-content"]');
        
            items.forEach(item => {
                item.addEventListener('click', (e) => {
                    let self = e.currentTarget;
                    let target= document.getElementById(self.getAttribute('aria-controls'));
        
                    items.forEach(item => {
                        item.setAttribute('aria-selected', false);
                    });
                    contents.forEach(content => {
                        content.setAttribute('aria-hidden', true);
                    });
                    self.setAttribute('aria-selected', true);
                    target.setAttribute('aria-hidden', false);
                });
            });
        });
    }
    switchTabContent();
});