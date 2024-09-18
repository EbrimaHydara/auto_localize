// import 'slick-carousel';
// import { carousel } from "../top/component/carousel";
import { themeNum } from '../common/theme';
// import { disaster } from "./component/disaster";
// import { maintenance } from "./component/maintenance";
import Vue from 'vue';
import CityNav from '../../vue/area/city-navigation/SearchList.vue';
import searchResult from '../../vue/area/shop-list/searchResult.vue';
import { addClassBasedOnSlideCount } from "../common/component/carousel";

// disaster();
// maintenance();

// const jsLoad = () => {
//     carousel();
// }

new Vue({
    render: h => h(CityNav)
}).$mount('#city-nav')

const shoplist = document.getElementById('shoplist');
const pref = shoplist.dataset.pref;
const city = shoplist.dataset.city;
const directory1 = shoplist.dataset.directory1;
const directory2 = shoplist.dataset.directory2;

new Vue({
    render: h => h(searchResult, { props: { pref: pref, city: city, directory1: directory1, directory2: directory2} })
}).$mount('#shoplist');

/**
 * anker link adjust
 */

const anchorWrap = document.getElementById("js-anchor-wrap");
if(anchorWrap.childElementCount >= 5) {
    anchorWrap.classList.add("js-flex-wrap");
}

/**
 * nav link
 */
const FixedNav = () => {
    const scroll = window.scrollY;
    const nav = document.getElementById('js-nav');
    const fixed = document.getElementById('js-follow-btn');

    if (nav && fixed) {
        const isNavVisible = nav.getBoundingClientRect().top >= scroll - 80;
        fixed.style.top = isNavVisible ? '-100%' : '0';
        fixed.style.visibility = isNavVisible ? 'hidden' : 'visible';
        fixed.setAttribute('aria-expanded', isNavVisible);
    }
};
window.addEventListener('scroll', () => {
    FixedNav();
});

document.addEventListener('DOMContentLoaded', function() {
    let headerHeight = 80; // Header height
    document.querySelectorAll('a:not(.js-Modal)[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href');
            let target = (href === "#" || href === "") ? document.documentElement : document.querySelector(href);
            if (target) {
                let position = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
});

/**
 * area news carousel
 */

const areanewsCarousel = $('.js-areanews-Carousel');

areanewsCarousel.each(function() {
    let $self = $(this);
    $self.on('init breakpoint', (_, slick) => {
        addClassBasedOnSlideCount(slick);
    });
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
        infinite: true,
        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        prevArrow: `<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>`,
        nextArrow: `<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>`,
    };
    $self.slick($.extend({}, carouselConfig, {
        responsive: [
            {
                breakpoint: themeNum.max.m,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    dotsClass: 'slick-dots c-Carousel_Dots-v2',
                    appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                }
            }
        ]
    }));
});

/**
 * user voice donut graph
 */
document.addEventListener('DOMContentLoaded', function () {
    const cityVoice = document.getElementById('city-donut');

    if (cityVoice) {
        const donut1 = document.querySelector(".donut1");
        const donut2 = document.querySelector(".donut2");

        let total1 = parseFloat(donut1.getAttribute('data-percent')) || 0;
        let reset1 = 0;

        let total2 = parseFloat(donut2.getAttribute('data-percent')) || 0;
        let reset2 = 0;

        const startAnimations = (donut_index, reset, total) => {

            const  donutAnimation =setInterval(() => {
                donut_index.style.background = `conic-gradient(#FF008C 0 ${reset}%, #E0E0E0 ${reset}% 100% )`;

                reset++ >= total&& clearInterval(donutAnimation);

            }, 5);
        };

        startAnimations(donut1, reset1,total1);
        startAnimations(donut2, reset2,total2);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimations();
                    observer.disconnect();
                }
            });
        });

        observer.observe(cityVoice);
    }
});


/**
 * fixed bottom btn
 */
