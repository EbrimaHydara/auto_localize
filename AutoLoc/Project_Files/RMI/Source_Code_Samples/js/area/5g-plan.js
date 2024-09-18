const area5g = document.getElementById('js-area-5g');
const prefectures = {
    "北海道": "hokkaido", "青森県" : "aomori", "岩手県" : "iwate", "宮城県" : "miyagi", "秋田県" : "akita", "山形県" : "yamagata", "福島県" : "fukushima", "茨城県" : "ibaraki", "栃木県" : "tochigi", "群馬県" : "gunma",
    "埼玉県" : "saitama", "千葉県" : "chiba", "東京都" : "tokyo", "神奈川県" : "kanagawa", "新潟県" : "niigata", "富山県" : "toyama", "石川県" : "ishikawa", "福井県" : "fukui", "山梨県" : "yamanashi", "長野県" : "nagano",
    "岐阜県" : 'gifu',  "静岡県" : 'shizuoka',  "愛知県" : 'aichi',  "三重県" : 'mie',  "滋賀県" : 'shiga',  "京都府" : 'kyoto', "大阪府" : 'osaka', "兵庫県" : "hyogo", "奈良県" : "nara", "和歌山県" : "wakayama",
    "鳥取県" : "tottori","島根県" : "shimane","岡山県" : "okayama", "広島県" : "hiroshima", "山口県" : "yamaguchi", "徳島県" : "tokushima", "香川県" : "kagawa", "愛媛県" : "ehime", "高知県" : "kochi", "福岡県" : "fukuoka",
    "佐賀県" : "saga", "長崎県" : "nagasaki", "熊本県" : "kumamoto", "大分県" : "oita", "宮崎県" : "miyazaki", "鹿児島県" : "kagoshima", "沖縄県" : "okinawa"
};

if(area5g) {
    $.ajax({
        url: '/assets/json/5g-plan.json',
        dataType: 'json'
    })
    .then(data => {
        let prefecture_list = {};
        data.forEach(data => {
            for(const key of Object.keys(prefectures)) {
                // if( key === data.都道府県 ){
                if( key.indexOf(data.都道府県) != -1 ){
                    const prefecture = prefectures[key];
                    prefecture_list[key] = prefecture;
                    if (Number(data.mmw) > 0) {
                        $("#" + prefecture +'-mmw-list').append('<li>' + data.市区町村 + '付近</li>');
                        $("#" + prefecture +'-mmw').css('display','block');
                    }
                    if (Number(data.sub6) > 0) {
                        $("#" + prefecture +'-sub6-list').append('<li>' + data.市区町村 + '付近</li>');
                        $("#" + prefecture +'-sub6').css('display','block');
                    }
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
    });
}
