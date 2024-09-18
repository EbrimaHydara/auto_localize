/**
 * NDEPチャットのボタンの切り替え
 * 営業時間内ではアクティブ、営業時間外では非アクティブ
 * 現在は24時間体制なので、一旦コメントアウト
 */
const changeStateChatBtn = () => {
  $.ajax({
    type: 'GET'
  }).done(function(data, status, xhr) {
    const serverDate = new Date(xhr.getResponseHeader('Date'));
    const getNow = {
      prod: () => serverDate.getHours(),
      dev: () => new Date().getHours(),
    }

    if (serverDate.getYear() > 100) {
      const currentTime = getNow.prod();
      console.log({currentTime});
      if (currentTime < 9 || currentTime >= 23) {
        $('#js-ndep-chat-btn').css('display', 'none');
        $('#js-use-chat-consultation').css('display', 'block');
      }
    }
  });
}

const init = () => {
  // changeStateChatBtn();
}

window.addEventListener('DOMContentLoaded', init);
