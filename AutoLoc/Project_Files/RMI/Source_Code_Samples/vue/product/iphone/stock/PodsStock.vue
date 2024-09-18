<template>
    <div class="u-Adjust_Mt-24">
        <div>
            <div class="product-iphone-stock-Layout_Grid">
                <div>
                    <div id="apple-rm2209072">
                        <h2 class="c-Heading_Lv2">AirPods Pro（第2世代）</h2>
                        <p>
                            <a href="/product/accessory/apple-rm2209072/" class="c-Link_Txt-inline">
                                製品詳細を見る<span class="c-Icon_Chevron-right"></span>
                            </a>
                        </p>
                    </div>
                    <div class="c-Table u-Adjust_Mt-24">
                        <div class="c-Table_Wrap">
                            <table class="c-Table_Container product-iphone-stock-Layout_Table">
                                <thead>
                                    <tr>
                                        <th scope="col">在庫状況</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td v-html="displayStockStatus(stockStatus)"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            stockStatus: '',
            updateStr: '----年--月--日更新',
        }
    },
    computed: {
        productName() {
            return (obj) => Object.keys(obj)[0].trim()
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
    },
    methods: {
        async getProductData() {
            const res = await axios.get('/assets/json/product-pods-stock.json')
            const data = await res.status == 200 ? res.data : []
            return data
        },
    },
    created() {
        this.getProductData()
            .then((data) => {
                this.stockStatus = data[0].stockStatus;
            })
            .catch((error) => {
                // TODO: error handling.
                console.log(error);
            })
    }
}
</script>
