const nav = document.querySelectorAll('.js-hikari-nav-fixed');
const body = document.getElementsByTagName('body');
const overlay = document.querySelector('.js-overlay');

nav.forEach( (nav) => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const controls = nav.getAttribute('aria-controls');
        drawerMenu(controls);
    });
});

if (overlay != null) {
    overlay.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.setAttribute('aria-hidden', 'true');
        drawerMenu('js-drawer', 'close');
        body[0].style.top = '';
        body[0].style.position = '';
    });
}

function drawerMenu(controls, action) {
    const target = document.querySelector(`.${controls}`);
    const expanded = target.getAttribute('aria-expanded');

    if( expanded === 'true' || action === 'close') {
        target.setAttribute('aria-expanded', 'false');
        overlay.setAttribute('aria-hidden', 'true');
        const top = body[0].style.top;
        body[0].style.top = '';
        body[0].style.position = '';
        window.scrollTo(0, parseInt(top || '0') * -1);
    } else {
        target.setAttribute('aria-expanded', 'true');
        if(target.classList.contains('js-drawer')) {
            overlay.setAttribute('aria-hidden', 'false');
            body[0].style.top = `-${window.pageYOffset}px`;
            body[0].style.position = 'fixed';
        }
    }
}

if (nav[0]) {
    let timeoutId = '';
    let startPos = 0;
    let scrollUp = false;
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    window.addEventListener('scroll', ()=> {
        const scrollTop = window.pageYOffset;
        const currentPos = scrollTop;
        if( mediaQuery.matches ) {
            clearTimeout( timeoutId );
            if ( currentPos > startPos ) {
                if( !scrollUp ) {
                    nav[0].style.display = 'none';
                    scrollUp = true;
                }
            } else {
                if( scrollUp ) {
                    nav[0].style.display = 'flex';
                    scrollUp = false;
                }
            }
            timeoutId = setTimeout( ()=> {
                nav[0].style.display = 'flex';
                scrollUp = false;
            }, 500);

            startPos = currentPos;
        }
    });
}

// hikari application modal
require('Modaal');

const modal = ($target = null) => {
    const $drawer = $('#js-drawer');
    let $triggerOpen = null;

    if ($target === null) {
        $triggerOpen = $('.js-hikari-Modal');
    } else {
        $triggerOpen = $target.find('.js-hikari-Modal');
    }

    if ($triggerOpen.length < 1) {
        return;
    }
    const $triggerClose = $('.js-hikari-Modal_Close');
    const $body = $('body');
    const $html = $('html, body');
    const modalConfig = {
        background: '#4D4D4D',
        custom_class: 'g-hikari-Header_Modal',
        overlay_opacity: 0.5,
        after_close: function() {
            $body.removeClass('is-fixed-modal');
            if (typeof $body.attr('data-scrollTop') !== undefined) {
                const topValue = parseInt($body.attr('data-scrollTop'), 10);
                if (topValue > 0) {
                    console.log(topValue);
                    $body.css('top', 0).removeAttr('data-scrollTop');
                    $html.scrollTop(topValue);
                }
            }
        },
    };
    if ($triggerOpen.length > 0) {
        $triggerOpen.modaal(modalConfig);
    }
    $triggerClose.on('click', function() {
        $triggerOpen.modaal('close');
    });

    //modal background locking

    const modalLock = () =>  {
        const scrollPosition = window.pageYOffset;
        $body.css('top', `-${scrollPosition}px`);
        $body.addClass('is-fixed-modal');
        $body.attr('data-scrollTop', scrollPosition.toString());
    };

    $triggerOpen.on('click', () => {
        if ($drawer.attr('aria-expanded') === 'false') {
            modalLock();
        }
    });
};
modal($('.g-hikari-Header, .g-hikari-Footer_Cta, .hikari-simulation-Btn'));

const scrollAnim = () => {
    let target,
        targetP,
        scrollH,
        position;
    $('.modal-scroll').on('click', (e) => {
        e.preventDefault();
        target = $(e.currentTarget).attr('href');
        targetP = $(target).position();
        scrollH = $('.g-hikari-Header_Modal-scroll').scrollTop();
        position = targetP.top + scrollH;

        $('.g-hikari-Header_Modal-scroll').animate({
            scrollTop: position
        }, 100);
    });
};
scrollAnim();
