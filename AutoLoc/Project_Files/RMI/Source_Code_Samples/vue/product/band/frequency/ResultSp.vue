<template>
    <div class="product-top-Utility_Show-sp">
        <div v-for="(productItem) in productList" class="c-Accordion">
            <button :id="`accordion-${joinDash(productItem.製品名)}`"
                class="c-Accordion_Trigger product-band-Layout_Accordion js-Accordion_Trigger-productList"
                aria-expanded="false" :aria-controls="`accordion-content-${joinDash(productItem.製品名)}`" @click="accordion">
                <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>
                {{ productItem.製品名 }}
            </button>
            <div :id="`accordion-content-${joinDash(productItem.製品名)}`"
                class="c-Accordion_Panel product-band-Layout_Accordion-panel js-Accordion_Panel-productList" role="region"
                :aria-labelledby="`accordion-${joinDash(productItem.製品名)}`" aria-hidden="false">
                <div class="c-Table_Wrap-scroll">
                    <div class="js-Scrollable">
                        <div class="c-Tab">
                            <ul class="c-Tab_Items" role="tablist">
                                <li v-for="(_, key, i) in frequencyBandList" class="c-Tab_Item" :id="`tab-menu-${joinDash(productItem.製品名)}-${key}`"
                                    :role="`tab-${joinDash(productItem.製品名)}`" :aria-selected="i === 0 ? true : false"
                                    :aria-controls="`tab-content-${joinDash(productItem.製品名)}-${key}`"
                                    @click="tab(joinDash(productItem.製品名), $event)">{{ (key === 'LTE') ? '4G LTE' : key }}
                                </li>
                            </ul>
                            <div v-for="(List, key) in frequencyBandList" class="c-Tab_Panel"
                                :id="`tab-content-${joinDash(productItem.製品名)}-${key}`"
                                :role="`tabpanel-${joinDash(productItem.製品名)}`" :aria-hidden="key !== '5G' ? true : false"
                                :aria-labelledby="`tab-menu-${joinDash(productItem.製品名)}-${key}`">
                                <div class="c-Table_Wrap">
                                    <table class="c-Table_Container product-band-Layout_Table">
                                        <tbody>
                                            <template v-for="(frequency, i) in List.frequency">
                                                <tr>
                                                    <template
                                                        v-if="(key === 'LTE' && frequency === '800MHz') || (key === 'LTE' && frequency === '1.5GHz')">
                                                        <th scope="row" rowspan="2">{{ frequency }}</th>
                                                        <th scope="row">{{ List.band[i] }}</th>
                                                        <td scope="row">{{ productItem[List.bandName[i]] }}</td>
                                                    </template>
                                                    <template v-else-if="key === 'LTE' && frequency === ''">
                                                        <th scope="row">{{ List.band[i] }}</th>
                                                        <td scope="row">{{ productItem[List.bandName[i]] }}</td>
                                                    </template>
                                                    <template v-else>
                                                        <th scope="row">{{ frequency }}</th>
                                                        <th scope="row">{{ List.band[i] }}</th>
                                                        <td scope="row">{{ productItem[List.bandName[i]] }}</td>
                                                    </template>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["productList", "frequencyBandList"],
    data() {
        return {
            accordionTriggers: [],
            accordionPanels: [],
            tabTriggers: [],
            tabPanels: [],
            isAccordionOpen: false,
        }
    },
    methods: {
        joinDash(target) {
            return target.trim().split(' ').join('-');
        },
        accordion(evnet) {
            // Trigger toggle
            if (evnet.target.getAttribute('aria-expanded') === 'false') {
                evnet.target.setAttribute('aria-expanded', true);
                this.isAccordionOpen = true;
            } else {
                evnet.target.setAttribute('aria-expanded', false);
                this.isAccordionOpen = false;
            }

            // Panel toggle
            const target = evnet.target.getAttribute('aria-controls');
            const panel = document.getElementById(target);

            if (panel.getAttribute('aria-hidden') === 'false') {
                panel.setAttribute('aria-hidden', true);
            } else {
                panel.setAttribute('aria-hidden', false);
            }
        },
        resetAccordion() {
            if (!this.isAccordionOpen) return
            this.isAccordionOpen = false;
            this.accordionTriggers.forEach(button => {
                button.setAttribute('aria-expanded', false);
            })
            this.accordionPanels.forEach(panel => {
                panel.setAttribute('aria-hidden', false);
            })
        },
        tab(productName, evnet) {
            this.tabTriggers = document.querySelectorAll(`[role="tab-${productName}"]`);
            this.tabPanels = document.querySelectorAll(`[role="tabpanel-${productName}"]`);
            const target = document.getElementById(evnet.target.getAttribute('aria-controls'));
            this.tabTriggers.forEach(item => {
                item.setAttribute('aria-selected', false);
            });
            this.tabPanels.forEach(panel => {
                panel.setAttribute('aria-hidden', true);
            });
            evnet.target.setAttribute('aria-selected', true);
            target.setAttribute('aria-hidden', false);
        }
    },
    updated() {
        this.accordionTriggers = document.querySelectorAll('.js-Accordion_Trigger-productList');
        this.accordionPanels = document.querySelectorAll('.js-Accordion_Panel-productList');
    }
}
</script>
