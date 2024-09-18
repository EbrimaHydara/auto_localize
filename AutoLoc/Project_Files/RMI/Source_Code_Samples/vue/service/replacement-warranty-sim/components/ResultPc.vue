<template>
    <div class="c-Table_Wrap service-Search_Result-pc">
        <table class="c-Table_Container">
            <colgroup>
                <col style="width: 25%;">
                <col style="width: 25%;">
                <col style="width: 25%;">
                <col style="width: 25%;">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">機種名</th>
                    <th scope="col">メーカー</th>
                    <th scope="col">月額利用料</th>
                    <th scope="col">自己負担金（免責金額）</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(priceItem, i) in priceList" :key="i">
                    <td>{{ priceItem.device }}</td>
                    <td>{{ priceItem.oem }}</td>
                    <td>{{ priceItem.monthly_fee }}</td>
                    <td>{{ priceItem.payment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ["priceList"],
}
</script>
