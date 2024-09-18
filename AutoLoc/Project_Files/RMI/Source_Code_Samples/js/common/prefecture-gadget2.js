import { prefecture_gadget } from "../csv-data/prefecture-gadget";

const config = {
    attributes: true,
    attributeFilter: ['value'],
}

const prefectures = prefecture_gadget;

const phxPatternName_prefectures = document.getElementById('phx_pattern_name_prefecture');

const prefecture_wrap = document.getElementById('js-prefecture');
const prefecture_wrap_none = document.getElementById('js-prefecture-none');
const prefecture_wrap_none_maxmind = document.getElementById('js-prefecture-none-maxmind');

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

        prefecture_shop.href = "/shop/search/?l-id=" + prefix + "_shop_search_" + prefecture + "_" + pattern + "&s-id=" + prefix + "_shop_search_" + prefecture + "_all&prefecture=" + pref_name + "&city=" + city_name;
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

            showPrefecture('maxmind');
        }
    }
    else if (pattern === 'maxmind') {

        if (typeof window.geoip2 !== 'undefined') {
            window.geoip2.city(
                (geo) => {
                    const accuracy = document.getElementById('js-prefecture-maxmind-accuracy');
                    const accuracy_radius = document.getElementById('js-prefecture-maxmind-accuracy_radius');
                    const prefecture_jp = geo.subdivisions[0].names.ja;
                    let prefecture = null;
                    let pref_name = null;
                    let pref_share = null;

                    for (const entry of prefectures) {
                        if (entry.pref === prefecture_jp) {
                            pref_name = entry.area1;
                            pref_share = entry.share;
                            prefecture = entry.id;
                            break;
                        }
                    }

                    if (pref_name !== null) {
                        if (geo.traits.connection_type === "Cellular") {
                            if (geo.location.accuracy_radius < 200) {
                                accuracy_radius.setAttribute('data-ratid', "prefecture_cellular_100");
                                accuracy.style.display = 'block';
                                writePrefecture(prefecture, pref_name, pref_share, pattern);
                            }
                            else {
                                accuracy_radius.setAttribute('data-ratid', "prefecture_cellular_200");
                                accuracy.style.display = 'block';
                            }
                        }
                        else {
                            if (geo.location.accuracy_radius < 200) {
                                accuracy_radius.setAttribute('data-ratid', "prefecture_wifi_100");
                                accuracy.style.display = 'block';
                                writePrefecture(prefecture, pref_name, pref_share, pattern);
                            }
                            else {
                                accuracy_radius.setAttribute('data-ratid', "prefecture_wifi_200");
                                accuracy.style.display = 'block';
                            }
                        }
                    }
                    else {
                        prefecture_wrap_none_maxmind.style.display = 'block';
                    }
                },
                () => {
                    console.log('error geo');
                    prefecture_wrap_none_maxmind.style.display = 'block';
                }
            );
        }
    }
}

const observer_prefectures = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
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

phxPatternName_prefectures.value = prefecture;

$.ajax({
    type: 'GET',
    url: 'https://map.api.geo-platform.global.rakuten.com/ip_location',
    contentType: "application/json",
    success: function(data){
        const geo = data.data;
        let radius = geo.location.accuracy_radius;
        let type = geo.connection_type.toLowerCase().replace('/', '');
        let device = 'pc';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            device = 'sp';
        }
        document.getElementById('js-maxmind-accuracy').setAttribute('data-ratid', "prefecture_inhouse_" + device + '_' + type + '_' + radius);
        document.getElementById('js-maxmind').style.display = 'block';
    }
});
