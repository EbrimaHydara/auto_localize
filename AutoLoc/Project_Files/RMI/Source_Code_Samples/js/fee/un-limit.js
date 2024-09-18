import ScrollHint from 'scroll-hint';

const navHeight = document.querySelector('.fee-Description').clientHeight;
let param;
if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
  param = {
    speed: 100,
    offset: navHeight - 404
  };
} else {
  param = {
    speed: 100,
    offset: navHeight - 230
  };
}

$(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

window.addEventListener('DOMContentLoaded', ()=> {
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});
