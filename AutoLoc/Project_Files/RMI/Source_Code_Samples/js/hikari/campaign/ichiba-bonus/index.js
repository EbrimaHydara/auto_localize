import ScrollHint from 'scroll-hint';

window.addEventListener('DOMContentLoaded', ()=> {
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});

function fixedBottomBtn() {
    let scrollY = window.pageYOffset;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn || !trigger ) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
}

window.addEventListener('scroll', fixedBottomBtn);

// gauge animation
// countup animation

import DOMPurify from 'dompurify';

const ep = 'https://pubdat.fusioncom.co.jp/dlspeed/';
// const ep = '/hikari/internet/speed/';
const dataTokyo = 'tokyo_speedtest.csv';

const animationDuration = 1000 * 5 / 6;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = (target, el) => {
    let frame = 0;
    const countTo = parseInt( target, 10 );
    const counter = setInterval( () => {
        frame++;
        const progress = easeOutQuad( frame / totalFrames );
        const currentCount = Math.round( countTo * progress );

        if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
            el.innerHTML = currentCount;
        }

        if ( frame === totalFrames ) {
            clearInterval( counter );
        }
    }, frameDuration );
};

const runAnimations = val => {
    const countupEls = document.querySelectorAll( '.countup' );
    countupEls.forEach( elem => animateCountUp(val, elem) );
};

let thisOffset = '';
let gaugeFlag = false;

(function($) {
    $(window).on('load', function() {
      thisOffset = $('#gauge-scroll').offset().top + $('#gauge-scroll').outerHeight() / 2 ;
    });

    //Tokyo
    $.ajax({
        cache: false,
        url: ep + dataTokyo
    }).done(function(data) {
        let res = data.split(/\r\n|\n/);
        res.shift();
        res.reverse();
        const result = setData('Tokyo', res);
        const $gauge_gradation = $('.hikari-campaign-ichiba-bonus-Gauge_Gauge-a');
        $(window).scroll(function () {
          if ($(window).scrollTop() + $(window).height() > thisOffset && gaugeFlag == false) {
            gaugeFlag = true;
            $gauge_gradation.addClass('hikari-campaign-ichiba-bonus-Gauge_Gauge-a-add');
            runAnimations(result);
          }
        });

    }).fail(function(jqXHR, textStatus, errorThrown){
        handleErr('Tokyo');
    });

    function setData(city, res) {
        const $avg = $(`#js-avg-${city}`);

        if ($avg[0]) {
            let rowsCount = 0;
            let avg = 0;

            for (const element of res) {
                let cols = element.split(',');
                let speed = Math.round(parseInt(DOMPurify.sanitize(cols[6]), 10) * 8 / 1000000 * 100) / 100;
                if (cols[0].length > 0 && cols[1].replace(/\s/g, '').length > 0 && cols.length > 1) {
                    avg += speed;
                    rowsCount++;
                }
                if (rowsCount == 10) {
                    break;
                }
            }

            return Math.round(avg / rowsCount *100) / 100;
        }

    }

    function handleErr(city) {

        const $dummy_speed = $(`#js-avg-${city} span`);
        const $msg = $(`#js-res-${city}-msg`);

        $dummy_speed.text('---');
        $msg.text('現在測定中です。しばらく経ってから再度ご確認ください。');
    }
})(jQuery);
