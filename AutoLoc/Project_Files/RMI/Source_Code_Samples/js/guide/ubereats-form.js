import validator from 'validator';
import DOMPurify from 'dompurify';
import axios from 'axios';


/**
 * 生年月日の設定
 */
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
$('.js-Datepicker').datepicker(datepickerSetBirth);
$('.js-Datepicker').datepicker({maxDate: new Date()});// today以降選択不可
$('.js-Datepicker').data('datepicker').selectDate(new Date('1980/01/01'));
$('.js-Datepicker_Btn').on('click', () => {
    $('.js-Datepicker').show();
});

/**
 * Reset for browser back
 */
window.onpageshow = function() {
    $('input[type="radio"]').prop('checked', false);
    $('input[type="checkbox"]').prop('checked', false);
};

let checkedItems = [];
const errors = [];
let canClickPostCode = false;
let isConfirming = false;
const nextBtn = document.getElementById('js-nextbtn');
const backToCustomerInfoBtn = document.getElementById('js-back-customer-info-btn');

const $optionBlock = $('#js-00N5i00000HVUPe');
const customerInfoLead = document.getElementById('js-customer-info-lead')
const planLead = document.getElementById('js-plan-lead')
const topEl = document.getElementById('js-top');
const planNote = document.getElementById('js-plan-note');

