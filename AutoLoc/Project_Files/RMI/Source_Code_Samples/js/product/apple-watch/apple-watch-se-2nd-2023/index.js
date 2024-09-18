import { priceInfo } from './price-info.js';
import { themeNum } from '../../../common/theme.js';
import { addClassBasedOnSlideCount } from "../../../common/component/carousel";

const namespace = 'product-apple-watch-se-2nd-2023';
const productName = location.pathname.split('/')[3];
let iphoneData = [];

const mainConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
};

let currentCasetype = 'ミッドナイトアルミニウム';
let currentCasetypeSimu = 'ミッドナイトアルミニウム';
const CasetypeToBandTable = {
    'ミッドナイトアルミニウム': ['ミッドナイトスポーツバンド', 'ミッドナイトスポーツループ'],
    'スターライトアルミニウム': ['スターライトスポーツバンド', 'スターライトスポーツループ'],
    'シルバーアルミニウム': ['ストームブルースポーツバンド', 'ウインターブルースポーツループ'],
};

const BandToSizeTable = {
    'ミッドナイトスポーツバンド': ['S/M', 'M/L'],
    'ミッドナイトスポーツループ': ['フリーサイズ'],
    'スターライトスポーツバンド': ['S/M', 'M/L'],
    'スターライトスポーツループ': ['フリーサイズ'],
    'ストームブルースポーツバンド': ['S/M', 'M/L'],
    'ウインターブルースポーツループ': ['フリーサイズ'],
}

const BandSizeText = {
    '40S/M': '130-180',
    '40M/L': '150-200',
    '40フリーサイズ': '130-200',
    '44S/M': '140-190',
    '44M/L': '160-210',
    '44フリーサイズ': '140-245',
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
    console.log(caseSize, caseType, band, size);
    const l_id = position === 'top' ? '&l-id=apple-watch-se_top_bss-apple-watch-se' : '&l-id=apple-watch-se_bottom_bss-apple-watch-se';
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイトアルミニウム':
                result = 'ミッドナイトアルミニウムケース';
                break;
            case 'スターライトアルミニウム':
                result = 'スターライトアルミニウムケース';
                break;
            case 'シルバーアルミニウム':
                result = 'シルバーアルミニウムケース';
                break;
            default:
                result = 'ミッドナイトアルミニウムケース';
        }
        return result;
    };
    const genId = `${caseSize}mm${getCaseMat()}と${band}${size}`;
    let result = '';
    /* original strings
    2023モデル Apple Watch SE（第2世代）- 40mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - S/M
    2023モデル Apple Watch SE（第2世代）- 40mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - M/L
    2023モデル Apple Watch SE（第2世代）- 40mm ミッドナイトアルミニウムケースとミッドナイトスポーツループ
    2023モデル Apple Watch SE（第2世代）- 40mm スターライトアルミニウムケースとスターライトスポーツバンド - S/M
    2023モデル Apple Watch SE（第2世代）- 40mm スターライトアルミニウムケースとスターライトスポーツバンド - M/L
    2023モデル Apple Watch SE（第2世代）- 40mm スターライトアルミニウムケースとスターライトスポーツループ
    2023モデル Apple Watch SE（第2世代）- 40mm シルバーアルミニウムケースとストームブルースポーツバンド - S/M
    2023モデル Apple Watch SE（第2世代）- 40mm シルバーアルミニウムケースとストームブルースポーツバンド - M/L
    2023モデル Apple Watch SE（第2世代）- 40mm シルバーアルミニウムケースとウインターブルースポーツループ
    2023モデル Apple Watch SE（第2世代）-44mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - S/M
    2023モデル Apple Watch SE（第2世代）-44mm ミッドナイトアルミニウムケースとミッドナイトスポーツバンド - M/L
    2023モデル Apple Watch SE（第2世代）-44mm ミッドナイトアルミニウムケースとミッドナイトスポーツループ
    2023モデル Apple Watch SE（第2世代）-44mm スターライトアルミニウムケースとスターライトスポーツバンド - S/M
    2023モデル Apple Watch SE（第2世代）-44mm スターライトアルミニウムケースとスターライトスポーツバンド - M/L
    2023モデル Apple Watch SE（第2世代）-44mm スターライトアルミニウムケースとスターライトスポーツループ
    2023モデル Apple Watch SE（第2世代）-44mm シルバーアルミニウムケースとストームブルースポーツバンド - S/M
    2023モデル Apple Watch SE（第2世代）-44mm シルバーアルミニウムケースとストームブルースポーツバンド - M/L
    2023モデル Apple Watch SE（第2世代）-44mm シルバーアルミニウムケースとウインターブルースポーツループ

    original URLs
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600732&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600733&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600734&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600729&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600730&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600731&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600735&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600736&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600737&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600740&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600741&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600742&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600738&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600739&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600743&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600744&selectAvailable=true
    https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600745&selectAvailable=true
    */
    switch (genId) {
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M'://1
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600732&selectAvailable=true';
            break;
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L'://1
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600733&selectAvailable=true';
            break;
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ'://2
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600734&selectAvailable=true';
            break;
        case '40mmスターライトアルミニウムケースとスターライトスポーツバンドS/M'://3
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600729&selectAvailable=true';
            break;
        case '40mmスターライトアルミニウムケースとスターライトスポーツバンドM/L'://3
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600730&selectAvailable=true';
            break;
        case '40mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ'://4
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600731&selectAvailable=true';
            break;
        case '40mmシルバーアルミニウムケースとストームブルースポーツバンドS/M'://5
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600735&selectAvailable=true';
            break;
        case '40mmシルバーアルミニウムケースとストームブルースポーツバンドM/L'://5
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600736&selectAvailable=true';
            break;
        case '40mmシルバーアルミニウムケースとウインターブルースポーツループフリーサイズ'://6
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600737&selectAvailable=true';
            break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M'://7
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600741&selectAvailable=true';
            break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L'://7
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600742&selectAvailable=true';
            break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ'://8
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600743&selectAvailable=true';
            break;
        case '44mmスターライトアルミニウムケースとスターライトスポーツバンドS/M'://9
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600738&selectAvailable=true';
            break;
        case '44mmスターライトアルミニウムケースとスターライトスポーツバンドM/L'://9
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600739&selectAvailable=true';
            break;
        case '44mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ'://10
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600740&selectAvailable=true';
            break;
        case '44mmシルバーアルミニウムケースとストームブルースポーツバンドS/M'://11
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600744&selectAvailable=true';
            break;
        case '44mmシルバーアルミニウムケースとストームブルースポーツバンドM/L'://11
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600745&selectAvailable=true';
            break;
        case '44mmシルバーアルミニウムケースとウインターブルースポーツループフリーサイズ'://12
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600746&selectAvailable=true';
            break;
        default:
            result = 'https://onboarding.mobile.rakuten.co.jp/equipment-details?exid=600732&selectAvailable=true';
    }
    console.log(result);
    return result;
};

