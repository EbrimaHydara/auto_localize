import { searchShop } from './search-shop';
import { displayCardAllPlan, displayCardOnePlan, displayGraph, fetchPlanData, getPattern, getMemberInfo, getPoint, getAveragePoint } from '../common/fee/simulation/_simulation-result';

let isLocal = false;

const simulationPageUrl = '/fee/simulation/';

(async () => {
  let resultDataSize = ''; //データ量
  let resultCarrier = ''; //キャリア
  let resultFamilyPlan = ''; //家族割

  /* urlのqueryからデータ量、通話頻度を取得 */
  const searchParams = new URLSearchParams(location.search);
  if (!searchParams.get('data')) {
    // 不正なurlの場合redirect
    location.href = simulationPageUrl;
    return;
  }
  resultDataSize = searchParams.get('data');
  resultCarrier = searchParams.get('carrier');
  resultFamilyPlan = searchParams.get('family');

  /* データ量にあったプラン一覧を取得 */
  const dataList = await fetchPlanData();
  let data = {};

  if (isNaN(Number(resultDataSize))) {
    // dropdownからサイズを選択した時(over_X, under_X, unknown)
    if (resultDataSize.match(/^over_(\d+(\.\d+)?)+$/)) {
      const size = Number(resultDataSize.replace('over_', '')) + 0.1; // minの値より大きくするため+0.1
      data = dataList.find(_data => (Number(_data['data_min']) < size));
    } else if (resultDataSize.match(/^under_(\d+(\.\d+)?)+$/)) {
      const size = Number(resultDataSize.replace('under_', ''));
      data = dataList.findLast(_data => (size <= Number(_data['data_max'])));
    } else if (resultDataSize !== 'unknown') {
      // sizeが数字じゃないかつunknownでもない場合リダイレクト
      location.href = simulationPageUrl;
      return;
    }
  } else {
    data = dataList.find(_data => (Number(_data['data_min']) < resultDataSize) && (resultDataSize <= Number(_data['data_max'])));
  }

  const rmiDefaultPrice = Number(data['rakuten_mobile_price']);
  const rmiDefaultPriceWithTax = Number(data['rakuten_mobile_price_with_tax']);
  const rmiFamilyPriceWithTax = Number(data['rakuten_mobile_price_with_tax_family']);

  let rmiPriceWithTax = rmiDefaultPriceWithTax;
  let targetPlan = '';
  let targetPriceWithTax = '';

  targetPlan = data[`${resultCarrier}_plan`];
  targetPriceWithTax = Number(data[`${resultCarrier}_price_with_tax`]);
  if (resultFamilyPlan) {
    rmiPriceWithTax = rmiFamilyPriceWithTax;
    targetPlan = data[`${resultCarrier}_plan_${resultFamilyPlan}`];
    targetPriceWithTax = Number(data[`${resultCarrier}_price_with_tax_${resultFamilyPlan}`]);
  }

  const pattern = getPattern(resultDataSize, resultCarrier, targetPriceWithTax, rmiPriceWithTax);
  const resultLoadingElm = document.getElementById('js-simulation-result-loading');

  if (pattern === 'SIZE_UNKNOWN') {
    resultLoadingElm.style.display = 'none';
    displayCardAllPlan();
    return;
  }
  if (pattern === 'CARRIER_OTHER') {
    resultLoadingElm.style.display = 'none';
    displayCardOnePlan(rmiDefaultPrice);
    return;
  }

  let point = 0;

  // ログインしてるかどうかでpoint箇所出しわけ
  getMemberInfo(isLocal).then(async data => {
    const pointDataList = await getPoint(isLocal);
    if (isLocal) {
      const searchParams = new URLSearchParams(location.search);
      const dummyIsLogin = searchParams.get('isLogin');
      if (dummyIsLogin === 'false') {
        resultLoadingElm.style.display = 'none';
        displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, rmiFamilyPriceWithTax, point);
        return;
      }
    }

    point = getAveragePoint(pointDataList, isLocal);

    resultLoadingElm.style.display = 'none';
    displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, rmiFamilyPriceWithTax, point);

  }).catch(() => {
    resultLoadingElm.style.display = 'none';
    displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, rmiFamilyPriceWithTax, point);
  });

  if (pattern === 'GRAPH_WIN') {
    const winPatternElms = document.querySelectorAll('.js-win-pattern');
    winPatternElms.forEach(elm => {
      elm.style.display = 'block';
    });
  } else if (pattern === 'GRAPH_LOSE') {
    const losePatternElms = document.querySelectorAll('.js-lose-pattern');
    losePatternElms.forEach(elm => {
      elm.style.display = 'block';
    });
  }

  /* search shop */
  searchShop();

})();
