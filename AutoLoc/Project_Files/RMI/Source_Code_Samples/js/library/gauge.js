// gauge animation & countup animation
let ep;
const url = window.location.hostname;
if(url === 'network.mobile.rakuten.co.jp') {
    ep = 'https://pubdat.fusioncom.co.jp/dlspeed/';
} else {
    ep = '/hikari/about/measurement/';
}

const dataTokyo = 'tokyo_speedtest.csv';

const animationDuration = 1000 * 5 / 6;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = function(t) { return t * ( 2 - t ); };

const animateCountUp = function(target, el) {
    let frame = 0;
    const countTo = parseInt( target, 10 );
    const counter = setInterval( function() {
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

const runAnimations = function(val) {
    const countupEls = document.querySelectorAll( '.countup' );
    countupEls.forEach( function(elem) { return animateCountUp(val, elem); } );
};

let thisOffset = '';
let gaugeFlag = false;

(function($) {
    $(window).on('load', function() {
      thisOffset = $('#hikari-gauge-scroll').offset().top + $('#hikari-gauge-scroll').outerHeight() / 2 ;
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
        const $gauge_gradation = $('.i-hikari-Gauge_Back');
        $(window).scroll(function () {
          if ($(window).scrollTop() + $(window).height() > thisOffset && gaugeFlag == false) {
            gaugeFlag = true;
            const flgB = document.getElementsByClassName('i-hikari-Gauge_Back-b');
            if( flgB == 1 ) {
                $gauge_gradation.addClass('i-hikari-Gauge_Back-add-b');
                runAnimations(result);
            } else {
                $gauge_gradation.addClass('i-hikari-Gauge_Back-add');
                runAnimations(result);
            }
          }
        });

    }).fail(function(jqXHR, textStatus, errorThrown){
        handleErr('Tokyo');
    });

    function setData(city, res) {
        const idNameCity = '#js-avg-' + city;
        const $avg = $(idNameCity);

        if ($avg[0]) {
            let rowsCount = 0;
            let avg = 0;

            for (let i = 0; i < res.length; i++) {
                let element = res[i];
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
        const elemName = '#js-avg-' + city + ' span';
        const $dummy_speed = $(elemName);
        const idNameMsg = '#js-res-' + city + '-msg';
        const $msg = $(idNameMsg);

        $dummy_speed.text('---');
        $msg.text('現在測定中です。しばらく経ってから再度ご確認ください。');
    }
})(jQuery);
