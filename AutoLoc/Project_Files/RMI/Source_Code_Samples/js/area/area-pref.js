import SmoothScroll from "smooth-scroll";
import { themeStr } from '../common/theme'

/**
 * shop search
 */

const sitepath = '/'; //PROD
// const sitepath = 'https://network.mobile.rakuten.co.jp/';
const selectPref = document.getElementById('js-shop-Search_Select-pref');
const selectCity = document.getElementById('js-shop-Search_Select-city');
const searchByPrefCity = document.getElementById('js-shop-Search_Prefcity');
const searchUrl = 'shop/search/?prefecture=';
const searchLid = '&l-id=area_prefecture_shop_search_02';



let today = new Date();
const filterPublication = function (value) {
    const publicationStartDatetime = value.announcement_info.publication_start_datetime.replace(/-/g, '/');
    const termStart = new Date(publicationStartDatetime);
    if (termStart <= today) {
        if (typeof value.announcement_info.publication_end_datetime !== 'undefined') {
            const publicationEndDatetime = value.announcement_info.publication_end_datetime.replace(/-/g, '/');
            const termEnd = new Date(publicationEndDatetime);
            return today <= termEnd ? true : false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

$.ajaxSetup({
    cache: false
});

$.getJSON('https://network.mobile.rakuten.co.jp/shopmaster-public/v1/shops')
// $.getJSON('/assets/json/shop_dummy.json')
    .done(function (rawData) {
        const data = rawData.filter(elem => filterPublication(elem));

        if (selectPref) {
            let uniqueCities = setPrefectures(data);
            const selectIdx = selectPref.selectedIndex;
            const selectValue = selectPref.options[selectIdx].value;
            setCities(selectValue, uniqueCities);

            selectPref.addEventListener('change', function () {
                if (selectCity) {
                    setCities(selectPref.value, uniqueCities);
                }
                enableSearchByPrefCity();
            });
        }
        if (selectCity) {
            selectCity.addEventListener('change', function () {
                enableSearchByPrefCity();
            });
        }
        if (searchByPrefCity) {
            searchByPrefCity.addEventListener('click', function (e) {
                const dataHref = searchByPrefCity.getAttribute('data-href');
                let searchLink = '';
                if (dataHref !== null) {
                    searchLink = dataHref;
                } else {
                    searchLink = sitepath + searchUrl + encodeURI(selectPref.value) + '&city=' + selectCity.value + searchLid;
                }
                window.location.href =  searchLink;
            });
        }
    })
    .fail(function (jqxhr, textStatus, error) {
        console.log('error.');
    });

function setPrefectures(data) {
    let options = ['<option value="">都道府県を選択</option>'];
    let flgment = '';
    let uniqueCities = filterUniqueCities(data)
        .map(function (item, index) {
            return { order: getPrefectureCode(item.location.prefecture), region: item.location.region, zipcd: item.location.zip_code.replace('-', '').replace('‐', ''), prefecture: item.location.prefecture, city: item.location.city };
        })
        .sort(function (a, b) {
            return parseInt((a.order + '' + a.zipcd), 10) - parseInt((b.order + '' + b.zipcd), 10);
        });
    uniqueCities.forEach(function (item) {
        const prefName = document.getElementById('js-pref-name');
        const specificPref  = prefName.dataset.pref;
        if( item.prefecture === specificPref) {
            flgment = '<option value="' + item.prefecture + '" selected>' + item.prefecture + '</option>';
        } else {
            flgment = '<option value="' + item.prefecture + '">' + item.prefecture + '</option>';
        }
        if (options.indexOf(flgment) < 0) {
            options.push(flgment);
        }
    });
    selectPref.innerHTML = options.join();

    return uniqueCities;
}

function setCities(pref, cities) {
    let options = ['<option value="">市区町村を選択</option>'];
    let flgment = '';
    cities.forEach(function (item) {
        flgment = '<option value="' + item.city + '">' + item.city + '</option>';
        if (item.prefecture === pref && options.indexOf(flgment) < 0) {
            options.push(flgment);
        }
    });
    selectCity.innerHTML = options.join();
    if (options.length === 1) {
        selectCity.setAttribute('aria-disabled', true);
        selectCity.setAttribute('disabled', true);
    }
    else {
        selectCity.setAttribute('aria-disabled', false);
        selectCity.removeAttribute('disabled');
    }
}

function filterUniqueCities(array) {
    let cities = array.map(function (item) {
        return item.location.prefecture + item.location.city;
    });
    return array.filter(function (item, index) {
        return cities.indexOf(item.location.prefecture + item.location.city) === index;
    });
}

function getPrefectureCode(name) {
    const list = ["北海道",
        "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
        "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
        "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
        "岐阜県", "静岡県", "愛知県", "三重県",
        "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
        "鳥取県", "島根県", "岡山県", "広島県", "山口県",
        "徳島県", "香川県", "愛媛県", "高知県",
        "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
    ];
    return list.indexOf(name) + 1;
}

function enableSearchByPrefCity() {
    if (searchByPrefCity) {
        let url = sitepath + searchUrl + encodeURI(selectPref.value) + '&city=' + selectCity.value + searchLid;
        if (selectPref.value !== '') {
            searchByPrefCity.setAttribute('data-href', url);
            searchByPrefCity.setAttribute('aria-disabled', false);
            searchByPrefCity.removeAttribute('disabled');
        } else {
            searchByPrefCity.setAttribute('data-href', '');
            searchByPrefCity.setAttribute('aria-disabled', true);
            searchByPrefCity.setAttribute('disabled', true);
        }
    }
}

/**
 * anker link
 */

new SmoothScroll('.js-fixedMenuScroll', {
    speed: 400,
    offset: window.matchMedia(`(min-width: ${themeStr.min.l})`).matches ? 110 : 64,
    emitEvents: true,
});


/**
 * fixed bottom btn
 */
const fixedBottomBtn = () => {
    let scrollY = window.scrollY;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if (!fixedBtn || !trigger) return;
    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if (scrollY > triggerY) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn, { passive: true });
