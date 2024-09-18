export const tab = ($target = null) => {
    let $triggers = null;

    if ($target === null) {
        $triggers = $('.js-Tab');
    }
    else {
        $triggers = $target.find('.js-Tab');
    }

    if ($triggers.length < 1) {
        return;
    }
    const parameter = location.search;

    $triggers.each(function() {
        const tab = $(this)[0];
        const items = tab.querySelectorAll('*[role="tab"]');
        const panels = tab.querySelectorAll('*[role="tabpanel"]');

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                let self = e.currentTarget;
                let target= document.getElementById(self.getAttribute('aria-controls'));

                items.forEach(item => {
                    item.setAttribute('aria-selected', false);
                });
                panels.forEach(panel => {
                    panel.setAttribute('aria-hidden', true);
                });
                self.setAttribute('aria-selected', true);
                target.setAttribute('aria-hidden', false);
            });
        });
    });

    if (parameter.length > 0) {

        if (parameter.indexOf('tab-list') > -1) {
            let target = null;
            let targetList = [];
            let parameterList = [];

            parameterList = parameter.split('&');

            for (let i = 0, len = parameterList.length; i < len; i++) {
                if (parameterList[i].indexOf('tab-list') > -1) {
                    targetList = parameterList[i].split('=')[1].split(',');
                    break;
                }
            }

            for (let i = 0, len = targetList.length; i < len; i++) {
                target = document.getElementById(targetList[i]);

                if (target) {
                    if (target.getAttribute('role') === 'tab') {
                        $(target).trigger('click');
                    }
                }
            }
        }
    }
};
