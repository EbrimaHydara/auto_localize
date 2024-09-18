import ScrollHint from 'scroll-hint';

window.addEventListener('DOMContentLoaded', ()=> {
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロール\nできます'
    }
  });
});

function fixedBottomBtn() {
    let scrollY = window.pageYOffset;
    const trigger = document.getElementById('js-trigger');
    const fixedBtn = document.getElementById('js-fixed-btn');

    if( !fixedBtn || !trigger ) return;

    const triggerRect = trigger.getBoundingClientRect();
    const triggerY = scrollY + triggerRect.top;

    if ( scrollY > triggerY ) {
        fixedBtn.setAttribute('aria-expanded', 'true');
    } else {
        fixedBtn.setAttribute('aria-expanded', 'false');
    }
  }

window.addEventListener('scroll', fixedBottomBtn);

const information = document.getElementById('hikari-information');
const hikari_information = document.querySelector('.hikari-Information');

if (information) {
    $.ajax({
        cache: false,
        // url: 'https://35.221.73.217/api/hikari/information/',
        url: '/api/hikari/information/',
        // url: '/assets/json/hikari/information/top.json',
    })
    .then(data => {
        data.forEach( (data) => {
            const ymd = data.date.split('-');
            const date = ymd[0] + '年' + ymd[1] + '月' + ymd[2] + '日';
            information.innerHTML += `<div><dt>${date}</dt><dd><a href="${data.url}">${data.title}</a></dd></div>`;
        });

        if(data.length) {
            hikari_information.style.display = 'block';
            hikari_information.setAttribute('aria-hidden', false);
        }

    })
    .catch(err => {
        console.log(err);
    });
}

// const current_page = location.href.split('localhost:8000')[1];
const current_page = location.href.split('network.mobile.rakuten.co.jp')[1];
sessionStorage.removeItem('hikaricampaign-entrypage');

$('.js-session-link').on('click', function(){
    sessionStorage.setItem('hikaricampaign-entrypage', current_page);
});
