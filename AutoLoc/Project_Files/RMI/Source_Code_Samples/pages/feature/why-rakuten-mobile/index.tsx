import type { NextPage } from 'next'
import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemContainer, SystemWrapper } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'

import {
  LinkNormal,
  LinkIconAfter,
  LinkIconAfterWhite,
} from '@components/atoms/Link'
import { TxtCap, TxtEmp02, TxtWeightBold } from '@components/atoms/Txt'
import { ButtonSecondary, ButtonRegularLarge } from '@components/atoms/Buttons'
import { Heading } from '@components/atoms/Heading'
import { mixins } from '@components/utils/Mixins'
import {
  IconArrowDown,
  IconNewTabLine,
  IconChevronRight,
} from '@components/icons'
import { GuidePopAsk } from '@components/include/guide/PopAsk'
import { Collapse } from 'react-collapse'
import {
  AccordionList,
  AcoordionWrapper,
  AccordionTrigger,
  CollapseWrapper,
} from '@components/atoms/AccordionList'
import { IconX } from '@components/icons'
import { scrollToElement } from '@components/utils/scrollToElement'
import { anchorCallback } from '@components/utils/anchorCallback'
import { scroller } from 'react-scroll'
import { PoikakuLpBnr } from '@components/include/common/PoikakuLpBnr'
import { InfoboxEmphasis1 } from '@components/atoms/Infobox'
import { fontRakutenSans } from '@styles/fonts'
import { useBrightcove, BrightcoveVideoProps } from '~/hooks/useBrightcove'
import { OpensignalCarousel } from '@components/include/common/OpensignalCarousel'

const themeCollapse = {
  collapse: 'accordionlist-collapse',
  content: 'accordionlist-collapse-content',
}

const maxWidth = '1920px'

const SystemWrapperCustom = styled(SystemWrapper)`
  .why-Animation_Zoom1 {
    animation: zoomImg1 5s forwards;
    ${mixins.mq.MaxM} {
      animation: unset;
    }
  }
  .why-Animation_Zoom2 {
    animation: zoomImg2 5s forwards;
    ${mixins.mq.MaxM} {
      animation: unset;
    }
  }
  @keyframes zoomImg1 {
    0% {
      transform: scale(1, 1);
      transform-origin: 80% 30%;
    }
    100% {
      transform: scale(1.3, 1.3);
      transform-origin: 80% 30%;
    }
  }
  @keyframes zoomImg2 {
    0% {
      transform: scale(1, 1);
      transform-origin: 80% 0%;
    }
    100% {
      transform: scale(1.3, 1.3);
      transform-origin: 100% 0%;
    }
  }
`
const FullMv = styled.div`
  width: 100%;
  display: block;
  color: ${props => props.theme.colors.white};
  ${mixins.mq.MinCustom(maxWidth)} {
    background-color: #000000;
  }
`
const LayoutSystem = styled.div`
  width: 100%;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 0;
  sub {
    font-size: 12px;
    bottom: -0.1em !important;
  }
`
const HeroMain = styled.div`
  position: relative;
  .js-video-wrappers:not(.js-active)::before,
  .js-video-wrappers:not(.js-active)::before {
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .js-video-wrappers:not(.js-active)::after,
  .js-video-wrappers:not(.js-active)::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    border-top-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: loading 1s infinite linear;
    @keyframes loading {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  h1 {
    position: absolute;
    top: -100%;
    z-index: -1;
    overflow: hidden;
  }
  video {
    width: 100%;
    vertical-align: bottom;
    ${mixins.mq.MaxM} {
      width: calc(100% + 2px);
    }
  }
`
const FullGray = styled.div`
  width: 100%;
  display: block;
  background-color: ${props => props.theme.colors.monotone97};
`
const HeroSub = styled.div`
  margin: auto;
  padding: 64px 0;
  text-align: center;
  ${mixins.mq.MaxM} {
    padding: 40px 0;
  }
`
const HeroLead = styled.p`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.3;
  color: #19000e;
  ${mixins.mq.MaxM} {
    font-size: 20px;
    br {
      display: none;
    }
  }
`
const HeroGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  ${mixins.mq.MinL} {
    max-width: 1556px;
    margin: 32px auto 0;
    > div {
      width: 100%;
      &:nth-child(1) {
        margin-right: 16px;
      }
      &:nth-child(3) {
        margin-left: 16px;
      }
    }
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
    gap: 24px;
    > div {
      width: 100%;
    }
  }
`
const HeroGridImg = styled.div`
  margin: 0;
  padding: 8px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${props => mixins.mq.MinMaxCustom(props.theme.min.l, '1440px')} {
    height: auto;
    img {
      width: auto;
      height: 100px;
    }
  }
  ${mixins.mq.MaxM} {
    padding: 12px;
  }
`
const HeroGridImgMod2 = styled(HeroGridImg)`
  ${mixins.mq.MaxM} {
    img {
      width: auto;
      height: 92px;
    }
  }
`
const HeroBorder = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
`
const HeroGridItem = styled.div`
  display: grid;
  ${mixins.mq.MinL} {
    grid-template-rows: auto 90px;
  }
`
const HeroGridTxt = styled.p`
  padding: 8px;
  line-height: 1.5;
  font-size: 15px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MaxM} {
    padding: 8px 16px;
  }
  ${props => mixins.mq.MinMaxCustom(props.theme.min.l, '1440px')} {
    flex-grow: 1;
    br {
      display: none;
    }
  }
  ${mixins.mq.MinCustom('1440px')} {
    &.adjustLayout {
      padding: 20px 8px !important;
    }
  }
`
const FullBlack = styled.div`
  width: 100%;
  display: block;
  color: ${props => props.theme.colors.white};
  ${mixins.mq.MinCustom(maxWidth)} {
    background-color: ${props => props.theme.colors.black};
  }
`
const ImgBase = styled.div`
  margin-bottom: 24px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 44.624%;
  transition: 0.4s;
  ${mixins.mq.MaxM} {
    background-position: center bottom;
    padding-top: 40%;
  }
  ${mixins.mq.MaxS} {
    padding-top: 48%;
  }
`
const Img1 = styled(ImgBase)`
  background-image: url(${assets}img/feature/why-rakuten-mobile/nav-img-01-pc-231020.png);
  ${mixins.mq.MaxS} {
    background-image: url(${assets}img/feature/why-rakuten-mobile/nav-img-01-sp-231020.png);
  }
`
const Img2 = styled(ImgBase)`
  background-image: url(${assets}img/feature/why-rakuten-mobile/nav-img-02-pc-231020.png);
  ${mixins.mq.MaxS} {
    background-image: url(${assets}img/feature/why-rakuten-mobile/nav-img-02-sp-231020.png);
  }
`
const Img3 = styled(ImgBase)`
  background-image: url(${assets}img/feature/why-rakuten-mobile/nav-img-03-pc-231020.png);
  ${mixins.mq.MaxS} {
    background-image: url(${assets}img/feature/why-rakuten-mobile/nav-img-03-sp-231020.png);
  }
`
const Nav = styled.div`
  text-align: center;
  padding: 40px 24px 24px;
  background: ${props => props.theme.colors.black};
  ${mixins.mq.MaxCustom('1024px')} {
    padding: 32px 24px;
  }
  ${mixins.mq.MaxM} {
    padding: 56px 16px 24px;
  }
  nav {
    margin-top: 32px;
    display: flex;
    ${mixins.mq.MaxM} {
      margin-top: 24px;
      display: block;
    }
    > div {
      width: 100%;
      margin-right: 24px;
      ${mixins.mq.MaxCustom('1440px')} {
        margin-right: 24px;
      }
      &:last-child {
        margin-right: 0;
      }
      ${mixins.mq.MaxM} {
        margin: 0 0 24px 0;
      }
    }
    a {
      position: relative;
      display: block;
      color: ${props => props.theme.colors.white};
      text-decoration: none;
      &:hover {
        transition: 0.4s;
        ${Img1},
        ${Img2},
      ${Img3} {
          background-size: 110%;
        }
      }
    }
  }
`
const NavInner = styled.div`
  max-width: 1392px;
  margin: 0 auto;
  ${mixins.mq.MaxM} {
    max-width: 610px;
  }
  h2 {
    font-size: 40px;
    line-height: 1.4;
    ${mixins.mq.MaxCustom('1440px')} {
      font-size: 34px;
    }
    ${mixins.mq.MaxM} {
      font-size: 30px;
      br {
        display: none;
      }
      span {
        font-size: 20px;
        display: block;
      }
    }
  }
`
const NavWrap = styled.div`
  ${mixins.mq.MaxM} {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`
const NavTxt = styled.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.3;
  ${mixins.mq.MaxCustom('1200px')} {
    font-size: 24px;
  }
  ${mixins.mq.MaxM} {
    text-align: left;
    margin: 0;
    font-size: 18px;
    padding: 8px 0 16px 16px;
    br {
      display: none;
    }
  }
  ${mixins.mq.MaxS} {
    font-size: 18px;
    width: 80%;
    padding: 8px;
  }
`
const Tag = styled.div`
  height: 20px;
  img {
    vertical-align: top;
    height: 26px;
  }
  ${mixins.mq.MaxM} {
    height: 18px;
    img {
      height: 18px;
    }
  }
  ${mixins.mq.MaxS} {
    height: 16px;
    img {
      height: 16px;
    }
  }
`
const NavTag = styled(Tag)`
  position: absolute;
  top: 0;
`
const NavArrow = styled.div`
  position: absolute;
  left: 50%;
  font-size: 36px;
  transform: translateX(-50%);
  color: ${props => props.theme.colors.primary};
  animation: arrowmovePc 1s ease-in-out infinite;
  ${mixins.mq.MaxM} {
    left: 96%;
    top: 20px;
    font-size: 24px;
    animation: arrowmoveSp 1s ease-in-out infinite;
  }
  @keyframes arrowmovePc {
    0% {
      bottom: -55px;
    }
    50% {
      bottom: -62px;
    }
    100% {
      bottom: -55px;
    }
  }
  @keyframes arrowmoveSp {
    0% {
      top: 20px;
    }
    50% {
      top: 18px;
    }
    100% {
      top: 20px;
    }
  }
`
const NavCap = styled(TxtCap)`
  margin-top: 72px;
  color: ${props => props.theme.colors.white};
  ${mixins.mq.MaxM} {
    margin-top: 24px;
    text-align: left;
  }
`
const ServiceWrap = styled.div`
  margin-top: 64px;
  ${mixins.mq.MaxCustom('1024px')} {
    margin-top: 48px;
  }
`
const ServiceHeadingBg = styled.div`
  position: relative;
  height: 580px;
  background: url(${assets}img/feature/why-rakuten-mobile/service-img-main-pc.png?220603)
    center center/cover no-repeat;
  ${mixins.mq.MaxM} {
    height: 654px;
    background: url(${assets}img/feature/why-rakuten-mobile/service-img-main-tb.png)
      center center/cover no-repeat;
  }
  ${mixins.mq.MaxS} {
    height: 630px;
    background: url(${assets}img/feature/why-rakuten-mobile/service-img-main-sp.png)
      center center/cover no-repeat;
  }
`
const ServiceHeadingTxt = styled.div`
  width: 50%;
  padding: 0 16px 0 48px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  z-index: 2;
  ${mixins.mq.MaxM} {
    padding: 0 24px;
    width: 100%;
    height: 50%;
  }
  h2 {
    margin-top: 28px;
    ${mixins.mq.MaxCustom('1024px')} {
      br {
        display: none;
      }
    }
    ${mixins.mq.MaxM} {
      margin-top: 12px;
      font-size: 36px;
    }
    ${mixins.mq.MaxS} {
      margin-top: 8px;
    }
  }
  p {
    margin-top: 32px;
    max-width: 800px;
    ${mixins.mq.MaxCustom('900px')} {
      font-size: 13px;
    }
    ${mixins.mq.MaxS} {
      margin-top: 16px;
    }
  }