const getCarouselIndex = (caseSize, caseType, band, size) => {
    const getCaseMat = () => {
        let result = 0;
        switch (caseType) {
            case 'ミッドナイトアルミニウム':
                result = 'ミッドナイトアルミニウムケース';
                break;
            case 'スターライトアルミニウム':
                result = 'スターライトアルミニウムケース';
                break;
            case 'シルバーアルミニウム':
                result = 'シルバーアルミニウムケース';
                break;
            default:
                result = 'ミッドナイトアルミニウムケース';
        }
        return result;
    };
    const genId = `${caseSize}mm${getCaseMat()}と${band}${size}`;
    let result = [];

    switch (genId) {
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M'://1
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L'://1
            result = 0;
            break;
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ'://2
            result = 1;
            break;
        case '40mmスターライトアルミニウムケースとスターライトスポーツバンドS/M'://3
        case '40mmスターライトアルミニウムケースとスターライトスポーツバンドM/L'://3
            result = 2;
            break;
        case '40mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ'://4
            result = 3;
            break;
        case '40mmシルバーアルミニウムケースとストームブルースポーツバンドS/M'://5
        case '40mmシルバーアルミニウムケースとストームブルースポーツバンドM/L'://5
            result = 4;
            break;
        case '40mmシルバーアルミニウムケースとウインターブルースポーツループフリーサイズ'://6
            result = 5;
            break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドS/M'://7
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンドM/L'://7
            result = 6;
            break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツループフリーサイズ'://8
            result = 7;
            break;
        case '44mmスターライトアルミニウムケースとスターライトスポーツバンドS/M'://9
        case '44mmスターライトアルミニウムケースとスターライトスポーツバンドM/L'://9
            result = 8;
            break;
        case '44mmスターライトアルミニウムケースとスターライトスポーツループフリーサイズ'://10
            result = 9;
            break;
        case '44mmシルバーアルミニウムケースとストームブルースポーツバンドS/M'://11
        case '44mmシルバーアルミニウムケースとストームブルースポーツバンドM/L'://11
            result = 10;
            break;
        case '44mmシルバーアルミニウムケースとウインターブルースポーツループフリーサイズ'://12
            result = 11;
            break;
        default:
            result = 0;
    }
    return result;
};

const carouselSet = 12;
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
        let priceArray = priceInfo($('[name="casesize-simu"]:checked').val(), currentCasetypeSimu, $('[name="band-simu"]:checked').val());
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

        // se 2023の場合非表示。ultraの場合表示
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
                const $filteredItems = $elBandSimu.filter(`[value="${elem}"]`);
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
};

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
