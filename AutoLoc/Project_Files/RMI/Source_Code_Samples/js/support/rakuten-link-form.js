import validator from 'validator';
import DOMPurify from 'dompurify';
import 'air-datepicker';
import '../library/datepicker.ja';
import { troubleshooting } from './troubleshooting.js';

// datepicker
const datepickerSet = {
    classes: 'support-substitute-Form_Datepicker',
    language: 'ja',
    autoClose: true,
    navTitles: {
        days: '<i>yyyy</i>年 MM',
        months: 'yyyy 年',
        years: 'yyyy1 年 - yyyy2 年'
    },
    prevHtml: '<span class="c-Icon_Chevron-left"></span>',
    nextHtml: '<span class="c-Icon_Chevron-right"></span>',
    todayButton: new Date(),
    maxDate: new Date()
};

// datepicker - 事象発生日
$('.js-Datepicker').datepicker(datepickerSet);
$('.js-Datepicker').data('datepicker').selectDate(new Date());
$('.js-Datepicker_Btn').on('click', () => {
    $('.js-Datepicker').show();
});


// validation - type
function chkRequired(el) {
    let msgId = `err-required_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    if (validator.isEmpty(el.value, { ignore_whitespace: true })) {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    } else {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    }
}
function chkNumeric(el) {
    let msgId = `err-numeric_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    if (validator.isNumeric(el.value, { no_symbols: true })) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function chkLength(el) {
    let msgId = `err-length_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    let setting = {
        min: isNaN(el.getAttribute('minlength')) ? 0 : parseInt(el.getAttribute('minlength'), 10),
        max: isNaN(el.getAttribute('maxlength')) ? 0 : parseInt(el.getAttribute('maxlength'), 10)
    };
    if (validator.isLength(el.value, setting)) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function chkEmail(el) {
    let msgId = `err-email_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    if (validator.isEmail(el.value)) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function chkConfirmEmail(el) {
    let msgId = `err-match_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    const emailVal = $('[name="00N2r000000gl6J"]').val();
    if( emailVal === el.value ) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function chkAlphanum(el) {
    let msgId = `err-alphanum_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    // if (validator.isAlphanumeric(el.value)) {
    if (validator.matches(el.value, "^[a-zA-Z0-9._-\\s+]*$")) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function validateTarget(target, param) {
    let $target = $(target);
    let item = $target.data('validate');
    let nm = $target.attr('name');
    let $disp = $(`#disp-${nm}`);
    let idx = errors.indexOf(nm);
    let results = 0;

    if (item.indexOf('required') > -1) {
        results += chkRequired(target);
    }
    if (item.indexOf('numeric') > -1) {
        results += chkNumeric(target);
    }
    if (item.indexOf('length') > -1) {
        results += chkLength(target);
    }
    if (item.indexOf('email') > -1) {
        results += chkEmail(target);
    }
    if (item.indexOf('confirmEmail') > -1) {
        results += chkConfirmEmail(target);
    }
    if (item.indexOf('alphanum') > -1) {
        results += chkAlphanum(target);
    }

    if (results > 0) {
        $target.attr('aria-invalid', true);
        if (param === 'chkAll') {
            if (idx < 0) {
                errors.push(nm);
            }
        }
    } else {
        $target.attr('aria-invalid', false);
        if (param === 'chkAll') {
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
    }
}

let errors = [];

// validation - ご契約電話番号
const $el00N2r000000gl6S = $('[name="00N2r000000gl6S"]');
if ($el00N2r000000gl6S) {
    $el00N2r000000gl6S.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 姓
const $el00N2r000000gl6P = $('[name="00N2r000000gl6P"]');
if ($el00N2r000000gl6P) {
    $el00N2r000000gl6P.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 名
const $el00N2r000000gl6N = $('[name="00N2r000000gl6N"]');
if ($el00N2r000000gl6N) {
    $el00N2r000000gl6N.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 事象発生日
const $el00N2r0000021LO8 = $('[name="00N2r0000021LO8"]');
if ($el00N2r0000021LO8) {
    $el00N2r0000021LO8.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 時
const $el00N2r0000021LO9 = $('[name="00N2r0000021LO9"]');
if ($el00N2r0000021LO9) {
    $el00N2r0000021LO9.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 分
const $el00N2r000001lWWS = $('[name="00N2r000001lWWS"]');
if ($el00N2r000001lWWS) {
    $el00N2r000001lWWS.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// OSバージョン
const $el00N2r000001lWVo = $('[name="00N2r000001lWVo"]');
if ($el00N2r000001lWVo) {
    $el00N2r000001lWVo.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// メーカー名
const $el00N2r000001lWVt = $('[name="00N2r000001lWVt"]');
if ($el00N2r000001lWVt) {
    $el00N2r000001lWVt.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// 製品名
const $el00N2r000001lWVy = $('[name="00N2r000001lWVy"]');
if ($el00N2r000001lWVy) {
    $el00N2r000001lWVy.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// Rakuten Linkアプリバージョン
const $el00N2r000001lWW3 = $('[name="00N2r000001lWW3"]');
if ($el00N2r000001lWW3) {
    $el00N2r000001lWW3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 通信エリア
const $el00N2r000001lWW8 = $('[name="00N2r000001lWW8"]');
if ($el00N2r000001lWW8) {
    $el00N2r000001lWW8.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// LTE回線の強度
const $el00N2r000001lWWD = $('[name="00N2r000001lWWD"]');
if ($el00N2r000001lWWD) {
    $el00N2r000001lWWD.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 相手先電話番号
const $el00N2r0000021LO5 = $('[name="00N2r0000021LO5"]');
if ($el00N2r0000021LO5) {
    $el00N2r0000021LO5.on('change blur', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);

        if ($target.val()) {
            validateTarget(this, param);
        } else {
            $target.attr('aria-describedBy', '');
            $('#err-numeric_00N2r0000021LO5').attr('aria-hidden', true);
            $('#err-length_00N2r0000021LO5').attr('aria-hidden', true);
            $target.attr('aria-invalid', false);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            if($target.val() == '') {
                $disp.text('-');
            } else {
                $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
            }
        }
    });
}

// validation - 相手先キャリア
const $el00N2r0000021LO4 = $('[name="00N2r0000021LO4"]');
if ($el00N2r0000021LO4) {
    $el00N2r0000021LO4.on('change', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        if($target.val()) {
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        } else {
            $disp.text('-');
        }
    });
}

// validation - 連絡用メールアドレス
const $el00N2r000000gl6J = $('[name="00N2r000000gl6J"]');
if ($el00N2r000000gl6J) {
    $el00N2r000000gl6J.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 確認用メールアドレス
const $elConfirmEmail = $('[name="confirm-email"]');
if ($elConfirmEmail) {
    $elConfirmEmail.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 連絡用電話番号
const $el00N2r000000gl6K = $('[name="00N2r000000gl6K"]');
if ($el00N2r000000gl6K) {
    $el00N2r000000gl6K.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - お問い合わせの詳細
const $el00N2r0000021LO3 = $('[name="00N2r0000021LO3"]');
if ($el00N2r0000021LO3) {
    $el00N2r0000021LO3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}


// check
function chkAll() {
    // ご契約電話番号
    if ($el00N2r000000gl6S) {
        $el00N2r000000gl6S.trigger('change', ['chkAll']);
    }
    // 姓
    if ($el00N2r000000gl6P) {
        $el00N2r000000gl6P.trigger('change', ['chkAll']);
    }
    // 名
    if ($el00N2r000000gl6N) {
        $el00N2r000000gl6N.trigger('change', ['chkAll']);
    }
    // 事象発生日
    if ($el00N2r0000021LO8) {
        $el00N2r0000021LO8.trigger('change', ['chkAll']);
    }
    // 時
    if ($el00N2r0000021LO9) {
        $el00N2r0000021LO9.trigger('change', ['chkAll']);
    }
    // 分
    if ($el00N2r000001lWWS) {
        $el00N2r000001lWWS.trigger('change', ['chkAll']);
    }
    // OSバージョン
    if ($el00N2r000001lWVo) {
        $el00N2r000001lWVo.trigger('change', ['chkAll']);
    }
    // メーカー名
    if ($el00N2r000001lWVt) {
        $el00N2r000001lWVt.trigger('change', ['chkAll']);
    }
    // 製品名
    if ($el00N2r000001lWVy) {
        $el00N2r000001lWVy.trigger('change', ['chkAll']);
    }
    // Linkアプリバージョン
    if ($el00N2r000001lWW3) {
        $el00N2r000001lWW3.trigger('change', ['chkAll']);
    }
    // 通信エリア
    if ($el00N2r000001lWW8) {
        $el00N2r000001lWW8.trigger('change', ['chkAll']);
    }
    // LTE回線の強度
    if ($el00N2r000001lWWD) {
        $el00N2r000001lWWD.trigger('change', ['chkAll']);
    }
    // 相手先電話番号
    if ($el00N2r0000021LO5) {
        $el00N2r0000021LO5.trigger('change', ['chkAll']);
    }
    // 相手先キャリア
    if ($el00N2r0000021LO4) {
        $el00N2r0000021LO4.trigger('change', ['chkAll']);
    }
    // 連絡用メールアドレス
    if ($el00N2r000000gl6J) {
        $el00N2r000000gl6J.trigger('change', ['chkAll']);
    }
    // 確認用メールアドレス
    if ($elConfirmEmail) {
        $elConfirmEmail.trigger('change', ['chkAll']);
    }
    // 連絡用電話番号
    if ($el00N2r000000gl6K) {
        $el00N2r000000gl6K.trigger('change', ['chkAll']);
    }
    // お問い合わせの詳細
    if ($el00N2r0000021LO3) {
        $el00N2r0000021LO3.trigger('change', ['chkAll']);
    }
    return errors;
}

// confirm button - agree check
const agreecheck = document.getElementsByName('agree')[0];
const confirmBtn = document.getElementById('js-rakutenlink_Confirm');

agreecheck.addEventListener('change', (e) => {
    if( agreecheck.checked ) {
        confirmBtn.setAttribute('aria-disabled', false);
        confirmBtn.disabled = false;
    } else {
        confirmBtn.setAttribute('aria-disabled', true);
        confirmBtn.disabled = true;
    }
});

// modal set
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

// confirm button
document.getElementById('js-rakutenlink_Confirm').addEventListener('click', (e) => {
    chkAll();
    if (errors.length === 0) {
        $('#modal-confirm').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('[aria-invalid="true"]').eq(0).offset().top}, 400, 'swing');
    }
});

// modal close button
document.getElementById('js-rakutenlink_Confirm-close').addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
    $('body,html').animate({scrollTop: $('#js-rakutenlink_Form-content').offset().top}, 400, 'swing');
});

// submit form
document.getElementById('js-rakutenlink_Submit').addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-rakutenlink_Form').submit();
});

// reset for browser back
window.onpageshow = function() {
    $('input[type="radio"]').prop('checked', false);
    $('input[type="checkbox"]').prop('checked', false);
};

// select - diagnosis
const question01 = $('#js-question-01');
const question02 = $('#js-question-02');
const question03 = $('#js-question-03');
const question04 = $('#js-question-04');
const question05 = $('#js-question-05');
const questionEnd = $('#js-question-end');
const contentWrap = $('#js-content-wrap');
const contentTop = $('#js-content-wrap').offset().top;
const backContents = $('.js-back');
// let anotherForm = false;

// solution
const solution = $('#js-solution');
const solutionAndroid = $('#js-solution-android');
const solutionIos = $('#js-solution-ios');
const solutionDesktop = $('#js-solution-desktop');
const formdisplay = $('#js-form-display');
const gotoform = document.getElementsByName('gotoform')[0];

// os select flag
let osFlag = { ios: false, android: false, desktop: false };

// faq
const faq = $('#js-faq');

// gotoform button - check
gotoform.addEventListener('change', (e) => {
    if( gotoform.checked ) {
        formdisplay.attr('aria-disabled', false);
        formdisplay.disabled = false;
    } else {
        formdisplay.attr('aria-disabled', true);
        formdisplay.disabled = true;
    }
});

// gotoform
formdisplay.on('click', function(e){
    e.preventDefault();
    solution.attr('aria-hidden', 'true');
    faq.attr('aria-hidden', 'true');
    formDisplay();
});

// form display
function formDisplay () {
    $('#js-rakutenlink_Form-content').attr('aria-hidden', 'false');

    // if(anotherForm) {
    //     $('.js-hidden').css('display','none');
    //     $el00N2r000001lWW8.data('validate', '');
    // } else {
    //     if (window.matchMedia( "(min-width: 769px)" ).matches) {
    //         $('.js-hidden').css('display','flex');
    //     } else {
    //         $('.js-hidden').css('display','block');
    //     }
    //     $el00N2r000001lWW8.data('validate', 'required');
    // }

    contentWrap.css({ 'padding' : 0,'background-color': 'white' });
    const q1 = $('#js-question-01').find('.js-radio:checked').val();
    const q2 = $('#js-question-02').find('.js-radio:checked').val();
    const q3 = $('#js-question-03').find('.js-radio:checked').val();
    const q3str =  $('#js-question-03').find('.js-radio:checked').data('q');
    const q4 = $('#js-question-04').find('.js-radio:checked').val();
    const q5 = $('#js-question-05').find('.js-radio:checked').val();
    const confirm1 = $('#result-confirm1');
    const confirm2 = $('#result-confirm2');
    const h1Top = $('h1').offset().top;
    const result_tmp = [ q1, q2, q3, q4, q5 ];
    const result = result_tmp.filter(v => v);

    let html1 = [];
    let html2 = [];
    const isDesktop = result[0] === 'デスクトップ'

    for (let i = 0; i < result.length; i++) {
        const titleNo = i +1;
        let title1 = '';
        let title2 = '';
        if( i == 0 ) {
            title1 = 'ご利用のOSをお選びください。';
            title2 = 'ご利用のOS';
        } else if ( i == 1 ) {
            title1 = isDesktop ? 'Rakuten Link スマートフォン版でご利用のOSをお選びください。' : 'アプリに関してお困りの内容をお選びください。';
            title2 = isDesktop ? 'Rakuten Link スマートフォン版でご利用のOS' : 'アプリに関してお困りの内容';
        } else if ( i == 2 ) {
            title1 = isDesktop ? 'アプリに関してお困りの内容をお選びください。' : result[i -1] + 'に関する詳細をお選びください。';
            title2 = isDesktop ? 'アプリに関してお困りの内容' : result[i -1] ;
        }
        else {
            if (
                q3str === 'q31' ||
                q3str === 'q32' ||
                osFlag.android && q3str === 'q33' ||
                osFlag.android && q3str === 'q34'
            ) {
                title1 = '表示されるエラー画面のメッセージをお選びください';
                title2 = '表示されるエラー画面のメッセージ';
            } else {
                title1 = result[i -1] + 'に関する詳細をお選びください。';
                title2 = result[i -1] ;
            }
        }
        html1.push(
            '<p class="c-Txt_Emp-01">Q'+ titleNo + '.' + title1 +'</p>',
            '<p class="u-Adjust_Mt-8 u-Adjust_Mb-24">'+ DOMPurify.sanitize(result[i], {ALLOWED_TAGS: []}) +'</p>'
        );
        html2.push(
            '<div class="<%= namespace %>-Form_Item-area js-rakutenlink_Item-area">',
            '<dt>'+ title2 +'</dt>',
            '<dd><p class="u-Adjust_Txt-break">'+ DOMPurify.sanitize(result[i], {ALLOWED_TAGS: []}) +'</p></dd></div>'
        );
    }

    confirm1.html(html1.join(''));
    confirm2.html(html2.join(''));
    const subject = $('[name="subject"]').val();
    const retURL = $('[name="retURL"]').val();
    const orgid = $('[name="retURL"]').val();
    DOMPurify.sanitize(subject, {ALLOWED_TAGS: []});
    DOMPurify.sanitize(retURL, {ALLOWED_TAGS: []});
    DOMPurify.sanitize(orgid, {ALLOWED_TAGS: []});
    $(window).scrollTop(h1Top);
}

// form reset
function formContentReset() {
    const formContent = $('#js-rakutenlink_Form-content');
    formContent.attr('aria-hidden', 'true');
    formContent.find('input[type="text"], select, textarea').val('');
    formContent.find('input[type="text"], select, textarea').attr('aria-invalid', false);
    agreecheck.checked = '';
    confirmBtn.setAttribute('aria-disabled', true);
    confirmBtn.disabled = true;
    contentWrap.css({ 'padding' : '24px 0', 'background-color': '#f7f7f7' });
    gotoform.checked = '';
    formdisplay.attr('aria-disabled', true);
    formdisplay.disabled = true;
    const errorId = 'err-';
	const element = document.getElementsByTagName('p');
	const matchObj= new RegExp(errorId);
    for (let i = 0; i < element.length; i++ ) {
        if( element[i].id.match(matchObj) ){
			element[i].setAttribute('aria-hidden', 'true');
		}
    }
    $('.js-Datepicker').data('datepicker').selectDate(new Date());
}

$(window).on('load', function() {

const contentsLoad = $('#js-contents-load');
contentsLoad.addClass('js-active');

function osCheck() {
    const osClassMap = {
        ios: 'js-ios',
        android: 'js-android',
        desktop: 'js-desktop',
    };

    let currentOs;
    for (const os in osFlag) {
        if (osFlag[os]) {
            currentOs = os
        }
    }
    return osClassMap[currentOs];
}

// question01
question01.find('.js-radio').on('click', function() {
    if ($(this).val() === 'iOS') {
        osFlag = { ios: true, android: false, desktop: false };
        question02.find('h2').text('アプリに関してお困りの内容をお選びください。');
        $('.js-ios').attr('aria-hidden','false');
        $('.js-android').attr('aria-hidden','true');
        $('.js-desktop').attr('aria-hidden','true');
    } else if ($(this).val() === 'Android') {
        osFlag = { ios: false, android: true, desktop: false };
        question02.find('h2').text('アプリに関してお困りの内容をお選びください。');
        $('.js-ios').attr('aria-hidden','true');
        $('.js-android').attr('aria-hidden','false');
        $('.js-desktop').attr('aria-hidden','true');
    } else if ($(this).val() === 'デスクトップ') {
        osFlag = { ios: false, android: false, desktop: true };
        question02.find('h2').text('Rakuten Link スマートフォン版でご利用のOSをお選びください。');
        $('.js-ios').attr('aria-hidden','true');
        $('.js-android').attr('aria-hidden','true');
        $('.js-desktop').attr('aria-hidden','false');
    }
    question01.attr('aria-hidden','true');
    question02.attr('aria-hidden','false');
    $(window).scrollTop(contentTop);
});

// question02
question02.find('.js-radio').on('click', function() {
    const value = $(this).val();
    const show = $(this).data('q');
    // anotherForm = false;
    // if(show === 'q22') {
    //     anotherForm = true;
    // }
    question02.attr('aria-hidden','true');
    question03.attr('aria-hidden','false');

    const _title = (osCheck() === 'js-desktop' ? 'アプリに関してお困りの内容をお選びください。' : value + 'に関する詳細をお選びください。');
    question03.find('h2').text(_title);
    question03.find('li').each(function() {
        const $this = $(this);
        const showOs = $this.hasClass(osCheck());
        if ( $this.data('show') === show  && showOs ) {
            if( $this.find('.js-radio').val() == '' ) {
                question03.find('h2').empty();
                $this.attr('aria-hidden','true');
                troubleshooting(show);
            } else {
                $this.attr('aria-hidden','false');
                $(window).scrollTop(contentTop);
            }
        } else {
            $this.attr('aria-hidden','true');
        }
    });
});

// question03
question03.find('.js-radio').on('click', function() {
    const value = $(this).val();
    const show = $(this).data('q');
    question03.attr('aria-hidden','true');
    question04.attr('aria-hidden','false');
    if(
        show === 'q31' ||
        show === 'q32' ||
        osFlag.android && show === 'q33' ||
        osFlag.android && show === 'q34'
    ) {
        question04.find('h2').text('表示されるエラー画面のメッセージをお選びください。');
    } else {
        question04.find('h2').text(value + 'に関する詳細をお選びください。');
    }

    question04.find('li').each(function() {
        const $this = $(this);
        const showOs = $this.hasClass(osCheck());
        if ( $this.data('show') === show && showOs ) {
            if( $this.find('.js-radio').val() == '' ) {
                question04.find('h2').empty();
                $this.attr('aria-hidden','true');
                console.log({question04},  $this.attr)
                troubleshooting(show);
            } else {
                $this.attr('aria-hidden','false');
                $(window).scrollTop(contentTop);
            }
        } else {
            $this.attr('aria-hidden','true');
        }
    });
});

// question04
question04.find('.js-radio').on('click', function() {
    const value = $(this).val();
    const show = $(this).data('q');
    question04.attr('aria-hidden','true');
    question05.attr('aria-hidden','false');
    question05.find('h2').text(value + 'に関する詳細をお選びください。');
    question05.find('li').each(function() {
        const $this = $(this);
        const showOs = $this.hasClass(osCheck());
        if ( $this.data('show') === show && showOs ) {
            if( $this.find('.js-radio').val() == '' ) {
                question05.find('h2').empty();
                $this.attr('aria-hidden','true');
                troubleshooting(show);
            } else {
                $this.attr('aria-hidden','false');
                $(window).scrollTop(contentTop);
            }
        } else {
            $this.attr('aria-hidden','true');
        }
    });

});

// question05
question05.find('.js-radio').on('click', function() {
    const show = $(this).data('q');
    question05.attr('aria-hidden','true');
    questionEnd.attr('aria-hidden','false');
    troubleshooting(show);
});

// back contents
backContents.on('click', function(e) {
    e.preventDefault();
    const $this = $(this);
    const contentsId =$this.attr('href').split('#')[1];
    const accordionTrigger = $('.js-Accordion_Trigger');
    const accordionPanel = $('.js-Accordion_Panel');
    const thisQestion = $this.closest('.js-question');
    thisQestion.attr('aria-hidden', 'true');
    $('#' + contentsId).find('input[type="radio"]').prop('checked', false);
    $('#' + contentsId).attr('aria-hidden', 'false');
    solution.attr('aria-hidden', 'true');
    solutionAndroid.attr('aria-hidden', 'true');
    solutionAndroid.children('div').attr('aria-hidden', 'true');
    solutionIos.attr('aria-hidden', 'true');
    solutionIos.children('div').attr('aria-hidden', 'true');
    solutionDesktop.attr('aria-hidden', 'true');
    solutionDesktop.children('div').attr('aria-hidden', 'true');
    accordionTrigger.attr('aria-expanded', 'false');
    accordionPanel.attr('aria-hidden', 'true');
    faq.attr('aria-hidden', 'true');
    faq.children('div').attr('aria-hidden', 'true');
    formContentReset();
});

});
