import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { InfoboxLight } from '@components/atoms/Infobox'

const Div = styled(InfoboxLight)`
  user-select: none;
  > p {
    + p {
      margin-top: 16px;
    }
  }
`

type Props = {
  className?: string
  id?: string
  ratId: string
  children: ReactNode
}

export const InterviewSummary: React.FC<Props> = ({
  className,
  id,
  ratId,
  children,
}) => {
  return (
    <Div
      id={id}
      className={className}
      data-ratid={ratId}
      data-ratevent="appear"
      data-ratparam="all"
    >
      {children}
    </Div>
  )
}
