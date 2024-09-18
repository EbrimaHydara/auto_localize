import { priceInfo } from './price-info.js';
import { themeNum } from '../../../common/theme.js';
import { addClassBasedOnSlideCount } from "../../../common/component/carousel";

const namespace = 'product-apple-watch-series8';
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
    'ミッドナイト': ['ミッドナイトスポーツバンド'],
    'スターライト': ['スターライトスポーツバンド'],
    '(PRODUCT)RED': ['(PRODUCT)REDスポーツバンド'],
    'グラファイト': ['ミッドナイトスポーツバンド', 'グラファイトミラネーゼループ'],
    'シルバーALU': ['ホワイトスポーツバンド'],
    'シルバーSTEEL': ['ホワイトスポーツバンド', 'シルバーミラネーゼループ'],
    'ゴールド': ['スターライトスポーツバンド', 'ゴールドミラネーゼループ'],
};
const $elCaseSize = $('[name="casesize"]');
const $elCaseSizeSimu = $('[name="casesize-simu"]');
const $elBand = $('[name="band"]');
const $elBandSimu = $('[name="band-simu"]');
const $elCta = $('#js-apply-btn');
const $elCtaSimu = $('#js-apply-btn-simu');

const switchCtaUrl = (caseSize, caseType, band, position) => {
    console.log(caseSize, caseType, band);
    const l_id = position === 'top' ? '&l-id=apple-watch-series7_top_bss-apple-watch-series8' : '&l-id=apple-watch-series7_bottom_bss-apple-watch-series8';
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'シルバーALU':
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
    const genId = `${caseSize}mm${caseType}${getCaseMat()}と${band}`;
    let result = '';
    /* original strings
    Apple Watch Series 8- 41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 41mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 8- 41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド
    Apple Watch Series 8- 41mmシルバーステンレススチールケースとホワイトスポーツバンド
    Apple Watch Series 8- 41mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 8- 41mmゴールドステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 8- 41mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 8- 41mmグラファイトステンレススチールケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 8- 45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 45mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 8- 45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド
    Apple Watch Series 8- 45mmシルバーステンレススチールケースとホワイトスポーツバンド
    Apple Watch Series 8- 45mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 8- 45mmゴールドステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 8- 45mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 8- 45mmグラファイトステンレススチールケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 8- 41mmシルバーアルミニウムケースとホワイトスポーツバンド
    Apple Watch Series 8- 45mmシルバーアルミニウムケースとホワイトスポーツバンド

    original URLs
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600467
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600468
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600469
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600470
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600471
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600472
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600473
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600474
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600475
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600476
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600477
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600478
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600479
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600480
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600481
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600482
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600483
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600484
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600485
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600486
    */
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600467';
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンド'://2
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600468';
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://3
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600469';
        break;
        case '41mmシルバーSTEELステンレススチールケースとホワイトスポーツバンド'://4
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600470';
        break;
        case '41mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループ'://5
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600471';
        break;
        case '41mmゴールドステンレススチールケースとスターライトスポーツバンド'://6
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600472';
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループ'://7
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600473';
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンド'://8
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600474';
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://9
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600475';
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://10
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600476';
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンド'://11
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600477';
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://12
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600478';
        break;
        case '45mmシルバーSTEELステンレススチールケースとホワイトスポーツバンド'://13
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600479';
        break;
        case '45mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループ'://14
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600480';
        break;
        case '45mmゴールドステンレススチールケースとスターライトスポーツバンド'://15
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600481';
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループ'://16
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600482';
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンド'://17
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600483';
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://18
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600484';
        break;
        case '41mmシルバーALUアルミニウムケースとホワイトスポーツバンド'://19
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600485';
        break;
        case '45mmシルバーALUアルミニウムケースとホワイトスポーツバンド'://20
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600486';
        break;
        default:
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600467';
    }
    return result;
};

