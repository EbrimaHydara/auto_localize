const { Deferred } = require("jquery");


//Count Down Timer
function cdt() {
    const $ctas = document.querySelectorAll('.js-cta');
    const $jsCdts = document.querySelectorAll('.js-cdt');
    const $jsTimerTexts = document.querySelectorAll('.js-timer-text');
    const $jsTimerCaps = document.querySelectorAll('.js-timer-cap');
    const $jsTimerButtons = document.querySelectorAll('.js-timer-btn');
    const $jsTimers = document.querySelectorAll('.js-timer');

    if ($jsCdts.length <= 0) {
        return;
    }

    const limitDate = new Date('2023/04/04 09:59'); //終了日時
    // const limitDate = new Date('2022/02/28 12:00'); //test

    $.ajax({
        type: 'GET'
    }).done(function (data, status, xhr) {
        const serverDate = new Date(xhr.getResponseHeader('Date'));
        let rTime = (limitDate - serverDate) / 1000;
        const addZero = function (n) {
            return ('0' + n).slice(-2);
        };

        const gDate = function (rTime) {
            let rDay = Math.floor(rTime / (60 * 60 * 24));
            let rHour = Math.floor(rTime / (60 * 60)) - (rDay * 24);
            let rMin = addZero(Math.floor(rTime / (60)) - (rDay * 24 * 60) - (rHour * 60));
            const rSec = addZero(Math.floor(rTime) - (rDay * 24 * 60 * 60) - (rHour * 60 * 60) - (rMin * 60));
            rDay = rDay !== '0' ? '<small>あと</small>' + rDay + '<small>日</small>' : '';
            rHour = rHour !== '0' ? rHour + '<small>時間</small>' : '';
            rMin = rMin !== '0' ? rMin + '<small>分</small>' : '';

            if ($jsTimers.length > 0) {
                for (const timerElm of $jsTimers) {
                    timerElm.innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small>';
                }
            }
        };

        const COUNT_TIME = 1000;
        let isInitTimer = true;

        setTimeout(() => {
            for (const cta of $ctas) {
                cta.style.display = 'block';
            }
        }, COUNT_TIME);
        gDate(rTime);

        const timer = setInterval(function () {
            const jsTimerTxt1 = '<span class="oneyearfree-Cta_Txt1">キャンペーン</span><span class="oneyearfree-Cta_Txt1">終了まで<br class="oneyearfree-Util_Show-sp"></span>';
            const jsTimerTxt2 = '<p class="oneyearfree-Cta_Txt3">キャンペーン終了までに楽天ひかりへのお申し込みが必要です。</p>';

            if (rTime > 0) {
                gDate(rTime);
                rTime--;

                if (isInitTimer) {
                    const isSp = window.matchMedia('(max-width: 768px)').matches;

                    for (let i = 0; i < $jsTimerTexts.length; i++) {
                        $jsTimerTexts[i].innerHTML = jsTimerTxt1;
                    }
                    for (let i = 0; i < $jsTimerCaps.length; i++) {
                        $jsTimerCaps[i].innerHTML = jsTimerTxt2;
                    }

                    for (const cta of $ctas) {
                        const isTarget = cta.parentNode.classList.contains('js-target-cta');

                        if (isSp && isTarget) {
                            cta.remove();
                        }
                    }

                    isInitTimer = false;
                }
            } else {
                clearInterval(timer);
                if ($jsTimers.length > 0) {
                    for (let i = 0; i < $jsTimerTexts.length; i++) {
                        $jsTimerTexts[i].innerHTML = '';
                    }
                    for (let i = 0; i < $jsTimerCaps.length; i++) {
                        $jsTimerCaps[i].innerHTML = '';
                    }

                    for (const timerElm of $jsTimers) {
                        timerElm.innerHTML = 'キャンペーンは終了しました';
                    }
                    for (const button of $jsTimerButtons) {
                        button.style.display = 'none';
                    }

                    const isSp = window.matchMedia('(max-width: 768px)').matches;

                    for (const cta of $ctas) {
                        const isTarget = cta.parentNode.classList.contains('js-target-cta');

                        if (isSp && isTarget) {
                            cta.remove();
                        }
                    }

                    const $footer = document.getElementById('js-footer');
                    if ($footer) {
                        if (isSp) {
                            $footer.style.marginBottom = '50px';
                        } else {
                            $footer.style.marginBottom = '68px';
                        }
                    }
                }
            }
        }, COUNT_TIME);
    });
}
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

