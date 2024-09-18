const loadGoogleMapsApi = require('load-google-maps-api');
import tippy from 'tippy.js';

// map
const map = document.querySelector('.shop-Map');
let mapContainer = null;

if (map) {
    mapContainer = map.querySelector('.shop-Map_Container');
}
const mapSetting = {
    apiUrl: 'https://maps.googleapis.com/maps/api/js',
    // channel: '000-000791',
    // client: 'gme-rakuteninc2'
    key: 'AIzaSyBmiYC8QLzg9uN_RVQ2jkWNR5YRf1z7dfo'
};
const mapOption = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 15
};

if (mapContainer) {
    let lat = Number(map.getAttribute('data-lat'));
    let lng = Number(map.getAttribute('data-lng'));

    if (!isNaN(lat) && !isNaN(lng)) {
        loadGoogleMapsApi(mapSetting)
        .then(function (googleMaps) {
            mapOption.center = new googleMaps.LatLng(lat, lng);
            let map = new googleMaps.Map(mapContainer, mapOption);

            new googleMaps.Marker({
                position: mapOption.center,
                map: map
            });

        })
        .catch(function (error) {
            console.error(error);
        });
    }
}

// include
const $dispTopNews = $('#top-news');

if ($dispTopNews) {

    $.getJSON({
        url: '/web-api/shop-top/',
        dataType: 'json'
    })
    .then(data => {
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
    .catch(err => {
        console.log(err);
    });
}

// detail-page(tooltip)
const emblemImages = [...document.querySelectorAll('.js-emblem')];
const url = '/assets/json/shop-emblem.json';

const tooltipEmblem = () => {
    const classTooltipEmblem = '.js-Tooltip-emblem';

    tippy(classTooltipEmblem, {
        animation: 'fade',
        arrow: true,
        duration: [200, 175],
        placement: 'bottom'
    });
};

$.ajax({
    url: url,
    dataType: 'json'
})
.then(res => {
    res.map(data => {
        emblemImages.map(emblem => {
            if (data.text && emblem.src.lastIndexOf(data.imagepath) !== -1) {
                emblem.parentNode.classList.add('js-Tooltip-emblem');
                emblem.parentNode.setAttribute('data-tippy-content', data.text);
            }
        });
    });
    tooltipEmblem();
})
.catch(error => {
    console.error(error);
});

// web reservation btn
const reservationBtn = document.querySelector('.shop-Reservation_Btn-content-secondary');
if (reservationBtn) {
    const reservationBtnText = reservationBtn.querySelector('.shop-Reservation_Link');

    if (reservationBtnText) {
        reservationBtnText.textContent = 'Webで予約する';
    }
}
