const button = document.getElementById('submitButton');
const target = document.getElementById('formTarget');

// 1の項目が入力されたらボタンをactiveにする
function completeForm() {
    if (target.value === "") button.setAttribute("aria-disabled", "true");
    else button.removeAttribute("aria-disabled");
}

target.addEventListener("input",completeForm);


