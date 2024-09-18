<template>
    <div class="service-Search_Result-sp">
        <div
            v-for="(priceItem, i) in priceList"
            :key="i"
            class="c-Accordion"
        >
            <button
                :id="`accordion-${joinDash(priceItem.device)}`"
                class="c-Accordion_Trigger service-Search_Accordion-trigger js-Accordion_Trigger-priceList"
                aria-expanded="false"
                :aria-controls="`accordion-content-${joinDash(priceItem.device)}`"
                @click="accordion"
            >
                <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>
                {{ priceItem.device }}
            </button>
            <div
                :id="`accordion-content-${joinDash(priceItem.device)}`"
                class="c-Accordion_Panel service-Search_Accordion-panel js-Accordion_Panel-priceList"
                role="region"
                :aria-labelledby="`accordion-${joinDash(priceItem.device)}`"
                aria-hidden="false"
            >
                <div class="c-Table_Wrap">
                    <table class="c-Table_Container">
                        <tbody>
                            <tr>
                                <th scope="row">メーカー</th>
                                <td>{{ priceItem.oem }}</td>
                            </tr>
                            <tr>
                                <th scope="row">月額利用料</th>
                                <td>{{ priceItem.monthly_fee }}</td>
                            </tr>
                            <tr>
                                <th scope="row">自己負担金<br>（免責金額）</th>
                                <td>{{ priceItem.payment }}</td>
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
    props: ["priceList"],
    data() {
        return {
            accordionTriggers: [],
            accordionPanels: [],
        }
    },
    watch: {
        priceList(newVal, oldVal) {
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
            this.accordionTriggers = [...document.querySelectorAll('.js-Accordion_Trigger-priceList')];
            this.accordionPanels = [...document.querySelectorAll('.js-Accordion_Panel-priceList')];
        });
    }
}
</script>
