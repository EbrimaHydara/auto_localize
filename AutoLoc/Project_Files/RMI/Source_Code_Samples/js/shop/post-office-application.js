// enen validator
function zen2han(el) {
    el.value = el.value.replace(/[０]/g, "0");
    el.value = el.value.replace(/[１]/g, "1");
    el.value = el.value.replace(/[２]/g, "2");
    el.value = el.value.replace(/[３]/g, "3");
    el.value = el.value.replace(/[４]/g, "4");
    el.value = el.value.replace(/[５]/g, "5");
    el.value = el.value.replace(/[６]/g, "6");
    el.value = el.value.replace(/[７]/g, "7");
    el.value = el.value.replace(/[８]/g, "8");
    el.value = el.value.replace(/[９]/g, "9");
}

// text setting
const mediaQuery = window.matchMedia('(max-width: 768px)');
const codeElem = document.enenForm.elements['answers[39110_267331]'];
const postOfficeElem = document.enenForm.elements['answers[39110_267332]'];
const recommendTxt = document.querySelector('#js-recommendTxt h2');
const setText = () => {
    codeElem.placeholder = mediaQuery.matches ? '9桁の数字を入力して下さい。' : '9桁の数字を入力して下さい。（全角・半角どちらでも可）';
    postOfficeElem.placeholder = mediaQuery.matches ? 'タップすると郵便局名が表示。' : 'ここをクリックすると、郵便局名が表示がされます。';
    recommendTxt.innerText = mediaQuery.matches ? 'キャンペーン・\nおすすめ情報' : 'キャンペーン・おすすめ情報';
};
setText();
mediaQuery.addEventListener('change', setText);

(async function () {
    const response = await fetch('/assets/json/shop-post-office.json');
    let jsons = null;
    if (response.ok) jsons = await response.json();
    else alert('データの読み込みに失敗しました。ページをリロードしてください。');
    codeElem.addEventListener('blur', () => {
        zen2han(codeElem);
        const matchData = jsons.find(json => codeElem.value === json.code) || { name: '' };
        postOfficeElem.value = matchData.name;
    });
})();
