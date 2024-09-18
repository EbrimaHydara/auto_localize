export function displayCategory(directoryName) {
    const map = new Map([
        [ 'plan', '料金プラン' ],
        [ 'product', '製品' ],
        [ 'area', '通信・エリア' ],
        [ 'shop-detail', '店舗' ],
        [ 'service', 'オプションサービス' ],
        [ 'campaign', 'キャンペーン・特典' ],
        [ 'guide', 'お客様サポート' ],
        [ 'faq', 'よくあるご質問' ],
        [ 'support', 'お客様サポート' ],
    ]);

    const keys = map.keys();
    let categoryName = 'その他';
    for( let key of keys ) {
        if ( directoryName === key ) {
            categoryName = map.get(key);
        }
    }
    return categoryName;
}

export function optimalTxt(text, searchWord, n) {
    if( !text ) return;
    const space = '　';
    let words = searchWord;
    let word = [];

    if( words !== null ) {
        if( searchWord.indexOf(space) !== -1 ) {
            words = searchWord.replace(space, ' ');
        }
        if( words.indexOf(' ') !== -1 ) {
            word = words.split(' ');
        } else {
            word.push(searchWord);
        }
    }

    if( / \| 楽天モバイル$/.test(text) ) {
        text = text.replace(/ \| 楽天モバイル$/, '');
    }
    text = text.length > n ? (text).slice(0, n) + '…' : text;

    return text;
}
