const axios = require('axios');
const $poikakuInnerNonLogin = $('.i-Poikaku_Inner-nonlogin');
const $poikakuBtnNonLogin = $('.i-Poikaku_Btn-nonlogin');
const $poikakuBtnLogin = $('.i-Poikaku_Btn-login');
const $poikakuInner = $('.poikaku_Inner');
const $poikakuContentNonPoint = $('.i-Poikaku_Content-nonpoint');
const $poikakuContentNonPointContract = $('.i-Poikaku_Content-nonpoint-contract');
const $poikakuContentNonPointNonContract = $('.i-Poikaku_Content-nonpoint-noncontract');
const $poikakuContent = $('.i-Poikaku_Content');
const $poikakuContentContract = $('.i-Poikaku_Content-contract');
const $poikakuContentNonContract = $('.i-Poikaku_Content-noncontract');
const $poikakuContentMvno = $('.i-Poikaku_Content-mvno');
const $poikakuContentMvnoNonPoint = $('.i-Poikaku_Content-mvno-nonpoint');
const $poikakuModalContract = $('.i-Poikaku_Modal-contract');
const $poikakuModalNonContract = $('.i-Poikaku_Modal-noncontract');
const $poikakuModalNonPointContract = $('.i-Poikaku_Modal-nonpoint-contract');
const $poikakuModalNonPointNonContract = $('.i-Poikaku_Modal-nonpoint-noncontract');
const $userName = $('.js-user-name-poikaku');
const $userRankIcon = $('.js-user-rank-icon');
const $userRank = $('.js-user-rank-value');
const $pointSum = $('.js-point-sum');
const $pointPlus = $('.js-point-plus');
const $pointGadget = $('.js-point-gadget');
const $pointGadgetSum = $('.js-point-gadget-sum');
const $pointGadgetCurrent = $('.js-point-gadget-current');
const $pointGadgetLast = $('.js-point-gadget-last');
const $pointGadgetTwomonth = $('.js-point-gadget-twomonth');
const $pointPotential = $('.js-point-potential');
const $pointCurrent = $('.js-point-current');
const $pointCurrentOnly = $('.js-point-current-only');
const $poikakuModalTbl = $('.i-Poikaku_Modal_Tbl');
const $pointPastTblContract = $('.js-point-past-tbl-contract');
const $pointPastTblNonContract = $('.js-point-past-tbl-non-contract');
const $pointPastTblMvno = $('.js-point-past-tbl-mvno');
const $poikakuModalResultPotentialImg = $('.i-Poikaku_Modal_Result-potential_Img');
const $poikakuModalResultPotentialImgOneMonth = $('.i-Poikaku_Modal_Result-potential_Img-onemonth');
const $poikakuModalResultPotentialImgTwoMonth = $('.i-Poikaku_Modal_Result-potential_Img-twomonth');
const $poikakuModalResultImg = $('.i-Poikaku_Modal_Result_Img');
const $poikakuModalResultImgOnly = $('.i-Poikaku_Modal_Result_Img-only');
const $poikakuModalCampaignInner = $('.i-Poikaku_Modal_Campaign_Inner');
const $poikakuModalCampaignInnerOnly = $('.i-Poikaku_Modal_Campaign_Inner-only');
const $loginGadjet = $('#js-login');
const $btnArea = $('.js-btn-area');
const $poikakuFloat = $('.i-Poikaku_Float')
const $floatBtnLogin = $('.i-Poikaku_Float-btn-login');
const $floatBtnWrapperNonLogin = $('.i-Poikaku_Float-btn-wrapper-nonlogin')
const $floatBtnWrapperLogin = $('.i-Poikaku_Float-btn-wrapper-login')
const $poikakuBtnNonLoginBnr = $('.i-Poikaku_Btn-nonlogin-bnr');
const $poikakuFlexItemRight = $('.i-Poikaku_Flex-item-right');
const $poikakuBtnNonContract = $('.i-Poikaku_Btn-noncontract');
const $poikakuBtnContract = $('.i-Poikaku_Btn-contract');
const $userPoint = $('.js-user-point');
const trigger = document.getElementById('js-trigger');
const fixedBtn = document.getElementById('js-fixed-btn');
let targetRankValues;
const targetContractValues = [];
let isLogin;
let isNoRecord = false;
let isMvnoInPast = false;
let isUseApi = true;

// login-gadjet / poikaku-gadjet が混在する場合（プランページ）のABテスト出し分け
if (!window.phx_user_attributes) {
    Object.defineProperty(window, 'phx_user_attributes', {
        get() {
            return this._phx_user_attributes;
        },
        set(value) {
            if(value === 'login') {
                $loginGadjet.css('display','block');
            } else {
                $loginGadjet.css('display','none');
            }
        }
    });
}

