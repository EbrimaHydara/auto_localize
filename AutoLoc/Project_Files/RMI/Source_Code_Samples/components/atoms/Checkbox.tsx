import React from 'react'
import styled from 'styled-components'
import { IconCheck } from '@components/icons'

const Label = styled.label`
  display: inline-block;
  &:hover {
    input:not(:checked, :disabled) {
      + span {
        border: 2px solid ${props => props.theme.colors.monotone40};
      }
    }
  }
  &:hover {
    input[aria-invalid='true'] {
      + span {
        background: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.monotone40};
        color: ${props => props.theme.colors.white};
      }
      &:checked {
        + span {
          background-color: ${props => props.theme.colors.primary};
          border-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.white};
        }
      }
    }
  }
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  + span {
    line-height: 18px;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: -24px;
    border: 1px solid ${props => props.theme.colors.monotone40};
    border-radius: 4px;
    vertical-align: middle;
    text-align: center;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
  &:focus {
    + span {
      border: 1px solid ${props => props.theme.colors.monotone75};
    }
  }
  &:checked {
    + span {
      background-color: ${props => props.theme.colors.primary};
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
  &:disabled {
    + span {
      border: 1px solid ${props => props.theme.colors.monotone75};
      + span {
        color: ${props => props.theme.colors.monotone75};
        cursor: default;
      }
    }
  }
  &:checked:disabled {
    + span {
      border-color: ${props => props.theme.colors.monotone75};
      background-color: ${props => props.theme.colors.monotone75};
      cursor: default;
      + span {
        color: ${props => props.theme.colors.monotone75};
        cursor: default;
      }
    }
  }

  &[aria-invalid='true'] {
    + span {
      border: 1px solid ${props => props.theme.colors.alert};
      background-color: ${props => props.theme.colors.alertBg};
      color: ${props => props.theme.colors.alertBg};
    }
    &:checked {
      + span {
        background-color: ${props => props.theme.colors.primary};
        border: 2px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
      }
    }
  }
`

const TxtInline = styled.span`
  display: inline-block;
  white-space: pre-line;
  vertical-align: top;
  padding-top: 2px;
  padding-left: 32px;
  cursor: pointer;
`
export type CheckedChange = (current?: boolean) => void

export interface CheckboxProps {
  className?: string
  inputName?: string
  id?: string
  value?: string
  disabled?: boolean
  checked?: boolean
  invalid?: boolean
  text: string | JSX.Element
  onChangeCheck?: CheckedChange
}

export const Checkbox = React.forwardRef((props: CheckboxProps, _ref) => {
  const { checked } = props
  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    if (value && props.onChangeCheck) {
      props.onChangeCheck(event.target.checked)
    }
  }

  return (
    <Label className={props.className}>
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
      <IconCheck />
      <TxtInline>{props.text}</TxtInline>
    </Label>
  )
})

export interface CheckboxFreedProps {
  className?: string
  inputName?: string
  id?: string
  value?: string
  disabled?: boolean
  checked?: boolean
  invalid?: boolean
  onChangeCheck?: CheckedChange
  children: React.ReactNode
}

export const CheckboxFreed: React.FC<CheckboxFreedProps> = props => {
  const { checked } = props
  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    if (value && props.onChangeCheck) {
      props.onChangeCheck(event.target.checked)
    }
  }

  return (
    <Label className={props.className}>
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
      <IconCheck />
      <div>{props.children}</div>
    </Label>
  )
}
