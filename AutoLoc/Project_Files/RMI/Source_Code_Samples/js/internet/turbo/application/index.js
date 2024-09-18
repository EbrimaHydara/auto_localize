const areaCheck = document.getElementById('areaCheck');
const envCheck = document.getElementById('envCheck');

window.addEventListener('pageshow', e => {
    if (e.persisted) return location.reload(); // for bfcache

    // initialize
    const perfEntries = performance.getEntriesByType('navigation');
    if (perfEntries.some(pe => pe.type === 'back_forward')) {
        areaCheck.checked = false;
        envCheck.checked = false;
    }
});

// const controlTargetOnChange = (triggerId, targetInfos) => {
//     document.getElementById(triggerId).addEventListener('change', e => {
//         targetInfos.forEach(info => {
//             const elm = document.getElementById(info.id);
//             const attrVal = info.init || JSON.parse(elm.getAttribute(info.attr));
//             elm.setAttribute(info.attr, !attrVal);
//             if (info.attr === 'aria-hidden' && !attrVal) setTimeout(() => elm.style = 'display: none', 250);
//             if (info.attr === 'aria-hidden' && attrVal) elm.style = 'display: block';
//         });

//         let value = true;
//         if (JSON.parse(areaCheck.checked) && JSON.parse(envCheck.checked)) {
//             value = false;
//         }
//         document.getElementById('js-application').setAttribute('aria-disabled', value);
//         const guide3 = document.getElementById('js-confirm-guide3');
//         guide3.setAttribute('aria-hidden', !value);
//         if (!value) setTimeout(() => guide3.style = 'display: none', 250);
//         else guide3.style = 'display: block';
//     });
// }

let click_count = 0;
envCheck.addEventListener("change", () =>{
    const guide_new =document.getElementById("js-confirm-guide-new");
    const btn = document.getElementById("js-confirm-guide-check");

    click_count++;

    if( click_count % 2 !== 0){
        guide_new.style.display = "none";
        btn.removeAttribute("aria-disabled");
    }else{
        guide_new.style.display = "block";
        btn.setAttribute("aria-disabled", true);
    }

    
    
    
})
// const targetOfArea = [
//     { id: 'confirm-env', attr: 'aria-disabled', init: true },
//     { id: 'js-confirm-guide1', attr: 'aria-hidden' },
//     { id: 'confirm-env-detail', attr: 'aria-disabled', init: true },
//     { id: 'backto-confirm-area', attr: 'aria-hidden' },
// ];
// const targetOfEnv = [
//     { id: 'js-confirm-guide2', attr: 'aria-hidden' },
//     { id: 'backto-confirm-env', attr: 'aria-hidden' },
// ];
// controlTargetOnChange('areaCheck', targetOfArea);
// controlTargetOnChange('envCheck', targetOfEnv);

const mapHeight = Math.ceil(document.getElementById('map').getBoundingClientRect().height);
const confirmEnvHeight = Math.ceil(document.querySelector('.application-Layout-confirm-env').getBoundingClientRect().height);
const intersectRatio = (mapHeight - (confirmEnvHeight + 40)) / mapHeight;
const option = {
    threshold: [0, intersectRatio, 1]
}
const ratios = [];
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        ratios.unshift(entry.intersectionRatio);
        if (ratios.length > 2) ratios.pop();
        const isTopDown = ratios.length === 1 || ratios[0] > ratios[1];
        const confirmEnv = document.querySelector('.application-Layout-confirm-env');
        if (entry.intersectionRatio > intersectRatio && isTopDown) confirmEnv.classList.add('application-Layout-confirm-slidein');
        if (entry.intersectionRatio === 1) confirmEnv.classList.remove('application-Layout-confirm-slidein');
    });
}, option)
const target = document.querySelector('.js-stickyarea');

observer.observe(target);
