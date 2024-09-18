import validator from 'validator';
import DOMPurify from 'dompurify';
import 'air-datepicker';
import '../../library/datepicker.ja';

const namespace = 'support-iphone-inquiry';

// Filter select

const $elSelectCategoryParent = $('#js-select-category-parent');
const $elSelectCategoryChild = $('#js-select-category-child');

const categoryChild = {
    'お申し込み前': [
        'Apple製品の仕様や機能',
        'iPhoneへの機種変更',
    ],
    'お申し込みから開通まで': [
        '配送状況確認',
        '転入・開通方法',
    ],
    '製品（操作・設定方法）': [
        'Apple製品の初期設定方法',
        'メール、メッセージの設定方法',
        'データ移行・保存方法',
    ],
    'Rakuten Link': ['Rakuten Link'],
    'my 楽天モバイル': ['my 楽天モバイルでのお手続きについて'],
    '製品の価格・仕様・機能': ['Apple製品および関連アクセサリ'],
    '故障・修理相談': ['Apple製品の故障・修理相談'],
};

let currentParent = '';
$elSelectCategoryParent.change(function() {
    if (this.value !== currentParent) {
        $elSelectCategoryChild.prop('disabled', false);
        $elSelectCategoryChild.empty();
        const defaultTag = '<option disabled selected value>選択してください</option>';
        $elSelectCategoryChild[0].insertAdjacentHTML('beforeend', defaultTag);
        categoryChild[this.value].forEach( elem => {
            const tag = `<option value="${elem}">${elem}</option>`;
            $elSelectCategoryChild[0].insertAdjacentHTML('beforeend', tag);
        });
        currentParent = this.value;
    }
});

// datepicker
$('.js-Datepicker').datepicker({
    classes: `${namespace}-Form_Datepicker`,
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
});
let dp = $('.js-Datepicker').data('datepicker');
dp.selectDate(new Date(1980, 0, 1));
$('.js-Datepicker_Btn').on('click', () => {
    console.log('come');
    dp.show();
});

// submit form
const elSubmit = document.getElementById(`js-${namespace}_Submit`);
elSubmit.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById(`js-${namespace}_Form`).submit();
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

