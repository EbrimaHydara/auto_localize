export const priceInfo = (caseSize, caseType, band) => {
    const genId = `${caseSize}mm${caseType}ケースと${band}`;
    console.log(genId);
    let result = [];
    switch (genId) {
        case '40mmスペースグレイアルミニウムケースとアンスラサイト/ブラックNikeスポーツバンド'://1
        result = ['41000', '1716', '862'];
        break;
        case '40mmシルバーアルミニウムケースとピュアプラチナム/ブラックNikeスポーツバンド'://2
        result = ['41000', '1716', '862'];
        break;
        case '44mmスペースグレイアルミニウムケースとアンスラサイト/ブラックNikeスポーツバンド'://3
        result = ['44800', '1882', '949', '49800'];
        break;
        case '44mmシルバーアルミニウムケースとピュアプラチナム/ブラックNikeスポーツバンド'://4
        result = ['44800', '1882', '949', '49800'];
        break;
        default:
        result = ['41000', '1716', '862'];
    }
    return result;
};
