/**
 * 注意事項への相互リンク
 */
(() => {
  const links = document.querySelectorAll('.js-link-notes');
  const backLink = document.getElementById('js-back');

  const setLinkInBackLink = (event) => {
      const targetId = event.target.getAttribute('id');
      backLink && backLink.setAttribute('href', `#${targetId}-top`);
  };

  if (links) {
      for (const link of links) {
          link.addEventListener('click', setLinkInBackLink);
      }
  }
})();

/**
* ページ内リンクと同時にアコーディオンを開く
*/
(() => {
  const triggers = document.querySelectorAll('.js-accordion-opener');

  const openAccordion = (id) => {
    const target = document.getElementById(id);
    target && target.click();
  };

  if (triggers) {
    for (const trigger of triggers) {
      const id = trigger.getAttribute('href').slice(1);
      trigger.addEventListener('click', () => openAccordion(id));
    }
  }
})();
