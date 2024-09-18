// import 'whatwg-fetch';
// import 'core-js/modules/es.promise';

// async function getShopdata() {
//     const res = await fetch('/assets/json/shop-reception.json');
//     const data = res.ok ? await res.json() : [];

//     return data;
// }

// const shopdata = getShopdata();

const shopdata = $.ajax({
    url: '/assets/json/shop-reception.json',
    dataType: 'json'
});


const targetBtn = document.getElementById('entryBtn');
const targetShopname = document.getElementById('shopName');
const parameter = location.search;
let shopId = '';
let entryType = 'flyer';


if (parameter.length > 0) {
    shopId = parameter.match("shop_id=[0-9]{4}")[0];
    shopId = shopId.slice(-4);

    if (parameter.indexOf('_tablet') > 0) {
        entryType = 'tablet';
    }
}

shopdata.then(data => {
    for (let i = 0, len = data.length; i < len; i++) {
        if (shopId === data[i]['店舗コード']) {
            targetShopname.innerHTML = data[i]['ショップ名'];
            targetBtn.href = 'https://oubo.rakuten.co.jp/apply/rmobile/shopmigration/200511?ekey=' + shopId + '-' + entryType;
        }
    }
});

