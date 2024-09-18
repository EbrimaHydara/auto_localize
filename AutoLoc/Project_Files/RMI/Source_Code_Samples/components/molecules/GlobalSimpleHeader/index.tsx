import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogoDiv,
  HeaderPcHeight,
  HeaderSpHeight,
} from '@components/atoms/GlobalHeader'
import { SystemWrapper } from '@components/layout/System'
import { assets } from '@components/utils/assets'

const HeaderOuter = styled.div`
  height: ${HeaderSpHeight};
  ${mixins.mq.MinCustom('835px')} {
    height: ${HeaderPcHeight};
  }
`
const HeaderFixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`
const HeaderLogoDivSimple = styled(HeaderLogoDiv)`
  padding-top: 8px;
  width: 74px;
  height: 40px;
  transform: translateY(0);
  box-sizing: content-box;
  ${mixins.mq.MinL} {
    padding-top: 20px;
    width: 194px;
    height: 32px;
  }
  a,
  span {
    background-size: contain;
    background-image: url(${assets}img/common/logo-rmobile-2line.svg);
    ${mixins.mq.MinL} {
      background-image: url(${assets}img/common/logo-rmobile-1line.svg);
    }
  }
`

type props = {
  isNoLink?: boolean
  lid?: string
  isFixed?: boolean
}
type HeaderOuterProps = {
  children?: React.ReactNode
}

export const GlobalSimpleHeader = ({
  isNoLink = false,
  isFixed = false,
  ...restProps
}: props) => {
  const lidString = restProps.lid ? `?l-id=${restProps.lid}` : ''

  const HeaderOuterTag = ({ children }: HeaderOuterProps) => {
    return isFixed ? (
      <HeaderOuter>
        <HeaderFixedWrapper>{children}</HeaderFixedWrapper>
      </HeaderOuter>
    ) : (
      <>{children}</>
    )
  }

  return (
    <SystemWrapper>
      <HeaderOuterTag>
        <HeaderWrapper>
          <HeaderContainer>
            <HeaderLogoDivSimple>
              {isNoLink ? (
                <span>Rakuten Mobile</span>
              ) : (
                <a href={`/${lidString}`}>Rakuten Mobile</a>
              )}
            </HeaderLogoDivSimple>
          </HeaderContainer>
        </HeaderWrapper>
      </HeaderOuterTag>
    </SystemWrapper>
  )
}