//     // simulation
//     const $choices = $('.js-fee-Simulation_Choice');
//     const $choices2 = $('.js-fee-Simulation_Choice2');
//     const $choices3 = $('.js-fee-Simulation_Choice3');
//     const $resultInitialValue = $('#js-Result_Initial-value');
//     const $resultMonthlyBaseValue = $('#js-Result_Monthly-base-value');
//     const $resultMonthly2yearsBaseValue = $('#js-Result_Monthly-2-years-base-value');
//     const $resultMonthly2yearsConstructionValue = $('#js-Result_Monthly-2-years-construction-value');
//     const $resultMonthlyConstructionValue = $('#js-Result_Monthly-construction-value');
//     const $submitPlan = $('#js-Submit_Plan');
//     const $resultTokuten1 = $('#js-Result-tokute1');
//     const $resultTokuten2 = $('#js-Result-tokute2');


//     // flg
//     let choices1 = false;
//     let choices2 = false;
//     let choices3 = false;

//     // result
//     let resultInitialValue;
//     let resultMonthly2yearsBaseValue;
//     let resultMonthlyConstructionValue;
//     let resultMonthly2yearsConstructionValue;
//     let resultMonthlyBaseValue;
//     let resultTokuten1;
//     let resultTokuten2;

//     window.onpageshow = function() {
//         if (window.location.search && window.location.search.indexOf('?choices=') < 0) {
//             $choices.each(function() {
//                 $(this).prop('checked', false);
//             });
//         }
//         if( choices1 == true && choices2 == true && choices3 == true ) {
//             const scrollToResult = () => {
//                 const targetOffset = $('#js-Result').offset().top;
//                 $('html,body').animate({scrollTop: targetOffset}, 400);
//             };
//             setTimeout(scrollToResult, 0);
//         }
//     };

//     if ($choices.length > 0) {
//         let lineType = ''; // hikari || noHikari || other
//         let houseType = ''; // kodate || syugo
//         let hasRakutenMobile = false;

//         $choices2.on('change', function() {
//             choices2 = true;
//             $choices3.prop('disabled', false);
//         });

//         $choices3.on('change', function() {
//             choices3 = true;
//         });

