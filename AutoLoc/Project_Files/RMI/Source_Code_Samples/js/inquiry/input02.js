import validator from 'validator';
import DOMPurify from 'dompurify';
import 'air-datepicker';
import '../library/datepicker.ja';

// datepicker
$('.js-Datepicker').datepicker({
    classes: 'inquiry-Form02_Datepicker',
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
});
let dp = $('.js-Datepicker').data('datepicker');
dp.selectDate(new Date());
$('.js-Datepicker_Btn').on('click', () => {
    dp.show();
});


// submit form
document.getElementById('js-inquiry_Submit').addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-inquiry_Form').submit();
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

// validation - 現在ご利用の携帯会社
const $el00N0I00000JycJC = $('[name="00N0I00000JycJC"]');
if ($el00N0I00000JycJC) {
    $el00N0I00000JycJC.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - お問い合わせ種別
const $el00N280000095TzR = $('[name="00N280000095TzR"]');
const $el00N0I00000JyyIf = $('[name="00N0I00000JyyIf"]');
const $el00N0I00000JyyIk = $('[name="00N0I00000JyyIk"]');
const $el00N0I00000JyyIp = $('[name="00N0I00000JyyIp"]');
const $rowDatetime = $('#row-datetime');
const $dispRowDatetime = $('#disp-row-datetime');
if ($el00N280000095TzR) {
    chkInquiryType($el00N280000095TzR);
    $el00N280000095TzR.on('change', function(e, param) {
        validateTarget(this, param);
        chkInquiryType($el00N280000095TzR);
    });
}

// validation - 現在ご利用中のスマートフォン
const $el00N280000095Tyx = $('[name="00N280000095Tyx"]');
const $mk00N280000095TyO = $('#mark-00N280000095TyO');
if ($el00N280000095Tyx) {
    $el00N280000095Tyx.on('change', function(e, param) {
        validateTarget(this, param);
        if ($(this).val() !== '不明') {
            $mk00N280000095TyO.show();
            $el00N280000095TyO.attr('aria-required', true);
            $el00N280000095TyO.data('validate', 'required');
        } else {
            $mk00N280000095TyO.hide();
            $el00N280000095TyO.attr('aria-required', false);
            $el00N280000095TyO.data('validate', '');
        }
    });
}

// validation - スマートフォンの詳細
const $el00N280000095TyO = $('[name="00N280000095TyO"]');
if ($el00N280000095TyO) {
    $el00N280000095TyO.on('change', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);
        let $err = $(`#err-required_${nm}`);

        if ($el00N280000095Tyx.val() !== '不明') {
            validateTarget(this, param);
        } else {
            $target.attr('aria-describedBy', '');
            $err.attr('aria-hidden', true);
            $target.attr('aria-invalid', false);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
    });
}

