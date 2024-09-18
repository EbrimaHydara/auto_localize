const getData = async function () {
    const faqEp = '/api/faq/'; // Product
    // const faqEp = '/assets/json/dummy-support-faq.json';
    // const faqEp = 'https://35.221.73.217/api/faq/'; // Develop
    const rawData = await $.getJSON(faqEp);
    return rawData;
};

const urlParser = () => {
    const url = window.location.pathname;
    const arr = url.split('/');
    return arr;
};

const getBigCategory = arr => {
    return arr[arr.length - 4];
};

const getSmallCategory = arr => {
    return arr[arr.length - 2];
};

const readmoreSupport = () => {
    const readmores = document.querySelectorAll('.js-support-Readmore');
    const $trigger1 = $('#js-readmore-trigger-1');
    const $trigger2 = $('#js-readmore-trigger-2');
    const $trigger3 = $('#js-readmore-trigger-3');
    const $trigger4 = $('#js-readmore-trigger-4');

    readmores.forEach((el) => {
        const triggers = el.querySelectorAll('.js-support-Readmore_Trigger');
        const contents = el.querySelectorAll('[aria-hidden="true"]');

        triggers.forEach((el) => {
            el.addEventListener('click', (e) => {
                contents.forEach((el) => {
                    el.setAttribute('aria-hidden', false);
                });
                e.currentTarget.style.display = 'none';
            });
        });
    });
    $trigger1.click(function () {
        $trigger2.attr('aria-hidden', false);
    });
    $trigger2.click(function () {
        $trigger3.attr('aria-hidden', false);
    });
    $trigger3.click(function () {
        $trigger4.attr('aria-hidden', false);
    });
};

const categoryTable = {
    turbo: {
        name: 'ターボ',
        items: {
            flow: 'お申し込みからお受け取りまで',
            campaign: 'キャンペーン',
            plan: 'プラン・サービス',
            contract: '契約内容・お手続き',
            setting: '操作・設定・不具合',
            product: '製品',
            payment: '請求・お支払い方法'
        }
    }
};

const filterByCategory = (big, small) => {
    const result = [];
    const keysBig = Object.keys(categoryTable);
    const indexBig = keysBig.indexOf(big);
    if (indexBig > -1) {
        result.push(categoryTable[big].name);
        const objSmall = categoryTable[big].items;
        const keysSmall = Object.keys(objSmall);
        const indexSmall = keysSmall.indexOf(small);
        if (indexSmall > -1) {
            result.push(categoryTable[big].items[small]);
        }
    }
    return result.length === 2 ? result : null;
};

const getFaq = (data, big, small) => {
    const arrBigAll = data.category_big;
    const arrBigFiltered = arrBigAll.filter(elem => elem.name === big);
    const arrSmallAll = arrBigFiltered[0].category_small;
    const arrSmallFiltered = arrSmallAll.filter(elem => elem.name === small);
    return arrSmallFiltered[0].list;
};

const namespace = "support-smallcategory";
const generateTags = arr => {
    const elementDisplay = document.getElementById('js-faq-display');

    const taggedArr = arr.map((elem, i, arr) => {
        const serialNumber = i > 8 ? `${i + 1}` : '0' + `${i + 1}`;
        return `<li><a href="${elem.link}?l-id=rmt_faq_id_${serialNumber}">${elem.question}<span class="c-Icon_Chevron-right"></span></a></li>`;
    });
    const preList = `<ul class="c-Link_List ${namespace}-Faq_List u-Adjust_Mt-24">`;
    const postList = `</ul>`;
    let tagList = preList;

    const preReadmore = `<div class="js-support-Readmore"><div class="c-Readmore_Content ${namespace}-Faq_Readmore-content" aria-hidden="true"><ul class="c-Link_List ${namespace}-Faq_List">`;
    const postReadmore1 = `</ul></div><div class="c-Readmore_Trigger"><button id="js-readmore-trigger-1" class="${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" data-ratid="rmt_button_01" data-ratevent="click" data-ratparam="all"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    const postReadmore2 = `</ul></div><div class="c-Readmore_Trigger"><button id="js-readmore-trigger-2" class="${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" aria-hidden="true" data-ratid="rmt_button_02" data-ratevent="click" data-ratparam="all"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    const postReadmore3 = `</ul></div><div class="c-Readmore_Trigger"><button id="js-readmore-trigger-3" class="${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" aria-hidden="true" data-ratid="rmt_button_03" data-ratevent="click" data-ratparam="all"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    const postReadmore4 = `</ul></div><div class="c-Readmore_Trigger"><button id="js-readmore-trigger-4" class="${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" aria-hidden="true" data-ratid="rmt_button_04" data-ratevent="click" data-ratparam="all"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    let tagReadmore1 = preReadmore;
    let tagReadmore2 = preReadmore;
    let tagReadmore3 = preReadmore;
    let tagReadmore4 = preReadmore;
    for (let i = 0; i < taggedArr.length; i++) {
        if (i < 5) {
            tagList += taggedArr[i];
        } else if (i < 15) {
            tagReadmore1 += taggedArr[i];
        } else if (i < 25) {
            tagReadmore2 += taggedArr[i];
        } else if (i < 35) {
            tagReadmore3 += taggedArr[i];
        } else {
            tagReadmore4 += taggedArr[i];
        }
    }
    tagList += postList;
    elementDisplay.insertAdjacentHTML('beforeend', tagList);
    if (taggedArr.length < 6) {
        // do nothing
    } else if (taggedArr.length < 16) {
        tagReadmore1 += postReadmore1;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore1);
    } else if (taggedArr.length < 26) {
        tagReadmore1 += postReadmore1;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore1);
        tagReadmore2 += postReadmore2;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore2);
    } else if (taggedArr.length < 36) {
        tagReadmore1 += postReadmore1;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore1);
        tagReadmore2 += postReadmore2;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore2);
        tagReadmore3 += postReadmore3;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore3);
    } else {
        tagReadmore1 += postReadmore1;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore1);
        tagReadmore2 += postReadmore2;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore2);
        tagReadmore3 += postReadmore3;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore3);
        tagReadmore4 += postReadmore4;
        elementDisplay.insertAdjacentHTML('beforeend', tagReadmore4);
    }
    readmoreSupport();
};

// process start
getData()
    .then(data => {
        const urlArr = urlParser();
        const bigCategory = getBigCategory(urlArr);
        const smallCategory = getSmallCategory(urlArr);
        if (filterByCategory(bigCategory, smallCategory)) {
            const valArr = filterByCategory(bigCategory, smallCategory);
            const valBig = valArr[0];
            const valSmall = valArr[1];
            const faqData = getFaq(data, valBig, valSmall);
            generateTags(faqData);
        }
    })
    .catch(err => {
        // TODO: error handling.
        console.log(err);
    });

// flexを左寄せ
const movieWrap = $('.support-smallcategory-Movie_Pc');
const movieContents = $(movieWrap).find('> div');
if (movieContents.length > 4) {
    for (let i = 0; i < 3; i++) {
        movieWrap.append('<div class="support-smallcategory-Movie_Spacer"></div>');
    }
}
const movieWrapSp = $('.support-smallcategory-Movie_Sp');
const movieContentsSp = $(movieWrapSp).find('> div');
console.log({ movieContentsSp });
if (movieContentsSp.length > 2 && movieContentsSp.length % 3 == 1) {
    for (let i = 0; i < 2; i++) {
        movieWrapSp.append('<div class="support-smallcategory-Movie_Spacer"></div>');
    }
}
