import DOMPurify from 'dompurify';
import 'air-datepicker';
import '../../../library/datepicker.ja';

const $form = $('#js-hikari-installation-date_Form');
const $AdressList = $('#js-hikari-Adress_List');
const $Adress = $AdressList.find('input[name="00N2u0000015xtx"]');
const $lineSelectorList = $('#js-hikari-line_selector_List');
const $lineSelector = $lineSelectorList.find('input[name="00N2u0000015xu2"]');
const $typeConsentList = $('#js-hikari-type-consent_List');
const $typeConsent = $typeConsentList.find('.js-hikari-type-consent');
const $typeConsentClass = $('.type_consent');
const $typeConsentNone = $('#type_consent_none');
const $typeConsentNoneCheck = $('#type_consent_none_check');
const $addServiceList = $('#js-hikari-add-service-list');
const $AddService = $addServiceList.find('.js-hikari-add-service');
const $calenderList = $('#js-hikari-calender-list');
const $calender = $('input[name="00N2u0000015xuH"]');
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};

$('#modal-confirm').modaal(modalConfig);

let days = 13;

// datepicker
function startDate() {
    const date = new Date();
    const p_holiday2021 = ["12/28","12/29","12/30","12/31"];
    const p_holiday2022 = ["1/1","1/2","1/3","1/10","2/11","2/23","3/21","4/29","5/3","5/4","5/5","7/18","8/11","9/19","9/23","10/10","11/3","11/23"];
    const start = days;
    let n = 1;
    let holiday = false;
    let y = date.getFullYear();
    let m = date.getMonth() +1;
    let d = date. getDate();
    let w = date.getDay();

    for ( let i = 0; i < start ; i++ ) {
        do {
            holiday = false;
            date.setTime(date.getTime() + ( n * 24 * 3600 * 1000));

            y = date.getFullYear();
            m = date.getMonth() +1;
            d = date. getDate();
            w = date.getDay();

            if (( w == 0 ) || ( w == 6 )) {
                holiday = true;
            }
            if( date.getFullYear() === 2021 ) {
                for ( let j = 0; j < p_holiday2021.length; j++ ) {
                    if (( m + "/" + d ) == p_holiday2021[j]) {
                        holiday = true;
                    }
                }
            }
            if( date.getFullYear() === 2022 ) {
                for ( let j = 0; j < p_holiday2022.length; j++ ) {
                    if (( m + "/" + d ) == p_holiday2022[j]) {
                        holiday = true;
                    }
                }
            }
        } while (holiday);
    }
    const start_date = y + "/" + m + "/" + d;
    console.log(start + "日営業日後の" + start_date + "から");
    return start_date;
}

function maxDate() {
    const date = new Date(startDate());
    const max = 45;
    date.setDate(date.getDate() + max -1);
    const max_date = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" +  date.getDate() ;
    console.log(max + "日の" + max_date + "までです");
    return max_date;
}

const disabledDays = [
    '2021/12/28',
    '2021/12/29',
    '2021/12/30',
    '2021/12/31',
    '2022/1/1',
    '2022/1/2',
    '2022/1/3'
];

$calender.on('click', function () {
    console.log('calendar');
    const datepickerSet = {
        classes: 'hikari-installation-date-Form_Datepicker',
        language: 'ja',
        autoClose: true,
        navTitles: {
            days: '<i>yyyy</i>年 MM',
            months: 'yyyy 年',
            years: 'yyyy1 年 - yyyy2 年'
        },
        prevHtml: '<span class="c-Icon_Chevron-left"></span>',
        nextHtml: '<span class="c-Icon_Chevron-right"></span>',
        todayButton: false,
        startDate: new Date(startDate()),
        minDate: new Date(startDate()),
        maxDate: new Date(maxDate()),
        onRenderCell: function (date, cellType) {
            if (cellType == 'day') {
                const y = date.getFullYear();
                const m = date.getMonth() +1;
                const d = date. getDate();
                const days =  y + "/" + m + "/" + d;
                const isDisabled = disabledDays.indexOf(days) != -1;
                return {
                    disabled: isDisabled
                };
            }
        }
    };

    $('.js-Datepicker').datepicker(datepickerSet);
});


