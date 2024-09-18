import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const CtaButtomFixedWrap = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding-block: 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);

  &[aria-expanded='false'] {
    bottom: -200px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
`
export const CtaButtomFixedTitleWrap = styled.span`
  display: inline-block;
`
export const CtaButtomFixedSubTxt = styled.span`
  font-size: 10px;
  font-weight: normal;
  ${mixins.mq.MinL} {
    font-size: ${props => props.theme.fonts.s};
    font-weight: bold;
  }
`
export const CtaButtomFixedInner = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  ${mixins.mq.MaxS} {
    column-gap: 8px;
  }
  .custom-btn {
    display: grid;
    place-items: center;
    font-size: ${props => props.theme.fonts.base};
    padding: 4px 16px;
    line-height: 1.4;
    min-height: 56px;
    ${mixins.mq.MaxM} {
      font-size: ${props => props.theme.fonts.s};
      max-width: 500px;
    }
    ${mixins.mq.MaxS} {
      padding: 8px 6px;
      width: 100%;
      flex: 1;
    }
  }
  &.multiple {
    .custom-btn {
      ${mixins.mq.MinM} {
        max-width: 100%;
      }
    }
  }
`
