export const attentionAll = () => {

    const notTargetLists = [
        '/',
        '/index.html',
        '/shop/',
        '/shop/index.html',
        '/support/',
        '/support/index.html',
        '/product/smartphone/rakuten-hand-5g/support/',
        '/product/smartphone/rakuten-hand-5g/support/index.html',
    ];

    const pathName = location.pathname;

    function isNotTarget() {
        if(/^\/information\//.test(pathName) || /^\/hikari\//.test(pathName)) return true;
        return notTargetLists.includes(pathName);
    }

    function getAttentionData() {
        const requestURL = '/web-api/attention-all/';
        // const requestURL = '/assets/json/dummy-attention-all.json';
        $.ajax({
            url: requestURL,
            dataType: 'json'
        })
        .then(data => displayAttention(data))
        .catch(err =>  console.log(err));
    }

    function displayAttention(data) {
        const dataList = data.list;
        const header = document.getElementsByTagName('header')[0];
        if(dataList.length > 0) {
            dataList.sort((a, b) => {
                if (a.weighting !== b.weighting) {
                    // 条件: weightingが大きいほど表示位置が上
                    return b.weighting - a.weighting;
                } else {
                    // 条件: weightingが同じ場合、iconの「緊急」が上、「情報」が下
                    if (a.icon !== b.icon) return a.icon === 'emergency' ? -1 : 1;
                }
            });
            const attentionWrapCode = document.createElement('div');
            attentionWrapCode.className = 'c-Infobox_Standing-alert';
            attentionWrapCode.style.padding = "0";
            attentionWrapCode.style.border = "none";
            let attentionCode = '';
            dataList.forEach(el => {
                let windowIcon = el.newTab ? '<span class="c-Icon_New-window-l"></span>' : '';
                let linkTarget = el.newTab ? 'target="_blank"' : '';
                if(el.icon === "emergency") {
                    attentionCode += `
                        <div class="c-Attention_Alert">
                            <div class="c-Attention_Container">
                                <span class="c-Attention_Icon c-Icon_Sign-warning-l c-Txt_Normal-m" style="color:#df0101;"></span>
                                <p class="c-Attention_Body c-Txt_Normal">
                                    <a class="c-Link_Txt-inline-icon" href="${el.link}" ${linkTarget}>
                                        ${el.title}
                                        ${windowIcon}
                                    </a>
                                </p>
                            </div>
                        </div>
                    `
                } else {
                    attentionCode += `
                        <div class="c-Attention_Info">
                            <div class="c-Attention_Container">
                                <span class="c-Attention_Icon c-Icon_Sign-info-l c-Txt_Normal-m"></span>
                                <p class="c-Attention_Body c-Txt_Normal">
                                    <a class="c-Link_Txt-inline-icon" href="${el.link}" ${linkTarget}>
                                        ${el.title}
                                        ${windowIcon}
                                    </a>
                                </p>
                            </div>
                        </div>
                    `
                }
            });
            attentionWrapCode.innerHTML = attentionCode;
            header.insertAdjacentElement('beforebegin', attentionWrapCode);
        }
    }

    if(!isNotTarget()) getAttentionData();
};