$lineSelector.on('change', function() {

    if ($('[name="00N2u0000015xu2"]:checked').val() === '光回線を利用していない') {
        $typeConsentNone.attr('aria-hidden', false);
    } else {
        $typeConsentNone.attr('aria-hidden', true);
        $typeConsentClass.attr('aria-invalid', false);
        $('[name="type_consent_none"]:checked').prop('checked', false);
        $('[name="type_consent"]').removeAttr('disabled', 'disabled');
    }
});
$typeConsent.on('change', function() {
    if ($typeConsentNoneCheck.prop('checked')) {
        $typeConsentClass.attr('aria-invalid', true);
        $('[name="type_consent"]').attr('disabled', 'disabled');
        $('[name="type_consent"]:checked').prop('checked', false);
    } else {
        $typeConsentClass.attr('aria-invalid', false);
        $('[name="type_consent"]').removeAttr('disabled', 'disabled');
    }
});

$AddService.on('change', function() {
    $('.js-Datepicker').datepicker().data('datepicker').clear();
    if ($('[name="add-service"]:checked').val() === 'フレッツ・テレビ' || $('[name="add-service"]:checked').val() === 'ひかり電話' ) {
        console.log(17);
        days = 17;
    } else {
        console.log(13);
        days = 13;
    }
});

$('#js-hikari-installation-date_Confirm').on('click', function() {
    allClear();

    let $checkAdress = $Adress.filter(':checked');
    let $chceckLineSelector = $lineSelector.filter(':checked');
    let $checktypeConsent = $typeConsent.filter(':checked');
    let $checkAddService = $AddService.filter(':checked');

    if ($checkAdress.length === 0) {
        $Adress.attr('aria-invalid', true);
        $AdressList.prepend('<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error1">選択してください。</p>');
    } else if($checkAdress.length > 0) {
        $Adress.attr('aria-invalid', false);
    }

    if ($chceckLineSelector.length === 0) {
        $lineSelector.attr('aria-invalid', true);
        $lineSelectorList.prepend('<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error2">選択してください。</p>');
    } else {
        $lineSelector.attr('aria-invalid', false);
    }

    if ($checktypeConsent.length === 0) {
        $typeConsent.attr('aria-invalid', true);
        $typeConsentList.before('<p class="c-Form_Txt-error u-Adjust_Mt-24 u-Adjust_Mb-16 js-error3">選択してください。</p>');
    } else {
        $typeConsent.attr('aria-invalid', false);
    }

    // 現在利用している光コンセントの種類
    const $typeConsentVal = $('[name="00N2u0000015xu7"]');
    let typeConsentValList = [];
    if( $checktypeConsent.length > 0) {
        for (let i = 0; i < $checktypeConsent.length; i++) {
            typeConsentValList.push($checktypeConsent.eq(i).data('type-consent'));
        }
    }
    $typeConsentVal.val(DOMPurify.sanitize(typeConsentValList.join(','), {ALLOWED_TAGS: []}));

    // 追加で希望するサービス
    const $AddServiceVal = $('[name="00N2u0000015xuC"]');
    let AddServiceValList = [];
    if( $checkAddService.length > 0) {
        for (let i = 0; i < $checkAddService.length; i++) {
            AddServiceValList.push($checkAddService.eq(i).data('add-service'));
        }
    }
    $AddServiceVal.val(DOMPurify.sanitize(AddServiceValList.join(','), {ALLOWED_TAGS: []}));

    if ($calender.val() !== '')  {
        $calender.attr('aria-invalid', false);
    } else {
        $calender.attr('aria-invalid', true);
        $calenderList.prepend('<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error4">選択してください。</p>');
    }

    if ($('.js-error1').length > 0) {
        $('html, body').animate({scrollTop: $('.js-error1').offset().top}, 400, 'swing');
    } else if ($('.js-error2').length > 0){
        $('html, body').animate({scrollTop: $('.js-error2').offset().top}, 400, 'swing');
    } else if ($('.js-error3').length > 0){
        $('html, body').animate({scrollTop: $('.js-error3').offset().top}, 400, 'swing');
    } else if ($('.js-error4').length > 0){
        $('html, body').animate({scrollTop: $('.js-error4').offset().top}, 400, 'swing');
    } else {
        let str = '';

        str += `<div class="hikari-installation-date-Form_Confirm">
        <dt>楽天ひかり機器発送先住所</dt>
        <dd>
        <p>${DOMPurify.sanitize($('[name="00N2u0000015xtx"]:checked').val(), {ALLOWED_TAGS: []})}</p>
        </dd>
        </div>`;


        str += `<div class="hikari-installation-date-Form_Confirm">
        <dt>現在利用している光回線</dt>
        <dd>
        <p>${DOMPurify.sanitize($('[name="00N2u0000015xu2"]:checked').val(), {ALLOWED_TAGS: []})}</p>
        </dd>
        </div>`;

        str += `<div class="hikari-installation-date-Form_Confirm">
        <dt>ご利用場所の光コンセントの種類</dt>
        <dd>`;

        if ($checktypeConsent.length !== 0) {
            $checktypeConsent.each(function() {
                str += `<p class="u-Adjust_Mb-8">${DOMPurify.sanitize($(this).attr('data-type-consent'), {ALLOWED_TAGS: []})}</p>` ;
                str += `<img class="u-Adjust_Mb-8" src="/assets/img/hikari/installation-date/img-${DOMPurify.sanitize($(this).attr('data-type-consent-img'), {ALLOWED_TAGS: []})}.png?210915" alt="">` ;
            });
        }

        str += `</dd>
        </div>`;

        if ($checkAddService.length !== 0) {
        str += `<div class="hikari-installation-date-Form_Confirm">
        <dt>追加で希望するサービス</dt>
        <dd>`;
            $checkAddService.each(function() {
                str += `<p class="u-Adjust_Mb-8">${DOMPurify.sanitize($(this).attr('data-add-service'), {ALLOWED_TAGS: []})}</p>` ;
            });
        }

        str += `</dd>
        </div>`;

        str += `<div class="hikari-installation-date-Form_Confirm">
        <dt>工事希望日</dt>
        <dd>
        <p>${DOMPurify.sanitize($('[name="00N2u0000015xuH"]').val(), {ALLOWED_TAGS: []})}</p>
        </dd>
        </div>`;

        $('#js-hikari-installation-date_Confirm-content').html(str);
        $('#modal-confirm').modaal('open');
    }

});

