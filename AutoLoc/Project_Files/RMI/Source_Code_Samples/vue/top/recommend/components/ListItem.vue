<template>
    <div class="top-Carousel_Product-inner-box top-Carousel_Recommend">
        <a :href="linkPath"
            class="c-Card_Normal top-Carousel_Recommend-item">
            <div class="top-Carousel_Recommend-label top-Carousel_Recommend-label-new" v-if="summary.new_label">{{ summary.new_label }}</div>
            <div class="top-Carousel_Recommend-label top-Carousel_Recommend-label-discount" v-else-if="summary.discount_label">{{ summary.discount_label }}</div>
            <div class="top-Carousel_Recommend-label" v-else>キャンペーン対象</div>
            <div class="top-Carousel_Recommend-grid">
                <div class="top-Carousel_Recommend-img">
                    <img :src="imgPath" :alt="summary.product" width="80" height="73" loading="lazy">
                </div>
                <div class="top-Carousel_Recommend-info">
                    <div>
                        <p class="top-Carousel_Recommend-title">{{ summary.product }}</p>
                        <dl class="top-Carousel_Recommend-grid-price">
                            <dt>製品価格</dt>
                            <template v-if="isAppleState">
                                <dl v-if="summary.discount">
                                    <span class="top-Carousel_Recommend-price-strikethrough u-Weight_Bold">
                                        {{ displayDiscount }}
                                    </span>
                                    <span class="top-Carousel_Recommend-price-yen c-Txt_Cap">
                                        円~<span>{{ summary.discount_note }}</span>
                                    </span>
                                    <div class="c-Txt_Normal-m c-Txt_Emp-02">
                                        {{ displayPayment1 }}
                                        <span class="top-Carousel_Recommend-price-yen u-Adjust_Pl-0">円~</span>
                                    </div>
                                </dl>
                                <dl v-else class="c-Txt_Normal-m u-Weight_Bold">
                                    {{ displayPayment1 }}
                                    <span class="top-Carousel_Recommend-price-yen u-Adjust_Pl-0">
                                        円~
                                    </span>
                                </dl>
                            </template>
                            <template v-else>
                                <dl v-if="summary.strikethrough">
                                    <span class="top-Carousel_Recommend-price-strikethrough u-Weight_Bold">
                                        {{ displayStrikethrough }}
                                    </span>
                                    <span class="top-Carousel_Recommend-price-yen">円{{ summary.discount_note }}</span>
                                    <div class="c-Txt_Normal-m c-Txt_Emp-02">
                                        {{ displayPrice2 }}
                                        <span class="top-Carousel_Recommend-price-yen u-Adjust_Pl-0">円</span>
                                    </div>
                                </dl>
                                <dl v-else class="c-Txt_Normal-m u-Weight_Bold">
                                    {{ displayPrice2 }}
                                    <span class="top-Carousel_Recommend-price-yen u-Adjust_Pl-0">円</span>
                                </dl>
                            </template>
                        </dl>
                    </div>
                    <div class="top-Carousel_Recommend-campaign">
                        <p class="top-Carousel_Recommend-campaign-title">
                            <span class="c-Icon_Campaign-l"></span>
                            キャンペーン
                        </p>
                        <p class="top-Carousel_Recommend-point">
                            <span class="top-Carousel_Recommend-max-txt">{{ summary.cpn_txt1 }}</span>
                            <template v-if="isAppleState">
                                <span class="c-Txt_Emp-02 top-Carousel_Recommend-max-point">
                                    {{ displayPointbackNum }}
                                </span>
                            </template>
                            <template v-else>
                                <span class="c-Txt_Emp-02 top-Carousel_Recommend-max-point">
                                    {{ displayPointTotal }}
                                </span>
                            </template>
                            <span class="top-Carousel_Recommend-point-txt">{{ summary.cpn_txt2 }}</span>
                            <span class="c-Txt_Cap">
                                {{ summary.cpn_note }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>

export default {
    name: 'ListItem',
    props: ['summary'],
    data() {
        return {
            isAppleState: false,
            isPreOrder: false,
            path: {
                sitepath: '/',
            },
        }
    },
    created() {
        this.isAppleState = this.summary.product.indexOf('iPhone') != -1
    },
    computed: {
        imgPath() {
            const param =
            this.summary.update && this.summary.update.trim() !== ''
                ? `?${this.summary.update.trim()}`
                : ''
            return this.isAppleState
            ? `${this.path.sitepath}assets/img/product/iphone/${this.summary.directory.trim()}/rank-thumb.png${param}`
            : `${this.path.sitepath}assets/img/product/${this.summary.directory.trim()}/rank-thumb.png${param}`
        },
        linkPath() {
            return this.isAppleState
            ? `${this.path.sitepath}product/iphone/${this.summary.directory.trim()}/${this.summary.lid}`
            : `${this.path.sitepath}product/smartphone/${this.summary.directory.trim()}/${this.summary.lid}`
        },
        displayDiscount() {
            return (+this.summary.discount).toLocaleString()
        },
        displayPayment1() {
            return (+this.summary.payment1).toLocaleString()
        },
        displayStrikethrough() {
            return (+this.summary.strikethrough).toLocaleString()
        },
        displayPrice2() {
            return (+this.summary.price2).toLocaleString()
        },
        displayPointTotal() {
            return (+this.summary.pointtotal).toLocaleString()
        },
        displayPointbackNum() {
            return (+this.summary['top-carousel-pointback-num']).toLocaleString()
        },
    },
}
</script>
