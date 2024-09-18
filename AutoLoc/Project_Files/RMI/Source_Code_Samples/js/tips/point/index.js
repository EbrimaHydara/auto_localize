import { toggleStickeyBottom } from "../../common/helpers/util-scroll";

const axios = require('axios');
const $poikakuInnerNonLogin = $('.tips-Point_Poikaku-inner-nonlogin');
const $poikakuInner = $('.tips-Point_Poikaku-inner');
const $userRankIcon = $('.js-user-rank-icon');
const $poikakuContentNonPoint = $('.tips-Point_Poikaku-content-nonpoint');
const $poikakuContent = $('.tips-Point_Poikaku-content');
const $poikakuContentMvno = $('.tips-Point_Poikaku-content-mvno');
const $poikakuContentMvnoNonPoint = $('.tips-Point_Poikaku-content-mvno-nonpoint');
const $poikakuContentNonPointContract = $('.tips-Point_Poikaku-content-nonpoint-contract');
const $poikakuContentNonPointNonContract = $('.tips-Point_Poikaku-content-nonpoint-noncontract');
const $poikakuContentContract = $('.tips-Point_Poikaku-content-contract');
const $poikakuContentNonContract = $('.tips-Point_Poikaku-content-noncontract');
const $poikakuTtlContract = $('.tips-Point_Poikaku-ttl-contract');
const $poikakuTtlNonContract = $('.tips-Point_Poikaku-ttl-noncontract');
const $poikakuTtlNonPointContract = $('.tips-Point_Poikaku-ttl-nonpoint-contract');
const $poikakuTtlNonPointNonContract = $('.tips-Point_Poikaku-ttl-nonpoint-noncontract');
const $poikakuTtlMvno = $('.tips-Point_Poikaku-ttl-mvno');
const $poikakuTtlNonLogin = $('.tips-Point_Poikaku-ttl-nonlogin');
const $userName = $('.js-user-name-poikaku');
const $userRank = $('.js-user-rank-value');
const $pointCurrent = $('.js-point-current');
const $pointPastTtl = $('.js-point-past-ttl');
const $pointPastTbl = $('.js-point-past-tbl');
const $poikakuTbl = $('.tips-Point_Poikaku-tbl-wrapper');
const $pointSum = $('.js-point-sum');
const $poikakuItemNonContractSum = $('.tips-Point_Poikaku-item-noncontract-sum');
const $poikakuItemTextWrapperNonContract = $('.tips-Point_Poikaku-item-text-wrapper-noncontract');
const $poikakuItemSum = $('.tips-Point_Poikaku-item-sum');
const $poikakuItemCurrent = $('.tips-Point_Poikaku-item-current')
const $pointThreeMonth = $('.js-point-threemonth');
const $pointTwoMonth = $('.js-point-twomonth');
const $pointlast = $('.js-point-last');
const $pointThisMonthMore = $('.js-point-thismonth-more');
const $pointThisMonth = $('.js-point-thismonth');
const ctaTarget = document.getElementById('js-cta-target');
const ctaTrigger = document.getElementById('js-cta-trigger');
const $bnrCpnRecommend = $('.tips-Point_Poikaku-recommend');
const $pointFixedBtnMno = $('.tips-Layout_Bottom-fixed-btn-mno');
const $pointFixedBtnMvno = $('.tips-Layout_Bottom-fixed-btn-mvno');
let targetRankValues;
const targetContractValues = [];
let isLogin;
let isNoRecord = false;
let isMvnoInPast = false;
let isUseApi = true;

