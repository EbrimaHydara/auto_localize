const Carousel = $('.js-bnr-carousel');

Carousel.each(function() {
    let $self = $(this);
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 4,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 415,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
        ]
    }));
});

document.getElementsByClassName('i-Unlimit')[0].style.backgroundColor = 'white';

const path = location.pathname;
const search = location.search;
let ekey = "";
const setKey = function(ekey) {
    $.ajax({
        url: '/assets/json/campaign-rakuten-employee.json',
    }).done(function (data) {
        if (path.indexOf("/en/") > -1) {
            $('.js-name').html("Message from " + ekey);
            data.forEach(elem => {
                if (ekey === elem['紹介コード']) {
                    if (elem['コード'] === '') {
                        elem['コード'] = elem['紹介コード'];
                    }
                    $('.js-name').html("Message from " + changeName(elem['コード']));
                    $('.js-key').html(ekey);
                    return false;
                }
            });
        }else {
            $('.js-name').html(ekey + "から特別なお客様へ");
            data.forEach(elem => {
                if (ekey === elem['紹介コード']) {
                    if (elem['コード'] === '') {
                        elem['コード'] = elem['紹介コード'];
                    }
                    $('.js-name').html(changeName(elem['コード']) + "から特別なお客様へ");
                    $('.js-key').html(ekey);
                    return false;
                }
            });
        }
    });
}
if (path.indexOf("/entry/") > -1 && path.indexOf("/vip/") === -1) {
    if (search.indexOf('code=') > -1) {
        ekey = search.split('code=')[1].split('&')[0];
    }
    if (path.indexOf("/en/") > -1) {
        if (ekey.length === 7) {
            $('.js-mno').attr('href', "https://oubo.rakuten.co.jp/apply/rmobile/referralen/221111?ekey=" + ekey);
            $('.js-mvno').attr('href', "https://oubo.rakuten.co.jp/apply/rmobile/referralmvno/221109?ekey=" + ekey);
            $('.js-shop').attr('href', "https://oubo.rakuten.co.jp/apply/mobile/referralshop/221109?ekey=" + ekey);
            $('.js-to-jp').attr('href', "/campaign/rakuten-employee/entry/?code=" + ekey);
            setKey(ekey);
        }
        else {
            location.href = "https://network.mobile.rakuten.co.jp/campaign/rakuten-employee/en/";
        }
    }
    else {
        if (ekey.length === 7) {
            $('.js-mno').attr('href', "https://oubo.rakuten.co.jp/apply/rmobile/referralmnp/221109?ekey=" + ekey);
            $('.js-mvno').attr('href', "https://oubo.rakuten.co.jp/apply/rmobile/referralmvno/221109?ekey=" + ekey);
            $('.js-shop').attr('href', "https://oubo.rakuten.co.jp/apply/mobile/referralshop/221109?ekey=" + ekey);
            $('.js-to-en').attr('href', "/campaign/rakuten-employee/en/entry/?code=" + ekey);
            setKey(ekey);
        }
        else {
            location.href = "https://network.mobile.rakuten.co.jp/campaign/rakuten-employee/";
        }
    }
}
else if (path.indexOf("/vip/") > -1) {
    ekey = 'EX10001';

    $('.js-mno').attr('href', "https://oubo.rakuten.co.jp/apply/rmobile/referralmnp/221109?ekey=" + ekey);
    $('.js-mvno').attr('href', "https://oubo.rakuten.co.jp/apply/rmobile/referralmvno/221109?ekey=" + ekey);
    $('.js-shop').attr('href', "https://oubo.rakuten.co.jp/apply/mobile/referralshop/221109?ekey=" + ekey);
}
function changeName(str) {
    let text = [];
    for (let i = 0; i < str.length; i++) {
      text.push(String.fromCharCode(str.charCodeAt(i) - 5));
    }
    return text.join('');
}
