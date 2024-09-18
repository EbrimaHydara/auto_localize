<template>
    <div class="c-Table_Wrap service-Search_Result-pc">
        <table class="c-Table_Container">
            <colgroup>
                <col style="width: 25%;">
                <col style="width: 25%;">
                <col style="width: 50%;">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">メーカー</th>
                    <th scope="col">機種名</th>
                    <th scope="col">確認時のソフトウェアバージョン</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(deviceItem, i) in deviceList" :key="i">
                    <td>{{ deviceItem.oem }}</td>
                    <td>{{ deviceItem.device }}</td>
                    <td>{{ deviceItem.swver }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ["deviceList"],
}
</script>