//         // result text
//         const TAX = 1.1;
//         const createResultInitial = (yen) => {
//             return `
//                 <span class="c-Txt_Normal-l c-Txt_Emp">${yen.toLocaleString()}</span>
//                 <span class="hikari-fee-Txt_Sub"> 円（税込 ${Math.floor(yen * TAX).toLocaleString()} 円）／開通翌月のみ</span>
//             `;
//         };
//         const createResultFree = (noteNum) => {
//             return `
//                 <span class="c-Txt_Normal-l c-Txt_Emp-underline">無料</span>
//                 <span class="c-Txt_Normal-s">※${noteNum}</span>
//             `;
//         };
//         const createResultZero = () => {
//             return `
//                 <span class="c-Txt_Normal-l c-Txt_Emp">0</span>
//                 <span class="hikari-fee-Txt_Sub"> 円</span>
//             `;
//         };
//         const createResultZeroCap = (noteNum) => {
//             return `
//                 <span class="c-Txt_Normal-l c-Txt_Emp">0</span>
//                 <span class="hikari-fee-Txt_Sub"> 円</span>
//                 <span class="c-Txt_Normal-s">※${noteNum}</span>
//             `;
//         };
//         const createResultInstallmentsCount = (yen, count = 24) => {
//             return `
//                 <span class="c-Txt_Normal-l c-Txt_Emp">${yen.toLocaleString()}円</span>／月×${count}回
//             `;
//         };
//         const createResultInstallments = (yen) => {
//             return `
//                 <span class="c-Txt_Normal-l c-Txt_Emp">${yen.toLocaleString()}円</span>（税込 ${Math.floor(yen * TAX).toLocaleString()} 円）／月
//             `;
//         };
//         const tokutenTxtPrimary = `
//             <span class="c-Txt_Emp-underline u-Adjust_Mr-8">お申し込みの方全員</span> 月額基本料
//             <span class="c-Txt_Emp-underline c-Txt_Normal-l"> 1年無料</span><span class="c-Txt_Cap">※1</span>
//         `;
//         const tokutenTxtSecondary = `
//             <span style="color: #28AA25;" class="c-Txt_Emp u-Adjust_Mr-8">新規でお申し込みの方</span> 標準工事費
//             <span style="color: #28AA25;" class="c-Txt_Emp c-Txt_Normal-l">無料</span><span class="c-Txt_Cap">※2</span>
//         `;
//         const tokutenTxtTertiary = `
//             <span style="color: #0077CB;" class="c-Txt_Emp u-Adjust_Mr-8">他社からお乗り換えの方</span>
//             <span style="color: #0077CB;" class="c-Txt_Emp c-Txt_Normal-l">10,000円</span>（税込）キャッシュバック<span class="c-Txt_Cap">※3</span>
//         `;
//         const createTokutenTxt = (yen) => {
//             return `
//                 月額基本料 1年目割引<span class="c-Txt_Emp c-Txt_Normal-l"> ${yen.toLocaleString()}円</span>（税込 ${Math.floor(yen * TAX).toLocaleString()}円）／月
//             `;
//         };

//         $choices.on('change', function() {
//             let $selected = $choices.filter(function() {
//                 return $(this).prop('checked');
//             });

//             $choices2.prop('disabled', false);

//             $selected.each(function() {
//                 if ($(this).val() === 'フレッツ光を利用していない') {
//                     lineType = 'hikari';

//                     // 初期登録費
//                     resultInitialValue = createResultInitial(800);
//                 }
//                 if ($(this).val() === 'フレッツ光を利用している') {
//                     lineType = 'noHikari';

//                     // 初期登録費
//                     resultInitialValue = createResultInitial(1800);

//                     // 標準工事費
//                     resultMonthlyConstructionValue = createResultZero();
//                     resultMonthly2yearsConstructionValue = createResultZero();
//                 }
//                 if ($(this).val() === '他社光コラボを利用している') {
//                     lineType = 'other';

//                     // 初期登録費
//                     resultInitialValue = createResultInitial(1800);

//                     // 標準工事費
//                     resultMonthlyConstructionValue = createResultZero();
//                     resultMonthly2yearsConstructionValue = createResultZero();
//                 }


//                 if ($(this).val() === '集合住宅') {
//                     houseType = 'syugo';

//                     // 月額基本料（２年目）
//                     resultMonthly2yearsBaseValue = createResultInstallments(3800);
//                 }
//                 if ($(this).val() === '戸建') {
//                     houseType = 'kodate';

//                     // 月額基本料（２年目）
//                     resultMonthly2yearsBaseValue = createResultInstallments(4800);
//                 }
//                 if ($(this).val() === 'ある') {
//                     hasRakutenMobile = true;
//                 }
//                 if ($(this).val() === 'ない') {
//                     hasRakutenMobile = false;
//                 }


//                 // 標準工事費
//                 if (lineType === 'hikari' && houseType === 'syugo' && hasRakutenMobile ) {
//                     console.log('契約');
//                     resultMonthlyConstructionValue = createResultInstallmentsCount(687, 24);
//                     resultMonthly2yearsConstructionValue = createResultInstallmentsCount(687, 24);
//                 }
//                 if (lineType === 'hikari' && houseType === 'syugo' && !hasRakutenMobile ) {
//                     console.log('未契約');
//                     resultMonthlyConstructionValue = createResultInstallmentsCount(687, 24);
//                     resultMonthly2yearsConstructionValue = createResultInstallmentsCount(687, 24);
//                 }
//                 if (lineType === 'hikari' && houseType === 'kodate' && hasRakutenMobile ) {
//                     resultMonthlyConstructionValue = createResultInstallmentsCount(825, 24);
//                     resultMonthly2yearsConstructionValue = createResultInstallmentsCount(825, 24);
//                 }
//                 if (lineType === 'hikari' && houseType === 'kodate' && !hasRakutenMobile ) {
//                     resultMonthlyConstructionValue = createResultInstallmentsCount(825, 24);
//                     resultMonthly2yearsConstructionValue = createResultInstallmentsCount(825, 24);
//                 }

