const topCarouselProduct = $('.js-area-5g-Carousel');
import { themeNum } from "../common/theme";
import { addClassBasedOnSlideCount } from "../common/component/carousel";

topCarouselProduct.each(function() {
    let $self = $(this);
    $self.on('init breakpoint', (_, slick) => {
        addClassBasedOnSlideCount(slick);
    });
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
    };
    $self.slick($.extend({}, carouselConfig, {
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
                    slidesToShow: 1,
                    dotsClass: 'slick-dots c-Carousel_Dots-v2',
                    appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                }
            }
        ]
    }));
});
