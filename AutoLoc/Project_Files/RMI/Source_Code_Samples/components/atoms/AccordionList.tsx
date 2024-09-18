import { mixins } from '@components/utils/Mixins'
import React, { useState } from 'react'
import { Collapse, CollapseCallbackArgs } from 'react-collapse'
import styled from 'styled-components'
import { IconChevronRight } from '@components/icons'
import { fontRakutenSans } from '@styles/fonts'

export const AcoordionWrapper = styled.div`
  position: relative;
  border-top: 1px solid ${props => props.theme.colors.monotone75};
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  & + & {
    border-top: none;
  }
`
export const AccordionTrigger = styled.button`
  position: relative;
  width: 100%;
  padding: 16px 16px 16px 30px;
  text-align: left;
  background-color: inherit;
  z-index: 1;
  &[aria-expanded='true'] {
    font-weight: bold;
  }
  &:hover {
    background-color: ${props => props.theme.colors.monotone97};
  }
`
export const AccordionIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 22px;
  height: 22px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  overflow: hidden;
  > span {
    display: block;
    width: 22px;
    height: 22px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    line-height: 22px;
    transition: transform 0.1s ease-in-out;
    position: absolute;
    &.isOpen {
      top: 0;
      transform: rotate(270deg);
    }
    &.isClose {
      top: 1;
      transform: rotate(90deg);
    }
  }
`
export const CollapseWrapper = styled.div`
  .accordionlist-collapse {
    transition: height 600ms;
    &[aria-hidden='true'] {
      display: block;
    }
  }
  .accordionlist-collapse-content {
    padding: 16px 0 24px;
    overflow: hidden;
  }
`
export const AcoordionEmpWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
`
export const AccordionEmpTrigger = styled(AccordionTrigger)`
  padding: 16px 24px 16px 70px;
  font-size: ${props => props.theme.fonts.m};
  font-weight: bold;
  ${mixins.mq.MaxM} {
    padding: 16px 24px 16px 56px;
    font-size: ${props => props.theme.fonts.base};
  }
`
export const AccordionEmpIcon = styled(AccordionIcon)`
  left: 24px;
  width: 30px;
  height: 30px;
  > span {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  ${mixins.mq.MaxM} {
    width: 24px;
    height: 24px;
    left: 16px;
    > span {
      width: 24px;
      height: 24px;
      line-height: 24px;
    }
  }
`
export const AccordionEmpStep = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-family: ${fontRakutenSans.style.fontFamily};
  margin-right: 24px;
`
export const AccordionEmpTxt = styled.span`
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`
export const CollapseEmpWrapper = styled(CollapseWrapper)`
  .accordionlist-collapse-content {
    margin: 0 24px;
    ${mixins.mq.MaxM} {
      margin: 0 16px;
    }
  }
`
export const CollapseEmpStepWrapper = styled(CollapseEmpWrapper)`
  .accordionlist-collapse-content {
    border-top: 1px solid ${props => props.theme.colors.monotone75};
  }
`
const theme = {
  collapse: 'accordionlist-collapse',
  content: 'accordionlist-collapse-content',
}

export interface AccordionListProps {
  text: string | JSX.Element
  isOpened: boolean
  children?: React.ReactNode
  onRest?: (args: CollapseCallbackArgs) => void
  onWork?: (args: CollapseCallbackArgs) => void
  className?: string
  id?: string
  useCallback?: boolean
  openState?: boolean
  updateOpenState?: React.Dispatch<React.SetStateAction<boolean>>
  wrapperStyle?: React.CSSProperties
  ratid?: string
  step?: boolean
}

export const AccordionList = (props: AccordionListProps) => {
  const [open, setOpen] = useState(props.isOpened)

  return (
    <>
      {!props.useCallback ? (
        <AcoordionWrapper
          className={props.className}
          id={props.id}
          style={props.wrapperStyle}
        >
          <AccordionTrigger
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(v => !v)}
            data-ratid={props.ratid}
            data-ratevent={props.ratid && 'click'}
            data-ratparam={props.ratid && 'all'}
            type="button"
          >
            <AccordionIcon>
              <IconChevronRight className={open ? 'isOpen' : 'isClose'} />
            </AccordionIcon>
            {props.text}
          </AccordionTrigger>
          <CollapseWrapper>
            <Collapse isOpened={open} theme={theme}>
              {props.children}
            </Collapse>
          </CollapseWrapper>
        </AcoordionWrapper>
      ) : (
        <AcoordionWrapper className={props.className} id={props.id}>
          <AccordionTrigger
            aria-expanded={props.openState ? 'true' : 'false'}
            onClick={() => {
              if (props.updateOpenState) {
                props.updateOpenState((v: boolean) => !v)
              }
            }}
            data-ratid={props.ratid}
            data-ratevent={props.ratid && 'click'}
            data-ratparam={props.ratid && 'all'}
            type="button"
          >
            <AccordionIcon>
              <IconChevronRight
                className={props.openState ? 'isOpen' : 'isClose'}
              />
            </AccordionIcon>
            {props.text}
          </AccordionTrigger>
          <CollapseWrapper>
            <Collapse isOpened={props.openState!} theme={theme}>
              {props.children}
            </Collapse>
          </CollapseWrapper>
        </AcoordionWrapper>
      )}
    </>
  )
}

export const AccordionListEmp = (props: AccordionListProps) => {
  const [open, setOpen] = useState(props.isOpened)

  return (
    <>
      {!props.useCallback ? (
        <AcoordionEmpWrapper
          className={props.className}
          id={props.id}
          style={props.wrapperStyle}
        >
          <AccordionEmpTrigger
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(v => !v)}
            data-ratid={props.ratid}
            data-ratevent={props.ratid && 'click'}
            data-ratparam={props.ratid && 'all'}
            type="button"
          >
            <AccordionEmpIcon>
              <IconChevronRight className={open ? 'isOpen' : 'isClose'} />
            </AccordionEmpIcon>
            {props.text}
          </AccordionEmpTrigger>

          {!props.step ? (
            <CollapseEmpWrapper>
              <Collapse isOpened={open} theme={theme}>
                {props.children}
              </Collapse>
            </CollapseEmpWrapper>
          ) : (
            <CollapseEmpStepWrapper>
              <Collapse isOpened={open} theme={theme}>
                {props.children}
              </Collapse>
            </CollapseEmpStepWrapper>
          )}
        </AcoordionEmpWrapper>
      ) : (
        <AcoordionEmpWrapper className={props.className} id={props.id}>
          <AccordionEmpTrigger
            aria-expanded={props.openState ? 'true' : 'false'}
            onClick={() => {
              if (props.updateOpenState) {
                props.updateOpenState((v: boolean) => !v)
              }
            }}
            data-ratid={props.ratid}
            data-ratevent={props.ratid && 'click'}
            data-ratparam={props.ratid && 'all'}
            type="button"
          >
            <AccordionEmpIcon>
              <IconChevronRight
                className={props.openState ? 'isOpen' : 'isClose'}
              />
            </AccordionEmpIcon>
            {props.text}
          </AccordionEmpTrigger>
          {!props.step ? (
            <CollapseEmpWrapper>
              <Collapse isOpened={props.openState!} theme={theme}>
                {props.children}
              </Collapse>
            </CollapseEmpWrapper>
          ) : (
            <CollapseEmpStepWrapper>
              <Collapse isOpened={props.openState!} theme={theme}>
                {props.children}
              </Collapse>
            </CollapseEmpStepWrapper>
          )}
        </AcoordionEmpWrapper>
      )}
    </>
  )
}
