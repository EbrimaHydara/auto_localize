export const accordion = ($target = null) => {
    let $triggers = null;

    if ($target === null) {
        $triggers = $('.js-Accordion_Trigger');
    }
    else {
        $triggers = $target.find('.js-Accordion_Trigger');
    }

    if ($triggers.length < 1) {
        return;
    }

    $triggers.each(function() {
        let $self = $(this);
        let $panel = $('#' + $self.attr('aria-controls'));
        let opt = {
            duration: 0,
            queue: false
        };
        let effect = $self.data('effect');

        if ($panel[0]) {
            if ($self.attr('aria-expanded') === 'false') {
                $panel.hide();
            }

            $self.on('click', function() {

                if (effect === false) {
                    opt.duration = 0;
                }
                else {
                    opt.duration = 200;
                }

                if ($self.attr('aria-expanded') === 'true') {
                    $self.attr('aria-expanded', 'false');
                    $panel.attr('aria-hidden', 'true');
                    $panel.stop().slideUp(opt);
                } else {
                    $self.attr('aria-expanded', 'true');
                    $panel.attr('aria-hidden', 'false');
                    $panel.stop().slideDown(opt);
                }
            });
        }
    });
};
