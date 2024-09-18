const countdown = function(due) {
    const now = new Date();
    
    const rest = due.getTime() - now.getTime();
    if (rest < 0) {
    //   $(".time_count").addClass("hidden");
      $(".ichiba-pointback-Layout_Timer").addClass("ichiba-pointback-Layout_Timer-end");
      $(".ichiba-pointback-Layout_Timer-open").addClass("ichiba-pointback-Uti_None");
      $(".ichiba-pointback-Layout_Timer-close").removeClass("ichiba-pointback-Uti_None");
      $(".ichiba-pointback-Layout_Entry-btn-wrapper").addClass("ichiba-pointback-Uti_None");
      $(".end_count").removeClass("hidden");
    }
    
    const sec = Math.floor(rest / 1000 % 60);
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];
    
    return count;
  }
  
  // const finishdate = [2022, 11, 16, 10, 14 ,10];//ここで、終了日時を指定[年, 月, 日, 時, 分 ,秒]
  const finishdate = [2022, 11, 30, 9, 59 ,0];//ここで、終了日時を指定[年, 月, 日, 時, 分 ,秒]
  
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