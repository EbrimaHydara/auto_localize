import React, { useCallback, useEffect } from 'react'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'
import { DeviceIphone } from '@components/include/common/ProductType'
import {
  ProductLabelList,
  ProductInfo,
  ProductName,
  ProductPriceBox,
  ProductPoint,
  ProductCard,
  UpgradeProgram,
  Btns,
} from '@components/include/service/replacement-program/productlist/Styles'
import {
  AlphanumericEmp,
  AlphanumericNormal,
  AlphanumericSize,
  TxtCap,
  TxtEmp02,
  TxtSize,
} from '@components/atoms/Txt'
import { IconCampaignLine } from '@components/icons'
import { ButtonPrimary, ButtonRegular } from '@components/atoms/Buttons'

// const hiddenProductList: Array<string> = ['iphone-se-3rd']

const ProductTitle = styled(AlphanumericNormal)`
  font-family: var(--noto-sans-jp), sans-serif;
  font-weight: 700;
`

const ProductTotalPrice = styled(AlphanumericNormal)`
  font-weight: 600;
`

const ProductDiscountPrice = styled(AlphanumericSize)`
  font-weight: 600;
`

type IPhoneList = {
  className?: string
  item: DeviceIphone
}

// A component that formats and displays the data received from the IphoneList component on a single card.
export const IphoneCard: React.FC<IPhoneList> = ({ className, item }) => {
  const ratBinder = (RAT: RAT, selectors: string[]) => {
    selectors.forEach(v => {
      const bindTarget = RAT.$Selector(v)
      RAT.bind(bindTarget)
    })
  }

  useEffect(() => {
    const isExistRat =
      typeof RAT === 'object' &&
      typeof RAT.$Selector === 'function' &&
      typeof RAT.bind === 'function'

    isExistRat && ratBinder(RAT, ['[data-ratid$="_bss"]'])
  }, [])

  const isPointBackPointIphone = (): boolean => {
    return item['top-carousel-pointback-num']?.trim() !== ''
  }
  const isIphonePreTxt = (): boolean => {
    return item['top-carousel-iphone-pre-text'] !== ''
  }
  const isPointNote = (): boolean => {
    return (
      item['top-carousel-pointback-txt2'] !== '' ||
      item['top-carousel-pointback-num'] !== '' ||
      item['top-carousel-pointback-txt3'] !== '' ||
      item['upgrade-program-pointback-note'] !== ''
    )
  }

  // 製品画像パス出力、パラメ付き
  const outputProductImgPath = useCallback((): string => {
    const imgPath = item.directory?.replace(/-/g, '').trim()
    const param = item.update?.trim() ? `?${item.update.trim()}` : ''
    return imgPath
      ? `${assets}img/service/replacement-program/thumb-product-iphone-top-${imgPath}.png${param}`
      : ''
  }, [item.directory, item.update])

  return (
    <>
      {item.directory && (
        <ProductCard>
          {/* {(item.new || item.discount_text) && ( */}
          <ProductLabelList className={Utils['Mb-8']}>
            {item.new === '2' && <li className="preorder">予約注文受付中</li>}
            {item.new === '1' && (
              <AlphanumericEmp n="02" as="li" className="new">
                NEW
              </AlphanumericEmp>
            )}
            {/* {item.discount_text && (
              <li className="discount">{item.discount_text}</li>
            )} */}
          </ProductLabelList>
          {/* )} */}
          <section>
            {(item.directory || item.product) && (
              <ProductInfo>
                {item.directory && (
                  <figure>
                    <img
                      src={outputProductImgPath()}
                      height="130"
                      alt={item.alt?.trim()}
                      loading="lazy"
                      className="product-img"
                    />
                  </figure>
                )}
                {item.product && (
                  <div>
                    <ProductName level="3" className={Utils['Weight-normal']}>
                      <ProductTitle className="nametxt">
                        {item.product?.trim()}
                      </ProductTitle>
                    </ProductName>
                    <ProductPriceBox className={Utils['Mt-8']}>
                      <dt
                        className={`${Utils['Mr-8']} ${Utils['Weight-bold']}`}
                      >
                        48回払い
                      </dt>
                      {item.payment48 && (
                        <dd>
                          <span className={Utils['Weight-bold']}>
                            <AlphanumericNormal>
                              <TxtSize size="ll">
                                {(+item.payment48).toLocaleString()}
                              </TxtSize>
                            </AlphanumericNormal>
                            円
                          </span>
                          <TxtSize size="s"> /月〜</TxtSize>
                        </dd>
                      )}
                    </ProductPriceBox>
                  </div>
                )}
              </ProductInfo>
            )}

            <div className={Utils['Mt-8']}>
              <UpgradeProgram>
                <TxtSize size="s" as="div" className={Utils['Align-center']}>
                  <span className={Utils['Weight-bold']}>
                    買い替え超トクプログラムで
                  </span>
                  ※1
                  <br />
                  25カ月目に機種変更した場合
                </TxtSize>
                <div className={`${Utils['Mt-8']} fee`}>
                  <div>
                    <TxtSize size="s">支払い総額</TxtSize>
                    <br />
                    <ProductTotalPrice>
                      {item.payment1 && (+item.payment1).toLocaleString()}
                    </ProductTotalPrice>
                    円〜
                  </div>
                  <div className="payment48">
                    <span className={Utils['Color-primary']}>
                      <ProductDiscountPrice size="m">
                        {(+item.payment48 * 24).toLocaleString()}
                      </ProductDiscountPrice>
                      円～
                    </span>
                  </div>
                </div>
              </UpgradeProgram>
              {isPointBackPointIphone() && (
                <ProductPoint className={Utils['Mt-16']}>
                  {isIphonePreTxt() && (
                    <div className={Utils['Weight-bold']}>
                      <TxtSize size="s" className={Utils['Color-primary']}>
                        <IconCampaignLine />
                        キャンペーン
                      </TxtSize>
                      {isPointNote() && (
                        <div className={`${Utils['Mt-8']} points`}>
                          <TxtEmp02>
                            {item['upgrade-program-pointback-txt2']?.trim()}
                            {item['upgrade-program-pointback-num'] && (
                              <ProductDiscountPrice size="m">
                                {(+item[
                                  'upgrade-program-pointback-num'
                                ]).toLocaleString()}
                              </ProductDiscountPrice>
                            )}
                            {item['upgrade-program-pointback-txt3']?.trim()}
                            {item['upgrade-program-pointback-note'] && (
                              <TxtCap>
                                <TxtEmp02 className={Utils['Weight-normal']}>
                                  {' '}
                                  {item[
                                    'upgrade-program-pointback-note'
                                  ].trim()}
                                </TxtEmp02>
                              </TxtCap>
                            )}
                          </TxtEmp02>
                        </div>
                      )}
                    </div>
                  )}
                </ProductPoint>
              )}
            </div>

            <Btns className={Utils['Mt-16']}>
              <ButtonRegular
                as="a"
                href={`/product/iphone/${item.directory?.trim()}/?l-id=service_replacement-program_product_iphone_${item.directory?.trim()}`}
              >
                詳細を見る
              </ButtonRegular>
              <ButtonPrimary
                as="a"
                href={item.bss_url}
                data-ratid={`service_replacement-program_${item.directory?.trim()}_order-button_bss`}
                data-ratevent="click"
                data-ratparam="all"
              >
                購入する
              </ButtonPrimary>
            </Btns>
            {/* {item['iphone-card-note'] && (
              <TxtCap as="p" className={Utils['Mt-8']}>
                {item['iphone-card-note']}
              </TxtCap>
            )} */}
          </section>
        </ProductCard>
      )}
    </>
  )
}
