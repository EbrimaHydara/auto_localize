import { themeStr, themeNum } from '../common/theme'
import SmoothScroll from "smooth-scroll";
import 'slick-carousel';
import { addClassBasedOnSlideCount } from "../common/component/carousel";
new SmoothScroll('.js-fixedMenuScroll', {
    speed: 100,
    offset: window.matchMedia(`(min-width: ${themeStr.min.l})`).matches ? 119 : 64,
    emitEvents: true,
})
document.addEventListener('scrollStop', function () { setTimeout(window.scrollTo(0, window.pageYOffset - 1), 100) }, false)

let beforePageYOffset;
const controlFixedBtn = (trigger, elm) => {
    let scrollY = window.pageYOffset;

    if (!elm || !trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if (scrollY > triggerY) {
        elm.setAttribute('aria-expanded', 'true');
        elm.style.display = "";
    } else {
        elm.setAttribute('aria-expanded', 'false');
    }
}

const trigger = document.getElementById('js-trigger');
const fixedBtn = document.getElementById('js-fixed-btn');
const navTrigger = document.getElementById('js-trigger-nav');
const navBtn = document.getElementById('js-fixed-nav');

const fixedBtnInit = () => {
    if (beforePageYOffset > window.pageYOffset - 1) {
        controlFixedBtn(navTrigger, navBtn);
    } else {
        navBtn.setAttribute('aria-expanded', 'false');
    }
    beforePageYOffset = window.pageYOffset;
}

const adjustPadding = (wrapperHeight, target) => {
    target.style.paddingBottom = `${wrapperHeight}px`
}

const fixedBottomBtn = () => {
    let scrollY = window.pageYOffset;
    //const trigger = document.getElementById('js-trigger');
    //const fixedBtn = document.getElementById('js-fixed-btn');
    if (!fixedBtn || !trigger) return;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;
    if (scrollY > triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
        fixedBtn.style.display = "";
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}
window.addEventListener('scroll', () => {
    fixedBottomBtn();
    fixedBtnInit();
}, { passive: true });

const footerElem = document.getElementsByClassName('g-Footer')
    if (footerElem[0] && fixedBtn) {
      const e = fixedBtn
      let wrapperHeight = 100
      setTimeout(() => {
        wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
        adjustPadding(wrapperHeight, footerElem[0])
      }, 500)
      window.addEventListener('resize', () => {
        wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
        adjustPadding(wrapperHeight, footerElem[0])
      })
    }

// show shop banner
// const bnrNonMnoHolder = document.getElementById('js-bnr-non-mno-holder');
// if (!window.phx_user_attributes_gadget) {
//   let _phx_user_attributes_gadget = '';
//   Object.defineProperty(window, 'phx_user_attributes_gadget', {
//     get() {
//         return _phx_user_attributes_gadget;
//     },
//     set(value) {
//         if(value === 'login_non_mno_holder' || value === 'non_login') {
//             bnrNonMnoHolder.style.display = 'block';
//         }
//     }
//   });
// }

const initCarousel = (element) => {
    const targetCarousel = $(`#${element}`);
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2',
        infinite: false,
        centerPadding: '24px',
        prevArrow: `<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>`,
        nextArrow: `<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>`,
    };

    targetCarousel.not('.slick-initialized').slick($.extend({}, carouselConfig, {
        appendArrows: targetCarousel.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
        appendDots: targetCarousel.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
        responsive: [
            {
                breakpoint: themeNum.max.m,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }));
}

const multiCarousel = () => {
    const carouselConfig = {
        respondTo: 'min',
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    $('.js-Carousel-multi').each(function() {
        let $self = $(this);
        $self.on('init breakpoint', (_, slick) => {
            addClassBasedOnSlideCount(slick);
        });
        setLoadingImage($self);
        $self.not('.slick-initialized').slick($.extend({}, carouselConfig, {
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            lazyLoad: 'progressive',
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: themeNum.max.m,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                breakpoint: themeNum.max.s,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        }));
    });
    function setLoadingImage($self) {
        $self.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let h = slick.$slideTrack.height();
            $self.find('.slick-loading').parents('.slick-slide').addClass('has-loading').height(h);
        });
        $self.on('lazyLoaded', function(event, slick, image, imageSource) {
            setTimeout(function() {
                image.parents('.slick-slide').removeClass('has-loading');
            }, 500);
        });
    }
}

const slickElements = ['js-benefitCarousel-sp', 'js-campaignCarousel-sp'];
const intersectionElement = document.querySelectorAll('.js-slick-intersection');
const options = {
    rootMargin: "0px",
    threshold: [0]
};

const initCarousels = () =>
    slickElements.forEach((element) => initCarousel(element));

const checkIntersecting = ([entry], observer) => {
    if (entry.isIntersecting) {
        if (entry.target.id === 'js-multi-intersection') multiCarousel();
        if (entry.target.id === 'js-benefit-intersection') initCarousels();
        observer.unobserve(entry.target);
    }
}

const slickIntersection = () => {
    const observer = new IntersectionObserver(checkIntersecting, options);
    intersectionElement.forEach(element => {
        observer.observe(element);
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition !== 0) {
        multiCarousel();
        initCarousels();
    } else {
        slickIntersection();
    }
});

const phxPatternName_simulation = document.getElementById('phx_pattern_name_simulation');
const ratSimulation = document.getElementById('rat-simulation');
const SimulationDrawer = document.getElementById('js-simulation-drawer-wrap');
const SimulationModal = document.getElementById('js-simulation-modal-wrap');
const appendJavaScript = document.getElementById('appendJavaScript');

const showSimulation = (val) => {
    const scriptTag = document.createElement('script');
    if (val === 'drawer') {
        SimulationDrawer.setAttribute('aria-hidden', 'false');
        sendRatPagename('simulation_test_a-none-holder_drawer');
        scriptTag.type = 'text/javascript';
        scriptTag.src = '/assets/js/common.fee.saikyo-plan.simulation-test-a-drawer.bundle.js';
        appendJavaScript.appendChild(scriptTag);
    }
    else if (val === 'modal') {
        SimulationModal.setAttribute('aria-hidden', 'false');
        sendRatPagename('simulation_test_b-none-holder_modal');
        scriptTag.type = 'text/javascript';
        scriptTag.src = '/assets/js/fee.simulation-modal.bundle.js?20240205';
        appendJavaScript.appendChild(scriptTag);
    }
    else if (val === 'default') {
        ratSimulation.setAttribute('aria-hidden', 'false');
        sendRatPagename('simulation_test_c-none-holder_default');
    }
    if (val === 'drawer_nonlogin') {
        SimulationDrawer.setAttribute('aria-hidden', 'false');
        sendRatPagename('simulation_test_a_drawer');
        scriptTag.type = 'text/javascript';
        scriptTag.src = '/assets/js/common.fee.saikyo-plan.simulation-test-a-drawer.bundle.js?20240207-2';
        appendJavaScript.appendChild(scriptTag);
    }
    else if (val === 'modal_nonlogin') {
        SimulationModal.setAttribute('aria-hidden', 'false');
        sendRatPagename('simulation_test_b_modal');
        scriptTag.type = 'text/javascript';
        scriptTag.src = '/assets/js/fee.simulation-modal.bundle.js?20240207-2';
        appendJavaScript.appendChild(scriptTag);
    }
    else if (val === 'default_nonlogin') {
        ratSimulation.setAttribute('aria-hidden', 'false');
        sendRatPagename('simulation_test_c_default');
    }
    else {
        sendRatPagename();
    }
}

const sendRatPagename = (name) => {
    if (name) {
        const ratPageNameElement = document.getElementById('ratPageName');
        ratPageNameElement.value = name;
    }

    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = 'https://r.r10s.jp/com/rat/js/rat-sec.js';
    if (typeof RAT === 'object') {
        appendJavaScript.appendChild(scriptTag);
    }
}

const observer_simulation = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        showSimulation(phxPatternName_simulation.value);
        observer_simulation.disconnect();
      }
    });
});

const config = {
    attributes: true,
    attributeFilter: ['value'],
}

if (phxPatternName_simulation.value !== '') {
    showSimulation(phxPatternName_simulation.value);
} else {
    observer_simulation.observe(phxPatternName_simulation, config);
}

// Carousel cpn

$('.js-cpn-Carousel').each(function () {
    let $self = $(this);
    $self.on('init breakpoint', (_, slick) => {
        addClassBasedOnSlideCount(slick);
    });
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
        infinite: true,
        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="shop_carousel_left" data-ratevent="click" data-ratparam="all">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="shop_carousel_right" data-ratevent="click" data-ratparam="all">Next</button>',
        customPaging: function(slider, i) {
            let num_dot = String(i + 1).padStart(2, '0')
            return $('<button type="button" data-ratid="shop_carousel_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
        },
    };
    $self.slick($.extend({}, carouselConfig, {
        responsive: [
            {
                breakpoint: themeNum.max.m,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: themeNum.max.s,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dotsClass: 'slick-dots c-Carousel_Dots-v2',
                    appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                }
            },
        ]
    }));
    const reBindRat = $('.js-cpn-Carousel + .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
    if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
        RAT.bind(reBindRat);
    }
});
