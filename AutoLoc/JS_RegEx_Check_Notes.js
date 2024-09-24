// Post-L10n Inspection

// The following codes are either not localized or have issues as shown bellow:

// In Localized_Files/js/area/:

// campaign/treasure-hunt/quiz.js line: 188

title.innerText = `${target}の宝箱の謎`;
placeTitle.innerText = `${target}の宝箱のありかはここだ!`;
placeTitleSp.innerText = `${target}の宝箱の\nありかはここだ!`;


// questionare/index.js line: 17

if (param === 'byod') {
    campaignText = `Rakuten最強プランのお申し込みで、20,000ポイントプレゼントキャンペーン`;
} else if (param === 'pointback') {
    campaignText = `楽天モバイルご契約者様なら毎月500ポイントバックキャンペーン`;
} else if (param === 'referral') {
    campaignText = `Rakuten最強プランご紹介で、合計20,000ポイントプレゼント`;
} else {
    campaignText = '';
}


// rakuten-casa/input-corporation-information.js line: 444
// Translating switch statement may break code.
switch (val) {
    case '${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251237161")}':
        console.log('${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251237169")}');
        kadenPICFirstName.value = document.getElementsByName('WebForm_SetPlace_InstallationFirstFU__c')[0].value;
        kadenPICName.value = document.getElementsByName('WebForm_SetPlace_Installation_NaFURI__c')[0].value;
        KadenTelNum1.value = '';
        KadenTelNum2.value = '';
        KadenTelNum3.value = '';
        KadenTelNumSub1.value = '';
        KadenTelNumSub2.value = '';
        KadenTelNumSub3.value = '';
        break;
    case '${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251237178")}':
        console.log('${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251237185")}');
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

// line: 824
switch (depositTypeDummy.value) {
    case '${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251238235")}':
        depositType.value ='${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251238344")}';
        break;
    case '${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251238243")}':
        depositType.value ='${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251238363")}';
        break;
    case '${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251238250")}':
        depositType.value ='${translate("js/area/rakuten-casa/input-corporation-information:str_id_20240924113251238381")}';
        break;
    default:
        break;
}



// rakuten-casa/validation.js line: 124
// Translating if statement conditions may break code.
if (validator.matches(el.value,"${translate('js/area/rakuten-casa/validation:str_id_20240924113251240320')}")) {
    el.setAttribute('aria-describedBy', '');
    msg.setAttribute('aria-hidden', true);
    return 0;
} else {
    el.setAttribute('aria-describedBy', msgId);
    msg.setAttribute('aria-hidden', false);
    return 1;
}


// area-pref.js line: 80, 107 | area-saitama.js line: 147, 188
// Failed to capture dynamically created option element's texts 
let options = ['<option value="">都道府県を選択</option>'];


// 