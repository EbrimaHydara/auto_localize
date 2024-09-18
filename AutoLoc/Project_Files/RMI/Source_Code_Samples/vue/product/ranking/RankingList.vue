<template>
    <div>
        <p class="product-ranking-Txt_Update"><span class="c-Icon_Time-l"></span>{{ updateStr }}</p>
        <div class="product-ranking-Head">
            <h2 class="c-Heading_Lv2">{{ selectDeviceName | optimalName }}ランキング</h2>
            <div class="c-Form_Select">
                <select v-model="selectDeviceName" v-on:change="selectDevice()">
                    <option value="both">総合ランキング</option>
                    <option value="iPhone">iPhoneランキング</option>
                    <option value="Android">Androidランキング</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>
        <div id="both" data-ratid="product_ranking_sort_all" data-ratevent="click" data-ratparam="all"></div>
        <div id="iPhone" data-ratid="product_ranking_sort_iphone" data-ratevent="click" data-ratparam="all"></div>
        <div id="Android" data-ratid="product_ranking_sort_android" data-ratevent="click" data-ratparam="all"></div>

        <ul class="product-ranking-List u-Adjust_Mt-16">
            <ListItem
                v-for="(device, i) in rankingData"
                :key="i"
                :summary="device"
                :selectDeviceName="selectDeviceName"
            />
        </ul>
    </div>
</template>

<script>
import ListItem from './components/ListItem.vue'
import {device_ranking} from '../../../js/csv-data/device-ranking';
import {device_top} from '../../../js/csv-data/device-top';
import {device_iphone} from '../../../js/csv-data/device-iphone';


export default {
    components: { ListItem },
    data() {
        return {
        rankingData: [],
        thisRankingBoth: [],
        thisRankingAndroid: [],
        thisRankingIphone: [],
        updateStr: '----年--月--日(-)更新',
        selectDeviceName: 'both',
        }
    },
    methods: {
        createUpdateDate(date) {
            const splitDate = date.split('/');
            const dayOfWeek = new Date(date).getDay();
            const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ][dayOfWeek];
            return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日(${dayOfWeekStr})更新`;
        },
        createRankInData(rankingData, productsData) {
            const mergedData = []

            rankingData.map(item => {
                for (const data of productsData) {
                    if (item.product.trim() === data.product.trim()) {
                        mergedData.push({...data, ...item});
                        return
                    }
                }
            })
            return mergedData
        },
        sorteRanking(list) {
            return list.sort((a, b) => a['rank-this-month'] - b['rank-this-month'])
        },
        sorteLastRanking(list) {
            return list.sort((a, b) => a['rank-last-month'] - b['rank-last-month'])
        },
        selectDevice(){
            switch (this.selectDeviceName) {
                case 'iPhone':
                    this.rankingData = this.thisRankingIphone;
                    document.getElementById('iPhone').click();
                    break;
                case 'Android':
                    this.rankingData = this.thisRankingAndroid;
                    document.getElementById('Android').click();
                    break;
                case 'both':
                    this.rankingData = this.thisRankingBoth;
                    document.getElementById('both').click();
                    break;
                default:
                    this.rankingData = this.thisRankingBoth;
                    break;
            }
        }
    },
    created() {
        const thisRankIngData = [];
        const lastRankIngData = [];
        this.updateStr = this.createUpdateDate(device_ranking[0]['update-page']);
        device_ranking.forEach(item => {
            if (item['rank-this-month'].trim() !== '') {
                thisRankIngData.push(item);
            }
            if (item['rank-last-month'].trim() !== '') {
                lastRankIngData.push(item);
            }
        });
        const thisRankInIphone = this.createRankInData(thisRankIngData, device_iphone);
        const thisRankInAndroid = this.createRankInData(thisRankIngData, device_top);

        const lastRankInIphone = this.createRankInData(lastRankIngData, device_iphone);
        const lastRankInAndroid = this.createRankInData(lastRankIngData, device_top);

        // All
        const thisRankingBoth = this.sorteRanking([...thisRankInIphone, ...thisRankInAndroid]);
        this.thisRankingBoth = thisRankingBoth;

        // Android
        const thisRankingAndroid = this.sorteRanking(thisRankInAndroid);
        thisRankingAndroid.map((item, index) => {
            item['rank-add-this-month'] = String(index + 1);
            if (item['rank-last-month'].trim() === '')  item['rank-add-last-month'] = '';
        });
        const lastRankingAndroid = this.sorteLastRanking(lastRankInAndroid);
        lastRankingAndroid.map((item, index) =>  item['rank-add-last-month'] = String(index + 1));
        thisRankingAndroid.map(item => {
            lastRankingAndroid.forEach(el => {
                if(item.product === el.product) {
                    item['rank-add-last-month'] = el['rank-add-last-month']
                }
            });
        });
        this.thisRankingAndroid = thisRankingAndroid;

        // iPhone
        const thisRankingIphone = this.sorteRanking(thisRankInIphone);
        thisRankingIphone.map((item, index) => {
            item['rank-add-this-month'] = String(index + 1);
            if (item['rank-last-month'].trim() === '')  item['rank-add-last-month'] = '';
        });

        const lastRankingIphone = this.sorteLastRanking(lastRankInIphone);
        lastRankingIphone.map((item, index) =>  item['rank-add-last-month'] = String(index + 1));

        thisRankingIphone.map(item => {
            lastRankingIphone.forEach(el => {
                if(item.product === el.product) {
                    item['rank-add-last-month'] = el['rank-add-last-month']
                }
            });
        });

        this.thisRankingIphone = thisRankingIphone;

        if( location.search ) {
            const query = location.search;
            if( /\iphone-ranking/.test(query) ) {
                this.selectDeviceName = 'iPhone';
            } else if ( /\android-ranking/.test(query) ) {
                this.selectDeviceName = 'Android';
            }
            this.selectDevice();
        } else {
            this.rankingData = this.thisRankingBoth;
        }
    },
    filters: {
        optimalName: (value) => {
            return ( value === 'both' ) ? '総合' : value;
        }
    }
}
</script>