`
const Heading2 = styled.h2`
  font-size: 64px;
  line-height: 1.3;
  font-weight: bold;
  ${mixins.mq.MaxCustom('1440px')} {
    font-size: 48px;
  }
  ${mixins.mq.MaxM} {
    font-size: 36px;
  }
`
const Heading3 = styled.h3`
  font-size: 64px;
  line-height: 1.3;
  font-weight: bold;
  ${mixins.mq.MaxCustom('1440px')} {
    font-size: calc((64 / 1920) * 100vw);
  }
  ${mixins.mq.MaxM} {
    font-size: 36px;
  }
`
const HeadingSub = styled.p`
  font-size: 48px;
  font-weight: bold;
  ${mixins.mq.MaxCustom('1440px')} {
    font-size: calc((48 / 1920) * 100vw);
  }
  ${mixins.mq.MaxM} {
    font-size: 28px;
  }
`
const Heading4 = styled.h4`
  font-size: 28px;
  line-height: 1.4;
  font-weight: bold;
  ${mixins.mq.MaxS} {
    font-size: 20px;
  }
`
const ServiceContents = styled.div`
  padding-top: 104px;
  ${mixins.mq.MaxCustom('1440px')} {
    padding-top: 56px;
  }
  h3 {
    text-align: center;
  }
  p {
    margin-top: 24px;
    text-align: center;
    ${mixins.mq.MaxM} {
      text-align: left;
    }
  }
`
const ContentsInner = styled.div`
  ${mixins.mq.MinMaxCustom('1441px', '1919px')} {
    padding: 0 64px;
  }
  ${mixins.mq.MaxCustom('1440px')} {
    max-width: 1156px;
    margin: 0 auto;
  }
  ${props => mixins.mq.MinMaxCustom(props.theme.min.l, '1439px')} {
    padding: 0 24px;
  }
  ${mixins.mq.MaxM} {
    max-width: 672px;
    padding: 0 16px;
  }
  ${mixins.mq.MaxS} {
    padding: 0 16px;
  }
`
const PlanImg = styled.div`
  margin: 40px auto 0;
  display: flex;
  max-width: 1570px;
  ${mixins.mq.MaxM} {
    display: block;
    max-width: 388px;
  }
  > div {
    margin-right: 40px;
    ${mixins.mq.MaxCustom('1440px')} {
      margin-right: 24px;
    }
    &:last-child {
      margin-right: 0;
    }
    ${mixins.mq.MaxM} {
      margin: 0 0 24px 0;
    }
  }
`
const ServiceBtn = styled.div`
  text-align: center;
  margin-top: 40px;
`
const Service2Col = styled.div`
  max-width: 1556px;
  margin: 136px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 64px;
    max-width: 1156px;
  }
  .txt {
    padding: 0 32px;
    ${mixins.mq.MaxCustom('1440px')} {
      padding: 0 24px;
    }
    ${mixins.mq.MaxM} {
      padding: 0;
    }
  }
  ${mixins.mq.MaxM} {
    .txt {
      order: 1;
    }
    .img {
      order: 2;
      margin-top: 24px;
    }
  }
  > div {
    width: 50%;
    display: flex;
    align-items: center;
    h3,
    p {
      text-align: left;
    }
    ${mixins.mq.MaxM} {
      width: 100%;
      h3 {
        text-align: center;
      }
    }
  }
`
const ButtonSecondaryCustom = styled(ButtonSecondary)`
  ${mixins.mq.MinL} {
    font-size: 20px;
    padding: 12px 48px;
  }
`
const ServiceBgContents = styled.div`
  margin: 136px auto 0;
  max-width: 1556px;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 64px;
  }
  .bg {
    position: relative;
    padding-top: 32.13%;
    height: 500px;
    background: url(${assets}img/feature/why-rakuten-mobile/service-img-03-pc.png)
      center center/cover no-repeat;
    ${mixins.mq.MaxCustom('1440px')} {
      height: 420px;
    }
    ${mixins.mq.MaxM} {
      background: url(${assets}img/feature/why-rakuten-mobile/service-img-03-tb.png)
        0 0/100% no-repeat;
      padding-top: 129.68%;
    }
    ${mixins.mq.MaxS} {
      background: url(${assets}img/feature/why-rakuten-mobile/service-img-03-sp-230718.png)
        0 0/100% no-repeat;
      padding-top: 213.8%;
    }
  }
  .txt {
    position: absolute;
    top: 48px;
    left: 48px;
    width: 56%;
    h3,
    p {
      text-align: left;
    }
    ${mixins.mq.MaxM} {
      top: 40px;
      left: 40px;
      color: ${props => props.theme.colors.white};
      width: auto;
      padding-right: 40px;
    }
    ${mixins.mq.MaxS} {
      top: 40px;
      left: 16px;
      padding-right: 16px;
    }
  }
`
const ServiceBgContentsMt32 = styled(ServiceBgContents)`
  margin-top: 48px;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
  }
`
const LayoutInfo = styled(TxtCap)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1556px;
`
const TechnologyWrap = styled.div`
  margin-top: 118px;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 64px;
  }
  ${mixins.mq.MaxCustom('1024px')} {
    margin-top: 48px;
  }
`
const TechnologyHeading = styled.div`
  position: relative;
  height: 580px;
  overflow: hidden;
  ${mixins.mq.MaxM} {
    height: 720px;
  }
  ${mixins.mq.MaxS} {
    height: 760px;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: url(${assets}img/feature/why-rakuten-mobile/technology-img-main-pc.png)
      center center/cover no-repeat;
    ${mixins.mq.MaxM} {
      background: url(${assets}img/feature/why-rakuten-mobile/technology-img-main-tb.png)
        center center/cover no-repeat;
    }
    ${mixins.mq.MaxS} {
      background: url(${assets}img/feature/why-rakuten-mobile/technology-img-main-sp.png)
        center center/cover no-repeat;
    }
  }
  .txt {
    position: absolute;
    top: 0;
    width: 50%;
    padding: 0 16px 0 48px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    z-index: 2;
    ${mixins.mq.MaxM} {
      padding: 0 24px;
      width: 100%;
      height: 57%;
    }
    h2 {
      margin-top: 28px;
      ${mixins.mq.MaxCustom('1024px')} {
        br {
          display: none;
        }
      }
      ${mixins.mq.MaxM} {
        margin-top: 12px;
        font-size: 36px;
      }
      ${mixins.mq.MaxS} {
        margin-top: 8px;
      }
    }
    p {
      margin-top: 32px;
      max-width: 800px;
      &${TxtCap} {
        margin-top: 8px;
        color: ${props => props.theme.colors.white};
      }
      ${mixins.mq.MaxS} {
        margin-top: 16px;
      }
    }
  }
`
const TechnologyContents = styled.div`
  padding-top: 104px;
  ${mixins.mq.MaxCustom('1024px')} {
    padding-top: 48px;
  }
  h3 {
    text-align: center;
  }
`
const TechnologyTxtBase = styled.p`
  margin-top: 24px;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
`
const TechnologyTxt01 = styled(TechnologyTxtBase)`
  text-align: left;
`
/*
const TechnologyImg = styled.div`
  margin: 48px auto 0;
  max-width: 1240px;
`
const TechnologyTxt02 = styled(TechnologyTxtBase)`
  text-align: center;
`
const TechnologyBtn = styled.div`
  text-align: center;
  margin-top: 40px;
  ${mixins.mq.MaxS} {
    margin-top: 24px;
  }
`
*/
const Technology2Col = styled.div`
  max-width: 1556px;
  margin: 136px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 64px;
    max-width: 1156px;
  }
  .txt {
    padding: 0 32px;
    ${mixins.mq.MaxCustom('1440px')} {
      padding: 0 24px;
    }
    ${mixins.mq.MaxM} {
      padding: 0;
    }
  }
  ${mixins.mq.MaxM} {
    .txt {
      order: 1;
    }
    .img {
      order: 2;
      margin-top: 24px;
    }
  }
  > div {
    width: 50%;
    display: flex;
    align-items: center;
    h3 {
      text-align: left;
    }
    p {
      text-align: left;
    }
    ${mixins.mq.MaxM} {
      width: 100%;
      h3 {
        text-align: center;
      }
    }
  }
`
const EcoSystem = styled.div`
  margin-top: 118px;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 64px;
  }
  ${mixins.mq.MaxCustom('1024px')} {
    margin-top: 48px;
  }
`
const EcoSystemHeading = styled.div`
  position: relative;
  height: 580px;
  overflow: hidden;
  ${mixins.mq.MaxM} {
    height: 720px;
  }
  ${mixins.mq.MaxS} {
    height: 594px;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: url(${assets}img/feature/why-rakuten-mobile/ecosystem-img-main-pc.png)
      center center/cover no-repeat;
    ${mixins.mq.MaxM} {
      background: url(${assets}img/feature/why-rakuten-mobile/ecosystem-img-main-tb.png)
        center center/cover no-repeat;
    }
    ${mixins.mq.MaxS} {
      background: url(${assets}img/feature/why-rakuten-mobile/ecosystem-img-main-sp.png)
        center center/cover no-repeat;
    }
  }
  .txt {
    position: absolute;
    top: 0;
    width: 50%;
    padding: 0 16px 0 64px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    z-index: 2;
    ${mixins.mq.MaxCustom('1440px')} {
      padding: 0 32px 0 32px;
    }
    ${mixins.mq.MaxM} {
      padding: 0 24px;
      width: 100%;
      height: 50%;
    }
    ${mixins.mq.MaxS} {
      height: 60%;
    }
    h2 {
      margin-top: 28px;
      ${mixins.mq.MaxCustom('1024px')} {
        br {
          display: none;
        }
      }
      ${mixins.mq.MaxM} {
        margin-top: 12px;
        font-size: 36px;
      }
      ${mixins.mq.MaxS} {
        margin-top: 8px;
      }
    }
    p {
      margin-top: 32px;
      max-width: 800px;
      &${TxtCap} {
        margin-top: 8px;
        color: ${props => props.theme.colors.white};
      }
      ${mixins.mq.MaxS} {
        margin-top: 16px;
      }
    }
  }
  .ricon {
    position: absolute;
    top: 32px;
    right: 32px;
    ${props => mixins.mq.MinMaxCustom(props.theme.min.m, props.theme.max.m)} {
      top: 24px;
      right: 24px;
      width: 60px;
    }
    ${mixins.mq.MaxS} {
      top: 16px;
      right: 16px;
      width: 40px;
    }
  }
`
const EcoSystemContents = styled.div`
  padding-top: 104px;
  ${mixins.mq.MaxCustom('1440px')} {
    padding-top: 48px;
  }
  h3 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`
