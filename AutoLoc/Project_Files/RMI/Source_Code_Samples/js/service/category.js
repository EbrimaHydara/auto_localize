const serviceCarouselRelated = $('.js-service-Carousel');

serviceCarouselRelated.each(function() {
    let $self = $(this);
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: false,
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    }));
});