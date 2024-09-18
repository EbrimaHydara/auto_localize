export const priceInfo = (caseSize, caseType, band) => {
    const genId = `${caseSize}mm${caseType}ケースと${band}`;
    console.log(genId);
    let result = [];
    /* original strings
    Apple Watch SE - 40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch SE - 40mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch SE - 40mmシルバーアルミニウムケースとホワイトスポーツバンド
    Apple Watch SE - 44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch SE - 44mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch SE - 44mmシルバーアルミニウムケースとホワイトスポーツバンド

    original Price in one inst
    ¥45,800
    ¥45,800
    ¥45,800
    ¥50,800
    ¥50,800
    ¥50,800

    original Price in 24 inst(initial)
    ¥1,916
    ¥1,916
    ¥1,916
    ¥2,132
    ¥2,132
    ¥2,132

    original Price in 48 inst(initial)
    ¥962
    ¥962
    ¥962
    ¥1,074
    ¥1,074
    ¥1,074
    */
    switch (genId) {
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        result = ['45800', '1916', '962'];
        break;
        case '40mmスターライトアルミニウムケースとスターライトスポーツバンド'://2
        result = ['45800', '1916', '962'];
        break;
        case '40mmシルバーアルミニウムケースとホワイトスポーツバンド'://3
        result = ['45800', '1916', '962'];
        break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://4
        result = ['50800', '2132', '1074'];
        break;
        case '44mmスターライトアルミニウムケースとスターライトスポーツバンド'://5
        result = ['50800', '2132', '1074'];
        break;
        case '44mmシルバーアルミニウムケースとホワイトスポーツバンド'://6
        result = ['50800', '2132', '1074'];
        break;
        default:
        result = ['45800', '1916', '962'];
    }
    return result;
};
