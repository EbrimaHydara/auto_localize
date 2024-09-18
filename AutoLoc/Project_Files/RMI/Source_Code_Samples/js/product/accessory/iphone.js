import { themeNum } from "../../common/theme";
import { addClassBasedOnSlideCount } from "../../common/component/carousel";
const mainConfig = {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: true,
};

const colorlength = $('.js-color').length;

if(colorlength > 0) {
	for ( let i = 0; i <= colorlength; i++ ) {
		let mainSlick = $(`.js-main${i}`).not('.slick-initialized').slick(mainConfig);

		$(`.js-color${i}`).on('click', () => {
			$('.js-color').attr('aria-current', 'false');
			$(`.js-color${i}`).attr('aria-current', 'true');

			$('.accessory-detail-Hero_Main-thumbnail-iphone').removeClass('is-open');
			$(`.thumbnail${i}`).addClass('is-open');

			$('.accessory-detail-Hero_Main-accessory').attr('aria-hidden', 'true');
			$(`.js-main${i}`).attr('aria-hidden', 'false');
			mainSlick.slick('unslick');
			mainSlick.not('.slick-initialized').slick(mainConfig);
			$('.accessory-detail-Hero_Main-accessory').slick('slickGoTo', 0);
		});

		$(`.thumbnail${i} .thumbnail-item`).on('click', (event) => {
			const index = $(`.thumbnail${i} .thumbnail-item`).index($(event.currentTarget));
			$('.accessory-detail-Hero_Main-accessory').slick('slickGoTo', index);
		});
	}
} else {
	$('.js-accessories-main').slick(mainConfig);

	$(`.thumbnail1 .thumbnail-item`).on('click', (event) => {
		const index = $(`.thumbnail1 .thumbnail-item`).index($(event.currentTarget));
		$('.accessory-detail-Hero_Main-accessory').slick('slickGoTo', index);
	});
}

// recommend carousel
const accessoryCarousel = $('.js-accessory-detail-Carousel-product');

