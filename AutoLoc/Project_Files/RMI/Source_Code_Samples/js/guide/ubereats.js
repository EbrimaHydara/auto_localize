const check = document.getElementById('js-confirm_check');
const application = document.getElementById('js-application');
const tab4 = document.getElementById('tab-menu4');
const tab5 = document.getElementById('tab-menu5');
const tab6 = document.getElementById('tab-menu6');
const plan = document.getElementById('js-display_plan');
const apply = document.getElementById('js-display_apply');
const sim = document.getElementById('js-display_sim');

check.addEventListener('change', () => {
    if (check.checked) {
        application.setAttribute('aria-disabled', 'false');
    } else {
        application.setAttribute('aria-disabled', 'true');
    }
})

tab4.addEventListener('click', () => {
    plan.style.display = 'none';
    apply.style.display = 'block';
    sim.style.display = 'none';
})
tab5.addEventListener('click', () => {
    plan.style.display = 'block';
    apply.style.display = 'none';
    sim.style.display = 'block';
})
tab6.addEventListener('click', () => {
    plan.style.display = 'none';
    apply.style.display = 'block';
    sim.style.display = 'none';
})
