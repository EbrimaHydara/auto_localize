const entryCheckboxClass = 'js-service-iphone-applecare-entry-Form_Checkbox-input';
const entryBtnClass = 'js-service-iphone-applecare-entry-Form_Btn';

const entryCheckbox = document.getElementsByClassName(entryCheckboxClass);
const entryBtn = document.getElementsByClassName(entryBtnClass);

function resetCheckbox() {
    entryCheckbox[0].checked = false;
    entryCheckbox[1].checked = false;
}

setTimeout(resetCheckbox, 1000);

entryCheckbox[0].onclick = function() {
    if(entryCheckbox[0].checked) {
        entryBtn[0].setAttribute('aria-disabled', 'false');
        entryBtn[0].removeAttribute('disabled');
    } else {
        entryBtn[0].setAttribute('aria-disabled', 'true');
        entryBtn[0].setAttribute('disabled', true);
    }
};

entryCheckbox[1].onclick = function() {
    if(entryCheckbox[1].checked) {
        entryBtn[1].setAttribute('aria-disabled', 'false');
    } else {
        entryBtn[1].setAttribute('aria-disabled', 'true');
    }
};
