// Enable link button if all the checkboxes are checked

const $final_wrap = $('#final-check');
const $final_checkboxes = $final_wrap.find('.c-Form_Checkbox');
const $final_items = $('#final-check').find('.js-casa-checklist-item');
const $final_button = $('#final-button');
const $final_caption = $('#final-caption');

$(function() {
    const $checked_items = $final_items.filter(':checked');
    if ($checked_items.length != 0) {
        $checked_items.each(function(){
            $(this).prop('checked', false);
        });
    }
});

$final_checkboxes.click(function() {
    if ($final_items.not(':checked').length == 0) {
        $final_button.removeClass('area-casa-checklist-private-Form_Btn-grayout');
        $final_caption.attr('aria-hidden', 'true');
        $final_button.attr('aria-disabled', 'false');
    } else if (!$final_button.hasClass('area-casa-checklist-private-Form_Btn-grayout')) {
        $final_button.addClass('area-casa-checklist-private-Form_Btn-grayout');
        $final_caption.attr('aria-hidden', 'false');
        $final_button.attr('aria-disabled', 'true');
    }
});