const EcoSystemImg01 = styled.div`
  margin: 64px auto 0;
  max-width: 1240px;
  ${mixins.mq.MaxM} {
    max-width: 486px;
    margin: 24px auto;
  }
`
const EcoSystemBgContents = styled.div`
  margin: 130px auto 0;
  max-width: 1556px;
  ${mixins.mq.MaxCustom('1024px')} {
    margin-top: 48px;
  }
  .bg {
    display: flex;
    padding: 48px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 598px;
    position: relative;
    background: url(${assets}img/feature/why-rakuten-mobile/ecosystem-img-02-pc.png)
      0 0 / cover no-repeat;
    ${mixins.mq.MaxCustom('1440px')} {
      height: 500px;
    }
    ${mixins.mq.MaxM} {
      background: url(${assets}img/feature/why-rakuten-mobile/ecosystem-img-02-tb.png)
        0 0 / cover no-repeat;
      height: 852px;
      align-items: initial;
      flex-direction: column;
    }
    ${mixins.mq.MaxS} {
      background: url(${assets}img/feature/why-rakuten-mobile/ecosystem-img-02-sp.png)
        0 0 / cover;
      padding: 24px;
      height: 700px;
    }
  }
  .txt {
    width: 43.5%;
    color: ${props => props.theme.colors.white};
    h3,
    p {
      text-align: left;
    }
    p {
      margin-top: 24px;
    }
    ${mixins.mq.MaxCustom('1024px')} {
      h3 {
        br {
          display: none;
        }
      }
    }
    ${mixins.mq.MaxM} {
      width: 100%;
    }
  }
  .img {
    width: 45%;
    max-width: 695px;
    ${mixins.mq.MaxM} {
      width: 100%;
      max-width: 608px;
      margin-top: 40px;
    }
  }
  ${TxtCap} {
    margin-top: 8px;
    text-align: left !important;
  }
`
const EcoSystemSpu = styled.div`
  padding-top: 112px;
  ${mixins.mq.MinL} {
    width: 90%;
    max-width: 1024px;
    margin: auto;
  }
  ${mixins.mq.MaxCustom('1024px')} {
    padding-top: 48px;
  }
  .lead {
    margin: 40px auto 0;
    max-width: 1550px;
  }
`
const NoticeWrap = styled.div`
  padding: 80px 0 0;
  max-width: 1550px;
  margin: 0 auto;
  ${mixins.mq.MaxCustom('1440px')} {
    padding: 48px 0;
  }
`
const TechMoreContents = styled.div`
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid ${props => props.theme.colors.monotone75};
  ${mixins.mq.MaxS} {
    margin-top: 32px;
    padding-top: 32px;
  }
  h4 {
    text-align: center;
  }
  .img1 {
    padding: 48px 64px;
    margin-top: 32px;
    margin-bottom: 100px;
    background: #e6e6e6;
    border-radius: 16px 16px 0px 0px;
    text-align: center;
    position: relative;
    ${mixins.mq.MaxS} {
      padding: 16px;
      margin-bottom: 50px;
      margin-top: 24px;
    }
    > p {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 32px;
      ${mixins.mq.MaxCustom('1024px')} {
        font-size: 16px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      border-top: 40px solid ${props => props.theme.colors.primary};
      border-right: 65px solid transparent;
      border-bottom: 40px solid transparent;
      border-left: 65px solid transparent;
      bottom: -110px;
      left: 50%;
      transform: translateX(-50%);
      ${mixins.mq.MaxS} {
        border-width: 20px 30px 20px 30px;
        bottom: -60px;
      }
    }
  }
  .img2 {
    padding: 48px 64px;
    margin-top: 32px;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 0px 0px 16px 16px;
    text-align: center;
    ${mixins.mq.MaxS} {
      padding: 16px;
      margin-top: 24px;
      margin-bottom: 24px;
    }
    > p {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 32px;
      ${mixins.mq.MaxCustom('1024px')} {
        font-size: 16px;
      }
    }
  }
`
const TechAccordionIconCustom = styled(IconChevronRight)`
  position: absolute;
  top: 50%;
  left: -2px;
  transform: translate(0, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  overflow: hidden;
  ${mixins.mq.MaxS} {
    width: 30px;
    height: 30px;
    border: 2px solid ${props => props.theme.colors.primary};
  }
  &::before {
    display: block;
    width: 37px;
    height: 37px;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    font-weight: bold;
    line-height: 37px;
    transition: transform 0.1s ease-in-out;
    position: absolute;
    left: -1px;
    ${mixins.mq.MaxS} {
      top: 1px;
      left: 0;
      width: 26px;
      height: 26px;
      line-height: 26px;
    }
  }
`
const TechAccordionWrapperCustom = styled(AcoordionWrapper)`
  max-width: 1240px;
  margin: 40px auto 48px;
  padding: 0 24px;
  border: 0;
  background: ${props => props.theme.colors.monotone97};
`
const TechAccordionTriggerCustom = styled(AccordionTrigger)`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  ${mixins.mq.MaxS} {
    font-size: 16px;
  }
  &[aria-expanded='true'] {
    ${TechAccordionIconCustom}::before {
      transform: rotate(270deg);
    }
  }
  &[aria-expanded='false'] {
    ${TechAccordionIconCustom}::before {
      transform: rotate(90deg);
    }
  }
`
const TechCollapseWrapperCustom = styled(CollapseWrapper)`
  .accordionlist-collapse-content {
    margin: 0 auto;
    padding: 32px 32px 56px;
    ${mixins.mq.MaxS} {
      padding: 0 0 24px;
    }
  }
`
const TechAccordionClose = styled.div`
  margin: 24px 0 8px;
  text-align: center;
  > button {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    > span {
      display: inline;
      margin-right: 16px;
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      border: 2px solid ${props => props.theme.colors.primary};
      border-radius: 50%;
      padding: 4px;
      &::before {
        font-weight: bold;
      }
    }
    ${mixins.mq.MaxS} {
      font-size: 16px;
      > span {
        font-size: 12px;
      }
    }
  }
`
const EcoSystemRGroupList = styled.div`
  margin-top: 64px;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 48px;
    padding-left: calc((100% - 1156px) / 2);
  }
  ${mixins.mq.MaxM} {
    margin-top: 32px;
    padding-left: 64px;
  }
  ${mixins.mq.MaxS} {
    padding-left: 16px;
  }
`
const WhyCarouselNav = styled(SystemContainer)`
  .c-Carousel_Nav-v2 {
    margin-top: 0;
  }
`
const EcoSystemRGroupListItem = styled.div`
  max-width: 418px;
  margin: 0 20px 6px;
  border: 1px solid ${props => props.theme.colors.monotone88};
  box-shadow: 0px 6px 0px ${props => props.theme.colors.monotone88};
  ${mixins.mq.MaxM} {
    max-width: 273px;
    margin: 0 12px 6px;
  }
  a {
    text-decoration: none;
    position: relative;
    background: ${props => props.theme.colors.white};
    display: block;
    height: 27rem;
    ${mixins.mq.MaxM} {
      height: 22rem;
    }
    .img {
      width: 416px;
      height: 262px;
      overflow: hidden;
      > img {
        transition: 0.4s;
      }
      ${mixins.mq.MaxM} {
        width: 273px;
        height: 172px;
      }
    }
    .txt {
      padding: 32px 23px 48px;
      position: relative;
      h4 {
        font-size: 20px;
        line-height: 1.3;
        color: ${props => props.theme.colors.black};
      }
    }
    p {
      position: absolute;
      left: 24px;
      bottom: 24px;
      text-decoration: none;
      text-align: left;
      .link {
        text-decoration: underline;
      }
      ${IconNewTabLine} {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
      }
    }
    &:hover {
      transition: 0.4s;
      background: ${props => props.theme.colors.monotone97};
      .img {
        img {
          transform: scale(1.1);
        }
      }
      p {
        text-align: left;
        .link {
          text-decoration: underline;
          text-decoration-thickness: 3px;
        }
      }
    }
  }
`
const VoiceHead = styled.div`
  margin-top: 135px;
  padding-top: 64px;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 48px;
    padding-top: 48px;
  }
  h2 {
    margin-top: 24px;
    font-weight: bold;
    text-align: center;
  }
`
const VoiceTag = styled(Tag)`
  text-align: center;
`
const VoiceList = styled.div`
  margin-top: 64px;
  ${mixins.mq.MaxCustom('1440px')} {
    margin-top: 48px;
    padding-left: calc((100% - 1156px) / 2);
  }
  ${mixins.mq.MaxM} {
    margin-top: 32px;
    padding-left: 64px;
  }
  ${mixins.mq.MaxS} {
    padding-left: 16px;
  }
`
const VoiceListItem = styled.div`
  max-width: 418px;
  margin: 0 20px 6px;
  border: 1px solid ${props => props.theme.colors.monotone88};
  box-shadow: 0px 6px 0px ${props => props.theme.colors.monotone88};
  ${mixins.mq.MaxCustom('1440px')} {
    max-width: 320px;
  }
  ${mixins.mq.MaxM} {
    max-width: 273px;
    margin: 0 12px 6px;
  }
  a {
    padding-top: 32px;
    text-decoration: none;
    background: ${props => props.theme.colors.white};
    display: block;
    .img {
      width: 138px;
      height: 138px;
      margin: 0 auto;
      ${mixins.mq.MaxM} {
        width: 110px;
        height: 110px;
      }
    }
    .txt {
      padding: 24px 23px;
      position: relative;
      height: 11.5rem;
      ${mixins.mq.MaxCustom('1440px')} {
        height: 10rem;
      }
      ${mixins.mq.MaxM} {
        height: 9rem;
      }
      h3 {
        font-size: 24px;
        line-height: 1.3;
        color: ${props => props.theme.colors.black};
        ${mixins.mq.MaxCustom('1440px')} {
          font-size: 20px;
        }
        ${mixins.mq.MaxM} {
          font-size: 16px;
        }
      }
      .detail {
        margin-top: 24px;
        line-height: 1.54;
        color: ${props => props.theme.colors.black};
      }
      p {
        margin-top: 24px;
        text-decoration: none;
        text-align: left;
      }
      .link {
        position: absolute;
        left: 24px;
        bottom: 24px;
        span {
          text-decoration: underline;
        }
        ${IconChevronRight} {
          text-decoration: none;
          color: ${props => props.theme.colors.primary};
        }
      }
    }
    &:hover {
      background: ${props => props.theme.colors.monotone97};
      p {
        text-align: left;
        &.link {
          span {
            text-decoration: underline;
            text-decoration-thickness: 3px;
          }
        }
      }
    }
  }
`
const EcoSystemSpuGroup = styled.div`
  padding: 0 16px;
  border: 2px solid black;
  border-radius: 7.48px;
  margin-top: 48px;
  ${mixins.mq.MinL} {
    padding: 0 40px;
  }
`
const EcoSystemSpuImg2Base = styled.div`
  position: relative;
  margin: 0 0 8px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.pink5};
  ${mixins.mq.MinL} {
    margin: 0 0 24px;
    padding-top: 32px;
  }
  .icon1 {
    position: absolute;
    z-index: 1;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 32px;
    ${mixins.mq.MinL} {
      bottom: -32px;
      width: 40px;
      height: 40px;
    }
  }
  .icon2 {
    position: absolute;
    z-index: 1;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 32px;
    ${mixins.mq.MinL} {
      bottom: 20%;
      width: 40px;
      height: 40px;
    }
  }
`
const EcoSystemSpuImg2Node1 = styled(EcoSystemSpuImg2Base)`
  margin-top: 16px;
  padding: 16px 8px 24px;
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MinL} {
    margin-top: 40px;
    padding: 17px 40px;
  }
`
const EcoSystemSpuImg3 = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 16px;
`
const EcoSystemSpuImg4 = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
`
const EcoSystemSpuGroup3 = styled.div`
  margin: 0 36px;
  padding: 24px 0;
  ${mixins.mq.MinL} {
    width: 238px;
    margin: 0 auto;
  }
`
const EcoSystemSpuGroup4 = styled.div`
  ${mixins.mq.MinL} {
    margin: 0 148px 8px;
  }
  .img {
    ${mixins.mq.MinL} {
      max-width: 480px;
    }
  }
  ${TxtCap} {
    margin: 8px auto 24px;
    text-align: center;
    ${mixins.mq.MinL} {
      margin: 8px auto 42px;
    }
  }
`
const EcoSystemAccordionWrapper = styled.div`
  max-width: 1080px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.colors.pink5};
  ${mixins.mq.MinL} {
    width: 90%;
  }
`
const EcoSystemCardContainer = styled.ul`
  ${mixins.mq.MinL} {
    width: 90%;
    margin-left: 5%;
  }
`
const EcoSystemCardWrapper = styled.li`
  display: inline-block;
  width: 47%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 12px;
  position: relative;
  ${mixins.mq.MinL} {
    width: 14%;
  }
`
const EcoSystemCardLink = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const MovieColumn = styled.div`
  margin-top: 96px;
  ${mixins.mq.MaxM} {
    margin-top: 48;
  }

  ._child {
    &:nth-child(n + 2) {
      margin-top: 64px;
      ${mixins.mq.MaxM} {
        margin-top: 40px;
      }
    }
  }
`
const MovieContainer = styled.div`
  display: grid;
  margin: 24px auto 0;
  gap: 24px;
  display: flex;
  ${mixins.mq.MinL} {
    justify-content: space-between;
    max-width: 1556px;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  > div {
    ${mixins.mq.MinL} {
      max-width: 1032px;
      width: calc((1032 / 1566) * 100%);
    }
  }
`
const MovieContainerMod1 = styled(MovieContainer)`
  ${mixins.mq.MaxM} {
    display: block;
  }
`
const MovieContainerInner = styled.div`
  position: relative;
  padding-top: 56.25%;
  .video-js {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`
