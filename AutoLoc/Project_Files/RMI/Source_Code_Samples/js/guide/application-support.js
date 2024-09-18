const agree1 = document.getElementById('js-agree1');
const agree2 = document.getElementById('js-agree2');
const agree_box = document.getElementById('js-agree-box');
const agree_txt = document.getElementById('js-agree-txt');
const tel_txt = document.getElementById('js-tel-txt');
const tel_info = document.getElementById('js-tel-info');
const agree_list = document.querySelectorAll('.js-agree-list');

let check1 = false;
let check2 = false;
let checklist = false;
let cnt = 0;

const checkAgree1 = ()=> {
  return agree1.checked ? true : false;
};
const checkAgree2 = ()=> {
    return agree2.checked ? true : false;
  };

const checkAllList = ()=> {
    for (let i = 0; i < agree_list.length; i++) {
        ( agree_list[i].getAttribute('data-check') ) ? cnt++ : cnt = 0;
    }
    return (cnt >= agree_list.length) ? true : false;
};

const checkAgreeBox = ()=> {
    if( checklist ) {
        agree_box.setAttribute('aria-disabled', 'false');
        agree_txt.setAttribute('aria-hidden', 'true');
        agree2.disabled = false;
    } else {
        agree_box.setAttribute('aria-disabled', 'true');
        agree_txt.setAttribute('aria-hidden', 'false');
        agree2.disabled = true;
    }
};

const telBox = ()=> {
    if( check1 && check2 ) {
        tel_txt.setAttribute('aria-hidden', 'true');
        tel_info.setAttribute('aria-hidden', 'false');
    } else {
        tel_txt.setAttribute('aria-hidden', 'false');
        tel_info.setAttribute('aria-hidden', 'true');
    }
};

agree_list.forEach(el => {
    el.addEventListener('click', () => {
        el.setAttribute('data-check', true);
        (checkAllList()) ? checklist = true : checklist = false;
        checkAgreeBox();
    });
});

agree1.addEventListener('change', () => {
    check1 = checkAgree1();
    telBox();
});

agree2.addEventListener('change', () => {
    check2 = checkAgree2();
    telBox();
});


