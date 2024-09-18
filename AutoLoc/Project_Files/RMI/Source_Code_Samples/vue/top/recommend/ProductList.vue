<template>
    <div class="c-Carousel top-Carousel_Product_Wrap js-top-Carousel-product">
      <ListItem
        v-for="(device, i) in productData"
        :key="i"
        :summary="device"
      />
    </div>
  </template>

  <script>
  import ListItem from './components/ListItem.vue'
  import { themeNum } from '../../../js/common/theme'
  import { device_top } from '../../../js/csv-data/device-top'
  import { device_osusume } from '../../../js/csv-data/device-osusume'
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
        const merggedIphoneDate = this.createData(device_osusume, device_iphone)
        const merggedAndoroid = this.createData(device_osusume, device_top)
        const sortAllData = this.sortePriority([
        ...merggedAndoroid,
        ...merggedIphoneDate,
        ])
      this.productData = sortAllData;
    },
    methods: {
        createData( recommendData, productsData ) {
            const mergedData = []
            recommendData.forEach(item => {
                for (const data of productsData) {
                    if (item.product.trim() === data.product.trim()) {
                        mergedData.push({ ...data, ...item })
                    }
                }
            })
            return mergedData
        },
        sortePriority(rankingData) {
            return rankingData.sort((a, b) => a['priority'] - b['priority'])
        }
    },
    mounted() {
      const topCarouselProductSmartphone = $('.js-top-Carousel-product');
      topCarouselProductSmartphone.on('init breakpoint', (_, slick) => {
          addClassBasedOnSlideCount(slick);
      });
      const carouselConfig = {
          respondTo: 'min',
              slidesToShow: 3,
              arrows: true,
              dots: true,
              dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
              infinite: true,
              appendArrows: topCarouselProductSmartphone.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
              appendDots: topCarouselProductSmartphone.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
              prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_p-carousel-an_left" data-ratevent="click" data-ratparam="all">Previous</button>',
              nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_p-carousel-an_right" data-ratevent="click" data-ratparam="all">Next</button>',
              customPaging: function(slider, i) {
                  let num_dot = String(i + 1).padStart(2, '0')
                  return $('<button type="button" data-ratid="top_p-carousel-an_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
          },
      };

      topCarouselProductSmartphone.slick($.extend({}, carouselConfig, {
          slidesToScroll: 3,
          responsive: [
              {
                  breakpoint: themeNum.max.m,
                  settings: {
                      slidesToScroll: 2,
                      slidesToShow: 2
                  }
              }
          ]
      }));
      const reBindRat = $('.js-top-Carousel-product + .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
      if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
          RAT.bind(reBindRat);
      }
    }
  }
  </script>
