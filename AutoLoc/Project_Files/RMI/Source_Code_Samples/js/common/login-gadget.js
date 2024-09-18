
const getUserInfo = () => {
    $.ajax({
        url: 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519',
        // url: '/assets/json/dummy-member-information.json',
        xhrFields: { withCredentials: true }
    }).then(data => {
        if ( data.rank > 0 ) {
            showUserInfo(data);
        }
        else {
            document.getElementById('login-Gadget_Default-logout').style.display = 'block';
        }
    }).catch(err => {
        console.log(err);
        document.getElementById('login-Gadget_Default-logout').style.display = 'block';
    });
}

const showUserInfo = (data) => {
    const numPoint = String(data.fixedPoint + data.limitedPoint + data.cash).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

    document.getElementById('login-Gadget_Default-name').innerText = data.username;
    document.getElementById('login-Gadget_Default-point').innerText = numPoint;
    document.getElementById('login-Gadget_Default-rank').classList.add('i-Login-gadget_Rank-' + data.rank);

    document.getElementById('login-Gadget_Default-login').style.display = 'block';
}

getUserInfo();
