const $dayList = $('#js-hikari-call-time_List');
const $weekday = $dayList.find('.js-hikari-call-time_Weekday');
const $holiday = $dayList.find('.js-hikari-call-time_Holiday');
const modalConfig = {
    background: '#000033',
    custom_class: 'c-Modal',
    overlay_opacity: 0.64,
    content_source: '#modal-confirm'
};

$('#modal-confirm').modaal(modalConfig);

$('#js-hikari-call-time_Confirm').on('click', function() {
    clear();

    let $checkedWeekday = $weekday.filter(':checked');
    let $checkedHoliday = $holiday.filter(':checked');

    if ($checkedWeekday.length + $checkedHoliday.length < 2) {
        $weekday.attr('aria-invalid', true);
        $holiday.attr('aria-invalid', true);
        $dayList.before('<p class="c-Form_Txt-error u-Adjust_Mb-16 js-error">2つ以上選択してください</p>');
    } else {
        $('.js-error').remove(); // エラーメッセージを削除

        let str = '';

        str += `<div class="hikari-call-time-Form_Confirm">
        <dt>電話希望時間帯</dt>
        <dd style="padding-bottom:0">
        <dl>`;

        if ($checkedWeekday.length !== 0) {
            str += '<dt class="c-Txt_Emp u-Adjust_Mb-8">平日</dt><dd>';

            $checkedWeekday.each(function() {
                str += `<p class="u-Adjust_Mt-8 u-Adjust_Mr-24 u-Adjust_Pb-24">${$(this).attr('data-time')}</p>` ;
            });
            str += '</dd>';
        }
        if ($checkedHoliday.length !== 0) {
            str += '<dt class="c-Txt_Emp u-Adjust_Mb-8">土日祝日</dt><dd>';

            $checkedHoliday.each(function() {
                str += `<p class="u-Adjust_Mt-8 u-Adjust_Mr-24 u-Adjust_Pb-24">${$(this).attr('data-time')}</p>` ;
            });
            str += '</dd>';
        }

        str += `</dl>
        </dd>
        </div>`;

        $('#js-hikari-call-time_Confirm-content').html(str);
        $('#modal-confirm').modaal('open');
    }

    $('html, body').animate({scrollTop: $('.js-error:first').offset().top}, 400, 'swing'); // エラーメッセージの位置にスクロール
});


$('#js-hikari-call-time_Submit').on('click', function() {
    let params = window.location.search.substring(1);

    if (params) {
        params = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    }
    $('[name="00N2u0000015cmC"]').val(params['call-time']);

    $('#js-hikari-call-time_Form').submit();
});

$('#js-hikari-call-time_Confirm-close').on('click', function() {
    $('#modal-confirm').modaal('close');
});

$weekday.on('change', function() {
    $weekday.attr('aria-invalid', false);
    $holiday.attr('aria-invalid', false);
});

$holiday.on('change', function() {
    $weekday.attr('aria-invalid', false);
    $holiday.attr('aria-invalid', false);
});

function clear() {
    let $errors = $('.js-error');

    if ($errors) {
        $errors.remove();
    }
    $weekday.attr('aria-invalid', false);
    $holiday.attr('aria-invalid', false);
}
