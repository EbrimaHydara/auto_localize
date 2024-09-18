import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const FeeFamilyAnchorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${mixins.mq.MinL} {
    gap: 16px;
  }
  > li {
    display: flex;
    text-align: center;
    ${mixins.mq.MaxM} {
      + li {
        border-left: 1px solid ${props => props.theme.colors.monotone75};
      }
    }
  }
`
export const FeeFamilyAnchor = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 56px;
  padding: 10px 36px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.monotone30};
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  padding: 10px 44px 10px 32px;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone93};
    color: ${props => props.theme.colors.monotone30};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone88};
    color: ${props => props.theme.colors.monotone30};
  }
  .arrow-down,
  .icon {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${props => props.theme.colors.pink100};
  }
  .icon {
    right: 8px;
    font-size: 32px;
  }
  .arrow-down {
    width: 24px;
    height: 24px;
    left: 8px;
  }
  ${mixins.mq.MaxM} {
    flex-direction: column-reverse;
    padding: 0;
    row-gap: 2px;
    border: none;
    font-size: 13px;
    height: 100%;
    justify-content: start;
    line-height: 110%;
    .icon {
      font-size: 24px;
      position: unset;
    }
    .arrow-down {
      display: none;
    }
    .text {
      height: 100%;
      display: grid;
      place-content: center;
    }
  }
`
