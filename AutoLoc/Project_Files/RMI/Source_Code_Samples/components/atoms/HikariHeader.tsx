import styled, { css } from 'styled-components'
import {
  IconChevronDown,
  IconSearch,
  IconArrowRight,
  IconChevronRight,
  IconX,
  IconLoginLine,
  IconMyPageLine,
} from '@components/icons'

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
const openSubContainer = css`
  max-height: 100vh;
  transition: max-height 0.7s ease-out 0.2s;
`
const closeSubContainer = css`
  max-height: 0;
  transition: max-height 0.3s ease-out;
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
`

export const HeaderLogoWrapper = styled.div`
  max-width: 1064px;
  margin: auto;
  padding: 11px 16px 10px;
  @media (max-width: ${props => props.theme.max.l}) {
    max-width: 100%;
  }
  @media (max-width: ${props => props.theme.max.m}) {
    padding: 13px 16px 10px;
  }
`

export const HeaderContainerNewOther = styled.div`
  font-size: 13px;
  max-width: 1032px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 1;
`

export const HeaderContainerNewLogo = styled.a`
  display: flex;
  align-items: center;
  & :hover {
    opacity: 0.85;
  }
  & img {
    width: 95px;
    @media (max-width: ${props => props.theme.max.m}) {
      width: 83px;
    }
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  transition-duration: 0.25s;
  z-index: 5;
  position: relative;
  background: ${props => props.theme.colors.orange100};
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
    padding-top: 13px;
  }
  @media (max-width: ${props => props.theme.max.m}) {
    padding: 8px 0;
  }
  &.fixed {
    position: fixed;
    width: 100%;
    top: 0;
    padding: 0;

    @media screen and (min-width: ${props =>
        props.theme.min.l}) and (max-width: 984px) {
      /* height:86px; */
      padding-top: 8px;
    }

    @media (max-width: ${props => props.theme.max.m}) {
      padding: 6px 0;
      height: 46px;
    }
  }
`

export const HeaderContainerInner = styled.div`
  color: ${props => props.theme.colors.white};
  width: 100%;
  max-width: 1064px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
    flex-direction: column;
  }
`

export const HeaderContent = styled.div`
  display: contents;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 48px;
  @media (max-width: ${props => props.theme.max.m}) {
    gap: 0;
  }
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
    display: flex;
    gap: 0;
  }
`

export const HeaderLogo = styled.a`
  display: block;
  &:hover {
    opacity: 0.85;
  }
  & img {
    width: 144px;
    display: inline-block;
    padding-top: 3px;
    @media (max-width: ${props => props.theme.max.m}) {
      width: 100px;
    }
    /* @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
      margin-top: -28px;
    } */
    @media screen and (min-width: ${props => props.theme.min.l}) {
      .fixed & {
        width: 121px;
      }
    }
  }
`

export const HeaderDropdown = styled.button`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  transition: none;
  font-size: 16px;
  position: relative;
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  transition: padding-bottom 0.25s, margin-top 0.25s;
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
    padding-bottom: 13px;
    margin-top: 13px;
  }
  &[aria-current='true'] {
    font-weight: bold;
    > span {
      &::before {
        transform: rotateZ(-90deg);
      }
    }
  }
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
    .fixed & {
      padding-bottom: 9px;
    }
  }

  @media (min-width: ${props => props.theme.min.l}) {
    .fixed & {
      padding-bottom: 15px;
      margin-top: 15px;
    }
  }

  @media (min-width: ${props => props.theme.min.l}) and (max-width: 984px) {
    .fixed & {
      padding-bottom: 8px;
      margin-top: 8px;
    }
  }
`

export const HeaderDropdownIcon = styled(IconChevronRight)`
  padding-left: 4px;
  display: table-cell;
  font-weight: bold !important; // クラスが重複する問題で応急処置(importantがないとRexIconに上書きされる
  &::before {
    transition-duration: 0.5s;
    transition: transform 0.1s;
    transform: rotateZ(90deg);
    display: inline-block;
    color: ${props => props.theme.colors.white};
  }
`

