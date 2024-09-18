export const priceInfo = (caseSize, caseType, band) => {
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'グリーン':
            case 'ブルー':
            case '(PRODUCT)RED':
            result = 'アルミニウムケース';
            break;
            case 'グラファイト':
            case 'シルバー':
            case 'ゴールド':
            result = 'ステンレススチールケース';
            break;
            default:
            result = 'アルミニウムケース';
        }
        return result;
    };
    const genId = `${caseSize}mm${caseType}${getCaseMat()}と${band}`;
    console.log(genId);
    let result = [];
    /* original strings
    Apple Watch Series 7 - 41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 7 - 41mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 7 - 41mmグリーンアルミニウムケースとクローバースポーツバンド
    Apple Watch Series 7 - 41mmブルーアルミニウムケースとアビスブルースポーツバンド
    Apple Watch Series 7 - 41mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド // to be adjusted
    Apple Watch Series 7 - 41mmシルバーステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 7 - 41mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 7 - 41mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 7 - 41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 7 - 45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 7 - 45mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 7 - 45mmグリーンアルミニウムケースとクローバースポーツバンド
    Apple Watch Series 7 - 45mmブルーアルミニウムケースとアビスブルースポーツバンド
    Apple Watch Series 7 - 45mm (PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド // to be adjusted
    Apple Watch Series 7 - 45mmシルバーステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 7 - 45mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 7 - 45mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 7 - 45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ

    original Price in one inst
    ¥60,800
    ¥60,800
    ¥60,800
    ¥60,800
    ¥60,800
    ¥82,800
    ¥82,800
    ¥82,800
    ¥88,300
    ¥88,300
    ¥88,300
    ¥64,780
    ¥64,780
    ¥64,780
    ¥64,780
    ¥64,780
    ¥88,770
    ¥88,770
    ¥88,770
    ¥94,270
    ¥94,270
    ¥94,270

    original Price in 24 inst(initial)
    ¥344 // ???
    ¥2,541
    ¥2,541
    ¥2,541
    ¥2,541
    ¥3,450
    ¥3,450
    ¥3,450
    ¥3,683
    ¥3,683
    ¥3,683
    ¥2,703
    ¥2,703
    ¥2,703
    ¥2,703
    ¥2,703
    ¥3,716
    ¥3,716
    ¥3,716
    ¥3,949
    ¥3,949
    ¥3,949

    original Price in 48 inst(initial)
    ¥178 //?
    ¥1,298
    ¥1,298
    ¥1,298
    ¥1,298
    ¥1,725
    ¥1,725
    ¥1,725
    ¥1,867
    ¥1,867
    ¥1,867
    ¥1,377
    ¥1,377
    ¥1,377
    ¥1,377
    ¥1,377
    ¥1,867
    ¥1,867
    ¥1,867
    ¥2,009
    ¥2,009
    ¥2,009
    */
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        result = ['60401', '2533', '1275']
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンド'://2
        result = ['60401', '2533', '1275']
        break;
        case '41mmグリーンアルミニウムケースとクローバースポーツバンド'://3
        result = ['60401', '2533', '1275']
        break;
        case '41mmブルーアルミニウムケースとアビスブルースポーツバンド'://4
        result = ['60401', '2533', '1275']
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://5
        result = ['60401', '2533', '1275']
        break;
        case '41mmシルバーステンレススチールケースとスターライトスポーツバンド'://6
        result = ['82900', '3458', '1731', '92900'];
        break;
        case '41mmシルバーステンレススチールケースとシルバーミラネーゼループ'://9
        result = ['89300', '3740', '1880', '99300'];
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループ'://10
        result = ['89300', '3740', '1880', '99300'];
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://11
        result = ['89300', '3740', '1880', '99300'];
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://12
        result = ['64200', '2675', '1361', '74200'];
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンド'://13
        result = ['64200', '2675', '1361', '74200'];
        break;
        case '45mmグリーンアルミニウムケースとクローバースポーツバンド'://14
        result = ['64200', '2675', '1361', '74200'];
        break;
        case '45mmブルーアルミニウムケースとアビスブルースポーツバンド'://15
        result = ['64200', '2675', '1361', '74200'];
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://16
        result = ['64200', '2675', '1361', '74200'];
        break;
        case '45mmシルバーステンレススチールケースとスターライトスポーツバンド'://17
        result = ['89300', '3740', '1880', '99300'];
        break;
        case '45mmシルバーステンレススチールケースとシルバーミラネーゼループ'://20
        result = ['95800', '4007', '2035', '105800'];
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループ'://21
        result = ['95800', '4007', '2035', '105800'];
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://22
        result = ['95800', '4007', '2035', '105800'];
        break;
        default:
        result = ['60401', '2533', '1275']
    }
    return result;
};
