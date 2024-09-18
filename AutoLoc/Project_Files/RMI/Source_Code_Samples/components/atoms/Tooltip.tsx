import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { IconSignHelpFill, IconSignHelpLine } from '@components/icons'

const Span = styled.span`
  .__react_component_tooltip.show {
    opacity: 1;
  }
  .maxw {
    max-width: calc(100vw - 16px);
  }
`
const IconFill = styled(IconSignHelpFill)<{ isInfo?: boolean }>`
  ${props =>
    props.isInfo &&
    `
    &::before {
      content: '${props.theme.icon.rex.signInfoFill}';
    }
  `}
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`
const IconLine = styled(IconSignHelpLine)<{ isInfo?: boolean }>`
  ${props =>
    props.isInfo &&
    `
    &::before {
      content: '${props.theme.icon.rex.signInfoLine}';
    }
  `}
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
`
const IconStack = styled.span`
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
  line-height: 1em;
  color: ${props => props.theme.colors.link};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.linkHover};
    .tooltip-icon-fill {
      opacity: 1;
    }
    .tooltip-icon-line {
      opacity: 0;
    }
  }
  &:active {
    color: ${props => props.theme.colors.linkActive};
    .tooltip-icon-fill {
      opacity: 1;
    }
    .tooltip-icon-line {
      opacity: 0;
    }
  }
`
const TriggerWrapper = styled.span`
  display: inline-block;
  line-height: 1em;
  vertical-align: calc(0.5em - 8px);
`
const Trigger = styled.button`
  margin: 0 4px;
  vertical-align: -0.08em;
  display: inline-block;
  line-height: 16px;
  height: 16px;
  width: 16px;
  outline: 0;
  font-size: 16px;
`

export interface TooltipProps {
  id: string
  isInfo?: boolean
}

export const Tooltip = (props: React.PropsWithChildren<TooltipProps>) => {
  const { id, isInfo } = props
  return (
    <Span>
      <TriggerWrapper>
        <Trigger data-tip data-for={id}>
          <IconStack>
            <IconFill className="tooltip-icon-fill" isInfo={isInfo} />
            <IconLine className="tooltip-icon-line" isInfo={isInfo} />
          </IconStack>
        </Trigger>
      </TriggerWrapper>
      <ReactTooltip
        className="maxw"
        id={id}
        effect="solid"
        place="bottom"
        textColor="#333333"
        backgroundColor="#EDEDED"
        overridePosition={({ left, top }, _e, _t, node) => {
          return {
            top,
            left: typeof node === 'string' ? left : Math.max(left, 8),
          }
        }}
        afterShow={() => {
          const trigger = document.querySelector(`[data-for=${id}]`)
          let left = trigger
            ? trigger.getBoundingClientRect().left + 'px'
            : '50%'
          let style = document.createElement('style')
          style.textContent = `
              .place-bottom::after {
                left: ${left} !important;
              }
          `
          trigger && trigger.appendChild(style)
        }}
        afterHide={() => {
          const trigger = document.querySelector(`[data-for=${id}]`)
          const style = trigger && trigger.querySelector('style')
          trigger && style && trigger.removeChild(style)
        }}
      >
        {props.children}
      </ReactTooltip>
      <ReactTooltip />
    </Span>
  )
}
