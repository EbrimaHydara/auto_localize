import { shopSearch } from "./component/shop-search";

// ショップ検索
shopSearch();

// ページ下部ボタン固定
const fixedBottomBtn = () =>  {
    let scrollY = window.pageYOffset;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn || !trigger ) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
};

window.addEventListener('scroll', fixedBottomBtn);


$(function(){
    const countdown = function(due, targetElement) {
        const now = new Date();

        const rest = due.getTime() - now.getTime();
        if (rest < 0) {
            $(`.time-Count[data-timer="${targetElement}"]`).addClass("hidden");
            $(`.time-Count_End[data-timer="${targetElement}"]`).removeClass("hidden");
        }

        const sec = Math.floor(rest / 1000 % 60);
        const min = Math.floor(rest / 1000 / 60) % 60;
        const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
        const days = Math.floor(rest / 1000 / 60 / 60 / 24);

        const counter = [days, hours, min, sec];
        updateTimerDisplay(targetElement, counter);
    }

    const updateTimerDisplay = function(targetElement, counter) {
        $(`.timer[data-timer="${targetElement}"] .timer_day`).text(counter[0]);
        $(`.timer[data-timer="${targetElement}"] .timer_hours`).text(counter[1]);
        $(`.timer[data-timer="${targetElement}"] .timer_min`).text(counter[2]);
        $(`.timer[data-timer="${targetElement}"] .timer_sec`).text(counter[3]);
    }

    const setTimer = function(finishdate, targetElement) {
        const finishdays = finishdate[1] - 1;
        const finish = new Date(finishdate[0], finishdays, finishdate[2], finishdate[3], finishdate[4], finishdate[5]);

        const recalc = function(){
            countdown(finish, targetElement);
            refresh();
        }

        const refresh = function(){
            setTimeout(recalc, 1000);
        }

        recalc();
        $(`.time-Count_Area[data-timer="${targetElement}"]`).removeClass("hidden");
    }

    // 同じ終了時刻のタイマー1とタイマー2を設定
    const finishdate = [2024 , 1, 16, 9, 59, 59];
    //const finishdate = [2023 , 12, 4, 16, 58, 59];
    setTimer(finishdate, 1);
    setTimer(finishdate, 2);
});
