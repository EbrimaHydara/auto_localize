<template>
  <div class="c-Carousel top-Carousel_Product_Wrap js-top-Carousel-product-iphone">
    <ListItem
      v-for="(device, i) in productData"
      :key="i"
      :summary="device"
    />
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue'
import { themeNum } from '../../../js/common/theme.js'
import { device_iphone } from '../../../js/csv-data/device-iphone'
import { addClassBasedOnSlideCount } from "../../../js/common/component/carousel";

export default {
  components: { ListItem },
  data() {
    return {
      productData: [],
    }
  },
  created() {
    this.productData = device_iphone;
  },
  mounted() {
    const topCarouselProductIphone = $('.js-top-Carousel-product-iphone');

    topCarouselProductIphone.each(function() {
        let $self = $(this);
        $self.on('init breakpoint', (_, slick) => {
            addClassBasedOnSlideCount(slick);
        });
        const carouselConfig = {
            respondTo: 'min',
            slidesToScroll: 2,
            slidesToShow: 2,
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
            infinite: true,
            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
            prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_p-carousel-ip_left" data-ratevent="click" data-ratparam="all">Previous</button>',
            nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_p-carousel-ip_right" data-ratevent="click" data-ratparam="all">Next</button>',
            customPaging: function(slider, i) {
                let num_dot = String(i + 1).padStart(2, '0')
                return $('<button type="button" data-ratid="top_p-carousel-ip_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
            },
        };
        $self.slick($.extend({}, carouselConfig, {
            responsive: [
                {
                    breakpoint: themeNum.max.s,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        dotsClass: 'slick-dots c-Carousel_Dots-v2',
                        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                    }
                }
            ]
        }));
    });
    const reBindRat = $('.js-top-Carousel-product-iphone + .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
    if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
        RAT.bind(reBindRat);
    }
  },
}
</script>
