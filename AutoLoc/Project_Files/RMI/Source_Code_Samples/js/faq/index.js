import 'whatwg-fetch';

// review
const reviewWrap = document.getElementById('faq-Review_Wrap');
const review1st = document.getElementById('faq-Review_Wrap-1st');
const review2nd = document.getElementById('faq-Review_Wrap-2nd');
const review3rd = document.getElementById('faq-Review_Wrap-3rd');
const canonical = document.querySelector('[rel="canonical"]').getAttribute('href');
// const canonical = 'http://network.mobile.rakuten.co.jp/faq/00000000/';
let reviewId = '';
let reviewObj = {};
const reviewRegex = /^\d+$/;

function sendReview() {
    fetch('/api/faq_feedback/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewObj)
    });
}

if (canonical) {
    let temp = '';
    temp = canonical.split('/');
    reviewId = temp[temp.length - 2];
}

if (reviewRegex.test(reviewId)) {
    if (review1st && review2nd && review3rd) {
        const reviewBtnPosi = document.getElementById('faq-Review_Btn-positive');
        const reviewBtnNega = document.getElementById('faq-Review_Btn-negative');
        const reviewOutline = document.getElementById('faq-Review_Wrap-outline');
        const reviewErrorOutline = document.getElementById('faq-Review_Error-outline');
        const reviewFormOutline = document.getElementById('faq-Review_Form-outline');
        const reviewFormDetail = document.getElementById('faq-Review_Form-detail');
        const reviewBtnSend = document.getElementById('faq-Review_Btn-send');
        let is_review1st = true;

        if (reviewBtnPosi) {
            reviewBtnPosi.addEventListener('click', () => {
                is_review1st = false;
                if (reviewOutline) {
                    reviewOutline.style.display = 'none';
                }
                review1st.setAttribute('aria-hidden', true);
                review2nd.setAttribute('aria-hidden', false);
                reviewObj = {
                    name: reviewId,
                    type: 'Resolution'
                };
                sendReview();
            });
        }
        if (reviewBtnNega) {
            reviewBtnNega.addEventListener('click', () => {
                review1st.setAttribute('aria-hidden', true);
                review2nd.setAttribute('aria-hidden', false);
                reviewObj = {
                    name: reviewId,
                    type: 'NotResolution'
                };
                sendReview();
            });
        }
        if (reviewBtnSend && reviewFormOutline && reviewFormDetail) {
            reviewBtnSend.addEventListener('click', () => {
                let is_review2nd = true;
                let reviewDataOutline = '';
                let reviewDataDetail = reviewFormDetail.value;
                if (is_review1st) {
                    reviewDataOutline = reviewFormOutline.value;
                    if (reviewDataOutline === '') {
                        is_review2nd = false;
                    }
                }
                else {
                    reviewDataOutline = 'Resolution_Others';
                }
                if (is_review2nd) {
                    reviewFormOutline.reviewFormDetail;
                    review2nd.setAttribute('aria-hidden', true);
                    review3rd.setAttribute('aria-hidden', false);
                    reviewObj = {
                        name: reviewId,
                        comment_type: reviewDataOutline,
                        comment: reviewDataDetail
                    };
                    sendReview();
                }
                else {
                    reviewFormOutline.setAttribute('aria-invalid', true);
                    if (reviewErrorOutline) {
                        reviewErrorOutline.setAttribute('aria-hidden', false);
                    }
                }
            });
            if (is_review1st) {
                reviewFormOutline.addEventListener('change', () => {
                    if (reviewFormOutline) {
                        reviewFormOutline.setAttribute('aria-invalid', false);
                    }
                    if (reviewErrorOutline) {
                        reviewErrorOutline.setAttribute('aria-hidden', true);
                    }
                });
            }
        }
    }
}
else {
    reviewWrap.setAttribute('aria-hidden', true);
}

if (location.search.indexOf('ref=sms') > 0) {
    sessionStorage.setItem('referrer', 'sms');
}

const ref = sessionStorage.getItem('referrer');

