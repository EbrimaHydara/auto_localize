require('intersection-observer');

// simulation
const $choices = $('.js-fee-Simulation_Choice');
const $submitPlan = $('#js-Submit_Plan');
let simulationUrl = '/hikari/fee/simulation/?choices=';

window.onpageshow = function() {
    $choices.each(function() {
        $(this).prop('checked', false);
    });
};

if ($choices.length > 0) {

    $choices.on('change', function() {
        let params = [];
        let $selected = $choices.filter(function() {
            return $(this).prop('checked');
        });

        if($selected.length > 2) {
            if ($submitPlan.length > 0) {
                $submitPlan.prop('disabled', false);
                $submitPlan.removeAttr('aria-disabled');
                $selected.each(function() {
                    params.push(this.id);
                });
                simulationUrl += params.join(',');
            }
        }
    });
}

if ($submitPlan.length > 0) {
    $submitPlan.on('click', function() {
        console.log('submit');
        console.log(simulationUrl);
        window.location.href = simulationUrl;
    });
}


// carousel
const topCarousel = $('.js-hikari-top-Carousel');
const topCarouselSp = $('.js-hikari-top-Carousel-sp');

topCarousel.each(function() {
    let $self = $(this);
    const carouselConfig = {
        arrows: true,
        centerMode: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
        variableWidth: true
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToScroll: 1,
    }));
});


topCarouselSp.each(function() {
    let $self = $(this);
    const carouselConfig = {
        arrows: true,
        centerMode: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
        variableWidth: true
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToScroll: 1,
    }));
});

// fixed cta
const cta = document.querySelector('.g-hikari-Footer_Cta');
const ctaTrigger = document.querySelector('#js-hikari-top-Cta');

if (cta && ctaTrigger) {
    cta.style.display = 'none';

    const options = {
        threshold: [0]
    };
    const observer = new IntersectionObserver((entries) => {
        for(const e of entries) {
            if (e.isIntersecting) {
                cta.style.display = 'none';
            } else {
                cta.style.display = 'block';
            }
        }
    }, options);

    observer.observe(ctaTrigger);

}


const top_information = document.getElementById('hikari-top-information');
const hikari_top_information = document.querySelector('.hikari-top-Information');

if (top_information) {
    $.ajax({
        cache: false,
        // url: 'https://35.221.73.217/api/hikari/information/',
        url: '/api/hikari/information/',
        // url: '/assets/json/test.json',
    })
    .then(data => {
        data.forEach( (data) => {
            const ymd = data.date.split('-');
            const date = ymd[0] + '年' + ymd[1] + '月' + ymd[2] + '日';
            top_information.innerHTML += `<div><dt>${date}</dt><dd><a href="${data.url}">${data.title}</a></dd></div>`;
        });
        if(data.length) {
            hikari_top_information.style.display = 'block';
            hikari_top_information.setAttribute('aria-hidden', false);
        }

    })
    .catch(err => {
        console.log(err);
    });
}
