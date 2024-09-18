export const priceInfo = (caseSize, caseType, band) => {
    const getCaseMat = () => {
        let result = '';
        switch (caseType) {
            case 'ミッドナイト':
            case 'スターライト':
            case 'シルバーALU':
            case '(PRODUCT)RED':
            result = 'アルミニウムケース';
            break;
            case 'グラファイト':
            case 'シルバーSTEEL':
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
    Apple Watch Series 8- 41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 41mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 8- 41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド
    Apple Watch Series 8- 41mmシルバーステンレススチールケースとホワイトスポーツバンド
    Apple Watch Series 8- 41mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 8- 41mmゴールドステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 8- 41mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 8- 41mmグラファイトステンレススチールケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 8- 45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 45mmスターライトアルミニウムケースとスターライトスポーツバンド
    Apple Watch Series 8- 45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド
    Apple Watch Series 8- 45mmシルバーステンレススチールケースとホワイトスポーツバンド
    Apple Watch Series 8- 45mmシルバーステンレススチールケースとシルバーミラネーゼループ
    Apple Watch Series 8- 45mmゴールドステンレススチールケースとスターライトスポーツバンド
    Apple Watch Series 8- 45mmゴールドステンレススチールケースとゴールドミラネーゼループ
    Apple Watch Series 8- 45mmグラファイトステンレススチールケースとミッドナイトスポーツバンド
    Apple Watch Series 8- 45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ
    Apple Watch Series 8- 41mmシルバーアルミニウムケースとホワイトスポーツバンド
    Apple Watch Series 8- 45mmシルバーアルミニウムケースとホワイトスポーツバンド

    original Price in one inst
    ¥74,800
    ¥74,800
    ¥74,800
    ¥104,800
    ¥112,800
    ¥104,800
    ¥112,800
    ¥104,800
    ¥112,800
    ¥79,800
    ¥79,800
    ¥79,800
    ¥112,800
    ¥120,800
    ¥112,800
    ¥120,800
    ¥112,800
    ¥120,800
    ¥74,800
    ¥79,800

    original Price in 24 inst(initial)
    ¥16 // ???
    ¥3,116
    ¥3,116
    ¥3,116
    ¥4,366
    ¥4,700
    ¥4,366
    ¥4,700
    ¥4,366
    ¥4,700
    ¥3,325
    ¥3,325
    ¥3,325
    ¥4,700
    ¥5,033
    ¥4,700
    ¥5,033
    ¥4,700
    ¥5,033
    ¥3,116
    ¥3,325

    original Price in 48 inst(initial)
    ¥16 //?
    ¥1,558
    ¥1,558
    ¥1,558
    ¥2,183
    ¥2,350
    ¥2,183
    ¥2,350
    ¥2,183
    ¥2,350
    ¥1,662
    ¥1,662
    ¥1,662
    ¥2,350
    ¥2,516
    ¥2,350
    ¥2,516
    ¥2,350
    ¥2,516
    ¥1,558
    ¥1,662
    */
    switch (genId) {
        case '41mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://1
        result = ['74800', '3132', '1574'];
        break;
        case '41mmスターライトアルミニウムケースとスターライトスポーツバンド'://2
        result = ['74800', '3132', '1574'];
        break;
        case '41mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://3
        result = ['74800', '3132', '1574'];
        break;
        case '41mmシルバーSTEELステンレススチールケースとホワイトスポーツバンド'://4
        result = ['104800', '4382', '2199'];
        break;
        case '41mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループ'://5
        result = ['112800', '4700', '2350'];
        break;
        case '41mmゴールドステンレススチールケースとスターライトスポーツバンド'://6
        result = ['104800', '4382', '2199'];
        break;
        case '41mmゴールドステンレススチールケースとゴールドミラネーゼループ'://7
        result = ['112800', '4700', '2350'];
        break;
        case '41mmグラファイトステンレススチールケースとミッドナイトスポーツバンド'://8
        result = ['104800', '4382', '2199'];
        break;
        case '41mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://9
        result = ['112800', '4700', '2350'];
        break;
        case '45mmミッドナイトアルミニウムケースとミッドナイトスポーツバンド'://10
        result = ['79800', '3325', '1686'];
        break;
        case '45mmスターライトアルミニウムケースとスターライトスポーツバンド'://11
        result = ['79800', '3325', '1686'];
        break;
        case '45mm(PRODUCT)REDアルミニウムケースと(PRODUCT)REDスポーツバンド'://12
        result = ['79800', '3325', '1686'];
        break;
        case '45mmシルバーSTEELステンレススチールケースとホワイトスポーツバンド'://13
        result = ['112800', '4700', '2350'];
        break;
        case '45mmシルバーSTEELステンレススチールケースとシルバーミラネーゼループ'://14
        result = ['120800', '5041', '2548'];
        break;
        case '45mmゴールドステンレススチールケースとスターライトスポーツバンド'://15
        result = ['112800', '4700', '2350'];
        break;
        case '45mmゴールドステンレススチールケースとゴールドミラネーゼループ'://16
        result = ['120800', '5041', '2548'];
        break;
        case '45mmグラファイトステンレススチールケースとミッドナイトスポーツバンド'://17
        result = ['112800', '4700', '2350'];
        break;
        case '45mmグラファイトステンレススチールケースとグラファイトミラネーゼループ'://18
        result = ['120800', '5041', '2548'];
        break;
        case '41mmシルバーALUアルミニウムケースとホワイトスポーツバンド'://19
        result = ['74800', '3132', '1574'];
        break;
        case '45mmシルバーALUアルミニウムケースとホワイトスポーツバンド'://20
        result = ['79800', '3325', '1686'];
        break;
        default:
        result = ['74800', '3132', '1574'];
    }
    return result;
};
