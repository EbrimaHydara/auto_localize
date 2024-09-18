import 'slick-carousel';
import { carousel } from "./component/carousel";
import { disaster } from "./component/disaster";
import { shopSearch } from "./component/shop-search";
import { maintenance } from "./component/maintenance";
import { fixedButton } from "./component/fixed-button";
import { accordion } from "./component/accordion";
import { tab } from "./component/tab";
import { prefecture_gadget } from "../csv-data/prefecture-gadget";

const axios = require('axios');

// require('intersection-observer');

// // floater
// const floater = document.querySelector('.js-top-Floater');
// const floaterTrigger = document.querySelector('.js-top-Floater_Trigger');

// if (floater && floaterTrigger) {
//     const options = {
//         threshold: [0]
//     };
//     const observer = new IntersectionObserver((entries) => {
//         for(const e of entries) {
//             if (e.isIntersecting) {
//                 floater.classList.remove('hidden');
//             }
//         }
//     }, options);

//     observer.observe(floaterTrigger);

// }

disaster();
maintenance();
const jsLoad = () => {
    carousel();
    fixedButton();
    accordion();
    shopSearch();
    tab()
}

// Pitari Carousel
const minWidth = 835;
const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
const topCarouselSpMnoHolder = $('.js-hikari-top-Carousel-sp');
const topCarouselMnoHolder = $('.js-hikari-top-Carousel');
const topCarouselSpNoMnoHolder = $('.js-hikari-none-top-Carousel-sp');
const topCarouselNoMnoHolder = $('.js-hikari-none-top-Carousel');
const phxPatternName = document.getElementById('phx_pattern_name');
let isSlickWorked = false;
let isSpSlickWorked = false;
let isPcSlickWorked = false;
let isJsLoaded = false;

const topCarouselSp = (el, parameter) => {
    el.each(function () {
        let $self = $(this);
        const carouselConfig = {
            centerMode: true,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2',
            infinite: true,
            prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_carousel_' + parameter + 'left" data-ratevent="click" data-ratparam="all">Previous</button>',
            nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_carousel_' + parameter + 'right" data-ratevent="click" data-ratparam="all">Next</button>',
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
        };
        $self.slick($.extend({}, carouselConfig, {
            lazyLoad: 'progressive',
            appendArrows: $self.next('.l-System_Container').children('.c-Carousel_Nav-v2'),
            appendDots: $self.next('.l-System_Container').children('.c-Carousel_Nav-v2'),
            slidesToScroll: 1,
        }));
    }.bind(el));

    const reBindRat = $('.top-Carousel .c-Carousel_Nav-v2').find('[data-ratId]');
    if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
        RAT.bind(reBindRat);
    }
}

const topCarouselPc = (el, parameter) => {
    el.each(function () {
        let $self = $(this);

        const carouselConfig = {
            arrows: true,
            centerMode: true,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2',
            infinite: true,
            prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_carousel_' + parameter + 'left" data-ratevent="click" data-ratparam="all">Previous</button>',
            nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_carousel_' + parameter + 'right" data-ratevent="click" data-ratparam="all">Next</button>',
            customPaging: function(slider, i) {
                let num_dot = String(i + 1).padStart(2, '0')
                return $('<button type="button" class="top-Carousel_dot" data-ratid="top_carousel_' + parameter + 'indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
            },
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
        };
        $self.slick($.extend({}, carouselConfig, {
            lazyLoad: 'progressive',
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
            slidesToScroll: 1,
        }));
        /* 左右送り機能ここから */
        const $currentInitial = $self.find(".slick-slide[aria-hidden='false']");
        const $nextInitial = $currentInitial.next();
        const $prevInitial = $currentInitial.prev();
        let isInitialState = true;
        $prevInitial.on('click', (e) => {
            e.preventDefault();
            $self.slick('slickPrev');
        });
        $nextInitial.on('click', (e) => {
            e.preventDefault();
            $self.slick('slickNext');
        });
        let $current = null;
        let $next = null;
        let $prev = null;
        $self.on('afterChange', function(event, slick, currentSlide, nextSlide){
            $current = $(slick.$slides.get(currentSlide));
            $next = $current.next();
            $prev = $current.prev();
            if (isInitialState) {
                $prevInitial.off('click');
                $nextInitial.off('click');
                isInitialState = false;
            }
            $prev.on('click', (e) => {
                e.preventDefault();
                $self.slick('slickPrev');
            });
            $next.on('click', (e) => {
                e.preventDefault();
                $self.slick('slickNext');
            });
        });
        $self.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if ($prev && $next) {
                $prev.off('click');
                $next.off('click');
            }
        });
        /* 左右送り機能ここまで */

    }.bind(el))

    const reBindRat = $('.top-Carousel .c-Carousel_Nav-v2').find('[data-ratId]');
    if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
        RAT.bind(reBindRat);
    }
}

