import React, { useEffect } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import {
  TxtCap,
  TxtSize,
  TxtEmp01,
  TxtEmp02,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { IconCampaignLine, IconSmartphoneLine } from '@components/icons'
import { ButtonRegular, ButtonPrimary } from '@components/atoms/Buttons'
import { fontRakutenSans, fontRakutenSansUi } from '@styles/fonts'

const CardItem = styled.li`
  width: 100%;
  padding: 16px;
  border: solid 1px ${props => props.theme.colors.monotone88};
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
`

const LabelList = styled.ul`
  display: flex;
  gap: 6px;
  min-height: 28px;
`

const LabelItem = styled.li`
  font-size: 13px;
  border-radius: 4px;
`

const LabelItemNew = styled(LabelItem)`
  padding: 4px 16px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`

const LabelItemPriceDown = styled(LabelItem)`
  padding: 4px 12px;
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.alertText};
`

const LabelItemPreOrder = styled(LabelItem)`
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.primary};
`
const LabelItemDiscount = styled(LabelItem)`
  padding: 4px 12px;
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.alertText};
`

const CardText01 = styled.span`
  font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
  font-size: 22px;
  font-weight: bold;
  line-height: 1;
`

const CardText02 = styled.span`
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
`

const CardText04 = styled.span`
  font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
  font-size: ${props => props.theme.fonts.xl};
  font-weight: bold;
  line-height: 1;
`

const CardText05 = styled.span`
  font-family: ${fontRakutenSansUi.style.fontFamily}, sans-serif;
  font-size: ${props => props.theme.fonts.s};
  line-height: 1;
  text-decoration-line: line-through;
`

const CardArrow = styled.span`
  margin: 0 2px;
`

const IphoneCardArrow = styled.span`
  margin: 0 4px;
`

const CardGrid = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .program {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.textSecondary};
    dt {
      display: flex;
      flex-direction: column;
    }
    dd {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }
  }
  &.android {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 0px 8px;
    grid-template-areas:
      'img text'
      'img pay'
      'program program';
    margin-top: 6px;
    .img {
      grid-area: img;
      height: 120px;
      width: 80px;
      text-align: center;
      img {
        height: 100%;
      }
    }
    .text {
      grid-area: text;
      flex-grow: 1;
      margin-top: 10px;
    }
    .program {
      grid-area: program;
      .only-program {
        display: none;
      }
    }
  }
  &.iphone {
    margin-top: 4px;
    .img {
      height: 160px;
      margin-top: -4px;
      text-align: center;
      img {
        height: 100%;
      }
    }
    .program {
      margin-top: 12px;
    }
  }
`

const CardDListPrice = styled.dl`
  display: flex;
  gap: 20px;
  color: ${props => props.theme.colors.textSecondary};
  dd {
    display: flex;
    align-items: baseline;
  }
`

const CardDListDoublePrice = styled.dl`
  color: ${props => props.theme.colors.textSecondary};
  dd {
    display: flex;
    align-items: baseline;
  }
