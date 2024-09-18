window.onload = function() {
  const ref = document.referrer;
  const domainCheck = /^(https|http):\/\/([a-zA-Z0-9!-/:-@¥[-`{-~]{1,}\.|)?(rakuten\.co\.jp|rakuten-mobile\.rocks|localhost:8000|rmb-ss\.jp)(\/(.*)|\?(.*)|$)$/;
  const result = domainCheck.test(ref);
  if (!result) {
    return;
  }
  const params = location.href;
  function getParams(params){
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    const params_obj = {};
    let match;
    while((match = regex.exec(params)) !== null){
      params_obj[match[1]] = match[2];
    }
    return params_obj["movie-id"];
  }
  document.getElementById('js-iframe').src = 'https://www.youtube.com/embed/'+getParams(params)+'?rel=0';
};

$(window).on('load resize', function() {
  let deviceWidth = $(window).width(),
      deviceHeight = $(window).height(),
      youtubeContainer = $(".js-youtube-container"),
      containerWidth ;
  if(deviceHeight / deviceWidth < 56.25) {
    containerWidth = deviceHeight*1.777777777777777;
  } else {
    containerWidth = '100%';
  }
  youtubeContainer.width(containerWidth);
});
