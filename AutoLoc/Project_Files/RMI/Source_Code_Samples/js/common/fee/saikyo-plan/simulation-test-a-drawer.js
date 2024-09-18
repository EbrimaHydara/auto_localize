import axios from 'axios';
import { sub, format } from "date-fns";

let isLocal = false;

const carrierLabelGraph = {
  docomo_eximo: 'eximo',
  docomo_irumo: 'irumo',
  docomo: 'docomo',
  ahamo: 'ahamo',
  au: 'au',
  povo: 'povo2.0',
  softbank: 'SoftBank',
  softbank_paytoku: 'ペイトク',
  linemo: 'LINEMO',
  ymobile: 'Y!mobile',
  uqmobile: 'UQ mobile',
};

const familyLabel = {
  family_2: '家族割(2回線)',
  family_3_over: '家族割(3回線以上)',
}

const minWidth = '835px';
const AVERAGE_USER_POINT = 1388; // ユーザー全体のポイント取得平均値

const askDataSizeElm = document.getElementById('js-ask-data-size');
const askCarrierElm = document.getElementById('js-ask-carrier');
const askCarrierWrapElm = document.getElementById('js-ask-carrier-wrap');

const familyPlanElm = document.getElementById('js-ask-family-plan');
const familyNonePlanElm = familyPlanElm.querySelector('input[value=""]');
const family2PlanElm = familyPlanElm.querySelector('input[value="family_2"]');
const family3OverPlanElm = familyPlanElm.querySelector('input[value="family_3_over"]');

const simulationBtn = document.getElementById('js-simulation-btn');

const checkValidatedAll = () => {
  let isAllValidated = false;
  if (askDataSizeElm.value) {
    if (askDataSizeElm.value === 'unknown') {
      isAllValidated = true;
    } else {
      isAllValidated = !!askCarrierElm.value;
    }
  }
  simulationBtn.setAttribute('aria-disabled', !isAllValidated);
};

// data絞り込み
const getData = (dataList, size) => {
  let data = {};
  if (size.match(/^over_(\d+(\.\d+)?)+$/)) {
    const _size = Number(size.replace('over_', '')) + 0.1; // minの値より大きくするため+0.1
    data = dataList.find(_data => (Number(_data['data_min']) < _size));
  } else if (size.match(/^under_(\d+(\.\d+)?)+$/)) {
    const _size = Number(size.replace('under_', ''));
    data = dataList.findLast(_data => (_size <= Number(_data['data_max'])));
  }
  return data;
}

// jsonから各キャリアのプランデータを取得
const fetchPlanData = async () => {
  const res = await fetch('/assets/json/simulation.json');
  const json = await res.json();
  return json;
};

// キャリア選択肢の出しわけ
const activateCarrierBtn = (data) => {
  askCarrierWrapElm.style.display = 'block';
  askCarrierElm.removeAttribute('disabled')
  const elms = askCarrierElm.querySelectorAll('option');
  elms.forEach(elm => {
    if (data[`${elm.value}_plan`] || elm.value === 'other') {
      elm.removeAttribute('disabled');
    } else {
      elm.setAttribute('disabled', '');
    }
  })

  askCarrierElm.addEventListener('change', (e) => {
    familyNonePlanElm.removeAttribute('disabled');
    familyNonePlanElm.checked = true;

    // 家族割ボタン出しわけ
    if (data[`${e.target.value}_plan_family_2`]) {
      family2PlanElm.removeAttribute('disabled');
    } else {
      family2PlanElm.setAttribute('disabled', '');
    }
    if (data[`${e.target.value}_plan_family_3_over`]) {
      family3OverPlanElm.removeAttribute('disabled');
    } else {
      family3OverPlanElm.setAttribute('disabled', '');
    }

    checkValidatedAll();
  })
};

