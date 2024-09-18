import ScrollHint from 'scroll-hint';
import { addClassBasedOnSlideCount } from "../common/component/carousel";

window.addEventListener('DOMContentLoaded', ()=> {
    new ScrollHint('.js-scrollable', {
        i18n: {
            scrollable: 'スクロール\nできます'
        }
    });

    const carouselConfig = {
        respondTo: 'min',
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
        slidesToShow: 1
    };

    $('.js-ad-lp-Carousel-pc-multi-sp-single').each(function() {
        let $self = $(this);
        $self.on('init breakpoint', (_, slick) => {
            addClassBasedOnSlideCount(slick);
        });
        setLoadingImage($self);
        $self.slick($.extend({}, carouselConfig, {
            appendArrows: $self.next('.c-Carousel_Nav'),
            appendDots: $self.next('.c-Carousel_Nav'),
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 769,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                breakpoint: 415,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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

    // const topCarouselProduct = $('.js-top-Carousel-product');

    // topCarouselProduct.each(function() {
    //     let $self = $(this);
    //     const carouselConfig = {
    //         respondTo: 'min',
    //         slidesToShow: 3,
    //         arrows: true,
    //         dots: true,
    //         dotsClass: 'slick-dots c-Carousel_Dots',
    //         infinite: true,
    //         prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
    //         nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    //     };
    //     $self.slick($.extend({}, carouselConfig, {
    //         appendArrows: $self.next('.c-Carousel_Nav'),
    //         appendDots: $self.next('.c-Carousel_Nav')
    //     }));
    // });

    // topCarouselProduct.slick("slickSetOption", "slidesToScroll", 3, true);
    // topCarouselProduct.slick('slickSetOption', "responsive", [
    //         {
    //             breakpoint: 769,
    //             settings: {
    //                 slidesToScroll: 2,
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 415,
    //             settings: {
    //                 slidesToScroll: 1,
    //                 slidesToShow: 1,
    //                 dots: false,
    //             }
    //         }
    //     ], true
    // );
});
