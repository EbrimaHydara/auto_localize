(function($) {

    // Create or Load SessionID for DeepQA

    let session_id = '';
    if (document.cookie !== '') {
        let tmp_cookie = document.cookie.split('; ');
        for (let i = 0; i < tmp_cookie.length; i++) {
            let temp_data = tmp_cookie[i].split('=');
            if (temp_data[0] === 'Rz') {
                session_id = temp_data[1];
                break;
            }
        }
    }

    if (session_id === '') {
        session_id = localStorage.getItem('dqa_session');
        if (session_id === null) {
            session_id = Math.floor(Math.random() * 10 ** 10) + '_' + new Date().getTime();
            localStorage.setItem('dqa_session', session_id);
        }
    }

    const item = JSON.parse(sessionStorage.getItem('deepqa_analysis') || '{}');
    let is_deepqa = false;
    let SCOPE = '';
    if (item.referrer === document.referrer) {
        is_deepqa = item.sent_from_deepqa;
        SCOPE = item.scope;
    }
    const ua = window.navigator.userAgent;

    const sendDeeepQA = function (name, val) {
        $.ajax({
            type: 'POST',
            // url: 'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno_test/user_journey/send-data',
            url: 'https://gateway-api.global.rakuten.com/bot/deepqa-data-collection-api/mno/user_journey/send-data',
            headers: {
                // "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuIn0.r0JR71LUxlRSccGINnLUc_XOt5tKxC3wdCaOy6mnFIg",
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtbm9fand0X3Rva2VuX3Byb2QifQ.j6bBO3aFrt5HhjnnrZh1c2ZA1aQUDF6ka0ngwjwaPk4',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                session_id: session_id,
                timestamp: new Date().toISOString(),
                user_device: ua,
                event: name,
                payload: val,
            }),
        }).done(function (data) {
            console.log(data);
        });
    }

    // 解決できた場合
    const handleClickReviewPositive = () => {
        sendDeeepQA('feedback', {
            type: 'solved',
            sent_from_deepqa: is_deepqa,
            url: window.location.href,
            scope: SCOPE,
        });
    }
    window.handleClickReviewPositive = handleClickReviewPositive;

    // 解決できない場合
    const handleClickReviewNegative = () => {
        sendDeeepQA('feedback', {
            type: 'unsolved',
            sent_from_deepqa: is_deepqa,
            url: window.location.href,
            scope: SCOPE,
        });
    }
    window.handleClickReviewNegative = handleClickReviewNegative;

    // review process >>>
    const relCanonical = document.querySelector('[rel="canonical"]')
    // <<<review process

    // filter後のデータ
    let filteredInqueryData = [];

    function getData(url) {
        return $.ajax({
            url: url,
            cache: false,
            dataType: 'json'
        });
    }

    const containsTargetValues = (obj, prefix) => {
        return Object.keys(obj).some(key => {
            return key.startsWith(prefix) && (obj[key] === '○' || obj[key] === '◎')
        })
    }

    const filterByPrefixAndValues = (obj, prefix) => {
        return Object.keys(obj).reduce((filterData, key) => {
            if (key.startsWith(prefix) && (obj[key] === '○' || obj[key] === '◎')) {
                filterData[key] = obj[key]
            }
            return filterData;
        }, {});
    }

    const bindRat = (elem) => {
        if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
            RAT.bind(elem);
        }
    }

    function setInfo(obj) {

        let errorCode = "";
        let category = "";
        let solutionId = "";

        if(obj) {
            errorCode = Object.values(obj)[0];
            category = Object.values(obj)[1];
            solutionId = Object.values(obj)[2];
        }

        // URL
        const currentDirectory = errorCode ? errorCode: relCanonical ? relCanonical.getAttribute('href') : ''

        if(category !== "" || solutionId !== "") {

            const accordionForm = document.querySelector("#guide-flow-inquiry-Main_Accordion-form button")
            if(accordionForm) {
                accordionForm.setAttribute("data-ratid", "guide_trouble-check_"+ category +"_"+ solutionId +"_inquiry_accordion_form")
                accordionForm.setAttribute("data-ratevent", "click")
                accordionForm.setAttribute("data-ratparam", "all")

                const ratAccordionForm = $('#guide-flow-inquiry-Main_Accordion-form button')
                bindRat(ratAccordionForm)
            }

            const inquiryInputBtn = document.querySelector("#inquiry-input_btn")
            if(inquiryInputBtn) {
                inquiryInputBtn.setAttribute("href", "/inquiry/input.html?l-id=guide_trouble-check_"+ category +"_"+ solutionId +"_inquiry_inquiry_input")
            }

            const accordionChat = document.querySelector("#guide-flow-inquiry-Main_Accordion-chat button")
            if(accordionChat) {
                accordionChat.setAttribute("data-ratid", "guide_trouble-check_"+ category +"_"+ solutionId +"_inquiry_accordion_chat")
                accordionChat.setAttribute("data-ratevent", "click")
                accordionChat.setAttribute("data-ratparam", "all")

                const ratAccordionChat = $('#guide-flow-inquiry-Main_Accordion-chat button')
                bindRat(ratAccordionChat)
            }

            const inquiryWebChatBtn = document.querySelector("#js-ndep-chat-btn")
            if(inquiryWebChatBtn) {
                inquiryWebChatBtn.setAttribute("data-ratid", "guide_trouble-check_"+ category +"_"+ solutionId +"_inquiry_web_chat")

                const ratInquiryWebChatBtn = $('#js-ndep-chat-btn')
                bindRat(ratInquiryWebChatBtn)
            }

            const inquiryEcareWebBtn = document.querySelector("#inquiry-ecare-web_btn")
            if(inquiryEcareWebBtn) {
                inquiryEcareWebBtn.setAttribute("data-ratid", "guide_trouble-check_"+ category +"_"+ solutionId +"_inquiry_ecare_web")

                const ratInquiryEcareWebBtn = $('#inquiry-ecare-web_btn')
                bindRat(ratInquiryEcareWebBtn)
            }

            const accordionTel = document.querySelector("#guide-flow-inquiry-Main_Accordion-tel button")
            if(accordionTel) {
                accordionTel.setAttribute("data-ratid", "guide_trouble-check_"+ category +"_"+ solutionId +"_inquiry_accordion_tel")
                accordionTel.setAttribute("data-ratevent", "click")
                accordionTel.setAttribute("data-ratparam", "all")

                const ratAccordionTel = $('#guide-flow-inquiry-Main_Accordion-tel button')
                bindRat(ratAccordionTel)
            }
        }


        // お問い合わせエリア
        getData('/assets/json/inquiry-list.json')
        .done((inqueryData) => {
            // 取得したURLと一致している内容を出力 errorCodeに値が入っている場合はerrorCodeの内容を出力
            filteredInqueryData = inqueryData.find(value => errorCode !== '' ? value.errorCode === currentDirectory : value.URL === currentDirectory);
            // 一致した内容があるか確認
            if(filteredInqueryData){
                getData('/assets/json/inquiry-info-list.json')
                .done((inqueryInfoData) => {
                    // Rakuten Linkフォームと電波改善要望・調査フォーム、チャット相談（お申し込み前）とチャット相談（お申し込み済）の中に×の項目を削除する
                    const elementsToRemove = [
                        { condition: () => filteredInqueryData.form_link === '×' && filteredInqueryData.form_inquiry === '×', selector: '#guide-flow-inquiry-Main_Accordion-form' },
                        { condition: () => filteredInqueryData.form_link === '×', selector: '.guide-flow-inquiry-Main_Form-0' },
                        { condition: () => filteredInqueryData.form_inquiry === '×', selector: '.guide-flow-inquiry-Main_Form-1' },
                        { condition: () => filteredInqueryData['chat_pre-member'] === '×' && filteredInqueryData.chat_member === '×', selector: '#guide-flow-inquiry-Main_Accordion-chat' },
                        { condition: () => filteredInqueryData['chat_pre-member'] === '×', selector: '.guide-flow-inquiry-Main_Chat-0' },
                        { condition: () => filteredInqueryData.chat_member === '×', selector: '.guide-flow-inquiry-Main_Chat-1' },
                    ]

                    elementsToRemove.forEach(item => {
                        if (item.condition()) {
                            document.querySelector(item.selector)?.remove();
                        }
                    })

                    // 生成したHTMLデータ
                    let html = "";
                    // お問い合わせ情報の中に◎,○があるかを確認
                    if (containsTargetValues(filteredInqueryData, 'tel')) {
                        // ◎,○があるものを絞り込み
                        const filteredInqueryTelData = filterByPrefixAndValues(filteredInqueryData, 'tel');
                        Object.entries(filteredInqueryTelData).forEach(([key, value]) => {
                            // 問い合わせ番号
                            let faqId = "";
                            // 問い合わせテキスト
                            let faqText = "";
                            // cost
                            let costText = "";
                            // att
                            let attText = "";
                            // 注釈データ
                            let annotationList = "";
                            // 電話番号データ
                            let telData = "";

                            // ◎の場合は問い合わせ番号を表示
                            if (value === '◎' && filteredInqueryData.inquiryCode && filteredInqueryData.inquiryCode !== '-') {
                                faqId = '<p class="c-Txt_Emp-01 u-Adjust_Mb-8">お問い合わせコード：<span class="c-Txt_Emp-02">' + filteredInqueryData.inquiryCode + '</span></p>'
                                faqText = '<p class="c-Txt_Normal u-Adjust_Mt-8">音声ガイダンスの案内に従って、「お問い合わせコード」を入力してください。<br>スムーズにアドバイザーがお困りごとの解決をお手伝いたします。</p>'
                            }
                            // ratidと一致するお問い合わせ情報を絞り込み
                            const filteredInfoData = inqueryInfoData.filter(x => x.radid == 'faq_' + key);
                            const linkInfoText = (filteredInfoData[0].id === '9' && filteredInqueryData.supportId === '60000200') ? 'See contact details' : '連絡先を見る';

                            filteredInfoData[0].annotation.forEach(value => {
                                annotationList += '<p class="c-Txt_Cap u-Adjust_Mt-8">' + value + '</p>'
                            })
                            if (category !== "" || solutionId !== "") {
                                telData = '<a href="tel:' + filteredInfoData[0].tel + '" class="c-Link_Txt js-rat-bind-click" data-ratid="guide_trouble-check_' + category + "_" + solutionId + "_" + filteredInfoData[0].radid + '" data-ratevent="click" data-ratparam="all">' + filteredInfoData[0].tel + '</a>'
                            } else {
                                telData = '<a href="tel:' + filteredInfoData[0].tel + '" class="c-Link_Txt js-rat-bind-click" data-ratid="' + filteredInfoData[0].radid + '" data-ratevent="click" data-ratparam="all">' + filteredInfoData[0].tel + '</a>'
                            }
                            if (filteredInfoData[0].cost) {
                                costText = '<span>' + filteredInfoData[0].cost + '</span>'
                            }
                            if (filteredInfoData[0].att) {
                                attText = '<p class="u-Adjust_Mt-8">' + filteredInfoData[0].att + '</p>'
                            }
                            html += '<div class="guide-flow-inquiry-Main_Box u-Adjust_Mt-16">'+
                                    '<p class="c-Txt_Normal">'+ filteredInfoData[0].name +'</p>'+
                                    '<div class="js-Readmore">'+
                                    '<div class="c-Readmore_Content guide-flow-inquiry-Main_Readmore-content u-Adjust_Mt-16" aria-hidden="true">'+
                                    faqId +
                                    telData +
                                    costText +
                                    attText +
                                    '<p class="c-Txt_Normal u-Adjust_Mt-8">'+ filteredInfoData[0].time +'</p>'+
                                    faqText +
                                    annotationList +
                                    '</div>'+
                                    '<div class="c-Readmore_Trigger u-Adjust_Align-left guide-flow-inquiry-Main_Readmore">'+
                                    '<button class="js-Readmore_Trigger guide-flow-inquiry-Main_Readmore-button">'+
                                    '<span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>' + linkInfoText +'</button>'+
                                    '</div>'+
                                    '</div>'+
                                    '</div>'
                            $("#guide-flow-inquiry-Main_Box").html(html);
                            const inquiryTelNumber = $('.js-rat-bind-click');
                            bindRat(inquiryTelNumber)
                        });
                        readMore();
                    } else {
                        $("#guide-flow-inquiry-Main_Accordion-tel").remove();
                    }
                })
                .fail(err => {
                    console.log(err);
                });
            } else {
                allInfoGeneration();
            }
        })
        .fail(err => {
            console.log(err);
        });
    }



    function allInfoGeneration() {
        getData('/assets/json/inquiry-info-list.json')
        .done((inqueryInfoData) => {
            $("#guide-flow-inquiry-Main_Accordion-form").remove();
            // 生成したHTMLデータ
            let html = "";
            // cost
            let cost = "";
            // att
            let att = "";
            for(const infoData of inqueryInfoData) {
                // デフォルト表示 inquiry-info-list.json の default: true を表示
                if (!infoData.default) {
                    continue;
                }
                // 注釈データ
                let annotationList = "";
                infoData.annotation.forEach(value => {
                    annotationList += '<p class="c-Txt_Cap u-Adjust_Mt-8">' + value + '</p>'
                })
                if (infoData.cost) {
                    cost = '<span>' + infoData.cost + '</span>'
                }
                if (infoData.att) {
                    att = '<p class="u-Adjust_Mt-8">' + infoData.att + '</p>'
                }
                html += '<div class="guide-flow-inquiry-Main_Box u-Adjust_Mt-16">'+
                        '<p class="c-Txt_Normal">'+ infoData.name +'</p>'+
                        '<div class="js-Readmore">'+
                        '<div class="c-Readmore_Content guide-flow-inquiry-Main_Readmore-content u-Adjust_Mt-16" aria-hidden="true">'+
                        '<a href="tel:'+ infoData.tel +'" class="c-Link_Txt" data-ratid="'+ infoData.radid +'" data-ratevent="click" data-ratparam="all">'+ infoData.tel + '</a>'+ cost +
                        att +
                        '<p class="c-Txt_Normal u-Adjust_Mt-8">'+ infoData.time +'</p>'+
                        annotationList +
                        '</div>'+
                        '<div class="c-Readmore_Trigger u-Adjust_Align-left guide-flow-inquiry-Main_Readmore">'+
                        '<button class="js-Readmore_Trigger guide-flow-inquiry-Main_Readmore-button">'+
                        '<span class="c-Icon_Chevron-right c-Readmore_Arrow"></span>連絡先を見る</button>'+
                        '</div>'+
                        '</div>'+
                        '</div>'
            }
            $("#guide-flow-inquiry-Main_Box").html(html);
            readMore();
        })
        .fail(err => {
            console.log(err);
        });
    }
    const faqReviewBtnNegative = document.querySelector('#faq-Review_Btn-negative')
    if(faqReviewBtnNegative){
        setInfo()
    }


    // readMore
    function readMore() {
        const Inquiryreadmores = document.querySelectorAll('.js-Readmore');
        Inquiryreadmores.forEach((el) => {
            const Inquirytriggers = el.querySelectorAll('.js-Readmore_Trigger');
            const Inquirycontents = el.querySelectorAll('[aria-hidden="true"]');

            Inquirytriggers.forEach((el) => {
                el.addEventListener('click', (e) => {
                    Inquirycontents.forEach((el) => {
                        el.setAttribute('aria-hidden', false);
                    });
                    e.currentTarget.style.display = 'none';
                });
            });
        });
    }

    window.inquiryList = {
        showInfo,
        hideInfo,
        setInfo,
    }


    // _target link
    const href_target = $('.js-href')

    if(href_target){
        href_target.on('click', function(){
            const url_top = window.location.protocol + '//' + window.location.host
            const param_positive = "?l-id=faq-Review_Btn-positive"
            const param_negative = "?l-id=faq-Review_Btn-negative"
            if($(this).hasClass("guide-flow-inquiry-Review_Campaign-btn")){
                window.open(
                    url_top+"/campaign/support-survey/form/"+param_positive,
                    "_blank"
                )
            }else if($(this).hasClass("guide-flow-inquiry-Main_Info-btn")){
                window.open(
                    url_top+"/campaign/support-survey/form/"+param_negative,
                    "_blank"
                )
            }
        })
    }

    const resolve_btn = $("#faq-Review_Btn-positive");
    const unresolve_btn = $("#faq-Review_Btn-negative");
    const inquiry_blk = $("#inquiry-block");
    const close_btn = $("#close-btn");
    const select_blk = $("#select-block");
    const comp_blk = $("#complete-block");
    const flow_area = $("#inquiry-flow");
    const footer = $(".g-Footer");

    var winW = $(window).width();

    if(document.querySelector("#inquiry-flow")){
        //footer padding付与
        if (winW > 769) {
            footer.css("padding-bottom", "72px")
        } else {
            footer.css("padding-bottom", "56px")
        }
    }

    resolve_btn.on('click', function(){
        select_blk.css('display', 'none')
        comp_blk.css('display', 'block')
        if (winW > 769) {
          footer.css("padding-bottom", "106px")
        } else {
          footer.css("padding-bottom", "90px")
        }
    })

    close_btn.on('click', function(){
        flow_area.css('display', 'none')
        flow_area.css('visibility', 'hidden')
        footer.css("padding-bottom", "0px")
    })

    unresolve_btn.on('click', function(){
        flow_area.css('opacity', '0')
        flow_area.css('visibility', 'hidden')
        setTimeout(() => {
            inquiry_blk.slideDown()
        }, 200)
        setTimeout(() => {
            const speed = 500;
            const href= $(this).attr("href");
            const target = $(href == "#" || href == "" ? 'html' : href);
            const position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false
        }, 300)
        footer.css("padding-bottom", "0px")
    })

    //scroll表示切り替え
    $(window).on('scroll', function(){
        if($(this).scrollTop() < 400){
            flow_area.css("bottom", "-800px")
        }else {
            flow_area.css("bottom", "0")
        }
    })

    function showInfo() {
        inquiry_blk.slideDown()
    }
    function hideInfo() {
        inquiry_blk.css('display', 'none')

        const accordionTrigger = document.querySelectorAll('#inquiry-block .js-Accordion_Trigger[aria-expanded="true"]');
        for (let i = 0; i < accordionTrigger.length; i++) {
            accordionTrigger[i].setAttribute("aria-expanded", "false");
        }

        const accordionPanel = document.querySelectorAll('#inquiry-block .js-Accordion_Panel[aria-hidden="false"]');
        for (let i = 0; i < accordionPanel.length; i++) {
            accordionPanel[i].setAttribute("aria-hidden", "true");
            accordionPanel[i].style.display = "none";
        }
    }


    /**
     * NDEPチャットのボタンの切り替え
     * 営業時間内ではアクティブ、営業時間外では非アクティブ
     * 現在は24時間体制なので、一旦コメントアウト
     */
    // $.ajax({
    //     type: 'GET'
    // }).done(function(data, status, xhr) {
    //     const serverDate = new Date(xhr.getResponseHeader('Date'));
    //     const getNow = {
    //         prod: () => serverDate.getHours(),
    //         dev: () => new Date().getHours(),
    //     }

    //     if (serverDate.getYear() > 100) {
    //         const currentTime = getNow.prod();
    //         console.log({currentTime})
    //         if (currentTime < 9 || currentTime >= 23) {
    //             $('#js-ndep-chat-btn').css('display', 'none');
    //             $('#js-use-chat-consultation').css('display', 'block');
    //         }
    //     }
    // });

    // Override rat-id
    let isSetEvent = false;
    let setEvent = setInterval(function(){
        if (('#faq-Review_Btn-positive').length > 0 && !isSetEvent) {
            isSetEvent = true;
            clearInterval(setEvent);
            setReviewEvent();
        }
    }, 1000);

    const setReviewEvent = function(){
        const buttonSolved = document.getElementById('faq-Review_Btn-positive');
        const buttonUnsolved = document.getElementById('faq-Review_Btn-negative');
        const currentParameter = location.search;
        const isFromSupport = () => {
            const l_id = 'support_top_search';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        const isFromSearchFaq = () => {
            const l_id = 'search_top_faq';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        const isFromSearchGeneral = () => {
            const l_id = 'search_top';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        const isFromSearchsCategory = () => {
            const l_id = 'support_category_faq';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        const isFromSearchGuide = () => {
            const l_id = 'guide_detail_faq';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        const isFromSupport2 = () => {
            const l_id = 'support_top2_search';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        const isFromSupport2smart = () => {
            const l_id = 'support_top2_search_smart';
            return currentParameter.indexOf(`l-id=${ l_id }`) > -1 ? true : false;
        };
        if (isFromSupport()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-support";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-support";
        } else if (isFromSearchFaq()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top_faq";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top_faq";
        } else if (isFromSearchGeneral()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top";
        } else if (isFromSearchsCategory()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-support_category_faq";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-support_category_faq";
        } else if (isFromSearchGuide()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-guide_detail_faq";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-guide_detail_faq";
        } else if (isFromSupport2smart()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top2_faq_smart";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top2_faq_smart";
        } else if (isFromSupport2()) {
            buttonSolved.dataset.ratid = "faq-Review_Btn-positive-search_top2_faq";
            buttonUnsolved.dataset.ratid = "faq-Review_Btn-negative-search_top2_faq";
        }
    };

    const qaBtn = document.getElementById('js-qa-btn');
    qaBtn && qaBtn.addEventListener('click', e => {
        e.preventDefault();
        const href = e.currentTarget.href
        const hash = location.hash;
        const param = hash.slice(2, -9).replace('/', '_');
        const newUrl = `${href}&?stepid=${param}`;
        window.open(newUrl, '_blank');
    });

})(jQuery);
