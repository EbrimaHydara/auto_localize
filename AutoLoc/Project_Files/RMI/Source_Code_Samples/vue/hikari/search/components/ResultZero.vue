<template>
    <div>
        <div class="u-Adjust_Mt-40">
            <h2 class="c-Heading_Lv4">”{{ searchWord }}” に一致するページは見つかりませんでした。</h2>
            <p class="u-Adjust_Mt-32 c-Txt_Emp">検索のヒント</p>
            <ul class="c-List_Text-disc u-Adjust_Mt-16">
                <li>キーワードに誤字・脱字がないか確認してください。</li>
                <li>別のキーワードを試してみてください。</li>
                <li>より一般的な言葉を使ってみてください。</li>
            </ul>
        </div>

        <div class="hikari-search-Result_Container">
            <h2 class="c-Heading_Lv4">こんなキーワードも検索されています</h2>
            <ul class="hikari-search-Layout_Words-list u-Adjust_Mt-16">
                <li>
                    <a href="#" @click.prevent="relationSearch('IPv6')" class="c-Link_Txt-inline">IPv6<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('ipv6 ルーター')" class="c-Link_Txt-inline">ipv6 ルーター<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('光回線 工事')" class="c-Link_Txt-inline">光回線 工事<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('光回線 速度')" class="c-Link_Txt-inline">光回線 速度<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('光 転用')" class="c-Link_Txt-inline">光 転用<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('ipv6 速度')" class="c-Link_Txt-inline">ipv6 速度<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('かんたん料金シミュレーション')" class="c-Link_Txt-inline">かんたん料金シミュレーション<span class="c-Icon_Chevron-right"></span></a>
                </li>
                <li>
                    <a href="#" @click.prevent="relationSearch('楽天ポイント')" class="c-Link_Txt-inline">楽天ポイント<span class="c-Icon_Chevron-right"></span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'searchWord'
    ],
    methods: {
        relationSearch: function(word) {
            this.$emit('search', word);
        }
    }
};
</script>
