import openingSteps from './opening-steps.js';

const radioBtns = document.getElementsByClassName('js-btns-control');
const radioBtnsContentType = document.getElementsByName("content-type");
const radioBtnsPurchase = document.getElementsByName("purchase");
const radioBtnsProduct = document.getElementsByName("product");
const radioBtnsConfirm = document.getElementsByName("confirm");

const choices2 = document.getElementById('js-choices-2');
const choices3 = document.getElementById('js-choices-3');
const choices4 = document.getElementById('js-choices-4');
const choices5 = document.getElementById('js-choices-5');

const btnsControlpurchased1 = document.getElementById('js-btns-control-purchased-1');
const btnsControlpurchased2 = document.getElementById('js-btns-control-purchased-2');
const btnsControlpurchased3 = document.getElementById('js-btns-control-purchased-3');
const btnsControlpurchased4 = document.getElementById('js-btns-control-purchased-4');

const allCards = document.getElementsByClassName('js-card-control');

const stepRenderingArea = document.getElementById('js-rendering-area');

const openProcedure = document.getElementById('js-open-procedure');

let conditionsSimTypeApplied = { value: '' };
let conditionsTypeOfApplicationContent = { value: '' };
let conditionsPurchaseOfSetOfProducts = { value: '' };
let conditionsProductsPurchased = { value: '' };
let conditionsHowToConfirmYourIdentityWhenApplying = { value: '' };

let flgConditionMatching = false;

const dispReslt = document.getElementById('js-disp-result');

const faqReviewBtnPositive = document.getElementById('faq-Review_Btn-positive');
const faqReviewBtnMegative = document.getElementById('faq-Review_Btn-negative');

const btn1ESim = document.getElementById('js-btn-1_e-sim');

const updateRatId = (num) => {
    faqReviewBtnPositive.setAttribute('data-ratid', `guide_opening-Review_Btn-positive-flow_${num}`);
    faqReviewBtnMegative.setAttribute('data-ratid', `guide_opening-Review_Btn-negative-flow_${num}`);
}

const resetConditions = (...conditions) => {
    conditions.forEach(condition => {
        condition[0].value = '';
        condition[1].forEach(element => {
            element.checked = false;
        });
    });
}

const smoothScroll = el => {
    const rectTop = el.getBoundingClientRect().top;
    const positionY = window.pageYOffset;
    const target = rectTop + positionY;
    window.scrollTo({
        top: target,
        behavior: "smooth",
    });
}

const scrollToNext = (target) => {
    target.setAttribute('aria-hidden', false);
    smoothScroll(target);
}

