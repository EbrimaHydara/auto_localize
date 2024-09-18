import ScrollHint from 'scroll-hint';

const fixedNav = document.getElementById('js-fixed-nav');
const bottomApply = document.getElementById('js-bottom-apply');
let lastScrollPosition = 0;
let flgbottomApplyAppear = false;
const mailPortabilityLayoutNavTopLink = document.getElementsByClassName('mail_portability-Layout_Nav-top-link');
mailPortabilityLayoutNavTopLink.forEach(element => {
    element.onclick = function() {
        setTimeout(function() {
            fixedNav.setAttribute('aria-hidden', true);
        },750);
    }
});

window.addEventListener('scroll', function() {
    const fixedNavTarget = document.getElementById('js-fixed-nav-target');
    const fixedNavTargetRect = fixedNavTarget.getBoundingClientRect();
    const windowHeight = window.innerHeight
    if(fixedNavTargetRect.top < windowHeight && fixedNavTargetRect.bottom) {
        const currentScrollPosition = window.scrollY;
        if(currentScrollPosition > lastScrollPosition) {
            fixedNav.setAttribute('aria-hidden', true);
        } else {
            fixedNav.setAttribute('aria-hidden', false);
        }
        lastScrollPosition = currentScrollPosition;
    } else {
        fixedNav.setAttribute('aria-hidden', true);
    }

    const bottomApplyTarget = document.getElementById('sec2');
    const bottomApplyTargetRect = bottomApplyTarget.getBoundingClientRect();

    if(bottomApplyTargetRect.bottom < windowHeight && bottomApplyTargetRect.bottom) {
        bottomApply.setAttribute('aria-expanded', false);
        if(!flgbottomApplyAppear) {
            document.getElementsByTagName('body')[0].style.paddingBottom = `${bottomApply.getBoundingClientRect().height}px`
            flgbottomApplyAppear = true;
        }
    } else {
        bottomApply.setAttribute('aria-expanded', true);
    }
});

$(function(){
    $('a[href^="#"]').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

window.addEventListener('DOMContentLoaded', ()=> {
    new ScrollHint('.js-scrollable', {
        i18n: {
        scrollable: 'スクロール\nできます'
        }
    });
});
