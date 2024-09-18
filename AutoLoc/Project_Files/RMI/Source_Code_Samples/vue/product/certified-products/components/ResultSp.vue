<template>
    <div class="service-Search_Result-sp">
        <div
            v-for="(deviceItem, i) in deviceList"
            :key="i"
            class="c-Accordion"
        >
            <button
                :id="`accordion-${joinDash(deviceItem.device)}`"
                class="c-Accordion_Trigger service-Search_Accordion-trigger js-Accordion_Trigger-deviceList"
                aria-expanded="false"
                :aria-controls="`accordion-content-${joinDash(deviceItem.device)}`"
                @click="accordion"
            >
                <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>
                {{ deviceItem.device }}
            </button>
            <div
                :id="`accordion-content-${joinDash(deviceItem.device)}`"
                class="c-Accordion_Panel service-Search_Accordion-panel js-Accordion_Panel-deviceList"
                role="region"
                :aria-labelledby="`accordion-${joinDash(deviceItem.device)}`"
                aria-hidden="false"
            >
                <div class="c-Table_Wrap">
                    <table class="c-Table_Container product-certified-product-Result_Table">
                        <tbody>
                            <tr>
                                <th class="product-certified-product-Result_Th" scope="row">メーカー</th>
                                <td>{{ deviceItem.oem }}</td>
                            </tr>
                            <tr>
                                <th class="product-certified-product-Result_Th" scope="row">確認時のソフトウェアバージョン</th>
                                <td>{{ deviceItem.swver }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["deviceList"],
    data() {
        return {
            accordionTriggers: [],
            accordionPanels: [],
        }
    },
    watch: {
        deviceList(newVal, oldVal) {
            this.accordionTriggers.forEach(panel => {
                panel.ariaExpanded = 'false';
            })
            this.accordionPanels.forEach(panel => {
                panel.ariaHidden = 'false';
            })
        }
    },
    methods: {
        joinDash(target) {
            return target.trim().split(' ').join('-');
        },
        accordion(e) {
            // Trigger toggle
            if (e.target.ariaExpanded === 'false') {
                e.target.ariaExpanded = 'true';
            } else {
                e.target.ariaExpanded = 'false';
            }

            // Panel toggle
            const trigger = e.target.attributes['aria-controls'].value;
            const panel = document.getElementById(trigger);
            if (panel.ariaHidden === 'false') {
                panel.ariaHidden = 'true';
            } else {
                panel.ariaHidden = 'false';
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.accordionTriggers = [...document.querySelectorAll('.js-Accordion_Trigger-deviceList')];
            this.accordionPanels = [...document.querySelectorAll('.js-Accordion_Panel-deviceList')];
        });
    }
}
</script>
