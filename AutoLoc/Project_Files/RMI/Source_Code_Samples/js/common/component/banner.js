import 'slick-carousel';

export const banner = () => {
    const bannerConfig = {
        respondTo: 'min',
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Banner_Dots',
        infinite: true,
        prevArrow: '<button class="c-Banner_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Banner_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
        slidesToShow: 4,
        centerMode: true
    };
    $('.js-Banner').each(function() {
        let $self = $(this);
        if( $self.find('.c-Banner_List-item').length > 4 ){
            bannerConfig.centerMode = false;
        }
        $self.slick($.extend({}, bannerConfig, {
            appendArrows: $self.next('.c-Banner_Nav'),
            appendDots: $self.next('.c-Banner_Nav'),
            responsive: [
                {
                breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false
                    }
                },
                {
                breakpoint: 415,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false
                    }
                }
            ]
        }));
    });
};
