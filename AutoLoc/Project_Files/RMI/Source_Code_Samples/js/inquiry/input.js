import validator from 'validator';
import DOMPurify from 'dompurify';

//////////////////
// note
//////////////////
// routeA
//     view → #js-inquiry_Other-section & #js-inquiry_Common-section
// routeBC
//     view → #js-inquiry_Visit-section
// routeB
//     view → #js-inquiry_Visit-not & #js-inquiry_Common-section
// routeC
//     view → #js-inquiry_Visit-todo & #js-inquiry_Common-section


// subject form
const subjectForm = document.getElementById('subject');

const url = new URL(window.location.href);
const params = url.searchParams;

// 「code」の値を取得
const authCode = params.get('code');

// 回答方法初回選択のフラグ
let flgFirstTimeSelectAnswerMethod = true;

// user情報
let userInfoSubstitution;

// ユーザー情報API
const linkApi = {
    PROD: {
        PNP: 'https://api-linkage.rmb-ss.jp/linkapi/SendPNP',
        SF: 'https://api-linkage.rmb-ss.jp/linkapi/RegisterSF',
        GetInfo: 'https://api-linkage.rmb-ss.jp/linkapi/GetInfo',
        AuthorizationCode: 'Bearer XBRuHhf9knUPv72fdwZ4Kwi6nv7ABeA',
        redirectUri:
        'https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Fsupport%2Frakuten-link-form%2F%3Fl-id%3Dshort_mno_support_rakuten-link-form&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005',
    },
    UAT1: {
        PNP: 'https://uat1-api-linkage.rmb-lab.jp/linkapi/SendPNP',
        SF: 'https://uat1-api-linkage.rmb-lab.jp/linkapi/RegisterSF',
        GetInfo: 'https://uat1-api-linkage.rmb-lab.jp/linkapi/GetInfo',
        AuthorizationCode: 'Bearer zRgYGhbWcRnnaBGE27aSGK+tN_Lwn9a',
        redirectUri:
        'https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm001&client_id=rmn_app_web&redirect_uri=https://network.mobile.rakuten.co.jp/support/rakuten-link-form/index.html&scope=90days%40Access%2Cmemberinfo_read_address%2Cmemberinfo_read_basic%2Cmemberinfo_read_mail%2Cmemberinfo_read_pointx%2Cmemberinfo_read_telephone%2Ctokencheck%2Cuserinfo_read_bulk%2Cmemberinfo_read_safebulk%2Cidinfo_read_easyid%2Ceternal%40Refresh&contact_info_required=false&rae_service_id=rm001',
    },
}

// ユーザー情報取得と氏名の自動挿入
const fetchData = async (authCode) => {
try {
    const url = new URL(linkApi.PROD.GetInfo)
    url.searchParams.append('code', authCode)
    const options = {
    method: 'GET',
    headers: {
        Authorization: linkApi.PROD.AuthorizationCode,
        'Content-Type': 'application/json; charset=utf-8',
    },
    }

    const response = await fetch(url, options)
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const { token, ...userInfo } = data

    userInfoSubstitution = userInfo;

} catch (error) {
    console.log(error, 'error')
}
}
fetchData(authCode)

//////////////////
// variables
//////////////////
let errors      = [];
const form               = document.getElementById('js-inquiry_Form');
const initialForm        = document.getElementById('js-inquiry_Form-top');
const otherSection       = document.getElementById('js-inquiry_Other-section');
const commonSection      = document.getElementById('js-inquiry_Common-section');
const nextBtn            = document.getElementById('js-inquiry_Nextbtn');
const backBtn            = document.getElementById('js-inquiry_Back');
const confirmBtn         = document.getElementById('js-inquiry_Confirm');
const confirmClsBtn      = document.getElementById('js-inquiry_Confirm-close');
const submitBtn          = document.getElementById('js-inquiry_Submit');

const selectEvent = document.getElementById('js-event');


const selectClassification = document.getElementsByName('00N0I00000JycJR');


//////////////////
// datepicker
//////////////////
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

// datepicker - 事象発生日
const currentDate = new Date(Date.now());
$('.js-Datepicker01').datepicker(datepickerSetBirth);
$('.js-Datepicker01').datepicker({maxDate: new Date()});// today以降選択不可
$('.js-Datepicker01').data('datepicker').selectDate(currentDate);
$('.js-Datepicker_Btn').on('click', () => {
    $('.js-Datepicker01').show();
});

// datepicker - 生年月日
$('.js-Datepicker03').datepicker(datepickerSetBirth);
$('.js-Datepicker03').datepicker({maxDate: new Date()});// today以降選択不可
$('.js-Datepicker03').data('datepicker').selectDate(new Date('1980/01/01'));
$('.js-Datepicker_Btn').on('click', () => {
    $('.js-Datepicker03').show();
});

//////////////////
// functions
//////////////////
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
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    } else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}
function chkStartWith(el){
    let msgId = `err-startWith_${el.getAttribute('name')}`;
    let msg = document.getElementById(msgId);
    const defaultStartStr = '20';
    let pattern = new RegExp('^(' + defaultStartStr + ').*');
    let checkStart = pattern.test(el.value);

    if(checkStart){
        el.setAttribute('aria-describedBy', '');
        msg.setAttribute('aria-hidden', true);
        return 0;
    }else {
        el.setAttribute('aria-describedBy', msgId);
        msg.setAttribute('aria-hidden', false);
        return 1;
    }
}

function checkboxRequired(el){
    const elList = document.getElementsByName(el.name)
    let isError = true;
    elList.forEach(element => {
        if (element.checked) {
            isError = false;
            return;
        }
    });

    let msgId = `err-required_${el.name}`;
    let msgEl = document.getElementById(msgId);
    msgEl.setAttribute('aria-hidden', !isError);

    return isError ? 1 : 0;
}

const formWithinRange = document.getElementsByClassName('js-disp-within-range');
const networkVariableKinds = document.getElementById('js-disp-network-variable-kinds');
const networkDetails = document.getElementById('js-disp-network-details');

const isNotWithinRange = () => {
    const checkedBtn = document.querySelectorAll('input[name="00N2u000001TCEC"]:checked')[0];

    if(checkedBtn) {
        if(checkedBtn.value === '圏外') {
            formWithinRange.forEach(form => {
                form.setAttribute('aria-hidden', true)
                networkVariableKinds.setAttribute('aria-hidden', true)
                networkDetails.setAttribute('aria-hidden', true)
            });
            return true
        } else {
            formWithinRange.forEach(form => {
                form.setAttribute('aria-hidden', false)
                networkVariableKinds.setAttribute('aria-hidden', false)
                networkDetails.setAttribute('aria-hidden', false)
            });
            return false
        }
    }
}

// validation
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
    if (item.indexOf('radio') > -1) {
        results += chkRadio(target);
    }
    if (item.indexOf('startWith') > -1) {
        results += chkStartWith(target);
    }
    if(item.indexOf('checkboxRequired') > -1){
        results += checkboxRequired(target);
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
            if (item.indexOf('radio') > -1) {
                $disp.text(DOMPurify.sanitize($('input[name="' + nm + '"]').filter(":checked").val(), {ALLOWED_TAGS: []}));
            } else {
                $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
            }
        }
    }
    console.log(errors);
}