const carouselPattern = (mediaQuery) => {
    if (isSpSlickWorked && isPcSlickWorked) {
        return
    }

    if (phxPatternName.value === 'mno_holder') {
        if (!mediaQuery.matches && !isSpSlickWorked) {
            topCarouselSp(topCarouselSpMnoHolder, '');
            isSpSlickWorked = true;
        }
        if (mediaQuery.matches && !isPcSlickWorked) {
            topCarouselPc(topCarouselMnoHolder, '')
            isPcSlickWorked = true
        }
    } else {
        if (!mediaQuery.matches && !isSpSlickWorked) {
            topCarouselSp(topCarouselSpNoMnoHolder, 'none_')
            isSpSlickWorked = true;
        }
        if (mediaQuery.matches && !isPcSlickWorked) {
            topCarouselPc(topCarouselNoMnoHolder, 'none_')
            isPcSlickWorked = true
        }
    }

    if (!isJsLoaded) {
        isJsLoaded = true;
        jsLoad();
    }
}

mediaQuery.addEventListener("change", carouselPattern);

const config = {
    attributes: true,
    attributeFilter: ['value'],
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
            isSlickWorked = true;
            carouselPattern(mediaQuery);
            observer.disconnect();
        }
    });
});

if (phxPatternName.value !== '') {
    isSlickWorked = true;
    carouselPattern(mediaQuery);
} else {
    observer.observe(phxPatternName, config);
}

window.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        if (!isSlickWorked) {
            carouselPattern(mediaQuery);
        }
    }, 2000);
});

// Separate ABtest
const param = location.search;
if (param.includes('abtest=pitari_hikari_none')) {
    topCarouselSp(topCarouselSpNoMnoHolder, 'none_')
    topCarouselPc(topCarouselNoMnoHolder, 'none_')
}
else if (param.includes('abtest=pitari_hikari')) {
    $('#pitari_hikari').show();
    $('#pitari_hikari_none').hide();
    topCarouselSp(topCarouselSpMnoHolder, '')
    topCarouselPc(topCarouselMnoHolder, '')
}

const ovserveGadget = () => {
    let _phx_user_attributes_gadget = '';
    Object.defineProperty(window, 'phx_user_attributes_gadget', {
      get() {
          return _phx_user_attributes_gadget;
      },
      set(value) {
          showLoginGadget(value);
      }
    });
}

const showGadgetSimulation = (val) => {
    switch (val){
        case 'non_login':
        case 'gadget_default':
        case 'default':
            document.getElementById('login-Gadget_Default').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Default-rat').setAttribute('aria-hidden', 'false');
            break;
        case 'gadget_free':
            document.getElementById('login-Gadget_Free').setAttribute('aria-hidden', 'false');
            break;
        case 'mno_holder':
            document.getElementById('login-Gadget_Default').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Default-mno').setAttribute('aria-hidden', 'false');
            break;
        case 'mvno_holder':
            document.getElementById('login-Gadget_Default').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Default-mvno').setAttribute('aria-hidden', 'false');
            break;
        case 'au':
            document.getElementById('login-Gadget_Simulation').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-login').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-au').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Wrap').classList.add('top-Layout_Heading-simulation');
            getUserInfo();
            setLinkParameter('au');
            break;
        case 'docomo':
            document.getElementById('login-Gadget_Simulation').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-login').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-docomo').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Wrap').classList.add('top-Layout_Heading-simulation');
            getUserInfo();
            setLinkParameter('docomo');
            break;
        case 'softbank':
            document.getElementById('login-Gadget_Simulation').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-login').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-softbank').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Wrap').classList.add('top-Layout_Heading-simulation');
            getUserInfo();
            setLinkParameter('softbank');
            break;
        case 'other':
            document.getElementById('login-Gadget_Simulation').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-login').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Simulation-default').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Wrap').classList.add('top-Layout_Heading-simulation');
            document.getElementById('login-Gadget_Simulation-note').setAttribute('aria-hidden', 'true');
            getUserInfo();
            setLinkParameter('default');
            break;
      }
}

