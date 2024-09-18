import React from 'react'
import styled from 'styled-components'

export const FlowList = styled.li`
  position: relative;
  padding: 16px;
  border: 1px solid #bfbfbf;
  @media screen and (min-width: ${props => props.theme.min.l}) {
    padding: 24px;
  }
  + li {
    margin-top: 44px;
  }
  + li::before {
    position: absolute;
    left: 50%;
    top: -39px;
    width: 32px;
    height: 32px;
    margin-left: -16px;
    color: ${props => props.theme.colors.pink100};
    font: 32px var(--rex-icon);
    text-align: center;
    content: '${props => props.theme.icon.rex.arrowDown}';
  }
`

export const Flow = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => {
  return <FlowList>{props.children}</FlowList>
}
