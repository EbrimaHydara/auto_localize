// Store user's history on product and Display 'recent viewed products'

$(function() {
    const str_pathname = location.pathname;
    const dividedPath = str_pathname.split('/');

    // The list of discontinued products
    const discontinuedProducts = ['p30lite', 'a73', 'aquos-sense4-lite', 'a5-2020', 'aquos-sense3-lite', 'aquos-sense3-plus', 'aquos-sense4-plus', 'arrows-rx', 'galaxy-a7', 'galaxy-note10-plus', 'nova5t', 'p30lite', 'rakuten-mini', 'rakuten-big', 'rakuten-big-s', 'rakuten-hand', 'reno-a', 'xperia-ace', 'reno3-a', 'aquos-r5g', 'galaxy-s10', 'xperia-10m3-lite'];

    const pathCheck = () => {
        if (dividedPath[1] === 'product') {
            const numberOfSlash = str_pathname.match(/\//g).length;
            if(numberOfSlash == 2) {
                if (dividedPath[2] === '' || dividedPath[2] === 'index.html') {
                    return 'productTop';
                }
            } else if (numberOfSlash == 4) {
                if (dividedPath[2] === 'smartphone') {
                    if (dividedPath[4] === '' || dividedPath[4] === 'index.html'|| 'index_b.html') {
                        return 'eachSmartphone';
                    }
                }
            }
        }
    };

    const dropLastElement = () => {
        if (dividedPath[dividedPath.length - 1] !== '') {
            const indexNum = str_pathname.lastIndexOf('/');
            const result = str_pathname.substr(0, indexNum + 1);
            return result;
        } else {
            return str_pathname;
        }
    };

    if (pathCheck()) {
        if (window.localStorage) {
            let str_storage = window.localStorage.getItem('targeting');
            let obj_storage = {
                visit: [],
            };
            const date = new Date();
            const modCurrentPath = dropLastElement();

            if (str_storage !== null) {
                obj_storage = JSON.parse(str_storage); // Add history to current storage
            }

            const isCurrentProductDiscontinued = () => {
                const productFolder = dividedPath[dividedPath.length - 2];
                return discontinuedProducts.indexOf(productFolder) > -1 ? true : false;
            };
            if (pathCheck() === 'eachSmartphone' && isCurrentProductDiscontinued() == false) {
                const currentProp = {};
                // Check history
                obj_storage.visit = obj_storage.visit.filter(elem => elem.path !== modCurrentPath);
                currentProp.path = modCurrentPath;
                currentProp.time = date;
                const pageTitle = document.title;
                currentProp.productName = pageTitle.split(' | ')[0];
                obj_storage.visit.unshift(currentProp);
            }

            const filterByProduct = value => {
                const productFolderArr = value.path.split('/');
                const productFolder = productFolderArr[productFolderArr.length - 2];
                return discontinuedProducts.indexOf(productFolder) == -1 ? true : false;
            };
            obj_storage.visit = obj_storage.visit.filter(elem => filterByProduct(elem));

            const filterByTime = value => {
                const pastDate = new Date(value.time);
                const diffInTime = date.getTime() - pastDate.getTime();
                const diffInDate = diffInTime / (1000 * 3600 * 24);
                return diffInDate < 31 ? true : false;
            };
            obj_storage.visit = obj_storage.visit.filter(elem => filterByTime(elem));

            str_storage = JSON.stringify(obj_storage);

            try {
                window.localStorage.setItem('targeting', str_storage);
            } catch(e) {
                console.log(e);
            }

            if (pathCheck() === 'eachSmartphone' && obj_storage.visit[0].path === modCurrentPath) {
                obj_storage.visit = obj_storage.visit.slice(1);
            }
            if (obj_storage.visit.length > 0) {
                const getImgName = value => {
                    const arr = value.split('/');
                    return arr[arr.length - 2];
                };

                let linkTags = [];
                if (pathCheck() === 'productTop') {
                    linkTags = obj_storage.visit.map((elem, index) => {
                        const imgName = getImgName(elem.path);
                        return `<a class="c-Card_Normal product-detail-Carousel_Item product-detail-Carousel_Item-mod-1-card" href="${elem.path}?l-id=product_top_${imgName}_history">
                                    <div class="product-detail-Carousel_Flex product-detail-Carousel_Flex-mod-1">
                                        <div class="product-detail-Carousel_Flex-mod-1img-area">
                                            <img class="product-detail-Carousel_Flex-mod-1-img-area-img" src="/assets/img/product/${imgName}/pht-device-thumb.png" alt="${elem.productName}">
                                        </div>
                                        <p class="product-detail-Carousel_Flex-mod-1-img-text">${elem.productName}</p>
                                    </div>
                                </a>`;
                    });
                } else {
                    linkTags = obj_storage.visit.map((elem, index) => {
                        const imgName = getImgName(elem.path);
                        const currentProduct = dividedPath[dividedPath.length - 2];
                        return `<a class="c-Card_Normal product-detail-Carousel_Item product-detail-Carousel_Item-mod-1-card" href="${elem.path}?l-id=product_${currentProduct}_history_${imgName}">
                                    <div class="product-detail-Carousel_Flex product-detail-Carousel_Flex-mod-1">
                                        <div class="product-detail-Carousel_Flex-mod-1-img-area">
                                            <img class="product-detail-Carousel_Flex-mod-1-img-area-img" src="/assets/img/product/${imgName}/pht-device-thumb.png" alt="${elem.productName}">
                                        </div>
                                        <p class="product-detail-Carousel_Flex-mod-1-img-text">${elem.productName}</p>
                                    </div>
                                </a>`;
                    });
                }

                let code = '';
                for (let i = 0; i < obj_storage.visit.length; i++) {
                    code += linkTags[i];
                }
                const currentProduct = dividedPath[dividedPath.length - 2];
                const openTag = `
                <div class="l-System_Container">
                <h3 class="c-Heading_Lv3 u-Adjust_Align-center u-Adjust_Mt-16">最近チェックした製品</h3>
                <div class="product-history-Carousel product-history-Carousel_Mod-1">
                <div class="c-Carousel product-history-Carousel_Wrap js-product-Carousel-history">

                `;
                const closeTag = `

                </div>
                <div class="c-Carousel_Nav product-history-Carousel_Nav product-history-Carousel_Nav-sp"></div>
                </div>
                </div>
                <div class="l-System_Container">
                <div class="u-Adjust_Mt-32 u-Adjust_Align-center">
                <a class="c-Btn_Regular" href="/product/smartphone/?l-id=product_smartphone_${currentProduct}_history_product_smartphone">Android一覧を見る</a>
                </div>
                <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
                <a class="c-Btn_Regular" href="/product/ranking/?l-id=product_smartphone_${currentProduct}_history_product_ranking">スマートフォン売れ筋ランキングを見る</a>
                </div>
                </div>
                `;
                code = openTag + code + closeTag;
                const slideWrapper = document.getElementById('previously-seen');
                slideWrapper.innerHTML = code;
                const productCarouselHistory = $('.js-product-Carousel-history');
                productCarouselHistory.each(function() {
                    let $self = $(this);
                    const carouselConfig = {
                        respondTo: 'min',
                        slidesToShow: 3,
                        arrows: true,
                        dots: true,
                        dotsClass: 'slick-dots c-Carousel_Dots',
                        infinite: true,
                        prevArrow: '<button class="c-Carousel_Nav-prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="c-Carousel_Nav-next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
                    };
                    $self.slick($.extend({}, carouselConfig, {
                        appendArrows: $self.next('.c-Carousel_Nav'),
                        appendDots: $self.next('.c-Carousel_Nav'),
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 835,
                                settings: {
                                    slidesToShow: 2
                                }
                            },
                        ]
                    }));
                });
            }
        }
    }
});
