export const disaster = () => {
    const dispDisaster = document.getElementById("js-disaster");
    const dispDisasterTest = document.getElementById("js-disaster-preview");
    const importantNotices = document.getElementById("important-notices");
    const topImportantNotices = document.getElementById("js-top-Important_Notices");

    const fetchData = (url, callback) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                callback(jsonData);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    if (topImportantNotices) {
        $.ajax({
            url: "/web-api/attention-top/",
            // url: "/assets/json/dummy-attention-all.json",
            dataType: "json"
        }).then(data => {
            let elementList = "";

        if (data.list.length >= 1){
            topImportantNotices.style.display = "block";
            data.list.sort((a, b) => {
                if (a.weighting !== b.weighting) {
                    // 条件: weightingが大きいほど表示位置が上
                    return b.weighting - a.weighting;
                } else {
                    // 条件: weightingが同じ場合、iconの「緊急」が上、「情報」が下
                    if (a.icon !== b.icon) return a.icon === 'emergency' ? -1 : 1;
                }
            });
        }

        data.list.forEach(item => {
            let icon = item.icon ==="emergency" ?
                '<span class="c-Attention_Icon c-Icon_Sign-warning-l"></span>' :
                '<span class="c-Attention_Icon c-Icon_Sign-info-l" style="color: #333"></span>';
            let windowIcon = item.newTab ? '<span class="c-Icon_New-window-l"></span>' : '';
            let linkTarget = item.newTab ? 'target="_blank"' : '';

            elementList += `
                <div class="c-Attention_Alert">
                    <div class="c-Attention_Container">
                        ${icon}
                        <p class="c-Attention_Body">
                            <a class="c-Link_Txt-inline-icon" href="${item.link}" ${linkTarget}>
                                ${item.title}
                                ${windowIcon}
                            </a>
                        </p>
                    </div>
                </div>`;
        });
            importantNotices.innerHTML = elementList;
        }).catch(err => {
            console.log(err);
        });
    }

    if(dispDisaster || dispDisasterTest){
        $.ajax({
            url: 'https://network.mobile.rakuten.co.jp/api/disaster_top/', // product
            // url: 'https://stg-network-mobile.rmb-lab.jp/api/disaster_top/', // development
            dataType: 'json'
        })
        .then(data => {
                console.log(data);
                if(data.disaster_display === 0) return
                if(data.disaster_msg_status === 1){
                    $("#js-disaster").attr('aria-hidden', 'false')
                    const genericApi = 'https://network.mobile.rakuten.co.jp/api/generic/'; // product
                    // const genericApi = 'https://stg-network-mobile.rmb-lab.jp/api/generic/'; // development
                    fetchData(genericApi, (genericApiData) => {
                        if (genericApiData.settings && genericApiData.settings.disaster_accordion_open === '1') {
                            const disasterAccordionElement = document.getElementById("accordion-disaster");
                            const disasterAccordionContentElement = document.getElementById("accordion-content-disaster");
                            disasterAccordionElement.setAttribute("aria-expanded", "true");
                            disasterAccordionContentElement.setAttribute("aria-hidden", "false");
                            disasterAccordionContentElement.style.display = "";
                        }
                    });
                }else if(data.disaster_msg_status === 2){
                    $("#js-disaster-preview").attr('aria-hidden','false')
                }
        })
        .catch(err => {
            console.log(err);
        });
    }
};
