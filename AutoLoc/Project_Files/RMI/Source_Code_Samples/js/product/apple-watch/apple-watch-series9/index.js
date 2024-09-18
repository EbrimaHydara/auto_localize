import { priceInfo } from './price-info.js';
import { themeNum } from '../../../common/theme.js';
import { addClassBasedOnSlideCount } from "../../../common/component/carousel";

const namespace = 'product-apple-watch-series9';
const productName = location.pathname.split('/')[3];
let iphoneData = [];

const mainConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
};

let currentCasetype = 'ミッドナイト';
let currentCasetypeSimu = 'ミッドナイト';
const CasetypeToBandTable = {
    'ミッドナイト': ['ミッドナイトスポーツバンド', 'ミッドナイトスポーツループ'],
    'スターライト': ['スターライトスポーツバンド', 'スターライトスポーツループ'],
    '(PRODUCT)RED': ['(PRODUCT)REDスポーツバンド'],
    'ピンク': ['ライトピンクスポーツバンド', 'ライトピンクスポーツループ'],
    'シルバーALU': ['ストームブルースポーツバンド', 'ウインターブルースポーツループ'],
    'グラファイト': ['ミッドナイトスポーツバンド', 'グラファイトミラネーゼループ'],
    'シルバーSTEEL': ['ストームブルースポーツバンド', 'シルバーミラネーゼループ'],
    'ゴールド': ['クレイスポーツバンド', 'ゴールドミラネーゼループ'],
};
const BandToSizeTable = {
    'ミッドナイトスポーツバンド': ['S/M', 'M/L'],
    'スターライトスポーツバンド': ['S/M', 'M/L'],
    '(PRODUCT)REDスポーツバンド': ['S/M', 'M/L'],
    'ストームブルースポーツバンド': ['S/M', 'M/L'],
    'ライトピンクスポーツバンド': ['S/M', 'M/L'],
    'クレイスポーツバンド': ['S/M', 'M/L'],
    'ミッドナイトスポーツループ': ['フリーサイズ'],
    'スターライトスポーツループ': ['フリーサイズ'],
    'ウインターブルースポーツループ': ['フリーサイズ'],
    'ライトピンクスポーツループ': ['フリーサイズ'],
    'グラファイトミラネーゼループ': ['フリーサイズ'],
    'シルバーミラネーゼループ': ['フリーサイズ'],
    'ゴールドミラネーゼループ': ['フリーサイズ'],
}
const BandSizeText = {
    '41S/M': '130-180',
    '41M/L': '150-200',
    '41フリーサイズ': '130-200',
    '45S/M': '140-190',
    '45M/L': '160-210',
    '45フリーサイズ': '140-245',
}
const $elCaseSize = $('[name="casesize"]');
const $elCaseSizeSimu = $('[name="casesize-simu"]');
const $elBand = $('[name="band"]');
const $elBandSimu = $('[name="band-simu"]');
const $elSize = $('[name="size"]');
const $elSizeSimu = $('[name="size-simu"]');
const $elCta = $('#js-apply-btn');
const $elCtaSimu = $('#js-apply-btn-simu');

