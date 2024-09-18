import 'air-datepicker';
import '../library/datepicker.ja';

// datepicker
const $datepicker = $('.js-Datepicker');
let date_val = $datepicker.val();
$datepicker.datepicker({
    classes: 'inquiry-Form_Datepicker',
    language: 'ja',
    autoClose: true,
    navTitles: {
        days: '<i>yyyy</i>年 MM',
        months: 'yyyy 年',
        years: 'yyyy1 年 - yyyy2 年'
    },
    prevHtml: '<span class="c-Icon_Chevron-left"></span>',
    nextHtml: '<span class="c-Icon_Chevron-right"></span>',
    todayButton: new Date()
});
let dp = $datepicker.data('datepicker');
if (date_val === '') {
    dp.selectDate(new Date(1980,0,1));
}
else {
    dp.selectDate(new Date(date_val.replace('/', ',')));
}
$('.js-Datepicker_Btn').on('click', () => {
    dp.show();
});



