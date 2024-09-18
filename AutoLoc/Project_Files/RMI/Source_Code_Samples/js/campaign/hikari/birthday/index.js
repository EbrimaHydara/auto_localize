//Count Down Timer
function cdt() {
    var $jsCdt = document.getElementsByClassName("js-cdt");
    var $jsTimerText = document.getElementsByClassName("js-timer-text");
    var $jsTimerCap = document.getElementsByClassName("js-timer-cap");
    var $jsTimerButton = document.getElementsByClassName("js-timer-btn");
    var $jsTimer = document.getElementsByClassName('js-timer');

    var limitDate = new Date('2021/10/31 23:59'); //終了日時
    var timer;
    $.ajax({
        type: 'GET'
    }).done(function (data, status, xhr) {
        var serverDate = new Date(xhr.getResponseHeader('Date'));
        // var serverDate = new Date();
        var rTime = (limitDate - serverDate) / 1000;
        var addZero = function (n) {
            return ('0' + n).slice(-2);
        };

        var gDate = function (rTime) {
            var rDay = Math.floor(rTime / (60 * 60 * 24));
            var rHour = Math.floor(rTime / (60 * 60)) - (rDay * 24);
            var rMin = addZero(Math.floor(rTime / (60)) - (rDay * 24 * 60) - (rHour * 60));
            var rSec = addZero(Math.floor(rTime) - (rDay * 24 * 60 * 60) - (rHour * 60 * 60) - (rMin * 60));
            rDay = rDay !== '0' ? '<span class="birthday-Util_Show-sp" style="color:#000;">＼</span><span>あと</span>' + rDay + '<span>日</span>' : '';
            rHour = rHour !== '0' ? rHour + '<span>時間</span>' : '';
            rMin = rMin !== '0' ? rMin + '<span>分</span>' : '';
            for (let i = 0; i < $jsTimer.length; i++) {
                $jsTimer[i].innerHTML = rDay + rHour + rMin + rSec + '<small>秒</small><span style="color:#000;">／</span>';
            }
        };

        gDate(rTime);
        timer = setInterval(function () {
            var jsTimerTxt1 = '<span class="birthday-Cta_Txt1"><span class="birthday-Util_Show-pc">＼</span>キャンペーン終了まで</span><br class="birthday-Util_Show-sp">';
            var jsTimerTxt2 = '<p class="birthday-Cta_Txt3">キャンペーン終了までに楽天ひかりへのお申し込みが必要です。</p>';
            if (rTime > 0) {
                gDate(rTime);
                rTime--;
                for (let i = 0; i < $jsTimerText.length; i++) {
                    $jsTimerText[i].innerHTML = jsTimerTxt1;
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerCap[i].innerHTML = jsTimerTxt2;
                }
                for (let i = 0; i < $jsCdt.length; i++) {
                    $jsCdt[i].style.display = "block";
                }
            } else {
                clearInterval(timer);
                for (let i = 0; i < $jsTimer.length; i++) {
                    $jsTimer[i].innerHTML = 'キャンペーンは終了しました';
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerCap[i].innerHTML = '';
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerText[i].innerHTML = '';
                }
                for (let i = 0; i < $jsTimerCap.length; i++) {
                    $jsTimerButton[i].style.display = 'none';
                }
                for (let i = 0; i < $jsCdt.length; i++) {
                    $jsCdt[i].style.display = "block";
                }


                // for (let i = 0; i < $jsCdt.length; i++) {
                //     $jsCdt[i].style.display = "none";
                // }
            }
        }, 1000);

    });

    }
    cdt();
