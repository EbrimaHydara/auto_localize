import SmoothScroll from "smooth-scroll";
import { device_iphone } from '../../csv-data/device-iphone'
import { tradein_pricelist } from '../../csv-data/tradein-pricelist'
import { themeNum } from '../../common/theme';
import { addClassBasedOnSlideCount } from "../../common/component/carousel";

const productName = location.pathname.split('/')[3];
const namespace = `product-${productName}`;

/*
    共通処理
*/
// Hero carousel
const mainConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<img src="/assets/img/product/iphone/icon-carousel-left.svg" class="product-iphone-Hero_Carousel-view-arrow product-iphone-Hero_Carousel-view-arrow-prev slick-next slick-arrow c-Icon_Chevron-left" aria-label="Previous">',
    nextArrow: '<img src="/assets/img/product/iphone/icon-carousel-right.svg" class="product-iphone-Hero_Carousel-view-arrow product-iphone-Hero_Carousel-view-arrow-next slick-next slick-arrow c-Icon_Chevron-right" aria-label="Next">',
    dotsClass: 'slick-dots c-Carousel_Dots',
    infinite: true,
};

const colorlength = $('.js-color').length;
for (let i = 0; i <= colorlength; i++) {
    let mainSlick = $(`.js-main${i}`).not('.slick-initialized').slick(mainConfig);

    $(`.js-color${i}`).on('click', () => {
        $('.js-color').attr('aria-current', 'false');
        $(`.js-color${i}`).attr('aria-current', 'true');

        $(`.${namespace}-Hero_Main-thumbnail`).removeClass('is-open');
        $(`.thumbnail${i}`).addClass('is-open');

        $(`.${namespace}-Hero_Main-view`).attr('aria-hidden', 'true');
        $(`.js-main${i}`).attr('aria-hidden', 'false');
        mainSlick.slick('unslick');
        mainSlick.not('.slick-initialized').slick(mainConfig);
        $(`.${namespace}-Hero_Main-view`).slick('slickGoTo', 0);
    });

    $(`.thumbnail${i} .thumbnail-item`).on('click', (event) => {
        const index = $(`.thumbnail${i} .thumbnail-item`).index($(event.currentTarget));
        $(`.${namespace}-Hero_Main-view`).slick('slickGoTo', index);
    });
}

// Modal Setting
$('.js-video').modaal({
    background: '#505050',
    custom_class: 'c-Modal',
    overlay_opacity: 0.8,
    type: 'video'
});


