// Create or Load SessionID for DeepQA

let session_id = '';
const ua = window.navigator.userAgent;
const isLocal = false;

if (document.cookie !== '') {
    let tmp_cookie = document.cookie.split('; ');
    for (let i = 0; i < tmp_cookie.length; i++) {
        let temp_data = tmp_cookie[i].split('=');
        if (temp_data[0] === 'Rz') {
            session_id = temp_data[1];
            break;
        }
    }
}

if (session_id === '') {
    session_id = localStorage.getItem('dqa_session');
    if (session_id === null) {
        session_id = Math.floor(Math.random() * 10 ** 10) + '_' + new Date().getTime();
        localStorage.setItem('dqa_session', session_id);
    }
}

$(function () {
    let count = 5;
    let len = 0;
    const $faqList = $('#js-faq-list');
    const $readmore = $('#js-readmore');

    const pageNames = {
        'area-confirmation': 'Dataarea',
        'area-speed': 'Dataspeed',
        'caller-id': 'CallerId',
        'cancellation': 'discontract',
        'contract-succession': 'ChangeControctor',
        'data-migration': 'DataMigration',
        'data-traffic': 'Dataarea',
        'flow/application': 'ApplicationNeed',
        'iphone': 'IPhoneUse',
        'migration': 'PlanFee',
        'mnp': 'mnp',
        'mnp/flow': 'mnp',
        'mnp/fast-convert': 'mnp',
        'mnp/migration': 'migration',
        'mnp/out-of-stock': 'mnp',
        'my-rakuten-mobile': 'MyRakuten',
        'payment': 'PaymentMethod',
        'payment/card': 'PaymentCard',
        'payment/google': 'PaymentGoogle',
        'payment/point': 'PaymentPoint',
        'payment/change': 'PaymentMethod',
        'payment/autopay': 'Autopay',
        'payment/daibiki': 'Autopay',
        'payment/flow': 'PaymentMethod',
        'payment/invoice/flow': 'Unpaid',
        'payment/usage-details': 'PaymentMethod',
        'payment/invoice/unpaid': 'Unpaid',
        'product/device-upgrade': 'contractDetail_sim',
        'rakuten-link': 'RakutenLink',
        'rakuten-link/activation': 'RakutenLinkFirstSetting',
        'rakuten-link/activation/ios': 'RakutenLinkFirstSetting',
        'rakuten-link/call': 'RakutenLinkCall',
        'rakuten-link/message': 'RakutenLinkMessage	Rakuten Link',
        'rakuten-link/voice-message': 'RakutenLinkVoiceMessage',
        'setting': 'FirstSetting',
        'setting/data-type-sim': 'FirstSetting',
        'setting/data-type-esim': 'FirstSetting',
        'setting/ios': 'IPhoneUnable',
        'setting/profile_delete': 'profile',
        'sim-setting-ng': 'TroubleShoot',
        'tethering': 'tethering',
        'users-information': 'ChangeInformation',
        'verify': 'VerificationError',
        'payment/3ds': 'PaymentCard',
        'family': 'family',
    };
    const pathList = location.pathname.split('/');
    pathList.pop();
    pathList.shift();
    pathList.shift();
    const path = pathList.join('/');

    const solvedValue = (link, list) => {
        const spreadLink = link.split('/');
        const qaId = spreadLink[spreadLink.length - 2];

        for (const qa of list) {
            if (qa.name === qaId) {
                return qa.solved;
            }
        }

        return 0;
    };

    const axios = require('axios');

    const genericSearchPageList = [
        'family',
        'product/device-upgrade',
        'caller-id',
    ]

    const isGenericSeachPage = (pageName) => genericSearchPageList.includes(pageName) ? true : false;

    const getData = async function () {

        let faqEpPath ='';
        let faqSolvedEpPath = '';

        if(isLocal) {
            faqEpPath = '/assets/json/faq_dummy.json';
            faqSolvedEpPath = '/assets/json/dummy-support-faq-solved.json'
        }else {
            faqSolvedEpPath = '/api/faq_solved/'

            if(isGenericSeachPage(path)) {
                faqEpPath = '/api/generic_search_faq/?q=' + pageNames[path];
            }else {
                faqEpPath = '/api/search_faq/?q=' + pageNames[path];
            }
        }

        const faqEp = faqEpPath;
        const faqSolvedEp = faqSolvedEpPath;
        const {data} = await axios.get(faqEp);
        const rawSolvedData = await axios.get(faqSolvedEp)
        const solvedList = rawSolvedData.data.list;

        return {data,solvedList};
    };

    if (typeof pageNames[path] === 'string') {
        getData()
            .then(data => {
                const faq = data.data;
                const solvedList = data.solvedList;

                let html = "";
                len = faq.list.length;
                for (let i = 0; i < len; i++) {
                    const solvedNum = solvedValue(faq.list[i].link, solvedList);
                    if(solvedNum > 0) {
                        html += '<li><a href="' + faq.list[i].link + '?l-id=guide_faq">' + faq.list[i].question + '<span class="c-Label_Normal guide-Faq_Items-label">' + solvedNum + '人以上の方が解決</span><span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>';
                    } else {
                        html += '<li><a href="' + faq.list[i].link + '?l-id=guide_faq">' + faq.list[i].question + '<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>';
                    }
                }
                $faqList.html(html);
                $('#js-faq').attr('aria-hidden', 'false');
                if (len <= count) {
                    $readmore.hide();
                }
                else {
                    $faqList.find('li:gt(' + (count - 1) + ')').hide();
                }
                const uri = new URL(window.location.href);
                if( uri.pathname === '/guide/payment/flow/' || uri.pathname === '/guide/payment/usage-details/' ) {
                    const exceptionSolvedNum01 = solvedValue('https://network.mobile.rakuten.co.jp/faq/detail/10000287/', solvedList);
                    const exceptionSolvedNum02 = solvedValue('https://network.mobile.rakuten.co.jp/faq/detail/10000186/', solvedList);

                    if(exceptionSolvedNum01 > 0 && (exceptionSolvedNum02 === 0 || exceptionSolvedNum02 === null)){
                        document.getElementById('js-faq-list').insertAdjacentHTML('afterbegin' ,'<li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000287/?l-id=guide_faq">コンビニ払込票（ハガキ）が届かない・紛失した・支払期日が過ぎた場合はどうしたらよいですか？<span class="c-Label_Normal guide-Faq_Items-label">' + exceptionSolvedNum01.toLocaleString() + '人以上の方が解決</span><span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li><li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000186/?l-id=guide_faq">「Rakuten UN-LIMIT」を契約しているが、利用した覚えのない請求が発生している／請求が重複して発生している<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>');
                    } else if ((exceptionSolvedNum01 === 0 || exceptionSolvedNum01 === null) && exceptionSolvedNum02 > 0) {
                        document.getElementById('js-faq-list').insertAdjacentHTML('afterbegin' ,'<li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000287/?l-id=guide_faq">コンビニ払込票（ハガキ）が届かない・紛失した・支払期日が過ぎた場合はどうしたらよいですか？<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li><li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000186/?l-id=guide_faq">「Rakuten UN-LIMIT」を契約しているが、利用した覚えのない請求が発生している／請求が重複して発生している<span class="c-Label_Normal guide-Faq_Items-label">' + exceptionSolvedNum02.toLocaleString() + '人以上の方が解決</span><span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>');
                    } else if (exceptionSolvedNum01 > 0 && exceptionSolvedNum02 > 0){
                        document.getElementById('js-faq-list').insertAdjacentHTML('afterbegin' ,'<li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000287/?l-id=guide_faq">コンビニ払込票（ハガキ）が届かない・紛失した・支払期日が過ぎた場合はどうしたらよいですか？<span class="c-Label_Normal guide-Faq_Items-label">' + exceptionSolvedNum01.toLocaleString() + '人以上の方が解決</span><span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li><li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000186/?l-id=guide_faq">「Rakuten UN-LIMIT」を契約しているが、利用した覚えのない請求が発生している／請求が重複して発生している<span class="c-Label_Normal guide-Faq_Items-label">' + exceptionSolvedNum02.toLocaleString() + '人以上の方が解決</span><span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>');
                    } else if ((exceptionSolvedNum01 === 0 || exceptionSolvedNum01 === null) && (exceptionSolvedNum02 === 0 || exceptionSolvedNum02 === null)){
                        document.getElementById('js-faq-list').insertAdjacentHTML('afterbegin' ,'<li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000287/?l-id=guide_faq">コンビニ払込票（ハガキ）が届かない・紛失した・支払期日が過ぎた場合はどうしたらよいですか？<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li><li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000186/?l-id=guide_faq">「Rakuten UN-LIMIT」を契約しているが、利用した覚えのない請求が発生している／請求が重複して発生している<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>');
                    }
                }
                if(uri.pathname === '/guide/payment/google/') {
                    document.getElementById('js-faq-list').insertAdjacentHTML('afterbegin' ,'<li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000133/?l-id=guide_faq">楽天モバイルのキャリア決済をApp Storeで利用できますか？<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>');
                }
                if(uri.pathname === '/guide/payment/card/') {
                    document.getElementById('js-faq-list').insertAdjacentHTML('afterbegin' ,'<li><a href="https://network.mobile.rakuten.co.jp/faq/detail/10000938/?l-id=guide_faq">クレジットカード・デビットカードの情報入力時に、カード情報をカメラで読み取ることはできますか？<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>');
                }
            });
    }

    $readmore.on('click', function () {
        count += 5;
        $faqList.find('li:lt(' + count + ')').show();
        if (len <= count) {
            $readmore.hide();
        }
    });
});

