import DOMPurify from 'dompurify';

const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

const $form = $('#js-hikari-inquiry_Form');
const $input = $form.find('input, textarea, select');
const $inputText = $input.filter('input, textarea, select');
const errorMsgClass = '.js-errormsg';

const $reasonAgreement= $('#js-hikari-Reason-agreement');
const $reasonCheckbox = $('#js-hikari-Reason-checkbox');
const $Adress = $reasonCheckbox.find('input[name="00N2v00000JLl9w"]');
const $00N2v00000JLl9w = $('#00N2v00000JLl9w');

const $00N2v00000JLlA2 = document.getElementById('00N2v00000JLlA2');
const $00N2v00000JLlAd = document.getElementById('00N2v00000JLlAd');
const $phone = document.getElementById('phone');
const $00N2v00000JLlAI = document.getElementById('00N2v00000JLlAI');


const reason = document.getElementById('00N2j000000GbEH');
let flgLoss = false;

function hankaku2Zenkaku(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}

const arrayHankaku2Zenkaku = ['00N2v00000JLlA2', 'phone', 'email', '00N2v00000JLlAd']

let target;

for( let i = 0; i < arrayHankaku2Zenkaku.length; i++ ) {
    target = document.getElementById(arrayHankaku2Zenkaku[i]);
    target.onblur = function() {
        if( target.value.match(/[Ａ-Ｚａ-ｚ０-９！-～]/g) ) {
            console.log(target);
            target.value = hankaku2Zenkaku(target.value);
        }
    }
}

$00N2v00000JLl9w[0].onclick = function() {
    console.log($00N2v00000JLl9w[0].checked);
    $00N2v00000JLl9w.attr('aria-invalid', false);
}

reason.onchange = function() {
    if( this.value == '紛失したため' ) {
        flgLoss = true;
        $reasonCheckbox.css('display', 'block');
        $reasonAgreement.css('display', 'none');
    } else if( this.value == '開通通知（ご契約内容、アカウントのお知らせ）が一度も届いていないため' ) {
        flgLoss = false;
        $reasonCheckbox.css('display', 'none');
        $reasonAgreement.css('display', 'block');
        $00N2v00000JLl9w.prop('checked', false);
    } else {
        flgLoss = false;
        $reasonCheckbox.css('display', 'none');
        $reasonAgreement.css('display', 'none');
    }
}

