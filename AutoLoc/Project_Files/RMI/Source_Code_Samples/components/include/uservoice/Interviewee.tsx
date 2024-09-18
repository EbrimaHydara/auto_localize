import { assets } from '@components/utils/assets'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
    width: 112px;
  }
`

const TxtRole = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-align: right;
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
    right: -19px;
    margin-top: -30px;
    border: 7px solid transparent;
    border-left: 12px solid ${props => props.theme.colors.white};
    z-index: 2;
  }

  &::after {
    right: -22px;
    margin-top: -32px;
    border: 9px solid transparent;
    border-left: 13px solid ${props => props.theme.colors.monotone93};
    z-index: 1;
  }

  > p {
    + p {
      margin-top: 16px;
    }
  }
`

interface IntervieweeProps {
  imgDirectory: string
  imgParam: string
  name: string
  children?: ReactNode
  imgNum?: string
  subInterviewUser?: string
}

export const Interviewee: React.FC<IntervieweeProps> = ({
  imgDirectory,
  imgParam,
  name,
  children,
  imgNum,
  subInterviewUser,
}) => {
  return (
    <Container>
      <ImgBlock>
        <img
          src={`${assets}img/uservoice/${imgDirectory}/interview-avator${
            subInterviewUser ? subInterviewUser : ''
          }${imgNum ? imgNum : ''}.png${imgParam && '?' + imgParam}`}
          alt={name}
          width="112"
          height="112"
        />
      </ImgBlock>
      <TxtBlock>
        <TxtRole>{name}</TxtRole>
        <SpeechBubble>{children}</SpeechBubble>
      </TxtBlock>
    </Container>
  )
}