const MovieUnderContent = styled.div`
  margin-inline: auto;
  ${mixins.mq.MinL} {
    max-width: 1032px;
    width: calc((1032 / 1566) * 100%);
  }
`
const MovieTitle = styled.p`
  font-size: 12px;
  ${mixins.mq.MinL} {
    font-size: 14px;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    ${mixins.mq.MinL} {
      font-size: 22px;
    }
  }
`
const FiveMillionContainer = styled.div`
  padding-top: 48px;
  text-align: center;
  background-image: url(${assets}img/feature/why-rakuten-mobile/sequin-bg-sp.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  ${mixins.mq.MinL} {
    background-image: url(${assets}img/feature/why-rakuten-mobile/sequin-bg-pc.png);
  }
`
const FiveMillionTitle = styled.h2`
  font-size: 22px;
  ${mixins.mq.MinL} {
    font-size: 33px;
  }
  > span {
    ${mixins.mq.MinL} {
      font-size: 29px;
    }
  }
  span + span {
    font-size: 26px;
    ${mixins.mq.MinL} {
      font-size: 42px;
    }
  }
`
const FiveMillionTxt = styled.span`
  font-size: 38px;
  line-height: 1;
  font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
  font-weight: bold;
  vertical-align: -3%;
  ${mixins.mq.MinL} {
    font-size: 62px;
  }
`

const MarginAuto = styled.div`
  margin: 0 auto;
`

const Heading3Mod1 = styled(Heading3)`
  margin-top: 96px;
  font-size: 64px;
  ${mixins.mq.MaxCustom('1440px')} {
    font-size: 36px;
  }
  ${mixins.mq.MaxM} {
    margin-top: 0;
    font-size: 36px;
  }
`

const SystemContainerMod1 = styled(SystemContainer)`
  max-width: 1588px;
`

const ThatRm = styled(InfoboxEmphasis1)`
  padding: 64px;
  margin-top: 96px;
  ${mixins.mq.MaxM} {
    padding: 40px 16px;
    margin: 64px -16px 0;
  }
`
const ThatRmTitle = styled.p`
  font-size: 34px;
  text-align: center;
  font-weight: bold;
  ${mixins.mq.MaxM} {
    font-size: 28px;
  }
`

const ThatRmContent = styled.ul`
  display: flex;
  gap: 48px;
  margin-top: 32px;
  ${mixins.mq.MaxM} {
    margin-top: 24px;
  }
  ${mixins.mq.MaxCustom('1200px')} {
    display: block;
    li {
      width: 100% !important;
      margin-top: 24px;
    }
  }
  li {
    display: grid;
    column-gap: 24px;
    width: 50%;
    grid-template-columns: 270px 1fr;
    ${mixins.mq.MaxM} {
      gap: 8px;
      grid-template-columns: auto 1fr;
    }
    > .item {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      > p {
        &:first-child {
          font-weight: bold;
          font-size: 32px;
          ${mixins.mq.MaxM} {
            font-size: 20px;
          }
        }
        &:nth-child(2) {
          font-size: 24px;
          margin-top: 8px;
          ${mixins.mq.MaxM} {
            font-size: 16px;
          }
        }
      }
    }
    > img {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      max-width: 300px;
      max-height: 200px;
      width: 100%;
      height: 100%;
      ${mixins.mq.MaxM} {
        max-width: 120px;
        max-height: 80px;
      }
    }
    > span {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      ${mixins.mq.MaxM} {
        margin-top: 8px;
        grid-column: 1 / 3;
      }
    }
  }
`
const ThatRmContentService2Col = styled(Service2Col)`
  max-width: initial;
  .txt {
    ${mixins.mq.MinL} {
      padding-right: 0;
      padding-left: 48px;
    }
    ${mixins.mq.MinCustom('1200px')} {
      width: calc(100% - 640px);
    }
    h3 {
      font-size: 32px;
      ${mixins.mq.MaxM} {
        font-size: 20px;
      }
    }
  }
  .img {
    ${mixins.mq.MinCustom('1200px')} {
      max-width: 640px;
      width: 100%;
    }
  }
`

