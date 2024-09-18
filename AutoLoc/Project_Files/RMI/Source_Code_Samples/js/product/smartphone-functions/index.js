/**
 * 二重価格、打ち消し価格の方に'※'を追加する（イレギュラー対応）
 * @param {'light'|'dark'} [theme='light'] - 背景のカラーパターン
 * @param {string} [note='※4'] - 挿入テキスト
 */
const insertNoteBeforePriceElm = (theme = 'light', note = '※4') => {
  const beforePriceYen = document.querySelector('#js-price-detail #js-beforeprice-yen');
  if (beforePriceYen) {
    const span = document.createElement('span');
    span.classList.add('c-Txt_Cap');
    if (theme === 'dark') {
      span.style.color = 'white';
    }
    span.textContent = note;
    beforePriceYen.insertAdjacentElement('beforeend', span);
  }
}

export { insertNoteBeforePriceElm }