const switchCtaUrl = (caseSize, caseType, band, size, position) => {
    const l_id = position === 'top' ? '&l-id=apple-watch-ultra_top_bss-apple-watch-ultra' : '&l-id=apple-watch-ultra_bottom_bss-apple-watch-ultra';
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'シルバーALU':
            case 'ピンク':
            case '(PRODUCT)RED':
            result = 'アルミニウムケース';
            break;
            case 'グラファイト':
            case 'シルバーSTEEL':
            case 'ゴールド':
            result = 'ステンレススチールケース';
            break;
            default:
            result = 'アルミニウムケース';
        }
        return result;
    };
    const genId = `${caseSize}mm${caseType}${getCaseMat()}と${band}${size}`;
    let result = '';
    /* original strings
    Apple Watch Series 9- 41mm スターライトアルミニウムケースとスターライトスポーツバンド - S/M
    Apple Watch Series 9- 41mm スターライトアルミニウムケースとスターライトスポーツバンド - M/L
    Apple Watch Series 9- 41mm スターライトアルミニウムケースとスターライトスポーツループ
    Apple Watch Series 9- 41mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - S/M
    Apple Watch Series 9- 41mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - M/L
    Apple Watch Series 9- 41mm ミッドナイトアルミニウムケースとミッドナイトスポーツループ
    Apple Watch Series 9- 41mm シルバーアルミニウムケースとストームブルースポーツバンド - S/M
    Apple Watch Series 9- 41mm シルバーアルミニウムケースとストームブルースポーツバンド - M/L
    Apple Watch Series 9- 41mm シルバーアルミニウムケースとウインターブルースポーツループ
    Apple Watch Series 9- 41mm ピンクアルミニウムケースとライトピンクスポーツバンド - S/M
    Apple Watch Series 9- 41mm ピンクアルミニウムケースとライトピンクスポーツバンド - M/L
    Apple Watch Series 9- 41mm ピンクアルミニウムケースとライトピンクスポーツループ
    Apple Watch Series 9- 41mm シルバーステンレススチールケースとストームブルースポーツバンド - S/M
    Apple Watch Series 9- 41mm シルバーステンレススチールケースとストームブルースポーツバンド - M/L
    Apple Watch Series 9- 41mm シルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 9- 41mm ゴールドステンレススチールケースとクレイスポーツバンド - S/M
    Apple Watch Series 9- 41mm ゴールドステンレススチールケースとクレイスポーツバンド - M/L
    Apple Watch Series 9- 41mm ゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 9- 41mm グラファイトステンレススチールケースとミッドナイトスポーツバンド - S/M
    Apple Watch Series 9- 41mm グラファイトステンレススチールケースとミッドナイトスポーツバンド - M/L
    Apple Watch Series 9- 41mm グラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 9- 45mm スターライトアルミニウムケースとスターライトスポーツバンド - S/M
    Apple Watch Series 9- 45mm スターライトアルミニウムケースとスターライトスポーツバンド - M/L
    Apple Watch Series 9- 45mm スターライトアルミニウムケースとスターライトスポーツループ
    Apple Watch Series 9- 45mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - S/M
    Apple Watch Series 9- 45mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - M/L
    Apple Watch Series 9- 45mm ミッドナイトアルミニウムケースとミッドナイトスポーツループ
    Apple Watch Series 9- 45mm シルバーアルミニウムケースとストームブルースポーツバンド - S/M
    Apple Watch Series 9- 45mm シルバーアルミニウムケースとストームブルースポーツバンド - M/L
    Apple Watch Series 9- 45mm シルバーアルミニウムケースとウインターブルースポーツループ
    Apple Watch Series 9- 45mm ピンクアルミニウムケースとライトピンクスポーツバンド - S/M
    Apple Watch Series 9- 45mm ピンクアルミニウムケースとライトピンクスポーツバンド - M/L
    Apple Watch Series 9- 45mm ピンクアルミニウムケースとライトピンクスポーツループ
    Apple Watch Series 9- 45mm シルバーステンレススチールケースとストームブルースポーツバンド - S/M
    Apple Watch Series 9- 45mm シルバーステンレススチールケースとストームブルースポーツバンド - M/L
    Apple Watch Series 9- 45mm シルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 9- 45mm ゴールドステンレススチールケースとクレイスポーツバンド - S/M
    Apple Watch Series 9- 45mm ゴールドステンレススチールケースとクレイスポーツバンド - M/L
    Apple Watch Series 9- 45mm ゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 9- 45mm グラファイトステンレススチールケースとミッドナイトスポーツバンド - S/M
    Apple Watch Series 9- 45mm グラファイトステンレススチールケースとミッドナイトスポーツバンド - M/L
    Apple Watch Series 9- 45mm グラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 9- 41mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド - S/M
    Apple Watch Series 9- 41mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド - M/L
    Apple Watch Series 9- 45mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド - S/M
    Apple Watch Series 9- 45mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド - M/L

    original URLs
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600747&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600748&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600749&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600750&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600751&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600752&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600753&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600754&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600755&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600756&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600757&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600758&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600759&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600760&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600761&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600762&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600763&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600764&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600765&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600766&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600767&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600768&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600769&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600770&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600771&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600772&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600773&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600774&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600775&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600776&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600777&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600778&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600779&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600780&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600781&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600782&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600783&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600784&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600785&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600786&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600787&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600788&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600789&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600790&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600791&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600792&selectAvailable=true
    */
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600750&selectAvailable=true';
        break;
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600751&selectAvailable=true';
        break;
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600752&selectAvailable=true';
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600747&selectAvailable=true';
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600748&selectAvailable=true';
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600749&selectAvailable=true';
        break;
        case '41mmシルバーALUアルミニウムケースとストームブルースポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600753&selectAvailable=true';
        break;
        case '41mmシルバーALUアルミニウムケースとストームブルースポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600754&selectAvailable=true';
        break;
        case '41mmシルバーALUアルミニウムケースとウインターブルースポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600755&selectAvailable=true';
        break;
        case '41mmピンクアルミニウムケースとライトピンクスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600756&selectAvailable=true';
        break;
        case '41mmピンクアルミニウムケースとライトピンクスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600757&selectAvailable=true';
        break;
        case '41mmピンクアルミニウムケースとライトピンクスポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600758&selectAvailable=true';
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600789&selectAvailable=true';
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600790&selectAvailable=true';
        break;
        case '41mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600759&selectAvailable=true';
        break;
        case '41mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600760&selectAvailable=true';
        break;
        case '41mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600761&selectAvailable=true';
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600765&selectAvailable=true';
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600766&selectAvailable=true';
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600767&selectAvailable=true';
        break;
        case '41mmゴールドステンレススチールケースとクレイスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600762&selectAvailable=true';
        break;
        case '41mmゴールドステンレススチールケースとクレイスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600763&selectAvailable=true';
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600764&selectAvailable=true';
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600771&selectAvailable=true';
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600772&selectAvailable=true';
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600773&selectAvailable=true';
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600768&selectAvailable=true';
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600769&selectAvailable=true';
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600770&selectAvailable=true';
        break;
        case '45mmシルバーALUアルミニウムケースとストームブルースポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600774&selectAvailable=true';
        break;
        case '45mmシルバーALUアルミニウムケースとストームブルースポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600775&selectAvailable=true';
        break;
        case '45mmシルバーALUアルミニウムケースとウインターブルースポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600776&selectAvailable=true';
        break;
        case '45mmピンクアルミニウムケースとライトピンクスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600777&selectAvailable=true';
        break;
        case '45mmピンクアルミニウムケースとライトピンクスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600778&selectAvailable=true';
        break;
        case '45mmピンクアルミニウムケースとライトピンクスポーツループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600779&selectAvailable=true';
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600791&selectAvailable=true';
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600792&selectAvailable=true';
        break;
        case '45mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600780&selectAvailable=true';
        break;
        case '45mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600781&selectAvailable=true';
        break;
        case '45mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600782&selectAvailable=true';
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600786&selectAvailable=true';
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600787&selectAvailable=true';
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600788&selectAvailable=true';
        break;
        case '45mmゴールドステンレススチールケースとクレイスポーツバンドS/M':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600783&selectAvailable=true';
        break;
        case '45mmゴールドステンレススチールケースとクレイスポーツバンドM/L':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600784&selectAvailable=true';
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループフリーサイズ':
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600785&selectAvailable=true';
        break;
    }
    console.log(result)
    return result;
};

