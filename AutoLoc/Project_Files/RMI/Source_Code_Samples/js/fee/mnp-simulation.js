(function(){
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const price = params.get('price');
    const carrier = params.get('carrier');
    // const login = params.get('login');

    document.getElementById('priceSelected').innerHTML = String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1<span>,</span>');

    const showPattern = (pattern) => {
        document.getElementsByClassName('js-' + pattern + '-pattern').forEach(element => {
            element.setAttribute('aria-hidden', 'false');
        });
    }

    switch (price) {
        case '1000':
            showPattern('b');
            break;
        case '2000':
            document.getElementById('price980').setAttribute('aria-hidden', 'false');
            document.getElementById('priceDiscount').innerHTML = '900';
            showPattern('a');
            break;
        case '3000':
            document.getElementById('price1980').setAttribute('aria-hidden', 'false');
            document.getElementById('priceDiscount').innerHTML = '800';
            showPattern('a');
            break;
        case '4000':
        case '5000':
        case '6000':
        case '7000':
        case '8000':
        case '9000':
        case '10000':
            document.getElementById('price2980').setAttribute('aria-hidden', 'false');
            document.getElementById('priceDiscount').innerHTML = String(price - 3300).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1<span>,</span>');
            showPattern('a');
            break;
        case '11000':
            document.getElementById('price2980').setAttribute('aria-hidden', 'false');
            document.getElementById('priceExtra').setAttribute('aria-hidden', 'false');
            document.getElementById('priceDiscount-yen').setAttribute('aria-hidden', 'true');
            document.getElementById('priceDiscount-yen-extra').setAttribute('aria-hidden', 'false');
            document.getElementById('priceDiscount').innerHTML = '7<span>,</span>700';
            showPattern('a');
            break;
        default:
            location.href = '/';
            break;
    }

    switch (carrier) {
        case 'docomo':
            document.getElementById('carrierDocomo').setAttribute('aria-hidden', 'false');
            break;
        case 'au':
            document.getElementById('carrierAu').setAttribute('aria-hidden', 'false');
            break;
        case 'softbank':
            document.getElementById('carrierSoftBank').setAttribute('aria-hidden', 'false');
            break;
    }

    const getUserInfo = () => {
        $.ajax({
            url: 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519',
            // url: '/assets/json/dummy-member-information.json',
            xhrFields: { withCredentials: true }
        }).then(data => {
            if ( data.rank > 0 ) {
                showUserInfo(data);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    getUserInfo();
    
    const showUserInfo = (data) => {
        const targetRank = document.getElementById('userRank');
        document.getElementById('userName').innerText = data.username;
        targetRank.setAttribute('data-rank', data.rank);
        targetRank.setAttribute('aria-hidden', 'false');
    }

    const trigger = document.querySelector('.js-fixed-btn-trigger');
    const fixedBtn = document.querySelector('.js-fixed-btn');
    const fixedBottomBtn = () => {
      let scrollY = window.pageYOffset;
      const triggerRect = trigger.getBoundingClientRect();
      const triggerY = scrollY + triggerRect.top;

      if ( scrollY + window.innerHeight < triggerY ) {
        fixedBtn.setAttribute('aria-hidden', 'true');
      } else {
        fixedBtn.setAttribute('aria-hidden', 'false');
      }
    }
    if( fixedBtn && trigger ) {
      window.addEventListener('scroll', fixedBottomBtn);
    }
})();
