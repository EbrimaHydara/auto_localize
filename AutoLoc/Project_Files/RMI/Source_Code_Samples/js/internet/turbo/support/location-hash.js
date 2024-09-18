// If the url has a hash

$(function () {
    const hash = location.hash;

    if (hash) {
        const headerHeight = $('.js-fixed-header-wrap').height();
        const target = $(hash).offset().top - headerHeight;
        $('body,html').animate({ scrollTop: target }, 400, 'swing');
    }
});
