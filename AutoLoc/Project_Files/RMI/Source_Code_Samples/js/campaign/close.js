$(() => {
    const parameter = location.search;
    const parameterList = parameter.split('&');
    const selectBox = document.getElementById('js-tab-select');
    const scrollList = [
        { 'key': 'tab-list' },
        { 'key': 'campaignid' },
    ];

    const tabSort = () => {
        const tabPanel = document.getElementsByClassName('js-tab-panel');
        for(let i = 0; i < tabPanel.length; i++) {
            if(selectBox.value === '#tab-menu1') {
                tabPanel[i].style.display = 'block';
            } else if( selectBox.value == `#${tabPanel[i].getAttribute('aria-labelledby')}` ) {
                tabPanel[i].style.display = 'block';
            } else {
                tabPanel[i].style.display = 'none';
            }
        }
    };

    parameterList.forEach(value => {
        scrollList.filter(item => {
            if(value.includes(item.key) && item.key === 'tab-list') {
                const targetList = value.split('=')[1].split(',');
                document.getElementById(`${targetList[0]}`).selected = true;
                tabSort();
                return;
            }

            if(value.includes(item.key) && item.key === 'campaignid') {
                const targetList = value.split('=')[1].split(',');
                const targetId = $(`#${targetList[0]}`);
                if(!targetId.length) return;
                $('html,body').animate({ scrollTop: targetId.offset().top }, 'slow');
                const opt = { duration: 0, queue: false };
                const content = targetId.attr('aria-controls');
                const $panel = $(`#${content}`);
                targetId.attr('aria-expanded', 'true');
                $panel.attr('aria-hidden', 'false');
                $panel.stop().slideDown(opt);
                return;
            }
        });
    });

    selectBox.onchange = () => {
        tabSort();
    };
});
