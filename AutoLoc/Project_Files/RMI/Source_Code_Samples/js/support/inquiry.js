import Vue from 'vue';
import * as Filters from '../../vue/search/filters';
import SupportFaq from '../../vue/search/SupportFaq.vue';
import { themeStr } from '../common/theme';
import { displayAttention } from "../common/attention-info";

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(SupportFaq, {
        props: {
            userType: 'member',
            namespace: 'support-Inquiry',
            isInquiry: 'true',
        }
    })
}).$mount('#js-faq-list-member');

new Vue({
    render: h => h(SupportFaq, {
        props: {
            userType: 'preMember',
            namespace: 'support-Inquiry',
            isInquiry: 'true',
        }
    })
}).$mount('#js-faq-list-pre-member');

// attention

const $dispAttention = $('#attention');

if ($dispAttention) {
    $.ajax({
        url: '/web-api/attention-support/',
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

//日本時間の取得
const getJapanDate = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const japanOffset = 9 * 60 * 60 * 1000;
    const japanTime = new Date(utc + japanOffset);

    return japanTime.getDate();
}


let currentJapanDate = getJapanDate();
const pitariPattern = document.getElementById('phx_pattern_name');

const getParameter = () => {
    const locationSearch = new URLSearchParams(location.search);
    if (locationSearch.has('abtest-banner')) {
        const abtestBanner = locationSearch.get('abtest-banner');
        if (locationSearch.has('abtest-date') && locationSearch.has('abtest-pattern')) {
            currentJapanDate = locationSearch.get('abtest-date');
        } else if (locationSearch.has('abtest-date')) {
            currentJapanDate = locationSearch.get('abtest-date');
        }
        return abtestBanner;
    }
    if (locationSearch.has('abtest-mno')) {
        pitariPattern.value = 'non_mno_holder';
    }
    return pitariPattern.value;
}

function createBnrPart(targetBannerId, imgName, ratId, href, altText) {
    const jsBanner = document.getElementById(targetBannerId);
    let selectorName = `#${targetBannerId}-link`;
    jsBanner.style.display = 'block';
    const imgPath = `/assets/img/support/inquiry`;
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('id', `#${targetBannerId}-link`);
    link.setAttribute('data-ratid', ratId);
    link.setAttribute('data-ratevent', 'appear');
    link.setAttribute('data-ratparam', 'all');
    const picture = document.createElement('picture');
    picture.classList.add('c-Banner_Hover-act');
    const source = document.createElement('source');
    source.srcset = `${imgPath}/${imgName}-sp-230712.png`;
    source.media = `(max-width: ${themeStr.max.m})`;
    source.width = '656';
    source.height = '216';
    picture.appendChild(source);
    const img = document.createElement('img');
    img.src = `${imgPath}/${imgName}-pc-230712.png`;
    img.alt = altText;
    img.width = '768';
    img.height = '112';
    picture.appendChild(img);
    link.appendChild(picture);
    jsBanner.appendChild(link);
    if (window.RAT && window.RAT.bindAppear) {
        const appearBanner = window.RAT.$Selector(selectorName);
        window.RAT.bindAppear(appearBanner);
    }
}

const targetBannerIdArray = ['js-banner1', 'js-banner2'];

const processDateAndphxPattern = (targetBannerId, currentJapanDate, phxPattern) => {
    if(targetBannerId === 'js-banner1') {
        if(phxPattern === 'mno_holder' || phxPattern === 'default') { // 「開通翌日/利用中」or「未ログイン」ステータス
            if (currentJapanDate >= 1 && currentJapanDate <= 3) { // 毎月1～3日
                //CPポイント確認方法
                createBnrPart(targetBannerId, 'bnr-point-a', 'support_inquiry_bnr_point_a', 'https://r10.to/huD6Z8', '獲得予定ポイントをご案内します')
            } else if (currentJapanDate >= 4 && currentJapanDate <= 19) { // 毎月4～19日
                //請求内訳確認方法
                createBnrPart(targetBannerId, 'bnr-usage-details-a', 'support_inquiry_bnr_usage-details_a', 'https://r10.to/hUdAMA', '各種明細の確認方法をご案内します')
            } else if (currentJapanDate >= 20 && currentJapanDate <= 31) { // 毎月20～月末
                //支払い状況確認方法
                createBnrPart(targetBannerId, 'bnr-payment-b', 'support_inquiry_bnr_payment_b', 'https://r10.to/h6RqP7', '料金の支払い状況をご案内します')
            }
        } else if(phxPattern === 'non_mno_holder') { // 「開通中/開通当日/未契約/解約済み」ステータス
            return; // バナー非表示のためここで関数返す
        }
    } else if(targetBannerId === 'js-banner2') {
        if (phxPattern === 'non_mno_holder') { // 「開通中/開通当日/未契約/解約済み」ステータス
            //開通方法
            createBnrPart(targetBannerId, 'bnr-setting-b', 'support_inquiry_bnr_setting_b', 'https://r10.to/hUdAEV', '各種製品の初期設定方法をご案内します');
        } else if(phxPattern === 'mno_holder' || phxPattern === 'default') { // 「開通翌日/利用中」or「未ログイン」ステータス
            return; // バナー非表示のためここで関数返す
        }
    }
};

const bannerPatternInit = () => {
    const phxPattern = getParameter();
    for(let targetBannerId of targetBannerIdArray) {
        processDateAndphxPattern(targetBannerId, currentJapanDate, phxPattern);
    }
}

const config = {
    attributes: true,
    attributeFilter: ['value'],
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
            bannerPatternInit();
            observer.disconnect();
        }
    });
});

