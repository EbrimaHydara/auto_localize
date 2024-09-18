export const displayAttention = (data) => {
    let attentionCode = '';
    const dataList = data.list;

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

        dataList.forEach(item => {
            let windowIcon = item.newTab ? '<span class="c-Icon_New-window-l"></span>' : '';
            let linkTarget = item.newTab ? 'target="_blank"' : '';
            if(item.icon === "emergency") {
                attentionCode += `
                    <div class="c-Attention_Alert">
                        <div class="c-Attention_Container">
                            <span class="c-Attention_Icon c-Icon_Sign-warning-l"></span>
                            <p class="c-Attention_Body">
                                <a class="c-Link_Txt-inline-icon" href="${item.link}" ${linkTarget}>
                                    ${item.title}
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
                            <span class="c-Attention_Icon c-Icon_Sign-info-l"></span>
                            <p class="c-Attention_Body">
                                <a class="c-Link_Txt-inline-icon" href="${item.link}" ${linkTarget}>
                                    ${item.title}
                                    ${windowIcon}
                                </a>
                            </p>
                        </div>
                    </div>
                `
            }

        });
        return attentionCode
    }
}