//                 // 月額基本料（1年目）
//                 if (houseType === 'syugo' && hasRakutenMobile ) {
//                     resultMonthlyBaseValue = createResultZeroCap(1);
//                 }
//                 if (houseType === 'syugo' && !hasRakutenMobile ) {
//                     resultMonthlyBaseValue = createResultInstallments(1800);
//                 }
//                 if (houseType === 'kodate' && hasRakutenMobile ) {
//                     resultMonthlyBaseValue = createResultZeroCap(1);
//                 }
//                 if (houseType === 'kodate' && !hasRakutenMobile ) {
//                     resultMonthlyBaseValue = createResultInstallments(2800);
//                 }

//                 // 特典
//                 if (lineType === 'hikari' && houseType === 'syugo' && hasRakutenMobile) {
//                     resultTokuten1 = tokutenTxtPrimary;
//                     resultTokuten2 = tokutenTxtSecondary;
//                 }
//                 if (lineType === 'noHikari' && houseType === 'syugo' && hasRakutenMobile) {
//                     resultTokuten1 = tokutenTxtPrimary;
//                     resultTokuten2 = tokutenTxtTertiary;
//                 }
//                 if (lineType === 'other' && houseType === 'syugo' && hasRakutenMobile) {
//                     resultTokuten1 = tokutenTxtPrimary;
//                     resultTokuten2 = tokutenTxtTertiary;
//                 }
//                 if (lineType === 'hikari' && houseType === 'kodate' && hasRakutenMobile) {
//                     resultTokuten1 = tokutenTxtPrimary;
//                     resultTokuten2 = tokutenTxtSecondary;
//                 }
//                 if (lineType === 'noHikari' && houseType === 'kodate' && hasRakutenMobile) {
//                     resultTokuten1 = tokutenTxtPrimary;
//                     resultTokuten2 = tokutenTxtTertiary;
//                 }
//                 if (lineType === 'other' && houseType === 'kodate' && hasRakutenMobile) {
//                     resultTokuten1 = tokutenTxtPrimary;
//                     resultTokuten2 = tokutenTxtTertiary;
//                 }

//                 if (lineType === 'hikari' && houseType === 'syugo' && !hasRakutenMobile) {
//                     resultTokuten1 = createTokutenTxt(1800);
//                     resultTokuten2 = '-';
//                 }
//                 if (lineType === 'noHikari' && houseType === 'syugo' && !hasRakutenMobile) {
//                     resultTokuten1 = createTokutenTxt(1800);
//                     resultTokuten2 = '-';
//                 }
//                 if (lineType === 'other' && houseType === 'syugo' && !hasRakutenMobile) {
//                     resultTokuten1 = createTokutenTxt(1800);
//                     resultTokuten2 = '-';
//                 }
//                 if (lineType === 'hikari' && houseType === 'kodate' && !hasRakutenMobile) {
//                     resultTokuten1 = createTokutenTxt(2800);
//                     resultTokuten2 = '-';
//                 }
//                 if (lineType === 'noHikari' && houseType === 'kodate' && !hasRakutenMobile) {
//                     resultTokuten1 = createTokutenTxt(2800);
//                     resultTokuten2 = '-';
//                 }
//                 if (lineType === 'other' && houseType === 'kodate' && !hasRakutenMobile) {
//                     resultTokuten1 = createTokutenTxt(2800);
//                     resultTokuten2 = '-';
//                 }

//                 enableSubmitPlan();
//                 // scrollToResult();

