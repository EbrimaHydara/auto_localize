import Vue from 'vue';
import PriceDetail from "../../vue/product/smartphone/tradein/PriceDetail.vue";
import SmoothScroll from "smooth-scroll";

const locationPathName = location.pathname;
const deviceName = locationPathName.split('/')[3];

new Vue({
    render: h => h(PriceDetail, {
        props: {
            currentDirectory: deviceName
        }
    })
}).$mount('#tradein-plice-detail');

const scroll = () => {
    new SmoothScroll('.js-scroll-b', {
        speed: 100,
        header: '[data-fixed-header]',
    });
};
scroll();

const headerNavTrigger = document.getElementById('js-accordion-header-nav-trigger');
const headerNavWrapper = document.getElementById('js-header-nav-wrapper');
const originalOffsetTop = headerNavWrapper.offsetTop;
const headerNavDummy = document.getElementById('js-header-nav-dummy');
const productDetailLayout_Navbtn = document.getElementsByClassName('product-detail-Layout_Nav-btn')[0];

const headerPos = () => {
    const scrollY = window.scrollY;
    const headerHeight = headerNavWrapper.clientHeight;
    if (scrollY < originalOffsetTop ) {
        headerNavWrapper.style.position = 'static';
        headerNavDummy.style.paddingTop = '0';
    } else {
        headerNavWrapper.style.position = 'fixed';
        headerNavDummy.style.paddingTop = headerHeight + 'px';
    }
}

window.onload = () => {
    headerPos();
    console.log(productDetailLayout_Navbtn.getBoundingClientRect().top);
};

window.addEventListener('scroll', () => headerPos());

headerNavWrapper.style.position = 'static';
headerNavDummy.style.paddingTop = '0';

headerNavTrigger.addEventListener('click', () => {
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
        ).onfinish = () => {
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
});
