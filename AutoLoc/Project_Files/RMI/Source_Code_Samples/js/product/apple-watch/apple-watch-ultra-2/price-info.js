export const priceInfo = (caseSize, caseType, band) => {
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'チタニウム':
            result = 'チタニウムケース';
            break;
            default:
            result = 'チタニウムケース';
        }
        return result;
    };
    const genId = `${caseSize}mm${getCaseMat()}と${band}`;
    console.log(genId);
    let result = [];
    /* original strings
    Apple Watch Ultra 2- 49mm チタニウムケースとブルーアルパインループ
    Apple Watch Ultra 2- 49mm チタニウムケースとインディゴアルパインループ
    Apple Watch Ultra 2- 49mm チタニウムケースとオリーブアルパインループ
    Apple Watch Ultra 2- 49mm チタニウムケースとグリーン/グレイトレイルループ
    Apple Watch Ultra 2- 49mm チタニウムケースとブルー/ブラックトレイルループ-
    Apple Watch Ultra 2- 49mm チタニウムケースとオレンジ/ベージュトレイルループ
    Apple Watch Ultra 2- 49mm チタニウムケースとブルーオーシャンバンド
    Apple Watch Ultra 2- 49mm チタニウムケースとオレンジオーシャンバンド
    Apple Watch Ultra 2- 49mm チタニウムケースとホワイトオーシャンバンド

    original Price in one inst
    ¥136,800

    original Price in 24 inst(initial)
    ¥0
    ¥5,700

    original Price in 48 inst(initial)
    ¥0
    ¥2,850

    */
    switch (genId) {
        case '49mmチタニウムケースとブルーアルパインループ':
        case '49mmチタニウムケースとインディゴアルパインループ':
        case '49mmチタニウムケースとオリーブアルパインループ':
        case '49mmチタニウムケースとグリーン/グレイトレイルループ':
        case '49mmチタニウムケースとブルー/ブラックトレイルループ':
        case '49mmチタニウムケースとオレンジ/ベージュトレイルループ':
        case '49mmチタニウムケースとブルーオーシャンバンド':
        case '49mmチタニウムケースとオレンジオーシャンバンド':
        case '49mmチタニウムケースとホワイトオーシャンバンド':
        result = ['128800', '5382', '2699'];
        break;
        default:
        result = ['128800', '5382', '2699'];
    }
    return result;
};