function chkKatakana(el) {
    function isZenKatakana(str){
      if (str.match(/^[ァ-ヶー]+$/)) {
        return true;
      } else {
        return false;
      }
    }

    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-katakana_${elementId}`;
    let msg = document.getElementById(msgId);
    if (isZenKatakana(el.value) || el.value.length === 0) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}

function chkSame(el, ref) {
    let elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
    let msgId = `err-same_${elementId}`;
    let msg = document.getElementById(msgId);
    if (el.value === ref.value) {
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}

function validateTarget(target, param, ref) {
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
    if (item.indexOf('katakana') > -1) {
        results += chkKatakana(target);
    }
    if (item.indexOf('same') > -1) {
        results += chkSame(target, ref);
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
            if (item.indexOf('sercvicetype') > -1 ) {
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

// validation - カテゴリ
// 00N2r000000gl6I
const $elCaregory = $('[name="00N2r000000gl6I"]');
if ($elCaregory) {
    $elCaregory.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - カテゴリ詳細
// 00N2r000000gl6H
const $elCaregoryDetail = $('[name="00N2r000000gl6H"]');
if ($elCaregoryDetail) {
    $elCaregoryDetail.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 製品
// 00N2r000000gl6L
const $elProduct = $('[name="00N2r000000gl6L"]');
if ($elProduct) {
    $elProduct.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 機種
// 00N2r000000gl6R
const $elDevice = $('[name="00N2r000000gl6R"]');
const $dispDevice = $('.disp-00N2r000000gl6R');
const $dispListDevice = $('.dispList-00N2r000000gl6R');

if ($elDevice) {
    $elDevice.on('change blur', function() {
        chkDevice();
    });
}

function chkDevice () {
    $dispDevice.text(DOMPurify.sanitize($elDevice.val(), {ALLOWED_TAGS: []}));

    if ($elDevice.val().length > 0) {
        console.log('have value');
        $dispListDevice.attr('aria-hidden', false);
    }
    else {
        console.log('no value');
        $dispListDevice.attr('aria-hidden', true);
    }
}

// validation - 姓
// 00N2r000000gl6P
const $elName1 = $('[name="00N2r000000gl6P"]');
if ($elName1) {
    $elName1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 名
// 00N2r000000gl6N
const $elName2 = $('[name="00N2r000000gl6N"]');
if ($elName2) {
    $elName2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}
// validation - 姓（フリガナ）
// 00N2r000000gl6O
const $elName3 = $('[name="00N2r000000gl6O"]');
const $elName4 = $('[name="00N2r000000gl6M"]');
const $dispListNameF = $('.dispList-nameFurigana');
if ($elName3) {
    $elName3.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($elName3.val().length > 0 || $elName4.val().length > 0) {
            $dispListNameF.attr('aria-hidden', false);
        } else {
            $dispListNameF.attr('aria-hidden', true);
        }
    });
}

// validation - 名（フリガナ）
// 00N2r000000gl6M
if ($elName4) {
    $elName4.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($elName3.val().length > 0 || $elName4.val().length > 0) {
            $dispListNameF.attr('aria-hidden', false);
        } else {
            $dispListNameF.attr('aria-hidden', true);
        }
    });
}

// validation - 生年月日（年）
// 00N2r000000gl6G
const $elBirthday = $('[name="00N2r000000gl6G"]');
if ($elBirthday) {
    $elBirthday.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - メールアドレス
// 00N2r000000gl6J
const $elEmail = $('[name="00N2r000000gl6J"]');
const $elEmailConf = $('[name="emailConf"]');
if ($elEmail) {
    $elEmail.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($elEmailConf) {
            console.log('come align');
            console.log($elEmailConf[0]);
            console.log(this);
            validateTarget($elEmailConf[0], param, this);
        }
    });
}

// validation - 確認用メールアドレス
// emailConf
if ($elEmailConf) {
    $elEmailConf.on('change blur', function(e, param) {
        validateTarget(this, param, $elEmail[0]);
    });
}

// validation - 連絡先電話番号
// 00N2r000000gl6K
const $elPhone = $('[name="00N2r000000gl6K"]');
const $elPhoneSIM = $('[name="00N2r000000gl6S"]');
const $phoneSameCheckbox = $('#phone-same-checkbox');
if ($elPhone) {
    $elPhone.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($phoneSameCheckbox.prop('checked')) {
            $elPhoneSIM.val($elPhone.val());
            validateTarget($elPhoneSIM[0]);
        }
    });
}

// validation - 電話番号SIM
// 00N2r000000gl6S
const $dispListPhoneSIM = $('.dispList-00N2r000000gl6S');
if ($elPhoneSIM) {
    $elPhoneSIM.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($elPhoneSIM.val().length > 0) {
            $dispListPhoneSIM.attr('aria-hidden', false);
        }
        else {
            $dispListPhoneSIM.attr('aria-hidden', true);
        }
    });
}

// validation - 問い合わせ内容
// 00N2r000000gl6Q
const $elContent = $('[name="00N2r000000gl6Q"]');
if ($elContent) {
    $elContent.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

function chkAll() {
    if ($elCaregory) {
        $elCaregory.trigger('change', ['chkAll']);
    }
    if ($elCaregoryDetail) {
        $elCaregoryDetail.trigger('change', ['chkAll']);
    }
    if ($elProduct) {
        $elProduct.trigger('change', ['chkAll']);
    }
    if ($elName1) {
        $elName1.trigger('change', ['chkAll']);
    }
    if ($elName2) {
        $elName2.trigger('change', ['chkAll']);
    }
    if ($elName3) {
        $elName3.trigger('change', ['chkAll']);
    }
    if ($elName4) {
        $elName4.trigger('change', ['chkAll']);
    }
    if ($elBirthday) {
        $elBirthday.trigger('change', ['chkAll']);
    }
    if ($elEmail) {
        $elEmail.trigger('change', ['chkAll']);
    }
    if ($elEmailConf) {
        $elEmailConf.trigger('change', ['chkAll']);
    }
    if ($elPhone) {
        $elPhone.trigger('change', ['chkAll']);
    }
    if ($elPhoneSIM) {
        $elPhoneSIM.trigger('change', ['chkAll']);
    }
    if ($elContent) {
        $elContent.trigger('change', ['chkAll']);
    }
    return errors;
}

// 連絡先電話番号のエラーチェック
const $errRequiredPhone = $('#err-required_00N2r000000gl6K');
const $errNumericPhone = $('#err-numeric_00N2r000000gl6K');
const $errLengthPhone = $('#err-length_00N2r000000gl6K');

function chkPhone () {
    let acc1 = 0;
    const arr1 = [
        $errRequiredPhone,
        $errNumericPhone,
        $errLengthPhone
    ];
    arr1.forEach(elem => {
        if (elem.attr('aria-hidden') === 'false') {
            acc1 += 1;
        }
    });
    let acc2 = 0;
    if($elPhone.val() === '') {
        acc2 += 1;
    }
    return (acc1 === 0 && acc2 === 0) ? true : false;
}

// 連絡先電話番号と同じチェックボックス

const $secPhoneSim = $('#phone-sim-section');

$phoneSameCheckbox.click(function(){
    if($phoneSameCheckbox.prop('checked')){
        if(chkPhone()) {
            $secPhoneSim.find('p[id^="err"]').attr('aria-hidden', 'true');
            $secPhoneSim.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');

            $elPhoneSIM.val($elPhone.val());

            $elPhoneSIM.attr('readonly', '');
        } else {
            $phoneSameCheckbox.prop('checked', false);
            $('body,html').animate({scrollTop: $('#phone-scroll').offset().top}, 400, 'swing');
        }
    } else {
        $elPhoneSIM.val('');

        $elPhoneSIM.removeAttr('readonly');

        $secPhoneSim.find('p[id^="err"]').attr('aria-hidden', 'true');
        $secPhoneSim.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');
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

document.getElementById(`js-${namespace}_Confirm`).addEventListener('click', (e) => {
    console.log('hello');
    if (chkAll().length === 0) {
        $('#modal-confirm').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $(`#js-${namespace}_Form-top`).offset().top}, 400, 'swing');
    }
});
document.getElementById(`js-${namespace}_Confirm-close`).addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
});
