import validator from 'validator';
import DOMPurify from 'dompurify';

let errors = [];

export const validation = (target, param, telsize, wordcount) => {
    // 必須
    const chkRequired = el => {
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
    // 半角数字
    const chkNumeric = el => {
        let msgId = `err-numeric_${el.getAttribute('name')}`;
        let msg = document.getElementById(msgId);
        if ( el.value.length > 0 ) {
            if (validator.isNumeric(el.value, { no_symbols: true })) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        }
    }
    // 文字数
    const chkLength = el => {
        let msgId = `err-length_${el.getAttribute('name')}`;
        let msg = document.getElementById(msgId);
        if ( el.value.length > 0 ) {
            let setting = {
                min: isNaN(el.getAttribute('minlength')) ? 0 : parseInt(el.getAttribute('minlength'), 10),
                max: isNaN(el.getAttribute('maxlength')) ? 0 : parseInt(el.getAttribute('maxlength'), 10)
            };
            if (validator.isLength(el.value, setting) ) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        }
    }
    // 全角
    const chkFullwidth = el => {
        if ( el.value.length > 0 ) {
            let msgId = `err-full-width_${el.getAttribute('name')}`;
            let msg = document.getElementById(msgId);
            if (validator.matches(el.value, "^[^\x01-\x7E]*$")) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            return 0;
        }
    }
    // 全角数字
    const chkFullnum = el => {
        if ( el.value.length > 0 ) {
            let msgId = `err-full-num_${el.getAttribute('name')}`;
            let msg = document.getElementById(msgId);
            if (validator.matches(el.value, "^[０-９]*$")) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            return 0;
        }
    }
    // 全角数字・ハイフン
    const chkFullnHyphen = el => {
        if ( el.value.length > 0 ) {
            let msgId = `err-full-n-hyphen_${el.getAttribute('name')}`;
            let msg = document.getElementById(msgId);
            if (validator.matches(el.value, "^[０-９－]*$")) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            return 0;
        }
    }
    // 全角カタカナ
    const chkFullkana = el => {
        let msgId = `err-full-kana_${el.getAttribute('name')}`;
        let msg = document.getElementById(msgId);
        if ( el.value.length > 0 ) {
            if (validator.matches(el.value, "^[ァ-ヶー　]*$")) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        }
    }
    // 全角カタカナ・全角数字・全角スペース・括弧「（）」・ハイフン「－」・ピリオド「．」100文字以内
    const chkKanaPlus = el => {
        if ( el.value.length > 0 ) {
            let msgId = `err-kana-plus_${el.getAttribute('name')}`;
            let msg = document.getElementById(msgId);
            if (validator.matches(el.value, "^[ァ-ヴー０-９　．－（）]*$")) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            return 0;
        }
    }
    // 全角英数字
    const chkAlphaNum = el => {
        if ( el.value.length > 0 ) {
            let msgId = `err-alpha-num_${el.getAttribute('name')}`;
            let msg = document.getElementById(msgId);
            if (validator.matches(el.value, "^[Ａ-Ｚａ-ｚ０-９]*$")) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            return 0;
        }
    }
    // Eメール
    const chkEmail = el => {
        if ( el.value.length > 0 ) {
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
        } else {
            return 0;
        }
    }
    // Eメール確認
    const chkConfirmEmail = el => {
        let msgId = `err-match_${el.getAttribute('name')}`;
        let msg = document.getElementById(msgId);
        const emailVal = $('[name="WebForm_SetContact_Installation_Mail__c"]').val();
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
    // 電話番号
    const chkTel = el => {
        if ( el.value.length > 0 ) {
            let msgId = `err-tel_${el.getAttribute('name')}`;
            let msg = document.getElementById(msgId);
            const telname = el.getAttribute('name');
            const telinput = document.getElementsByName(telname);
            let telinputValueSum = '';
            telinput.forEach(e => telinputValueSum += e.value);

            if (validator.isNumeric(telinputValueSum, { no_symbols: true })) {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            } else {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            }
        } else {
            return 0;
        }
    }
    // 電話番号の長さ
    const chkTelsize = (el, telsize) => {
        let msgId = `err-telsize_${el.getAttribute('name')}_tel`;
        let msg = document.getElementById(msgId);
        if ( telsize > 0 ) {
            if ( telsize > 11 || telsize < 10 ) {
                el.setAttribute('aria-describedBy', msgId);
                msg.setAttribute('aria-hidden', false);
                return 1;
            } else {
                el.setAttribute('aria-describedBy', '');
                msg.setAttribute('aria-hidden', true);
                return 0;
            }
        } else {
            return 0;
        }
    }
    // 合計の文字制限
    const chkWordcount = (el, wordcount) => {
        let msgId = `err-wordcount_${el.getAttribute('name')}`;
        let msg = document.getElementById(msgId);
        if ( wordcount > 100 ) {
            el.setAttribute('aria-describedBy', msgId);
            msg.setAttribute('aria-hidden', false);
            return 1;
        } else {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        }
    }
    // Inputグループに入力漏れがないか
    const chkAllEnteredGroup = (el) => {
        const msgId = `err-allentered_${el.getAttribute('name')}`;
        const msg = document.getElementById(msgId);

        const groupId = el.dataset.validateGroup;
        const elGroup = [...document.querySelectorAll(`[data-validate-group=${groupId}]`)];
        const isAllEmpty = elGroup.every(el => el.value === '');
        const isEmpty = elGroup.some(el => el.value === '');

        if (isAllEmpty) {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        }

        if (isEmpty) {
            el.setAttribute('aria-describedBy', msgId);
            msg.setAttribute('aria-hidden', false);
            return 1;
        } else {
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        }
    }

    const validateTarget = (target, param, telsize, wordcount) => {
        let $target = $(target);
        let item = $target.data('validate');
        let nm = $target.attr('name');
        let $display = $(`#display-${nm}`);
        let idx = errors.indexOf(nm);
        let results = 0;

        if ( item.indexOf('required') > -1 ) results += chkRequired(target);
        if ( item.indexOf('numeric') > -1 ) results += chkNumeric(target);
        if ( item.indexOf('length') > -1 ) results += chkLength(target);
        if ( item.indexOf('full-width') > -1 ) results += chkFullwidth(target);
        if ( item.indexOf('full-num') > -1 ) results += chkFullnum(target);
        if ( item.indexOf('full-n-hyphen') > -1 ) results += chkFullnHyphen(target);
        if ( item.indexOf('full-kana') > -1 ) results += chkFullkana(target);
        if ( item.indexOf('kana-plus') > -1 ) results += chkKanaPlus(target);
        if ( item.indexOf('alpha-num') > -1 ) results += chkAlphaNum(target);
        if ( item.indexOf('email') > -1 ) results += chkEmail(target);
        if ( item.indexOf('confirmEmail') > -1 ) results += chkConfirmEmail(target);
        if ( item.indexOf('tel') > -1 ) results += chkTel(target);
        if ( item.indexOf('all-entered') > -1 ) results += chkAllEnteredGroup(target);

        if ( telsize !==  undefined ) results += chkTelsize(target, telsize);
        if ( wordcount !==  undefined ) results += chkWordcount(target, wordcount);

        if ( results > 0 ) {
            // バリデーションにかかった時
            $target.attr('aria-invalid', true);

            if( telsize !== undefined ) {
                const telName = `${target.getAttribute('name')}_tel`;
                $(`input[name=${telName}]`).attr('aria-invalid', true);
            }
            if( wordcount !==  undefined && wordcount !== 0) {
                const errorName = `${target.getAttribute('name')}`;
                $(`input[name=${errorName}]`).addClass('input-corporation-information-Form_Errorcolor-none');
            }
            if ( item.indexOf('all-entered') > -1 ) {
                const groupId = $target.data('validateGroup');
                const $targetGroup = $(`[data-validate-group=${groupId}]`);
                $targetGroup.each((_, _target) => {
                    if (_target.value !== '') {
                        _target.setAttribute('aria-invalid', false);
                    } else {
                        _target.setAttribute('aria-invalid', true);
                    }
                });
            }
            if ( param === 'chkAll' ) {
                if ( idx < 0 ) errors.push(nm);
            }
        } else {
            // バリデーションを通過した時
            $target.attr('aria-invalid', false);

            if( wordcount !==  undefined && wordcount !== 0) {
                const errorName = `${target.getAttribute('name')}`;
                $(`input[name=${errorName}]`).removeClass('input-corporation-information-Form_Errorcolor-none');
            }
            if ( item.indexOf('all-entered') > -1 ) {
                const groupId = $target.data('validateGroup');
                const $targetGroup = $(`[data-validate-group=${groupId}]`);
                $targetGroup.each((_, _target) => {
                    _target.setAttribute('aria-invalid', false);
                });
            }
            if ( param === 'chkAll' ) {
                if ( idx > -1 ) errors.splice(idx, 1);
                if ( item.indexOf('radio') > -1 ) {
                    $display.text(DOMPurify.sanitize($('input[name="' + nm + '"]').filter(":checked").val(), {ALLOWED_TAGS: []}));
                } else {
                    $display.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
                }
            }
        }
        console.log('---errors.length---');
        console.log(errors.length);
        return errors.length;
    }

    return validateTarget(target, param, telsize, wordcount);
};

export const errorReset = () => { return errors.length = 0 };
