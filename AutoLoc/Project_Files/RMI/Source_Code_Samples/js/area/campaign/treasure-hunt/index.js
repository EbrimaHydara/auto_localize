const anchor = document.querySelectorAll('.js-anchor');

/**
 * nav link
 */
const FixedNav = () => {
    const scroll = window.scrollY;
    const nav = document.getElementById('js-nav');
    const fixed = document.getElementById('js-follow-btn');

    if (nav && fixed) {
        const isNavVisible = nav.getBoundingClientRect().top >= scroll - 1000;
        fixed.style.top = isNavVisible ? '-100%' : '0';
        fixed.style.visibility = isNavVisible ? 'hidden' : 'visible';
        fixed.setAttribute('aria-expanded', isNavVisible);
    }
};
window.addEventListener('scroll', () => {
    FixedNav();
});

document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = 64; // Header height
    document.querySelectorAll('a:not(.js-Modal)[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            var target = (href === "#" || href === "") ? document.documentElement : document.querySelector(href);
            if (target) {
                var position = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
});

anchor.forEach(function(element){

    element.addEventListener('click',function(){
        //アコーディオンの指定があったらターゲットのアコーディオンを開く
        const accordionname = element.dataset.accordion;
        if(accordionname){
            const accordion = document.getElementById(accordionname);
            accordion.setAttribute('aria-expanded', 'true');
            accordion.nextElementSibling.setAttribute('aria-hidden', 'false');
            accordion.nextElementSibling.style.display = "block";
        }
    });

});
