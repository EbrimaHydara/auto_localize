$('.ichiba_point-Carousel').slick({
  slidesToShow:4,
  slidesToScroll:4,
  autoplaySpeed:5000,
  dots:true,
  arrows: true,
  prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
  nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
  responsive: [{
    breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
    }
  }
  ]
});
