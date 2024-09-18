import styled, { css } from 'styled-components'
import { assets } from '@components/utils/assets'
import {
  IconChevronRight,
  IconMyPageLine,
  IconSearch,
  IconWorldLine,
} from '@components/icons'
import {
  ButtonPrimary,
  ButtonRegular,
  ButtonSecondary,
} from '@components/atoms/Buttons'
import { mixins } from '@components/utils/Mixins'

const closeEaseOut = css`
  right: -100%;
  opacity: 0;
  transition: all 0.2s ease-out;
`
const expandEaseOut = css`
  right: 0;
  opacity: 1;
  transition: all 0.2s ease-out;
`
const headerDrawerClose = css`
  & {
    ${closeEaseOut}
  }
  > div:first-of-type {
    display: none;
  }
`
const headerDrawerOpen = css`
  & {
    ${expandEaseOut}
  }
  > div:first-of-type {
    display: block;
  }
`
export const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`
export const HeaderCustomerHeading = styled.nav`
  ${mixins.mq.MaxCustom('834px')} {
    display: none;
  }
  padding-top: 5px;
  background-color: ${props => props.theme.colors.monotone20};
  color: ${props => props.theme.colors.white};
  height: 34px;
  ul {
    display: flex;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: bottom;
      height: 29px;
      font-size: 15px;
      > a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
      }
      &:first-child {
        width: auto;
        margin-right: 4px;
        padding-inline: 8px 12px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 6px 6px 0 0;
        > span {
          margin-right: 4px;
          font-size: 20px;
          vertical-align: 2px;
        }
      }
      &:nth-child(2) {
        > a {
          display: block;
          height: 29px;
          padding: 0 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 6px 6px 0 0;
          }
        }
        span {
          &:first-child {
            font-size: 20px;
            margin-right: 4px;
            vertical-align: 2px;
          }
        }
      }
      &:last-child {
        margin-left: auto;
        > a {
          > span {
            font-size: 14px;
          }
          &:hover {
            > span {
              color: rgba(255, 255, 255, 0.8);
            }
          }
          &:active {
            > span {
              &:last-child {
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }
        }
        &::before,
        &::after {
          content: '';
          display: inline-block;
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          width: 1px;
          height: 1.2rem;
        }
        &::before {
          margin-right: 16px;
        }
        &::after {
          margin-left: 16px;
        }
      }
    }
  }
`
export const HeaderPcHeight = '66px'
export const HeaderSpHeight = '56px'
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1064px;
  height: ${HeaderSpHeight};
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  ${mixins.mq.MinCustom('835px')} {
    height: ${HeaderPcHeight};
  }
`
export const HeaderMainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1064px;
  height: 66px;
  margin: 0 auto;
  padding: 0 16px;
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    height: 110px;
  }
  ${mixins.mq.MaxCustom('834px')} {
    padding-inline: 8px 0;
    position: relative;
    height: 56px;
  }
`
const HeaderLogo = css`
  width: 152px;
  height: 45px;
  padding-top: 2px;
  flex-shrink: 0;
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    transform: translateY(-22px);
  }
  ${mixins.mq.MaxCustom('834px')} {
    padding-top: 0;
    width: 63px;
  }
  a,
  span {
    display: block;
    background: url(${assets}img/common/logo-rmobile-1line-230829.svg) left top
      no-repeat;
    background-size: 100%;
    height: 45px;
    word-break: keep-all;
    word-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
    text-indent: 100%;
    ${mixins.mq.MaxCustom('834px')} {
      background: url(${assets}img/common/logo-rmobile-2line-230829.svg) left
        top no-repeat;
    }
  }
  a {
    &:hover {
      opacity: 0.85;
    }
  }
`
export const HeaderLogoWrapper = styled.div`
  display: flex;
`
export const HeaderLogoHeading = styled.h1`
  ${HeaderLogo}
`
export const HeaderLogoDiv = styled.div`
  ${HeaderLogo}
`
export const HeaderLogoFiveMillionSub = styled.div`
  width: 80px;
  height: 45px;
  flex-shrink: 0;
  margin-left: 8px;
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    transform: translateY(-22px);
  }
  ${mixins.mq.MaxCustom('834px')} {
    padding-top: 0;
    margin-left: 0;
  }
  a,
  span {
    display: block;
    background: url(${assets}img/common/logo-six-half-million-pc-240408.svg) left top
      no-repeat;
    background-size: 100%;
    height: 45px;
    word-break: keep-all;
    word-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
    text-indent: 100%;
    ${mixins.mq.MaxCustom('834px')} {
      height: 42px;
      background: url(${assets}img/common/logo-six-half-million-sp-240408.svg) left
        top no-repeat;
    }
  }
  a {
    &:hover {
      opacity: 0.85;
    }
  }
