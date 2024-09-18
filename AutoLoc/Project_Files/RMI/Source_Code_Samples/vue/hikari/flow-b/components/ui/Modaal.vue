<template>
    <div :id="id" style="display:none;">
        <slot>
            <h3 class="c-Heading_Lv3">NTT東日本、NTT西日本のサービス提供地域</h3>
            <div class="hikari-flow-Modal_Grid u-Adjust_Mt-24">
                <div class="hikari-flow-Modal_Grid-image">
                    <img src="/assets/img/hikari/flow/img-map.png" alt="NTT東日本、NTT西日本のサービス提供地域の地図" width="382">
                </div>
                <div class="hikari-flow-Modal_Grid-text">
                    <p class="c-Txt_Emp hikari-flow-Modal_Title-square-pink">NTT東日本</p>
                    <p class="u-Adjust_Mt-8">北海道、青森県、岩手県、宮城県、秋田県、山形県、福島県、茨城県、栃木県、群馬県、埼玉県、千葉県、東京都、神奈川県、新潟県、山梨県、長野県</p>
                    <p class="c-Txt_Emp u-Adjust_Mt-40 hikari-flow-Modal_Title-square-blue">NTT西日本</p>
                    <p class="u-Adjust_Mt-8">富山県、石川県、福井県、岐阜県、静岡県、愛知県、三重県、滋賀県、京都府、大阪府、兵庫県、奈良県、和歌山県、鳥取県、島根県、岡山県、広島県、山口県、徳島県、香川県、愛媛県、高知県、福岡県、佐賀県、長崎県、熊本県、大分県、宮崎県、鹿児島県、沖縄県</p>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
import { modal } from "../../../../../js/common/component/modal";

export default {
    components: {modal},
    props: ['id'],
    mounted() {
        modal()
    }
}
</script>
