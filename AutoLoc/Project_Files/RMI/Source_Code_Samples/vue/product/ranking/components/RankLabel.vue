<template>
  <div :class="rankLabelClass">
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.14299 11L2.69449 6.082L4.41899 7.3135L5.25899 7.914L5.83199 7.0545L7.99999 3.8025L10.168 7.0545L10.7405 7.914L11.581 7.3135L13.3055 6.082L12.857 11H3.14299ZM11 6.5L8 2L5 6.5L1.5 4L2.23 12H2.5H3.2345H12.7655H13.5H13.77L14.5 4L11 6.5Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.583 14L3.41653 13.9955L3.32553 13H2.32153L2.42053 14.087C2.46553 14.6035 2.89803 15 3.41703 15H12.583C13.102 15 13.5345 14.6035 13.5795 14.087L13.6785 13H12.6745L12.583 14Z" fill="white"/>
    </svg>
    <span>{{ ranking }}</span>位
  </div>
</template>

<script>
export default {
  name: 'RankLabel',
  props: [ 'ranking' ],
  computed: {
    rankLabelClass() {
      const rankingNum = /^[1-3]$/.test(this.ranking) ? this.ranking : 'other';

      return 'product-ranking-Card_Rank-' + rankingNum
    },
  }
}
</script>
