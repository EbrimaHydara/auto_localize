import Vue from 'vue';
import InternationalCall from '../../vue/guide/InternationalCall.vue';
import InternationalCallLink from '../../vue/guide/InternationalCall-link.vue';
import InternationalCallOs from '../../vue/guide/InternationalCall-os.vue';

new Vue({
    render: h => h(InternationalCall)
}).$mount('#countryCode');

new Vue({
    render: h => h(InternationalCallLink)
}).$mount('#countryCode_Link');

new Vue({
    render: h => h(InternationalCallOs)
}).$mount('#countryCode_OS');

$('.js-openTab').on('click', function(){
    $($(this).data('target-tab')).click();
});

$('.js-openAccordion').on('click', function(){
    let $this = $(this);
    let $target = $($this.data('target-accordion'));
    if ($target) {
        if ($target.attr('aria-expanded') === "false") {
            $target.click();
            setTimeout(function(){
                $('html, body').animate({scrollTop: $($this.attr('href')).offset().top}, 300);
            }, 300);
        }
    }
});

$(() => {
    const parameter = location.search;
    const parameterList = parameter.split('&');
    const selectBox = document.getElementById('js-tab-select');
    const scrollList = [
        { 'key': 'tab-list' },
        { 'key': 'accodionid' },
    ];

    const tabSort = () => {
        const tabPanel = document.getElementsByClassName('js-tab-panel');
        for(let i = 0; i < tabPanel.length; i++) {
            if(selectBox.value === '#tab-menu1') {
                tabPanel[i].style.display = 'block';
            } else if( selectBox.value == `#${tabPanel[i].getAttribute('aria-labelledby')}` ) {
                tabPanel[i].style.display = 'block';
            } else {
                tabPanel[i].style.display = 'none';
            }
        }
    };

    parameterList.forEach(value => {
        scrollList.filter(item => {
            if(value.includes(item.key) && item.key === 'tab-list') {
                const targetList = value.split('=')[1].split(',');
                document.getElementById(`${targetList[0]}`).selected = true;
                tabSort();
                return;
            }

            if(value.includes(item.key) && item.key === 'accodionid') {
                const targetList = value.split('=')[1].split(',');
                const targetId = $(`#${targetList[0]}`);
                if(!targetId.length) return;
                $('html,body').animate({ scrollTop: targetId.offset().top }, 'slow');
                const opt = { duration: 0, queue: false };
                const content = targetId.attr('aria-controls');
                const $panel = $(`#${content}`);
                targetId.attr('aria-expanded', 'true');
                $panel.attr('aria-hidden', 'false');
                $panel.stop().slideDown(opt);
                return;
            }
        });
    });

    selectBox.onchange = () => {
        tabSort();
    };
});

/**
 * ランディング時にアコーディオンを開く (/?accordion=open#accordion-1)
 */
(() => {
    const locationoParams = location.search.substring(1).split('&');
    if (locationoParams[0] !== '') {
        const locationoAccordionParam = locationoParams.filter(param => /accordion/.test(param))[0];
        const locationHash = location.hash;
        const targetElem = document.querySelector(locationHash);

        if (
            locationoAccordionParam === 'accordion=open'
            && targetElem
            && targetElem.classList.contains('js-Accordion_Trigger')
        ) {
            if (targetElem.getAttribute('aria-expanded') === 'false') {
                targetElem.setAttribute('aria-expanded', 'true');
            }
        }
    }
})();
