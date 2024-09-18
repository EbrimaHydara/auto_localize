const axios = require('axios');
const $poikakuLpBnr = $('.i-Poikaku-lp-bnr');
const $poikakuLpBnrNonLogin = $('.i-Poikaku-lp-bnr-nonlogin');
let isLogin;
let isUseApi = true;

const getMemberInfo = async () => {        
    if (!isUseApi) {
        const param =location.search;
        isLogin = param.indexOf('login') !== -1 ? true : false;
    } else {
        // 本番用エンドポイント
        const userDataUrl = 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519';

        const userData = await axios({
            method: 'get',
            url: userDataUrl,
            withCredentials: true
        });

        const data = userData.data;

        isLogin = data ? true : false;
    }
}

const showBnr = () => {
    if(isLogin) {
        $poikakuLpBnr.css('display', 'block');
    } else {
        $poikakuLpBnrNonLogin.css('display', 'block');
    }
}

getMemberInfo()
    .then(() => {
        showBnr();
    })
    .catch((err) => {
        console.log(err);
        showBnr();
    });