const getCarouselIndex = (caseSize, caseType, band, size) => {
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'シルバーALU':
            case 'ピンク':
            case '(PRODUCT)RED':
            result = 'アルミニウムケース';
            break;
            case 'グラファイト':
            case 'シルバーSTEEL':
            case 'ゴールド':
            result = 'ステンレススチールケース';
            break;
            default:
            result = 'アルミニウムケース';
        }
        return result;
    };
    const genId = `${caseSize}mm${caseType}${getCaseMat()}と${band}${size}`;
    let result = 0;
console.log(genId)
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M':
        result = 0;
        break;
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L':
        result = 1;
        break;
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ':
        result = 2;
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンドS/M':
        result = 3;
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンドM/L':
        result = 4;
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ':
        result = 5;
        break;
        case '41mmシルバーALUアルミニウムケースとストームブルースポーツバンドS/M':
        result = 6;
        break;
        case '41mmシルバーALUアルミニウムケースとストームブルースポーツバンドM/L':
        result = 7;
        break;
        case '41mmシルバーALUアルミニウムケースとウインターブルースポーツループフリーサイズ':
        result = 8;
        break;
        case '41mmピンクアルミニウムケースとライトピンクスポーツバンドS/M':
        result = 9;
        break;
        case '41mmピンクアルミニウムケースとライトピンクスポーツバンドM/L':
        result = 10;
        break;
        case '41mmピンクアルミニウムケースとライトピンクスポーツループフリーサイズ':
        result = 11;
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドS/M':
        result = 12;
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドM/L':
        result = 13;
        break;
        case '41mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドS/M':
        result = 14;
        break;
        case '41mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドM/L':
        result = 15;
        break;
        case '41mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループフリーサイズ':
        result = 16;
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンドS/M':
        result = 17;
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンドM/L':
        result = 18;
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループフリーサイズ':
        result = 19;
        break;
        case '41mmゴールドステンレススチールケースとクレイスポーツバンドS/M':
        result = 20;
        break;
        case '41mmゴールドステンレススチールケースとクレイスポーツバンドM/L':
        result = 21;
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループフリーサイズ':
        result = 22;
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M':
        result = 23;
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L':
        result = 24;
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ':
        result = 25;
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンドS/M':
        result = 26;
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンドM/L':
        result = 27;
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ':
        result = 28;
        break;
        case '45mmシルバーALUアルミニウムケースとストームブルースポーツバンドS/M':
        result = 29;
        break;
        case '45mmシルバーALUアルミニウムケースとストームブルースポーツバンドM/L':
        result = 30;
        break;
        case '45mmシルバーALUアルミニウムケースとウインターブルースポーツループフリーサイズ':
        result = 31;
        break;
        case '45mmピンクアルミニウムケースとライトピンクスポーツバンドS/M':
        result = 32;
        break;
        case '45mmピンクアルミニウムケースとライトピンクスポーツバンドM/L':
        result = 33;
        break;
        case '45mmピンクアルミニウムケースとライトピンクスポーツループフリーサイズ':
        result = 34;
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドS/M':
        result = 35;
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンドM/L':
        result = 36;
        break;
        case '45mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドS/M':
        result = 37;
        break;
        case '45mmシルバーSTEELステンレススチールケースとストームブルースポーツバンドM/L':
        result = 38;
        break;
        case '45mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループフリーサイズ':
        result = 39;
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンドS/M':
        result = 40;
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンドM/L':
        result = 41;
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループフリーサイズ':
        result = 42;
        break;
        case '45mmゴールドステンレススチールケースとクレイスポーツバンドS/M':
        result = 43;
        break;
        case '45mmゴールドステンレススチールケースとクレイスポーツバンドM/L':
        result = 44;
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループフリーサイズ':
        result = 45;
        break;
        default:
        result = 0;
    }
    return result;
};

