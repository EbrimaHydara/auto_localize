require('Modaal');

export const modalApp = ($target = null) => {
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
        console.log('modal triggered');
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

    //const modalTargets = document.querySelectorAll('.js-hikari-Modal');
    $triggerOpen.on('click', () => {
        modalLock();
    });
};