`
export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 20px;
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    margin-left: -152px;
  }
  > ul {
    display: flex;
    ${mixins.mq.MinMaxCustom('835px', '1048px')} {
      margin: 66px auto 0;
    }
    ${mixins.mq.MaxCustom('834px')} {
      display: none;
    }
  }
`
const HeaderMenuStyle = css`
  display: flex;
  align-items: center;
  margin-top: 22px;
  padding-bottom: 20px;
  padding-right: 20px;
  letter-spacing: -1px;
  font-size: 15px;
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    margin-top: 6px;
    padding-bottom: 14px;
  }
`
export const HeaderDropdown = styled.button`
  ${HeaderMenuStyle}
  &[aria-current='true'] {
    font-weight: bold;
    > span {
      &::before {
        transform: rotateZ(-90deg);
      }
    }
  }
`
export const HeaderLink = styled.button`
  ${HeaderMenuStyle}
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    font-weight: bold;
  }
`
export const HeaderDropdownIcon = styled(IconChevronRight)`
  padding-left: 4px;
  display: table-cell;
  font-size: 14px;
  font-weight: bold;
  &::before {
    transition-duration: 0.5s;
    transition: transform 0.1s;
    transform: rotateZ(90deg);
    display: inline-block;
    color: ${props => props.theme.colors.white};
  }
`
const openSubContainer = css`
  max-height: 100vh;
  transition: max-height 0.7s ease-out 0.2s;
`
const closeSubContainer = css`
  max-height: 0;
  transition: max-height 0.3s ease-out;
`
export const HeaderSubContainer = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  z-index: 10;
  ${props => (props.isOpen ? openSubContainer : closeSubContainer)};
  overflow: hidden;
  > div {
    border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  }
  ${mixins.mq.MaxCustom('834px')} {
    display: none;
  }
`
export const HeaderNavSub = styled.nav`
  width: 100%;
  max-width: 1064px;
  margin: 0 auto;
  padding: 2px 0 24px;
  display: flex;
  justify-content: center;
  gap: 24px;
  color: ${props => props.theme.colors.black};
`
export const HeaderNavSubGrid = styled.nav`
  width: 100%;
  max-width: 1064px;
  margin: 0 auto;
  padding: 2px 16px 24px;
  display: grid;
  grid-template-columns: 600px 178px 1fr;
  grid-gap: 24px;
  color: ${props => props.theme.colors.black};
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    grid-template-columns: calc((504 / 737) * 100%) 1fr;
  }
`
export const HeaderNavSubWrap = styled.div`
  &:first-child {
    width: 700px;
  }
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    &:nth-child(2) {
      width: 214px;
      display: block;
    }
  }
`
export const HeaderNavSubGridWrap = styled.div`
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    &:nth-child(1) {
      grid-row: 1 / 3;
    }
  }
`
export const HeaderNavCategory = styled.div<{ width?: string }>`
  margin-top: 16px;
  width: ${props => props.width};
`
export const HeaderNavCategoryName = styled.div`
  padding-bottom: 6px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`
export const HeaderNavLists = styled.div`
  display: flex;
  gap: 1px;
  justify-content: space-between;
`
export const HeaderNavList = styled.ul<{ width?: string }>`
  margin-top: 18px;
  width: ${props => props.width};
  > li {
    margin-top: 14px;
    &:first-child {
      margin-top: 0;
    }
    > a {
      display: block;
      padding: 4px;
      font-weight: bold;
      text-decoration: none;
      color: ${props => props.theme.colors.black};
      &:hover {
        background-color: ${props => props.theme.colors.pink5};
        color: ${props => props.theme.colors.primary};
      }
      > span {
        font-size: 20px;
        color: ${props => props.theme.colors.primary};
        margin-right: 4px;
        vertical-align: -1px;
      }
      > img {
        margin-right: 4px;
        vertical-align: -3px;
      }
      > p {
        color: #676767;
        font-size: 12px;
        font-weight: normal;
        padding: 0 0 0 26px;
      }
    }
  }
`
export const HeaderNavListsExtra = styled(HeaderNavList)`
  display: flex;
  gap: 80px;
  > li {
    margin-top: 0;
  }