const fixedBottomBtn = () => {
    let scrollY = window.scrollY;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if (!fixedBtn || !trigger) return;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if (scrollY > triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn, { passive: true });

// // Pitari Carousel
// const minWidth = 835;
// const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
// const topCarouselSpMnoHolder = $('.js-hikari-top-Carousel-sp');
// const topCarouselMnoHolder = $('.js-hikari-top-Carousel');
// const topCarouselSpNoMnoHolder = $('.js-hikari-none-top-Carousel-sp');
// const topCarouselNoMnoHolder = $('.js-hikari-none-top-Carousel');
// const phxPatternName = document.getElementById('phx_pattern_name');
// let isSlickWorked = false;
// let isSpSlickWorked = false;
// let isPcSlickWorked = false;
// let isJsLoaded = false;

// const topCarouselSp = (el, parameter) => {
//     el.each(function () {
//         let $self = $(this);
//         const carouselConfig = {
//             centerMode: true,
//             dots: true,
//             dotsClass: 'slick-dots c-Carousel_Dots-v2',
//             infinite: true,
//             prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_carousel_' + parameter + 'left" data-ratevent="click" data-ratparam="all">Previous</button>',
//             nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_carousel_' + parameter + 'right" data-ratevent="click" data-ratparam="all">Next</button>',
//             variableWidth: true,
//             autoplay: true,
//             autoplaySpeed: 4000,
//         };
//         $self.slick($.extend({}, carouselConfig, {
//             lazyLoad: 'progressive',
//             appendArrows: $self.next('.l-System_Container').children('.c-Carousel_Nav-v2'),
//             appendDots: $self.next('.l-System_Container').children('.c-Carousel_Nav-v2'),
//             slidesToScroll: 1,
//         }));
//     }.bind(el));

//     const reBindRat = $('.top-Carousel .c-Carousel_Nav-v2').find('[data-ratId]');
//     if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
//         RAT.bind(reBindRat);
//     }
// }

// const topCarouselPc = (el, parameter) => {
//     el.each(function () {
//         let $self = $(this);

//         const carouselConfig = {
//             arrows: true,
//             centerMode: true,
//             dots: true,
//             dotsClass: 'slick-dots c-Carousel_Dots-v2',
//             infinite: true,
//             prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_carousel_' + parameter + 'left" data-ratevent="click" data-ratparam="all">Previous</button>',
//             nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_carousel_' + parameter + 'right" data-ratevent="click" data-ratparam="all">Next</button>',
//             customPaging: function(slider, i) {
//                 let num_dot = String(i + 1).padStart(2, '0')
//                 return $('<button type="button" class="top-Carousel_dot" data-ratid="top_carousel_' + parameter + 'indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
//             },
//             variableWidth: true,
//             autoplay: true,
//             autoplaySpeed: 4000,
//         };
//         $self.slick($.extend({}, carouselConfig, {
//             lazyLoad: 'progressive',
//             appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
//             appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
//             slidesToScroll: 1,
//         }));
//         /* 左右送り機能ここから */
//         const $currentInitial = $self.find(".slick-slide[aria-hidden='false']");
//         const $nextInitial = $currentInitial.next();
//         const $prevInitial = $currentInitial.prev();
//         let isInitialState = true;
//         $prevInitial.on('click', (e) => {
//             e.preventDefault();
//             $self.slick('slickPrev');
//         });
//         $nextInitial.on('click', (e) => {
//             e.preventDefault();
//             $self.slick('slickNext');
//         });
//         let $current = null;
//         let $next = null;
//         let $prev = null;
//         $self.on('afterChange', function(event, slick, currentSlide, nextSlide){
//             $current = $(slick.$slides.get(currentSlide));
//             $next = $current.next();
//             $prev = $current.prev();
//             if (isInitialState) {
//                 $prevInitial.off('click');
//                 $nextInitial.off('click');
//                 isInitialState = false;
//             }
//             $prev.on('click', (e) => {
//                 e.preventDefault();
//                 $self.slick('slickPrev');
//             });
//             $next.on('click', (e) => {
//                 e.preventDefault();
//                 $self.slick('slickNext');
//             });
//         });
//         $self.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//             if ($prev && $next) {
//                 $prev.off('click');
//                 $next.off('click');
//             }
//         });
//         /* 左右送り機能ここまで */

//     }.bind(el))

//     const reBindRat = $('.top-Carousel .c-Carousel_Nav-v2').find('[data-ratId]');
//     if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
//         RAT.bind(reBindRat);
//     }
// }

// const carouselPattern = (mediaQuery) => {
//     if (isSpSlickWorked && isPcSlickWorked) {
//         return
//     }

//     if(phxPatternName) {
//         if (phxPatternName.value === 'mno_holder') {
//             if (!mediaQuery.matches && !isSpSlickWorked) {
//                 topCarouselSp(topCarouselSpMnoHolder, '');
//                 isSpSlickWorked = true;
//             }
//             if (mediaQuery.matches && !isPcSlickWorked) {
//                 topCarouselPc(topCarouselMnoHolder, '')
//                 isPcSlickWorked = true
//             }
//         } else {
//             if (!mediaQuery.matches && !isSpSlickWorked) {
//                 topCarouselSp(topCarouselSpNoMnoHolder, 'none_')
//                 isSpSlickWorked = true;
//             }
//             if (mediaQuery.matches && !isPcSlickWorked) {
//                 topCarouselPc(topCarouselNoMnoHolder, 'none_')
//                 isPcSlickWorked = true
//             }
//         }
//     }

//     if (!isJsLoaded) {
//         isJsLoaded = true;
//         jsLoad();
//     }
// }

// mediaQuery.addEventListener("change", carouselPattern);

// const config = {
//     attributes: true,
//     attributeFilter: ['value'],
// }

// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         if (mutation.type === 'attributes') {
//             isSlickWorked = true;
//             carouselPattern(mediaQuery);
//             observer.disconnect();
//         }
//     });
// });

// if(phxPatternName) {
//     if (phxPatternName.value !== '') {
//         isSlickWorked = true;
//         carouselPattern(mediaQuery);
//     } else {
//         observer.observe(phxPatternName, config);
//     }
// }

// window.addEventListener('DOMContentLoaded', function () {
//     setTimeout(() => {
//         if (!isSlickWorked) {
//             carouselPattern(mediaQuery);
//         }
//     }, 1000);
// });

// // analytics for index_a
// const queryString = window.location.search;
// const ratJsElement = document.getElementById('ratJs');

// const getLidVal = (queryString) => {
//     const params = {};
//     const paramPairs = queryString.slice(1).split('&');

//     for (const pair of paramPairs) {
//         const [key, value] = pair.split('=');
//         params[key] = value;
//     }

//     return params['l-id'];
// }

// const lidVal = getLidVal(queryString);
// if (lidVal && ratJsElement) {
//     const type = lidVal.split('_');

//     if (type[2] && type[3]) {
//         const rat_list = [
//             location.pathname,
//             'prefecture_test_50_eow',
//             'prefecture_redirect_all_eow',
//             'prefecture_redirect_' + type[3] + '_eow',
//             'prefecture_redirect_' + type[3] + '_' + type[2] + '_eow'
//         ];

//         setTimeout(function(){
//             const ratPageNameElement = document.getElementById('ratPageName');
//             ratPageNameElement.value = rat_list.join(',');

//             const scriptTag = document.createElement('script');
//             scriptTag.type = 'text/javascript';
//             scriptTag.src = 'https://r.r10s.jp/com/rat/js/rat-sec.js';
//             ratJsElement.appendChild(scriptTag);
//         }, 0);
//     }
//   }
