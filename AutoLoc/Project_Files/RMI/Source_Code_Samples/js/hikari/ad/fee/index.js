import ScrollHint from 'scroll-hint';

// scroll hint
window.addEventListener('DOMContentLoaded', function(){
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});

// simulation
const $choices = $('.js-fee-Simulation_Choice');
const $choices2 = $('.js-fee-Simulation_Choice2');
const $choices3 = $('.js-fee-Simulation_Choice3');
const $resultInitialValue = $('#js-Result_Initial-value');
const $resultMonthlyBaseValue = $('#js-Result_Monthly-base-value');
const $resultMonthly2yearsBaseValue = $('#js-Result_Monthly-2-years-base-value');
const $resultMonthly2yearsConstructionValue = $('#js-Result_Monthly-2-years-construction-value');
const $resultMonthlyConstructionValue = $('#js-Result_Monthly-construction-value');
const $submitPlan = $('#js-Submit_Plan');

// flg
let choices1 = false;
let choices2 = false;
let choices3 = false;

// result
let resultInitialValue;
let resultMonthly2yearsBaseValue;
let resultMonthlyConstructionValue;
let resultMonthly2yearsConstructionValue;
let resultMonthlyBaseValue;

window.onpageshow = function() {
    if (window.location.search && window.location.search.indexOf('?choices=') < 0) {
        $choices.each(function() {
            $(this).prop('checked', false);
        });
    }
    if( choices1 == true && choices2 == true && choices3 == true ) {
        const scrollToResult = () => {
            const targetOffset = $('#js-Result').offset().top;
            $('html,body').animate({scrollTop: targetOffset}, 400);
        };
        setTimeout(scrollToResult, 0);
    }
};

if ($choices.length > 0) {
    let notUsingFletsHikari = false;
    let usingFletsHikari = false;
    let otherCompanyHikari =false;
    let kodate = false;
    let syuugoujyutaku = false;
    let notUsingRakutenMobile = false;
    let usingRakutenMobile = false;

    $choices2.on('change', function() {
        choices2 = true;
        $choices3.prop('disabled', false);
    });

    $choices3.on('change', function() {
        choices3 = true;
    });

    $choices.on('change', function() {
        let $selected = $choices.filter(function() {
            return $(this).prop('checked');
        });

        $choices2.prop('disabled', false);

        $selected.each(function() {
            if ($(this).val() === 'フレッツ光を利用していない') {
                notUsingFletsHikari = true;
                usingFletsHikari = false;
                otherCompanyHikari = false;
                resultInitialValue = '<span class="c-Txt_Normal-l c-Txt_Emp">800</span><span class="hikari-fee-Txt_Sub"> 円（税込 880 円）／開通翌月のみ</span>';
            }
            if ($(this).val() === 'フレッツ光を利用している') {
                notUsingFletsHikari = false;
                usingFletsHikari = true;
                otherCompanyHikari = false;
                resultInitialValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span><span class="hikari-fee-Txt_Sub"> 円（税込 1,980 円）／開通翌月のみ</span>';
            }
            if ($(this).val() === '他社光コラボを利用している') {
                notUsingFletsHikari = false;
                usingFletsHikari = false;
                otherCompanyHikari = true;
                resultInitialValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> <span class="hikari-fee-Txt_Sub"> 円（税込 1,980 円）／開通翌月のみ</span>';
            }

            if ($(this).val() === '集合住宅') {
                kodate = false;
                syuugoujyutaku = true;
            }
            if ($(this).val() === '戸建') {
                kodate = true;
                syuugoujyutaku = false;
            }
            if ($(this).val() === 'ある') {
                notUsingRakutenMobile = false;
                usingRakutenMobile = true;
            }
            if ($(this).val() === 'ない') {
                notUsingRakutenMobile = true;
                usingRakutenMobile = false;
            }


            if(syuugoujyutaku) {
                resultMonthly2yearsBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">3,800</span> 円（税込 4,180 円）／月';
                if(notUsingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">458</span> 円／月×36回';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">458 </span>円／月×36回';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> 円（税込 1,980 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(usingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> 円（税込 1,980 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(otherCompanyHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">1,800</span> 円（税込 1,980 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                }
            }

            if(kodate) {
                resultMonthly2yearsBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">4,800</span> 円（税込 5,280 円）／月';
                if(notUsingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">550</span> 円／月×36回';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">550</span> 円／月×36回';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">2,800</span> 円（税込 3,080 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(usingFletsHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">2,800</span> 円（税込 3,080 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                } else if(otherCompanyHikari) {
                    resultMonthlyConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    resultMonthly2yearsConstructionValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円';
                    if(notUsingRakutenMobile) {
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">2,800</span> 円（税込 3,080 円）';
                    } else if(usingRakutenMobile){
                        resultMonthlyBaseValue = '<span class="c-Txt_Normal-l c-Txt_Emp">0</span> 円<span class="c-Txt_Normal-s">※1</span>';
                    }
                }
            }
            enableSubmitPlan();
            // scrollToResult();

        });

        choices1 = true;

        if( choices1 == true && choices2 == true && choices3 == true ) {
            $resultInitialValue.html(resultInitialValue);
            $resultMonthly2yearsBaseValue.html(resultMonthly2yearsBaseValue);
            $resultMonthlyConstructionValue.html(resultMonthlyConstructionValue);
            $resultMonthly2yearsConstructionValue.html(resultMonthly2yearsConstructionValue);
            $resultMonthlyBaseValue.html(resultMonthlyBaseValue);
        }
    });
}

if ($submitPlan.length > 0) {
    $submitPlan.on('click', function() {
        window.location.href = $(this).data('url');
    });
}

if (window.location.search && window.location.search.indexOf('?choices=') > -1) {
    let params = window.location.search.replace('?choices=', '').split(',');
    let $disabled = $choices.filter(function() {
        return $(this).prop('disabled');
    });


    $disabled.prop('disabled', false);
    params.forEach(function(param) {
        $(`#${param}`).prop('checked', true).change();
    });
}

function enableSubmitPlan() {
    if ($submitPlan.length > 0) {
        $submitPlan.prop('disabled', false);
        $submitPlan.removeAttr('aria-disabled');
    }
}

// KVのABテストを実施する場合以下JSを有効化する
// var urlParam = location.search.substring(1);
// if(urlParam) {
//   const param = urlParam.split('&');
//   let paramArray = [];

//   for (let i = 0; i < param.length; i++) {
//     const paramItem = param[i].split('=');
//     paramArray[paramItem[0]] = paramItem[1];
//   }

//   if (paramArray.scid == 'we_gdn_RT_Hikari_LP_A_revise') {
//     document.getElementById("hikari-ad-fee-Pattern").classList.add("Pattern_A");
//   }
// }

// function scrollToResult() {
//     $('html,body').animate({scrollTop:$('#js-Result').offset().top});
// }

