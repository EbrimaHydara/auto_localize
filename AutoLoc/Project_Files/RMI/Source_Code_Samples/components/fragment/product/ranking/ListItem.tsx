import React, { useEffect } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import {
  TxtCap,
  TxtEmp02,
  TxtEmp01,
  TxtSize,
  TxtNormal,
} from '@components/atoms/Txt'
import { CardNormal } from '@components/atoms/Card'
import { UlOnly } from '@components/atoms/List'
import { mixins } from '@components/utils/Mixins'
import { IconArrowUp, IconArrowDown, IconArrowRight } from '@components/icons'
import { fontRakutenSans } from '@styles/fonts'

const CardCustom = styled(CardNormal)`
  ${mixins.mq.MinL} {
    display: flex;
  }
`
const CardImg = styled.div`
  text-align: center;
  ${mixins.mq.MinL} {
    width: 160px;
  }
`
const CardLabel = styled.div`
  size: 20px;
  weight: 400;
  font-family: ${fontRakutenSans.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
  color: #ff008c;
  font-weight: bold;
`
const CardData = styled.div`
  margin-top: 16px;

  ${mixins.mq.MinL} {
    width: 296px;
    margin-top: 0;
    margin-left: 24px;
  }

  .label {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > div:first-of-type {
      margin-right: 8px;
    }
  }

  .price {
    margin-top: 20px;
    font-size: 13px;

    > dl + dl {
      margin-top: 4px;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      > dt {
        flex: 0 1 auto;
      }

      > dd {
        flex: 1 0 auto;
        text-align: right;
      }
    }
    .cap {
      font-size: 10px;
      + .item {
        margin-top: 10px;
      }
    }

    .result {
      text-align: right;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid ${props => props.theme.colors.monotone75};
    }
  }

  .sub {
    font-size: 13px;
    margin-top: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }
`
const PriceNum = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: ${fontRakutenSans.style.fontFamily}, var(--noto-sans-jp),
    sans-serif;
`
const CardFeature = styled.div`
  margin-top: 16px;
  ${mixins.mq.MinL} {
    width: calc(100% - (160px + 296px + 24px + 80px));
    margin-top: 0;
    margin-left: 80px;
  }
`
const TxtSizeWeightNormal = styled(TxtSize)`
  font-weight: normal;
`
const Rank = styled.div`
  color: ${props => props.theme.colors.white};
  padding: 0 8px;

  > span {
    margin-left: 4px;
    font-size: 20px;
    font-family: ${fontRakutenSans.style.fontFamily}, var(--noto-sans-jp),
      sans-serif;
    font-weight: bold;
    transform: translateY(1px);
    display: inline-block;
  }

  svg {
    transform: translateY(2px);
  }
  &.rank-1 {
    background-color: #ccbb1d;
  }
  &.rank-2 {
    background-color: ${props => props.theme.colors.monotone75};
  }
  &.rank-3 {
    background-color: #ca8a37;
  }
  &.rank-other {
    background: ${props => props.theme.colors.monotone93};
    color: ${props => props.theme.colors.lightBlack};

    svg path {
      fill: ${props => props.theme.colors.lightBlack};
    }
  }
`
const Trend = styled.div`
  font-size: 13px;
  font-weight: bold;
  > span {
    font-size: 14px;
    font-weight: normal;
    margin-right: 4px;
  }
