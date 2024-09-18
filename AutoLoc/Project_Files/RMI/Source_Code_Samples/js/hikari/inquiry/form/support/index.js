import DOMPurify from 'dompurify';

const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};
$('#modal-confirm').modaal(modalConfig);

const $form = $('#js-hikari-inquiry_Form');
const $input = $form.find('input:text, textarea, select');
const $inputText = $input.filter('input:text, textarea, select');
const errorMsgClass = '.js-errormsg';
const requiredMsg = '<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">必須項目です</p>';
const errorMsg = '<p class="c-Form_Txt-error js-errormsg u-Adjust_Mt-24 u-Adjust_Mb-32">正しく入力されていない箇所があります。内容をご確認の上、再度「同意して確認」を選択してお進みください。</p>';

$('#js-hikari-inquiry_Confirm').on('click', (e) => {

    $inputText.attr('aria-invalid', false);
    if ($(errorMsgClass)) {
        $(errorMsgClass).remove();
    }

    $inputText.filter('.js-required').each(function() {
        let $self = $(this);

        if ($self.val() == '') {
            $self.attr('aria-invalid', true);
            if ($self.attr('id') === '00N2v00000JLlAb') {
                $self.parent().before(requiredMsg);
            } else {
                $self.before(requiredMsg);
            }
        }
        $self.filter('.js-chkmail').each(function() {
            if ($self.val() && !$self.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/)) {
                $self.attr('aria-invalid', true);
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しいメールアドレスの形式を入力してください</p>');
            }
        });
        $self.filter('.js-chkphone').each(function() {
            if ($self.val() && !$self.val().replace(/[━.*‐.*―.*－.*\-.*ー.*-]/gi,'').match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) {
                $self.attr('aria-invalid', true);
                $self.before('<p class="c-Form_Txt-error js-errormsg u-Adjust_Mb-16">正しい電話番号の形式を入力してください</p>');
            }
        });
    });

    if ($(errorMsgClass).length > 0) {
        $form.before(errorMsg);
        $('html, body').animate({
            scrollTop: $('.js-errormsg:first').offset().top - 50
        }, 400, 'swing');

    } else {
        $input.each(function() {
            let $self = $(this);
            $(`#${$self.attr('id')}-disp`).text(DOMPurify.sanitize($self.val(), {ALLOWED_TAGS: []}));
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
