import Vue from 'vue';
import * as Filters from '../../../vue/hikari/search/filters';
import SupportSearchB from '../../../vue/hikari/search/SupportSearch.vue';
import SupportFaq from '../../../vue/hikari/search/SupportFaq.vue';
import 'whatwg-fetch';
import 'core-js/modules/es.promise';

Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key]);
});

new Vue({
    render: h => h(SupportSearchB, { props: { isRegistered: true } })
}).$mount('#support-search-b-2');

new Vue({
    render: h => h(SupportSearchB, { props: { isRegistered: false } })
}).$mount('#support-search-b');

new Vue({
    render: h => h(SupportFaq, {
        props: {
            userType: 'member',
            namespace: 'support',
        }
    })
}).$mount('#js-faq-list-member');

new Vue({
    render: h => h(SupportFaq, {
        props: {
            userType: 'preMember',
            namespace: 'support',
        }
    })
}).$mount('#js-faq-list-pre-member');

// customize accordion

$(function(){
    const $triggers = $('.js-hikari-support-top-Accordion_Trigger');
    let scrWidth = window.innerWidth;
    console.log(scrWidth);

    $triggers.each(function() {
        let $self = $(this);
        let $panel = $('#' + $self.attr('aria-controls'));
        let opt = {
            duration: 0,
            queue: false
        };
        let effect = $self.data('effect');

        if ($panel[0]) {
            if (scrWidth >= 835) {
                $self.attr('aria-expanded', 'true');
                $panel.attr('aria-hidden', 'false');
            }

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
    $(window).on('resize', function() {
        let prevWidth = scrWidth;
        scrWidth = window.innerWidth;
        console.log('resized: ', scrWidth);
        $triggers.each(function() {
            let $self = $(this);
            let $panel = $('#' + $self.attr('aria-controls'));
            if ($panel[0]) {
                if (prevWidth >= 835 && scrWidth < 835) {
                    $self.attr('aria-expanded', 'false');
                    $panel.attr('aria-hidden', 'true');
                    if ($self.attr('aria-expanded') === 'false') {
                        $panel.hide();
                    }
                }
                if (prevWidth < 835 && scrWidth >= 835) {
                    $self.attr('aria-expanded', 'true');
                    $panel.attr('aria-hidden', 'false');
                    if ($self.attr('aria-expanded') === 'true') {
                        $panel.show();
                    }
                }
            }
        });
    });
});

// If the url has a hash

$(function() {
    const hash = location.hash;
    let scrWidth = window.innerWidth;
    if( hash && hash.indexOf('category-') != -1 ) {
        const target = $(hash).offset().top;
        $('body,html').animate({scrollTop: target}, 400, 'swing');
        if (scrWidth < 835) {
            $(hash).find('.js-hikari-support-top-Accordion_Trigger').attr('aria-expanded', 'true');
            $(hash).find('.js-hikari-support-top-Accordion_Panel').css('display','block').attr('aria-hidden', 'false');
        }
    }
});


$(function() {
    $.ajax({
        url: '/api/top_faq/',
        // url: '/assets/json/support-faq_dummy.json',
        dataType: 'json',
    })
    .done(function(data, status, xhr){
        let html = "";
        const len = data.list.length;
        const $readmore = $('#js-readmore-trigger');
        const $faqList = $('#faqList');
        let $faqLists = null;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                html += '<li><a href="' + data.list[i].link + '?l-id=support_top_faq">' + data.list[i].question + '<span class="c-Icon_Chevron-right"></span></a></li>';
            }
            $faqList.html(html);

            if (len > 5) {
                let count = 4;
                $readmore.attr('aria-hidden', 'false');
                $faqLists = $faqList.find('li');
                $faqLists.filter(":gt(4)").attr('aria-hidden', 'true');

                $readmore.on('click', function(){
                    count += 5;
                    $faqLists.filter(":lt(" + count + ")").attr('aria-hidden', 'false');
                    if (count > len - 1) {
                        $readmore.attr('aria-hidden', 'true');
                    }
                });
            }
        }
        else {
            $('#faq').hide();
        }
    })
    .fail(err => {
        console.log(err);
    });
});

// tab cookie

let date;
var deadline = 30;
date = new Date();
date.setTime(date.getTime() + deadline*24*60*60*1000);
const cookies = document.cookie;
const cookiesArray = cookies.split('; ');
const tabMenu1 = document.getElementById('tab-menu1');
const tabMenu2 = document.getElementById('tab-menu2');
let elSprit;

window.onload = function() {
    if (navigator.cookieEnabled){

        cookiesArray.forEach(el => {
            elSprit = el.split('=');
            if( elSprit[0] == 'expires' ) {
                if( new Date(elSprit[1]).getTime() > new Date().getTime() ) {
                    cookiesArray.forEach(el => {
                        elSprit = el.split('=');
                        if( elSprit[0] == 'selectTab' ) {
                            if( elSprit[1] == 1 ) {
                                document.getElementById('tab-menu1').setAttribute('aria-selected', true);
                                document.getElementById('tab-content1').setAttribute('aria-hidden', false) ;
                                document.getElementById('tab-menu2').setAttribute('aria-selected', false);
                                document.getElementById('tab-content2').setAttribute('aria-hidden', true);
                            } else {
                                document.getElementById('tab-menu1').setAttribute('aria-selected', false);
                                document.getElementById('tab-content1').setAttribute('aria-hidden', true);
                                document.getElementById('tab-menu2').setAttribute('aria-selected', true);
                                document.getElementById('tab-content2').setAttribute('aria-hidden', false);
                            }

                        }
                    });
                }
            }

        });

        document.cookie="expires=" + date;

        tabMenu1.onclick = function() {
            document.cookie="selectTab=1";
        }
        tabMenu2.onclick = function() {
            document.cookie="selectTab=2";
        }

    }
}

