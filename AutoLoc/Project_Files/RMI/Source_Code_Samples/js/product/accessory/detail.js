(function($){
    $(function() {
        const my_path = location.pathname;
        let page_name;

        // csvで管理できないので必要
        page_name = ['rselect-rmztrktnbgc0146bk'];

        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                $('.js-price-area').html('<div id="price" class="accessory-detail-Price"><span>ブラック/クリムゾンレッド 価格</span><br class="accessory-detail-Layout_SP"><span class="c-Txt_Alphanumeric-l">3,480 </span><span class="c-Txt_Normal-ss">円</span><br><span>ホワイト 価格</span><br class="accessory-detail-Layout_SP"><span class="c-Txt_Alphanumeric-l">2,610 </span><span class="c-Txt_Normal-ss">円</span></div>');
            }
        }

        // csvで管理できないので必要
        page_name = ['rselect-rmtnraminif0082bk'];

        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                $('.js-price-area').html('<div id="price" class="accessory-detail-Price"><span>ブラック 価格</span><span class="c-Txt_Alphanumeric-l">880 </span><span class="c-Txt_Normal-ss">円</span><br><span>ホワイト 価格</span><span class="c-Txt_Alphanumeric-l">440 </span><span class="c-Txt_Normal-ss">円</span></div>');
            }
        }

        // csvで管理できないので必要
        page_name = ['sony-xqzcbbt'];

        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                // $('.js-shoplist-sony-xqzcbbt').css('display','block');
                $('.js-shoplist-sony-xqzcbbt').load('/include/accessory/shoplist-sony-xqzcbbt.html');
            }
        }

        // csvで管理できないので必要
        page_name = ['hamee-41909922354'];

        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                $('.js-spec-color').append('/他カラーについては【iFace公式 Hamee楽天市場店】にて販売中<br><a href="https://item.rakuten.co.jp/keitai/41-909" class="c-Link_Txt-icon" target="_blank">https://item.rakuten.co.jp/keitai/41-909<span class="c-Icon_New-window-l"></span></a>');
            }
        }

        // csvで管理できないので必要
        page_name = ['rselect-rmmtpanda1b0155gy'];

        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                const div = document.createElement('div');
                div.classList.add('u-Adjust_Mt-32');
                div.innerHTML = `
                    <a href="https://event.rakuten.co.jp/okaimonopanda/camptaste/" target="_blank">
                        <img src="/assets/img/product/bnr-panda-camp-600-200.png" alt="Okaimono panda camping かわいいグッズがいっぱい!" width="600">
                    </a>
                `;
                $('.js-support-link')[0].parentNode.after(div);
            }
        }

        // csvで管理できないので必要
        page_name = ['rselect-rmtnrktnh5c0192bk'];
        if (my_path.indexOf(page_name[0]) > 0) {
            $('#spec').prepend(`
                <div class="u-Adjust_Pb-80 u-Adjust_Align-center">
                    <h2 class="c-Heading_Lv2">こちらもおすすめ</h2>
                    <a href="https://network.mobile.rakuten.co.jp/product/accessory/rselect-rmtnrktnh5c0190wh/?l-id=product_accessory_rselect-rmtnrktnh5c0192bk_rselect-rmtnrktnh5c0190wh">
                        <picture>
                            <source media="(max-width: 768px)" srcset="/assets/img/accessory/rselect-rmtnrktnh5c0192bk/bnr01-375-192.png?220407">
                            <img src="/assets/img/accessory/rselect-rmtnrktnh5c0192bk/bnr01-1032-160.png?220407" width="1032" alt="" class="u-Adjust_Mt-16">
                        </picture>
                    </a>
                </div>
            `)
        }

        // csvで管理できないので必要
        page_name = ['rselect-rmtnrktnh5c0190wh'];
        if (my_path.indexOf(page_name[0]) > 0) {
            $('#spec').prepend(`
                <div class="u-Adjust_Pb-80 u-Adjust_Align-center">
                    <h2 class="c-Heading_Lv2">こちらもおすすめ</h2>
                    <a href="https://network.mobile.rakuten.co.jp/product/accessory/rselect-rmtnrktnh5c0192bk/?l-id=product_accessory_rselect-rmtnrktnh5c0190wh_rselect-rmtnrktnh5c0192bk">
                        <picture>
                            <source media="(max-width: 768px)" srcset="/assets/img/accessory/rselect-rmtnrktnh5c0190wh/bnr01-375-192-221209.png">
                            <img src="/assets/img/accessory/rselect-rmtnrktnh5c0190wh/bnr01-1032-160-221209.png" width="1032" alt="" class="u-Adjust_Mt-16">
                        </picture>
                    </a>
                </div>
            `)
        }

        // csvで管理できないので必要
        page_name = ['owltech-apd20c1a1bk'];
        if (my_path.indexOf(page_name[0]) > 0) {
            $('#js-contact-link02').prepend(`
                <p class="u-Adjust_Mt-8">※製品に関するお問い合わせは<a class="c-Link_Txt" href="#contact">こちら</a></p>
            `)
        }

        // csvで管理できないので必要
        page_name = ['owltech-owl-lpb10012-rwh'];
        if (my_path.indexOf(page_name[0]) > 0) {
            $('#js-contact-link03').prepend(`
                <br><span class="u-Adjust_Mt-8">※製品に関するお問い合わせは<a class="c-Link_Txt" href="#contact">こちら</a></span>
            `)
        }

        // csvで管理できないので必要
        page_name = ['rselect-rmmtsdxc64m0014bk','rselect-rmmtsdxc64m0015bk'];
        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                $('#js-contact-link01').prepend(`
                    <p class="u-Adjust_Mt-8">※製品に関するお問い合わせは<a class="c-Link_Txt" href="#contact">こちら</a></p>
                `)
            }
        }

        // csvで管理できないので必要
        page_name = ['rselect-rmsmglxs23f0222cl','rselect-rmsoxpraxvf0225cl','rselect-rmsoxpraxvf0224cl'];
        for (let i = 0, len = page_name.length; i < len; i++) {
         if (my_path.indexOf(page_name[i]) > 0) {
            $('#js-external-link').prepend(`
                <div class="u-Adjust_Mt-16">
                    <a href="https://www.rastabanana.com/movie20.html" class="c-Link_Txt-inline-icon" target="_blank" rel="noopener" data-ratid="accessory_` + page_name[i] + `_support-film" data-ratevent="click" data-ratparam="all">保護ガラスの貼り方を見る<span class="c-Icon_New-window-l"></span></a>
                </div>
            `)
         }
        }
    });
})(jQuery);