/*
    購入可能時の処理
    1, アンカースクロール処理, タブ切り替え処理
    2, 価格シミュレーション処理
*/
const deviceData = device_iphone.find(v => v.directory === productName);
// device_iphoneに販売データがある場合に実行
if (deviceData) {

    const Data = {
        device_iphone,
        tradein_pricelist,
    }

    // Fixed header
    new SmoothScroll('.js-scroll-b', {
        speed: 100,
        header: '[data-fixed-header]',
    });
    const fixedHeaderEventHandeler = (triggerClass, targetId) => {
        document.getElementsByClassName(triggerClass).forEach(elm => {
            elm.addEventListener('click', () => {
                document.getElementById(targetId).click();
            });
        });
    }
    fixedHeaderEventHandeler('js-header-nav-item-0', 'tab-menu1');
    fixedHeaderEventHandeler('js-header-nav-item-1', 'tab-menu2');

    const headerNavTrigger = document.getElementById('js-accordion-header-nav-trigger');
    const headerNavWrapper = document.getElementById('js-header-nav-wrapper');
    const originalOffsetTop = headerNavWrapper.offsetTop;
    const headerNavDummy = document.getElementById('js-header-nav-dummy');

    const headerPos = () => {
        const scrollY = window.pageYOffset;
        if (scrollY < originalOffsetTop) {
            headerNavWrapper.style.position = 'static';
            headerNavDummy.style.paddingTop = '0';
        } else {
            headerNavWrapper.style.position = 'fixed';
            headerNavDummy.style.paddingTop = '64px';
        }
    }
    headerPos();
    window.addEventListener('scroll', headerPos);

    const ANIMATION_DURATION = 150;
    const headerNavItems = document.getElementById('js-accordion-content-header-nav-items');
    headerNavTrigger.addEventListener('click', function () {
        if (window.getComputedStyle(headerNavItems).display === 'none') {
            headerNavItems.style.display = 'block';
            headerNavItems.style.height = '0';
            headerNavItems.style.overflow = 'hidden';
            const height = headerNavItems.scrollHeight;
            headerNavItems.style.height = '0';
            headerNavItems.style.overflow = 'hidden';
            headerNavItems.animate(
                [
                    { height: '0' },
                    { height: height + 'px' }
                ],
                {
                    duration: ANIMATION_DURATION,
                    fill: 'forwards'
                }
            );
            headerNavTrigger.animate(
                [
                    { transform: 'rotate(0deg)' },
                    { transform: 'rotate(180deg)' }
                ],
                {
                    duration: ANIMATION_DURATION,
                    fill: 'forwards'
                }
            );
        } else {
            const height = headerNavItems.scrollHeight;
            headerNavItems.animate(
                [
                    { height: height + 'px' },
                    { height: '0' }
                ],
                {
                    duration: ANIMATION_DURATION,
                    fill: 'forwards'
                }
            ).onfinish = function () {
                headerNavItems.style.display = 'none';
            };
            headerNavTrigger.animate(
                [
                    { transform: 'rotate(180deg)' },
                    { transform: 'rotate(0deg)' }
                ],
                {
                    duration: ANIMATION_DURATION,
                    fill: 'forwards'
                }
            );
        }
    });

    const anchorClickHandler = () => {
        headerNavItems.style.display = 'none';
        headerNavTrigger.animate(
            [
                { transform: 'rotate(180deg)' },
                { transform: 'rotate(0deg)' }
            ],
            {
                duration: ANIMATION_DURATION,
                fill: 'forwards'
            }
        );
    }
    headerNavItems.querySelectorAll('a').forEach(elm => elm.addEventListener('click', anchorClickHandler));

    // Hero訴求価格
    const heroPayment1 = Number(deviceData?.payment1)?.toLocaleString();
    const heroDiscount = deviceData.discount ? Number(deviceData?.discount)?.toLocaleString() : null;
    const htmlHeroTotalCost = (heroDiscount ? `<s>${heroDiscount}</s>円<span class="c-Txt_Cap"></span><sup>*</sup>～ → ` : '') + `<span class="${heroDiscount ? '' : 'no-discount'}">${heroPayment1}</span>円～`;
    const heroPayment48Cost = document.getElementsByClassName('js-hero-payment48-cost');
    const heroTotalCost = document.getElementsByClassName('js-hero-totalcost');
    heroPayment48Cost.forEach(elm => elm.textContent = Number(deviceData.payment48).toLocaleString());
    heroTotalCost.forEach(elm => elm.innerHTML = htmlHeroTotalCost);

    const resultToScroll = (target, offset) => {
        $('body,html').animate({ scrollTop: $(target).offset().top - offset }, 400, 'swing');
    }
    const dispControlTarget = (target, option = {}) => {
        if (!target) return;
        option.isHide = option.isHide || false;
        option.isScroll = option.isScroll || false;
        option.offset = option.offset || 0;
        target.setAttribute('aria-hidden', option.isHide);
        option.isScroll && resultToScroll(target, option.offset);
    }

    const isSe = productName == 'iphone-se-3rd';
    // 購入ボタン
    const fixedHeaderPurchaseBtn = document.getElementById('js-header-purchase-btn');
    // シミュレーション結果
    const storageBtnsParent = document.getElementById('js-btn-storages');
    const paymentArea = document.getElementById('js-choice-payment');
    const paymentBtns = document.getElementsByClassName('js-btn-payment');
    const contentArea = document.getElementById('js-content-top');
    const tradeinBtns = document.getElementsByClassName('js-tradein');
    const tradeinOptionArea = document.getElementById('js-tradein-container');
    const carrierSelect = document.getElementById('js-tradein-carrier');
    const modelSelect = document.getElementById('js-tradein-device');
    const storageSelect = document.getElementById('js-tradein-storage');
    const simulationResultArea = document.getElementById('js-simulation-result-box');
    const paymentTimesTxt = document.getElementById('js-disp-payment');
    const costByPaymentTimesTxt = document.getElementById('js-disp-payment-number');
    const initialCostByPaymentTimesTxt = document.getElementById('js-disp-payment-initial');
    const totalCostArea = document.getElementById('js-disp-price-total');
    const totalCostTxt = document.getElementById('js-disp-payment-total');
    const payment48ExemptionArea = document.getElementById('js-disp-upgrade-area');
    const payment48ExemptionTxt = document.getElementById('js-disp-no-payment');
    const productNameTxt = document.getElementById('js-product-name');
    const tradeinPriceArea = document.getElementById('js-tradein-price-campaign');
    const tradeinProductNameTxt = document.getElementById('js-tradein-name');
    const totalCostInTradeinTxt = document.getElementById('js-disp-payment-total-2');
    const tradeinPriceTxt = document.getElementById('js-tradein-price');
    const firstTimeCampaignPoint = document.getElementById('js-cpn_firsttime_point');
    const specificConditionDiscount = document.getElementById('js-disp-specific-condition-discount');
    const tradeinPayment48CampaignArea = document.getElementById('js-disp-payment-48-discount');
    const actualBurdenTxt = document.getElementById('js-disp-actual-burden');
    const tradeinAccordion = document.getElementById('js-tradein-price-list');
    const tableGoodPrice = document.getElementById('js-good-price');
    const tableFairPrice = document.getElementById('js-fair-price');
    const tablePoorPrice = document.getElementById('js-poor-price');
    const purchaseBtn = document.getElementById('js-simulation-result-btn');
    const applecarePrice = document.getElementById('js-applecare-price');
    const cpnFirstpurchasePlan = document.getElementById('js-cpn-firstpurchase-plan');

    const setHref = targets => targets.forEach(elm => elm.href = deviceData.bss_url);
    const executeRoutine = () => {
        setHref([fixedHeaderPurchaseBtn, purchaseBtn]);
        const campaignConfig = [
            { target: applecarePrice, column: 'apple-care-price', isMinus: false, isPrice: true },
            { target: firstTimeCampaignPoint, column: 'plan_point', isMinus: true, isPrice: false },
            { target: cpnFirstpurchasePlan, column: 'cpn1_point', isMinus: true, isPrice: false },
        ];
        campaignConfig.forEach(v => v.target.textContent = `${v.isMinus ? '-' : ''}${Number(deviceData[v.column]).toLocaleString()}${v.isPrice ? '' : 'pt'}`);
    }
    executeRoutine();

    const simulationResultStore = {
        totalCost: 0,
        costByPaymentTimes: 0,
        initialCostByPaymentTimes: 0,
        payment48Exemption: 0,
        tradeinPrice: 0,
        actualBurden: 0,
        tradeinDevice: '',
    }
    const htmlByPaymentTimes = {
        '48': {
            label: '<span class="c-Txt_Emp-01">48回払い</span><br class="product-detail-Utility_Show-sp"><span class="c-Txt_Cap">（楽天カードのみ）</span>',
            monetaryUnitFormat: '円/月',
            priceFormat: '※48回目{price}円/月',
            discountText:
                `<div class="${namespace}-Simulation_Price-item u-Adjust_Mt-8">
                    <p>対象製品購入<br class="u-Show_Sp"><span class="c-Txt_Cap">（48回払い）</span><br class="u-Show_Sp">＆プラン申し込み<span class="c-Txt_Cap">※4</span></p>
                    <p class="c-Txt_Emp-02 ${namespace}-Utility_Fs-26">-${Number(deviceData['cpn2_48_point']).toLocaleString()}pt</p>
                </div>`,
        },
        '24': {
            label: '24回払い',
            monetaryUnitFormat: '円/月',
            priceFormat: '※初回{price}円/月',
            discountText:
                `<div class="${namespace}-Simulation_Price-item u-Adjust_Mt-8">
                    <p>対象製品購入<br class="u-Show_Sp"><span class="c-Txt_Cap">（一括・24回払い）</span><br class="u-Show_Sp">＆プラン申し込み<span class="c-Txt_Cap">※7</span></p>
                    <p class="c-Txt_Emp-02 ${namespace}-Utility_Fs-26">-${Number(deviceData['cpn3_13cpn_point']).toLocaleString()}円</p>
                </div>`,
        },
        '1': {
            label: '一括払い',
            monetaryUnitFormat: '円',
            priceFormat: '',
            discountText:
                `<div class="${namespace}-Simulation_Price-item u-Adjust_Mt-8">
                    <p>対象製品購入<br class="u-Show_Sp"><span class="c-Txt_Cap">（一括・24回払い）</span><br class="u-Show_Sp">＆プラン申し込み<span class="c-Txt_Cap">※7</span></p>
                    <p class="c-Txt_Emp-02 ${namespace}-Utility_Fs-26">-${Number(deviceData['cpn3_13cpn_point']).toLocaleString()}円</p>
                </div>`,
        },
    }
    storageBtnsParent.innerHTML = deviceData.capacity.split('/').map((v, i) => {
        return `
            <li>
                <label class="c-Form_Radioblock">
                    <input type="radio" name="storage" class="js-btn-storage" value="${v}" autocomplete="off" data-ratid="${deviceData.directory}_simulation_memory-0${++i}" data-ratevent="click" data-ratparam="all">
                    <span class="c-Form_Radioblock-wrap">
                        <span class="c-Form_Radio-icon"></span><span class="c-Form_Radioblock-label ${namespace}-Simulation_Radiolabel">${v === '1024' ? '1TB' : v + 'GB'}</span>
                    </span>
                </label>
            </li>
        `
    }).join('');
    const storageBtns = document.getElementsByClassName('js-btn-storage');
    const storages = [...storageBtns].map(elm => elm.value);
    const tradeinData = Data.tradein_pricelist.filter(v => /iPhone/.test(v.device));
    const getTradeinPriceNumberByColumn = (tradeinTarget, column) => Number(tradeinTarget[column].trim().slice(1).replace(',', ''));
    // シミュレーション結果を反映
    const simulationResultProcedure = () => {
        const selectedStorage = ([...storageBtns].find(elm => elm.checked) || { value: null }).value;
        const selectedPayment = ([...paymentBtns].find(elm => elm.checked) || { value: null }).value;
        const selectedTradein = ([...tradeinBtns].find(elm => elm.checked) || { value: null }).value;
        const campaignFlgs = {
            isTradein: false,
            isTradeinPayment48: false,
            isCampaginIphone: false,
        }
        if (selectedPayment) {
            // 支払い総額
            const index = storages.indexOf(selectedStorage);
            simulationResultStore.totalCost = Number(deviceData.totalcost.split('/')[index]);
            // 回数別の初回支払い価格
            simulationResultStore.initialCostByPaymentTimes = selectedPayment === '1' ? 0 : Number(deviceData[`initialcost${selectedPayment}`].split('/')[index]);
            // 回数別の支払い価格
            simulationResultStore.costByPaymentTimes = selectedPayment === '1' ? simulationResultStore.totalCost : (simulationResultStore.totalCost - simulationResultStore.initialCostByPaymentTimes) / (Number(selectedPayment) - 1);
            // 残り24回分
            simulationResultStore.payment48Exemption = simulationResultStore.totalCost - Number(simulationResultStore.costByPaymentTimes) * 24;
            // 下取り
            if (selectedTradein && selectedTradein === 'use') { // 利用する
                const selectedCarrier = carrierSelect.value;
                const selectedModel = modelSelect.value;
                const selectedTradeinStorage = storageSelect.value;
                campaignFlgs.isTradein = true;
                // 下取り価格
                const tradeinTarget = tradeinData.find(v => v.carrier === selectedCarrier && v.device === selectedModel && v.memory === selectedTradeinStorage);
                if (tradeinTarget) {
                    simulationResultStore.tradeinPrice = getTradeinPriceNumberByColumn(tradeinTarget, 'good_price');
                    simulationResultStore.tradeinDevice = tradeinTarget.device;
                    // 下取り価格の確認・申し込みアコーディオン内テーブル
                    tableGoodPrice.textContent = simulationResultStore.tradeinPrice.toLocaleString();
                    tableFairPrice.textContent = getTradeinPriceNumberByColumn(tradeinTarget, 'fair_price').toLocaleString();
                    tablePoorPrice.textContent = getTradeinPriceNumberByColumn(tradeinTarget, 'poor_price').toLocaleString();
                }
                const campaignTargetIphone = ['iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus', 'iPhone X'];
                campaignFlgs.isCampaginIphone = campaignTargetIphone.includes(selectedModel);
            }
            campaignFlgs.isTradeinPayment48 = selectedPayment === '48';
            // 実質負担額
            const tradeinPrice = campaignFlgs.isTradein ? simulationResultStore.tradeinPrice : 0;
            const campaign2091 = deviceData['plan_point'];
            const campaign1819 = deviceData['cpn1_point'];
            const campaign2169 = !campaignFlgs.isTradeinPayment48 ? deviceData['cpn3_13cpn_point'] : 0;
            const campaign2231 = campaignFlgs.isTradeinPayment48 ? deviceData['cpn2_48_point'] : 0;
            const actualBurdenCalcValue = [
                Number(tradeinPrice), // 下取り価格
                campaign2091, // 他社から乗り換え
                campaign1819, // iPhone対象端末ポイントバック
                campaign2169, // iPhone対象製品を一括払いもしくは24回払い
                campaign2231, // 買い替え超トクプログラム
            ].reduce((prev, current) => {
                return prev - current;
            }, Number(simulationResultStore.totalCost))
            simulationResultStore.actualBurden = actualBurdenCalcValue < 0 ? 0 : actualBurdenCalcValue;
            // シミュレーション結果に値セット
            paymentTimesTxt.innerHTML = htmlByPaymentTimes[selectedPayment].label;
            costByPaymentTimesTxt.textContent = simulationResultStore.costByPaymentTimes.toLocaleString();
            costByPaymentTimesTxt.nextSibling.textContent = htmlByPaymentTimes[selectedPayment].monetaryUnitFormat;
            const totalCostStr = simulationResultStore.totalCost.toLocaleString();
            totalCostTxt.textContent = totalCostStr;
            payment48ExemptionTxt.textContent = simulationResultStore.payment48Exemption.toLocaleString();
            productNameTxt.textContent = deviceData.product;
            totalCostInTradeinTxt.textContent = totalCostStr;
            tradeinProductNameTxt.textContent = simulationResultStore.tradeinDevice.toLocaleString();
            tradeinPriceTxt.textContent = `-${tradeinPrice.toLocaleString()}`;
            actualBurdenTxt.textContent = simulationResultStore.actualBurden.toLocaleString();
            initialCostByPaymentTimesTxt.textContent = htmlByPaymentTimes[selectedPayment].priceFormat.replace('{price}', simulationResultStore.initialCostByPaymentTimes.toLocaleString());
            // 表示制御
            dispControlTarget(totalCostArea, { isHide: selectedPayment === '1' });
            dispControlTarget(initialCostByPaymentTimesTxt, { isHide: simulationResultStore.initialCostByPaymentTimes === simulationResultStore.costByPaymentTimes });
            dispControlTarget(tradeinPriceArea, { isHide: !campaignFlgs.isTradein });
            dispControlTarget(tradeinPayment48CampaignArea, { isHide: !(campaignFlgs.isTradein && campaignFlgs.isTradeinPayment48) });
            dispControlTarget(tradeinAccordion, { isHide: !campaignFlgs.isTradein });
            dispControlTarget(payment48ExemptionArea, { isHide: !campaignFlgs.isTradeinPayment48 });
            // iPhoneSE かつ 48回払いの時は表示しない
            dispControlTarget(specificConditionDiscount, { isHide: isSe && campaignFlgs.isTradeinPayment48 });
            specificConditionDiscount.innerHTML = selectedPayment !== '48' ? htmlByPaymentTimes[selectedPayment].discountText : '';
        }
    }

    const storageBtnsChangeHandeler = () => {
        dispControlTarget(paymentArea, { isScroll: true, offset: 64 });
        simulationResultProcedure();
    }
    const paymentBtnsChangeHandeler = e => {
        dispControlTarget(contentArea, { isScroll: true, offset: 64 });
        simulationResultProcedure();
    }
    const isSimulationResultHideOnTradein = () => ![carrierSelect, modelSelect, storageSelect].every(elm => elm.value); // 下取り時のシミュレーション結果表示判定
    const tradeinBtnsChangeHandler = e => {
        let isSimulationResultHide = false;
        // ドロップダウンエリア
        if (e.currentTarget.value === 'use') { // 利用する
            dispControlTarget(tradeinOptionArea);
            isSimulationResultHide = isSimulationResultHideOnTradein();
        }
        else { // 利用しない
            dispControlTarget(tradeinOptionArea, { isHide: true });
            isSimulationResultHide = false;
        }
        // シミュレーション結果
        dispControlTarget(simulationResultArea, { isHide: isSimulationResultHide });
        purchaseBtn.setAttribute('aria-disabled', isSimulationResultHide);
        simulationResultProcedure();
    }
    // 容量
    storageBtns.forEach(elm => elm.addEventListener('change', storageBtnsChangeHandeler));
    // お支払い方法
    paymentBtns.forEach(elm => elm.addEventListener('change', paymentBtnsChangeHandeler));
    // スマホ下取りサービス
    tradeinBtns.forEach(elm => elm.addEventListener('change', tradeinBtnsChangeHandler));

    // 下取り選択肢
    const setNextSelect = (dependency, target, config, appendCondition) => {
        // 次の選択肢を表示
        const parentElm = target.closest('.js-tradein-select');
        if (dependency) dispControlTarget(parentElm);
        else dispControlTarget(parentElm, { isHide: true });

        // 次の選択肢セット
        target.querySelectorAll('option').forEach(elm => elm && elm.remove());
        const label = document.createElement('option');
        label.value = '';
        label.textContent = config.label;
        target.appendChild(label);
        // appendConditionが複数になる時は関数化したい
        const tradeinDataByKey = appendCondition ? tradeinData.filter(e => e[config.key] === dependency && e[appendCondition.key] === appendCondition.dependency) : tradeinData.filter(e => e[config.key] === dependency);
        const nextSet = new Set();
        tradeinDataByKey.forEach(e => nextSet.add(e[config.next]));
        [...nextSet].forEach(e => {
            const optionTag = document.createElement('option');
            optionTag.value = e;
            optionTag.textContent = e;
            target.appendChild(optionTag);
        });
    }

    const carrierSelectEventHandler = e => {
        setNextSelect(e.currentTarget.value, modelSelect, { label: 'モデルを選択', key: 'carrier', next: 'device' });
        setNextSelect('', storageSelect, { label: '容量を選択', key: 'device', next: 'memory' });
        const isTarget = isSimulationResultHideOnTradein();
        dispControlTarget(simulationResultArea, { isHide: isTarget });
        purchaseBtn.setAttribute('aria-disabled', isTarget);
    }
    const modelSelectEventHandler = e => {
        setNextSelect(e.currentTarget.value, storageSelect, { label: '容量を選択', key: 'device', next: 'memory' }, { key: 'carrier', dependency: carrierSelect.value });
        const isTarget = isSimulationResultHideOnTradein();
        dispControlTarget(simulationResultArea, { isHide: isTarget });
        purchaseBtn.setAttribute('aria-disabled', isTarget);
    }
    const storageSelectEventHandler = e => {
        const isTarget = isSimulationResultHideOnTradein();
        dispControlTarget(simulationResultArea, { isScroll: e.currentTarget.value ? true : false, isHide: isTarget });
        purchaseBtn.setAttribute('aria-disabled', isTarget);
        simulationResultProcedure();
    }
    // 1. 購入したキャリアを選択
    carrierSelect && carrierSelect.addEventListener('change', carrierSelectEventHandler);
    // 2. モデルを選択
    modelSelect && modelSelect.addEventListener('change', modelSelectEventHandler);
    // 3. 容量を選択
    storageSelect && storageSelect.addEventListener('change', storageSelectEventHandler);

}

// 関連アクセサリ carousel
const accessoryCarousel = $(`.js-${namespace}-Carousel-product`);
if (accessoryCarousel) {
    /** カルーセルにslick付与 */
    accessoryCarousel.each(function () {
        let $self = $(this);
        $self.on('init breakpoint', (_, slick) => {
            addClassBasedOnSlideCount(slick);
        });
        const carouselConfig = {
            respondTo: 'min',
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
            infinite: true,
            prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        };
        $self.slick($.extend({}, carouselConfig, {
            responsive: [
                {
                    breakpoint: themeNum.max.m,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: themeNum.max.s,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        dotsClass: 'slick-dots c-Carousel_Dots-v2',
                        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    }
                }
            ]
        }));
    });
}

const ctrlAlignTargets = document.querySelector('#js-ctrl-align h3');
if (ctrlAlignTargets) {
    ctrlAlignTargets.style.textAlign = 'left!important';
}

