const rakutenWebJson = '/assets/json/optout-rakuten-web.json'
const rakutenHikariJson = '/assets/json/optout-rakuten-hikari.json'
const myRakutenJson = '/assets/json/optout-my-rakuten.json'
const coluumNames = ['情報の送信先となる名称', '情報送信先のサービス名', '送信される情報の内容', '送信される情報の利用目的', 'プライバシーポリシーへのリンク', 'オプトアウトへのリンク'];
const subcoluumHeaders = ['当社における利用目的', '情報送信先における利用目的'];

const getTableHeaderHTML = () => `
    <colgroup>
        <col class="optout-Table_service-provider" span="1">
        <col span="1">
        <col span="1">
        <col span="2">
        <col span="1">
        <col span="1">
    </colgroup>
    <thead>
        <tr>
            ${coluumNames.map((name) => name === '送信される情報の利用目的' ? `<th colspan="2">${name}</th>` : `<th rowspan="2">${name}</th>`).join('')}
        </tr>
        <tr>
            ${subcoluumHeaders.map(subName => `<th>${subName}</th>`).join('')}
        </tr>
    </thead>
    <tbody>
    </tbody>
`;

const sanitize = (str) => {
    return str.replace(/&nbsp;/g, '').trim();
};

const createLink = (url) => {
    return url ? `<a href="${sanitize(url)}" target="_blank" class="c-Link_Txt-inline">${sanitize(url)}<span class="c-Icon_New-window-l"></span></a>` : '-';
}

const createRowHTML = (item) => {
    const dataCells = [
        item.service_provider,
        item.service_name,
        item.transmission_data.replace(/\n/g, '<br>'),
        item.usage_purpose,
        item.destination_purpose,
        createLink(item.privacy_policy_link),
        createLink(item.opt_out_link)
    ];
    return dataCells.map(cell => `<td>${cell || '-'}</td>`).join('');
};

const createTable = (tableId, data) => {
    const table = document.getElementById(tableId);
    table.innerHTML = getTableHeaderHTML();
    const tbody = table.querySelector('tbody');

    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = createRowHTML(item);
        tbody.appendChild(row);
    });
}

const fetchJsonData = async (filePath) => {
    const res = await fetch(filePath);
    const text = await res.text();
    const data = JSON.parse(text);
    return data
};

(async () => {
    const rakutenWebDataList = await fetchJsonData(rakutenWebJson);
    const myRakutenDataList = await fetchJsonData(myRakutenJson);
    const rakutenHikariPathDataList = await fetchJsonData(rakutenHikariJson);


    createTable('js-rakuten-web', rakutenWebDataList);
    createTable('js-my-rakuten-mobile', myRakutenDataList);
    createTable('js-rakuten-hikari', rakutenHikariPathDataList);
})();
