require('intersection-observer');

// animation
const animation1 = document.querySelectorAll('.js-animation-1');
const animation2 = document.querySelectorAll('.js-animation-2');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('why-Animation_Zoom1');
        } else {
            entry.target.classList.remove('why-Animation_Zoom1');
        }
    });
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('why-Animation_Zoom2');
        } else {
            entry.target.classList.remove('why-Animation_Zoom2');
        }
    });
});

animation1.forEach(target => {
    observer1.observe(target);
});

animation2.forEach(target => {
    observer2.observe(target);
});


// Loading
document.addEventListener('DOMContentLoaded', () => {
    const videoWrappers = document.getElementsByClassName('js-video-wrappers');
    for(let i = 0; i < videoWrappers.length; i++) {
        const videoWrapper = videoWrappers[i];
        const video = videoWrapper.getElementsByTagName('video')[0];
        video.addEventListener('canplay', () => {
            videoWrapper.classList.add('js-active');
        }, false);
    }
}, false);


//  Accordion close
const accordionClose = document.querySelectorAll('.js-Accordion_Close');

accordionClose.forEach((element) => {
    element.addEventListener('click', () => {
        const targetId = element.getAttribute('href');
        const targetAccordion  = targetId.slice(1);
        const targetNum  = targetId.slice(-1);
        document.getElementById(targetAccordion).setAttribute('aria-expanded','false');
        document.getElementById('accordion-content-' + targetNum ).setAttribute('aria-expanded','false');
        document.getElementById('accordion-content-' + targetNum ).style.display = 'none';
    });
});


// Carousel custom
const WhyCarousel = $('.js-Why-Carousel');
const WhyCarouselAuto = $('.js-Why-Carousel-auto');

const carouselConfig = {
    arrows: true,
    dots: true,
    slidesToShow: 4,
    dotsClass: 'slick-dots c-Carousel_Dots why-Util_Carousel-dots',
    infinite: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    slidesToScroll: 1
};

const carouselNav = (self, isAutplay) => {
    let individualSettingProp = {
        appendDots: self.next('.c-Carousel_Nav'),
        appendArrows: self.next('.c-Carousel_Nav')
    }
    individualSettingProp.autoplay = isAutplay;
    self.slick($.extend({}, carouselConfig, individualSettingProp));
}

WhyCarousel.each(function() {
    carouselNav(WhyCarousel, true);
});

WhyCarouselAuto.each(function() {
    carouselNav(WhyCarouselAuto, false);
});
