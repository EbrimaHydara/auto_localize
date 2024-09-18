import React from 'react'
import styled from 'styled-components'
import { IconProductArrowSelect } from '@components/icons'

const Wrapper = styled.div<{ isError?: boolean }>`
  position: relative;
  > select {
    width: 100%;
    height: 40px;
    padding-right: 48px;
    padding-left: 16px;
    border: 1px solid
      ${({ isError }) =>
        isError ? props => props.theme.colors.alert : props => props.theme.colors.monotone40};
    border-radius: 4px;
    background-color:
      ${({ isError }) =>
        isError ? props => props.theme.colors.alertLightBg : props => props.theme.colors.white};
    cursor: pointer;
    color: #000;

    &[aria-invalid='true'] {
      border-color: ${props => props.theme.colors.alert};
      background: ${props => props.theme.colors.alertBg};
      &:hover {
        border: 2px solid ${props => props.theme.colors.monotone40};
        background: ${props => props.theme.colors.white};
      }
      &:focus,
      &:active {
        padding-right: 47px;
        padding-left: 15px;
        border: 2px solid ${props => props.theme.colors.primary};
        + span {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    &:hover {
      padding-right: 47px;
      padding-left: 15px;
      border: 2px solid ${props => props.theme.colors.monotone40};
    }

    &:focus,
    &:active {
      padding-right: 47px;
      padding-left: 15px;
      border: 2px solid ${props => props.theme.colors.primary};
      + span {
        color: ${props => props.theme.colors.primary};
      }
    }

    &:disabled {
      color: ${props => props.theme.colors.monotone75};
      border: 1px solid ${props => props.theme.colors.monotone88};
      background-color: ${props => props.theme.colors.monotone97};
      cursor: default;
      + span {
        color: ${props => props.theme.colors.monotone75};
      }
      &:hover,
      &:focus {
        padding-right: 48px;
        padding-left: 16px;
      }
    }
  }
`

const IconCustom = styled(IconProductArrowSelect)`
  right: 16px;
  line-height: 1;
  margin-top: -8px;
  color: ${props => props.theme.colors.monotone30};
  font-size: 16px;
  pointer-events: none;
  position: absolute;
  top: 50%;
`

export interface SelectOption {
  text: string
  value?: string
  disabled?: boolean
}

export type SelectOnSelectedChange = (value?: string) => void
export type SelectOnSelectedBlur = (value?: string) => void
export interface SelectProps {
  className?: string
  options: SelectOption[]
  onSelectedChange?: SelectOnSelectedChange
  onBlurCallback?: SelectOnSelectedBlur
  currentSelected?: string
  disabled?: boolean
  invalid?: boolean
  id?: string
  name?: string
  size?: number
  autoComplete?: string
  isError?: boolean
}
export type Ref = HTMLSelectElement | null

export const Select = React.forwardRef<Ref, SelectProps>((props, ref) => {
  const {
    className,
    options,
    currentSelected,
    onSelectedChange,
    onBlurCallback,
    disabled,
    invalid,
    id,
    name,
    size,
    autoComplete,
    isError
  } = props

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSelectedChange) {
      onSelectedChange(event.target.value)
    }
  }
  const onBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    if (onBlurCallback) {
      onBlurCallback(event.target.value)
    }
  }

  return (
    <Wrapper className={className} isError={isError}>
      <select
        onChange={onChange}
        onBlur={onBlur}
        value={currentSelected}
        disabled={disabled}
        aria-invalid={invalid ? 'true' : 'false'}
        ref={ref}
        id={id}
        name={name}
        size={size}
        autoComplete={autoComplete}
      >
        {options.map((value, index) => (
          <option
            key={index}
            value={value.value}
            disabled={value.disabled}
          >
            {value.text}
          </option>
        ))}
      </select>
      <IconCustom />
    </Wrapper>
  )
})
