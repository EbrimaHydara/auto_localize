
const url = new URL(window.location.href);
const params = url.searchParams;

// URLに「code」が含まれているかの確認
if( !params.has('code') ) {
    window.location.href = 'https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Finquiry%2Finput.html&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005';
}

/*
// 設問パス用のハッシュを取得してログイン後に引き渡す処理
// 後対応予定

const url = new URL(window.location.href);
const params = url.searchParams;
const hash = window.location.hash;
const desiredPart = hash !== '' && hash.split('?')[0].substring(1);

// URLに「code」が含まれているかの確認
if( !params.has('code') ) {
    window.location.href = `https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Finquiry%2Finput.html${ hash !== '' ? '%23' + desiredPart : '' }&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005`;
}
*/

let isRakutenCasa = false;
let isRakutenTurbo = false;

let hashRatValue = location.hash.replace('#q', 'inquiry_input');
let flgOnLoad = false;
let flgFirstTime = true;

const interviewWrapper = document.getElementsByClassName('inquiry-Layout_Interview');
const interviewFlow0 = document.getElementById('js-interview-0');
const interviewFlow1 = document.getElementById('js-interview-1');
const interviewFlow2 = document.getElementById('js-interview-2');
const interviewFlow3 = document.getElementById('js-interview-3');
const interviewFlow4 = document.getElementById('js-interview-4');
const interviewFlow5 = document.getElementById('js-interview-5');
const interviewFlow2a = document.getElementById('js-interview-2a');
const interviewFlow2b = document.getElementById('js-interview-2b');
const interviewFlow2c = document.getElementById('js-interview-2c');
const interviewFlow2d = document.getElementById('js-interview-2d');
const interviewFlow2e = document.getElementById('js-interview-2e');

let InterviewFlowBackButton0 = document.getElementById('js-back-0');
let InterviewFlowBackButton1 = document.getElementById('js-back-1');
let InterviewFlowBackButton2 = document.getElementById('js-back-2');
let InterviewFlowBackButton3 = document.getElementById('js-back-3');
let InterviewFlowBackButton4 = document.getElementById('js-back-4');

let InterviewFlowBackButton2a = document.getElementById('js-back-2a');
let InterviewFlowBackButton2b = document.getElementById('js-back-2b');
let InterviewFlowBackButton2c = document.getElementById('js-back-2c');
let InterviewFlowBackButton2d = document.getElementById('js-back-2d');
let InterviewFlowBackButton2e = document.getElementById('js-back-2e');

let flgInterviewFlow;
let flgInterviewFlow2a;
let flgInterviewFlow2aExc = false;
let flgInterviewFlow2b;

let currentHash;

const inquiryLayoutInterviewItemWrapper = document.querySelectorAll('.js-inquiry-Layout_Interview-item-wrapper > label');
const inquiryLayoutInterviewItemWrapperFirst = document.querySelectorAll('.js-inquiry-Layout_Interview-item-wrapper > label:first-child');
const inquiryLayoutInterviewItemWrapperLast = document.querySelectorAll('.js-inquiry-Layout_Interview-item-wrapper > label:last-child');

addRatValue(hashRatValue);

InterviewFlowBackButton0.onclick = function() {
    interviewFlow0.style.display = 'block';
    interviewFlow1.style.display = 'none';
    interviewFlow2.style.display = 'none';
    interviewFlow3.style.display = 'none';
    interviewFlow4.style.display = 'none';
    interviewFlow5.style.display = 'none';
    interviewFlow2a.style.display = 'none';
    interviewFlow2b.style.display = 'none';
    interviewFlow2c.style.display = 'none';
    interviewFlow2d.style.display = 'none';
    interviewFlow2e.style.display = 'none';

    ratidBack();

    inquiryLayoutInterviewItemWrapperFirst.forEach(element => {
        element.setAttribute('data-ratid', '');
    })
    inquiryLayoutInterviewItemWrapperLast.forEach(element => {
        element.setAttribute('data-ratid', '');
    })
};

InterviewFlowBackButton1.onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'block';
    interviewFlow2.style.display = 'none';
    interviewFlow3.style.display = 'none';
    interviewFlow4.style.display = 'none';
    interviewFlow5.style.display = 'none';
    interviewFlow2a.style.display = 'none';
    interviewFlow2b.style.display = 'none';
    interviewFlow2c.style.display = 'none';
    interviewFlow2d.style.display = 'none';
    interviewFlow2e.style.display = 'none';

    ratidBack();
};


