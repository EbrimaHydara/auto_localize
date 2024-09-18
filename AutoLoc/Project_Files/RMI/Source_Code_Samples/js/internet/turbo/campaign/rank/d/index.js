// 上部固定 ページ内リンクナビ
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

// 下部固定ボタン
(() => {
    const trigger = document.getElementById('js-fixed-btn-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');
    function fixedBottomBtn() {
        let scrollY = window.pageYOffset;
        const triggerY = trigger.offsetTop;

        if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
        } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
        }
    }
    if( fixedBtn && trigger ) {
        window.addEventListener('scroll', fixedBottomBtn);
    }
})();

// スムーススクロール
$('a[href^="#"]:not([href^="#modal"])').on("click", function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});
