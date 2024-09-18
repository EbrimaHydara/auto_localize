const $zipcode = document.getElementById('00N2v00000JLlAI');


// 半角→全角(英字)

export const hankakuEToZenkakuE = (str) => {
    return str.replace(/[A-Za-z]/g, function(s){
        return String.fromCharCode(s.charCodeAt(0)+0xFEE0);
    });
}

// 半角→全角(数字)
export const hankakuNumToZenkakuNum = (str) => {
    return str.replace(/[0-9]/g, function(s){
        return String.fromCharCode(s.charCodeAt(0)+0xFEE0);
    });
}

// 半角ハイフン→全角ハイフン
export const hankakuHypToZenkakuHyp = (str) => {
    return str.replace(/-/g, 'ー');
}

// 半角カタカナを全角カタカナに変換
export const replaceKanaHalfToFull = (str) =>{
    var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };
    let reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str.replace(reg, function(s){
        return kanaMap[s];
    }).replace(/ﾞ/g, '゛').replace(/ﾟ/g, '゜');
}

//全角数字を半角数字に変換
export const zenkakuNumToHankakuNum=(str)=> {
    return str.replace(/[０-９]/g, function(match) {
        return String.fromCharCode(match.charCodeAt(0) - 0xFEE0);
    });
}


//全角半角ハイフン・ハイフンに似た記号を削除
export const removeHyphen =(str) =>{
    return str.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, "");
}

//全角英字→半角英字
export const zenkakuEToHankakuE =(str)=> {
    return str.replace(/[Ａ-Ｚａ-ｚ]/g, function(s){
        return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
    });
}

//全角記号→半角記号
export const zenSymToHanSym =(str) =>{
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 0xFF01 && charCode <= 0xFF0F || charCode >= 0xFF1A && charCode <= 0xFF20 || charCode >= 0xFF3B && charCode <= 0xFF40 || charCode >= 0xFF5B && charCode <= 0xFF5F) {
            result += String.fromCharCode(charCode - 0xFEE0);
        // } else if (charCode === 0x3000) {
        //     result += ' '; // 全角スペースを半角スペースに変換
        } else {
            result += str.charAt(i);
        }
    }
    return result.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');//ハイフンとかマイナスっぽいものをまとめて半角ハイフンに変換
}

//半角数字・記号を含む時trueを返す
export const hasSymbolOrNumber =(str) => {
    return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/.test(str);
}

//半角数字・記号を含む時trueを返す ハイフンは含まれていてもfalse
export const hasSymbolOrNumberExHyphen =(str)=> {
    return /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?0-9]/.test(str);
}
//半角記号を含む時trueを返す
export const hasSymbol=(str)=> {
    return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);
}
//半角記号を含む時trueを返す ハイフンは含まれていてもfalse
export const hasSymbolExHyphen=(str)=> {
    return /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(str);
}

export const hasJapanese=(str)=> {
    // 日本語の正規表現パターン
    const pattern = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+/;
    return pattern.test(str);
}


//郵便番号からハイフン削除+全角数字を半角に変換
$zipcode.addEventListener('blur', function(e) {
    if( document.getElementById('00N2v00000JLlAI').value.match(/[Ａ-Ｚａ-ｚ０-９！-～]/g) ) {
        document.getElementById('00N2v00000JLlAI').value = hankaku2Zenkaku(document.getElementById('00N2v00000JLlAI').value);
        document.getElementById('00N2v00000JLlAI').value = document.getElementById('00N2v00000JLlAI').value.replace(/-|−/g,"");
    }

    if( document.getElementById('00N2v00000JLlAI').value.match('-' || '−' || 'ー') != -1 ) {
        document.getElementById('00N2v00000JLlAI').value = document.getElementById('00N2v00000JLlAI').value.replace(/-|−|ー/g,"");
    }
});

export const hankaku2Zenkaku=(str)=> {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}

export const hankakuComToZenkakuCom=(str)=> {
    return str.replace(/,/g, '、');
}