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
  const navTrigger = document.getElementById('js-trigger-nav');
  const navBtn = document.getElementById('js-fixed-nav');

  if( beforePageYOffset > window.pageYOffset-1 ) {
    fixedBtn(navTrigger, navBtn);
  } else {
    navBtn.setAttribute('aria-expanded', 'false');
  }
  beforePageYOffset = window.pageYOffset;
}
window.addEventListener('scroll', fixedBtnInit);
