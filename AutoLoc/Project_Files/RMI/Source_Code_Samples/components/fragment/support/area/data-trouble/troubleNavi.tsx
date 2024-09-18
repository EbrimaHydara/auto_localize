import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'

import Utils from '@styles/Utils.module.scss'

import { ButtonRegular } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'

const TroubleNaviBox = styled.div`
  margin: 64px 0;
  display: flex;
  justify-content: center;
  ${mixins.mq.MaxM} {
    margin: 40px 0;
  }
`

const TroubleNaviContents = styled.div`
  position: relative;
`

const TroubleNaviTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`

const TroubleNaviImg = styled.img`
  width: 90px;
  height: 90px;
  ${mixins.mq.MinCustom('1064px')} {
    position: absolute;
    left: -154px;
    bottom: 0;
    z-index: 1;
    width: 130px;
    height: 130px;
  }
`

const TroubleNaviText = styled.p`
  text-align: center;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  ${mixins.mq.MaxM} {
    flex-wrap: wrap;
  }
`

const NaviButtonBasic = styled(ButtonRegular)`
  width: 354px;
  padding: 16px 24px;
`

export const TroubleNavi = () => {
  return (
    <TroubleNaviBox>
      <TroubleNaviContents>
        <Heading level="2" className={`${Utils['Align-center']}`}>
          トラブル解決ナビ
        </Heading>
        <TroubleNaviTextBox>
          <TroubleNaviImg
            src={`${assets}img/support/area/data-trouble/troubleNavi.png`}
            width="130"
            height="131"
            alt=""
          />
          <TroubleNaviText>
            お困りごとを選んでいくことで、解決方法や各種手続き方法をご案内いたします。
          </TroubleNaviText>
        </TroubleNaviTextBox>
        <ButtonsWrapper className={`${Utils['Mt-16']}`}>
          <NaviButtonBasic
            href="/guide/trouble-check/?l-id=support_area_data-trouble_guide_trouble-check_member_s-1-3#/member/s-1-3"
            as="a"
          >
            データ通信に関するお困りごとを選ぶ
          </NaviButtonBasic>
          <NaviButtonBasic
            href="/guide/trouble-check/?l-id=support_area_data-trouble_guide_trouble-check_member_s-1-4#/member/s-1-4"
            as="a"
          >
            通話に関するお困りごとを選ぶ
          </NaviButtonBasic>
        </ButtonsWrapper>
      </TroubleNaviContents>
    </TroubleNaviBox>
  )
}
