

const dispInfo = document.getElementById('js-Link-info');

if (dispInfo) {
    $.ajax({
        url: '/assets/json/service-link-info.js',
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        jsonp:'callback'
    })
    .then(data => {
        let listHtml = '';
        let attentionHtml = '';
        let infoHtml = '';

        if (data['attention'].length > 0) {
            for (let i = 0, len = data['attention'].length; i < len; i++) {
                listHtml += [
                    '<div class="c-Attention_Alert">',
                    '<div class="c-Attention_Container">',
                    '<span class="c-Attention_Icon c-Icon_Sign-warning-l"></span>',
                    '<p class="c-Attention_Body">',
                    '<a href="' + data['attention'][i].link + '">' + data['attention'][i].text + '</a>',
                    '</p>',
                    '</div>',
                    '</div>'
                ].join('');
            }

            attentionHtml = [
                '<div>',
                listHtml,
                '</div>'
            ].join('');
        }

        listHtml = '';

        if (data['information'].length > 0) {
            for (let i = 0, len = data['information'].length; i < len; i++) {
                listHtml += [
                    '<div class="c-Attention_Info">',
                    '<div class="c-Attention_Container">',
                    '<span class="c-Attention_Icon c-Icon_Sign-info-l"></span>',
                    '<p class="c-Attention_Body">',
                    '<a href="' + data['information'][i].link + '">' + data['information'][i].text + '</a>',
                    '</p>',
                    '</div>',
                    '</div>'
                ].join('');
            }

            infoHtml = [
                '<div>',
                listHtml,
                '</div>'
            ].join('');
        }

        dispInfo.innerHTML = attentionHtml + infoHtml;
    })
    .catch(err => {
        console.log(err);
    });
}
