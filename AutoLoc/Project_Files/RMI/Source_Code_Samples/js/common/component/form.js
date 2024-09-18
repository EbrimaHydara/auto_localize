import 'air-datepicker';
import '../../library/datepicker.ja';

export const form = () => {

    // datepicker
    const datepickerSet = {
        classes: 'support-substitute-Form_Datepicker',
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
    };

    $('.js-Datepicker').datepicker(datepickerSet);
    $('.js-Datepicker_Btn').on('click', () => {
        $('.js-Datepicker').show();
    });

};
