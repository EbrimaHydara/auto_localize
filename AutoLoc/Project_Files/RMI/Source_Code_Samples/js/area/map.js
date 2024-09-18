import { themeNum } from '../common/theme.js';

const map = document.getElementById("map");
const exit = document.getElementById("exit");
const mapLocButton = document.getElementById("map-loc-button");
const mapLocDummy = document.getElementById("map-loc-dummy");
const mapMenu = document.getElementById("js-map-menu");
const mapMenuButton = document.getElementById("js-map-menu-button");
const areaTarge = [...document.querySelectorAll('.js-area-target')];
const toggleMapCheckbox = document.getElementById('toggle-map-checkbox');
const currentMap = sessionStorage.getItem('currentMap');
const btnActiveClass = 'area-Fullmap_Menu-button-active';
const menuActiveClass = 'area-Fullmap_Menu-active';
const body = document.body;
const mapLocbutton = document.getElementById('map-loc-button');
const mapMenuLabel = document.getElementById('js-map-menu-label');

const calcMapsize =  () => {
    const mediaQuery = window.matchMedia(`(max-width: ${themeNum.max.m}px)`).matches;
    const isSp = mediaQuery;

    if (isSp && mapMenu) {
        const legendHeight = mapMenu.clientHeight;
        map.style.bottom = legendHeight + "px";
        exit.style.bottom = (legendHeight + 16) + "px";
        mapLocButton.style.bottom = (legendHeight + 16) + "px";
        body.style.overflow = 'hidden'

        mapMenuButton.addEventListener('click', e => {
            e.currentTarget.classList.toggle(btnActiveClass);
            mapMenu.classList.toggle(menuActiveClass);
            if(mapMenu.className.includes(menuActiveClass)) {
                mapMenuLabel.textContent = 'マップメニューを閉じる';
            } else {
                mapMenuLabel.textContent = 'マップメニューを表示';
            }
        });
        if( mapLocDummy) mapLocDummy.addEventListener('click', () => mapLocButton.click());

    } else {
        map.style.bottom = '52px';
        exit.style.bottom = 'initial';
        mapLocButton.style.bottom = 'initial';
        body.style.overflow = 'visible';
    }
}

const display_map = (current) => {
    exit.setAttribute('href', `/area/?map=conversion-current${current}&l-id=area_map_full_area`);
    const currentBtn = (current === '5g') ? 'area-current5g-button' : 'area-current-button';
    const targetButton = document.getElementById(currentBtn);
    const targetInput = targetButton.querySelector('input');
    targetButton.click();
    targetInput.checked = true;
    areaTarge.forEach(e => {
        if(e.dataset.target === `area-${current}`) {
            e.setAttribute('aria-hidden', 'false');
        } else {
            e.setAttribute('aria-hidden', 'true');
        }
    });
}

toggleMapCheckbox.addEventListener('change', e => {
    const checked = e.currentTarget.checked;
    const current = (checked) ? '4g' : '5g';
    display_map(current);
});


const pageName = window.location.pathname.split("/").pop();

if (pageName === 'map_partner.html') {
    display_map('partner');
} else {
    if (currentMap === 'area-current-button') {
        toggleMapCheckbox.checked = true;
        display_map('4g');
    } else {
        display_map('5g');
    }
}

if( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(
        () => {
            mapLocbutton.setAttribute('aria-hidden', 'false');
            if (mapLocDummy) mapLocDummy.setAttribute('aria-hidden', 'false');
        },
        () => {
            mapLocbutton.setAttribute('aria-hidden', 'true');
            if (mapLocDummy) mapLocDummy.setAttribute('aria-hidden', 'true');
        }
    );
} else {
    mapLocbutton.setAttribute('aria-hidden', 'true');
    mapLocDummy.setAttribute('aria-hidden', 'true');
}

calcMapsize();
window.addEventListener("resize", calcMapsize);

const areaSearchBtn = document.getElementsByClassName('js-area-Search_Btn')[0];
const pacInput = document.getElementById('pac-input');
const isMobileDevice = () => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

areaSearchBtn.addEventListener('click', () => {
    const event = isMobileDevice() ? new KeyboardEvent('keydown', {key: 'Enter'}) : new KeyboardEvent('keydown', {keyCode: 13});
    pacInput.dispatchEvent(event);
});