radioBtns.forEach(element => {
    element.onclick = function() {
        dispReslt.setAttribute('aria-hidden', true);

        if( element.value == '1_e-sim' || element.value == '1_sim-card' ) {
            conditionsSimTypeApplied.value = element.value;

            resetConditions(
                [conditionsTypeOfApplicationContent, radioBtnsContentType],
                [conditionsPurchaseOfSetOfProducts, radioBtnsPurchase],
                [conditionsProductsPurchased, radioBtnsProduct],
                [conditionsHowToConfirmYourIdentityWhenApplying, radioBtnsConfirm]
            )

            displayControlProcessing('displayControl');

            if( !flgConditionMatching ) {
                scrollToNext(choices2);
            } else {
                openProcedure.setAttribute('aria-disabled', false);
            }

            choices3.setAttribute('aria-hidden', true);
            choices4.setAttribute('aria-hidden', true);
            choices5.setAttribute('aria-hidden', true);

        }
        if( element.value == '2_other' || element.value == '2_new' || element.value == '2_existing' ) {
            conditionsTypeOfApplicationContent.value = element.value;

            resetConditions(
                [conditionsPurchaseOfSetOfProducts, radioBtnsPurchase],
                [conditionsProductsPurchased, radioBtnsProduct],
                [conditionsHowToConfirmYourIdentityWhenApplying, radioBtnsConfirm]
            )

            displayControlProcessing('displayControl');

            if( !flgConditionMatching ) {
                if( conditionsTypeOfApplicationContent.value !== '2_existing' ) {
                    scrollToNext(choices3);
                } else {
                    choices3.setAttribute('aria-hidden', true);
                    openProcedure.setAttribute('aria-disabled', false);
                }
            } else {
                openProcedure.setAttribute('aria-disabled', false);
            }

            choices4.setAttribute('aria-hidden', true);
            choices5.setAttribute('aria-hidden', true);
        }
        if( element.value == '3_purchasing' || element.value == '3_not-purchased' ) {
            conditionsPurchaseOfSetOfProducts.value = element.value;

            resetConditions(
                [conditionsProductsPurchased, radioBtnsProduct],
                [conditionsHowToConfirmYourIdentityWhenApplying, radioBtnsConfirm]
            )

            displayControlProcessing('displayControl');

            btnsControlpurchased1.setAttribute('aria-hidden', true);
            btnsControlpurchased2.setAttribute('aria-hidden', true);
            btnsControlpurchased3.setAttribute('aria-hidden', true);
            btnsControlpurchased4.setAttribute('aria-hidden', true);

            if( element.value == '3_purchasing' ) {
                btnsControlpurchased1.setAttribute('aria-hidden', false);
                btnsControlpurchased2.setAttribute('aria-hidden', false);
                btnsControlpurchased4.setAttribute('aria-hidden', false);
            } else if( element.value == '3_not-purchased' ) {
                btnsControlpurchased3.setAttribute('aria-hidden', false);
                btnsControlpurchased4.setAttribute('aria-hidden', false);
            }

            if( !flgConditionMatching ) {
                scrollToNext(choices4);
            } else {
                openProcedure.setAttribute('aria-disabled', false);
            }

            choices5.setAttribute('aria-hidden', true);
        }
        if( element.value == '4_iphone-14-or-later' || element.value == '4_other-iphones' || element.value == '4_iphones' || element.value == '4_android' ) {
            conditionsProductsPurchased.value = element.value;
            resetConditions(
                [conditionsHowToConfirmYourIdentityWhenApplying, radioBtnsConfirm]
            )
            displayControlProcessing('displayControl');

            if( !flgConditionMatching && btn1ESim.checked ) {
                scrollToNext(choices5);
            } else {
                openProcedure.setAttribute('aria-disabled', false);
            }
        }
        if( element.value == '5_ekyc' || element.value == '5_omit' || element.value == '5_submitted' || element.value == '5_other' ) {
            conditionsHowToConfirmYourIdentityWhenApplying.value = element.value;
            displayControlProcessing('displayControl');
            if( flgConditionMatching ) {
                openProcedure.setAttribute('aria-disabled', false);
            }
        }
    }
});

const stepRender = (step) => {
    const newContent = document.createElement('li');
    newContent.innerHTML = step;
    stepRenderingArea.appendChild(newContent);
}

openProcedure.onclick = function() {
    displayControlProcessing('renderTheResult');
    smoothScroll(dispReslt);
}

const dispCards = (...cards) => {
    cards.forEach(element => {
        document.getElementById(`js-card-${element}`).setAttribute('aria-hidden', false);
    });
}

const deleteCards = () => {
    allCards.forEach(element => {
        element.setAttribute('aria-hidden', true)
    });
}

// パラメータで出しわけ 例) guide/opening/?select=1_e-sim--2_new--3_purchasing--4_iphone-14-or-later--5_ekyc&l-id=xxx
const currentURL = window.location.href;
const queryString = currentURL.split('?')[1];

window.addEventListener('load', function() {
    if ( queryString ) {
        if (currentURL.includes("select")) {
            const params = queryString.split('&');
            const selectsArray = params.filter(function(param) {
                return param.startsWith('select=');
            });
            const paramValues = selectsArray[0].replace('select=', '').split('--');
            radioBtns.forEach(element => {
                if (paramValues.includes(element.value)) {
                    element.click();
                }
            });
            openProcedure.click();
        }
    }
})

