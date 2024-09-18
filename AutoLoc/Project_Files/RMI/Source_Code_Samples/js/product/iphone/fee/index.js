import ScrollHint from 'scroll-hint';

window.addEventListener('DOMContentLoaded', function(){
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});

const iphoneCarousel = $('.js-iphone-carousel');

iphoneCarousel.each(function() {
    let $self = $(this);
    const carouselConfig = {
        respondTo: 'min',
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-prev top-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next top-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
            },
        ]
    };
    $self.slick($.extend({}, carouselConfig, {
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToScroll: 1,
    }));
});
