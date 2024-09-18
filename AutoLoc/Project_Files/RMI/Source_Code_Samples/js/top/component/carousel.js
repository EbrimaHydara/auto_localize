import Vue from 'vue';
import * as Filters from '../../../vue/common/filters.js';
import { themeNum } from '../../common/theme';
import RecommendProductList from '../../../vue/top/recommend/ProductList.vue';
import { addClassBasedOnSlideCount } from "../../common/component/carousel";

export const carousel = () => {
    // Carousel Benefit
    const topCarouselBenefit = $('.js-top-Carousel-benefit');

    const carouselBenefit = () => {
        topCarouselBenefit.each(function () {
            let $self = $(this);
            $self.on('init breakpoint', (_, slick) => {
                addClassBasedOnSlideCount(slick);
            });
            const carouselConfig = {
                respondTo: 'min',
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: true,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
                infinite: true,
                appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
                appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
                prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_campaign-banner_left" data-ratevent="click" data-ratparam="all">Previous</button>',
                nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_campaign-banner_right" data-ratevent="click" data-ratparam="all">Next</button>',
                customPaging: function(slider, i) {
                    let num_dot = String(i + 1).padStart(2, '0')
                    return $('<button type="button" data-ratid="top_campaign-banner_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
                },
            };
            $self.slick($.extend({}, carouselConfig, {
                lazyLoad: 'progressive',
                responsive: [
                    {
                        breakpoint: themeNum.max.m,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: themeNum.max.s,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dotsClass: 'slick-dots c-Carousel_Dots-v2',
                            appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                            appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                        }
                    },
                ]
            }));
        });
        const reBindRat = $('.js-top-Carousel-benefit + .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
        if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
            RAT.bind(reBindRat);
        }
    }

    // Carousel Campaign
    const topCarouselCampaign = $('.js-top-Carousel-campaign');
    const topCarouselCampaignNormal = $('.js-top-Carousel-campaign-normal');
    const topCarouselCampaignAndroid = $('.js-top-Carousel-campaign-android');

    if (navigator.userAgent.indexOf('Android') > 0) {
        topCarouselCampaignNormal.css('display', 'none');
        topCarouselCampaignAndroid.css('display', 'block');
    }

    const carouselCampaign = () => {
        topCarouselCampaign.each(function () {
            let $self = $(this);
            $self.on('init breakpoint', (_, slick) => {
                addClassBasedOnSlideCount(slick);
            });
            const carouselConfig = {
                respondTo: 'min',
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: true,
                dots: true,
                dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
                infinite: true,
                appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
                appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
                prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_js_left" data-ratevent="click" data-ratparam="all">Previous</button>',
                nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_js_right" data-ratevent="click" data-ratparam="all">Next</button>',
                customPaging: function(slider, i) {
                    let num_dot = String(i + 1).padStart(2, '0')
                    return $('<button type="button" data-ratid="top_js_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
                },
            };
            $self.slick($.extend({}, carouselConfig, {
                lazyLoad: 'progressive',
                responsive: [
                    {
                        breakpoint: themeNum.max.m,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                ]
            }));
        });
        const reBindRat = $('#js-top-Campaign .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
        if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
            RAT.bind(reBindRat);
        }
    }

    const carouselProduct = () => {
        // Top Product Carousel (Apple Watch)
        const topCarouselProductWatch = $('.js-top-Carousel-product-watch');

        topCarouselProductWatch.each(function () {
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
                prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button" data-ratid="top_p-carousel-aw_left" data-ratevent="click" data-ratparam="all">Previous</button>',
                nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button" data-ratid="top_p-carousel-aw_right" data-ratevent="click" data-ratparam="all">Next</button>',
                customPaging: function(slider, i) {
                    let num_dot = String(i + 1).padStart(2, '0')
                    return $('<button type="button" data-ratid="top_p-carousel-aw_indicator' + num_dot + '" data-ratevent="click" data-ratparam="all" />');
                },
            };
            $self.slick($.extend({}, carouselConfig, {
                lazyLoad: 'progressive',
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
        const reBindRatAw = $('.js-top-Carousel-product-watch + .c-Carousel_Nav-v2-wrap').find('[data-ratId]');
        if (typeof window.RAT === 'object' && typeof window.RAT.bind === 'function') {
            RAT.bind(reBindRatAw);
        }


        Object.keys(Filters).forEach(key => {
            Vue.filter(key, Filters[key]);
        });

        new Vue({
            render: h => h(RecommendProductList)
        }).$mount('#js-recommended-product-list');
    }

    // IntersectionObserver
    const benefitSection = document.getElementById('js-top-Benefit');
    const campaignSection = document.getElementById('js-top-Campaign');
    const productSection = document.getElementById('js-top-Product');
    const elements = [benefitSection, campaignSection, productSection];
    const options = {
        rootMargin: "50px",
        threshold: 0
    };
    let slickObservers = [];

    const checkIntersecting = i => ([entry]) => {
        if (entry.isIntersecting) {
            if (i === 0) {
                carouselBenefit();
                slickObservers[i].disconnect();
            }
            if (i === 1) {
                carouselCampaign();
                slickObservers[i].disconnect();
            }
            if (i === 2) {
                carouselProduct();
                slickObservers[i].disconnect();
            }
        }
    }

    const slickIntersection = (element, i) => {
        const observer = new IntersectionObserver(checkIntersecting(i), options);
        observer.observe(element);
        slickObservers[i] = observer;
    }

    const slickIntersections = () =>
        elements.forEach((element, index) => slickIntersection(element, index));

    slickIntersections();
};