export const DrawerLayer = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100vh;
  opacity: 0;
  overflow-y: auto;
  width: calc(100% - 56px);
  max-width: 339px;
  padding-bottom: 24px;
  background-color: ${props => props.theme.colors.white};
  z-index: 20;
  transition-duration: 0.5s;
  transition: opacity 0.2s ease-out, right 0.2s ease-out;
  color: ${props => props.theme.colors.black};
  &[aria-expanded='true'] {
    right: 0;
    opacity: 1;
  }
`

export const DrawerLayerBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: calc(100% - 56px);
  max-width: 339px;
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
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.orange10};
  }
  &:active {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.orange20};
  }
  > span {
    &:first-child {
      position: static;
      margin-right: 4px;
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

export const DrawerLayerContent = styled.div`
  padding: 54px 16px 120px;
`

export const DrawerList = styled.ul`
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
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.orange10};
      }
      &:active {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.orange20};
      }
      &:hover:focus span {
        color: ${props => props.theme.colors.orange100};
        background-color: ${props => props.theme.colors.orange10};
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
          &:hover,
          &:focus {
            color: ${props => props.theme.colors.orange100};
            background-color: ${props => props.theme.colors.orange5};
          }
          &:active {
            color: ${props => props.theme.colors.orange100};
            background-color: ${props => props.theme.colors.orange10};
          }
        }
      }
      > img {
        margin-right: 4px;
      }
    }
  }
`

export const DrawerListLayer = styled(DrawerList)`
  li {
    > a,
    > div {
      padding-left: 4px;
    }
    > p {
      font-size: 12px;
      font-weight: normal;
      color: ${props => props.theme.colors.textSecondary};
      padding: 0 0 10px 30px;
    }
    > a {
      > p {
        font-weight: normal;
        margin-top: 4px;
        padding-left: 25px;
      }
    }
  }
`

export const HeaderSubContainer = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  left: 0;
  width: 280px;
  background-color: transparent;
  backdrop-filter: none;
  z-index: 10;
  margin-left: -23px;
  ${props => (props.isOpen ? openSubContainer : closeSubContainer)};
  overflow: hidden;
  @media screen and (max-width: ${props => props.theme.max.m}) {
    display: none;
  }
`

export const HeaderSubContainerWide = styled(HeaderSubContainer)`
  width: 380px;
  margin-left: -23px;
`

export const HeaderNavList = styled.ul`
  background-color: ${props => props.theme.colors.white};
  padding: 16px 0;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
`

export const HeaderNav = styled.nav`
  margin-left: 48px;
  @media screen and (max-width: ${props => props.theme.max.m}) {
    display: none;
  }
  @media screen and (min-width: ${props =>
      props.theme.min.l}) and (max-width: 984px) {
    margin-left: 0;
  }
`

export const HeaderHikariNavLink = styled.a`
  display: block;
  color: ${props => props.theme.colors.monotone20} !important;
  padding: 8px 24px;
  &:hover {
    font-weight: 400;
    color: ${props => props.theme.colors.primary} !important;
    background-color: ${props => props.theme.colors.orange20};
  }
`

export const GlobalLinkContainer = styled.div`
  span {
    margin: 0 8px;
    font-size: 10px;
    color: ${props => props.theme.colors.link};
  }
`

export const GlobalLink = styled.a`
  font-size: 12px;
  span {
    font-size: 10px;
  }
`

export const Nav = styled.div`
  @media (max-width: ${props => props.theme.max.m}) {
    display: none;
  }
`

export const NavSub = styled.div`
  margin: auto;
  @media (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const NavSubUl = styled.ul`
  @media (min-width: ${props => props.theme.min.l}) {
    display: flex;
    align-items: center;
    gap: 0 40px;
    li {
      position: relative;

      a {
        font-size: 16px;
        transition: 0s;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        &:hover {
          font-weight: 700;
        }

        .fixed & {
          margin-top: 0;
        }
      }
    }
  }

  @media (min-width: 985px) {
    li {
      a {
        padding-bottom: 8px;
        margin: auto 0 0;
      }
    }
  }
