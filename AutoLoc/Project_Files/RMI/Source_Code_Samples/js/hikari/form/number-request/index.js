import DOMPurify from 'dompurify';
import {hankakuEToZenkakuE} from '../common';
import {hankakuNumToZenkakuNum} from '../common';
import {hankakuHypToZenkakuHyp} from '../common';
import {replaceKanaHalfToFull} from '../common';
import {zenkakuNumToHankakuNum} from '../common';
import {removeHyphen} from '../common';
import {zenkakuEToHankakuE} from '../common';
import {zenSymToHanSym} from '../common';
import {hasSymbolOrNumber} from '../common';
import {hasSymbolOrNumberExHyphen} from '../common';
import {hasSymbol} from '../common';
import {hasSymbolExHyphen} from '../common';
import {hasJapanese} from '../common';

const $form = $('#js-hikari-number-request_Form');
const $input = $form.find('input, textarea, select');
const $inputText = $input.filter('input, textarea, select');
const $identificationCheck = $('.identification-check');
const $reason1 = $('#00N2j000000P9DY');
const $reasonTxt1 = $('#00N2j000000P9Dn');
const $reason2 = $('#00N2j000000P9Dd');
const $reasonTxt2 = $('#00N2j000000P9Ds');
const $reason3 = $('#00N2j000000P9Di');
const $reasonTxt3 = $('#00N2j000000P9Dx');
const modalConfig = {
    background: '#4d4d4d',
    custom_class: 'c-Modal',
    overlay_opacity: 0.5,
    content_source: '#modal-confirm'
};

$('#modal-confirm').modaal(modalConfig);


//半角英字→全角英字変換対象リスト
//市区町村以下
const arrHankakuEToZenkakuE = ['00N2v00000JLl9z'];

let targetHanEZenE;

for( let i = 0; i < arrHankakuEToZenkakuE.length; i++ ) {
    targetHanEZenE = $("#" + arrHankakuEToZenkakuE[i]);

    targetHanEZenE.each(function() {
        $(this).on('blur', function() {
            $(this).val(hankakuEToZenkakuE($(this).val()));
        })
    });
}

//半角数字→全角数字変換対象リスト
//市区町村以下
const arrHankakuNumToZenkakuNum = ['00N2v00000JLl9z'];

let targetHanNumZenNum;

for( let i = 0; i < arrHankakuNumToZenkakuNum.length; i++ ) {
    targetHanNumZenNum = $("#" + arrHankakuNumToZenkakuNum[i]);

    targetHanNumZenNum.each(function() {
        $(this).on('blur', function() {
            $(this).val(hankakuNumToZenkakuNum($(this).val()));
        })
    });
}

//半角ハイフン→全角ハイフン変換対象リスト
//市区町村以下
const arrHankakuHypToZenkakuHyp = ['00N2v00000JLl9z'];

let targetHanHypZenHyp;

for( let i = 0; i < arrHankakuHypToZenkakuHyp.length; i++ ) {
    targetHanHypZenHyp = $("#" + arrHankakuHypToZenkakuHyp[i]);

    targetHanHypZenHyp.each(function() {
        $(this).on('blur', function() {
            $(this).val(hankakuHypToZenkakuHyp($(this).val()));
        })
    });
}

//半角カタカナ変換対象リスト
//氏名（姓）・氏名（名）・市区町村以下
const arrayReplaceKanaHalfToFull = ['00N2v00000JLlAA', '00N2v00000JLlA6','00N2v00000JLl9z'];

let target;

for( let i = 0; i < arrayReplaceKanaHalfToFull.length; i++ ) {
    target = $("#" + arrayReplaceKanaHalfToFull[i]);

    target.each(function() {
        $(this).on('blur', function() {
            $(this).val(replaceKanaHalfToFull($(this).val()));
        })
    });
}


//全角数字を半角数字に変換リスト
//契約者電話番号・郵便番号・お客様番号・ユーザーID・契約メールアドレス・お客様回線ID・受信希望メールアドレス
const arrayReplaceZenkakuNumToHankakuNum = ['phone','00N2v00000JLlAI','00N2v00000JLlA2','00N2v00000JLlAd','email','00N2j000000P9DJ','00N2j000000P9E2'];

