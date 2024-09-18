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

const paramCase = getParam('case');
if( paramCase && !isNaN(paramCase) && paramCase.length === 8 && paramCase[0] === '0' ) {
    const paramTrue = document.getElementById('paramTrue');
    paramTrue.setAttribute('aria-hidden', 'false');
    const el00N2u000000PsQD = document.getElementById('00N2u000000PsQD');
    el00N2u000000PsQD.value = paramCase;

} else {
    const paramFalse = document.getElementById('paramFalse');
    paramFalse.setAttribute('aria-hidden', 'false');
}

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
    } else {
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

// validation - 楽天モバイルID
const $el00N2u000000PsQI = $('[name="00N2u000000PsQI"]');
if ($el00N2u000000PsQI) {
    $el00N2u000000PsQI.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

function chkAll() {
    if ($el00N2u000000jNq0) {
        $el00N2u000000jNq0.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000PsQI) {
        $el00N2u000000PsQI.trigger('change', ['chkAll']);
    }
    return errors;
}

// smoothScroll
const smoothScroll = el => {
    const rectTop = el.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const target = rectTop + positionY;
    window.scrollTo({
        top: target,
        behavior: "smooth",
    });
}

// 貸出し選択
const selectInfos = document.getElementsByName('select_info');
const device =  document.getElementById('js-select-device');
const casa =  document.getElementById('js-select-casa');

selectInfos.forEach(selectInfo => {
    selectInfo.addEventListener('change', e => {
        const selectValue = e.currentTarget.value;
        if(selectValue === '代用機') {
            device.setAttribute('aria-hidden', false);
            casa.setAttribute('aria-hidden', true);
            smoothScroll(device);

        } else if(selectValue === 'Rakuten Casa') {
            device.setAttribute('aria-hidden', true);
            casa.setAttribute('aria-hidden', false);
            smoothScroll(casa);

        } else {
            casa.setAttribute('aria-hidden', true);
            device.setAttribute('aria-hidden', true);
        }
    });
});


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