//             });

//             choices1 = true;

//             if( choices1 == true && choices2 == true && choices3 == true ) {
//                 $resultInitialValue.html(resultInitialValue);
//                 $resultMonthly2yearsBaseValue.html(resultMonthly2yearsBaseValue);
//                 $resultMonthlyConstructionValue.html(resultMonthlyConstructionValue);
//                 $resultMonthly2yearsConstructionValue.html(resultMonthly2yearsConstructionValue);
//                 $resultMonthlyBaseValue.html(resultMonthlyBaseValue);
//                 $resultTokuten1.html(resultTokuten1);
//                 $resultTokuten2.html(resultTokuten2);
//             }
//         });
//     }

//     if ($submitPlan.length > 0) {
//         $submitPlan.on('click', function() {
//             window.location.href = $(this).data('url');
//         });
//     }

//     if (window.location.search && window.location.search.indexOf('?choices=') > -1) {
//         let params = window.location.search.replace('?choices=', '').split(',');
//         let $disabled = $choices.filter(function() {
//             return $(this).prop('disabled');
//         });


//         $disabled.prop('disabled', false);
//         params.forEach(function(param) {
//             $(`#${param}`).prop('checked', true).change();
//         });
//     }

//     function enableSubmitPlan() {
//         if ($submitPlan.length > 0) {
//             $submitPlan.prop('disabled', false);
//             $submitPlan.removeAttr('aria-disabled');
//         }
//     }

//     // function scrollToResult() {
//     //     $('html,body').animate({scrollTop:$('#js-Result').offset().top});
//     // }

//     // const current_page = location.href.split('localhost:8000')[1];
//     const current_page = location.href.split('network.mobile.rakuten.co.jp')[1];
//     sessionStorage.removeItem('hikaricampaign-entrypage');

//     $('.js-session-link').on('click', function(){
//         sessionStorage.setItem('hikaricampaign-entrypage', current_page);
//     });

const jsScrollOpenTabMonthlyFee = document.getElementsByClassName('js-scroll-open-tab-monthly-fee');
const accordionC = document.getElementById('accordion-c');
const accordionCContent = document.getElementById('accordion-content-c');

if (jsScrollOpenTabMonthlyFee[0]) {
    jsScrollOpenTabMonthlyFee[0].onclick = () => {
        const accordionCContentDisp = document.defaultView.getComputedStyle(accordionCContent,null).display;
        if ( accordionCContentDisp == 'none' ) {
            accordionC.click();
        }
    };
}




// new simulation
const $choices = $('.js-fee-Simulation_Choice');
const $choices2 = $('.js-fee-Simulation_Choice2');
const $choices3 = $('.js-fee-Simulation_Choice3');
const $internetFee = $('#internet-fee');
const $constructionCostChk = $('#construction-cost');
const $twoYearResult = $("#two-year-result");

let choices2 = false;
let choices3 = false;

//result
let resultType;
let internetFee;
let constructionCost;

//ラジオボタンをチェックした時点でtrue
$choices2.on('change', function() {
  choices2 = true;
});

$choices3.on('change', function() {
  choices3 = true;
});


