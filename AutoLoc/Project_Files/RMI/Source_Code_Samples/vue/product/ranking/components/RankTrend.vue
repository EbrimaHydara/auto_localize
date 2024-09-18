<template>
  <div :class="trendClass"><span :class="iconClass"></span>{{ trendText }}</div>
</template>

<script>
export default {
  name: 'RankTrend',
  props: [
    'rankingThisMonth',
    'rankingLastMonth'
  ],
  computed: {
    trendClass() {
      const ns = 'product-ranking-Card_Rank-';
      return +this.rankingThisMonth < +this.rankingLastMonth
        ? ns + 'up'
        : +this.rankingThisMonth > +this.rankingLastMonth
        ? ns + 'down'
        : ns + 'stay'
    },
    trendText() {
      return +this.rankingThisMonth < +this.rankingLastMonth
        ? 'UP'
        : +this.rankingThisMonth > +this.rankingLastMonth
        ? 'Down'
        : 'Stay'
    },
    iconClass() {
      return +this.rankingThisMonth < +this.rankingLastMonth
        ? 'c-Icon_Arrow-up-l'
        : +this.rankingThisMonth > +this.rankingLastMonth
        ? 'c-Icon_Arrow-down-l'
        : 'c-Icon_Arrow-right-l'
    },
  },
}
</script>
