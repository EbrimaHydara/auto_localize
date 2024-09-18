import { saikyo_plan_reception } from '../csv-data/saikyo-plan-reception.js'

const targetBtn = document.getElementById('js-entryBtn');
const targetShopname = document.getElementById('js-shopName');
const parameter = location.search;
let shopId = '';
if (parameter.length > 0) {
    const regex = /shop_id=[0-9]{4}|shop_id=[a-z]{2}[0-9]{4}/;
    shopId = parameter.match(regex)[0].slice(8);
}

const ouboUrl = 'https://oubo.rakuten.co.jp/apply/rmobile/shopsaikyoplanreception/230628?ekey=';

for (let i = 0, len = saikyo_plan_reception.length; i < len; i++) {
    if (shopId === saikyo_plan_reception[i]['店舗コード']) {
        targetShopname.insertAdjacentHTML('afterbegin', saikyo_plan_reception[i]['ショップ名']);
        targetBtn.href = `${ouboUrl}${shopId}-entry`;
    }
}
