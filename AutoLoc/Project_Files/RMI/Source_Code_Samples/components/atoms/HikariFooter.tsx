import styled from 'styled-components'
import { IconArrowRight, IconNewTabLine } from '@components/icons'

export const Footer = styled.footer``
export const GlobalFooterNav = styled.div<{ isSimple?: boolean }>`
  padding: ${props => (props.isSimple ? '24px 0' : '24px 16px')};
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
`
export const GlobalFooterNavMain = styled.ul`
  max-width: 1032px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  @media screen and (max-width: ${props => props.theme.max.m}) {
    display: block;
  }
  li {
    margin-top: 6px;
    @media screen and (max-width: ${props => props.theme.max.m}) {
      margin-top: 2px;
      line-height: 24px;
    }
    font-size: ${props => props.theme.fonts.ss};
    a {
      color: inherit;
      border-bottom: 1px solid ${props => props.theme.colors.black};
      &:hover {
        border-bottom-width: 2px;
      }
      &:active {
        border-bottom-width: 0;
      }
      + span {
        margin-left: 4px;
        font-size: 16px;
        vertical-align: bottom;
      }
    }
  }
`
export const GlobalFooterRGroup = styled.div`
  padding: 32px 0 24px;
  line-height: 1;
  background-color: ${props => props.theme.colors.white};
  @media screen and (max-width: ${props => props.theme.max.s}) {
    padding-top: 24px;
  }
`
export const GlobalFooterRGroupLink = styled.ul`
  font-size: 0;
  max-width: 1064px;
  padding: 0 16px;
  margin: auto;
  text-align: left;
  @media screen and (max-width: ${props => props.theme.max.m}) {
    display: flex;
    flex-direction: column;
  }
  li {
    display: inline-block;
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fonts.ss};
    margin: 0 0 0 24px;
    a {
      color: ${props => props.theme.colors.textSecondary};
      border-bottom: 1px solid ${props => props.theme.colors.black};
      &:hover {
        border-bottom: none;
      }
      &:active {
        border-bottom-width: 0;
      }
      + span {
        margin-left: 4px;
        font-size: 16px;
        vertical-align: text-bottom;
      }
    }
    &:first-child {
      margin-left: 0;
      font-weight: bold;
      color: ${props => props.theme.colors.black};
    }
    @media screen and (max-width: ${props => props.theme.max.m}) {
      margin-left: 0;
      &:first-child {
        display: block;
      }
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        margin-left: 0;
        display: block;
        margin-top: 12px;
      }
    }
  }
`
export const GlobalFooterRGroupBanner = styled.div`
  width: 130px;
  margin: -30px 0 0 auto;
  @media screen and (max-width: ${props => props.theme.max.l}) {
    padding-bottom: 26px;
    margin: -50px 0 0 auto;
  }
`
export const GlobalFooterCopyright = styled.small`
  max-width: 1032px;
  margin: 24px auto 0 auto;
  display: block;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.ss};
`
export const GlobalFooterCopyrightSimple = styled(GlobalFooterCopyright)`
  margin: 0 auto;
  text-align: center;
`
export const IconNewTabLineCustom = styled(IconNewTabLine)`
  margin-left: 4px;
  font-size: 16px;
  vertical-align: text-bottom;
  margin-right: 16px;
`
export const FooterMenu = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding-top: 56px;
  padding-bottom: 32px;
  h3 {
    font-size: 24px;
    line-height: 1.4;
  }
`
export const FooterCard = styled.div`
  display: flex;
  max-width: 1064px;
  width: 100%;
  margin: 24px auto 0;
  padding: 0 16px;
  @media screen and (max-width: ${props => props.theme.max.m}) {
    align-content: inherit;
    flex-wrap: wrap;
  }
  & img {
    height: 56px;
  }
`
export const FooterCardSub = styled.div`
  max-width: 777px;
  display: flex;
  width: calc(100% - 32px);
  margin: 8px auto 0;
  @media screen and (max-width: ${props => props.theme.max.m}) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: ${props => props.theme.max.l}) {
    max-width: 774px;
    width: calc(75% - 32px);
  }
`
export const FooterCardItem = styled.div`
  background-color: white;
  border: solid 1px ${props => props.theme.colors.monotone88};
  padding: 20px 20px 20px 32px;
  display: flex;
  align-items: center;
  width: 25%;
  a {
    text-decoration: none;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    width: 50%;
    padding: 20px 16px 20px 16px;

    @media screen and (max-width: ${props => props.theme.max.m}) {
      padding: 16px 8px 16px 18px;
    }
    &:nth-child(3) {
      border-left: solid 1px ${props => props.theme.colors.monotone88}!important;
      border-top: none;
    }
    &:nth-child(4) {
      border-top: none;
    }
  }
  &:hover {
    background-color: ${props => props.theme.colors.monotone97};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone93};
  }
  &:not(:first-child) {
    border-left: none;
  }
`
export const FooterCardSubItem = styled.div`
  background-color: white;
  border: solid 1px ${props => props.theme.colors.monotone88};
  padding: 20px 20px 20px 32px;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 8px;
  &:nth-child(3) {
    border: solid 1px $color_monotone88;
  }
  &:nth-child(4) {
    border: solid 1px $color_monotone88;
  }
  a {
    text-decoration: none;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    width: 50%;
    padding: 16px 8px 16px 18px;
    &:nth-child(3) {
      border-left: solid 1px ${props => props.theme.colors.monotone88}!important;
      border: solid 1px $color_monotone88;
    }
  }
  &:hover {
    background-color: ${props => props.theme.colors.monotone97};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone93};
  }
  &:not(:first-child) {
    border-left: none;
  }
`
export const FooterCardSubTxt = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 0;
  text-align: center;
  color: ${props => props.theme.colors.monotone20};
  @media screen and (max-width: ${props => props.theme.max.m}) {
    font-size: 16px;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.colors.monotone20};
  }
`
export const FooterCardTxt = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 9px;
  text-align: center;
  color: ${props => props.theme.colors.monotone20};
  @media screen and (max-width: ${props => props.theme.max.m}) {
    font-size: 16px;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.colors.monotone20};
  }
`
export const FooterCardContent = styled.div`
  width: 100%;
  text-align: center;
  & img {
    height: 56px;
  }
`
export const FooterCardArrow = styled(IconArrowRight)`
  margin-left: 5px;
  color: ${props => props.theme.colors.primary};
`
export const FooterCardArrowInner = styled(IconArrowRight)`
  &::before {
    position: absolute;
    top: -24px;
    right: 0;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`
export const FooterLink = styled.div`
  max-width: 1064px;
  padding: 0 16px;
  margin: 24px auto 0;
  text-align: center;
  a {
    font-size: 13px;
    margin-right: 24px;
    color: ${props => props.theme.colors.monotone20};
    text-decoration: underline !important;
    &:last-child {
      margin-right: 0;
    }
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colors.monotone20};
    }
  }
`
export const FooterPageToTop = styled.div`
  margin-top: -30px;
  text-align: right;
  & a {
    max-width: 26px;
    width: 100%;
    margin-left: auto;
    margin-right: 0;
    display: block;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.colors.monotone20};
  }
  & p {
    font-size: 10px;
    margin-top: 4px;
  }
`
export const GlobalFooterRGroupBannerImg = styled.div`
  & img {
    width: 130px;
    @media (max-width: ${props => props.theme.max.l}) {
      width: 112px;
    }
  }
`
