<template>
    <li>
    <p class="c-Txt_Normal-m c-Txt_Emp">{{ title }}</p>
    <div class="l-Media_Grid u-Adjust_Mt-16">
        <div class="l-Media_Image">
            <img :src="displayImg" :alt="displayAlt">
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</li>
</template>

<script>
export default {
    props: ['title', 'imgName', 'imgAlt'],
    computed: {
        displayImg() {
            return `/assets/img/hikari/flow/${this.imgName}`;
        },
        displayAlt() {
            return this.imgAlt ? this.imgAlt : '';
        },
    }
}
</script>