const carouselSet = 46;
let desigIndex = 0;
for (let i = 0; i <= carouselSet; i++) {
    $(`.js-main${i}`).not('.slick-initialized').slick(mainConfig);

    $(`.thumbnail${i} .thumbnail-item`).on('click', (event) => {
        const index = $(`.thumbnail${i} .thumbnail-item`).index($(event.currentTarget));
        $(`.${namespace}-Hero_Main-view`).slick('slickGoTo', index);
    });
}

const init = () => {
    $elCaseSize.on('change blur', function(e) {
        currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;
        changeBand(currentCasetype);
        $.each($('.js-size-elm'), (i, elm) => elm.querySelector('.js-size-txt').innerHTML = elm.querySelector('.js-size-txt').innerHTML.replace(/[0-9]+-[0-9]+/, BandSizeText[`${e.currentTarget.value}${elm.querySelector('[name="size"]').value}`]));
    });

    const colorlength = $('.js-color-m').length;
    for ( let i = 0; i <= colorlength; i++ ) {
        $(`.js-color${i}`).on('click', () => {
            $('.js-color-m').attr('aria-current', 'false');
            $(`.js-color${i}`).attr('aria-current', 'true');

            currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;

            // display band choice begins >>>
            $elBand.prop('checked', false);
            let tempArrayBand = CasetypeToBandTable[currentCasetype];
            $('.js-band-elm').attr('aria-hidden', true);
            tempArrayBand.forEach((elem, i) => {
                const $filteredItems = $elBand.filter(`[value="${elem}"]`);
                $.each($filteredItems, (i, val) => {
                    val.closest('.js-band-elm').setAttribute('aria-hidden', false);
                });
                if (i === 0) {
                    $filteredItems.prop('checked', true);
                }
            });
            // <<< display band choice ends

          changeBand(currentCasetype);
        });
    }

    $elBand.on('change blur', function(e) {
        currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;
        changeBand(currentCasetype);
    });

    $elSize.on('change blur', function(e) {
        currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;

        // Change Cta URL
        let urlInserted = switchCtaUrl($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val(), $('[name="size"]:checked').val(), 'top');
        $elCta.attr('href', urlInserted);
    });

    initializeSizePattern();

    simulation();

    accessoryCarouselInit();
}

