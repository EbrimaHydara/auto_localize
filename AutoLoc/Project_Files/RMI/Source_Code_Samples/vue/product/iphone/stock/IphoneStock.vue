<template>
    <div class="u-Adjust_Mt-24">
        <div class="c-Form_Select product-iphone-stock-Form_Select">
            <select v-model="currentProduct">
                <option value="">全機種</option>
                <option
                    v-for="item in productStockData"
                    :key="`${productName(item)}-option`"
                    :value="productName(item)"
                >
                    {{ productName(item) }}
                </option>
            </select>
            <span class="c-Form_Select-icon c-Icon_Product-arrow-select"></span>
        </div>
        <div class="product-iphone-stock-Layout_Grid">
            <template v-for="item in productStockData">
                <div
                    v-if="!currentProduct || currentProduct === productName(item)"
                    :key="`${productName(item)}-container`"
                    :class="[currentProduct && 'product-iphone-stock-Layout_Grid-child']"
                >
                    <div
                        :id="`${deviceDirectory(productName(item))}`"
                    >
                        <h2 class="c-Heading_Lv2">{{ productName(item) }}</h2>
                        <p>
                            <a
                                :href="`/product/iphone/${deviceDirectory(productName(item))}/`"
                                class="c-Link_Txt-inline"
                            >
                                製品詳細を見る<span class="c-Icon_Chevron-right"></span>
                            </a>
                        </p>
                    </div>
                    <div>
                        <div class="c-Table">
                            <div :class="[currentProduct ? 'c-Table_Wrap product-iphone-stock-Layout_Grid-child-table' : 'c-Table_Wrap']">
                                <template v-for="colors in item">
                                    <div v-for="(color) in colors" class="product-iphone-stock-Layout_Table-block" :key="productName(item) + trimText(color.color)">
                                        <h3 class="c-Heading_Lv4">{{ trimText(color.color) }}</h3>
                                        <table class="c-Table_Container product-iphone-stock-Layout_Table u-Adjust_Mt-8">
                                            <thead>
                                                <tr>
                                                    <th scope="col" width="25%">容量</th>
                                                    <th scope="col" width="75%">在庫状況</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{{ trimText(color.memory[0].size) }}</td>
                                                    <td v-html="displayStockStatus(color.memory[0].stockStatus)"></td>
                                                </tr>
                                                <template v-for="(memorydata, k) in color.memory">
                                                    <tr v-if="!isFirstRow(k)" :key="productName(item) + trimText(color.color) + trimText(memorydata.size)">
                                                        <td>{{ trimText(memorydata.size) }}</td>
                                                        <td v-html="displayStockStatus(memorydata.stockStatus)"></td>
                                                    </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
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
            currentProduct: '',
        }
    },
    computed: {
        productName() {
            return (obj) => Object.keys(obj)[0].trim()
        },

        deviceDirectory() {
            return (productName) => {
                const regex = / /g
                if (productName === 'iPhone SE（第3世代）') {
                    return 'iphone-se-3rd';
                } else {
                    return productName.trim().replace(regex, '-').toLowerCase()
                }
            }
        },
        trimText() {
            return (txt) => txt.trim()
        },
        isFirstRow() {
            return (index) => index === 0
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
        }
    },
    methods: {
        async getProductData() {
            const res = await axios.get('/assets/json/product-iphone-stock.json')
            const data = await res.status == 200 ? res.data : []
            return data
        },
        getIndex(value, arr, prop) {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i][prop] === value) {
                    return i
                }
            }
            return -1
        },
        createProductData(data, name) {
            return data.filter(productData => productData.product === name)
        },
        addColorsFrame(data) {
            const productName = data[0].product
            const colorsFrame = {}
            colorsFrame[productName] = []

            data.forEach(productData => {
                const hasColor = this.getIndex(productData.color, colorsFrame[productName], 'color') !== -1

                if (!hasColor) {
                    const colorData = {
                        color: productData.color,
                        memory: [],
                    }
                    colorsFrame[productName].push(colorData)
                }
            })
            return colorsFrame
        },
        addMemory(outputData, masterData) {
            const productName = masterData[0].product
            const addMemoryData = outputData

            masterData.forEach(productData => {
                const colorIndex = this.getIndex(productData.color, outputData[productName], 'color')
                const memoryData = {
                    size: productData.memory,
                    stockStatus: productData.stockStatus,
                }

                addMemoryData[productName][colorIndex].memory.push(memoryData)
            })

            return addMemoryData
        },
        createUpdateDate(date) {
            const splitDate = date.split('/');
            const dayOfWeek = new Date(date).getDay();

            return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日更新`;
            //return `2022年7月1日更新`;
        },
    },
    created() {
        this.getProductData()
            .then((data) => {
                const productList = [];
                let productMaster = null;
                let product = null;

                for (let i = 0, len = data.length; i < len; i++) {
                    if (productList.indexOf(data[i].product) === -1) {
                        productList.push(data[i].product);
                        productMaster = this.createProductData(data, data[i].product);  // jsonデータを各機種ごとのデータに分割
                        product = this.addColorsFrame(productMaster);   // color階層まで作成
                        product = this.addMemory(product, productMaster);   // memory階層まで作成（完全版）
                        this.productStockData.push(product);    // 各機種のデータ（完全版）を一つにマージする(出力用のデータ)
                    }
                }

                /**
                 * 更新日時テキストの設定
                 */
                // this.updateStr = this.createUpdateDate(data[0].update);
            })
            .catch((error) => {
                // TODO: error handling.
                console.log(error);
            })
    }
}
</script>