// confirm button - agree check
const agreecheck = document.getElementsByName('agree')[0];
const confirmBtn = document.getElementById('js-hikari-installation-date_Confirm');

agreecheck.addEventListener('change', (e) => {
    if( agreecheck.checked ) {
        confirmBtn.setAttribute('aria-disabled', false);
        confirmBtn.disabled = false;
    } else {
        confirmBtn.setAttribute('aria-disabled', true);
        confirmBtn.disabled = true;
    }
});

$('#js-hikari-installation-date_Submit').on('click', function() {
    let params = window.location.search.substring(1);
    if (params) {
        params = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    }
    $('[name="00N2u0000015cmC"]').val(params['number_resent']);

    $form.submit();
});

$('#js-hikari-installation-date_Confirm-close').on('click', function() {
    $('#modal-confirm').modaal('close');
});

$Adress.on('change blur', function() {
    clear1();
    $Adress.attr('aria-invalid', false);
});

$lineSelector.on('change blur', function() {
    clear2();
    $lineSelector.attr('aria-invalid', false);
});

$typeConsent.on('change blur', function() {
    clear3();
    $typeConsent.attr('aria-invalid', false);
});

$calender.on('change blur', function() {
    clear4();
    $calender.attr('aria-invalid', false);
});

function allClear() {
    let $error1 = $('.js-error1');
    let $error2 = $('.js-error2');
    let $error3 = $('.js-error3');
    let $error4 = $('.js-error4');
    let $input = $form.find('input[type="text"]');

    if ($error1) {
        $error1.remove();
    }
    if ($error2) {
        $error2.remove();
    }
    if ($error3) {
        $error3.remove();
    }
    if ($error4) {
        $error4.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}

function clear1() {
    let $error1 = $('.js-error1');
    let $input = $form.find('input[type="text"]');

    if ($error1) {
        $error1.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}

function clear2() {
    let $error2 = $('.js-error2');
    let $input = $form.find('input[type="text"]');

    if ($error2) {
        $error2.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}

function clear3() {
    let $error3 = $('.js-error3');
    let $input = $form.find('input[type="text"]');

    if ($error3) {
        $error3.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}

function clear4() {
    let $error4 = $('.js-error4');
    let $input = $form.find('input[type="text"]');

    if ($error4) {
        $error4.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}
