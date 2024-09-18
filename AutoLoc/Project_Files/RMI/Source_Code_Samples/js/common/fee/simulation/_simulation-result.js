import axios from 'axios';
import { sub, format } from "date-fns";

/*
const resultDataLabels = [
  { min: 20, max: 9999, label: '動画もゲームもドラマも\nめいっぱい利用タイプ！' },
  { min: 10, max: 20, label: 'SNSは毎日チェック！\nたくさん利用タイプ！' },
  { min: 3, max: 10, label: 'LINEもお買い物もSNSも\nそこそこ利用タイプ！' },
  { min: 0, max: 3, label: 'LINEや検索がメインの\nちょこっと利用タイプ！' },
];
*/

/*
const carrierLabel = {
  docomo_eximo: 'docomo -eximo-',
  docomo_irumo: 'docomo -irumo-',
  docomo: 'docomo -従来のプラン-',
  ahamo: 'ahamo',
  au: 'au',
  povo: 'povo2.0',
  softbank: 'SoftBank',
  softbank_paytoku: 'SoftBank -ペイトク-',
  linemo: 'LINEMO',
  ymobile: 'Y!mobile',
  uqmobile: 'UQ mobile',
};
*/

const carrierLabelGraph = {
  docomo_eximo: 'docomo<br>-eximo-',
  docomo_irumo: 'docomo<br>-irumo-',
  docomo: 'docomo -従来のプラン-',
  ahamo: 'ahamo',
  ahamo_poikatsu: 'ahamo-ポイ活-',
  au: 'au',
  povo: 'povo2.0',
  softbank: 'SoftBank',
  softbank_paytoku: 'SoftBank<br>-ペイトク-',
  linemo: 'LINEMO',
  ymobile: 'Y!mobile',
  uqmobile: 'UQ mobile',
};

/*
const callLabel = {
  frequently: 'たくさんする',
  occasionally: 'たまにする',
  rarely: 'ほとんどしない',
};
*/

const graphPattern = {
  winFamNothingP: 'WIN_FAMILY_NOTHINGPOINT',
  winFamMoreP: 'WIN_FAMILY_MOREPOINT',
  winFamLessP: 'WIN_FAMILY_LESSPOINT',
  winNonfamNothingP: 'WIN_NONFAMILY_NOTHINGPOINT',
  winNonfamMoreP: 'WIN_NONFAMILY_MOREPOINT',
  winNonfamLessP: 'WIN_NONFAMILY_LESSPOINT',
  loseFamNothingP: 'LOSE_FAMILY_NOTHINGPOINT',
  loseFamMoreP: 'LOSE_FAMILY_MOREPOINT',
  loseFamLessP: 'LOSE_FAMILY_LESSPOINT',
  loseNonfamNothingP: 'LOSE_NONFAMILY_NOTHINGPOINT',
  loseNonfamMoreP: 'LOSE_NONFAMILY_MOREPOINT',
  loseNonfamLessP: 'LOSE_NONFAMILY_LESSPOINT',
  carrierOther980: 'CARRIER_OTHER_980',
  carrierOther1980: 'CARRIER_OTHER_1980',
  carrierOther2980: 'CARRIER_OTHER_2980',
  sizeUnknown: 'SIZE_UNKNOWN',
}

const familyLabel = {
  family_2: '家族割(2回線)',
  family_3_over: '家族割(3回線以上)',
}

const minWidth = '835px';

// 数字にコンマを追加
const addComma = (num, options = { withSmallTag: false }) => {
  const { withSmallTag } = options;
  const _num = num.toLocaleString();
  if (withSmallTag) {
    return _num.replace(',', '<span style="font-size:0.6em;">,</span>');
  }
  return _num;
};

