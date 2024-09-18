//// ScrollHint
import ScrollHint from 'scroll-hint';

export const scrollHInt = new ScrollHint('.js-scrollable', {
    i18n: {
    scrollable: 'スクロール\nできます'
    }
});

//// simulation
const $choices = $('.js-fee-Simulation_Choice');
const $choices2 = $('.js-fee-Simulation_Choice2');

const $resultMonthlyBaseValue = $('#js-Result_Monthly-base-value');
const $resultMonthlyConstructionValue = $('#js-Result_Monthly-construction-value');
const $resultInitialValue = $('#js-Result_Initial-value');

const $resultMonthly2yearsBaseValue = $('#js-Result_Monthly-2-years-base-value');
const $resultMonthly2yearsConstructionValue = $('#js-Result_Monthly-2-years-construction-value');
const $submitPlan = $('#js-Submit_Plan');

// flg
let choices1 = false;
let choices2 = false;

// result message
const resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円※1 <span class="c-Txt_Emp-underline hikari-campaign-installation-fee-Simulation_Txt-emp">1年間おうちのネットもタダ！</span>';
let resultMonthlyConstructionValue;
let resultInitialValue;

let resultMonthly2yearsBaseValue;
let resultMonthly2yearsConstructionValue;

function enableSubmitPlan() {
    if ($submitPlan.length > 0) {
        $submitPlan.prop('disabled', false);
        $submitPlan.removeAttr('aria-disabled');
    }
}

// create result message
const ZeroText = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span>円</span>';

function createFreeText(price) {
    return `
        <span class="hikari-campaign-installation-fee-Simulation_Txt-strikethrough">
            <span class="c-Txt_Normal">最大</span>
            <span class="c-Txt_Normal-l c-Txt_Emp">${price.toLocaleString()}</span>
            <span class="c-Txt_Normal">円（税込）</span>
        </span>
        <span class="c-Txt_Emp-underline hikari-campaign-installation-fee-Simulation_Txt-emp">本キャンペーン適用で無料！</span>
    `;
}

function createSplitFeeText(price, isFirst) {
    const splitType = isFirst ? '開通翌月のみ' : '月';
    return `
        <span class="c-Txt_Normal-l c-Txt_Emp">${price.toLocaleString()}</span>
        <span class="hikari-fee-Txt_Sub"> 円（税込 ${(price * 1.1).toLocaleString()} 円）／${splitType}</span>
    `;
}

if ($choices.length > 0) {
    let useageState = '';
    let housingType = '';

    $choices2.on('change', function() {
        choices2 = true;
    });

    $choices.on('change', function() {
        let $selected = $choices.filter(function() {
            return $(this).prop('checked');
        });

        $choices2.prop('disabled', false);

        $selected.each(function() {
            if ($(this).val() === 'フレッツ光を利用していない') {
                useageState = 'notHikari';
            }
            if ($(this).val() === 'フレッツ光を利用している') {
                useageState = 'hikari';
            }
            if ($(this).val() === '他社光コラボを利用している') {
                useageState = 'other';
            }

            if ($(this).val() === '集合住宅') {
                housingType = 'syuugoujyutaku';
            }
            if ($(this).val() === '戸建') {
                housingType = 'kodate';
            }

            if(housingType === 'syuugoujyutaku') {
                switch (useageState) {
                    case 'notHikari':
                        resultMonthlyConstructionValue = createFreeText(16500);
                        resultInitialValue = createSplitFeeText(800, true);
                        resultMonthly2yearsBaseValue = createSplitFeeText(3800, false);
                        break;
                    case 'hikari':
                        resultMonthlyConstructionValue = ZeroText;
                        resultInitialValue = createSplitFeeText(1800, true);
                        resultMonthly2yearsBaseValue = createSplitFeeText(3800, false);
                        break;
                    case 'other':
                        resultMonthlyConstructionValue = ZeroText;
                        resultInitialValue = createSplitFeeText(1800, true);
                        resultMonthly2yearsBaseValue = createSplitFeeText(3800, false);
                        break;
                    default:
                        break; //do nothing
                }
            }

            if(housingType === 'kodate') {
                switch (useageState) {
                    case 'notHikari':
                        resultMonthlyConstructionValue = createFreeText(19800);
                        resultInitialValue = createSplitFeeText(800, true);
                        resultMonthly2yearsBaseValue = createSplitFeeText(4800, false);
                        break;
                    case 'hikari':
                        resultMonthlyConstructionValue = ZeroText;
                        resultInitialValue = createSplitFeeText(1800, true);
                        resultMonthly2yearsBaseValue = createSplitFeeText(4800, false);
                        break;
                    case 'other':
                        resultMonthlyConstructionValue = ZeroText;
                        resultInitialValue = createSplitFeeText(1800, true);
                        resultMonthly2yearsBaseValue = createSplitFeeText(4800, false);
                        break;
                    default:
                        break; //do nothing
                }
            }
            enableSubmitPlan();
        });

        choices1 = true;

        if( choices1 == true && choices2 == true ) {
            $resultInitialValue.html(resultInitialValue);
            $resultMonthly2yearsBaseValue.html(resultMonthly2yearsBaseValue);
            $resultMonthlyConstructionValue.html(resultMonthlyConstructionValue);
            $resultMonthly2yearsConstructionValue.html(resultMonthly2yearsConstructionValue);
            $resultMonthlyBaseValue.html(resultMonthlyBaseValue);
        }
    });
}

//// floating button
function fixedBottomBtn() {
    let scrollY = window.pageYOffset;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn || !trigger ) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn);
