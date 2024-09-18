const phoneChange = document.getElementById('phone-change');
const phoneContents = document.getElementsByClassName('guide-Iphone_Select-contents');
let phoneTarget = null;

if (phoneChange) {
    phoneChange.addEventListener('change', () => {
        let thisValue = phoneChange.options[phoneChange.selectedIndex].value;

        for (let i = 0, len = phoneContents.length; i < len; i++) {
            phoneContents[i].setAttribute('aria-hidden', true);
        }
        phoneTarget = document.getElementById(thisValue);

        if (phoneTarget) {
            phoneTarget.setAttribute('aria-hidden', false);
        }
    });
}