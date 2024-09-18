<template>
    <div id="mapLegend" class="recovery-area-Fullmap_Legend">
        <ul v-if="!isSp">
            <li class="recovery-area-Fullmap_Legend-active">{{ legends.activeArea }}</li>
            <li class="recovery-area-Fullmap_Legend-partner">{{ legends.partnerArea }}</li>
            <li class="recovery-area-Fullmap_Legend-inactive">{{ legends.inactiveArea }}</li>
            <li class="recovery-area-Fullmap_Legend-partner-inactive">{{ legends.inactivePartnerArea }}</li>
        </ul>
        <div id="show-list">
            <a v-show="isSp" href="#modal1" class="js-Modal c-Link_Txt-icon-front"><span class="c-Icon_Zoom-in-l"></span>凡例を確認する</a>
            <div id="modal1" class="recovery-area-Fullmap_Modal">
                <div class="recovery-area-Fullmap_Legend-modal">
                    <ul v-show="isSp">
                        <li class="recovery-area-Fullmap_Legend-active">{{ legends.activeArea }}</li>
                        <li class="recovery-area-Fullmap_Legend-partner">{{ legends.partnerArea }}</li>
                        <li class="recovery-area-Fullmap_Legend-inactive">{{ legends.inactiveArea }}</li>
                        <li class="recovery-area-Fullmap_Legend-partner-inactive">{{ legends.inactivePartnerArea }}</li>
                    </ul>
                    <CheckboxList
                        :namespace="'recovery-area-Fullmap'"
                        :isShow="isShow"
                        :isSp="isSp"
                        :recoveryAreaCsvData="recoveryAreaCsvData"
                    ></CheckboxList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {themeStr} from '../../../js/common/theme';
import {modal} from '../../../js/common/component/modal';
import CheckboxList from './CheckboxList.vue';
export default {
    props: [
        'recoveryAreaCsvData',
        'legends',
    ],
    data() {
        return {
            isSp: window.matchMedia(`(max-width: ${themeStr.max.m})`).matches,
            isShow: true,
            isAddListener: false,
        }
    },
    mounted() {
        this.mediaQueryList = window.matchMedia(`(max-width: ${themeStr.max.m})`);
        this.mediaQueryList.addListener(this.updateMatchStatus);
        modal();
        this.isAddListener = true;
    },
    beforeDestroy() {
        this.mediaQueryList.removeListener(this.updateMatchStatus);
    },
    watch: {
        isSp(newVal, oldVal) {
            const previousPc = oldVal === true;
            !this.isAddListener && previousPc && modal();
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
