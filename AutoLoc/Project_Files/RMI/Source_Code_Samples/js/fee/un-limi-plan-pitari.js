import ScrollHint from 'scroll-hint';

// PopUp
const popupContainer = document.getElementById('js-popup-container');
const popupOperator = document.getElementById('js-popup-operator');
const popupClose = document.getElementById('js-popup-close');

function targetId () {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const targetPc = document.getElementById('js-trigger-place-pc');
    const targetSp = document.getElementById('js-trigger-place-sp');
    return (mediaQuery.matches) ? targetSp : targetPc;
}

function checkFirstVisit() {
    if( localStorage.getItem('fee_plan_session') === null ) {
        console.log('初回');
        localStorage.setItem('fee_plan_session','1');
        return true;
    } else {
        console.log('2回目以降');
        return false;
    }
}

function openBusinessHours(hours) {
    const startTime = Number(hours.split('-')[0]);
    const endTime = Number(hours.split('-')[1]);

    $.ajax().then((data, status, xhr) => {
        const serverDate = new Date(xhr.getResponseHeader('Date'));
        let currenttime = 0;
        if (serverDate.getYear() > 100) {
            currenttime = serverDate.getHours();
            if( currenttime >= startTime && currenttime < endTime ) {
                popupContainer.setAttribute('aria-hidden','false');
            } else {
                popupContainer.setAttribute('aria-hidden','true');
            }
        }
    });
}

function displayPopup(first) {
    if(!first) {
        if( popupOperator !== null && popupOperator.dataset.businesshours !== undefined) {
            const getbusinesshours = popupOperator.dataset.businesshours;
            openBusinessHours(getbusinesshours);
        } else {
            popupContainer.setAttribute('aria-hidden','false');
        }
    } else {
        popupContainer.setAttribute('aria-hidden','true');
    }
    popupClose.addEventListener('click', () => {
        popupContainer.setAttribute('aria-hidden','true');
    });
}

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
};

const callback = entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            displayPopup(checkFirstVisit());
            observer.disconnect();
        }
    });
};

const observer = new IntersectionObserver(callback, observerOptions);
if(targetId() !== null) observer.observe(targetId());

// ScrollHint
window.addEventListener('DOMContentLoaded', ()=> {
    new ScrollHint('.js-scrollable', {
        i18n: {
            scrollable: 'スクロール\nできます'
        }
    });
});
