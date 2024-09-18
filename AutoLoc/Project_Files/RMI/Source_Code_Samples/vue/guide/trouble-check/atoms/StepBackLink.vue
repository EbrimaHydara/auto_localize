<template>
  <a href="#" @click.prevent="onClick" class="btn c-Link_Txt-icon-front">
    <span class="c-Icon_Chevron-left"></span>ひとつ前の選択に戻る
  </a>
</template>

<script lang="js">
export default {
  name: 'TroubleCheckStepBackLink',
  props: {
    to: { type: String, default: '/', required: true },
  },
  methods: {
    onClick() {
      this.$emit('click')
      this.$router.push(this.to)
    }
  }
}
</script>