`

const IphoneCardDListDoublePrice = styled(CardDListDoublePrice)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const CardCampaign = styled.div`
  padding: 8px;
  margin-top: 12px;
  background-color: ${props => props.theme.colors.pink5};
  > p {
    color: ${props => props.theme.colors.primary};
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
`

const CardDListCampaign = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 4px;
  padding: 2px 0;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};
  > span {
    display: flex;
    align-items: baseline;
    gap: 2px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  a {
    width: calc((100% - 12px) / 2);
    min-width: auto;
    font-size: 13px;
  }
`

const CardDListSpec = styled.dl`
  background-color: ${props => props.theme.colors.monotone97};
  margin-top: 12px;
  padding: 6px 8px 8px;
  border-radius: 4px;
  dt {
    font-size: 12px;
    text-align: center;
    border-bottom: solid 1px ${props => props.theme.colors.monotone88};
    padding-bottom: 6px;
    margin-bottom: 6px;
  }
`

interface ProductCardProps {
  type: 'iPhone' | 'Android'
  directory: string
  newFlag: string
  saleFlag: string
  releaseFlag?: string
  productName: string
  price: string
  price48: string
  programNote: string
  setPoint: string
  setPointNote: string
  bssUrl: string
  iphoneDiscountPrice?: string
  discountText?: string
  // only Android
  release?: string
  strikethrough?: string
  isShowSpec?: boolean
  spec?: string
  cardNote?: string
  txt1?: string
  txt2?: string
}

export const ProductCard = ({
  type,
  directory,
  newFlag,
  saleFlag,
  releaseFlag,
  productName,
  price,
  price48,
  programNote,
  setPoint,
  setPointNote,
  bssUrl,
  iphoneDiscountPrice,
  discountText,
  release,
  strikethrough,
  isShowSpec,
  spec,
  cardNote,
  txt1,
  txt2,
}: ProductCardProps) => {
  const isAndroid = type === 'Android'
  const imgPath = isAndroid ? directory : `iphone/${directory}`
  const linkPath = isAndroid ? `smartphone` : `iphone`
  const lId = isAndroid
    ? `?l-id=product_top_${directory}`
    : `?l-id=product_iphone_product_iphone_${directory}`
  const ratId = isAndroid
    ? `product_smartphone_${directory}_order-button_bss`
    : `product_iphone_${directory}_order-button_bss`

  const convertDate = (date: string) => {
    const dt = new Date(date)
    const y = dt.getFullYear()
    const m = dt.getMonth() + 1
    const d = dt.getDate()
    const releaseDate = y + '年' + m + '月' + d + '日'
    return releaseDate
  }

  const setComma = (strNum?: string) => {
    const num = Number(strNum).toLocaleString()
    return num
  }

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

  return (
    <CardItem key={directory}>
      <LabelList>
        {newFlag && <LabelItemNew className="new">NEW</LabelItemNew>}
        {saleFlag && (
          <LabelItemPriceDown className="pricedown">
            {saleFlag}
          </LabelItemPriceDown>
        )}
        {releaseFlag && (
          <LabelItemPreOrder>
            <TxtEmp02>{releaseFlag}</TxtEmp02>
          </LabelItemPreOrder>
        )}
        {discountText && <LabelItemDiscount>{discountText}</LabelItemDiscount>}
      </LabelList>
      <CardGrid className={isAndroid ? 'android' : 'iphone'}>
        <div className="text">
          <h3>
            <CardText01>{productName}</CardText01>
          </h3>
          {isAndroid && release && (
            <TxtCap as="p">{convertDate(release)}発売</TxtCap>
          )}
          {strikethrough || iphoneDiscountPrice ? (
            <>
              {iphoneDiscountPrice ? (
                <IphoneCardDListDoublePrice>
                  <dt>
                    <TxtSize size="s">製品価格</TxtSize>
                  </dt>
                  <dd>
                    <CardText05>{setComma(iphoneDiscountPrice)}</CardText05>
                    <TxtSize size="s">
                      円〜*<IphoneCardArrow>→</IphoneCardArrow>
                    </TxtSize>
                    <CardText02>{setComma(price)}</CardText02>
                    <TxtSize size="s">円〜</TxtSize>
                  </dd>
                </IphoneCardDListDoublePrice>
              ) : (
                <CardDListDoublePrice>
                  <dt>
                    <TxtSize size="s">製品価格</TxtSize>
                  </dt>
                  <dd>
                    <CardText05>{setComma(strikethrough)}</CardText05>
                    <TxtSize size="s">
                      円※<CardArrow>→</CardArrow>
                    </TxtSize>
                    <CardText02>{setComma(price)}</CardText02>
                    <TxtSize size="s">円</TxtSize>
                  </dd>
                </CardDListDoublePrice>
              )}
            </>
          ) : (
            <CardDListPrice>
              <dt>
                {directory === 'iphone-13-mini' ? (
                  <TxtSize size="s">
                    <TxtEmp02>キャンペーン特価※6</TxtEmp02>
                  </TxtSize>
                ) : (
                  <TxtSize size="s">製品価格</TxtSize>
                )}
              </dt>
              <dd>
                <CardText02>{setComma(price)}</CardText02>
                <TxtSize size="s">円{type === 'iPhone' && '〜'}</TxtSize>
              </dd>
            </CardDListPrice>
          )}
        </div>
        <div className="img">
          <img
            src={`${assets}img/product/${imgPath}/pht-device-thumb.png`}
            height={isAndroid ? '120px' : '160px'}
            alt=""
          />
        </div>
        <div className="program">
          <dt>
            <p>
              <TxtEmp01>{isAndroid ? '48回払いの場合' : '48回払い'}</TxtEmp01>
              <TxtCap>{programNote}</TxtCap>
            </p>
            {!isAndroid && <TxtCap as="p">買い替え超トクプログラム</TxtCap>}
          </dt>
          <dd>
            <TxtEmp01>
              <CardText04>{setComma(price48)}</CardText04>円
            </TxtEmp01>
            <p>/月{type === 'iPhone' && '〜'}</p>
          </dd>
        </div>
      </CardGrid>
      <CardCampaign>
        <p>
          <IconCampaignLine />
          キャンペーン
        </p>
        <div>
          <CardDListCampaign>
            <TxtEmp02>
              <TxtSize size="ss">{isAndroid ? txt1 : '最大'}</TxtSize>
              <AlphanumericSize size="m">{setComma(setPoint)}</AlphanumericSize>
              {isAndroid ? (
                <TxtSize size="s">{txt2}</TxtSize>
              ) : (
                <TxtSize size="s">円相当おトク！</TxtSize>
              )}
            </TxtEmp02>
            <TxtSize size="ss">{setPointNote}</TxtSize>
          </CardDListCampaign>
        </div>
      </CardCampaign>
      <ButtonWrapper>
        <ButtonRegular as="a" href={`/product/${linkPath}/${directory}/${lId}`}>
          詳細を見る
        </ButtonRegular>
        <ButtonPrimary
          as="a"
          href={bssUrl}
          data-ratid={ratId}
          data-ratevent="click"
          data-ratparam="all"
        >
          購入する
        </ButtonPrimary>
      </ButtonWrapper>
      {isShowSpec && (
        <CardDListSpec>
          <dt>
            <IconSmartphoneLine />
            スペック
          </dt>
          <dd>
            <TxtSize size="s">{spec}</TxtSize>
          </dd>
        </CardDListSpec>
      )}
      {cardNote && (
        <TxtCap as="p" className={Utils['Mt-8']}>
          {cardNote}
        </TxtCap>
      )}
    </CardItem>
  )
}
