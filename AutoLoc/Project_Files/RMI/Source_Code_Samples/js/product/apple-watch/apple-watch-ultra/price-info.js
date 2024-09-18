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
    Apple Watch Ultra- 49mmチタニウムケースとオレンジアルパインループ - S
    Apple Watch Ultra- 49mmチタニウムケースとグリーンアルパインループ - S
    Apple Watch Ultra- 49mmチタニウムケースとスターライトアルパインループ - S
    Apple Watch Ultra- 49mmチタニウムケースとブルー/グレイトレイルループ - S/M
    Apple Watch Ultra- 49mmチタニウムケースとブラック/グレイトレイルループ - S/M
    Apple Watch Ultra- 49mmチタニウムケースとイエロー/ベージュトレイルループ - S/M
    Apple Watch Ultra- 49mmチタニウムケースとホワイトオーシャンバンド
    Apple Watch Ultra- 49mmチタニウムケースとミッドナイトオーシャンバンド
    Apple Watch Ultra- 49mmチタニウムケースとイエローオーシャンバンド

    original Price in one inst
    ¥124,800

    original Price in 24 inst(initial)
    ¥0
    ¥5,200

    original Price in 48 inst(initial)
    ¥0
    ¥2,600

    */
    switch (genId) {
        case '49mmチタニウムケースとオレンジアルパインループ'://1
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとグリーンアルパインループ'://2
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとスターライトアルパインループ'://3
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとブルー/グレイトレイルループ'://4
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとブラック/グレイトレイルループ'://5
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとイエロー/ベージュトレイルループ'://6
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとホワイトオーシャンバンド'://7
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとミッドナイトオーシャンバンド'://8
        result = ['95800', '4007', '2035'];
        break;
        case '49mmチタニウムケースとイエローオーシャンバンド'://9
        result = ['95800', '4007', '2035'];
        break;
        default:
        result = ['95800', '4007', '2035'];
    }
    return result;
};
