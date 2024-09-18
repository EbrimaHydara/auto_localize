import { shopSearch } from "./component/shop-search";

// ショップ検索
shopSearch();

// 上部固定 ページ内リンクナビ
(() => {
    const navMenu = document.getElementById("js-fixed-nav");
    const target = document.getElementById("js-trigger-nav");
    let position = 0;
    const NavDisplay = () =>{
        // スクロール量が要素の絶対位置より値が大きくなれば表示
        if(window.scrollY > target.getBoundingClientRect().top + window.scrollY){
            navMenu.style.opacity=1;
            navMenu.style.display="block";
            // scrollTopが変数に入れたpositionの値より大きい(=下スクロール時)ときには表示しない
            if(document.documentElement.scrollTop > position){
                navMenu.style.opacity=0;
                navMenu.style.display="none";
            }
            position = document.documentElement.scrollTop;
        }else{
            navMenu.style.opacity=0;
            navMenu.style.display="none";
        }
    }

    window.addEventListener("scroll", NavDisplay);
})();

// 下部固定 ページ内リンクナビ
(() => {
    const internalNav = document.querySelector('.js-internal');
    const internalSlideNav = document.querySelector('.js-slide-internal');
    const mediaQuery = window.matchMedia('(max-width: 834px)');

    const changeInternalNavStyle = () => {
        // PCサイズでの処理
        if (!mediaQuery.matches) {
            internalNav.style.boxShadow = 'none';
            internalNav.classList.remove('js-slide-internal');
            return;
        }

        const internalNavOffsetTop = internalNav.offsetTop;
        const previousObject = internalNav.previousElementSibling;
        const previousObjectOffsetTop = previousObject.offsetTop;
        const previousObjectsScrollAmount = previousObjectOffsetTop + previousObject.offsetHeight;

        if (internalNavOffsetTop < previousObjectsScrollAmount) {
            internalNav.style.boxShadow = '0px -3px 1px 0px rgba(0, 0, 0, .11)';
        } else {
            internalNav.style.boxShadow = 'none';
            // ナビが固定された後、その場所でリロードした際のスライド処理
            if(internalSlideNav) {
                internalNav.classList.remove('js-slide-internal');
            }
        }
    };

    if(internalNav) {
        changeInternalNavStyle();
        window.addEventListener('scroll', changeInternalNavStyle);
        mediaQuery.addEventListener('change', changeInternalNavStyle);

        // スマホサイズ時でリロードした際のスライドアニメーションの処理
        if(internalSlideNav) {
            window.onload = function() {
                if (mediaQuery.matches) {
                    internalSlideNav.style.transform = 'none';
                }
            };
        }
    }
})();

// スムーススクロール
$('a[href^="#"]:not([href^="#modal"])').on("click", function(){
    // スクロール後、アコーディオンを表示したい場合
    if(typeof $(this).data("target") !== "undefined") {
        const accordionName = $(this).data("target");
        if(accordionName !== "") {
            const accordionButton = $("#" + accordionName);
            if(!accordionButton.length) return false;

            accordionButton.attr("aria-expanded", true);
            accordionButton.next().attr("aria-hidden", false).show();
        } else {
            console.log("Please set data-target value!");
            return false;
        }
    }

    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

// 下部固定 CVボタン
(() => {
    const trigger = document.getElementById('js-fixed-btn-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    const body = document.querySelector('body');
    const mediaQueryList = window.matchMedia('(min-width: 835px)');
    const resize = (event) => {
        if (event.matches) {
            body.style.paddingBottom = `${fixedBtn.clientHeight}px`;
        } else {
            body.style.paddingBottom = `${fixedBtn.clientHeight}px`;
        }
    }
    mediaQueryList.addEventListener('change', resize);
    resize(mediaQueryList);

    const fixedBottomBtn = () => {
        let scrollY = window.pageYOffset;
        const triggerRect = trigger.getBoundingClientRect();
        const triggerY = scrollY + triggerRect.top;

        if ( scrollY + window.innerHeight > triggerY ) {
            fixedBtn.setAttribute('aria-expanded', 'true');
        } else {
            fixedBtn.setAttribute('aria-expanded', 'false');
        }
    }

    if(fixedBtn) {
        if (!trigger) {
            fixedBtn.setAttribute('aria-expanded', 'true');
        } else {
            window.addEventListener('scroll', fixedBottomBtn);
        }
    }
})();

// キャンペーン終了までのカウントダウン
$(function(){
    const countdown = function(due, targetElement) {
        const now = new Date();

        const rest = due.getTime() - now.getTime();
        if (rest < 0) {
            $(`.time-Count[data-timer="${targetElement}"]`).addClass("hidden");
            $(`.time-Count_End[data-timer="${targetElement}"]`).removeClass("hidden");

            const fixedBtn = document.getElementById("js-fixed-btn");
            const body = document.querySelector("body");
            const mediaQueryList = window.matchMedia("(min-width: 835px)");
            const resize = (event) => {
                if (event.matches) {
                    body.style.paddingBottom = `${fixedBtn.clientHeight}px`;
                } else {
                    body.style.paddingBottom = `${fixedBtn.clientHeight}px`;
                }
            }
            mediaQueryList.addEventListener("change", resize);
            resize(mediaQueryList);
        }

        const sec = Math.floor(rest / 1000 % 60);
        const min = Math.floor(rest / 1000 / 60) % 60;
        const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
        const days = Math.floor(rest / 1000 / 60 / 60 / 24);

        const counter = [days, hours, min, sec];
        updateTimerDisplay(targetElement, counter);
    }

    const updateTimerDisplay = function(targetElement, counter) {
        if(counter[2] === 59) {
            counter[1] += 1;
            counter[2] = -1;
        }
        $(`.timer[data-timer="${targetElement}"] .timer_day`).text(counter[0]);
        $(`.timer[data-timer="${targetElement}"] .timer_hours`).text(counter[1]);
        $(`.timer[data-timer="${targetElement}"] .timer_min`).text(counter[2] + 1);
    }

    const setTimer = function(finishdate, targetElement) {
        const finishdays = finishdate[1] - 1;
        const finish = new Date(finishdate[0], finishdays, finishdate[2], finishdate[3], finishdate[4], finishdate[5]);

        const recalc = function() {
            countdown(finish, targetElement);
            if($(".time-Count_End").hasClass("hidden")) {
                refresh();
            }
        }

        const refresh = function() {
            setTimeout(recalc, 1000);
        }

        recalc();
    }

    // 終了時刻の設定
    const finishdate = [2024, 2, 20, 23, 59, 59];
    //const finishdate = [2023 , 12, 4, 16, 58, 59];
    setTimer(finishdate, 1);
});
