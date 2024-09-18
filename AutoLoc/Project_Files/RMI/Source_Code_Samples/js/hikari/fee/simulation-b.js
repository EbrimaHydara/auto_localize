const { Deferred } = require("jquery");

// simulation
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

      $(".hikari-simulation-Simulation-b_Arrow-Down").attr("aria-hidden","false");
      $(".hikari-simulation-Simulation-b_Choices-Monthly-Price").attr("aria-hidden","false");

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
      $('.hikari-simulation-Simulation-b_Result-2-wrap').attr('aria-hidden', 'true');
    }else {
      $('.hikari-simulation-Simulation-b_Result-2-wrap').attr('aria-hidden', 'false');
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

  $('.hikari-simulation-Simulation-b_Choices-Monthly-Price_Area').attr('aria-hidden', 'false');
  $('.hikari-simulation-Simulation-b_Choices-Monthly-Price_Area-Pre').attr('aria-hidden', 'true');
  $('.hikari-simulation-Simulation-b_Result').attr('aria-hidden', 'false');
  $('.hikari-simulation-Simulation-b_Result-2').attr('aria-hidden', 'false');
  $('.hikari-simulation-Simulation-b_graph-image').attr('aria-hidden', 'true');
  $(`#js-Result_Simulation-pattern`).attr('aria-hidden', 'false');


  if(resultType === "E" || resultType === "F" || resultType === "G" || resultType === "H"){
    $('.hikari-simulation-Simulation-b_Result-2_Area_Mobile').attr('aria-hidden', 'false');
  }else{
    $('.hikari-simulation-Simulation-b_Result-2_Area_Mobile').attr('aria-hidden', 'true');
  }

  /**
   * 1.楽天モバイルをお持ちですか？->はい
   * の場合 「2年間でこんなにおトク！」を表示、それ以外は非表示
   */
  console.log({resultType});
  if(resultType === "A" || resultType === "B" || resultType === "C" || resultType === "D"){
    $('.hikari-simulation-Simulation-b_Result-2_Area_No-Mobile').attr('aria-hidden', 'false');
  }else{
    $('.hikari-simulation-Simulation-b_Result-2_Area_No-Mobile').attr('aria-hidden', 'true');
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
