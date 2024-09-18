import ScrollMagic from 'scrollmagic';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {cameraModes} from './rakuten-big-s/data';
import Lottie from 'lottie-web';

$(function() {
    const $win = $(window);
    const $height = $win.height();
    const $arrow = $('#js-arrow > span');
    const $navlist = $('.js-mini-nav > li');
    const $spnav= $('.js-sp-nav');
    const mobile = window.matchMedia('(max-width:768px)').matches;
    const $video1_1 = document.getElementById('video1-1');
    const $video1_2 = document.getElementById('video1-2');
    const $video6 = document.getElementById('video6');
    const $video7 = document.getElementById('video7');
    let camera_flag = false;
    // const imgPath = '/assets/img/product/rakuten-big-s/';

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

    // section4 
    ////////////////////////////////////////////////////////////////////
    const $slideImgs1 = document.querySelectorAll('.js-Carousel-slide img');
    const $devices = document.querySelectorAll('.js-Carousel-device img');
    const $titleSec4 = document.getElementById('title-sec4');
    const $leadSec4 = document.getElementById('lead-sec4');
    const sec4Modes = cameraModes.section4;

    const fadeInSlide = (sec, num) => {
        if (sec === '4') {
            $slideImgs1.forEach((img, index) => {
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
        triggerHook: '0.06',
        duration: $height * 3
    });
    const sec4_1 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        duration: $height
    });
    const sec4_2 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        offset: $height,
        duration: $height 
    });
    const sec4_3 = new ScrollMagic.Scene({
        triggerElement: '#section4',
        triggerHook: 'onLeave',
        offset: $height * 2,
        duration: $height * 2
    });

    // const sec4_6 = new ScrollMagic.Scene({
    //     triggerElement: '#section4',
    //     triggerHook: 'onLeave',
    //     offset: $height,
    //     duration: $height
    // });

    sec4.setPin('#section4')
        // .addIndicators({name: 'section4setPin'})
        .addTo(controller);

    sec4_1.setClassToggle('#section4', 'js-bg-red')
    // .addIndicators({name: "red"})
    .addTo(controller);

    sec4_2.setClassToggle('#section4', 'js-bg-white')
    // .addIndicators({name: "white"})
    .addTo(controller);

    sec4_3.setClassToggle('#section4', 'js-bg-black')
    // .addIndicators({name: "black"})
    .addTo(controller);

    sec4Modes.map((mode, index) => {
        const { id, title, lead } = mode;
        const changeSlide = (scene) => {
            scene.on('enter', () => {
                fadeInInit('4', id, lead, title);
            })
            // .addIndicators()
            .addTo(controller);
        };

        if (index === 0) {
            changeSlide(sec4_1);
        } else if (index === 1) {
            changeSlide(sec4_2);
        } else if (index === 2) {
            changeSlide(sec4_3);
        } 
    });

    // section-camera
    ////////////////////////////////////////////////////////////////////
    
    const camera_step1 = new ScrollMagic.Scene({
        triggerElement: '#section-camera',
        triggerHook: '0',
        duration: $height * 4
    });
    const camera_step1_1= new ScrollMagic.Scene({
        triggerElement: '#section-camera',
        triggerHook: '0.07',
        offset: $height ,
        duration: $height
    });
    const camera_step1_2 = new ScrollMagic.Scene({
        triggerElement: '#section-camera',
        triggerHook: '0.07',
        offset: $height * 2 ,
        duration: $height
    });
    const camera_step1_3 = new ScrollMagic.Scene({
        triggerElement: '#section-camera',
        triggerHook: '0.07',
        offset: $height * 3,
        duration: $height * 3
    });

    camera_step1.setPin('#section-camera')
        // .addIndicators({name: 'section-camera-setPin'})
        .addTo(controller);

    camera_step1_1.setClassToggle('.product-Rakuten-big-s_Section-camera', 'js-step-1-1')
    // .addIndicators({name: "step1-1"})
    .addTo(controller);


    camera_step1_1.on('enter', () => {
        section_camera.classList.remove("js-step-1-2" , "js-step-1-3");
        $video1_1.currentTime = 0;
        $video1_1.play();
        // console.log(camera_flag);
    })
    // .addIndicators({ name: 'video1-1' })
    .addTo(controller);

    camera_step1_2.setClassToggle('.product-Rakuten-big-s_Section-camera', 'js-step-1-2')
    // .addIndicators({name: "step1-2"})
    
    .addTo(controller);

    camera_step1_2.on('enter', () => {
        section_camera.classList.remove("js-step-1-1" , "js-step-1-3");
        $video1_2.currentTime = 0;
        $video1_2.play();
    })
    // .addIndicators({ name: 'video1-2' })
    .addTo(controller);     

    camera_step1_3.setClassToggle('.product-Rakuten-big-s_Section-camera', 'js-step-1-3')
    // .addIndicators({name: "step1-3"})
    .addTo(controller);

    camera_step1_3.on('enter', () => {
        section_camera.classList.remove("js-step-1-1" , "js-step-1-2");
        camera_flag = true;

        if (camera_flag == true) {
            $(".product-Rakuten-big-s_Section-camera").addClass("js-simpleview");
        }
    })
    .addTo(controller); 

