import { useContext } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'

const Div = styled.div`
  display: grid;
  ${mixins.mq.MaxM} {
    border: 1px solid #e0e0e0;
    justify-items: center;
  }
`
const BgImg = styled.picture`
  grid-area: 1/-1;
  ${mixins.mq.MaxM} {
    height: 110vw;
    overflow: hidden;
  }
  // 元コードが力技すぎる...
  // デザインが確認できればなんとかなるんだが
  @media screen and (max-width: 610px) {
    height: 113vw;
  }
  @media screen and (max-width: 540px) {
    height: 115vw;
  }
  @media screen and (max-width: 500px) {
    height: 119vw;
  }
  @media screen and (max-width: 440px) {
    height: 123vw;
  }
  ${mixins.mq.MaxS} {
    height: 127vw;
  }
  @media screen and (max-width: 360px) {
    height: 133vw;
  }
  & > img {
    @media screen and (min-width: 1064px) {
      min-width: 998px;
      min-height: 221px;
    }
  }
`
const Btns = styled.div`
  margin-top: 80.5px;
  margin-right: 15px;
  margin-left: auto;
  max-width: 286px;
  grid-area: 1/-1;
  text-align: right;
  ${mixins.mq.MaxL} {
    margin-top: 7.6vw;
    margin-right: 1.4vw;
  }
  ${mixins.mq.MaxM} {
    margin-top: 85.5vw;
    max-width: 1064px;
    width: 100%;
    padding: 0 16px;
  }
`
const Btn = styled(ButtonSecondaryLarge)`
  max-width: 256px;
  max-height: 59px;
  padding: 16.5px;
  font-size: 16px;
  ${mixins.mq.MaxL} {
    max-width: 768px;
    padding: 1.55vw 0;
    width: 24vw;
    font-size: 1.505vw;
  }
  ${mixins.mq.MaxM} {
    width: 100%;
    padding: 17.5px;
    font-size: 16px;
  }
  &:not(:first-child) {
    margin-top: 8px;
    ${mixins.mq.MaxL} {
      margin-top: 0.75vw;
    }
    ${mixins.mq.MaxM} {
      margin-top: 8px;
    }
  }
`

type Props = {
  className?: string
  lid: string
  lazy?: boolean
}
export const ServiceGlobalBnr = ({ className, lid, lazy }: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <Div className={className}>
      <BgImg>
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={`${assets}img/inc/global-bnr/bg-global-bnr-right-sp-220713.png`}
          width="835"
          height="1114"
        />
        <img
          src={`${assets}img/inc/global-bnr/bg-global-bnr-right-pc-220713.png`}
          width="1032"
          height="228"
          alt="追加設定無しでそのまま使える！楽天モバイルは海外でも2GB無料※1 ※1 指定の国と地域。プラン料金に含まれる。データ利用量に加算。"
          loading={lazy ? 'lazy' : 'eager'}
        />
      </BgImg>
      <Btns>
        <Btn
          as="a"
          href={`/service/global/overseas/?l-id=${lid}_service_global-overseas`}
        >
          海外で使う
        </Btn>
        <Btn
          as="a"
          href={`/service/global/outgoing/?l-id=${lid}_service_global-outgoing`}
        >
          日本から海外へかける・送る
        </Btn>
      </Btns>
    </Div>
  )
}