function validateTarget(target, param) {
    /**
     * 郵便番号から住所表示ボタンの活性化フラグ
     */
    if (target.classList.contains('js-postcode')) {
        canClickPostCode = false;
    }

    /**
     * validation - type
     */
    function chkRequired(el) {
        const elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
        const msgId = `err-required_${elementId}`;
        const msg = document.getElementById(msgId);
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
        const elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
        const msgId = `err-alphanumeric_${elementId}`;
        const msg = document.getElementById(msgId);

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
        const elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
        const msgId = `err-numeric_${elementId}`;
        const msg = document.getElementById(msgId);
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
        const elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
        const msgId = `err-length_${elementId}`;
        const msg = document.getElementById(msgId);
        const setting = {
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
        const elementId = el.getAttribute('name') || el.getAttribute('id');
        const msgId = `err-email_${elementId}`;
        const msg = document.getElementById(msgId);
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
        const msgId = `err-match_${el.getAttribute('name')}`;
        const msg = document.getElementById(msgId);
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
    function chkKatakana(el) {
        function isZenKatakana(str){
            if (str.match(/^[ァ-ヶー]+$/)) {
                return true;
            } else {
                return false;
            }
        }

        const elementId = el.getAttribute('name') ? el.getAttribute('name') : el.getAttribute('id');
        const msgId = `err-katakana_${elementId}`;
        const msg = document.getElementById(msgId);
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

    function chkCheckbox(el) {
        const chks = el.querySelectorAll('input[type="checkbox"]');
        const selected = [];

        chks.forEach(el => {
            if (el.checked) {
                selected.push(el.value);
            }
        });
        if (selected.length > 0) {
            el.setAttribute('data-label', selected.join('／'));
        } else {
            el.setAttribute('data-label', '');
        }

        return 0
    }

    function chkRadio(el) {
        let msgId     = `err-radio_${el.getAttribute('name')}`;
        let msg       = document.getElementById(msgId);
        let radioId   = el.getAttribute('name');
        let radioList = document.querySelectorAll('input[name="' + radioId + '"]');
        let radioFlag = false;
        for(let i = 0; i < radioList.length; i++) {
            if( radioList[i].checked ) {
                radioFlag = true;
            }
        }
        if (radioFlag) {
            console.log(el)
            console.log(radioList)
            //radioList.forEach((elem) => {
            //    elem.setAttribute('aria-describedBy', '');
            //})
            el.setAttribute('aria-describedBy', '');
            msg.setAttribute('aria-hidden', true);
            return 0;
        } else {
            console.log(el)
            console.log(radioList)
            el.setAttribute('aria-describedBy', msgId);
            msg.setAttribute('aria-hidden', false);
            return 1;
        }
    }

    const $target = $(target);
    const item = $target.data('validate');
    const nm = $target.attr('name') || $target.attr('id').replace('js-', '');
    const $disp = $(`#js-confirm-${nm}`);
    const idx = errors.indexOf(nm);
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
    if (item.indexOf('confirmEmail') > -1) {
        results += chkConfirmEmail(target);
    }
    if (item.indexOf('checkbox') > -1) {
        results += chkCheckbox(target);
    }
    if (item.indexOf('katakana') > -1) {
        results += chkKatakana(target);
    }
    if (item.indexOf('radio') > -1) {
        results += chkRadio(target);
    }

    // console.log({item, results})
    const hasRequiredItemError = idx === -1;
    if (results > 0) {
        $target.attr('aria-invalid', true);
        if (param === 'chkAll') {
            if (hasRequiredItemError) {
                errors.push(nm);
            }
        }
    } else {
        $target.attr('aria-invalid', false);
        if (param === 'chkAll') {
            console.log({item})
            if (!hasRequiredItemError) {
                errors.splice(idx, 1);
            }
            if (item.indexOf('radio') > -1 ) {
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
                console.log('その他', $disp, $target, $target.val())
                $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
            }
        }
    }
}

const $lastName = $('[name="name"]');
const $firstName = $('[name="00N5i00000HVTpy"]');
const $lastNameKana = $('[name="00N5i00000HVTxx"]');
const $firstNameKana = $('[name="00N5i00000HVU9l"]');
const $gender = $('[name="00N5i00000HVUA5"]');
const $birth = $('[name="00N5i00000HVUAP"]');
const $job = $('[name="00N5i00000HVUAj"]');
const $postCode = $('[name="00N5i00000HVUB3"]');
const $address1 = $('[name="00N5i00000HVUBD"]');
const $address2 = $('[name="00N5i00000HVUBh"]');
const $phone = $('[name="phone"]');
const $mail = $('[name="email"]');
const $confirmEmail = $('[name="confirm-email"]');

const $plan = $('[name="00N5i00000HVUM6"]');
const $product = $('[name="00N5i00000HVUMz"]');
const $color = $('[name="00N5i00000HVUOv"]');
const $sim = $('[name="00N5i00000HVUPU"]');
const $option = $('[name="00N5i00000HVUPe"]');

const $dispProductInfo = $('.js-disp-product-info');

const routerArray = ['Rakuten WiFi Pocket 2C', 'Aterm MP02LN', 'Aterm MR05LN RW']

const customerForm = document.getElementById('js-customer-info');
const planForm = document.getElementById('js-plan-info');
const form = document.getElementById('js-customer-info-form');
const editBtn = document.getElementById('js-confirm-close-product');
const submitBtn = document.getElementById('js-submit');

let postCodeData;
let productsData;

const doVaridate = () => {
    const customerInfoValidate = (inputs) => {
        const inputList = JSON.stringify(
            [
                'name',
                '00N5i00000HVTpy',
                '00N5i00000HVTxx',
                '00N5i00000HVUA5',
                '00N5i00000HVU9l',
                '00N5i00000HVUB3',
                '00N5i00000HVUBh',
                '00N5i00000HVUBD',
                '00N5i00000HVUAP',
                '00N5i00000HVUAj',
                'phone',
                'email',
                'confirm-email',
            ].sort()
        )

        // console.log('inputs', inputs)
        // console.log('inputList', inputList)
        if (inputs == inputList) {
            return true
        }

        return false
    }

    const updateCheckedItems = (inputItem) => {
        if (inputItem.attr('aria-invalid') === 'false') {
            if(!checkedItems.includes(inputItem.attr('name'))) {
                checkedItems.push(inputItem.attr('name'));
            }
        } else {
            checkedItems = checkedItems.filter(item => item !== inputItem.attr('name'));
        }

        if (customerInfoValidate(JSON.stringify(checkedItems.sort()))) {
            console.log('All OK!');
            nextBtn.setAttribute('aria-disabled', false);
        } else {
            nextBtn.setAttribute('aria-disabled', true);
        }
    }

    /**
     * validation - 姓
     */
    if ($lastName) {
        $lastName.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($lastName);
        });
    }

    /**
     * validation - 名
     */
    if ($firstName) {
        $firstName.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($firstName);
        });
    }
    /**
     * validation - 姓（カタカナ）
     */
    if ($lastNameKana) {
        $lastNameKana.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($lastNameKana);
        });
    }

    /**
     * validation - 名（カタカナ）
     */
    if ($firstNameKana) {
        $firstNameKana.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($firstNameKana);
        });
    }

    /**
     * validation - 性別
     */
    if ($gender) {
        $gender.on('change blur', function(e, param) {
            let radioList = document.querySelectorAll('input[name="00N5i00000HVUA5"]');
            radioList.forEach((elemChild,) => {
                validateTarget(elemChild, param)
            });
        });
    }

    /**
     * validation - 生年月日
     */
    if ($birth) {
        $birth.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($birth);
        });
    }

    /**
     * validation - 職業
     */
    if ($job) {
        $job.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($job);
        });
    }

    /**
     * validation - 郵便番号
     */
    if ($postCode) {
        $postCode.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($postCode);

            const zipBtn = document.getElementsByClassName('js-zip2addr');
            if (zipBtn && e.currentTarget.value.length === 7) {
                const $errMsg = document.getElementById('err-zipaddr');

                if (postCodeData.includes(e.currentTarget.value)) {
                    $errMsg && $errMsg.setAttribute('aria-hidden', 'true');
                    canClickPostCode = true;

                    $address1.removeAttr('disabled');
                    $address2.removeAttr('disabled');
                } else {
                    $errMsg && $errMsg.setAttribute('aria-hidden', 'false');
                    canClickPostCode = false;

                    // 住所をリセット
                    $address1.val('');
                    $address1.attr('disabled', 'true');
                    $address2.val('');
                    $address2.attr('disabled', 'true');

                }
            }

            if (canClickPostCode) {
                zipBtn[0].setAttribute('aria-disabled', 'false');
            } else {
                zipBtn[0].setAttribute('aria-disabled', 'true');
            }
        });
    }

    /**
     * validation - 住所1
     */
    if ($address1) {
        $address1.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($address1);
        });
    }

    /**
     * validation - 住所2
     */
    if ($address2) {
        $address2.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($address2);
        });
    }

    /**
     * validation - 電話番号
     */
    if ($phone) {
        $phone.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($phone);
        });
    }

    /**
     * validation - メールアドレス
     */
    if ($mail) {
        $mail.on('change blur', function(e, param) {
            console.log('hey')
            validateTarget(this, param);
            // updateCheckedItems($mail);
        });
    }

    /**
     * validation - メールアドレス(確認用)
     */
    if ($confirmEmail) {
        $confirmEmail.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($confirmEmail);
        });
    }


    /**
     * validation - プラン／製品／オプション情報の入力
     */

    /**
     * validation - お申し込み内容の選択
     */
    if ($plan) {
        $plan.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($plan);
            if (e.currentTarget.value === 'プラン（Rakuten UN-LIMIT VII）') {
                $dispProductInfo.attr('aria-hidden', 'true'); // plan only
            } else {
                $dispProductInfo.attr('aria-hidden', 'false'); // with product
            }
        });
    }

    /**
     * validation - 製品
     */
    if ($product) {
        $product.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($product);
            if (routerArray.indexOf(e.currentTarget.value) > -1) {
                $dispProductInfo[1].setAttribute('aria-hidden', 'true'); // if router is selected
            } else {
                $dispProductInfo[1].setAttribute('aria-hidden', 'false'); // if product other than router is selected
            }
        });
    }

    /**
     * validation - カラー
     */
    if ($color) {
        $color.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($color);
        });
    }

    /**
     * validation - SIMタイプの選択
     */
    if ($sim) {
        $sim.on('change blur', function(e, param) {
            let radioList = document.querySelectorAll('input[name="00N5i00000HVUPU"]');
            radioList.forEach((elemChild,) => {
                validateTarget(elemChild, param)
            });
        });
    }

    /**
     * validation - オプションサービスの選択
     */
    if ($optionBlock) {
        $optionBlock.on('change blur', function(e, param) {
            validateTarget(this, param);
            // updateCheckedItems($optionBlock);
        });
    }
}


