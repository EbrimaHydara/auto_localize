import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { TxtEmp01, TxtSize } from '@components/atoms/Txt'

const Container = styled.section`
  user-select: none;
  + .interview {
    margin-top: 64px;
  }

  img {
    pointer-events: none;
    @media print {
      display: none;
    }
  }
`

const HeadingInterview = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  padding-bottom: 16px;

  ${mixins.mq.MaxL} {
    padding-bottom: 24px;
  }
`

interface InterviewProps {
  title: string
  subTitle: string
  ratId?: string
  children?: ReactNode
  className?: string
}

export const Interview: React.FC<InterviewProps> = ({
  title,
  subTitle,
  ratId,
  children,
  className,
}) => {
  return (
    <Container className={`interview${className ? ` ${className}` : ''}`}>
      <HeadingInterview>
        <TxtSize size="m">
          <TxtEmp01>{subTitle}</TxtEmp01>
        </TxtSize>
        <Heading
          level="2"
          ratId={ratId}
          ratEvent="appear"
          className={Utils['Mt-8']}
        >
          {title}
        </Heading>
      </HeadingInterview>
      {children}
    </Container>
  )
}