const FeatureWhyrakutenmobile: NextPage = () => {
  const pagetitle = 'なぜ今楽天モバイルなのか'
  const directories = [{ path: '/feature/why-rakuten-mobile/', label: '' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const imgpath = `${assets}img/feature/why-rakuten-mobile/`
  const [techAccordionOpenState, updateTechAccordionOpenState] = useState(false)
  const [videoActiveState, updateVideoActiveState] = useState(false)

  const rgroup = [
    {
      url: 'https://www.rakuten.co.jp/',
      img: 'rgroup-01.png',
      h4: '日本最大級のショッピングモール。アプリで手軽にショッピング',
      link: '楽天市場はこちら',
    },
    {
      url: 'https://www.rakuten-card.co.jp/',
      img: 'rgroup-02.png',
      h4: '年会費永年無料でポイントもザクザク貯まる。もちろんスマホ代でも',
      link: '楽天カードはこちら',
    },
    {
      url: 'https://pay.rakuten.co.jp/',
      img: 'rgroup-03.png',
      h4: 'コンビニや街のお店で、ピッとかざすだけ。簡単スマホ決済',
      link: '楽天ペイはこちら',
    },
    {
      url: 'https://pay.rakuten.co.jp/topics/suica/',
      img: 'rgroup-04.png',
      h4: 'スマホをかざすだけで電車やバスに乗れる。チャージもスマホで簡単',
      link: '楽天ペイ×suicaはこちら',
    },
    {
      url: 'https://www.rakuten-bank.co.jp/',
      img: 'rgroup-05.png',
      h4: '日本最大級のネット銀行。振込や明細確認もアプリでできる',
      link: '楽天銀行はこちら',
    },
    {
      url: 'https://fril.jp/',
      img: 'rgroup-06.png',
      h4: 'スマホで簡単に出品・購入ができるフリマアプリ',
      link: 'ラクマはこちら',
    },
    {
      url: 'https://books.rakuten.co.jp/e-book/',
      img: 'rgroup-07.png',
      h4: '人気のマンガや小説、雑誌がスマホで気軽にすぐ読める',
      link: '楽天Koboはこちら',
    },
    {
      url: 'https://travel.rakuten.co.jp/',
      img: 'rgroup-08.png',
      h4: 'ホテルやツアー、航空券予約も。予約確認もスマホで簡単',
      link: '楽天トラベルはこちら',
    },
    {
      url: 'https://www.rakuten-sec.co.jp/',
      img: 'rgroup-09.png',
      h4: '楽天ポイントを使ってスマホで簡単、投資家デビュー',
      link: '楽天証券はこちら',
    },
    {
      url: 'https://energy.rakuten.co.jp/',
      img: 'rgroup-10.png',
      h4: '月々のでんき代やガス代を楽天ポイントで支払える',
      link: '楽天エナジーはこちら',
    },
  ]
  const voice = [
    {
      url: '/uservoice/59/?l-id=feature_why-rakuten-mobile_uservoice_59',
      img: 'voice-img-59.png',
      h3: '夫婦で乗り換えて15,000円もおトクに！楽天ポイントもザクザク',
      text: '子どもが産まれたのがきっかけです。子どもの将来のためにお金を貯めたいと思って、生活費の見直しから始めま.....',
    },
    {
      url: '/uservoice/58/?l-id=feature_why-rakuten-mobile_uservoice_58',
      img: 'voice-img-58.png',
      h3: '2GB無料の海外ローミングがフランスで活躍！',
      text: 'フランスのブルゴーニュです。2022年8月ごろ、仕事の出張で1カ月ほど滞在したときに楽天モバイルの海外ローミングを.....',
    },
    {
      url: '/uservoice/57/?l-id=feature_why-rakuten-mobile_uservoice_57',
      img: 'voice-img-57.png',
      h3: '海外で月をまたぐと4GBも無料でつかえる！手軽で便利な海外ローミング',
      text: 'タイのバンコクです。年末年始とゴールデンウィークに、それぞれ1週間.....',
    },
    {
      url: '/uservoice/56/?l-id=feature_why-rakuten-mobile_uservoice_56',
      img: 'voice-img-56.png',
      h3: '福井県でしっかりつながる！通信速度や安定性を気にして避けていたらもったいない',
      text: 'データ使い放題※なのに、利用料金が安いのが乗り換えの決め手でした。シンプルな料金プランで、色々な料金プランを.....',
    },
    {
      url: '/uservoice/55/?l-id=feature_why-rakuten-mobile_uservoice_55',
      img: 'voice-img-55.png',
      h3: 'データ通信が思い切り使えて便利！楽天経済圏も活用しています',
      text: '以前利用していた携帯電話会社はデータ容量が少なかったため、毎月のデータ利用に気を使っていたことが理由です.....',
    },
    {
      url: '/uservoice/54/?l-id=feature_why-rakuten-mobile_uservoice_54',
      img: 'voice-img-54.png',
      h3: '毎月のデータ利用量は月300GB以上！ライブ配信時も安定しています',
      text: '以前利用していた携帯電話会社では、データ使い放題の料金プランを利用していました。ただ、毎月の利用料金が.....',
    },
    {
      url: '/uservoice/53/?l-id=feature_why-rakuten-mobile_uservoice_53',
      img: 'voice-img-53.png',
      h3: 'やっぱり楽天モバイル！他社に乗り換えて楽天モバイルの通信速度を実感し、再契約！',
      text: '楽天モバイルには 2 回乗り換えていて、1 回目は大手携帯電話会社からの乗り換えでした。データ使い放題の料金プランを.....',
    },
    {
      url: '/uservoice/52/?l-id=feature_why-rakuten-mobile_uservoice_52',
      img: 'voice-img-52.png',
      h3: '海外ローミングは手軽な設定で使えます！はじめての旅行にも便利',
      text: '渡航先で現地の海外SIMを設定するまでの間、楽天モバイルを利用しています。空港や街中のフリーWi-Fiも..',
    },
    {
      url: '/uservoice/51/?l-id=feature_why-rakuten-mobile_uservoice_51',
      img: 'voice-img-51.png',
      h3: '娘の進学を機に乗り換え！楽天ポイントで生活費の負担も軽減',
      text: '以前契約していた携帯電話会社の料金プランでは、データ容量が足りないと感じていたのがきっかけです。..',
    },
    {
      url: '/uservoice/50/?l-id=feature_why-rakuten-mobile_uservoice_50',
      img: 'voice-img-50.png',
      h3: '複数回線から楽天モバイル 1 本へ！大学生にうれしい料金で大満足',
      text: '過去に1年間無料キャンペーンをしていたことがきっかけです。もともと、スマホを使い始めた当初は..',
    },
  ]

  const configTxt =
    `window.rexSurveyConfig = {
      "surveyId": "40808",
      "cId": {
          "name": "answers[40808_277194]",
          "value": ""
      },
      "embedded": true,
      "url": {
          "name": "answers[40808_277195]"
      },
      "triggerIdName": "trigger",
      "expirationPeriod": 30,
      "enableDisplaySuppressionPerPage": true,
      "enableFormAction": true,
      "permission": {
          "inquiryTxt": "キャンペーンをより分かりやすくするためにアンケートにご協力ください (選択式1問) ",
          "yesBtnTxt": "協力する",
          "noBtnTxt": "今は協力しない",
          "available": true
      },
      "thanks": {
          "txt0": "ご協力ありがとうございました",
          "txt1": "いただいた情報は、サービス改善のために使用させていただきます。"
      },
      "nps": {
          "available": true,
          "question": {
              "label": "このページを見て、楽天モバイルを魅力的だと思いましたか？"
          },
          "options": [
              {
                  "name": "answers[40808_277196]",
                  "value": "712274"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712275"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712276"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712277"
              },
              {
                  "name": "answers[40808_277196]",
                  "value": "712278"
              }
          ],
          "txt0": "全く思わなかった",
          "txt1": "とても思った",
          "checked": 4
      },
      "inquiry": {
          "checkList": {
              "available": true,
              "question": "あなたがこのページ見て感じたことで、当てはまるものを教えてください (複数可)",
              "options": [
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712279",
                      "label": "プランやサービスが魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712280",
                      "label": "楽天モバイルの通信技術が魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712281",
                      "label": "楽天回線エリアの人口カバー率が魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712282",
                      "label": "楽天ポイントが貯まる・使えるのが魅力的だ"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712283",
                      "label": "「お客様の声」が参考になった"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712284",
                      "label": "楽天モバイルを周りに薦めたくなった"
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712285",
                      "label": " 特に無い"
                  }
              ]
          },
          "freeInput": {
              "available": false,
              "name": "answers[40808_277198]",
              "title": "ご回答いただいた内容の理由や、このページについてのご意見・ご要望がございましたら、ご自由にお書きください【1000文字】"
          },
          "sendBtnTxt": "送信する",
          "footerNote": {
              "available": true,
              "text": "お客様よりご提供いただく情報はサービス向上のためご利用させていただきます。",
              "link": "https://privacy.rakuten.co.jp/",
              "htmlText": ""
          }
      },
      "inquiryNegative": {
          "checkList": {
              "available": false,
              "options": [
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712279",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712280",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712281",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712282",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712283",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712284",
                      "label": ""
                  },
                  {
                      "name": "answers[40808_277197][]",
                      "value": "712285",
                      "label": ""
                  }
              ]
          }
      },
      "ua": {
          "name": "answers[40808_277199]"
      },
      "href": {
          "name": "answers[40808_277200]"
      },
      "cookie": {
          "available": false
      },
      "assetPaths": {
          "closeButton": "",
          "checkIcon": ""
      }
    }`
  
  useEffect(() => {
    const carouselConfig = {
      arrows: true,
      dots: true,
      slidesToShow: 4,
      dotsClass: 'slick-dots c-Carousel_Dots-v2',
      infinite: true,
      prevArrow: `<button class="c-Carousel_Nav-v2-prev" aria-label="Previous" type="button">Previous</button>`,
      nextArrow: `<button class="c-Carousel_Nav-v2-next" aria-label="Next" type="button">Next</button>`,
      autoplaySpeed: 3000,
      variableWidth: true,
    }
    const setSlick1 = () => {
      require('slick-carousel')
      const whyCarousel = $('.js-Why-Carousel')
      whyCarousel.each(function () {
        let $self = $(this)
        $self.not('.slick-initialized').slick(
          $.extend({}, carouselConfig, {
            appendArrows: $self
              .next()
              .children('.c-Carousel_Nav-v2-wrap')
              .children('.c-Carousel_Nav-v2'),
            appendDots: $self
              .next()
              .children('.c-Carousel_Nav-v2-wrap')
              .children('.c-Carousel_Nav-v2'),
            slidesToScroll: 1,
            autoplay: false,
          }),
        )
      })
    }
    const setSlick2 = () => {
      require('slick-carousel')
      const whyCarouselAuto = $('.js-Why-Carousel-auto')
      whyCarouselAuto.each(function () {
        let $self = $(this)
        $self.not('.slick-initialized').slick(
          $.extend({}, carouselConfig, {
            appendArrows: $self
              .next()
              .children('.c-Carousel_Nav-v2-wrap')
              .children('.c-Carousel_Nav-v2'),
            appendDots: $self
              .next()
              .children('.c-Carousel_Nav-v2-wrap')
              .children('.c-Carousel_Nav-v2'),
            slidesToScroll: 1,
            autoplay: true,
          }),
        )
      })
    }

    setSlick1()
    setSlick2()

    require('intersection-observer')

    // animation
    const animation1 = document.querySelectorAll('.js-animation-1')
    const animation2 = document.querySelectorAll('.js-animation-2')

    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('why-Animation_Zoom1')
        } else {
          entry.target.classList.remove('why-Animation_Zoom1')
        }
      })
    })

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('why-Animation_Zoom2')
        } else {
          entry.target.classList.remove('why-Animation_Zoom2')
        }
      })
    })

    animation1.forEach(target => {
      observer1.observe(target)
    })

    animation2.forEach(target => {
      observer2.observe(target)
    })

    window.onpopstate = () => {
      if (window.location.hash) {
        const hashValue = window.location.hash.replace('#', '')
        scroller.scrollTo(hashValue, {
          smooth: 'false',
        })
      }
    }
  }, [])

  const brightcoveVideos: BrightcoveVideoProps[] = useMemo(
    () => [
      {
        className: 'video-js',
        playerId: 'ahYJfhujM',
        videoId: '6350541227112',
      },
      {
        className: 'video-js',
        playerId: 'ahYJfhujM',
        videoId: '6350543468112',
        dataRatMediaId: 'movie_application',
      },
      {
        className: 'video-js',
        playerId: 'default',
        videoId: '6341472758112',
      },
    ],
    [],
  )

  const [urls, BrightcoveIframe] = useBrightcove(brightcoveVideos)

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="シンプルで使いやすいプランやサービス、 独自の技術で創る高品質な通信ネットワーク、楽天ならではのポイント還元で、お客様の生活を豊かにする革新的なモバイルサービスを届けます。なぜ今楽天モバイルなのか、その裏側をご紹介します。"
      />
      <SystemWrapperCustom>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <FullMv>
          <LayoutSystem>
            <HeroMain>
              <h1>{pagetitle}</h1>
              <div
                className={`${Utils['Disp-pc']} js-video-wrappers${
                  videoActiveState ? ' js-active' : ''
                }`}
              >
                <video
                  poster={`${imgpath}video-img-pc.png`}
                  playsInline
                  autoPlay
                  muted
                  loop
                  onPlay={() => updateVideoActiveState(true)}
                >
                  <source src={`${imgpath}mv-pc.mp4`} type="video/mp4" />
                  <source src={`${imgpath}mv-pc.webm`} type="video/webm" />
                </video>
              </div>
              <div
                className={`${Utils['Disp-tb-sp']} js-video-wrappers${
                  videoActiveState ? ' js-active' : ''
                }`}
              >
                <video
                  poster={`${imgpath}video-img-sp.png`}
                  playsInline
                  autoPlay
                  muted
                  loop
                  onPlay={() => updateVideoActiveState(true)}
                >
                  <source src={`${imgpath}mv-sp.mp4`} type="video/mp4" />
                  <source src={`${imgpath}mv-sp.webm`} type="video/webm" />
                </video>
              </div>
            </HeroMain>
          </LayoutSystem>
        </FullMv>
        <FiveMillionContainer>
          <ContentsInner>
            <FiveMillionTitle id="movie">
              携帯キャリアサービスの契約数
              <span>
                が<br className={Utils['Disp-tb-sp']} />
              </span>
              <span>
                <TxtEmp02>
                  <FiveMillionTxt>650</FiveMillionTxt>万回線を突破
                </TxtEmp02>
              </span>
              しました
            </FiveMillionTitle>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※2024年4月時点
              <LinkIconAfter
                href="https://corp.rakuten.co.jp/news/press/2024/0408_02.html"
                target="_blank"
                rel="noopener"
                className={Utils['Ml-16']}
              >
                詳細はこちら
                <IconNewTabLine />
              </LinkIconAfter>
            </TxtCap>
          </ContentsInner>
          <ContentsInner>
            <HeroSub>
              <HeroLead>
                楽天モバイルは、サービス向上に取り組み、高い評価をいただいております
              </HeroLead>
              <HeroGrid>
                <HeroGridItem>
                  <HeroBorder>
                    <HeroGridTxt>
                      オリコン顧客満足度®調査 携帯キャリア
                      <br />
                      <TxtEmp02>料金プラン3年連続No.1</TxtEmp02>
                    </HeroGridTxt>
                    <HeroGridImg>
                      <img
                        srcSet={`${imgpath}oricon-240412.png`}
                        width="103"
                        height="112"
                        alt="オリコン顧客満足度第1位賞"
                      />
                    </HeroGridImg>
                  </HeroBorder>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※2021~2023年 オリコン顧客満足度®調査
                    「携帯キャリア」料金プラン 第1位
                  </TxtCap>
                </HeroGridItem>

                <OpensignalCarousel />

                <HeroGridItem>
                  <HeroBorder>
                    <HeroGridTxt className="adjustLayout">
                      2021年・2022年・2023年 3年連続
                      <br />
                      <TxtEmp02>GLOMO Awards受賞</TxtEmp02>
                      <TxtCap>※1</TxtCap>
                    </HeroGridTxt>
                    <HeroGridImgMod2>
                      <img
                        src={`${imgpath}glomo.png`}
                        width="120"
                        alt="GLOMO"
                      />
                    </HeroGridImgMod2>
                  </HeroBorder>
                  <TxtCap as="p" className={Utils['Mt-8']}>
                    ※1
                    <LinkNormal
                      href="#notice"
                      onClick={e => anchorCallback(e, 'notice')}
                    >
                      詳細はこちら
                    </LinkNormal>
                  </TxtCap>
                </HeroGridItem>
              </HeroGrid>
            </HeroSub>
          </ContentsInner>
        </FiveMillionContainer>
        <FullBlack>
          <LayoutSystem>
            <Nav>
              <NavInner>
                <h2
                  data-ratid="why-rakuten-mobile_scroll-01_statement"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  <span>楽天モバイルは</span>人々の生活を豊かにする
                  <br />
                  革新的なモバイルサービスを届けます
                </h2>
                <nav>
                  <div>
                    <a
                      href="#service"
                      onClick={e => anchorCallback(e, 'service')}
                    >
                      <Img1 />
                      <NavTag>
                        <img
                          src={`${imgpath}tag-service-pc.png`}
                          className={Utils['Disp-pc']}
                          alt=""
                        />
                        <img
                          src={`${imgpath}tag-service-sp.png`}
                          className={Utils['Disp-tb-sp']}
                          alt=""
                        />
                      </NavTag>
                      <NavWrap>
                        <NavTxt>
                          シンプルで使いやすい
                          <br />
                          プランとサービス
                        </NavTxt>
                        <NavArrow>
                          <IconArrowDown />
                        </NavArrow>
                      </NavWrap>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#ecosystem"
                      onClick={e => anchorCallback(e, 'ecosystem')}
                    >
                      <Img3 />
                      <NavTag>
                        <img
                          src={`${imgpath}tag-ecosystem-pc.png`}
                          className={Utils['Disp-pc']}
                          alt=""
                        />
                        <img
                          src={`${imgpath}tag-ecosystem-sp.png`}
                          className={Utils['Disp-tb-sp']}
                          alt=""
                        />
                      </NavTag>
                      <NavWrap>
                        <NavTxt>
                          満足度No.1<sub>※2</sub>の<br />
                          ポイント還元サービス
                        </NavTxt>
                        <NavArrow>
                          <IconArrowDown />
                        </NavArrow>
                      </NavWrap>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#technology"
                      onClick={e => anchorCallback(e, 'technology')}
                    >
                      <Img2 />
                      <NavTag>
                        <img
                          src={`${imgpath}tag-technology-pc.png`}
                          className={Utils['Disp-pc']}
                          alt=""
                        />
                        <img
                          src={`${imgpath}tag-technology-sp.png`}
                          className={Utils['Disp-tb-sp']}
                          alt=""
                        />
                      </NavTag>
                      <NavWrap>
                        <NavTxt>
                          世界初<sub>※3</sub>のテクノロジーで創る
                          <br />
                          高品質な通信サービス
                        </NavTxt>
                        <NavArrow>
                          <IconArrowDown />
                        </NavArrow>
                      </NavWrap>
                    </a>
                  </div>
                </nav>
                <NavCap as="p">
                  ※2 情報元：「
                  <LinkIconAfterWhite
                    href="https://event.rakuten.co.jp/group/point/pointzukan/"
                    target="_blank"
                    rel="noopener"
                  >
                    楽天ポイント お楽しみ図鑑
                    <IconNewTabLine />
                  </LinkIconAfterWhite>
                  」※3 2019年10月1日時点／ステラアソシエ調べ ※
                  <LinkIconAfterWhite
                    href="#notice"
                    onClick={e => anchorCallback(e, 'notice')}
                  >
                    その他の条件の詳細はこちら
                  </LinkIconAfterWhite>
                </NavCap>
              </NavInner>
            </Nav>
          </LayoutSystem>
        </FullBlack>
        <FullBlack>
          <LayoutSystem>
            <ServiceWrap id="service">
              <div>
                <ServiceHeadingBg>
                  <ServiceHeadingTxt>
                    <div>
                      <Tag>
                        <img src={`${imgpath}tag-service.svg`} alt="SERVICE" />
                      </Tag>
                      <Heading2
                        data-ratid="why-rakuten-mobile_scroll-02_service"
                        data-ratevent="appear"
                      >
                        シンプルで使いやすい
                        <br />
                        プランとサービス
                      </Heading2>
                      <p>
                        これまで複雑で分かりにくかったスマホの料金プランや契約手続き。
                        <br />
                        楽天モバイルならシンプルな料金プランで手続きも簡単。他社への乗り換え時の制限もありません。
                      </p>
                    </div>
                  </ServiceHeadingTxt>
                </ServiceHeadingBg>
              </div>
            </ServiceWrap>
          </LayoutSystem>
        </FullBlack>
        <LayoutSystem>
          <ServiceContents>
            <ContentsInner>
              <Heading3>
                だれもが使いやすい
                <br className={Utils['Disp-tb-sp']} />
                ワンプラン
              </Heading3>
              <p>
                料金プランはひとつだけ。毎月のデータ利用量で金額が変動するから、「自分に合ったギガ数は？」と悩まなくて大丈夫。
                <br />
                さらに20GB超過後はどれだけ使っても家族割引適用でデータ無制限2,880円/月
                （税込3,168円）
                <sub>※4</sub>。誰もが安心して利用できます。
              </p>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※4
                公平なサービス提供または環境により速度低下する場合あり※通話料等別
              </TxtCap>
              <PlanImg>
                <div>
                  <img
                    src={`${imgpath}img-plan-01-pc-230926.png`}
                    alt="通話やトークアプリ利用がメインの人も"
                  />
                </div>
                <div>
                  <img
                    src={`${imgpath}img-plan-02-pc.png`}
                    alt="日によってデータ利用がまちまちの人も"
                  />
                </div>
                <div>
                  <img
                    src={`${imgpath}img-plan-03-pc.png`}
                    alt="動画やゲームで毎日データをたくさん使う人も"
                  />
                </div>
              </PlanImg>
              <ServiceBtn>
                <ButtonSecondaryCustom
                  as="a"
                  href="/fee/saikyo-plan/?l-id=feature_why-rakuten-mobile_fee_saikyo"
                >
                  料金プランをもっと詳しく
                </ButtonSecondaryCustom>
              </ServiceBtn>
              <Service2Col>
                <div className="txt">
                  <div>
                    <Heading3>
                      Rakuten Link
                      <br />
                      アプリ利用で
                      <br />
                      国内通話かけ放題
                      <TxtCap as="span" className={Utils['Ml-8']}>
                        ※5
                      </TxtCap>
                    </Heading3>
                    <p className={Utils['Mt-24']}>
                      今お使いの電話番号そのままで、他の携帯電話会社のスマホや固定電話、Rakuten
                      Linkを使っていない人にも無料で通話が可能です。データ利用量にもカウントされません。
                    </p>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      ※5
                      一部対象外番号あり。アプリ未使用時30秒22円。データタイプのお申し込みはデータ通信のみの利用、通話は対象外
                    </TxtCap>
                    <div className={Utils['Mt-24']}>
                      <ButtonSecondaryCustom
                        as="a"
                        href="/service/rakuten-link/?l-id=why-rakuten-mobile_service_rakuten-link"
                      >
                        Rakuten Linkアプリをもっと詳しく
                      </ButtonSecondaryCustom>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img
                    src={`${imgpath}service-img-04-pc.png`}
                    className={Utils['Disp-pc']}
                    alt=""
                  />
                  <img
                    src={`${imgpath}service-img-04-tb.png`}
                    className={Utils['Disp-tb-sp']}
                    alt=""
                  />
                </div>
              </Service2Col>
            </ContentsInner>
          </ServiceContents>
          <SystemContainerMod1>
            <ServiceContents>
              <div className={Utils['Align-center']}>
                <Heading3Mod1>革新的な契約体験</Heading3Mod1>
              </div>
              <ServiceBgContentsMt32>
                <div className="bg">
                  <div className="txt">
                    <Heading3>
                      最短3分<sub>※6</sub>で開通。
                    </Heading3>
                    <p>
                      契約情報をスマホにダウンロードすることで開通するeSIMに対応。SIMカードが届くのを待つ必要がなくなり、いつでもどこでも契約・開通ができるようになりました。eSIM＋AIかんたん本人確認（eKYC）なら、Webで申し込み完了後、最短3分
                      <sub>※6</sub>で開通が完了します。
                    </p>
                    <div className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']}`}>
                      <ButtonSecondary
                        as="a"
                        href="/product/sim/esim/?l-id=feature_why-rakuten-mobile_product_sim-esim"
                      >
                        eSIMをもっと詳しく
                      </ButtonSecondary>
                    </div>
                    <div className={`${Utils['Mt-pc-24']} ${Utils['Mt-16']}`}>
                      <ButtonSecondary
                        as="a"
                        href="/guide/verify/ekyc/?l-id=feature_why-rakuten-mobile_guide_verify-ekyc"
                      >
                        eKYCをもっと詳しく
                      </ButtonSecondary>
                    </div>
                  </div>
                </div>
              </ServiceBgContentsMt32>
              <LayoutInfo
                className={`${Utils['Mt-8']} ${Utils['Align-left']}`}
                as="p"
              >
                ※6
                楽天モバイル対応のeSIM対応製品でアプリからeKYCで申し込んだ場合。SIMフリーの製品でない場合、SIMロック解除が必要です。
              </LayoutInfo>
            </ServiceContents>
            <MovieColumn className={Utils['Align-center']}>
              <div className="_child">
                <HeadingSub>
                  <TxtWeightBold>
                    Web契約ならいつでも、どこでも、かんたん！
                  </TxtWeightBold>
                </HeadingSub>
                <MovieContainerMod1>
                  <MarginAuto>
                    <MovieContainerInner>
                      <BrightcoveIframe url={urls[0]} />
                    </MovieContainerInner>
                  </MarginAuto>
                </MovieContainerMod1>
              </div>
              <div className="_child">
                <HeadingSub>
                  <TxtWeightBold>
                    簡単操作で手軽なWeb申し込みを体験いただきました
                  </TxtWeightBold>
                </HeadingSub>
                <MovieContainerMod1>
                  <MarginAuto>
                    <MovieContainerInner>
                      <BrightcoveIframe url={urls[1]} />
                    </MovieContainerInner>
                  </MarginAuto>
                </MovieContainerMod1>
              </div>
            </MovieColumn>
            <ThatRm>
              <ThatRmTitle>そんな楽天モバイルは</ThatRmTitle>
              <ThatRmContent>
                <li>
                  <img
                    src={`${imgpath}img-web-contract.png`}
                    alt="Web契約 No.1"
                  />
                  <div className="item">
                    <p>Web契約でNo.1</p>
                    <p>
                      Web契約利用者が最も選んだ携帯電話会社<TxtCap>※</TxtCap>
                    </p>
                  </div>
                  <TxtCap>
                    ※MMD研究所調べ / 2023年3月21日時点 /
                    2021年8月～半年間にメイン通信サービスの新規・MNPのWeb契約をした人を対象
                    / n=1,260
                  </TxtCap>
                </li>
                <li>
                  <img
                    src={`${imgpath}img-consider-switching.png`}
                    alt="乗り換え検討先 No.1"
                  />
                  <div className="item">
                    <p>乗り換え候補先でNo.1</p>
                    <p>
                      他社メイン利用者が最も選んだ乗り換え候補先
                      <TxtCap>※</TxtCap>
                    </p>
                  </div>
                  <TxtCap>
                    ※MMD研究所調べ / 2023年10月27日時点 /
                    他社への乗り換えを検討している人を対象 / n=４,065
                  </TxtCap>
                </li>
              </ThatRmContent>
              <TxtCap className={`${Utils['Disp-tb-sp']} ${Utils['Mt-8']}`}>
                ※2021~2023年 オリコン顧客満足度®調査 「携帯キャリア」
                加入手続き／初期設定のしやすさ 第1位
              </TxtCap>
              <ThatRmContentService2Col
                className={`${Utils['Mt-pc-32']} ${Utils['Mt-sp-48']}`}
              >
                <div className="img">
                  <img
                    src={`${imgpath}service-img-02-pc.png?220603`}
                    className={Utils['Disp-pc']}
                    alt=""
                  />
                  <img
                    src={`${imgpath}service-img-02-tb.png?220603`}
                    className={Utils['Disp-tb-sp']}
                    alt=""
                  />
                </div>
                <div className="txt">
                  <div>
                    <Heading3>
                      ショップもWebも
                      <br className={Utils['Disp-sp']} />
                      契約事務手数料0円
                    </Heading3>
                    <p className={Utils['Mt-24']}>
                      契約期間の縛りと乗り換え時の手数料を、全通信キャリアの中でいち早く撤廃。契約解除料0円、MNP転出手数料0円、販売する製品はすべてSIMフリー。だから自由なタイミングで気軽に乗り換えができます。
                    </p>
                  </div>
                </div>
              </ThatRmContentService2Col>
            </ThatRm>
          </SystemContainerMod1>
        </LayoutSystem>
        <FullBlack>
          <LayoutSystem>
            <EcoSystem id="ecosystem">
              <EcoSystemHeading>
                <div className="bg js-animation-2"></div>
                <div className="txt">
                  <div>
                    <Tag>
                      <img
                        src={`${imgpath}tag-ecosystem.svg`}
                        alt="ECO-SYSTEM"
                      />
                    </Tag>
                    <Heading2
                      data-ratid="why-rakuten-mobile_scroll-04_point"
                      data-ratevent="appear"
                      data-ratparam="all"
                    >
                      満足度No.1<sub>※2</sub>の<br />
                      ポイント還元サービス
                    </Heading2>
                    <p>
                      楽天グループの様々なサービスや街のお店で「貯まる」「使える」楽天ポイント。楽天モバイルのご利用でも、楽天ポイントが貯まったり使えるのはもちろん、楽天市場でのお買い物もおトクになります。
                    </p>
                    <div className="ricon">
                      <img
                        src={`${imgpath}icon-rpoint.png`}
                        width="103"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </EcoSystemHeading>
            </EcoSystem>
          </LayoutSystem>
        </FullBlack>
        <LayoutSystem>
          <EcoSystemContents>
            <ContentsInner>
              <Heading3>
                お客様満足度No.1<sub>※2</sub>の楽天ポイント
              </Heading3>
              <p className={Utils['Mt-24']}>
                世の中の数あるポイントの中で、お客様が選ぶ「ポイント総合満足度」「昨年もっとも貯まったポイント」
                <br className={Utils['Disp-pc-tb']} />
                「もらってうれしいポイント」ランキングのすべてにおいてNo.1
                <sub>※2</sub>でした。
              </p>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※2 情報元：「
                <LinkIconAfter
                  href="https://event.rakuten.co.jp/group/point/pointzukan/"
                  target="_blank"
                  rel="noopener"
                >
                  楽天ポイント お楽しみ図鑑
                  <IconNewTabLine />
                </LinkIconAfter>
                」（ポイントに関する調査、有効回答＝1,000、インターネット調査、2022年11月、実施機関：マイボイスコム）
              </TxtCap>

              <EcoSystemImg01>
                <img
                  src={`${imgpath}ecosystem-img-01-pc.png`}
                  className={Utils['Disp-pc']}
                  alt=""
                />
                <img
                  src={`${imgpath}ecosystem-img-01-tb.png`}
                  className={Utils['Disp-tb-sp']}
                  alt=""
                />
              </EcoSystemImg01>

              <EcoSystemBgContents>
                <div className="bg">
                  <div className="txt">
                    <div>
                      <Heading3>
                        楽天モバイルの
                        <br />
                        ご利用で
                        <br />
                        貯まる､使える
                      </Heading3>
                      <p>
                        各種キャンペーンで楽天ポイント還元をはじめ、スマホ本体代に楽天ポイントが使えたり
                        <sub>※7</sub>
                        、月々のお支払いにも1ポイント＝1円としてご利用いただけます
                        <sub>※8</sub>。
                      </p>
                      <div className={Utils['Mt-24']}>
                        <ButtonSecondaryCustom
                          as="a"
                          href="/guide/point/?l-id=feature_why-rakuten-mobile_guide_point"
                        >
                          楽天ポイントをもっと詳しく
                        </ButtonSecondaryCustom>
                      </div>
                    </div>
                  </div>
                  <div className="img">
                    <img
                      src={`${imgpath}ecosystem-img-03-pc.png`}
                      className={Utils['Disp-pc']}
                      alt=""
                    />
                    <img
                      src={`${imgpath}ecosystem-img-03-tb.png`}
                      className={Utils['Disp-tb']}
                      alt=""
                    />
                    <img
                      src={`${imgpath}ecosystem-img-03-sp.png`}
                      className={Utils['Disp-sp']}
                      alt=""
                    />
                  </div>
                </div>
                <TxtCap as="p">
                  ※7 スマホ本体代へのポイント利用は一括払いのみ ※8
                  月々のお支払いに口座振替をご指定の場合は、楽天ポイントをご利用いただけません。利用上限あり
                  <br />※
                  <LinkNormal
                    href="#notice"
                    onClick={e => anchorCallback(e, 'notice')}
                  >
                    その他条件の詳細はこちら
                  </LinkNormal>
                </TxtCap>
              </EcoSystemBgContents>

              <EcoSystemSpu>
                <Heading3>楽天市場のお買い物がおトクに</Heading3>
                <p className="lead">
                  SPU（スーパーポイントアップ）とは、楽天グループの対象サービスの条件を達成すると楽天市場でのお買い物がポイントアップするプログラムです。
                  Rakuten最強プランご契約者なら、楽天市場でのお買い物でもらえるポイントが、SPUにプラスしてさらにポイントアップします。
                </p>
                <EcoSystemSpuGroup>
                  <div>
                    <EcoSystemSpuImg2Node1>
                      <EcoSystemSpuImg4>
                        <img
                          src={`${imgpath}spu-img-top-pc-231020.png`}
                          className={Utils['Disp-pc']}
                          alt=""
                          width="356"
                        />
                        <img
                          src={`${imgpath}spu-img-top-sp-231020.png`}
                          className={Utils['Disp-tb-sp']}
                          alt=""
                        />
                      </EcoSystemSpuImg4>
                      <div className={Utils['Mt-8']}>
                        <img
                          src={`${imgpath}spu-img-08-pc-231201.png`}
                          className={Utils['Disp-pc']}
                          alt=""
                        />
                        <img
                          src={`${imgpath}spu-img-08-sp-231201.png`}
                          className={Utils['Disp-tb-sp']}
                          alt=""
                        />
                      </div>
                      <img
                        src={`${imgpath}plus-icon.png`}
                        className="icon1"
                        alt=""
                      />
                    </EcoSystemSpuImg2Node1>
                    <EcoSystemSpuImg2Base>
                      <EcoSystemSpuImg3>
                        <img
                          src={`${imgpath}spu-img-09-pc-240401.png`}
                          className={Utils['Show-xxo']}
                          alt=""
                        />
                        <img
                          src={`${imgpath}spu-img-09-sp-231115.png`}
                          className={Utils['Show-oox']}
                          alt=""
                        />
                      </EcoSystemSpuImg3>
                      <EcoSystemAccordionWrapper>
                        <AccordionList
                          text="対象サービスとポイント倍率"
                          isOpened={false}
                          id="accordion-content-2"
                          wrapperStyle={{ backgroundColor: 'transparent' }}
                        >
                          <EcoSystemCardContainer>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-01-sp-231115.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-01-pc-231115.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink href="https://network.mobile.rakuten.co.jp/hikari/campaign/spu/"></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-02-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-02-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://www.rakuten-card.co.jp/campaign/rakuten-card/point-up/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-03-pc.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-03-sp.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://www.rakuten-card.co.jp/campaign/premium_card/point-up/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-05-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-05-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://www.rakuten-bank.co.jp/campaign/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-06-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-06-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://www.rakuten-sec.co.jp/web/campaign/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-07-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-07-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://www.rakuten-sec.co.jp/web/campaign/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-08-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-08-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://www.rakuten-wallet.co.jp/lp/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-09-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-09-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://travel.rakuten.co.jp/camp/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-11-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-11-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://books.rakuten.co.jp/event/campaign/pointup-program/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-12-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-12-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://books.rakuten.co.jp/event/e-book/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-13-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-13-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://pasha.rakuten.co.jp/special/campaign/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-14-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-14-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://brandavenue.rakuten.co.jp/guide/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-15-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-15-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://beauty.rakuten.co.jp/cnt/topics/campaign/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                            <EcoSystemCardWrapper>
                              <img
                                src={`${imgpath}point-img-17-sp.png`}
                                className={Utils['Show-oox']}
                                alt=""
                              />
                              <img
                                src={`${imgpath}point-img-17-pc.png`}
                                className={Utils['Show-xxo']}
                                alt=""
                              />
                              <EcoSystemCardLink
                                href="https://energy.rakuten.co.jp/campaign/lp/spu/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></EcoSystemCardLink>
                            </EcoSystemCardWrapper>
                          </EcoSystemCardContainer>
                        </AccordionList>
                      </EcoSystemAccordionWrapper>
                      <EcoSystemSpuGroup3>
                        <ButtonRegularLarge
                          as="a"
                          href="https://network.mobile.rakuten.co.jp/campaign/spu/?l-id=feature_why-rakuten-mobile_campaign_spu"
                        >
                          SPUの詳細を見る
                        </ButtonRegularLarge>
                      </EcoSystemSpuGroup3>
                    </EcoSystemSpuImg2Base>
                    <EcoSystemSpuGroup4>
                      <div className={Utils['Align-center']}>
                        <img
                          src={`${imgpath}point-img-16-sp-240401.png`}
                          className={Utils['Show-oox']}
                          alt=""
                        />
                        <img
                          src={`${imgpath}point-img-16-pc-240401.png`}
                          className={Utils['Show-xxo']}
                          width="495"
                          alt=""
                        />
                      </div>
                      <TxtCap as="p" className={Utils['Align-left']}>
                        ※10 SPU全達成の場合。獲得ポイント上限あり
                        <br />
                        ※その他条件の
                        <LinkNormal
                          href="#notice"
                          onClick={e => anchorCallback(e, 'notice')}
                        >
                          詳細はこちら
                        </LinkNormal>
                      </TxtCap>
                    </EcoSystemSpuGroup4>
                    <div className={Utils['Mb-16']}>
                      <PoikakuLpBnr />
                    </div>
                  </div>
                </EcoSystemSpuGroup>
              </EcoSystemSpu>
              <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
                <ButtonSecondaryCustom
                  as="a"
                  href="/campaign/spu/?l-id=feature_why-rakuten-mobile_campaign_spu"
                >
                  SPUの詳細を見る
                </ButtonSecondaryCustom>
              </div>
            </ContentsInner>
          </EcoSystemContents>
        </LayoutSystem>
        <LayoutSystem>
          <EcoSystemContents>
            <ContentsInner>
              <div>
                <Heading3 className={Utils['Align-center']}>
                  楽天グループや街のお店でも
                  <br />
                  貯まる、使える
                </Heading3>
              </div>
            </ContentsInner>
          </EcoSystemContents>
        </LayoutSystem>
        <EcoSystemRGroupList className="js-Why-Carousel-auto">
          {rgroup.map((elem, i) => {
            return (
              <EcoSystemRGroupListItem key={elem.url}>
                <a href={elem.url} target="_blank" rel="noopener noreferrer">
                  <div className="img">
                    <img src={`${imgpath}${elem.img}`} alt="" />
                  </div>
                  <div className="txt">
                    <h4>{elem.h4}</h4>
                  </div>
                  <p className="link">
                    <span className="link">{elem.link}</span> <IconNewTabLine />
                  </p>
                </a>
              </EcoSystemRGroupListItem>
            )
          })}
        </EcoSystemRGroupList>
        <WhyCarouselNav>
          <div className="c-Carousel_Nav-v2-wrap">
            <div className="c-Carousel_Nav-v2"></div>
            <div className="c-Carousel_Nav-v2-bar"></div>
          </div>
        </WhyCarouselNav>
        <FullGray>
          <LayoutSystem>
            <ContentsInner>
              <VoiceHead>
                <VoiceTag>
                  <img
                    src={`${imgpath}tag-voice.svg`}
                    alt="VOICE of CUSTOMER"
                  />
                </VoiceTag>
                <Heading3
                  as="h2"
                  data-ratid="why-rakuten-mobile_scroll-05_uservoice"
                  data-ratevent="appear"
                  data-ratparam="all"
                >
                  お客様の声
                </Heading3>
              </VoiceHead>
            </ContentsInner>
          </LayoutSystem>
          <VoiceList className="js-Why-Carousel">
            {voice.map((elem, i) => {
              return (
                <VoiceListItem key={elem.url}>
                  <a href={elem.url}>
                    <div className="img">
                      <img src={`${imgpath}${elem.img}`} alt="" />
                    </div>
                    <div className="txt">
                      <h3>{elem.h3}</h3>
                      <p className="link">
                        <span>続きを読む</span> <IconChevronRight />
                      </p>
                    </div>
                  </a>
                </VoiceListItem>
              )
            })}
          </VoiceList>
          <WhyCarouselNav>
            <div className="c-Carousel_Nav-v2-wrap">
              <div className="c-Carousel_Nav-v2"></div>
              <div className="c-Carousel_Nav-v2-bar"></div>
            </div>
          </WhyCarouselNav>
          <LayoutSystem className={Utils['Pb-48']}>
            <ContentsInner>
              <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
                <ButtonSecondaryCustom
                  as="a"
                  href="/uservoice/?l-id=feature_why-rakuten-mobile_uservoice"
                >
                  詳細を見る
                </ButtonSecondaryCustom>
              </div>
            </ContentsInner>
          </LayoutSystem>
        </FullGray>
        <FullBlack>
          <LayoutSystem>
            <TechnologyWrap id="technology">
              <TechnologyHeading>
                <div className="bg js-animation-1"></div>
                <div className="txt">
                  <div>
                    <Tag>
                      <img
                        src={`${imgpath}tag-technology.svg`}
                        alt="TECHNOLOGY"
                      />
                    </Tag>
                    <Heading2
                      data-ratid="why-rakuten-mobile_scroll-03_technology"
                      data-ratevent="appear"
                      data-ratparam="all"
                    >
                      世界初<sub>※3</sub>
                      のテクノロジーで創る高品質な通信サービス
                    </Heading2>
                    <p>
                      楽天モバイルは、世界初の「完全仮想化クラウドネイティブモバイルネットワーク」を構築し、低コストで高品質な通信サービスを実現しました。
                    </p>
                    <TxtCap as="p">
                      ※3
                      世界初の完全仮想化クラウドネイティブモバイルネットワーク：大規模商用ネットワークとして（2019年10月1日時点／ステラアソシエ調べ）
                    </TxtCap>
                  </div>
                </div>
              </TechnologyHeading>
            </TechnologyWrap>
          </LayoutSystem>
        </FullBlack>
        <LayoutSystem>
          <TechnologyContents>
            <ContentsInner>
              <Heading3>
                なぜ高品質な通信サービスを
                <br className={Utils['Disp-pc-tb']} />
                低コストで提供できるのか
              </Heading3>
              <MovieContainerMod1>
                <MarginAuto>
                  <MovieContainerInner>
                    <BrightcoveIframe url={urls[2]} />
                  </MovieContainerInner>
                </MarginAuto>
              </MovieContainerMod1>
              <MovieUnderContent>
                <div className={Utils['Align-center']}>
                  <MovieTitle className={Utils['Mt-16']}>
                    <span> 「日本を、世界を、つなげる。」</span>
                  </MovieTitle>
                </div>
                <TechnologyTxt01>
                  これまで携帯ネットワークは、特定の専用ハードウェアが必要でしたが、楽天モバイルは独自の仮想化技術によってソフトウェアとハードウェアを分離。
                  <br />
                  ネットワークを低コストな汎用ハードウェアで構成できるようになり、大幅なコスト削減が実現しました。また...
                </TechnologyTxt01>

                <TechAccordionWrapperCustom id="accordion-content-1">
                  <TechAccordionTriggerCustom
                    aria-expanded={techAccordionOpenState ? 'true' : 'false'}
                    aria-controls="accordion-content-1"
                    onClick={() => updateTechAccordionOpenState(v => !v)}
                    type="button"
                  >
                    <TechAccordionIconCustom
                      className={techAccordionOpenState ? 'isOpen' : 'isClose'}
                    />
                    続きを見る
                  </TechAccordionTriggerCustom>
                  <TechCollapseWrapperCustom>
                    <Collapse
                      isOpened={techAccordionOpenState}
                      theme={themeCollapse}
                    >
                      <p>
                        汎用ハードウェアによるネットワークは、一部のハードウェアが故障しても自動で代替機へ切り替える自動復旧機能を搭載しているため、サービスの質を落とさず運用コストを抑えることができます。
                        <br />
                        加えて、4Gから5Gへの切り替えも、機器を入れ替えることなくソフトウェアの更新で対応できるため、本格的な5Gの運用を早期に進めることができます。
                      </p>
                      <p className={Utils['Mt-8']}>
                        この全く新しいコンセプトのモバイルネットワークにより、お客様に低価格で高品質な通信サービスを提供できるようになりました。
                      </p>
                      <TechMoreContents>
                        <Heading4>従来のモバイルネットワーク</Heading4>
                        <div className="img1">
                          <p>規格変更のたびに新規設備を導入</p>
                          <img
                            src={`${imgpath}technology-img-04-pc.png`}
                            className={Utils['Disp-pc-tb']}
                            alt=""
                          />
                          <img
                            src={`${imgpath}technology-img-04-sp.png`}
                            className={Utils['Disp-sp']}
                            alt=""
                          />
                        </div>
                        <Heading4>
                          <TxtEmp02>
                            完全仮想化クラウドネイティブ
                            <br />
                            モバイルネットワーク
                          </TxtEmp02>
                        </Heading4>
                        <div className="img2">
                          <p>
                            設備のクラウド化により、
                            <br className={Utils['Disp-sp']} />
                            大幅なコスト削減を実現
                          </p>
                          <img
                            src={`${imgpath}technology-img-05-pc.png`}
                            className={Utils['Disp-pc-tb']}
                            alt=""
                          />
                          <img
                            src={`${imgpath}technology-img-05-sp.png`}
                            className={Utils['Disp-sp']}
                            alt=""
                          />
                        </div>
                        <TechAccordionClose>
                          <button
                            onClick={() => {
                              updateTechAccordionOpenState(v => !v)
                              scrollToElement('accordion-content-1')
                            }}
                          >
                            <IconX />
                            閉じる
                          </button>
                        </TechAccordionClose>
                      </TechMoreContents>
                    </Collapse>
                  </TechCollapseWrapperCustom>
                </TechAccordionWrapperCustom>
              </MovieUnderContent>

              {/*
              	<Heading3>短期間で楽天回線エリアを全国に拡大</Heading3>
              	<TechnologyImg>
              	  <img
              	    src={`${imgpath}technology-img-02-pc.png?220531`}
              	    className={Utils['Disp-pc']}
              	    alt=""
              	  />
              	  <img
              	    src={`${imgpath}technology-img-02-tb.png?220531`}
              	    className={Utils['Disp-tb-sp']}
              	    alt=""
              	  />
              	</TechnologyImg>
              	<TechnologyTxt02>
              	  従来の屋外基地局アンテナ設置には、多数の設備が必要でした。楽天モバイルは基地局の機能の一部をクラウド上に移行することで、シンプルな基地局構成を実現。
              	  <br />
              	  従来とは一線を画すスピードで基地局建設を進め、4G人口カバー率は、2022年10月時点で98%に到達しました
              	  <sub>※7</sub>。
              	</TechnologyTxt02>

              	<TechnologyBtn>
              	  <ButtonSecondaryCustom
              	    as="a"
              	    href="/area/?l-id=feature_why-rakuten-mobile_area"
              	  >
              	    サービスエリアをもっと詳しく
              	  </ButtonSecondaryCustom>
              	</TechnologyBtn>
              */}

              <Technology2Col>
                <div className="img">
                  <img
                    src={`${imgpath}technology-img-03-pc.png`}
                    className={Utils['Disp-pc']}
                    alt=""
                  />
                  <img
                    src={`${imgpath}technology-img-03-tb.png`}
                    className={Utils['Disp-tb-sp']}
                    alt=""
                  />
                </div>
                <div className="txt">
                  <div>
                    <Heading3>
                      通信衛星でさらに
                      <br />
                      つながるサービスを
                    </Heading3>
                    <p className={Utils['Mt-32']}>
                      衛星通信ネットワークなら、基地局の建設が難しい山岳地帯や陸地から遠く離れた島を含めた幅広いエリアで、そして、もしもの災害発生時でも「つながるサービス」が提供できます。楽天モバイルは通信衛星ネットワーク「スペースモバイル」の実現に向け、さらなる挑戦を続けています。
                    </p>
                  </div>
                </div>
              </Technology2Col>
              <LayoutInfo className={Utils['Mt-32']} as="p">
                ※11
                集計のタイミング等によりエリアマップは実際のカバー率と一致しない場合あり。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出。現在のサービスエリアは
                <LinkNormal href="/area/?l-id=feature_why-rakuten-mobile_area">
                  サービスエリアマップ
                </LinkNormal>
                でご確認ください。
              </LayoutInfo>
            </ContentsInner>
          </TechnologyContents>
        </LayoutSystem>

        <LayoutSystem>
          <NoticeWrap>
            <ContentsInner>
              <Heading level="2" id="notice">
                注意事項
              </Heading>
              <Heading as="h3" level="4" className={Utils['Mt-24']}>
                ■GLOMO Awards受賞<TxtCap>※</TxtCap>について
              </Heading>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※1 世界最大級のモバイル関連見本市「MWC 」における評価
                <br />
                2021/2022年：楽天モバイルの5G通信の技術が評価され、2021年にOutstanding
                Mobile Technology AwardとBest Mobile Technology
                Breakthrough、2022年にBest Network Software Breakthroughを受賞。
                <br />
                2023年：楽天シンフォニーの完全仮想化ネットワークが評価され、Best
                Network Software BreakthroughとBest Cloud Solutionを受賞。
              </TxtCap>
              <Heading as="h3" level="4" className={Utils['Mt-40']}>
                ■世界初<TxtCap>※3</TxtCap>
                のテクノロジーで創る高品質な通信サービスについて
              </Heading>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※3
                世界初の完全仮想化クラウドネイティブモバイルネットワーク：大規模商用ネットワークとして（2019年10月1日時点／ステラアソシエ調べ）
              </TxtCap>
              <Heading as="h3" level="4" className={Utils['Mt-40']}>
                ■満足度No.1<TxtCap>※2</TxtCap>のポイント還元サービスについて
              </Heading>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※2 情報元：「
                <LinkIconAfter
                  href="https://event.rakuten.co.jp/group/point/pointzukan/"
                  target="_blank"
                  rel="noopener"
                >
                  楽天ポイント お楽しみ図鑑
                  <IconNewTabLine />
                </LinkIconAfter>
                」（ポイントに関する調査、有効回答＝1,000、インターネット調査、2022年11月、実施機関：マイボイスコム）
              </TxtCap>
              <Heading as="h3" level="4" className={Utils['Mt-40']}>
                ■楽天モバイルのご利用で「貯まる」「使える」について
              </Heading>
              <TxtCap as="p" className={Utils['Mt-16']}>
                ※7
                製品（スマートフォンおよびアクセサリー）代金をクレジットカードまたはデビットカードにて一括でお支払いいただく場合、ポイントがご利用いただけます。
                <br />
                製品を分割でお支払いいただく場合、初回のみポイントがご利用いただけます。分割払いの2回目以降はポイントをご利用になれません。
                <br />
                ※8
                月々のお支払いに口座振替をご指定の場合は、楽天ポイントをご利用いただけません。利用上限があります。
                <br />
                ※7,8 一度にご利用できるポイント数は1～30,000
                (ダイヤモンド会員の方は～500,000) ポイントです。
                <LinkNormal href="/guide/payment/point/">
                  詳細はこちら
                </LinkNormal>
              </TxtCap>
              <Heading as="h3" level="4" className={Utils['Mt-40']}>
                ■「楽天市場のお買い物ポイントが最大17倍」特典について
              </Heading>
              <TxtCap as="p" className={`${Utils['Mt-16']} ${Utils['Pb-32']}`}>
                ※9
                「楽天市場のお買い物ポイント毎日全員5倍」は楽天会員1倍と楽天モバイルSPU+4倍の合計。楽天モバイルSPUの毎月の獲得上限ポイント数は2,000ポイント。期間限定ポイントでの付与。
                <br />
                ※10
                SPUによる楽天モバイル対象プランご契約者特典+4倍とその他グループサービスご利用で最大13倍の合計値です。達成条件、獲得ポイント上限あり。期間限定ポイントでの付与。
                <LinkNormal href="/campaign/spu/">SPUの詳細</LinkNormal>
                をご確認ください。
              </TxtCap>
            </ContentsInner>
          </NoticeWrap>
        </LayoutSystem>
        <GuidePopAsk config={configTxt} className={Utils['Mt-0']} />
        <GlobalFooter breadcrumbsItem={breadcrumbs} relatedItems={[]} />
      </SystemWrapperCustom>
    </>
  )
}
export default FeatureWhyrakutenmobile