/**
 * 動的フォームコントロール
 */
const updateForm = () => {
    const simQuestion = document.getElementById('js-sim');
    const productsQuestion = document.getElementById('js-products');
    const warrantyIphone = document.getElementById('js-warranty-apple');
    const warrantyAndroid = document.getElementById('js-warranty-android');

    let isReSelectWarranty = false;


    const notHasSimList = [];
    const hasOnlyEsimList = [];
    const modelTypeMap = new Map();
    const createSimTypeList = () => {
        productsData.map(product => {
            if (product['sim-type'] === '0') {
                notHasSimList.push(product.device);
            }

            if (product['sim-type'] === 'esim') {
                hasOnlyEsimList.push(product.device);
            }

            modelTypeMap.set(product.device, product.model);
        });
    }
    const checkHasSim = (product) => !notHasSimList.includes(product);
    const checkHasOnlyEsim = (product) => hasOnlyEsimList.includes(product);


    /**
     * 動的にフォームの内容を変える
     */
    let isReSelect = false;
    const reSelectMsg = document.getElementById('js-re-select');
    const reSelectMsg2 = document.getElementById('js-re-select-2');

    const resetOption = (target) => {
        target.value = '';
        while (target.children.length > 1) {
            target.removeChild(target.lastChild);
        }
    }

    const toggleVisibleQuestions = (...hiddenQ) => {
        if (hiddenQ.includes(productsQuestion)) {
            productsQuestion.setAttribute('aria-hidden', 'true');
        } else {
            productsQuestion.setAttribute('aria-hidden', 'false');
        }

        if (hiddenQ.includes(simQuestion)) {
            simQuestion.setAttribute('aria-hidden', 'true');
        } else {
            simQuestion.setAttribute('aria-hidden', 'false');
        }

        if (hiddenQ.includes($optionBlock)) {
            console.log('hiddenQ.includes($optionBlock)')
            $optionBlock[0].setAttribute('aria-hidden', 'true');
        } else {
            $optionBlock[0].setAttribute('aria-hidden', 'false');
            if (isReSelect) {
                reSelectMsg.setAttribute('aria-hidden', 'false');
                reSelectMsg2.setAttribute('aria-hidden', 'true');
            }
            isReSelect = true;
        }
    }


    const setColors = (currentProduct) => {
        let colors = [];
        for (const product of productsData) {
            if (product.device === currentProduct) {
                colors = product.color.split(',');
                break;
            }
        }

        resetOption($color[0]);
        colors.map(color => {
            const optionTag = document.createElement('option');
            optionTag.setAttribute('value', DOMPurify.sanitize(color, {ALLOWED_TAGS: []}));
            optionTag.textContent = DOMPurify.sanitize(color, {ALLOWED_TAGS: []});
            $color[0].appendChild(optionTag);
        });
    }

    const setProducts = () => {
        resetOption($product[0]);
        productsData.map(product => {
            const optionTag = document.createElement('option');
            optionTag.setAttribute('value', DOMPurify.sanitize(product.device, {ALLOWED_TAGS: []}));
            optionTag.textContent = DOMPurify.sanitize(product.device, {ALLOWED_TAGS: []});
            $product[0].appendChild(optionTag);
        });
    }


    /**
     * 質問選択
     */
    const selectPlan = () => {
        let prevValue = '';
        const resetValues = () => {
            $product[0].value = '';
            $color[0].value = '';
            $color.attr('disabled', true);
            $sim.prop('checked', false);
            $optionBlock[0].setAttribute('data-label', '');
            for (const option of $option) {
                option.checked = false;
            }
            errors.length = 0;
        }

        $plan[0] && $plan[0].addEventListener('change', () => {
            const currentValue = $plan[0].value
            /**
             * 何もしない
             */
            if (prevValue === currentValue) {
                return;
            }

            if (
                prevValue === 'プラン（Rakuten UN-LIMIT VII）＋製品購入' &&
                currentValue === '製品購入のみ'
            ) {
                scrollTo(productsQuestion);
                prevValue = currentValue;
                return;
            }

            if (
                prevValue === '製品購入のみ' &&
                currentValue === 'プラン（Rakuten UN-LIMIT VII）＋製品購入'
            ) {
                scrollTo(productsQuestion);
                prevValue = currentValue;
                return;
            }

            prevValue = currentValue;

            /**
             * 選択項目変更とValueリセット
             */
            switch (currentValue) {
                case 'プラン（Rakuten UN-LIMIT VII）':
                    toggleVisibleQuestions(productsQuestion, simQuestion);
                    resetValues();
                    scrollTo($optionBlock);
                    planNote.setAttribute('aria-hidden', false);
                    break;
                case 'プラン（Rakuten UN-LIMIT VII）＋製品購入':
                    toggleVisibleQuestions($optionBlock, simQuestion);
                    resetValues();
                    scrollTo(productsQuestion);
                    planNote.setAttribute('aria-hidden', false);
                    break;
                case '製品購入のみ':
                    toggleVisibleQuestions($optionBlock, simQuestion);
                    resetValues();
                    scrollTo(productsQuestion);
                    planNote.setAttribute('aria-hidden', true);
                    break;
                default:
                    break; // do nothing
            }
        });
    }

    const selectProduct = () => {
        $product[0] && $product[0].addEventListener('change', () => {
            if ($product[0].value) {
                $color[0].removeAttribute('disabled');
            } else {
                $color[0].setAttribute('disabled', 'true');
            }
            setColors($product[0].value);

            if (!checkHasSim($product[0].value)) {
                $sim.prop('checked', false);
                simQuestion && simQuestion.setAttribute('aria-hidden', 'true');
            }

            const onlyEsimMsg = document.getElementById('js-only-esim');

            if (checkHasOnlyEsim($product[0].value)) {
                $sim[0].setAttribute('disabled', true);
                $sim[1].setAttribute('checked', true);
                onlyEsimMsg.setAttribute('aria-hidden', 'false');
            } else {
                $sim.prop('disabled', false);
                $sim.prop('checked', false);
                $sim[1].removeAttribute('checked');
                onlyEsimMsg.setAttribute('aria-hidden', 'true');
                console.log('after', $sim[1].getAttribute('checked'));
            }

            if (modelTypeMap.get($product[0].value) === 'iphone') {
                if (isReSelectWarranty) {
                    reSelectMsg.setAttribute('aria-hidden', 'true');
                    reSelectMsg2.setAttribute('aria-hidden', 'false');
                }

                warrantyIphone.setAttribute('aria-hidden', 'false');
                warrantyAndroid.setAttribute('aria-hidden', 'true');
                const warrantyAndroidInput = $('.js-warranty-android-input');
                warrantyAndroidInput.prop('checked', false);
                isReSelectWarranty = true;
            }
            if (modelTypeMap.get($product[0].value) === 'android') {
                if (isReSelectWarranty) {
                    reSelectMsg.setAttribute('aria-hidden', 'true');
                    reSelectMsg2.setAttribute('aria-hidden', 'false');
                }

                warrantyIphone.setAttribute('aria-hidden', 'true');
                warrantyAndroid.setAttribute('aria-hidden', 'false');
                const warrantyIphoneInput = $('.js-warranty-iphone-input');
                warrantyIphoneInput.prop('checked', false);
                isReSelectWarranty = true;
            }
        });
    }

    const selectColor = () => {
        $color[0] && $color[0].addEventListener('change', () => {
            if ($color[0].value && checkHasSim($product[0].value)) {
                simQuestion && simQuestion.setAttribute('aria-hidden', 'false');
                scrollTo(simQuestion);

                if ($sim[1].getAttribute('checked')) {
                    setTimeout(() => {
                        $sim[1].click();
                    }, 500);
                }
            } else {
                simQuestion && simQuestion.setAttribute('aria-hidden', 'true');
                if ($optionBlock) {
                    $optionBlock.attr('aria-hidden', 'false');
                    scrollTo($optionBlock);
                }
            }
        });
    }

    const selectSim = () => {
        $sim && $sim.on('change', () => {
            if ($optionBlock && !isConfirming) {
                $optionBlock.attr('aria-hidden', 'false');
                scrollTo($optionBlock);
            }
        });
    }

    createSimTypeList();
    selectPlan();
    setProducts();
    selectProduct();
    selectColor();
    selectSim();
}