if (ref === 'sms') {
    const faq_num = Number(location.pathname.match(/[0-9]{8}/));
    if (faq_num > 0) {
        $.ajax({
            url: '/assets/json/faq-tel.json',
            dataType: 'json'
        })
        .then(data => {
            let tel_num = '';
            let pattern = '';
            for (let i = 0, len = data.length; i < len; i++) {
                if (Number(data[i].faq) === faq_num ) {
                    tel_num = data[i].tel;
                    pattern = data[i].pattern;
                    break;
                }
            }
            if (tel_num !== '') {
                const tel_el = document.getElementById('faq-tel-sms');
                document.getElementById('faq-contact-default').setAttribute('aria-hidden', 'true');
                document.getElementById('faq-contact-sms').setAttribute('aria-hidden', 'false');
                tel_el.setAttribute('href', 'tel:' + tel_num);
                tel_el.innerHTML = tel_num;

                const tag_a = document.getElementsByTagName("a");
                let attr_a = '';
                for (let i = 0, len = tag_a.length; i < len; i++) {
                    attr_a = tag_a[i].getAttribute("href");
                    if (attr_a !== null) {
                        if (attr_a.indexOf('l-id=faq') > 0) {
                            tag_a[i].setAttribute("href", attr_a + '_sms');
                        }
                    }
                }
                if (pattern === "2") {
                    $('#faq-Review_Wrap').hide();
                    $('.faq-Relations_Container').hide();
                }
            }
        })
        .catch(err => {
            console.log(err);
        });

        const faq_call_txt = document.getElementById('faq-call-txt');
        if( faq_num === 10000189 ) {
        // if( String(location.pathname.match(/[0-9]{8}/)) === '00001800' ) { STG確認用
            faq_call_txt.innerText = '通話料は無料です。';
        } else {
            faq_call_txt.innerText = 'Rakuten Link での発信は、通話料無料。';
        }
    }
}

// waiting times

(function($) {
    const displayHelper = (target, display = 'none') => {
        const targetElms = [...target.querySelectorAll('.js-Display')];
        if (targetElms.length !== 0) {
            targetElms.map((target) => target.style.display = display);
        }
    };

    const target = {
        "member": {
            "call": {
                "general": document.getElementsByClassName("js-waiting-member-call-general"),
                "data": document.getElementsByClassName("js-waiting-member-call-data"),
                "data_sub": document.getElementsByClassName("js-waiting-member-call-data-sub"),
                "unpaid": document.getElementsByClassName("js-waiting-member-call-unpaid"),
                "lost": document.getElementsByClassName("js-waiting-member-call-lost"),
                "global": document.getElementsByClassName("js-waiting-member-call-global")
            },
            "message": document.getElementsByClassName("js-waiting-member-message"),
        },
        "non_member": {
            "call": {
                "general": document.getElementsByClassName("js-waiting-non_member-call-general"),
                "procedure": document.getElementsByClassName("js-waiting-non_member-call-procedure")
            },
            "message": document.getElementsByClassName("js-waiting-non_member-message"),
        }
    };

    $.ajax({
        type: 'GET'
    }).done(function(data, status, xhr) {
        const serverDate = new Date(xhr.getResponseHeader('Date'));
        let num_time = 0;
        if (serverDate.getYear() > 100) {
            // production
            num_time = serverDate.getHours();
            // debelopment
            // num_time = new Date().getHours();
            console.log(num_time);
            if (num_time === 23 || num_time > -1 && num_time < 9) {
                $('.js-business-hours').attr('aria-disabled', 'true').css({'pointer-events' : 'none'});
                $('#mno_messaging_support_pc_on').css('display', 'none');
                $('#js-use-chat-consultation').css('display', 'block');
                $('#mno_messaging_support_pc_off').css('display', 'block');
            } else {
                $('.js-business-hours').attr('aria-disabled', 'false').css({'pointer-events' : 'auto'});
                $('.trigger-messaging').on('click', function(){
                    $('.chat_img').click();
                });
            }
        }

        $.ajax({
            url: '/api/inquiry-consult/',
            // url: 'https://35.221.73.217/api/inquiry-consult/',
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        })
        .done(function(data, status, xhr){
            const txt_outsideCall = '<span class="faq-Wait_Status"><span>混雑状況：</span><span class="faq-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span><br><span class="faq-Wait_Message">24時間いつでも相談できるAIチャット相談をご利用いただくか、よくある質問をご確認ください。</span>';
            const txt_outsideAll = '<span class="faq-Wait_Status"><span>混雑状況：</span><span class="faq-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span>';
            // const txt_outsideMessage = '<span class="faq-Wait_Status"><span>混雑状況：</span><span class="faq-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span><br><span class="faq-Wait_Message">現在、チャット相談の回答は営業時間外です。いただいたメッセージは9時以降、順次回答いたします。ご了承の程よろしくお願いいたします。</span>';
            const txt_insideData = "一部の地域などでの「通信・データ」障害に関するお問い合わせ";
            const txt_outsideData = "通話・データ通信のトラブルについての専用窓口です。<br>ご契約内容やご利用料金全般に関する問い合わせは、電話番号050-5434-4653までご連絡ください。";
            const showMessage = function($target, str_message){
                if($target) {
                    for (let i = 0; i < $target.length; i++) {
                        if (str_message === "") {
                            $target[i].style.display = "none";
                            //$target[i].nextElementSibling.style.display = "none";
                            displayHelper($target[i].parentNode);
                        }
                        else {
                            $target[i].style.display = "block";
                            $target[i].innerHTML = str_message;
                        }
                    }
                }
            };

            if (data.code === "SUCCESS") {
                if (serverDate.getYear() > 100) {
                    if (data.member.call.general !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.member.call.general = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.member.call.general = txt_outsideAll;
                        }
                    }

                    if (data.member.call.unpaid !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.member.call.unpaid = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.member.call.unpaid = txt_outsideAll;
                        }
                    }

                    if (data.non_member.call.general !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.non_member.call.general = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.non_member.call.general = txt_outsideAll;
                        }
                    }

                    if (data.non_member.call.procedure !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.non_member.call.procedure = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.non_member.call.procedure = txt_outsideAll;
                        }
                    }

                    showMessage(target.member.call.general, data.member.call.general);
                    showMessage(target.member.call.unpaid, data.member.call.unpaid);
                    showMessage(target.non_member.call.general, data.non_member.call.general);
                    showMessage(target.non_member.call.procedure, data.non_member.call.procedure);

                    if (num_time > 8 && num_time < 20) {
                        showMessage(target.member.call.data_sub, txt_insideData);
                    }
                    else {
                        showMessage(target.member.call.data_sub, txt_outsideData);
                    }

                    if (num_time === 23 || num_time > -1 && num_time < 9) {
                        data.member.message = txt_outsideCall;
                        data.non_member.message = txt_outsideCall;
                    }
                    if (data.member.message === '') {
                        $('.js-waiting-member-message-forecast').remove();
                    }
                    if (data.non_member.message === '') {
                        $('.js-waiting-non_member-message-forecast').remove();
                    }

                    showMessage(target.member.message, data.member.message);
                    showMessage(target.non_member.message, data.non_member.message);
                    showMessage(target.member.message2, data.member.message);
                    showMessage(target.non_member.message2, data.non_member.message);

                    showMessage(target.member.call.data, data.member.call.connection);
                    showMessage(target.member.call.lost, data.member.call.lost);
                    showMessage(target.member.call.global, data.member.call.global);
                }
            }
        })
        .fail(err => {
            console.log(err);
        });
    });
})(jQuery);