if ($choices.length > 0) {

  let apartment = false
  let usingRakutenMobile = false;

  //最初の２つのラジオボタンの変更 チェックの値を全取得
  $choices.on('change', function() {
    let $selected = $choices.filter(function() {
        return $(this).prop('checked');
    });

    //ラジオボタンの値を確認
    $selected.each(function() {

      if ($(this).val() === 'はい') {
        usingRakutenMobile = true;
      }
      if ($(this).val() === 'いいえ') {
        usingRakutenMobile = false;
      }

      if ($(this).val() === '集合住宅') {
        apartment = true
      }
      if ($(this).val() === '戸建') {
        apartment = false
      }
    });


    // チェックが全てされていたらjsonから値を取得する
    if( choices2 == true && choices3 == true ) {

      //現在の金額までスクロール
      scrollToResult()

      $(".oneyearfree-Simulation_Arrow-Down").attr("aria-hidden","false");
      $(".oneyearfree-Simulation_Choices-Monthly-Price").attr("aria-hidden","false");

      if (usingRakutenMobile && !apartment) {
        resultType = "A";
      }else if(usingRakutenMobile && apartment) {
        resultType = "C";
      }else if(!usingRakutenMobile && !apartment) {
        resultType = "E";
      }else if(!usingRakutenMobile && apartment) {
        resultType = "G";
      }

      //工事費のチェック確認してresultTypeを更新
      resultType = hasConstructionCost(resultType)

      //インターネットの料金
      if($($internetFee).val() === ""){
        internetFee = "";
        closeInternetFeeGraph()
      }else{
        internetFee = $($internetFee).val()
        openInternetFeeGraph(internetFee, resultType)
      }

      //データ再取得して再配置
      fetchJsonData(resultType);
    }
  });

  //工事費にチェック
  $constructionCostChk.on('change', function() {
    resultType = hasConstructionCost(resultType)
    //データ再取得して再配置
    fetchJsonData(resultType);
  });

  //インターネットの料金
  $internetFee.on('change', function() {
    if($(this).val() === ""){
      internetFee = "";
      closeInternetFeeGraph()
      resultTwoYearCost(resultType, internetFee)
    }else{
      internetFee = $(this).val()
      openInternetFeeGraph(internetFee, resultType)
      resultTwoYearCost(resultType, internetFee)
    }

    if ($internetFee.val() === "") {
      $('.oneyearfree-Simulation_Result-2-wrap').attr('aria-hidden', 'true');
    }else {
      $('.oneyearfree-Simulation_Result-2-wrap').attr('aria-hidden', 'false');
    }
  });
}


//工事費のチェックでresultTypeを返却
function hasConstructionCost(resultType) {
  if($constructionCostChk.prop('checked')){

    //AならBに,CならDにと変更する
    if(resultType === "A") {
      return "B"
    }else if(resultType === "C"){
      return "D"
    }else if(resultType === "E"){
      return "F"
    }else if(resultType === "G"){
      return "H"
    }else{
      return resultType
    }
  }else{

    //BならAに、DならCに、と変更する
    if(resultType === "B") {
      return "A"
    }else if(resultType === "D"){
      return "C"
    }else if(resultType === "F"){
      return "E"
    }else if(resultType === "H"){
      return "G"
    }else{
      return resultType
    }
  }
}

function closeInternetFeeGraph() {
  $("#pic-2-container").removeClass('is-animated');
  $("#pic-2-container").css('opacity', 0);
  $("#pic2-source").attr({'src': ``});
  $("#pic2-source-pc").attr({'srcset': ``});
  $("#pic2-source-sp").attr({'srcset': ``});
}

function openInternetFeeGraph(internetFee, resultType) {
  //現在のインターネット料金の画像を変更
  $("#pic-2-container").removeClass('is-animated');
  $("#pic2-source").attr({'src': `/assets/img/hikari/fee/simulation/simulation-${internetFee}-${resultType}_pc.png`});
  $("#pic2-source-pc").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-${internetFee}-${resultType}_pc.png`});
  $("#pic2-source-sp").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-${internetFee}-${resultType}.png`});
  setTimeout(function(){
    $("#pic-2-container").addClass('is-animated');
  },50);
}

function fetchJsonData(resultType) {
  $.ajax({
    url: "/assets/json/hikari-price-simulation.json"
  })
  .then(function (data) {
    const idIndex = data.findIndex((element) => element.ID === resultType);
    dispResult(data[idIndex]);
  });
}

