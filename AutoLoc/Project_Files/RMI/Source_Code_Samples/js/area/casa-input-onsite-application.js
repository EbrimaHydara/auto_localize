import validator from 'validator';
import DOMPurify from 'dompurify';


// submit form
const elSubmit = document.getElementById('js-casa-onsite_Submit');
const elSubmit_solo = document.getElementById('js-casa-onsite_Submit_solo');
elSubmit.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-casa-onsite_Form').submit();
});

elSubmit_solo.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    document.getElementById('js-casa-onsite_Form').submit();
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

function chkRadio2(el) {
    let msgId = `err-radio_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);

    const familychks = document.querySelector("#family");
    const mansionchks = document.querySelector("#mansion");
    const businesschks = document.querySelector("#business");
    const otherchks = document.querySelector("#other");

        if (familychks.checked || mansionchks.checked || businesschks.checked || otherchks.checked) {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        } else {
            el.setAttribute('aria-describedBy', msgId);
            msg.setAttribute('aria-hidden', false);
            return 1;
        }
}

function chkRadio3(el) {
    let msgId = `err-radio_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);

    const whitechks = document.querySelector("#white");
    const blackchks = document.querySelector("#black");

        if (whitechks.checked || blackchks.checked) {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        } else {
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
    if (item.indexOf('sercvicetype') > -1) {
        results += chkRadio2(target);
    }
    if (item.indexOf('color') > -1) {
        results += chkRadio3(target);
    }
    if (item.indexOf('katakana') > -1) {
        results += chkKatakana(target);
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
            if (item.indexOf('bistype') > -1 ) {
                $disp.text(DOMPurify.sanitize(
                    $(`[name=${nm}]:checked`).val(),
                    {ALLOWED_TAGS: []})
                );
            } else if (item.indexOf('sercvicetype') > -1 ) {
                $disp.text(DOMPurify.sanitize(
                    $(`[name=${nm}]:checked`).val(),
                    {ALLOWED_TAGS: []})
                );
            } else if (item.indexOf('color') > -1 ) {
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

// 1. validation - 申し込みID
// 00N2u000000H2id
const $elApplicationId = $('[name="00N2u000000H2id"]');
const $dispApplicationId = $('.disp-00N2u000000H2id');
const $dispListApplicationId = $('#dispList-00N2u000000H2id');

function getParam () {
    const paramRaw = location.search;
    const startNum = paramRaw.indexOf('?casa-id=') + 9;
    return startNum > -1 ? paramRaw.substring(startNum) : '';
}

if (getParam()) {
    $elApplicationId.val(getParam());
    $elApplicationId.attr('readonly', '');
    chkApplicationId();
}

if ($elApplicationId) {
    $elApplicationId.on('change blur', function() {
        chkApplicationId();
    });
}

function chkApplicationId () {
    $dispApplicationId.text(DOMPurify.sanitize($elApplicationId.val(), {ALLOWED_TAGS: []}));

    if ($elApplicationId.val().length > 0) {
        $dispListApplicationId.attr('aria-hidden', false);
    }
    else {
        $dispListApplicationId.attr('aria-hidden', true);
    }
}

// 2. validation - 事業形態
// 00N2u000000GxEn
const $elBusinessType = $('[name="00N2u000000GxEn"]');
if ($elBusinessType) {
    $elBusinessType.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 24. validation - 設置先郵便番号
const $elSetAdd1 = $('[name="00N0I00000JycJH"]');
if ($elSetAdd1) {
    $elSetAdd1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

const $setAddCheckbox = $('#set-add-checkbox'); // 本店住所と同じ チェックボックス

// 3. validation - 本店郵便番号
// 00N2u000000H2ko
const $elHeadAdd1 = $('[name="00N2u000000H2ko"]');
if ($elHeadAdd1) {
    $elHeadAdd1.on('change blur', function(e, param) {
        validateTarget(this, param);
        if($setAddCheckbox.prop('checked')) {
            $elSetAdd1.val($elHeadAdd1.val());
            validateTarget($elSetAdd1[0]);
        }
    });
}

// 25. validation - 設置先住所
// 00N280000095Txj
const $elSetAdd2 = $('[name="00N280000095Txj"]');
if ($elSetAdd2) {
    $elSetAdd2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 4. validation - 本店住所
// 00N2u000000H2kt
const $elHeadAdd2 = $('[name="00N2u000000H2kt"]');
if ($elHeadAdd2) {
    $elHeadAdd2.on('change blur', function(e, param) {
        validateTarget(this, param);
        if($setAddCheckbox.prop('checked')) {
            $elSetAdd2.val($elHeadAdd2.val());
            validateTarget($elSetAdd2[0]);
        }
    });
}

// 26. validation - 設置先住所（建物・ビル名）
// 00N0I00000KRr1H
const $elSetAdd3 = $('[name="00N0I00000KRr1H"]');
if ($elSetAdd3) {
    $elSetAdd3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 5. validation - 本店住所建物
// 00N2u000000H2ky
const $elHeadAdd3 = $('[name="00N2u000000H2ky"]');
if ($elHeadAdd3) {
    $elHeadAdd3.on('change blur', function(e, param) {
        validateTarget(this, param);
        if($setAddCheckbox.prop('checked')) {
            $elSetAdd3.val($elHeadAdd3.val());
            validateTarget($elSetAdd3[0]);
        }
    });
}

// 6. validation - 御社名
// 00N0I00000KRr62
const $elCompanyName1 = $('[name="00N0I00000KRr62"]');
if ($elCompanyName1) {
    $elCompanyName1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 7. validation - 御社名（フリガナ）
// 00N2u000000H2l3
const $elCompanyName2 = $('[name="00N2u000000H2l3"]');
if ($elCompanyName2) {
    $elCompanyName2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 8. validation - 代表者姓
// 00N2u000000H2l8
const $elRepName1 = $('[name="00N2u000000H2l8"]');
if ($elRepName1) {
    $elRepName1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 9. validation - 代表者名
// 00N2u000000H2lD
const $elRepName2 = $('[name="00N2u000000H2lD"]');
if ($elRepName2) {
    $elRepName2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}
// 10. validation - 代表者姓（フリガナ）
// 00N2u000000H2lN
const $elRepName3 = $('[name="00N2u000000H2lN"]');
if ($elRepName3) {
    $elRepName3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 11. validation - 代表者名（フリガナ）
// 00N2u000000H2lS
const $elRepName4 = $('[name="00N2u000000H2lS"]');
if ($elRepName4) {
    $elRepName4.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 12. validation - 代表者生年月日（年）
// 00N2u000000H2lX
const $elRepBirthday1 = $('[name="00N2u000000H2lX"]');
if ($elRepBirthday1) {
    $elRepBirthday1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 13. validation - 代表者生年月日（月）
// 00N2u000000H2lc
const $elRepBirthday2 = $('[name="00N2u000000H2lc"]');
if ($elRepBirthday2) {
    $elRepBirthday2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}
// 14. validation - 代表者生年月日（日）
// 00N2u000000H2lI
const $elRepBirthday3 = $('[name="00N2u000000H2lI"]');
if ($elRepBirthday3) {
    $elRepBirthday3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 15. validation - 代表者役職
// 00N2u000000H2lh
const $elRepPosition = $('[name="00N2u000000H2lh"]');
if ($elRepPosition) {
    $elRepPosition.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 28. validation - 運用者姓
// 00N2u000000H2m6
const $elAssignName1 = $('[name="00N2u000000H2m6"]');
if ($elAssignName1) {
    $elAssignName1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

const $assignNameCheckbox = $('#assign-name-checkbox'); // お申込者氏名と同じ チェックボックス

// 38. validation - 回線契約者姓
// 00N2u000000H2mf
const $elContractorName1 = $('[name="00N2u000000H2mf"]');
if ($elContractorName1) {
    $elContractorName1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

const $contractorNameCheckbox = $('#contractor-name-checkbox'); // お申込者氏名と同じ チェックボックス

// 16. validation - お申込者姓
// name
const $elAppName1 = $('[name="name"]');
if ($elAppName1) {
    $elAppName1.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($assignNameCheckbox.prop('checked')) {
            $elAssignName1.val($elAppName1.val());
            validateTarget($elAssignName1[0]);
        }
        if ($contractorNameCheckbox.prop('checked')) {
            $elContractorName1.val($elAppName1.val());
            validateTarget($elContractorName1[0]);
        }
    });
}

// 29. validation - 運用者名
// 00N2u000000H2mB
const $elAssignName2 = $('[name="00N2u000000H2mB"]');
if ($elAssignName2) {
    $elAssignName2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 39. validation - 回線契約者名
// 00N2u000000H2mk

const $elContractorName2 = $('[name="00N2u000000H2mk"]');
if ($elContractorName2) {
    $elContractorName2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 17. validation - お申込者名
// 00N0I00000Jxe34
const $elAppName2 = $('[name="00N0I00000Jxe34"]');
if ($elAppName2) {
    $elAppName2.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($assignNameCheckbox.prop('checked')) {
            $elAssignName2.val($elAppName2.val());
            validateTarget($elAssignName2[0]);
        }
        if ($contractorNameCheckbox.prop('checked')) {
            $elContractorName2.val($elAppName2.val());
            validateTarget($elContractorName2[0]);
        }
    });
}

// 30. validation - 運用者姓（フリガナ）
// 00N2u000000H2mG
const $elAssignName3 = $('[name="00N2u000000H2mG"]');
if ($elAssignName3) {
    $elAssignName3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 40. validation - 回線契約者姓（フリガナ）
// 00N2u000000H2mp
const $elContractorName3 = $('[name="00N2u000000H2mp"]');
if ($elContractorName3) {
    $elContractorName3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 18. validation - お申込者姓（フリガナ）
// 00N2u000000H2lm
const $elAppName3 = $('[name="00N2u000000H2lm"]');
if ($elAppName3) {
    $elAppName3.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($assignNameCheckbox.prop('checked')) {
            $elAssignName3.val($elAppName3.val());
            validateTarget($elAssignName3[0]);
        }
        if ($contractorNameCheckbox.prop('checked')) {
            $elContractorName3.val($elAppName3.val());
            validateTarget($elContractorName3[0]);
        }
    });
}

// 31. validation - 運用者名（フリガナ）
// 00N2u000000H2mL
const $elAssignName4 = $('[name="00N2u000000H2mL"]');
if ($elAssignName4) {
    $elAssignName4.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 41. validation - 回線契約者名（フリガナ）
// 00N2u000000H2mu
const $elContractorName4 = $('[name="00N2u000000H2mu"]');
if ($elContractorName4) {
    $elContractorName4.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 19. validation - お申込者名（フリガナ）
// 00N2u000000H2lr

const $elAppName4 = $('[name="00N2u000000H2lr"]');
if ($elAppName4) {
    $elAppName4.on('change blur', function(e, param) {
        validateTarget(this, param);
        if ($assignNameCheckbox.prop('checked')) {
            $elAssignName4.val($elAppName4.val());
            validateTarget($elAssignName4[0]);
        }
        if ($contractorNameCheckbox.prop('checked')) {
            $elContractorName4.val($elAppName4.val());
            validateTarget($elContractorName4[0]);
        }
    });
}

// 20. validation - お申込者年月日（年）
// 00N0I00000Jz75p
const $elAppBirthday1 = $('[name="00N0I00000Jz75p"]');
if ($elAppBirthday1) {
    $elAppBirthday1.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}
// 21. alidation - お申込者年月日（月）
// 00N0I00000Jz75u
const $elAppBirthday2 = $('[name="00N0I00000Jz75u"]');
if ($elAppBirthday2) {
    $elAppBirthday2.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}
// 22. validation - お申込者年月日（日）
// 00N0I00000Jz75z
const $elAppBirthday3 = $('[name="00N0I00000Jz75z"]');
if ($elAppBirthday3) {
    $elAppBirthday3.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 32. validation - 運用者役職
// 00N2u000000H2mQ
const $elAssignPosition = $('[name="00N2u000000H2mQ"]');
if ($elAssignPosition) {
    $elAssignPosition.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

const $assignPositionCheckbox = $('#assign-position-checkbox');

// 23. validation - お申し込み者役職
// 00N2u000000H2lw
const $elAppPosition = $('[name="00N2u000000H2lw"]');
if ($elAppPosition) {
    $elAppPosition.on('change blur', function(e, param) {
        validateTarget(this, param);
        if($assignPositionCheckbox.prop('checked')) {
            $elAssignPosition.val($elAppPosition.val());
            validateTarget($elAssignPosition[0]);
        }
    });
}

// 27. validation - 店舗名・部署名
// 00N2u000000H2m1
const $elSetStore = $('[name="00N2u000000H2m1"]');
if ($elSetStore) {
    $elSetStore.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 33. validation - 運用者メールアドレス
// email
const $elAssignEmail = $('[name="email"]');
if ($elAssignEmail) {
    $elAssignEmail.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 34. validation - 連絡先電話番号
// 00N0I00000Jxe3E
const $elAssignTel = $('[name="00N0I00000Jxe3E"]');
if ($elAssignTel) {
    $elAssignTel.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 35. validation - お客様ID
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

// 36. validation - インターネット回線名
// 00N2u000000H2ma
const $elConnection = $('[name="00N2u000000H2ma"]');
if ($elConnection) {
    $elConnection.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 37. validation - サービスタイプ
// 00N2u000000H2mz
const $elServiceType = $('[name="00N2u000000H2mz"]');
if ($elServiceType) {
    $elServiceType.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// 42. validation - 回線登録先電話番号
// 00N2u000000H2mv
const $elContractorTel = $('[name="00N2u000000H2mv"]');
if ($elContractorTel) {
    $elContractorTel.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// 43. validation - カラー
// 00N0I00000Jz6VN
const $elColor = $('[name="00N0I00000Jz6VN"]');
if ($elColor) {
    $elColor.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

function chkAll() {
    // 1 n.a.
    // 2
    if ($elBusinessType) {
        $elBusinessType.eq(1).trigger('change', ['chkAll']);
    }
    // 3, 4, 5
    if ($elHeadAdd1) {
        $elHeadAdd1.trigger('change', ['chkAll']);
    }
    if ($elHeadAdd2) {
        $elHeadAdd2.trigger('change', ['chkAll']);
    }
    if ($elHeadAdd3) {
        $elHeadAdd3.trigger('change', ['chkAll']);
    }
    // 6, 7
    if ($elCompanyName1) {
        $elCompanyName1.trigger('change', ['chkAll']);
    }
    if ($elCompanyName2) {
        $elCompanyName2.trigger('change', ['chkAll']);
    }
    // 8, 9, 10, 11
    if ($elRepName1) {
        $elRepName1.trigger('change', ['chkAll']);
    }
    if ($elRepName2) {
        $elRepName2.trigger('change', ['chkAll']);
    }
    if ($elRepName3) {
        $elRepName3.trigger('change', ['chkAll']);
    }
    if ($elRepName4) {
        $elRepName4.trigger('change', ['chkAll']);
    }
    // 12, 13, 14
    if ($elRepBirthday1) {
        $elRepBirthday1.trigger('change', ['chkAll']);
    }
    if ($elRepBirthday2) {
        $elRepBirthday2.trigger('change', ['chkAll']);
    }
    if ($elRepBirthday3) {
        $elRepBirthday3.trigger('change', ['chkAll']);
    }
    // 15
    if ($elRepPosition) {
        $elRepPosition.trigger('change', ['chkAll']);
    }
    // 16, 17, 18, 19
    if ($elAppName1) {
        $elAppName1.trigger('change', ['chkAll']);
    }
    if ($elAppName2) {
        $elAppName2.trigger('change', ['chkAll']);
    }
    if ($elAppName3) {
        $elAppName3.trigger('change', ['chkAll']);
    }
    if ($elAppName4) {
        $elAppName4.trigger('change', ['chkAll']);
    }
    // 20, 21, 22
    if ($elAppBirthday1) {
        $elAppBirthday1.trigger('change', ['chkAll']);
    }
    if ($elAppBirthday2) {
        $elAppBirthday2.trigger('change', ['chkAll']);
    }
    if ($elAppBirthday3) {
        $elAppBirthday3.trigger('change', ['chkAll']);
    }
    // 23
    if ($elAppPosition) {
        $elAppPosition.trigger('change', ['chkAll']);
    }
    // 24, 25, 26
    if ($elSetAdd1) {
        $elSetAdd1.trigger('change', ['chkAll']);
    }
    if ($elSetAdd2) {
        $elSetAdd2.trigger('change', ['chkAll']);
    }
    if ($elSetAdd3) {
        $elSetAdd3.trigger('change', ['chkAll']);
    }
    // 27
    if ($elSetStore) {
        $elSetStore.trigger('change', ['chkAll']);
    }
    // 28, 29, 30, 31
    if ($elAssignName1) {
        $elAssignName1.trigger('change', ['chkAll']);
    }
    if ($elAssignName2) {
        $elAssignName2.trigger('change', ['chkAll']);
    }
    if ($elAssignName3) {
        $elAssignName3.trigger('change', ['chkAll']);
    }
    if ($elAssignName4) {
        $elAssignName4.trigger('change', ['chkAll']);
    }
    // 32
    if ($elAssignPosition) {
        $elAssignPosition.trigger('change', ['chkAll']);
    }
    // 33
    if ($elAssignEmail) {
        $elAssignEmail.trigger('change', ['chkAll']);
    }
    // 34
    if ($elAssignTel) {
        $elAssignTel.trigger('change', ['chkAll']);
    }
    // 35 n.a.
    // 36
    if ($elConnection) {
        $elConnection.trigger('change', ['chkAll']);
    }
    // 37
    if ($elServiceType) {
        $elServiceType.trigger('change', ['chkAll']);
    }
    // 38, 39, 40, 41
    if ($elContractorName1) {
        $elContractorName1.trigger('change', ['chkAll']);
    }
    if ($elContractorName2) {
        $elContractorName2.trigger('change', ['chkAll']);
    }
    if ($elContractorName3) {
        $elContractorName3.trigger('change', ['chkAll']);
    }
    if ($elContractorName4) {
        $elContractorName4.trigger('change', ['chkAll']);
    }
    // 42
    if ($elContractorTel) {
        $elContractorTel.trigger('change', ['chkAll']);
    }
    // 43
    if ($elColor) {
        $elColor.trigger('change', ['chkAll']);
    }
    return errors;
}

// お申し込み者氏名のエラーチェック
const $errRequiredLastName = $('#err-required_name');
const $errRequiredFirstName = $('#err-required_00N0I00000Jxe34');
const $errRequiredLastNameFurigana = $('#err-required_00N2u000000H2lm');
const $errKatakanaLastNameFurigana = $('#err-katakana_00N2u000000H2lm');
const $errRequiredFirstNameFurigana = $('#err-required_00N2u000000H2lr');
const $errKatakanaFirstNameFurigana = $('#err-katakana_00N2u000000H2lr');

function chkAppName () {
    let acc1 = 0;
    const arr1 = [
        $errRequiredLastName,
        $errRequiredFirstName,
        $errRequiredLastNameFurigana,
        $errKatakanaLastNameFurigana,
        $errRequiredFirstNameFurigana,
        $errKatakanaFirstNameFurigana
    ];

    arr1.forEach(elem => {
        if (elem.attr('aria-hidden') === 'false') {
            acc1 += 1;
        }
    });

    let acc2 = 0;
    const arr2 = [
        $elAppName1,
        $elAppName2,
        $elAppName3,
        $elAppName4
    ];

    arr2.forEach(elem => {
        if(elem.val() === '') {
            acc2 += 1;
        }
    });

    return (acc1 === 0 && acc2 === 0) ? true : false;
}

// 運用者氏名、「お申込者氏名と同じ」チェックボックス

const $secAssignName = $('#assign-name-section');

$assignNameCheckbox.click(function(){
    if($assignNameCheckbox.prop('checked')){
        if(chkAppName()) {
            $secAssignName.find('p[id^="err"]').attr('aria-hidden', 'true');
            $secAssignName.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');

            $elAssignName1.val($elAppName1.val());
            $elAssignName2.val($elAppName2.val());
            $elAssignName3.val($elAppName3.val());
            $elAssignName4.val($elAppName4.val());

            $elAssignName1.attr('readonly', '');
            $elAssignName2.attr('readonly', '');
            $elAssignName3.attr('readonly', '');
            $elAssignName4.attr('readonly', '');
        } else {
            $assignNameCheckbox.prop('checked', false);
            $('body,html').animate({scrollTop: $('#app-name-scroll').offset().top}, 400, 'swing');
        }
    } else {
        $elAssignName1.val('');
        $elAssignName2.val('');
        $elAssignName3.val('');
        $elAssignName4.val('');

        $elAssignName1.removeAttr('readonly');
        $elAssignName2.removeAttr('readonly');
        $elAssignName3.removeAttr('readonly');
        $elAssignName4.removeAttr('readonly');

        $secAssignName.find('p[id^="err"]').attr('aria-hidden', 'true');
        $secAssignName.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');
    }
});

// 回線契約者氏名、「お申込者氏名と同じ」チェックボックス

const $secContractorName = $('#contractor-name-section');

$contractorNameCheckbox.click(function(){
    if($contractorNameCheckbox.prop('checked')){
        if(chkAppName()) {
            $secContractorName.find('p[id^="err"]').attr('aria-hidden', 'true');
            $secContractorName.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');

            $elContractorName1.val($elAppName1.val());
            $elContractorName2.val($elAppName2.val());
            $elContractorName3.val($elAppName3.val());
            $elContractorName4.val($elAppName4.val());

            $elContractorName1.attr('readonly', '');
            $elContractorName2.attr('readonly', '');
            $elContractorName3.attr('readonly', '');
            $elContractorName4.attr('readonly', '');
        } else {
            $contractorNameCheckbox.prop('checked', false);
            $('body,html').animate({scrollTop: $('#app-name-scroll').offset().top}, 400, 'swing');
        }
    } else {
        $elContractorName1.val('');
        $elContractorName2.val('');
        $elContractorName3.val('');
        $elContractorName4.val('');

        $elContractorName1.removeAttr('readonly');
        $elContractorName2.removeAttr('readonly');
        $elContractorName3.removeAttr('readonly');
        $elContractorName4.removeAttr('readonly');

        $secContractorName.find('p[id^="err"]').attr('aria-hidden', 'true');
        $secContractorName.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');
    }
});

// 本店住所のエラーチェック
const $errRequiredHeadAdd1 = $('#err-required_00N2u000000H2ko');
const $errNumericHeadAdd1 = $('#err-numeric_00N2u000000H2ko');
const $errLengthHeadAdd1 = $('#err-length_00N2u000000H2ko');
const $errRequiredHeadAdd2 = $('#err-required_00N2u000000H2kt');
const $errRequiredHeadAdd3 = $('#err-required_00N2u000000H2ky');

function chkHeadAdd () {
    let acc1 = 0;
    const arr1 = [
        $errRequiredHeadAdd1,
        $errNumericHeadAdd1,
        $errLengthHeadAdd1,
        $errRequiredHeadAdd2,
        $errRequiredHeadAdd3,
    ];

    arr1.forEach(elem => {
        if (elem.attr('aria-hidden') === 'false') {
            acc1 += 1;
        }
    });

    let acc2 = 0;
    const arr2 = [
        $elHeadAdd1,
        $elHeadAdd2,
        $elHeadAdd3,
    ];

    arr2.forEach(elem => {
        if(elem.val() === '') {
            acc2 += 1;
        }
    });

    return (acc1 === 0 && acc2 === 0) ? true : false;
}

// 設置先住所、「本店住所と同じ」チェックボックス

const $elZipSetAdd = $('#zip-set-add');
const $secSetAdd = $('#set-add-section');

$setAddCheckbox.click(function(){
    if($setAddCheckbox.prop('checked')){
        if(chkHeadAdd()) {
            $secSetAdd.find('p[id^="err"]').attr('aria-hidden', 'true');
            $secSetAdd.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');

            $elSetAdd1.val($elHeadAdd1.val());
            $elSetAdd2.val($elHeadAdd2.val());
            $elSetAdd3.val($elHeadAdd3.val());

            $elSetAdd1.attr('readonly', '');
            $elSetAdd2.attr('readonly', '');
            $elSetAdd3.attr('readonly', '');

            $elZipSetAdd.attr('aria-disabled', 'true');
        } else {
            $setAddCheckbox.prop('checked', false);
            $('body,html').animate({scrollTop: $('#head-add-scroll').offset().top}, 400, 'swing');
        }
    } else {
        $elSetAdd1.val('');
        $elSetAdd2.val('');
        $elSetAdd3.val('');

        $elSetAdd1.removeAttr('readonly');
        $elSetAdd2.removeAttr('readonly');
        $elSetAdd3.removeAttr('readonly');

        $elZipSetAdd.attr('aria-disabled', 'false');

        $secSetAdd.find('p[id^="err"]').attr('aria-hidden', 'true');
        $secSetAdd.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');
    }
});



// お申し込み者役職のエラーチェック
const $errRequiredAppPosition = $('#err-required_00N2u000000H2lw');

function chkAppPosition () {
    let acc1 = 0;
    if ($errRequiredAppPosition.attr('aria-hidden') === 'false') {
        acc1 += 1;
    }

    let acc2 = 0;
    if($elAppPosition.val() === '') {
        acc2 += 1;
    }

    return (acc1 === 0 && acc2 === 0) ? true : false;
}

// 運用者役職、「お申し込み者役職と同じ」チェックボックス

const $secAssignPosition = $('#assign-position-section');

$assignPositionCheckbox.click(function(){
    if($assignPositionCheckbox.prop('checked')){
        if(chkAppPosition()) {
            $secAssignPosition.find('p[id^="err"]').attr('aria-hidden', 'true');
            $secAssignPosition.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');

            $elAssignPosition.val($elAppPosition.val());
            $elAssignPosition.attr('readonly', '');
        } else {
            $assignPositionCheckbox.prop('checked', false);
            $('body,html').animate({scrollTop: $('#app-position-scroll').offset().top}, 400, 'swing');
        }
    } else {
        $elAssignPosition.val('');
        $elAssignPosition.removeAttr('readonly');

        $secAssignPosition.find('p[id^="err"]').attr('aria-hidden', 'true');
        $secAssignPosition.find('input[aria-invalid="true"]').attr('aria-invalid', 'false');
    }
});


// 同意チェック
const $elchkConsent = $('#js-casa-onsite_Consent');
const $elchkConsentSolo = $('#js-casa-onsite_Consent_solo');

const $Submit = $('#js-casa-onsite_Submit');
const $Submit_solo = $('#js-casa-onsite_Submit_solo');

$elchkConsentSolo.on('change', function(){
    if ($elchkConsentSolo.is(':checked')) {
      $Submit_solo.removeClass('area-casa-input-onsite-application-Form_Submit_btn-disabled');
      $Submit_solo.attr('aria-disabled', 'false');
    } else {
      $Submit_solo.addClass('area-casa-input-onsite-application-Form_Submit_btn-disabled');
      $Submit_solo.attr('aria-disabled', 'true');
    }
  });

$elchkConsent.on('change', function(){
if ($elchkConsent.is(':checked')) {
    $Submit.removeClass('area-casa-input-onsite-application-Form_Submit_btn-disabled');
    $Submit.attr('aria-disabled', 'false');
} else {
    $Submit.addClass('area-casa-input-onsite-application-Form_Submit_btn-disabled');
    $Submit.attr('aria-disabled', 'true');
}
});


const switchBusinessType = $('input[name=00N2u000000GxEn]');
const $corp = $('#js-casa-onsite_Confirm');
const $solo = $('#js-casa-onsite_Confirm_solo');
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

document.getElementById('js-casa-onsite_Confirm').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $('#modal-confirm').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('#js-casa-onsite_Form-top').offset().top}, 400, 'swing');
    }
});
document.getElementById('js-casa-onsite_Confirm-close').addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
});

document.getElementById('js-casa-onsite_Confirm_solo').addEventListener('click', (e) => {
    if (chkAll().length === 0) {
        $('#modal-confirm_solo').modaal('open');
    } else {
        $('body,html').animate({scrollTop: $('#js-casa-onsite_Form-top').offset().top}, 400, 'swing');
    }
});

document.getElementById('js-casa-onsite_Confirm-close_solo').addEventListener('click', (e) => {
    $('#modal-confirm_solo').modaal('close');
});
