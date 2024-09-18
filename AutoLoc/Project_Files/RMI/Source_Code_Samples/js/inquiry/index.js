// import 'whatwg-fetch';
// import 'core-js/modules/es.promise';
import { displayAttention } from "../common/attention-info";

// include
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

// if (dispAttention) {
//     getAttentionInfo()
//     .then(data => {
//         dispAttention.innerHTML = data;
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// async function getAttentionInfo() {
// //    const res = await fetch('/attention-news/inc/inquiry');
//     const res = await fetch('/attention-news/inc/inquiry');
//     const data = res.ok ? await res.text() : [];

//     return data;
// }

const parameter = location.search;

if (parameter.indexOf('status=initial') === -1) {
    // document.getElementById('accordion-initial').style.display = 'none';
    // document.getElementById('accordion-general').style.borderTop = '1px solid #cacadb';
}

// waiting times

(function($) {
    const target = {
        "member": {
            "call": {
                "general": document.getElementById("waiting-member-call-general"),
                "data": document.getElementById("waiting-member-call-data"),
                "data_sub": document.getElementById("waiting-member-call-data-sub"),
                "unpaid": document.getElementById("waiting-member-call-unpaid"),
                "lost": document.getElementById("waiting-member-call-lost"),
                "global": document.getElementById("waiting-member-call-global")
            },
            "message": document.getElementById("waiting-member-message")
        },
        "non_member": {
            "call": {
                "general": document.getElementById("waiting-non_member-call-general"),
                "procedure": document.getElementById("waiting-non_member-call-procedure")
            },
            "message": document.getElementById("waiting-non_member-message")
        }
    };

    $.ajax({
        type: 'GET'
    }).done(function(data, status, xhr) {
        const serverDate = new Date(xhr.getResponseHeader('Date'));

        $.ajax({
            // url: 'https://network.mobile.rakuten.co.jp/api/inquiry-consult',
            // url: 'https://35.221.73.217/api/inquiry-consult',
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        })
        .done(function(data, status, xhr){
            const txt_outsideCall = "<span class='c-Txt_Emp-02'>営業時間外</span>です。24時まで営業しているチャット相談をご利用ください。";
            const txt_outsideAll = "<span class='c-Txt_Emp-02'>営業時間外です。</span>";
            const txt_outsideMessage = "現在、チャット相談の回答は<span class='c-Txt_Emp-02'>営業時間外</span>です。いただいたメッセージは9時以降、順次回答いたします。ご了承の程よろしくお願いいたします。";
            const txt_insideData = "一部の地域などでの「通信・データ」障害に関するお問い合わせ";
            const txt_outsideData = "通話・データ通信のトラブルについての専用窓口です。<br>ご契約内容やご利用料金全般に関する問い合わせは、電話番号050-5434-4653までご連絡ください。";
            let num_time = 0;
            const showMessage = function($target, str_message){
                if ($target) {
                    if (str_message === "") {
                        $target.style.display = "none";
                    }
                    else {
                        $target.style.display = "block";
                        $target.innerHTML = str_message;
                    }
                }
            };

            if (data.code === "SUCCESS") {

                if (serverDate.getYear() > 100) {
                    num_time = serverDate.getHours();

                    if (num_time > 19 && num_time < 24) {
                        showMessage(target.member.call.general, txt_outsideCall);
                        showMessage(target.member.call.unpaid, txt_outsideCall);
                        showMessage(target.non_member.call.general, txt_outsideCall);
                        showMessage(target.non_member.call.procedure, txt_outsideCall);
                    }
                    else if (num_time > -1 && num_time < 9) {
                        showMessage(target.member.call.general, txt_outsideAll);
                        showMessage(target.member.call.unpaid, txt_outsideAll);
                        showMessage(target.non_member.call.general, txt_outsideAll);
                        showMessage(target.non_member.call.procedure, txt_outsideAll);
                    }
                    else {
                        showMessage(target.member.call.general, data.member.call.general);
                        showMessage(target.member.call.unpaid, data.member.call.unpaid);
                        showMessage(target.non_member.call.general, data.non_member.call.general);
                        showMessage(target.non_member.call.procedure, data.non_member.call.general);
                    }

                    if (num_time > 8 && num_time < 20) {
                        showMessage(target.member.call.data_sub, txt_insideData);
                    }
                    else {
                        showMessage(target.member.call.data_sub, txt_outsideData);
                    }

                    if (num_time > -1 && num_time < 9) {
                        showMessage(target.member.message, txt_outsideMessage);
                        showMessage(target.non_member.message, txt_outsideMessage);
                    }
                    else {
                        showMessage(target.member.message, data.member.message);
                        showMessage(target.non_member.message, data.non_member.message);
                    }

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
