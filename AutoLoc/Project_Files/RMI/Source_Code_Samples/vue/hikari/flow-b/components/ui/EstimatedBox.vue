<template>
    <div class="l-hikari-Section_Sub-short">
        <h2 class="c-Heading_Lv2">申し込みから開通までの目安</h2>
        <p class="u-Adjust_Mt-8"><slot></slot></p>
        <picture>
            <source media="(max-width: 768px)" :srcset="displayImgSp">
            <img :src="displayImgPc" :alt="displayAlt" class="u-Adjust_Mt-24">
        </picture>

        <p class="u-Adjust_Mt-16 c-Txt_Cap"><slot name="cap"></slot></p>
    </div>
</template>

<script>
export default {
    props: ['imgNamePc', 'imgNameSp', 'imgAlt'],
    computed: {
        displayImgPc() {
            return `/assets/img/hikari/flow/${this.imgNamePc}`;
        },
        displayImgSp() {
            return `/assets/img/hikari/flow/${this.imgNameSp}`;
        },
        displayAlt() {
            return this.imgAlt ? this.imgAlt : '';
        },
    }
}
</script>
