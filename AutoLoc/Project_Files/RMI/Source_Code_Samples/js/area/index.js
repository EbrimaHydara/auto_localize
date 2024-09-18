import { prefecture_gadget } from '../csv-data/prefecture-gadget.js';
const axios = require('axios');

const carouselConfig = {
    respondTo: 'min',
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots c-Carousel_Dots',
    infinite: true,
    prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    slidesToShow: 1
};
$('.js-Carousel-blog').each(function() {
    let $self = $(this);
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav'),
        slidesToShow: 3,
        adaptiveHeight: false,
        responsive: [
            {
            breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 415,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }));
});

// ページ表示時にカードの高さを揃える
function blogCardsHeigt() {
    const blogItem = document.getElementsByClassName('area-Top-Utility_Blog');
    const blogItems = [];

    blogItem.forEach(element => {
        element.style.height = 'auto';
    });

    blogItem.forEach(element => {
        let blogItemHeigt = element.clientHeight;
        blogItems.push(blogItemHeigt);
    });

    blogItem.forEach(element => {
        element.style.height = blogItems.reduce((a,b)=>Math.max(a,b)) + 'px';
    });
}
setTimeout(blogCardsHeigt, 100);

window.onresize = blogCardsHeigt;


// Switching on 4G area expansion on Area map
const $area_target = $('.js-area-target');
const $area_target_4g = $area_target.filter('[data-target="area-4g"]');
const $area_target_5g =  $area_target.filter('[data-target="area-5g"]');
const $area_button_full = $('#js-fullscreen-btn');
const href_full_5g = $area_button_full.attr('href');
const href_full = href_full_5g.replace('area_area_map_5g', 'area_area_map');
const $area_button_current = $('#area-current-button');
const $area_button_current5g = $('#area-current5g-button');
const $input_current = $('#current');
const $input_current5g = $('#current5g');
const $toggle_map_checkbox = $('#toggle-map-checkbox');
const $mapLocbutton = $('#map-loc-button');

const display_4gMap = () => {
    $area_target_4g.attr('aria-hidden', 'false');
    $area_target_5g.attr('aria-hidden', 'true');
    $area_button_full.attr('href', href_full);
    $area_button_current.trigger('click');
    $input_current5g.prop('checked', false);
    sessionStorage.setItem('currentMap', 'area-current-button');
}

const display_5gMap = () => {
    $area_target_4g.attr('aria-hidden', 'true');
    $area_target_5g.attr('aria-hidden', 'false');
    $area_button_full.attr('href', href_full_5g);
    $area_button_current5g.trigger('click');
    $input_current5g.prop('checked', true);
    sessionStorage.setItem('currentMap', 'area-current5g-button');
}

$toggle_map_checkbox.on('change', e => {
    const checked = e.currentTarget.checked;
    (checked) ? display_4gMap() : display_5gMap();
});

const param = new URLSearchParams(window.location.search);
const mapParam = param.get('map');

if (mapParam === "conversion-current4g") {
    if (typeof window.MAP_JS_LOADED === 'undefined') {
        $input_current.prop('checked', true);
    } else {
        let loadedMap = setInterval(() => {
            if (typeof window.MAP_JS_LOADED !== 'undefined') {
                $toggle_map_checkbox.trigger('click');
                display_4gMap();
                clearInterval(loadedMap);
            }
        }, 100);
    }
} else {
    display_5gMap();
}

if( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(
        () => { $mapLocbutton.attr('aria-hidden', 'false')},
        () => { $mapLocbutton.attr('aria-hidden', 'true')}
    );
} else {
    $mapLocbutton.attr('aria-hidden', 'true');
}


// fixed button

function fixedBottomBtn() {
    let scrollY = window.pageYOffset;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn || !trigger ) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
  }

window.addEventListener('scroll', fixedBottomBtn);

const areaSearchBtn = document.getElementsByClassName('js-area-Search_Btn')[0];
const pacInput = document.getElementById('pac-input');
const isMobileDevice = () => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

areaSearchBtn.addEventListener('click', () => {
    const event = isMobileDevice() ? new KeyboardEvent('keydown', {key: 'Enter'}) : new KeyboardEvent('keydown', {keyCode: 13});
    pacInput.dispatchEvent(event);
});


const prefectures = prefecture_gadget;

const phxPatternName_prefectures = document.getElementById('phx_pattern_name_prefecture');

const prefecture_wrap = document.getElementById('js-prefecture');
const prefecture_wrap_none = document.getElementById('js-prefecture-none');
const prefecture_wrap_none_inhouse = document.getElementById('js-prefecture-none-inhouse');
const prefecture_appear = document.getElementById('js-prefecture-appear');
const prefecture_appear_all = document.getElementById('js-prefecture-appear-all');

const writePrefecture = (prefecture, pref_name, pref_share, pattern, city_name) => {
    const prefecture_link = document.getElementById('js-prefecture-link');
    const prefecture_img_pc = document.getElementById('js-prefecture-img-pc');
    const prefecture_img_sp = document.getElementById('js-prefecture-img-sp');

    let area_name = pref_name;
    let area_path = prefecture;

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
        prefecture_link.href = "/area/" + area_path + "/?l-id=area_" + prefecture + "_banner_" + pattern + "&s-id=area_" + prefecture + "_banner_all";
        prefecture_img_pc.src = "/assets/img/area/bnr/area_" + prefecture + '_pc.png?231108';
        prefecture_img_pc.alt = pref_name + city_name;
        prefecture_img_sp.setAttribute('srcset', "/assets/img/area/bnr/area_" + prefecture + "_sp.png?231108");
        prefecture_appear.setAttribute('data-ratid', "area_" + pattern + "_" + prefecture);
        prefecture_appear_all.setAttribute('data-ratid', "area_all_" + prefecture);
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
                            writePrefecture(prefecture, pref_name, pref_share, pattern);
                            break;
                        default:
                            prefecture_wrap_none_inhouse.style.display = 'block';
                    }
                }
                else {
                    prefecture_wrap_none_inhouse.style.display = 'block';
                }
            }
            else {
                prefecture_wrap_none_inhouse.style.display = 'block';
            }
        });
    }
}

const config = {
    attributes: true,
    attributeFilter: ['value'],
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