// validation - 郵便番号
const $el00N0I00000JycJH = $('[name="00N0I00000JycJH"]');
if ($el00N0I00000JycJH) {
    $el00N0I00000JycJH.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 住所
const $el00N280000095Txj = $('[name="00N280000095Txj"]');
if ($el00N280000095Txj) {
    $el00N280000095Txj.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 屋内外・その他
const $el00N0I00000JycJM = $('[name="00N0I00000JycJM"]');
if ($el00N0I00000JycJM) {
    $el00N0I00000JycJM.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 申告場所区分
const $el00N0I00000JycJR = $('[name="00N0I00000JycJR"]');
if ($el00N0I00000JycJR) {
    $el00N0I00000JycJR.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 発生日時
if ($el00N0I00000JyyIf) {
    $el00N0I00000JyyIf.on('change', function(e, param) {
        validateTarget(this, param);
    });
}
if ($el00N0I00000JyyIk) {
    $el00N0I00000JyyIk.on('change', function(e, param) {
        validateTarget(this, param);
    });
}
if ($el00N0I00000JyyIp) {
    $el00N0I00000JyyIp.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご意見・ご要望詳細
const $elDescription = $('textarea[name="description"]');
if ($elDescription) {
    $elDescription.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 姓
const $elName = $('[name="name"]');
if ($elName) {
    $elName.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 名
const $el00N0I00000Jxe34 = $('[name="00N0I00000Jxe34"]');
if ($el00N0I00000Jxe34) {
    $el00N0I00000Jxe34.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 返信用メールアドレス
const $elEmail = $('[name="email"]');
if ($elEmail) {
    $elEmail.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 連絡先電話番号
const $elPhone = $('[name="phone"]');
if ($elPhone) {
    $elPhone.on('change', function(e, param) {
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);

        if ($target.val()) {
            validateTarget(this, param);
        } else {
            $target.attr('aria-describedBy', '');
            $('#err-numeric_phone').attr('aria-hidden', true);
            $('#err-length_phone').attr('aria-hidden', true);
            $target.attr('aria-invalid', false);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
    });
}

function chkAll() {
    // let errors = [];
    // let name1 = '';
    // let name2 = '';

    if ($el00N0I00000JycJC) {
        $el00N0I00000JycJC.trigger('change', ['chkAll']);
    }
    if ($el00N280000095TzR) {
        $el00N280000095TzR.trigger('change', ['chkAll']);
    }
    if ($el00N280000095Tyx) {
        $el00N280000095Tyx.trigger('change', ['chkAll']);
    }
    if ($el00N280000095TyO) {
        $el00N280000095TyO.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JycJH) {
        $el00N0I00000JycJH.trigger('change', ['chkAll']);
    }
    if ($el00N280000095Txj) {
        $el00N280000095Txj.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JycJM) {
        $el00N0I00000JycJM.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JycJR) {
        $el00N0I00000JycJR.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JyyIf) {
        $el00N0I00000JyyIf.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JyyIk) {
        $el00N0I00000JyyIk.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JyyIp) {
        $el00N0I00000JyyIp.trigger('change', ['chkAll']);
    }
    if ($elDescription) {
        $elDescription.trigger('change', ['chkAll']);
    }
    if ($elName) {
        $elName.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000Jxe34) {
        $el00N0I00000Jxe34.trigger('change', ['chkAll']);
    }
    if ($elEmail) {
        $elEmail.trigger('change', ['chkAll']);
    }
    if ($elPhone) {
        $elPhone.trigger('change', ['chkAll']);
    }

    return errors;
}

function chkInquiryType(target) {
    if (target.val() === '電波改善要望') {
        $rowDatetime.show();
        $dispRowDatetime.show();
        $el00N0I00000JyyIf.attr('aria-required', true);
        $el00N0I00000JyyIf.data('validate', 'required');
        $el00N0I00000JyyIk.attr('aria-required', true);
        $el00N0I00000JyyIk.data('validate', 'required');
        $el00N0I00000JyyIp.attr('aria-required', true);
        $el00N0I00000JyyIp.data('validate', 'required');
    } else {
        $rowDatetime.hide();
        $dispRowDatetime.hide();
        $el00N0I00000JyyIf.attr('aria-required', false);
        $el00N0I00000JyyIf.data('validate', '');
        $el00N0I00000JyyIk.attr('aria-required', false);
        $el00N0I00000JyyIk.data('validate', '');
        $el00N0I00000JyyIp.attr('aria-required', false);
        $el00N0I00000JyyIp.data('validate', '');
    }
}

// modal
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

document.getElementById('js-inquiry_Confirm').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $('#modal-confirm').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('#js-inquiry_Form-top').offset().top}, 400, 'swing');
    }
});
document.getElementById('js-inquiry_Confirm-close').addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
});

// if (window.location.search === '?ref=casa') {
//     $el00N0I00000JycJC.val('楽天モバイル(楽天回線)');
//     $el00N0I00000JycJC.children(':not(:selected)').prop('disabled', true);
//     $el00N0I00000JycJM.val('屋内');
// }