const switchRatAppear = (pattern) => {
  let id;
  switch (pattern) {
    case graphPattern.winFamNothingP:
      id = '01';
      break;
    case graphPattern.winFamMoreP:
      id = '02';
      break;
    case graphPattern.winFamLessP:
      id = '03';
      break;
    case graphPattern.winNonfamNothingP:
      id = '04';
      break;
    case graphPattern.winNonfamMoreP:
      id = '05';
      break;
    case graphPattern.winNonfamLessP:
      id = '06';
      break;
    case graphPattern.loseFamNothingP:
      // 現在このパターンなし
      break;
    case graphPattern.loseFamMoreP:
      // 現在このパターンなし
      break;
    case graphPattern.loseFamLessP:
      // 現在このパターンなし
      break;
    case graphPattern.loseNonfamNothingP:
      id = '07';
      break;
    case graphPattern.loseNonfamMoreP:
      id = '08';
      break;
    case graphPattern.loseNonfamLessP:
      id = '09';
      break;
    case graphPattern.carrierOther980:
      id = '10';
      break;
    case graphPattern.carrierOther1980:
      id = '11';
      break;
    case graphPattern.carrierOther2980:
      id = '12';
      break;
    case graphPattern.sizeUnknown:
      id = '13';
      break;
    default:
      break;
  }
  if (id) {
    const appearElm = document.querySelector('.js-appeal');
    appearElm.setAttribute('data-ratid', `result_point-case_${id}`);
    appearElm.setAttribute('data-ratevent', 'appear');
    if (window.RAT && window.RAT.bindAppear) {
      const elm = window.RAT.$Selector('.js-appeal');
      window.RAT.bindAppear(elm);
    }
  }
};

/* 月のデータ利用量が不明のときの表示 */
export const displayCardAllPlan = () => {
  const appealUnknownElm = document.querySelector('.js-appeal-plan-all');
  appealUnknownElm.style.display = 'block';

  switchRatAppear(graphPattern.sizeUnknown);
  displayAttention('c');
};


export const displayCardOnePlan = (rmiPrice) => {
  const plan980Elm = document.querySelector('.js-simulation-result-plan-980');
  const plan1980Elm = document.querySelector('.js-simulation-result-plan-1980');
  const plan2980Elm = document.querySelector('.js-simulation-result-plan-2980');
  const planSkeletonElm = document.querySelector('.js-simulation-result-plan-skeleton');

  // 楽天モバイルの価格箇所出し分け
  switch (rmiPrice) {
    case 980:
      planSkeletonElm.style.display = 'none';
      plan980Elm.style.display = 'block';
      switchRatAppear(graphPattern.carrierOther980);
      break;
    case 1980:
      planSkeletonElm.style.display = 'none';
      plan1980Elm.style.display = 'block';
      switchRatAppear(graphPattern.carrierOther1980);
      break;
    case 2980:
      planSkeletonElm.style.display = 'none';
      plan2980Elm.style.display = 'block';
      switchRatAppear(graphPattern.carrierOther2980);
      break;
    default:
      break;
  }

  const cardOneBlockElm = document.querySelector('.js-appeal-plan-one');
  cardOneBlockElm.style.display = 'block';

  displayAttention('c');
};