const showLoginGadget = (val) => {
    switch (val){
        case 'mno_holder':
            document.getElementById('login-Gadget_Default-login').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Default-holder').setAttribute('aria-hidden', 'false');
            getUserInfo();
            break;
        case 'login_non_mno_holder':
            document.getElementById('login-Gadget_Default-login').setAttribute('aria-hidden', 'false');
            document.getElementById('login-Gadget_Default-nonholder').setAttribute('aria-hidden', 'false');
            getUserInfo();
            break;
        case 'non_login':
            document.getElementById('login-Gadget_Default-logout').setAttribute('aria-hidden', 'false');
            break;
    }
}

const getUserInfo = () => {
    $.ajax({
        url: 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519',
        // url: '/assets/json/dummy-member-information.json',
        xhrFields: { withCredentials: true }
    }).then(data => {
        if ( data.rank > 0 ) {
            showUserInfo(data);
        }
    }).catch(err => {
        console.log(err);
    });
}

const showUserInfo = (data) => {
    const numPoint = String(data.fixedPoint + data.limitedPoint + data.cash).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

    document.getElementById('login-Gadget_Simulation-name').innerText = data.username;
    document.getElementById('login-Gadget_Simulation-point').innerText = numPoint;
    document.getElementById('login-Gadget_Simulation-rank').setAttribute('data-rank', data.rank);

    document.getElementById('login-Gadget_Default-name').innerText = data.username;
    document.getElementById('login-Gadget_Default-point').innerText = numPoint;
    document.getElementById('login-Gadget_Default-rank').classList.add('top-Login_Rank-' + data.rank);
}

const setLinkParameter = (carrier) => {
    const linkResult = document.getElementById('login-Gadget_Simulation-result');
    const myCarrier = carrier;
    const targetPrice = document.getElementById('login-Gadget_Simulation-price');
    const eventChange = new Event('change');

    targetPrice.addEventListener('change', function() {
        linkResult.setAttribute('href', '/fee/mnp-simulation/result/?price=' + this.value + '&carrier=' + myCarrier + '&l-id=mnp-simulation_adget_fee_mnp-simulation-result');
    });

    targetPrice.dispatchEvent(eventChange);
}

// for gadget test
// const url = new URL(window.location.href);
// const params = new URLSearchParams(url.search);
// const simulation = params.get('simulation');
// const gadget = params.get('gadget');
// if (simulation) {
//     showGadgetSimulation(simulation);
// }
// if (gadget) {
//     showLoginGadget(gadget);
// }

const ovserveGadgetSimulation = () => {
    let _phx_user_attributes_gadget_simulation = '';
    Object.defineProperty(window, 'phx_user_attributes_gadget_simulation', {
      get() {
          return _phx_user_attributes_gadget_simulation;
      },
      set(value) {
          showGadgetSimulation(value);
      }
    });
    // the case, it dosent work condition.js
    setTimeout(() => {
        if (typeof window.phx_user_attributes_gadget_simulation === 'string') {
            if (window.phx_user_attributes_gadget_simulation.length > 0) {
                showGadgetSimulation('gadget_default');
            }
        }
    }, 1000)
}

if (typeof window.phx_user_attributes_gadget === 'string') {
    if (window.phx_user_attributes_gadget.length > 0) {
        showLoginGadget(window.phx_user_attributes_gadget);
    }
    else {
        ovserveGadget();
    }
}
else {
    ovserveGadget();
}

if (typeof window.phx_user_attributes_gadget_simulation === 'string') {
    if (window.phx_user_attributes_gadget_simulation.length > 0) {
        showGadgetSimulation(window.phx_user_attributes_gadget_simulation);
    }
    else {
        ovserveGadgetSimulation();
    }
}
else {
    ovserveGadgetSimulation();
}

