import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const CarouselWrapper = styled.div`
  &.slick-dotted.slick-slider {
    margin-bottom: 0;
  }
  .slick-slide {
    margin: 0 8px;
    &.has-loading {
      ${mixins.mq.MaxM} {
        max-height: calc(100vw * 0.512);
      }
      background: url($slick-loader-path + 'ajax-loader.gif') no-repeat center
        center;
    }
  }
  .slick-loading {
    opacity: 0;
  }
`
export const CarouselNav = styled.div`
  position: relative;
  padding: 0 40px;
  margin-top: 16px;
  .prev,
  .next {
    width: 32px;
    height: 32px;
    top: 0;
    cursor: pointer;
    border: none;
    outline: none;
    &:before,
    &:after {
      content: '';
      position: absolute;
    }
    &:before {
      top: 6px;
      left: 6px;
      font-size: 21px;
      z-index: 2;
    }
    &:after {
      width: 32px;
      height: 32px;
      top: 0;
      left: 0;
      z-index: 1;
      border: 1px solid ${props => props.theme.colors.monotone56};
      border-radius: 100%;
      background-color: ${props => props.theme.colors.white};
    }
    &:hover {
      &:after {
        background-color: ${props => props.theme.colors.monotone93};
      }
    }
    &:active {
      &:after {
        background-color: ${props => props.theme.colors.monotone88};
      }
    }
    &[class^='c-Icon_'],
    &[class*=' c-Icon_'] {
      position: absolute;
      font-size: 0;
    }
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
`
