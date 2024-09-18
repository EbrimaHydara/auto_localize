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

// CVボタン上に追従 ページ内リンクナビ
(() => {
    const internalNav = document.getElementById("js-internal");
    const movingRange = document.getElementById("js-internal-moving-range");
    const fixedBtn = document.getElementById("js-fixed-btn");
    const mediaQuery = window.matchMedia("(max-width: 834px)");

    const changeInternalNavStyle = () => {
        // PCサイズでの処理
        if (!mediaQuery.matches) {
            internalNav.removeAttribute("style");
            return;
        }

        const internalNavHeight = internalNav.clientHeight;
        const movingRangeHeight = movingRange.clientHeight;
        const movingRangeOffsetTop = movingRange.offsetTop;
        const fixedBtnOffsetTop = fixedBtn.offsetTop;

        // 追従が開始されるのに必要なスクロール量
        const startScrollAmount = movingRangeOffsetTop + internalNavHeight - fixedBtnOffsetTop;
        // 追従が終了するのに必要なスクロール量
        const finishScrollAmount = movingRangeOffsetTop + movingRangeHeight - fixedBtnOffsetTop;

        if (window.pageYOffset > startScrollAmount) {
            internalNav.style.position = "sticky";
            internalNav.style.boxShadow = "0px -3px 1px 0px rgba(0, 0, 0, .11)";
            internalNav.style.top = "auto";
            internalNav.style.bottom = fixedBtn.offsetHeight + "px";
        } else {
            internalNav.removeAttribute("style");
        }

        if (window.pageYOffset > finishScrollAmount) {
            internalNav.style.boxShadow = "";
        }
    };

    if(internalNav) {
        changeInternalNavStyle();
        window.addEventListener("scroll", changeInternalNavStyle);
        mediaQuery.addEventListener("change", changeInternalNavStyle);
    }
})();

// 下部固定 CVボタン
(() => {
    const body = document.querySelector("body");
    const fixedBtn = document.getElementById("js-fixed-btn");
    const mediaQuery = window.matchMedia("(min-width: 835px)");
    const resize = (event) => {
        if (event.matches) {
            body.style.paddingBottom = `${fixedBtn.clientHeight}px`;
        } else {
            body.style.paddingBottom = `${fixedBtn.clientHeight}px`;
        }
    }
    mediaQuery.addEventListener("change", resize);
    resize(mediaQuery);
})();