// シミュレーション選択項目全てのリセット
const resetSimulation = () => {
  askCarrierWrapElm.style.display = 'block';
  askDataSizeElm.selectedIndex = 0;
  resetCarrierBtn();
  simulationBtn.setAttribute('aria-disabled', true);
};

// キャリア選択項目のリセット
const resetCarrierBtn = () => {
  askCarrierElm.setAttribute('disabled', '')
  const elms = askCarrierElm.querySelectorAll('option');
  elms.forEach(elm => {
    elm.removeAttribute('disabled');
  })
  askCarrierElm.selectedIndex = 0;
  resetFamilyPlanBtn();
};

// 家族割ボタンのリセット
const resetFamilyPlanBtn = () => {
  //familyNonePlanElm.removeAttribute('disabled');
  familyNonePlanElm.setAttribute('disabled', '');
  familyNonePlanElm.checked = true;
  family2PlanElm.setAttribute('disabled', '');
  family3OverPlanElm.setAttribute('disabled', '');
};

// 数字にコンマを追加
const addComma = (num, options = { withSmallTag: false }) => {
  const { withSmallTag } = options;
  const _num = num.toLocaleString();
  if (withSmallTag) {
    return _num.replace(',', '<span style="font-size:0.6em;">,</span>');
  }
  return _num;
};

const displayGraph = (carrier, rmiPrice, targetPrice, plan, familyPlan, point, isAverage) => {
  const diffWithPoint = rmiPrice - point;
  const priceWithPoint = (diffWithPoint > 0) ? diffWithPoint : 0;

  const graphElm = document.getElementById('js-graph');
  graphElm.style.display = 'block';

  const rmiBarElm = document.querySelector('.js-graph-rmi');
  const targetBarElm = document.querySelector('.js-graph-target');
  const pointBarElm = document.querySelector('.js-graph-point');

  const diff = targetPrice - rmiPrice;
  const graphValueWidth = 80 + 8; // valueの幅 + margin
  const graphWidth = graphElm.getBoundingClientRect().width - graphValueWidth;

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

  // 勝ちパターン
  if (diff > 0) {
    const barRatio = Math.floor(rmiPrice / targetPrice * 100) / 100;
    const barRatioWithPoint = Math.floor(priceWithPoint / targetPrice * 100) / 100;

    targetBarElm.style.width = `calc(${graphWidth}px)`;

    const diffPriceElm = document.querySelector('.js-graph-diff-price');
    diffPriceElm.innerHTML = addComma(diff * 24, {withSmallTag: true});

    let graphArrowElm;
    if (!isSp && barRatio < 0.7) {
      graphArrowElm = graphArrowLongElm
      // graph差分 - (valueの幅 + graphとvalue間 + value後ろのmargin)
      graphArrowElm.style.width = `calc(${graphWidth - (graphWidth * barRatio)}px - (${graphValueWidth}px + 8px))`;
    } else {
      graphArrowElm = graphArrowShortElm;
    }
    graphArrowElm.style.display = 'block';

    rmiBarElm.style.width = `calc(${graphWidth}px * ${barRatio})`;
    pointBarElm.style.width = `calc(${graphWidth}px * ${barRatioWithPoint})`;

    setTimeout(() => {
      graphArrowElm.animate({
        transform: ['translateX(20px)', 'translateX(0)'],
        opacity: [0, 1]
      }, {
        fill: 'forwards',
        duration: 500,
      });
    }, 300)
  } else {
    // 負けのときはグラフのみを表示(animationなし)
    const barRatio = Math.floor(targetPrice / rmiPrice * 100) / 100;
    const barRatioWithPoint = Math.floor(priceWithPoint / rmiPrice * 100) / 100;
    rmiBarElm.style.width = `calc(${graphWidth}px)`;
    targetBarElm.style.width = `calc(${graphWidth}px * ${barRatio})`;
    pointBarElm.style.width = `calc(${graphWidth}px * ${barRatioWithPoint})`;
  }

  const targetCarrierElm = document.querySelector('.js-graph-target-carrier');
  const rmiPriceElm = document.querySelector('.js-graph-rmi-price');
  const targetPriceElm = document.querySelector('.js-graph-target-price');
  targetCarrierElm.innerHTML = carrierLabelGraph[carrier];
  rmiPriceElm.innerHTML = addComma(rmiPrice, {withSmallTag: true});
  targetPriceElm.innerHTML = addComma(targetPrice, {withSmallTag: true});

  const pointPriceElm = document.querySelector('.js-graph-point-price');
  pointPriceElm.innerHTML = addComma(priceWithPoint, {withSmallTag: true});

  let targetPlan = plan;
  if (familyPlan) {
    targetPlan += `／${familyLabel[familyPlan]}`
  }
  const targetPlanElms = document.querySelectorAll('.js-graph-target-plan');
  targetPlanElms.forEach(elm => {
    elm.innerHTML = targetPlan;
  })

  if (!isAverage) {
    const speachBubbleOwnElm = document.getElementById('js-graph-speachbubble-own');
    speachBubbleOwnElm.style.display = 'block';
    const ownPointElm = document.getElementById('js-own-point');
    ownPointElm.innerHTML = addComma(point, {withSmallTag: true});
  } else {
    const speachBubbleAverageElm = document.getElementById('js-graph-speachbubble-average');
    speachBubbleAverageElm.style.display = 'block';
    const averagePointElm = document.getElementById('js-average-point');
    averagePointElm.innerHTML = addComma(point, {withSmallTag: true});
  }
};

