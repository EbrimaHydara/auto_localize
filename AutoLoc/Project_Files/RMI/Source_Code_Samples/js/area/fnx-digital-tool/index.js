import tippy from 'tippy.js';

document.addEventListener('DOMContentLoaded', function() {
const buttons = document.querySelectorAll('.is_button');
const list = document.getElementById('js-filter-list');
const radioButtons = document.querySelectorAll('#raidoList .is_button');
const resetButton = document.getElementById('reset');
const peftTxt = document.getElementById('js-perf-txt');

let filterFlg = '';
let url_string = window.location.href;
let url = new URL(url_string);
let pref = url.searchParams.get('pref');
let city = url.searchParams.get('city');
let param = '';

document.querySelectorAll('div[data-json]').forEach(function (divElement) {
const jsonUrl = constructJsonUrl(divElement.dataset.region);
const select = divElement.nextElementSibling;

fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${jsonUrl}: ${response.statusText}`);
        }
    return response.json();
    })
    .then(data => {
        if (select) {
            setAreas(select, data);
            if(pref) {
                if(city) {
                    param = pref + ' ' + city;
                } else {
                    param = pref;
                }
                select.value = param;
                select.dispatchEvent(new Event('change'));
            }
        }
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
});

function constructJsonUrl(region) {
    return `/assets/json/fnxdigitaldata-${region.toLowerCase()}.json`;
}
// プルダウンの設定
function setAreas(select, data) {
    const perfTitle = document.getElementById('js-perf');
    const animation = document.querySelectorAll('.fnx-digital-tool_Annotation');
    const hiddenBox = document.querySelectorAll('.fnx-digital-tool_HiddenBox');

    const concatAreas = [];

    data.forEach (function(item) {
        if(item.ward) {
            concatAreas.push(item.pref + " " + item.city + " " + item.ward);
        } else if (item.city) {
            concatAreas.push(item.pref + " " + item.city);
        } else {
            concatAreas.push(item.pref);
        }
    });

    const uniqueAreas = [...new Set (concatAreas)] ;
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'エリアを選択';
    select.appendChild(defaultOption);

    uniqueAreas.forEach(function (element) {
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        select.appendChild(option);
    });

    if (uniqueAreas.length === 0) {
        select.setAttribute('aria-disabled', true);
        select.setAttribute('disabled', true);
    } else {
        select.setAttribute('aria-disabled', false);
        select.removeAttribute('disabled');
    }

    // disabled処理
    select.addEventListener('change', function () {
        if (select.value === '') {
            hiddenBox.forEach(function (element) {
                element.classList.add('is-hidden');
            });
            radioButtons.forEach(function (radioButton) {
                radioButton.setAttribute('disabled', true);
            });
            resetButton.classList.add('is-gray');
            animation.forEach(function (element) {
                element.classList.remove('is-hidden');
            });
        } else {
            perfTitle.textContent = select.value;
            if(filterFlg) {
                peftTxt.textContent = '楽天モバイルの評価と他社比較';
            } else {
                peftTxt.textContent = '楽天モバイルの評価はこちら';
            }
            document.querySelectorAll('.is-hidden').forEach(function (element) {
                element.classList.remove('is-hidden');
            });
            resetButton.classList.remove('is-gray');
            radioButtons.forEach(function (radioButton) {
                radioButton.removeAttribute('disabled');
            });
            animation.forEach(function (element) {
                element.classList.add('is-hidden');
            });
            setCard(select.value, data, list);
        }
    });
}

function setCard(area, data) {
    const selectpref =  area.split(' ')[0];
    const selectcity =  area.split(' ')[1];
    const selectward =  area.split(' ')[2];

    let filterData;
    let card = [];

    if (!selectward) {
        if (selectcity) {
            filterData = data.filter(item => item.city.trim() === selectcity.trim() && item.ward.trim() === '');
        } else {
            filterData = data.filter(item => item.pref.trim() === selectpref.trim() && item.city.trim() === '' && item.ward.trim() === '');
        }
    } else {
        filterData = data.filter(item => item.ward.trim() === selectward.trim() && item.city.trim() === selectcity.trim());
    }

    filterData.forEach(item => {
        let winAu = item.eva_rakuten >= item.eva_au;
        let winSoftbank = item.eva_rakuten >= item.eva_softbank;
        let winNtt = item.eva_rakuten >= item.eva_ntt;

        let iconName ='';
        let description = '';

        switch(item.category) {
            case 'アップロード速度体感':
                iconName = 'upload';
                description = 'オペレーターのネットワークでOpensignalのユーザーが体感した平均アップロードスピード';
                break;
            case '利用率':
                iconName = 'availability';
                description = 'Opensignalのユーザーが最もよく利用する場所でネットワークに接続している時間の割合';
                break;
            case '通信品質':
                iconName = 'quality';
                description = 'ネットワーク上のOpensignalのユーザー体感が、一般的なアプリケーションの要件をサポートするのに十分であった頻度を示す指標';
                break;
            case 'ビデオ視聴体感':
                iconName = 'video';
                description = 'ビデオの読み込み時間、失速、ビデオの解像度を考慮した、Opensignalのユーザーが体感するモバイルビデオの品質';
                break;
            case 'カバレッジ':
                iconName = 'coverage';
                description = 'Opensignalのユーザーがオペレーターのネットワークの地理的範囲をどのように体感しているかを示す指標';
                break;
            case 'モバイルゲーム体感':
                iconName = 'games';
                description = 'オペレーターのネットワーク上でOpensignalのユーザーがどのようにリアルタイムのマルチプレイヤーモバイルゲームを体感するかの指標';
                break;
            case 'ダウンロード速度体感':
                iconName = 'download';
                description = 'オペレーターのネットワークでOpensignalのユーザーが体感した平均ダウンロードスピード';
                break;
            }
            // icon set
            const iconPath = `/assets/img/area/city/fnx/img_${iconName}.png`;
            card.push(`
                <li class="fnx-digital-tool_Card${winAu ? ' win_au' : ''}${winSoftbank ? ' win_softbank' : ''}${winNtt ? ' win_ntt' : ''}">
                    <div>    
                        <p class="fnx-digital-tool_Card-title">
                            <span class="fnx-digital-tool_Card-icon"><img src="${iconPath}" alt="${iconName}" /></span> ${item.category}<span class="c-Tooltip_Icon-wrap">
                                <button class="c-Tooltip js-Tooltip-bottom" data-tippy-theme="default" data-tippy-content="${description}">
                                    <span class="c-Icon_Stack c-Tooltip_Icon">
                                        <span class="c-Icon_Sign-info-f c-Icon_Stack-icon-f"></span>
                                        <span class="c-Icon_Sign-info-l c-Icon_Stack-icon-l"></span>
                                    </span>
                                </button>
                            </span>
                        </p>
                        <div class="fnx-digital-tool_Card-sub">
                            <p class="js-item is-default">${item.txt_rakuten}</p>
                            <p class="js-item is-hidden" data-item-filter="softbank">${item.txt_softbank}</p>
                            <p class="js-item is-hidden" data-item-filter="au">${item.txt_au}</p>
                            <p class="js-item is-hidden" data-item-filter="ntt">${item.txt_ntt}</p>
                        </div>
                    </div>
                    <div>
                        <div class="fnx-digital-tool_Wrapper-starbox-mobile">
                            <span><img src="/assets/img/area/city/fnx/label-rakuten.png" width="120" height="32" alt="rakuten mobile"></span>
                            <span class="fnx-digital-tool_Wrapper-rating" data-rate="${item.eva_rakuten}"></span>
                        </div>
                        <div class="fnx-digital-tool_Wrapper-starbox-other js-item is-hidden" data-item-filter="softbank">
                            <span><img src="/assets/img/area/city/fnx/label-softbank.png" width="120" height="32" alt="softbank"></span>
                            <span class="fnx-digital-tool_Wrapper-rating" data-rate="${item.eva_softbank}"></span>
                        </div>
                        <div class="fnx-digital-tool_Wrapper-starbox-other js-item is-hidden" data-item-filter="au">
                            <span><img src="/assets/img/area/city/fnx/label-au.png" width="120" height="32" alt="au"></span>
                            <span class="fnx-digital-tool_Wrapper-rating" data-rate="${item.eva_au}"></span>
                        </div>
                        <div class="fnx-digital-tool_Wrapper-starbox-other js-item is-hidden" data-item-filter="ntt">
                            <span><img src="/assets/img/area/city/fnx/label-ntt.png" width="120" height="32" alt="NTTドコモ"></span>
                            <span class="fnx-digital-tool_Wrapper-rating" data-rate="${item.eva_ntt}"></span>
                        </div>
                    </div>
                </li>
            `);
        });
        list.innerHTML = card.join('');

        // TIP処理
        const classTooltipBottom = '.js-Tooltip-bottom';
        tippy(classTooltipBottom, {
            // hideOnClick: false,
            // trigger: 'click',
            animation: 'fade',
            arrow: true,
            duration: [200, 175],
            placement: 'bottom',
            maxWidth: 295,
            // maxWidth: getWindowWidth() >= 623 ? 295 : 190,
        });

        if(filterFlg) {
            const filter = filterFlg;
            const items = document.querySelectorAll(`.js-item`);
            items.forEach(function (item) {
                item.classList.remove('is-hidden');
            });
            if (filter !== 'all') {
                items.forEach(function (item) {
                    const itemFilter = item.getAttribute('data-item-filter');
                    if (filter !== itemFilter) {
                        item.classList.add('is-hidden');
                    }
                });
            }
            list.classList.remove('au', 'softbank', 'ntt');
            list.classList.add(filter);
        }
}

    //ラジオボタンの処理
    buttons.forEach(function (button) {
        button.addEventListener('change', function () {
            const filter = button.getAttribute('data-filter');
            if (filter) {
                list.classList.add(filter);
                peftTxt.textContent = '楽天モバイルの評価と他社比較';
            }

            const items = document.querySelectorAll('.js-item');
            items.forEach(function (item) {
                const itemFilter = item.getAttribute('data-item-filter');
                item.classList.toggle('is-hidden', filter && filter !== itemFilter);
            });

            filterFlg = filter;

            // Select scroll down
            const scrollDown = document.getElementById('js-down');
            setTimeout(() => {
                scrollDown.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 0);
        });
    });

    //リセットボタン処理
    resetButton.addEventListener('click', function () {
        buttons.forEach(function (button) {
            button.classList.remove('is-selected');
            button.checked = false;
        });
        peftTxt.textContent = '楽天モバイルの評価はこちら';
        list.classList.remove('au', 'softbank', 'ntt');
        const items = document.querySelectorAll('.js-item');
        items.forEach(function (item) {
            const itemFilter = item.getAttribute('data-item-filter');
            if (itemFilter === 'default') {
                item.classList.remove('is-hidden');
            } else {
                item.classList.add('is-hidden');
            }
        });

        const defaultItems = document.querySelectorAll('.js-item.is-default');
        defaultItems.forEach(function (defaultItem) {
            defaultItem.classList.remove('is-hidden');
        });
        filterFlg = null;
    });

    // scrollTop button
    const modoru = document.getElementById('js-modoru');
    const selectTopElement = document.getElementById('is-selectTop');

    modoru.addEventListener('click', function() {
        selectTopElement.scrollIntoView({ behavior: 'smooth' });
    });
});
