<template>
    <div class="l-hikari-Section_Sub-short">
        <div class="l-System_Container hikari-flow-Section_Bg-alert">
            <h3 class="c-Heading_Lv3 c-Txt_Emp-underline">{{ title }}</h3>
            <Accordion
                class="u-Adjust_Mt-24"
                :controlId="controlId"
                :labelId="labelId"
                :btnLabel="btnLabel"
                :dataRatid="dataRatid"
                :shadowRatElms="shadowRatElms"
            >
                <slot></slot>
            </Accordion>
        </div>
    </div>
</template>

<script>
import Accordion from './Accordion.vue'

export default {
    components: {Accordion},
    props: ['phoneStyle', 'controlId', 'labelId', 'btnLabel', 'dataRatid', 'title', 'shadowRatElms'],
}
</script>
