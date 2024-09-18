<template>
    <div id="show-list">
        <div class="c-Accordion-emp recovery-area-Map_Accordion-emp">
            <button type="button" id="accordion-emp-1" class="c-Accordion-emp_Trigger js-Accordion_Trigger" :aria-expanded="!isSp ? 'true' : 'false'" aria-controls="accordion-emp-1-content">
                <span class="c-Icon_Chevron-right c-Accordion-emp_Arrow"></span>
                <span class="c-Accordion-emp_Trigger-txt">表示アイコン</span>
            </button>
            <div id="accordion-emp-1-content" class="c-Accordion-emp_Panel-normal js-Accordion_Panel" role="region" aria-labelledby="accordion-emp-1" :aria-hidden="!isSp ? 'false' : 'true'">
                <CheckboxList
                    :namespace="'recovery-area-Map'"
                    :isSp="isSp"
                    :recoveryAreaCsvData="recoveryAreaCsvData"
                ></CheckboxList>
            </div>
        </div>
    </div>
</template>

<script>
import {themeStr} from '../../../js/common/theme';
import {accordion} from '../../../js/common/component/accordion';
import CheckboxList from './CheckboxList.vue';
export default {
    props: [
        'recoveryAreaCsvData',
    ],
    data() {
        return {
            isSp: window.matchMedia(`(max-width: ${themeStr.max.m})`).matches,
            isAddListener: false,
        }
    },
    mounted() {
        this.mediaQueryList = window.matchMedia(`(max-width: ${themeStr.max.m})`);
        this.mediaQueryList.addListener(this.updateMatchStatus);
        accordion();
        this.isAddListener = true;
    },
    beforeDestroy() {
        this.mediaQueryList.removeListener(this.updateMatchStatus);
    },
    watch: {
        isSp(newVal, oldVal) {
            const previousPc = oldVal === true;
            !this.isAddListener && previousPc && accordion();
            const value = previousPc ? 'block' : 'none';
            document.getElementById('accordion-emp-1-content').style.display = value;
        }
    },
    methods: {
        updateMatchStatus(e) {
            this.isSp = e.matches;
        }
    },
    components: {
        CheckboxList
    }
}
</script>