InterviewFlowBackButton2.onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'none';
    interviewFlow2.style.display = 'block';
    interviewFlow3.style.display = 'none';
    interviewFlow4.style.display = 'none';
    interviewFlow5.style.display = 'none';
    interviewFlow2a.style.display = 'none';
    interviewFlow2b.style.display = 'none';
    interviewFlow2c.style.display = 'none';
    interviewFlow2d.style.display = 'none';
    interviewFlow2e.style.display = 'none';

    ratidBack();
};

InterviewFlowBackButton3.onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'none';
    interviewFlow2.style.display = 'none';
    interviewFlow3.style.display = 'block';
    interviewFlow4.style.display = 'none';
    interviewFlow5.style.display = 'none';
    interviewFlow2a.style.display = 'none';
    interviewFlow2b.style.display = 'none';
    interviewFlow2c.style.display = 'none';
    interviewFlow2d.style.display = 'none';
    interviewFlow2e.style.display = 'none';

    ratidBack();
};

InterviewFlowBackButton4.onclick = function() {
    if (isRakutenCasa) {
        interviewFlow5.style.display = 'none';
        interviewFlow0.style.display = 'block';
        inquiryLayoutInterviewItemWrapperFirst.forEach(element => {
            element.setAttribute('data-ratid', '');
        })
        inquiryLayoutInterviewItemWrapperLast.forEach(element => {
            element.setAttribute('data-ratid', '');
        })
        return isRakutenCasa = false;
    }
    // 戻るボタンの調整
    if (isRakutenTurbo) {
        interviewFlow5.style.display = 'none';
        interviewFlow0.style.display = 'block';
        inquiryLayoutInterviewItemWrapperFirst.forEach(element => {
            element.setAttribute('data-ratid', '');
        })
        inquiryLayoutInterviewItemWrapperLast.forEach(element => {
            element.setAttribute('data-ratid', '');
        })
        return isRakutenTurbo = false;
    }
    switch ( flgInterviewFlow ){
        case '2':
            interviewFlow0.style.display = 'none';
            interviewFlow1.style.display = 'none';
            interviewFlow2.style.display = 'block';
            interviewFlow3.style.display = 'none';
            interviewFlow4.style.display = 'none';
            interviewFlow5.style.display = 'none';
            interviewFlow2a.style.display = 'none';
            interviewFlow2b.style.display = 'none';
            interviewFlow2c.style.display = 'none';
            interviewFlow2d.style.display = 'none';
            interviewFlow2e.style.display = 'none';

            ratidBack();
            break;
        case '3':
            interviewFlow0.style.display = 'none';
            interviewFlow1.style.display = 'none';
            interviewFlow2.style.display = 'none';
            interviewFlow3.style.display = 'block';
            interviewFlow4.style.display = 'none';
            interviewFlow5.style.display = 'none';
            interviewFlow2a.style.display = 'none';
            interviewFlow2b.style.display = 'none';
            interviewFlow2c.style.display = 'none';
            interviewFlow2d.style.display = 'none';
            interviewFlow2e.style.display = 'none';

            ratidBack();
            break;
        default:
            interviewFlow0.style.display = 'none';
            interviewFlow1.style.display = 'none';
            interviewFlow2.style.display = 'none';
            interviewFlow3.style.display = 'none';
            interviewFlow4.style.display = 'block';
            interviewFlow5.style.display = 'none';
            interviewFlow2a.style.display = 'none';
            interviewFlow2b.style.display = 'none';
            interviewFlow2c.style.display = 'none';
            interviewFlow2d.style.display = 'none';
            interviewFlow2e.style.display = 'none';

            ratidBack();
      }
};