// バンドの種類によって表示するタイプを決める
const initializeSizePattern = () => {
    const currentBandtype = $('[name="band"]:checked').val();
    let tempArraySize = BandToSizeTable[currentBandtype];
    $('.js-size-elm').attr('aria-hidden', true);
    tempArraySize.forEach((elem, i) => {
        const $filteredItems = $elSize.filter(`[value="${elem}"]`);
        $.each($filteredItems, (i, val) => {
            val.closest('.js-size-elm').setAttribute('aria-hidden', false);
        });
        if (i === 0) {
            $filteredItems.prop('checked', true);
        }
    });
};

// バンド更新
const changeBand = (currentCasetype) => {
    initializeSizePattern();

    // Change Cta URL
    let urlInserted = switchCtaUrl($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val(), $('[name="size"]:checked').val(), 'top');
    $elCta.attr('href', urlInserted);

    desigIndex = getCarouselIndex($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val(), $('[name="size"]:checked').val());
    console.log(desigIndex)
    $(`.${namespace}-Hero_Main-thumbnail`).removeClass('is-open');
    $(`.thumbnail${desigIndex+1}`).addClass('is-open');
    $(`.${namespace}-Hero_Main-view`).attr('aria-hidden', 'true');
    $(`.js-main${desigIndex+1}`).attr('aria-hidden', 'false');
    $(`.js-main${desigIndex+1}`).slick('unslick');
    $(`.js-main${desigIndex+1}`).not('.slick-initialized').slick(mainConfig);
}

