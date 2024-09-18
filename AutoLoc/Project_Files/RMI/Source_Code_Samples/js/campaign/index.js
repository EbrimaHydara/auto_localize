$(function() {
    const ua = navigator.userAgent;
    let isIos = false;
    if (ua.indexOf('iPhone') > 0) {
        isIos = true;
    }
    else if  (ua.indexOf('iPod') > 0) {
        isIos = true;
    }
    else if  (ua.indexOf('iPad') > 0) {
        isIos = true;
    }
    if (isIos) {
        $('.js-isIos').each(function(){
            const $this = $(this);
            const type = $this.attr('data-type');

            if (type === 'hidden') {
              $this.attr('aria-hidden', 'true').hide();
            }
        });
    }
});