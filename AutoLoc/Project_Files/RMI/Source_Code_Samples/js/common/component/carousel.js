import 'slick-carousel';
import { themeNum } from '../../common/theme'

export const addClassBasedOnSlideCount = ($slickCarousel) => {
    if ($slickCarousel.slideCount <= 6) {
        const $dotsBar = $slickCarousel.$slider.next('.c-Carousel_Nav-v2-wrap')?.find('.c-Carousel_Dots-v2-bar');
        $dotsBar?.addClass('c-Carousel_Dots-v2-bar-max-width-104');
    }
}

export const carousel = () => {
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
    $('.js-Carousel-single').each(function() {
        let $self = $(this);
        setLoadingImage($self);
        $self.slick($.extend({}, carouselConfig, {
            dotsClass: 'slick-dots c-Carousel_Dots-v2',
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
        }));
    });
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
    // $('.c-Carousel.c-Carousel-variable').each(function() {
    //     let $self = $(this);
    //     $self.slick($.extend({}, carouselConfig, {
    //         appendArrows: $self.next('.c-Carousel_Nav'),
    //         appendDots: $self.next('.c-Carousel_Nav'),
    //         slidesToShow: 1,
    //         centerMode: true,
    //         variableWidth: true
    //     }));
    // });

    // Main carousel
    const mainCarousel = $('.js-c-Carousel_Main');
    const mainCarouselSp = $('.js-c-Carousel_Main-sp');
    const mainCarouselV2 = $('.js-c-Carousel-v2_Main');
    const mainCarouselSpV2 = $('.js-c-Carousel-v2_Main-sp');

    //共通idで可とのことで、出しわけ見送り
    /*const pathName = window.location.pathname.replace(/index\.html$/, '');
    const ratIdList = {
        '/product/': {
            next: 'product_carousel_right',
            prev: 'product_carousel_left',
        },
        '/product/accessory/smartphone-related/': {
            next: 'accessory_carousel_right',
            prev: 'accessory_carousel_left',
        },
        '/product/accessory/apple/': {
            next: 'accessory_apple_carousel_right',
            prev: 'accessory_apple_carousel_left',
        },
        '/product/accessory/apple-related/': {
            next: 'accessory_apple-related_carousel_right',
            prev: 'accessory_apple-related_carousel_left',
        },
        '/service/': {
            next: 'service_carousel_right',
            prev: 'service_carousel_left',
        },
    };*/
    //const ratIdPrev = ratIdList[pathName] ? `data-ratid="${ratIdList[pathName].prev}" data-ratevent="click" data-ratparam="all"` : '';
    //const ratIdNext = ratIdList[pathName] ? `data-ratid="${ratIdList[pathName].next}" data-ratevent="click" data-ratparam="all"` : '';
    const ratIdPrev = 'carousel_left';
    const ratIdNext = 'carousel_right';

    if (!mainCarouselV2) {
        mainCarousel.each(function() {
            let $self = $(this);
            const carouselConfig = {
                arrows: true,
                centerMode: true,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots',
                infinite: true,
                prevArrow: `<button class="c-Carousel_Nav-prev c-Carousel_Main-nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>`,
                nextArrow: `<button class="c-Carousel_Nav-next c-Carousel_Main-nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>`,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 4000,
                lazyLoad: 'progressive'
            };
            setLoadingImage($self);
            $self.slick($.extend({}, carouselConfig, {
                appendDots: $self.next('.c-Carousel_Nav'),
                slidesToScroll: 1,
            }));
        });
    } else {
        mainCarouselV2.each(function() {
            let $self = $(this);
            const carouselConfig = {
                arrows: true,
                centerMode: true,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots-v2',
                infinite: true,
                prevArrow: `<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="${ratIdPrev}" data-ratevent="click" data-ratparam="all">Previous</button>`,
                nextArrow: `<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="${ratIdNext}" data-ratevent="click" data-ratparam="all">Next</button>`,
                customPaging: function(slider, i) {
                    let num_dot = String(i + 1).padStart(2, '0')
                    return $('<button type="button" data-ratid="carousel_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
                },
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 4000,
                lazyLoad: 'progressive'
            };
            setLoadingImage($self);
            $self.slick($.extend({}, carouselConfig, {
                appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                slidesToScroll: 1,
            }));
            /* 左右送り機能ここから */
            const $currentInitial = $self.find(".slick-slide[aria-hidden='false']");
            const $nextInitial = $currentInitial.next();
            const $prevInitial = $currentInitial.prev();
            let isInitialState = true;
            $prevInitial.on('click', (e) => {
                e.preventDefault();
                $self.slick('slickPrev');
            });
            $nextInitial.on('click', (e) => {
                e.preventDefault();
                $self.slick('slickNext');
            });
            let $current = null;
            let $next = null;
            let $prev = null;
            $self.on('afterChange', function(event, slick, currentSlide, nextSlide){
                $current = $(slick.$slides.get(currentSlide));
                $next = $current.next();
                $prev = $current.prev();

                if (isInitialState) {
                    $prevInitial.off('click');
                    $nextInitial.off('click');
                    isInitialState = false;
                }

                $prev.on('click', (e) => {
                    e.preventDefault();
                    $self.slick('slickPrev');
                });

                $next.on('click', (e) => {
                    e.preventDefault();
                    $self.slick('slickNext');
                });

            });
            $self.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                if ($prev && $next) {
                    $prev.off('click');
                    $next.off('click');
                }
            });
            /* 左右送り機能ここまで */
        });
        const reBindRat = $('.c-Carousel_Nav-v2-wrap > .c-Carousel_Nav-v2').find('[data-ratId]');
        if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
            RAT.bind(reBindRat);
        }
    }

    if (!mainCarouselSpV2) {
        mainCarouselSp.each(function() {
            let $self = $(this);
            const carouselConfig = {
                centerMode: true,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots',
                infinite: true,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 4000,
                lazyLoad: 'ondemand'
            };
            setLoadingImage($self);
            $self.slick($.extend({}, carouselConfig, {
                appendDots: $self.next('.c-Carousel_Nav'),
                slidesToScroll: 1,
            }));
        });
    } else {
        mainCarouselSpV2.each(function() {
            let $self = $(this);
            const carouselConfig = {
                centerMode: true,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots-v2',
                infinite: true,
                prevArrow: `<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="${ratIdPrev}" data-ratevent="click" data-ratparam="all">Previous</button>`,
                nextArrow: `<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="${ratIdNext}" data-ratevent="click" data-ratparam="all">Next</button>`,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 4000,
                lazyLoad: 'ondemand'
            };
            setLoadingImage($self);
            $self.slick($.extend({}, carouselConfig, {
                appendArrows: $self.next('.l-System_Container').children('.c-Carousel_Nav-v2'),
                appendDots: $self.next('.l-System_Container').children('.c-Carousel_Nav-v2'),
                slidesToScroll: 1,
            }));
        });
        const reBindRat = $('.l-System_Container > .c-Carousel_Nav-v2').find('[data-ratId]');
        if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
            RAT.bind(reBindRat);
        }
    }
};
