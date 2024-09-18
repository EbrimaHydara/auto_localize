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
        infinite: true
    };

    const colorlength = $('.js-color').length;

    for ( let i = 0; i <= colorlength; i++ ) {
        let mainSlickHero = $(`.js-main-hero${i}`).not('.slick-initialized').slick($.extend({}, mainConfig, {
            asNavFor: `.js-thumbnail-hero${i}`
        }));

        let mainSlick = $(`.js-main${i}`).not('.slick-initialized').slick($.extend({}, mainConfig, {
            asNavFor: `.js-thumbnail${i}`
        }));

        let thumbnailSlick = $(`.js-thumbnail${i}`).not('.slick-initialized').slick($.extend({}, thumbnailConfig, {
            asNavFor: `.js-main${i}`
        }));


        mainSlick.on('beforeChange', () => {
            if (thumbnailSlick.find('li').length < 6) {
                thumbnailSlick.slick('slickSetOption', 'infinite', false, true);
            }
        });

        $(`.js-color-hero${i}`).on('click', function() {
            let $self = $(this);
            $('.js-color-hero').attr('aria-current', 'false');
            $self.attr('aria-current', 'true');

            $('.js-device-hero').each(function() {
                $(this).attr('aria-hidden', 'true');
            });
            $(`.js-main-hero${i}`).attr('aria-hidden', 'false');

            mainSlickHero.slick('unslick');
            mainSlickHero.not('.slick-initialized').slick($.extend({}, mainConfig));
        });

        $(`.js-color${i}`).on('click', function() {
            let $self = $(this);
            $('.js-color').attr('aria-current', 'false');
            $self.attr('aria-current', 'true');

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
});