// 以下case毎の判定と出しわけ
const displayControlProcessing = (purposeOfProcess) => {

    switch (true) {
        // case1
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepJ(4));
                stepRender(openingSteps.stepK(5));
                stepRender(openingSteps.stepN(6));
                stepRender(openingSteps.stepO(7));
                stepRender(openingSteps.stepP(8));
            }
            flgConditionMatching = true;
            updateRatId('01');
            break;

        // case2
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepJ(4));
                stepRender(openingSteps.stepL(5));
                stepRender(openingSteps.stepN(6));
                stepRender(openingSteps.stepO(7));
                stepRender(openingSteps.stepP(8));
            }
            flgConditionMatching = true;
            updateRatId('02');
            break;

        // case3
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepG(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepM(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('03');
            break;

        // case4
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepK(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('04');
            break;

        // case5
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('05');
            break;

        // case6
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepJ(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('06');
            break;

        // case7
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepK(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('07');
            break;

        // case8
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('08');
            break;

        // case9
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepJ(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('09');
            break;

        // case10
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepK(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('10');
            break;

        // case11
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('11');
            break;

        // case12
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepJ(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('12');
            break;

        // case13
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepK(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('13');
            break;

        // case14
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('14');
            break;

        // case15
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepG(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('15');
            break;


        // case16
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepK(2));
                stepRender(openingSteps.stepN(3));
                stepRender(openingSteps.stepO(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('16');
            break;

        // case17
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepL(3));
                stepRender(openingSteps.stepN(4));
                stepRender(openingSteps.stepO(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('17');
            break;

        // case18
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepM(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('18');
            break;

        // case19
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepK(2));
                stepRender(openingSteps.stepN(3));
                stepRender(openingSteps.stepO(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('19');
            break;

        // case20
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepL(3));
                stepRender(openingSteps.stepN(4));
                stepRender(openingSteps.stepO(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('20');
            break;

        // case21
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepM(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('21');
            break;

        // case22
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepK(2));
                stepRender(openingSteps.stepN(3));
                stepRender(openingSteps.stepO(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('22');
            break;

        // case23
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepL(3));
                stepRender(openingSteps.stepN(4));
                stepRender(openingSteps.stepO(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('23');
            break;

        // case24
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepA(1));
                stepRender(openingSteps.stepM(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('24');
            break;

        // case25
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepJ(4));
                stepRender(openingSteps.stepL(5));
                stepRender(openingSteps.stepN(6));
                stepRender(openingSteps.stepO(7));
                stepRender(openingSteps.stepP(8));
            }
            flgConditionMatching = true;
            updateRatId('25');
            break;

        // case26
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepJ(4));
                stepRender(openingSteps.stepM(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('26');
            break;

        // case27
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('27');
            break;

        // case28
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepM(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('28');
            break;

        // case29
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('29');
            break;

        // case30
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepM(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('30');
            break;

        // case31
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('31');
            break;

        // case32
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepJ(3));
                stepRender(openingSteps.stepM(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('32');
            break;

        // case33
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepL(4));
                stepRender(openingSteps.stepN(5));
                stepRender(openingSteps.stepO(6));
                stepRender(openingSteps.stepP(7));
            }
            flgConditionMatching = true;
            updateRatId('33');
            break;

        // case34
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_other':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4, 5);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepG(3));
                stepRender(openingSteps.stepM(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('34');
            break;

        // case35
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepL(3));
                stepRender(openingSteps.stepN(4));
                stepRender(openingSteps.stepO(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('35');
            break;

        // case36
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_ekyc':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('36');
            break;

        // case37
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepL(3));
                stepRender(openingSteps.stepN(4));
                stepRender(openingSteps.stepO(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('37');
            break;

        // case38
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_omit':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('38');
            break;

        // case39
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepC(2));
                stepRender(openingSteps.stepL(3));
                stepRender(openingSteps.stepN(4));
                stepRender(openingSteps.stepO(5));
                stepRender(openingSteps.stepP(6));
            }
            flgConditionMatching = true;
            updateRatId('39');
            break;

        // case40
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '5_submitted':
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepD(2));
                stepRender(openingSteps.stepM(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('40');
            break;

        // case41
        case conditionsSimTypeApplied.value === '1_e-sim' && conditionsTypeOfApplicationContent.value === '2_existing' && conditionsPurchaseOfSetOfProducts.value === '' && conditionsProductsPurchased.value === '' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices3.setAttribute('aria-hidden', true);
                choices4.setAttribute('aria-hidden', true);
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepQ(1));
                stepRender(openingSteps.stepM(2));
                stepRender(openingSteps.stepF(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('41');
            break;

        // case42
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 2, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepH(1));
                stepRender(openingSteps.stepE(2));
                stepRender(openingSteps.stepA(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('42');
            break;

        // case43
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 2, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepH(1));
                stepRender(openingSteps.stepE(2));
                stepRender(openingSteps.stepA(3));
                stepRender(openingSteps.stepO(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('43');
            break;

        // case44
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 2, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepI(2));
                stepRender(openingSteps.stepE(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('44');
            break;

        // case45
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 2, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepI(2));
                stepRender(openingSteps.stepE(3));
                stepRender(openingSteps.stepO(4));
                stepRender(openingSteps.stepP(5));
            }
            flgConditionMatching = true;
            updateRatId('45');
            break;

        // case46
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepE(1));
                stepRender(openingSteps.stepA(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('46');
            break;

        // case47
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_iphone-14-or-later' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepE(1));
                stepRender(openingSteps.stepA(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('47');
            break;

        // case48
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_android' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepE(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('48');
            break;

        // case49
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_not-purchased' && conditionsProductsPurchased.value === '4_iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepB(1));
                stepRender(openingSteps.stepE(2));
                stepRender(openingSteps.stepO(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('49');
            break;

        // case50
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_existing' && conditionsPurchaseOfSetOfProducts.value === '' && conditionsProductsPurchased.value === '' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices3.setAttribute('aria-hidden', true);
                choices4.setAttribute('aria-hidden', true);
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 3, 4);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepE(1));
                stepRender(openingSteps.stepR(2));
                stepRender(openingSteps.stepF(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('50');
            break;

        // case51
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_other' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 2, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepH(1));
                stepRender(openingSteps.stepE(2));
                stepRender(openingSteps.stepA(3));
                stepRender(openingSteps.stepP(4));
            }
            flgConditionMatching = true;
            updateRatId('51');
            break;

        // case52
        case conditionsSimTypeApplied.value === '1_sim-card' && conditionsTypeOfApplicationContent.value === '2_new' && conditionsPurchaseOfSetOfProducts.value === '3_purchasing' && conditionsProductsPurchased.value === '4_other-iphones' && conditionsHowToConfirmYourIdentityWhenApplying.value === '':
            if( purposeOfProcess == 'displayControl' ) {
                choices5.setAttribute('aria-hidden', true);
            }
            if( purposeOfProcess == 'renderTheResult' ) {
                deleteCards();
                dispCards(1, 3);
                dispReslt.setAttribute('aria-hidden', false);
                stepRenderingArea.innerHTML = '';
                stepRender(openingSteps.stepE(1));
                stepRender(openingSteps.stepA(2));
                stepRender(openingSteps.stepP(3));
            }
            flgConditionMatching = true;
            updateRatId('52');
            break;

        default:
            flgConditionMatching = false;
            openProcedure.setAttribute('aria-disabled', true);
    }
};


// テスト用 ↓↓ パラメータに?dispAllをつけたら全ての出しわけパーツ表示
if (currentURL.includes("dispAll")) {
    setTimeout( function() {
        stepRender(openingSteps.stepA('A'));
        stepRender(openingSteps.stepB('B'));
        stepRender(openingSteps.stepC('C'));
        stepRender(openingSteps.stepD('D'));
        stepRender(openingSteps.stepE('E'));
        stepRender(openingSteps.stepF('F'));
        stepRender(openingSteps.stepG('G'));
        stepRender(openingSteps.stepH('H'));
        stepRender(openingSteps.stepI('I'));
        stepRender(openingSteps.stepJ('J'));
        stepRender(openingSteps.stepK('K'));
        stepRender(openingSteps.stepL('L'));
        stepRender(openingSteps.stepM('M'));
        stepRender(openingSteps.stepN('N'));
        stepRender(openingSteps.stepO('O'));
        stepRender(openingSteps.stepP('P'));
        stepRender(openingSteps.stepQ('Q'));
        stepRender(openingSteps.stepR('R'));
        dispReslt.setAttribute('aria-hidden', false);
        dispCards(1,2, 3, 4,5);
    }, 2000)
}
// テスト用 ↑↑