`

export const HeaderNewItem = styled.div`
  margin-left: auto;
  order: 3;
  @media (max-width: 884px) {
    margin-left: 0;
  }
  /* @media screen and (min-width: ${props =>
    props.theme.min.l}) and (max-width: 984px) {
    margin-top: -28px;
  } */
`

export const ApplyWrapper02 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`

export const ApplyButton = styled.div`
  line-height: 0;
  a {
    height: 38px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #ff7a00;
    background-color: ${props => props.theme.colors.white};
    padding: 10px 14px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 44px;
    white-space: nowrap;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.orange20};
    }
    &:active {
      background-color: ${props => props.theme.colors.orange40};
    }
    @media (max-width: ${props => props.theme.max.m}) {
      padding: 9px 14px;

      .fixed & {
        height: 34px;
      }
    }
  }
`

export const HeaderIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 16px;
  font-size: ${props => props.theme.fonts.l};
  display: flex;
  flex-direction: column;
  transform: translateY(-8px);
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.min.l}) {
    top: 22px;
  }
  > span {
    vertical-align: top;
  }
`

export const HeaderSearchLabel = styled.span`
  display: inline-block;
  padding: 6px 8px;
  margin-right: 8px;
  background-color: ${props => props.theme.colors.darkBlue10};
  font-size: ${props => props.theme.fonts.s};
`

export const HeaderSearchText = styled.span`
  font-size: 10px;
  line-height: 1.3;
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
  @media (min-width: ${props => props.theme.min.l}) and (max-width: ${props =>
      props.theme.max.l}) {
    top: 66px;
    right: 204px;
    z-index: 1;
  }
  @media (max-width: ${props => props.theme.max.m}) {
    position: initial;
    top: 17px;
    right: 52px;
  }
  &:hover {
    > span + span {
      text-decoration: underline;
    }
  }
`
export const HeaderDrawerText = styled.span`
  font-size: 10px;
  line-height: 1.3;
`
export const HeaderDrawerIcon = styled(HeaderIcon)`
  &:hover {
    ${HeaderDrawerText} {
      text-decoration: underline;
    }
  }
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
  color: ${props => props.theme.colors.textPrimary};
  &::placeholder {
    color: ${props => props.theme.colors.monotone40};
  }
  &:hover {
    background: ${props => props.theme.colors.orange5};
  }
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.white};
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
    background: ${props => props.theme.colors.primary};
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
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
`
export const HeaderSearchBnrWrapper01 = styled.div`
  display: flex;
  padding-top: 24px;
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
export const HeaderSearchBnrWrapper = styled.div`
  display: flex;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
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
      > a {
        &:hover {
          text-decoration: underline;
          text-decoration-thickness: 2px;
        }
      }
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
    a {
      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
      }
    }
  }
`

export const HeaderEcare = styled.div`
  flex: 0 0 auto;
  margin-top: 2px;
  @media screen and (max-width: ${props => props.theme.max.m}) {
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
  font-size: 24px !important; // クラスが重複する問題で応急処置(importantがないとRexIconに上書きされる)
`

export const HeaderEcareText = styled.span`
  font-size: 10px;
  line-height: 1.3;
`

export const DrawerIcon = styled.div``

export const DrawerText = styled.span`
  font-size: 10px !important;
  line-height: 1.3;
`

export const DrawerIconFixed = styled.div`
  span {
    display: block;
    text-align: center;

    &::before {
      font-size: 24px;
      height: 24px;
    }
  }

  &.fixed {
    span {
      &::before {
        font-size: 20px;
        height: 20px;
      }
    }
  }
`

