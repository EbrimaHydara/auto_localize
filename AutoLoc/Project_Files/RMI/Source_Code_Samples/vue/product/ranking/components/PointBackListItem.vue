<template>
  <dl class="product-ranking-Card_Data-price-item c-Txt_Emp-02">
    <dt style="font-size: 12px;">
      {{ preText }}<span style="font-size: 17px;">{{ point }}</span>ポイント{{ postText }}{{ note }}
    </dt>
    <dd>
      <span class="product-ranking-Card_Price-num">-{{ point }}</span>pt
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'PointBackListItem',
  props: [
    'point',
    'preText',
    'postText',
    'note',
  ],
}
</script>
