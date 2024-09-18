import validator from 'validator';
import DOMPurify from 'dompurify';
import 'air-datepicker';
import '../library/datepicker.ja';

// Parameter check
function getParam(name) {
    const url = window.location.href;
    name = name.replace(/\[\]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const parameterMatch = document.getElementById('js-parameter-match');
const notParameterMatch = document.getElementById('js-not-parameter-match');

if( getParam('case') === '102621' ) {
    parameterMatch.setAttribute('aria-hidden', 'false');
    notParameterMatch.setAttribute('aria-hidden', 'true');
} else {
    parameterMatch.setAttribute('aria-hidden', 'true');
    notParameterMatch.setAttribute('aria-hidden', 'false');
}

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
    view: 'years',
};

// datepicker - 生年月日
$('.js-Datepicker2').datepicker(datepickerSet);
$('.js-Datepicker2').data('datepicker').selectDate(new Date('1980/01/01'));
$('.js-Datepicker_Btn').on('click', () => {
    $('.js-Datepicker2').show();
});

// validation - type
function chkRequired(el) {
    let msgId = `err-required_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    const isChecked = () => {
        const radios = document.getElementsByName(el.getAttribute('name'));
        for (let i = 0; i < radios.length; i++) {
            if(radios[i].checked) return true;
        }
        return false;
    }
    if(el.type === 'radio') {
        if(isChecked()) {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        } else {
            el.setAttribute('aria-describedBy', msgId);
            msg.setAttribute('aria-hidden', false);
            return 1;
        }
    }
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
    const emailVal = $('[name="email"]').val();
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

// validation - お貸出し方法
const $el00N2u000000jNq0 = $('[name="00N2u000000jNq0"]');
if ($el00N2u000000jNq0) {
    $el00N2u000000jNq0.on('change', function(e, param) {
        const nm = $(this).attr('name');
        const $disp = $(`#disp-${nm}`);
        let $target = e.currentTarget;
        for (let i = 0; i < $el00N2u000000jNq0.length; i++) {
            if( $el00N2u000000jNq0[i].checked ) {
                $target = $el00N2u000000jNq0[i];
            }
        }
        $disp.text(DOMPurify.sanitize($target.value, {ALLOWED_TAGS: []}));
        validateTarget($target, param);
    });
}

// validation - ご契約電話番号
const $el00N0I00000Jxe3E = $('[name="00N0I00000Jxe3E"]');
if ($el00N0I00000Jxe3E) {
    $el00N0I00000Jxe3E.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 郵便番号
const $el00N2u000000PkFW = $('[name="00N2u000000PkFW"]');
if ($el00N2u000000PkFW) {
    $el00N2u000000PkFW.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 楽天モバイルID
const $el00N2u000000P1oC = $('[name="00N2u000000P1oC"]');
if ($el00N2u000000P1oC) {
    $el00N2u000000P1oC.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご契約住所
const $el00N2u000000P1fy = $('[name="00N2u000000P1fy"]');
if ($el00N2u000000P1fy) {
    $el00N2u000000P1fy.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 姓
const $elName = $('[name="name"]');
if ($elName) {
    $elName.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 名
const $el00N0I00000Jxe34 = $('[name="00N0I00000Jxe34"]');
if ($el00N0I00000Jxe34) {
    $el00N0I00000Jxe34.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご契約者生年月日
const $el00N0I00000JyFjg = $('[name="00N0I00000JyFjg"]');
if ($el00N0I00000JyFjg) {
    $el00N0I00000JyFjg.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 返信用メールアドレス
const $elEmail = $('[name="email"]');
if ($elEmail) {
    $elEmail.on('change blur', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);

        if ($target.val()) {
            validateTarget(this, param);
        } else {
            $target.attr('aria-describedBy', '');
            $('#err-required_email').attr('aria-hidden', false);
            $('#err-email_email').attr('aria-hidden', true);
            $target.attr('aria-invalid', true);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
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

function chkAll() {
    if ($el00N2u000000jNq0) {
        $el00N2u000000jNq0.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000Jxe3E) {
        $el00N0I00000Jxe3E.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000P1oC) {
        $el00N2u000000P1oC.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000P1fy) {
        $el00N2u000000P1fy.trigger('change', ['chkAll']);
    }
    if ($elName) {
        $elName.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000Jxe34) {
        $el00N0I00000Jxe34.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JyFjg) {
        $el00N0I00000JyFjg.trigger('change', ['chkAll']);
    }
    if ($elEmail) {
        $elEmail.trigger('change', ['chkAll']);
    }
    if ($elConfirmEmail) {
        $elConfirmEmail.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000PkFW) {
        $el00N2u000000PkFW.trigger('change', ['chkAll']);
    }
    return errors;
}

function chkAge() {
    const ageVal = document.getElementsByName('00N0I00000JyFjg')[0].value;
    const dateSplit = ageVal.split('/');
    const birthDay = {
        year: dateSplit[0],
        month: dateSplit[1],
        date: dateSplit[2]
    };
    const birthDate = new Date(birthDay.year, birthDay.month - 1, birthDay.date);

    const y2 = birthDate.getFullYear().toString().padStart(4, '0');
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const d2 = birthDate.getDate().toString().padStart(2, '0');

    const today = new Date();
    const y1 = today.getFullYear().toString().padStart(4, '0');
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
    const d1 = today.getDate().toString().padStart(2, '0');

    const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
    console.log(age);

    if( age < 20 ) {
        console.log('未成年');
        document.getElementById('00N2u000000P1gm').value = 1;
    } else {
        console.log('成年');
        document.getElementById('00N2u000000P1gm').value = 0;
    }
}

// re-entry
function reEntry() {
    const nextSection = document.getElementById('js-substitute_Next-section');


    nextSection.setAttribute('aria-hidden', true);

}

// confirm button - agree check
const agreecheck = document.getElementsByName('agree');
const confirmBtn = document.getElementById('js-substitute_Confirm');
let checkcnt = 0;
for ( let i = 0; i < agreecheck.length; i++ ) {
    agreecheck[i].addEventListener('change', (e) => {
        agreecheck[i].checked == true ? checkcnt++ : checkcnt--;
        if( checkcnt == agreecheck.length ) {
            confirmBtn.setAttribute('aria-disabled', false);
            confirmBtn.disabled = false;
        } else {
            confirmBtn.setAttribute('aria-disabled', true);
            confirmBtn.disabled = true;
        }
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
document.getElementById('js-substitute_Confirm').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $('#modal-confirm').modaal('open');
        chkAge();
    } else {
        $('body,html').animate({scrollTop: $('[aria-invalid="true"]').eq(0).offset().top}, 400, 'swing');
    }
});

// modal close button (modify)
document.getElementById('js-substitute_Confirm-close').addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
    reEntry();
});

document.querySelectorAll('.js-substitute_Back').forEach((backbtn) => {
    backbtn.addEventListener('click', (e) => {
        reEntry();
    });
});

// submit form
document.getElementById('js-substitute_Submit').addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-substitute_Form').submit();
});
