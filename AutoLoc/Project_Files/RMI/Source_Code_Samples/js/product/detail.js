import { themeNum } from "../common/theme";

$(function() {

    const mainConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
    };

    const thumbnailConfig = {
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        infinite: false
    };

    const colorlength = $('.js-color').length;

    for ( let i = 0; i <= colorlength; i++ ) {
        let mainSlick = $(`.js-main${i}`).not('.slick-initialized').slick($.extend({}, mainConfig, {
            asNavFor: `.js-thumbnail${i}`
        }));

        let thumbnailSlick = $(`.js-thumbnail${i}`).not('.slick-initialized').slick($.extend({}, thumbnailConfig, {
            asNavFor: `.js-main${i}`
        }));


        mainSlick.on('beforeChange', () => {
            if (thumbnailSlick.find('li').length < 5) {
                thumbnailSlick.slick('slickSetOption', 'infinite', false, true);
            }
        });

        const colorLimited = $('.js-limited').data('color');

        $(`.js-color${i}`).on('click', function() {
            let $self = $(this);
            $('.js-color').attr('aria-current', 'false');
            $self.attr('aria-current', 'true');

            if( colorLimited == i ) {
                $('.js-limited').attr('aria-hidden', 'false');
            } else {
                $('.js-limited').attr('aria-hidden', 'true');
            }

            $('.js-device').each(function() {
                $(this).attr('aria-hidden', 'true');
            });
            $(`.js-main${i}`).attr('aria-hidden', 'false');
            $(`.js-thumbnail${i}`).attr('aria-hidden', 'false');

            mainSlick.slick('unslick');
            mainSlick.not('.slick-initialized').slick($.extend({}, mainConfig, {
                asNavFor: `.js-thumbnail${i}`,
            }));
            thumbnailSlick.slick('unslick');
            thumbnailSlick.not('.slick-initialized').slick($.extend({}, thumbnailConfig, {
                asNavFor: `.js-main${i}`
            }));
        });
    }

    $('.js-accessories-main').slick($.extend({}, mainConfig, {
        asNavFor: '.js-accessories-thumbnail',
        infinite: true
    }));

    $('.js-accessories-thumbnail').slick($.extend({}, thumbnailConfig, {
        asNavFor: '.js-accessories-main',
        infinite: true,
        responsive: [{
            breakpoint: 415,
                settings: {
                    arrows: true,
                }
            }
        ]
    }));

    // related Accessory Carousel
    const relatedAccessoryCarousel = $(`.js-product-detail-Carousel-related`);
    relatedAccessoryCarousel.each(function() {
        let $self = $(this);
        const carouselConfig = {
            respondTo: 'min',
            slidesToShow: 3,
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
            infinite: true,
            prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
        };
        $self.slick($.extend({}, carouselConfig, {
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        }));
    });
    relatedAccessoryCarousel.slick("slickSetOption", "slidesToScroll", 3, true);
    relatedAccessoryCarousel.slick('slickSetOption', "responsive", [
        {
            breakpoint: themeNum.max.m,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                dotsClass: 'slick-dots c-Carousel_Dots-v2',
            }
        },
        {
            breakpoint: themeNum.max.s,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots-v2',
            }
        }], true
    );
});
