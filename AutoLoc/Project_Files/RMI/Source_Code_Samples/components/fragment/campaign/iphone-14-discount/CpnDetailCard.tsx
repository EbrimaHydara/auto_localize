import Utils from '@styles/Utils.module.scss'
import { LinkIconBefore } from '@components/atoms/Link'
import { TxtCap } from '@components/atoms/Txt'
import { IconArrowDown } from '@components/icons'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { anchorCallback } from '@components/utils/anchorCallback'
import { Tab } from '@components/atoms/Tab'

const Dl = styled.dl`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 24px;
  ${mixins.mq.MaxM} {
    margin-bottom: 16px;
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }
  > div {
    width: 100%;
    padding: 16px;
    background: ${props => props.theme.colors.white};
    position: relative;
    &:not(:last-child)::after {
      content: url(${assets}img/common/icon-cpn-plus.svg);
      position: absolute;
      bottom: calc(50% - 16px);
      right: -28px;
      z-index: 1;
      ${mixins.mq.MaxM} {
        display: none;
      }
    }
    dd {
      padding: 16px 0;
      text-align: center;
    }
  }
  .anchor {
    margin: 8px auto 0;
  }
  ${mixins.mq.MinL} {
    .wrapper-1 {
      width: 680px;
    }
    .wrapper-2 {
      width: 328px;
    }
    .wrapper-3 {
      width: 436px;
    }
    .wrapper-4,
    .wrapper-5 {
      width: 274px;
    }
  }
`
const Title = styled.dt`
  padding: 6px;
  background: ${props => props.theme.colors.pink10};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.m};
  font-weight: bold;
  text-align: center;
  ${mixins.mq.MaxM} {
    font-size: 18px;
  }
`
export const CpnDetailCard = (props: { className?: string }) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <Tab
        {...props}
        heading1={'他社から乗り換えの方'}
        id1="tab1"
        id2="tab2"
        content1={
          <>
            <Dl>
              <div className="wrapper-1">
                <Title>キャンペーン1</Title>
                <dd>
                  <div className="img-wrapper-1">
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-1-1-sp.png`}
                        width="80%"
                      />
                      <img
                        src={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-1-1-pc.png`}
                        width="393"
                        height="93"
                        alt="iPhone 14(128GB)を一括または24回払いで購入+ 楽天モバイル申し込み 20,000円値引き"
                      />
                    </picture>
                  </div>
                  <LinkIconBefore
                    href="#campaign-rule2169"
                    onClick={e => anchorCallback(e, 'campaign-rule2169')}
                    className="anchor"
                  >
                    <IconArrowDown />
                    キャンペーンルール
                  </LinkIconBefore>
                  <TxtCap as="p" className={`cap-1 ${Utils['Mt-16']}`}>
                    ※「48回払い（楽天モバイル買い替え超トクプログラム）」での購入はキャンペーン対象外となります。
                  </TxtCap>
                </dd>
              </div>
              <div className="wrapper-2">
                <Title>キャンペーン2</Title>
                <dd>
                  <div className="img-wrapper-2">
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-1-2-sp.png`}
                        width="80%"
                      />
                      <img
                        src={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-1-2-pc.png`}
                        width="253"
                        height="47"
                        alt="電話番号そのまま乗り換え+楽天モバイル初めて申し込み 13,000ポイント※1"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <LinkIconBefore
                    href="#campaign-rule2091"
                    onClick={e => anchorCallback(e, 'campaign-rule2091')}
                    className="anchor"
                  >
                    <IconArrowDown />
                    キャンペーンルール
                  </LinkIconBefore>
                </dd>
              </div>
            </Dl>
          </>
        }
        heading2={'他社から乗り換え以外の方'}
        content2={
          <>
            <Dl>
              <div className="wrapper-3">
                <Title>キャンペーン1</Title>
                <dd>
                  <div>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-2-1-sp.png`}
                        width="80%"
                      />
                      <img
                        src={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-2-1-pc.png`}
                        width="383"
                        height="93"
                        alt="iPhone 14(128GB)を一括または24回払いで購入+ 楽天モバイル申し込み 20,000円値引き"
                      />
                    </picture>
                  </div>
                  <LinkIconBefore
                    href="#campaign-rule2169"
                    onClick={e => anchorCallback(e, 'campaign-rule2169')}
                    className="anchor"
                  >
                    <IconArrowDown />
                    キャンペーンルール
                  </LinkIconBefore>
                  <TxtCap as="p" className={Utils['Mt-16']}>
                    ※「48回払い（楽天モバイル買い替え超トクプログラム）」での購入はキャンペーン対象外となります。
                  </TxtCap>
                </dd>
              </div>
              <div className="wrapper-4">
                <Title>キャンペーン2</Title>
                <dd>
                  <div>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-2-2-sp.png`}
                        width="80%"
                      />
                      <img
                        src={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-2-2-pc.png`}
                        width="222"
                        height="98"
                        alt="楽天モバイル初めて申し込み+ iPhone購入 6,000ポイント※2"
                      />
                    </picture>
                  </div>
                  <LinkIconBefore
                    href="#campaign-rule1819"
                    onClick={e => anchorCallback(e, 'campaign-rule1819')}
                    className="anchor"
                  >
                    <IconArrowDown />
                    キャンペーンルール
                  </LinkIconBefore>
                </dd>
              </div>
              <div className="wrapper-5">
                <Title>キャンペーン3</Title>
                <dd>
                  <div>
                    <picture>
                      <source
                        media={`(max-width: ${theme.max.m})`}
                        srcSet={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-2-3-sp.png`}
                        width="80%"
                      />
                      <img
                        src={`${assets}img/campaign/iphone-14-discount/img-cpn-detail-2-3-pc.png`}
                        width="253"
                        height="98"
                        alt="楽天モバイル初めて申し込み2,000ポイント※3"
                      />
                    </picture>
                  </div>
                  <LinkIconBefore
                    href="#campaign-rule2142"
                    onClick={e => anchorCallback(e, 'campaign-rule2142')}
                    className="anchor"
                  >
                    <IconArrowDown />
                    キャンペーンルール
                  </LinkIconBefore>
                </dd>
              </div>
            </Dl>
          </>
        }
      ></Tab>
    </>
  )
}
