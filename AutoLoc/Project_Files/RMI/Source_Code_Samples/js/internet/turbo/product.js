import Lottie from 'lottie-web';

const spLottieElm = document.querySelector('#js-lottie-anim-sp');
const pcLottieElm = document.querySelector('#js-lottie-anim-pc');
const mediaQueryList = window.matchMedia('screen and (min-width: 769px)');

const animSp = Lottie.loadAnimation({
  container: spLottieElm,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: '/assets/json/internet/turbo/product/turbo-anim-sp.json'
});

const animPc = Lottie.loadAnimation({
  container: pcLottieElm,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: '/assets/json/internet/turbo/product/turbo-anim-pc.json'
});

const resize = (event) => {
  if (event.matches) {
    pcLottieElm.setAttribute('aria-hidden', false);
    spLottieElm.setAttribute('aria-hidden', true);
    animPc.play();
    animSp.stop();
  } else {
    spLottieElm.setAttribute('aria-hidden', false);
    pcLottieElm.setAttribute('aria-hidden', true);
    animSp.play();
    animPc.stop();
  }
}

mediaQueryList.addEventListener('change', resize);
resize(mediaQueryList);

const navMenu = document.getElementById("nav_menu");
const target = document.getElementById("menu_target");
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