export const displayGraph = (carrier, rmiPrice, targetPrice, plan, familyPlan, rmiFamilyPrice, point) => {
  let isDisplayPointGraph = false;
  if (30 < point) {
    isDisplayPointGraph = true;
  }

  const diffWithPoint = rmiPrice - point;
  const priceWithPoint = (diffWithPoint > 0) ? diffWithPoint : 0;

  const graphElm = document.querySelector('.js-graph');
  graphElm.style.display = 'block';

  const rmiBarElm = document.querySelector('.js-graph-rmi');
  const targetBarElm = document.querySelector('.js-graph-target');
  const pointBarElm = document.querySelector('.js-graph-point');
  const pointBarWrapperElm = document.querySelector('.js-graph-point-wrapper');

  const diff = targetPrice - rmiPrice;

  const graphArrowLongElm = document.querySelector('.js-graph-arrow-long');
  const graphArrowShortElm = document.querySelector('.js-graph-arrow-short');

  let isSp = false;
  const mediaQueryList = window.matchMedia(`(min-width: ${minWidth})`);
  const resize = (event) => {
    if (event.matches) {
      isSp = false;
    } else {
      isSp = true;
    }
  }
  mediaQueryList.addEventListener('change', resize);
  resize(mediaQueryList);

  const familyPlanCount = getFamilyPlanCount(familyPlan);
  const bargainTotalPrice2year = calcurateBargainAmount(diff, familyPlanCount, 2,);
  const bargainMiniumPrice = familyPlanCount ? 14 : 7;
  const isBargainPrice = checkBargainPrice(bargainTotalPrice2year ,bargainMiniumPrice);

  // 勝ちパターン
  if (diff > 0) {
    // グラフの長さは60%まで、差額が小さい時吹き出しはみ出ないように30%に
    let barMaxLengthRatio = 0.6;
    if (isSp && ((diff / targetPrice) < 0.5)) {
      barMaxLengthRatio = 0.3;
    }
    const graphWidth = (graphElm.getBoundingClientRect().width * barMaxLengthRatio);

    const barRatio = Math.floor(rmiPrice / targetPrice * 1000) / 1000;
    const barRatioWithPoint = Math.floor(priceWithPoint / targetPrice * 1000) / 1000;

    targetBarElm.style.width = `calc(${graphWidth}px)`;

    displayBargainPriceMonthly(graphElm, diff);
    displayPargainPriceYearly(graphElm, diff, familyPlanCount);
    displayFamilyCountArea(graphElm, familyPlanCount);
    displayBargainArea(graphElm, isBargainPrice, familyPlanCount);

    let graphArrowElm;
    if (!isSp && barRatio < 0.7) {
      graphArrowElm = graphArrowLongElm
      const graphValueWidth = 80 + 8; // valueの幅 + margin
      // graph差分 - (valueの幅 + graphとvalue間 + value後ろのmargin)
      graphArrowElm.style.width = `calc(${graphWidth - (graphWidth * barRatio)}px - (${graphValueWidth}px + 8px))`;
    } else {
      graphArrowElm = graphArrowShortElm;
    }
    graphArrowElm.style.display = 'block';

    const appealElm = document.querySelector('.js-appeal');
    const observerOptions = {
      rootMargin: '0px 0px -50% 0px',
      threshold: [0, 1]
    };
    // グラフのエリアが画面半分より上に行くとアニメーション
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          rmiBarElm.animate({
            width: [0, `calc(${graphWidth}px * ${barRatio})`]
          }, {
            fill: 'forwards',
            duration: 500,
          })
          setTimeout(() => {
            graphArrowElm.animate({
              transform: ['translateX(20px)', 'translateX(0)'],
              opacity: [0, 1]
            }, {
              fill: 'forwards',
              duration: 500,
            });
          }, 300)

          // アニメーションは一回のみ実行させるためunobserveする
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    observer.observe(appealElm);

    if (isDisplayPointGraph) {
      pointBarWrapperElm.style.display = 'block';
      pointBarElm.style.width = `calc(${graphWidth}px * ${barRatioWithPoint})`;

      const pointBarSkeletonElm = document.querySelector('.js-graph-point-skeleton');
      pointBarSkeletonElm.style.width = `calc(${graphWidth}px * ${barRatio})`;

      if (rmiPrice < point) {
        const speachbubbleA = document.querySelector('.js-graph-speachbubble-a');
        speachbubbleA.style.display = 'block';

        // speachbubble(absoluteしてる)分をずらす
        const graphMain = document.querySelector('.js-graph-main');
        graphMain.style.paddingBottom = '45px';

        const speachbubblePoint = speachbubbleA.querySelector('.js-graph-speachbubble-point');
        const speachbubblePointRemainder = speachbubbleA.querySelector('.js-graph-speachbubble-point-remainder');
        speachbubblePoint.innerHTML = addComma(point, {withSmallTag: true});
        speachbubblePointRemainder.innerHTML = addComma(point - rmiPrice, {withSmallTag: true});
        if (familyPlan) {
          switchRatAppear(graphPattern.winFamMoreP);
        } else {
          switchRatAppear(graphPattern.winNonfamMoreP);
        }
      } else {
        const speachbubbleB = document.querySelector('.js-graph-speachbubble-b');
        speachbubbleB.style.display = 'block';
        const graphMain = document.querySelector('.js-graph-main');
        graphMain.style.paddingBottom = '14px';

        const speachbubblePoint = speachbubbleB.querySelector('.js-graph-speachbubble-point');
        speachbubblePoint.innerHTML = addComma(point, {withSmallTag: true});
        if (familyPlan) {
          switchRatAppear(graphPattern.winFamLessP);
        } else {
          switchRatAppear(graphPattern.winNonfamLessP);
        }
      }
      if(isBargainPrice && familyPlanCount > 0) {
        displayAttention('ee');
      }else {
        displayAttention('e');
      }
    } else {
      if (familyPlan) {
        switchRatAppear(graphPattern.winFamNothingP);
      } else {
        switchRatAppear(graphPattern.winNonfamNothingP);
      }
      if(isBargainPrice && familyPlanCount > 0) {
        displayAttention('aa');
      }else {
        displayAttention('a');
      }
    }
  } else {
    // 負け時のグラフの長さは30%まで(吹き出しとの兼ね合い)
    let barMaxLengthRatio = 0.6;
    if (isSp) {
      barMaxLengthRatio = 0.3;
    }
    const graphWidth = (graphElm.getBoundingClientRect().width * barMaxLengthRatio);
    // 負けのときはグラフのみを表示(animationなし)
    const barRatio = Math.floor(targetPrice / rmiPrice * 1000) / 1000;
    const barRatioWithPoint = Math.floor(priceWithPoint / rmiPrice * 1000) / 1000;
    rmiBarElm.style.width = `calc(${graphWidth}px)`;
    targetBarElm.style.width = `calc(${graphWidth}px * ${barRatio})`;

    // 負け時のグラフ間の幅調整
    const graphItemElms = document.querySelectorAll('.js-graph-item');
    graphItemElms.forEach(elm => {
      elm.classList.add('u-Adjust_Mt-16');
    });

    if (isDisplayPointGraph) {
      pointBarWrapperElm.style.display = 'block';
      pointBarElm.style.width = `calc(${graphWidth}px * ${barRatioWithPoint})`;

      const pointBarSkeletonElm = document.querySelector('.js-graph-point-skeleton');
      pointBarSkeletonElm.style.width = `calc(${graphWidth}px)`;

      if (rmiPrice < point) {
        const speachbubbleA = document.querySelector('.js-graph-speachbubble-a');
        speachbubbleA.style.display = 'block';

        const graphMain = document.querySelector('.js-graph-main');
        graphMain.style.paddingBottom = '45px';

        const speachbubblePoint = speachbubbleA.querySelector('.js-graph-speachbubble-point');
        const speachbubblePointRemainder = speachbubbleA.querySelector('.js-graph-speachbubble-point-remainder');
        speachbubblePoint.innerHTML = addComma(point, {withSmallTag: true});
        speachbubblePointRemainder.innerHTML = addComma(point - rmiPrice, {withSmallTag: true});
        if (familyPlan) {
          switchRatAppear(graphPattern.loseFamMoreP);
        } else {
          switchRatAppear(graphPattern.loseNonfamMoreP);
        }
      } else {
        const speachbubbleC = document.querySelector('.js-graph-speachbubble-c');
        speachbubbleC.style.display = 'block';
        const graphMain = document.querySelector('.js-graph-main');
        graphMain.style.paddingBottom = '50px';

        const speachbubblePoint = speachbubbleC.querySelector('.js-graph-speachbubble-point');
        speachbubblePoint.innerHTML = addComma(point, {withSmallTag: true});
        if (familyPlan) {
          switchRatAppear(graphPattern.loseFamLessP);
        } else {
          switchRatAppear(graphPattern.loseNonfamLessP);
        }
      }
      displayAttention('f');
    } else {
      if (familyPlan) {
        switchRatAppear(graphPattern.loseFamNothingP);
      } else {
        switchRatAppear(graphPattern.loseNonfamNothingP);
      }
      displayAttention('c');
    }
  }


  const targetCarrierElm = document.querySelector('.js-graph-target-carrier');
  const rmiPriceElm = document.querySelector('.js-graph-rmi-price');
  const targetPriceElm = document.querySelector('.js-graph-target-price');
  targetCarrierElm.innerHTML = carrierLabelGraph[carrier];
  rmiPriceElm.innerHTML = addComma(rmiPrice, {withSmallTag: true});
  targetPriceElm.innerHTML = addComma(targetPrice, {withSmallTag: true});

  if (isDisplayPointGraph) {
    const pointPriceElm = document.querySelector('.js-graph-point-price');
    pointPriceElm.innerHTML = addComma(priceWithPoint, {withSmallTag: true});
  }

  const rmiFamilyPriceElm = document.querySelector('.js-rmi-family-price');
  rmiFamilyPriceElm.innerHTML = addComma(rmiFamilyPrice, {withSmallTag: true});

  // 家族割記述周り
  let targetPlan = plan;
  if (familyPlan) {
    targetPlan += `／${familyLabel[familyPlan]}`;

    const rmiFamilyPlanElm = document.querySelector('.js-graph-rmi-family');
    if(isBargainPrice) {
        rmiFamilyPlanElm.style.display = 'block';
    }
    if(diff < 0) {
        rmiFamilyPlanElm.style.display = 'block';
    }
  } else {
    if (isDisplayPointGraph) {
      if (diff > 0) {
        // const diffNonfamilyElm = document.querySelector('.js-graph-diff-nonfamily');
        // diffNonfamilyElm.style.display = 'block';
      } else {
        const diffNonfamilyLoseElm = document.querySelector('.js-graph-diff-nonfamily-lose');
        diffNonfamilyLoseElm.style.display = 'block';
      }
    } else {
      const speachbubbleElm = document.querySelector('.js-graph-rmi-nonfamily-nopoint');
      if(diff < 0) {
        speachbubbleElm.style.display = 'block';
      }
    }
  }
  const targetPlanElms = document.querySelectorAll('.js-graph-target-plan');
  targetPlanElms.forEach(elm => {
    elm.innerHTML = targetPlan;
  })
};