function clear1() {
    let $error1 = $('.js-error1');
    let $input = $form.find('input[type="text"]');

    if ($error1) {
        $error1.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}

$('#js-hikari-inquiry_Confirm').on('click', (e) => {

    if( flgLoss ) {
        if ($00N2v00000JLl9w[0].checked) {
            $00N2v00000JLl9w[0].setAttribute('aria-invalid', true);
            //$xxxxx10.attr('aria-invalid', true);
        } else {
            $00N2v00000JLl9w[0].setAttribute('aria-invalid', false);
            //$xxxxx10.attr('aria-invalid', false);
            if ($(errorMsgClass)) {
                $(errorMsgClass).remove();
            }
        }

        $Adress.on('change blur', function() {
            clear1();
            //$xxxxx10.attr('aria-invalid', false);
        });
    }

    $inputText.attr('aria-invalid', false);
    if ($(errorMsgClass)) {
        $(errorMsgClass).remove();
    }

    if( flgLoss ) {
        console.log('loss'); //紛失したため
        if( !$00N2v00000JLl9w.prop('checked') ) { // チェックがついていない
            $00N2v00000JLl9w[0].setAttribute('aria-invalid', true);
            $00N2v00000JLl9w.parent().before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">選択してください。</p>');
        }
    } else {
        console.log('loss2');
    }

    $inputText.filter('.js-required').each(function() {
        let $self = $(this);

        if ($self.attr('id') === '00N2v00000JLlAI') {
            if( $self.val() !== '' && !$self.val().match(/^[0-9]{7}$/) ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">正しい形式で入力してください</p>');
                $self.attr('aria-invalid', true);
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">郵便番号を入力してください。</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === '00N2v00000JLlAA' ) {
            if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">ご契約者様 氏名を入力してください。</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === '00N2v00000JLlAb' ) {
            if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">都道府県を選択してください。</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === '00N2v00000JLl9z' ) {
            if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">現在ご契約の住所を入力してください。</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === 'phone' ) {
            if( $self.val() !== '' && $self.val() !== '0000000000' ) {
                if ($self.val() && !$self.val().replace(/[━.*‐.*―.*－.*\-.*ー.*-]/gi,'').match(/^0\d{9,10}$/)) {
                    $self.attr('aria-invalid', true);
                    $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい形式で入力してください</p>');
                }
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">ご契約の電話番号を入力してください。 </p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }


        if( $self.attr('id') === 'email' ) {
            if ( $self.val() !== '' && !$self.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/)) {
                $self.attr('aria-invalid', true);
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい形式で入力してください</p>');
            } else if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">連絡先メールアドレスを入力してください。</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }

        if( $self.attr('id') === '00N2j000000GbEH' ) {
            if( $self.val() == '' ) {
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-8">お申し込みの理由を選択してください。</p>');
                $self.attr('aria-invalid', true);
            } else {
                $self.attr('aria-invalid', false);
            }
        }


    });

    if( $00N2v00000JLlAd.value !== '' ) {
        console.log($00N2v00000JLlAd);
        if( !$00N2v00000JLlAd.value.match(/^[a-zA-Z0-9]*$/) || $00N2v00000JLlAd.value.length !== 13 ) {
            $00N2v00000JLlAd.insertAdjacentHTML('beforebegin' ,'<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい形式で入力してください</p>');
            $00N2v00000JLlAd.setAttribute('aria-invalid', true);
        } else {
            $00N2v00000JLlAd.setAttribute('aria-invalid', false);
        }
    }

    if( $00N2v00000JLlA2.value !== '' ) {
        console.log($00N2v00000JLlA2);
        if( !$00N2v00000JLlA2.value.match(/^[0-9]*$/) || $00N2v00000JLlA2.value.length !== 11 ) {
            $00N2v00000JLlA2.insertAdjacentHTML('beforebegin' ,'<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい形式で入力してください</p>');
            $00N2v00000JLlA2.setAttribute('aria-invalid', true);
        } else {
            $00N2v00000JLlA2.setAttribute('aria-invalid', false);
        }
    }

    if ($(errorMsgClass).length > 0) {
        $('html, body').animate({
            scrollTop: $('.js-errormsg:first').offset().top - 50
        }, 400, 'swing');

    } else {
        $input.each(function() {
            let $self = $(this);
            if( $self.prop('value') == '紛失したため' ) {
                // $(`#${$self.attr('id')}-disp`).html('紛失したため<br>発行手数料に同意する');
                $(`#${$self.attr('id')}-disp`).html('紛失したため');
            } else {
                $(`#${$self.attr('id')}-disp`).text(DOMPurify.sanitize($self.val(), {ALLOWED_TAGS: []}));
            }
        });
        $('#modal-confirm').modaal('open');
    }
});

$('#js-hikari-inquiry_Submit').on('click', function() {
    $form.submit();
});

$('#js-hikari-inquiry_Confirm-close').on('click', (e) => {
    $('#modal-confirm').modaal('close');
});

$00N2v00000JLlAI.addEventListener('blur', function(e) {

    if( document.getElementById('00N2v00000JLlAI').value.match(/[Ａ-Ｚａ-ｚ０-９！-～]/g) ) {
        document.getElementById('00N2v00000JLlAI').value = hankaku2Zenkaku(document.getElementById('00N2v00000JLlAI').value);
        document.getElementById('00N2v00000JLlAI').value = document.getElementById('00N2v00000JLlAI').value.replace(/-|−/g,"");
    }

    if( document.getElementById('00N2v00000JLlAI').value.match('-' || '−' || 'ー') != -1 ) {
        document.getElementById('00N2v00000JLlAI').value = document.getElementById('00N2v00000JLlAI').value.replace(/-|−|ー/g,"");
    }

});

const numbers = [$phone];

numbers.forEach(function(element){
    element.addEventListener('blur', function(e) {
        if( element.value.match('-' || '−' || 'ー') != -1 ) {
            element.value = element.value.replace(/-|−|ー/g,"");
        }
    })
});