let target02;

for( let i = 0; i < arrayReplaceZenkakuNumToHankakuNum.length; i++ ) {
    target02 = $("#" + arrayReplaceZenkakuNumToHankakuNum[i]);

    target02.each(function() {
        $(this).on('blur', function() {
            $(this).val(zenkakuNumToHankakuNum($(this).val()));
        })
    });
}

//全角半角ハイフンを削除リスト
//契約者電話番号・郵便番号
const arrayRemoveHyphen = ['phone','00N2v00000JLlAI'];

let target03;

for( let i = 0; i < arrayRemoveHyphen.length; i++ ) {
    target03 = $("#" + arrayRemoveHyphen[i]);

    target03.each(function() {
        $(this).on('blur', function() {
            $(this).val(removeHyphen($(this).val()));
        })
    });
}


//全角英字→半角英字変換対象リスト
//お客様番号・契約メールアドレス・お客様回線ID・事業者変更承諾番号を受信したいメールアドレス
const arrZenkakuEToHankakuE = ['00N2v00000JLlA2','email','00N2j000000P9DJ','00N2j000000P9E2'];

let targetZenEHanE;

for( let i = 0; i < arrZenkakuEToHankakuE.length; i++ ) {
    targetZenEHanE = $("#" + arrZenkakuEToHankakuE[i]);

    targetZenEHanE.each(function() {
        $(this).on('blur', function() {
            $(this).val(zenkakuEToHankakuE($(this).val()));
        })
    });
}

//全角記号→半角記号変換対象リスト
//お客様番号・契約メールアドレス・事業者変更承諾番号を受信したいメールアドレス
const arrZenSymToHankakuSym = ['00N2v00000JLlA2','email','00N2j000000P9E2'];

let targetZenSymHanSym;

for( let i = 0; i < arrZenSymToHankakuSym.length; i++ ) {
    targetZenSymHanSym = $("#" + arrZenSymToHankakuSym[i]);

    targetZenSymHanSym.each(function() {
        $(this).on('blur', function() {
            $(this).val(zenSymToHanSym($(this).val()));
        })
    });
}

//移行理由 その他の表示非表示制御
$reason1.on("change", function() {
    if(this.value !== "") {
        $('.hikari-number-request-Form_Select-row-hide02').attr("data-disp","show");
        $('.hikari-number-request-Form_Select-row-hide02').show();
    }else{
        $('.hikari-number-request-Form_Select-row-hide02').attr("data-disp","hide");
        $('.hikari-number-request-Form_Select-row-hide02').hide();
    }

    if( this.value == "その他" ) {
        $('.hikari-number-request-Form_Select-hide01').slideDown();
        $reasonTxt1.addClass("js-required");
    } else {
        $('.hikari-number-request-Form_Select-hide01').slideUp();
        $reasonTxt1.removeClass("js-required");
    }
});
$reason2.on("change", function() {
    if(this.value !== "") {
        $('.hikari-number-request-Form_Select-row-hide03').attr("data-disp","show");
        $('.hikari-number-request-Form_Select-row-hide03').show();
    }else{
        $('.hikari-number-request-Form_Select-row-hide03').attr("data-disp","hide");
        $('.hikari-number-request-Form_Select-row-hide03').hide();
    }

    if( this.value == "その他" ) {
        $('.hikari-number-request-Form_Select-hide02').slideDown();
        $reasonTxt2.addClass("js-required");
    } else {
        $('.hikari-number-request-Form_Select-hide02').slideUp();
        $reasonTxt2.removeClass("js-required");
    }
});
$reason3.on("change", function() {
    if( this.value == "その他" ) {
        $('.hikari-number-request-Form_Select-hide03').slideDown();
        $reasonTxt3.addClass("js-required");
    } else {
        $('.hikari-number-request-Form_Select-hide03').slideUp();
        $reasonTxt3.removeClass("js-required");
    }
});

//移行先事業者名 該当なしの表示非表示制御
$("#00N2j000000P9DO").on("change", function() {

    if( this.value == "該当なし" ) {
        $('.hikari-number-request-Form_Select-hide00').slideDown();
    } else {
        $('.hikari-number-request-Form_Select-hide00').slideUp();
    }
});


