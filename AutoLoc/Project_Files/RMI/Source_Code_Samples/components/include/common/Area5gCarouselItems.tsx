import React, { useEffect } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { CarouselWrapper, CarouselNav } from '@components/atoms/Slick'
import { CardNormal } from '@components/atoms/Card'
import { TxtEmp01 } from '@components/atoms/Txt'
import { IconCheck } from '@components/icons'
import { fontRakutenSans } from '@styles/fonts'
const Area5gCarouselItemInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  }
`
const Area5gCarouselItemColor = styled.ul`
  display: flex;
  justify-content: center;
  vertical-align: baseline!important;
  margin-top: 16px;
  & li {
    & + li {
      margin-top:0!important;
    }
    & span {
      width: 8px;
      height: 8px;
      float: left;
      margin-right: 6px;

    }
  }
  }
`
const Area5gCarouselNew = styled.div`
  min-height: 30px;
  }
`

const Area5gCarouselNewIcon = styled.div`
  display: block;
  background-color: #ffe6f4;
  color: #ff008c;
  font-size: 20px;
  font-weight: bold;
  font-family: ${fontRakutenSans.style.fontFamily},sans-serif;
  width: 100%;
  text-align: center;
  }
`
const Area5gCarouselItemBody = styled.div`
    & ul {
      font-size: 12px;
      & li {
        display: flex;
        align-items: center;
        & + li {
          margin-top: 8px;
        }
        & span {
          margin-right: .25em;
        }
      }
    }
    & img {
      margin: 16px auto auto;
      height: 180px;
    }
  }
`
const Div = styled.div`
  .c-Icon_Chevron-left {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    top: 1px;
    display: inline-block;
    font-family: var(--rex-icon);
    line-height: 1;
    &::before {
      content: '${props => props.theme.icon.rex.chevronLeft}';
    }
  }
  .c-Icon_Chevron-right {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    top: 1px;
    display: inline-block;
    font-family: var(--rex-icon);
    line-height: 1;
    &::before {
      content: '${props => props.theme.icon.rex.chevronRight}';
    }
  }
`

const IconCheckPink = styled(IconCheck)`
color: ${props => props.theme.colors.pink100};
}
`
const Area5gCarouselItem = styled(CardNormal)`
  height: 463px;
  cursor: pointer;
  font-family: ${fontRakutenSans.style.fontFamily},sans-serif;
  font-weight: bold;
  padding: 16px 12px 32px;
}
`
const Area5gCarouselItemIphone = styled(CardNormal)`
  height: 409px;
  cursor: pointer;
  font-family: ${fontRakutenSans.style.fontFamily},sans-serif;
  font-weight: bold;
  padding: 16px 12px 32px;
}
`
const Area5gCarouselCapacitys = styled.ul`
display: flex;
justify-content: center;
vertical-align: baseline!important;
margin-top: 16px;
  & li {
  margin: 0 4px;
  & + li {
    margin-top:0!important;
  }
    & span {
      background: #ededed;
      text-align: center;
      font-size: 14px;
      padding: 4px 8px;
      }
    }
  }
