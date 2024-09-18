<template>
<fade-transition>
  <div @click="onModalClick" :style="styleObj">
    <div class="modaal-wrapper modaal-inline c-Modal">
      <div class="modaal-outer-wrapper">
        <div class="modaal-inner-wrapper js-modal-closer">
          <div class="guide-trouble-check_Modal modaal-container">
            <div tabindex="0" @focus.prevent="focusCloseButton"></div>
            <div class="modaal-content modaal-focus" 
              :aria-hidden="ariaHidden" 
              aria-label="Dialog Window - Close (Press escape to close)" 
              role="dialog" 
            >
              <div class="modaal-content-container guide-trouble-check_Modal-container" role="document">
                <slot></slot>
              </div>
            </div>
            <button 
              type="button" 
              class="modaal-close guide-trouble-check_Modal-close js-modal-closer" 
              aria-label="Close (Press escape to close)"
              ref="closeButton"
            >
              <span>Close</span>
            </button>
            <div tabindex="0" @focus.prevent="focusCloseButton"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modaal-overlay" style="background: rgb(77, 77, 77); opacity: 0.5;"></div>
  </div>
</fade-transition>
</template>

<script lang="js">
import FadeTransition from '../transitions/FadeTransition.vue'

/**
 * Use this component with v-show, not v-if.
 */
export default {
  name: 'TroubleCheckModal',
  components: {
    FadeTransition,
  },
  model: { prop: 'isOpen', event: 'change' },
  props: {
    isOpen: { type: Boolean, default: false, required: true },
  },
  computed: {
    proxyIsOpen: {
      get() { return this.isOpen },
      set(value) { this.$emit('change', value) },
    },
    ariaHidden() {
      return (!this.isOpen).toString()
    },
    styleObj() {
      return {
        pointerEvents: this.isOpen ? 'all' : 'none'
      }
    },
    modalFixClass() {
      return 'modaal-noscroll'
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler: 'onToggleOpen',
    }
  },
  methods: {
    onToggleOpen(isOpen) {
      if (isOpen) {
        window.addEventListener('keydown', this.onKeyDown)
        document.body.classList.add(this.modalFixClass)
      } else {
        window.removeEventListener('keydown', this.onKeyDown)
        document.body.classList.remove(this.modalFixClass)
      }
    },
    onModalClick(event) {
      const shouldCloseModal = event.target.classList.contains('js-modal-closer')
      if (shouldCloseModal) this.proxyIsOpen = false
    },
    focusCloseButton() {
      // Latch focus into the modal to prevent focus from moving to elements behind the overlay.
      this.$refs.closeButton.focus()
    },
    onKeyDown(event) {
      if (event.key.toLowerCase() === 'escape') this.proxyIsOpen = false
    },
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeyDown)
    document.body.classList.remove(this.modalFixClass)
  }
}
</script>