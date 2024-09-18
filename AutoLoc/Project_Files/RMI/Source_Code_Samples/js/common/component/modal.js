require('Modaal');

export const modal = () => {
    const $modals = $('.js-Modal');
    const $triggerClose = $('.js-Modal_Close');
    const modalConfig = {
        background: '#4D4D4D',
        custom_class: 'c-Modal',
        overlay_opacity: 0.5
    };
    if ($modals.length > 0) {
        $modals.modaal(modalConfig);
    }
    $triggerClose.on('click', function() {
        $modals.modaal('close');
    });
};
