import { prefecture_gadget } from "../csv-data/prefecture-gadget";

const axios = require('axios');

const config = {
    attributes: true,
    attributeFilter: ['value'],
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

    const prefix = prefecture_wrap.getAttribute("data-pagename");

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
        const area_href = "/area/" + area_path + "/?l-id=" + prefix + "_area_" + prefecture + "_" + pattern + "&s-id=" + prefix + "_area_" + prefecture + "_all";

        prefecture_shop.href = "/shop/search/?l-id=" + prefix + "_shop_search_" + prefecture + "_" + pattern + "&s-id=" + prefix + "_shop_search_" + prefecture + "_all&prefecture=" + pref_name + "&city=" + city_name + "&type=gadget";
        prefecture_area.href = area_href;
        prefecture_area_img.href = area_href;
        prefecture_img.src = "/assets/img/common/prefecture/prefecture-map-" + prefecture + ".png"

        prefecture_names.forEach(prefecture_name => {
            prefecture_name.textContent = area_name;
        });

        prefecture_map.href = "/area/?l-id=" + prefix + "_area-top_" + prefecture + "_" + pattern + "&s-id=" + prefix + "_area-top_" + prefecture + "_all";
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
