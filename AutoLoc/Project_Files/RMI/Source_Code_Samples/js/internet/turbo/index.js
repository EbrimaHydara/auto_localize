import { shopSearch } from "./component/shop-search";
import axios from 'axios';


// require('intersection-observer');

// // floater
// const floater = document.querySelector('.js-top-Floater');
// const floaterTrigger = document.querySelector('.js-top-Floater_Trigger');

// if (floater && floaterTrigger) {
//     const options = {
//         threshold: [0]
//     };
//     const observer = new IntersectionObserver((entries) => {
//         for(const e of entries) {
//             if (e.isIntersecting) {
//                 floater.classList.remove('hidden');
//             }
//         }
//     }, options);

//     observer.observe(floaterTrigger);

// }
shopSearch();


const turbo_top_information_show = document.getElementById('turbo-top-information_show');
const turbo_top_information = document.getElementsByClassName('turbo-Top-Information')[0];

if (turbo_top_information_show) {
    axios({
        url: '/web-api/turbo-top-info/',
        dataType: 'json'
    })
    .then(res => {
        const data_list = res.data.list;
        let elementList = '';

        if (data_list.length >= 1) {
            turbo_top_information.setAttribute('aria-hidden', false);
        }
        for (let i = 0; i < data_list.length; i++) {
            elementList +=
            `
            <div>
                <dt>${data_list[i].published_date}</dt>
                <dd>
                    ${data_list[i].link.indexOf("https://network.mobile.rakuten.co.jp/information/") > -1 ||
                        data_list[i].link.indexOf("https://network.mobile.rakuten.co.jp/internet/turbo/") >  -1 && data_list[i].link.indexOf("/information/") ===  -1?
                        `<a href="${data_list[i].link}" target="_blank" class="c-Link_Txt-inline">${data_list[i].title}<span class="c-Icon_New-window-l"></span></a>`:
                        `<a href="${data_list[i].link}">${data_list[i].title}</a>`
                    }
                </dd>
            </div>
            `;
        }
        turbo_top_information_show.innerHTML += elementList;

    })
    .catch(err => {
        console.log(err);
    });
}