$('#js-hikari-number-request_Confirm').on('click', function() {
    clear();

    //ご本人様確認
    if( !$identificationCheck.prop('checked') ) {
        $identificationCheck.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">チェックしてください</p>');
        $identificationCheck.attr('aria-invalid', true);
    } else {
        $identificationCheck.attr('aria-invalid', false);
    }

    //お客様番号
    const $clientNo = $("#00N2v00000JLlA2");
    if($clientNo.val() == '') {
        $clientNo.attr('aria-invalid', false);
    }else if( hasJapanese($clientNo.val()) || hasSymbolExHyphen($clientNo.val()) ) {
        $clientNo.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">英字、数字、ハイフンで入力してください</p>');
        $clientNo.attr('aria-invalid', true);
    } else {
        $clientNo.attr('aria-invalid', false);
    }

    //ユーザーID
    const $userId = $("#00N2v00000JLlAd");
    if($userId.val() == '') {
        $userId.attr('aria-invalid', false);
    }else if( hasJapanese($userId.val()) || hasSymbol($userId.val()) ) {
        $userId.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">英字、数字で入力してください</p>');
        $userId.attr('aria-invalid', true);
    } else {
        $userId.attr('aria-invalid', false);
    }

    //契約メールアドレス 任意
    const $email = $("#email");
    if( $email.val() == '' ) {
        $email.attr('aria-invalid', false);
    }else if(hasJapanese($email.val())) {
        $email.attr('aria-invalid', true);
        $email.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">英字、数字、記号で入力してください</p>');
    } else if ( $email.val() !== '' && !$email.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+\.+([a-zA-Z0-9._-]+)+$/)) {
        $email.attr('aria-invalid', true);
        $email.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">メールアドレスの形式で入力してください</p>');
    } else {
        $email.attr('aria-invalid', false);
    }

    //お客様回線ID 任意
    const $clientLineId = $("#00N2j000000P9DJ");
    if( $clientLineId.val() == '' ) {
        $clientLineId.attr('aria-invalid', false);
    }else if(hasJapanese($clientLineId.val()) || hasSymbol($clientLineId.val())) {
        $clientLineId.attr('aria-invalid', true);
        $clientLineId.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">英字、数字で入力してください</p>');
    } else {
        $clientLineId.attr('aria-invalid', false);
    }



    //必須項目チェック
    $inputText.filter('.js-required').each(function() {
        let $self = $(this);

        //氏名(性) or 氏名(名)
        if( $self.attr('id') === '00N2v00000JLlAA' || $self.attr('id') === '00N2v00000JLlA6' ) {
            if( $self.val() !== '' && hasSymbolOrNumber($self.val()) ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">漢字、かな、カナ、アルファベットで入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        //契約者電話番号
        if( $self.attr('id') === 'phone' ) {
            if(hasJapanese($self.val()) || hasSymbolExHyphen($self.val())) {
                $self.attr('aria-invalid', true);
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">数字で入力してください</p>');
            }else if( $self.val() !== '' && $self.val() !== '0000000000' ) {
                if ($self.val() && !$self.val().replace(/[━.*‐.*―.*－.*\-.*ー.*-]/gi,'').match(/^0\d{9,10}$/)) {
                    $self.attr('aria-invalid', true);
                    $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい電話番号を入力してください</p>');
                }
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        //郵便番号
        if ($self.attr('id') === '00N2v00000JLlAI') {
            if(hasJapanese($self.val()) || hasSymbolExHyphen($self.val())) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">数字で入力してください</p>');
                $self.attr('aria-invalid', true);
            }else if( $self.val() !== '' && !$self.val().match(/^[0-9]{7}$/) ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">有効な郵便番号を入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }


        if( $self.attr('id') === '00N2v00000JLlAb' ) {
            if( $self.val() == '' || $self.val() == '都道府県') {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">選択してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        //市区町村以下
        if( $self.attr('id') === '00N2v00000JLl9z' ) {
            // const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
            
            if( $self.val() !== '' && hasSymbolOrNumberExHyphen($self.val()) ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">漢字、かな、カナ、アルファベットで入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        //移行先事業者名
        if( $self.attr('id') === '00N2j000000P9DO' ) {
            if( $self.val() == '' || $self.val() == '選択してください') {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">選択してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === '00N2j000000P9DY' ) {
            //移行理由１
            if( $self.val() == '' || $self.val() == '選択してください') {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">選択してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === '00N2j000000P9Dn' || $self.attr('id') === '00N2j000000P9Ds' || $self.attr('id') === '00N2j000000P9Dx' ) {
            //移行理由１・２・３ その他テキスト
            if( $self.val() == '') {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }


        if( $self.attr('id') === '00N2j000000P9E2' ) {
            //事業者変更承諾番号を受信したいメールアドレス
            if(hasJapanese($self.val())) {
                $self.attr('aria-invalid', true);
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">英字、数字、記号で入力してください</p>');
            } else if ( $self.val() !== '' && !$self.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+\.+([a-zA-Z0-9._-]+)+$/)) {
                $self.attr('aria-invalid', true);
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">メールアドレスの形式で入力してください</p>');
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

    });

    if ($('.js-errormsg').length > 0) {
        $('html, body').animate({scrollTop: $('.js-errormsg:first').offset().top}, 400, 'swing');
    } else {
        $input.each(function() {
            let $self = $(this);
            if( $self.prop('value') == 'その他') {
                $(`#${$self.attr('id')}-disp`).text(DOMPurify.sanitize($self.val(), {ALLOWED_TAGS: []}));
                $(`#${$self.attr('id')}-disp`).next().show();
            }else if($self.attr('id') == '00N2j000000P9DO') {
                $(`#${$self.attr('id')}-disp`).text(DOMPurify.sanitize($self.val(), {ALLOWED_TAGS: []}));

                //移行先事業者名の値が該当なし かつ 事業者名入力項目に入力があればモーダル内確認画面にもその内容を表示
                if($self.prop('value') == '該当なし') {
                    if($("#00N2j000000P9DT").val() !== "") {
                        $("#00N2j000000P9DT-disp").show();
                    }else{
                        $("#00N2j000000P9DT-disp").hide();
                    }
                }else{
                    $("#00N2j000000P9DT-disp").hide();
                }
            }else if($self.attr('id') == '00N2j000000P9DE') {
                if($self.prop('checked')) {
                    $(`#${$self.attr('id')}-disp`).text('契約者本人です');
                }
            } else {
                $(`#${$self.attr('id')}-disp`).text(DOMPurify.sanitize($self.val(), {ALLOWED_TAGS: []}));
            }

            //任意項目の入力がない場合確認項目からも非表示
            if($self.attr('id') == '00N2v00000JLlA2' || $self.attr('id') == '00N2v00000JLlAd' || $self.attr('id') == 'email' || $self.attr('id') == '00N2j000000P9DJ' || $self.attr('id') == '00N2j000000P9Dd' || $self.attr('id') == '00N2j000000P9Di') {
                if( $self.prop('value') == '' ) {
                    $(`#${$self.attr('id')}-row-disp`).hide();
                }else{
                    $(`#${$self.attr('id')}-row-disp`).show();
                }
            }
        });
        $('#modal-confirm').modaal('open');
    }
});

$('#js-hikari-number-request_Submit').on('click', function() {
    $form.submit();
});

$('#js-hikari-number-request_Confirm-close').on('click', function() {
    $('#modal-confirm').modaal('close');
});

// confirm button - agree check
const agreecheck = document.getElementById('00N2j000000P9D9');
const confirmBtn = document.getElementById('js-hikari-number-request_Confirm');

agreecheck.addEventListener('change', (e) => {
    if( agreecheck.checked ) {
        confirmBtn.setAttribute('aria-disabled', false);
        confirmBtn.disabled = false;
    } else {
        confirmBtn.setAttribute('aria-disabled', true);
        confirmBtn.disabled = true;
    }
});

function clear() {
    let $errors = $('.js-errormsg');
    let $input = $form.find('input[type="text"]');

    if ($errors) {
        $errors.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}