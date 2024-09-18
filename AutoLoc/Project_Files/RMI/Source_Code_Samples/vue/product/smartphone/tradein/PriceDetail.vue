<template>
<div>
    <div :class="`${namespace}-Tradein_Container`">
        <h3 :class="`${namespace}-Tradein_Heading-lv3`">下取りシミュレーション</h3>
        <p class="c-Txt_Normal-s c-Txt_Emp-01 u-Adjust_Align-center u-Adjust_Mt-8">お持ちの製品の下取り価格が確認できます</p>

        <h4 :class="`${namespace}-Tradein_Heading-lv4 u-Adjust_Mt-16`">1.購入したキャリアを選択</h4>
        <div class="c-Form_Select u-Adjust_Mt-8">
            <select v-model="selectedCarrier" @change="carrierSelect()">
                <option value="">キャリアを選択</option>
                <option v-for="( carrier, index ) in carrierList" :key="index" :value="carrier">{{ carrier }}</option>
            </select>
            <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
        </div>

        <div id="js-tradein-maker" aria-hidden="true" :class="`${namespace}-Tradein_Form-field`">
            <h4 :class="`${namespace}-Tradein_Heading-lv4 u-Adjust_Mt-16`">2.メーカーを選択</h4>
            <div class="c-Form_Select u-Adjust_Mt-8">
                <select v-model="selectedMaker" @change="makerSelect()">
                    <option value="">メーカーを選択</option>
                    <option v-for="( maker, index ) in makerList" :key="index" :value="maker">{{ maker }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>

        <div id="js-tradein-device" aria-hidden="true" :class="`${namespace}-Tradein_Form-field`">
            <h4 :class="`${namespace}-Tradein_Heading-lv4 u-Adjust_Mt-16`">3.モデルを選択</h4>
            <div class="c-Form_Select u-Adjust_Mt-8">
                <select v-model="selectedDevice" @change="deviceSelect()">
                    <option value="">モデルを選択</option>
                    <option v-for="( device, index ) in deviceList" :key="index" :value="device">{{ device }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>

        <div id="js-tradein-memory" aria-hidden="true" :class="`${namespace}-Tradein_Form-field`">
            <h4 :class="`${namespace}-Tradein_Heading-lv4 u-Adjust_Mt-16`">4.容量を選択</h4>
            <div class="c-Form_Select u-Adjust_Mt-8">
                <select v-model="selectedMemory" @change="memorySelect()">
                    <option value="">容量を選択</option>
                    <option v-for="( memory, index ) in memoryList" :key="index" :value="memory">{{ memory }}</option>
                </select>
                <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
            </div>
        </div>

        <div id="js-rat-dummy-element" data-ratid="dummy" data-ratevent="click" data-ratparam="all"></div>

        <div id="js-tradein-result">
            <template v-if="isResult">
                <Result
                :directory="directory"
                :priceList="priceList"
                :selectedCarrier="selectedCarrier"
                :selectedMaker="selectedMaker"
                :selectedDevice="selectedDevice"
                :selectedMemory="selectedMemory"
                :lastUpdate="lastUpdate" />
            </template>
        </div>
    </div>
</div>
</template>

<script>
import Result from './components/Result.vue';
import {tradein_pricelist} from '../../../../js/csv-data/tradein-pricelist'

export default {
    name: 'PriceDetail',
    components: {
        Result
    },
    props: ['currentDirectory'],
    data () {
        return {
            namespace: 'product-detail-b',
            directory: '',
            carrierList: [
                '楽天モバイル','ドコモ','au','ソフトバンク','その他（SIMフリースマホ＆Apple Watch）'
            ],
            makerList: [],
            deviceList: [],
            memoryList: [],
            priceList: [],
            defaultList: [],
            filterdeviceList: [],
            filtermemoryList: [],
            selectedCarrier: '',
            selectedMaker: '',
            selectedDevice: '',
            selectedMemory: '',
            headerNavWrapper: '',
            tradeinMaker: '',
            tradeinDevice: '',
            tradeinMemory: '',
            ratDummyElement:'',
            isResult: false,
            lastUpdate: '',
        }
    },
    created() {
        let makerList = [];
        let deviceList = [];
        let memoryList = [];
        this.lastUpdate = tradein_pricelist[0].update;
        tradein_pricelist.forEach(elm => {
            makerList.push(elm.manufacturer);
            deviceList.push(elm.device);
            memoryList.push(elm.memory);
        });
        this.makerList = makerList;
        this.deviceList = deviceList;
        this.memoryList = memoryList;
        this.defaultList = tradein_pricelist;
        this.selectList = [];
    },
    methods: {
        filterSet(arr) {
            return arr.filter((x, i, self) => self.indexOf(x) === i)
                .sort((a, b) =>  (a.toLowerCase() > b.toLowerCase()) ?  1 : (b.toLowerCase() > a.toLowerCase()) ? -1 : 0);
        },
        filterSetSimple(arr) {
            return arr.filter((x, i, self) => self.indexOf(x) === i);
        },
        formatRatId(str) {
            return str.replace(/（| /g, '-').replace(/）/g, '').toLowerCase();
        },
        carrierSelect() {
            this.isResult = false;
            this.selectedMaker = '';
            let manufacturer_tmp = [];
            let filterdeviceList_tmp = [];
            this.defaultList.forEach(elm => {
                if( elm.carrier === this.carrierFilter(this.selectedCarrier) ) {
                    manufacturer_tmp.push(elm.manufacturer);
                    filterdeviceList_tmp.push(elm);
                }
            });
            this.makerList = this.filterSet(manufacturer_tmp);
            this.filterdeviceList = filterdeviceList_tmp;
            this.tradeinMaker.setAttribute('aria-hidden', 'false');
            this.selectedDevice = '';
            this.tradeinDevice.setAttribute('aria-hidden', 'true');
            this.deviceList =[];
            this.selectedMemory = '';
            this.tradeinMemory.setAttribute('aria-hidden', 'true');
            this.memoryList = [];
            this.ratDummyElement.setAttribute('data-ratid', `${this.directory}_simulation_career_${this.formatRatId(this.carrierFilter(this.selectedCarrier))}`);
            this.ratDummyElement.click();
        },
        carrierFilter(carrier) {
            const map = new Map([
                [ '楽天モバイル','Rakuten' ],
                [ 'ドコモ','docomo' ],
                [ 'au', 'au' ],
                [ 'ソフトバンク','Softbank'],
                [ 'その他（SIMフリースマホ＆Apple Watch）','Generic' ],
            ]);
            const keys = map.keys();
            let carrierName = '';
            for( let key of keys ) {
                if ( carrier === key ) {
                    carrierName = map.get(key);
                }
            }
            return carrierName;
        },
        makerSelect() {
            this.isResult = false;
            let device_tmp = [];
            let filtermemoryList_tmp = [];
            const deviceList = this.filterdeviceList;
            this.selectedDevice = '';
            deviceList.forEach(elm => {
                if( elm.manufacturer === this.selectedMaker ) {
                    device_tmp.push(elm.device);
                    filtermemoryList_tmp.push(elm);
                }
            });
            if (this.selectedMaker === 'Apple') {
                this.deviceList = this.filterSetSimple(device_tmp);
            }
            else {
                this.deviceList = this.filterSet(device_tmp);
            }
            this.filtermemoryList = filtermemoryList_tmp;
            this.tradeinDevice.setAttribute('aria-hidden', 'false');
            this.selectedMemory = '';
            this.tradeinMemory.setAttribute('aria-hidden', 'true');
            this.memoryList = [];
            this.ratDummyElement.setAttribute('data-ratid', `${this.directory}_simulation_maker_${this.formatRatId(this.selectedMaker)}`);
            this.ratDummyElement.click();
        },
        deviceSelect() {
            this.isResult = false;
            let memory_tmp = [];
            const memoryList = this.filtermemoryList;
            this.selectedMemory = '';
            memoryList.forEach(elm => {
                if( elm.device === this.selectedDevice ) {
                    memory_tmp.push(elm.memory);
                }
            });
            this.memoryList = memory_tmp;
            this.tradeinMemory.setAttribute('aria-hidden', 'false');
            this.ratDummyElement.setAttribute('data-ratid', `${this.directory}_simulation_model_${this.formatRatId(this.selectedDevice)}`);
            this.ratDummyElement.click();
        },
        memorySelect() {
            this.isResult = false;
            this.priceResult();
            this.ratDummyElement.setAttribute('data-ratid', `${this.directory}_simulation_battery_${this.formatRatId(this.selectedMemory)}`);
            this.ratDummyElement.click();
        },
        priceResult() {
            let pricelist_tmp = [];
            this.priceList = [];
            this.defaultList.forEach(elm => {
                if(
                    elm.carrier === this.carrierFilter(this.selectedCarrier) &&
                    elm.manufacturer === this.selectedMaker &&
                    elm.device === this.selectedDevice &&
                    elm.memory === this.selectedMemory
                ) {
                    pricelist_tmp.good_price = elm.good_price;
                    pricelist_tmp.fair_price = elm.fair_price;
                    pricelist_tmp.poor_price = elm.poor_price;
                }
            });
            this.priceList.push(pricelist_tmp);
            this.isResult = true;
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.headerNavWrapper = document.getElementById('js-header-nav-wrapper');
            this.tradeinMaker = document.getElementById('js-tradein-maker');
            this.tradeinDevice = document.getElementById('js-tradein-device');
            this.tradeinMemory = document.getElementById('js-tradein-memory');
            this.ratDummyElement = document.getElementById('js-rat-dummy-element');
        });
        this.directory = this.currentDirectory;
    }
}
</script>