function resultTwoYearCost(resultType, internetFee) {

  $.ajax({
    url: "/assets/json/hikari-price-simulation.json"
  })
  .then(function (data) {
    const idIndex = data.findIndex((element) => element.ID === resultType);
    const costSum = (Number(data[idIndex].FirstMonthlyCost) * 12) +
                     (Number(data[idIndex].FirstConstructionCost) * 24) +
                     (Number(data[idIndex].FirstRegistCost)) +
                     (Number(data[idIndex].SecondMonthlyCost) * 12)

    switch (internetFee) {
      case "":
        switch (resultType) {
          case "A":
          case "B":
          case "E":
          case "F":
            $twoYearResult.text((Math.round(57600 / 1000) * 1000).toLocaleString())
            return;

          case "C":
          case "D":
          case "G":
          case "H":
            $twoYearResult.text((Math.round(45600 / 1000) * 1000).toLocaleString())
            return;
          default:
          return;
        }
      default:
        $twoYearResult.text((Math.round(((internetFee * 24) - costSum) / 1000) * 1000).toLocaleString())
        return;
      }
    });
  }

function dispResult(data){

  resultTwoYearCost(data.ID, internetFee);
  //グラフのbaseを出力（2パターン）
  switch(data.ID) {
    case "A":
    case "B":
    case "C":
    case "D":
      $("#pic1-source").attr({'src': `/assets/img/hikari/fee/simulation/simulation-base-one-year-free_pc.png`,});
      $("#pic1-source-pc").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-base-one-year-free_pc.png`,});
      $("#pic1-source-sp").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-base-one-year-free.png`,});
      break;
    case "E":
    case "F":
    case "G":
    case "H":
      $("#pic1-source").attr({'src': `/assets/img/hikari/fee/simulation/simulation-base_pc.png`,});
      $("#pic1-source-pc").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-base_pc.png`,});
      $("#pic1-source-sp").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-base.png`,});
      break;
    default:
      break;
  }

  //金額を出力
  //インターネットの料金
  if($internetFee.val() === ""){
    closeInternetFeeGraph()
  }else{
    openInternetFeeGraph($internetFee.val(), data.ID)
  }

  //タイプ別の画像を出力
  $("#pic3-source").attr({'src': `/assets/img/hikari/fee/simulation/simulation-${data.ID}_pc.png`,});
  $("#pic3-source-pc").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-${data.ID}_pc.png`,});
  $("#pic3-source-sp").attr({'srcset': `/assets/img/hikari/fee/simulation/simulation-${data.ID}.png`,});

  //1年目月額
  $("#month-basic-price1").text(Number(data.FirstMonthlyCost).toLocaleString());
  if(data.FirstMonthlyCost === "0"){
    $("#month-basic-price1-0").text("※1");
  }else{
    const price1IncludeTax = Number(data.FirstMonthlyCost * 1.1).toLocaleString()
    $("#month-basic-price1-0").text(`（税込${price1IncludeTax}円）`);
  }

  //標準工事費
  $("#construction-cost1").text(Number(data.FirstConstructionCost).toLocaleString());
  if(data.FirstConstructionCost === "0"){
    $("#construction-cost1-sub").text("");
  }else{
    $("#construction-cost1-sub").text("／月×24回");
  }

  //初期登録日
  $("#regist-fee").text(Number(data.FirstRegistCost).toLocaleString());

  //2年目月額
  $("#month-basic-price2").text(Number(data.SecondMonthlyCost).toLocaleString());
  const price2IncludeTax = Number(data.SecondMonthlyCost * 1.1).toLocaleString()
  $("#month-basic-price2-tax").text(`（税込${price2IncludeTax}円）`);


  $("#construction-cost2").text(Number(data.SecondConstructionCost).toLocaleString());
  if(data.SecondConstructionCost === "0"){
    $("#construction-cost2-sub").text("");
  }else if(data.SecondConstructionCost !== "0"){
    $("#construction-cost2-sub").text("／月×24回");
  }

  $('.oneyearfree-Simulation_Choices-Monthly-Price_Area').attr('aria-hidden', 'false');
  $('.oneyearfree-Simulation_Choices-Monthly-Price_Area-Pre').attr('aria-hidden', 'true');
  $('.oneyearfree-Simulation_Result').attr('aria-hidden', 'false');
  $('.oneyearfree-Simulation_Result-2').attr('aria-hidden', 'false');
  $('.oneyearfree-Simulation_graph-image').attr('aria-hidden', 'true');
  $(`#js-Result_Simulation-pattern`).attr('aria-hidden', 'false');


  if(resultType === "E" || resultType === "F" || resultType === "G" || resultType === "H"){
    $('.oneyearfree-Simulation_Result-2_Area_Mobile').attr('aria-hidden', 'false');
  }else{
    $('.oneyearfree-Simulation_Result-2_Area_Mobile').attr('aria-hidden', 'true');
  }

  /**
   * 1.楽天モバイルをお持ちですか？->はい
   * の場合 「2年間でこんなにおトク！」を表示、それ以外は非表示
   */
  console.log({resultType});
  if(resultType === "A" || resultType === "B" || resultType === "C" || resultType === "D"){
    $('.oneyearfree-Simulation_Result-2_Area_No-Mobile').attr('aria-hidden', 'false');
  }else{
    $('.oneyearfree-Simulation_Result-2_Area_No-Mobile').attr('aria-hidden', 'true');
  }
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


