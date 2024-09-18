$(function() {

  $('.js-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    // fade: true,
    speed: 250,
    // cssEase: 'linear',
    asNavFor: '.js-thumbnail'
  });
  $('.js-thumbnail').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: false,
    asNavFor: '.js-main'
  });

  const smallScreen = $('.js-sscreen').length;
  if(smallScreen > 0) {
    setTimeout(function(){
      const target = 1;
      $('html,body').animate({scrollTop: target}, 'fast');
    }, 1);
  }

  const urlParam = location.search.substring(1);
  if(urlParam) {
    const param = urlParam.split('&');
    let paramArray = [];
    for (let i = 0; i < param.length; i++) {
      const paramItem = param[i].split('=');
      paramArray[paramItem[0]] = paramItem[1];
    }
    if(paramArray.simulation !== 'shop') {
      setTimeout(function(){
        adjust();
      }, 100);
    }
  } else {
    setTimeout(function(){
      adjust();
    }, 100);
  }

  function adjust() {
    const wHeight = $(window).height();
    const secH = $('.js-section').outerHeight();
    const gapH = secH - wHeight;
    const deviceH = $('.js-main').outerHeight();
    const $slideH = $('.product-display-Hero_Main');
    const noteHero = $('.product-display-Nonadjust').length;
    const arrowIcon = $('.product-display-Arrow').length;
    const $arrowSec = $('.product-display-Hero_Arrow');
    if (arrowIcon > 0) {
      if(noteHero > 0) {
        $arrowSec.hide();
      } else {
        if (gapH > 0) {
          $('.js-section').css({
            'padding-top': 64 - (gapH/4),
            'padding-bottom': 32 - (gapH/4)
          });
          $slideH.css('margin-top', 64 - (gapH/2));
        } else {
          const gapHs = -(gapH) + 32;
          $('.js-section').css('padding-bottom', gapHs);
        }
      }
    } else {
      if (gapH <= 0) {
        $('.js-main').css({'width': deviceH - gapH + 11});
      } else {
        if (noteHero == 0) {
          const gapHs = gapH - 44;
          $('.js-section').css('padding', '16px 0');
          $slideH.css('padding-bottom', '12px');
          $('.js-main').css({'width': deviceH - gapHs + 11});
        }
      }
    }
  }

});


