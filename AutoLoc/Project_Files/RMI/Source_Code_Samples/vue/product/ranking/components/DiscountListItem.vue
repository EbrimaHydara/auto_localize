<template>
    <div>
        <dl class="product-ranking-Card_Data-price-item c-Txt_Emp-02">
            <dt>
                プランセット値引き<span style="font-size: 12px;">{{ rankingDiscountNote }}</span>
            </dt>
            <dd>
                <span class="product-ranking-Card_Price-num">-{{ discountPrice }}</span>円
            </dd>
        </dl>
        <p v-if="mnp" class="c-Txt_Cap" style="margin-top: -4px;">※値引きは乗り換え（MNP）の場合のみ。</p>
    </div>
</template>

<script>
export default {
  name: 'DiscountListItem',
  props: [
    'discountPrice',
    'rankingDiscountNote',
    'mnp',
  ],
}
</script>