// 案内方法の値
const getCheckedGuidanceWayValue = () => $('[name="00N2u000000QAHT"]:checked').val()

// 不具合発生場所の値
const getCheckedLocationOfFailureValue = () => $('[name="00N0I00000JycJR"]:checked').val()

// 不具合発生場所の値
const getCheckedDefectPeriodValueIsNotClear = () => $('[name="00N2u000000QAHO"]:checked').val() === 'わからない'

// ご案内方法の値
const getCheckedAnswerMethod = () => $('[name="00N2u000000QAHT"]:checked').val()

// 検索方法
const seachMethods = document.getElementsByClassName('js-search-method');

// 施設系リスト
const matchListFacility = ['商業施設', '公共施設（駅、空港含む）', 'オフィス、オフィスビル', 'その他'];

// disabled
function chkDisabled(on) {
    let selectAll   = initialForm.querySelectorAll('select');
    let inputAll    = initialForm.querySelectorAll('input');
    let textareaAll = initialForm.querySelectorAll('textarea');
    let bntAll      = initialForm.querySelectorAll('button');
    if(on) {
        selectAll.forEach( (select) => {
            select.setAttribute('disabled', 'disabled');
        });
        inputAll.forEach( (input) => {
            input.setAttribute('disabled', 'disabled');
        });
        textareaAll.forEach( (textarea) => {
            textarea.setAttribute('disabled', 'disabled');
        });
        bntAll.forEach( (button) => {
            button.setAttribute('aria-disabled', 'true');
            button.disabled = true;
        });
    } else {
        selectAll.forEach( (select) => {
            select.removeAttribute('disabled');
        });
        inputAll.forEach( (input) => {
            input.removeAttribute('disabled');
        });
        textareaAll.forEach( (textarea) => {
            textarea.removeAttribute('disabled');
        });
        bntAll.forEach( (button) => {
            button.setAttribute('aria-disabled', 'false');
            button.disabled = false;
        });
    }
}

// re-entry
function reEntry() {
    otherSection.setAttribute('aria-hidden', true);
    commonSection.setAttribute('aria-hidden', true);
    nextBtn.setAttribute('aria-disabled', 'false');
    nextBtn.disabled = false;
}

// select-again
function selectAgain() {
    chkDisabled(true);
    nextBtn.setAttribute('aria-disabled', 'true');
}

// check initial form(初期form)
function chkInitial() {

    if ($el00N2u000000P1ft) {
        $el00N2u000000P1ft.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JyyIk) {
        $el00N0I00000JyyIk.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JyyIp) {
        $el00N0I00000JyyIp.trigger('change', ['chkAll']);
    }
    if ($el00N0I00000JycJH) {
        $el00N0I00000JycJH.trigger('change', ['chkAll']);
    }
    if ($el00N280000095Txj) {
        $el00N280000095Txj.trigger('change', ['chkAll']);
    }

    seachMethods.forEach(seachMethod => {
        if( seachMethod.checked ) {
            if( seachMethod.value === '郵便番号から検索' ) {
                // const $el00N0I00000KRr1H = $('[name="00N0I00000KRr1H"]');
                // 複数定義場所があるのでまとめたい
                const $el00N0I00000KRr1H = $('[name="00N0I00000KRr1H"]');
                if ($el00N0I00000KRr1H) {
                    $el00N0I00000KRr1H.trigger('change', ['chkAll']);
                }
            } else {
                // 検索方法を切り替えた場合に未表示項目のエラーを削除
                errors = errors.filter(item => item !== '00N0I00000KRr1H');
            }
        }
    });

    if ($el00N2u000001T0kB) {
        $el00N2u000001T0kB.eq(0).trigger('change', ['chkAll']);

        const problemLocationType = $('[name="00N2u000001T0kB"]:checked').val();
        const indoorList = ['高層階（21F以上）', '中層階（11～20F）', '低層階（1～10F）', '地下'];
        if (indoorList.includes(problemLocationType)) {
            if ($el00N2u000000PkFH) {
                // 表示されている = varidate対象 の時のみ実行される
                $el00N2u000000PkFH.trigger('change', ['chkAll']);
            }
        }
    }

    for(let i = 0; i < selectClassification.length; i++) {
        if( selectClassification[i].checked && ( selectClassification[i].defaultValue === '自宅（戸建）' || selectClassification[i].defaultValue === '自宅（集合住宅）') ) {
            $('#disp-same-address').attr('aria-hidden', false);
            $el00N2u000000QARJ.trigger('change', ['chkAll']);
            break;
        } else {
            $('#disp-same-address').attr('aria-hidden', true);
        }
    }

    if ($el00N2u000000PkFM) {
        $el00N2u000000PkFM.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000Pg7x) {
        $el00N2u000000Pg7x.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000Pg82) {
        $el00N2u000000Pg82.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000Pg87) {
        $el00N2u000000Pg87.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000QAHO) {
        $el00N2u000000QAHO.trigger('change', ['chkAll']);
    }
    if ($el00N2u000001TCEC) {
        $el00N2u000001TCEC.eq(0).trigger('change', ['chkAll']);
    }
    if ($el00N2u000000PdLm) {
        $el00N2u000000PdLm.trigger('change', ['chkAll']);
    }
    if ($el00N280000095TyO) {
        $el00N280000095TyO.trigger('change', ['chkAll']);
    }
    if ($el00N2u000000PkIp) {
        $el00N2u000000PkIp.trigger('change', ['chkAll']);
    }
    if(!isNotWithinRange()) {
        if($el00N2u000000wSye) {
            $el00N2u000000wSye.trigger('change', ['chkAll']);
        }
        if ($el00N2u000000Pg8C) {
            $el00N2u000000Pg8C.eq(0).trigger('change', ['chkAll']);
        }
        if(isOtherSelected) {
            $textareaPhenomenonDetailTxt.trigger('change', ['chkAll']);
        }
    }
    if ($elSearchMethod) {
        let selectedValue;
        seachMethods.forEach(seachMethod => {
            if (seachMethod.checked) {
                selectedValue = seachMethod.value;
            }
        });

        $elSearchMethod.eq(selectedValue === '郵便番号から検索' ? 0 : 1).trigger('change', ['chkAll']);
    }

    return errors;
}

