<template>
 <div class="service-tradein-Layout_Result">
    <p class="u-Adjust_Mt-16"><a href="#about" class="js-scroll c-Link_Txt-icon-front" style="margin: 0 0 0 auto;"><span class="c-Icon_Arrow-down-l"></span>査定基準の詳細</a></p>
    <div class="c-Table_Wrap u-Adjust_Mt-16">
        <div class="c-Table_Wrap-scroll c-Table-Scroll" id="js-scrollable">
            <table class="c-Table_Container">
                <tr>
                    <th rowspan="2">携帯電話会社</th>
                    <th rowspan="2">メーカー</th>
                    <th rowspan="2">製品</th>
                    <th rowspan="2">容量</th>
                    <th colspan="3">
                        下取り価格目安<br><span class="c-Txt_Weight-normal c-Txt_Normal-s">（楽天キャッシュ）</span>
                    </th>
                </tr>
                <tr>
                    <th>良品</th>
                    <th>画面損傷品</th>
                    <th><p>外装損傷</p>・<p>機能不具合品</p></th>
                </tr>
                <tr v-for="(price, index) in priceList" :key="index">
                    <td>{{ price.carrier | rename }}</td>
                    <td>{{ price.maker }}</td>
                    <td>{{ price.device }}</td>
                    <td>{{ price.memory }}</td>
                    <td class="u-Adjust_Align-right">{{ price.good | yenTtrim }} 円</td>
                    <td class="u-Adjust_Align-right">{{ price.fair | yenTtrim }} 円</td>
                    <td class="u-Adjust_Align-right">{{ price.poor | yenTtrim }} 円</td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import ScrollHint from 'scroll-hint';
export default {
    data() {
        return {
            scrollhint: ''
        }
    },
    props: [
        'priceList'
    ],
    filters: {
        yenTtrim (value) {
            const price = value.split('¥')[1];
            return (price === 0 || price.trim() === '-') ? '-' : price
        },
        rename (value) {
            const map = new Map([
                [ 'Rakuten', '楽天モバイル'],
                [ 'docomo', 'ドコモ'],
                [ 'au', 'au' ],
                [ 'Softbank', 'ソフトバンク'],
                [ 'Generic', 'その他（SIMフリー）'],
            ]);
            const keys = map.keys();
            let carrierName = '';
            for( let key of keys ) {
                if ( value === key ) {
                    carrierName = map.get(key);
                }
            }
            return carrierName;
        }
    },
    mounted() {
        new ScrollHint('#js-scrollable', {
            i18n: {
                scrollable: 'スクロール\nできます'
            }
        });
    }
}
</script>
