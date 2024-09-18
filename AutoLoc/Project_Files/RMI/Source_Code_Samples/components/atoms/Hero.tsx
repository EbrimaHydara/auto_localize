import React, { ReactNode } from 'react'
import styled from 'styled-components'

const HeroWrap = styled.div<{
  textBlack?: boolean
  heroPc?: string
  heroTb?: string
}>`
  text-align: center;
  @media screen and (min-width: ${props => props.theme.min.m}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 240px;
    position: relative;
    background-color: ${({ textBlack }) =>
      textBlack
        ? props => props.theme.colors.monotone75
        : props => props.theme.colors.monotone30};
    background-position: center top;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: ${props =>
      props.theme.min.m}) and (max-width: ${props => props.theme.max.m}) {
    background-image: url(${({ heroTb }) => (heroTb ? heroTb : '')});
    background-size: ${props => props.theme.max.m};
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    background-image: url(${({ heroPc }) => (heroPc ? heroPc : '')});
    background-size: 1440px;
  }
  @media screen and (min-width: 1440px) {
    background-size: cover;
  }
`
const HeroContent = styled.div<{ textBlack?: boolean; heroSp?: string }>`
  color: ${({ textBlack }) =>
    textBlack
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};

  text-align: center;
  padding: 0 ${props => props.theme.garter};
  z-index: 1;
  @media screen and (max-width: ${props => props.theme.max.s}) {
    position: relative;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ textBlack }) =>
      textBlack
        ? props => props.theme.colors.monotone75
        : props => props.theme.colors.monotone30};
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ heroSp }) => (heroSp ? heroSp : '')});
　}
  > div {
    > a {
      width: auto;
      @media screen and (max-width: ${props => props.theme.max.s}) {
        width: 100%;
      }
    }
  }
`
const HeroCta = styled.div<{ textBlack?: boolean }>`
  z-index: 1;
  media screen and (max-width: ${props => props.theme.max.s}) {
    padding: 0 16px;
  }
  > p > span {
    @media screen and (min-width: ${props => props.theme.min.m}) {
      color: ${({ textBlack }) =>
        textBlack
          ? props => props.theme.colors.black
          : props => props.theme.colors.white};
    }
  }
`
const HeroHeading = styled.h1<{ titleReverse?: boolean }>`
  display: flex;
  flex-direction: ${({ titleReverse }) =>
    titleReverse ? 'column-reverse' : 'column'};
  font-size: 48px;
  line-height: 1.2;
  small {
    margin: ${({ titleReverse }) =>
      titleReverse ? '0 0 16px 0' : '16px 0 0 0'};
  }
  @media screen and (min-width: ${props =>
      props.theme.min.m}) and (max-width: ${props => props.theme.max.m}) {
    font-size: 36px;
  }
  @media screen and (max-width: ${props => props.theme.max.s}) {
    position: relative;
    z-index: 1;
    font-size: 32px;
    text-align: left;
  }
`
const HeroSubtext = styled.small`
  margin-top: 16px;
  font-size: ${props => props.theme.fonts.xl};
  @media screen and (min-width: ${props =>
    props.theme.min.m}) and (max-width: ${props => props.theme.max.m}) {
    font-size: 21px;
　}
  @media screen and (max-width: ${props => props.theme.max.s}) {
    font-size: ${props => props.theme.fonts.m};
  }
`

export interface HeroProps {
  heroPc?: string
  heroTb?: string
  heroSp?: string
  headingText?: string | JSX.Element
  subtText?: string | JSX.Element
  titleReverse?: boolean
  textBlack?: boolean
  children?: ReactNode
}

export const Hero = (props: HeroProps) => {
  const {
    heroPc,
    heroTb,
    heroSp,
    headingText,
    subtText,
    titleReverse,
    textBlack,
    children,
  } = props
  return (
    <>
      <HeroWrap textBlack={textBlack} heroPc={heroPc} heroTb={heroTb}>
        <HeroContent textBlack={textBlack} heroSp={heroSp}>
          <HeroHeading titleReverse={titleReverse}>
            <span>{headingText}</span>
            <HeroSubtext>{subtText}</HeroSubtext>
          </HeroHeading>
        </HeroContent>
        <HeroCta textBlack={textBlack}>{children}</HeroCta>
      </HeroWrap>
    </>
  )
}
