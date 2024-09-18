// カルーセル
// src/_ejs/include/internet/turbo/common/_carousel.ejs よりソース流用
(() => {
  const bnrCarousel = $('.js-Carousel-bnr');

  bnrCarousel.each(function() {
    let $self = $(this);
    const carouselConfig = {
      accessibility: false,
      centerMode: true,
      centerPadding: '0px',
      lazyLoad: 'progressive',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 835,
          settings: {
            accessibility: true,
            centerPadding: '11.6%',
            arrows: true,
            dots: true,
            appendArrows: $self.next('.turbo-Carousel_Nav'),
            appendDots: $self.next('.turbo-Carousel_Nav'),
            dotsClass: 'slick-dots turbo-Carousel_Dots',
            prevArrow: `<button class="turbo-Carousel_Nav-prev" aria-label="Previous" type="button"><span class="turbo-Carousel_Nav-txt">Previous</span></button>`,
            nextArrow: `<button class="turbo-Carousel_Nav-next" aria-label="Next" type="button"><span class="turbo-Carousel_Nav-txt">Next</span></button>`,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    $self.slick(carouselConfig);
  });
})();

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

// ページ下部固定ボタン
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

// smooth scroll
(() => {
    const triggers = document.querySelectorAll('.js-fixed-link-scroll');
    const fixedNav = document.getElementById('js-fixed-nav');

    triggers.forEach(function(item) {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            const href = item.getAttribute("href");
            const target = document.getElementById(href.replace("#", ""));
            const targetTop = target.getBoundingClientRect().top;
            const currentPosition = window.pageYOffset;
            const totalScroll = targetTop + currentPosition - fixedNav.clientHeight;

            window.scrollTo({
                top: totalScroll,
                behavior: "smooth",
            });
        });
    });
})();