// check common form(共通form)
function chkCommon() {
    const $el00N2u000000P1oC = $('[name="00N2u000000P1oC"]');
    const $elname = $('[name="name"]');
    const $el00N0I00000Jxe34 = $('[name="00N0I00000Jxe34"]');
    const $elEmail = $('[name="email"]');
    const $el00N0I00000Jxe3E = $('[name="00N0I00000Jxe3E"]');

    if ($el00N2u000000QAHT) { // ご案内方法
        $el00N2u000000QAHT.trigger('change', ['chkAll']);
    }

    if (getCheckedGuidanceWayValue() === 'メールでの回答を希望する') {

        if ($el00N2u000000P1oC) { // 楽天モバイルID
            $el00N2u000000P1oC.trigger('change', ['chkAll']);
        }
        if ($elname) { // ご契約者氏名 姓
            $elname.trigger('change', ['chkAll']);
        }
        if ($el00N0I00000Jxe34) { // ご契約者氏名 名
            $el00N0I00000Jxe34.trigger('change', ['chkAll']);
        }
        if ($el00N0I00000JyFjg) { // ご契約者 生年月日
            $el00N0I00000JyFjg.trigger('change', ['chkAll']);
        }
        if ($elEmail) { // 返信用メールアドレス
            $elEmail.trigger('change', ['chkAll']);
        }
        if ($el00N0I00000Jxe3E) { // 契約情報: 契約電話番号
            $el00N0I00000Jxe3E.trigger('change', ['chkAll']);
        }

        // my楽天モバイルの登録住所が同一
        const myRakutenAddressSame = $('[name="00N2u000000QARJ"]:checked').val();
        // ネットワーク種別
        const usedNetwork = $('[name="00N2u000000Pg8C"]:checked').val();
        // 発生場所種別
        const problemLocationType = $('[name="00N2u000001T0kB"]:checked').val();
        const indoorList = ['高層階（21F以上）', '中層階（11～20F）', '低層階（1～10F）', '地下'];

        if (
            myRakutenAddressSame === 'はい' &&
            ( usedNetwork === '4G' || isNotWithinRange() ) &&
            indoorList.includes(problemLocationType)
        ) {
            if ($el00N2u000000grnt) { // Rakuten Casa設置希望
                $el00N2u000000grnt.trigger('change', ['chkAll']);
                const rakutenCaseInstallation = $('[name="00N2u000000grnt"]:checked').val();
                if (rakutenCaseInstallation === '希望する') {
                    if ($el00N2u000000QAHi) { // インターネット環境
                        $el00N2u000000QAHi.trigger('change', ['chkAll']);
                    }
                }
            }
        }

        return errors;

    } else {
        // 以降選択肢はないためからの配列を返却
        // 「メールでの回答を希望する」に切り替えた時のために以前のエラーを残しておく
        return [];

    }

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

    if( age < 18 ) {
        // console.log('未成年');
        document.getElementById('00N2u000000P1gm').value = 1;
    } else {
        // console.log('成年');
        document.getElementById('00N2u000000P1gm').value = 0;
    }
}

//////////////////
// events
//////////////////
// validation - 電波不具合の発生日
const $el00N2u000000P1ft = $('[name="00N2u000000P1ft"]');
if ($el00N2u000000P1ft) {
    $el00N2u000000P1ft.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}
