import React from 'react'
import { Collapse, CollapseCallbackArgs } from 'react-collapse'
import styled from 'styled-components'

const CollapseWrapper = styled.div`
  .accordion-collapse {
    transition: height 600ms;
  }

  [aria-hidden='true'] {
    display: block;
  }
`
const theme = {
  collapse: 'accordion-collapse',
}

export interface AccordionProps {
  isOpened: boolean
  children?: React.ReactNode
  onRest?: (args: CollapseCallbackArgs) => void
  onWork?: (args: CollapseCallbackArgs) => void
}

export const Accordion = (props: AccordionProps) => {
  return (
    <CollapseWrapper>
      <Collapse {...props} theme={theme}>
        {props.children}
      </Collapse>
    </CollapseWrapper>
  )
}