const getParam = () => {
    const param = location.search;
    const anchorValueArray = param.match(/anchor=([^&]+)/);

    if(anchorValueArray !== null) {
        isLogin = false;
        return null;
    }

    if (param) {
        return param.slice(1);
    } else {
        return null;
    }
}

const getMemberInfo = async () => {
    if (!isUseApi) {
        const param = getParam();
        let data;

        if(param) {
            data = {
                "username": "楽天花子",
                "nickname": "tu",
                "fixedPoint": 100,
                "temporaryPoint": 1,
                "limitedPoint": 10,
                "rank": 5,
                "cash": 1000,
                "futurePoint": 10000
            };
        } else {
            data = null;
        }

        isLogin = data ? true : false;

        return data;
    } else {
        // 本番用エンドポイント
        const userDataUrl = 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519';

        const userData = await axios({
            method: 'get',
            url: userDataUrl,
            withCredentials: true
        });

        const data = userData.data;

        isLogin = data ? true : false;

        return data;
    }
}

const getData = async data => {
    const userData = data;

    if (!isUseApi) {
        const param = getParam();
        const poikakuData = await axios({
            method: 'get',
            url: '/assets/json/dummy_poikaku.json',
            withCredentials: true,
            params: {
            acc: 1312,
            aid: 1
            },
            responseType: 'json'
        });

        let targetPoikakuData;
        if(poikakuData.data.list[param].items === null) {
            targetPoikakuData = null;
            isNoRecord = true;
        } else {
            targetPoikakuData = poikakuData.data.list[param].items.mobile.slice(-4);
        }

        return {targetPoikakuData, userData};
    } else {
        // 本番用エンドポイント
        const poikakuDataUrl = 'https://user-attributes.api.rakuten.co.jp/capi/v1/mno/poikaku.json';
        const poikakuData = await axios({
            method: 'get',
            url: poikakuDataUrl,
            withCredentials: true,
            params: {
            acc: 1312,
            aid: 1
            },
            responseType: 'json'
        });

        let targetPoikakuData;
        if(poikakuData.data.items === null) {
            targetPoikakuData = null;
            isNoRecord = true;
        } else {
            targetPoikakuData = poikakuData.data.items.mobile.slice(-4);
        }

        return {targetPoikakuData, userData};
    }
};

const setIsMvnoInPast = arr => {
    if(isNoRecord) {
        return
    }

    if(arr.slice(0,3).some(data => data.status === '1' && data.mno_status === '0')) {
        isMvnoInPast = true;
    }
}

const setModal = arr => {
    if(isNoRecord) {
        $poikakuModalNonPointNonContract.attr('id', 'modalNonPoint');
        $poikakuContentNonPointNonContract.attr('aria-hidden', false);
        return
    }

    const {currentMonthNum, prevMonthsSumString} = getPoint(arr);

    if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && isMvnoInPast) {
        if(currentMonthNum !== '0' && (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) {
            $poikakuModalNonContract.attr('id', 'modalPoint');
            $floatBtnLogin.attr('href', '#modalPoint');
            $poikakuContentNonContract.attr('aria-hidden', false);
        } else if(currentMonthNum !== '0' && (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1')) {
            $poikakuModalContract.attr('id', 'modalPoint');
            $floatBtnLogin.attr('href', '#modalPoint');
            $poikakuContentContract.attr('aria-hidden', false);
            $pointCurrentOnly.addClass('current-only');
            $pointCurrentOnly.removeClass('js-btn-area');
            $poikakuModalCampaignInnerOnly.attr('aria-hidden', false);
        } else if(currentMonthNum === '0' && arr[arr.length -1].mno_status === '0') {
            $poikakuModalNonPointNonContract.attr('id', 'modalNonPoint');
            $floatBtnLogin.attr('href', '#modalNonPoint');
            $poikakuContentNonPointNonContract.attr('aria-hidden', false);
        } else {
            $poikakuModalNonPointContract.attr('id', 'modalNonPoint');
            $floatBtnLogin.attr('href', '#modalNonPoint');
            $poikakuContentNonPointContract.attr('aria-hidden', false);
        }
    } else if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && !isMvnoInPast) {
        if(arr[arr.length -1].mno_status === '0') {
            $poikakuModalNonContract.attr('id', 'modalPoint');
            $poikakuContentNonContract.attr('aria-hidden', false);

            $poikakuModalNonPointNonContract.attr('id', 'modalNonPoint');
            $poikakuContentNonPointNonContract.attr('aria-hidden', false);
        } else {
            $poikakuModalContract.attr('id', 'modalPoint');
            $poikakuContentContract.attr('aria-hidden', false);

            $poikakuModalNonPointContract.attr('id', 'modalNonPoint');
            $poikakuContentNonPointContract.attr('aria-hidden', false);
        }

        if(currentMonthNum === '0' && prevMonthsSumString === '0') {
            $floatBtnLogin.attr('href', '#modalNonPoint');
        } else {
            $floatBtnLogin.attr('href', '#modalPoint');
        }
    }
}

