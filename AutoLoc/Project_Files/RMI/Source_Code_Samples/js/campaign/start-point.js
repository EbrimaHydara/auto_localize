const openAccordionWhenLanding = () => {
  const hash = location.hash;
  // 過去のキャンペーンが増えたら、checkCampaignIdに追加していく。
  // e.g./^#campaign-rule-old01$|^#campaign-mail$/
  const checkCampaignId = /^#campaign-rule-old01$/;
  if(hash.search(checkCampaignId) !== -1) {
    const accordionTrigger = document.getElementById('accordion-001');
    const accordionPanel = document.getElementById('accordion-content-001');

    accordionTrigger.setAttribute('aria-expanded', true);
    accordionPanel.setAttribute('aria-hidden', false);
  }
};
openAccordionWhenLanding();
