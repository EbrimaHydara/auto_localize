export const maintenance = () => {
    const $dispAttention = $('#maintenance');
    const topImportantNotices = document.getElementById("js-top-Important_Notices");

    if ($dispAttention) {
        $.ajax({
            url: '/web-api/maintenance/',
            // url: "/assets/json/dummy-attention-all.json",
            dataType: 'json'
        }).then(data => {
            let html = "";
            if (data.list.length >= 1) topImportantNotices.style.display = 'block';
            for (let i = 0; i < data.list.length; i++) {
                html += [
                    '<div class="c-Attention_Info">',
                    '<div class="c-Attention_Container">',
                    '<span class="c-Attention_Icon-Info c-Icon_Sign-info-l"></span>',
                    '<p class="c-Attention_Body">',
                    '<a href="', data.list[i].link, '">', data.list[i].title, '</a>',
                    '</p>',
                    '</div>',
                    '</div>',
                ].join("");
            }
            $dispAttention.html(html)
        }).catch(err => {
            console.log(err);
        });
    }
};