// ユーザ情報取得
const getMemberInfo = async () => {
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
const getPoint = async () => {
  const prdPath = 'https://user-attributes.api.rakuten.co.jp/capi/v1/mno/poikaku.json?acc=1312&aid=1';
  let localPath = '/assets/json/dummy_simulation_point_01.json';
  // localのみpointPattern=01~13をクエリにつけることでdummy情報出しわけ
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

// point箇所の表示
const getAveragePoint = (pointDataList) => {
  // 過去3ヶ月のポイントの平均
  let date = new Date();
  if (isLocal) {
    const searchParams = new URLSearchParams(location.search);
    const dummyDate = searchParams.get('date') || '2023-12-1'; // dummyデータが12月分までしかないので通常は日付を固定
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

      // 12月以前
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

  // 毎月もらえるポイント数
  const point = Math.round(poikakuTotal / 3);

  return point;
};

/* シミュレーション結果を表示 */
const displayResult = (data, size, carrier, familyPlan) => {
  const applyBtnElm = document.getElementById('js-apply-btn');

  const switchPattern = (patternId) => {
    const resultLoadingElm = document.getElementById('js-simulation-result-loading');
    resultLoadingElm.style.display = 'none';
    const resultLazyElms = document.querySelectorAll('.js-simulation-result-lazy');
    resultLazyElms.forEach(elm => {
      elm.style.display = 'block';
    });

    applyBtnElm.setAttribute('href', `/guide/application/?lid-r=fee_saikyo-plan_simulation-result_a_${patternId}_guide_application`);

    const appearElmId = 'js-simulation-result-appear';
    let appearElm = document.getElementById(appearElmId);
    if (appearElm) {
      appearElm.setAttribute('data-ratid', `saikyo-plan_simulation-result_a_${patternId}`);
    } else {
      const simulationResultAppearWrapperElm = document.getElementById('js-simulation-result-appear-wrapper');
      appearElm = document.createElement('div');
      appearElm.setAttribute('data-ratid', `saikyo-plan_simulation-result_a_${patternId}`);
      appearElm.setAttribute('data-ratevent', 'appear');
      appearElm.setAttribute('data-ratparam', 'all');
      appearElm.setAttribute('id', appearElmId);
      appearElm.style.height = '1px';
      simulationResultAppearWrapperElm.appendChild(appearElm);
    }
    if (window.RAT && window.RAT.bindAppear) {
      const elm = window.RAT.$Selector(`#${appearElmId}`);
      window.RAT.bindAppear(elm);
    }

    const simulationBackElmId = 'js-simulation-back';
    const simulationBackElm = document.getElementById(simulationBackElmId);
    simulationBackElm.setAttribute('data-ratid', `saikyo-plan_simulation_again_a-${patternId}_click`);
    if (window.RAT && window.RAT.bindClick) {
      const elm = window.RAT.$Selector(`#${simulationBackElmId}`).find('[data-ratid]');
      window.RAT.bindClick(elm);
    }

    let attentionElm;
    switch (patternId) {
      case 1:
        attentionElm = document.getElementById('js-result-attention-nothing-point');
        break;
      case 2:
        attentionElm = document.getElementById('js-result-attention-win');
        break;
      case 3:
        attentionElm = document.getElementById('js-result-attention-lose');
        break;
      case 4:
        attentionElm = document.getElementById('js-result-attention-lack');
        break;
      default:
        break;
    }
    if (attentionElm) {
      attentionElm.style.display = 'block';
    }
  }

  if (size === 'unknown' || carrier === 'other') {
    const lackPatternElms = document.querySelectorAll('.js-lack-pattern');
    lackPatternElms.forEach(elm => {
      elm.style.display = 'block';
    });
    switchPattern(4)
  } else {
    const rmiPriceWithTax = Number(data['rakuten_mobile_price_with_tax']);

    let targetPlan = '';
    let targetPriceWithTax = 0;
    let point = 0;

    targetPlan = data[`${carrier}_plan`];
    targetPriceWithTax = Number(data[`${carrier}_price_with_tax`]);
    if (familyPlan) {
      targetPlan = data[`${carrier}_plan_${familyPlan}`];
      targetPriceWithTax = Number(data[`${carrier}_price_with_tax_${familyPlan}`]);
    }

    // ログインしてるかどうかでpoint箇所出しわけ
    getMemberInfo().then(async () => {
      const pointDataList = await getPoint();
      if (isLocal) {
        const searchParams = new URLSearchParams(location.search);
        const dummyIsLogin = searchParams.get('isLogin');
        if (dummyIsLogin === 'false') {
          point = AVERAGE_USER_POINT;
          displayGraph(carrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, familyPlan, point, true);
          switchPattern(1)
          return;
        }
      }
      point = getAveragePoint(pointDataList);
      if (point > 0) {
        if (rmiPriceWithTax < targetPriceWithTax) {
          switchPattern(2)
        } else {
          switchPattern(3)
        }
        displayGraph(carrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, familyPlan, point, false);
      } else {
        switchPattern(1)
        point = AVERAGE_USER_POINT;
        displayGraph(carrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, familyPlan, point, true);
      }
    }).catch(() => {
      point = AVERAGE_USER_POINT;
      displayGraph(carrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, familyPlan, point, true);
      switchPattern(1)
    });

    if (rmiPriceWithTax < targetPriceWithTax) {
      const winPatternElms = document.querySelectorAll('.js-win-pattern');
      winPatternElms.forEach(elm => {
        elm.style.display = 'block';
      });
    } else {
      const losePatternElms = document.querySelectorAll('.js-lose-pattern');
      losePatternElms.forEach(elm => {
        elm.style.display = 'block';
      });
    }
  }

  // シミュレーション画面に戻る
  const simulationBackElm = document.getElementById('js-simulation-back');
  simulationBackElm.addEventListener('click', () => {
    const simulationElm = document.getElementById('js-simulation');
    const simulationResultElm = document.getElementById('js-simulation-result');
    simulationElm.style.display = 'block';
    simulationResultElm.style.display = 'none';
    resetResult();
  })
}

// シミュレーション結果リセット
const resetResult = () => {
  const graphElm = document.getElementById('js-graph');
  graphElm.style.display = 'none';
  const speachBubbleOwnElm = document.getElementById('js-graph-speachbubble-own');
  speachBubbleOwnElm.style.display = 'none';
  const ownPointElm = document.getElementById('js-own-point');
  ownPointElm.innerHTML = '';
  const speachBubbleAverageElm = document.getElementById('js-graph-speachbubble-average');
  speachBubbleAverageElm.style.display = 'none';
  const averagePointElm = document.getElementById('js-average-point');
  averagePointElm.innerHTML = '';

  const rmiBarElm = document.querySelector('.js-graph-rmi');
  const targetBarElm = document.querySelector('.js-graph-target');
  const pointBarElm = document.querySelector('.js-graph-point');
  rmiBarElm.style.width = 0;
  targetBarElm.style.width = 0;
  pointBarElm.style.width = 0;

  const graphArrowLongElm = document.querySelector('.js-graph-arrow-long');
  const graphArrowShortElm = document.querySelector('.js-graph-arrow-short');
  graphArrowLongElm.style.width = 0;
  graphArrowShortElm.style.width = 0;
  graphArrowLongElm.style.display = 'none';
  graphArrowShortElm.style.display = 'none';


  const diffPriceElm = document.querySelector('.js-graph-diff-price');
  diffPriceElm.innerHTML = '';

  const targetCarrierElm = document.querySelector('.js-graph-target-carrier');
  const rmiPriceElm = document.querySelector('.js-graph-rmi-price');
  const targetPriceElm = document.querySelector('.js-graph-target-price');
  targetCarrierElm.innerHTML = '';
  rmiPriceElm.innerHTML = '';
  targetPriceElm.innerHTML = '';

  const pointPriceElm = document.querySelector('.js-graph-point-price');
  pointPriceElm.innerHTML = '';

  const targetPlanElms = document.querySelectorAll('.js-graph-target-plan');
  targetPlanElms.forEach(elm => {
    elm.innerHTML = '';
  })

  const winPatternElms = document.querySelectorAll('.js-win-pattern');
  winPatternElms.forEach(elm => {
    elm.style.display = 'none';
  });
  const losePatternElms = document.querySelectorAll('.js-lose-pattern');
  losePatternElms.forEach(elm => {
    elm.style.display = 'none';
  });
  const lackPatternElms = document.querySelectorAll('.js-lack-pattern');
  lackPatternElms.forEach(elm => {
    elm.style.display = 'none';
  });

  const attentionNothingPointElm = document.getElementById('js-result-attention-nothing-point');
  const attentionWinElm = document.getElementById('js-result-attention-win');
  const attentionLoseElm = document.getElementById('js-result-attention-lose');
  const attentionLackElm = document.getElementById('js-result-attention-lack');
  attentionNothingPointElm.style.display = 'none';
  attentionWinElm.style.display = 'none';
  attentionLoseElm.style.display = 'none';
  attentionLackElm.style.display = 'none';

  const resultLoadingElm = document.getElementById('js-simulation-result-loading');
  resultLoadingElm.style.display = 'block';
  const resultLazyElms = document.querySelectorAll('.js-simulation-result-lazy');
  resultLazyElms.forEach(elm => {
    elm.style.display = 'none';
  });
}

(async () => {
  // 2回目以降はdrawerを表示しない
  if (localStorage.getItem('isDisplayedSimulation')) {
    const simulationDrawerWrapperElm = document.getElementById('js-simulation-drawer-wrapper');
    const simulationFixedBtnElm = document.getElementById('js-simulation-fixed-btn');
    simulationDrawerWrapperElm.style.display = 'none';
    simulationFixedBtnElm.style.display = 'block';
    return;
  }
  const fixedBtnWrapperElm = document.getElementById('js-fixed-btn-wrapper');
  fixedBtnWrapperElm.style.display = 'none';

  let data = {};
  const dataList = await fetchPlanData();

  askDataSizeElm.addEventListener('change', () => {
    resetCarrierBtn();
    if (askDataSizeElm.value) {
      const size = askDataSizeElm.value;
      data = getData(dataList, size)

      if (size === 'unknown') {
        askCarrierWrapElm.style.display = 'none';
      } else {
        activateCarrierBtn(data);
      }
    }
    checkValidatedAll();
  });

  // drawer周り
  let isDrawerOpen = false;
  const drawerTriggerElm = document.getElementById('js-simulation-drawer-trigger');
  const drawerTargetElm = document.getElementById('js-simulation-drawer-target');
  const drawerOverlayElm = document.getElementById('js-simulation-drawer-overlay');
  const drawerElm = document.getElementById('js-simulation-drawer');

  drawerTriggerElm.addEventListener('click', () => {
    if (isDrawerOpen) {
      drawerOverlayElm.style.display = 'none';
      drawerTargetElm.style.gridTemplateRows = '0fr';
      drawerElm.setAttribute('aria-expanded', false);
      isDrawerOpen = false;

      drawerTriggerElm.setAttribute('data-ratid', 'saikyo-plan_simulation_a_click');
    } else {
      drawerOverlayElm.style.display = 'block';
      drawerTargetElm.style.gridTemplateRows = '1fr';
      drawerElm.setAttribute('aria-expanded', true);
      isDrawerOpen = true;

      drawerTriggerElm.setAttribute('data-ratid', 'saikyo-plan_simulation_close_a_simulation_click');
    }
    if (window.RAT && window.RAT.bindClick) {
      const elm = window.RAT.$Selector('#js-simulation-drawer-trigger').find('[data-ratid]');
      window.RAT.bindClick(elm);
    }
  });
  drawerOverlayElm.addEventListener('click', () => {
    drawerOverlayElm.style.display = 'none';
    drawerTargetElm.style.gridTemplateRows = '0fr';
    drawerElm.setAttribute('aria-expanded', false);
    isDrawerOpen = false;

    drawerTriggerElm.setAttribute('data-ratid', 'saikyo-plan_simulation_a_click');
    if (window.RAT && window.RAT.bindClick) {
      const elm = window.RAT.$Selector('#js-simulation-drawer-trigger').find('[data-ratid]');
      window.RAT.bindClick(elm);
    }
  });

  simulationBtn.addEventListener('click', e => {
    e.preventDefault();
    const size = askDataSizeElm.value;
    const carrier = askCarrierElm.value;
    const familyPlanElm = document.getElementById('js-ask-family-plan');
    const familyPlan = familyPlanElm.querySelector('input:checked')?.value;

    let param = `data=${size}&carrier=${carrier}`;
    if (familyPlan) {
      param += `&family=${familyPlan}`
    }

    const cloneBtnId = 'js-simulation-btn-clone';
    let simulationBtnCloneElm = document.getElementById(cloneBtnId);
    simulationBtnCloneElm.setAttribute('data-ratid', `${param}&pattern=a`);
    if (window.RAT && window.RAT.bindClick) {
      const ratElm = window.RAT.$Selector(`#${cloneBtnId}`).find('[data-ratid]');
      window.RAT.bindClick(ratElm);
      setTimeout(() => {
        simulationBtnCloneElm.click();
      }, 1000)
    }

    const simulationElm = document.getElementById('js-simulation');
    const simulationResultElm = document.getElementById('js-simulation-result');
    simulationElm.style.display = 'none';
    simulationResultElm.style.display = 'block';

    drawerTriggerElm.setAttribute('data-ratid', 'saikyo-plan_simulation_close_a_click');
    if (window.RAT && window.RAT.bindClick) {
      const elm = window.RAT.$Selector('#js-simulation-drawer-trigger').find('[data-ratid]');
      window.RAT.bindClick(elm);
    }

    displayResult(data, size, carrier, familyPlan);

    localStorage.setItem('isDisplayedSimulation', 'true');

    resetSimulation();
  })
})();