InterviewFlowBackButton2a.onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'none';
    interviewFlow2.style.display = 'none';
    interviewFlow3.style.display = 'none';
    interviewFlow4.style.display = 'none';
    interviewFlow5.style.display = 'block';
    interviewFlow2a.style.display = 'none';
    interviewFlow2b.style.display = 'none';
    interviewFlow2c.style.display = 'none';
    interviewFlow2d.style.display = 'none';
    interviewFlow2e.style.display = 'none';
    switch ( flgInterviewFlow2a ){
        case '2':
            flgInterviewFlow = '2';
            break;
        case '4':
            if( !flgInterviewFlow2aExc ) {
                flgInterviewFlow = '4';
            }
            break;
    }
    flgInterviewFlow2aExc = false;
    interviewWrapper[0].setAttribute('aria-hidden', false);
    ratidBack();
};

InterviewFlowBackButton2b.onclick = function() {
    if (flgInterviewFlow2b === '4') {
        interviewFlow0.style.display = 'none';
        interviewFlow1.style.display = 'none';
        interviewFlow2.style.display = 'none';
        interviewFlow3.style.display = 'none';
        interviewFlow4.style.display = 'block';
        interviewFlow5.style.display = 'none';
        interviewFlow2a.style.display = 'none';
        interviewFlow2b.style.display = 'none';
        interviewFlow2c.style.display = 'none';
        interviewFlow2d.style.display = 'none';
        interviewFlow2e.style.display = 'none';
        interviewWrapper[0].setAttribute('aria-hidden', false);
        ratidBack();
    }
};

InterviewFlowBackButton2c.onclick = function() {
    interviewFlow1.style.display = 'block';
    interviewFlow2c.style.display = 'none';
    interviewWrapper[0].setAttribute('aria-hidden', false);

    ratidBack();
};

InterviewFlowBackButton2d.onclick = function() {
    interviewFlow5.style.display = 'block';
    interviewFlow2d.style.display = 'none';
    interviewWrapper[0].setAttribute('aria-hidden', false);

    ratidBack();
};

InterviewFlowBackButton2e.onclick = function() {
    interviewFlow5.style.display = 'block';
    interviewFlow2e.style.display = 'none';
    interviewWrapper[0].setAttribute('aria-hidden', false);

    ratidBack();
};

document.getElementById('js-interview-btn-android').onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'block';
    if(flgOnLoad) {
        inquiryLayoutInterviewItemWrapper.forEach(element => {
            element.setAttribute('data-ratid', 'inquiry_input_1');
            location.hash = "q_1";
        })
    }
};

document.getElementById('js-interview-btn-iPhone').onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'block';
    if(flgOnLoad) {
        inquiryLayoutInterviewItemWrapper.forEach(element => {
            element.setAttribute('data-ratid', 'inquiry_input_2');
            location.hash = "q_2";
        })
    }
};

document.getElementById('js-interview-btn-rakutenWiFiPocket').onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'block';
    if(flgOnLoad) {
        inquiryLayoutInterviewItemWrapper.forEach(element => {
            element.setAttribute('data-ratid', 'inquiry_input_3');
            location.hash = "q_3";
        })
    }
};

document.getElementById('js-interview-btn-rakutenCasa').onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow5.style.display = 'block';
    isRakutenCasa = true;
    if(flgOnLoad) {
        inquiryLayoutInterviewItemWrapper.forEach(element => {
            element.setAttribute('data-ratid', 'inquiry_input_4');
            location.hash = "q_4";
        })
    }
};

document.getElementById('js-interview-btn-rakutenTurbo').onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow5.style.display = 'block';
    isRakutenTurbo = true;
    if(flgOnLoad) {
        inquiryLayoutInterviewItemWrapper.forEach(element => {
            element.setAttribute('data-ratid', 'inquiry_input_5');
            location.hash = "q_5";
        })
    }

};

document.getElementById('js-interview-btn-another').onclick = function() {
    interviewFlow0.style.display = 'none';
    interviewFlow1.style.display = 'block';
    if(flgOnLoad) {
        inquiryLayoutInterviewItemWrapper.forEach(element => {
            element.setAttribute('data-ratid', 'inquiry_input_9');
            location.hash = "q_9";
        })
    }
};

document.getElementById('js-interview-btn-1').onclick = function() {
    interviewFlow1.style.display = 'none';
    interviewFlow2.style.display = 'block';
};

document.getElementById('js-interview-btn-2').onclick = function() {
    interviewFlow1.style.display = 'none';
    interviewFlow2c.style.display = 'block';
    interviewWrapper[0].setAttribute('aria-hidden', true);
};

