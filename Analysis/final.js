const title = document.getElementById('js-title');
const titleWrap = document.getElementById('js-title-wrap');
const inputs = document.getElementsByClassName('js-input');
const answerBtns = document.getElementsByClassName('js-answer-btn');
const questions = document.getElementsByClassName('js-question');
const backBtn = document.getElementById('js-back-btn');
const failure = document.querySelector('.js-failure');
const success = document.querySelector('.js-success');
const error = document.querySelector('.js-error');
const error2 = document.querySelector('.js-error2');
const radio = document.getElementsByClassName('js-radio');

const answers = [
'おとく',
'カケイ',
'まんぞく',
'サイキョウ',
'まんぞく',
'さいきょう'
];

const titlesArr =['天空', '湖畔','古塔', '大海','渓谷','森林'];

// 正解コードの配列
const codes = [
    "2368",
    "1468",
    "1568",
    "1245",
    "3468",
    "1356"
];

let code;
let answer;
let question;
let input;
let answerBtn;

let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get('id');

if(id) {
    switch (id) {
        //idは最終的に乱数化する想定
        case 'gq07g8ymc3':
          code = codes[0];
          answer = answers[0];
          input = inputs[0];
          answerBtn = answerBtns[0];
          question = questions[0];
          title.innerText = titlesArr[0];
          radio[0].checked = true;
          titleWrap.classList.remove('is-hidden');
          break;
        case 'lgl22w5g49':
          code = codes[1];
          answer = answers[1];
          input = inputs[1];
          answerBtn = answerBtns[1];
          question = questions[1];
          title.innerText = titlesArr[1];
          radio[1].checked = true;
          titleWrap.classList.remove('is-hidden');
          break;
        case '67kvx840dc':
          code = codes[2];
          answer = answers[2];
          input = inputs[2];
          answerBtn = answerBtns[2];
          question = questions[2];
          title.innerText = titlesArr[2];
          radio[2].checked = true;
          titleWrap.classList.remove('is-hidden');
          break;
        case 'wdynxov8s5':
          code = codes[3];
          answer = answers[3];
          input = inputs[3];
          answerBtn = answerBtns[3];
          question = questions[3];
          title.innerText = titlesArr[3];
          radio[3].checked = true;
          titleWrap.classList.remove('is-hidden');
          break;
        case '09nl8okywz':
          code = codes[4];
          answer = answers[4];
          input = inputs[4];
          answerBtn = answerBtns[4];
          question = questions[4];
          title.innerText = titlesArr[4];
          radio[4].checked = true;
          titleWrap.classList.remove('is-hidden');
          break;
        case '4vpvr13kis':
          code = codes[5];
          answer = answers[5];
          input = inputs[5];
          answerBtn = answerBtns[5];
          question = questions[5];
          title.innerText = titlesArr[5];
          radio[5].checked = true;
          titleWrap.classList.remove('is-hidden');
          break;
        default:
            error.classList.remove('is-hidden');
      }
} else {
    error.classList.remove('is-hidden');
}

question.classList.remove('is-hidden');

const prompt = window.prompt('4桁の解錠コードを半角で入力してください。');
if(prompt !== code) {
    question.classList.add('is-hidden');
    error2.classList.remove('is-hidden');
}

answerBtn.addEventListener('click', function () {

    //入力チェック
    if(!input.value) {
        alert('答えを入力してください。');
        return false;
    }

    //正誤判定
    if(input.value === answer) {
        //正解だったら正解画面を表示
        question.classList.add('is-hidden');
        success.classList.remove('is-hidden');
    } else {
        //不正解だったら不正解画面を表示
        question.classList.add('is-hidden');
        failure.classList.remove('is-hidden');
    }

    window.scroll({
        top: 0,
    });

});

backBtn.addEventListener('click', function () {
    failure.classList.add('is-hidden');
    question.classList.remove('is-hidden');
    window.scroll({
        top: 0,
    });
});
