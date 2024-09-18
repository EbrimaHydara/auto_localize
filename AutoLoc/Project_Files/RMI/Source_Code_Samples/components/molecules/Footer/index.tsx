import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  height: 49px;
  background-color: ${props => props.theme.colors.monotone97};
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: ${props => props.theme.fonts.ss};
    color: ${props => props.theme.colors.lightBlack};
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; Rakuten Mobile, Inc.</p>
    </FooterWrapper>
  )
}
