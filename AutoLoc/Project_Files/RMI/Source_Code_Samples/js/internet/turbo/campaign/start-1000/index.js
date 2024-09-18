// 834px以下になったらpagetitleを変更
const target = document.getElementById("wrapper");
let pagetitle = document.getElementById('item');

if(target.clientWidth <  835){
    pagetitle.innerText = "TOP";
}

window.addEventListener('resize', () => {
    if(target.clientWidth <  835){
        pagetitle.innerText = "TOP";
    }else{
        pagetitle.innerText = "スタート1000トップ";
    }
});

