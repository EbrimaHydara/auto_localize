import Vue from 'vue';
import InternationalSmsLink from '../../vue/guide/InternationalSms-link.vue';
import InternationalSmsOs from '../../vue/guide/InternationalSms-os.vue';

new Vue({
    render: h => h(InternationalSmsLink)
}).$mount('#countryCode_Link');

new Vue({
    render: h => h(InternationalSmsOs)
}).$mount('#countryCode_OS');

let osElementExists = false;
let linkElementExists = false;

let intervalId = setInterval(function() {
    osElementExists = Boolean(document.getElementById('accordion-country-os0'));
    linkElementExists = Boolean(document.getElementById('accordion-country-link0'));

    if (osElementExists && linkElementExists) {

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
        
        const parameter = location.search;
        const parameterList = parameter.split('&');
        const scrollList = [
            { 'key': 'tab-list' },
            { 'key': 'accodionid' },
        ];
        
        parameterList.forEach(value => {
            scrollList.filter(item => {
                if(value.includes(item.key) && item.key === 'tab-list') {
                    const targetList = value.split('=')[1].split(',');
                    document.getElementById(`${targetList[0]}`).selected = true;
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

        clearInterval(intervalId);
    }
}, 1000);
