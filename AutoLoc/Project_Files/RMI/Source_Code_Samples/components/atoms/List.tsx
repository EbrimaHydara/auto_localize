import React from 'react'
import styled from 'styled-components'
import { fontRakutenSans } from '@styles/fonts'

export const UlOnly = styled.ul`
  li {
    padding-left: 16px;
    text-indent: -16px;
    margin-top: 1em;
    &:first-child {
      margin-top: 0;
    }
    &:before {
      content: '';
      display: inline-block;
      margin-right: 8px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      vertical-align: middle;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.monotone56};
    }
  }
`
export const UlEmpOnly = styled.ul`
  li {
    padding-left: 16px;
    text-indent: -16px;
    margin-top: 1em;
    &:first-child {
      margin-top: 0;
    }
    &:before {
      content: '';
      display: inline-block;
      margin-right: 8px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      vertical-align: middle;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.primary};
    }
  }
`
export const OlOnly = styled.ol`
  counter-reset: number;
  li {
    position: relative;
    margin-top: 1em;
    padding-left: calc(0.8125em + 8px);
    &:first-child {
      margin-top: 0;
    }
    &::before {
      content: counter(number);
      counter-increment: number;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      line-height: 1.3;
      font-family: ${fontRakutenSans.style.fontFamily}, sans-serif;
      font-size: 125%;
      font-weight: bold;
    }
    ${UlOnly} {
      li {
        &:before {
          position: relative;
          content: '';
          counter-increment: none;
        }
      }
    }
  }
`

export interface ListContents {
  text?: string | JSX.Element
}

export interface ListProps {
  className?: string
  text: ListContents[]
}

export const ListDisc = (props: ListProps) => {
  const { className, text } = props
  return (
    <UlOnly className={className}>
      {text.map((value, index) => (
        <li key={index}>{value.text}</li>
      ))}
    </UlOnly>
  )
}

export const ListDiscEmp = (props: ListProps) => {
  const { className, text } = props
  return (
    <UlEmpOnly className={className}>
      {text.map((value, index) => (
        <li key={index}>{value.text}</li>
      ))}
    </UlEmpOnly>
  )
}

export const ListOrdered = (props: ListProps) => {
  const { className, text } = props
  return (
    <OlOnly className={className}>
      {text.map((value, index) => (
        <li key={index}>{value.text}</li>
      ))}
    </OlOnly>
  )
}
