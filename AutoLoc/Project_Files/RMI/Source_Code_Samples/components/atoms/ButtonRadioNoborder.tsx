import React from 'react'
import styled from 'styled-components'

const Radio = styled.label`
  display: inline-block;
  &:hover {
    input:not(:checked, :disabled) {
      + span {
        border: 2px solid ${props => props.theme.colors.monotone40};
        background: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.white};
      }
      &:checked {
        + span {
          background-color: ${props => props.theme.colors.white};
          border-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.white};
        }
      }
    }
  }
`

const RadioInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  &:checked + span {
    border-style: solid;
    border-width: 8px;
    border-color: ${props => props.theme.colors.primary};
  }

  &:disabled + span {
    border: 1px solid ${props => props.theme.colors.monotone88};
    cursor: default;
    + span {
      color: ${props => props.theme.colors.monotone75};
      cursor: default;
    }
  }
  &:checked:disabled {
    + span {
      border: 8px solid ${props => props.theme.colors.monotone75};
    }
  }
  &[aria-invalid='true'] {
    + span {
      border-color: ${props => props.theme.colors.alert};
      background-color: ${props => props.theme.colors.alertBg};
      color: ${props => props.theme.colors.alertBg};
    }
    &:checked {
      + span {
        border: 8px solid ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.white};
      }
    }
    &:hover {
      + span {
        background: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.monotone40};
        color: ${props => props.theme.colors.white};
      }
      &:checked {
        + span {
          background-color: ${props => props.theme.colors.white};
          border-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.white};
        }
      }
    }
  }
`

const RadioIcon = styled.span`
  line-height: 18px;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: -24px;
  border: 1px solid ${props => props.theme.colors.monotone40};
  border-radius: 12px;
  vertical-align: middle;
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.colors.monotone40};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
  }
`

const RadioContent = styled.span`
  display: inline-block;
  white-space: pre-line;
  vertical-align: top;
  padding-top: 2px;
  padding-left: 32px;
  cursor: pointer;
`

const RadioContainer = styled.div``

type RadioOnSelectedChange = (val?: string, id?: string) => void
export interface SelectList {
  inputName?: string
  id?: string
  name?: string
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  text: string | JSX.Element
  value: string
  valid?: object
  className?: string
}

export interface ButtonRadioNoBorderProps {
  select: SelectList[]
  name?: string // 既存のselect内のinputName消してこれはrequiredにしたい
  className?: string
  invalid?: boolean
  onChangeCheck?: RadioOnSelectedChange
  as?: any
}

export const ButtonRadioNoborder = React.forwardRef(
  (props: ButtonRadioNoBorderProps) => {
    const { select, className, invalid, onChangeCheck, as, name } = props
    const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
      const value = event.target.value
      const id = event.target.id
      if (onChangeCheck && id) {
        onChangeCheck(value, id)
      } else if (onChangeCheck) {
        onChangeCheck(value)
      }
    }

    return (
      <>
        {select.map((value, index) => (
          <RadioContainer
            key={index}
            className={value.className ? value.className : className}
            as={as}
          >
            <Radio>
              <RadioInput
                type="radio"
                name={name ? name : value.inputName}
                id={value.id}
                value={value.value}
                defaultChecked={value.defaultChecked}
                disabled={value.disabled}
                aria-invalid={invalid}
                onChange={onChange}
              />
              <RadioIcon />
              <RadioContent>{value.text}</RadioContent>
            </Radio>
          </RadioContainer>
        ))}
      </>
    )
  },
)
