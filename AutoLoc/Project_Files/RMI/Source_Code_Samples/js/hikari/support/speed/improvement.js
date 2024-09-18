import ScrollHint from 'scroll-hint';

window.addEventListener('DOMContentLoaded', function(){
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});