/**
 * スムーススクロール to
 */
const scrollTo = (target) => {
    return $('body,html').animate({scrollTop: $(target).eq(0).offset().top}, 400, 'swing');
}


/**
 * プラン／製品／オプション情報の入力フォームへ移動
 */
const goToNextForm = () => {
    const errorList = chkCustomerInfo();
    console.log({errorList})
    if (errorList.length === 0) {
        customerForm && customerForm.setAttribute('aria-hidden', 'true');
        planForm && planForm.setAttribute('aria-hidden', 'false');

        customerInfoLead.setAttribute('aria-hidden', 'true');
        planLead.setAttribute('aria-hidden', 'false');
        scrollTo(topEl);
    } else {
        scrollTo(customerForm);
    }
}

nextBtn.addEventListener('click', goToNextForm);


/**
修正ボタンを押したら
*/
const backToCustomerForm = () => {
    customerForm.setAttribute('aria-hidden', 'false');
    planForm.setAttribute('aria-hidden', 'true');
    $('#js-modal-confirm').modaal('close');

    customerInfoLead.setAttribute('aria-hidden', 'false');
    planLead.setAttribute('aria-hidden', 'true');
    scrollTo(topEl);
}
editBtn.addEventListener('click', backToCustomerForm);
backToCustomerInfoBtn.addEventListener('click', backToCustomerForm);

