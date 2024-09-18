import { validation } from './validation.js';
import { errorReset } from './validation.js';

const useState = (defaultValue) => {
    let value = defaultValue;
    const getValue = () => value;
    const setValue = newValue => value = newValue;
    return [getValue, setValue];
}

/////////////////////////////////////////////
// variables
const thisForm = document.getElementById('js-input-corporation-information_Form');
const radioBusinessType = document.getElementsByName('WebForm_SetContact_Businessform__c');
const showBusinessType = document.querySelectorAll('.js-show-business-type');
const gotoNextStep = document.querySelectorAll('.js-goto-next-step');
const backtoPrevStep = document.querySelectorAll('.js-backto-prev-step');
const step0 = document.getElementById('step0');
const step1 = document.getElementById('step1');
const steps = document.querySelectorAll('.js-step');
const submitBtn = document.getElementById('js-submit-btn');
let errors = 0;
const [isInsentive, setIsInsentive] = useState(false);


/////////////////////////////////////////////
// スマホサイズ判定
const isSmartPhone = () => {
    return (window.matchMedia('(max-width: 768px)').matches) ? true : false;
};

/////////////////////////////////////////////
// URL 判定（インセンティブ条件分岐用）
const checkUrl = () => {
    const searchStr = location.search;
    if ( searchStr === '?in=0' ) {
        setIsInsentive(false);
        const incentiveBranches = document.querySelectorAll('.js-incentive-branch');
        const progressBars = document.querySelectorAll('.js-progressbar');
        const incentiveSteps = document.querySelectorAll('.js-incentive-step');
        incentiveBranches.forEach(incentiveBranche => incentiveBranche.setAttribute('aria-hidden', 'true'));
        progressBars.forEach(progressBar => progressBar.children[2].style.display = 'none');
        incentiveSteps.forEach(incentiveStep => incentiveStep.textContent = 'STEP3');
    } else if ( searchStr === '?in=1') {
        setIsInsentive(true);
    } else {
        location.href = '/area/rakuten-casa/error-corporation-information/';
    }
};

/////////////////////////////////////////////
// loading
const loading = () => {
    const contentsLoad = document.getElementById('js-contents-load');
    contentsLoad.classList.add('js-active');
    checkBusinessType();
}

/////////////////////////////////////////////
// 申込種別 法人 or 個人事業主 判定
const checkBusinessType = () => {
    const proprietorship = document.querySelectorAll('.js-proprietorship');
    const corporations = document.querySelectorAll('.js-corporations');
    const businessType = document.querySelectorAll('.js-business-type');
    const honbuCompanyName = document.getElementsByName('WebForm_honbuCompanyName__c')[0];
    const itemName = document.getElementsByName('WebForm_ItemName__c')[0];
    const accountHolderKanji = document.getElementsByName('WebForm_Account_Holder_Kanji__c')[0];
    const acountHolderKanaFurigana = document.getElementsByName('WebForm_Account_Holder_Kana_Furigana__c')[0];
    const setContactFurigana = document.getElementsByName('WebForm_SetContact_Furigana__c')[0];
    const SetContactCompanyName = document.getElementsByName('WebForm_SetContact_CompanyName__c')[0]
    const memorandumRepresentativeName = document.getElementsByName('WebForm_MemorandumRepresentative_Name__c')[0];
    const setContactRepresentativePositio = document.getElementsByName('WebForm_SetContact_RepresentativePositio__c')[0];

    const jobDate = ['代表','店長','オーナー'];
    const jobDate02 = ['代表取締役','代表取締役社長','代表社員','取締役','代表','無限責任社員','理事','代表理事','代表役員','理事長','学長'];

    const setKojinStoreName = () => {
        SetContactCompanyName.value = itemName.value;
        SetContactCompanyName.readOnly = true;
        SetContactCompanyName.classList.add('input-corporation-information-Form_Readonly');
        console.log('個人', SetContactCompanyName.value)
    }
    const setHoujinCompaneyName = () => {
        SetContactCompanyName.value = honbuCompanyName.value;
        SetContactCompanyName.readOnly = true;
        SetContactCompanyName.classList.add('input-corporation-information-Form_Readonly');
        console.log('法人', SetContactCompanyName.value)
    }

    const setOptionJob = (businessType) => {
        //Safari で表示した際にcssの非表示だと option が非表示にならないためjsで追加・削除対応
        console.log(setContactRepresentativePositio)
        const optionJobInformation = document.querySelectorAll('.js-job-information');
        optionJobInformation.forEach(element => setContactRepresentativePositio.removeChild(element));
        const selectJobDate = (businessType === '個人事業主') ? jobDate : jobDate02
        selectJobDate.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.text = item;
            option.classList.add('js-job-information')
            setContactRepresentativePositio.add(option)
        })
    }

    radioBusinessType.forEach(e => {
        e.addEventListener('change', () => {
            const checkedBusinessType = document.querySelector('input:checked[name=WebForm_SetContact_Businessform__c]').value;
            switch (checkedBusinessType) {
                case '個人事業主':
                    proprietorship.forEach(elem => elem.setAttribute('aria-hidden', false));
                    corporations.forEach(elem => elem.setAttribute('aria-hidden', true));
                    // 法人側のイベントリスナーリセット
                    honbuCompanyName.removeEventListener('change', setHoujinCompaneyName);
                    // step1 店舗名
                    itemName.addEventListener('change', setKojinStoreName);
                    // step1 会社名
                    honbuCompanyName.value = '-';
                    SetContactCompanyName.value = '';
                    // step2 店舗名（フリガナ）
                    setContactFurigana.placeholder = '例）ラクテンショウテン';
                    // step2 ご契約者様役職
                    setOptionJob(checkedBusinessType)
                    // step3 口座名義人漢字
                    accountHolderKanji.placeholder = '例）楽天太郎';
                    // step3 口座名義人カナ
                    acountHolderKanaFurigana.placeholder = '例）ラクテンタロウ';
                    // step3 ご契約者様と口座名義人の関係性
                    if(isSmartPhone()) {
                        memorandumRepresentativeName.placeholder = '本人／妻　等';
                    } else {
                        memorandumRepresentativeName.placeholder = '本人／妻／本人が所持している別店舗　等';
                    }
                    break;
                case '法人':
                    proprietorship.forEach(elem => elem.setAttribute('aria-hidden', true));
                    corporations.forEach(elem => elem.setAttribute('aria-hidden', false));
                    // 個人事業主側のイベントリスナーリセット
                    itemName.removeEventListener('change', setKojinStoreName);
                    // step1 会社名
                    honbuCompanyName.value = '';
                    honbuCompanyName.addEventListener('change', setHoujinCompaneyName);
                    // step2 法人名（フリガナ）
                    setContactFurigana.placeholder = '例）マルマルカブシキガイシャ';
                    // step2 ご契約者様役職
                    setOptionJob(checkedBusinessType)
                    // step3 口座名義人漢字
                    accountHolderKanji.placeholder = '例）〇〇株式会社代表取締役楽天太郎';
                    // step3 口座名義人カナ
                    acountHolderKanaFurigana.placeholder = '例）マルマルカブシキガイシャダイヒョウトリシマリヤクラクテンタロウ';
                    // step3 ご契約者様と口座名義人の関係性
                    if(isSmartPhone()) {
                        memorandumRepresentativeName.placeholder = '本人／代表が経営する別法人　等';
                    } else {
                        memorandumRepresentativeName.placeholder = '例）本人／同一会社／代表が経営する別法人／同一法人で経営する別店舗　等';
                    }
                    break;
                default:
                    break;
            }
            businessType.forEach(elem => elem.textContent = checkedBusinessType);
            showBusinessType.forEach(elem => elem.setAttribute('aria-hidden', false));
        });
    });
};

