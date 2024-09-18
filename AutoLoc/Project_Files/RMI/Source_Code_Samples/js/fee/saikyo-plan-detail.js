const openAccordionWhenLanding = () => {
  const hash = location.hash;
  // 過去のキャンペーンが増えたら、checkCampaignIdに追加していく。
  // e.g./^#campaign-rule$|^#campaign-mail$/
  const checkCampaignId = /^#campaign-rule$|^#campaign-rule01$|^#campaign-rule-current$/;
  if(hash.search(checkCampaignId) !== -1) {
    const accordionTrigger = document.getElementById('accordion-1');
    const accordionPanel = document.getElementById('accordion-content-1');

    accordionTrigger.setAttribute('aria-expanded', true);
    accordionPanel.setAttribute('aria-hidden', false);
  }
};
openAccordionWhenLanding();

let beforePageYOffset;

function fixedBtn(trigger, elm) {
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

function fixedBtnInit() {
  const bottomTrigger = document.getElementById('js-trigger');
  const bottomBtn = document.getElementById('js-fixed-btn');
  fixedBtn(bottomTrigger, bottomBtn);
  beforePageYOffset = window.pageYOffset;
}
window.addEventListener('scroll', fixedBtnInit);
