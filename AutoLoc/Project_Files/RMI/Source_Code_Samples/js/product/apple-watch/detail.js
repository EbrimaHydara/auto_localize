// Top Product Carousel (Apple Watch)

const topCarouselProductWatchBand = $('.js-top-Carousel-product-watch-band');

topCarouselProductWatchBand.each(function () {
  let $self = $(this);
  const carouselConfig = {
    respondTo: 'min',
    slidesToScroll: 3,
    slidesToShow: 3,
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots c-Carousel_Dots',
    infinite: true,
    prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
  };
  $self.slick($.extend({}, carouselConfig, {
    appendArrows: $self.next('.c-Carousel_Nav'),
    appendDots: $self.next('.c-Carousel_Nav')
  }));
});

topCarouselProductWatchBand.slick('slickSetOption', "responsive", [{
    breakpoint: 769,
    settings: {
      slidesToScroll: 2,
      slidesToShow: 2
    }
  },
  {
    breakpoint: 415,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1,
      dots: false,
    }
  }
], true);