// 注釈出しわけ
export const displayAttention = (pattern) => {
  const attentionElm = document.getElementById(`js-graph-attention-${pattern}`);
  console.log("patten", pattern);
  if (attentionElm) {
    attentionElm.style.display = 'block';
  }
  const diffCallAttentionChipElm = document.querySelector('.js-graph-call-attention-chip');
  const diffAttentionChipElm = document.querySelector('.js-graph-diff-attention-chip');
  const bargainAttentionChipElm = document.querySelectorAll('.js-bargain-attention-chip');

  let diffAttentionNum = '';
  let callAttentionNum = '';
  let bargainAttentionNum = '';
  switch (pattern) {
    case 'a':
      diffAttentionNum = '2';
      callAttentionNum = '3';
      bargainAttentionNum = '2';
      break;
    case 'aa':
      diffAttentionNum = '2';
      callAttentionNum = '4';
      bargainAttentionNum = '2,3';
      break;
    case 'c':
      callAttentionNum = '2';
      break;
    case 'e':
      diffAttentionNum = '4';
      callAttentionNum = '5';
      bargainAttentionNum = '4'
      break;
    case 'ee':
      diffAttentionNum = '4';
      callAttentionNum = '6';
      bargainAttentionNum = '4,5'
      break;
    case 'f':
      callAttentionNum = '4';
      break;
    default:
      break;
  }

  if (diffAttentionChipElm && diffAttentionNum) {
    diffAttentionChipElm.innerText = diffAttentionNum;
  }
  if (diffCallAttentionChipElm && callAttentionNum) {
    diffCallAttentionChipElm.innerText = callAttentionNum;
  }
  if(bargainAttentionChipElm && bargainAttentionNum) {
    bargainAttentionChipElm.forEach(item => item.innerText = `※${bargainAttentionNum}`)
  }
};

