import { themeNum } from "../common/theme";
import { addClassBasedOnSlideCount } from "../common/component/carousel";
// Store user's history on product and Display 'recent viewed products'

$(function() {
    const str_pathname = location.pathname;
    const dividedPath = str_pathname.split('/');

    // The list of discontinued products
    const discontinuedProducts = [
        'p30lite',
        'a73',
        'aquos-sense4-lite',
        'a5-2020',
        'aquos-sense3-lite',
        'aquos-sense3-plus',
        'aquos-sense4-plus',
        'arrows-rx',
        'galaxy-a7',
        'galaxy-note10-plus',
        'nova5t',
        'p30lite',
        'rakuten-mini',
        'rakuten-big',
        'rakuten-big-s',
        'rakuten-hand',
        'reno-a',
        'xperia-ace',
        'reno3-a',
        'aquos-r5g',
        'galaxy-s10',
        'xperia-10m3-lite',
        'reno5-a',
        'aquos-sense6',
        'aquos-wish',
        'aquos-zero6',
        'iphone-se-2nd',
        'iphone-12',
        'iphone-12-mini',
        'iphone-12-pro',
        'iphone-12-pro-max',
        'iphone-13-mini','iphone-13-pro',
        'iphone-13-pro-max',
        'xperia-10m4',
        'a55s-5g',
        'xperia-5m4',
        'rakuten-hand-5g',
        'reno7-a',
        'aquos-sense6s',
        'iphone-14-pro',
        'iphone-14-pro-max',
        'aquos-sense7',
        'redmi-note-11-pro-5g',
        'galaxy-z-flip4',
        'galaxy-a23-5g',
    ];

    const pathCheck = () => {
        if (dividedPath[1] === 'product') {
            const numberOfSlash = str_pathname.match(/\//g).length;
            if(numberOfSlash == 2) {
                if (dividedPath[2] === '' || dividedPath[2] === 'index.html') {
                    return 'productTop';
                }
            } else if (numberOfSlash == 4) {
                if (dividedPath[2] === 'smartphone') {
                    if (dividedPath[4] === '' || dividedPath[4] === 'index.html' || dividedPath[4] === 'index_b.html') {
                        return 'eachSmartphone';
                    }
                } else if(dividedPath[2] === 'iphone') {
                    if (dividedPath[4] === '' || dividedPath[4] === 'index.html' || dividedPath[4] === 'index_b.html') {
                        return 'eachiphone';
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
            if (pathCheck() !== 'productTop' && isCurrentProductDiscontinued() == false) {
                const currentProp = {};
                // Check history
                obj_storage.visit = obj_storage.visit.filter(elem => elem.path !== modCurrentPath);
                currentProp.path = modCurrentPath;
                currentProp.time = date;
                if(pathCheck() === 'eachSmartphone') {
                    const pageTitle = document.title;
                    currentProp.productName = pageTitle.split(' | ')[0];
                }else if(pathCheck() === 'eachiphone') {
                    currentProp.productName = document.querySelector('h1').textContent;
                }
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

            if (pathCheck() === 'eachSmartphone' || pathCheck() === 'eachiphone' && obj_storage.visit[0].path === modCurrentPath) {
                const productFolder = dividedPath[dividedPath.length - 2];
                if(discontinuedProducts.indexOf(productFolder) == -1) obj_storage.visit = obj_storage.visit.slice(1);
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
                        let imgSrc = '';
                        if(imgName.indexOf('iphone') != -1) {
                            imgSrc = `iphone/${imgName}/rank-thumb.png`
                        } else {
                            imgSrc = `${imgName}/rank-thumb.png`
                        }

                        return `
                            <a class="c-Card_Normal"  href="${elem.path}?l-id=product_top_${imgName}_history">
                            <img src="/assets/img/product/${imgSrc}" alt="${elem.productName}">
                            <p class="u-Adjust_Mt-16">${elem.productName}</p>
                            </a>
                        `
                    });
                } else {
                    linkTags = obj_storage.visit.map((elem, index) => {
                        const imgName = getImgName(elem.path);
                        const currentProduct = dividedPath[dividedPath.length - 2];
                        let imgSrc = '';

                        if(imgName.indexOf('iphone') != -1) {
                            imgSrc = `iphone/${imgName}/rank-thumb.png`
                        } else {
                            imgSrc = `${imgName}/rank-thumb.png`
                        }

                        return `
                            <a class="c-Card_Normal product-history-Carousel_Card" href="${elem.path}?l-id=product_${currentProduct}_history_${imgName}">
                            <img src="/assets/img/product/${imgSrc}" alt="${elem.productName}">
                            <p>${elem.productName}</p>
                            </a>
                        `
                    });
                }

                const showData = obj_storage.visit.slice(0, 10)
                // obj_storage.visit.slice(0, 10)

                let code = '';
                for (let i = 0; i < showData.length; i++) {
                    code += linkTags[i];
                }

                const openTag = `
                <h3 class="c-Heading_Lv3 u-Adjust_Mt-32">最近チェックした製品</h3>
                <div class="product-history-Carousel">
                <div class="c-Carousel product-history-Carousel_Wrap js-product-Carousel-history">
                `;
                const closeTag = `
                </div>
                <div class="c-Carousel_Nav-v2-wrap u-Adjust_Mt-16">
                <div class="c-Carousel_Nav-v2-bar"></div>
                </div>
                </div>
                `;
                code = openTag + code + closeTag;
                const slideWrapper = document.getElementById('previously-seen');
                slideWrapper.innerHTML = code;
                const productCarouselHistory = $('.js-product-Carousel-history');
                productCarouselHistory.each(function() {
                    let $self = $(this);
                    $self.on('init breakpoint', (_, slick) => {
                        addClassBasedOnSlideCount(slick);
                    });
                    const carouselConfig = {
                        respondTo: 'min',
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        arrows: true,
                        dots: true,
                        dotsClass: 'slick-dots c-Carousel_Dots-v2-bar',
                        infinite: true,
                        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
                        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2-bar'),
                        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
                    };
                    $self.slick($.extend({}, carouselConfig, {
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
            }
        }
    }
});