document.getElementById('js-interview-btn-3').onclick = function() {
    interviewFlow2.style.display = 'none';
    interviewFlow3.style.display = 'block';
    flgInterviewFlow = '2';
};

document.getElementById('js-interview-btn-4').onclick = function() {
    interviewFlow2.style.display = 'none';
    interviewFlow5.style.display = 'block';
    flgInterviewFlow = '2';
    flgInterviewFlow2aExc = true;
};

document.getElementById('js-interview-btn-5').onclick = function() {
    interviewFlow3.style.display = 'none';
    interviewFlow4.style.display = 'block';
    flgInterviewFlow = '4';
};

document.getElementById('js-interview-btn-6').onclick = function() {
    interviewFlow3.style.display = 'none';
    interviewFlow5.style.display = 'block';
    flgInterviewFlow = '3';
};

document.getElementById('js-interview-btn-7').onclick = function() {
    interviewFlow4.style.display = 'none';
    interviewFlow2b.style.display = 'block';
    interviewWrapper[0].setAttribute('aria-hidden', true);
    flgInterviewFlow2b = '4';
};

document.getElementById('js-interview-btn-8').onclick = function() {
    interviewFlow4.style.display = 'none';
    interviewFlow5.style.display = 'block';
};

document.getElementById('js-interview-btn-9').onclick = function() {
    interviewFlow5.style.display = 'none';
    if(!isRakutenCasa&&!isRakutenTurbo) {
        interviewFlow2a.style.display = 'block';
        setRatBtnNextStep1('js-next-step');
        setRatBtnNextStep2('js-inquiry_Confirm');
        setRatBtnNextStep3('js-inquiry_Submit');
    } else if(isRakutenCasa) {
        interviewFlow2d.style.display = 'block';
        setRatBtnNextStep1('js-inquiry_Confirm');
        setRatBtnNextStep2('js-inquiry_Submit');
    } else if(isRakutenTurbo) {
        interviewFlow2e.style.display = 'block';
    }
    interviewWrapper[0].setAttribute('aria-hidden', true);
    flgInterviewFlow2a = '5';
};

document.getElementById('js-interview-btn-10').onclick = function() {
    interviewFlow5.style.display = 'none';

    if(!isRakutenCasa&&!isRakutenTurbo) {
        interviewFlow2a.style.display = 'block';
        setRatBtnNextStep1('js-next-step');
        setRatBtnNextStep2('js-inquiry_Confirm');
        setRatBtnNextStep3('js-inquiry_Submit');
    } else if(isRakutenCasa) {
        interviewFlow2d.style.display = 'block';
        setRatBtnNextStep1('js-inquiry_Confirm');
        setRatBtnNextStep2('js-inquiry_Submit');
    } else if(isRakutenTurbo) {
        interviewFlow2e.style.display = 'block';
        // setRatBtnNextStep1('js-next-step-2e');
    }

    interviewWrapper[0].setAttribute('aria-hidden', true);
};


const nextStep = document.getElementById('js-next-step');
// const nextStep2e = document.getElementById('js-next-step-2e');
const inquiryFormTop = document.getElementById('js-inquiry_Form-top');
const inquiryOtherSection = document.getElementById('js-inquiry_Other-section');
const backFormWrapper = document.getElementById('js-back-form-wrapper');
const backForm = document.getElementById('js-back-form');


