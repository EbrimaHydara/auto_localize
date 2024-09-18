<template>
    <div class="c-Tab js-Tab product-top-Utility_Show-pc">
        <ul class="c-Tab_Items" role="tablist">
            <li class="c-Tab_Item" id="tab-menu-5G" role="tab" aria-selected="true" aria-controls="tab-content-5G">5G
            </li>
            <li class="c-Tab_Item" id="tab-menu-LTE" role="tab" aria-selected="false" aria-controls="tab-content-LTE">4G LTE
            </li>
            <li class="c-Tab_Item" id="tab-menu-3G" role="tab" aria-selected="false" aria-controls="tab-content-3G">3G
            </li>
        </ul>
        <div v-for="(List, key) in frequencyBandList" class="c-Tab_Panel" :id="`tab-content-${key}`" role="tabpanel"
            :aria-hidden="key !== '5G' ? true : false" :aria-labelledby="`tab-menu-${key}`">
            <div class="c-Table_Wrap-scroll">
                <div class="js-Scrollable">
                    <div class="c-Table_Wrap">
                        <table class="c-Table_Container product-band-Layout_Table product-band-Layout_Table-frequency">
                            <thead>
                                <tr>
                                    <th rowspan="2" class="u-Adjust_Align-center product-band-Layout_Table_Thead">製品名 ＼ 周波数帯</th>
                                    <template v-for="(frequency) in List.frequency">
                                        <template
                                            v-if="(key === 'LTE' && frequency === '800MHz') || (key === 'LTE' && frequency === '1.5GHz')">
                                            <th colspan="2" class="u-Adjust_Align-center">{{ frequency }}</th>
                                        </template>
                                        <template v-else-if="key === 'LTE' && frequency === ''">
                                        </template>
                                        <template v-else>
                                            <th class="u-Adjust_Align-center">{{ frequency }}</th>
                                        </template>
                                    </template>
                                </tr>
                                <tr>
                                    <template v-for="(band) in List.band">
                                        <th class="u-Adjust_Align-center">{{ band }}</th>
                                    </template>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(productItem) in productList">
                                    <th>{{ productItem.製品名 }}</th>
                                    <template v-for="(bandName) in List.bandName">
                                        <td class="u-Adjust_Align-center">{{ productItem[bandName] }}</td>
                                    </template>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:
        ["productList", "frequencyBandList"]
}
</script>
