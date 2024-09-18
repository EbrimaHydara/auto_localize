export function displayCategory(directoryName) {
    const map = new Map([
        [ 'fee', '料金プラン' ],
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

// export function optimalTxt(text, n) {
//     // if( !text ) return;
//     let word = text;

//     // if( word.indexOf(' | 楽天モバイル') !== -1 ) {
//     //     word = word.replace(' | 楽天モバイル', '');
//     // }
//     word = word.length > n ? (word).slice(0, n) + '…' : word;
//     // word = word.replace(/{{{/g, '<span class="search-Result_Txthighlignt">').replace(/}}}/g, '</span>');

//     return word;
// }


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

    // word.forEach(element => {
    //     const searchRegExp = new RegExp(element, 'ig');
    //     text = text.replace(searchRegExp, match =>`<span class="search-Result_Txthighlignt">${match}</span>`);
    // });

    return text;
}
