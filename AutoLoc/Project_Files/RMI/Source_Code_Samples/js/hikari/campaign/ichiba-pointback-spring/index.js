const countdown = function(due) {
    const now = new Date();
    
    const rest = due.getTime() - now.getTime();
    if (rest < 0) {
    //   $(".time_count").addClass("hidden");
      $(".ichiba-pointback-spring-Layout_Timer").addClass("ichiba-pointback-spring-Layout_Timer-end");
      $(".ichiba-pointback-spring-Layout_Timer-open").addClass("ichiba-pointback-spring-Uti_None");
      $(".ichiba-pointback-spring-Layout_Timer-close").removeClass("ichiba-pointback-spring-Uti_None");
      $(".ichiba-pointback-spring-Layout_Entry-btn-wrapper").addClass("ichiba-pointback-spring-Uti_None");
      $(".end_count").removeClass("hidden");
    }
    
    let sec = Math.floor(rest / 1000 % 60);
    let min = Math.floor(rest / 1000 / 60) % 60;
    let hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);

    sec = sec.toString().padStart( 2, '0');//秒を0埋め
    min = min.toString().padStart( 2, '0');//分を0埋め
    hours = hours.toString().padStart( 2, '0');//時を0埋め

    const count = [days, hours, min, sec];
    
    return count;
}

// const finishdate = [2022, 11, 16, 10, 14 ,10];//ここで、終了日時を指定[年, 月, 日, 時, 分 ,秒]
const finishdate = [2023, 4, 4, 9, 59 ,0];//ここで、終了日時を指定[年, 月, 日, 時, 分 ,秒]

const finishdays = finishdate[1] - 1;
const finish = new Date(finishdate[0], finishdays, finishdate[2], finishdate[3], finishdate[4], finishdate[5]);

const recalc = function(){
    const counter = countdown(finish);
    document.getElementById('timer_day').textContent = counter[0];
    document.getElementById('timer_hours').textContent = counter[1];
    document.getElementById('timer_min').textContent = counter[2];
    document.getElementById('timer_sec').textContent = counter[3];

    document.getElementById('timer_day_kv').textContent = counter[0];
    document.getElementById('timer_hours_kv').textContent = counter[1];
    document.getElementById('timer_min_kv').textContent = counter[2];
    document.getElementById('timer_sec_kv').textContent = counter[3];
    refresh();
}
const refresh = function(){
  setTimeout(recalc,1000);
}
recalc();

$(window).on("load, scroll", function() {
  let scrollPos = $(window).scrollTop();
  let switchPos = $(".ichiba-pointback-spring-Layout_Sec-1").offset().top;
  console.log(scrollPos)
  console.log(switchPos)

  if(scrollPos > switchPos) {
    $(".ichiba-pointback-spring-Layout_Cta-foot").show();
  }else {
    $(".ichiba-pointback-spring-Layout_Cta-foot").hide();
  }
})