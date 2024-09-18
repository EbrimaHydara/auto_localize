// Create or Load SessionID for DeepQA

let session_id = '';
const ua = window.navigator.userAgent;

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

$(() => {
    let count = 5;
    let len = 0;
    const $faqList = $('#js-faq-list');
    const $readmore = $('#js-readmore');
    const $faq = $('#js-faq')

    const pageNames = {
        'cancellation/apple-watch-family-sharing': 'FamilySharing_cancellation',
        'flow/application/apple-watch-family-sharing': 'FamilySharing_app',
        'setting/apple-watch-family-sharing': 'FamilySharing_setting',
    };
    const pathList = location.pathname.split('/').slice(2, -1);
    const path = pathList.join('/');

    const solvedValue = (link, list) => {
        const qaId = link.split('/').slice(-2, -1)[0];
        const qa = list.find(qa => qa.name === qaId);
        return qa ? qa.solved : 0;
    };

    const axios = require('axios');

    const getData = async function () {
        const faqEp = '/api/generic_search_faq/?q=' + pageNames[path];
        const { data } = await axios.get(faqEp);

        const faqSolvedEp = '/api/faq_solved/'
        const rawSolvedData = await axios.get(faqSolvedEp)
        const solvedList = rawSolvedData.data.list;

        return { data, solvedList };
    };

    $faq.hide();

    if (typeof pageNames[path] === 'string') {
        getData()
            .then(data => {
                const faq = data.data;
                const solvedList = data.solvedList;

                let html = "";
                len = faq.list.length;
                for (const item of faq.list) {
                    const solvedNum = solvedValue(item.link, solvedList);
                    if (solvedNum > 0) {
                        html += '<li><a href="' + item.link + '?l-id=guide_faq">' + item.question + '<span class="c-Label_Normal guide-Faq_Items-label">' + solvedNum + '人以上の方が解決</span><span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>';
                    } else {
                        html += '<li><a href="' + item.link + '?l-id=guide_faq">' + item.question + '<span class="c-Icon_Chevron-right guide-Faq_Items-icon"></span></a></li>';
                    }
                }
                $faqList.html(html);
                $faq.show()
                if (len <= count) {
                    $readmore.hide();
                }
                else {
                    $faqList.find('li:gt(' + (count - 1) + ')').hide();
                }

                $readmore.on('click', function () {
                    count += 5;
                    $faqList.find('li:lt(' + count + ')').show();
                    if (len <= count) {
                        $readmore.hide();
                    }
                });
            })
    }
});

$(() => {
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