const getRankValue = (arr, obj) => {
    if(isNoRecord) {
        switch (obj.rank) {
            case 1:
                targetRankValues = 'レギュラー';
                $userRankIcon.addClass('i-Poikaku_Rank-1');
                break;
            case 2:
                targetRankValues = 'シルバー';
                $userRankIcon.addClass('i-Poikaku_Rank-2');
                break;
            case 3:
                targetRankValues = 'ゴールド';
                $userRankIcon.addClass('i-Poikaku_Rank-3');
                break;
            case 4:
                targetRankValues = 'プラチナ';
                $userRankIcon.addClass('i-Poikaku_Rank-4');
                break;
            case 5:
                targetRankValues = 'ダイヤモンド';
                $userRankIcon.addClass('i-Poikaku_Rank-5');
                break;
            default:
                console.log('not exist rank');
        }
    } else {
        switch (arr[arr.length -1].rank) {
            case '1':
                targetRankValues = 'レギュラー';
                $userRankIcon.addClass('i-Poikaku_Rank-1');
                break;
            case '2':
                targetRankValues = 'シルバー';
                $userRankIcon.addClass('i-Poikaku_Rank-2');
                break;
            case '3':
                targetRankValues = 'ゴールド';
                $userRankIcon.addClass('i-Poikaku_Rank-3');
                break;
            case '4':
                targetRankValues = 'プラチナ';
                $userRankIcon.addClass('i-Poikaku_Rank-4');
                break;
            case '5':
                targetRankValues = 'ダイヤモンド';
                $userRankIcon.addClass('i-Poikaku_Rank-5');
                break;
            default:
                console.log('not exist rank');
        }
    }

}

const setContractValues = arr => {
    if(isNoRecord) {
        return
    }

    for(let data of arr){
        targetContractValues.push(data.mno_status);
    }
}

const setComma = strNum => {
    const num = Number(strNum).toLocaleString();
    return num.replace(/,/g, '<span>,</span>');
}

const getPoint = arr => {
    const currentMonth = arr[arr.length - 1];
    let currentMonthNum;
    const prevMonths = arr.slice(0,arr.length - 1);
    let prevMonthsSum = 0;
    if(arr[arr.length - 1].mno_status === '0') {
        currentMonthNum = setComma(currentMonth.potential);
        for(let data of prevMonths) {
            prevMonthsSum += Number(data.potential);
        }
    } else {
        currentMonthNum = setComma(currentMonth.actual);
        for(let data of prevMonths) {
            prevMonthsSum += Number(data.actual);
        }
    }

    const prevMonthsSumString = setComma(String(prevMonthsSum));
    return {currentMonthNum, prevMonthsSumString}
}

