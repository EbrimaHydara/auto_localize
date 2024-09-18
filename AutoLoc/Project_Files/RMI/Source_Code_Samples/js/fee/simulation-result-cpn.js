/* 料金シミュレーションCPN用 */
import { isAfter } from "date-fns";
import { callCampaignApply, checkCampaignApply, getDatetime } from './apiconnector';
import { searchShop } from './search-shop';
import { displayCardAllPlan, displayCardOnePlan, displayGraph, fetchPlanData, getPattern, getMemberInfo, getPoint, getAveragePoint } from '../common/fee/simulation/_simulation-result';

let isLocal = false;

const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value;
    const setValue = (newValue) => {
        if (typeof newValue === 'function') { // 引数が関数の場合を追加。コールバックの引数が直前のステートを示す。
          value = newValue(value);
        } else {
          value = newValue;
        }
    };
    return [getValue, setValue];
}

const simulationPageUrl = '/campaign/fee-simulation/';

// CPN関連の関数記述ここから→→→→→
// https://oubo.rakuten.co.jp/apply/rmobile/feesimulation/240131
// もしCPNが延長になった場合、こちらのCLOSEも合わせて更新すること
const DEFINE = {
    CAMPAIGN: {
        CODE: ["/rmobile/feesimulation/240131"],
        CLOSE: "2026-01-25T15:00:00",
        URL: "https://oubo.rakuten.co.jp/apply",
        ERROR: "ERROR",
    },
};
const [loading, setLoading] = useState(true);
// エラーステータス管理
const [isError, setIsError] = useState(false);
// errorInfo
const [errorInfo, setErrorInfo] = useState({
    api: "",
    type: "",
});
// サーバータイムの取得
const [serverTime, setServerTime] = useState("");
const [isServerTimeReady, setIsServerTimeReady] = useState(false);
// 同時にキャンペーンが開催中かチェック true = キャンペーンは終了
const [isCampaignClose, setIsCampaignClose] = useState(true);
const setNowDate = (dateNow, dateCampaignClose) => {
  setServerTime(dateNow);
  setIsCampaignClose(isAfter(new Date(dateNow), new Date(dateCampaignClose)));
};
const getServerTime = async () => {
  try {
      const dateTime = await getDatetime();
      console.log(dateTime)
      if (dateTime !== '') {
        setNowDate(window.RMTOOL.api.datetime.jst, DEFINE.CAMPAIGN.CLOSE);
        setIsServerTimeReady(true);
      }
  } catch (e) {
      console.error(e);
  }
};
// キャンペーンチェック: キャンペーンにエントリー済みか否か
const [isCampaignEntried, setIsCampaignEntried] = useState(false);
const [isCampaignStatusReady, setIsCampaignStatusReady] = useState(false);
// キャンペーン・チェック関数
const campaignCheck = async () => {
  await checkCampaignApply({campaignCode: DEFINE.CAMPAIGN.CODE, isLocal: isLocal})
    .then((data) => {
      if (window.RMTOOL.api.status.campaign.check !== window.RMTOOL.API_STATUS.SUCCESS) {
          console.log('oubo API response FAIL...')
        // データ取得失敗時
        setErrorInfo((prevState) => ({
          ...prevState,
          api: "campaign_error",
        }));
        setIsError(true);
        setLoading(false);
        handleLoading('error');
      console.log('カスタムエラーの内容：');
        console.log(errorInfo());
      } else {
          console.log('oubo API response SUCCESS!!!')
        //データ取得成功時
        const isEntry = data[DEFINE.CAMPAIGN.CODE[0]].status.applied;
        if (isEntry) {
          setIsCampaignEntried(true);
        }
        setIsCampaignStatusReady(true);
      }
    })
    .fail((error) => {
      console.log('checkCampaignApply fails...')
      console.log(error);
      setErrorInfo((prevState) => ({
        ...prevState,
        api: "campaign_error",
      }));
      setIsError(true);
      setLoading(false);
        handleLoading('error');
      console.log('カスタムエラーの内容：');
        console.log(errorInfo());
    });
};
// キャンペーン・申し込み関数
const campaignApply = async (ekeyFlag) => {
  const ekeyValue = ekeyFlag ? 'mailmagazine' : null;
  console.log('ekeyValue: ', ekeyValue)
  await callCampaignApply({campaignCode: DEFINE.CAMPAIGN.CODE, ekey: ekeyValue, isLocal: isLocal})
    .then((data) => {
      if (window.RMTOOL.api.status.campaign.entry !== window.RMTOOL.API_STATUS.SUCCESS) {
        // データ取得失敗時
        setErrorInfo((prevState) => ({
          ...prevState,
          api: "entry_error",
        }));
        setIsError(true);
      }
      // データ取得成功時
      // エントリーに成功しているか
      const getEntryDate = data.results.map((value) => {
        if (value.campaign.code === DEFINE.CAMPAIGN.CODE[0]) {
          return value.campaign.entry_date;
        }
      });
      if (getEntryDate === null) { // このifに該当しないものがエントリー成功
        // エントリー失敗
        setErrorInfo((prevState) => ({
            ...prevState,
            api: "entry_error",
          }));
          setIsError(true);
      }
    })
    .fail((error) => {
      console.log(error);
      setErrorInfo((prevState) => ({
        ...prevState,
        api: "entry_error",
      }));
      setIsError(true);
      console.log('カスタムエラーの内容：');
        console.log(errorInfo());
    });
};
// 結果ページの表示・非表示を判定
const [showResult, setShowResult] = useState(false);
const checkPageContents = async(ekeyFlag) => {
    if (!isCampaignEntried() && !isCampaignClose()) {
        console.log('!isCampaignEntried() && !isCampaignClose()');
        console.log('checkPageContents処理し、エントリーを行った')
        try {
            await campaignApply(ekeyFlag);
            if (isError()) { // when campaignApply() succeeds, but it detects errors within campaignApply's then
                setLoading(false);
                handleLoading('error');
            } else { // when entry process succeeds
                setShowResult(true);
                setLoading(false);
                handleLoading();
            }
        } catch (error) { // if campaignApply() fails
            console.error(error);
            setLoading(false);
            handleLoading('error');
        }
    } else if (isCampaignEntried()) {
        console.log('checkPageContents処理したが、エントリー済みだった')
        setShowResult(true);
        setLoading(false);
        handleLoading();
    } else {
        console.log('checkPageContents処理したが、条件に合致しなかった')
        setIsError(true);
        setLoading(false);
        handleLoading('error');
    }
};
// loading処理
const loadingTargets = document.getElementsByClassName('js-fee-simulation-result-loading');
const handleLoading = (flag) => {
    if (flag === 'error') {
        loadingTargets[0].dataset.loading = 'true'; // bodyのheightをautoに、Wrapperのdisplayはnoneのまま
    } else {
        loadingTargets.forEach(e => {
            e.dataset.loading = 'true'; // bodyのheightをautoに、Wrapperのdisplayをblockに
        });
    }
};
// →→→→→CPN関連の関数記述ここまで→→→→→

