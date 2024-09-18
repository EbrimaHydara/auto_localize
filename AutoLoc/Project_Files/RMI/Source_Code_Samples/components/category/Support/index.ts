import styled from 'styled-components'
import { IconChevronRight } from '@components/icons/index'
import { LinkList, LinkListBorder } from '@components/atoms/Link'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'

export const SupportWrap = styled.div`
  padding-top: 24px;
  ${mixins.mq.MinL} {
    padding-top: 40px;
  }
`
export const SupportHeadWrap = styled.div`
  ${mixins.mq.MinL} {
    min-height: 127px;
  }
  position: relative;
  text-align: center;
  &:before {
    display: none;
    ${mixins.mq.MinL} {
      display: block;
      position: absolute;
      content: '';
      background-image: url(${assets}img/support/solution.png);
      background-size: 152px 127px;
      width: 152px;
      height: 127px;
      right: 16px;
    }
  }
  > h1 {
    ${mixins.mq.MinL} {
      width: calc((100% - ${props => props.theme.gap.l} * 4) / 3 * 2);
      padding-top: 16px;
    }
    margin: 0 auto;
  }
`
export const SmallCategoryWrap = styled.div`
  margin-bottom: 64px;
  ${mixins.mq.MaxM} {
    position: relative;
    margin-bottom: 32px;
  }
  &.isMovie {
    margin-bottom: 48px;
    ${mixins.mq.MaxM} {
      position: relative;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    ${mixins.mq.MaxS} {
      padding-bottom: 0;
    }
    &::after {
      ${mixins.mq.MaxM} {
        display: none;
      }
    }
  }
`
export const SupportOtherCategoryWrap = styled.div`
  background-color: #fef9f2;
  padding: 32px 0 88px;
  ${mixins.mq.MinL} {
    padding: 32px 0 80px;
  }
`
export const SupportHeadingSmall = styled.span`
  font-size: 20px;
`
export const SupportOtherCategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    ${mixins.mq.MinL} {
      width: calc((100% - ${props => props.theme.gap.l} * 1) / 2 * 1);
      margin-top: 24px;
      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0;
      }
    }
    width: 100%;
    ${mixins.mq.MaxM} {
      margin-top: 16px;
      &:first-child {
        margin-top: 0;
      }
    }
    > a {
      display: flex;
      align-items: center;
      text-align: left;
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.colors.linkHover};
        text-decoration: underline;
      }
      &:focus {
        color: ${props => props.theme.colors.linkFocus};
        text-decoration: underline;
      }
      &:active {
        color: ${props => props.theme.colors.linkActive};
        text-decoration: underline;
      }
      > span {
        margin-left: 8px;
        color: ${props => props.theme.colors.primary};
        &:before {
          display: inline-block;
        }
      }
    }
  }
`
export const SupportOtherWrap = styled.div<{ isCategory: boolean }>`
  ${props => (props.isCategory ? 'margin-top: 32px;' : 'margin-top: 48px;')}
  ${props => props.isCategory && 'padding: 32px 0 80px;'}
  ${props => props.isCategory && 'background-color: #fef9f2;'}
  ${mixins.mq.MinL} {
    ${props => (props.isCategory ? 'margin-top: 64px;' : 'margin-top: 80px;')}
  }
`
export const SupportOtherCategoryNav = styled.div`
  ${mixins.mq.MinL} {
    margin-top: 64px;
    height: 140px;
  }
  position: relative;
  text-align: center;
  margin-top: 16px;
  &:before {
    display: block;
    content: '';
    background-image: url(${assets}img/support/search.png);
    background-size: contain;
    width: 165px;
    height: 150px;
    ${mixins.mq.MaxM} {
      margin: 32px auto;
    }
    ${mixins.mq.MinL} {
      position: absolute;
      width: 153px;
      height: 140px;
      right: 16px;
    }
  }
  &.after-popask,
  &.no-category {
    &:before {
      ${mixins.mq.MaxM} {
        display: none;
      }
    }
  }
  .related_category + & {
    margin-top: 32px;
    ${mixins.mq.MinL} {
      margin-top: 64px;
    }
  }
  div + div {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 24px;
    }
  }