if (pitariPattern.value !== '') {
    bannerPatternInit();
} else {
    observer.observe(pitariPattern, config);
}

// tab cookie

let deadline = 30;
let date = new Date();
date.setTime(date.getTime() + deadline * 24 * 60 * 60 * 1000);
const cookies = document.cookie;
const cookiesArray = cookies.split('; ');
const tabMenu1 = document.getElementById('tab-menu1');
const tabMenu2 = document.getElementById('tab-menu2');
const tabContent1 = document.getElementById('tab-content1');
const tabContent2 = document.getElementById('tab-content2');
let elSprit;

const setAttributeTabMenu1 = () => {
    tabMenu1.setAttribute('aria-selected', true);
    tabContent1.setAttribute('aria-hidden', false);
    tabMenu2.setAttribute('aria-selected', false);
    tabContent2.setAttribute('aria-hidden', true);
}
const setAttributeTabMenu2 = () => {
    tabMenu1.setAttribute('aria-selected', false);
    tabContent1.setAttribute('aria-hidden', true);
    tabMenu2.setAttribute('aria-selected', true);
    tabContent2.setAttribute('aria-hidden', false);
}

window.addEventListener('DOMContentLoaded', function () {
    const phxPattern = getParameter();
    const hash = location.hash;
    let isHash = false;

    if(hash && hash.indexOf('tab-menu') !== -1) {
        isHash = true;
        if (hash.indexOf('tab-menu-1') !== -1) {
            setAttributeTabMenu1();
        } else if (hash.indexOf('tab-menu-2') !== -1) {
            setAttributeTabMenu2();
        }
    } else if(phxPattern !== '') {
        if(phxPattern === 'non_mno_holder') {
            setAttributeTabMenu2();
        } else if(phxPattern === 'mno_holder' || phxPattern === 'default') {
            setAttributeTabMenu1();
        }
    } else if(navigator.cookieEnabled) {
        if (!isHash) {
            cookiesArray.forEach(el => {
                elSprit = el.split('=');
                if (elSprit[0] == 'expires') {
                    if (new Date(elSprit[1]).getTime() > new Date().getTime()) {
                        cookiesArray.forEach(el => {
                            elSprit = el.split('=');
                            if (elSprit[0] == 'selectTab') {
                                if (elSprit[1] == 3) {
                                    setAttributeTabMenu1();
                                } else if (elSprit[1] == 4) {
                                    setAttributeTabMenu2();
                                }
                            }
                        });
                    }
                }
            });
        }

        document.cookie = "expires=" + date;

        tabMenu1.onclick = function () {
            document.cookie = "selectTab=3";
        }
        tabMenu2.onclick = function () {
            document.cookie = "selectTab=4";
        }
    }

    setTimeout(() => {
        if (pitariPattern.value === '') {
            bannerPatternInit();
        }
    }, 1000);
});

$(function () {
    $.ajax({
        type: 'GET'
    }).done(function (data, status, xhr) {
        const serverDate = new Date(xhr.getResponseHeader('Date'));
        let num_time = 0;
        if (serverDate.getYear() > 100) {
            // production
            num_time = serverDate.getHours();
            // debelopment
            // num_time = new Date().getHours();
            console.log(num_time);
            if (num_time === 23 || num_time > -1 && num_time < 9) {
                $('.js-business-hours').attr('aria-disabled', 'true').css({ 'pointer-events': 'none' });
                $('#mno_messaging_support_pc_on').css('display', 'none');
                $('#js-use-chat-consultation').css('display', 'block');
                $('#mno_messaging_support_pc_off').css('display', 'block');
            } else {
                $('.js-business-hours').attr('aria-disabled', 'false').css({ 'pointer-events': 'auto' });
                $('.trigger-messaging').on('click', function () {
                    $('.chat_img').click();
                });
            }
        }
    })
});