(async () => {
  let resultDataSize = ''; //データ量
  let resultCarrier = ''; //キャリア
  let resultFamilyPlan = ''; //家族割
  let ekeyFlag = false; //ekeyフラグ

  /* urlのqueryからデータ量、通話頻度を取得 */
  const searchParams = new URLSearchParams(location.search);
  const sessionData = sessionStorage.getItem('simulationCpnInput')
  if (!searchParams.get('data') || sessionData !== 'visited') {
    // 不正なurlの場合redirect
    // 入力画面のセッション登録値がなかったらredirect
    location.href = simulationPageUrl;
    return;
  }
  if (searchParams.has('ekeyflag')) {
    ekeyFlag = true;
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

  /* アニメーション用の要素 */
  const displayContent = () => {
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
  };

  /* cpn entry button DIY */
    await getServerTime();
    if (isLocal) {
        // エントリー済みとして処理する
        setIsCampaignEntried(true);
        setIsCampaignStatusReady(true);
        setShowResult(true);
        setLoading(false);
        handleLoading();
        displayContent();
    } else
    if (isServerTimeReady()) { // 時刻取得の確認
        if (!isCampaignClose()) {
            try { // just for error handling for the case campaignCheck fails
                await campaignCheck();
                if (isCampaignStatusReady()) {
                    try {
                        await checkPageContents(ekeyFlag);
                        // アニメーション描画処理
                        displayContent();
                    } catch (error) {
                        console.log(error);
                    }
                } // 例外処理をcampaignCheckに織り込み済み
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('campaign is NOT open, hence error screen appears.')
            setIsError(true);
            setLoading(false);
            handleLoading('error');
        }
    } else {
      console.log('server time is NOT ready, hence error screen appears.')
      setIsError(true);
      setLoading(false);
      handleLoading('error');
    }
    // ステータスにより、DOMのアタッチメント
    const targetNodeEntrySuccess = document.getElementById('js-entry-button-custom');
    const targetNodeEntryError = document.getElementById('js-entry-error-attach');
    const errorHtml = `<div class="l-System_Container"><div class="c-Infobox_Standing-alert u-Adjust_Align-center u-Adjust_Mt-16 u-Adjust_Mb-16">
    <p class="fee-simulation-result-Entry_Error-txt u-Weight_Bold"><span class="c-Icon_Sign-warning-l fee-simulation-result-Entry_Error-icon"></span>エラーが発生しました。</p>
    <p class="fee-simulation-result-Entry_Error-txt u-Weight_Bold">お手数ですが、しばらく時間をおいてから<br class="u-Show_Oxx">再度お試しください。</p>
    <p class="fee-simulation-result-Entry_Error-txt c-Txt_Cap u-Adjust_Mt-8">※5秒後に、自動的に料金シミュレーションへ遷移します</p>
</div></div>`
    if (isError()) {
        console.log('通常エラー');
        targetNodeEntryError.insertAdjacentHTML('beforebegin', errorHtml);
        setTimeout(() => {
            location.href = 'https://network.mobile.rakuten.co.jp/campaign/fee-simulation/';
          }, 5000);
    } else if (showResult) {
        console.log('サクセスパターン');
        targetNodeEntrySuccess.insertAdjacentHTML("afterbegin", `<div class="l-System_Container"><div class="c-Infobox_Standing-success u-Adjust_Mt-16 u-Adjust_Mb-16">
        <p class="fee-simulation-result-Entry_Success-txt u-Weight_Bold"><span class="c-Icon_Check fee-simulation-result-Entry_Success-icon"></span>キャンペーンエントリー完了</p>
    </div></div>`);
    } else { // 不明なエラー
        console.log('不明なエラー');
        targetNodeEntryError.insertAdjacentHTML('beforebegin', errorHtml);
        setTimeout(() => {
            location.href = 'https://network.mobile.rakuten.co.jp/campaign/fee-simulation/';
          }, 5000);
    }

    searchShop();
})();
