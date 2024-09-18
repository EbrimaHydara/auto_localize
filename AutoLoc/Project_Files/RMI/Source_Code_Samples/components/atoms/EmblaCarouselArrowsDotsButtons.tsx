import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'

const PrevNext = styled.button`
  position: relative;
  border-radius: 100%;
  font-size: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: ${props => props.theme.colors.white};

  &:disabled {
    pointer-events: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.06);
  }
  &:hover {
    ${mixins.mq.MinL} {
      border-width: 2px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &::before {
    display: inline-block;
  }
  &:disabled {
    &::before {
      opacity: 0.429;
    }
  }
`

const Prev = styled(PrevNext)`
  &::before {
    content: url(${assets}img/common/carousel-v2-prev.svg);
  }
`
const Next = styled(PrevNext)`
  &::before {
    content: url(${assets}img/common/carousel-v2-next.svg);
    transform: translateX(1px);
  }
`

const Dot = styled.button`
  position: relative;
  height: 8px;
  width: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  font-size: 0;
  pointer-events: none;
  ${mixins.mq.MinL} {
    pointer-events: all;
    width: 10px;
    height: 10px;
  }
  &.current,
  &:active {
    background-color: rgba(0, 0, 0, 0.56);
  }
  .multiple & {
    height: 5px;
    border-radius: 11px;
    flex-grow: 1;
  }
  &:hover,
  &:active {
    &::after {
      ${mixins.mq.MinL} {
        opacity: 1;
      }
    }
  }
  &.current {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    position: absolute;
    content: '';
    display: block;
    opacity: 0;
    border-radius: 50%;
    border: solid 1px rgba(0, 0, 0, 0.56);
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    .multiple & {
      border-radius: 11px;
    }
  }
`

type DotButtonPropType = {
  index: number
  selected: boolean
  onClick: () => void
  ariaLabel?: string
  ratId?: string
  ratEvent?: string
  ratParam?: string
  tabIndex?: number
  role?: string
}

export const DotButton: React.FC<DotButtonPropType> = props => {
  const {
    index,
    selected,
    onClick,
    ariaLabel,
    ratId,
    ratEvent,
    ratParam,
    role,
    tabIndex,
  } = props

  return (
    <Dot
      className={'dot'.concat(selected ? ' current' : '')}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      data-ratid={ratId}
      data-ratevent={ratEvent}
      data-ratparam={ratParam}
      tabIndex={tabIndex}
      role={role}
    >
      {index}
    </Dot>
  )
}

type PrevNextButtonPropType = {
  className: string
  enabled: boolean
  onClick: () => void
  ariaLabel?: string
  ratId?: string
  ratEvent?: string
  ratParam?: string
}

export const PrevButton: React.FC<PrevNextButtonPropType> = props => {
  const { className, enabled, onClick, ariaLabel, ratId, ratEvent, ratParam } =
    props

  return (
    <Prev
      type="button"
      className={className ? `prevButton ${className}` : 'prevButton'}
      onClick={onClick}
      disabled={!enabled}
      aria-label={ariaLabel}
      data-ratid={ratId}
      data-ratevent={ratEvent}
      data-ratparam={ratParam}
    >
      Previous
    </Prev>
  )
}

export const NextButton: React.FC<PrevNextButtonPropType> = props => {
  const { className, enabled, onClick, ariaLabel, ratId, ratEvent, ratParam } =
    props

  return (
    <Next
      type="button"
      className={className ? `nextButton ${className}` : 'nextButton'}
      onClick={onClick}
      disabled={!enabled}
      aria-label={ariaLabel}
      data-ratid={ratId}
      data-ratevent={ratEvent}
      data-ratparam={ratParam}
    >
      Next
    </Next>
  )
}
