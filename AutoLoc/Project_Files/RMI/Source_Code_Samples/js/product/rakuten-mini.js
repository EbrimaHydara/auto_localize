import ScrollMagic from 'scrollmagic';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

$(function() {
    const $win = $(window);
    const $height = $win.height();
    const $arrow = $('#js-arrow > span');
    const $navlist = $('.js-mini-nav > li');
    const $spnav= $('.js-sp-nav');
    // const $cpnRule = $('#js-campaign-rule');
    const mobile = window.matchMedia('(max-width:768px)').matches;
    const $video1 = document.getElementById('video1');
    const $video2 = document.getElementById('video2');

    $win.on('load', () => {
    // loading release
    ////////////////////////////////////////////////////////////////////
        $('body').attr('data-loading', 'true');
    // section1
    ////////////////////////////////////////////////////////////////////
        $('#section1').addClass('js-fadein');
    });

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

    // $cpnRule.on('click', function(e) {
    //     e.preventDefault();
    //     const $this = $(this);
    //     const id = $this.attr('href');
    //     const offset = $(id).offset().top;
    //     let pos = Math.floor(offset);
    //     pos = pos - 64 - 16;
    //     $('html, body').animate({ scrollTop: pos });
    // });


    // section2 => price
    ////////////////////////////////////////////////////////////////////

    // section3
    ////////////////////////////////////////////////////////////////////
    let sec3 = new ScrollMagic.Scene({
        triggerElement: '#section3',
        triggerHook: 'onCenter',
        offset: $height / 4
    });

    sec3.setClassToggle('#txt1', 'js-fadein-text')
    // .addIndicators({ name: 'sec3' })
    .addTo(controller);


    // section3 bg
    ////////////////////////////////////////////////////////////////////
    let sec3bg = new ScrollMagic.Scene({
        triggerElement: '#section3',
        triggerHook: 'onEnter'
    });

    sec3bg.setClassToggle('#bg', 'js-fadein')
    // .addIndicators({ name: 'sec3bg' })
    .addTo(controller);


    // section4
    ////////////////////////////////////////////////////////////////////
    let sec4 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onEnter',
        offset: $height / 3
    });

    sec4.setClassToggle('#txt2', 'js-fadein-text')
    // .addIndicators({ name: 'sec4' })
    .addTo(controller);


     // section5
    ////////////////////////////////////////////////////////////////////
    let sec5 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave'
    });

    sec5.setClassToggle('#section5', 'js-fadein')
    .setPin('#section5')
    .on('progress', function() {
        $video1.play();
    })
    // .addIndicators({ name: 'sec5' })
    .addTo(controller);


    // section6
    ////////////////////////////////////////////////////////////////////
    let sec6 = new ScrollMagic.Scene({
        triggerElement: '#section6',
        triggerHook: 'onLeave'
    });

    sec6.setPin('#section6')
    // .addIndicators({ name: 'sec6' })
    .addTo(controller);


    // section7
    ////////////////////////////////////////////////////////////////////
    let sec7 = new ScrollMagic.Scene({
        triggerElement: '#section7',
        triggerHook: 'onEnter',
        offset: $height / 8
    });

    sec7.setClassToggle('#video2', 'js-fadein')
    // .setPin('#section7')
    .on('progress', function() {
        $video2.style.opacity = '0';
        $video2.play();
    })
    // .addIndicators({ name: 'sec7' })
    .addTo(controller);


    // section7_1
    ////////////////////////////////////////////////////////////////////
    let sec7_1 = new ScrollMagic.Scene({
        triggerElement: '#section7',
        triggerHook: 'onLeave'
    });
    sec7_1.setPin('#section7')
    // .addIndicators({ name: 'sec7' })
    .addTo(controller);


    // section7_2
    ////////////////////////////////////////////////////////////////////

    let sec7_2 = new ScrollMagic.Scene({
        triggerElement: '#section7',
        triggerHook: 'onEnter',
        duration: $height
    });

    sec7_2.on('progress', function(e) {
        let up1 = e.progress * 100 * 3;
        $('#up1').css({
            'transform' : 'translateY( -' + up1 + 'px)'
        });
    })
    // .addIndicators({ name: 'sec7_2' })
    .addTo(controller);


    // section8
    ////////////////////////////////////////////////////////////////////
    let sec8 = new ScrollMagic.Scene({
        triggerElement: '#section8',
        triggerHook: 'onLeave'
    });

    sec8.setClassToggle('#video2', 'js-fadein')
    .setPin('#section8')
    // .addIndicators({ name: 'sec8' })
    .addTo(controller);


    // section8_2
    ////////////////////////////////////////////////////////////////////
    let sec8_2 = new ScrollMagic.Scene({
        triggerElement: '#section8',
        triggerHook: 'onEnter',
        offset: $height / 4
    });

    sec8_2.setClassToggle('#up2', 'js-fadein-text')

    // sec8_2.on('progress', function(e) {
    //     let up2 = e.progress.toFixed(2) * 100 * 2;
    //     $('#up2').css({
    //         'transform' : 'translateY( -' + up2 + 'px)'
    //     });
    // })
    // .addIndicators({ name: 'sec8_2' })
    .addTo(controller);


    // section9
    ////////////////////////////////////////////////////////////////////
    let sec9 = new ScrollMagic.Scene({
        triggerElement: '#section9',
        triggerHook: 'onLeave'
    });

    sec9.setPin('#section9')
    // .addIndicators({ name: 'sec9' })
    .addTo(controller);


    // section9_2
    ////////////////////////////////////////////////////////////////////
    let sec9_2 = new ScrollMagic.Scene({
        triggerElement: '#section9',
        triggerHook: 'onLeave',
        duration: $height
    });

    sec9_2.on('progress', function(e) {
        let up3 = e.progress * 100 * 4;
        $('#up3').css({
            'transform' : 'translateY( -' + up3 + 'px)'
        });
    })
    // .addIndicators({ name: 'sec9_3' })
    .addTo(controller);


    //section10
    ////////////////////////////////////////////////////////////////
    let sec10 = new ScrollMagic.Scene({
        triggerElement: '#section10',
        triggerHook: 'onCenter'
    });

    sec10.setClassToggle('#up4', 'js-fadein-text')
    // .addIndicators({ name: 'sec10' })
    .addTo(controller);


    // section11
    //////////////////////////////////////////////////////////////////
    let sec11 = new ScrollMagic.Scene({
        triggerElement: '#section11',
        triggerHook: 'onLeave'
    });

    sec11.setClassToggle('#section10', 'js-fadeout')
    .setPin('#section11')
    // .addIndicators({ name: 'sec11' })
    .addTo(controller);


    // section12
    //////////////////////////////////////////////////////////////////
    let sec12 = new ScrollMagic.Scene({
        triggerElement: '#section12',
        triggerHook: 'onLeave'
    });

    sec12.setClassToggle('#section11', 'js-fadeout')
    .setPin('#section12')
    // .addIndicators({ name: 'sec11' })
    .addTo(controller);

});
