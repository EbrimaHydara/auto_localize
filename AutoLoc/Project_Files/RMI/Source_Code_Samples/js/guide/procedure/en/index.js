import SmoothScroll from "smooth-scroll";
const scrollToContent = () => {
  new SmoothScroll('.js-scroll-guide', {
    speed: 400,
  });
}

const step2Itema = Array.from(document.getElementsByClassName('procedure-en-Step1_Item'));
for(let item of step2Itema) {
  item.addEventListener('click', (e) => {
    const targetItem = e.currentTarget;
    const targetId = targetItem.getAttribute('aria-controls');
    const targetContent = document.getElementById(targetId);
    const activeItem = document.querySelector('[aria-selected="true"]');
    const activeContent = document.querySelector('.procedure-en-Step1_Content[aria-expanded="true"]');
    const isSameItemClick = targetItem === activeItem ? true : false;
    const accordionButtonArray = Array.from(activeContent.querySelectorAll('button.default-close'));
    const accordionContentArray = Array.from(activeContent.querySelectorAll('div.default-close'));

    if(isSameItemClick) {
      scrollToContent();
      return;
    } else {
      activeItem.setAttribute('aria-selected', false);
      activeContent.setAttribute('aria-expanded', false);
      targetItem.setAttribute('aria-selected', true);
      targetContent.setAttribute('aria-expanded', true);
      scrollToContent();

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