const setMonth = arr => {
    if(isNoRecord) {
        return
    }

    const removeZero = str => {
        return str.replace(/^0+/, '');
    };

    const $onlyHidden = $('.js-only-hidden');
    const $pastFirstMonth = $('.js-month-past-first');
    const $pastLastMonth = $('.js-month-past-last');
    const $currentMonth = $('.js-month-current');
    const currentMonth = removeZero(arr[arr.length - 1].month.slice(-2));
    const $onlyHiddenTable = $('.js-only-hidden-table');
    const $pastFirstMonthTable = $('.js-month-past-first-table');
    const $pastLastMonthTable = $('.js-month-past-last-table');
    const { prevMonthsSumString} = getPoint(arr);

    if(arr.length === 1) {
        $currentMonth.text(currentMonth);
        $pastLastMonth.text(currentMonth);
        $pastLastMonthTable.text(currentMonth);
        $onlyHidden.attr('aria-hidden', true);
        $poikakuBtnNonContract.addClass('is-only-month');
        $poikakuFlexItemRight.addClass('is-only-month');
        $onlyHiddenTable.attr('aria-hidden', true);
    } else if(arr.length === 2) {
        const pastMonth = arr.slice(0, -1);
        const pastLastMonth = removeZero(pastMonth[pastMonth.length - 1].month.slice(-2));

        $currentMonth.text(currentMonth);
        $onlyHidden.attr('aria-hidden', true);
        $poikakuBtnNonContract.addClass('is-only-month');
        $poikakuFlexItemRight.addClass('is-only-month');
        $onlyHiddenTable.attr('aria-hidden', true);
        $pastLastMonthTable.text(pastLastMonth);
        if(prevMonthsSumString === '0') {
            $pastLastMonth.text(currentMonth);
        } else {
            $pastLastMonth.text(pastLastMonth);
        }
    } else if(arr.length > 2){
        const pastMonth = arr.slice(0, -1);
        const pastFirstMonth = removeZero(pastMonth[0].month.slice(-2));
        const pastLastMonth = removeZero(pastMonth[pastMonth.length - 1].month.slice(-2));

        $pastFirstMonth.text(pastFirstMonth);
        $pastFirstMonthTable.text(pastFirstMonth);
        $currentMonth.text(currentMonth);
        $pastLastMonthTable.text(pastLastMonth);
        if(prevMonthsSumString === '0') {
            $pastLastMonth.text(currentMonth);
            $onlyHidden.attr('aria-hidden', true);
            $poikakuBtnNonContract.addClass('is-only-month');
            $poikakuFlexItemRight.addClass('is-only-month');
        } else {
            $pastLastMonth.text(pastLastMonth);
        }
    } else if(isMvnoInPast) {
        $currentMonth.text(currentMonth);
        $pastLastMonth.text(currentMonth);
        $pastLastMonthTable.text(currentMonth);
        $onlyHidden.attr('aria-hidden', true);
        $poikakuBtnNonContract.addClass('is-only-month');
        $poikakuFlexItemRight.addClass('is-only-month');
        $onlyHiddenTable.attr('aria-hidden', true);
    }
};


const showWrapper = () => {
    if(isLogin) {
        $poikakuInner.attr('aria-hidden', false);
        $floatBtnWrapperLogin.attr('aria-hidden', false);
    } else {
        $poikakuInnerNonLogin.attr('aria-hidden', false);
        $floatBtnWrapperNonLogin.attr('aria-hidden', false);
    }
}

const showContent = arr => {
    if(isNoRecord) {
        $poikakuContentNonPoint.attr('aria-hidden', false);
        $floatBtnLogin.attr('href', '#modalNonPoint');
        return
    }

    const {currentMonthNum, prevMonthsSumString} = getPoint(arr);

    if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && isMvnoInPast) {
        if(currentMonthNum === '0') {
            $poikakuContentNonPoint.attr('aria-hidden', false);
        } else {
            $poikakuContent.attr('aria-hidden', false);
        }
    } else if(arr[arr.length -1].status === '1' &&  arr[arr.length -1].mno_status === '0') {
        if(currentMonthNum === '0' && prevMonthsSumString === '0') {
            $poikakuContentNonPoint.attr('aria-hidden', false);
            $poikakuContentMvnoNonPoint.attr('aria-hidden', false);
        } else {
            $poikakuContent.attr('aria-hidden', false);
            $poikakuContentMvno.attr('aria-hidden', false);
        }
        $floatBtnLogin.attr('href', '#modalMvno');
    } else if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && !isMvnoInPast) {
        if(currentMonthNum === '0' && prevMonthsSumString === '0') {
            $poikakuContentNonPoint.attr('aria-hidden', false);
        } else {
            $poikakuContent.attr('aria-hidden', false);
        }
    }
}

