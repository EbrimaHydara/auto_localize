const stepItem = Array.from(document.getElementsByClassName('js-step-item'));
for(let item of stepItem) {
  item.addEventListener('click', (e) => {
    const targetItem = e.currentTarget;
    const targetId = targetItem.getAttribute('aria-controls');
    const targetContent = document.getElementById(targetId);
    const activeItem = document.querySelector('.guide-Step_Item[aria-selected="true"]');
    const activeContent = document.querySelector('.guide-Step_Content[aria-expanded="true"]');
    const isSameItemClick = targetItem === activeItem ? true : false;
    const accordionButtonArray = Array.from(activeContent.querySelectorAll('button.js-default-close'));
    const accordionContentArray = Array.from(activeContent.querySelectorAll('div.js-default-close'));

    if(isSameItemClick) {
      return;
    } else {
      activeItem.setAttribute('aria-selected', false);
      activeContent.setAttribute('aria-expanded', false);
      targetItem.setAttribute('aria-selected', true);
      targetContent.setAttribute('aria-expanded', true);

      for(let button of accordionButtonArray) {
        button.setAttribute('aria-expanded', false);
      }
      for(let content of accordionContentArray) {
        content.setAttribute('aria-hidden', true);
        $(content).slideUp(0);
      }
    }
  });
}
