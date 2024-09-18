<template>
  <accordion
    v-model="proxyIsOpen"
    tag="li"
    :label-id="accordionLabelId"
    :control-id="accordionControlId"
    @click="$emit('toggle-open', id)"
  >
    <template v-slot:trigger>{{heading}}</template>
    <template v-slot:content>
      <!-- Use v-html to inject html into a slot.
        It is unavoidable that it adds an extra div nested.) -->
      <div v-html="body" id="js-rat-dynamic"></div>
      <div class="u-Adjust_Mt-16 guide-trouble-check_BtnWrap">
        <div>
          <button class="c-Btn_Secondly guide-trouble-check_Btn-solve"
            :disabled="!canClickButtons"
            :aria-disabled="ariaDisabled"
            @click.prevent="emitResult('resolved')">
            <span>解決できた</span>
          </button>
        </div>
        <div>
          <p>
            <a v-if="hasNext"
            href="#"
              class="c-Link_Txt-icon-front"
              :aria-disabled="ariaDisabled"
              @click.prevent="emitResult('pending')">
              <span class="c-Icon_Arrow-down-l"></span>次の対処方法を見る
            </a>
            <a v-else
              href="#"
              class="c-Link_Txt-icon-front"
              :aria-disabled="ariaDisabled"
              @click.prevent="emitResult('unresolved')">
              <span class="c-Icon_Arrow-down-l"></span>解決できない場合はお問い合わせ
            </a>
          </p>
        </div>
      </div>
    </template>
  </accordion>
</template>

<script lang="js">
import Accordion from './Accordion.vue'

export default {
  name: 'TroubleCheckSolution',
  components: {
    Accordion,
  },
  model: { prop: 'isOpen', event: 'change' },
  props: {
    index: { type: Number, default: 0, required: true },
    id: { type: Number, default: 0, required: true },
    errorCode: { type: String, default: '', required: true },
    content: { type: String, default: '', required: true },
    isOpen: { type: Boolean, default: false, required: true },
    hasNext: { type: Boolean, default: true, required: true },
    isDebugMode: { type: Boolean, default: false }
  },
  data: () => ({
    canClickButtons: true,
    linksHasRat: [],
  }),
  computed: {
    proxyIsOpen: {
      get() { return this.isOpen },
      set(value) { this.$emit('change', value) },
    },
    accordionLabelId() {
      return `accordion-${this.index}`
    },
    accordionControlId() {
      return `accordion-content-${this.index}`
    },
    headingMatcher() {
      return /<h[1-3][\s\S]*>([\s\S]+)<\/h[1-3]>/m
    },
    heading() {
      const [,heading] = this.content.match(this.headingMatcher) ?? []
      const number = this.isDebugMode ? `File: ${this.id} ` : `${this.index + 1}. `
      return number + heading?.trim() ?? ''
    },
    body() {
      const body = this.content.replace(this.headingMatcher, '')
      return body?.trim() ?? ''
    },
    ariaDisabled() {
      return this.canClickButtons ? 'false' : 'true'
    }
  },
  methods: {
    emitResult(type) {
      this.canClickButtons = false
      this.$emit('result', { type, id: this.id, index: this.index, errorCode: this.errorCode })
    },
    dynamicRatBind(target) {
      this.linksHasRat = target;
      this.linksHasRat.forEach(link => {
        const targetDOM = RAT.$Selector(link);
        RAT.bind(targetDOM);
      });
    }
  },
  mounted() {
    this.dynamicRatBind(document.querySelectorAll('#js-rat-dynamic [data-ratid]'));
  }
}
</script>
