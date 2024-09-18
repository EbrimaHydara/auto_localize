import { themeNum } from "../common/theme";
import { addClassBasedOnSlideCount } from "../common/component/carousel";
import { displayAttention } from "../common/attention-info";

// Ajax cache clear
$.ajaxSetup({
    cache: false
});

// News
const $dispTopNews = $('#top-news');

if ($dispTopNews) {

    $.getJSON({
        url: '/web-api/shop-top/',
        dataType: 'json'
    })
        .done(data => {
            if (data.list.length > 0) {

                let html = [
                    '<div class="c-News js-Readmore" data-readmore-show="2">',
                    '<div class="c-News_Head">',
                    '<h2 class="c-News_Heading"><span>楽天モバイルショップからのお知らせ</span></h2>',
                    '</div>',
                    '<div class="c-News_Body">',
                    '<dl class="c-News_List">'
                ].join("");

                for (let i = 0; i < data.list.length; i++) {
                    html += [
                        '<div class="c-News_List-item c-Readmore_Content js-Readmore_Content" aria-hidden="false">',
                        '<dt>', data.list[i].published_date, '</dt>',
                        '<dd>',
                        '<a href="', data.list[i].link, '">', data.list[i].title, '</a>',
                        '</dd>',
                        '</div>',
                    ].join("");
                }

                html += [
                    '</dl>',
                    '</div>',
                    '<div class="c-News_Foot js-Readmore_Trigger">',
                    '<button class="c-News_Readmore"><span class="c-Icon_Chevron-right c-News_Readmore-arrow"></span>もっと見る</button>',
                    '</div>',
                    '</div>'
                ].join("");

                $dispTopNews.html(html);

                const newsBoxes = document.querySelectorAll('.js-Readmore');

                newsBoxes.forEach(newsBox => {
                    let conts = newsBox.querySelectorAll('.js-Readmore_Content');
                    let trigger = newsBox.querySelector('.js-Readmore_Trigger');
                    let showNum = newsBox.getAttribute('data-readmore-show');
                    let i = 0;

                    if (conts.length <= showNum) {
                        trigger.parentNode.removeChild(trigger);
                    }
                    conts.forEach(el => {
                        if (i >= showNum) {
                            el.setAttribute('aria-hidden', true);
                        }
                        i++;
                    });
                    trigger.addEventListener('click', (e) => {
                        conts.forEach((el) => {
                            el.setAttribute('aria-hidden', false);
                        });
                        e.currentTarget.style.display = 'none';
                    });
                });
            }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
            console.log(jqXHR.status);
        });
}


// attention

const $dispAttention = $('#attention');

if ($dispAttention) {
    $.ajax({
        url: '/web-api/attention-shop-top/',
        dataType: 'json'
    })
    .then(data => {
        const html = displayAttention(data)
        $dispAttention.html(html)
    })
    .catch(err => {
        console.log(err);
    });
}

// Carousel Shop

$('.js-shop-Carousel').each(function () {
    let $self = $(this);
    $self.on('init breakpoint', (_, slick) => {
        addClassBasedOnSlideCount(slick);
    });
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
        infinite: true,
        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="shop_carousel_left" data-ratevent="click" data-ratparam="all">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="shop_carousel_right" data-ratevent="click" data-ratparam="all">Next</button>',
        customPaging: function(slider, i) {
            let num_dot = String(i + 1).padStart(2, '0')
            return $('<button type="button" data-ratid="shop_carousel_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
        },
    };
    $self.slick($.extend({}, carouselConfig, {
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dotsClass: 'slick-dots c-Carousel_Dots-v2',
                    appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                }
            },
        ]
    }));
    const reBindRat = $('.js-shop-Carousel + .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
    if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
        RAT.bind(reBindRat);
    }
});
