$('.fukubukuro-Carousel').slick({
  slidesToShow: 4,
  autoplaySpeed: 5000,
  dots: true,
  arrows: true,
  prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
  nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
  responsive: [{
      breakpoint: 769,
      settings: {
          slidesToShow: 1,
      }
  }]
});
$('.fukubukuro-Carousel_2').slick({
  slidesToShow: 4,
  autoplaySpeed: 5000,
  dots: true,
  arrows: true,
  prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
  nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
  responsive: [{
      breakpoint: 769,
      settings: {
          slidesToShow: 3,
      }
  }]
});





$(function(){
  const countdown = function(due) {
    const now = new Date();
    
    const rest = due.getTime() - now.getTime();
    if (rest < 0) {
      $(".time-Count").addClass("hidden");
      $(".time-Count_End").removeClass("hidden");
      $(".coupon-Open,.couponbtn a").addClass("fin");
      $('.coupon-Open,.couponbtn a').off();
      $('.couponbtn a').attr("href", "#overlay");
    }
    
    const sec = Math.floor(rest / 1000 % 60);
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];
    
    return count;
  }
  
  const finishdate = [2024, 1, 15, 9, 59 ,59];//ここで、終了日時を指定[年, 月, 日, 時, 分 ,秒]
  
  const finishdays = finishdate[1] - 1;
  const finish = new Date(finishdate[0], finishdays, finishdate[2], finishdate[3], finishdate[4], finishdate[5]);
  
  const recalc = function(){
    const counter = countdown(finish);
    document.getElementById('timer_day').textContent = counter[0];
    document.getElementById('timer_hours').textContent = counter[1];
    document.getElementById('timer_min').textContent = counter[2];
    document.getElementById('timer_sec').textContent = counter[3];
    refresh();
  }
  const refresh = function(){
    setTimeout(recalc,1000);
  }
  recalc();
  $(".time-Count_Area").removeClass("hidden");
});