<template>
    <div class="c-Tab js-Tab product-top-Utility_Show-sp">
        <ul class="c-Tab_Items" role="tablist">
            <li class="c-Tab_Item" id="tab-menu-docomo" role="tab" aria-selected="true" aria-controls="tab-content-docomo">ドコモ回線
            </li>
            <li class="c-Tab_Item" id="tab-menu-au" role="tab" aria-selected="false" aria-controls="tab-content-au">au回線
            </li>
            <li class="c-Tab_Item" id="tab-menu-softbank" role="tab" aria-selected="false" aria-controls="tab-content-softbank">ソフトバンク回線
            </li>
        </ul>
        <div v-for="(compatible, key) in compatibleBandList" class="c-Tab_Panel" :id="`tab-content-${key}`" role="tabpanel"
            :aria-hidden="key !== 'docomo' ? true : false" :aria-labelledby="`tab-menu-${key}`">
            <div class="c-Table_Wrap-scroll">
                <div class="js-Scrollable">
                    <div class="c-Table_Wrap">
                        <table class="c-Table_Container product-band-Layout_Table">
                            <thead>
                                <tr>
                                    <th>製品名 ＼<br>他社回線</th>
                                    <th>データ通信</th>
                                    <th>通話</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(productItem) in productList">
                                    <td>{{ productItem.製品名 }}</td>
                                    <td>{{ productItem[compatible.data] }}</td>
                                    <td>{{ productItem[compatible.call] }}</td>
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
        ["productList", "compatibleBandList"]
}
</script>