`
export const HeaderNavListSub = styled.ul`
  margin-left: 24px;
  > li {
    > a {
      display: block;
      padding: 4px;
      font-size: 14px;
      text-decoration: none;
      color: ${props => props.theme.colors.black};
      &:hover {
        background-color: ${props => props.theme.colors.pink5};
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
      }
      > p {
        color: #676767;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
  > p {
    font-size: 14px;
  }
`
export const HeaderIconWorldHikari = styled(IconWorldLine)`
  color: #f59600 !important;
`
export const HeaderEcare = styled.div`
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    position: absolute;
    top: 58px;
    right: 114px;
  }
  ${mixins.mq.MaxCustom('834px')} {
    display: none;
  }
  > a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:focus,
    &:hover {
      color: ${props => props.theme.colors.white};
    }
    &:hover {
      > span + span {
        text-decoration: underline;
      }
    }
  }
`
export const HeaderEcareIcon = styled(IconMyPageLine)`
  &::before {
    font-size: 24px;
  }
`
export const HeaderEcareText = styled.span`
  font-size: 10px;
  line-height: 1.3;
`
export const HeaderApply = styled.div`
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    position: absolute;
    top: 58px;
    right: 16px;
  }
  ${mixins.mq.MaxCustom('834px')} {
    position: absolute;
    top: 10px;
    right: 98px;
  }
  @media screen and (max-width: ${props => props.theme.max.s}) {
    position: absolute;
    top: 10px;
    right: 84px;
  }
`
export const HeaderApplyButton = styled.a`
  width: 85px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  border-radius: 44px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  line-height: 0;
  ${mixins.mq.MaxCustom('834px')} {
    font-size: 12px;
    height: 35px;
  }
  &:hover {
    background-color: ${props => props.theme.colors.pink20};
    color: ${props => props.theme.colors.primary};
  }
  &:active {
    background-color: ${props => props.theme.colors.pink40};
    color: ${props => props.theme.colors.primary};
  }
`
export const HeaderDrawerIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 6px;
  font-size: ${props => props.theme.fonts.l};
  display: flex;
  flex-direction: column;
  transform: translateY(-8px);
  align-items: center;
  cursor: pointer;
  > span {
    vertical-align: top;
  }
  ${mixins.mq.MinCustom('835px')} {
    display: none;
  }
  &:hover {
    > span + span {
      text-decoration: underline;
    }
  }
`
export const HeaderSearchIcon = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-8px);
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.l};
  margin-bottom: -18px;
  > span {
    vertical-align: top;
  }
  ${mixins.mq.MinMaxCustom('835px', '1048px')} {
    position: absolute;
    top: 66px;
    right: 204px;
    z-index: 1;
  }
  ${mixins.mq.MaxCustom('834px')} {
    position: absolute;
    top: 17px;
    right: 52px;
  }
  &:hover {
    > span + span {
      text-decoration: underline;
    }
  }
`
export const HeaderSearchText = styled.span`
  font-size: 10px;
  line-height: 1.3;
`
export const HeaderSearch = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  opacity: 0;
  right: -100%;
  width: 100%;
  padding-left: 56px;
  max-width: calc(720px + 56px);
  z-index: 10;
  color: ${props => props.theme.colors.textPrimary};
  a {
    font-size: 15px;
    color: ${props => props.theme.colors.link};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }
  ${props => (props.isOpen ? expandEaseOut : closeEaseOut)}
  overflow-y: auto;
`
export const HeaderSearchClose = styled.div`
  position: absolute;
  width: 56px;
  height: 100%;
  top: 0;
  left: 0;
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  line-height: 1;
  cursor: unset;
  > span {
    position: fixed;
    top: 16px;
    left: auto;
    padding-left: 8px;
    cursor: pointer;
    &::after {
      content: '閉じる';
      font-size: 14px;
      display: block;
      font-weight: bold;
    }
  }
`
export const HeaderSearchWrap = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  max-width: 720px;
  height: 100%;
  margin-left: auto;
`

export const HeaderSearchContents = styled.div`
  padding: 8px 24px 24px;
  background-color: ${props => props.theme.colors.monotone97};
