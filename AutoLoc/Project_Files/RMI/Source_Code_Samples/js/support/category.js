const getData = async function () {
    const faqEp = '/api/faq/';
    // const faqEp = '/assets/json/dummy-support-faq.json';
    const rawData = await $.getJSON(faqEp);

    const faqSolvedEp = '/api/faq_solved/'
    // const faqSolvedEp = '/assets/json/dummy-support-faq-solved.json'
    const rawSolvedData = await $.getJSON(faqSolvedEp);
    const solvedList = rawSolvedData.list;

    return {rawData,solvedList};
};

const urlParser = () => {
    const url = window.location.pathname;
    const arr = url.split('/');
    return arr;
};

const getBigCategory = arr => {
    return arr[arr.length - 3];
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
    $trigger1.click(function() {
        $trigger2.attr('aria-hidden', false);
    });
    $trigger2.click(function() {
        $trigger3.attr('aria-hidden', false);
    });
    $trigger3.click(function() {
        $trigger4.attr('aria-hidden', false);
    });
};

const categoryTable = {
    plan: {
        name : 'プラン・サービス',
        items: {
            detail: 'プランの詳細',
            'internal-voice': '通話/通信サービス（国内）',
            'international-voice': '通話/通信サービス（国際）',
            sms: 'メール・SMSサービス',
            service: 'オプションサービス',
            'my-rakuten-mobile': 'my 楽天モバイル',
            tradein: '下取りサービス',
            'contract-detail': '契約内容・お手続き',
            'price-discount': 'キャンペーン',
            other: 'その他',
        }
    },
    application: {
        name : '申し込みからお受け取りまで',
        items: {
            mnp: '他社からの乗り換え（MNP）',
            migration: '楽天モバイル（ドコモ回線・au回線）からの移行',
            'compatible-device': '対応製品',
            flow: 'お申し込み方法',
            service: 'オプションサービス',
            verification: '本人確認',
            tradein: '下取りサービス',
            confirmation: '申し込み内容の確認・変更',
            delivery: '配送',
        }
    },
    setting: {
        name: 'ご利用開始までの設定',
        items: {
            android: 'Android製品の設定手順',
            ios: 'iOSの設定手順',
        }
    },
    link: {
        name : 'Rakuten Link',
        items: {
            setting: '初期設定',
            voice: '通話サービス',
            message: 'メッセージサービス',
            news: 'ニュース・ウォレット・ミッション',
            manual: '操作・設定・不具合',
            other: 'その他',
            'rakumail': '楽メール',
        }
    },
    product: {
        name : '製品（Android）',
        items: {
            mini: 'Rakuten Mini',
            hand: 'Rakuten Hand',
            big: 'Rakuten BIG',
            'big-s': 'Rakuten BIG s',
            casa: 'Rakuten Casa',
            'wifi-pocket': 'Rakuten WiFi Pocket',
            setting: '設定・操作・故障',
            upgrade: '機種変更',
            'hand-5g': 'Rakuten Hand 5G',
        }
    },
    iphone: {
        name : '製品（iPhone）',
        items: {
          iphone: '製品',
          application: '申し込みからご利用開始まで',
          'initial-setting': '初期設定',
          setting: '操作・設定',
          'apple-id': 'Apple ID',
          applecare: '故障紛失保証 with AppleCare Services',
          etc: 'その他',
        }

    },
    area: {
        name : 'エリア・データ通信・通話',
        items: {
            area: 'エリアの確認',
            data: 'データ使用量',
            connection: 'データ通信速度',
            'data-trouble': 'データ通信・通話の不具合',
        }
    },
    payment: {
        name : '請求・お支払い方法',
        items: {
            bill: '請求金額の確認',
            payment: '支払い方法の確認・変更',
            invoice: '未払い料金の確認',
            google: '楽天モバイル キャリア決済',
        }
    },
    'contract-detail': {
        name : '契約内容・お手続き',
        items: {
            confirmation: '契約内容の確認・変更',
            sim: 'SIMの交換・再発行',
            cancellation: '解約・MNP転出',
        }
    },
    'price-discount': {
        name : 'キャンペーン',
        items: {
            detail: '詳細内容の確認',
            'point-granted': '適用条件・確認',
        }
    },
    other: {
        name : 'その他',
        items: {
            business: '法人',
            other: 'その他',
        }
    },
    suspension: {
        name : '盗難・紛失',
        items: {
            suspension: 'スマートフォンの紛失・盗難',
        }
    },
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

const solvedValue = (link, list) => {
    const spreadLink = link.split('/');
    const qaId = spreadLink[spreadLink.length - 2];

    for (const qa of list) {
        if (qa.name === qaId) {
            return qa.solved;
        }
    }

    return 0;
};

const namespace = "support-smallcategory";
const generateTags = (arr, list) => {
    const elementDisplay = document.getElementById('js-faq-display');

    const taggedArr = arr.map((elem, i, arr) => {
        const solvedNum = solvedValue(elem.link, list)
        
        if(solvedNum > 0) {
            return `<li><a href="${elem.link}?l-id=support_category_faq">${elem.question}<span class="c-Label_Normal ${namespace}-Faq_Items-label">${solvedNum.toLocaleString()}人以上の方が解決</span><span class="c-Icon_Chevron-right ${namespace}-Faq_Items-icon"></span></a></li>`;
        } else {
            return `<li><a href="${elem.link}?l-id=support_category_faq">${elem.question}<span class="c-Icon_Chevron-right ${namespace}-Faq_Items-icon"></span></a></li>`;
        }

    });
    const preList = `<ul class="c-Link_List ${namespace}-Faq_List u-Adjust_Mt-24">`;
    const postList = `</ul>`;
    let tagList = preList;

    const preReadmore = `<div class="js-support-Readmore"><div class="c-Readmore_Content ${namespace}-Faq_Readmore-content" aria-hidden="true"><ul class="c-Link_List ${namespace}-Faq_List">`;
    const postReadmore1 = `</ul></div><div><button id="js-readmore-trigger-1" class="c-Readmore_Trigger ${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    const postReadmore2 = `</ul></div><div><button id="js-readmore-trigger-2" class="c-Readmore_Trigger ${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" aria-hidden="true"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    const postReadmore3 = `</ul></div><div><button id="js-readmore-trigger-3" class="c-Readmore_Trigger ${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" aria-hidden="true"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
    const postReadmore4 = `</ul></div><div><button id="js-readmore-trigger-4" class="c-Readmore_Trigger ${namespace}-Faq_Readmore-trigger js-support-Readmore_Trigger" aria-hidden="true"><span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>もっと見る</button></div></div>`;
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
          const faqData = getFaq(data.rawData, valBig, valSmall);
          generateTags(faqData, data.solvedList);
      }
    })
    .catch(err => {
      // TODO: error handling.
      console.log(err);
    });

// flexを左寄せ
const movieWrap = $('.support-smallcategory-Movie_Pc');
const movieContents = $(movieWrap).find('> div');
if(movieContents.length > 4) {
    for (let i = 0; i < 3; i++) {
        movieWrap.append('<div class="support-smallcategory-Movie_Spacer"></div>');
    }
}
const movieWrapSp = $('.support-smallcategory-Movie_Sp');
const movieContentsSp = $(movieWrapSp).find('> div');
console.log({movieContentsSp});
if(movieContentsSp.length > 2 && movieContentsSp.length % 3 == 1) {
    for (let i = 0; i < 2; i++) {
        movieWrapSp.append('<div class="support-smallcategory-Movie_Spacer"></div>');
    }
}
