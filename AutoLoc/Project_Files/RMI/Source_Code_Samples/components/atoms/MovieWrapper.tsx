import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div<{ maxWidth?: string }>`
  > iframe,
  > video {
    border: none;
    width: 100%;
    max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '720px')};
    aspect-ratio: 16 / 9;
  }
`

type Props = {
  className?: string
  children: React.ReactNode
  maxWidth?: string
}

export const MovieWrapper = ({ className, children, maxWidth }: Props) => {
  return (
    <Wrap className={className} maxWidth={maxWidth}>
      {children}
    </Wrap>
  )
}