`
export const HeaderDrawer = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  opacity: 0;
  right: -100%;
  padding: 0 0 0 56px;
  width: 100%;
  max-width: 392px;
  z-index: 10;
  ${props => (props.isOpen ? headerDrawerOpen : headerDrawerClose)}
`
export const HeaderDrawerText = styled.span`
  font-size: 10px;
  line-height: 1.3;
`
export const HeaderDrawerClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
  > span {
    position: fixed;
    top: 16px;
    left: auto;
    @media screen and (max-width: 400px) {
      left: 8px;
    }
    &::after {
      content: '閉じる';
      font-size: 14px;
      display: block;
      font-weight: bold;
    }
  }
`
export const HeaderDrawerContainer = styled.div`
  position: fixed;
  height: 100vh;
  padding: 16px 0 120px;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.white};
`
export const HeaderDrawerBtns = styled.div`
  display: flex;
  padding: 8px 16px 24px;
  border-bottom: 1px solid ${props => props.theme.colors.monotone88};
  > a {
    width: 100%;
    &:nth-child(2) {
      margin-left: 6px;
    }
  }
`
export const HeaderDrawerList = styled.ul`
  font-weight: bold;
  li {
    border-bottom: 1px solid ${props => props.theme.colors.monotone88};
    > a,
    > div {
      display: block;
      padding: 18px 20px;
      text-decoration: none;
      color: ${props => props.theme.colors.black};
      cursor: pointer;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.pink100};
        background-color: ${props => props.theme.colors.pink5};
      }
      &:active {
        color: ${props => props.theme.colors.pink100};
        background-color: ${props => props.theme.colors.pink10};
      }
      &:hover:focus span {
        color: ${props => props.theme.colors.pink100};
        background-color: ${props => props.theme.colors.pink5};
      }
    }
    > a {
      &:hover,
      &:focus,
      &:active {
        .Drawer-list-small {
          color: ${props => props.theme.colors.primary};
        }
      }
      > span {
        font-size: 20px;
        margin-right: 4px;
        color: ${props => props.theme.colors.primary};
        vertical-align: -1px;
        &.Drawer-list-small {
          font-size: 14px;
          color: ${props => props.theme.colors.black};
          vertical-align: 0px;
        }
      }
      > img {
        margin-right: 4px;
      }
    }
  }