// Create or Load SessionID for DeepQA

let session_id = '';
const ua = window.navigator.userAgent;

if(document.cookie !== ''){
    let tmp_cookie = document.cookie.split('; ');
    for(let i = 0; i < tmp_cookie.length ; i++) {
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

const sendDeeepQA = function(name, val){
    $.ajax({
        type: 'POST',
        // url: 'http://stg.gateway-api.intra.rakuten-it.com/bot/deepqa-data-collection-api-stg/mno/user_journey_test/send-data',
        url: 'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno/user_journey/send-data',
        headers: {
            // "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuIn0.r0JR71LUxlRSccGINnLUc_XOt5tKxC3wdCaOy6mnFIg",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4",
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            "session_id": session_id,
            "timestamp": new Date().toISOString(),
            "user_device": ua,
            "event": name,
            "payload": val
        })
    }).done(function(data) {
        console.log(data);
    });
};

// Override rat-id

$(function(){
    let isSetEvent = false;
    let setEvent = setInterval(function(){
        if (('#faq-Review_Btn-positive').length > 0 && !isSetEvent) {
            isSetEvent = true;
            clearInterval(setEvent);
            setReviewEvent();
        }
    }, 1000);
});

const setReviewEvent = function(){
    const buttonSolved = document.getElementById('faq-Review_Btn-positive');
    const buttonUnsolved = document.getElementById('faq-Review_Btn-negative');
    const currentParameter = location.search;
    const isFromSupport = () => {
        const l_id = 'support_top_search';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    const isFromSearchFaq = () => {
        const l_id = 'search_top_faq';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    const isFromSearchGeneral = () => {
        const l_id = 'search_top';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    const isFromSearchsCategory = () => {
        const l_id = 'support_category_faq';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    const isFromSearchGuide = () => {
        const l_id = 'guide_detail_faq';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    const isFromSupport2 = () => {
        const l_id = 'support_top2_search';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    const isFromSupport2smart = () => {
        const l_id = 'support_top2_search_smart';
        return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
    };
    if (isFromSupport()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-support";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-support";
    } else if (isFromSearchFaq()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top_faq";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top_faq";
    } else if (isFromSearchGeneral()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top";
    } else if (isFromSearchsCategory()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-support_category_faq";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-support_category_faq";
    } else if (isFromSearchGuide()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-guide_detail_faq";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-guide_detail_faq";
    } else if (isFromSupport2smart()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top2_faq_smart";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top2_faq_smart";
    } else if (isFromSupport2()) {
        buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top2_faq";
        buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top2_faq";
    }

    let is_deepqa = false;
    if (isFromSupport2smart() || isFromSupport2()) {
        is_deepqa = true;
    }

    // send to DeepQA
    $('#faq-Review_Btn-positive').on('click', function(){
        sendDeeepQA('feedback', {"type": "solved", "sent_from_deepqa": is_deepqa});
    });
    $('#faq-Review_Btn-negative').on('click', function(){
        sendDeeepQA('feedback', {"type": "unsolved", "sent_from_deepqa": is_deepqa});
    });

    $('#faq-Review_Btn-send').on('click', function(){
        if ($('#faq-Review_Wrap-outline').css('display') === 'none') {
            sendDeeepQA('feedback_message', {
                "message": $('#faq-Review_Form-detail').val(),
                "sent_from_deepqa": is_deepqa
            });
        }
        else {
            let $review_outline = $('#faq-Review_Form-outline');
            let review_outline_index = $review_outline.prop("selectedIndex");

            if (review_outline_index > 0) {
                sendDeeepQA('feedback_message', {
                    "reason": $review_outline.find('option').eq(review_outline_index).text(),
                    "message": $('#faq-Review_Form-detail').val(),
                    "sent_from_deepqa": is_deepqa
                });
            }
        }
    });
};

const item = sessionStorage.getItem("deepqa_analysis_click_url");
if(item !== null) {
    if (item.length > 1) {
        const items = JSON.parse(item);
        sendDeeepQA(items[0], items[1]);
        sessionStorage.setItem("deepqa_analysis_click_url", '');
    }
}

// landing on #movechat
$(function(){
    let isSetEvent = false;
    let setEvent = setInterval(function(){
        if ($('#movechat').length > 0 && !isSetEvent) {
            isSetEvent = true;
            clearInterval(setEvent);

            let isSetEvent2 = false;
            let setEvent2 = setInterval(function(){
                if ($('#faq-contact-default').length > 0 && !isSetEvent2) {
                    isSetEvent2 = true;
                    clearInterval(setEvent2);

                    const targetParentElm = document.getElementById('faq-contact-default');
                    const moMovechat = new MutationObserver(landingOnAnchorContent('#movechat'));
                    moMovechat.observe(targetParentElm, {childList: true});
                    moMovechat.disconnect();

                }
            }, 1000);
        }
    }, 1000);
});

const landingOnAnchorContent = (id) => {
    const hash = location.hash;

    if (hash === id) {
        const ID = id.slice(1);
        const targetElm = document.getElementById(ID);

        if (targetElm) {
            const distance = targetElm.getClientRects()[0].top;

            window.scrollTo({
                top: distance,
                behavior: 'smooth'
            });
        }
    }
};

/**
 * アンカーリンクでアコーディオンを開く処理
 */
(() => {
    const openAccordion = (e) => {
        let targetId;
        if (typeof e === 'string') {
            targetId = e.slice(1);
        } else if (typeof e === 'object') {
            targetId = e.target ? e.target.getAttribute('href').slice(1) : '';
        }

        const targetAccordion = document.getElementById(targetId);
        if (targetAccordion) {
            if (targetAccordion.getAttribute('aria-expanded') === 'false') {
                setTimeout(() => {
                    targetAccordion.click();
                }, 250);
            }
        }
    }

    const matchAccordion = /^#accordion/

    const anchers = document.querySelectorAll('a');
    if (anchers.length > 0) {
        for (const ancher of anchers) {
            if (matchAccordion.test(ancher.getAttribute('href'))) {
                ancher.addEventListener('click', openAccordion.bind(ancher))
            }
        }
    }

    const hash = window.location.hash;
    const hasAccordionHash = matchAccordion.test(hash)
    if (hasAccordionHash) {
        openAccordion(hash);
        landingOnAnchorContent(hash);
    }
})();
