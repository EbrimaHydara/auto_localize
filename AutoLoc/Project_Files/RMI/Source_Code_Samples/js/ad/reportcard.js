// 本環境では console は使えない（表示されないので注意）
// alert は表示される

import lottie from 'lottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nameSpace = "reportcard";

const $LoopImgs = document.querySelectorAll(".reportcard-MainContents_LoopText-ul li");
const LoopAnimations = [];
const lottieFirstAnimedClass = "lottieFirstAnimed";
const lottieLoopAnimedClass = "lottieLoopAnimed";

let lottieQ1Anim;
let lottie_Q1LoopAnim;

window.addEventListener('DOMContentLoaded', ()=> {
    checkNowArea();
    setQ1Lottie();
    setAshiraiLottie();
    clickEvent();
    setGsap();
    calc_pcBgWidth();
    hideLoading();
});

window.addEventListener('resize', ()=> {
    calc_pcBgWidth();
    update_LoopImgWidth();
});

function calc_pcBgWidth() {
    if (document.querySelectorAll(".reportcard-pcFixedArea").length) {
        var full_w = document.body.clientWidth;
        var contents_w = document.getElementById("reportcard").offsetWidth;

        var pc_fixed_areas = document.querySelectorAll(".reportcard-pcFixedArea");

        pc_fixed_areas.forEach(function(pc_fixed_area) {
            var pc_fixed_area_w = (full_w - contents_w) / 2;
            pc_fixed_area.style.width = pc_fixed_area_w + "px";
        });
    }
}

function clickEvent() {
    // アンカー要素（<a>）をクリックしたときの処理
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // #を削除してターゲットの要素IDを取得
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // ターゲットの要素が存在する場合、スムーズなスクロールを行う
                window.scrollTo({
                    top: window.pageYOffset + targetElement.getBoundingClientRect().top,
                    behavior: 'smooth',
                });
            }
        });
    });
}

function setAshiraiLottie() {
    // PC 下固定の人々
    if(document.getElementById("People_lottie")) {
        const $elem = document.getElementById("People_lottie");
        const $AnimElem = $elem.querySelector('.lottie-loop');
        let lottiePeopleAnim = lottie.loadAnimation({
            container: $AnimElem,
            path: '../../assets/json/ad/'+ nameSpace + '/pc_pp_shita.json',
            renderer: 'svg',
            loop: true,
            autoplay: false
        });

        lottiePeopleAnim.addEventListener('data_ready', function() {
            lottiePeopleAnim.play();
        });
    }

    // PC 左テキストボックスの人々
    if(document.getElementById("LeftPeople_lottie")) {
        const $elem = document.getElementById("LeftPeople_lottie");
        const $AnimElem = $elem.querySelector('.lottie-loop');
        let lottieLeftPeopleAnim = lottie.loadAnimation({
            container: $AnimElem,
            path: '../../assets/json/ad/'+ nameSpace + '/pc_pp_ue.json',
            renderer: 'svg',
            loop: true,
            autoplay: false
        });

        lottieLeftPeopleAnim.addEventListener('data_ready', function() {
            lottieLeftPeopleAnim.play();
        });
    }

    // SP ABOUT 600万回線
    if(document.getElementById("About_lottie")) {
        const $elem = document.getElementById("About_lottie");
        const $AnimElem = $elem.querySelector('.lottie-loop');
        let lottieAboutAnim = lottie.loadAnimation({
            container: $AnimElem,
            path: '../../assets/json/ad/'+ nameSpace + '/about_loop.json',
            renderer: 'svg',
            loop: true,
            autoplay: false
        });

        lottieAboutAnim.addEventListener('data_ready', function() {
            lottieAboutAnim.play();
        });
    }

}

// Q1 の lottie はスクロールするとすぐ表示なので、先に読み込んでおく
function setQ1Lottie() {
    if(document.getElementById("lottieQ1")) {
        const $elem_q1 = document.getElementById("lottieQ1");
        const $firstAnimElem = $elem_q1.querySelector('.lottie-firstAnim');
        lottieQ1Anim = lottie.loadAnimation({
            container: $firstAnimElem,
            path: '../../assets/json/ad/'+ nameSpace + '/q1.json',
            renderer: 'svg',
            loop: false,
            autoplay: false
        });

        const loopElem = $elem_q1.querySelector('.lottie-loop');

        lottie_Q1LoopAnim = lottie.loadAnimation({
            container: loopElem,
            path: '../../assets/json/ad/'+ nameSpace + '/q1_loop.json',
            renderer: 'svg',
            loop: true,
            autoplay: false
        });
    }
}