`
export const HeaderDrawerMenu = styled.li`
  > div {
    position: relative;
    > span {
      &:first-child {
        font-size: 20px;
        margin-right: 4px;
        color: ${props => props.theme.colors.primary};
        vertical-align: -1px;
      }
      &:last-child {
        position: absolute;
        top: 50%;
        right: 8px;
        margin-top: -0.5em;
        margin-left: 4px;
        vertical-align: middle;
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
    > img {
      margin-right: 4px;
    }
  }
`
export const HeaderDrawerSub = styled.div`
  padding: 32px 16px;
`
const HeaderDrawerBtn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  height: 48px;
  font-size: 15px;
  padding: 0;
  border-radius: 50px;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: ${props => props.theme.min.s}) {
    font-size: 13px;
  }
`
export const HeaderDrawerBtnPrimary = styled(ButtonPrimary)`
  ${HeaderDrawerBtn}
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pink80};
    border: 1px solid ${props => props.theme.colors.pink80};
    color: ${props => props.theme.colors.white};
  }
  &:focus {
    outline: 2px ${props => props.theme.colors.linkBlue} solid;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.colors.pink60};
    border: 1px solid ${props => props.theme.colors.pink60};
    color: ${props => props.theme.colors.white};
    outline: 0;
    box-shadow: none;
  }
`
export const HeaderDrawerBtnSecondary = styled(ButtonSecondary)`
  ${HeaderDrawerBtn}
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pink20};
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
  }
  &:focus {
    outline: 2px ${props => props.theme.colors.linkBlue} solid;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.colors.pink40};
    outline: 0;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    box-shadow: none;
  }
`
export const HeaderDrawerBtnRegular = styled(ButtonRegular)`
  ${HeaderDrawerBtn}
  border: 1px solid ${props => props.theme.colors.monotone40};
  color: ${props => props.theme.colors.monotone30};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone93};
    border: 1px solid ${props => props.theme.colors.monotone40};
    color: ${props => props.theme.colors.monotone30};
  }
  &:focus {
    outline: 2px ${props => props.theme.colors.linkBlue} solid;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone88};
    border: 1px solid ${props => props.theme.colors.monotone40};
    outline: 0;
    box-shadow: none;
  }
  > span {
    &:first-child {
      font-size: 20px;
      margin-right: 4px;
    }
  }
`
export const HeaderDrawerLayer = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100vh;
  opacity: 0;
  overflow-y: auto;
  width: calc(100% - 56px);
  max-width: 336px;
  padding-bottom: 24px;
  background-color: ${props => props.theme.colors.white};
  z-index: 20;
  ${props => (props.isOpen ? expandEaseOut : closeEaseOut)};
  color: ${props => props.theme.colors.black};
`
export const HeaderDrawerLayerBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: calc(100% - 56px);
  max-width: 336px;
  padding: 13px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.monotone88};
  z-index: 10;
  font-size: 18px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.pink100};
    background-color: ${props => props.theme.colors.pink5};
  }
  &:active {
    color: ${props => props.theme.colors.pink100};
    background-color: ${props => props.theme.colors.pink10};
  }
  > span {
    &:first-child {
      position: static;
      margin-right: 4px;
      font-size: 20px;
      color: ${props => props.theme.colors.primary};
    }
    &:last-child {
      position: absolute;
      top: 18px;
      left: 16px;
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      font-weight: bold;
    }
  }
  > img {
    margin-right: 4px;
  }
`
export const HeaderDrawerLayerContent = styled.div`
  padding: 54px 16px 120px;
`
export const HeaderDrawerListLayer = styled(HeaderDrawerList)`
  li {
    > a,
    > div {
      padding-left: 4px;
    }
    > p {
      font-size: 12px;
      font-weight: normal;
      color: #676767;
      padding: 0 0 10px auto;
    }
    > a {
      > p {
        font-weight: normal;
        margin-top: 4px;
        padding: 0 0 10px auto;
      }
    }
  }
`
export const HeaderNavCap = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fonts.ss};
  line-height: 1.4;
  font-weight: normal;
  margin-top: 4px;
  margin-left: 24px;
`
export const HeaderOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.monotone30};
  opacity: 0.75;
  z-index: 5;
  &[aria-hidden='false'] {
    display: block;
  }
`
export const HeaderSearchBox = styled.div`
  margin-top: 16px;
  width: 100%;
  position: relative;
`
export const HeaderSearchInput = styled.input`
  padding: 12px 56px 12px 16px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  color: ${props => props.theme.colors.monotone40};
  &::placeholder {
    color: ${props => props.theme.colors.monotone40};
  }
  &:hover {
    background: ${props => props.theme.colors.pink5};
  }
  &:focus {
    border-color: ${props => props.theme.colors.pink100};
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.primary};
    padding: 11px 55px 11px 15px;
  }
`
export const HeaderSearchBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  height: 24px;
  width: 24px;
  margin-top: -12px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff008c;
    top: -12px;
    right: -15px;
  }
`
export const HeaderSearchBtnSubmit = styled.input`
  visibility: hidden;
  width: 24px;
  height: 24px;
`
export const HeaderSearchBtnIcon = styled(IconSearch)`
  position: absolute;
  top: 0;
  left: 4px;
  display: block;
  line-height: 24px;
  width: 24px;
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  z-index: 2;
`
export const HeaderSearchPopularWords = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  gap: ${props => props.theme.gap.m};
  @media screen and (max-width: ${props => props.theme.max.s}) {
    flex-direction: column;
  }
`
export const HeaderSearchContainer = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
`
export const HeaderSearchBnrWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.gap.m};
  img {
    width: 210px;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    flex-direction: column;
    gap: ${props => props.theme.gap.l};
    img {
      width: 288px;
    }
  }
`
export const HeaderSearchRelatedWords = styled.span`
  display: inline-block;
`
export const HeaderSearchSuggestList = styled.ul`
  margin-top: 24px;
  li {
    margin-top: 16px;
    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: unset !important;
      white-space: unset !important;
      overflow: hidden;
    }
  }
`
export const HeaderSearchSuggestProduct = styled.ul`
  li {
    margin-top: 16px;
    overflow: hidden;
    > div {
      &:first-child {
        float: left;
        width: 80px;
        height: 80px;
        padding: 8px;
        margin-right: 8px;
        border: 1px solid ${props => props.theme.colors.darkBlue20};
        background-color: ${props => props.theme.colors.white};
      }
      &:last-child {
        padding-left: 88px;
      }
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: unset !important;
      white-space: unset !important;
      overflow: hidden;
    }
  }
`
export const HeaderSearchLabel = styled.span`
  display: inline-block;
  padding: 6px 8px;
  margin-right: 8px;
  background-color: ${props => props.theme.colors.monotone93};
  font-size: ${props => props.theme.fonts.s};
`
