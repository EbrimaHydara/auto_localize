/*  ----------------------------------------------------------

swiper

----------------------------------------------------------  */



document.addEventListener("DOMContentLoaded", function () {
    let swiperSmall = null;
    let swiperLarge = null;

    // メディアクエリを使用して切り替え
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    function handleMediaQuery(event) {
        if (event.matches) {
            // 768px以下の場合の設定
            if (swiperSmall) {
                swiperSmall.destroy();
                swiperSmall = null;
            }

            // 769px以上の場合の設定
            if (!swiperLarge) {
                swiperLarge = new Swiper('.swiper', {
                    slidesPerView: 1.383,
                    centeredSlides: true,
                    spaceBetween: '2.15%',
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
            }
        } else {
            // 769px以下の場合の設定
            if (swiperLarge) {
                swiperLarge.destroy();
                swiperLarge = null;
            }

            // 768px以下の場合の設定
            if (!swiperSmall) {
                swiperSmall = new Swiper('.swiper', {
                    slidesPerView: 1.16,
                    centeredSlides: true,
                    spaceBetween: '4.3%',
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
            }
        }
    }

    mediaQuery.addListener(handleMediaQuery);

    // 初回の呼び出し
    handleMediaQuery(mediaQuery);
});


$(document).ready(function() {

    let ctaBtn = $('.cta_auto');

    $(window).scroll(function (){
        $(".price02").each(function(){
          var hit		= $(this).offset().top + 50;
          var scroll	= $(window).scrollTop();
          var wHeight	= $(window).height();
      
          if (scroll > hit - wHeight + wHeight/100){
            ctaBtn.addClass('active');
          } else {
            ctaBtn.removeClass('active');
          }
        });
      });

});