const getCarouselIndex = (caseSize, caseType, band) => {
    const getCaseMat = () => {
        let result = 0;
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'シルバーALU':
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
    const genId = `${caseSize}mm${caseType}${getCaseMat()}と${band}`;
    console.log(genId);
    let result = [];

    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        result = 0;
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンド'://2
        result = 1;
        break;
        case '41mmシルバーALUアルミニウムケースとホワイトスポーツバンド'://3
        result = 2;
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://4
        result = 3;
        break;
        case '41mmシルバーSTEELステンレススチールケースとホワイトスポーツバンド'://5
        result = 4;
        break;
        case '41mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループ'://6
        result = 5;
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンド'://7
        result = 6;
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://8
        result = 7;
        break;
        case '41mmゴールドステンレススチールケースとスターライトスポーツバンド'://9
        result = 8;
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループ'://10
        result = 9;
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://11
        result = 10;
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンド'://12
        result = 11;
        break;
        case '45mmシルバーALUアルミニウムケースとホワイトスポーツバンド'://13
        result = 12;
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://14
        result = 13;
        break;
        case '45mmシルバーSTEELステンレススチールケースとホワイトスポーツバンド'://15
        result = 14;
        break;
        case '45mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループ'://16
        result = 15;
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンド'://17
        result = 16;
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://18
        result = 17;
        break;
        case '45mmゴールドステンレススチールケースとスターライトスポーツバンド'://19
        result = 18;
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループ'://20
        result = 19;
        break;
        default:
        result = 0;
    }
    return result;
};

const carouselSet = 20;
let desigIndex = 0;
for (let i = 0; i <= carouselSet; i++) {
    $(`.js-main${i}`).not('.slick-initialized').slick(mainConfig);

    $(`.thumbnail${i} .thumbnail-item`).on('click', (event) => {
        const index = $(`.thumbnail${i} .thumbnail-item`).index($(event.currentTarget));
        $(`.${namespace}-Hero_Main-view`).slick('slickGoTo', index);
    });
}

$elCaseSize.on('change blur', function(e) {
    // Change Cta URL
    let urlInserted = switchCtaUrl($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val(), 'top');
    $elCta.attr('href', urlInserted);
    currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;
    desigIndex = getCarouselIndex($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val());
    $(`.${namespace}-Hero_Main-thumbnail`).removeClass('is-open');
    $(`.thumbnail${desigIndex+1}`).addClass('is-open');
    $(`.${namespace}-Hero_Main-view`).attr('aria-hidden', 'true');
    $(`.js-main${desigIndex+1}`).attr('aria-hidden', 'false');
    $(`.js-main${desigIndex+1}`).slick('unslick');
    $(`.js-main${desigIndex+1}`).not('.slick-initialized').slick(mainConfig);
});