nextStep.onclick = function() {
    const tarrr = document.getElementById('00N2u000000PdLm');
    interviewFlow2a.style.display = 'none';
    inquiryFormTop.style.display = 'block';
    backFormWrapper.style.display = 'block';
    $('body,html').animate({scrollTop: $('#js-back-form').offset().top}, 400, 'swing');
    const value1 = document.querySelector('input[name="cellphonemodels"]:checked') ? document.querySelector('input[name="cellphonemodels"]:checked').value : '';
    const value2 = document.querySelector('input[name="rakutenoriginal"]:checked') ? document.querySelector('input[name="rakutenoriginal"]:checked').value : '';
    const value3 = document.querySelector('input[name="00N2u000000QAHn"]:checked') ? document.querySelector('input[name="00N2u000000QAHn"]:checked').value : '';
    const value4 = document.querySelector('input[name="00N2u000000QAHs"]:checked') ? document.querySelector('input[name="00N2u000000QAHs"]:checked').value : '';
    const value5 = document.querySelector('input[name="00N2u000000QAHx"]:checked') ? document.querySelector('input[name="00N2u000000QAHx"]:checked').value : '';
    const value6 = document.querySelector('input[name="00N2u000000QAI2"]:checked') ? document.querySelector('input[name="00N2u000000QAI2"]:checked').value : '';

    const tar1 = document.getElementById('disp-questionnaire-1');
    const tar2 = document.getElementById('disp-questionnaire-2');
    const tar3 = document.getElementById('disp-questionnaire-3');
    const tar4 = document.getElementById('disp-questionnaire-4');
    const tar5 = document.getElementById('disp-questionnaire-5');
    const tar6 = document.getElementById('disp-questionnaire-6');

    const sec1 = document.getElementById('disp-questionnaire-1-sec');
    const sec2 = document.getElementById('disp-questionnaire-2-sec');
    const sec3 = document.getElementById('disp-questionnaire-3-sec');
    const sec4 = document.getElementById('disp-questionnaire-4-sec');
    const sec5 = document.getElementById('disp-questionnaire-5-sec');
    const sec6 = document.getElementById('disp-questionnaire-6-sec');

    if (tar1 && value1) {
        tar1.textContent = value1;
        sec1.setAttribute('aria-hidden', false);
    } else {
        sec1.setAttribute('aria-hidden', true);
    }
    if (tar2 && value2) {
        tar2.textContent = value2;
        sec2.setAttribute('aria-hidden', false);
    } else {
        sec2.setAttribute('aria-hidden', true);
    }
    if (tar3 && value3) {
        tar3.textContent = value3;
        sec3.setAttribute('aria-hidden', false);
    } else {
        sec3.setAttribute('aria-hidden', true);
    }
    if (tar4 && value4) {
        tar4.textContent = value4;
        sec4.setAttribute('aria-hidden', false);
    } else {
        sec4.setAttribute('aria-hidden', true);
    }
    if (tar5 && value5) {
        tar5.textContent = value5;
        sec5.setAttribute('aria-hidden', false);
    } else {
        sec5.setAttribute('aria-hidden', true);
    }
    if (tar6 && value6) {
        tar6.textContent = value6;
        sec6.setAttribute('aria-hidden', false);
    } else {
        sec6.setAttribute('aria-hidden', true);
    }

    tarrr.value = value1;
};


backForm.onclick = function() {
    interviewFlow2a.style.display = 'block';
    inquiryFormTop.style.display = 'none';
    inquiryOtherSection.setAttribute('aria-hidden', true);
    backFormWrapper.style.display = 'none';
};

const hashValue = location.hash;