// show shop banner
const showTargetBnr = (target) => {
    const bnrArea = document.getElementById('js-application-bnr');
    const bnrConfig = {
        login_mno_user: {href:'/campaign/referral/?l-id=top_pitari-banner_campaign_referral', src:'/assets/img/bnr/bnr-referral-1032-78-240415.png', srcset:'/assets/img/bnr/bnr-referral-343-140-240415.png', alt:'楽天モバイル紹介キャンペーン　楽天モバイルを紹介すると1人につき7,000ポイントプレゼント！', ratid:'top_pitari-banner_campaign_referral'},
        login_non_mno_kyc_user: {href:'/guide/verify/group-kyc/?l-id=top_pitari-banner_guide_verify-group-kyc', src:'/assets/img/bnr/apply-kyc-1032-78.png', srcset:'/assets/img/bnr/apply-kyc-343-140.png', alt:'お手続きがより簡単に！楽天銀行・楽天証券・楽天生命のいずれかをご契約中のお客様は面倒な本人確認書類の撮影・提出が不要で申込OK!※楽天銀行・楽天証券・楽天生命のご契約中でも、条件を満たさない場合は本人確認書類の撮影・提出が必要です。', ratid:'top_pitari-banner_guide_verify-group-kyc'},
        login_non_mno_non_kyc_user: {href:'/shop/weekday-reservation/?l-id=top_non-mno-non-kyc_shop_weekday-reservation', src:'/assets/img/bnr/bnr-weekday-reservation-1032-78-240418.png', srcset:'/assets/img/bnr/bnr-weekday-reservation-343-108-240418.png', alt:'平日限定！楽天モバイルショップの来店予約＆ご来店アンケートに回答で100ポイント！', ratid:'top_pitari-banner_shop_weekday-reservation_login_non_mno_non_kyc_user'},
    };
    if (target) {
        if (target !== 'non_login') {
            bnrArea.querySelector('a').href = bnrConfig[target].href;
            bnrArea.querySelector('source').srcset = bnrConfig[target].srcset;
            const img = bnrArea.querySelector('img');
            ['src', 'alt'].forEach(v => img[v] = bnrConfig[target][v]);
            bnrArea.querySelector('[data-ratevent="appear"]').dataset.ratid = bnrConfig[target].ratid;
        }
        document.getElementById('js-application-ratid').style.height = '1px';
        if (window.RAT && window.RAT.bindAppear) {
            const appearBanner = window.RAT.$Selector('#js-application-ratid');
            window.RAT.bindAppear(appearBanner);
        }
    }
}
if (window.phx_user_attributes_application_bnr) {
    showTargetBnr(window.phx_user_attributes_application_bnr);
} else {
    let _phx_user_attributes_application_bnr = '';
    Object.defineProperty(window, 'phx_user_attributes_application_bnr', {
        get() {
            return _phx_user_attributes_application_bnr;
        },
        set(value) {
            _phx_user_attributes_application_bnr = value;
            showTargetBnr(value);
        }
    });
    // the case, it dosent work condition.js
    setTimeout(() => {
        if (!window.phx_user_attributes_application_bnr) showTargetBnr('non_login');
    }, 1000);
}

const prefectures = prefecture_gadget;

const phxPatternName_prefectures = document.getElementById('phx_pattern_name_prefecture');

const prefecture_wrap = document.getElementById('js-prefecture');
const prefecture_wrap_none = document.getElementById('js-prefecture-none');
const prefecture_wrap_none_inhouse = document.getElementById('js-prefecture-none-inhouse');