const addElement = (arr, $targetDl) => {
    const targetPast = arr.slice(0,arr.length - 1);

    for(let i = 0; i < targetPast.length; i++) {
        let pastData;
        let month;
        let point;

        if(targetPast[i].month.slice(2,3) === '0') {
            month = targetPast[i].month.slice(3,4)
        } else {
            month = targetPast[i].month.slice(2,4)
        }

        // 2023/12 SPU改定に伴う対応
        if(Number(targetPast[i].month) >= 2312) {
            point = 4
        } else {
            if(targetPast[i].rank === '5') {
                point = 3
            } else {
                point = 2
            }
        }

        if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') || (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0'))) {
            if(arr[arr.length - 1].mno_status === '1' && (targetPast[i].mno_status === '0' && targetPast[i].potential !== '0')){
                pastData = `
                    <tr>
                        <th colspan="2">20${targetPast[i].month.slice(0,2)}年${month}月<span class="i-Poikaku_Modal_Tbl-annotation-date">※契約していた場合の獲得ポイント</span></th>
                    </tr>
                    <tr class="i-Poikaku_Modal_Tbl-bg">
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>${Number(targetPast[i].potential).toLocaleString()}</span>ポイント</td>
                    </tr>
                `
            } else if (arr[arr.length - 1].mno_status === '1' && (targetPast[i].mno_status === '0' && targetPast[i].potential === '0')){
                pastData = `
                    <tr>
                        <th colspan="2">20${targetPast[i].month.slice(0,2)}年${month}月<span class="i-Poikaku_Modal_Tbl-annotation-date">※契約していた場合の獲得ポイント</span></th>
                    </tr>
                    <tr class="i-Poikaku_Modal_Tbl-bg">
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>ー</span>ポイント</td>
                    </tr>
                `
            } else if ((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') && Number(targetPast[i].month) < 2312 && (targetPast[i].actual === '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル（ドコモ回線・au回線）契約者特典＋1倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>ー</span>ポイント<br><span class="i-Poikaku_Modal_Tbl-annotation-point">※楽天市場でのお買い物はありませんでした</span></td>
                    </tr>
                `
            } else if ((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') && Number(targetPast[i].month) < 2312 ) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル（ドコモ回線・au回線）契約者特典＋1倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>${Number(targetPast[i].actual).toLocaleString()}</span>ポイント<br><span class="i-Poikaku_Modal_Tbl-icon">契約期間<span>獲得済</span></span></td>
                    </tr>
                `
            } else if (arr[arr.length - 1].mno_status === '0' && (targetPast[i].mno_status === '1' && targetPast[i].actual !== '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>${Number(targetPast[i].actual).toLocaleString()}</span>ポイント<br><span class="i-Poikaku_Modal_Tbl-icon">契約期間<span>獲得済</span></span></td>
                    </tr>
                `
            } else if (arr[arr.length - 1].mno_status === '0' && (targetPast[i].mno_status === '1' && targetPast[i].actual === '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>ー</span>ポイント<br><span class="i-Poikaku_Modal_Tbl-annotation-point">※楽天市場でのお買い物はありませんでした</span></span></td>
                    </tr>
                `
            } else if(targetPast[i].mno_status === '1' && targetPast[i].actual !== '0') {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>${Number(targetPast[i].actual).toLocaleString()}</span>ポイント</td>
                    </tr>
                `
            } else if (targetPast[i].mno_status === '0' && targetPast[i].potential !== '0') {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>${Number(targetPast[i].potential).toLocaleString()}</span>ポイント</td>
                    </tr>
                `
            } else if ((targetPast[i].mno_status === '1' && targetPast[i].actual === '0') || (targetPast[i].mno_status === '0' && targetPast[i].potential === '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="i-Poikaku_Modal_Tbl-annotation">※</span></td>
                        <td><span>ー</span>ポイント<br><span class="i-Poikaku_Modal_Tbl-annotation-point">※楽天市場でのお買い物はありませんでした</span></td>
                    </tr>
                `
            }
        }

        $targetDl.prepend(pastData);
    }
}

const setValue = (arr, obj) => {
    if(isNoRecord) {
        $userName.text(obj.username);
        $userRank.text(targetRankValues);
        return
    }

    const {currentMonthNum, prevMonthsSumString} = getPoint(arr);

    $userName.text(obj.username);
    $userRank.text(targetRankValues);
    if (currentMonthNum === '0' && targetContractValues[targetContractValues.length - 1].toString() === '1') {
        $pointCurrent.text('-');
        $pointPlus.attr('aria-hidden', true);
    } else if (currentMonthNum === '0') {
        $pointCurrent.text('-');
    } else {
        $pointCurrent.html(currentMonthNum);
    }

    if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && isMvnoInPast) {
        $pointGadgetCurrent.attr('aria-hidden', false);
        $poikakuBtnNonContract.text('詳しく見てみよう');
        $pointGadget.html(currentMonthNum);
        $poikakuModalTbl.attr('aria-hidden', true);
        $pointPotential.attr('aria-hidden', true);
        $poikakuModalResultImgOnly.attr('aria-hidden', false);
    } else if((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') || (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0')) {
        if (targetContractValues.length === 1 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $poikakuModalTbl.attr('aria-hidden', true);
            $poikakuModalCampaignInnerOnly.attr('aria-hidden', false);
            addElement(arr, $pointPastTblContract);
        } else if (targetContractValues.length === 2 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $poikakuModalCampaignInner.attr('aria-hidden', false);
            $poikakuModalResultPotentialImgOneMonth.attr('aria-hidden', false);
            $pointGadgetLast.attr('aria-hidden', false);
            addElement(arr, $pointPastTblContract);
        } else if (targetContractValues.length === 3 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $poikakuModalCampaignInner.attr('aria-hidden', false);
            $poikakuModalResultPotentialImgTwoMonth.attr('aria-hidden', false);
            $pointGadgetTwomonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTblContract);
        } else if (targetContractValues.length === 4 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $poikakuModalCampaignInner.attr('aria-hidden', false);
            $poikakuModalResultPotentialImg.attr('aria-hidden', false);
            $pointGadgetSum.attr('aria-hidden', false);
            addElement(arr, $pointPastTblContract);
        } else if (targetContractValues.length === 1 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $poikakuModalTbl.attr('aria-hidden', true);
            $pointGadgetSum.attr('aria-hidden', false);
            addElement(arr, $pointPastTblNonContract);
        } else if (targetContractValues.length === 2 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $pointGadgetLast.attr('aria-hidden', false);
            addElement(arr, $pointPastTblNonContract);
        } else if (targetContractValues.length === 3 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $pointGadgetTwomonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTblNonContract);
        } else if (targetContractValues.length === 4 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $pointGadgetSum.attr('aria-hidden', false);
            addElement(arr, $pointPastTblNonContract);
        } else if (targetContractValues.length === 1 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $poikakuModalTbl.attr('aria-hidden', true);
            $pointGadgetSum.attr('aria-hidden', false);
            addElement(arr, $pointPastTblMvno);
        } else if (targetContractValues.length === 2 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $pointGadgetLast.attr('aria-hidden', false);
            addElement(arr, $pointPastTblMvno);
        } else if (targetContractValues.length === 3 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $pointGadgetTwomonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTblMvno);
        } else if (targetContractValues.length === 4 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $pointGadgetSum.attr('aria-hidden', false);
            addElement(arr, $pointPastTblMvno);
        }

        if (prevMonthsSumString === '0' && targetContractValues[targetContractValues.length - 1].toString() === '1') {
            $pointSum.text('-');
            $pointGadget.html(currentMonthNum);
            $pointGadgetCurrent.attr('aria-hidden', false);
            $poikakuBtnNonContract.text('詳しく見てみよう');
            $poikakuBtnContract.text('詳しく見てみよう');
            $pointGadgetSum.add($pointGadgetLast).add($pointGadgetTwomonth).attr('aria-hidden', true);
            $pointCurrentOnly.addClass('current-only');
            $pointCurrentOnly.removeClass('js-btn-area');

            $pointPotential.attr('aria-hidden', true);
            $poikakuModalResultImgOnly.attr('aria-hidden', false);
        } else if (prevMonthsSumString === '0' && (targetContractValues[targetContractValues.length - 1].toString() === '0' || (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0'))) {
            $pointSum.text('-');
            $pointGadget.html(currentMonthNum);
            $pointGadgetCurrent.attr('aria-hidden', false);
            $poikakuBtnNonContract.text('詳しく見てみよう');
            $pointGadgetSum.add($pointGadgetLast).add($pointGadgetTwomonth).attr('aria-hidden', true);

            $pointPotential.attr('aria-hidden', true);
            $poikakuModalResultImgOnly.attr('aria-hidden', false);
        } else {
            $pointSum.html(prevMonthsSumString);
            $pointGadget.html(prevMonthsSumString);

            $poikakuModalResultImg.attr('aria-hidden', false);
        }
    }
}

const setObserver = arr => {
    const {currentMonthNum, prevMonthsSumString} = getPoint(arr);
    const observerTarget = document.querySelector('body');

    const observer = new MutationObserver(function () {
        const $closeBtn = $('#modaal-close');
        const $modalWrapper = $('.modaal-wrapper');

        if($closeBtn) {
            if((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) {
                if((arr[arr.length -1].mno_status === '0' && currentMonthNum === '0' && prevMonthsSumString === '0') || (arr[arr.length -1].mno_status === '0' && currentMonthNum === '0' && isMvnoInPast)) {
                    $closeBtn.attr({
                        'data-ratid': 'pointgadget-none-0pt_close01_click',
                        'data-ratevent': 'click',
                        'data-ratparam': 'all'
                    });
                } else if(arr[arr.length -1].mno_status === '0') {
                    $closeBtn.attr({
                        'data-ratid': 'pointgadget-none_close01_click',
                        'data-ratevent': 'click',
                        'data-ratparam': 'all'
                    });
                } else if((arr[arr.length -1].mno_status === '1' && currentMonthNum === '0' && prevMonthsSumString === '0') || (arr[arr.length -1].mno_status === '1' && currentMonthNum === '0' && isMvnoInPast)) {
                    $closeBtn.attr({
                        'data-ratid': 'pointgadget-0pt_close01_click',
                        'data-ratevent': 'click',
                        'data-ratparam': 'all'
                    });
                } else if(arr[arr.length -1].mno_status === '1') {
                    $closeBtn.attr({
                        'data-ratid': 'pointgadget_close01_click',
                        'data-ratevent': 'click',
                        'data-ratparam': 'all'
                    });
                }
            } else if(arr[arr.length -1].status === '1' &&  arr[arr.length -1].mno_status === '0') {
                $closeBtn.attr({
                    'data-ratid': 'pointgadget-0pt-mvno_close01_click',
                    'data-ratevent': 'click',
                    'data-ratparam': 'all'
                });
            }

            const closeBtn = RAT.$Selector('#modaal-close');
            RAT.bindClick(closeBtn);
        }

        if($modalWrapper) {
            const scrollEvent = new Event('scroll');

            $modalWrapper.on('scroll', () => {
                window.dispatchEvent(scrollEvent);
            });
        }
    });

    observer.observe(observerTarget, {
        childList: true,
    });
}

const openModal = () => {
    const $modals = $('.js-Modal-poikaku');
    const $triggerClose = $('.js-Modal_Close');
    const modalConfig = {
        background: '#4D4D4D',
        custom_class: 'c-Modal',
        overlay_opacity: 0.5,
        animation_speed: 160,
        after_callback_delay: 160,
        after_open: function () {
            let modalContentHeight = $('.modaal-content').height();
            let windowHeight = $(window).height();
            if (modalContentHeight > windowHeight) {
                $('.modaal-outer-wrapper').css('transform', 'translateY(60px)');
            }
            $('.modaal-container').addClass('is-show');
        }
    };
    if ($modals.length > 0) {
        $modals.modaal(modalConfig);
    }
    $triggerClose.on('click', function() {
        $modals.modaal('close');
    });
}

const setUrl = () => {
    const pathname = location.pathname.replace(/\//g, '%2F');
    const url = `https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp${pathname}&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005`;
    $poikakuBtnNonLogin.attr('href', url);
    $poikakuBtnLogin.attr('href', url);

    if($poikakuBtnNonLoginBnr) {
        // const urlBnr = '?anchor=js-poikaku-bnr&code=test';
        const urlBnr = `https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp${pathname}%3Fanchor%3Djs-poikaku-bnr&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005`;
        $poikakuBtnNonLoginBnr.attr('href', urlBnr);
    }
}

const clickBtnArea = () => {
    $btnArea.on('click', (e) => {
        const $dispatchClickTarget = $(e.currentTarget).find('.js-dispatch-click-target');
        const dispatchClickTarget = $dispatchClickTarget[0];
        dispatchClickTarget.click();
    });
}

const showFloatBtn = () => {
    if( $poikakuFloat && fixedBtn && trigger ) {
        window.addEventListener('scroll', () => {
            let scrollY = window.pageYOffset;
            const triggerRect = trigger.getBoundingClientRect();
            const triggerY = scrollY + triggerRect.top;

            if ( scrollY > triggerY ) {
                fixedBtn.setAttribute('aria-expanded', 'true');
            } else {
                fixedBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

const setFloatRatId = arr => {
    const {currentMonthNum, prevMonthsSumString} = getPoint(arr);

    if( fixedBtn && trigger ) {
        if((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) {
            if((arr[arr.length -1].mno_status === '0' && currentMonthNum === '0' && prevMonthsSumString === '0') || (arr[arr.length -1].mno_status === '0' && currentMonthNum === '0' && isMvnoInPast)) {
                $floatBtnLogin.attr({
                    'data-ratid': 'pointgadget-none-0pt_more_click_2',
                    'data-ratevent': 'click',
                    'data-ratparam': 'all'
                });
            } else if(arr[arr.length -1].mno_status === '0') {
                $floatBtnLogin.attr({
                    'data-ratid': 'pointgadget-none_more_click_2',
                    'data-ratevent': 'click',
                    'data-ratparam': 'all'
                });
            } else if((arr[arr.length -1].mno_status === '1' && currentMonthNum === '0' && prevMonthsSumString === '0') || (arr[arr.length -1].mno_status === '1' && currentMonthNum === '0' && isMvnoInPast)) {
                $floatBtnLogin.attr({
                    'data-ratid': 'pointgadget-0pt_more_click_2',
                    'data-ratevent': 'click',
                    'data-ratparam': 'all'
                });
            } else if(arr[arr.length -1].mno_status === '1') {
                $floatBtnLogin.attr({
                    'data-ratid': 'pointgadget_more_click_2',
                    'data-ratevent': 'click',
                    'data-ratparam': 'all'
                });
            }
        } else if(arr[arr.length -1].status === '1' &&  arr[arr.length -1].mno_status === '0') {
            $floatBtnLogin.attr({
                'data-ratid': 'pointgadget-0pt-mvno_more_click_2',
                'data-ratevent': 'click',
                'data-ratparam': 'all'
            });
        }

        const Btn = RAT.$Selector('.i-Poikaku_Float-btn-login');
        RAT.bindClick(Btn);
    }
}

const scrollToGadjet = () => {
    if($poikakuBtnNonLoginBnr) {
        const urlSearch = location.search;
        const anchorValueArray = urlSearch.match(/anchor=([^&]+)/);

        if(anchorValueArray) {
            const anchorValue = anchorValueArray[1];
            const $fixedBtn = $('#js-fixed-btn');
            let targetPositionY = $(`#${anchorValue}`).offset().top;
            if($fixedBtn) {
                const fixedBtnPosition = $fixedBtn.css('bottom');
                if(fixedBtnPosition === '0px') {
                    $(window).on('load resize', () => {
                        targetPositionY = $('#js-poikaku-bnr').offset().top;
                        $('html, body').animate({scrollTop: targetPositionY}, 500);
                    });
                } else {
                    let fixedBtnHeight;
                    $(window).on('load resize', () => {
                        fixedBtnHeight = $fixedBtn.innerHeight();
                        targetPositionY = $('#js-poikaku-bnr').offset().top;
                        $('html, body').animate({scrollTop: targetPositionY - fixedBtnHeight}, 500);
                    });
                }
            } else {
                $(window).on('load', () => {
                    targetPositionY = $(`#${anchorValue}`).offset().top;
                    $('html, body').animate({scrollTop: targetPositionY}, 500);
                })
            }
        }
    }
}

const setPoint = (data) => {
    const numPoint1 = String(data.fixedPoint + data.limitedPoint + data.cash).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    $userPoint.text(numPoint1);
}

const setFloatposition = () => {
    const $poikakuPopup = $('.i-Poikaku_Wrapper-popup');
    const $fixedBtn = $('#js-fixed-btn');
    const fixedBtnPosition = $fixedBtn.css('bottom');

    if(fixedBtnPosition === '0px') {
        let fixedBtnHeight = $fixedBtn.innerHeight();
        $poikakuPopup.css('--float-height', `${fixedBtnHeight}px`);
        $(window).on('resize', () => {
            fixedBtnHeight = $fixedBtn.innerHeight();
            $poikakuPopup.css('--float-height', `${fixedBtnHeight}px`);
        });
        $poikakuPopup.addClass('is-adjust-position is-show');
    } else {
        $poikakuPopup.addClass('is-show');
    }
}

const closePopup = () => {
    const $poikakuPopupBtn = $('.i-Poikaku_Popup-btn');
    $poikakuPopupBtn.on('click', (e) => {
        const $targetPopup = $(e.currentTarget.closest('.i-Poikaku_Wrapper-popup'));
        $targetPopup.removeClass('is-show');
    })
}

const scrollToSection = () => {
    if($poikakuBtnNonLoginBnr) {
        const $poikakuPopupBtnNonLogin = $('.i-Poikaku_Popup-btn-nonlogin');
        const $fixedBtn = $('#js-fixed-btn');
        const fixedBtnPosition = $fixedBtn.css('bottom');

        if(fixedBtnPosition === '0px') {
            let targetPositionY;
            $(window).on('load resize', () => {
                targetPositionY = $('#js-poikaku-bnr').offset().top;
            });
            $poikakuPopupBtnNonLogin.on('click', () => {
                $('html, body').animate({scrollTop: targetPositionY}, 500);
            })
        } else {
            let fixedBtnHeight;
            let targetPositionY;
            $(window).on('load resize', () => {
                fixedBtnHeight = $fixedBtn.innerHeight();
                targetPositionY = $('#js-poikaku-bnr').offset().top;
            });
            $poikakuPopupBtnNonLogin.on('click', () => {
                $('html, body').animate({scrollTop: targetPositionY - fixedBtnHeight}, 500);
            })
        }
    } else {
        return
    }
}

getMemberInfo()
    .then(data => {
        showWrapper();
        return getData(data);
    })
    .then(data => {
        const targetData = data.targetPoikakuData;
        const targetuserData = data.userData;
        setContractValues(targetData);
        getRankValue(targetData, data.userData);
        setIsMvnoInPast(targetData);
        showContent(targetData);
        setPoint(targetuserData);
        setModal(targetData);
        setMonth(targetData);
        openModal();
        setValue(targetData, data.userData);
        setObserver(targetData);
        clickBtnArea();
        showFloatBtn();
        setFloatRatId(targetData);
        scrollToGadjet();
        setFloatposition();
        closePopup();
        scrollToSection();
    })
    .catch(() => {
        showWrapper();
        setUrl();
        clickBtnArea();
        showFloatBtn();
        scrollToGadjet();
        setFloatposition();
        closePopup();
        scrollToSection();
    });
