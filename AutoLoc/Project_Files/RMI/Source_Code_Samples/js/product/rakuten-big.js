import ScrollMagic from 'scrollmagic';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {cameraModes} from './rakuten-big/data';

$(function() {
    const $win = $(window);
    const $height = $win.height();
    const $arrow = $('#js-arrow > span');
    const $navlist = $('.js-mini-nav > li');
    const $spnav= $('.js-sp-nav');
    const mobile = window.matchMedia('(max-width:768px)').matches;
    const $video1 = document.getElementById('video1');
    const $video2 = document.getElementById('video2');
    const $video3 = document.getElementById('video3');
    const $video4 = document.getElementById('video4');
    // const imgPath = '/assets/img/product/rakuten-big/';

    $win.on('load', () => {
    // loading release
    ////////////////////////////////////////////////////////////////////
        $('body').attr('data-loading', 'true');
    });

    const controller = new ScrollMagic.Controller();

    // nav
    ////////////////////////////////////////////////////////////////////
    const nav = new ScrollMagic.Scene({
        triggerElement: '#nav',
        triggerHook: 'onLeave'
    });

    nav.setPin('#nav')
    // .addIndicators({ name: 'nav' })
    .addTo(controller);

    // for max-width 768px
    $arrow.on('click', function() {
        const $this = $(this);
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
        const $this = $(this);
        const id = $this.find('a').attr('href');
        const offset = $(id).offset().top;
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

    // section2 => price
    ////////////////////////////////////////////////////////////////////

    // section3
    ////////////////////////////////////////////////////////////////////
    const $sec3Txt = document.querySelector('.product-Rakuten-big_Section-3-txt');
    const $sec3FrameContainer = document.querySelector('.product-Rakuten-big_Section-3-anim-container');
    const $sec3Frame = document.querySelector('.product-Rakuten-big_Section-3-frame');
    const $sec3Notch = document.querySelector('.product-Rakuten-big_Section-3-notch');
    const $sec3_2 = document.getElementById('section3-2');
    const $sec3_2Mask = document.querySelector('.product-Rakuten-big_Section-3-2-mask');
    const $sec3_2Txt = document.getElementById('section3-2-txt');
    let screenHeight;
    let screenWidth;
    let widthRaito;
    let heightRaito = 0;

    if (window.devicePixelRatio > 0) {
        screenWidth = window.screen.width * window.devicePixelRatio;
        screenHeight = window.screen.height * window.devicePixelRatio;
    } else {
        screenWidth = window.screen.width;
        screenHeight = window.screen.width;
    }

    const returnRaito = (a, b) => {
        for (let i = Math.min(a, b); i > 1; i--) {
            if (a % i === 0 && b % i === 0) {
                a = a / i;
                b = b / i;
    
                widthRaito = a;
                heightRaito = b;
            }
        }
    };
    
    const sec3 = new ScrollMagic.Scene({
        triggerElement: '#section3',
        triggerHook: 'onEnter',
        offset: $height,
        duration: $height * 3
    });
    const sec3_1 = new ScrollMagic.Scene({
        triggerElement: '#section3',
        triggerHook: 'onLeave',
        offset: $height * 3,
        duration: $height
    });

    sec3.setPin('#section3')
    .on('progress', (e) => {
        const scrollRange = e.progress.toFixed(2) * 100;
        const scaleRange = (scrollRange + 120) / 100;
        const frameTransparency = 1.6 - (e.progress * 2.5).toFixed(2);
        const isWide = window.innerWidth >= window.innerHeight;

        if (scrollRange > 0) {
            $video1.classList.add('js-change');
            $video1.play();
            $sec3Notch.classList.add('js-change');
        }
        if (scrollRange <= 0) {
            $video1.classList.remove('js-change');
            $video1.currentTime = 0;
            $video1.pause();
            $sec3Notch.classList.remove('js-change');
            $sec3Frame.style.opacity = 1;
        }

        if (scrollRange > 30) {
            $sec3Txt.classList.add('js-change');
            $sec3Notch.style.opacity = 0;
            if (isWide) {
                $sec3FrameContainer.classList.add('js-change-primary');
            } else {
                $sec3FrameContainer.classList.add('js-change-secondary');
            }
        }
        if (scrollRange < 30) {
            $sec3Txt.classList.remove('js-change');
            $sec3FrameContainer.classList.remove('js-change-primary');
            $sec3FrameContainer.classList.remove('js-change-secondary');
            $sec3Notch.style.opacity = 1;
        }

        if (scrollRange > 45) {
            if (isWide) {
                $sec3FrameContainer.style.transform = `rotate(-90deg) translateX(37%) scale(${scaleRange})`;
                returnRaito(screenWidth, screenHeight);
                if (widthRaito === 16 && heightRaito === 9) {
                    $sec3FrameContainer.style.transform = `rotate(-90deg) translateX(30%) scale(${scaleRange})`;
                }
            } else {
                if (window.innerWidth < 321) {
                    $sec3FrameContainer.style.transform = `translateY(-68vh) scale(${scaleRange * 1.3})`;
                } else if (window.innerWidth > 769) {
                    $sec3FrameContainer.style.transform = `translateY(-48vh) scale(${scaleRange * 1.7})`;
                } else {
                    $sec3FrameContainer.style.transform = `translateY(-58vh) scale(${scaleRange * 1.5})`;
                }
            }
            $sec3Frame.style.opacity = 1;
        }
        if (scrollRange < 45) {
            $sec3FrameContainer.removeAttribute('style');
        }
        if (scrollRange > 46) {
            $sec3Frame.style.opacity = frameTransparency;
        }

        if (scrollRange > 65) {
            $sec3FrameContainer.style.opacity = '0';
            $sec3_2.style.opacity = '1';
            $sec3_2.style.zIndex = '0';
        }
        if (scrollRange < 65) {
            $sec3FrameContainer.style.opacity = '1';
            $sec3_2.style.opacity = '0';
            $sec3_2.style.zIndex = '-1';
        }

        if (scrollRange > 70) {
            $sec3_2Mask.classList.add('js-change');
            $sec3_2Txt.classList.add('js-change');
            $sec3_2.classList.add('js-change');
        }

        if (scrollRange < 70) {
            $sec3_2Mask.classList.remove('js-change');
            $sec3_2Txt.classList.remove('js-change');
            $sec3_2.classList.remove('js-change');
        }
    })
    // .addIndicators({ name: 'sec3' })
    .addTo(controller);

    sec3_1.on('progress', (e) => {
            const transparency = 1 - (e.progress * 1.5).toFixed(2);
            $sec3_2.style.opacity = transparency;
        })
        .addTo(controller);

    // section4 & section5
    ////////////////////////////////////////////////////////////////////
    const $slideImgs1 = document.querySelectorAll('.js-Carousel-slide img');
    const $slideImgs2 = document.querySelectorAll('.js-Carousel-slide-img');
    const $devices = document.querySelectorAll('.js-Carousel-device img');
    const $sec4 = document.getElementById('section4');
    const $sec5 = document.getElementById('section5');
    const $titleSec4 = document.getElementById('title-sec4');
    const $leadSec4 = document.getElementById('lead-sec4');
    const $leadSec5 = document.getElementById('lead-sec5');
    const sec4Modes = cameraModes.section4;
    const sec5Modes = cameraModes.section5;

    const fadeInSlide = (sec, num) => {
        if (sec === '4') {
            $slideImgs1.forEach((img, index) => {
                if (index === num) {
                    img.setAttribute('aria-current', 'true');
                } else {
                    img.setAttribute('aria-current', 'false');
                }
            });
        } else if (sec === '5') {
            $slideImgs2.forEach((img, index) => {
                if (index === num) {
                    img.setAttribute('aria-current', 'true');
                } else {
                    img.setAttribute('aria-current', 'false');
                }
            });
        }
    };

    const fadeInCameraLight = (num) => {
        $devices.forEach((img, index) => {
            if (index === num) {
                img.setAttribute('aria-current', 'true');
            } else {
                img.setAttribute('aria-current', 'false');
            }
        });
    };

    const fadeInText = (sec, lead, title = null) => {
        const add = (leadElm, titleElm = null) => {
            leadElm.innerHTML = lead;
            if (titleElm) {
                titleElm.textContent = title;
            }
        };

        if (sec === '4') {
            add($leadSec4, $titleSec4);
        } else if (sec === '5') {
            add($leadSec5);
        }
    };

    const fadeInInit = (sec, num, lead, title = null) => {
        fadeInSlide(sec, num);
        fadeInText(sec, lead, title);
        if (sec === '4') {
            fadeInCameraLight(num);
        }
    };

    // section4
    ////////////////////////////////////////////////////////////////////
    const sec4 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
    });
    const sec4_1 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        duration: $height / 4
    });
    const sec4_2 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        offset: $height / 4,
        duration: $height / 4
    });
    const sec4_3 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        offset: $height / 4 * 2,
        duration: $height / 4
    });
    const sec4_4 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        offset: $height / 4 * 3,
        duration: $height
    });
    const sec4_5 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        duration: $height
    });
    const sec4_6 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        offset: $height,
        duration: $height
    });

    sec4.setPin('#section4')
        .addTo(controller);

    sec4Modes.map((mode, index) => {
        const { id, title, lead } = mode;
        const changeSlide = (scene) => {
            scene.on('enter', () => {
                fadeInInit('4', id, lead, title);
            })
            .addTo(controller);
        };

        if (index === 0) {
            changeSlide(sec4_1);
        } else if (index === 1) {
            changeSlide(sec4_2);
        } else if (index === 2) {
            changeSlide(sec4_3);
        } else if (index === 3) {
            changeSlide(sec4_4);
        }
    });

    sec4_5.setPin('#section5')
        .addTo(controller);
    sec4_6.on('progress', (e) => {
            const transparency = 1 - (e.progress * 1.5).toFixed(2);
            $sec4.style.opacity = transparency;
        })
        .addTo(controller);


     // section5
    ////////////////////////////////////////////////////////////////////
    const carouselNavSec5Sp = document.querySelector('.js-Carousel-mode');
    const modeList = document.querySelectorAll('.product-Rakuten-big_Section-5-list li');

    const fadeInMode = (text) => {
        if (carouselNavSec5Sp.textContent !== text) {
            carouselNavSec5Sp.textContent = text;
        }
    };

    const sec5 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave',
        offset: $height
    });
    const sec5_1 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave',
        offset: $height,
        duration: $height / 3
    });
    const sec5_2 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave',
        offset: $height + $height / 3,
        duration: $height / 3
    });
    const sec5_3 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave',
        offset: $height + $height / 3 * 2,
        duration: $height / 3
    });
    const sec5_4 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave',
        duration: $height
    });
    const sec5_5 = new ScrollMagic.Scene({
        triggerElement: '#section5',
        triggerHook: 'onLeave',
        offset: $height * 2,
        duration: $height
    });

    sec5.setClassToggle('#section5', 'js-fixed')
        .addTo(controller);

    sec5Modes.map((mode, index) => {
        const { id, title, lead } = mode;
        const changeSlide = (scene) => {
            scene.on('enter', () => {
                fadeInInit('5', id, lead);
                fadeInMode(title);
                modeList.forEach((item, j) => {
                    if (j === index) {
                        item.classList.add('js-current');
                    } else {
                        item.classList.remove('js-current');
                    }
                });
            })
            .addTo(controller);
        };

        if (index === 0) {
            changeSlide(sec5_1);
        } else if (index === 1) {
            changeSlide(sec5_2);
        } else if (index === 2) {
            changeSlide(sec5_3);
        }
    });

    sec5_4.setPin('#section6')
        .addTo(controller);
    sec5_5.on('progress', (e) => {
            const transparency = 1 - (e.progress * 1.5).toFixed(2);
            $sec5.style.opacity = transparency;
        })
        .addTo(controller);


    // section6
    //////////////////////////////////////////////////////////////////
    const sec6 = new ScrollMagic.Scene({
        triggerElement: '#section6',
        triggerHook: 'onEnter',
        offset: $height / 2
    });

    sec6.on('enter', () => {
            $video2.play();
        })
        // .addIndicators({ name: 'sec6' })
        .addTo(controller);


    // section7
    ////////////////////////////////////////////////////////////////////
    const sec7 = new ScrollMagic.Scene({
        triggerElement: '#section7',
        triggerHook: 'onEnter',
        offset: $height / 2
    });

    sec7.on('enter', () => {
            $video3.play();
        })
        // .addIndicators({ name: 'sec7' })
        .addTo(controller);


    // section8
    ////////////////////////////////////////////////////////////////////
    const sec8 = new ScrollMagic.Scene({
        triggerElement: '#section8',
        triggerHook: 'onEnter',
        offset: $height / 2
    });

    sec8.on('enter', () => {
            $video4.play();
        })
        // .addIndicators({ name: 'sec8' })
        .addTo(controller);

});