function scrollToResult() {
  if( choices2 == true && choices3 == true ) {
    $('html,body').animate({scrollTop:$('#simulation-result').offset().top});
  }
}


/**
 * 追従CTA
 */
(() => {
    const target = document.querySelector("#targetcta");
    const fixCta = document.getElementById('fixcta');
    let isFixed = true;
    const hideOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const hideCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (window.innerWidth > 0) { // レスポンシブで常時表示する場合768に設定
                if (!entry.isIntersecting) {
                    fixCta.style.display = 'block';
                    isFixed = true;
                } else {
                    fixCta.style.display = 'none';
                    isFixed = false;
                }
            } else {
                if (!isFixed) {
                    fixCta.style.display = 'block';
                    isFixed = true;
                }
            }
        });
    };

    if (target) {
        const hideObserver = new IntersectionObserver(hideCallback, hideOptions);
        hideObserver.observe(target);
    }
})();

/**
 * SP KV領域でのCTAの出し分け
 */
(() => {
    const target = document.getElementById('js-hero');
    const fixCta = document.getElementById('fixcta');
    const fixCtaCountDown = fixCta && fixCta.querySelector(".js-cdt");
    let isInit = true;
    let scrollTimerId;

    const countDownHideOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    };

    const countDownHideCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (window.innerWidth < 769 && fixCtaCountDown) {
                if (!entry.isIntersecting) {
                    if (isInit) {
                        scrollTimerId = setTimeout(() => {
                            fixCtaCountDown.style.height = 'auto';
                            fixCtaCountDown.style.opacity = '1';
                            fixCtaCountDown.style.marginTop = '4px';
                        }, 1500);
                    } else {
                        fixCtaCountDown.style.height = 'auto';
                        fixCtaCountDown.style.opacity = '1';
                        fixCtaCountDown.style.marginTop = '4px';
                    }
                } else {
                    isInit = false;

                    fixCtaCountDown.style.height = '0';
                    fixCtaCountDown.style.opacity = '0';
                    fixCtaCountDown.style.marginTop = '0';

                    clearTimeout(scrollTimerId);
                }
            }
        });
    };

    if (target) {
        const countDownHideObserver = new IntersectionObserver(countDownHideCallback, countDownHideOptions);
        countDownHideObserver.observe(target);
    }
})();

/**
 * 注意事項への相互リンク
 */
(() => {
    const links = document.querySelectorAll('.js-link-notes');
    const backLink = document.getElementById('js-back');

    const setLinkInBackLink = (event) => {
        const targetId = event.target.getAttribute('id');
        backLink && backLink.setAttribute('href', `#${targetId}-top`);
    };

    if (links) {
        for (const link of links) {
            link.addEventListener('click', setLinkInBackLink);
        }
    }
})();

/**
 * ページ内リンクと同時にアコーディオンを開く
 */
(() => {
    const triggers = document.querySelectorAll('.js-accordion-opener');

    const openAccordion = (id) => {
        const target = document.getElementById(id);
        target && target.click();
    };

    if (triggers) {
        for (const trigger of triggers) {
            const id = trigger.getAttribute('href').slice(1);
            trigger.addEventListener('click', () => openAccordion(id));
        }
    }
})();
