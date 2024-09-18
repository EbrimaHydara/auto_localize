//Count Down Timer
function cdt() {
var $jsCdt = document.getElementsByClassName("js-cdt");
var $jsTimerText = document.getElementsByClassName("js-timer-text");
var $jsTimerCap = document.getElementsByClassName("js-timer-cap");
var $jsTimerButton = document.getElementsByClassName("js-timer-btn");
var jsTimer1 = document.getElementById('js-timer1');
var jsTimer2 = document.getElementById('js-timer2');
var jsTimer3 = document.getElementById('js-timer3');
var jsTimer4 = document.getElementById('js-timer4');
var jsTimer5 = document.getElementById('js-timer5');
var jsTimer6 = document.getElementById('js-timer6');

if ($jsCdt.length > 0) {
    var limitDate = new Date('2021/09/11 09:59'); //終了日時
    // var limitDate = new Date('2021/06/07 14:37'); //test
    var timer;
    $.ajax({
        type: 'GET'
    }).done(function (data, status, xhr) {
        var serverDate = new Date(xhr.getResponseHeader('Date'));
        // var serverDate = new Date();
        var rTime = (limitDate - serverDate) / 1000;
        var addZero = function (n) {
            return ('0' + n).slice(-2);
        };

        var gDate = function (rTime) {
            var rDay = Math.floor(rTime / (60 * 60 * 24));
            var rHour = Math.floor(rTime / (60 * 60)) - (rDay * 24);
            var rMin = addZero(Math.floor(rTime / (60)) - (rDay * 24 * 60) - (rHour * 60));
            var rSec = addZero(Math.floor(rTime) - (rDay * 24 * 60 * 60) - (rHour * 60 * 60) - (rMin * 60));
            rDay = rDay !== '0' ? '<small>あと</small>' + rDay + '<small>日</small>' : '';
            rHour = rHour !== '0' ? rHour + '<small>時間</small>' : '';
            rMin = rMin !== '0' ? rMin + '<small>分</small>' : '';
            jsTimer1.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
            jsTimer2.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
            jsTimer3.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
            jsTimer4.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
            jsTimer5.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
            jsTimer6.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
        };

        gDate(rTime);
        timer = setInterval(function () {
            var jsTimerTxt1 = '<span class="oneyearfree-Cta_Txt1">キャンペーン<br class="oneyearfree-Util_Show-sp">終了まで</span>';
            var jsTimerTxt2 = '<p class="oneyearfree-Cta_Txt3">キャンペーン終了までに楽天ひかりへのお申し込みが必要です。</p>';
            if (rTime > 0) {
                gDate(rTime);
                rTime--;
                for (let i = 0; i < $jsTimerText.length; i++) {
                    $jsTimerText[i].innerHTML = jsTimerTxt1;
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerCap[i].innerHTML = jsTimerTxt2;
                }
                for (let i = 0; i < $jsCdt.length; i++) {
                    $jsCdt[i].style.display = "block";
                }
            } else {
                clearInterval(timer);
                jsTimer1.innerHTML = 'キャンペーンは終了しました';
                jsTimer2.innerHTML = 'キャンペーンは終了しました';
                jsTimer3.innerHTML = 'キャンペーンは終了しました';
                jsTimer4.innerHTML = 'キャンペーンは終了しました';
                jsTimer5.innerHTML = 'キャンペーンは終了しました';
                jsTimer6.innerHTML = 'キャンペーンは終了しました';
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerCap[i].innerHTML = '';
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerText[i].innerHTML = '';
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerButton[i].style.display = 'none';
                }
                for (let i = 0; i < $jsCdt.length; i++) {
                    $jsCdt[i].style.display = "block";
                }


                // for (let i = 0; i < $jsCdt.length; i++) {
                //     $jsCdt[i].style.display = "none";
                // }
            }
        }, 1000);

    });
}}

cdt();


import ScrollHint from 'scroll-hint';
// scroll hint
window.addEventListener('DOMContentLoaded', function(){
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});

// simulation
const $choices = $('.js-fee-Simulation_Choice');
const $choices2 = $('.js-fee-Simulation_Choice2');
const $choices3 = $('.js-fee-Simulation_Choice3');
const $resultInitialValue = $('#js-Result_Initial-value');
const $resultMonthlyBaseValue = $('#js-Result_Monthly-base-value');
const $resultMonthly2yearsBaseValue = $('#js-Result_Monthly-2-years-base-value');
const $resultMonthly2yearsConstructionValue = $('#js-Result_Monthly-2-years-construction-value');
const $resultMonthlyConstructionValue = $('#js-Result_Monthly-construction-value');
const $submitPlan = $('#js-Submit_Plan');

// flg
let choices1 = false;
let choices2 = false;
let choices3 = false;

// result
let resultInitialValue;
let resultMonthly2yearsBaseValue;
let resultMonthlyConstructionValue;
let resultMonthly2yearsConstructionValue;
let resultMonthlyBaseValue;