/**
 * エラーチェック
 */
const chkCustomerInfo = () => {
    if ($lastName) {
        $lastName.trigger('change', ['chkAll']);
    }

    if ($firstName) {
        $firstName.trigger('change', ['chkAll']);
    }

    if ($lastNameKana) {
        $lastNameKana.trigger('change', ['chkAll']);
    }

    if ($firstNameKana) {
        $firstNameKana.trigger('change', ['chkAll']);
    }

    if ($gender) {
        $gender.trigger('change', ['chkAll']);
    }

    if ($job) {
        $job.trigger('change', ['chkAll']);
    }

    if ($postCode) {
        $postCode.trigger('change', ['chkAll']);
    }

    if ($address1) {
        $address1.trigger('change', ['chkAll']);
    }

    if ($address2) {
        $address2.trigger('change', ['chkAll']);
    }

    if ($phone) {
        $phone.trigger('change', ['chkAll']);
    }

    if ($mail) {
        $mail.trigger('change', ['chkAll']);
    }

    if ($confirmEmail) {
        $confirmEmail.trigger('change', ['chkAll']);
    }

    if ($birth) {
        $birth.trigger('change', ['chkAll']);
    }

    return errors;
}

const chkPlan = () => {
    if ($plan) {
        $plan.trigger('change', ['chkAll']);
    }

    if ($plan.val() !== 'プラン（Rakuten UN-LIMIT VII）') {
        if ($product) {
            $product.trigger('change', ['chkAll']);
        }

        if ($color) {
            $color.trigger('change', ['chkAll']);
        }

        if (routerArray.indexOf($product.val()) === -1) {
            if ($sim) {
                $sim.trigger('change', ['chkAll']);
            }
        }
    }

    if ($optionBlock) {
        $optionBlock.trigger('change', ['chkAll']);
    }

    return errors;
}


