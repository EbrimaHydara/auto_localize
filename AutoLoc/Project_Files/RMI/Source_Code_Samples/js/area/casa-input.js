import validator from 'validator';
import DOMPurify from 'dompurify';


// submit form
const elSubmit = document.getElementById('js-area-casa_Submit');
const elSubmit_solo = document.getElementById('js-area-casa_Submit_solo');
elSubmit.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-area-casa_Form').submit();
});

elSubmit_solo.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-area-casa_Form').submit();
});


// validation - type
function chkRequired(el) {
    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-required_${elementId}`;
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
function chkAlphanumeric(el) {
    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-alphanumeric_${elementId}`;
    let msg = document.getElementById(msgId);

    if (validator.isAlphanumeric(el.value) || el.value.length === 0) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function chkNumeric(el) {
    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-numeric_${elementId}`;
    let msg = document.getElementById(msgId);
    if (validator.isNumeric(el.value, { no_symbols: true }) || el.value.length === 0) {
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
    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-length_${elementId}`;
    let msg = document.getElementById(msgId);
    let setting = {
        min: isNaN(el.getAttribute('minlength')) ? 0 : parseInt(el.getAttribute('minlength'), 10),
        max: isNaN(el.getAttribute('maxlength')) ? 0 : parseInt(el.getAttribute('maxlength'), 10)
    };
    if (validator.isLength(el.value, setting) || el.value.length === 0) {
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
    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-email_${elementId}`;
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
function chkCheckbox(el) {
    let msgId = `err-checkbox_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    let chks = el.querySelectorAll('input[type="checkbox"]');
    let selected = [];

    chks.forEach(el => {
        if (el.checked) {
            selected.push(el.getAttribute('data-label'));
        }
    });
    if (selected.length > 0) {
        el.setAttribute('data-label', selected.join('／'));
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('data-label', '');
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}

function chkRadio(el) {
    let msgId = `err-radio_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    const solochks = document.querySelector("#solo");
    const corpchks = document.querySelector("#corp");

        if (solochks.checked || corpchks.checked) {
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
    let nm = $target.attr('name') ? $target.attr('name'): $target.attr('id');
    let $disp = $(`.disp-${nm}`);
    let idx = errors.indexOf(nm);
    let results = 0;

    if (item.indexOf('required') > -1) {
        results += chkRequired(target);
    }
    if (item.indexOf('alphanum') > -1) {
        results += chkAlphanumeric(target);
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
    if (item.indexOf('checkbox') > -1) {
        results += chkCheckbox(target);
    }
    if (item.indexOf('bistype') > -1) {
        results += chkRadio(target);
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
            if (item.indexOf('bistype') > -1) {
                $disp.text(DOMPurify.sanitize(
                    $(`[name=${nm}]:checked`).val(),
                    {ALLOWED_TAGS: []})
                );
            } else if (item.indexOf('radio') > -1) {
                $disp.text(DOMPurify.sanitize(
                    $(`[name=${nm}]:checked`).val(),
                    {ALLOWED_TAGS: []})
                );
            } else if (item.indexOf('checkbox') > -1) {
                $disp.text(DOMPurify.sanitize(
                    $target.attr('data-label'),
                    {ALLOWED_TAGS: []})
                );
            } else {
                $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
            }
        }
    }
}

let errors = [];

// validation - お客様ID
const $el00N0I00000Jz76E = $('[name="00N0I00000Jz76E"]');
const $disp00N0I00000Jz76E = $('.disp-00N0I00000Jz76E');
const $dispList00N0I00000Jz76E = $('#dispList-00N0I00000Jz76E');
const $elCustomerPref = $('#customerPref');
const $elCustomerNum = $('#customerNum');
const msgCaf = 'err-length_customerNum-caf';
const msgCop = 'err-length_customerNum-cop';
const $elMsgCaf = $(`#${msgCaf}`);
const $elMsgCop = $(`#${msgCop}`);
const $elMsgCustomerPref = $('#err-require_customerPref');

if ($elCustomerPref) {
    $elCustomerPref.on('change', function(e, param) {
        chkCustomerId(param);
    });
}
if ($elCustomerNum) {
    $elCustomerNum.on('change', function(e, param) {
        chkCustomerId(param);
    });
}

function chkCustomerId (param) {
    let errPref = 0;
    let errNum = 0;

    // errPref += chkRequired($elCustomerPref[0]);
    // errNum += chkRequired($elCustomerNum[0]);
    errNum += chkNumeric($elCustomerNum[0]);

    if ($elCustomerPref.val() === 'CAF' && $elCustomerNum.val().length !== 10) {
        $elCustomerNum.attr('aria-describedBy', msgCaf);
        $elMsgCaf.attr('aria-hidden', false);
        $elMsgCop.attr('aria-hidden', true);
        $elMsgCustomerPref.attr('aria-hidden', true);
        errNum++;

    } else if ($elCustomerPref.val() === 'COP' && $elCustomerNum.val().length !== 8) {
        $elCustomerNum.attr('aria-describedBy', msgCop);
        $elMsgCop.attr('aria-hidden', false);
        $elMsgCaf.attr('aria-hidden', true);
        $elMsgCustomerPref.attr('aria-hidden', true);
        errNum++;

    } else if ($elCustomerPref.val() === '' && $elCustomerNum.val().length > 0) {
        $elCustomerNum.attr('aria-describedBy', msgCop);
        $elMsgCop.attr('aria-hidden', true);
        $elMsgCaf.attr('aria-hidden', true);
        $elMsgCustomerPref.attr('aria-hidden', false);
        errNum++;

    } else {
        $elCustomerNum.attr('aria-describedBy', '');
        $elMsgCaf.attr('aria-hidden', true);
        $elMsgCop.attr('aria-hidden', true);
        $elMsgCustomerPref.attr('aria-hidden', true);
    }

    if (errPref > 0) {
        $elCustomerPref.attr('aria-invalid', true);
        if (param === 'chkAll') {
            if (errors.indexOf('customerPref') < 0) {
                errors.push('customerPref');
            }
        }
    } else {
        $elCustomerPref.attr('aria-invalid', false);
        if (param === 'chkAll') {
            if (errors.indexOf('customerPref' > -1)) {
                errors.splice(errors.indexOf('customerPref'), 1);
            }
        }
    }

    if (errNum > 0) {
        $elCustomerNum.attr('aria-invalid', true);
        if (param === 'chkAll') {
            if (errors.indexOf('customerNum') < 0) {
                errors.push('customerNum');
            }
        }
    } else {
        $elCustomerNum.attr('aria-invalid', false);
        if (param === 'chkAll') {
            if (errors.indexOf('customerNum' > -1)) {
                errors.splice(errors.indexOf('customerNum'), 1);
            }
        }
    }

    $el00N0I00000Jz76E.val(`${$elCustomerPref.val()}${$elCustomerNum.val()}`);
    $disp00N0I00000Jz76E.text(DOMPurify.sanitize($el00N0I00000Jz76E.val(), {ALLOWED_TAGS: []}));

    if ($elCustomerNum.val().length > 0) {
        $dispList00N0I00000Jz76E.attr('aria-hidden', false);
    }
    else {
        $dispList00N0I00000Jz76E.attr('aria-hidden', true);
    }
}


// validation - 事業形態
const $el00N2u000000GxEn = $('[name="00N2u000000GxEn"]');
if ($el00N2u000000GxEn) {
    $el00N2u000000GxEn.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 楽天ひかりユーザID
// const $el00N0I00000KRszw = $('[name="00N0I00000KRszw"]');
// const $disp00N0I00000KRszw = $('.disp-00N0I00000KRszw');
// const $dispList00N0I00000KRszw = $('#dispList-00N0I00000KRszw');
// const $elCustomerNumHikari = $('#customerNum-hikari');
// if ($elCustomerNumHikari) {
//     $elCustomerNumHikari.on('change blur', function(e, param) {
//         validateTarget(this, param);

//         $el00N0I00000KRszw.val(`ra${$elCustomerNumHikari.val()}`);
//         $disp00N0I00000KRszw.text(DOMPurify.sanitize($el00N0I00000KRszw.val(), {ALLOWED_TAGS: []}));

//         if ($elCustomerNumHikari.val().length > 0) {
//             $dispList00N0I00000KRszw.attr('aria-hidden', false);
//         }
//         else {
//             $el00N0I00000KRszw.val('');
//             $dispList00N0I00000KRszw.attr('aria-hidden', true);
//         }
//     });
// }

// validation - 御社名
const $el00N0I00000KRr62 = $('[name="00N0I00000KRr62"]');
if ($el00N0I00000KRr62) {
    $el00N0I00000KRr62.on('change blur', function(e, param) {
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

// // validation - 生年月日:年
// const $el00N0I00000Jz75p = $('[name="00N0I00000Jz75p"]');
// if ($el00N0I00000Jz75p) {
//     $el00N0I00000Jz75p.on('change', function(e, param) {
//         validateTarget(this, param);
//     });
// }

// // validation - 生年月日:月
// const $el00N0I00000Jz75u = $('[name="00N0I00000Jz75u"]');
// if ($el00N0I00000Jz75u) {
//     $el00N0I00000Jz75u.on('change', function(e, param) {
//         validateTarget(this, param);
//     });
// }

// // validation - 生年月日:日
// const $el00N0I00000Jz75z = $('[name="00N0I00000Jz75z"]');
// if ($el00N0I00000Jz75z) {
//     $el00N0I00000Jz75z.on('change', function(e, param) {
//         validateTarget(this, param);
//     });
// }

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

// validation - 住所（建物・ビル名）
const $el00N0I00000KRr1H = $('[name="00N0I00000KRr1H"]');
if ($el00N0I00000KRr1H) {
    $el00N0I00000KRr1H.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - メールアドレス
const $elEmail = $('[name="email"]');
if ($elEmail) {
    $elEmail.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご契約の楽天モバイル（楽天回線）の電話番号
const $el00N0I00000Jxe3E = $('[name="00N0I00000Jxe3E"]');
if ($el00N0I00000Jxe3E) {
    $el00N0I00000Jxe3E.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 連絡希望日時:曜日
const $el00N0I00000Jz6cd = $('[name="00N0I00000Jz6cd"]');
if ($el00N0I00000Jz6cd) {
    $el00N0I00000Jz6cd.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 連絡希望日時:時間
const $elContactDate = $('[name="contactDate"]');
const $elContactDateItem = $elContactDate.find('input[type="checkbox"]');
if ($elContactDate && $elContactDateItem) {
    $elContactDate.on('change', function(e, param) {
        validateTarget($elContactDate[0], param);
    });
}

// validation - フレッツID（CAF番号）
// const $el00N0I00000Jz76E = $('[name="00N0I00000Jz76E"]');
// if ($el00N0I00000Jz76E) {
//     $el00N0I00000Jz76E.on('change', function(e, param) {
//         validateTarget(this, param);
//     });
// }

// validation - カラー
const $el00N0I00000Jz6VN = $('[name="00N0I00000Jz6VN"]');
if ($el00N0I00000Jz6VN) {
    $el00N0I00000Jz6VN.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

function chkAll() {
    if ($elCustomerPref) {
        $elCustomerPref.trigger('change', ['chkAll']);
    }
    if ($elCustomerNum) {
        $elCustomerNum.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000KRr62) {
        $el00N0I00000KRr62.trigger('change', ['chkAll']);
    }
    // if ($elCustomerNumHikari) {
    //     $elCustomerNumHikari.trigger('change', ['chkAll']);
    // }
    if ($elName) {
        $elName.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000Jxe34) {
        $el00N0I00000Jxe34.trigger('change', ['chkAll']);
    }
    // if ($el00N0I00000Jz75p) {
    //     $el00N0I00000Jz75p.trigger('change', ['chkAll']);
    // }
    // if ($el00N0I00000Jz75u) {
    //     $el00N0I00000Jz75u.trigger('change', ['chkAll']);
    // }
    // if ($el00N0I00000Jz75z) {
    //     $el00N0I00000Jz75z.trigger('change', ['chkAll']);
    // }
    if ($el00N0I00000JycJH) {
        $el00N0I00000JycJH.trigger('change', ['chkAll']);
    }
    if ($el00N280000095Txj) {
        $el00N280000095Txj.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000KRr1H) {
        $el00N0I00000KRr1H.trigger('change', ['chkAll']);
    }
    if ($elEmail) {
        $elEmail.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000Jxe3E) {
        $el00N0I00000Jxe3E.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000Jz6cd) {
        $el00N0I00000Jz6cd.trigger('change', ['chkAll']);
    }
    if ($elContactDate && $elContactDateItem) {
        $elContactDateItem.eq(1).trigger('change', ['chkAll']);
    }
    if ($el00N2u000000GxEn) {
        $el00N2u000000GxEn.eq(1).trigger('change', ['chkAll']);
    }
    // if ($el00N0I00000Jz76E) {
    //     $el00N0I00000Jz76E.trigger('change', ['chkAll']);
    // }
    if ($el00N0I00000Jz6VN) {
        $el00N0I00000Jz6VN.trigger('change', ['chkAll']);
    }
    return errors;
}

// 同意チェック
const $elchkConsent = $('#js-area-casa_Consent');
const $elchkConsentSolo = $('#js-area-casa_Consent_solo');

const $Submit = $('#js-area-casa_Submit');
const $Submit_solo = $('#js-area-casa_Submit_solo');

$elchkConsentSolo.on('change', function(){
    if ($elchkConsentSolo.is(':checked')) {
      $Submit_solo.removeClass('area-casa-Form_Submit_btn-disabled');
      $Submit_solo.attr('aria-disabled', 'false');
    } else {
      $Submit_solo.addClass('area-casa-Form_Submit_btn-disabled');
      $Submit_solo.attr('aria-disabled', 'true');
    }
  });

$elchkConsent.on('change', function(){
if ($elchkConsent.is(':checked')) {
    $Submit.removeClass('area-casa-Form_Submit_btn-disabled');
    $Submit.attr('aria-disabled', 'false');
} else {
    $Submit.addClass('area-casa-Form_Submit_btn-disabled');
    $Submit.attr('aria-disabled', 'true');
}
});


const switchBusinessType = $('input[name=00N2u000000GxEn]');
const $corp = $('#js-area-casa_Confirm');
const $solo = $('#js-area-casa_Confirm_solo');
switchBusinessType.on('change', function(){
if ($('[name="00N2u000000GxEn"]:checked').val() === '個人事業主') {
    $corp.hide();
    $solo.show();
} else if ($('[name="00N2u000000GxEn"]:checked').val() === '法人') {
    $solo.hide();
    $corp.show();
}
});

// modal
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

// modal_solo
const modalConfig_solo = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm_solo'
};
$('#modal-confirm_solo').modaal(modalConfig_solo);

document.getElementById('js-area-casa_Confirm').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $('#modal-confirm').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('#js-area-casa_Form-top').offset().top}, 400, 'swing');
    }
});
document.getElementById('js-area-casa_Confirm-close').addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
});

document.getElementById('js-area-casa_Confirm_solo').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $('#modal-confirm_solo').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('#js-area-casa_Form-top').offset().top}, 400, 'swing');
    }
});

document.getElementById('js-area-casa_Confirm-close_solo').addEventListener('click', (e) => {
    $('#modal-confirm_solo').modaal('close');
});
