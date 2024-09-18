import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Heading1 = styled.h1`
  font-size: ${props => props.theme.fonts.xl};
  font-weight: bold;
  line-height: 1.3;
`
const Heading2 = styled.h2`
  font-size: ${props => props.theme.fonts.ll};
  font-weight: bold;
  line-height: 1.4;
`
const Heading3 = styled.h3`
  font-size: ${props => props.theme.fonts.l};
  font-weight: bold;
  line-height: 1.4;
`
const Heading4 = styled.h4`
  font-size: ${props => props.theme.fonts.m};
  font-weight: bold;
  line-height: 1.4;
`

const headingMap = {
  '1': Heading1,
  '2': Heading2,
  '3': Heading3,
  '4': Heading4,
}

export type HeadingLevel = '1' | '2' | '3' | '4'

export const Heading: React.FC<{
  level: HeadingLevel
  className?: string
  as?: any
  id?: string
  children?: ReactNode
  ratId?: string
  ratEvent?: 'click' | 'appear'
  // ratParam?: "string"
}> = props => {
  const level = props.level
  const Tag = headingMap[level] ?? Heading1
  const ratParam = props.ratId && 'all'
  return (
    <Tag
      className={props.className}
      as={props.as}
      id={props.id}
      data-ratid={props.ratId}
      data-ratevent={props.ratEvent}
      data-ratparam={ratParam}
    >
      {props.children}
    </Tag>
  )
}
