// customize accordion

const mediaQuery = window.matchMedia('(min-width: 769px)');
const accordionTriggers = $('.js-support-Accordion_Trigger');
let isStartedClickEvent = false;

const handleMediaQuery = ($self, $panel, mediaQuery) => {
    if (mediaQuery.matches) {
        $self.attr('aria-expanded', 'true');
        $panel.attr('aria-hidden', 'false');
        $panel.show();
    }
    else {
        $self.attr('aria-expanded', 'false');
        $panel.attr('aria-hidden', 'true');
        $panel.hide();
    }
}

const eventAccordionButtonClick = ($self, $panel) => {
    let opt = {
        duration: 0,
        queue: false
    };
    let effect = $self.data('effect');

    $self.on('click', function () {
        effect === false ? opt.duration = 0 : opt.duration = 200;

        if ($self.attr('aria-expanded') === 'true') {
            $self.attr('aria-expanded', 'false');
            $panel.attr('aria-hidden', 'true');
            $panel.stop().slideUp(opt);
        } else {
            $self.attr('aria-expanded', 'true');
            $panel.attr('aria-hidden', 'false');
            $panel.stop().slideDown(opt);
        }
    });
}

const eachAccordionTriggers = (mediaQuery) => {
    accordionTriggers.each(function () {
        let $self = $(this);
        let $panel = $('#' + $self.attr('aria-controls'));

        if ($panel[0]) {
            if (isStartedClickEvent) {
                handleMediaQuery($self, $panel, mediaQuery)
            }
            else {
                handleMediaQuery($self, $panel, mediaQuery);
                eventAccordionButtonClick($self, $panel);
            }
        }
    });
    isStartedClickEvent = true;
}

mediaQuery.addEventListener("change", eachAccordionTriggers);
eachAccordionTriggers(mediaQuery);

// If the url has a hash

$(function () {
    const hash = location.hash;
    if (hash && hash.indexOf('category-') != -1) {
        const headerHeight = $('.js-fixed-header-wrap').height();
        const target = $(hash).offset().top - headerHeight;
        $('body,html').animate({ scrollTop: target }, 400, 'swing');
        if (!mediaQuery.matches) {
            $(hash).find('.js-support-Accordion_Trigger').attr('aria-expanded', 'true');
            $(hash).find('.js-support-Accordion_Panel').css('display', 'block').attr('aria-hidden', 'false');
        }
    }
});

// tab cookie

let deadline = 30;
let date = new Date();
date.setTime(date.getTime() + deadline * 24 * 60 * 60 * 1000);
const cookies = document.cookie;
const cookiesArray = cookies.split('; ');
const tabMenu1 = document.getElementById('tab-menu1');
const tabMenu2 = document.getElementById('tab-menu2');
let elSprit;

window.onload = function () {
    if (navigator.cookieEnabled) {
        cookiesArray.forEach(el => {
            elSprit = el.split('=');
            if (elSprit[0] == 'expires') {
                if (new Date(elSprit[1]).getTime() > new Date().getTime()) {
                    cookiesArray.forEach(el => {
                        elSprit = el.split('=');
                        if (elSprit[0] == 'selectTab') {
                            if (elSprit[1] == 1) {
                                document.getElementById('tab-menu1').setAttribute('aria-selected', true);
                                document.getElementById('tab-content1').setAttribute('aria-hidden', false);
                                document.getElementById('tab-menu2').setAttribute('aria-selected', false);
                                document.getElementById('tab-content2').setAttribute('aria-hidden', true);
                            } else {
                                document.getElementById('tab-menu1').setAttribute('aria-selected', false);
                                document.getElementById('tab-content1').setAttribute('aria-hidden', true);
                                document.getElementById('tab-menu2').setAttribute('aria-selected', true);
                                document.getElementById('tab-content2').setAttribute('aria-hidden', false);
                            }
                        }
                    });
                }
            }
        });

        document.cookie = "expires=" + date;

        tabMenu1.onclick = function () {
            document.cookie = "selectTab=1";
        }
        tabMenu2.onclick = function () {
            document.cookie = "selectTab=2";
        }
    }
}
