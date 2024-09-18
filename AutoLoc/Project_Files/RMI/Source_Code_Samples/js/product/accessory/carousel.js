import { themeNum } from '../../common/theme'
import { addClassBasedOnSlideCount } from "../../common/component/carousel";
const topCarouselProduct = $('.js-accessory-top-Carousel');

topCarouselProduct.each(function() {
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
        prevArrow: `<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>`,
        nextArrow: `<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>`,
};
    console.log($self.next('.c-Carousel_Nav'));
    $self.slick($.extend({}, carouselConfig, {
        //lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: themeNum.max.m,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: themeNum.max.s,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    dotsClass: 'slick-dots c-Carousel_Dots-v2',
                    appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                }
            }
        ]
    }));
});

// Carousel Benefit

const topCarouselBenefit = $('.js-accessory-top-Carousel-benefit');

topCarouselBenefit.each(function() {
    let $self = $(this);
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 4,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
            breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }));
});
