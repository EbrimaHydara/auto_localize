const inputs = document.querySelectorAll('.js-input');
const buttons = document.querySelectorAll('.js-button');
const anchor = document.querySelectorAll('.js-anchor');
const error = document.querySelector('.js-error');

let url_string = window.location.href;
let url = new URL(url_string);
let corpid = url.searchParams.get('corpid');

if(corpid) {
    //パラメーターcorpidがあったら全てのinputに値を挿入
    inputs.forEach(function(element) {
        element.value = corpid;
      });
} else {
    //パラメーターcorpidがなかったらエラー表示＆ボタン非活性化
    error.classList.remove('is-hidden');
    buttons.forEach(function(element) {
        element.setAttribute('aria-disabled', 'true');
      });
}

anchor.forEach(function(element){

    element.addEventListener('click',function(){
        //アンカーをクリックしたらターゲットのタブを開く
        const tabname = element.dataset.tab;
        if(tabname){
            const tab = document.getElementById(tabname);
            tab.setAttribute('aria-selected', 'true');
            if(tab.nextElementSibling){
                tab.nextElementSibling.setAttribute('aria-selected', 'false');
            }
            if(tab.previousElementSibling){
                tab.previousElementSibling.setAttribute('aria-selected', 'false');
            }
            const tabContentname = tabname.replace('menu', 'content')
            const tabContent = document.getElementById(tabContentname);
            tabContent.setAttribute('aria-hidden', 'false');
            if(tabContent.nextElementSibling){
                tabContent.nextElementSibling.setAttribute('aria-hidden', 'true');
            }
            if(tabContent.previousElementSibling){
                tabContent.previousElementSibling.setAttribute('aria-hidden', 'true');
            }
        }
        //アコーディオンの指定があったらターゲットのアコーディオンを開く
        const accordionname = element.dataset.accordion;
        if(accordionname){
            const accordion = document.getElementById(accordionname);
            accordion.setAttribute('aria-expanded', 'true');
            accordion.nextElementSibling.setAttribute('aria-hidden', 'false');
            accordion.nextElementSibling.style.display = "block";
        }
    });

});