const comfirmBusinessType = () => errors = validation(radioBusinessType, 'chkAll');


/////////////////////////////////////////////
// step3 都道府県～階数部屋番号の文字制限100
const checkLenghAccountholderAddressPref = () => {
    const accountholderAddressPrefCtiyTown = document.getElementsByName('WebForm_Accountholder_PrefCityTown__c')[0];
    const accountholderAddressChoBanchi = document.getElementsByName('WebForm_Accountholder_Address_ChoBanchi__c')[0];
    const accountholderInstallationBuild = document.getElementsByName('WebForm_Accountholder_Installation_Build__c')[0];
    const accountholderInstallationRoom = document.getElementsByName('WebForm_Accountholder_Installation_Room__c')[0];

    const wordcount = accountholderAddressPrefCtiyTown.value.length
        + accountholderAddressChoBanchi.value.length
        + accountholderInstallationBuild.value.length
        + accountholderInstallationRoom.value.length;
    console.log(wordcount);
    errors = validation(accountholderAddressPrefCtiyTown, 'chkAll', undefined, wordcount);
}

/////////////////////////////////////////////

// 電話番号
const inputTel = document.querySelectorAll('.js-tel');
inputTel.forEach(e => {
    e.addEventListener('blur', e => {
        const telInputName = e.target.getAttribute('name');
        const errorName = `err-telsize_${telInputName}`;
        document.getElementById(errorName).setAttribute('aria-hidden', true);

        if(e.target.classList.contains('js-input-step-tel-2')){
            if(e.relatedTarget !== null && e.relatedTarget.classList.contains('js-input-step-tel-2')){
                return;
            }
        }else if(e.target.classList.contains('js-input-step-tel-4')){
            if(e.relatedTarget !== null && e.relatedTarget.classList.contains('js-input-step-tel-4')){
                return;
            }
        }else if(e.target.classList.contains('js-input-step-tel-6')){
            if(e.relatedTarget !== null && e.relatedTarget.classList.contains('js-input-step-tel-6')){
                return;
            }
        }
        errors = validation(e.target);
    });
});

// 電話番号 ハイフン繋ぎ作成
const createTel = (currentId) => {
    let inputTelList = [];
    let tellist = [];
    let targetName = '';
    inputTel.forEach(e => {
        if( e.classList.contains(`js-input-step-tel-${currentId}`)) {
            inputTelList.push(e);
            errors = validation(e, 'chkAll');
        }

    });

    let telsize = 0;
    for (let i = 0; i < inputTelList.length; i++) {
        if (inputTelList[i].classList.contains(`js-input-step-tel-${currentId}`)) {
            if( i === 0 ) targetName = inputTelList[i].getAttribute('name').split('_tel')[0];
            telsize += inputTelList[i].value.length;
            tellist.push(inputTelList[i].value);
        }

    }

    const isEmpty = tellist.includes('');
    const telNumber = isEmpty ? '' : tellist.join('-');
    const tel = document.getElementsByName(targetName)[0];
    tel.value = telNumber;
    errors = validation(tel, 'chkAll', telsize);
};

