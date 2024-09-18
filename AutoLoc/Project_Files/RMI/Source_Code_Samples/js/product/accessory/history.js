// Store user's history on product and Display 'recent viewed products'
import { themeNum } from "../../common/theme";

$(function () {
    const str_pathname = location.pathname;
    const dividedPath = str_pathname.split('/');

    // The list of discontinued products
    const discontinuedProducts = [];

    const pathCheck = () => {
        if (dividedPath[2] === 'accessory') {
            const numberOfSlash = str_pathname.match(/\//g).length;
            if (numberOfSlash == 3) {
                if (dividedPath[3] === '' || dividedPath[3] === 'index.html') {
                    return 'spRelatedTop';
                }
            } else if (numberOfSlash == 4) {
                // if (dividedPath[2] === 'accessory') {
                if (dividedPath[4] === '' || dividedPath[4] === 'index.html') {
                    return 'eachAccessory';
                }
                // }
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
            let str_storage = window.localStorage.getItem('accTargeting');
            let obj_storage = {
                visit: [],
            };
            const date = new Date();
            const modCurrentPath = dropLastElement();
            const rawPrice = ((document.getElementsByClassName('js-price')[0]
                || document.getElementsByClassName('accessory-detail-Price_Practically-num')[0]) // 終売対応
                || { innerHTML: null }).innerHTML;

            if (str_storage !== null) {
                obj_storage = JSON.parse(str_storage); // Add history to current storage
                obj_storage.visit = obj_storage.visit.slice(0, 10);
            }

            const isCurrentProductDiscontinued = () => {
                const productFolder = dividedPath[dividedPath.length - 2];
                return discontinuedProducts.indexOf(productFolder) > -1 ? true : false;
            };

            // 終売対応などで除外したいページのIDを追加する
            const exclusionList = [
                'apple-rm2203055',
                'rselect-rmopreno7af0201cl',
                'apple-rm2209027',
                'apple-rm2209063',
                'apple-rm2209071',
                'apple-rm2209022',
                'apple-rm2209055',
                'apple-rm2209070',
                'apple-rm2109034',
                'apple-rm2110010',
                'apple-rm2104014',
                'rselect-rmapphne22c0215cl',
                'rselect-rmapphne22c0210cl',
                'rselect-rmapphne22f0214cl',
                'rselect-rmapphne22f0208cl',
                'rselect-rmapphne22f0209cl',
            ];
            obj_storage.visit = obj_storage.visit.filter(elem => {
                const dividedPath = elem.path.split('/');
                const productId = dividedPath[dividedPath.length - 2];
                return !exclusionList.includes(productId);
            });

            if (pathCheck() === 'eachAccessory' && isCurrentProductDiscontinued() == false) {
                const currentProp = {};
                // Check history
                obj_storage.visit = obj_storage.visit.filter(elem => elem.path !== modCurrentPath);
                currentProp.path = modCurrentPath;
                currentProp.time = date;
                currentProp.price = (rawPrice || '').replace(/\s+/g, '');
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
                window.localStorage.setItem('accTargeting', str_storage);
            } catch (e) {
                console.log(e);
            }

            if (pathCheck() === 'eachAccessory' && obj_storage.visit[0].path === modCurrentPath) {
                obj_storage.visit = obj_storage.visit.slice(1);
            }
            if (obj_storage.visit.length > 0) {
                const getImgName = value => {
                    const arr = value.split('/');
                    return arr[arr.length - 2];
                };

                let linkTags = [];
                if (pathCheck() === 'spRelatedTop') {
                    linkTags = obj_storage.visit.map((elem, index) => {
                        const imgName = getImgName(elem.path);
                        return `<a href="${elem.path}?l-id=accessory_${imgName}_history"><img src="/assets/img/accessory/${imgName}/pht-accessory-00.png" alt="${elem.productName}">
                        <p class="accessory-top-history-Carousel_Title">${elem.productName}</p>
                        <p class="accessory-top-history-Carousel_Price">${elem.price}</p></a>`;
                    });
                } else {
                    linkTags = obj_storage.visit.map((elem, index) => {
                        const imgName = getImgName(elem.path);
                        const currentProduct = dividedPath[dividedPath.length - 2];
                        return `<a href="${elem.path}?l-id=accessory_${currentProduct}_history_${imgName}"><img src="/assets/img/accessory/${imgName}/pht-accessory-00.png" alt="${elem.productName}">
                        <p class="accessory-top-history-Carousel_Title">${elem.productName}</p>
                        <p class="accessory-top-history-Carousel_Price">${elem.price}</p></a>`;
                    });
                }

                let code = '';
                for (let i = 0; i < obj_storage.visit.length; i++) {
                    code += linkTags[i];
                }

                const openTag = `
                <div class="l-System_Container">
                <h2 class="c-Heading_Lv2 u-Adjust_Mt-32">最近チェックしたアクセサリ</h2>
                <div class="accessory-top-history-Carousel">
                <div class="c-Carousel accessory-top-history-Carousel_Wrap js-accessory-Carousel-history">

                `;
                const closeTag = `

                </div>
                <div class="c-Carousel_Nav-v2-wrap">
                    <div class="c-Carousel_Nav-v2"></div>
                </div>
                </div>
                </div>
                `;
                code = openTag + code + closeTag;
                const slideWrapper = document.getElementById('previously-seen');
                if (!slideWrapper) return;
                slideWrapper.innerHTML = code;
                const accessoryCarouselHistory = $('.js-accessory-Carousel-history');
                accessoryCarouselHistory.each(function () {
                    let $self = $(this);
                    const carouselConfig = {
                        respondTo: 'min',
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true,
                        dotsClass: 'slick-dots c-Carousel_Dots-v2',
                        infinite: true,
                        appendArrows: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                        appendDots: $self.next('.c-Carousel_Nav-v2-wrap').children('.c-Carousel_Nav-v2'),
                        prevArrow: '<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>',
                    };
                    $self.slick($.extend({}, carouselConfig, {
                        responsive: [
                            {
                                breakpoint: themeNum.max.m,
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
