<template>
<div>
    <div class="service-tradein-Layout" id="js-question">
      <h3 class="c-Heading_Lv4 u-Adjust_Mt-32">1.製品を購入したキャリアを選択</h3>
      <p class="u-Adjust_Mt-8 c-Txt_Cap">※キャリア以外でご購入された製品は、その他（SIMフリースマホ＆Apple Watch）を選択してください。<br>
        <span class="c-Txt_Emp-02">※Apple Watchの下取り価格を確認する場合は、その他（SIMフリースマホ＆Apple Watch）を選択してください。</span>
      </p>
      <div class="c-Form_Select u-Adjust_Mt-16">
        <select v-model="selectedCarrier" @change="carrierSelect()">
            <option value="">携帯電話会社を選択</option>
            <option v-for="( carrier, index ) in carrierList" :key="index" :value="carrier">{{ carrier }}</option>
        </select>
        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
      </div>

      <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">2. 製品のメーカーを選択</h3>
      <div class="c-Form_Select u-Adjust_Mt-16">
        <select v-model="selectedMaker" @change="makerSelect()" class="service-tradein-Layout_Select" id="js-tradein-maker" disabled>
            <option value="">メーカーを選択</option>
            <option v-for="( maker, index ) in makerList" :key="index" :value="maker">{{ maker }}</option>
        </select>
        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
      </div>

      <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">3. 製品のモデルを選択</h3>
      <div class="c-Form_Select u-Adjust_Mt-16">
        <select v-model="selectedDevice" @change="deviceSelect()" class="service-tradein-Layout_Select" id="js-tradein-device" disabled>
            <option value="">モデルを選択</option>
            <option v-for="( device, index ) in deviceList" :key="index" :value="device">{{ device }}</option>
        </select>
        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
      </div>

      <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">4. 製品の容量を選択</h3>
      <div class="c-Form_Select u-Adjust_Mt-16">
        <select v-model="selectedMemory" @change="memorySelect()" class="service-tradein-Layout_Select" id="js-tradein-memory" disabled>
            <option value="">容量を選択</option>
            <option v-for="( memory, index ) in memoryList" :key="index" :value="memory">{{ memory }}</option>
        </select>
        <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
      </div>

      <div class="u-Adjust_Mt-32 u-Adjust_Align-center">
        <a href="#" class="c-Btn_Secondly-large" id="js-tradein-btn" aria-disabled="true" data-ratId="tradein_pricecheck" data-ratEvent="click" data-ratParam="all" :style="{ pointerEvents: isPoiner }" @click.prevent="priceSubmit()"><span>下取り価格を見る</span></a>
      </div>

      <p class="u-Adjust_Mt-16 c-Txt_Cap u-Adjust_Align-center">
        ※ {{ lastUpdate }}時点 ※ 製品の状態によっては下取り価格が下がる場合があります。 ※ 表示価格は税込です。
      </p>
    </div>
    <template v-if="isActive">
        <Result
        :priceList="priceList"
        :selectedCarrier="selectedCarrier"
        :selectedMaker="selectedMaker"
        :selectedDevice="selectedDevice"
        :selectedMemory="selectedMemory"
        :question="question"
        :lastUpdate="lastUpdate" />
    </template>
</div>
</template>

<script>
import { tradein_pricelist } from '../../../js/csv-data/tradein-pricelist';
import Result from './components/Result.vue';

export default {
    name: 'PriceDetail',
    components: {
        Result
    },
    data () {
        return {
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
            tradeinBtn: '',
            tradeinMaker: '',
            tradeinDevice: '',
            tradeinMemory: '',
            question: '',
            result: '',
            isActive: false,
            isPoiner: 'none',
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
            return arr.filter((x, i, self) => {
                return self.indexOf(x) === i;
            }).sort((a, b) => {
                return (a.toLowerCase() > b.toLowerCase()) ?  1 : (b.toLowerCase() > a.toLowerCase()) ? -1 : 0;
            });
        },
        filterSetSimple(arr) {
            return arr.filter((x, i, self) => {
                return self.indexOf(x) === i;
            });
        },
        carrierSelect() {
            this.isActive = false;
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
            this.tradeinMaker.removeAttribute('disabled');
            this.selectedDevice = '';
            this.tradeinDevice.setAttribute('disabled', 'disabled');
            this.deviceList =[];
            this.selectedMemory = '';
            this.tradeinMemory.setAttribute('disabled', 'disabled');
            this.memoryList = [];
            this.allCheck();
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
            this.isActive = false;
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
            this.tradeinDevice.removeAttribute('disabled');
            this.selectedMemory = '';
            this.tradeinMemory.setAttribute('disabled', 'disabled');
            this.memoryList = [];
            this.allCheck();
        },
        deviceSelect() {
            this.isActive = false;
            let memory_tmp = [];
            const memoryList = this.filtermemoryList;
            this.selectedMemory = '';
            memoryList.forEach(elm => {
                if( elm.device === this.selectedDevice ) {
                    memory_tmp.push(elm.memory);
                }
            });
            this.memoryList = memory_tmp;
            this.tradeinMemory.removeAttribute('disabled');
            this.allCheck();
        },
        memorySelect() {
            this.isActive = false;
            this.allCheck();
        },
        allCheck() {
            if (this.carrierFilter(this.selectedCarrier) && this.selectedMaker && this.selectedDevice && this.selectedMemory) {
                this.tradeinBtn.setAttribute('aria-disabled', 'false');
                this.isPoiner = 'auto';
            } else {
                this.tradeinBtn.setAttribute('aria-disabled', 'true');
                this.isPoiner = 'none';
            }
        },
        priceSubmit() {
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
            this.question.style.display = 'none';
            this.isActive = true;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.tradeinBtn = document.getElementById('js-tradein-btn');
            this.tradeinMaker = document.getElementById('js-tradein-maker');
            this.tradeinDevice = document.getElementById('js-tradein-device');
            this.tradeinMemory = document.getElementById('js-tradein-memory');
            this.question = document.getElementById('js-question');
        });
    }
}
</script>
