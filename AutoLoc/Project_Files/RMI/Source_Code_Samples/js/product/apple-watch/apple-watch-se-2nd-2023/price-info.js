export const priceInfo = (caseSize, caseType, band) => {
    const genId = `${caseSize}mm${caseType}ケースと${band}`;
    console.log(genId, 'genId');
    let result = [];
    /* original strings
    Apple Watch SE - 40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch SE - 40mmミッドナイトアルミニウムケースとミッドナイトスポーツループ
    Apple Watch SE - 40mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch SE - 40mmスターライトアルミニウムケースとスターライトスポーツループ
    Apple Watch SE - 40mmシルバーアルミニウムケースとストームブルースポーツバンド
    Apple Watch SE - 40mmシルバーアルミニウムケースとウインターブルースポーツループ
    Apple Watch SE - 44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch SE - 44mmミッドナイトアルミニウムケースとミッドナイトスポーツループ
    Apple Watch SE - 44mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch SE - 44mmスターライトアルミニウムケースとスターライトスポーツループ
    Apple Watch SE - 44mmシルバーアルミニウムケースとストームブルースポーツバンド
    Apple Watch SE - 44mmシルバーアルミニウムケースとウインターブルースポーツループ

    original Price in one inst
    ¥54,780
    ¥54,780
    ¥54,780
    ¥59,180
    ¥59,180
    ¥59,180

    original Price in 24 inst(initial)
    ¥2,294
    ¥2,294
    ¥2,294
    ¥2,485
    ¥2,485
    ¥2,485

    original Price in 48 inst(initial)
    ¥1,153
    ¥1,153
    ¥1,153
    ¥1,276
    ¥1,276
    ¥1,276
    */
    switch (genId) {
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        case '40mmミッドナイトアルミニウムケースとミッドナイトスポーツループ'://2
        case '40mmスターライトアルミニウムケースとスターライトスポーツバンド'://3
        case '40mmスターライトアルミニウムケースとスターライトスポーツループ'://4
        case '40mmシルバーアルミニウムケースとストームブルースポーツバンド'://5
        case '40mmシルバーアルミニウムケースとウインターブルースポーツループ'://6
        result = ['54780', '2294', '1153'];
        break;
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://7
        case '44mmミッドナイトアルミニウムケースとミッドナイトスポーツループ'://8
        case '44mmスターライトアルミニウムケースとスターライトスポーツバンド'://9
        case '44mmスターライトアルミニウムケースとスターライトスポーツループ'://10
        case '44mmシルバーアルミニウムケースとストームブルースポーツバンド'://11
        case '44mmシルバーアルミニウムケースとウインターブルースポーツループ'://12
        result = ['59180', '2485', '1276'];
        break;
        default:
        result = ['54780', '2294', '1153'];
    }
    return result;
};