`
export const SupportReadmore = styled.button`
  position: relative;
  display: block;
  padding: 16px 16px 16px 24px;
  margin: auto;
  text-align: left;
  background-color: inherit;
  z-index: 1;
  color: ${props => props.theme.colors.link};
  text-decoration: underline;
  &:link {
    text-decoration: underline;
  }
  &:visited {
    text-decoration: underline;
  }
  &:hover {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &:active {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &[aria-hidden='true'] {
    display: none;
  }
`
export const SupportReadmoreArrow = styled(IconChevronRight)`
  margin-top: -5px;
  position: absolute;
  top: 50%;
  left: 0;
  color: ${props => props.theme.colors.primary};
  transform: rotate(90deg);
`
export const SupportLinkListBorder = styled(LinkListBorder)`
  &[aria-hidden='true'] {
    display: none;
  }
  &[aria-hidden='false'] {
    animation: show 0.5s ease-out 0s;
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const SupportLinkList = styled(LinkList)`
  position: relative;
  display: flex;
  flex-direction: column;
  ${mixins.mq.MinL} {
    display: block;
  }
`
export const SupportLinkListIconChevronRight = styled(IconChevronRight)`
  ${mixins.mq.MinM} {
    position: absolute !important;
  }
  right: 0 !important;
`
export const SolvedNum = styled.div`
  margin-top: 8px;
  color: ${porps => porps.theme.colors.monotone20};
  background-color: ${props => props.theme.colors.monotone93};
  font-weight: 700;
  display: inline;
  padding: 4px 8px;
  font-size: 13px;
  width: fit-content;
  ${mixins.mq.MinL} {
    margin-top: 0;
    margin-left: 8px;
  }
`
export const SupportMovieWrap = styled.div<{ isGuide: boolean }>`
  ${mixins.mq.MaxM} {
    ${props =>
      props.isGuide &&
      `
      position: relative;
      padding-bottom: 155px;
    `}
  }
  &::after {
    ${mixins.mq.MaxM} {
      ${props =>
        props.isGuide &&
        `
        display: block;
        position: absolute;
        content: '';
        background-image: url(${assets}img/support/solution.png);
        background-size: 152px 138px;
        background-position: center bottom;
        width: 100%;
        height: 138px;
        left: 0;
        bottom: 0;
      `}
    }
  }
`
export const SupportMovieList = styled.div`
  position: relative;
  ${mixins.mq.MaxM} {
    width: 169px;
  }
  ${mixins.mq.MaxS} {
    width: 100%;
    display: flex;
    margin-left: 0;
  }
  &[aria-hidden='true'] {
    display: none;
  }
  &[aria-hidden='false'] {
    animation: show 0.5s ease-out 0s;
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const SupportMovieHead = styled.div`
  &:before {
    display: block;
    content: '';
    width: 227px;
    height: 101px;
    margin: 0 auto 16px;
    background-image: url(${assets}img/support/movie.png);
    background-size: cover;
  }
`
export const SupportMovieMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  gap: 24px 0;
  ${mixins.mq.MinM} {
    flex-direction: row;
    margin-top: 32px;
    gap: 32px 24px;
  }
  ${mixins.mq.MaxS} {
    width: 100%;
  }
  > div {
    width: 320px;
    ${mixins.mq.MaxM} {
      width: 169px;
    }
    ${mixins.mq.MaxS} {
      width: 100%;
      display: flex;
    }
  }
`
export const SupportMovieThumbnail = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  ${mixins.mq.MaxM} {
    width: 169px;
    height: fit-content;
  }
  a {
    position: relative;
    display: block;
    &:before {
      display: block;
      content: '';
      pointer-events: none;
      width: 48px;
      height: 48px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
      background-image: url(${assets}img/support/play.png);
      background-size: cover;
    }
  }
`
export const SupportMoviePipThumbnail = styled.div`
  > div {
    aspect-ratio: 16/9;
    width: 169px !important;
    height: 95px !important;
    ${mixins.mq.MinL} {
      width: 320px !important;
      height: 180px !important;
    }

    a {
      border: solid 1px ${props => props.theme.colors.monotone75};
      background-size: 100% !important;
    }
  }
`
export const SupportMovieTime = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 10px;
  line-height: 1;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.black};
  opacity: 0.8;
  border-radius: 2px;
  padding: 2px 3px;
  ${mixins.mq.MinL} {
    bottom: 6px;
    right: 6px;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 4px;
  }
`
export const SupportMovieDescription = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 16px;
  margin-left: 0;
  ${mixins.mq.MaxS} {
    margin-top: 0;
    margin-left: ${props => props.theme.gap.m};
    width: calc(100% - 169px - 16px);
  }
`
export const SupportMovieSpacer = styled.div`
  height: 0 !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  ${mixins.mq.MaxS} {
    &:empty {
      display: contents;
    }
  }
`
export const ResolutionTime = styled.div`
  width: fit-content;
  padding: 4px 8px;
  background-color: ${props => props.theme.colors.pink5};
`
