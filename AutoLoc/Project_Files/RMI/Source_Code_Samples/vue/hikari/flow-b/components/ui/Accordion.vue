<template>
    <div class="c-Accordion">
        <button
            type="button"
            :id="labelId"
            class="c-Accordion_Trigger js-Accordion_Trigger"
            aria-expanded="false"
            :aria-controls="controlId"
            :data-ratid="dataRatid"
            data-ratevent="click"
            data-ratparam="all"
            @click="toggleAccordion"
        >
            <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>
            {{ btnLabel }}
        </button>
        <div
            :id="controlId"
            class="c-Accordion_Panel js-Accordion_Panel"
            role="region"
            :aria-labelledby="labelId"
            aria-hidden="false"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ScrollHint from 'scroll-hint';

import { accordion } from "../../../../../js/common/component/accordion";

export default {
    props: ['controlId', 'labelId', 'btnLabel', 'dataRatid', 'shadowRatElms'],
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleAccordion(e) {
            this.isOpen = !this.isOpen
            this.clickShadowRat(e)
        },
        clickShadowRat(e) {
            const ratId = e.target.getAttribute('data-ratid')
            const targetRat = this.shadowRatElms.filter(shadowRat => shadowRat.attributes[0].value === ratId)
            targetRat[0].click()
        }
    },
    watch: {
        isOpen(val) {
            if (val) {
                this.$nextTick(() => {
                    new ScrollHint('.js-scrollable', {
                        i18n: {
                        scrollable: 'スクロール\nできます'
                        }
                    });
                })
            }
        }
    },
    mounted() {
        const $target= jQuery('#flow');
        accordion($target);
    },
}
</script>
