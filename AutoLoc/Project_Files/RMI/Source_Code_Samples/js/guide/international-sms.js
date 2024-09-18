import Vue from 'vue';
import InternationalSms from '../../vue/guide/InternationalSms.vue';

new Vue({
    render: h => h(InternationalSms)
}).$mount('#countryCode');

let intervalId = setInterval(function() {
    const accordionCountry0 = document.getElementById('accordion-country0');
    if (accordionCountry0 !== null) {

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
            { 'key': 'accodionid' },
        ];
        
        parameterList.forEach(value => {
            scrollList.filter(item => {
        
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


