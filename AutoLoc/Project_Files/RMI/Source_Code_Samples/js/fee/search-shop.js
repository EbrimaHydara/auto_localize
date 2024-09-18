export const searchShop = () => {

    const isLocal = false;

    const sitepath = '/';
    const shopApiEndpoint = isLocal ? '/assets/json/shop_dummy20240207.json' : 'https://network.mobile.rakuten.co.jp/shopmaster-public/v1/shops';

    const selectPref = document.getElementById('js-shop-Search_Select-pref');
    const selectCity = document.getElementById('js-shop-Search_Select-city');
    const searchByPrefCity = document.getElementById('js-shop-Search_Prefcity');

    const setPrefectures = (data) => {
        const options = ['<option value="">都道府県を選択</option>'];
        let flgment = '';
        const uniqueCities = filterUniqueCities(data)
            .map((item) => {
                return {order: getPrefectureCode(item.location.prefecture), region: item.location.region, zipcd: item.location.zip_code.replace('-', '').replace('‐', ''), prefecture: item.location.prefecture, city: item.location.city};
            })
            .sort((a, b) => parseInt((a.order + '' + a.zipcd), 10) - parseInt((b.order + '' + b.zipcd), 10));
            uniqueCities.forEach((item) => {
                flgment = '<option value="' + item.prefecture + '">' + item.prefecture + '</option>';
                (options.indexOf(flgment) < 0) && options.push(flgment);
            });
        selectPref.innerHTML = options.join();

        return uniqueCities;
    }

    const setCities = (pref, cities) => {
        const options = ['<option value="">市区町村を選択</option>'];
        let flgment = '';
        const sortedCities = cities.sort((a, b) => a.city < b.city ? -1 : a.city > b.city ? 1 : 0);
        sortedCities.forEach((item) => {
            flgment = '<option value="' + item.city + '">' + item.city + '</option>';
            item.prefecture === pref && (options.indexOf(flgment) < 0) && options.push(flgment);
        });
        selectCity.innerHTML = options.join();
        if (options.length === 1) {
            selectCity.setAttribute('aria-disabled', true);
            selectCity.setAttribute('disabled', true);
        }
        else {
            selectCity.setAttribute('aria-disabled', false);
            selectCity.removeAttribute('disabled');
        }
    }

    const filterUniqueCities = (array) => {
        let cities = array.map((item) => item.location.prefecture + item.location.city);
        return array.filter((item, index) => cities.indexOf(item.location.prefecture + item.location.city) === index);
    }

    const getPrefectureCode = (name) => {
        const list = ["北海道",
            "青森県","岩手県","宮城県","秋田県","山形県","福島県",
            "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
            "新潟県","富山県","石川県","福井県","山梨県","長野県",
            "岐阜県","静岡県","愛知県","三重県",
            "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
            "鳥取県","島根県","岡山県","広島県","山口県",
            "徳島県","香川県","愛媛県","高知県",
            "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"
        ];
        return list.indexOf(name) + 1;
    }

    const enableSearchByPrefCity = () => {
        if(!searchByPrefCity) return;

        let url = sitepath + 'shop/search/?prefecture=' + encodeURI(selectPref.value) + '&city=' + encodeURI(selectCity.value);
        if (selectPref.value !== '') {
            searchByPrefCity.setAttribute('data-href', url);
            searchByPrefCity.setAttribute('aria-disabled', false);
            searchByPrefCity.removeAttribute('disabled');
        } else {
            searchByPrefCity.setAttribute('data-href', '');
            searchByPrefCity.setAttribute('aria-disabled', true);
            searchByPrefCity.setAttribute('disabled', true);
        }
    }

    const redirectSearchUrl = () => {
        window.location.href = searchByPrefCity.getAttribute('data-href')
    }

    fetch(shopApiEndpoint)
        .then(res => res.json())
        .then(data => {
            let uniqueCities= setPrefectures(data);
            selectPref && selectPref.addEventListener('change', () => {
                setCities(selectPref.value, uniqueCities);
                enableSearchByPrefCity();
            });
            selectCity && selectCity.addEventListener('change', enableSearchByPrefCity);
            searchByPrefCity && searchByPrefCity.addEventListener('click', redirectSearchUrl);
        })
        .catch((err) => {
            console.log(err);
        })
}