var section_camera = document.getElementById('section-camera');
var camera_title_1 = document.getElementById('camera-title-1');
var camera_title_2 = document.getElementById('camera-title-2');
var camera_title_3 = document.getElementById('camera-title-3');

camera_title_1.addEventListener("click", function () {
    section_camera.classList.add("js-simpleview" , "js-step-1-1");
    section_camera.classList.remove("js-step-1-2" , "js-step-1-3");
});
camera_title_2.addEventListener("click", function () {
    section_camera.classList.add("js-simpleview" , "js-step-1-2");
    section_camera.classList.remove("js-step-1-1" , "js-step-1-3");
});
camera_title_3.addEventListener("click", function () {
    section_camera.classList.add("js-simpleview" , "js-step-1-3");
    section_camera.classList.remove("js-step-1-1" , "js-step-1-2");
});

    // section6
    //////////////////////////////////////////////////////////////////
    const sec6 = new ScrollMagic.Scene({
        triggerElement: '#section6',
        triggerHook: 'onEnter',
        offset: $height / 2,
        // duration: $height
    });

    sec6.on('enter', () => {
            $video6.currentTime = 0;
            $video6.play();
        })
        // .addIndicators({ name: 'sec6' })
        .addTo(controller);


    // section7
    ////////////////////////////////////////////////////////////////////
    // const speed_step1 = new ScrollMagic.Scene({
    //     triggerElement: '#section7',
    //     triggerHook: '0.1',
    //     duration: $height
    // });
    const speed_step1_1= new ScrollMagic.Scene({
        triggerElement: '#section7',
        triggerHook: '0.5',
        duration: $height * 2.5,
        // reverse: false
    });

    // speed_step1.setPin('#section7')
    // .addIndicators({name: 'section-7-setPin'})
    // .addTo(controller);

    speed_step1_1.setClassToggle('.product-Rakuten-big-s_Section-7', 'js-step-1-1')
    // .addIndicators({name: "step1-1"})
    .addTo(controller);

    speed_step1_1.on('enter', () => {
        window.setTimeout(function(){
            $video7.currentTime = 0;
            $video7.play();
        }, 800);
        })
        // .addIndicators({ name: 'sec7' })
        .addTo(controller);

    // section10
    ////////////////////////////////////////////////////////////////////
    const w = window.matchMedia('screen and (max-width: 769px)');
    const lottie10 = Lottie.loadAnimation({
        container: document.getElementById('product-Rakuten-big-s_Section-10-lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/json/product/smartphone/rakuten-big-s/key.json'
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
    // .addIndicators()
    .addTo(controller);

});
