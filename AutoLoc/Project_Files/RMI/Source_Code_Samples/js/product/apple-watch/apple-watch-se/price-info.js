export const priceInfo = (caseSize, caseType, band) => {
    const genId = `${caseSize}mm${caseType}ケースと${band}`;
    console.log(genId);
    let result = [];
    /* original strings
    Apple Watch SE - 40mmシルバーアルミニウムケースとアビスブルースポーツバンド
    Apple Watch SE - 40mmゴールドアルミニウムケースとスターライトスポーツバンド
    Apple Watch SE - 40mmスペースグレイアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch SE - 44mmシルバーアルミニウムケースとアビスブルースポーツバンド
    Apple Watch SE - 44mmゴールドアルミニウムケースとスターライトスポーツバンド
    Apple Watch SE - 44mmスペースグレイアルミニウムケースとミッドナイトスポーツバンド

    original Price in one inst
    ¥38,280
    ¥38,280
    ¥38,280
    ¥38,280
    ¥38,280
    ¥38,280
    ¥41,580
    ¥41,580
    ¥41,580
    ¥41,580
    ¥41,580
    ¥41,580

    original Price in 24 inst(initial)
    ¥1,595
    ¥1,595
    ¥1,595
    ¥1,595
    ¥1,595
    ¥1,595
    ¥1,744
    ¥1,744
    ¥1,744
    ¥1,744
    ¥1,744
    ¥1,744

    original Price in 48 inst(initial)
    ¥821
    ¥821
    ¥821
    ¥821
    ¥821
    ¥821
    ¥878
    ¥878
    ¥878
    ¥878
    ¥878
    ¥878
    */
    switch (genId) {
        case '40mmシルバーアルミニウムケースとアビスブルースポーツバンド'://1
        result = ['41000', '1716', '862'];
        break;
        case '40mmゴールドアルミニウムケースとスターライトスポーツバンド'://2
        result = ['41000', '1716', '862'];
        break;
        case '40mmスペースグレイアルミニウムケースとミッドナイトスポーツバンド'://3
        result = ['41000', '1716', '862'];
        break;
        case '44mmシルバーアルミニウムケースとアビスブルースポーツバンド'://7
        result = ['44800', '1882', '949', '49800'];
        break;
        case '44mmゴールドアルミニウムケースとスターライトスポーツバンド'://8
        result = ['44800', '1882', '949', '49800'];
        break;
        case '44mmスペースグレイアルミニウムケースとミッドナイトスポーツバンド'://9
        result = ['44800', '1882', '949', '49800'];
        break;
        default:
        result = ['41000', '1716', '862'];
    }
    return result;
};
