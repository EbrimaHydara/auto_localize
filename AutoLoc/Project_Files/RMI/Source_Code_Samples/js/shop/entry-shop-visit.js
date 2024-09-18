const targetBtns = [...document.querySelectorAll('.js-entryBtn')];
const ouboUrl = 'https://oubo.rakuten.co.jp/apply/rmobile/shopvisit/231101';
const parameter = location.search;

if (parameter.length > 0) {
    if (parameter.indexOf('scid=we_gdn_shop_entry200') !== -1) {
        const ouboUrlAddEkey = `${ouboUrl}?ekey=ad-entry_gdn1`;
        targetBtns.forEach(targetBtn => targetBtn.setAttribute('href', ouboUrlAddEkey));
    }
}
