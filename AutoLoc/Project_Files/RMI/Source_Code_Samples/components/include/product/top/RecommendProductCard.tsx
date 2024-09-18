import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { CardNormal } from '@components/atoms/Card'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { TxtEmp02, TxtCap } from '@components/atoms/Txt'
import { IconCampaignLine } from '@components/icons'
import { LazyLoadImage } from '@components/atoms/EmblaCarouselLazyLoadImage'
import Utils from '@styles/Utils.module.scss'

const CardNormalCustom = styled(CardNormal)`
  margin-inline: auto;
  padding: 0;
  border-radius: 4px;
`
const GridBox = styled.div`
  font-weight: bold;
  padding: 8px;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 8px 8px 16px;
  height: 100%;
  ${mixins.mq.MinL} {
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    flex-grow: 1;
    gap: 8px;
  }
`
const GridImg = styled.img`
  max-width: max-content;
  max-width: 100%;
  height: auto;
  overflow: hidden;
`
const GridTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  ${mixins.mq.MinL} {
    font-size: 20px;
  }
`
const CardImgBox = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    width: 80px;
  }
`
const GridPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: ${props => props.theme.colors.lightBlack};

  dt {
    font-size: 13px;
  }
  dl {
    display: block;
    text-align: right;
    font-size: 16px;
    .strikethrough {
      text-decoration-line: line-through;
    }
  }
`
const CardLabel = styled.div`
  padding: 4px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.pink10};
  ${mixins.mq.MaxS} {
    width: 100%;
  }
`
const NewLabel = styled(CardLabel)`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
`
const DiscountLabel = styled(CardLabel)`
  color: ${props => props.theme.colors.alertText};
  background: ${props => props.theme.colors.yellow};
`
const GridTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  justify-content: space-between;
  flex-grow: 1;
  ${mixins.mq.MinL} {
    justify-content: space-between;
    height: 100%;
  }
`
const GridPriceYen = styled.span`
  padding-left: 4px;
  font-size: 12px;
`
const OriginalPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  ${GridPriceYen} {
    font-weight: normal;
  }
  ${TxtCap} {
    font-weight: normal;
  }
`
const DiscountPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  ${GridPriceYen} {
    font-weight: normal;
  }
`

const CampaignBox = styled.div`
  margin-top: 4px;
  padding: 4px 0;
  font-size: 12px;
  text-align: center;
  color: ${props => props.theme.colors.pink100};
  background: #fff2f9;
`

const ReductionPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  font-size: 20px;
  ${TxtCap} {
    color: ${props => props.theme.colors.pink100};
  }
`
const CampaignTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
`
const ProductMaxTxt = styled.span`
  font-size: 13px;
  font-weight: bold;
`
const ProductPointTxt = styled.span`
  font-size: 13px;
  font-weight: bold;
`
const TxtEmp02Costom = styled(TxtEmp02)`
  font-size: 26px;
  margin-inline: 2px;
`

export interface recommendProps {
  deviceData: any
  index: string | number
  lazy?: boolean
  inView: boolean
  suffix?: string
}