/////////////////////////////////////////////
// 店舗住所と同一チェック
const synchStoreCheckbox = document.querySelectorAll('.js-synch-store-address');
synchStoreCheckbox.forEach(e => {
    e.addEventListener('change', () => {
        if(e.checked) {
            const copyPostNumber = document.getElementsByName('WebForm_PostNumber__c')[0].value;
            const copyPrefCityTown = document.getElementsByName('WebForm_PrefCityTown__c')[0].value;
            const copyChoBanchi = document.getElementsByName('WebForm_ChoBanchi__c')[0].value;
            const copyBuildingName = document.getElementsByName('WebForm_BuildingName__c')[0].value;
            const copyFloorType = document.getElementsByName('WebForm_FloorType__c')[0].value;
            const copyPlaceFloor = document.getElementsByName('WebForm_PlaceFloor__c')[0].value;
            const copyFloorRoomNumber = document.getElementsByName('WebForm_FloorRoomNumber__c')[0].value;
            const currentCheck = e.id;
            switch (currentCheck) {
                case 'js-step2-store-address':
                    document.getElementsByName('WebForm_SetContact_PostNumber__c')[0].value = copyPostNumber;
                    document.getElementsByName('WebForm_SetContact_PrefCityTown__c')[0].value = copyPrefCityTown;
                    document.getElementsByName('WebForm_SetContact_Address_ChoBanchi__c')[0].value = copyChoBanchi;
                    document.getElementsByName('WebForm_SetContact_Installation_Build__c')[0].value = copyBuildingName;
                    if( !inputStepRoomNumberChk.checked ) {
                        document.getElementsByName('WebForm_SetContact_Installation_Room__c')[0].value = copyFloorRoomNumber
                    } else {
                        document.getElementsByName('WebForm_SetContact_Installation_Room__c')[0].value = copyFloorType + copyPlaceFloor;
                    }
                    break;
                default:
                    break;
            }

            const zipcodeErr = document.querySelector('#err-address_WebForm_SetContact_PostNumber__c');
            if(zipcodeErr.getAttribute('aria-hidden') === 'false') {
                zipcodeErr.setAttribute('aria-hidden', true);
            }
        }
    });
});

/////////////////////////////////////////////
// ご契約者様と同一チェック
const synchNameCheckbox = document.getElementById('js-synch-setcontact-name');
synchNameCheckbox.addEventListener('change', e => {
    if(e.target.checked) {
        const copyRepresentativePositio = document.getElementsByName('WebForm_SetContact_RepresentativePositio__c')[0].value;
        const copyFirstName = document.getElementsByName('WebForm_SetContact_FirstName__c')[0].value;
        const copyRepresenName = document.getElementsByName('WebForm_SetContact_RepresenName__c')[0].value;
        const copyFirstNameFURI = document.getElementsByName('WebForm_SetContact_FirstName_FURI__c')[0].value;
        const copyRepresenNameFURI = document.getElementsByName('WebForm_SetContact_RepresenName_FURI__c')[0].value;
        document.getElementsByName('WebForm_SetPlace_InstallationTantoPo__c')[0].value = copyRepresentativePositio;
        document.getElementsByName('WebForm_SetPlace_InstallationFirstNa__c')[0].value = copyFirstName;
        document.getElementsByName('WebForm_SetPlace_Installation_Name__c')[0].value = copyRepresenName;
        document.getElementsByName('WebForm_SetPlace_InstallationFirstFU__c')[0].value = copyFirstNameFURI;
        document.getElementsByName('WebForm_SetPlace_Installation_NaFURI__c')[0].value = copyRepresenNameFURI;
    }
});

/////////////////////////////////////////////
// ご契約者様ご自宅住所と同一
const synchAddressCheckbox = document.getElementById('js-synch-setcontact-address');
synchAddressCheckbox.addEventListener('change', e => {
    if(e.target.checked) {
        const copyPostNumber = document.getElementsByName('WebForm_SetContact_PostNumber__c')[0].value;
        const copyPrefCityTown = document.getElementsByName('WebForm_SetContact_PrefCityTown__c')[0].value;
        const copyAddressChoBanchi = document.getElementsByName('WebForm_SetContact_Address_ChoBanchi__c')[0].value;
        const copyInstallationBuild = document.getElementsByName('WebForm_SetContact_Installation_Build__c')[0].value;
        const copyInstallationRoom = document.getElementsByName('WebForm_SetContact_Installation_Room__c')[0].value;
        document.getElementsByName('WebForm_Accountholder_zipcode__c')[0].value = copyPostNumber;
        document.getElementsByName('WebForm_Accountholder_PrefCityTown__c')[0].value = copyPrefCityTown;
        document.getElementsByName('WebForm_Accountholder_Address_ChoBanchi__c')[0].value = copyAddressChoBanchi;
        document.getElementsByName('WebForm_Accountholder_Installation_Build__c')[0].value = copyInstallationBuild;
        document.getElementsByName('WebForm_Accountholder_Installation_Room__c')[0].value = copyInstallationRoom;

        const zipcodeErr = document.querySelector('#err-address_WebForm_Accountholder_zipcode__c');
        if(zipcodeErr.getAttribute('aria-hidden') === 'false') {
            zipcodeErr.setAttribute('aria-hidden', true);
        }
    }
});