const getParam = () => {
    const param = location.search;
    const anchorValueArray = param.match(/anchor=([^&]+)/);

    if(anchorValueArray) {
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
                "fixedPoint": 0,
                "temporaryPoint": 0,
                "limitedPoint": 0,
                "rank": 5,
                "cash": 0,
                "futurePoint": 0
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
        $poikakuContentNonPointNonContract.attr('aria-hidden', false);
        $pointFixedBtnMno.attr('aria-hidden', false);
        $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_3_guide_application');
        $poikakuTbl.attr('aria-hidden', true);
        $poikakuTtlNonPointNonContract.attr('aria-hidden', false);

        return
    }

    const {currentMonthNum, prevMonthsSumString } = getPoint(arr);

    if ((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0')){
        console.log('mvno')
        if(currentMonthNum !== '0') {
            $pointFixedBtnMno.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_1_guide_application');
            $poikakuTtlNonContract.attr('aria-hidden', false);
            console.log('mvno not0')
        } else {
            $pointFixedBtnMno.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_3_guide_application');
            $poikakuTtlNonPointNonContract.attr('aria-hidden', false);
            $poikakuTbl.attr('aria-hidden', true);
            console.log('mvno 0')
        }
    } else if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && isMvnoInPast) {
        if(currentMonthNum !== '0' && (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) {
            $poikakuContentNonContract.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_1_guide_application');
            $poikakuTtlNonContract.attr('aria-hidden', false);
        } else if(currentMonthNum !== '0' && (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1')) {
            $poikakuContentContract.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_2_guide_application');
            $poikakuTtlContract.attr('aria-hidden', false);
            $poikakuItemSum.attr('aria-hidden', true);
            $poikakuItemCurrent.addClass('only-current');
            $pointThisMonthMore.attr('aria-hidden', true);
            $pointThisMonth.attr('aria-hidden', false);
            $bnrCpnRecommend.attr('aria-hidden', true);
        } else if(currentMonthNum === '0' && arr[arr.length -1].mno_status === '0') {
            $poikakuContentNonPointNonContract.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_3_guide_application');
            $poikakuTtlNonPointNonContract.attr('aria-hidden', false);
            $poikakuTbl.attr('aria-hidden', true);
        } else {
            $poikakuContentNonPointContract.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('aria-hidden', false);
            $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_4_guide_application');
            $poikakuTtlNonPointContract.attr('aria-hidden', false);
            $poikakuTbl.attr('aria-hidden', true);
            $bnrCpnRecommend.attr('aria-hidden', true);
        }
    } else if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && !isMvnoInPast) {
        if(arr[arr.length -1].mno_status === '0') {
            if(currentMonthNum === '0' && prevMonthsSumString === '0') {
                $poikakuContentNonPointNonContract.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_3_guide_application');
                $poikakuTtlNonPointNonContract.attr('aria-hidden', false);
                $poikakuTbl.attr('aria-hidden', true);
            } else {
                $poikakuContentNonContract.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_1_guide_application');
                $poikakuTtlNonContract.attr('aria-hidden', false);
            }
        } else {
            if(currentMonthNum === '0' && prevMonthsSumString === '0') {
                $poikakuContentNonPointContract.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_4_guide_application');
                $poikakuTtlNonPointContract.attr('aria-hidden', false);
                $poikakuTbl.attr('aria-hidden', true);
                $bnrCpnRecommend.attr('aria-hidden', true);
            } else {
                $poikakuContentContract.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('aria-hidden', false);
                $pointFixedBtnMno.attr('href', '/guide/application/?lid-r=tips_point_2_guide_application');
                $poikakuTtlContract.attr('aria-hidden', false);
                $bnrCpnRecommend.attr('aria-hidden', true);
            }

        }
    }
}

const getRankValue = (arr, obj) => {
    if(isNoRecord) {
        switch (obj.rank) {
            case 1:
                targetRankValues = 'レギュラー';
                $userRankIcon.addClass('tips-Point_Rank-1');
                break;
            case 2:
                targetRankValues = 'シルバー';
                $userRankIcon.addClass('tips-Point_Rank-2');
                break;
            case 3:
                targetRankValues = 'ゴールド';
                $userRankIcon.addClass('tips-Point_Rank-3');
                break;
            case 4:
                targetRankValues = 'プラチナ';
                $userRankIcon.addClass('tips-Point_Rank-4');
                break;
            case 5:
                targetRankValues = 'ダイヤモンド';
                $userRankIcon.addClass('tips-Point_Rank-5');
                break;
            default:
                console.log('not exist rank');
        }
    } else {
        switch (arr[arr.length -1].rank) {
            case '1':
                targetRankValues = 'レギュラー';
                $userRankIcon.addClass('tips-Point_Rank-1');
                break;
            case '2':
                targetRankValues = 'シルバー';
                $userRankIcon.addClass('tips-Point_Rank-2');
                break;
            case '3':
                targetRankValues = 'ゴールド';
                $userRankIcon.addClass('tips-Point_Rank-3');
                break;
            case '4':
                targetRankValues = 'プラチナ';
                $userRankIcon.addClass('tips-Point_Rank-4');
                break;
            case '5':
                targetRankValues = 'ダイヤモンド';
                $userRankIcon.addClass('tips-Point_Rank-5');
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
        $onlyHiddenTable.attr('aria-hidden', true);
    } else if(arr.length === 2) {
        const pastMonth = arr.slice(0, -1);
        const pastLastMonth = removeZero(pastMonth[pastMonth.length - 1].month.slice(-2));

        $currentMonth.text(currentMonth);
        $onlyHidden.attr('aria-hidden', true);
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
        } else {
            $pastLastMonth.text(pastLastMonth);
        }
    } else if(isMvnoInPast) {
        $currentMonth.text(currentMonth);
        $pastLastMonth.text(currentMonth);
        $pastLastMonthTable.text(currentMonth);
        $onlyHidden.attr('aria-hidden', true);
        $onlyHiddenTable.attr('aria-hidden', true);
    }
};

const showWrapper = () => {
    if(isLogin) {
        $poikakuInner.attr('aria-hidden', false);
    } else {
        $poikakuInnerNonLogin.attr('aria-hidden', false);
        $poikakuTtlNonLogin.attr('aria-hidden', false);
        $poikakuTbl.attr('aria-hidden', true);
        $pointFixedBtnMno.attr('aria-hidden', false);
    }
    toggleStickeyBottom(ctaTarget, ctaTrigger);
}

const showContent = arr => {
    if(isNoRecord) {
        $poikakuContentNonPoint.attr('aria-hidden', false);
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
        $poikakuContentMvno.attr('aria-hidden', false);
        if(currentMonthNum === '0' && prevMonthsSumString === '0') {
            $poikakuContentNonPoint.attr('aria-hidden', false);
            $poikakuContentMvnoNonPoint.attr('aria-hidden', false);
        } else {
            $poikakuContent.attr('aria-hidden', false);
            $poikakuContentMvno.attr('aria-hidden', false);
        }
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
                        <th colspan="2">20${targetPast[i].month.slice(0,2)}年${month}月<span class="tips-Point_Poikaku-tbl-annotation-date">※契約していた場合の獲得ポイント</span></th>
                    </tr>
                    <tr class="tips-Point_Poikaku-tbl-bg">
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
                        <td><span>${Number(targetPast[i].potential).toLocaleString()}</span>ポイント</td>
                    </tr>
                `
            } else if (arr[arr.length - 1].mno_status === '1' && (targetPast[i].mno_status === '0' && targetPast[i].potential === '0')){
                pastData = `
                    <tr>
                        <th colspan="2">20${targetPast[i].month.slice(0,2)}年${month}月<span class="tips-Point_Poikaku-tbl-annotation-date">※契約していた場合の獲得ポイント</span></th>
                    </tr>
                    <tr class="tips-Point_Poikaku-tbl-bg">
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
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
                        <td><span>${Number(targetPast[i].actual).toLocaleString()}</span>ポイント<br><span class="tips-Point_Poikaku-tbl-icon">契約期間<span>獲得済</span></span></td>
                    </tr>
                `
            } else if (arr[arr.length - 1].mno_status === '0' && (targetPast[i].mno_status === '1' && targetPast[i].actual !== '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
                        <td><span>${Number(targetPast[i].actual).toLocaleString()}</span>ポイント<br><span class="tips-Point_Poikaku-tbl-icon">契約期間<span>獲得済</span></span></td>
                    </tr>
                `
            } else if (arr[arr.length - 1].mno_status === '0' && (targetPast[i].mno_status === '1' && targetPast[i].actual === '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
                        <td><span>ー</span>ポイント<br><span class="tips-Point_Poikaku-tbl-annotation-point">※楽天市場でのお買い物はありませんでした</span></span></td>
                    </tr>
                `
            } else if(targetPast[i].mno_status === '1' && targetPast[i].actual !== '0') {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
                        <td><span>${Number(targetPast[i].actual).toLocaleString()}</span>ポイント</td>
                    </tr>
                `
            } else if (targetPast[i].mno_status === '0' && targetPast[i].potential !== '0') {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
                        <td><span>${Number(targetPast[i].potential).toLocaleString()}</span>ポイント</td>
                    </tr>
                `
            } else if ((targetPast[i].mno_status === '1' && targetPast[i].actual === '0') || (targetPast[i].mno_status === '0' && targetPast[i].potential === '0')) {
                pastData = `
                    <tr>
                        <th colspan="2"><span>20${targetPast[i].month.slice(0,2)}年<span></span>${month}月</th>
                    </tr>
                    <tr>
                        <td>【SPU】<br class="i-Poikaku-Util_Show-pc">楽天モバイル契約者特典＋${point}倍<span class="tips-Point_Poikaku-tbl-annotation">※2</span></td>
                        <td><span>ー</span>ポイント<br><span class="tips-Point_Poikaku-tbl-annotation-point">※楽天市場でのお買い物はありませんでした</span></td>
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
        $pointCurrent.prevAll('.js-point-plus').attr('aria-hidden', true);
    } else if (currentMonthNum === '0') {
        $pointCurrent.text('-');
        $pointCurrent.prevAll('.js-point-plus').attr('aria-hidden', true);
    } else {
        $pointCurrent.html(currentMonthNum);
    }

    if(((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0')) && isMvnoInPast) {
        $poikakuItemNonContractSum.attr('aria-hidden', true);
        $poikakuItemTextWrapperNonContract.addClass('only-current')
        $poikakuTbl.attr('aria-hidden', true);
    } else if ((arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') || (arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') || (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0')){
        if (targetContractValues.length === 1 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $poikakuTbl.attr('aria-hidden', true);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 2 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $pointPastTtl.text('獲得ポイント内訳');
            $pointlast.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 3 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $pointPastTtl.text('獲得ポイント内訳');
            $pointTwoMonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 4 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '1') {
            $pointPastTtl.text('獲得ポイント内訳');
            $pointThreeMonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 1 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $poikakuTbl.attr('aria-hidden', true);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 2 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $pointPastTtl.text('獲得想定ポイント内訳');
            $pointlast.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 3 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $pointPastTtl.text('獲得想定ポイント内訳');
            $pointTwoMonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 4 && arr[arr.length -1].status === '0' && arr[arr.length -1].mno_status === '0') {
            $pointPastTtl.text('獲得想定ポイント内訳');
            $pointThreeMonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 1 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $poikakuTbl.attr('aria-hidden', true);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 2 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $pointPastTtl.text('獲得想定ポイント内訳');
            $pointlast.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 3 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $pointPastTtl.text('獲得想定ポイント内訳');
            $pointTwoMonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        } else if (targetContractValues.length === 4 && arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0') {
            $pointPastTtl.text('獲得想定ポイント内訳');
            $pointThreeMonth.attr('aria-hidden', false);
            addElement(arr, $pointPastTbl);
        }

        if (prevMonthsSumString === '0' && targetContractValues[targetContractValues.length - 1].toString() === '1') {
            $pointSum.text('-');
            $pointSum.prevAll('.js-point-plus').attr('aria-hidden', true);
            $poikakuItemSum.attr('aria-hidden', true);
            $poikakuItemCurrent.addClass('only-current');
            $pointThisMonthMore.attr('aria-hidden', true);
            $pointThisMonth.attr('aria-hidden', false);
        } else if (prevMonthsSumString === '0' && (targetContractValues[targetContractValues.length - 1].toString() === '0' || (arr[arr.length -1].status === '1' && arr[arr.length -1].mno_status === '0'))) {
            $pointSum.text('-');
            $pointSum.prevAll('.js-point-plus').attr('aria-hidden', true);
            $poikakuItemNonContractSum.attr('aria-hidden', true);
            $poikakuItemTextWrapperNonContract.addClass('only-current')
        } else {
            $pointSum.html(prevMonthsSumString);
        }
    }
}

const scrollToGadjet = () => {
    const urlSearch = location.search;
    const anchorValueArray = urlSearch.match(/anchor=([^&]+)/);

    if(anchorValueArray) {
        const anchorValue = anchorValueArray[1];
        const targetPositionY = $(`#${anchorValue}`).offset().top;
        $('html, body').animate({scrollTop: targetPositionY}, 200);
    }
}

getMemberInfo()
    .then(data => {
        showWrapper();
        return getData(data);
    })
    .then(data => {
        const targetData = data.targetPoikakuData;
        setContractValues(targetData);
        getRankValue(targetData, data.userData);
        setIsMvnoInPast(targetData);
        showContent(targetData);
        setModal(targetData);
        setMonth(targetData);
        setValue(targetData, data.userData);
        scrollToGadjet();
    })
    .catch(() => {
        showWrapper();
        scrollToGadjet();
    });
