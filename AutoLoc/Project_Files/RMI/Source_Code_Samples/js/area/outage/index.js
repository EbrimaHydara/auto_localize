const selectArea = document.getElementById('selectArea');
const lastUpdate = document.getElementById('lastUpdate');
const selectPrefecture = document.getElementById('selectPrefecture');
let selectPrefectureItem = [];
const renderingArea = document.getElementById('renderingArea');
const renderingAreaList = document.getElementById('renderingAreaList');
let prefecture = [];
let targetPrefecture = '';
let targetAtr = '';
let spot = [];
let spotAtr = [];
let spotTunnel = [];
let spotInstitution = [];
let spotRailroad = [];
let result = [];
const allArea = document.getElementsByClassName('js-area');
const alertSelect = document.getElementById('alertSelect');

const allAreaDispNone = () => {
    allArea.forEach(element => {
        element.style.display = 'none';
    });
}

allAreaDispNone();

$.ajax({
    url: '/assets/json/area-outage.json',
    type: 'GET',
    dataType: 'json'
}).done(
    function(data) {
        lastUpdate.innerText = data[0].update;
        result = data.sort(function(a, b) {
            return (a.ruby < b.ruby) ? 1 : -1;
        });
        result.forEach(element => {
            switch( element.area2 ) {
                case '北海道':
                    targetPrefecture = 'hokkaido';
                    break;
                case '青森県':
                    targetPrefecture = 'aomori';
                    break;
                case '福島県':
                    targetPrefecture = 'fukushima';
                    break;
                case '山形県':
                    targetPrefecture = 'yamagata';
                    break;
                case '秋田県':
                    targetPrefecture = 'akita';
                    break;
                case '宮城県':
                    targetPrefecture = 'miyagi';
                    break;
                case '岩手県':
                    targetPrefecture = 'iwate';
                    break;
                case '東京都':
                    targetPrefecture = 'tokyo';
                    break;
                case '長野県':
                    targetPrefecture = 'nagano';
                    break;
                case '神奈川県':
                    targetPrefecture = 'kanagawa';
                    break;
                case '茨城県':
                    targetPrefecture = 'ibaraki';
                    break;
                case '千葉県':
                    targetPrefecture = 'chiba';
                    break;
                case '埼玉県':
                    targetPrefecture = 'saitama';
                    break;
                case '新潟県':
                    targetPrefecture = 'nigata';
                    break;
                case '山梨県':
                    targetPrefecture = 'yamanashi';
                    break;
                case '群馬県':
                    targetPrefecture = 'gunma';
                    break;
                case '栃木県':
                    targetPrefecture = 'tochigi';
                    break;
                case '福井県':
                    targetPrefecture = 'fukui';
                    break;
                case '石川県':
                    targetPrefecture = 'ishikawa';
                    break;
                case '富山県':
                    targetPrefecture = 'toyama';
                    break;
                case '愛知県':
                    targetPrefecture = 'aichi';
                    break;
                case '静岡県':
                    targetPrefecture = 'shizuoka';
                    break;
                case '岐阜県':
                    targetPrefecture = 'gifu';
                    break;
                case '大阪府':
                    targetPrefecture = 'osaka';
                    break;
                case '和歌山県':
                    targetPrefecture = 'wakayama';
                    break;
                case '奈良県':
                    targetPrefecture = 'nara';
                    break;
                case '兵庫県':
                    targetPrefecture = 'hyogo';
                    break;
                case '京都府':
                    targetPrefecture = 'kyoto';
                    break;
                case '滋賀県':
                    targetPrefecture = 'shiga';
                    break;
                case '三重県':
                    targetPrefecture = 'mie';
                    break;
                case '高知県':
                    targetPrefecture = 'kochi';
                    break;
                case '愛媛県':
                    targetPrefecture = 'ehime';
                    break;
                case '香川県':
                    targetPrefecture = 'kagawa';
                    break;
                case '徳島県':
                    targetPrefecture = 'tokushima';
                    break;
                case '山口県':
                    targetPrefecture = 'yamaguchi';
                    break;
                case '広島県':
                    targetPrefecture = 'hiroshima';
                    break;
                case '岡山県':
                    targetPrefecture = 'okayama';
                    break;
                case '島根県':
                    targetPrefecture = 'shimane';
                    break;
                case '鳥取県':
                    targetPrefecture = 'tottori';
                    break;
                case '福岡県':
                    targetPrefecture = 'fukuoka';
                    break;
                case '大分県':
                    targetPrefecture = 'oita';
                    break;
                case '沖縄県':
                    targetPrefecture = 'okinawa';
                    break;
                case '鹿児島県':
                    targetPrefecture = 'kagoshima';
                    break;
                case '宮崎県':
                    targetPrefecture = 'miyazaki';
                    break;
                case '熊本県':
                    targetPrefecture = 'kumamoto';
                    break;
                case '長崎県':
                    targetPrefecture = 'nagasaki';
                    break;
                case '佐賀県':
                    targetPrefecture = 'saga';
                    break;
            }


            switch( element.atr ) {
                case '鉄道':
                    targetAtr = 'railroad';
                    break;
                case '施設':
                    targetAtr = 'istitution';
                    break;
                case 'トンネル':
                    targetAtr = 'tunnel';
                    break;
                case '病院':
                    targetAtr = 'istitution';
                    break;
                case '地下街':
                    targetAtr = 'istitution';
                    break;
            }

            document.querySelector(`#${targetPrefecture} > .js-spot-${targetAtr}`).insertAdjacentHTML( 'afterbegin', `<div class="outage-Layout_List-item">${element.spot}</div>`);


        });

       document.getElementById('kanto').style.display = 'block';

       selectArea.onchange = function() {
            allAreaDispNone();
            alertSelect.style.display = 'none';
            document.getElementById(selectArea.value).style.display = 'block';

            document.querySelectorAll(`#${selectArea.value} > div`).forEach(element => {
                element.style.display = 'block';
            });

            selectPrefecture.innerHTML = '';
            switch (selectArea.value) {
                case 'hokkaido':
                    selectPrefectureItem = [
                        ['hokkaido','北海道']
                    ]
                    break;
                case 'tohoku':
                    selectPrefectureItem = [
                        ['aomori','青森県'],
                        ['iwate','岩手県'],
                        ['miyagi','宮城県'],
                        ['akita','秋田県'],
                        ['yamagata','山形県'],
                        ['fukushima','福島県']
                    ];
                    break;
                case 'kanto':
                    selectPrefectureItem = [
                        ['ibaraki','茨城県'],
                        ['tochigi','栃木県'],
                        ['gunma','群馬県'],
                        ['saitama','埼玉県'],
                        ['chiba','千葉県'],
                        ['tokyo','東京都'],
                        ['kanagawa','神奈川県'],
                        ['nigata','新潟県'],
                        ['yamanashi','山梨県'],
                        ['nagano','長野県']
                    ];
                    break;
                case 'hokuriku':
                    selectPrefectureItem = [
                        ['toyama','富山県'],
                        ['ishikawa','石川県'],
                        ['fukui','福井県']
                    ];
                    break;
                case 'tokai':
                    selectPrefectureItem = [
                        ['gifu','岐阜県'],
                        ['shizuoka','静岡県'],
                        ['aichi','愛知県']
                    ]
                    break;
                case 'kansai':
                    selectPrefectureItem = [
                        ['mie','三重県'],
                        ['shiga','滋賀県'],
                        ['kyoto','京都府'],
                        ['osaka','大阪府'],
                        ['hyogo','兵庫県'],
                        ['nara','奈良県'],
                        ['wakayama','和歌山県'],
                    ]
                    break;
                case 'shikoku':
                    selectPrefectureItem = [
                        ['tokushima','徳島県'],
                        ['kagawa','香川県'],
                        ['ehime','愛媛県'],
                        ['kochi','高知県']
                    ]
                    break;
                case 'chugoku':
                    selectPrefectureItem = [
                        ['tottori','鳥取県'],
                        ['shimane','島根県'],
                        ['okayama','岡山県'],
                        ['hiroshima','広島県'],
                        ['yamaguchi','山口県']
                    ]
                    break;
                case 'kyushu':
                    selectPrefectureItem = [
                        ['fukuoka','福岡県'],
                        ['saga','佐賀県'],
                        ['nagasaki','長崎県'],
                        ['kumamoto','熊本県'],
                        ['oita','大分県'],
                        ['miyazaki','宮崎県'],
                        ['kagoshima','鹿児島県'],
                        ['okinawa','沖縄県']
                    ]
                    break;
            }
            selectPrefectureItem.reverse();
            selectPrefectureItem.forEach(element => {
                selectPrefecture.insertAdjacentHTML( 'afterbegin', `<option value="${element[0]}">${element[1]}</option>`);
            });
            if( selectPrefectureItem[0][0] !== 'hokkaido' ) {
                selectPrefecture.insertAdjacentHTML( 'afterbegin', `<option selected value="選択してください">選択してください</option>`);
            }

        }

        selectPrefecture.onchange = function() {

            if( selectPrefecture.value == '選択してください' ) {
                document.querySelectorAll('.js-area > div').forEach(element => {
                    element.style.display = 'none';
                });
                alertSelect.style.display = 'block'
            } else {
                alertSelect.style.display = 'none';
                document.querySelectorAll('.js-area > div').forEach(element => {
                    element.style.display = 'none';
                });
                document.getElementById(selectPrefecture.value).style.display = 'block';
            }

        }
    })
.catch(err => {
    console.log(err);
});
