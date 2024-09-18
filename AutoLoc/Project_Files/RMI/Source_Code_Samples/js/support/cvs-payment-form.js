import validator from 'validator';
import DOMPurify from 'dompurify';
import 'air-datepicker';
import '../library/datepicker.ja';

const chkIdentification = document.getElementById('js-chk-identification');
const btnIdentification = document.getElementById('js-btn-identification');
const inputForm = document.getElementById('js-input-form');
const chkNotes = document.getElementById('js-chk-notes');
const chkPrivacy = document.getElementById('js-chk-privacy');
const btnConfirmation = document.getElementById('js-btn-confirmation');
let isFormDisplayStatus = false;

const activateSubmitBtn  = () => {
    const requiredElmChecked =  chkIdentification.checked && chkNotes.checked && chkPrivacy.checked;
    if( requiredElmChecked ) {
        btnConfirmation.setAttribute('aria-disabled', 'false');
    } else {
        btnConfirmation.setAttribute('aria-disabled', 'true');
    }
}

chkIdentification.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if( isChecked ) {
        chkNotes.removeAttribute('disabled');
    } else {
        chkNotes.setAttribute('disabled', true);
        chkNotes.checked = false;
        btnIdentification.setAttribute('aria-disabled', 'true');
    }
    isFormDisplayStatus && activateSubmitBtn();
})

chkNotes.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
        btnIdentification.setAttribute('aria-disabled', 'false');
    }else {
        btnIdentification.setAttribute('aria-disabled', 'true');
    }
    isFormDisplayStatus && activateSubmitBtn();
})

btnIdentification.addEventListener('click', (e) => {
    inputForm.setAttribute('aria-hidden', 'false');
    e.target.style.display = 'none';
    isFormDisplayStatus = true;
})

chkPrivacy.addEventListener('change', (e) => activateSubmitBtn());

const el00N2r000000l75o = document.getElementById('00N2r000000l75o');
const el00N2r000001uRyW = document.getElementById('00N2r000001uRyW');
const el00N2r000000l7x7 = document.getElementById('00N2r000000l7x7');
const el00N2r000000l7x2 = document.getElementById('00N2r000000l7x2');
const el00N2r000000l75K = document.getElementById('00N2r000000l75K');
const inputBilling = document.getElementById('js-input-billing');

el00N2r000000l75o.onchange = function() {
    if( el00N2r000000l75o.checked ) {
        inputBilling.style.display = 'none';
        el00N2r000000l7x2.value = el00N2r000000l7x7.value;
        el00N2r000000l75K.value = el00N2r000001uRyW.value;
    } else {
        inputBilling.style.display = 'block';
        el00N2r000000l7x2.value = '';
        el00N2r000000l75K.value = '';
    }
}

// datepicker
const datepickerSet = {
    classes: 'cvs-payment-form-Form_Datepicker',
    language: 'ja',
    autoClose: true,
    navTitles: {
        days: '<i>yyyy</i>年 MM',
        months: 'yyyy 年',
        years: 'yyyy1 年 - yyyy2 年'
    },
    prevHtml: '<span class="c-Icon_Chevron-left"></span>',
    nextHtml: '<span class="c-Icon_Chevron-right"></span>',
    todayButton: new Date()
};