/* jsonから各キャリアのプランデータを取得 */
export const fetchPlanData = async () => {
  const res = await fetch('/assets/json/simulation.json');
  const json = await res.json();
  return json;
};

// どのパターンで表示するか
export const getPattern = (size, targetCarrier, targetPrice, rmiPrice) => {
  if (size === 'unknown') {
    return 'SIZE_UNKNOWN';
  }
  if (targetCarrier === 'other') {
    return 'CARRIER_OTHER';
  }

  if (rmiPrice < targetPrice) {
    return 'GRAPH_WIN'; // 楽天モバイルの方が安い
  } else if (targetPrice <= rmiPrice) {
    return 'GRAPH_LOSE'; // 楽天モバイルの方が高い
  }

  return 'SIZE_UNKNOWN';
};

// ユーザ情報取得
export const getMemberInfo = async (isLocal) => {
  const prdPath = 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519';
  const localPath = `/assets/json/dummy-member-information.json`;
  const apiPath = isLocal ? localPath : prdPath;

  const api = axios.create({
      url: apiPath,
      headers: { "Content-Type": "application/json" },
      responseType: 'json',
      withCredentials: true
  });

  const res = await api.get();
  const data = res.data;

  // localのみisLogin=falseをクエリにつけることで未ログイン状態に
  if (isLocal) {
    const searchParams = new URLSearchParams(location.search);
    const dummyIsLogin = searchParams.get('isLogin');
    if (dummyIsLogin === 'false') {
      return;
    }
  }
  return data;
}

