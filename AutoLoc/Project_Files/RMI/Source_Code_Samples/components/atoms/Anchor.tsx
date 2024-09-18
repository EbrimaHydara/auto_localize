import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const Anchor = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: 7px 36px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.monotone30};
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone93};
    color: ${props => props.theme.colors.monotone30};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone88};
    color: ${props => props.theme.colors.monotone30};
  }
  > span {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${props => props.theme.colors.pink100};
  }
  > span:nth-of-type(1) {
    width: 24px;
    height: 24px;
    left: 8px;
  }
`

export const AnchorInline = styled(Anchor)`
  width: auto;
`

export const AnchorIcon = styled(Anchor)`
  padding: 7px 44px 7px 32px;
  > span:nth-last-of-type(1) {
    right: 8px;
    font-size: 32px;
  }
`

export const AnchorIconInline = styled(AnchorIcon)`
  width: auto;
`

export const AnchorImage = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  padding: 12px 8px 4px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.monotone30};
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone93};
    color: ${props => props.theme.colors.monotone30};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone88};
    color: ${props => props.theme.colors.monotone30};
  }
  > span {
    display: inline-block;
    color: ${props => props.theme.colors.pink100};
    font-weight: 700;
    margin-bottom: 4px;
  }
  > p {
    position: relative;
    padding-bottom: 24px;
    margin-top: 4px;
    > span {
      position: absolute;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: ${props => props.theme.colors.pink100};
    }
    > span:nth-last-of-type(1) {
      width: 24px;
      height: 24px;
      bottom: 0;
      left: calc(50% - 12px);
    }
  }
`

export const AnchorImageInline = styled(AnchorImage)`
  width: auto;
`

const AnchorListBase = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  ${mixins.mq.MinL} {
    gap: 16px;
  }
  > li {
    width: 100%;
    max-width: 500px;
    text-align: center;
  }
`

export const AnchorList = styled(AnchorListBase)`
  > :first-child:nth-last-child(2),
  > :first-child:nth-last-child(2) ~ li {
    ${mixins.mq.MinL} {
      width: 393px;
    }
  }
  > li:nth-last-child(n + 3):nth-last-child(-n + 4):first-child,
  > li:nth-last-child(n + 3):nth-last-child(-n + 4):first-child ~ li {
    ${props => mixins.mq.MinMaxCustom(props.theme.min.l, props.theme.max.l)} {
      width: 393px;
    }
    ${mixins.mq.MinL} {
      flex: 1;
    }
  }
  > :nth-last-child(n + 5),
  > :nth-last-child(n + 5) ~ li {
    ${props => mixins.mq.MinMaxCustom(props.theme.min.l, props.theme.max.l)} {
      width: 393px;
    }
    ${mixins.mq.MinL} {
      width: calc(33.3333% - calc(32px / 3));
    }
  }
`

export const AnchorListLeft = styled(AnchorList)`
  justify-content: flex-start !important;
`

export const AnchorListTxt3 = styled(AnchorList)`
  .c-Anchor_Basic,
  .c-Anchor_Icon {
    padding: 3px 36px;
  }
`

export const AnchorListImage = styled(AnchorListBase)`
  > li {
    max-width: 100%;
  }
  > li:nth-last-child(n + 3):nth-last-child(-n + 4):first-child,
  > li:nth-last-child(n + 3):nth-last-child(-n + 4):first-child ~ li {
    width: calc(50% - 8px);
    ${props => mixins.mq.MinMaxCustom(props.theme.min.l, props.theme.max.l)} {
      width: 393px;
    }
    ${mixins.mq.MinL} {
      flex: 1;
    }
  }
`
