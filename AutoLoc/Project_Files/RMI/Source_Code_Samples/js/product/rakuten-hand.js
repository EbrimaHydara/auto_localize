import ScrollMagic from 'scrollmagic';
import ImageCompare from 'image-compare-viewer';
import Lottie from 'lottie-web';

$(function() {
    const $arrow = $('#js-arrow > span');
    const $navlist = $('.js-mini-nav > li');
    const $spnav= $('.js-sp-nav');
    const mobile = window.matchMedia('(max-width:768px)').matches;

    // // section1
    // ////////////////////////////////////////////////////////////////////
    let controller = new ScrollMagic.Controller();

    // nav
    ////////////////////////////////////////////////////////////////////
    let nav = new ScrollMagic.Scene({
        triggerElement: '#nav',
        triggerHook: 'onLeave'
    });

    nav.setPin('#nav')
    // .addIndicators({ name: 'nav' })
    .addTo(controller);

    // for max-width 768px
    $arrow.on('click', function() {
        let $this = $(this);
        if ($this.hasClass('js-expanded')) {
            $this.removeClass('js-expanded').addClass('js-close');
            $spnav.slideUp();
        } else {
            $this.removeClass('js-close').addClass('js-expanded');
            $spnav.slideDown();
        }
    });

    $navlist.on('click', function(e) {
        // e.preventDefault();
        let $this = $(this);
        let id = $this.find('a').attr('href');
        let offset = $(id).offset().top;
        let pos = Math.floor(offset);

        if( id === '#section2' ) {
            pos = pos - 64;
        } else {
            pos = pos - 64 - 16;
        }
        $('html, body').animate({ scrollTop: pos });

        if (mobile) {
            $spnav.slideUp('fast');
            $arrow.removeClass('js-expanded');
        }
    });

    // section4
    ////////////////////////////////////////////////////////////////////
    const sec4 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onCenter'
    });

    sec4.setClassToggle('#section4 img', 'js-fadein-model')
    .addTo(controller);



    // section5
    ////////////////////////////////////////////////////////////////////
    const sec5 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onCenter'
    });

    sec5.setClassToggle('.product-Rakuten-hand_Section-5-content-finger', 'js-slide')
    .addTo(controller);



    // section7
    ////////////////////////////////////////////////////////////////////
    const tab = $('[role="camera"]'),
    camerapanel = $('[role="camerapanel"]');

    tab.on('click', (event) => {
        const _self = $(event.currentTarget),
            select = _self.attr('aria-selected'),
            id = _self.attr('aria-controls'),
            id_body = $('#' + id);

        if (select === 'true') return;

        camerapanel.attr('aria-hidden', true);
        id_body.attr('aria-hidden', false);

        tab.attr('aria-selected', false);
        _self.attr('aria-selected', true);
    });


    let fCounter = 4;

    $('.product-Rakuten-hand_Section-7-content-range-down').on('click', (event) => {
        fCounter--;
        if (fCounter <= 0) {
            fCounter = 0;
            $(event.currentTarget).addClass('disable');
        }
        if(fCounter !== 0) $('.product-Rakuten-hand_Section-7-content-range-up').removeClass('disable');
        $('.product-Rakuten-hand_Section-7-content-portlate-image').hide();
        $(`.product-Rakuten-hand_Section-7-content-portlate-image-${fCounter}`).show();
    });

    $('.product-Rakuten-hand_Section-7-content-range-up').on('click', (event) => {
        fCounter++;
        if (fCounter >= 8) {
            fCounter = 8;
            $(event.currentTarget).addClass('disable');
        }
        if(fCounter !== 8) $('.product-Rakuten-hand_Section-7-content-range-down').removeClass('disable');
        $('.product-Rakuten-hand_Section-7-content-portlate-image').hide();
        $(`.product-Rakuten-hand_Section-7-content-portlate-image-${fCounter}`).show();
    });



    // section8
    ////////////////////////////////////////////////////////////////////
    const element = document.getElementById('image-compare');
    const options = {
        // UI Theme Defaults
        controlColor: "#FFFFFF",
        controlShadow: true,
        addCircle: true,
        addCircleBlur: true,
        // Label Defaults
        showLabels: false,
        labelOptions: {
            before: 'Before',
            after: 'After',
            onHover: false
        },

        // Smoothing
        smoothing: true,
        smoothingAmount: 100,

        // Other options
        hoverStart: false,
        verticalMode: false,
        startingPoint: 50,
        fluidMode: false
    };

    new ImageCompare(element, options).mount();

    const beauty = $('[role="beauty"]'),
    animation = $('[role="animation"]');
    const imgArray = document.querySelectorAll('.product-Rakuten-hand_Section-8-content-animation-image');

    beauty.on('click', (event) => {
        const select = $(event.currentTarget).attr('aria-selected');
        if (select === 'true') return;
        $('.product-Rakuten-hand_Section-8-content-compare-image').show();
        $('.product-Rakuten-hand_Section-8-content-animation').hide();
        $(event.currentTarget).attr('aria-selected', true);
        animation.attr('aria-selected', false);
    });
    animation.on('click', (event) => {
        const select = $(event.currentTarget).attr('aria-selected');
        if (select === 'true') return;
        $('.product-Rakuten-hand_Section-8-content-compare-image').hide();
        $('.product-Rakuten-hand_Section-8-content-animation').show();
        $(event.currentTarget).attr('aria-selected', true);
        beauty.attr('aria-selected', false);
    });

    const viewSlide = (className, slideNo = -1) => {
        if (slideNo >= 0) imgArray[slideNo].style.opacity = 0;
        slideNo++;
        if (slideNo >= imgArray.length) slideNo = 0;
        imgArray[slideNo].style.opacity = 1;
        setTimeout(() => {viewSlide(className, slideNo);}, 1000);
    };
    viewSlide();



    // section9
    ////////////////////////////////////////////////////////////////////
    const sec9_PC = new ScrollMagic.Scene({
        triggerElement: '#section9',
        triggerHook: 'onCenter'
    });
    const sec9_SP = new ScrollMagic.Scene({
        triggerElement: '#section9',
        triggerHook: 'onCenter'
    });

    sec9_PC.setClassToggle('.product-Rakuten-hand_Section-9-content-pc img:nth-child(1)', 'js-scale-pc')
    .addTo(controller);

    sec9_SP.setClassToggle('.product-Rakuten-hand_Section-9-content-sp img:nth-child(1)', 'js-scale-sp')
    .addTo(controller);



    // section10
    ////////////////////////////////////////////////////////////////////
    const w = window.matchMedia('screen and (max-width: 769px)');
    const lottie10 = Lottie.loadAnimation({
        container: document.getElementById('product-Rakuten-hand_Section-10-lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/json/product/smartphone/rakuten-hand/key.json'
    });

    let sec10 = new ScrollMagic.Scene({
        triggerElement: '#section10',
        triggerHook: 'onCenter',
        duration: 300
    });

    sec10.on('progress', (event) => {
        if(event.progress >= 1 && !w.matches) lottie10.play();
        if(event.progress >= 0.5 && w.matches) lottie10.play();
    })
    .addTo(controller);
});