/**
 * Confirm
 */

// modal set
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#js-modal-confirm'
};
$('#js-modal-confirm').modaal(modalConfig);

const confirmBtn = document.getElementById('js-confirm-btn');

const doConfirm = () => {
    isConfirming = true;
    const errorList = chkPlan();
    if (errorList.length === 0) {
        // chkDisabled(false);
        console.log('通過', $('#js-modal-confirm'));
        $('#js-modal-confirm').modaal('open');
    } else {
        scrollTo(planForm);
    }
    setTimeout(() => {
        isConfirming = false;
    }, 1500);
}

confirmBtn.addEventListener('click', doConfirm)


/**
 * Confirm Button 活性化
 */
const activateConfirm = () => {
    const termsLinkList = document.querySelectorAll('.js-terms-link');
    const termsList = [];
    const termsCheck = document.getElementById('js-terms-check');
    const deliveryChargeCheck = document.getElementById('js-delivery-charge-check')

    for (const item of termsLinkList) {
        item.addEventListener('click', () => {
            if (!termsList.includes(item.getAttribute('data-terms'))) {
                termsList.push(item.getAttribute('data-terms'));
            }

            if (termsList.length === termsLinkList.length) {
                termsCheck && termsCheck.removeAttribute('disabled');
            }
        });
    }

    for(const check of [termsCheck, deliveryChargeCheck]) {
        check.addEventListener('click', () => {
            if (termsCheck.checked && deliveryChargeCheck.checked) {
                confirmBtn.setAttribute('aria-disabled', false);
            } else {
                confirmBtn.setAttribute('aria-disabled', true);
            }
        });
    }
}


/**
 * get json
 */
const getJson = async () => {
    const targetPostCodeJson = '/assets/json/guide-ubereats-post-code.json';
    const productsJson = '/assets/json/guide-ubereats-products.json';
    try {
        const [resPostCode, resProducts] = await Promise.all([
            axios.get(targetPostCodeJson),
            axios.get(productsJson),
        ]);

        postCodeData = await resPostCode.data.map(postCode => postCode['post-code']);
        productsData = await resProducts.data;

        doVaridate();
        updateForm();
        activateConfirm();
    } catch (error) {
        console.log(error)
    }
}
getJson();

// modal submit button
submitBtn.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);
    form.submit();
});
