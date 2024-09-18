export const customerTablet = () => {

    const urlParam = location.search.substring(1);
    if(urlParam) {
        const param = urlParam.split('&');
        let paramArray = [];
        for (let i = 0; i < param.length; i++) {
            const paramItem = param[i].split('=');
            paramArray[paramItem[0]] = paramItem[1];
        }
        if(paramArray.source === 'pos_user') {
            sessionStorage.setItem('shop-tablet', 'customer');
        } else if(paramArray.source === 'pos_csr') {
            sessionStorage.setItem('shop-tablet', 'tablet-staff');
        }
    }

    const onboardingpath = "portal.mobile.rakuten.co.jp/";
    const replaceTarget = document.getElementsByClassName('js-customer-tablet');
    const data = sessionStorage.getItem('shop-tablet');
    if(data === 'customer') {
        replaceTarget.forEach(el => {
            let str = el.getAttribute('href');
            str = str.replace(onboardingpath, 'customer.rmb-ss.jp/');
            el.setAttribute('href', str);
        });
    } else if(data === 'tablet-staff') {
        replaceTarget.forEach(el => {
            let str = el.getAttribute('href');
            str = str.replace(onboardingpath, 'tablet-staff.rmb-ss.jp/');
            el.setAttribute('href', str);
        });
    }

};