export const ProductTopRecommendCard: React.FC<recommendProps> = ({
  deviceData,
  index,
  lazy,
  inView,
  suffix,
}) => {
  const [isAppleState, updateIsAppleState] = useState<boolean>()

  const linkPath = () => {
    return isAppleState
      ? `/product/iphone/${deviceData.directory.trim()}/${deviceData.lid}${
          suffix || ''
        }`
      : `/product/smartphone/${deviceData.directory.trim()}/${deviceData.lid}${
          suffix || ''
        }`
  }

  // おすすめ製品データ取得
  const updateImgData = useCallback(() => {
    const isApples = deviceData.product.indexOf('iPhone') !== -1
    const param =
      deviceData.update && deviceData.update.trim() !== ''
        ? `?${deviceData.update.trim()}`
        : ''
    const imgPathState = isApples
      ? `${assets}img/product/iphone/${deviceData.directory.trim()}/rank-thumb.png${param}`
      : `${assets}img/product/${deviceData.directory.trim()}/rank-thumb.png${param}`
    updateIsAppleState(isApples)
    return imgPathState
  }, [deviceData])

  const [imgPathState] = useState<string>(updateImgData)

  return (
    <>
      <CardNormalCustom className="slideItem" href={linkPath()} key={index}>
        {deviceData.new_label && <NewLabel>{deviceData.new_label}</NewLabel>}
        {deviceData.discount_label && (
          <DiscountLabel>{deviceData.discount_label}</DiscountLabel>
        )}
        {!deviceData.new_label && !deviceData.discount_label && (
          <CardLabel>キャンペーン対象</CardLabel>
        )}
        <GridBox>
          <CardImgBox>
            {lazy ? (
              <LazyLoadImage
                imgSrc={imgPathState ? imgPathState : ''}
                width="80"
                height="80"
                alt={deviceData.product}
                inView={inView}
              />
            ) : (
              <GridImg
                src={imgPathState}
                alt={deviceData.product}
                width="80"
                height="80"
              />
            )}
          </CardImgBox>
          <GridTxtBox>
            <div>
              <GridTitle>{deviceData.product}</GridTitle>
              <GridPrice>
                <dt>製品価格</dt>
                <dl>
                  {isAppleState ? (
                    <>
                      {deviceData.discount ? (
                        <>
                          <OriginalPrice>
                            <span className="strikethrough">
                              {(+deviceData.discount).toLocaleString()}
                            </span>
                            <GridPriceYen>円</GridPriceYen>
                            <TxtCap>{deviceData.discount_note}</TxtCap>
                          </OriginalPrice>
                          <DiscountPrice>
                            {(+deviceData.payment1).toLocaleString()}
                            <GridPriceYen>円~</GridPriceYen>
                          </DiscountPrice>
                        </>
                      ) : (
                        <OriginalPrice>
                          {(+deviceData.payment1).toLocaleString()}
                          <GridPriceYen>円~</GridPriceYen>
                        </OriginalPrice>
                      )}
                    </>
                  ) : (
                    <>
                      {deviceData.strikethrough ? (
                        <>
                          <OriginalPrice>
                            <span className="strikethrough">
                              {(+deviceData.strikethrough).toLocaleString()}
                            </span>
                            <GridPriceYen>円</GridPriceYen>
                            <TxtCap>{deviceData.discount_note}</TxtCap>
                          </OriginalPrice>
                          <DiscountPrice>
                            {(+deviceData.price2).toLocaleString()}
                            <GridPriceYen>円</GridPriceYen>
                          </DiscountPrice>
                        </>
                      ) : (
                        <OriginalPrice>
                          {(+deviceData.price2).toLocaleString()}
                          <GridPriceYen>円</GridPriceYen>
                        </OriginalPrice>
                      )}
                    </>
                  )}
                </dl>
              </GridPrice>
            </div>
            <CampaignBox>
              <CampaignTitle>
                <IconCampaignLine />
                キャンペーン
              </CampaignTitle>
              <ReductionPoint>
                {deviceData.cpn_txt1 && <ProductMaxTxt>最大</ProductMaxTxt>}
                {isAppleState ? (
                  <TxtEmp02Costom>
                    {(+deviceData[
                      'top-carousel-pointback-num'
                    ]).toLocaleString()}
                  </TxtEmp02Costom>
                ) : (
                  <TxtEmp02Costom>
                    {(+deviceData.pointtotal).toLocaleString()}
                  </TxtEmp02Costom>
                )}
                <ProductPointTxt>{deviceData.cpn_txt2}</ProductPointTxt>
              </ReductionPoint>
              <TxtCap className={Utils['Color-primary']}>
                {deviceData.cpn_note}
              </TxtCap>
            </CampaignBox>
          </GridTxtBox>
        </GridBox>
      </CardNormalCustom>
    </>
  )
}