const simulation = () => {

    const addComma = (value) => {
        if (typeof value === 'number') {
            return value.toLocaleString();
        } else {
            return parseInt(value, 10).toLocaleString();
        }
    };

    const getPrice24 = (init, total) => {
        return (parseInt(total, 10) - parseInt(init, 10)) / 23;
    };

    const getPrice48 = (init, total) => {
        return (parseInt(total, 10) - parseInt(init, 10)) / 47;
    };

    const dispPrices = () => {
        let priceArray = priceInfo($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), $('[name="size-simu"]:checked').val());
        console.log(priceArray);
        $dispPriceTotal.text('');
        $dispPrice24.text('');
        $dispPrice48.text('');
        $dispPriceTotal.text(addComma(priceArray[0]));
        $dispPrice24.text(addComma(getPrice24(priceArray[1], priceArray[0])));
        $dispPrice48.text(addComma(getPrice48(priceArray[2], priceArray[0])));
        $dispPrice24init.text('');
        $dispPrice48init.text('');
        $dispPrice24init.text(addComma(priceArray[1]));
        $dispPrice48init.text(addComma(priceArray[2]));
        if (getPrice24(priceArray[1], priceArray[0]).toString() === priceArray[1]) {
            $dispPrice24init[0].closest('span.c-Txt_Cap').setAttribute('aria-hidden', true);
        } else {
            $dispPrice24init[0].closest('span.c-Txt_Cap').setAttribute('aria-hidden', false);
        }
        if (getPrice48(priceArray[2], priceArray[0]).toString() === priceArray[2]) {
            $dispPrice48init[0].closest('span.c-Txt_Cap').setAttribute('aria-hidden', true);
        } else {
            $dispPrice48init[0].closest('span.c-Txt_Cap').setAttribute('aria-hidden', false);
        }
    };

    const dispOptionContent = () => {
        const value1 = $('[name="option-1"]:checked').val();
        const value2 = $('[name="option-2"]:checked').val();
        let sum = 0;
        if (value1 !== '0' && value2 !== '0') {
            // both
            $secOption.attr('aria-hidden', 'false');
            sum = parseInt(value1, 10) + parseInt(value2, 10);
            $dispOption[0].textContent = addComma(sum);
            $dispOptionAppeal.attr('aria-hidden', false);
        } else if (value1 !== '0') {
            // only option 1
            $secOption.attr('aria-hidden', 'false');
            $dispOption[0].textContent = addComma(value1);
            $dispOptionAppeal.attr('aria-hidden', false);
        } else if (value2 !== '0') {
            // only option 2
            $secOption.attr('aria-hidden', 'false');
            $dispOption[0].textContent = addComma(value2);
            $dispOptionAppeal.attr('aria-hidden', true);
        } else {
            // none of two
            $dispOption[0].textContent = '0';
            $secOption.attr('aria-hidden', 'true');
            $dispOptionAppeal.attr('aria-hidden', true);
        }
    };

    const $dispPriceTotal = $('#disp-price-total');
    const $dispPrice24 = $('#disp-price-24');
    const $dispPrice48 = $('#disp-price-48');
    const $dispPrice24init = $('#disp-price-24-init');
    const $dispPrice48init = $('#disp-price-48-init');

    const $elOption1 = $('[name="option-1"]');
    const $elOption2 = $('[name="option-2"]');
    const $dispOption = $('#js-disp-option');
    const $secOption = $('#js-disp-option-sec');
    const $dispOptionAppeal = $('#js-disp-option-appeal');

    // 最初renderのとき'aria-hidden', trueにする
    $dispPrice24init[0].closest('span.c-Txt_Cap').setAttribute('aria-hidden', true);

    let priceArrayInit = priceInfo($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val());
    console.log(priceArrayInit);
    $dispPriceTotal.text(addComma(priceArrayInit[0]));
    $dispPrice24.text(addComma(getPrice24(priceArrayInit[1], priceArrayInit[0])));
    $dispPrice48.text(addComma(getPrice48(priceArrayInit[2], priceArrayInit[0])));
    $dispPrice24init.text(addComma(priceArrayInit[1]));
    $dispPrice48init.text(addComma(priceArrayInit[2]));
    dispOptionContent();
    dispPrices();

    const initializeSimuSizePattern = () => {
      const currentBandtype = $('[name="band-simu"]:checked').val();
      let tempArraySize = BandToSizeTable[currentBandtype];
      $('.js-size-simu-elm').attr('aria-hidden', true);
      tempArraySize.forEach((elem, i) => {
          const $filteredItems = $elSizeSimu.filter(`[value="${elem}"]`);
          $.each($filteredItems, (i, val) => {
              val.closest('.js-size-simu-elm').setAttribute('aria-hidden', false);
          });
          if (i === 0) {
              $filteredItems.prop('checked', true);
          }
      });
    };

    $elCaseSizeSimu.on('change blur', function(e) {
        // Change band size text
        $.each($('.js-size-simu-elm'), (i, elm) => elm.querySelector('.js-size-simu-txt').innerHTML = elm.querySelector('.js-size-simu-txt').innerHTML.replace(/[0-9]+-[0-9]+/, BandSizeText[`${e.currentTarget.value}${elm.querySelector('[name="size-simu"]').value}`]));

        // Get price
        dispPrices();
        initializeSimuSizePattern();

        // Change Cta URL
        let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), $('[name="size-simu"]:checked').val(), 'bottom');
        $elCtaSimu.attr('href', urlInserted);
    });

    const colorlengthS = $('.js-color-s').length;
    for ( let i = 0; i <= colorlengthS; i++ ) {

        $(`.js-color-s-${i}`).on('click', () => {
            $('.js-color-s').attr('aria-current', 'false');
            $(`.js-color-s-${i}`).attr('aria-current', 'true');
            currentCasetypeSimu = $('.js-color-s').filter('[aria-current="true"]')[0].dataset.color;

            // display band choice begins >>>
            $elBandSimu.prop('checked', false);
            let tempArrayBand = CasetypeToBandTable[currentCasetypeSimu];
            $('.js-band-simu-elm').attr('aria-hidden', true);
            tempArrayBand.forEach((elem, i) => {
                console.log(elem);
                const $filteredItems = $elBandSimu.filter(`[value="${elem}"]`);
                console.log($filteredItems);
                $.each($filteredItems, (i, val) => {
                    val.closest('.js-band-simu-elm').setAttribute('aria-hidden', false);
                });
                if (i === 0) {
                    $filteredItems.prop('checked', true);
                }
            });
            // <<< display band choice ends

            // Get price
            dispPrices();
            initializeSimuSizePattern();

            // Change Cta URL
            let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), $('[name="size-simu"]:checked').val(), 'bottom');
            $elCtaSimu.attr('href', urlInserted);
        });
    }
    $elBandSimu.on('change blur', function(e) {
        // Get price
        dispPrices();
        initializeSimuSizePattern();

        // Change Cta URL
        let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), $('[name="size-simu"]:checked').val(), 'bottom');
        $elCtaSimu.attr('href', urlInserted);
    });

    $elSizeSimu.on('change blur', function(e) {
      let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), $('[name="size-simu"]:checked').val(), 'bottom');
      $elCtaSimu.attr('href', urlInserted);
    });

    $elOption1.on('change blur', function(e) {
        dispOptionContent();
    });
    $elOption2.on('change blur', function(e) {
        dispOptionContent();
    });

    initializeSimuSizePattern();
};