// point情報取得
export const getPoint = async (isLocal) => {
  const prdPath = 'https://user-attributes.api.rakuten.co.jp/capi/v1/mno/poikaku.json?acc=1312&aid=1';
  let localPath = '/assets/json/dummy_simulation_point_01.json';
  // localのみpointPattern=01~12をクエリにつけることでdummy情報出しわけ
  if (isLocal) {
    const searchParams = new URLSearchParams(location.search);
    const dummyPointPattern = searchParams.get('pointPattern');
    if (dummyPointPattern) {
      localPath = `/assets/json/dummy_simulation_point_${dummyPointPattern}.json`;
    }
  }
  const apiPath = isLocal ? localPath : prdPath;

  const api = axios.create({
    url: apiPath,
    headers: { "Content-Type": "application/json" },
    responseType: 'json',
    withCredentials: true,
  });
  const res = await api.get();
  const data = res.data.items.mobile;
  return data;
}

export const getAveragePoint = (pointDataList, isLocal) => {
  // 過去3ヶ月のポイントの平均
  let date = new Date();
  if (isLocal) {
    const searchParams = new URLSearchParams(location.search);
    const dummyDate = searchParams.get('date') || '2023-12-1'; // 現状のdummyデータが23年12月分までしかないのでローカルでは日付を固定
    date = new Date(dummyDate);
  }
  const date1monthBefore = format(sub(date, { months: 1 }), "yyMM");
  const date2monthBefore = format(sub(date, { months: 2 }), "yyMM");
  const date3monthBefore = format(sub(date, { months: 3 }), "yyMM");

  let poikakuTotal = 0;

  pointDataList.forEach(data => {
    if (data.month === date1monthBefore || data.month === date2monthBefore || data.month === date3monthBefore) {
      let point = 0;
      let magnification = 1;
      const monthRank = Number(data.rank);
      switch (monthRank) {
        case 2:
          magnification = 2;
          break;
        case 3:
          magnification = 2;
          break;
        case 4:
          magnification = 2;
          break;
        case 5:
          magnification = 3;
          break;
        default:
          break;
      }
      if (data.mno_status === '1') {
        point = Number(data.actual);
      } else {
        point = Number(data.potential);
      }

      // 23年12月以前(ポイントはランクに応じて変動していた)
      if (Number(data.month) < 2312) {
        point = point / magnification * 4;
      }
      // 月のpoint上限 = 2000
      if (point > 2000) {
        point = 2000;
      }
      poikakuTotal += point;
    }
  });

  // 月にもらえるポイント数の平均
  const point = Math.round(poikakuTotal / 3);

  return point;
};