export const DrawerNav = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  opacity: 0;
  right: -100%;
  padding: 0 0 0 56px;
  width: 100%;
  max-width: 392px;
  z-index: 20;
  transition: opacity 0.2s ease-out, right 0.2s ease-out;

  &[aria-expanded='true'] {
    right: 0;
    opacity: 1;
  }
`

export const DrawerWrapFixed = styled.div`
  @media (min-width: ${props => props.theme.min.l}) {
    display: none;
  }
`

export const DrawerClose = styled.div`
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

export const DrawerNavInner = styled.div`
  z-index: 5;
  width: 339px;
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  right: -3px;
  height: 100%;
  padding-top: 16px;
  order: 3;
  overflow: auto;
  @media screen and (max-width: 400px) {
    right: 0;
    max-width: 85%;
  }
  @media screen and (max-width: 370px) {
    right: -8px;
  }
`

export const DrawerContainer = styled.div`
  display: flex;
  gap: 6px;
  padding: 8px 16px 24px;
  border-bottom: 1px solid monotone88;
`

export const CampaignLink = styled.a`
  font-size: 13px !important;
`

export const LinkWrapper = styled.div`
  flex: 1 1 auto;
`

export const DrawerMain = styled.div`
  font-size: ${props => props.theme.fonts.base};
  font-weight: 400;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
  li {
    a {
      display: block;
      padding: 18px 20px;
      text-decoration: none;
      color: ${props => props.theme.colors.black};
      cursor: pointer;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.orange10};
      }
      &:active {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.orange20};
      }
      &:hover:focus span {
        color: ${props => props.theme.colors.orange100};
        background-color: ${props => props.theme.colors.orange10};
      }
      @media (min-width: ${props => props.theme.min.l}) {
        font-size: ${props => props.theme.fonts.base};
      }
      > span {
        display: block;
      }
    }
    button {
      transition: 0s;
    }
  }
`

export const DrawerMenu = styled.li`
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

export const CAccordionWrapper = styled.div`
  position: relative;
  border-top: 1px solid ${props => props.theme.colors.darkBlue20};
  border-bottom: 1px solid ${props => props.theme.colors.darkBlue20};
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  & + & {
    border-top: none;
  }
`

export const AccordionWrapperCustom = styled(CAccordionWrapper)`
  color: ${props => props.theme.colors.uiBlue80};
  background-color: transparent;
  border: 0;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    @media (min-width: ${props => props.theme.min.l}) {
      font-size: ${props => props.theme.fonts.base};
    }
    &[aria-expanded='true'] {
      .arrow {
        &::before {
          transform: rotateZ(-180deg);
        }
      }
    }
    &[aria-current='false'] {
      color: ${props => props.theme.colors.uiBlue80} !important;
      .arrow {
        &::before {
          color: ${props => props.theme.colors.uiBlue80} !important;
        }
      }
    }
    &:hover,
    &:active {
      color: ${props => props.theme.colors.orange100};
      background-color: transparent;
    }
  }
`

export const CAccordionTrigger = styled.button`
  position: relative;
  width: 100%;
  padding: 16px 16px 16px 30px;
  text-align: left;
  background-color: inherit;
  z-index: 1;
  &:hover {
    background-color: ${props => props.theme.colors.uiBlue10};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.darkBlue5};
    color: ${props => props.theme.colors.linkBlockDisabled};
    .arrow {
      background-color: ${props => props.theme.colors.divider};
    }
  }
  &[aria-expanded='true'] {
    font-weight: bold;

    .arrow {
      &:before {
        transform: rotate(270deg);
      }
    }
  }
`

export const AccordionPanelCustom = styled.div`
  padding: 16px 0 24px;
  overflow: hidden;
  padding: 0 20px;
  ul {
    li {
      padding-bottom: 18px;
      a {
        padding: 0 20px;
        font-size: 18px;
        @media (min-width: ${props => props.theme.min.l}) {
          font-size: ${props => props.theme.fonts.base};
        }
        &:hover,
        &:focus,
        &:active {
          font-weight: 700;
        }
      }
    }
  }
