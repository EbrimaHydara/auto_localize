import ScrollHint from 'scroll-hint';
import { tab } from "../common/component/tab";

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

let beforePageYOffset;
function fixedBtn(trigger, elm) {
  let scrollY = window.pageYOffset;

  if( !elm || !trigger ) return;

  const triggerRect = trigger.getBoundingClientRect();
  const triggerY = scrollY + triggerRect.top;

  if ( scrollY > triggerY ) {
    elm.setAttribute('aria-expanded', 'true');
  } else {
    elm.setAttribute('aria-expanded', 'false');
  }
}


function fixedBtnInit() {
  const bottomTrigger = document.getElementById('js-trigger');
  const bottomBtn = document.getElementById('js-fixed-btn');
  const navTrigger = document.getElementById('js-trigger-nav');
  const navBtn = document.getElementById('js-fixed-nav');

  fixedBtn(bottomTrigger, bottomBtn);
  // fixedBtn(navTrigger, navBtn);

  if( beforePageYOffset > window.pageYOffset-1 ) {
    // fixedBtn(navTrigger, navBtn);
  } else {
    // navBtn.setAttribute('aria-expanded', 'false');
  }
  beforePageYOffset = window.pageYOffset;
}
window.addEventListener('scroll', fixedBtnInit);



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

$(function () {
    tab();
});
