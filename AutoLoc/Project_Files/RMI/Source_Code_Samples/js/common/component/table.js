import ScrollHint from 'scroll-hint';

export const table = ($target = '') => {
  new ScrollHint( $target + ' .js-Scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
};