// hour
const $el00N0I00000JyyIk = $('[name="00N0I00000JyyIk"]');
if ($el00N0I00000JyyIk) {
    $el00N0I00000JyyIk.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// minute
const $el00N0I00000JyyIp = $('[name="00N0I00000JyyIp"]');
if ($el00N0I00000JyyIp) {
    $el00N0I00000JyyIp.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 郵便番号
const $el00N0I00000JycJH = $('[name="00N0I00000JycJH"]');
if ($el00N0I00000JycJH) {
    $el00N0I00000JycJH.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 住所1 (初期form)
const $el00N280000095Txj = $('[name="00N280000095Txj"]');
if ($el00N280000095Txj) {
    $el00N280000095Txj.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 住所2 (初期form)
seachMethods.forEach(seachMethod => {
    if( seachMethod.value === '郵便番号から検索' ) {
        const $el00N0I00000KRr1H = $('[name="00N0I00000KRr1H"]');
        if ($el00N0I00000KRr1H) {
            $el00N0I00000KRr1H.on('change blur', function(e, param) {
                validateTarget(this, param);
            });
        }
    }
});


// その他の詳細のバリデーション処理
const $textareaPhenomenonDetailTxt = $('[name="00N2u000000wTZQ"]');
$textareaPhenomenonDetailTxt.on('change blur', function(e, param) {
    if(isOtherSelected) {
        validateTarget(this, param);
    }
});

const floorPosition = document.getElementById('js-floor-position'); // 階層選択エリア
const floorPositionErrDisp = document.getElementById('err-required_00N2u000000PkFH');
const selectFloor = document.getElementById('00N2u000000PkFH'); // 階層選択（select要素）
const defaultOptionEle = selectFloor.firstElementChild; // option要素: 選択してください
// 発生場所種別によるoption要素生成
const highFloorOptions = generateFloorOptionsFragment('{num}F', 21, 60, true);
const middleFloorOptions = generateFloorOptionsFragment('{num}F', 11, 20, false);
const lowFloorOptions = generateFloorOptionsFragment('{num}F', 1, 10, false);
const groundFloorOptions = generateFloorOptionsFragment('地下{num}F', -10, -1, false);
const floorMap = new Map([
    ['高層階（21F以上）', highFloorOptions],
    ['中層階（11～20F）', middleFloorOptions],
    ['低層階（1～10F）', lowFloorOptions],
    ['地下', groundFloorOptions],
]);
// 階層（select要素）に挿入するoption生成関数
function generateFloorOptionsFragment (template, start, end, isOver) {
    const loopCount = end - (start - 1);
    const optionsArr = Array.from(Array(loopCount)).map((_, idx) => {
        const optionEle = document.createElement('option');
        const floorVal = start + idx;
        optionEle.value = floorVal;
        optionEle.textContent = template.replace('{num}', Math.abs(floorVal));

        return optionEle;
    });

    if (start < 0) {
        optionsArr.reverse(); // 地下選択の際に階層表示順を変更
    }

    const fragment = document.createDocumentFragment();
    const noValueOptionEle = defaultOptionEle.cloneNode(true);
    fragment.appendChild(noValueOptionEle);
    optionsArr.forEach(opt => fragment.appendChild(opt));

    // 特定階層以降の表示についての処理: 〜以上を要素として追加
    if (isOver) {
        const optionEle = document.createElement('option');
        const floorVal = end + 1;
        optionEle.value = floorVal;
        optionEle.textContent = `${template.replace('{num}', Math.abs(floorVal))}以上`;
        fragment.appendChild(optionEle);
    }

    return fragment;
}

// validation - 発生場所種別
const $el00N2u000001T0kB = $('[name="00N2u000001T0kB"]'); // 発生場所種別の選択
if ($el00N2u000001T0kB) {
    $el00N2u000001T0kB.on('change', function(_, param) {
        validateTarget(this, param);

        if (param) {
            return;
        }
        /*
            checkInitial 実行（nextBtn押下）時にtriggerによってvalidateTargetが実行されるが、
            以降を実行されると、階数Select要素の中身がクリアされる為、
            paramの有無で挙動をコントロール
        */

        // 階層選択エリアの表示非表示切り替え
        // 階層select要素の中身を切替処理
        // - dataset.validate切り替えによるバリデーションコントロール
        // - モーダル内の表示エリアの表示非表示切り替え&非表示時のテキストクリア
        const indoorList = [...floorMap.keys()];
        const selectValue = $('[name="00N2u000001T0kB"]:checked').val();
        const isIndoor = indoorList.includes(selectValue);

        selectFloor.innerHTML = '';
        if (isIndoor) {
            floorPosition.setAttribute('aria-hidden', false);
            selectFloor.appendChild(floorMap.get(selectValue).cloneNode(true));
            selectFloor.setAttribute('aria-required', true);
            selectFloor.dataset.validate = 'required';
            $('#disp-floor-position').attr('aria-hidden', false);

            if( param !== 'chkAll' ) {
                $('body,html').animate({scrollTop: $('#js-floor-position').offset().top}, 400, 'swing');
            }

        } else {
            // 階層選択エリア非表示、初期化
            floorPosition.setAttribute('aria-hidden', true);
            floorPositionErrDisp.setAttribute('aria-hidden', true);
            selectFloor.appendChild(defaultOptionEle);
            selectFloor.setAttribute('aria-required', false);
            selectFloor.removeAttribute('aria-describedBy');
            selectFloor.removeAttribute('aria-invalid');
            selectFloor.dataset.validate = '';
            $('#disp-floor-position').attr('aria-hidden', true);
            $('#disp-00N2u000000PkFH').text('');

            if( param !== 'chkAll' ) {
                if (matchListFacility.indexOf(getCheckedLocationOfFailureValue()) > -1) {
                    $('body,html').animate({scrollTop: $('#js-another-address').offset().top}, 400, 'swing');
                } else {
                    $('body,html').animate({scrollTop: $('#js-same-address').offset().top}, 400, 'swing');
                }
            }

            const errIdx = errors.indexOf('00N2u000000PkFH');
            if (errIdx > -1) {
              errors.splice(errIdx, 1);
            }
        }
    });
}

// validation - 階数
const $el00N2u000000PkFH = $('[name="00N2u000000PkFH"]');
if ($el00N2u000000PkFH) {
    $el00N2u000000PkFH.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 申告場所区分
const $el00N2u000000QARJ = $('[name="00N2u000000QARJ"]'); // my楽天モバイルの登録住所は同一住所選択
const $el00N0I00000JycJR = $('[name="00N0I00000JycJR"]'); // 不具合発生場所 区分選択
if ($el00N0I00000JycJR) {
    $el00N0I00000JycJR.on('change', function(e, param) {
        validateTarget(this, param);
        let thisVal     = $(this).val();
        if (matchListFacility.indexOf(thisVal) > -1) {
            //必須
            $mk00N2u000000PkFM.attr('aria-hidden', false);
            $el00N2u000000PkFM.attr('aria-required', true);
            $el00N2u000000PkFM.data('validate', 'required');
            $('#js-same-address').attr('aria-hidden', true);
            $el00N2u000000QARJ.prop('checked', false); // my楽天モバイルの登録住所は同一住所選択の解除
            $('#js-another-address').attr('aria-hidden', false);
            $('#disp-facility-name').attr('aria-hidden', false);
            $('#disp-00N2u000000PkFM').attr('aria-hidden', false);
            $('#disp-same-address').attr('aria-hidden', true);
        } else {
            //自由
            $mk00N2u000000PkFM.attr('aria-hidden', true);
            $err00N2u000000PkFM.attr('aria-hidden', true);
            $el00N2u000000PkFM.attr('aria-required', false);
            $el00N2u000000PkFM.data('validate', '');
            $el00N2u000000PkFM.attr('aria-invalid', "");
            $el00N2u000000PkFM.attr('aria-describedBy', '');
            $el00N2u000000PkFM.attr('aria-invalid', false);
            $('#js-same-address').attr('aria-hidden', false);
            $('#js-another-address').attr('aria-hidden', true);
            $('#disp-facility-name').attr('aria-hidden', true);
            $('#disp-00N2u000000PkFM').attr('aria-hidden', true);
            $('#disp-same-address').attr('aria-hidden', false);
            // 要確認。用途
            document.getElementById('disp-00N2u000000QARJ').innerText = $('[name="00N2u000000QARJ"]:checked').val()
        }

        document.getElementById('disp-00N0I00000JycJR').innerText = thisVal;
        document.getElementById('js-step-2').setAttribute('aria-hidden', false);

        if( param !== 'chkAll' ) {
            $('body,html').animate({scrollTop: $('#js-step-2').offset().top}, 400, 'swing');
        }
    });
}
// my楽天モバイルの登録住所は同一チェック
// variable is defined in the above section
if ($el00N2u000000QARJ) {
    $el00N2u000000QARJ.on('change', function(e, param) {
        validateTarget(this, param);
        if( param !== 'chkAll' ) {
            $('body,html').animate({scrollTop: $('#js-target-antenna').offset().top}, 400, 'swing');
        }
    });
}

// validation - 施設名・具体的な場所
const $mk00N2u000000PkFM = $('#mark-00N2u000000PkFM');
const $err00N2u000000PkFM = $(`#err-required_00N2u000000PkFM`);
if ($el00N2u000000PkFM) {
    $el00N2u000000PkFM.on('change blur', function(e, param) {
        let thisVal   = $el00N0I00000JycJR.val();
        let $target = $(this);
        let nm = $target.attr('name');
        let $disp = $(`#disp-${nm}`);
        let idx = errors.indexOf(nm);
        let $err = $(`#err-required_${nm}`);
        if (matchListFacility.indexOf(thisVal) > -1) {
            //必須
            validateTarget(this, param);
        } else {
            //自由
            $target.attr('aria-describedBy', '');
            $err.attr('aria-hidden', true);
            if (idx > -1) {
                errors.splice(idx, 1);
            }
            $disp.text(DOMPurify.sanitize($target.val(), {ALLOWED_TAGS: []}));
        }
    });
}

// validation - 事象詳細 - データ通信
const $el00N2u000000Pg7x = $('[name="00N2u000000Pg7x"]');
if ($el00N2u000000Pg7x) {
    $el00N2u000000Pg7x.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 事象詳細 - SMS
const $el00N2u000000Pg82 = $('[name="00N2u000000Pg82"]');
if ($el00N2u000000Pg82) {
    $el00N2u000000Pg82.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 発生頻度
const $el00N2u000000Pg87 = $('[name="00N2u000000Pg87"]');
if ($el00N2u000000Pg87) {
    $el00N2u000000Pg87.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - 発生時期
const $el00N2u000000QAHO = $('[name="00N2u000000QAHO"]');
if ($el00N2u000000QAHO) {
    $el00N2u000000QAHO.on('change', function(e, param) {
        if( param !== 'chkAll' ) {
            if(getCheckedDefectPeriodValueIsNotClear()) {
                selectEvent.setAttribute('aria-hidden', true);
                $('body,html').animate({scrollTop: $('#js-target-product').offset().top}, 400, 'swing');
            } else {
                selectEvent.setAttribute('aria-hidden', false);
                $('body,html').animate({scrollTop: $('#js-event').offset().top}, 400, 'swing');
            }
        }

        validateTarget(this, param);
    });
}

// validation - アンテナバー／アンテナピクト本数表示
const $el00N2u000001TCEC = $('[name="00N2u000001TCEC"]');
if ($el00N2u000001TCEC) {
    $el00N2u000001TCEC.on('change', function(e, param) {
        if( param !== 'chkAll' ) {
            if(isNotWithinRange()){
                errors = errors.filter(item => item !== '00N2u000000wSye');
                errors = errors.filter(item => item !== '00N2u000000Pg8C');
                $('body,html').animate({scrollTop: $('#js-target-classification').offset().top}, 400, 'swing');
            } else {
                $('body,html').animate({scrollTop: $('#js-target-network-type').offset().top}, 400, 'swing');
            }
        }

        validateTarget(this, param);
    });
}

// validation - ネットワーク種別
const $el00N2u000000Pg8C = $('[name="00N2u000000Pg8C"]');

// validation - 発生事象
const $el00N2u000000wSye = $('[name="00N2u000000wSye"]');

if(!isNotWithinRange()) {
    if ($el00N2u000000Pg8C) {
        $el00N2u000000Pg8C.on('change', function(e, param) {
            if( param !== 'chkAll' ) {
                $('body,html').animate({scrollTop: $('#js-target-phenomenon-details').offset().top}, 400, 'swing');
            }

            validateTarget(this, param);
        });
    }

    if ($el00N2u000000wSye) {
        $el00N2u000000wSye.on('change', function(e, param) {
            const hasOtherCheckedValue = array => array.is(':checked[value="その他"]');
            if(hasOtherCheckedValue($el00N2u000000wSye)) {
                textareaPhenomenonDetail.setAttribute('aria-hidden', false);
                isOtherSelected = true;
            } else {
                textareaPhenomenonDetail.setAttribute('aria-hidden', true);
                isOtherSelected = false;
            }
            validateTarget(this, param);
        });
    }
}

const $elSearchMethod = $('[name="search-method"]');
if ($elSearchMethod) {
    $elSearchMethod.on('change', function(e, param) {
        if( param !== 'chkAll' ) {
            $('body,html').animate({scrollTop: $('#js-scroll-target-search-methods').offset().top}, 400, 'swing');
        }

        validateTarget(this, param);
    });
}


const $el00N2u000000PkFM = $('[name="00N2u000000PkFM"]');
if ($el00N2u000000PkFM) {
    $el00N2u000000PkFM.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご利用中のスマートフォン - 使用製品
const $el00N2u000000PdLm = $('[name="00N2u000000PdLm"]');
const cellPhoneModels = document.getElementById('js-interview-0');
const select00N2u000000PdLm = document.getElementById('00N2u000000PdLm');
if (cellPhoneModels) {
    cellPhoneModels.onchange = function(e) {
        $el00N2u000000PdLm[0].value = e.target.value;
        select00N2u000000PdLm.value =  select00N2u000000PdLm && e.target.value;
    };
}
// 利用製品
if ($el00N2u000000PdLm) {
    $el00N2u000000PdLm.on('change', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご利用中のスマートフォン名 - ご利用中のスマートフォン詳細
const $el00N280000095TyO = $('[name="00N280000095TyO"]');
if ($el00N280000095TyO) {
    $el00N280000095TyO.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// validation - ご意見・ご要望詳細
const $el00N2u000000PkIp = $('textarea[name="00N2u000000PkIp"]');
if ($el00N2u000000PkIp) {
    $el00N2u000000PkIp.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

// アンケート変数
const $elAgree2 = $('[name="agree2"]');
const $el00N2u000000QAHT = $('[name="00N2u000000QAHT"]'); // ご案内方法: メールでの回答を希望する/回答は希望しない
const $el00N2u000000QAHi = $('[name="00N2u000000QAHi"]'); // インターネット環境: はい/いいえ/わからない
const $el00N2u000000grnt = $('[name="00N2u000000grnt"]'); // Rakuten Casa設置希望: 希望する/希望しない

// 回答希望 $('input[name="sample"]:checked')
let isSlectedAnswerByEmail =  false;
if ($el00N2u000000QAHT) {
    $el00N2u000000QAHT.on('change', function(e, param) {
        validateTarget(this, param);
        // ご案内方法を取得
        if (getCheckedGuidanceWayValue() === '回答は希望しない') {

            // Rakuten Casa設置希望の選択リセット、非表示
            $el00N2u000000grnt.prop('checked', false);
            $('#js-rakuten-casa').attr('aria-hidden', true);
            $('#disp-rakuten-casa').attr('aria-hidden', true);

            // インターネット環境の選択リセット、非表示
            $el00N2u000000QAHi.prop('checked', false);
            $('#js-env').attr('aria-hidden', true);
            $('#disp-sec-env').attr('aria-hidden', true);

            // お客様ご契約情報確認 非表示
            commonSection.setAttribute('aria-hidden', true);

            isSlectedAnswerByEmail = false;

            confirmBtn.setAttribute('aria-disabled', false);
            confirmBtn.disabled = false;

            document.getElementsByClassName('js-not-is-answer-by-email').forEach(element => {
                element.setAttribute('aria-hidden', true)
            });

            document.getElementById('00N0I00000Jxe34').value = '';
            document.getElementById('name').value = '';

        } else {

             const problemLocationType = $('[name="00N2u000001T0kB"]:checked').val();
             const indoorList = ['高層階（21F以上）', '中層階（11～20F）', '低層階（1～10F）', '地下'];

             if (
                $('[name="00N2u000000QARJ"]:checked').val() === 'はい' &&
                ( $('[name="00N2u000000Pg8C"]:checked').val() === '4G' || isNotWithinRange() ) &&
                indoorList.includes(problemLocationType)
            ) {
                $('#js-rakuten-casa').attr('aria-hidden', false);
                $('#disp-rakuten-casa').attr('aria-hidden', false);

                if( param !== 'chkAll' ) {
                    $('body,html').animate({scrollTop: $('#js-rakuten-casa').offset().top}, 400, 'swing');
                }

            } else {
                $('#js-rakuten-casa').attr('aria-hidden', true);
                $('#disp-rakuten-casa').attr('aria-hidden', true);
                $('#js-env').attr('aria-hidden', true);
                $('#disp-sec-env').attr('aria-hidden', true);
                $el00N2u000000grnt.prop('checked', false); // Rakuten Casa設置希望
                $el00N2u000000QAHi.prop('checked', false); // インターネット環境
            }

            if(flgFirstTimeSelectAnswerMethod && userInfoSubstitution !== undefined) {
                document.getElementById('00N0I00000Jxe34').value = userInfoSubstitution.first_name;
                document.getElementById('name').value = userInfoSubstitution.last_name;
                flgFirstTimeSelectAnswerMethod = false;
            }

            // お客様ご契約情報確認 表示
            commonSection.setAttribute('aria-hidden', false);

            isSlectedAnswerByEmail = true;

            if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
                // 個人情報の取扱いについて のチェック状態によって確認ボタンの活性・非活性を切り替え
                if ($elAgree2.prop('checked') === true) {
                    confirmBtn.setAttribute('aria-disabled', false);
                    confirmBtn.disabled = false;
                } else {
                    confirmBtn.setAttribute('aria-disabled', true);
                    confirmBtn.disabled = true;
                }
            }

            document.getElementsByClassName('js-not-is-answer-by-email').forEach(element => {
                element.setAttribute('aria-hidden', false)
            });
        }
    });
}
// validation - インターネット環境
if ($el00N2u000000QAHi) {
    $el00N2u000000QAHi.on('change', function(e, param) {
        if ($('[name="00N2u000000grnt"]:checked').val() === '希望する') {
            validateTarget(this, param);
        }
        if( param !== 'chkAll' ) {
            $('body,html').animate({scrollTop: $('#js-inquiry_Common-section').offset().top}, 400, 'swing');
        }
    });
}

// Rakuten Casa設置希望
if ($el00N2u000000grnt) {
    $el00N2u000000grnt.on('change', function (e, param) {
        if ($('[name="00N2u000000QAHT"]:checked').val() === 'メールでの回答を希望する') {
            validateTarget(this, param);
        }
        if ($('[name="00N2u000000grnt"]:checked').val() === '希望する') {
            $('#js-env').attr('aria-hidden', false);
            $('#disp-sec-env').attr('aria-hidden', false);
            if( param !== 'chkAll' ) {
                $('body,html').animate({scrollTop: $('#js-env').offset().top}, 400, 'swing');
            }
        } else {
            $('#js-env').attr('aria-hidden', true);
            $('#disp-sec-env').attr('aria-hidden', true);
            $el00N2u000000QAHi.prop('checked', false); // インターネット環境選択解除
            if( param !== 'chkAll' ) {
                $('body,html').animate({scrollTop: $('#js-inquiry_Common-section').offset().top}, 400, 'swing');
            }
        }

    });
}

if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
    // validation - ご契約情報 - ご契約電話番号
    const $el00N0I00000Jxe3E = $('[name="00N0I00000Jxe3E"]');
    if ($el00N0I00000Jxe3E) {
        $el00N0I00000Jxe3E.on('change blur', function(e, param) {
            if(isSlectedAnswerByEmail) {
                validateTarget(this, param);
            }
        });
    }
}

if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
    // validation - ご契約情報 - 楽天モバイルID
    const $el00N2u000000P1oC = $('[name="00N2u000000P1oC"]');
    if ($el00N2u000000P1oC) {
        $el00N2u000000P1oC.on('change blur', function(e, param) {
            if(isSlectedAnswerByEmail) {
                validateTarget(this, param);
            }
        });
    }
}

if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
    // validation - 氏名 - 姓
    const $elname = $('[name="name"]');
    if ($elname) {
        $elname.on('change blur', function(e, param) {
            if(isSlectedAnswerByEmail) {
                validateTarget(this, param);
            }
        });
    }
}

if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
    // validation - 氏名 - 名
    const $el00N0I00000Jxe34 = $('[name="00N0I00000Jxe34"]');
    if ($el00N0I00000Jxe34) {
        $el00N0I00000Jxe34.on('change blur', function(e, param) {
            if(isSlectedAnswerByEmail) {
                validateTarget(this, param);
            }
        });
    }
}

// validation - ご契約 生年月日
const $el00N0I00000JyFjg = $('[name="00N0I00000JyFjg"]');
if ($el00N0I00000JyFjg) {
    $el00N0I00000JyFjg.on('change blur', function(e, param) {
        validateTarget(this, param);
    });
}

if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
    // validation - 返信用メールアドレス
    const $elEmail = $('[name="email"]');
    if ($elEmail) {
        $elEmail.on('change blur', function(e, param) {
            if(isSlectedAnswerByEmail) {
                validateTarget(this, param);
            }
        });
    }
}


// next section view
nextBtn.addEventListener('click', (e) => {
    if( chkInitial().length > 0 ) {
        // error
        $('body,html').animate({scrollTop: $('[aria-invalid="true"]').eq(0).offset().top}, 400, 'swing');
    } else {
        // no error
        otherSection.setAttribute('aria-hidden', false);
        chkDisabled(true);
        nextBtn.setAttribute('aria-disabled', 'true');
        nextBtn.disabled = true;

        // RakutenCaseの表示条件を判定
        const myRakutenAddressSame = $('[name="00N2u000000QARJ"]:checked').val();
        const isSameAddress = myRakutenAddressSame === 'はい';
        const usedNetwork = $('[name="00N2u000000Pg8C"]:checked').val();
        const is4GNetwork = usedNetwork === '4G';
        const problemLocationType = $('[name="00N2u000001T0kB"]:checked').val();
        const indoorList = ['高層階（21F以上）', '中層階（11～20F）', '低層階（1～10F）', '地下'];
        const isIndoor = indoorList.includes(problemLocationType);
        const isWantMail = getCheckedGuidanceWayValue() === 'メールでの回答を希望する';

        if (
            isSameAddress &&
            is4GNetwork &&
            isIndoor &&
            isWantMail
        ) {
            /*
                ご案内方法で「メールでの回答を希望する」を選択し、
                電波改善要望のフォーム(initialForm)に戻り、
                「次へ進む」ボタンで、
                調査結果のご案内について(otherSection)に進んだ際に
                RakutenCaseが表示される条件を満たしている時
                ※ 初めて調査結果のご案内について(otherSection)を表示する場合はここを通過しない
            */

            // 特に処理する内容が無い
            // →ご案内方法で「メールでの回答を希望する」を選択している時点で、
            //  RakutenCase以降選択したものが表示されているから

        }

        if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
            // 個人情報の取扱いについて のチェック状態によって確認ボタンの活性・非活性を切り替え
            if ($elAgree2.prop('checked') === true) {
                confirmBtn.setAttribute('aria-disabled', false);
                confirmBtn.disabled = false;
            } else {
                confirmBtn.setAttribute('aria-disabled', true);
                confirmBtn.disabled = true;
            }
        }

        // 入力内容修正時にconfirm buttonが押せなくなることを防ぐ処理
        if (getCheckedGuidanceWayValue() === '回答は希望しない') {
            confirmBtn.setAttribute('aria-disabled', false);
        }

        $('body,html').animate({scrollTop: $('#js-inquiry_Other-section').offset().top}, 400, 'swing');
    }
});


if (getCheckedGuidanceWayValue() !== '回答は希望しない') {
    if ($elAgree2) {
        $elAgree2.on('change blur', function(e, param) {
            if ($elAgree2.prop('checked') === true) {
                confirmBtn.setAttribute('aria-disabled', false);
                confirmBtn.disabled = false;
            } else {
                confirmBtn.setAttribute('aria-disabled', true);
                confirmBtn.disabled = true;
            }
        });
    }
}

// 事象詳細「その他」
const textareaPhenomenonDetail = document.getElementById('js-textarea-phenomenon-detail');
const textareaPhenomenonDetailTxt = document.getElementById('js-00N2u000000wTZQ');
const dispPhenomenonDetail = document.getElementById('disp-00N2u000000wSye')
let isOtherSelected = false;

// confirm button
confirmBtn.addEventListener('click', (e) => {

    chkCommon();
    if (chkCommon().length === 0) {
        chkDisabled(false);
        $('#modal-confirm').modaal('open');
        chkAge();
        if (!commonPos) initMap(true);
        else buildMap(commonPos, false, false, true);

        let phenomenonDetailItemList = [];
        phenomenonDetailItemList = $el00N2u000000wSye.map(function(index, element) {
            if(element.checked) {
                return `<div class="u-Adjust_Mt-8">${element.defaultValue}</div>`;
            }
        }).get();

        if(isOtherSelected) {
            phenomenonDetailItemList.push(`<div class="u-Adjust_Mt-8">${textareaPhenomenonDetailTxt.value}</div>`)
        }

        const phenomenonDetailItem = phenomenonDetailItemList.join('')
        dispPhenomenonDetail.innerHTML = phenomenonDetailItem
    } else {
        $('body,html').animate({scrollTop: $('#js-inquiry_Other-section').offset().top}, 400, 'swing');
    }

    if( getCheckedAnswerMethod() === '回答は希望しない' ) {
        subjectForm.value = 'MNOかんたん電波状況報告';

        // <input id="00N2u000000wSzS" type="hidden" name="00N2u000000wSzS" value=TRUE> の生成
        const targetElmInputEasyForm = document.getElementById('js-target-generate-00N2u000000wSzS');

        const newElement00N2u000000wSzS = document.createElement('input');
        newElement00N2u000000wSzS.id = '00N2u000000wSzS';
        newElement00N2u000000wSzS.type = 'hidden';
        newElement00N2u000000wSzS.name = '00N2u000000wSzS';
        newElement00N2u000000wSzS.value = 'TRUE';

        // targetElmInputEasyFormの位置に要素を生成
        targetElmInputEasyForm.parentNode.insertBefore(newElement00N2u000000wSzS, targetElmInputEasyForm.nextSibling);
    } else {
        subjectForm.value = 'MNOお問い合わせ・ご要望フォーム';

        // <input id="00N2u000000wSzS" type="hidden" name="00N2u000000wSzS" value=TRUE> の削除
        const el00N2u000000wSzS = document.getElementById('00N2u000000wSzS');

        if(el00N2u000000wSzS) {
            el00N2u000000wSzS.parentNode.removeChild(el00N2u000000wSzS);
        }
    }

    // modalコンポーネントの閉じるボタンクリック時の処理
    const modaalClose = document.getElementById('modaal-close');
    modaalClose.addEventListener('click', () => {
        chkDisabled(true);
    });

    // modalバックグラウンドクリック時の処理
    const modalWrapper =  document.getElementsByClassName('modaal-wrapper')[0];
    modalWrapper.addEventListener('click', () => {
        chkDisabled(true);
    });

});

// back button
backBtn.addEventListener('click', (e) => {
    errors.length = 0;// errors initialize
    chkDisabled(false);
    reEntry();
    $('body,html').animate({scrollTop: $('#js-inquiry_Form-top').offset().top}, 400, 'swing');
});

// modal set
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

// modal confirm button
confirmClsBtn.addEventListener('click', (e) => {
    $('#modal-confirm').modaal('close');
    chkDisabled(false);
    selectAgain();
    $('body,html').animate({scrollTop: $('#js-inquiry_Other-section').offset().top}, 400, 'swing');
});

// modal submit button
submitBtn.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.setAttribute('aria-disabled', true);
    self.setAttribute('disabled', true);

    // 不具合発生場所 住所（丁目以降）(00N0I00000KRr1H)が空の場合SFのオペレーション上不都合がある（エラーになる）ので「.」を入れる
    if( document.getElementById('00N0I00000KRr1H').value === '' ) {
        document.getElementById('00N0I00000KRr1H').value = '.';
    }

    form.submit();
});

const searchDispPostcode = document.getElementById('js-disp-search-postcode');
const searchDisphKeyword = document.getElementById('js-disp-search-keyword');
const defectiveAddress = document.getElementById('js-defective-address');
const defectiveAddressOther = document.getElementById('js-defective-address-other');
const dispDefectiveAddressOtherWrapper = document.getElementById('js-disp-00N0I00000KRr1H-wrapper');
const dispInquiryEasyModalMapWrapper = document.getElementById('js-inquiry-easy-Modal_Map-wrapper');

let isSerchByPostCode;

seachMethods.forEach(seachMethod => {
    seachMethod.onchange = function() {
        if( seachMethod.value === '郵便番号から検索' ) {
            searchDispPostcode.setAttribute('aria-hidden', false);
            searchDisphKeyword.setAttribute('aria-hidden', true);
            defectiveAddressOther.setAttribute('aria-hidden', false);
            dispDefectiveAddressOtherWrapper.setAttribute('aria-hidden', false);
            dispInquiryEasyModalMapWrapper.setAttribute('aria-hidden', true);
            isSerchByPostCode = true;
        } else {
            searchDispPostcode.setAttribute('aria-hidden', true);
            searchDisphKeyword.setAttribute('aria-hidden', false);
            defectiveAddressOther.setAttribute('aria-hidden', true);
            dispDefectiveAddressOtherWrapper.setAttribute('aria-hidden', true);
            dispInquiryEasyModalMapWrapper.setAttribute('aria-hidden', false);
            isSerchByPostCode = false;
        }
        defectiveAddress.setAttribute('aria-hidden', false);
        document.getElementsByClassName('js-step-3').forEach(section => {
            section.setAttribute('aria-hidden', false);
        });
    }
});


// ↓ easy.jsからコピー ↓
// おそらく不要コードあり

const CLASS_NAMES = {
    DISPLAY: 'inquiry-easy-Map_Display',
    DISPLAY_INIT: 'inquiry-easy-Map_Display-init',
    SEARCH_INVALID: 'inquiry-easy-Map_Search-invalid',
}


const formNames = {
  location: '00N0I00000JycJR',
  type: '00N2u000001T0kB',
  floor: '00N2u000000PkFH',
  address: '00N280000095Txj',
  postcode: '00N0I00000JycJH',
  lat: '00N2u000000wSyU',
  lng: '00N2u000000wSyZ',
  building: '00N2u000000PkFM',

}


// 発生場所種別: radioボタン
const inqTypes = document.querySelectorAll(`[name="${formNames.type}"]`);

let isInqTypesSelected = false;
inqTypes.forEach(inqType => {
  // 各radioボタンをクリックした際の挙動
  inqType.addEventListener('click', () => {
    if (!isInqTypesSelected) {
      isInqTypesSelected = true;
    }
  });

});


// 発生場所
const inqAddressElm = document.querySelector(`[name="${formNames.address}"]`);
const inqPostcodeElm = document.querySelector(`[name="${formNames.postcode}"]`);
const inqLatElm = document.querySelector(`[name="${formNames.lat}"]`);
const inqLngElm = document.querySelector(`[name="${formNames.lng}"]`);
const inqAddressAttentionTextElm = document.querySelector('.js-address-attention-text')

const mapInput = document.getElementById('js-inquiry-easy_Map-input');
const initAddressDisplay = mutationList => {
    for(const mutation of mutationList) {
        if(mutation.type === 'attributes') {
            if (inqAddressElm.value) {
                document.getElementById(`err-required_${formNames.address}`).setAttribute('aria-hidden', 'true');
                mapInput.classList.remove(CLASS_NAMES.SEARCH_INVALID);
                inqAddressAttentionTextElm.style.display = 'block';
            }
        }
    }
}
const mutationObserver = new MutationObserver(initAddressDisplay);
mutationObserver.observe(inqAddressElm, {attributes: true});
const setInqAddress = (address, postcode, lat, lng) => {
    inqAddressElm.value = address;
    inqPostcodeElm.value = postcode;
    inqLatElm.value = lat;
    inqLngElm.value = lng;

    // ここに書くべきなのか要検討
    if($el00N0I00000JycJH) {
        $el00N0I00000JycJH[0].value = inqPostcodeElm.value.replace(/-/g, '');
    }
};

mapInput.addEventListener('focus', e => {
    if (e.currentTarget.classList.contains(CLASS_NAMES.SEARCH_INVALID)) {
        e.currentTarget.classList.remove(CLASS_NAMES.SEARCH_INVALID);
    }
});

const initMap = (isModal = false) => {
  const mapContainer = document.getElementById(`js-inquiry-easy${isModal ? '-Modal' : ''}_Map`);
  const mapDefaultCenter = {
    lat: Number('35.6104689'),
    lng: Number('139.6301295')
  };

  if (mapContainer) {
    if (navigator.geolocation) {
      // 位置情報を取得できるとき
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (isModal) buildMap(pos, true, false, true);
        else buildMap(pos, true);
      },
      // 位置情報を取得できないとき
      () => buildMap(mapDefaultCenter, false, true, isModal));
    }
  }
}

let commonPos = null;
const buildMap = (pos, isGeolocationEnabled, isDefault = false, isModal = false) => {
  const mapContainer = document.getElementById(`js-inquiry-easy${isModal ? '-Modal' : ''}_Map`);
  const mapLocation = document.getElementById('js-inquiry-easy_Map-location');
  const mapLoading = document.getElementById(`js-inquiry-easy${isModal ? '-Modal' : ''}_Map-loading`);
  const mapDefaultZoom = 17;
  const mapOption = {
    center: pos,
    zoom: mapDefaultZoom,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  };

  let map = new google.maps.Map(mapContainer, mapOption);
  let service = new google.maps.places.PlacesService(map);
  const markerIcon = {
    url: '/assets/img/common/icon-location-pink.png',
    scaledSize: new google.maps.Size(28, 36),
  };
  let marker = new google.maps.Marker({
    position: pos,
    map,
    icon: markerIcon,
  });
  let geocoder = new google.maps.Geocoder();

  const formatAddress = data => {
    const address_components = data.address_components;
    // 取得した住所から、国名と郵便番号を除去
    const address = address_components.filter(addr => (!addr.types.includes('country') && !addr.types.includes('postal_code') && !addr.types.includes('subpremise')));
    const postcode = address_components.filter(addr => addr.types.includes('postal_code'))[0]?.long_name || '';

    address.reverse();
    let addressList = [];
    address.forEach(addr => {
      // 番地や建物名の前に空白を追加
      if (addr.types.includes('premise')) {
        addressList.push(' ');
      }
      addressList.push(addr.long_name);
    })

    // 国名&郵便番号 = [0], ビル名 = [2]~
    let formattedAddress = data.formatted_address.split(' ')?.[1]
    if (!formattedAddress || formattedAddress.includes('〒')) {
      formattedAddress = addressList.join('');
    }

    return {
      address: formattedAddress,
      postcode,
      lat: data.geometry.location.lat(),
      lng: data.geometry.location.lng(),
    }
  }

  const setAddressByMap = (pos, _isDefault = isDefault) => {
    geocoder.geocode(
      {latLng: pos},
      (result, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          const addressData = formatAddress(result[0])
          if(!_isDefault && !isModal) {
            setInqAddress(addressData.address, addressData.postcode, addressData.lat, addressData.lng);
          }
        }
      }
    );
  }
  setAddressByMap(pos);

  const setMarker = pos => {
    marker.setMap(null);
    marker = null;
    marker = new google.maps.Marker({
      position: pos,
      map,
      icon: markerIcon,
    });
    map.panTo(pos);
  }

  let inputFormValue = document.getElementById('js-inquiry-easy_Map-input');

  if (!isModal) {
    if (mapInput) {
      let autocomplete = new google.maps.places.Autocomplete(mapInput);
      autocomplete.bindTo('bounds', map);
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name', 'formatted_address']);

      // 検索から地図更新
      const setMapByInput = place => {
        if (!place.geometry) {
          let request = {
            query: mapInput.value,
            fields: ['name', 'geometry'],
          };
          service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              const location = results[0].geometry.location;
              map.setCenter(location);
              map.setZoom(mapDefaultZoom);
              setMarker(location);
              setAddressByMap(location, false);
              commonPos = location;
            }
          });
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(mapDefaultZoom);
        }
        setMarker(place.geometry.location);
        const addressData = formatAddress(place)
        setInqAddress(addressData.address, addressData.postcode, addressData.lat, addressData.lng);
        commonPos = place.geometry.location;
      };

      // autocompleteから検索
      autocomplete.addListener('place_changed', () => {
        $el00N0I00000JycJH.value = inqPostcodeElm;
        const place = autocomplete.getPlace();
        setMapByInput(place);
      });

      // searchボタンから検索
      const searchBtn = document.getElementById('js-inquiry-easy_Map-search-btn');
      searchBtn.addEventListener('click', () => {
        $el00N0I00000JycJH.value = inqPostcodeElm;
        setMapByInput(inputFormValue.value);
      });
    }

    // 現在地を取得できる時
    if (mapLocation && isGeolocationEnabled) {
      mapLocation.style.display = 'block';
      mapLocation.addEventListener('click', () => {
        map.setCenter(pos);
        setMarker(pos);
        setAddressByMap(pos, false);
        inputFormValue.value = '';
      });
    } else {
      mapLocation.style.display = 'none';
    }

    map.addListener('click', e => {
      commonPos = e.latLng;
      setMarker(e.latLng);
      setAddressByMap(e.latLng, false);
      inputFormValue.value = '';
    });
  }

  mapLoading.setAttribute('aria-hidden', true);
}

window.initMap = initMap;

const googmapApiKey = 'AIzaSyBmiYC8QLzg9uN_RVQ2jkWNR5YRf1z7dfo';
const loadGooglemap = (src, callback) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
}
loadGooglemap(`https://maps.googleapis.com/maps/api/js?key=${googmapApiKey}&libraries=places,geometry&callback=initMap`, initMap);