/////////////////////////////////////////////
// 生年月日 作成
const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
const countDatesOfFeb = year => isLeapYear(year) ? 29 : 28;
const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth() + 1;
let datesOfYear= [31, countDatesOfFeb(thisYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const createOption = (id, startNum, endNum, current) => {
    const selectDom = document.getElementById(id);
    let optionDom = '';
    let option = '';
    for (let i = startNum; i <= endNum; i++) {
        option = '<option value="' + i + '">' + i + '</option>';
        if (i === current) {
            option = '<option value="" selected>選択してください</option>';
            option += '<option value="' + i + '">' + i + '</option>';
        }
        optionDom += option;
    }
    selectDom.insertAdjacentHTML('beforeend', optionDom);
}

const createSelect = (year, month, date) => {
    const yearBox = document.getElementById(year);
    const monthBox = document.getElementById(month);
    const dateBox = document.getElementById(date);
    monthBox.addEventListener('change', e => {
        dateBox.innerHTML = '';
        const selectedMonth = e.target.value;
        createOption(date, 1, datesOfYear[selectedMonth - 1], 1);
    });
    yearBox.addEventListener('change', e => {
        monthBox.innerHTML = '';
        dateBox.innerHTML = '';
        const updatedYear = e.target.value;
        datesOfYear = [31, countDatesOfFeb(updatedYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        createOption(month, 1, 12, 1);
        createOption(date, 1, datesOfYear[0], 1);
    });
    dateBox.addEventListener('change', () => {
    });
}

const executeSelectValidation = (year, month, date, selectItem) => {
    const birthDaySelect = document.getElementsByClassName(selectItem);
    const yearBox = document.getElementById(year);
    const monthBox = document.getElementById(month);
    const dateBox = document.getElementById(date);

    birthDaySelect.forEach(item => {
        item.addEventListener("blur", e => {
            if(e.relatedTarget !== null && e.relatedTarget.classList.contains(selectItem)){
                return;
            }
            errors = validation(yearBox, 'chkAll');
            errors = validation(monthBox, 'chkAll');
            errors = validation(dateBox, 'chkAll');
        });
        item.addEventListener('change' , e => {
            let selectedValue = 0;
            birthDaySelect.forEach(item => {
                if(item.value !== ''){
                    selectedValue += 1;
                }
            });
            if(selectedValue === 3){
                errors = validation(yearBox, 'chkAll');
                errors = validation(monthBox, 'chkAll');
                errors = validation(dateBox, 'chkAll');
            }
        })
    })
}

createOption('year2', 1900, thisYear, 1980);
createOption('month2', 1, 12, 1);
createOption('date2', 1, datesOfYear[thisMonth - 1], 1);
createSelect('year2', 'month2', 'date2');
executeSelectValidation('year2', 'month2', 'date2', 'js-select-data2');

createOption('year3', 1900, thisYear, 1980);
createOption('month3', 1, 12, 1);
createOption('date3', 1, datesOfYear[thisMonth - 1], 1);
createSelect('year3', 'month3', 'date3');
executeSelectValidation('year3', 'month3', 'date3', 'js-select-data3');

/////////////////////////////////////////////
// 生年月日 送信用
const createBirthday = currentId => {
    const yearid = document.getElementById(`year${currentId}`);
    const monthid = document.getElementById(`month${currentId}`);
    const dateid = document.getElementById(`date${currentId}`);
    const inputName = yearid.getAttribute('name').split('_bd')[0];
    const birthday = document.getElementsByName(inputName)[0];
    const selectyyyy = yearid.value || '00';
    const selectmm = ('00' + monthid.value).slice(-2);
    const selectdd = ('00' + dateid.value).slice(-2);
    const selectdate = `${selectyyyy}/${selectmm}/${selectdd}`;
    birthday.value = selectdate === '00/00/00' ? '' : selectdate;
    errors = validation(yearid, 'chkAll');
    errors = validation(monthid, 'chkAll');
    errors = validation(dateid, 'chkAll');
    errors = validation(birthday, 'chkAll');
};

/////////////////////////////////////////////
// つながりやすいご連絡先
const ownerInfoCheckKadenPicDummy = document.getElementsByName('WebForm_OwnerInfoCheck_KadenPIC__c_dummy')[0];
const kadenPICFirstName = document.getElementsByName('WebForm_OwnerInfoCheck_KadenPICFirstName__c')[0];
const kadenPICName = document.getElementsByName('WebForm_OwnerInfoCheck_KadenPICName__c')[0];
const KadenTelNum1 = document.getElementsByName('WebForm_OwnerInfoCheck_KadenTelNum__c_tel')[0];
const KadenTelNum2 = document.getElementsByName('WebForm_OwnerInfoCheck_KadenTelNum__c_tel')[1];
const KadenTelNum3 = document.getElementsByName('WebForm_OwnerInfoCheck_KadenTelNum__c_tel')[2];

const KadenTelNumSub1 = document.getElementsByName('WebForm_OwnerInfoCheck_KadenTelNum2__c_tel')[0];
const KadenTelNumSub2 = document.getElementsByName('WebForm_OwnerInfoCheck_KadenTelNum2__c_tel')[1];
const KadenTelNumSub3 = document.getElementsByName('WebForm_OwnerInfoCheck_KadenTelNum2__c_tel')[2];


ownerInfoCheckKadenPicDummy.addEventListener('change', e => {
    const val = e.target.value;
    switch (val) {
        case '店舗管理者':
            console.log('店舗管理者');
            kadenPICFirstName.value = document.getElementsByName('WebForm_SetPlace_InstallationFirstFU__c')[0].value;
            kadenPICName.value = document.getElementsByName('WebForm_SetPlace_Installation_NaFURI__c')[0].value;
            KadenTelNum1.value = '';
            KadenTelNum2.value = '';
            KadenTelNum3.value = '';
            KadenTelNumSub1.value = '';
            KadenTelNumSub2.value = '';
            KadenTelNumSub3.value = '';
            break;
        case '契約者':
            console.log('契約者');
            kadenPICFirstName.value = document.getElementsByName('WebForm_SetContact_FirstName_FURI__c')[0].value;
            kadenPICName.value = document.getElementsByName('WebForm_SetContact_RepresenName_FURI__c')[0].value;
            KadenTelNum1.value = document.getElementsByName('WebForm_SetContact_TelNumber__c_tel')[0].value;
            KadenTelNum2.value = document.getElementsByName('WebForm_SetContact_TelNumber__c_tel')[1].value;
            KadenTelNum3.value = document.getElementsByName('WebForm_SetContact_TelNumber__c_tel')[2].value;
            break;
        default:
            kadenPICFirstName.value = '';
            kadenPICName.value = '';
            KadenTelNum1.value = '';
            KadenTelNum2.value = '';
            KadenTelNum3.value = '';
            KadenTelNumSub1.value = '';
            KadenTelNumSub2.value = '';
            KadenTelNumSub3.value = '';
            break;
    }
});

ownerInfoCheckKadenPicDummy.addEventListener('blur', () => errors = validation(ownerInfoCheckKadenPicDummy));
const createownerInfoCheckKadenPicDummy = () => errors = validation(ownerInfoCheckKadenPicDummy, 'chkAll');

/////////////////////////////////////////////
// つながりやすい時間
const ownerInfoCheckEasyTimeSelect1 = document.getElementsByName('WebForm_OwnerInfoCheck_EasyTime__c_select1')[0];
const ownerInfoCheckEasyTimeSelect2 = document.getElementsByName('WebForm_OwnerInfoCheck_EasyTime__c_select2')[0];
const ownerInfoCheckEasyTime = document.getElementsByName('WebForm_OwnerInfoCheck_EasyTime__c')[0];
const ownerInfoCheckEasyTimeOther = document.getElementById('js-ownerInfoCheckEasyTime-other');

ownerInfoCheckEasyTimeSelect1.addEventListener('change', e => {
    const val = e.target.value;
    if( val === 'その他' ) {
        ownerInfoCheckEasyTimeOther.setAttribute('aria-hidden', false);
        ownerInfoCheckEasyTimeSelect2.value = '';
    } else {
        ownerInfoCheckEasyTimeOther.setAttribute('aria-hidden', true);
        ownerInfoCheckEasyTimeSelect2.value = '-';
    }
    errors = validation(ownerInfoCheckEasyTimeSelect1, 'chkAll');
});

ownerInfoCheckEasyTimeSelect1.addEventListener('blur', () => errors = validation(ownerInfoCheckKadenPicDummy));

const createOwnerInfoCheckEasyTime = () => {
    if( ownerInfoCheckEasyTimeSelect1.value === 'その他' ) {
        ownerInfoCheckEasyTime.value = ownerInfoCheckEasyTimeSelect2.value;
    } else {
        ownerInfoCheckEasyTime.value = ownerInfoCheckEasyTimeSelect1.value;
    }
    errors = validation(ownerInfoCheckEasyTimeSelect1, 'chkAll');
    errors = validation(ownerInfoCheckEasyTimeSelect2, 'chkAll');
    errors = validation(ownerInfoCheckEasyTime, 'chkAll');
}

// [電話番号2]つながりやすいご連絡先(本当はvalidation.jsに移したい、、、)
const inputStepTel6Sub = document.getElementsByClassName('js-input-step-tel-6');
let flgInputStepTel6Sub = true;
let flgInputStepTel6SubFlgs = [true, true, true];
let flgInputStepTel6Size = true;
let dispInputStepTel6Sub = ''
const regexp = /^.{10,11}$/;
const displayWebFormOwnerInfoCheckKadenTelNum2C = document.getElementById('display-WebForm_OwnerInfoCheck_KadenTelNum2__c');
const errTelsizeWebFormOwnerInfoCheckKadenTelNum2CTel = document.getElementById('err-telsize_WebForm_OwnerInfoCheck_KadenTelNum2__c_tel');
const telWebFormOwnerInfoCheckKadenTelNum2CValue = document.getElementById('tel_WebForm_OwnerInfoCheck_KadenTelNum2__c_value');

const chkInputStepTel6Sub = () => {

    if( inputStepTel6Sub[0].value !== '' || inputStepTel6Sub[1].value !== '' || inputStepTel6Sub[2].value !== '' ) {

        for( let i = 0; i < inputStepTel6Sub.length; i++ ) {
            if( inputStepTel6Sub[i].value.match(/^[0-9]*$/) && inputStepTel6Sub[i].value !== '' ) {
                flgInputStepTel6SubFlgs[i] = true;
            } else {
                flgInputStepTel6SubFlgs[i] = false;
            }
        }

        dispInputStepTel6Sub = inputStepTel6Sub[0].value+inputStepTel6Sub[1].value+inputStepTel6Sub[2].value;

        if( regexp.test(dispInputStepTel6Sub) ) {
            flgInputStepTel6Size = true;
            errTelsizeWebFormOwnerInfoCheckKadenTelNum2CTel.setAttribute('aria-hidden', true)
        } else {
            flgInputStepTel6Size = false;
            errTelsizeWebFormOwnerInfoCheckKadenTelNum2CTel.setAttribute('aria-hidden', false)
        }

        if( flgInputStepTel6SubFlgs[0] && flgInputStepTel6SubFlgs[1] && flgInputStepTel6SubFlgs[2] && flgInputStepTel6Size ) {
            flgInputStepTel6Sub = true;
        } else {
            flgInputStepTel6Sub = false;
        }

        displayWebFormOwnerInfoCheckKadenTelNum2C.innerText = `${inputStepTel6Sub[0].value}-${inputStepTel6Sub[1].value}-${inputStepTel6Sub[2].value}`;

    } else {
        flgInputStepTel6Sub = true;
        telWebFormOwnerInfoCheckKadenTelNum2CValue.value = '';
        displayWebFormOwnerInfoCheckKadenTelNum2C.innerText = '';
    }

}


/////////////////////////////////////////////
// 銀行コードから自動表示
let bankCodeList = []
const bankCodeInput = document.getElementsByName('WebForm_Bank_Code__c')[0];
const bankNameInput = document.getElementsByName('WebForm_BankName__c')[0];
const branchCodeInput = document.getElementsByName('WebForm_Branch_Code__c')[0];
const branchNameInput = document.getElementsByName('WebForm_BranchName__c')[0];

const bankNameDropdown = document.getElementById('bankNameDropdown');
const bankCodeDropdown = document.getElementById('bankCodeDropdown');
const branchNameDropdown = document.getElementById('branchNameDropdown');
const branchCodeDropdown = document.getElementById('branchCodeDropdown');

const getBankData = async () => {
    try {
        const res = await $.ajax({
            url: '/assets/json/bankcode.json',
            dataType: 'json'
        });
        bankCodeList = res;
    } catch (err) {
        console.log(err);
    }
};

// 銀行コード → 銀行select生成
const setBankCodeDropdown = (e) => {
    bankNameInput.value = "";
    if (e.target.value.length < 2) {
        bankNameDropdown.setAttribute('aria-hidden', true);
        return
    }
    const bankCodeInput = e.target.value
    bankNameDropdown.innerHTML = '<option value="">選択してください</option>';
    const uniqueBankNames = {};


    bankCodeList.forEach(bankData => {
        const bankCode = bankData['銀行コード'];
        const bankName = bankData['銀行名'];

        if (bankCode.startsWith(bankCodeInput) && !Object.hasOwnProperty.call(uniqueBankNames,bankName)) {
            const option = document.createElement('option');
            option.value,option.textContent = `${bankName}：${bankCode}`;
            bankNameDropdown.appendChild(option);
            uniqueBankNames[bankName] = true;
        }
    });
    bankNameDropdown.setAttribute('aria-hidden', bankNameDropdown.childElementCount >= 2 ? false : true);

}
//銀行名 →  銀行select生成
const setBankNameDropdown = (e) => {
    if (e.target.value.length < 2) {
        bankCodeDropdown.setAttribute('aria-hidden', true);
        return
    }
    const bankNameInput = e.target.value
    bankCodeDropdown.innerHTML = '<option value="">選択してください</option>';
    const uniqueBankCodes = {};

    bankCodeList.forEach(bankData => {
        const bankCode = bankData['銀行コード'];
        const bankName = bankData['銀行名'];

        if (bankName.startsWith(bankNameInput) && !Object.hasOwnProperty.call(uniqueBankCodes,bankCode)) {
            const option = document.createElement('option');
            option.value,option.textContent = `${bankName}：${bankCode}`;
            bankCodeDropdown.appendChild(option);
            uniqueBankCodes[bankCode] = true;
        }
    });
    bankCodeDropdown.setAttribute('aria-hidden', bankCodeDropdown.childElementCount >= 2 ? false : true);
}

// 支店コード → 支店名select生成
const setBranchCodeDropdown = (e) => {
    branchNameInput.value = "";
    if(!bankCodeInput.value||!bankNameInput.value||e.target.value.length < 2){
        branchNameDropdown.setAttribute('aria-hidden', true);
        return
    }
    const branchCodeInput = e.target.value
    branchNameDropdown.innerHTML = '<option value="">選択してください</option>';

    const filteredBankList = bankCodeList.filter(item => item['銀行名'] === bankNameInput.value);
    filteredBankList.forEach(branchData => {
        const branchCode = branchData['支店コード'];
        const branchName = branchData['支店名'];

        if (branchCode.startsWith(branchCodeInput)) {
            const option = document.createElement('option');
            option.value,option.textContent = `${branchName}：${branchCode}`;
            branchNameDropdown.appendChild(option);
        }
    });
    branchNameDropdown.setAttribute('aria-hidden', branchNameDropdown.childElementCount >= 2 ? false : true);
}

// 支店名 → 支店コードselect生成
const setBranchNameDropdown = (e) => {
    if(!bankCodeInput.value||!bankNameInput.value||e.target.value.length < 2){
        branchCodeDropdown.setAttribute('aria-hidden', true);
        return
    }
    const branchNameInput = e.target.value
    branchCodeDropdown.innerHTML = '<option value="">選択してください</option>';

    const filteredBankList = bankCodeList.filter(item => item['銀行名'] === bankNameInput.value);
    filteredBankList.forEach(branchData => {
        const branchCode = branchData['支店コード'];
        const branchName = branchData['支店名'];

        // console.log(`filteredBankList : ${branchCode} ; ${branchName}`);

        if (branchName.startsWith(branchNameInput)) {
            const option = document.createElement('option');
            option.value,option.textContent = `${branchName}：${branchCode}`;
            branchCodeDropdown.appendChild(option);
        }
    });
    branchCodeDropdown.setAttribute('aria-hidden', branchCodeDropdown.childElementCount >= 2 ? false : true);
}

function onBankDropdown(e) {
    const selecteDropdown = e.target.value;

    if (selecteDropdown) {
        bankCodeInput.value = "";
        const selectedName = selecteDropdown.split("：")[0]
        const selectedCode = selecteDropdown.split("：")[1]
        bankNameInput.value = selectedName;
        bankCodeInput.value = selectedCode;
        branchNameInput.value = "";
        branchCodeInput.value = "";
        e.target.setAttribute('aria-hidden', true)

        validation(bankCodeInput);
    }
}

function onBranchDropdown(e) {
    const selecteDropdown = e.target.value;

    if (selecteDropdown) {
        const selectedName = selecteDropdown.split("：")[0]
        const selectedCode = selecteDropdown.split("：")[1]
        branchNameInput.value = selectedName;
        branchCodeInput.value = selectedCode;
        e.target.setAttribute('aria-hidden', true)

        validation(branchCodeInput);
    }
}

const initializeBankInputs = async () => {
    await getBankData();
    bankCodeInput.addEventListener('input', (e) => {setBankCodeDropdown(e)});
    bankNameInput.addEventListener('input', (e) => setBankNameDropdown(e));
    branchCodeInput.addEventListener('input', (e) => setBranchCodeDropdown(e));
    branchNameInput.addEventListener('input', (e) => setBranchNameDropdown(e));

    bankNameDropdown.addEventListener('change', (e) => onBankDropdown(e));
    bankCodeDropdown.addEventListener('change', (e) => onBankDropdown(e));
    branchNameDropdown.addEventListener('change', (e) => onBranchDropdown(e));
    branchCodeDropdown.addEventListener('change', (e) => onBranchDropdown(e));
};

initializeBankInputs();

const checkBankCode = () => errors = validation(bankCodeInput, 'chkAll');

/////////////////////////////////////////////
// 修正する
const modfyBtn = document.getElementById('js-modfy-btn');
modfyBtn.addEventListener('click', e => {
    e.preventDefault();
    steps.forEach(e => e.setAttribute('aria-hidden', true));
    step1.setAttribute('aria-hidden', false);
    window.scrollTo(0, 0);
    errors = errorReset();
});

/////////////////////////////////////////////
// 最初から入力をやり直す
const restBtn = document.getElementById('js-reset-btn');
const close = document.querySelector('.js-Modal_Close');

restBtn.addEventListener('click', e => {
    e.preventDefault();
    thisForm.reset();
    ownerInfoCheckEasyTimeOther.setAttribute('aria-hidden', true);
    showBusinessType.forEach(elem => elem.setAttribute('aria-hidden', true));
    radioBusinessType.forEach(e => e.checked = false);
    synchStoreCheckbox.forEach(e => e.checked = false);
    synchNameCheckbox.checked = false;
    synchAddressCheckbox.checked = false;
    privacyCheckbox.checked = false;
    steps.forEach(e => e.setAttribute('aria-hidden', true));
    step0.setAttribute('aria-hidden', false);
    nextStep1.setAttribute('aria-disabled', true);
    nextStep1.disabled = true;
    const zipcodeInputs = document.querySelectorAll('.js-zipcode');
    zipcodeInputs.forEach((zipcodeInput, i) => {
        // 住所自動入力エラーテキスト初期化(非表示)
        const errTxt = document.getElementById(`err-address_${zipcodeInput.name}`)
        errTxt.setAttribute('aria-hidden', true);
    });
    inputStepRoomNumberWrapper.forEach( element => element.style.display = 'block');
    close.click();
    window.scrollTo(0, 0);
    checkBusinessType();
    errors = errorReset();
});

/////////////////////////////////////////////
// 送信日時取得
const formatDate = dt => {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (`${y}/${m}/${d}`);
}

/////////////////////////////////////////////
// 個人情報の取扱い同意チェック→ 次に進むボタン活性化
const privacyCheckbox = document.getElementById('js-privacy-check');
const nextStep1 = document.getElementById('js-next-step1');

privacyCheckbox.addEventListener('change', e => {
    if( e.target.checked ) {
        nextStep1.setAttribute('aria-disabled', false);
        nextStep1.disabled = false;
    } else {
        nextStep1.setAttribute('aria-disabled', true);
        nextStep1.disabled = true;
    }
});

/////////////////////////////////////////////
// 送信
submitBtn.addEventListener('click', e => {
    const self = e.currentTarget;
    const submitDate = formatDate(new Date());
    document.getElementsByName('WebForm_VerbalConsentDate__c')[0].value = submitDate;

    const honbuCompanyName = document.getElementsByName('WebForm_honbuCompanyName__c')[0];
    if(honbuCompanyName.value === '-') honbuCompanyName.value = '';

    const ownerInfoCheckKadenPic = document.getElementsByName('WebForm_OwnerInfoCheck_KadenPIC__c')[0];
    if (ownerInfoCheckKadenPicDummy.value === '店舗管理者') {
        ownerInfoCheckKadenPic.value = '運用者';
    } else {
        ownerInfoCheckKadenPic.value = ownerInfoCheckKadenPicDummy.value;
    }

    const setContactBusinessform = document.querySelector('input:checked[name=WebForm_SetContact_Businessform__c]');
    const businessformValue = setContactBusinessform.value;
    if ( businessformValue === '個人事業主' ) setContactBusinessform.value = '個人';

    const depositTypeDummy = document.getElementsByName('WebForm_Deposit_Type__c_dummy')[0];
    const depositType = document.getElementsByName('WebForm_Deposit_Type__c')[0];
    switch (depositTypeDummy.value) {
        case '普通預金':
            depositType.value = '01普通預金';
            break;
        case '当座預金':
            depositType.value = '02当座預金';
            break;
        case 'その他の預金':
            depositType.value = '09その他の預金';
            break;
        default:
            break;
    }

    setTimeout(() => { thisForm.submit() }, 1000);
    self.setAttribute('aria-disabled', true);
    self.disabled = true;
});

/////////////////////////////////////////////
// fixed nav
const fixednav = id => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        const heading = document.getElementById(`js-heading-sp-${id}`);
        const observerHeader = new IntersectionObserver ((entries) => {
            for (const e of entries) {
                if (e.isIntersecting) {
                    heading.classList.remove('input-corporation-information-Progress_Fixed');
                } else {
                    heading.classList.add('input-corporation-information-Progress_Fixed');
                }
            }
        });
        observerHeader.observe(document.getElementById(`js-observe-sp-${id}`));
    } else {
        const nav = document.getElementById(`js-nav-${id}`);
        const observerNav = new IntersectionObserver ((entries) => {
            for (const e of entries) {
                if (e.isIntersecting) {
                    nav.classList.remove('input-corporation-information-Progress_Fixed');
                } else {
                    nav.classList.add('input-corporation-information-Progress_Fixed');
                }
            }
        });
        observerNav.observe(document.getElementById(`js-observe-${id}`));
    }
};

/////////////////////////////////////////////
// real time validation

// step0 ////////////////////////////////////
const inputStep0 = document.querySelectorAll('.js-input-step0');
inputStep0.forEach(e => {
    e.addEventListener('change', param => errors = validation(e, param.detail));
    e.addEventListener('blur', param => errors = validation(e, param));
});

// step1 ////////////////////////////////////
const inputStep1 = document.querySelectorAll('.js-input-step1');
inputStep1.forEach(e => {
    e.addEventListener('change', param => {
        errors = validation(e, param.detail);
    });

    e.addEventListener('blur', param => {
        if( e.getAttribute('name') !== 'WebForm_ItemName__c' ) {
            e.value = e.value.replace(/\s+/g, '');
        }
        errors = validation(e, param);
    });
});


const inputStepRoomNumberChk = document.querySelector('.js-input-step-room-number-chk');
const inputStepRoomNumberWrapper = document.querySelectorAll('.js-input-step-room-number-wrapper');
const roomNumberInput = document.querySelector('[name=WebForm_FloorRoomNumber__c]');
const varVasement = document.getElementById('js-basement');
const displayWebFormFloorRoomNumberC = document.getElementById('display-WebForm_FloorRoomNumber__c');

inputStepRoomNumberChk.addEventListener('change', (e) => {
    if( e.target.checked ) {
        switch (varVasement.value) {
            case 'Ｂ':
                roomNumberInput.value = 'Ｂ'+document.getElementsByName('WebForm_PlaceFloor__c')[0].value+'Ｆ';
                break;
            case 'Ｆ':
                roomNumberInput.value = document.getElementsByName('WebForm_PlaceFloor__c')[0].value+'Ｆ';
                break;
        }
        inputStepRoomNumberWrapper.forEach( element => element.style.display = 'none');
        displayWebFormFloorRoomNumberC.innerText = roomNumberInput.value;
    } else {
        roomNumberInput.value = '';
        inputStepRoomNumberWrapper.forEach( element => element.style.display = 'block');
        displayWebFormFloorRoomNumberC.innerText = '';
    }
});

// step2 ////////////////////////////////////
const inputStep2 = document.querySelectorAll('.js-input-step2');
inputStep2.forEach(e => {
    e.addEventListener('change', param => errors = validation(e, param.detail));
    e.addEventListener('blur', param => {
        e.value = e.value.replace(/\s+/g, '');
        errors = validation(e, param);
    });
});

// step3 ////////////////////////////////////
const inputStep3 = document.querySelectorAll('.js-input-step3');
inputStep3.forEach(e => {
    e.addEventListener('change', param => errors = validation(e, param.detail));
    e.addEventListener('blur', param => {
        if(!e.classList.contains('js-allow-space')) {
            e.value = e.value.replace(/\s+/g, '');
        }
        if(e.classList.contains('js-replace-to-full-width')) {
            e.value = e.value.replace(' ', '　');
        }
        errors = validation(e, param);
    });
});

// step4////////////////////////////////////
const inputStep4 = document.querySelectorAll('.js-input-step4');
inputStep4.forEach(e => {
    e.addEventListener('change', param => errors = validation(e, param.detail));
    e.addEventListener('blur', param => {
        e.value = e.value.replace(/\s+/g, '');
        errors = validation(e, param);
    });
});

/////////////////////////////////////////////
// step by step validation
const checkStep = currentId => {
    const checkFunction = `checkStep${currentId}`;
    const actions = {
        checkStep0: () => {
            inputStep0.forEach(e => e.dispatchEvent(new CustomEvent('change', { detail: 'chkAll' })));
            comfirmBusinessType();
            console.log('-----errorの数-----');
            console.log(errors);
            return errors;
        },
        checkStep1: () => {
            inputStep1.forEach(e => e.dispatchEvent(new CustomEvent('change', { detail: 'chkAll' })));
            createTel(currentId);
            console.log('-----errorの数-----');
            console.log(errors);
            return errors;
        },
        checkStep2: () => {
            inputStep2.forEach(e => e.dispatchEvent(new CustomEvent('change', { detail: 'chkAll' })));
            createTel(currentId);
            createBirthday(currentId);
            console.log('-----errorの数-----');
            console.log(errors);
            return errors;
        },
        checkStep3: () => {
            inputStep3.forEach(e => e.dispatchEvent(new CustomEvent('change', { detail: 'chkAll' })));
            createBirthday(currentId);
            checkBankCode();
            console.log('-----check wordcount-----');
            checkLenghAccountholderAddressPref();
            console.log('-----errorの数-----');
            console.log(errors);
            return errors;
        },
        checkStep4: () => {
            inputStep4.forEach(e => e.dispatchEvent(new CustomEvent('change', { detail: 'chkAll' })));
            createTel(currentId);
            createTel(6);
            createownerInfoCheckKadenPicDummy();
            createOwnerInfoCheckEasyTime();
            chkInputStepTel6Sub();
            console.log('-----errorの数-----');
            console.log(errors);
            return errors;
        },
    };
    return actions[checkFunction]();
}

/////////////////////////////////////////////
// next step show
const showNextStep = e => {
    const nextId = Number(e.currentTarget.id.split('js-next-step')[1]);
    const currentId = nextId -1;
    if ( checkStep(currentId) > 0 ) {
        console.log('errorあり');
        const navidPc = `js-nav-${currentId}`;
        const navidSp = `js-heading-sp-${currentId}`;
        let nav = '';
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        ( mediaQuery.matches ) ? nav = document.getElementById(navidSp) : nav = document.getElementById(navidPc);

        let navheight = 0;
        if ( nav !== null ) navheight = nav.clientHeight;
        const errorTxt = document.querySelectorAll('.c-Form_Txt-error');
        const errorHeading = () => {
            console.log(errorTxt.length);
            for (let i = 0; i < errorTxt.length; i++) {
                if ( errorTxt[i].getAttribute('aria-hidden') === 'false' ) {
                    return errorTxt[i];
                }
            }
        };
        const rect = errorHeading().getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = navheight + 8;
        const target = rect + offset - gap;
        window.scrollTo({ top: target, behavior: 'smooth' });

    } else if( !flgInputStepTel6Sub ) {
        return false;
    } else {
        const currentStep = document.getElementById(`step${currentId}`);
        let nextStep = document.getElementById(`step${nextId}`);
        // インセンティブなしの場合ステップ飛ばし
        if(!isInsentive() && currentId === 2) nextStep = document.getElementById('step4');

        currentStep.setAttribute('aria-hidden', true);
        nextStep.setAttribute('aria-hidden', false);
        window.scrollTo(0, 0);
        fixednav(nextId);
    }
}

/////////////////////////////////////////////
// prev step show
const showPrevStep = e => {
    const backId = Number(e.currentTarget.id.split('js-prev-step')[1]);
    const currentId = backId +1;
    const currentStep = document.getElementById(`step${currentId}`);
    let backStep = document.getElementById(`step${backId}`);
    // インセンティブなしの場合ステップ飛ばし
    if(!isInsentive() && currentId === 4) backStep = document.getElementById('step2');

    currentStep.setAttribute('aria-hidden', true);
    backStep.setAttribute('aria-hidden', false);
    window.scrollTo(0, 0);
    errors = errorReset();
}

/////////////////////////////////////////////
window.addEventListener('load', () => {
    loading();
});
gotoNextStep.forEach(elem => elem.addEventListener('click',showNextStep));
backtoPrevStep.forEach(elem => elem.addEventListener('click',showPrevStep));
checkUrl();