// validation - type
function chkRequired(el) {
    let msgId = `err-required_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    let chkFlg = false;
    if(el.getAttribute('type') === 'checkbox') {
        chkFlg = !$(el).prop('checked');
    } else {
        chkFlg = validator.isEmpty(el.value, { ignore_whitespace: true });
    }
    if (chkFlg) {
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

// validation - full width half width
function chkFHWidth(el) {
    let msgId1 = `err-fhwdth_${el.getAttribute('name')}`;
    let msgId2 = `err-numeric_${el.getAttribute('name')}`;
    let msgId3 = `err-exception_${el.getAttribute('name')}`;
    let msg1 = document.getElementById(msgId1);
    let msg2 = document.getElementById(msgId2);
    let msg3 = document.getElementById(msgId3);
    if(validator.isAlphanumeric(el.value)||el.value.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/)) {
        el.setAttribute('aria-describedBy', '');
        msg1.setAttribute('aria-hidden', true);
        msg2.setAttribute('aria-hidden', true);
        msg3.setAttribute('aria-hidden', true);
        return 0;
    } else {
        if(el.value.match(/^[ｧ-ﾝﾞﾟ]*$/)) {
            el.setAttribute('aria-describedBy', msgId1);
            msg1.setAttribute('aria-hidden', false);
        }
        else if(el.value.match(/^[Ａ-Ｚ]*$/)) {
            el.setAttribute('aria-describedBy', msgId2);
            msg2.setAttribute('aria-hidden', false);
        } else {
            el.setAttribute('aria-describedBy', msgId3);
            msg3.setAttribute('aria-hidden', false);
        }

        return 1;
    }
}

// validation - kana
function chkKana(el) {
    let msgId = `err-kana_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);

    if(el.value.match(/^[\u30a0-\u30ff]+$/)) {
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
    if (item.indexOf('fhwdth') > -1) {
        results += chkFHWidth(target);
    }
    if (item.indexOf('kana') > -1) {
        results += chkKana(target);
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


const datepickerSetBirth = {
    classes: 'inquiry-Form_Datepicker',
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
    view: 'years',
};

// datepicker - 生年月日
$('.js-Datepicker2').datepicker(datepickerSetBirth);
$('.js-Datepicker2').datepicker({maxDate: new Date()});// today以降選択不可
$('.js-Datepicker2').data('datepicker').selectDate(new Date('1980/01/01'));
$('.js-Datepicker_Btn').on('click', () => {
    $('.js-Datepicker2').show();
});

// validation - ご契約者生年月日
const $el00N2r000000gl6G = document.getElementById('00N2r000000gl6G');
const $eldisp00N2r000000gl6G = document.getElementById('disp-00N2r000000gl6G');


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

// validation - セイ
const $el00N2r000000gl6O = $('[name="00N2r000000gl6O"]');
if ($el00N2r000000gl6O) {
    $el00N2r000000gl6O.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - メイ
const $el00N2r000000gl6M = $('[name="00N2r000000gl6M"]');
if ($el00N2r000000gl6M) {
    $el00N2r000000gl6M.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご契約電話番号
const $el00N2r000000gl6K = $('[name="00N2r000000gl6K"]');
if ($el00N2r000000gl6K) {
    $el00N2r000000gl6K.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 確認用メールアドレス
const $elConfirmEmail = $('[name="confirm-email"]');
if ($elConfirmEmail) {
    $elConfirmEmail.on('change blur', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);
        if ($target.val()) {
            validateTarget(this, param);
        } else {
            $target.attr('aria-describedBy', '');
            $('#err-required_confirm-email').attr('aria-hidden', false);
            $('#err-email_confirm-email').attr('aria-hidden', true);
            $target.attr('aria-invalid', true);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
    });
}

// validation - チェックボックス
const $el00N2r000001lfWN = $('[name="00N2r000001lfWN"]');
if ($el00N2r000001lfWN) {
    $el00N2r000001lfWN.on('change', function(e, param) {

        validateTarget(this, param);

    });
}


// validation - 郵便番号
const $el00N2r000000l7x7 = $('[name="00N2r000000l7x7"]');
if ($el00N2r000000l7x7) {
    $el00N2r000000l7x7.on('change blur', function(e, param) {
        validateTarget(this, param);
        if(el00N2r000000l75o.checked) {
            el00N2r000000l7x2.value = el00N2r000000l7x7.value;
        }
    });
}

// validation - 郵便番号
const $el00N2r000000l7x2 = $('[name="00N2r000000l7x2"]');
if ($el00N2r000000l7x2) {
    $el00N2r000000l7x2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご契約住所
const $el00N2r000000l75K = $('[name="00N2r000000l75K"]');
if ($el00N2r000000l75K) {
    $el00N2r000000l75K.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}


// validation - ご契約住所
const $el00N2r000001uRyW = $('[name="00N2r000001uRyW"]');
if ($el00N2r000001uRyW) {
    $el00N2r000001uRyW.on('change blur', function(e, param) {
        validateTarget(this, param);
        if(el00N2r000000l75o.checked) {
            el00N2r000000l75K.value = el00N2r000001uRyW.value;
        }
    });
}

// validation - 返信用メールアドレス
const $el00N2r000000gl6J = $('[name="00N2r000000gl6J"]');
if ($el00N2r000000gl6J) {
    $el00N2r000000gl6J.on('change blur', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);

        if ($target.val()) {
            validateTarget(this, param);
        } else {
            $target.attr('aria-describedBy', '');
            $('#err-required_00N2r000000gl6J').attr('aria-hidden', false);
            $('#err-email_00N2r000000gl6J').attr('aria-hidden', true);
            $target.attr('aria-invalid', true);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
    });
}

function chkAll() {
    if ($el00N2r000000gl6P) {
        $el00N2r000000gl6P.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000gl6N) {
        $el00N2r000000gl6N.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000gl6O) {
        $el00N2r000000gl6O.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000gl6M) {
        $el00N2r000000gl6M.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000gl6K) {
        $el00N2r000000gl6K.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000gl6J) {
        $el00N2r000000gl6J.trigger('change', ['chkAll']);
    }
    if ($elConfirmEmail) {
        $elConfirmEmail.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000l7x7) {
        $el00N2r000000l7x7.trigger('change', ['chkAll']);
    }
    if ($el00N2r000001uRyW) {
        $el00N2r000001uRyW.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000l7x2) {
        $el00N2r000000l7x2.trigger('change', ['chkAll']);
    }
    if ($el00N2r000000l75K) {
        $el00N2r000000l75K.trigger('change', ['chkAll']);
    }
    if ($el00N2r000001lfWN) {
        $el00N2r000001lfWN.trigger('change', ['chkAll']);
    }
    return errors;
}

// confirm button - agree check
const agreecheck = document.getElementsByName('agree');
let checkcnt = 0;
for ( let i = 0; i < agreecheck.length; i++ ) {
    agreecheck[i].addEventListener('change', (e) => {
        agreecheck[i].checked == true ? checkcnt++ : checkcnt--;
    });
}

// modal set
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

// confirm button
document.getElementById('js-btn-confirmation').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $eldisp00N2r000000gl6G.innerText = $el00N2r000000gl6G.value;
        $('#modal-confirm').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('[aria-invalid="true"]').eq(0).offset().top}, 400, 'swing');
    }

});

// modal close button (modify)
document.getElementById('js-btn-confirmation-close').addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
});

// submit form
document.getElementById('js-btn-confirmation-submit').addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-btn-confirmation_Form').submit();
});
