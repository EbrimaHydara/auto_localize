import axios from 'axios';
import { sub, format } from "date-fns";

const Init = async () => {

    const addComma = (num, options = { withSmallTag: false }) => {
        const { withSmallTag } = options;
        const _num = num.toLocaleString();
        if (withSmallTag) {
            return _num.replace(',', '<span style="font-size:0.6em;">,</span>');
        }

        return _num;
    };

    const fetchPlanData = async () => {
        const res = await fetch('/assets/json/simulation.json');
        const json = await res.json();

        return json;
    }

    const getData = (dataList, size) => {
        let data = {};
        if (isNaN(Number(size))) {
            // dropdownからサイズを選択した時(over_X, under_X, unknown)
            if (size.match(/^over_(\d+(\.\d+)?)+$/)) {
                const _size = Number(size.replace('over_', '')) + 0.1; // minの値より大きくするため+0.1
                data = [...dataList].find(_data => (Number(_data['data_min']) < _size));
            } else if (size.match(/^under_(\d+(\.\d+)?)+$/)) {
                const _size = Number(size.replace('under_', ''));
                data = [...dataList].findLast(_data => (_size <= Number(_data['data_max'])));
            }
        } else {
            data = [...dataList].find(_data => (Number(_data['data_min']) < size) && (size <= Number(_data['data_max'])));
        }

        return data;
    }

    const getPattern = (size, targetCarrier, targetPrice, rmiPrice) => {
        if (size === 'unknown') {
            return 'SIZE_UNKNOWN';
        }
        if (targetCarrier === 'other') {
            return 'CARRIER_OTHER';
        }

        if (rmiPrice < targetPrice) {
            return 'GRAPH_WIN';
        } else if (targetPrice <= rmiPrice) {
            return 'GRAPH_LOSE';
        }

        return 'SIZE_UNKNOWN';
    };

    const modalInit = (entryContainer, resultContainer, initInputs, modalFlag) => {
        const modalBtnWarp = document.querySelector('.saikyo-plan-Modal_Btn-side');
        const modalConfig = {
            background: '#4D4D4D',
            custom_class: 'c-Modal saikyo-plan-Modal',
            overlay_opacity: 0.5,
            content_source: '#modalBtnContent',
            start_open: modalFlag ? false : true,
            background_scroll: false,
            fullscreen: false,
            before_open: () => {
                modalBtnWarp.classList.remove('active');
                entryContainer.classList.add('current');
                resultContainer.classList.remove('current');
                initInputs();
            },
            after_open: () => {
                const closeBtn = document.getElementById('modaal-close');
                closeBtn.dataset.ratid = 'saikyo-plan_simulation_close_b_simulation_click';
                closeBtn.dataset.ratevent = 'click';

                if (RAT && RAT.bindClick) {
                    const elm = RAT.$Selector("#modaal-close")
                    RAT.bindClick(elm)
                }

                const bodyElm = document.querySelector('.saikyo-plan-Modal_Container-entry-body');
                modalBodyWidth = bodyElm.getBoundingClientRect().width;
            },
            after_close: () => {
                modalBtnWarp.classList.add('active');
                localStorage.setItem('preventAutoModal', 'true');
                initPatternElment();
            },
        };
        $('#modalBtn').modaal(modalConfig);
    }

    const changeStateCarrierSelect = (askDataSizeSelect, carrierSelect, planListData) => {
        const selectCarrierBox = document.getElementById('selectCarrier');
        const selectFamilyBox = document.getElementById('selectFamily');
        askDataSizeSelect.addEventListener('change', (e) => {
            let selectedDataSize = e.target.value;
            if(selectedDataSize === 'unknown') {
                selectCarrierBox.style.display = 'none';
                selectFamilyBox.style.display = 'none';
                carrierSelect.setAttribute('disabled', true);
                carrierSelect.selectedIndex = 0;
            } else if (selectedDataSize === '') {
                initInputs();
            } else {
                selectCarrierBox.style.display = 'block';
                selectFamilyBox.style.display = 'block';
                carrierSelect.removeAttribute('disabled');
            }

            const filteredList = getData(planListData, selectedDataSize);
            activateCarrierItems(filteredList, carrierSelect);
        })
    }

    const changeStateSubmitBtn = (askDataSizeSelect, carrierSelect) => {
        const selectBox = document.getElementsByClassName('formItems');
        selectBox.forEach(element => {
            element.addEventListener('change', (e) => {
                if(askDataSizeSelect.value === 'unknown') {
                    btnSubmit.setAttribute('aria-disabled', false);
                } else if(askDataSizeSelect.value !== '' && carrierSelect.value !== '') {
                    btnSubmit.setAttribute('aria-disabled', false);
                } else {
                    btnSubmit.setAttribute('aria-disabled', true);
                }
            })
        });
    }

    const updateSubmitRatId = () => {
        const targetBtn = document.getElementById('btnSubmit');
        const sizeData = document.getElementById('askDataSize');
        const carrierData = document.getElementById('carrier');
        const familyData = document.querySelector('input[name="lines"]:checked')
        targetBtn.dataset.ratid = `data=${sizeData.value}&carrier=${carrierData.value}&family=${familyData.value}&pattern=b`;
    }

    const changeDisplayModal = (e) => {
        e.preventDefault();
        entryContainer.classList.remove('current');
        resultContainer.classList.add('current');

        const entryValues = {
            data: askDataSizeSelect.value,
            carrier: carrierSelect.value,
            family: document.querySelector('input[name="lines"]:checked').value
        }

        displayResult(entryValues);
    }

    const initInputs = () => {
        const selectBox = document.getElementsByClassName('formItems');
        const lines = document.querySelectorAll('input[name="lines"]');
        const carrierBox = document.getElementById('selectCarrier');
        const selectFamilyBox = document.getElementById('selectFamily');
        selectBox.forEach(element => {
            element.selectedIndex = 0;
            element.id === 'carrier' && element.setAttribute('disabled', true);
        });
        carrierBox.style.display = 'block';
        selectFamilyBox.style.display = 'block';
        lines[0].checked = true;
        btnSubmit.setAttribute('aria-disabled', true)
    }

    const initPatternElment = () => {
        const winPatternElms = document.querySelectorAll('.js-win-pattern');
        const losePatternElms = document.querySelectorAll('.js-lose-pattern');
        const otherPatternElms = document.querySelectorAll('.js-other-pattern');
        const jsGraph = document.getElementById('js-graph');
        const otherImg = document.getElementById('otherPatternImg');
        const loadingSpiner = document.getElementById('js-modal-loading');

        jsGraph.style.display = 'none';
        otherImg.style.display = 'none';

        winPatternElms.forEach(elm => {
            elm.style.display = 'none';
        });
        losePatternElms.forEach(elm => {
            elm.style.display = 'none';
        });
        otherPatternElms.forEach(elm => {
            elm.style.display = 'none';
        });

        loadingSpiner.style.display = "block";
    }

    const activateCarrierItems = (filteredList, carrierSelect) => {
        const carrierOptions = carrierSelect.options;
        const sizeData = filteredList
        carrierOptions.forEach(item => {
            if (sizeData[`${item.value}_plan`] || item.value === 'other') {
                item.disabled = false;
            } else {
                item.disabled = true;
            }
        })
    }

    const changeStateFamilySelect = (carrierSelect, familySelect, planListData, askDataSizeSelect) => {
        carrierSelect.addEventListener('change', (e) => {
            let selectedCarrier = e.target.value;
            const filteredList = getData(planListData, askDataSizeSelect.value);
            let family2data = filteredList[`${selectedCarrier}_plan_family_2`];
            let family3data = filteredList[`${selectedCarrier}_plan_family_3_over`];

            familySelect.forEach(line => {
                if(line.value === 'family_2'){
                    if (family2data) {
                        line.removeAttribute('disabled');
                    } else {
                        line.setAttribute('disabled', true);
                    }
                }
                if(line.value === 'family_3_over'){
                    if (family3data) {
                        line.removeAttribute('disabled');
                    } else {
                        line.setAttribute('disabled', true);
                    }
                }
            })
        })
    }

    const displayResult = async (entryValues) => {

        let resultDataSize = entryValues.data;
        let resultCarrier = entryValues.carrier;
        let resultFamilyPlan = entryValues.family;
        const defaultAvgPoint = 1388;

        const carrierLabelGraph = {
            docomo_eximo: 'docomo<br>-eximo-',
            docomo_irumo: 'docomo<br>-irumo-',
            docomo: 'docomo -従来のプラン-',
            ahamo: 'ahamo',
            au: 'au',
            povo: 'povo2.0',
            softbank: 'SoftBank',
            softbank_paytoku: 'SoftBank<br>-ペイトク-',
            linemo: 'LINEMO',
            ymobile: 'Y!mobile',
            uqmobile: 'UQ mobile',
        };

        const familyLabel = {
            family_2: '家族割(2回線)',
            family_3_over: '家族割(3回線以上)',
        }

        const patternCommnet = {
            winPattern: '<span class="c-Txt_Emp-02">*1 他社料金は各種キャンペーンにより割引適用される場合や条件あり</span> *2 2023年10月の平均。プラン料金を楽天ポイント全額支払時 *3 両社ポイントを含まない金額で算出 *4 一部対象外番号あり。アプリ未使用時30秒22円 *2023年10月3日時点の情報。通話料等別',
            winPatternLogin : '<span class="c-Txt_Emp-02">*1 他社料金は各種キャンペーンにより割引適用される場合や条件あり</span> *2 あなたの直近3カ月間の楽天市場での購買金額で「楽天モバイル対象プランご契約者特典＋4倍」の獲得ポイント数で算出。プラン料金を楽天ポイントで全額支払時 *3 両社ポイントを含まない金額で算出 *4 一部対象外番号あり。アプリ未使用時30秒22円 *2023年10月3日時点の情報。通話料等別',
            losePattern: '<span class="c-Txt_Emp-02">*1 他社料金は各種キャンペーンにより割引適用される場合や条件あり</span> *2 2023年10月の平均。プラン料金を楽天ポイント全額支払時 *3 両社ポイントを含まない金額で算出 *4 一部対象外番号あり。アプリ未使用時30秒22円 *2023年10月3日時点の情報。通話料等別',
            losePatternLogin: '<span class="c-Txt_Emp-02">*1 他社料金は各種キャンペーンにより割引適用される場合や条件あり</span> *2 あなたの直近3カ月間の楽天市場での購買金額で「楽天モバイル対象プランご契約者特典＋4倍」の獲得ポイント数で算出。プラン料金を全額楽天ポイントで支払時 *3 一部対象外番号あり。アプリ未使用時30秒22円 *2023年10月3日時点の情報。通話料等別',
            otherPattern: '*通話料等別 *1 公平なサービス提供または環境により速度低下する場合あり *2 一部対象外番号あり。アプリ未使用時30秒22円'
        }

        const patternId = {
            winPattern: 'b_1',
            winPatternLogin: 'b_2',
            losePattern: 'b_3',
            otherPattern: 'b_4'
        }

        const patternImg = {
            winPattern: {
                pc : 'simulation-modal-additional01-pc.png',
                sp : 'simulation-modal-additional01-sp.png'
            },
            losePattern: {
                pc : 'simulation-modal-additional02-pc.png',
                sp : 'simulation-modal-additional02-sp.png'
            },
            otherPattern: {
                pc : 'simulation-modal-additional04-pc.png',
                sp : 'simulation-modal-additional04-sp.png'
            }
        }

        const patternPointText = {
            noPoint: `楽天モバイルご利用者の<br class="u-Show_Oox">月平均獲得`,
            withPoint: `あなたのモバイル特典(SPU＋4倍)でもらえる<br class="u-Show_Oox">`
        }

        const getMemberInfo = async () => {
            const prdPath = 'https://app.rakuten.co.jp/engine/zapi/MemberInformation/GetPointWithRz/20160519';
            const localPath = `/assets/json/dummy-member-information.json`;
            const apiPath = isLocal ? localPath : prdPath;

            const api = axios.create({
                url: apiPath,
                headers: { "Content-Type": "application/json" },
                responseType: 'json',
                withCredentials: true
            });

            const res = await api.get();
            const data = res.data;

            // localのみisLogin=falseをクエリにつけることで未ログイン状態に
            if (isLocal) {
                const searchParams = new URLSearchParams(location.search);
                const dummyIsLogin = searchParams.get('isLogin');
                if (dummyIsLogin === 'false') {
                    return;
                }
            }
            return data;
        }

        const getPoint = async () => {
            const prdPath = 'https://user-attributes.api.rakuten.co.jp/capi/v1/mno/poikaku.json?acc=1312&aid=1';
            let localPath = '/assets/json/dummy_simulation_point_01.json';
            // localのみpointPattern=01~13をクエリにつけることでdummy情報出しわけ
            if (isLocal) {
                const searchParams = new URLSearchParams(location.search);
                const dummyPointPattern = searchParams.get('pointPattern');
                if (dummyPointPattern) {
                    localPath = `/assets/json/dummy_simulation_point_${dummyPointPattern}.json`;
                }
            }
            const apiPath = isLocal ? localPath : prdPath;
            const api = axios.create({
                url: apiPath,
                headers: { "Content-Type": "application/json" },
                responseType: 'json',
                withCredentials: true,
            });
            const res = await api.get();
            const data = res.data.items.mobile;
            return data;
        }

        const getAveragePoint = (pointDataList) => {
            let date = new Date();
            if (isLocal) {
                const searchParams = new URLSearchParams(location.search);
                const dummyDate = searchParams.get('date') || '2023-12-1'; // dummyデータが12月分までしかないので通常は日付を固定
                date = new Date(dummyDate);
            }
            const date1monthBefore = format(sub(date, { months: 1 }), "yyMM");
            const date2monthBefore = format(sub(date, { months: 2 }), "yyMM");
            const date3monthBefore = format(sub(date, { months: 3 }), "yyMM");

            let poikaku3Months = 0;
            pointDataList.forEach(data => {
                if (data.month === date1monthBefore || data.month === date2monthBefore || data.month === date3monthBefore) {
                    let point = 0;
                    let magnification = 1;
                    const monthRank = Number(data.rank);
                    switch (monthRank) {
                        case 2:
                        magnification = 2;
                        break;
                        case 3:
                        magnification = 2;
                        break;
                        case 4:
                        magnification = 2;
                        break;
                        case 5:
                        magnification = 3;
                        break;
                        default:
                        break;
                    }
                    if (data.mno_status === '1') {
                        point = Number(data.actual);
                    } else {
                        point = Number(data.potential);
                    }

                    // 12月以前
                    if (Number(data.month) < 2312) {
                        point = point / magnification * 4;
                    }
                    // 月のpoint上限 = 2000
                    if (point > 2000) {
                        point = 2000;
                    }
                    poikaku3Months += point;
                }
            });

            return Math.round(poikaku3Months / 3);
        }

        const displayPoint = (avgPoint) => {
            const monthlyPointElms = document.getElementsByClassName('js-monthly-point');
            monthlyPointElms.forEach(item => {
                item.innerHTML = addComma(avgPoint, {withSmallTag: true});
            })
        };

        const backToDisplayInput = () => {
            const reTryBtn = document.getElementById('retryBtn');

            reTryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                entryContainer.classList.add('current');
                resultContainer.classList.remove('current');
                initInputs();
                initPatternElment();
            })
        }

        const animateBar = (targetItem, graphWidth, ratio, duration) => {
            targetItem.animate({
                width: [0, `calc(${graphWidth}px * ${ratio})`]
            },{
                fill: 'forwards',
                duration: duration,
            })
        }

        const updatePatternAdditionalImg = (pcImg, spImg) => {
            const imgElm = document.getElementById('additionalImg');
            imgElm.querySelector('img').setAttribute('src', `/assets/img/fee/saikyo-plan/${pcImg}`);
            imgElm.querySelector('source').setAttribute('srcset', `/assets/img/fee/saikyo-plan/${spImg}`)
        }

        const updatePatternComments = (comment) => {
            const commnetElm = document.getElementById('resultComment');
            commnetElm.innerHTML = `${comment}`;
        }

        const updatePatternBtnLink = (linkId) => {
            const applicationBtn = document.getElementById('applicationBtn');
            applicationBtn.setAttribute('href',`/guide/application/?lid-r=fee_saikyo-plan_simulation-result_${linkId}_guide_application`);
        }

        const updatePatternAppearRatId = (ratId) => {
            const ratIdElm = document.getElementById('resultBody');
            ratIdElm.dataset.ratid = `saikyo-plan_simulation-result_${ratId}`;
            if (RAT && RAT.bindAppear) {
                const appearRatElm = RAT.$Selector("#resultBody");
                RAT.bindAppear(appearRatElm);
            }
        }

        const updatePatternRetryBtn = (ratId) => {
            const retryBtn = document.getElementById('retryBtn');
            retryBtn.dataset.ratid = `saikyo-plan_simulation_again_${ratId}_click`;
        }

        const updatePatternPointText = (text) => {
            const commnetElm = document.querySelector('.js-monthly-point-text');
            commnetElm.innerHTML = `${text}`;
        }

        const updatePatternContens = (pattern, patternId, patternImgPc, patternImgSp, patternCommnets, patternPointText) => {
            updatePatternAppearRatId(patternId);
            updatePatternAdditionalImg(patternImgPc, patternImgSp);
            updatePatternBtnLink(patternId);
            updatePatternComments(patternCommnets);
            updatePatternRetryBtn(patternId);
            if(pattern !== 'OTHER') {
                updatePatternPointText(patternPointText);
            }
        }

        const displayGraph = async (carrier, rmiPrice, targetPrice, plan, familyPlan, point) => {
            const rmiBarElm = document.querySelector('.js-graph-rmi-modal');
            const targetBarElm = document.querySelector('.js-graph-target-modal');
            const pointBarElm = document.querySelector('.js-graph-point-modal');

            let isSp = false;
            const mediaQueryList = window.matchMedia(`(min-width: 835px)`);
            const resize = (event) => {
                if (event.matches) {
                    isSp = false;
                } else {
                    isSp = true;
                }
            }
            mediaQueryList.addEventListener('change', resize);
            resize(mediaQueryList);

            const diffPrice = targetPrice - rmiPrice;
            const pointPrice = (rmiPrice - point > 0) ? rmiPrice - point : 0;
            const modalBodyPadding = isSp ? 32 : 48;
            const graphElmWidth = modalBodyWidth - modalBodyPadding;

            const graphValueWidth = 80 + 8; // valueの幅 + margin
            const graphWidth = graphElmWidth - graphValueWidth;

            displayPoint(point);

            // 勝ちパターン
            if (diffPrice > 0) {
                const diffPriceElm = document.querySelector('.js-graph-diff-price-modal');
                diffPriceElm.innerHTML = addComma(diffPrice * 24, {withSmallTag: true});

                let barRatio = Math.floor(rmiPrice / targetPrice * 100) / 100;
                let pointBarRatio = Math.floor(pointPrice / targetPrice * 100) / 100;

                targetBarElm.style.width = `calc(${graphWidth}px)`;
                animateBar(rmiBarElm, graphWidth, barRatio, 500);
                animateBar(pointBarElm, graphWidth, pointBarRatio, 500);

                const graphArrowLongElm = document.querySelector('.js-graph-arrow-long-modal');
                const graphArrowShortElm = document.querySelector('.js-graph-arrow-short-modal');
                graphArrowLongElm.style.display = 'none';
                graphArrowShortElm.style.display = 'none';

                let graphArrowElm;
                if (!isSp && barRatio < 0.7) {
                    graphArrowElm = graphArrowLongElm
                    // graph差分 - (valueの幅 + graphとvalue間 + value後ろのmargin)
                    graphArrowElm.style.width = `calc(${graphWidth - (graphWidth * barRatio)}px - (${graphValueWidth}px + 8px))`;
                } else {
                    graphArrowElm = graphArrowShortElm;
                }
                graphArrowElm.style.display = 'block';

                setTimeout(() => {
                    graphArrowElm.animate({
                        transform: ['translateX(20px)', 'translateX(0)'],
                        opacity: [0, 1]
                    }, {
                        fill: 'forwards',
                        duration: 500,
                    });
                }, 300)

            } else {
                // 負けのときはグラフのみを表示(animationなし)
                let barRatio = Math.floor(targetPrice / rmiPrice * 100) / 100;
                let pointBarRatioLose = Math.floor(pointPrice / rmiPrice * 100) / 100;
                rmiBarElm.animate({
                    width: [0, `${graphWidth}px`]
                },{
                    fill: 'forwards',
                    duration: 10,
                })
                animateBar(targetBarElm, graphWidth, barRatio, 10);
                animateBar(pointBarElm, graphWidth, pointBarRatioLose, 10);
            }

            const targetCarrierElm = document.querySelector('.js-graph-target-carrier-modal');
            const rmiPriceElm = document.querySelector('.js-graph-rmi-price-modal');
            const targetPriceElm = document.querySelector('.js-graph-target-price-modal');
            const pointPriceElm = document.querySelector('.js-graph-point-price-modal');
            targetCarrierElm.innerHTML = carrierLabelGraph[carrier];
            rmiPriceElm.innerHTML = addComma(rmiPrice, {withSmallTag: true});
            targetPriceElm.innerHTML = addComma(targetPrice, {withSmallTag: true});
            pointPriceElm.innerHTML = addComma(pointPrice, {withSmallTag: true});

            let targetPlan = plan;
            if (familyPlan) {
                targetPlan += `／${familyLabel[familyPlan]}`
            }
            const targetPlanElms = document.querySelectorAll('.js-graph-target-plan');
            targetPlanElms.forEach(elm => {
                elm.innerHTML = targetPlan;
            })
        };

        const changeDisplayPattern = (pattern) => {
            const resultHeader = document.getElementById('resultHeader');
            const graph = document.getElementById('js-graph-modal');
            const otherPatternImg = document.getElementById('otherPatternImg');

            if(pattern === 'OTHER') {
                resultHeader.classList.add('other');
                otherPatternImg.style.display = 'block';
            } else {
                resultHeader.classList.remove('other');
                graph.style.display = 'block';
            }
        }

        backToDisplayInput();

        localStorage.setItem('preventAutoModal', 'true');

        const resultCloseBtn = document.getElementById('modaal-close');
        resultCloseBtn.dataset.ratid = 'saikyo-plan_simulation_close_b_click';

        const data = getData(planListData, resultDataSize);
        const rmiPriceWithTax = Number(data['rakuten_mobile_price_with_tax']);

        let targetPlan = '';
        let targetPriceWithTax = 0;

        if (resultFamilyPlan !== '') {
            targetPlan = data[`${resultCarrier}_plan_${resultFamilyPlan}`];
            targetPriceWithTax = Number(data[`${resultCarrier}_price_with_tax_${resultFamilyPlan}`]);
        }else {
            targetPlan = data[`${resultCarrier}_plan`];
            targetPriceWithTax = Number(data[`${resultCarrier}_price_with_tax`]);
        }

        const winPatternElms = document.querySelectorAll('.js-win-pattern');
        const losePatternElms = document.querySelectorAll('.js-lose-pattern');
        const graphWrap = document.querySelector('.saikyo-plan-Modal_Appeal-graph-wrap');
        const loading = document.getElementById('js-modal-loading');
        const resultBodyWrap = document.getElementById('resultBodyWrap');

        const matchedPattern = getPattern(resultDataSize, resultCarrier, targetPriceWithTax, rmiPriceWithTax);

        resultBodyWrap.style.display = 'none';

        if(matchedPattern === 'SIZE_UNKNOWN' || matchedPattern === 'CARRIER_OTHER') {
            changeDisplayPattern('OTHER');
            updatePatternContens('OTHER', patternId.otherPattern, patternImg.otherPattern.pc, patternImg.otherPattern.sp, patternCommnet.otherPattern);
            graphWrap.style.display = 'none';
            loading.style.display = 'none';
            resultBodyWrap.style.display = 'block';
        } else {
            graphWrap.style.display = 'block';

            getMemberInfo().then(async data => {
                const pointDataList = await getPoint();
                const userPoint = getAveragePoint(pointDataList);
                let point;

                loading.style.display = 'none';

                if(data) {
                    if(userPoint > 0) {
                        point = userPoint;
                    }else {
                        point = defaultAvgPoint;
                    }
                }else {
                    point = defaultAvgPoint;
                }

                if (isLocal) {
                    const searchParams = new URLSearchParams(location.search);
                    const dummyIsLogin = searchParams.get('isLogin');
                    if (dummyIsLogin === 'false') {
                        let point = defaultAvgPoint;
                        if(matchedPattern === 'GRAPH_WIN') {
                            updatePatternContens(matchedPattern, patternId.winPattern, patternImg.winPattern.pc, patternImg.winPattern.sp, patternCommnet.winPattern, patternPointText.noPoint);
                            displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, point);
                            winPatternElms.forEach(elm => {
                                elm.style.display = 'block';
                            });
                            changeDisplayPattern('GRAPH_WIN');
                            resultBodyWrap.style.display = 'block';
                        } else {
                            displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, point);
                            losePatternElms.forEach(elm => {
                                elm.style.display = 'block';
                            });
                            updatePatternContens(matchedPattern, patternId.losePattern, patternImg.losePattern.pc, patternImg.losePattern.sp, patternCommnet.losePattern, patternPointText.noPoint);
                            changeDisplayPattern('GRAPH_LOSE');
                            resultBodyWrap.style.display = 'block';
                        }
                        return;
                    }
                }

                if(matchedPattern === 'GRAPH_WIN') {
                    if(data && userPoint > 0) {
                        updatePatternContens(matchedPattern, patternId.winPatternLogin, patternImg.winPattern.pc, patternImg.winPattern.sp, patternCommnet.winPatternLogin, patternPointText.withPoint);
                    }else {
                        updatePatternContens(matchedPattern, patternId.winPattern, patternImg.winPattern.pc, patternImg.winPattern.sp, patternCommnet.winPattern, patternPointText.noPoint);
                    }

                    displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, point);
                    winPatternElms.forEach(elm => {
                        elm.style.display = 'block';
                    });
                    changeDisplayPattern('GRAPH_WIN');
                    resultBodyWrap.style.display = 'block';
                } else {
                    displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, point);
                    losePatternElms.forEach(elm => {
                        elm.style.display = 'block';
                    });

                    let loosePointText;
                    let looseComment;
                    if(data && userPoint > 0) {
                        loosePointText = patternPointText.withPoint;
                        looseComment = patternCommnet.losePatternLogin;
                    }else {
                        loosePointText = patternPointText.noPoint;
                        looseComment = patternCommnet.losePattern;
                    }
                    updatePatternContens(matchedPattern, patternId.losePattern, patternImg.losePattern.pc, patternImg.losePattern.sp, looseComment, loosePointText);
                    changeDisplayPattern('GRAPH_LOSE');
                    resultBodyWrap.style.display = 'block';
                }
            }).catch(() => {
                let point = defaultAvgPoint;
                loading.style.display = 'none';
                if(matchedPattern === 'GRAPH_WIN') {
                    updatePatternContens(matchedPattern, patternId.winPattern, patternImg.winPattern.pc, patternImg.winPattern.sp, patternCommnet.winPattern, patternPointText.noPoint);
                    displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, point);
                    winPatternElms.forEach(elm => {
                        elm.style.display = 'block';
                    });
                    changeDisplayPattern('GRAPH_WIN');
                    resultBodyWrap.style.display = 'block';
                } else {
                    displayGraph(resultCarrier, rmiPriceWithTax, targetPriceWithTax, targetPlan, resultFamilyPlan, point);
                    losePatternElms.forEach(elm => {
                        elm.style.display = 'block';
                    });
                    updatePatternContens(matchedPattern, patternId.losePattern, patternImg.losePattern.pc, patternImg.losePattern.sp, patternCommnet.losePattern, patternPointText.noPoint);
                    changeDisplayPattern('GRAPH_LOSE');
                    resultBodyWrap.style.display = 'block';
                }
            });
        }
    }

    let isLocal = false;

    const askDataSizeSelect = document.getElementById('askDataSize');
    const carrierSelect = document.getElementById('carrier');
    const familySelect = document.querySelectorAll('input[name="lines"]');
    const entryContainer = document.getElementById('entry');
    const resultContainer = document.getElementById('result');
    const btnSubmit = document.getElementById('btnSubmit');
    const sideModalBtn = document.querySelector('.saikyo-plan-Modal_Btn-side');
    let modalBodyWidth = 0;

    const modalFlag = localStorage.getItem('preventAutoModal');
    modalInit(entryContainer, resultContainer, initInputs, modalFlag);
    if(modalFlag) {
        sideModalBtn.classList.add('active');
    }

    const resultBody = document.getElementById('resultBody');
    resultBody.dataset.ratevent = 'appear';

    const planListData = await fetchPlanData();

    changeStateCarrierSelect(askDataSizeSelect, carrierSelect, planListData);
    changeStateFamilySelect(carrierSelect, familySelect, planListData, askDataSizeSelect)
    changeStateSubmitBtn(askDataSizeSelect, carrierSelect);
    updateSubmitRatId(askDataSizeSelect, carrierSelect, familySelect);

    askDataSizeSelect.addEventListener('change', updateSubmitRatId);
    carrierSelect.addEventListener('change', updateSubmitRatId);
    familySelect.forEach(item => item.addEventListener('change', updateSubmitRatId));
    btnSubmit.addEventListener('click', changeDisplayModal);
}

Init();
