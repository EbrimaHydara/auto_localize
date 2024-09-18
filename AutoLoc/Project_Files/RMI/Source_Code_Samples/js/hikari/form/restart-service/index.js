import DOMPurify from 'dompurify';
import {hankakuEToZenkakuE} from '../common';
import {hankakuNumToZenkakuNum} from '../common';
import {hankakuHypToZenkakuHyp} from '../common';
import {hankakuComToZenkakuCom} from '../common';
import {replaceKanaHalfToFull} from '../common';
import {zenkakuNumToHankakuNum} from '../common';
import {removeHyphen} from '../common';
import {zenkakuEToHankakuE} from '../common';
import {zenSymToHanSym} from '../common';
import {hasSymbolOrNumber} from '../common';
import {hasSymbolOrNumberExHyphen} from '../common';
import {hasSymbolExHyphen} from '../common';
import {hasJapanese} from '../common';

const $form = $('#js-hikari-restart-service_Form');
const $input = $form.find('input, textarea, select');
const $inputText = $input.filter('input, textarea, select');
const $zipcode = document.getElementById('00N2v00000JLlAI');
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
const arrHankakuNumToZenkakuNum = ['00N2v00000JLl9z', "00N2j000000bZcv"];

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
const arrHankakuHypToZenkakuHyp = ['00N2v00000JLl9z', "00N2j000000bZcv"];

let targetHanHypZenHyp;

for( let i = 0; i < arrHankakuHypToZenkakuHyp.length; i++ ) {
    targetHanHypZenHyp = $("#" + arrHankakuHypToZenkakuHyp[i]);

    targetHanHypZenHyp.each(function() {
        $(this).on('blur', function() {
            $(this).val(hankakuHypToZenkakuHyp($(this).val()));
        })
    });
}

//半角ハイフン→全角ハイフン変換対象リスト
//市区町村以下
const arrhankakuComToZenkakuCom = ['00N2j000000bZd0', '00N2j000000bZcv','00N2j000000bZde'];

let targethankakuCom;

for( let i = 0; i < arrhankakuComToZenkakuCom.length; i++ ) {
    targethankakuCom = $("#" + arrhankakuComToZenkakuCom[i]);

    targethankakuCom.each(function() {
        $(this).on('blur', function() {
            $(this).val(hankakuComToZenkakuCom($(this).val()));
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
//契約者電話番号・郵便番号・お客様番号・契約メールアドレス・お支払い金額・お問い合わせ番号・連絡先電話番号
const arrayReplaceZenkakuNumToHankakuNum = ['00N2v00000LeaQe','00N2v00000JLlAI','00N2v00000JLlA2','email','00N2j000000bZcv','00N2j000000bZd0','00N2j000000bZde', 'phone'];

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
//契約者電話番号・郵便番号・連絡先電話番号
const arrayRemoveHyphen = ['00N2v00000LeaQe','00N2v00000JLlAI', 'phone'];

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
//お客様番号・契約メールアドレス
const arrZenSymToHankakuSym = ['00N2v00000JLlA2','email'];

let targetZenSymHanSym;

for( let i = 0; i < arrZenSymToHankakuSym.length; i++ ) {
    targetZenSymHanSym = $("#" + arrZenSymToHankakuSym[i]);

    targetZenSymHanSym.each(function() {
        $(this).on('blur', function() {
            $(this).val(zenSymToHanSym($(this).val()));
        })
    });
}



let date = new Date();


$('#00N2j000000bZd5').datepicker({
    maxDate: date,
    minDate: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 31)
});

const confirmBtn = document.getElementById('js-hikari-restart-service_Confirm');

confirmBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    clear();

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

    // お問い合わせ番号　任意
    const $number = $("#00N2j000000bZde");
    if(hasJapanese($number.val()) || hasSymbolExHyphen($number.val())) {
        $number.attr('aria-invalid', true);
        $number.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">数字で入力してください</p>');
    } else {
        $number.attr('aria-invalid', false);
    }

    // 連絡先電話番号 任意
    const $contractNumber = $("#phone");
    if(hasJapanese($contractNumber.val()) || hasSymbolExHyphen($contractNumber.val())) {
        $contractNumber.attr('aria-invalid', true);
        $contractNumber.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">数字で入力してください</p>');
    }else if( $contractNumber.val() !== '' && $contractNumber.val() !== '0000000000' ) {
        if ($contractNumber.val() && !$contractNumber.val().replace(/[━.*‐.*―.*－.*\-.*ー.*-]/gi,'').match(/^0\d{9,10}$/)) {
            $contractNumber.attr('aria-invalid', true);
            $contractNumber.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい電話番号を入力してください</p>');
        }
    } else {
        $contractNumber.attr('aria-invalid', false);
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
        if( $self.attr('id') === '00N2v00000LeaQe' ) {
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

        //契約メールアドレス 
        if( $self.attr('id') === 'email' ) {
            if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if(hasJapanese($self.val())) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">英字、数字、記号で入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if ( $self.val() !== '' && !$self.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+\.+([a-zA-Z0-9._-]+)+$/)) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">メールアドレスの形式で入力してください</p>');
                $self.attr('aria-invalid', true);
            }
            else {
                $self.attr('aria-invalid', false);
            }
        }

        //ご利用月
        if( $self.attr('id') === '00N2j000000bZcv' ) {
            if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        //お支払い金額
        if( $self.attr('id') === '00N2j000000bZd0' ) {
            
            if(hasJapanese($self.val()) || hasSymbolExHyphen($self.val())) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-8">数字で入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">入力してください</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        //お支払い日
        if( $self.attr('id') === '00N2j000000bZd5' ) {
            if( $self.val() == '') {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">選択してください</p>');
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
            } else {
                $(`#${$self.attr('id')}-disp`).text(DOMPurify.sanitize($self.val(), {ALLOWED_TAGS: []}));
            }

            //任意項目の入力がない場合確認項目からも非表示
            if($self.attr('id') == '00N2v00000JLlA2' || $self.attr('id') == '00N2j000000bZde' || $self.attr('id') == 'phone') {
                if( $self.prop('value') == '' ) {
                    $(`#${$self.attr('id')}-row-disp`).hide();
                }else{
                    $(`#${$self.attr('id')}-row-disp`).show();
                }
            }
        });
        $('#modal-confirm').modaal('open');
    }
})

$('#js-hikari-restart-service_Submit').on('click', function() {
    $form.submit();
});

$('#js-hikari-restart-service_Confirm-close').on('click', function() {
    $('#modal-confirm').modaal('close');
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