`

export const AccordionArrowCustom = styled(IconChevronDown)`
  &::before {
    font-weight: bold;
    display: block;
    transition: transform 0.1s;
  }
`

export const DrawerSub = styled.ul`
  padding: 32px 16px 64px;
  color: ${props => props.theme.colors.link};
  li {
    &:nth-child(n + 2) {
      margin-top: 16px;
    }
    a {
      display: block;
      text-decoration: underline;
      color: ${props => props.theme.colors.link};
      &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.linkHover};
      }
      &:focus {
        color: ${props => props.theme.colors.linkFocus};
      }
      &:active {
        color: ${props => props.theme.colors.linkActive};
      }
    }
  }
`

export const LinkButton3 = styled.a`
  display: block;
  height: 48px;
  padding: 0 1em;
  line-height: 48px;
  border: 1px solid ${props => props.theme.colors.uiBlue20};
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: ${props => props.theme.fonts.base};
  color: ${props => props.theme.colors.uiBlue80};
  background-color: ${props => props.theme.colors.white};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.uiBlue80};
    border: 1px solid ${props => props.theme.colors.uiBlue80};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    span {
      color: ${props => props.theme.colors.white};
    }
  }
  &:active {
    background-color: ${props => props.theme.colors.uiBlue80};
    border: 1px solid ${props => props.theme.colors.uiBlue80};
    color: ${props => props.theme.colors.white};
  }
`

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.monotone40};
  opacity: 0.64;
  z-index: 5;
  &[aria-hidden='false'] {
    display: block;
  }
`

export const HeaderNavSub = styled.nav`
  background: ${props => props.theme.colors.darkBlue100};
  @media (max-width: ${props => props.theme.max.m}) {
    display: none;
  }
  a,
  button {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: 0s;
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colors.orange100};
      font-weight: 700;
      text-decoration: none;
      .dropdown-icon::before {
        color: ${props => props.theme.colors.orange100};
        font-weight: 700;
      }
    }
    &[aria-current='false'] {
      &:hover {
        color: ${props => props.theme.colors.white};
        font-weight: 400;
        .dropdown-icon::before {
          color: ${props => props.theme.colors.white};
          font-weight: 400;
        }
      }
    }
  }
`

export const HeaderNavSubContainer = styled.div`
  width: 100%;
  max-width: 1064px;
  padding: 0 16px;
  margin: auto;
  padding: 0 8px 0 16px;
  /* a,
  button {
    padding: 12px 0;
  } */
  @media (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const HeaderNavSubInner1 = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > li {
    margin-right: 24px;
  }
`

export const HeaderNavSubInner2 = styled.div`
  position: relative;
  padding: 12px 0 12px 32px;
  @media (min-width: ${props => props.theme.min.l}) {
    margin-left: auto;
    &::before {
      position: absolute;
      left: 0;
      top: 12px;
      content: '';
      height: 1.54em;
      width: 1px;
      background-color: ${props => props.theme.colors.darkBlue40};
    }
  }
`

export const HeaderNavSubDropdownContainer = styled.li`
  position: relative;
`
export const HeaderDropdownCustom = styled.button`
  display: flex;
  align-items: center;
  &[aria-current='true'] {
    color: ${props => props.theme.colors.orange100};
    font-weight: 700;
    .dropdown-icon::before {
      color: ${props => props.theme.colors.orange100};
      font-weight: 700;
    }
  }
  color: ${props => props.theme.colors.link2};
  text-decoration: none;
  > span {
    display: table-cell;
    vertical-align: middle;
    color: ${props => props.theme.colors.primary};
    padding-left: 8px;
    &::before {
      vertical-align: top;
      display: inline-block;
    }
  }
  &:hover {
    color: ${props => props.theme.colors.link2Hover};
    text-decoration: underline;
  }
  &:active {
    color: ${props => props.theme.colors.link2Active};
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.colors.link2Focus};
    text-decoration: underline;
  }
  &[aria-disabled='true'] {
    color: ${props => props.theme.colors.linkDisabled};
    text-decoration: none;
    pointer-events: none;
    > span {
      color: ${props => props.theme.colors.linkDisabled};
    }
  }
`

