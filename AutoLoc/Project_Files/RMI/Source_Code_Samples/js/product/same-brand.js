import { device_top } from "../csv-data/device-top";
import { themeNum } from "../common/theme";

const sameBrand = document.getElementById('js-same-brand');
const locationPathName = location.pathname;
const dividedPath = locationPathName.split('/');
const deviceDirectory = dividedPath[3];
const deviceData = device_top;

const deviceBrand = deviceData.find(({directory}) => directory === deviceDirectory).brand;
const filteredList = deviceData.filter(data => data.brand === deviceBrand && data.directory !== deviceDirectory);

const listItem = (props) => {
    return `
        <a href="/product/smartphone/${props.directory}/?l-id=product_smartphone_${deviceDirectory}_brand_product_smartphone_${props.directory}" class="c-Card_Normal product-detail-Compare_Item">
            <div class="product-detail-Compare_Img u-Adjust_Align-center">
                <img src="/assets/img/product/${props.directory}/rank-thumb.png" alt="${props.product}">
            </div>
            <div class="product-detail-Compare_Txt u-Adjust_Mt-8 c-Txt_Emp-01">
                <p class="product-detail-Compare_Name">${props.product}</p>
            </div>
            <div class="u-Adjust_Mt-8">
                <p class="product-detail-Compare_Price"><span>${Number(props.price2).toLocaleString()}</span><span class="c-Txt_Normal-s">円</span></p>
            </div>
        </a>
    `;
};

const htmlLayout = () => {
    if(filteredList.length) {
        return `
            <div class="product-detail-Compare u-Adjust_Mt-48">
                <div class="product-detail-Compare_Wrapper">
                    <h2 class="c-Heading_Lv2">同じブランドの製品</h2>
                    <div class="c-Carousel product-detail-Compare_Wrap js-product-device-compare u-Adjust_Mt-16">
                        ${filteredList.map((item) => listItem(item)).join("")}
                    </div>
                    <div class="c-Carousel_Nav-v2-wrap">
                        <div class="c-Carousel_Nav-v2"></div>
                        <div class="c-Carousel_Nav-v2-bar"></div>
                    </div>
                </div>
            </div>
            <div class="u-Adjust_Mt-32"><a href="/product/smartphone/?l-id=product_smartphone_${deviceDirectory}_brand_product_smartphone" class="c-Link_Txt-inline">他のAndroid製品を見る<span class="c-Icon_Chevron-right"></span></a></div>
        `
    } else {
        return `
            <div class="u-Adjust_Mt-sp-24"><a href="/product/smartphone/?l-id=product_smartphone_${deviceDirectory}_brand_product_smartphone" class="c-Link_Txt-inline">他のAndroid製品を見る<span class="c-Icon_Chevron-right"></span></a></div>
        `
    }
}

sameBrand.innerHTML = htmlLayout();

const deviceCompareCarousel = $(`.js-product-device-compare`);
deviceCompareCarousel.each(function() {
    let $self = $(this);
    const carouselConfig = {
        respondTo: 'min',
        slidesToShow: 5,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
        infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
    };
    $self.slick($.extend({}, carouselConfig, {
        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
    }));
});
deviceCompareCarousel.slick("slickSetOption", "slidesToScroll", 5, true);
deviceCompareCarousel.slick('slickSetOption', "responsive", [
    {
        breakpoint: themeNum.max.m,
        settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            dotsClass: 'slick-dots c-Carousel_Dots-v2',
        }
    },
    {
        breakpoint: themeNum.max.s,
        settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
            dots: true,
            dotsClass: 'slick-dots c-Carousel_Dots-v2',
        }
    }], true
);
