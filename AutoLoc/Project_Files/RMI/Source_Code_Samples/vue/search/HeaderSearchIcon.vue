<template>
   <div class="g-HeaderV2_Search-icon" @click.prevent="searchOpen" aria-controls="js-search" data-ratId="gnavi-search" data-ratEvent="click" data-ratParam="all">
       <span class="c-Icon_Search"></span>
       <span class="g-HeaderV2_Search-text">検索</span>
    </div>
</template>

<script>
import Store from "./Store.js";

export default {
    // updated() {
    //     let event;
    //     if (typeof(window.Event) === 'function') {
    //         event = new Event('SINGLE_PAGE_APPLICATION_LOAD');
    //         document.dispatchEvent(event);
    //     } else {
    //         try {
    //             event = document.createEvent('Event');
    //             event.initEvent('SINGLE_PAGE_APPLICATION_LOAD', true, true);
    //             document.dispatchEvent(event);
    //         } catch (e) {}
    //     }
    // },
    data() {
        return {
            hasBeenOpened: false,
        }
    },
    methods: {
        searchOpen: function (e) {
            e.preventDefault();
            const target = document.querySelector('.js-search');
            const expanded = target.getAttribute('aria-expanded');
            const overlay = document.querySelector('.js-overlay');
            const body = document.body;
            const evg_Fixed_Popup = document.getElementById("evg_Fixed_Popup");

            if( expanded === 'true' ) {
                target.setAttribute('aria-expanded', 'false');
                overlay.setAttribute('aria-hidden', 'true');
                body.style.position = 'relative';
                if(evg_Fixed_Popup) {
                    evg_Fixed_Popup.style.display = "block";
                }
            } else {
                target.setAttribute('aria-expanded', 'true');
                if(target.classList.contains('js-search')) {
                    overlay.setAttribute('aria-hidden', 'false');
                    body.style.position = 'fixed';
                }
                if(evg_Fixed_Popup) {
                    evg_Fixed_Popup.style.display = "none";
                }
            }
            // 初回のみリクエスト
            if(this.hasBeenOpened) return;
            this.hasBeenOpened = true;
            Store.actions.storageCheck();
            Store.actions.recommendItemApi('')
                .then(data => {
                    Store.actions.sendAnalysisApi({
                        name: 'impression',
                        data: {
                            input_text: '',
                            smart_input_items: [],
                            campaign_items: data.contents || [],
                            product_items: [],
                            scope: 'mno_whole_site',
                        },
                        session_id: Store.actions.manageSessionId(),
                        ua: window.navigator.userAgent,
                    });
                });
            Store.actions.highFrequencyApi('whole_site');
        }
    }
}
</script>