// 画面表示時の現在地を取得
function checkNowArea() {
    // var li2 = document.querySelector('#lottieQ2');
    // var rect = li2.getBoundingClientRect();
    // var isInViewport = (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );

    // if (isInViewport) {
        // .li-2が表示領域にある場合の処理をここに記述します
        // alert(".li-2は表示領域内にあります");
        // console.log(".li-2は表示領域内にあります");
    // } else {
        // .li-2が表示領域外にある場合の処理をここに記述します
        // console.log(".li-2は表示領域外にあります");
        // alert(".li-2は表示領域外にあります");
    // }

}

function setGsap() {
    // タイトルを非表示にする
    for (let i = 1; i <= 5; i++) {
        const target = `#titletextBox-text${i}`;
        gsap.set(target, {y: 0, scale: 0,});
    }

    $LoopImgs.forEach(($LoopImgs, index) => {
        const animation = gsap.to($LoopImgs, {
            x: "-100%",
            y: 0,
            duration: 8,
            ease: "linear",
            repeat: -1, // 無限に繰り返し
        });

        LoopAnimations.push(animation);
    });

    const start_timing = 'top 80%';
    const start_timing_q1 = 'top 70%'; // Q1は最初から見えてしまうため

    if(document.getElementById("lottieQ1")) {
        const $elem_q1 = document.getElementById("lottieQ1");
        gsap.to($elem_q1, {
            scrollTrigger: {
                trigger: $elem_q1, // 効果を適用する要素
                start: start_timing_q1,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q1.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieQ1FirstAnim($firstAnimElem, "q1");
                    }
                },
            }
        });
    }

    if(document.getElementById("lottieQ2")) {
        const $elem_q2 = document.getElementById("lottieQ2");
        gsap.to($elem_q2, {
            scrollTrigger: {
                trigger: $elem_q2, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q2.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q2");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ3")) {
        const $elem_q3 = document.getElementById("lottieQ3");
        gsap.to($elem_q3, {
            scrollTrigger: {
                trigger: $elem_q3, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q3.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q3");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ4")) {
        const $elem_q4 = document.getElementById("lottieQ4");
        gsap.to($elem_q4, {
            scrollTrigger: {
                trigger: $elem_q4, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q4.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q4");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ5")) {
        const $elem_q5 = document.getElementById("lottieQ5");
        gsap.to($elem_q5, {
            scrollTrigger: {
                trigger: $elem_q5, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q5.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q5");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ6")) {
        const $elem_q6 = document.getElementById("lottieQ6");
        gsap.to($elem_q6, {
            scrollTrigger: {
                trigger: $elem_q6, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q6.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q6");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ7")) {
        const $elem_q7 = document.getElementById("lottieQ7");
        gsap.to($elem_q7, {
            scrollTrigger: {
                trigger: $elem_q7, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q7.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q7");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ8")) {
        const $elem_q8 = document.getElementById("lottieQ8");
        gsap.to($elem_q8, {
            scrollTrigger: {
                trigger: $elem_q8, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q8.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q8");
                    }
                }
            }
        });
    }

    if(document.getElementById("lottieQ9")) {
        const $elem_q9 = document.getElementById("lottieQ9");
        gsap.to($elem_q9, {
            scrollTrigger: {
                trigger: $elem_q9, // 効果を適用する要素
                start: start_timing,
                toggleClass: 'anim', // クラス付与
                once: true, // １度のみ発動
                onEnter: () => {
                    const $firstAnimElem = $elem_q9.querySelector('.lottie-firstAnim');
                    if (!$firstAnimElem.classList.contains(lottieFirstAnimedClass)) {
                        lottieFirstAnim($firstAnimElem, "q9");
                    }
                }
            }
        });
    }
}

// ウィンドウのリサイズ時に初期値を更新
function update_LoopImgWidth() {
    $LoopImgs.forEach(($LoopImgs, index) => {
        LoopAnimations[index].vars.x = "100%";
    });
}

// Q1 用
function lottieQ1FirstAnim(elem , id) {

    lottieQ1Anim.play();
    elem.classList.add(lottieFirstAnimedClass);

    const loopElem = elem.parentElement.querySelector('.lottie-loop');

    // アニメーション完了したらloopアニメーションに変更
    lottieQ1Anim.addEventListener('complete', function() {
        loopElem.classList.add("opacity_1");
        lottieLoopAnim(elem, loopElem , id, lottie_Q1LoopAnim);
    });
}

function lottieFirstAnim(elem , id) {

    const lottieAnim = lottie.loadAnimation({
        container: elem,
        path: '../../assets/json/ad/'+ nameSpace + '/' + id + '.json?240322',
        renderer: 'svg',
        loop: false,
        autoplay: false
    });

    // lottieAnim.addEventListener('data_ready', function() {
    //     alert("data_ready");
    // });

    lottieAnim.play();
    elem.classList.add(lottieFirstAnimedClass);

    const loopElem = elem.parentElement.querySelector('.lottie-loop');

    var lottie_LoopAnim = lottie.loadAnimation({
        container: loopElem,
        path: '../../assets/json/ad/'+ nameSpace + '/' + id + '_loop.json?240322',
        renderer: 'svg',
        loop: true,
        autoplay: false
    });

    // アニメーション完了したらloopアニメーションに変更
    lottieAnim.addEventListener('complete', function() {
        loopElem.classList.add("opacity_1");
        lottieLoopAnim(elem, loopElem , id, lottie_LoopAnim);
    });
}

function lottieLoopAnim(elem, loopElem , id, lottie_LoopAnim) {
    elem.classList.add("opacity_0");

    lottie_LoopAnim.play();
    loopElem.classList.add(lottieLoopAnimedClass);
}

function hideLoading() {
	const $loading = document.getElementById("loading");
	$loading.classList.add("display-none");

    // ローディングアニメーションがはけてからアニメーション開始
    setTimeout(function() {
        titleTextAnim();
    }, 1000);
}

let isLongTitleAnimed = false;

function titleTextAnim() {
    const AnimDirection = -5;
    const AnimDuration = 0.2;
    const titleTextNum = 2;

    for (let i = 1; i <= titleTextNum; i++) {
        const delay = AnimDuration * i;
        const target = `#titletextBox-text${i}`;

        gsap.fromTo(target, {y: 0, scale: 0,}, {
            duration: AnimDuration,
            y: AnimDirection,
            delay: delay,
            scale: 1,
            transformOrigin: "bottom",
            onComplete: function() {
                gsap.to(target, {duration: AnimDuration, y: 0, scale: 1, onComplete: isRunNextAnimation(titleTextNum, i)});
            }
        });
    }
}

// 通信簿
function titleTextAnim_Tsushinbo(Num) {
    const AnimDirection = -5;
    const AnimDuration = 0.3;
    const titleTextNum = 3;

    for (let i = 1; i <= titleTextNum; i++) {
        const delay = AnimDuration * i;
        const target = `#titletextBox-text${i + Num}`;

        gsap.fromTo(target, {y: 0, scale: 0,}, {
            duration: AnimDuration,
            y: AnimDirection,
            delay: delay,
            scale: 1,
            transformOrigin: "bottom",
            onComplete: function() {
                gsap.to(target, {duration: AnimDuration, y: 0, scale: 1, onComplete: isRunNextAnimation(titleTextNum, i)});
            }
        });
    }
}

function isRunNextAnimation(Num, i) {
    if (i === Num - 1) {
        // 信 が出たタイミングでラインアニメーション
        if(isLongTitleAnimed) {
            titleLineAnim();
        }
    }
    // 「楽天モバイル」アニメーションおわったら
    if (i === Num) {
        if(!isLongTitleAnimed) {
            titleTextAnim_Tsushinbo(Num);
            isLongTitleAnimed = true;
        }
    }
}

function titleLineAnim() {
    const $titleLineBox = document.getElementById("titleLineBox");
    $titleLineBox.classList.add("anim");
}