export const HeaderNavSubDropDown = styled.ul`
  background: ${props => props.theme.colors.darkBlue5};
  position: absolute;
  top: 100%;
  left: -24px;
  min-width: 240px;
  box-shadow: 0px 1px 4px rgba(0, 0, 51, 0.3);
  z-index: 1;
  &[aria-hidden='true'] {
    display: none;
  }
  li {
    a {
      display: block;
      padding: 12px 24px;
      font-size: ${props => props.theme.fonts.base};
      line-height: 1.54;
      color: ${props => props.theme.colors.uiBlue80};
    }
    &:first-child a {
      padding-top: 24px;
    }
    &:last-child a {
      padding-bottom: 24px;
    }
  }
`

export const IconDownCustom = styled(IconChevronDown)`
  &::before {
    color: ${props => props.theme.colors.white};
  }
`

export const IconArrowRightCustom = styled(IconArrowRight)`
  &::before {
    font-weight: 400;
    margin-left: 4px;
  }
`

export const IconArrowRightCustom2 = styled(IconArrowRight)`
  &::before {
    color: ${props => props.theme.colors.primary};
  }
`

export const IconArrowRightCustom3 = styled(IconArrowRight)`
  display: inline-block;
  &::before {
    top: -1px;
    margin-right: 5px;
    margin-left: 4px;
    position: relative;
    color: ${props => props.theme.colors.primary};
  }
`

export const IconXCustom = styled(IconX)`
  &::before {
    color: ${props => props.theme.colors.white};
    font-weight: 700;
  }
`

export const IconLoginLineCustom = styled(IconLoginLine)`
  &::before {
    font-weight: 400;
    margin-left: 4px;
  }
`

export const HeaderSearchWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  transform: translateX(100%);
  padding: 48px 24px 24px;
  width: 90%;
  max-width: 336px;
  background-color: ${props => props.theme.colors.darkBlue5};
  z-index: 10;
  color: ${props => props.theme.colors.textPrimary};
  a {
    color: ${props => props.theme.colors.link2};
    text-decoration: none;
  }
  &[aria-expanded='false'] {
    transition: 0.5s;
    transform: translateX(100%);
    .close {
      display: none;
    }
  }
  &[aria-expanded='true'] {
    transition: 0.5s;
    transform: translateX(0);
    .close {
      display: block;
    }
  }
`

export const HeaderLinkButton1 = styled.a`
  width: 100%;
  font-size: 15px;
  padding: 12px;
  max-width: 500px;
  line-height: 1.4;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  box-shadow: 0 4px 0 rgb(0 0 0 / 10%);
  text-align: center;
  color: ${props => props.theme.colors.white};
  position: relative;
  min-width: auto;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnHover};
    border: 1px solid ${props => props.theme.colors.btnHover};
    color: ${props => props.theme.colors.white};
  }
  &:active {
    background-color: ${props => props.theme.colors.btnActive};
    border: 1px solid ${props => props.theme.colors.btnActive};
    color: ${props => props.theme.colors.white};
    outline: 0;
    box-shadow: none;
  }
`

export const HeaderLinkButtonTextArea = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderLinkButtonText = styled.span`
  display: block;
  width: 100%;
`

export const HeaderLinkButton2 = styled.a`
  width: 100%;
  font-size: 15px;
  padding: 12px;
  max-width: 500px;
  line-height: 1.4;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.primary};
  min-width: auto;
  height: 48px;
  box-shadow: 0 4px 0 rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.orange20};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  &:active {
    background-color: ${props => props.theme.colors.orange40};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    outline: 0;
    box-shadow: none;
  }
`

export const HeaderOvearlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.monotone40};
  opacity: 0.85;
  z-index: 11;
  &[aria-hidden='false'] {
    display: block;
  }
`
