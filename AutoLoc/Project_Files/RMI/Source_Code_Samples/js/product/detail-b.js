import SmoothScroll from "smooth-scroll";

const scroll = () => {
    new SmoothScroll('.js-scroll-b', {
        speed: 100,
        header: '[data-fixed-header]',
    });
};

scroll();

const headerNavTrigger = document.getElementById('js-accordion-header-nav-trigger');
const headerNavWrapper = document.getElementById('js-header-nav-wrapper');
const headerNav = document.getElementById('js-header-nav');
const originalOffsetTop = headerNavWrapper.offsetTop;
const headerNavDummy = document.getElementById('js-header-nav-dummy');
const productDetailLayoutNavProduct = document.getElementById('js-product-detail-Layout_Nav-product');
const productDetailLayoutNavTrigger = document.getElementsByClassName('product-detail-Layout_Nav-trigger')[0];
const productDetailLayout_Navbtn = document.getElementsByClassName('product-detail-Layout_Nav-btn')[0];

const headerPos = () => {
    const scrollY = window.pageYOffset;
    if (scrollY < originalOffsetTop ) {
        headerNavWrapper.style.position = 'static';
        headerNavDummy.style.paddingTop = '0';
    } else {
        headerNavWrapper.style.position = 'fixed';
        headerNavDummy.style.paddingTop = '64px';
    }
}

onload = (event) => {
    headerPos();
    // productDetailLayoutNavTrigger.style.top = `${headerNav.clientHeight / 2 + headerNavTrigger.clientHeight / 2 + productDetailLayoutNavProduct.clientHeight}px`;
    //productDetailLayoutNavTrigger.style.top = `${headerNavTrigger.clientHeight / 2 + productDetailLayoutNavProduct.clientHeight / 2 - 16}px`;
    console.log(productDetailLayout_Navbtn.getBoundingClientRect().top);
    //productDetailLayoutNavTrigger.style.top = `${productDetailLayout_Navbtn.getBoundingClientRect().top / 2 + productDetailLayoutNavProduct.clientHeight / 2 }px`;
};

window.addEventListener('scroll', function() {
    headerPos();
});

headerNavWrapper.style.position = 'static';
headerNavDummy.style.paddingTop = '0';

headerNavTrigger.addEventListener('click', function() {
  const headerNavItems = document.getElementById('js-accordion-content-header-nav-items');
  const animationDuration = 150;
  if (window.getComputedStyle(headerNavItems).display === 'none') {
    headerNavItems.style.display = 'block';
    headerNavItems.style.height = '0';
    headerNavItems.style.overflow = 'hidden';
    const height = headerNavItems.scrollHeight;
    headerNavItems.style.height = '0';
    headerNavItems.style.overflow = 'hidden';
    headerNavItems.animate(
      [
        { height: '0' },
        { height: height + 'px' }
      ],
      {
        duration: animationDuration,
        fill: 'forwards'
      }
    );
    headerNavTrigger.animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' }
      ],
      {
        duration: animationDuration,
        fill: 'forwards'
      }
    );
  } else {
    const height = headerNavItems.scrollHeight;
    headerNavItems.animate(
      [
        { height: height + 'px' },
        { height: '0' }
      ],
      {
        duration: animationDuration,
        fill: 'forwards'
      }
    ).onfinish = function() {
      headerNavItems.style.display = 'none';
    };
    headerNavTrigger.animate(
      [
        { transform: 'rotate(180deg)' },
        { transform: 'rotate(0deg)' }
      ],
      {
        duration: animationDuration,
        fill: 'forwards'
      }
    )
  }
})

const addIdPriceTarget = document.getElementsByClassName('product-detail-Theme_Inner')[0];
addIdPriceTarget.setAttribute('id', 'price');