const colorlength = $('.js-color-m').length;
console.log(colorlength)
for ( let i = 0; i <= colorlength; i++ ) {

    $(`.js-color${i}`).on('click', () => {
        console.log('hey')
        $('.js-color-m').attr('aria-current', 'false');
        $(`.js-color${i}`).attr('aria-current', 'true');

        currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;
        console.log(currentCasetype);
        // display band choice begins >>>
        $elBand.prop('checked', false);
        let tempArrayBand = CasetypeToBandTable[currentCasetype];
        console.log(tempArrayBand);
        $(`.${namespace}-Hero_Band-list-elem`).attr('aria-hidden', true);
        tempArrayBand.forEach((elem, i) => {
            console.log(elem);
            const $filteredItems = $elBand.filter(`[value="${elem}"]`);
            console.log($filteredItems);
            $.each($filteredItems, (i, val) => {
                console.log(val);
                val.closest(`.${namespace}-Hero_Band-list-elem`).setAttribute('aria-hidden', false);
            });
            if (i === 0) {
                $filteredItems.prop('checked', true);
            }
        });
        // <<< display band choice ends

        // Change Cta URL
        let urlInserted = switchCtaUrl($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val(), 'top');
        $elCta.attr('href', urlInserted);

        desigIndex = getCarouselIndex($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val());
        $(`.${namespace}-Hero_Main-thumbnail`).removeClass('is-open');
        $(`.thumbnail${desigIndex+1}`).addClass('is-open');

        $(`.${namespace}-Hero_Main-view`).attr('aria-hidden', 'true');
        $(`.js-main${desigIndex+1}`).attr('aria-hidden', 'false');
        $(`.js-main${desigIndex+1}`).slick('unslick');
        $(`.js-main${desigIndex+1}`).not('.slick-initialized').slick(mainConfig);
        $(`.${namespace}-Hero_Main-view`).slick('slickGoTo', 0);
    });
}
$elBand.on('change blur', function(e) {
    // Change Cta URL
    let urlInserted = switchCtaUrl($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val(), 'top');
    $elCta.attr('href', urlInserted);
    currentCasetype = $('.js-color-m').filter('[aria-current="true"]')[0].dataset.casetype;
    desigIndex = getCarouselIndex($('[name="casesize"]:checked').val(), currentCasetype, $('[name="band"]:checked').val());
    $(`.${namespace}-Hero_Main-thumbnail`).removeClass('is-open');
    $(`.thumbnail${desigIndex+1}`).addClass('is-open');
    $(`.${namespace}-Hero_Main-view`).attr('aria-hidden', 'true');
    $(`.js-main${desigIndex+1}`).attr('aria-hidden', 'false');
    $(`.js-main${desigIndex+1}`).slick('unslick');
    $(`.js-main${desigIndex+1}`).not('.slick-initialized').slick(mainConfig);
});

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
        let priceArray = priceInfo($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val());
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
        // series8の場合非表示。ultraの場合表示
        $dispBeforePriceUltra.attr('aria-hidden', true);
        $dispPriceDownUltra.attr('aria-hidden', true);
        $dispNoteUltra.attr('aria-hidden', true);
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
    const $dispBeforePriceUltra = $('#disp-before-price-ultra');
    const $dispPriceDownUltra = $('#disp-price-down-ultra');
    const $dispPrice24 = $('#disp-price-24');
    const $dispPrice48 = $('#disp-price-48');
    const $dispPrice24init = $('#disp-price-24-init');
    const $dispPrice48init = $('#disp-price-48-init');

    const $elOption1 = $('[name="option-1"]');
    const $elOption2 = $('[name="option-2"]');
    const $dispOption = $('#js-disp-option');
    const $secOption = $('#js-disp-option-sec');
    const $dispOptionAppeal = $('#js-disp-option-appeal');
    const $dispNoteUltra = $('#disp-note-ultra');

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

    $elCaseSizeSimu.on('change blur', function(e) {
        // Get price
        dispPrices();
        // Change Cta URL
        let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), 'bottom');
        console.log(urlInserted);
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
            console.log(tempArrayBand);
            $(`.${namespace}-Simulation_Choice-band-list-elem`).attr('aria-hidden', true);
            tempArrayBand.forEach((elem, i) => {
                console.log(elem);
                const $filteredItems = $elBandSimu.filter(`[value="${elem}"]`);
                console.log($filteredItems);
                $.each($filteredItems, (i, val) => {
                    console.log(val);
                    val.closest(`.${namespace}-Simulation_Choice-band-list-elem`).setAttribute('aria-hidden', false);
                });
                if (i === 0) {
                    $filteredItems.prop('checked', true);
                }
            });
            // <<< display band choice ends

            // Get price
            dispPrices();
            // Change Cta URL
            let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), 'bottom');
            console.log(urlInserted);
            $elCtaSimu.attr('href', urlInserted);
        });
    }
    $elBandSimu.on('change blur', function(e) {
        // Get price
        dispPrices();
        // Change Cta URL
        let urlInserted = switchCtaUrl($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val(), 'bottom');
        console.log(urlInserted);
        $elCtaSimu.attr('href', urlInserted);
    });

    $elOption1.on('change blur', function(e) {
        dispOptionContent();
    });
    $elOption2.on('change blur', function(e) {
        dispOptionContent();
    });
};
simulation();

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
