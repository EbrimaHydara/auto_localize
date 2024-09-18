const chk1 = document.getElementById('chk1');
const entryBtn = document.getElementById('entryBtn');
const chkItems = document.getElementsByClassName('js-chk');
const historyBtn = document.getElementById('js-history-btn');
const previousPage = document.referrer;

chkItems.forEach(element => {
    element.onclick = function() {
        if(  chk1.checked ) {
            entryBtn.setAttribute( 'aria-disabled', false);
        } else {
            entryBtn.setAttribute( 'aria-disabled', true);
        }
    }
});

if( previousPage.match('https://item.rakuten.co.jp/') ) {
    historyBtn.setAttribute('href', 'javascript:void(0)');
    historyBtn.onclick = function() {
        history.back()
    }
} else {
    historyBtn.setAttribute('href', 'https://www.rakuten.ne.jp/gold/rakutenmobile-store/');
}
