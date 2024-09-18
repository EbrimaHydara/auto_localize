<template>
  <div class="c-Accordion" :is="tag">
    <div>
      <button 
        class="c-Accordion_Trigger" 
        :id="labelId" 
        :aria-expanded="ariaExpanded" 
        :aria-controls="controlId"
        @click="toggleOpen"
      >
        <span class="c-Icon_Chevron-right c-Accordion_Arrow"></span>
        <slot name="trigger"></slot>
      </button>
    </div>
    <collapse-transition>
      <div
        v-show="isOpen"
        class="c-Accordion_Panel faq-Labellist_AccordionPanel" 
        role="region" 
        :id="controlId"
        :aria-labelledby="labelId" 
        :aria-hidden="ariaHidden"
      >
        <slot name="content"></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script lang="js">
import CollapseTransition from '../transitions/CollapseTransition.vue'

export default {
  name: 'TroubleCheckAccordion',
  components: {
    CollapseTransition,
  },
  model: { prop: 'isOpen', event: 'change' },
  props: {
    tag:  { type: String, default: 'div', required: false },
    isOpen: { type: Boolean, default: false, required: true },
    labelId: { type: String, default: 0, required: true },
    controlId: { type: String, default: 0, required: true },
  },
  computed: {
    proxyIsOpen: {
      get() { return this.isOpen },
      set(value) { this.$emit('change', value) },
    },
    ariaExpanded() {
      return this.isOpen.toString()
    },
    ariaHidden() { 
      return (!this.isOpen).toString()
    },
  },
  methods: {
    async toggleOpen() {
      this.proxyIsOpen = !this.proxyIsOpen
      await this.$nextTick()  
      this.$emit('click', { 
        labelId: this.labelId, 
        controlId: this.controlId, 
        isOpen: this.proxyIsOpen 
      })
    }
  }
}
</script>