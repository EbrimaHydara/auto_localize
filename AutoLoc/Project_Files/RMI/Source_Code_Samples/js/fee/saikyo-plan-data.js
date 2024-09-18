const joinScidParam = (scidParam) => {
  const applyLink = document.getElementById('js-apply-button').children[0];
  if (applyLink) {
    applyLink.href += `?scid=${scidParam}`
  }
}

const searchParamsInit= () => {
  const locationSearch = new URLSearchParams(location.search);
  if (locationSearch.has('scid')) {
    const scidParam = locationSearch.get('scid');
    joinScidParam(scidParam)
  }
}

searchParamsInit();

let beforePageYOffset;

const fixedBtn = (trigger, elm) => {
  let scrollY = window.pageYOffset;

  if (!elm || !trigger) return;

  const triggerRect = trigger.getBoundingClientRect();
  const triggerY = scrollY + triggerRect.top;

  if (scrollY > triggerY) {
    elm.setAttribute('aria-expanded', 'true');
  } else {
    elm.setAttribute('aria-expanded', 'false');
  }
}

const fixedBtnInit = () => {
  const bottomTrigger = document.getElementById('js-trigger');
  const bottomBtn = document.getElementById('js-fixed-btn');
  fixedBtn(bottomTrigger, bottomBtn);
  beforePageYOffset = window.pageYOffset;
}
window.addEventListener('scroll', fixedBtnInit);
