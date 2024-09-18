import styled from 'styled-components'

import Utils from '@styles/Utils.module.scss'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'
import { TxtEmp02, TxtNormal } from '@components/atoms/Txt'
import { mixins } from '@components/utils/Mixins'

const Wrapper = styled.div`
  text-align: center;
  background-repeat: no-repeat, no-repeat;
  background-image: url(/img/inc/global-bnr/bg-global-bnr-left-pc.png),
    url(/img/inc/global-bnr/bg-global-bnr-right-pc.png);
  background-position: left 16px center, right 16px center;
  background-size: 230px, 281px;
  min-height: 228px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    background-image: url(/img/inc/global-bnr/bg-global-bnr-sp.png);
    background-position: top 16px center;
    padding-top: 190px;
    background-size: 255px;
  }
`
const ButtonWrapper = styled.div`
  max-width: 534px;
  margin: 0 auto;
  display: flex;
  ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
    flex-direction: column;
    max-width: 100%;
  }
  a:first-child {
    margin-top: 10px;
    margin-right: 16px;
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      margin: 10px auto 0;
    }
  }
  a:last-child {
    margin-right: 0;
    margin-top: 10px;
    ${props => mixins.mq.MaxCustom(props.theme.min.l)} {
      margin: 10px auto 0;
    }
  }
`

interface CommonGlobalBnrProps {
  l_id?: string
}
export const CommonGlobalBnr = (props: CommonGlobalBnrProps) => {
  const { l_id } = props
  return (
    <Wrapper>
      <TxtEmp02 as="p" className={Utils['Mt-16']}>
        ＼ お使いのスマホで使える ／
      </TxtEmp02>
      <Heading as="p" level="3" className={Utils['Mt-8']}>
        おトクな国際サービスが充実！
      </Heading>
      <p className={`${Utils['Mt-8']} ${Utils['Disp-pc']}`}>
        海外や日本で使える国際サービスとご利用方法をご案内
      </p>
      <ButtonWrapper>
        <ButtonSecondaryLarge
          as="a"
          href={
            l_id
              ? `/service/global/overseas/?l-id=${l_id}_service_global-overseas`
              : '/service/global/overseas/'
          }
          className="c-Btn_Secondly-large"
        >
          <TxtNormal>海外で使う</TxtNormal>
        </ButtonSecondaryLarge>
        <ButtonSecondaryLarge
          as="a"
          href={
            l_id
              ? `/service/global/outgoing/?l-id=${l_id}_service_global-outgoing`
              : '/service/global/outgoing/'
          }
          className="c-Btn_Secondly-large"
        >
          <TxtNormal>日本から海外へかける・送る</TxtNormal>
        </ButtonSecondaryLarge>
      </ButtonWrapper>
    </Wrapper>
  )
}
