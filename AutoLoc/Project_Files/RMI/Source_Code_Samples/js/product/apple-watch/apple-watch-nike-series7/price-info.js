export const priceInfo = (caseSize, caseType, band) => {
    const genId = `${caseSize}mm${caseType}ケースと${band}`;
    console.log(genId);
    let result = [];
    /* original strings
    Apple Watch Nike Series 7 - 41mmミッドナイトアルミニウムケースとアンスラサイト/ブラックNikeスポーツバンド
    Apple Watch Nike Series 7 - 41mmスターライトアルミニウムケースとピュアプラチナム/ブラックNikeスポーツバンド
    Apple Watch Nike Series 7 - 45mmミッドナイトアルミニウムケースとアンスラサイト/ブラックNikeスポーツバンド
    Apple Watch Nike Series 7 - 45mmスターライトアルミニウムケースとピュアプラチナム/ブラックNikeスポーツバンド

    original Price in one inst
    ¥60,800
    ¥60,800
    ¥64,780
    ¥64,780

    original Price in 24 inst(initial)
    ¥2,541
    ¥2,541
    ¥2,703
    ¥2,703

    original Price in 48 inst(initial)
    ¥1,298
    ¥1,298
    ¥1,377
    ¥1,377
    */
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとアンスラサイト/ブラックNikeスポーツバンド'://1
        result = ['60401', '2533', '1275'];
        break;
        case '41mmスターライトアルミニウムケースとピュアプラチナム/ブラックNikeスポーツバンド'://2
        result = ['60401', '2533', '1275'];
        break;
        case '45mmミッドナイトアルミニウムケースとアンスラサイト/ブラックNikeスポーツバンド'://3
        result = ['64200 ', '2675', '1361','74200'];
        break;
        case '45mmスターライトアルミニウムケースとピュアプラチナム/ブラックNikeスポーツバンド'://4
        result = ['64200 ', '2675', '1361','74200'];
        break;
        default:
        result = ['60401', '2533', '1275'];
    }
    return result;
};