`

interface ListItemProps {
  device: { [key: string]: string }
}
export const ListItem = (props: ListItemProps) => {
  const { device } = props
  const isApple = () => {
    return device.manufacturer && device.manufacturer.trim() === 'Apple'
  }
  const isRakuten = () => {
    return (
      device.manufacturer && device.manufacturer.trim() === 'Rakuten Mobile'
    )
  }
  const linkPath = () => {
    return isApple()
      ? `/product/iphone/${device.directory.trim()}/?l-id=product_ranking_iphone_${device.directory.trim()}`
      : isRakuten()
      ? `/product/smartphone/${device.directory.trim()}/?l-id=product_ranking_rakuten_${device.directory.trim()}`
      : `/product/smartphone/${device.directory.trim()}/?l-id=product_ranking_smartphone_${device.directory.trim()}`
  }
  const isNew = () => {
    return device['rank-last-month'].trim() === '' ? true : false
  }
  const imgPath = () => {
    const iphoneImgName = device.directory.split('-').join('').trim()
    const param =
      device.update && device.update.trim() !== ''
        ? `?${device.update.trim()}`
        : ''

    return isApple()
      ? `/img/product/iphone/top/thumb-${iphoneImgName}.png${param}`
      : `/img/product/${device.directory.trim()}/pht-device-01.png${param}`
  }
  const displayRereaseDate = () => {
    const splitDate = device.release.split('/')
    return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日`
  }
  const displayPayment48 = () => {
    return (+device.payment48).toLocaleString()
  }
  const isPayment48Note = () => {
    return device['payment48-text'] && device['payment48-text'].trim() !== ''
  }
  const isDiscount = () => {
    return device['discount_text'] !== '' && device['discount'] !== ''
  }
  const displayPayment1 = () => {
    return (+device.payment1).toLocaleString()
  }
  const displayDiscount = () => {
    return (+device.discount).toLocaleString()
  }
  const isCancellation = () => {
    return device.strikethrough && device.strikethrough.trim() !== ''
  }
  const displayPrice = () => {
    return (+device.price2).toLocaleString()
  }
  const displayCancellationPrice = () => {
    return (+device.strikethrough).toLocaleString()
  }
  const displayPointBackPointIphone = () => {
    return (+device['top-carousel-pointback-num']).toLocaleString()
  }
  const displayResultPrice = () => {
    const originalPrice = parseInt(device.price2, 10) || 0
    const point1 = parseInt(device.point1, 10) || 0
    const point2 = parseInt(device.point2, 10) || 0

    const resultPrice = originalPrice - point1 - point2
    return resultPrice > 0 ? resultPrice.toLocaleString() : '0'
  }
  const isPointBack3 = () => {
    return device.point3 && device.point3.trim() !== ''
  }
  const noteList = () => {
    return device.note.split('\n')
  }
  const isPointBack1 = () => {
    return device.point1 && device.point1.trim() !== ''
  }
  const isPointBack2 = () => {
    return device.point2 && device.point2.trim() !== ''
  }
  const displayPointBackPoint1 = () => {
    return (+device.point1).toLocaleString()
  }
  const displayPointBackPoint2 = () => {
    return (+device.point2).toLocaleString()
  }
  const displayPointBackPoint3 = () => {
    return (+device.point3).toLocaleString()
  }
  const rankLabelClass = () => {
    const rankingNum = /^[1-3]$/.test(device['rank-this-month'])
      ? device['rank-this-month']
      : 'other'

    return 'rank-' + rankingNum
  }
  const trendClass = () => {
    const ns = 'rank-'
    return +device['rank-this-month'] < +device['rank-last-month']
      ? ns + 'up'
      : +device['rank-this-month'] > +device['rank-last-month']
      ? ns + 'down'
      : ns + 'stay'
  }
  const trendText = () => {
    return +device['rank-this-month'] < +device['rank-last-month']
      ? 'UP'
      : +device['rank-this-month'] > +device['rank-last-month']
      ? 'Down'
      : 'Stay'
  }
  const brInlistTransform = (text: string) => {
    if (/\n/.test(text)) {
      const textList = text
        .trim()
        .split('\n')
        .map((elem, i) => {
          const trimText = text.trim()
          if (/^※/.test(trimText)) {
            return (
              <TxtCap
                key={i}
                className={Utils['Ml-0']}
                style={{ display: 'block' }}
              >
                {trimText}
              </TxtCap>
            )
          } else {
            const resultArr = trimText.split('※')
            return resultArr.map((elemC, i) => {
              if (i === 0) {
                return <React.Fragment key={i}>{elemC}</React.Fragment>
              } else {
                return (
                  <React.Fragment key={i}>
                    <small>※</small>
                    {elemC}
                  </React.Fragment>
                )
              }
            })
          }
        })

      return textList.map((elem, i, arr) => {
        if (i !== arr.length - 1) {
          return (
            <React.Fragment key={i}>
              {elem}
              <br />
            </React.Fragment>
          )
        } else {
          return <React.Fragment key={i}>{elem}</React.Fragment>
        }
      })
    } else {
      const trimText = text.trim()
      if (/^※/.test(trimText)) {
        return (
          <TxtCap className={Utils['Ml-0']} style={{ display: 'block' }}>
            {trimText}
          </TxtCap>
        )
      } else {
        const resultArr = trimText.split('※')
        return resultArr.map((elemC, i) => {
          if (i === 0) {
            return <React.Fragment key={i}>{elemC}</React.Fragment>
          } else {
            return (
              <React.Fragment key={i}>
                <small>※</small>
                {elemC}
              </React.Fragment>
            )
          }
        })
      }
    }
  }

  useEffect(() => {
    console.log(device)
  })

  return (
    <li>
      <CardCustom href={linkPath()}>
        <CardImg>
          <CardLabel>{isNew() && <span>NEW</span>}</CardLabel>

          <figure>
            <img src={imgPath()} alt="" width="160" />
          </figure>
        </CardImg>

        <CardData>
          <div className="label">
            <Rank className={rankLabelClass()}>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.14299 11L2.69449 6.082L4.41899 7.3135L5.25899 7.914L5.83199 7.0545L7.99999 3.8025L10.168 7.0545L10.7405 7.914L11.581 7.3135L13.3055 6.082L12.857 11H3.14299ZM11 6.5L8 2L5 6.5L1.5 4L2.23 12H2.5H3.2345H12.7655H13.5H13.77L14.5 4L11 6.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.583 14L3.41653 13.9955L3.32553 13H2.32153L2.42053 14.087C2.46553 14.6035 2.89803 15 3.41703 15H12.583C13.102 15 13.5345 14.6035 13.5795 14.087L13.6785 13H12.6745L12.583 14Z"
                  fill="white"
                />
              </svg>
              <span>{device['rank-this-month']}</span>位
            </Rank>
            {!isNew() && (
              <Trend className={trendClass()}>
                {(() => {
                  if (trendText() === 'UP') {
                    return <IconArrowUp />
                  } else if (trendText() === 'Down') {
                    return <IconArrowDown />
                  } else {
                    return <IconArrowRight />
                  }
                })()}
                {trendText()}
              </Trend>
            )}
          </div>

          <Heading level="2" className={Utils['Mt-8']}>
            {device.product}
          </Heading>
          <div className="sub">
            <div>{device.manufacturer}</div>
            <TxtCap as="div" className={Utils['Ml-16']}>
              発売日:{displayRereaseDate()}
            </TxtCap>
          </div>

          <div className="price">
            {/* Appleの場合 */}
            {isApple() ? (
              <>
                <dl className="item">
                  <dt>48回払い（税込）</dt>
                  <TxtEmp01 as="dd">
                    月々<PriceNum>{displayPayment48()}</PriceNum>円～
                  </TxtEmp01>
                </dl>
                {isPayment48Note() && (
                  <p className="cap">
                    {device['payment48-text']}
                    {device['ranking-iphone-note1']}
                  </p>
                )}
                <dl className="item">
                  <dt>一括払い（税込）</dt>
                  {isDiscount() ? (
                    <dd>
                      <del>{displayPayment1()}円</del>→
                      <TxtNormal>
                        <TxtEmp01>{displayDiscount()}</TxtEmp01>
                      </TxtNormal>
                      円～
                    </dd>
                  ) : (
                    <dd>
                      <TxtNormal>
                        <TxtEmp01>{displayPayment1()}</TxtEmp01>
                      </TxtNormal>
                      円～
                    </dd>
                  )}
                </dl>
              </>
            ) : (
              <>
                {/* Rakutenオリジナル・Androidの場合 */}
                <dl className="item">
                  <dt>製品価格（税込）</dt>
                  <TxtEmp01 as="dd">
                    {isCancellation() && (
                      <TxtSizeWeightNormal size="s">
                        <span style={{ textDecoration: 'line-through' }}>
                          {displayCancellationPrice()}円
                        </span>{' '}
                        →
                      </TxtSizeWeightNormal>
                    )}
                    <PriceNum>{displayPrice()}</PriceNum>円
                  </TxtEmp01>
                </dl>
                {isPointBack1() && (
                  <dl className="item">
                    <dt style={{ fontSize: '12px' }}>
                      <TxtEmp02>
                        {device['pointback-pre-text1']}
                        <span style={{ fontSize: '17px' }}>
                          {displayPointBackPoint1()}
                        </span>
                        ポイント{device['pointback-post-text1']}
                        {device['ranking-note1']}
                      </TxtEmp02>
                    </dt>
                    <dd>
                      <TxtEmp02>
                        <PriceNum>-{displayPointBackPoint1()}</PriceNum>pt
                      </TxtEmp02>
                    </dd>
                  </dl>
                )}
                {isPointBack2() && (
                  <dl className="item">
                    <dt style={{ fontSize: '12px' }}>
                      <TxtEmp02>
                        {device['pointback-pre-text2']}
                        <span style={{ fontSize: '17px' }}>
                          {displayPointBackPoint2()}
                        </span>
                        ポイント{device['pointback-post-text2']}
                        {device['ranking-note2']}
                      </TxtEmp02>
                    </dt>
                    <dd>
                      <TxtEmp02>
                        <PriceNum>-{displayPointBackPoint2()}</PriceNum>pt
                      </TxtEmp02>
                    </dd>
                  </dl>
                )}
              </>
            )}
            <div className="result">
              {/* <!-- Appleの場合(計算結果) --> */}
              {isApple() ? (
                <TxtEmp02 as="div">
                  {device['top-carousel-iphone-pre-text']}
                  {device['top-carousel-iphone-pre-text2']}
                  {device['top-carousel-pointback-txt2']}
                  <PriceNum>{displayPointBackPointIphone()}</PriceNum>
                  {device['top-carousel-pointback-txt3']}
                  {device['ranking-iphone-note2']}
                </TxtEmp02>
              ) : (
                <TxtSize size="s" as="div">
                  {/* Rakutenオリジナル・Androidの場合(計算結果) */}
                  <TxtEmp01>
                    実質<PriceNum>{displayResultPrice()}</PriceNum>円
                  </TxtEmp01>
                </TxtSize>
              )}
              {isPointBack3() && (
                <TxtSize size="s" as="div">
                  <TxtEmp02>
                    {device['pointback-pre-text3']}
                    <span className="product-ranking-Card_Price-num">
                      {displayPointBackPoint3()}
                    </span>
                    ポイント{device['pointback-post-text3']}
                    {device['ranking-note3']}
                  </TxtEmp02>
                </TxtSize>
              )}
            </div>
          </div>
        </CardData>

        <CardFeature>
          <Heading level="4">特長</Heading>

          <UlOnly>
            <li className={Utils['Mt-8']}>
              {brInlistTransform(device.feature1)}
            </li>
            <li className={Utils['Mt-8']}>
              {brInlistTransform(device.feature2)}
            </li>
            <li className={Utils['Mt-8']}>
              {brInlistTransform(device.feature3)}
            </li>
          </UlOnly>

          <div className={Utils['Mt-16']}>
            {noteList().map((elem, i) => (
              <TxtCap key={i} as="p">
                {elem.trim()}
              </TxtCap>
            ))}
          </div>
        </CardFeature>
      </CardCustom>
    </li>
  )
}
