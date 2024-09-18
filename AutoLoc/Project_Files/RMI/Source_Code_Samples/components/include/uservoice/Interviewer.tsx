import { assets } from '@components/utils/assets'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

const Container = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  user-select: none;
  ${mixins.mq.MinM} {
    gap: 20px;
  }
`

const TxtBlock = styled.div`
  flex: 1;
`

const ImgBlock = styled.div`
  width: 50px;

  ${mixins.mq.MinM} {
    width: 80px;
  }

  img {
    ${mixins.mq.MinL} {
      margin-top: 25px;
    }
  }
`

const TxtRole = styled.p`
  font-size: 13px;
  font-weight: 700;
`

const SpeechBubble = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  padding: 24px;
  border: 1px solid ${props => props.theme.colors.monotone93};
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 8px;

  &::before,
  &::after {
    content: '';
    position: absolute;

    top: 40px;
    ${mixins.mq.MinM} {
      top: 50px;
    }
  }

  &::before {
    left: -19px;
    margin-top: -30px;
    border: 7px solid transparent;
    border-right: 12px solid ${props => props.theme.colors.white};
    z-index: 2;
  }

  &::after {
    left: -22px;
    margin-top: -32px;
    border: 9px solid transparent;
    border-right: 13px solid ${props => props.theme.colors.monotone93};
    z-index: 1;
  }

  > p {
    + p {
      margin-top: 16px;
    }
  }
`

export const Interviewer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <ImgBlock>
        <img src={`${assets}img/uservoice/rakuten-avator.png`} alt="聞き手" />
      </ImgBlock>
      <TxtBlock>
        <TxtRole>聞き手</TxtRole>
        <SpeechBubble>{children}</SpeechBubble>
      </TxtBlock>
    </Container>
  )
}
