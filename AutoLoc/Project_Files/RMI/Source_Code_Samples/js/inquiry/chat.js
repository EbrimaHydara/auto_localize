// waiting times
(function($) {
    const displayHelper = (target, display = 'none') => {
        const targetElms = [...target.querySelectorAll('.js-Display')];
        if (targetElms.length !== 0) {
            targetElms.map((target) => target.style.display = display);
        }
    };

    const target = {
        "member": {
            "call": {
                "general": document.getElementsByClassName("js-waiting-member-call-general"),
                "data": document.getElementsByClassName("js-waiting-member-call-data"),
                "data_sub": document.getElementsByClassName("js-waiting-member-call-data-sub"),
                "unpaid": document.getElementsByClassName("js-waiting-member-call-unpaid"),
                "lost": document.getElementsByClassName("js-waiting-member-call-lost"),
                "global": document.getElementsByClassName("js-waiting-member-call-global")
            },
            "message": document.getElementsByClassName("js-waiting-member-message"),
        },
        "non_member": {
            "call": {
                "general": document.getElementsByClassName("js-waiting-non_member-call-general"),
                "procedure": document.getElementsByClassName("js-waiting-non_member-call-procedure")
            },
            "message": document.getElementsByClassName("js-waiting-non_member-message"),
        }
    };

    $.ajax({
        type: 'GET'
    }).done(function(data, status, xhr) {
        const serverDate = new Date(xhr.getResponseHeader('Date'));
        let num_time = 0;
        if (serverDate.getYear() > 100) {
            // production
            num_time = serverDate.getHours();
            // debelopment
            // num_time = new Date().getHours();
            console.log(num_time);
            if (num_time === 23 || num_time > -1 && num_time < 9) {
                // $('#js-ndep-chat-btn').css('display', 'none');
                // $('#js-use-chat-consultation').css('display', 'block');
            } else {
                // $('.trigger-messaging').on('click', function(){
                //     $('.chat_img').click();
                // });
                let chatbtn = false;
                const checkBtn = () =>{
                    const innerDiv = document.querySelectorAll('.LPMcontainer');
                    if (innerDiv.length > 0)  {
                        chatbtn = true;
                        const chatimg = innerDiv[0].firstElementChild;
                        chatimg.firstElementChild.click();
                    } else {
                        chatbtn = false;
                    }
                }

                const pathname = window.location.pathname;
                // AIチャットの自動起動の除外ページが増えたら追加する
                const autoActivationCanceledPages = ['/inquiry/chat_contact/'];
                // 対象ページは、AIチャットを自動で起動させない
                for (const page of autoActivationCanceledPages) {
                    if(pathname.includes(page)) {
                        return;
                    }
                }

                const intervalId = setInterval(() => {
                    checkBtn();
                    if(chatbtn) clearInterval(intervalId);
                }, 1000);

                setTimeout(() => {clearInterval(intervalId)}, 60000);
            }
        }

        $.ajax({
            url: '/api/inquiry-consult/', // 本番, 35環境用
            // url: '/assets/json/dummy_inquiry-consult.jsonp', // ローカル確認用
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        })
        .done(function(data, status, xhr){
            const txt_outsideCall = '<span class="faq-Wait_Status"><span>混雑状況：</span><span class="faq-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span>';
            const txt_outsideAll = '<span class="faq-Wait_Status"><span>混雑状況：</span><span class="faq-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span>';
            // const txt_outsideMessage = '<span class="faq-Wait_Status"><span>混雑状況：</span><span class="faq-Wait_Icon-close c-Icon_Product-close"></span><span>営業時間外です</span></span><br><span class="faq-Wait_Message">現在、チャット相談の回答は営業時間外です。いただいたメッセージは9時以降、順次回答いたします。ご了承の程よろしくお願いいたします。</span>';
            const txt_insideData = "一部の地域などでの「通信・データ」障害に関するお問い合わせ";
            const txt_outsideData = "通話・データ通信のトラブルについての専用窓口です。<br>ご契約内容やご利用料金全般に関する問い合わせは、電話番号050-5434-4653までご連絡ください。";
            const showMessage = function($target, str_message){
                if($target) {
                    for (let i = 0; i < $target.length; i++) {
                        if (str_message === "") {
                            $target[i].style.display = "none";
                            //$target[i].nextElementSibling.style.display = "none";
                            displayHelper($target[i].parentNode);
                        }
                        else {
                            $target[i].style.display = "block";
                            $target[i].innerHTML = str_message;
                        }
                    }
                }
            };

            if (data.code === "SUCCESS") {
                if (serverDate.getYear() > 100) {
                    if (data.member.call.general !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.member.call.general = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.member.call.general = txt_outsideAll;
                        }
                    }

                    if (data.member.call.unpaid !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.member.call.unpaid = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.member.call.unpaid = txt_outsideAll;
                        }
                    }

                    if (data.non_member.call.general !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.non_member.call.general = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.non_member.call.general = txt_outsideAll;
                        }
                    }

                    if (data.non_member.call.procedure !== '') {
                        if (num_time > 19 && num_time < 23) {
                            data.non_member.call.procedure = txt_outsideCall;
                        }
                        else if (num_time === 23 || num_time > -1 && num_time < 9) {
                            data.non_member.call.procedure = txt_outsideAll;
                        }
                    }

                    showMessage(target.member.call.general, data.member.call.general);
                    showMessage(target.member.call.unpaid, data.member.call.unpaid);
                    showMessage(target.non_member.call.general, data.non_member.call.general);
                    showMessage(target.non_member.call.procedure, data.non_member.call.procedure);

                    if (num_time > 8 && num_time < 20) {
                        showMessage(target.member.call.data_sub, txt_insideData);
                    }
                    else {
                        showMessage(target.member.call.data_sub, txt_outsideData);
                    }

                    if (num_time === 23 || num_time > -1 && num_time < 9) {
                        data.member.message = txt_outsideCall;
                        data.non_member.message = txt_outsideCall;
                    }
                    if (data.member.message === '') {
                        $('.js-waiting-member-message-forecast').remove();
                    }
                    if (data.non_member.message === '') {
                        $('.js-waiting-non_member-message-forecast').remove();
                    }

                    showMessage(target.member.message, data.member.message);
                    showMessage(target.non_member.message, data.non_member.message);
                    showMessage(target.member.message2, data.member.message);
                    showMessage(target.non_member.message2, data.non_member.message);

                    showMessage(target.member.call.data, data.member.call.connection);
                    showMessage(target.member.call.lost, data.member.call.lost);
                    showMessage(target.member.call.global, data.member.call.global);
                }
            }
        })
        .fail(err => {
            console.log(err);
        });
    });
})(jQuery);
