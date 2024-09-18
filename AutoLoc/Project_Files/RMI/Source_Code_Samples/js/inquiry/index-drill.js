import { displayAttention } from "../common/attention-info";

jQuery(function($){
  $(function () {
    var $box = $('.inquiry-drilldown-question, .inquiry-drilldown-answer');
    var $radio = $('input[type="radio"]');
    var $body = $('html,body');
    var $checkbox = $('input[type="checkbox"]');
    var $target_hash = null;
    var hash = location.hash;
    var arr_hash = [];
    var len_hash = 0;
    var i = 0;
    var is_hash = false;

    $box.filter('[data-level="0"]').show();
    $radio.filter(':checked').each(function () {
      $box.filter('[data-number="' + $(this).val() + '"]').show();
    });

    $radio.on('change', function () {
      var $this = $(this),
        myNumber = $this.val(),
        myLevel = Number($this.attr('data-level')),
        isAnswer = $this.attr('data-is-answer'),
        myTop = 0;

      $box.each(function () {
        var $this = $(this);

        if ($this.attr('data-number') === myNumber) {
          $this.slideDown();
          myTop = $this.offset().top;
        }
        else if (Number($this.attr('data-level')) >= myLevel) {
          $this.hide().find('input').prop('checked', false);
        }
      });

      if (isAnswer) {
        $body.animate({ scrollTop: (myTop - 64) });
      }

      $checkbox.prop('checked', false).triggerHandler('change');

    });

    if (hash.length > 0) {
      hash = hash.replace('#', '');

      if ($('.box-answer[data-number="' + hash + '"]').length > 0) {
        is_hash = true;
      }

      arr_hash = hash.split('_');
      len_hash = arr_hash.length;

      for (i = 0; i < len_hash; i++) {
        if (i > 0) {
          arr_hash[i] = arr_hash[i - 1] + '_' + arr_hash[i];
        }

        setTimeout(function (i) {
          $('input[value="' + arr_hash[i] + '"]').click();
        }, 500 * i, i);
      }

      setTimeout(function (i) {
        $target_hash = $('[data-number="' + arr_hash[len_hash - 1] + '"]');

        if ($target_hash.length > 0) {
          $body.animate({ scrollTop: $target_hash.offset().top - 64 });
        }
      }, 500 * (i + 1));
    }

  });
  $(function(){
    $('.trigger-messaging').on('click', function(){
      $('.chat_img').click();
    });
});
});

// import 'whatwg-fetch';
// import 'core-js/modules/es.promise';

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

        $.ajax({
            url: '/api/inquiry-consult/',
            // url: 'https://35.221.73.217/api/inquiry-consult/',
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        })
        .done(function(data, status, xhr){
          const txt_outsideCall = '<span class="inquiry-Wait_Status"><span>混雑状況：</span><span class="inquiry-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span><br><span class="inquiry-Wait_Message">24時間いつでも相談できるAIチャット相談をご利用いただくか、よくある質問をご確認ください。</span>';
          const txt_outsideAll = '<span class="inquiry-Wait_Status"><span>混雑状況：</span><span class="inquiry-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span>';
          const txt_outsideMessage = '<span class="inquiry-Wait_Status"><span>混雑状況：</span><span class="inquiry-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span><br><span class="inquiry-Wait_Message">現在、チャット相談の回答は営業時間外です。いただいたメッセージは9時以降、順次回答いたします。ご了承の程よろしくお願いいたします。</span>';
          const txt_insideData = "一部の地域などでの「通信・データ」障害に関するお問い合わせ";
          const txt_outsideData = "通話・データ通信のトラブルについての専用窓口です。<br>ご契約内容やご利用料金全般に関する問い合わせは、電話番号050-5434-4653までご連絡ください。";
          let num_time = 0;
            const showMessage = function($target, str_message){
                if($target) {
                    for (let i = 0; i < $target.length; i++) {
                        if (str_message === "") {
                          $target[i].style.display = "none";
                          $target[i].nextElementSibling.style.display = "none";
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
                    num_time = serverDate.getHours();

                    if (data.member.call.general !== '') {
                        if (num_time > 19 && num_time < 24) {
                            data.member.call.general = txt_outsideCall;
                        }
                        else if (num_time > -1 && num_time < 9) {
                            data.member.call.general = txt_outsideAll;
                        }
                    }

                    if (data.member.call.unpaid !== '') {
                        if (num_time > 19 && num_time < 24) {
                            data.member.call.unpaid = txt_outsideCall;
                        }
                        else if (num_time > -1 && num_time < 9) {
                            data.member.call.unpaid = txt_outsideAll;
                        }
                    }

                    if (data.non_member.call.general !== '') {
                        if (num_time > 19 && num_time < 24) {
                            data.non_member.call.general = txt_outsideCall;
                        }
                        else if (num_time > -1 && num_time < 9) {
                            data.non_member.call.general = txt_outsideAll;
                        }
                    }

                    if (data.non_member.call.procedure !== '') {
                        if (num_time > 19 && num_time < 24) {
                            data.non_member.call.procedure = txt_outsideCall;
                        }
                        else if (num_time > -1 && num_time < 9) {
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

                    if (data.member.message !== '') {
                        if (num_time > -1 && num_time < 9) {
                            data.member.message = txt_outsideCall;
                        }
                    }

                    if (data.non_member.message !== '') {
                        if (num_time > -1 && num_time < 9) {
                            data.non_member.message = txt_outsideCall;
                        }
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
