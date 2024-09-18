import { priceInfo } from './price-info.js';

const namespace = 'product-apple-watch-series7';
// const productName = location.pathname.split('/')[3];
// let iphoneData = [];

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
    'グリーン': ['クローバースポーツバンド'],
    'ブルー': ['アビスブルースポーツバンド'],
    '(PRODUCT)RED': ['(PRODUCT)REDスポーツバンド'],
    'グラファイト': ['グラファイトミラネーゼループ'],
    'シルバー': ['スターライトスポーツバンド', 'シルバーミラネーゼループ'],
    'ゴールド': ['ゴールドミラネーゼループ'],
};
const $elCaseSize = $('[name="casesize"]');
const $elCaseSizeSimu = $('[name="casesize-simu"]');
const $elBand = $('[name="band"]');
const $elBandSimu = $('[name="band-simu"]');
const $elCta = $('#js-apply-btn');
const $elCtaSimu = $('#js-apply-btn-simu');

const switchCtaUrl = (caseSize, caseType, band, position) => {
    console.log(caseSize, caseType, band);
    // const l_id = position === 'top' ? '&l-id=apple-watch-series7_top_bss-apple-watch-series7' : '&l-id=apple-watch-series7_bottom_bss-apple-watch-series7';
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'グリーン':
            case 'ブルー':
            case '(PRODUCT)RED':
            result = 'アルミニウムケース';
            break;
            case 'グラファイト':
            case 'シルバー':
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
    Apple Watch Series 7 - 41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 7 - 41mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 7 - 41mmグリーンアルミニウムケースとクローバースポーツバンド
    Apple Watch Series 7 - 41mmブルーアルミニウムケースとアビスブルースポーツバンド
    Apple Watch Series 7 - 41mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド // to be adjusted
    Apple Watch Series 7 - 45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 7 - 45mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 7 - 45mmグリーンアルミニウムケースとクローバースポーツバンド
    Apple Watch Series 7 - 45mmブルーアルミニウムケースとアビスブルースポーツバンド
    Apple Watch Series 7 - 45mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド // to be adjusted
    Apple Watch Series 7 - 41mmシルバーステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 7 - 45mmシルバーステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 7 - 41mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 7 - 41mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 7 - 41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 7 - 45mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 7 - 45mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 7 - 45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ

    original URLs
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600245
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600246
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600247
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600248
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600249
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600250
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600251
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600252
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600253
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600254
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600269
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600270
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600271
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600272
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600273
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600274
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600287
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600288
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600289
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600290
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600291
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600292
    */
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600245';
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンド'://2
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600246';
        break;
        case '41mmグリーンアルミニウムケースとクローバースポーツバンド'://3
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600247';
        break;
        case '41mmブルーアルミニウムケースとアビスブルースポーツバンド'://4
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600248';
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://5
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600249';
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://6
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600250';
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンド'://7
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600251';
        break;
        case '45mmグリーンアルミニウムケースとクローバースポーツバンド'://8
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600252';
        break;
        case '45mmブルーアルミニウムケースとアビスブルースポーツバンド'://9
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600253';
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://10
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600254';
        break;
        case '41mmシルバーステンレススチールケースとスターライトスポーツバンド'://11
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600269';
        break;
        case '45mmシルバーステンレススチールケースとスターライトスポーツバンド'://14
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600272';
        break;
        case '41mmシルバーステンレススチールケースとシルバーミラネーゼループ'://17
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600287';
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループ'://18
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600288';
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://19
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600289';
        break;
        case '45mmシルバーステンレススチールケースとシルバーミラネーゼループ'://20
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600290';
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループ'://21
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600291';
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://22
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600292';
        break;
        default:
        result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600245';
    }
    return result;
};

const getCarouselIndex = (caseSize, caseType, band) => {
    const getCaseMat = () => {
        let result = 0;
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'グリーン':
            case 'ブルー':
            case '(PRODUCT)RED':
            result = 'アルミニウムケース';
            break;
            case 'グラファイト':
            case 'シルバー':
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
        case '41mmグリーンアルミニウムケースとクローバースポーツバンド'://3
        result = 2;
        break;
        case '41mmブルーアルミニウムケースとアビスブルースポーツバンド'://4
        result = 3;
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://5
        result = 4;
        break;
        case '41mmシルバーステンレススチールケースとスターライトスポーツバンド'://6
        result = 5;
        break;
        case '41mmシルバーステンレススチールケースとシルバーミラネーゼループ'://9
        result = 8;
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループ'://10
        result = 9;
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://11
        result = 10;
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://12
        result = 11;
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンド'://13
        result = 12;
        break;
        case '45mmグリーンアルミニウムケースとクローバースポーツバンド'://14
        result = 13;
        break;
        case '45mmブルーアルミニウムケースとアビスブルースポーツバンド'://15
        result = 14;
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://16
        result = 15;
        break;
        case '45mmシルバーステンレススチールケースとスターライトスポーツバンド'://17
        result = 16;
        break;
        case '45mmシルバーステンレススチールケースとシルバーミラネーゼループ'://20
        result = 19;
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループ'://21
        result = 20;
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://22
        result = 21;
        break;
        default:
        result = 0;
    }
    return result;
};

const carouselSet = 22;
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
for ( let i = 0; i <= colorlength; i++ ) {

    $(`.js-color${i}`).on('click', () => {
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
        $dispPricePre.text('');
        $dispPriceTotal.text('');
        $dispPrice24.text('');
        $dispPrice48.text('');
        $dispPriceTotal.text(addComma(priceArray[0]));
        $dispPricePre.text(addComma(priceArray[3]));
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
    const $dispPricePreWrap = $('.disp-price-pre-wrap');
    const $dispPricePre = $('.disp-price-pre');
    const $dispPrice24 = $('#disp-price-24');
    const $dispPrice48 = $('#disp-price-48');
    const $dispPrice24init = $('#disp-price-24-init');
    const $dispPrice48init = $('#disp-price-48-init');

    const $elOption1 = $('[name="option-1"]');
    const $elOption2 = $('[name="option-2"]');
    const $dispOption = $('#js-disp-option');
    const $secOption = $('#js-disp-option-sec');
    const $dispOptionAppeal = $('#js-disp-option-appeal');

    let priceArrayInit = priceInfo($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val());
    console.log(priceArrayInit);
    $dispPriceTotal.text(addComma(priceArrayInit[0]));
    $dispPrice24.text(addComma(getPrice24(priceArrayInit[1], priceArrayInit[0])));
    $dispPrice48.text(addComma(getPrice48(priceArrayInit[2], priceArrayInit[0])));
    $dispPrice24init.text(addComma(priceArrayInit[1]));
    $dispPrice48init.text(addComma(priceArrayInit[2]));
    dispOptionContent();

    if (typeof priceArrayInit[3] === 'string') {
        $dispPricePreWrap.show();
        $dispPricePre.text(addComma(priceArrayInit[3]));
    }
    else {
        $dispPricePreWrap.hide();
    }

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
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav'),
        appendDots: $self.next('.c-Carousel_Nav')
    }));
});

accessoryCarousel.slick("slickSetOption", "slidesToScroll", 3, true);
accessoryCarousel.slick('slickSetOption', "responsive", [
    {
        breakpoint: 769,
        settings: {
            slidesToScroll: 2,
            slidesToShow: 2
        }
    },
    {
        breakpoint: 415,
        settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
            dots: true,
        }
    }], true
);

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