$(function () {
    const item = sessionStorage.getItem("deepqa_analysis_click_url");
    if (item !== null) {
        if (item.length > 1) {
            const items = JSON.parse(item);
            sessionStorage.setItem("deepqa_analysis_click_url", '');

            $.ajax({
                type: 'POST',
                // url: 'http://stg.gateway-api.intra.rakuten-it.com/bot/deepqa-data-collection-api-stg/mno/user_journey_test/send-data',
                url: 'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno/user_journey/send-data',
                headers: {
                    // "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuIn0.r0JR71LUxlRSccGINnLUc_XOt5tKxC3wdCaOy6mnFIg",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4",
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    "session_id": session_id,
                    "timestamp": new Date().toISOString(),
                    "user_device": ua,
                    "event": items[0],
                    "payload": items[1]
                })
            }).done(function (data) {
                console.log(data);
            });
        }
    }
});

$(() => {
    const $target = location.href.includes('#accordion-') ? $(`#${location.href.split('#').slice(-1)}`) : null;
    if (!$target) return;
    const $parentContent = $(`#${($target.closest('.c-Tab_Panel')[0] || { id: null }).id}`);
    const scrollToAccordion = target => {
        $('html,body').animate({ scrollTop: target.offset().top }, 1000, () => { $('html,body').animate({ scrollTop: target.offset().top }, 500) });
        const opt = { duration: 0, queue: false };
        const content = target.attr('aria-controls');
        const $panel = $(`#${content}`);
        target.attr('aria-expanded', 'true');
        $panel.attr('aria-hidden', 'false');
        $panel.stop().slideDown(opt);
    }

    if ($parentContent.length) {
        const tabIndex = Number($parentContent.attr('aria-labelledby').split('tab-menu').slice(-1));
        let alterIndex;

        if (tabIndex % 2) alterIndex = tabIndex + 1;
        else alterIndex = tabIndex - 1;

        const $alterContent = $(`#tab-content${alterIndex}`);
        $parentContent.attr('aria-hidden', 'false');
        $(`#${$parentContent.attr('aria-labelledby')}`).attr('aria-selected', 'true');
        $alterContent.attr('aria-hidden', 'true');
        $(`#${$alterContent.attr('aria-labelledby')}`).attr('aria-selected', 'false');
    }
    scrollToAccordion($target);
});