const writePrefecture = (prefecture, pref_name, pref_share, pattern, city_name) => {

    const prefecture_shop = document.getElementById('js-prefecture-shop');
    const prefecture_area = document.getElementById('js-prefecture-area');
    const prefecture_area_img = document.getElementById('js-prefecture-area-img');
    const prefecture_img = document.getElementById('js-prefecture-img');
    const prefecture_names = document.getElementsByClassName('js-prefecture-name');
    const prefecture_appear = document.getElementById('js-prefecture-appear');
    const prefecture_appear_all = document.getElementById('js-prefecture-appear-all');
    const prefecture_appear_up = document.getElementById('js-prefecture-appear-up');
    const prefecture_appear_all_up = document.getElementById('js-prefecture-appear-all-up');
    const prefecture_share1 = document.getElementById('js-prefecture-share1');
    const prefecture_share2 = document.getElementById('js-prefecture-share2');
    const prefecture_map = document.getElementById('js-prefecture-map');

    let area_name = pref_name;
    let area_path = prefecture;
    let tmp_share = [];

    city_name = (typeof city_name !== 'undefined') ? city_name : '';

    if (city_name) {
        area_name = city_name;

        for (const entry of prefectures) {
            if (entry.area1 === pref_name) {
                area_path = entry.id + '/' + area_path;
                break;
            }
        }
    }

    if (prefecture_wrap) {
        const area_href = "/area/" + area_path + "/?l-id=top_area_" + prefecture + "_" + pattern + "&s-id=top_area_" + prefecture + "_all";

        prefecture_shop.href = "/shop/search/?l-id=top_shop_search_" + prefecture + "_" + pattern + "&s-id=top_shop_search_" + prefecture + "_all&prefecture=" + pref_name + "&city=" + city_name + "&type=gadget";
        prefecture_area.href = area_href;
        prefecture_area_img.href = area_href;
        prefecture_img.src = "/assets/img/common/prefecture/prefecture-map-" + prefecture + ".png"

        prefecture_names.forEach(prefecture_name => {
            prefecture_name.textContent = area_name;
        });

        prefecture_map.href = "/area/?l-id=top_area-top_" + prefecture + "_" + pattern + "&s-id=top_area-top_" + prefecture + "_all";
        tmp_share = pref_share.split('.');
        prefecture_share1.textContent = tmp_share[0];
        prefecture_share2.textContent = tmp_share[1];
        prefecture_appear.setAttribute('data-ratid', "area_" + pattern + "_" + prefecture);
        prefecture_appear_all.setAttribute('data-ratid', "area_all_" + prefecture);
        prefecture_appear_up.setAttribute('data-ratid', "area-upper_" + pattern + "_" + prefecture);
        prefecture_appear_all_up.setAttribute('data-ratid', "area-upper_all_" + prefecture);
        prefecture_wrap.style.display = 'block';
    }
}

const getIpData = async function () {
    try {
        const response = await axios.get('https://map.api.geo-platform.global.rakuten.com/ip_location');
        const geo = response.data.data;
        return { geo };
    } catch (error) {
        prefecture_wrap_none_inhouse.style.display = 'block';
    }
};

const showPrefecture = (pattern) => {

    if (pattern === 'pitari') {

        const prefecture = phxPatternName_prefectures.value;
        let pref_name = null;
        let city_name = null;
        let pref_share = null;

        for (const entry of prefectures) {
            if (entry.id === prefecture) {
                pref_name = entry.area1;
                city_name = entry.area2;
                pref_share = entry.share;
                break;
            }
        }

        if (pref_name !== null) {
            writePrefecture(prefecture, pref_name, pref_share, pattern, city_name);
        }
        else {
            const prefecture_rat = document.getElementById('js-prefecture-rat-none');
            if (prefecture === "other") {
                prefecture_rat.setAttribute('data-ratid', "area_other-pitari");
            }
            else if (prefecture === "default") {
                prefecture_rat.setAttribute('data-ratid', "area_default-pitari");
            }
            prefecture_wrap_none.style.display = 'block';

            showPrefecture('inhouse');
        }
    }
    else if (pattern === 'inhouse') {

        getIpData().then(data => {
            const geo = data.geo;
            const accuracy = document.getElementById('js-inhouse');
            const accuracy_radius = document.getElementById('js-inhouse-accuracy');
            const prefecture_jp = geo.subdivisions[0].names.ja;
            let prefecture = null;
            let pref_name = null;
            let pref_share = null;

            for (const entry of prefectures) {
                if (entry.area1 === prefecture_jp) {
                    pref_name = entry.area1;
                    pref_share = entry.share;
                    prefecture = entry.id;
                    break;
                }
            }

            if (pref_name !== null) {
                let radius = geo.location.accuracy_radius;
                let type = geo.connection_type.toLowerCase().replace('/', '');
                let device = 'pc';
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    device = 'sp';
                }
                accuracy_radius.setAttribute('data-ratid', "prefecture_" + device + '_' + type + '_' + radius);
                accuracy.style.display = 'block';

                if (radius < 200) {
                    switch(type) {
                        case 'corporate':
                        case 'cabledsl':
                            break;
                    }
                }
                writePrefecture(prefecture, pref_name, pref_share, pattern, '');
            }
            else {
                prefecture_wrap_none_inhouse.style.display = 'block';
            }
        });
    }
}

const observer_prefectures = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && phxPatternName_prefectures.value !== '') {
        showPrefecture('pitari');
        observer_prefectures.disconnect();
      }
    });
});

if (phxPatternName_prefectures.value !== '') {
    showPrefecture('pitari');
} else {
    observer_prefectures.observe(phxPatternName_prefectures, config);
}

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const prefecture = params.get('prefecture');
if (prefecture) {
    phxPatternName_prefectures.value = prefecture;
}
