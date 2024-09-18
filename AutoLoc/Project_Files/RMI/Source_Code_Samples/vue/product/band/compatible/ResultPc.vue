<template>
    <div class="product-top-Utility_Show-pc">
        <div class="c-Table_Wrap-scroll">
            <div class="js-Scrollable">
                <div class="c-Table_Wrap">
                    <table class="c-Table_Container product-band-Layout_Table">
                        <thead>
                            <tr>
                                <th rowspan="2" class="product-band-Layout_Table_Compatible-thead">製品名 ＼ 他社回線</th>
                                <th colspan="2" class="u-Adjust_Align-center">ドコモ回線</th>
                                <th colspan="2" class="u-Adjust_Align-center">au回線</th>
                                <th colspan="2" class="u-Adjust_Align-center">ソフトバンク回線</th>
                            </tr>
                            <tr>
                                <template v-for="i in 3">
                                    <th class="u-Adjust_Align-center">データ通信</th>
                                    <th class="u-Adjust_Align-center">通話</th>
                                </template>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(productItem) in productList">
                                <th>{{ productItem.製品名 }}</th>
                                <template v-for="(compatible) in compatibleBandList">
                                    <td class="u-Adjust_Align-center">{{ productItem[compatible.data] }}</td>
                                    <td class="u-Adjust_Align-center">{{ productItem[compatible.call] }}</td>
                                </template>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:
        ["productList", "compatibleBandList"]
}
</script>
