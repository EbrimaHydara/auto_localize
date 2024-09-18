import React from 'react'
import styled from 'styled-components'
import { IconCheck } from '@components/icons'

const Label = styled.label<{ vertical?: boolean }>`
  > span {
    > span:first-of-type {
      display: ${({ vertical }) => (vertical ? 'block' : 'inline-block')};
      width: 24px;
      height: 24px;
      margin: ${({ vertical }) => (vertical ? 'auto' : '0 -24px 0 0')};
      border-radius: 4px;
      vertical-align: middle;
      text-align: center;
      background-color: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.monotone40};
      color: ${props => props.theme.colors.white};
      font-weight: 700;
      line-height: 18px;
      font-size: 14px;
      &::before {
        position: relative;
        top: 1px;
      }
    }
    > span:nth-of-type(2) {
      padding: ${({ vertical }) => (vertical ? '4px 0 0' : '0 0 0 32px')};
      display: inline-block;
      vertical-align: middle;
      color: ${props => props.theme.colors.monotone20};
      line-height: 1.54;
    }
  }
`
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  &:focus {
    + span {
      background-color: ${props => props.theme.colors.white};
    }
  }
  &:checked {
    + span {
      background-color: ${props => props.theme.colors.white};
      border: 2px solid ${props => props.theme.colors.primary};
      padding: 15px;
      > span:first-of-type {
        background-color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
      }
      &:hover {
        border: 2px solid ${props => props.theme.colors.primary};
      }
    }
  }
  &:disabled {
    + span {
      border: 1px solid ${props => props.theme.colors.monotone88};
      background-color: ${props => props.theme.colors.monotone97};
      pointer-events: none;
      cursor: default;
      > span:first-of-type {
        background-color: ${props => props.theme.colors.monotone97};
        border: 1px solid ${props => props.theme.colors.monotone88};
        color: ${props => props.theme.colors.monotone97};
      }
      > span:nth-of-type(2) {
        color: ${props => props.theme.colors.monotone75};
      }
    }
  }
  &:checked:disabled {
    + span {
      border: 1px solid ${props => props.theme.colors.monotone88};
      background-color: ${props => props.theme.colors.monotone97};
      > span:nth-of-type(2) {
        color: ${props => props.theme.colors.monotone75};
      }
      > span:first-of-type {
        background-color: ${props => props.theme.colors.monotone75};
        border: solid 1px ${props => props.theme.colors.monotone75};
        color: ${props => props.theme.colors.monotone97};
      }
    }
  }
  &[aria-invalid='true'] {
    + span {
      border-color: ${props => props.theme.colors.alert};
      background-color: ${props => props.theme.colors.alertBg};
      > span:first-of-type {
        border: 1px solid ${props => props.theme.colors.alert};
        background-color: ${props => props.theme.colors.alertBg};
        color: ${props => props.theme.colors.alertBg};
      }
    }
    &:hover {
      + span {
        background-color: ${props => props.theme.colors.white};
        border: 2px solid ${props => props.theme.colors.monotone40};
        > span:first-of-type {
          background-color: ${props => props.theme.colors.white};
          border-color: ${props => props.theme.colors.monotone40};
        }
      }
    }
    &:checked {
      + span {
        background-color: ${props => props.theme.colors.white};
        border: 2px solid ${props => props.theme.colors.primary};
        padding: 15px;
        > span:first-of-type {
          background-color: ${props => props.theme.colors.primary};
          border-color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`

const Wrap = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-radius: 4px;
  line-height: 1;
  cursor: pointer;
  &:hover {
    padding: 15px;
    border: 2px solid ${props => props.theme.colors.monotone40};
  }
`

const Sub = styled.p`
  font-size: ${props => props.theme.fonts.s};
`
export type CheckedChange = (current?: boolean) => void
export interface CheckboxBorderProps {
  inputName: string
  id: string
  value: string
  disabled: boolean
  checked?: boolean
  invalid?: boolean
  text: string | JSX.Element
  sub?: string
  onChangeCheck?: CheckedChange
  vertical?: boolean
  ratid?: string
}

export const CheckboxBorder = (props: CheckboxBorderProps) => {
  const subCheck = () => (props.sub ? <Sub>{props.sub}</Sub> : '')
  const { checked } = props

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    if (value && props.onChangeCheck) {
      props.onChangeCheck(event.target.checked)
    }
  }

  return (
    <>
      <Label
        vertical={props.vertical}
        data-ratid={props.ratid}
        data-ratevent={props.ratid && 'click'}
        data-ratparam={props.ratid && 'all'}
      >
        <Input
          type="checkbox"
          name={props.inputName}
          id={props.id}
          value={props.value}
          disabled={props.disabled}
          aria-invalid={props.invalid}
          checked={checked}
          onChange={onChange}
        />
        <Wrap>
          <IconCheck />
          <span className="label">
            {props.text}
            {subCheck()}
          </span>
        </Wrap>
      </Label>
    </>
  )
}