accessoryCarousel.each(function() {
	let $self = $(this);
    $self.on('init breakpoint', (_, slick) => {
        addClassBasedOnSlideCount(slick);
    });
	const carouselConfig = {
		respondTo: 'min',
		slidesToShow: 3,
        slidesToScroll: 3,
		arrows: true,
		dots: true,
        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
		infinite: true,
        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
	};
    $self.slick($.extend({}, carouselConfig, {
        responsive: [
            {
                breakpoint: themeNum.max.m,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
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

// Modal Setting
$('.js-video').modaal({
	background: '#505050',
	custom_class: 'c-Modal',
	overlay_opacity: 0.8,
	type: 'video'
});

(function($){
    $(function() {
        const my_path = location.pathname;
				let page_name;

				// csvで管理できないので必要
				page_name = ['apple-rm213005'];

        for (let i = 0, len = page_name.length; i < len; i++) {
            if (my_path.indexOf(page_name[i]) > 0) {
                $('.js-price-area').html('<p class="c-Txt_Normal-m c-Txt_Emp-01"><span class="accessory-detail-Price_Font-color" style="background: #21252C"></span>ブラック / <span class="accessory-detail-Price_Font-color" style="background: #FAFAFF;border: 1px solid #E0E0E0;"></span>ホワイト / <span class="accessory-detail-Price_Font-color" style="background: #f2d6cb"></span>ピンクサンド</p><div class="l-Media_Grid-small u-Adjust_Mt-16 accessory-detail-Price_Grid u-Adjust_Mt-16">  <div class="accessory-detail-Price_Method accessory-detail-Price_Light-method" style="text-align: left;">一括払い</div>  <div class="accessory-detail-Price_Practically-content">    <div class="c-Txt_Normal-m u-Adjust_Align-right accessory-detail-Price_Font-bold"><span class="accessory-detail-Price_Practically-txt">価格</span><span class="accessory-detail-Price_Practically-num accessory-detail-Price_Font-normal">4,180</span><span class="c-Txt_Normal-ss accessory-detail-Price-yen">円</span></div><div class="accessory-detail-Price_Method-detail-primary accessory-detail-Price_Light-border-bottom accessory-detail-Price_Grid-line"></div></div></div><div class="l-Media_Grid-small accessory-detail-Price_Grid"><div class="accessory-detail-Price_Method accessory-detail-Price_Light-method" style="text-align: left;">分割払い<br class="accessory-detail-Layout_PC"><span  class="accessory-detail-Layout_text">（my 楽天モバイルで購入時の分割価格）</span></div><div><div class="accessory-detail-Price_Method-detail-secondary accessory-detail-Price_Grid-split"><div class="accessory-detail-Price_Method-detail-secondary-inner"><div class="accessory-detail-Price_Method-detail-secondary-item"><div>24回払い<sub>※</sub></div><div><span class="accessory-detail-Price_Num">174</span>円/月</div></div><div class="accessory-detail-Price_Method-detail-secondary-item"><div>48回払い<sub>※</sub> （楽天カードのみ）</div><div><span class="accessory-detail-Price_Num">87</span>円/月</div></div></div><p class="accessory-detail-Price_Recomend accessory-detail-Price_Light-recomend u-Adjust_Mt-8"><span>ご購入は楽天カードがオススメ！</span>楽天カードなら分割手数料0円！</p></div></div></div><p class="c-Txt_Normal-m c-Txt_Emp-01 u-Adjust_Mt-56"><span class="accessory-detail-Price_Font-color" style="background: #31475e"></span>アビスブルー</p><div class="l-Media_Grid-small u-Adjust_Mt-16 accessory-detail-Price_Grid u-Adjust_Mt-16"><div class="accessory-detail-Price_Method accessory-detail-Price_Light-method" style="text-align: left;">一括払い</div><div class="accessory-detail-Price_Practically-content"><div class="c-Txt_Normal-m u-Adjust_Align-right accessory-detail-Price_Font-bold"><span class="accessory-detail-Price_Practically-txt">価格</span><span class="accessory-detail-Price_Practically-num accessory-detail-Price_Font-normal">5,181</span><span class="c-Txt_Normal-ss accessory-detail-Price-yen">円</span></div><div class="accessory-detail-Price_Method-detail-primary accessory-detail-Price_Light-border-bottom accessory-detail-Price_Grid-line"></div></div></div><div class="l-Media_Grid-small accessory-detail-Price_Grid"><div class="accessory-detail-Price_Method accessory-detail-Price_Light-method" style="text-align: left;">分割払い<br class="accessory-detail-Layout_PC"><span  class="accessory-detail-Layout_text">（my 楽天モバイルで購入時の分割価格）</span></div><div><div class="accessory-detail-Price_Method-detail-secondary accessory-detail-Price_Grid-split"><div class="accessory-detail-Price_Method-detail-secondary-inner"><div class="accessory-detail-Price_Method-detail-secondary-item"><div>24回払い<sub>※</sub></div><div><span class="accessory-detail-Price_Num">215</span>円/月</div></div><div class="accessory-detail-Price_Method-detail-secondary-item"><div>48回払い<sub>※</sub>（楽天カードのみ）</div><div><span class="accessory-detail-Price_Num">107</span>円/月</div></div></div><p class="accessory-detail-Price_Recomend accessory-detail-Price_Light-recomend u-Adjust_Mt-8"><span>ご購入は楽天カードがオススメ！</span>楽天カードなら分割手数料0円！</p></div></div></div>');
            }
        }

			// csvで管理できないので必要
			page_name = ['apple-rm2209072'];

			for (let i = 0, len = page_name.length; i < len; i++) {
				if (my_path.indexOf(page_name[i]) > 0) {
					$(".js-accessory-detail-Hero_Cta").addClass("u-Adjust_Mt-40");
				}
			}

			// csvで管理できないので必要
			page_name = ['apple-rm2203055'];

			for (let i = 0, len = page_name.length; i < len; i++) {
					if (my_path.indexOf(page_name[i]) > 0) {
						const heroBlock = document.querySelector('.accessory-detail-Layout_Hero > .l-System_Container');
						const div = document.createElement('div');
						heroBlock && heroBlock.prepend(div);
					}
			}

			// csvで管理できないので必要
			page_name = ['apple-rm2309069'];

			for (let i = 0, len = page_name.length; i < len; i++) {
					if (my_path.indexOf(page_name[i]) > 0) {
						const targetEl = document.querySelector('.accessory-detail-Layout_Hero');
						const newEl = document.createElement('div');
						newEl.className = "l-System_Container u-Adjust_Pb-40";
						newEl.innerHTML = `
						<p class="c-Txt_Emp-01 u-Adjust_Align-center">【ご購入前にご確認ください】</p>
						<ul class="u-Adjust_Mt-8 c-List_Text-disc">
						  <li>my 楽天モバイルでのお申し込み時に選択いただく<span class="c-Txt_Emp-02">希望日時にはお届けできません。</span>あらかじめご了承ください。</li>
						</ul>
						<p class="u-Adjust_Mt-16"><a href="/faq/detail/00001971/?l-id=product_apple-rm2309069_faq_detail_00001971" class="c-Link_Txt-inline">お申し込み製品のキャンセルについてを見る<span class="c-Icon_Chevron-right"></span></a></p>
						`;
						targetEl.insertAdjacentElement("afterend", newEl);
					}
			}
    });
})(jQuery);
