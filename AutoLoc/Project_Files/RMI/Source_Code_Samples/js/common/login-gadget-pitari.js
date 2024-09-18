const ele_userRank = document.querySelectorAll('.js-user-rank');
const ele_userName = document.querySelectorAll('.js-user-name');
const ele_userPoint = document.querySelectorAll('.js-user-point');
const ele_pointArea = document.getElementById('js-point-area');
const ele_plusPoint = document.getElementById('js-plus-point');
// const ele_nameWrap = document.getElementById('js-name-wrap');
const ele_spName = document.getElementById('js-sp-name');
const ele_planMessagePc = document.getElementById('js-plan-message-pc');
const ele_planMessageSp = document.getElementById('js-plan-message-sp');
const ele_linkPlan = document.getElementById('js-link-plan');
const ele_anotation = document.getElementById('js-anotation');
const ele_drawerSub = document.getElementById('js-drawer-v2-sub');
const ele_nonLogin = document.getElementById('pitari-non-login')

function checkPattern(point) {
    if( point <= 1077 ) {
        return {
            'id': 2,
            'point_area': true,
            'img_type': 'point-type-01',
            'alt': '支払いにポイント利用でデータ3GBまで(1,078円/月)が1カ月タダ!',
            'width': '293',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_0-1077_fee_un-limit',
            'anotation': 'default',
        }
    } else if( point >= 1078 && point <= 2177 ) {
        return {
            'id': 3,
            'point_area': false,
            'img_type': 'point-type-01',
            'alt': '支払いにポイント利用でデータ3GBまで(1,078円/月)が1カ月タダ!',
            'width': '293',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_1078-2177_fee_un-limit',
            'anotation': 'default',
        }
    } else if( point >= 2178 && point <= 3277 ) {
        return {
            'id': 4,
            'point_area': false,
            'img_type': 'point-type-02',
            'alt': '支払いにポイント利用でデータ20GBまで(2,178円/月)が1カ月タダ!',
            'width': '293',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_2178-3277_fee_un-limit',
            'anotation': 'default',
        }
    } else if( point >= 3278 && point <= 12935 ) {
        return {
            'id': 5,
            'point_area': false,
            'img_type': 'point-type-03',
            'alt': '支払いにポイント利用で楽天回線エリア データ無制限(3,278円/月)1カ月タダ!',
            'width': '404',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_3278-12935_fee_un-limit',
            'anotation': 'unlimited',
        }
    } else if( point >= 12936 && point <= 26235 ) {
        return {
            'id': 6,
            'point_area': false,
            'img_type': 'point-type-04',
            'alt': '支払いにポイント利用でデータ3GBまで(1,078円/月)1年タダ!',
            'width': '272',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_12936-26235_fee_un-limit',
            'anotation': 'default',
        }
    } else if( point >= 26236 && point <= 39335 ) {
        return {
            'id': 7,
            'point_area': false,
            'img_type': 'point-type-05',
            'alt': '支払いにポイント利用でデータ20GBまで(2,178円/月)1年タダ!',
            'width': '293',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_26236-39335_fee_un-limit',
            'anotation': 'default',
        }
    } else {
        return {
            'id': 8,
            'point_area': false,
            'img_type': 'point-type-06',
            'alt': '支払いにポイント利用で楽天回線エリア データ無制限(3,278円/月)1年タダ!',
            'width': '388',
            'height': '39',
            'link': '/fee/saikyo-plan/?l-id=top_login_39336_fee_un-limit',
            'anotation': 'unlimited',
        }
    }
}

function displayLoginGadget(data, pattern) {
    const userName = data.username;
    const numPoint = data.fixedPoint + data.limitedPoint + data.cash;
    const userPoint =  String(numPoint).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    const id = pattern.id;
    const imgType = pattern.img_type;
    const alt = pattern.alt;
    const width = pattern.width;
    const height = pattern.height;
    const link = pattern.link;
    const pointArea = pattern.point_area;
    const ele_ratAppear = document.getElementById(`ratid-pattern-${id}`);

    const plusPoint = () => {
        const targetPoint = 1078;
        return String(targetPoint - numPoint).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }
    const messagePc = () => {
        return `<img src="/assets/img/common/login/${imgType}-pc.png?221128" width="${width}" height="${height}" alt="${alt}" />`;
    }
    const messageSp = () => {
        return `<img src="/assets/img/common/login/${imgType}-sp.png?221128" width="100%" alt="${alt}" />`;
    }
    const anotation = () => {
        if( pattern.anotation === 'unlimited' ) {
            return '※公平なサービス提供のため速度制御の場合あり。エリア外最大１Mbps ※1ポイント1円としてご利用';
        } else {
            return '※1ポイント1円としてご利用';
        }
    }
    const logoutBtn = '<p class="u-Adjust_Mt-16"><a href="/logout/" class="c-Link_Txt-inline">ログアウト<span class="c-Icon_Chevron-right"></span></a></p>';

    ele_ratAppear.style.display = 'block';
    if( ele_linkPlan != null ) ele_linkPlan.href = link;
    ele_userRank.forEach(el => el.classList.add('i-Login_Rank-' + data.rank));
    ele_userName.forEach(el => el.insertAdjacentHTML('afterbegin', userName));
    ele_userPoint.forEach(el => el.insertAdjacentHTML('afterbegin', userPoint));
    ele_anotation.insertAdjacentHTML('afterbegin', anotation());
    ele_planMessagePc.insertAdjacentHTML('afterbegin', messagePc());
    ele_planMessageSp.insertAdjacentHTML('afterbegin', messageSp());
    ele_drawerSub.insertAdjacentHTML('beforeend', logoutBtn);
    if( pointArea ) {
        ele_pointArea.setAttribute('aria-hidden','false');
        ele_plusPoint.insertAdjacentHTML('afterbegin', plusPoint());
        ele_spName.classList.add('i-Login_Name-wide');
        // while (ele_nameWrap.firstChild) {
        //     ele_nameWrap.parentNode.insertBefore(ele_nameWrap.firstChild, ele_nameWrap);
        // }
        // ele_nameWrap.remove();
    }
}

function getMemberInfo() {
    $.ajax({
        url: 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519',
        // url: '/assets/json/dummy-member-information.json',
        xhrFields: { withCredentials: true }
    }).then(data => {
        if ( data.rank > 0 ) {
            const numPoint = data.fixedPoint + data.limitedPoint + data.cash;
            displayLoginGadget(data, checkPattern(numPoint));
        } else {
            ele_nonLogin.setAttribute('aria-hidden','false');
        }
    }).catch(err => {
        console.log(err);
        ele_nonLogin.setAttribute('aria-hidden','false');
    });
}

getMemberInfo();