window.onpageshow = function() {
    if (window.location.search && window.location.search.indexOf('?choices=') < 0) {
        $choices.each(function() {
            $(this).prop('checked', false);
        });
    }
    if( choices1 == true && choices2 == true && choices3 == true ) {
        const scrollToResult = () => {
            const targetOffset = $('#js-Result').offset().top;
            $('html,body').animate({scrollTop: targetOffset}, 400);
        };
        setTimeout(scrollToResult, 0);
    }
};

if ($choices.length > 0) {
    let notUsingFletsHikari = false;
    let usingFletsHikari = false;
    let otherCompanyHikari =false;
    let kodate = false;
    let syuugoujyutaku = false;
    let notUsingRakutenMobile = false;
    let usingRakutenMobile = false;

    $choices2.on('change', function() {
        choices2 = true;
        $choices3.prop('disabled', false);
    });

    $choices3.on('change', function() {
        choices3 = true;
    });

    $choices.on('change', function() {
        let $selected = $choices.filter(function() {
            return $(this).prop('checked');
        });

        $choices2.prop('disabled', false);

        $selected.each(function() {
            if ($(this).val() === 'フレッツ光を利用していない') {
                notUsingFletsHikari = true;
                usingFletsHikari = false;
                otherCompanyHikari = false;
                resultInitialValue = '<span class="c-Txt_Normal-l c-Txt_Emp">800</span><span class="hikari-fee-Txt_Sub"> 円（税込 880 円）／開通翌月のみ</span>';
            }
            if ($(this).val() === 'フレッツ光を利用している') {
                notUsingFletsHikari = false;
                usingFletsHikari = true;
                otherCompanyHikari = false;
                resultInitialValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span><span class="hikari-fee-Txt_Sub"> 円（税込 1,980 円）／開通翌月のみ</span>';
            }
            if ($(this).val() === '他社光コラボを利用している') {
                notUsingFletsHikari = false;
                usingFletsHikari = false;
                otherCompanyHikari = true;
                resultInitialValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> <span class="hikari-fee-Txt_Sub"> 円（税込 1,980 円）／開通翌月のみ</span>';
            }

            if ($(this).val() === '集合住宅') {
                kodate = false;
                syuugoujyutaku = true;
            }
            if ($(this).val() === '戸建') {
                kodate = true;
                syuugoujyutaku = false;
            }
            if ($(this).val() === 'ある') {
                notUsingRakutenMobile = false;
                usingRakutenMobile = true;
            }
            if ($(this).val() === 'ない') {
                notUsingRakutenMobile = true;
                usingRakutenMobile = false;
            }


            if(syuugoujyutaku) {
                resultMonthly2yearsBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">3,800</span> 円（税込 4,180 円）／月';
                if(notUsingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">458</span> 円／月×36回';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">458 </span>円／月×36回';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> 円（税込 1,980 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(usingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> 円（税込 1,980 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(otherCompanyHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> 円（税込 1,980 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                }
            }

            if(kodate) {
                resultMonthly2yearsBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">4,800</span> 円（税込 5,280 円）／月';
                if(notUsingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">550</span> 円／月×36回';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">550</span> 円／月×36回';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">2,800</span> 円（税込 3,080 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(usingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">2,800</span> 円（税込 3,080 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(otherCompanyHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">2,800</span> 円（税込 3,080 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                }
            }
            enableSubmitPlan();
            // scrollToResult();

        });

        choices1 = true;

        if( choices1 == true && choices2 == true && choices3 == true ) {
            $resultInitialValue.html(resultInitialValue);
            $resultMonthly2yearsBaseValue.html(resultMonthly2yearsBaseValue);
            $resultMonthlyConstructionValue.html(resultMonthlyConstructionValue);
            $resultMonthly2yearsConstructionValue.html(resultMonthly2yearsConstructionValue);
            $resultMonthlyBaseValue.html(resultMonthlyBaseValue);
        }
    });
}

if ($submitPlan.length > 0) {
    $submitPlan.on('click', function() {
        window.location.href = $(this).data('url');
    });
}

if (window.location.search && window.location.search.indexOf('?choices=') > -1) {
    let params = window.location.search.replace('?choices=', '').split(',');
    let $disabled = $choices.filter(function() {
        return $(this).prop('disabled');
    });


    $disabled.prop('disabled', false);
    params.forEach(function(param) {
        $(`#${param}`).prop('checked', true).change();
    });
}

function enableSubmitPlan() {
    if ($submitPlan.length > 0) {
        $submitPlan.prop('disabled', false);
        $submitPlan.removeAttr('aria-disabled');
    }
}

// function scrollToResult() {
//     $('html,body').animate({scrollTop:$('#js-Result').offset().top});
// }

// const current_page = location.href.split('localhost:8000')[1];
const current_page = location.href.split('network.mobile.rakuten.co.jp')[1];
sessionStorage.removeItem('hikaricampaign-entrypage');

$('.js-session-link').on('click', function(){
    sessionStorage.setItem('hikaricampaign-entrypage', current_page);
});
