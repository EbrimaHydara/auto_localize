<template>
    <div class="l-hikari-Section_Sub-content-tall l-System_Container">
        <h3 class="c-Heading_Lv4">利用状況がわからない方</h3>
        <div class="l-hikari-Section_Sub-content-short">
            <p>NTT東日本・NTT西日本にお問い合わせいただくことで現在の状況を確認していただけます。</p>
            <dl class="c-Dl_Origin u-Adjust_Mt-16">
                <div>
                    <dt>NTT東日本お問い合わせ</dt>
                    <dd>
                        局番なし <a href="tel:116" :style="phoneStyle">116</a><br>
                        携帯電話・PHS <a href="tel:0120-116-000" :style="phoneStyle">0120-116-000</a>
                    </dd>
                    </div>
                    <div>
                    <dt>NTT西日本お問い合わせ</dt>
                    <dd>
                        局番なし <a href="tel:116" :style="phoneStyle">116</a><br>
                        携帯電話・PHS <a href="tel:0800-2000116" :style="phoneStyle">0800-2000116</a>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    props: ['phoneStyle'],
}
</script>
