<template>
    <div v-if="isSpecPage">
        <div v-for="(specAccordion, i) in specPageDtData" :key="i"
            :class="{ 'u-Adjust_Mt-24': i === 0, 'c-Accordion': true }">
            <button :id="`accordion-${i}`" class="c-Accordion_Trigger js-Accordion_Trigger"
                :aria-expanded="i === 0 ? 'true' : 'false'" :aria-controls="`accordion-content-${i}`">
                <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>{{ specAccordion.buttonText }}
            </button>
            <div :id="`accordion-content-${i}`" class="c-Accordion_Panel js-Accordion_Panel" role="region"
                :aria-labelledby="`accordion-${i}`" :aria-hidden="i !== 0 ? 'true' : 'false'">
                <template v-if="specAccordion.buttonText === 'カメラ'">
                    <div v-for="(spec, key, j) in specAccordion.data" :key="key"
                        v-if="!!specCsvData[key] || key === 'mainCamera' || key === 'selfieCamera'">
                        <p :class="{ 'u-Adjust_Pt-32': j !== 0, 'c-Txt_Emp-01': true }">{{ spec.text }}</p>
                        <dl class="c-Dl u-Adjust_Mt-16">
                            <div v-for="(subSpec, subKey, k) in spec.subData" :key="subKey"
                                :class="{ 'u-Adjust_Mt-16': k !== 0 }" v-if="!!specCsvData[subKey]">
                                <dt v-html="getDtSpecPage(subKey, subSpec)"></dt>
                                <dd>{{ specCsvData[subKey] }}</dd>
                            </div>
                        </dl>
                    </div>
                </template>
                <template v-else>
                    <dl class="c-Dl">
                        <div v-for="(spec, key) in specAccordion.data" :key="key"
                            v-if="!!specCsvData[key] || key === 'Display' || key === 'Speed'">
                            <template v-if="key === 'Display' || key === 'Speed'">
                                <dt v-html="getDtSpecPage(key, spec.definitionTerm)"></dt>
                                <dd>
                                    <p v-for="(subSpec, subKey, j) in spec.subData" :key="subKey"
                                        :class="{ 'u-Adjust_Mt-16': j !== 0 }" v-if="!!specCsvData[subKey]">
                                        {{ subSpec }}<br>
                                        {{ specCsvData[subKey] }}
                                    </p>
                                </dd>
                            </template>
                            <template v-else>
                                <dt v-html="getDtSpecPage(key, spec)"></dt>
                                <dd>{{ specCsvData[key] }}</dd>
                            </template>
                        </div>
                    </dl>
                </template>
            </div>
        </div>
        <ul v-if="noteSpec" class="u-Adjust_Mt-16 c-Txt_Cap">
            <li v-for="(note, i) in noteSpec" :key="i" v-html="note"></li>
        </ul>
    </div>
    <div v-else>
        <dl class="c-Dl">
            <div v-for="(spec, key) in specInPageData" :key="key" v-if="!!specCsvData[key] || key === 'Display'">
                <template v-if="key === 'Display'">
                    <dt v-html="getDtProductPage(key, spec.definitionTerm)"></dt>
                    <dd>
                        <p v-for="(subSpec, subKey, i) in spec.subData" :key="subKey" :class="{ 'u-Adjust_Mt-16': i !== 0 }"
                            v-if="!!specCsvData[subKey]">
                            {{ subSpec }}<br>
                            {{ specCsvData[subKey] }}
                        </p>
                    </dd>
                </template>
                <template v-else>
                    <dt v-html="getDtProductPage(key, spec)"></dt>
                    <dd>{{ specCsvData[key] }}</dd>
                </template>
            </div>
        </dl>
        <ul v-if="noteProduct" class="u-Adjust_Mt-16 c-Txt_Cap">
            <li v-for="(note, i) in noteProduct" :key="i" v-html="note"></li>
        </ul>
    </div>
</template>

<script>
import { specPageDtData, specInPageData } from '../../../../js/product/spec/component/spec-dt-data';

export default {
    name: 'SpecDtList',
    props: {
        isSpecPage: Boolean,
        specCsvData: Object,
    },
    data() {
        return {
            specPageDtData,
            specInPageData,
        };
    },
    computed: {
        noteSpecKey() {
            return this.specCsvData?.noteSpecKey?.split('\n');
        },
        noteProductKey() {
            return this.specCsvData?.noteProductKey?.split('\n');
        },
        noteSpec() {
            return (this.specCsvData?.noteSpec || null)?.split('\n').map((v, i) => `※${i + 1} ${this.replaceLinksInText(v)}`);
        },
        noteProduct() {
            return (this.specCsvData?.noteProduct || null)?.split('\n').map((v, i) => `※${i + 1} ${this.replaceLinksInText(v)}`);
        }
    },
    methods: {
        isIncludedNoteSpecKey(key) {
            return this.noteSpecKey?.includes(key);
        },
        isIncludedNoteProductKe(key) {
            return this.noteProductKey?.includes(key);
        },
        getDtSpecPage(key, spec) {
            return this.isIncludedNoteSpecKey(key) ? `${spec}<span class="c-Txt_Cap">※${this.noteSpecKey.indexOf(key) + 1}</span>` : spec;
        },
        getDtProductPage(key, spec) {
            return this.isIncludedNoteProductKe(key) ? `${spec}<span class="c-Txt_Cap">※${this.noteProductKey.indexOf(key) + 1}</span>` : spec;
        },
        linkToAnchorHTML(linkText, url) {
            const isHttp = url.startsWith('http://') || url.startsWith('https://');
            const linkTypeClass = isHttp ? 'c-Link_Txt-inline' : 'c-Link_Txt';
            const targetAttribute = isHttp ? ' target="_blank"' : '';
            const linkContent = isHttp ? `${linkText}<span class="c-Icon_New-window-l"></span>` : linkText;
            return `<a href="${url}" class="${linkTypeClass}"${targetAttribute}>${linkContent}</a>`
        },
        replaceLinksInText(text) {
            const regex = /\[([^\]]+),[\s\u3000]*([^\]]+)\]/g;
            return text.replace(regex, (_, linkText, url) => this.linkToAnchorHTML(linkText, url))
        },
    },
}
</script>
