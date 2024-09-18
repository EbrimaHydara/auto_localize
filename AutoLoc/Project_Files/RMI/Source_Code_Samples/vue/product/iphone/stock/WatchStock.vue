<template>
    <div class="u-Adjust_Mt-24">
        <div class="c-Form_Select product-iphone-stock-Form_Select">
            <select v-model="currentProduct">
                <option value="">全機種</option>
                <option
                    v-for="product in productStockData"
                    :key="`${product[0]}-option`"
                    :value="product[0]"
                >
                    {{ product[0] }}
                </option>
            </select>
            <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
        </div>
        <div class="product-iphone-stock-Layout_Grid">
            <div
                v-for="product in productStockData"
                :key="product[0]"
                :class="[currentProduct && 'product-iphone-stock-Layout_Grid-child']"
            >
                <template v-if="!currentProduct || currentProduct === product[0]">
                    <div
                        :id="`${deviceDirectory(product[0])}`"
                    >
                        <h2 class="c-Heading_Lv2">{{ product[0] }}</h2>
                        <p>
                            <a
                                :href="`/product/apple-watch/${deviceDirectory(product[0])}/`"
                                class="c-Link_Txt-inline"
                            >
                                製品詳細を見る
                            <span class="c-Icon_Chevron-right"></span>
                            </a>
                        </p>
                    </div>
                    <div class="c-Table">
                        <div :class="[currentProduct && 'c-Table_Wrap product-iphone-stock-Layout_Grid-child-table']">
                            <div
                                v-for="caseName in Object.entries(product[1])"
                                :key="product[0] + caseName[0]"
                                class="c-Table_Wrap"
                            >
                                <h3 class="c-Heading_Lv4 u-Adjust_Mt-24">
                                    {{ caseName[0] }}
                                </h3>
                                <template
                                    v-for="size in Object.entries(caseName[1])"
                                >
                                    <h3
                                        class="c-Heading_Lv4 u-Adjust_Mt-24"
                                        :key="product[0] + caseName[0] + size[0] + 'title'"
                                    >
                                        {{ size[0] }}
                                    </h3>
                                    <table
                                        class="c-Table_Container product-iphone-stock-Layout_Table u-Adjust_Mt-8"
                                        :key="product[0] + caseName[0] + size[0] + 'table'"
                                    >
                                        <thead>
                                            <tr v-if="hasSizeProduct(product[0])">
                                                <th scope="col" width="30%">バンド</th>
                                                <th scope="col" width="20%">サイズ</th>
                                                <th scope="col" width="50%">在庫状況</th>
                                            </tr>
                                            <tr v-else>
                                                <th scope="col" width="50%">バンド</th>
                                                <th scope="col" width="50%">在庫状況</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(band, index) in Object.entries(size[1])"
                                                :key="product[0] + caseName[0] + size[0] + band[0]"
                                            >
                                                <template v-if="hasSizeProduct(product[0])">
                                                    <template v-if="index === 0">
                                                        <td
                                                            v-if="isPrevBandDifferent(
                                                                '',
                                                                sepalateNameSize(band[0]).bandType
                                                            )"
                                                            :rowspan="rowspanLenMap[sepalateNameSize(band[0]).bandType]"
                                                        >
                                                            {{ sepalateNameSize(band[0]).bandType }}
                                                        </td>
                                                    </template>
                                                    <template v-else>
                                                        <td
                                                            v-if="isPrevBandDifferent(
                                                                sepalateNameSize(Object.entries(size[1])[index - 1][0]).bandType,
                                                                sepalateNameSize(band[0]).bandType
                                                            )"
                                                            :rowspan="rowspanLenMap[sepalateNameSize(band[0]).bandType]"
                                                        >
                                                            {{ sepalateNameSize(band[0]).bandType }}
                                                        </td>
                                                    </template>
                                                    <td class="u-Adjust_Align-center">{{ sepalateNameSize(band[0]).size }}</td>
                                                </template>
                                                <td v-else>{{ band[0] }}</td>
                                                <td v-html="displayStockStatus(band[1])" />
                                            </tr>
                                        </tbody>
                                    </table>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            productStockData: [],
            updateStr: '----年--月--日更新',
            productLinkPath: new Map([
                ['Apple Watch Series 9', 'apple-watch-series9'],
                ['Apple Watch Ultra 2', 'apple-watch-ultra-2'],
                ['Apple Watch SE（第2世代）', 'apple-watch-se-2nd-2023'],
            ]),
            currentProduct: '',
            sizeRegex: /S\/M\/L|S\/M|M\/L|[SML]$/,
            rowspanLenMap: {}
        }
    },
    computed: {
        deviceDirectory() {
            return (productName) => this.productLinkPath.get(productName)
        },
        displayStockStatus() {
            return (data) => {
                const regex = /\（最短.*\）/
                let txt = data.trim()
                if (regex.test(txt)) {
                    txt = txt.replace('）', '<span class="c-Txt_Normal-s">※1</span>）')
                }
                if (txt.indexOf('在庫あり') > -1) {
                    txt = '<span class="c-Txt_Emp-02">' + txt + '</span>'
                }
                return txt
            }
        },
        sepalateNameSize() {
            return (productName) => {
                return {
                    bandType : productName.replace(this.sizeRegex, ''),
                    size: productName.match(this.sizeRegex) ? productName.match(this.sizeRegex)[0] : '-'
                }
            }
        },
        hasSizeProduct () {
            return (productName) => {
                const targets = ['Apple Watch Ultra']
                return targets.includes(productName)
            }
        },
        isPrevBandDifferent() {
            return (prev, current) =>prev !== current
        },
    },
    methods: {
        async getProductData() {
            const res = await axios.get('/assets/json/product-watch-stock.json')
            const data = await res.status == 200 ? res.data : []
            return data
        },
    },
    created() {
        this.getProductData()
            .then((data) => {
                let temp_data = [];
                let prev_product = '';
                let prev_case = '';
                let prev_size = '';

                for (let i = 0, len = data.length; i < len; i++) {
                    if (prev_product !== data[i].product){
                        temp_data[data[i].product] = [];
                        temp_data[data[i].product][data[i].case] = [];
                        temp_data[data[i].product][data[i].case][data[i].size] = [];
                        temp_data[data[i].product][data[i].case][data[i].size][data[i].band] = data[i].stockStatus;
                    }
                    else {
                        if (prev_case !== data[i].case){
                            temp_data[data[i].product][data[i].case] = [];
                            temp_data[data[i].product][data[i].case][data[i].size] = [];
                            temp_data[data[i].product][data[i].case][data[i].size][data[i].band] = data[i].stockStatus;
                        }
                        else {
                            if (prev_size !== data[i].size){
                                temp_data[data[i].product][data[i].case][data[i].size] = [];
                            }
                            temp_data[data[i].product][data[i].case][data[i].size][data[i].band] = data[i].stockStatus;
                        }
                    }
                    prev_product = data[i].product;
                    prev_case = data[i].case;
                    prev_size = data[i].size;
                }

                this.productStockData = Object.entries(temp_data)

                // 'Apple Watch Ultra'の'バンド'のrowspanの長さをマッピング
                this.productStockData
                    .filter(product => product[0] === 'Apple Watch Ultra')
                    .map(caseName => Object.entries(caseName[1]))
                    .map(size => Object.entries(size[0][1]))
                    .map(band => Object.entries(band[0][1]))
                    .map(bandData => {
                        for (const _data of bandData) {
                            const bandName = _data[0].replace(this.sizeRegex, '')
                            this.rowspanLenMap[bandName] = this.rowspanLenMap[bandName] ? this.rowspanLenMap[bandName] + 1 : 1
                        }
                    })
            })
            .catch((error) => {
                // TODO: error handling.
                console.log(error);
            })
    }
}
</script>