`

export const Area5gCarouselItems = () => {
  useEffect(() => {
    require('slick-carousel')
    /*const setLoadingImage = ($self) => {
          $self.on('beforeChange', function(event, slick, currentSlide, nextSlide){
              let h = slick.$slideTrack.height();
              $self.find('.slick-loading').parents('.slick-slide').addClass('has-loading').height(h);
          });
          $self.on('lazyLoaded', function(event, slick, image, imageSource) {
              setTimeout(function() {
                  image.parents('.slick-slide').removeClass('has-loading');
              }, 500);
          });
        }*/
    const carouselConfig = {
      respondTo: 'min',
      arrows: true,
      dots: true,
      dotsClass: 'slick-dots c-Carousel_Dots',
      infinite: true,
      prevArrow:
        '<button class="prev c-Icon_Chevron-left" aria-label="Previous" type="button">Previous</button>',
      nextArrow:
        '<button class="next c-Icon_Chevron-right" aria-label="Next" type="button">Next</button>',
      slidesToShow: 1,
    }
    $('.js-Carousel-single').each(function () {
      let $self = $(this)
      //setLoadingImage($self);
      $self.slick(
        $.extend({}, carouselConfig, {
          appendArrows: $self.next('.c-Carousel_Nav'),
          appendDots: $self.next('.c-Carousel_Nav'),
        }),
      )
    })
    $('.js-Carousel-multi').each(function () {
      let $self = $(this)
      //setLoadingImage($self);
      $self.slick(
        $.extend({}, carouselConfig, {
          appendArrows: $self.next('.c-Carousel_Nav'),
          appendDots: $self.next('.c-Carousel_Nav'),
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 415,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }),
      )
    })
  }, [])
  return (
    <Div className={Utils['Pb-24']}>
      <Heading className={`${Utils['Mt-32']} ${Utils['Mb-16']}`} level="3">
        iPhone
      </Heading>
      <CarouselWrapper className={`${Utils['Mt-24']} js-Carousel-multi`}>
        {/* iPhone13 Pro Max */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-13-pro-max/?l-id=area_5g_product_iphone_iphone-13-pro-max"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                <Area5gCarouselNewIcon>
                  <span>NEW</span>
                </Area5gCarouselNewIcon>
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 13 Pro Max
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone13promax-5g.png?yymmdd"
                  alt="iPhone 13 Pro Max"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#a7c1d9',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#f0f2ed',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#fae6cf',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#54524f',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
                <li>
                  <span>512GB</span>
                </li>
                <li>
                  <span>1TB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone13 Pro */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-13-pro/?l-id=area_5g_product_iphone_iphone-13-pro"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                <Area5gCarouselNewIcon>
                  <span>NEW</span>
                </Area5gCarouselNewIcon>
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 13 Pro
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone13pro-5g.png?yymmdd"
                  alt="iPhone 13 Pro"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#a7c1d9',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#f0f2ed',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#fae6cf',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#54524f',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
                <li>
                  <span>512GB</span>
                </li>
                <li>
                  <span>1TB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone13 */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-13/?l-id=area_5g_product_iphone_iphone-13"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                <Area5gCarouselNewIcon>
                  <span>NEW</span>
                </Area5gCarouselNewIcon>
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 13
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone13-5g.png?yymmdd"
                  alt="iPhone 13"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>
              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#faddd7',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#266787',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#222a30',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#fbf6f2',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#bf0013',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>
              <Area5gCarouselCapacitys>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
                <li>
                  <span>512GB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone13 mini */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-13-mini/?l-id=area_5g_product_iphone_iphone-13-mini"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                <Area5gCarouselNewIcon>
                  <span>NEW</span>
                </Area5gCarouselNewIcon>
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 13 mini
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone13mini-5g.png?yymmdd"
                  alt="iPhone 13 mini"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#faddd7',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#266787',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#222a30',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#fbf6f2',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#bf0013',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
                <li>
                  <span>512GB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone12 Pro Max */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-12-pro-max/?l-id=area_5g_product_iphone_iphone-12-pro-max"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                {/* <Area5gCarouselNewIcon><span>NEW</span></Area5gCarouselNewIcon> */}
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 12 Pro Max
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone12promax-5g.png?yymmdd"
                  alt="iPhone 12 Pro Max"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#2D4E5C',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#FCEBD3',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#E3E4DF',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#52514D',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
                <li>
                  <span>512GB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone12 Pro */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-12-pro/?l-id=area_5g_product_iphone_iphone-12-pro"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                {/* <Area5gCarouselNewIcon><span>NEW</span></Area5gCarouselNewIcon> */}
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 12 Pro
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone12pro-5g.png?yymmdd"
                  alt="iPhone 12 Pro"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#2D4E5C',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#FCEBD3',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#E3E4DF',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#52514D',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
                <li>
                  <span>512GB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone12 */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-12/?l-id=area_5g_product_iphone_iphone-12"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                {/* <Area5gCarouselNewIcon><span>NEW</span></Area5gCarouselNewIcon> */}
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 12
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone12-5g.png?yymmdd"
                  alt="iPhone 12"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#B7AFE6',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#023B63',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#D8EFD5',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#D82E2E',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#F6F2EF',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#25212B',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>64GB</span>
                </li>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>

        {/* iPhone12 mini */}
        <Area5gCarouselItemIphone
          as="a"
          href="/product/iphone/iphone-12-mini/?l-id=area_5g_product_iphone_iphone-12-mini"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                {/* <Area5gCarouselNewIcon><span>NEW</span></Area5gCarouselNewIcon> */}
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                iPhone 12 mini
              </Heading>
            </div>
            <Area5gCarouselItemBody>
              <figure>
                <img
                  src="/img/area/5g/img-iphone12mini-5g.png?yymmdd"
                  alt="iPhone 12"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#B7AFE6',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#023B63',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#D8EFD5',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#D82E2E',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#F6F2EF',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#25212B',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>

              <Area5gCarouselCapacitys>
                <li>
                  <span>64GB</span>
                </li>
                <li>
                  <span>128GB</span>
                </li>
                <li>
                  <span>256GB</span>
                </li>
              </Area5gCarouselCapacitys>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItemIphone>
      </CarouselWrapper>
      <CarouselNav className={`${Utils['Mt-32']} c-Carousel_Nav`}></CarouselNav>

      {/* Android */}
      <Heading className={`${Utils['Mt-32']} ${Utils['Mb-16']}`} level="3">
        Android（Rakuten オリジナルを含む）
      </Heading>
      <CarouselWrapper className={`${Utils['Mt-24']} js-Carousel-multi`}>
        <Area5gCarouselItem
          as="a"
          href="/product/smartphone/reno5-a/?l-id=area_5g_product_reno5-a"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                <Area5gCarouselNewIcon>
                  <span>NEW</span>
                </Area5gCarouselNewIcon>
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                OPPO Reno5 A
              </Heading>
              <TxtEmp01 as="p" className={Utils['Align-center']}>
                カメラで選ばれたい5Gスマホ
              </TxtEmp01>
            </div>
            <Area5gCarouselItemBody>
              <ul>
                <li>
                  <IconCheckPink as="span" />
                  動画も充実した4眼カメラ
                </li>
                <li>
                  <IconCheckPink as="span" />
                  5Gでの動画視聴もゲームも余裕
                </li>
                <li>
                  <IconCheckPink as="span" />
                  おサイフケータイ®＋防水防塵
                </li>
              </ul>
              <figure>
                <img
                  src="/img/area/5g/img-reno5a-5g.png?yymmdd"
                  alt="OPPO Reno5 A"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#C0D4D8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#262322',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItem>

        <Area5gCarouselItem
          as="a"
          href="/product/smartphone/rakuten-big-s/?l-id=area_5g_product_big-s"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                <Area5gCarouselNewIcon>
                  <span>NEW</span>
                </Area5gCarouselNewIcon>
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                Rakuten BIG s
              </Heading>
              <TxtEmp01 as="p" className={Utils['Align-center']}>
                5Gをもっと身近に
              </TxtEmp01>
            </div>
            <Area5gCarouselItemBody>
              <ul>
                <li>
                  <IconCheckPink as="span" />
                  写真撮影が楽しくなる、4眼AIカメラ
                </li>
                <li>
                  <IconCheckPink as="span" />
                  くっきり鮮やかな6.4インチの有機ELディスプレイ
                </li>
                <li>
                  <IconCheckPink as="span" />
                  防水、大容量バッテリーなど充実の基本性能
                </li>
              </ul>
              <figure>
                <img
                  src="/img/area/5g/img-bigs-5g.png?yymmdd"
                  alt="Rakuten BIG s"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#222222',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#BF0000',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItem>

        <Area5gCarouselItem
          as="a"
          href="/product/smartphone/rakuten-big/?l-id=area_5g_product_big"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew></Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                Rakuten BIG
              </Heading>
              <TxtEmp01 as="p" className={Utils['Align-center']}>
                フロントカメラ内蔵ディスプレイ搭載で、ビッグな5G体験を
              </TxtEmp01>
            </div>
            <Area5gCarouselItemBody>
              <ul>
                <li>
                  <IconCheckPink as="span" />
                  6.9インチ、ノッチレスの超大型 有機ELディスプレイ
                </li>
                <li>
                  <IconCheckPink as="span" />
                  4眼カメラと多彩な撮影モードで様々なシーンに対応
                </li>
                <li>
                  <IconCheckPink as="span" />
                  ゲームも快適なパフォーマンス
                </li>
              </ul>
              <figure>
                <img
                  src="/img/area/5g/img-big-5g.png?yymmdd"
                  alt="Rakuten BIG"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#222222',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #cacad8',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#BF0000',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItem>

        <Area5gCarouselItem
          as="a"
          href="/product/smartphone/aquos-r5g/?l-id=area_5g_product_aquos-r5g"
          tabIndex={0}
        >
          <Area5gCarouselItemInner>
            <div>
              <Area5gCarouselNew>
                {/* <Area5gCarouselNewIcon><span>NEW</span></Area5gCarouselNewIcon> */}
              </Area5gCarouselNew>
              <Heading
                className={`${Utils['Mt-8']} ${Utils['Align-center']}`}
                level="4"
              >
                AQUOS R5G
              </Heading>
              <TxtEmp01 as="p" className={Utils['Align-center']}>
                新時代の頂を約束する。
              </TxtEmp01>
            </div>
            <Area5gCarouselItemBody>
              <ul>
                <li>
                  <IconCheckPink as="span" />
                  IGZOが5Gの映像体験を変える
                </li>
                <li>
                  <IconCheckPink as="span" />
                  8K動画＆AI対応4眼カメラ
                </li>
                <li>
                  <IconCheckPink as="span" />
                  持続するハイパフォーマンス
                </li>
              </ul>
              <figure>
                <img
                  src="/img/area/5g/img-aquos-r5g-5g.png?yymmdd"
                  alt="AQUOS R5G"
                  className="area-5g-Carousel_Img-5g"
                />
              </figure>

              <Area5gCarouselItemColor>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#0033AA',
                    }}
                  ></span>
                </li>
                <li>
                  <span
                    className=""
                    style={{
                      background: '#25282A',
                    }}
                  ></span>
                </li>
              </Area5gCarouselItemColor>
            </Area5gCarouselItemBody>
          </Area5gCarouselItemInner>
        </Area5gCarouselItem>
      </CarouselWrapper>
      <CarouselNav className={`${Utils['Mt-32']} c-Carousel_Nav`}></CarouselNav>
    </Div>
  )
}
