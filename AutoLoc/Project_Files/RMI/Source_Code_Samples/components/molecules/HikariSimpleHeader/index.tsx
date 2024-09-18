import React from 'react'
import styled from 'styled-components'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogoDiv,
} from '@components/atoms/GlobalHeader'
import { SystemWrapper } from '@components/layout/System'
const SiteName = styled.div`
  float: left;
  border-left: 1px solid ${props => props.theme.colors.white};
  margin-left: 16px;
  margin-top: 15px;
  padding-left: 16px;
  padding-bottom: 4px;
  @media screen and (min-width: ${props => props.theme.min.l}) {
    margin-left: 24px;
    margin-top: 20px;
  }
`
export const HikariSimpleHeader = () => {
  return (
    <SystemWrapper>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderLogoDiv>
            <a href="/">Rakuten Mobile</a>
          </HeaderLogoDiv>
          <SiteName>楽天ひかり</SiteName>
        </HeaderContainer>
      </HeaderWrapper>
    </SystemWrapper>
  )
}