switch (true){

    case /#q_[123]/.test(hashValue):
        switch (true){
            case /#q_1/.test(hashValue):
                document.getElementById('js-interview-btn-android').checked = true;
                document.getElementById('js-interview-btn-android').click();
                break;
            case /#q_2/.test(hashValue):
                document.getElementById('js-interview-btn-iPhone').checked = true;
                document.getElementById('js-interview-btn-iPhone').click();
                break;
            case /#q_3/.test(hashValue):
                document.getElementById('js-interview-btn-rakutenWiFiPocket').checked = true;
                document.getElementById('js-interview-btn-rakutenWiFiPocket').click();
                break;
        }
        switch(true){
            case /#q_.*_1/.test(hashValue):
                document.getElementById('js-interview-btn-1').checked = true;
                document.getElementById('js-interview-btn-1').click();
                break;
            case /#q_.*_2/.test(hashValue):
                document.getElementById('js-interview-btn-2').checked = true;
                document.getElementById('js-interview-btn-2').click();
                break;
        }
        switch(true){
            case /#q_.*_1_1/.test(hashValue):
                document.getElementById('js-interview-btn-3').checked = true;
                document.getElementById('js-interview-btn-3').click();
                break;
            case /#q_.*_1_2/.test(hashValue):
                document.getElementById('js-interview-btn-4').checked = true;
                document.getElementById('js-interview-btn-4').click();
                break;
        }
        switch(true){
            case /#q_.*_1_2_1/.test(hashValue):
                document.getElementById('js-interview-btn-9').checked = true;
                document.getElementById('js-interview-btn-9').click();
                break;
            case /#q_.*_1_2_2/.test(hashValue):
                document.getElementById('js-interview-btn-10').checked = true;
                document.getElementById('js-interview-btn-10').click();
                break;
        }
        switch(true){
            case /#q_.*_1_1_1/.test(hashValue):
                document.getElementById('js-interview-btn-5').checked = true;
                document.getElementById('js-interview-btn-5').click();
                break;
            case /#q_.*_1_1_2/.test(hashValue):
                document.getElementById('js-interview-btn-6').checked = true;
                document.getElementById('js-interview-btn-6').click();
                break;
        }
        switch(true){
            case /#q_.*_1_1_2_1/.test(hashValue):
                document.getElementById('js-interview-btn-9').checked = true;
                document.getElementById('js-interview-btn-9').click();
                break;
            case /#q_.*_1_1_2_2/.test(hashValue):
                document.getElementById('js-interview-btn-10').checked = true;
                document.getElementById('js-interview-btn-10').click();
                break;
        }
        switch(true){
            case /#q_.*_1_1_1_1/.test(hashValue):
                document.getElementById('js-interview-btn-7').checked = true;
                document.getElementById('js-interview-btn-7').click();
                break;
            case /#q_.*_1_1_1_2/.test(hashValue):
                document.getElementById('js-interview-btn-8').checked = true;
                document.getElementById('js-interview-btn-8').click();
                break;
        }
        switch(true){
            case /#q_.*_1_1_1_2_1/.test(hashValue):
                document.getElementById('js-interview-btn-9').checked = true;
                document.getElementById('js-interview-btn-9').click();
                break;
            case /#q_.*_1_1_1_2_2/.test(hashValue):
                document.getElementById('js-interview-btn-10').checked = true;
                document.getElementById('js-interview-btn-10').click();
                break;
        }
        break;

    case /#q_4/.test(hashValue):
        document.getElementById('js-interview-btn-rakutenCasa').checked = true;
        document.getElementById('js-interview-btn-rakutenCasa').click();
        switch (hashValue){
            case '#q_4_1':
                document.getElementById('js-interview-btn-9').checked = true;
                document.getElementById('js-interview-btn-9').click();
                break;
            case '#q_4_2':
                document.getElementById('js-interview-btn-10').checked = true;
                document.getElementById('js-interview-btn-10').click();
                break;
        }
        break;

    case /#q_5/.test(hashValue):
        document.getElementById('js-interview-btn-rakutenTurbo').checked = true;
        document.getElementById('js-interview-btn-rakutenTurbo').click();
        switch (hashValue){
            case '#q_5_1':
                document.getElementById('js-interview-btn-9').checked = true;
                document.getElementById('js-interview-btn-9').click();
                break;
            case '#q_5_2':
                document.getElementById('js-interview-btn-10').checked = true;
                document.getElementById('js-interview-btn-10').click();
                break;
        }
        break;

        case /#q_9/.test(hashValue):
            document.getElementById('js-interview-btn-another').checked = true;
            document.getElementById('js-interview-btn-another').click();
            switch(true){
                case /#q_.*_1/.test(hashValue):
                    document.getElementById('js-interview-btn-1').checked = true;
                    document.getElementById('js-interview-btn-1').click();
                    break;
                case /#q_.*_2/.test(hashValue):
                    document.getElementById('js-interview-btn-2').checked = true;
                    document.getElementById('js-interview-btn-2').click();
                    break;
            }
            switch(true){
                case /#q_.*_1_1/.test(hashValue):
                    document.getElementById('js-interview-btn-3').checked = true;
                    document.getElementById('js-interview-btn-3').click();
                    break;
                case /#q_.*_1_2/.test(hashValue):
                    document.getElementById('js-interview-btn-4').checked = true;
                    document.getElementById('js-interview-btn-4').click();
                    break;
            }
            switch(true){
                case /#q_.*_1_2_1/.test(hashValue):
                    document.getElementById('js-interview-btn-9').checked = true;
                    document.getElementById('js-interview-btn-9').click();
                    break;
                case /#q_.*_1_2_2/.test(hashValue):
                    document.getElementById('js-interview-btn-10').checked = true;
                    document.getElementById('js-interview-btn-10').click();
                    break;
            }
            switch(true){
                case /#q_.*_1_1_1/.test(hashValue):
                    document.getElementById('js-interview-btn-5').checked = true;
                    document.getElementById('js-interview-btn-5').click();
                    break;
                case /#q_.*_1_1_2/.test(hashValue):
                    document.getElementById('js-interview-btn-6').checked = true;
                    document.getElementById('js-interview-btn-6').click();
                    break;
            }
            switch(true){
                case /#q_.*_1_1_2_1/.test(hashValue):
                    document.getElementById('js-interview-btn-9').checked = true;
                    document.getElementById('js-interview-btn-9').click();
                    break;
                case /#q_.*_1_1_2_2/.test(hashValue):
                    document.getElementById('js-interview-btn-10').checked = true;
                    document.getElementById('js-interview-btn-10').click();
                    break;
            }
            switch(true){
                case /#q_.*_1_1_1_1/.test(hashValue):
                    document.getElementById('js-interview-btn-7').checked = true;
                    document.getElementById('js-interview-btn-7').click();
                    break;
                case /#q_.*_1_1_1_2/.test(hashValue):
                    document.getElementById('js-interview-btn-8').checked = true;
                    document.getElementById('js-interview-btn-8').click();
                    break;
            }
            switch(true){
                case /#q_.*_1_1_1_2_1/.test(hashValue):
                    document.getElementById('js-interview-btn-9').checked = true;
                    document.getElementById('js-interview-btn-9').click();
                    break;
                case /#q_.*_1_1_1_2_2/.test(hashValue):
                    document.getElementById('js-interview-btn-10').checked = true;
                    document.getElementById('js-interview-btn-10').click();
                    break;
            }
            break;
}