const checkBargainPrice = (bargainTotalPrice2year, bargainMiniumPrice) => bargainTotalPrice2year >= bargainMiniumPrice ? true : false;

const displayBargainPriceMonthly = (displayArea, diffPrice) => {
    const diffPriceMonthly = displayArea.querySelector('.js-diff-price-monthly');
    diffPriceMonthly.innerHTML = addComma(diffPrice, {withSmallTag: true});
}

const displayPargainPriceYearly = (displayArea, diff, familyPlanCount) => {
    const bargainTotalPrice2yearElm = displayArea.querySelector('.js-diff-price-year-2');
    const bargainTotalPrice30yearElm = displayArea.querySelector('.js-diff-price-year-30');
    bargainTotalPrice2yearElm.innerHTML = calcurateBargainAmount(diff, familyPlanCount, 2);
    bargainTotalPrice30yearElm.innerHTML = calcurateBargainAmount(diff, familyPlanCount, 30);
}

const displayFamilyCountArea = (displayArea, familyPlanCount) => {
    const familyPlanCountElm = displayArea.querySelector('.js-family-count');
    familyPlanCountElm.innerHTML = familyPlanCount;
    const familyTooltip = displayArea.querySelector('.js-family-tooltip');
    if(familyPlanCount > 0) {
        familyTooltip.style.display = 'block';
    }else {
        familyTooltip.style.display = 'none';
    }
}

const displayBargainArea = (displayArea, isBargainPrice, familyPlanCount) => {
    const bargainArea = displayArea.querySelector('.js-bargain-area');
    const bargainComment = displayArea.querySelector('.js-bargain-plan-comment');
    const bargainImgPanda = displayArea.querySelector('.js-bargain-price-panda');
    const bargainImgBudget = displayArea.querySelector('.js-bargain-price-budget');
    const bargainBudgetTextImg = displayArea.querySelector('.js-bargain-budget-text-img');
    const bargainPriceComment = displayArea.querySelector('.js-bargain-price-text-comment');

    if(isBargainPrice) {
        bargainArea.style.display = "block";
        bargainComment.style.textAlign = "left";
        bargainImgPanda.style.display = "none";
        bargainImgBudget.style.display = "inline-block";
        if(familyPlanCount === 0) {
            bargainArea.classList.add('fee-simulation-result-Main_Appeal-bargain-prediction-notooltip');
        }
    }else {
        bargainArea.style.display = "none";
        bargainComment.style.textAlign = "center";
        bargainImgPanda.style.display = "inline-block";
        bargainPriceComment.classList.add('fee-simulation-result-Main_Appeal-bargain-price-text-comment-nonetarget');
        bargainImgBudget.style.display = "none";
    }

    if(familyPlanCount > 0) {
        bargainBudgetTextImg.style.display = (!isBargainPrice) ? "block" : "none";
    }else {
        bargainBudgetTextImg.style.display = "block";
    }
}

const calcurateBargainAmount = (diffPrice, familyPlanCount, year) => {
    const month = 12;
    const unit = 10000;
    const bargainAmount = diffPrice * (familyPlanCount === 0 ? 1 : familyPlanCount) * ( month * year );
    return Math.floor( bargainAmount / unit );
}

const getFamilyPlanCount = (familyPlan) => {
    switch (familyPlan) {
        case 'family_2':
            return 2;
        case 'family_3_over':
            return 3;
        default:
            return 0;
    }
}
