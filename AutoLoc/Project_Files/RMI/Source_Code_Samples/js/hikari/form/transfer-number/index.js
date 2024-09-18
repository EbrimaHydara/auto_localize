import DOMPurify from 'dompurify';

const $form = $('#js-hikari-transfer-number_Form');
const $tenyou = $('#tenyou');
const $jigyousha = $('#jigyousha');
const $serviceSelector = $('input[name="js-hikari-transfer-number_selector"]');
const $tenyouNo = $('#00N2u0000015cmM');
const $jigyoushaNo = $('#00N2u0000015cmH');
const $caf = $('#caf');
const $cafNo = $('#00N2u0000015hpa');
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};

console.log('test.');
$('#modal-confirm').modaal(modalConfig);

$serviceSelector.on('change', function() {
    clear();

    if ($(this).val() === 'tenyou') {
        $tenyou.attr('aria-hidden', false);
        $tenyouNo.attr('aria-required', true);
        $jigyousha.attr('aria-hidden', true);
        $jigyoushaNo.attr('aria-required', false);
        $jigyoushaNo.val('');
        $caf.attr('aria-hidden', true);
        $cafNo.attr('aria-required', false);
        $cafNo.val('');
    } else {
        $tenyou.attr('aria-hidden', true);
        $tenyouNo.attr('aria-required', false);
        $tenyouNo.val('');
        $jigyousha.attr('aria-hidden', false);
        $jigyoushaNo.attr('aria-required', true);
        $caf.attr('aria-hidden', true);
        $cafNo.attr('aria-required', false);
    }
});

$jigyoushaNo.on('input blur', function() {
    if ($(this).val().match(/T[0-9]{10}/)) {
        $caf.attr('aria-hidden', false);
        $cafNo.attr('aria-required', true);
    } else {
        $caf.attr('aria-hidden', true);
        $cafNo.attr('aria-required', false);
        $cafNo.val('');
    }
});

$('#js-hikari-transfer-number_Confirm').on('click', function() {
    clear();

    $('input[aria-required="true"]').each(function() {
        let $self = $(this);

        if ($self.val() === '') {
            $self.before(`<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error">正しく${$self.attr('data-label')}を入力してください。</p>`);
            $self.attr('aria-invalid', true);
        }
    });

    if ($tenyouNo.attr('aria-required') === 'true') {
        let tenyouNo = $tenyouNo.val();
        if (!tenyouNo.match(/E[0-9]{10}/) && !tenyouNo.match(/W[0-9]{10}/) || tenyouNo.length !== 11) {
            if ($('.js-error').length === 0) {
                $tenyouNo.before(`<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error">正しく${$tenyouNo.attr('data-label')}を入力してください。</p>`);
                $tenyouNo.attr('aria-invalid', true);
            }
        }
    }
    if ($jigyoushaNo.attr('aria-required') === 'true') {
        let jigyoushaNo = $jigyoushaNo.val();
        if (!jigyoushaNo.match(/F[0-9]{10}/) && !jigyoushaNo.match(/T[0-9]{10}/) || jigyoushaNo.length !== 11) {
            if ($('.js-error').length === 0) {
                $jigyoushaNo.before(`<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error">正しく${$jigyoushaNo.attr('data-label')}を入力してください。</p>`);
                $jigyoushaNo.attr('aria-invalid', true);
            }
        }
    }

    if ($('.js-error').length > 0) {
        $('html, body').animate({scrollTop: $('.js-error:first').offset().top}, 400, 'swing');
    } else {
        let str = '';

        if ($tenyouNo.attr('aria-required') === 'true') {
            str += `<div class="inquiry-Form_Item-area">
            <dt>転用承諾番号</dt>
            <dd><p class="u-Adjust_Txt-break">${DOMPurify.sanitize($tenyouNo.val(), {ALLOWED_TAGS: []})}</p></dd>
          </div>`;
        }
        if ($jigyoushaNo.attr('aria-required') === 'true') {
            str += `<div class="inquiry-Form_Item-area">
            <dt>事業者変更承諾番号</dt>
            <dd><p class="u-Adjust_Txt-break">${DOMPurify.sanitize($jigyoushaNo.val(), {ALLOWED_TAGS: []})}</p></dd>
          </div>`;
        }
        if ($cafNo.attr('aria-required') === 'true') {
            str += `<div class="inquiry-Form_Item-area">
            <dt>CAF番号</dt>
            <dd><p class="u-Adjust_Txt-break">${DOMPurify.sanitize($cafNo.val(), {ALLOWED_TAGS: []})}</p></dd>
          </div>`;
        }
        $('#js-hikari-transfer-number_Confirm-content').html(str);
        $('#modal-confirm').modaal('open');
    }

});

$('#js-hikari-transfer-number_Submit').on('click', function() {
    let params = window.location.search.substring(1);
    if (params) {
        params = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    }
    $('[name="00N2u0000015cmC"]').val(params['transfer-number']);

    $form.submit();
});

$('#js-hikari-transfer-number_Confirm-close').on('click', function() {
    $('#modal-confirm').modaal('close');
});

function clear() {
    let $errors = $('.js-error');
    let $input = $form.find('input[type="text"]');

    if ($errors) {
        $errors.remove();
    }
    if ($input) {
        $input.attr('aria-invalid', false);
    }
}