document.querySelectorAll('.c-Form_Radioblock').forEach(element => {
    element.onclick = function() {
        addRatValue(this.getAttribute('data-ratid'));
    }
});

function addRatValue(value) {
    if(flgFirstTime) {
        inquiryLayoutInterviewItemWrapperFirst.forEach(element => {
            element.setAttribute('data-ratid', value + '_1');
        })
        inquiryLayoutInterviewItemWrapperLast.forEach(element => {
            element.setAttribute('data-ratid', value + '_2');
        })
        location.hash = inquiryLayoutInterviewItemWrapperFirst[0].getAttribute('data-ratid').replace('inquiry_input', 'q').slice(0, -2);
        currentHash = location.hash;
        flgFirstTime = false;
    } else {
        flgFirstTime = true;
    }
}

function ratidBack() {
    inquiryLayoutInterviewItemWrapperFirst.forEach(element => {
        element.setAttribute('data-ratid', element.getAttribute('data-ratid').slice(0, -4)+ '_1');
        hashRatValue = element.getAttribute('data-ratid').slice(0, -4)+ '_1';
    })
    inquiryLayoutInterviewItemWrapperLast.forEach(element => {
        element.setAttribute('data-ratid', element.getAttribute('data-ratid').slice(0, -4) + '_2');
        hashRatValue = element.getAttribute('data-ratid').slice(0, -4)+ '_2';
    })
    currentHash = inquiryLayoutInterviewItemWrapperFirst[0].getAttribute('data-ratid').slice(0, -2).replace('inquiry_input', 'q');
    (currentHash === 'q') ? location.hash = 'q_top' : location.hash = currentHash;
}

function setRatBtnNextStep1(elm) {
    setTimeout(
        function() {
            document.getElementById(elm).setAttribute('data-ratid', inquiryLayoutInterviewItemWrapperFirst[0].getAttribute('data-ratid').slice(0, -2) + '_next');
        }, 1000
    )
}
function setRatBtnNextStep2(elm) {
    setTimeout(
        function() {
            document.getElementById(elm).setAttribute('data-ratid', inquiryLayoutInterviewItemWrapperFirst[0].getAttribute('data-ratid').slice(0, -2) + '_next_confirm');
        }, 1000
    )
}
function setRatBtnNextStep3(elm) {
    setTimeout(
        function() {
            document.getElementById(elm).setAttribute('data-ratid', inquiryLayoutInterviewItemWrapperFirst[0].getAttribute('data-ratid').slice(0, -2) + '_next_confirm_send');
        }, 1000
    )
}

flgOnLoad = true;