const accessoryCarouselInit = () => {
    // recommend carousel
    const accessoryCarousel = $(`.js-${namespace}-Carousel-product`);
    accessoryCarousel.each(function() {
        let $self = $(this);
        $self.on('init breakpoint', (_, slick) => {
            addClassBasedOnSlideCount(slick);
        });
        const carouselConfig = {
            respondTo: 'min',
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
            infinite: true,
            prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        };
        $self.slick($.extend({}, carouselConfig, {
            responsive: [
                {
                    breakpoint: themeNum.max.m,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: themeNum.max.s,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        dotsClass: 'slick-dots c-Carousel_Dots-v2',
                        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    }
                }
            ]
        }));
    });
}

// Modal Setting
$('.js-video').modaal({
    background: '#505050',
    custom_class: 'c-Modal',
    overlay_opacity: 0.8,
    type: 'video'
});

// anchor spec
const hash = location.hash;
const elTab1 = document.getElementById('tab-menu1');
const elTab2 = document.getElementById('tab-menu2');
const dispTab1 = document.getElementById('tab-content1');
const dispTab2 = document.getElementById('tab-content2');
if (hash.indexOf('spec') > -1) {
    elTab1.setAttribute('aria-selected', 'false');
    elTab2.setAttribute('aria-selected', 'true');
    dispTab1.setAttribute('aria-hidden', 'true');
    dispTab2.setAttribute('aria-hidden', 'false');
}

init();
