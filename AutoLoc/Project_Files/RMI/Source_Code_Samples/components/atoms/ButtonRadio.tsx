import React from 'react'
import styled from 'styled-components'

export const Radio = styled.label`
  display: inline-block;
  cursor: pointer;
`
export const RadioInput = styled.input<{ vertical?: boolean }>`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  &:checked + span {
    background-color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.primary};
    padding: ${({ vertical }) => (vertical === true ? '7px 31px' : '14px')};
    > span:first-of-type {
      border: 8px solid ${props => props.theme.colors.primary};
    }
  }
  &:disabled {
    + span {
      background-color: ${props => props.theme.colors.monotone97};
      border: 1px solid ${props => props.theme.colors.monotone88};
      cursor: default;
      > span:first-of-type {
        border: 1px solid ${props => props.theme.colors.monotone88};
        background-color: ${props => props.theme.colors.monotone97};
        cursor: default;
        + span {
          color: ${props => props.theme.colors.monotone88};
        }
      }
      &:hover {
        padding: ${({ vertical }) => (vertical ? '8px 32px' : '15px')};
      }
    }
  }
  &:checked:disabled {
    + span {
      padding: ${({ vertical }) => (vertical ? '8px 32px' : '15px')};
      > span:first-of-type {
        border: 8px solid ${props => props.theme.colors.monotone75};
      }
    }
  }
  &[aria-invalid='true'] + span {
    border-color: ${props => props.theme.colors.alert};
    background-color: ${props => props.theme.colors.alertBg};
    > span:first-of-type {
      border-color: ${props => props.theme.colors.alert};
      background-color: ${props => props.theme.colors.alertBg};
      color: ${props => props.theme.colors.alertBg};
    }
    &:hover {
      border: 2px solid ${props => props.theme.colors.monotone40};
      background-color: ${props => props.theme.colors.white};
      padding: ${({ vertical }) => (vertical ? '7px 31px' : '14px')};
      > span:first-of-type {
        border: 1px solid ${props => props.theme.colors.monotone40};
        background-color: ${props => props.theme.colors.white};
      }
    }
  }
  &[aria-invalid='true']:checked {
    + span {
      background-color: ${props => props.theme.colors.white};
      border-color: ${props => props.theme.colors.primary};
      > span:first-of-type {
        border: 8px solid ${props => props.theme.colors.primary};
      }
    }
  }
  &[aria-invalid='true']:disabled {
    + span {
      border: 1px solid ${props => props.theme.colors.monotone88};
      background-color: ${props => props.theme.colors.monotone97};
      > span:first-of-type {
        border-color: ${props => props.theme.colors.monotone88};
        background-color: ${props => props.theme.colors.monotone97};
        + span:nth-of-type(2) {
          color: ${props => props.theme.colors.monotone88};
        }
      }
      padding: ${({ vertical }) => (vertical ? '8px' : '15px')};
    }
  }
`

export const RadioWrap = styled.span<{ vertical?: boolean }>`
  display: ${({ vertical }) => (vertical ? 'flex' : 'inline-block')};
  align-items: ${({ vertical }) => (vertical ? 'center' : '')};
  flex-flow: ${({ vertical }) => (vertical ? 'column' : '')};
  width: 100%;
  vertical-align: middle;
  padding: ${({ vertical }) => (vertical ? '8px 32px' : '15px')};
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-radius: 4px;
  line-height: 1;
  text-align: ${({ vertical }) => (vertical ? 'center' : 'left')};
  cursor: pointer;
  background-color: ${props => props.theme.colors.white};
  &:hover {
    border: 2px solid ${props => props.theme.colors.monotone40};
    padding: ${({ vertical }) => (vertical ? '7px 31px' : '14px')};
  }
  @media screen and (max-width: 769px) {
    padding: ${({ vertical }) => (vertical ? '8px 32px' : '15px')};
    &:hover {
      padding: ${({ vertical }) => (vertical ? '7px 31px' : '14px')};
    }
  }
`

export const RadioIcon = styled.span<{ vertical?: boolean }>`
  display: ${({ vertical }) => (vertical ? 'block' : 'inline-block')};
  width: 24px;
  height: 24px;
  margin: ${({ vertical }) => (vertical ? '' : '0 -24px 0 0')};
  border: 1px solid ${props => props.theme.colors.monotone40};
  border-radius: 12px;
  vertical-align: middle;
  text-align: center;
  line-height: 18px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
`

export const RadioContent = styled.span<{ vertical?: boolean }>`
  display: inline-block;
  white-space: pre-line;
  vertical-align: middle;
  color: ${props => props.theme.colors.black};
  line-height: 1.54;
  padding: ${({ vertical }) => (vertical ? '4px 0 0' : '0 0 0 32px')};
`

const RadioContainer = styled.div``

const RadioFlexContainer = styled.div<{ size?: string; gap?: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => (props.gap ? `${props.gap}px` : '16px')};
  ${props =>
    !props.size &&
    `
      font-size: 14px;
      line-height: 1.5;
  `}
  ${props =>
    props.size === 'xl' &&
    `
      font-size: ${props.theme.fonts.xl};
      line-height: 1.3;
  `}
  ${props =>
    props.size === 'll' &&
    `
      font-size: ${props.theme.fonts.ll};
      line-height: 1.4;
    `}
  ${props =>
    props.size === 'l' &&
    `
    font-size: ${props.theme.fonts.l};
    line-height: 1.4;
  `}
  ${props =>
    props.size === 'm' &&
    `
    font-size: ${props.theme.fonts.m};
    line-height: 1.4;
  `}
  ${props =>
    props.size === 's' &&
    `
    font-size: ${props.theme.fonts.s};
    line-height: 1.5;
  `}
  ${props =>
    props.size === 'ss' &&
    `
    font-size: ${props.theme.fonts.ss};
    line-height: 1.5;
  `}
`

export const RadioFlexInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  &:checked + span {
    > span:first-of-type {
      border: 8px solid ${props => props.theme.colors.primary};
    }
  }
`

export interface SelectList {
  inputName?: string
  id?: string
  name?: string
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  text: string | JSX.Element
  value: string
  role?: string
  vertical?: boolean
  autoComplete?: string
  ratid?: string
  className?: string
  contentClassName?: string
  aria_hidden?: boolean
  ref?: any
}

export interface RadioProps {
  select: SelectList[]
  className?: string
  invalid?: boolean
  onChangeCheck?: RadioOnSelectedChange
  as?: any
  size?: string
  gap?: number
}

export type RadioOnSelectedChange = (selectedIndex?: string) => void

export const ButtonRadio = React.forwardRef((props: RadioProps, ref) => {
  const { select, onChangeCheck, className, invalid, as } = props

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    if (onChangeCheck) {
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
          aria-hidden={value.aria_hidden}
        >
          <Radio
            data-ratid={value.ratid}
            data-ratevent={value.ratid && 'click'}
            data-ratparam={value.ratid && 'all'}
          >
            <RadioInput
              type="radio"
              name={value.name}
              id={value.id}
              value={value.value}
              defaultChecked={value.defaultChecked}
              disabled={value.disabled}
              aria-invalid={invalid}
              onChange={onChange}
              vertical={value.vertical}
              autoComplete={value.autoComplete}
              ref={value.ref}
              checked={value.checked}
            />
            <RadioWrap role={value.role} vertical={value.vertical}>
              <RadioIcon vertical={value.vertical} />
              <RadioContent
                vertical={value.vertical}
                className={value.contentClassName}
              >
                {value.text}
              </RadioContent>
            </RadioWrap>
          </Radio>
        </RadioContainer>
      ))}
    </>
  )
})

export const ButtonRadioFlex = (props: RadioProps) => {
  const { select, onChangeCheck, className, invalid, as, size, gap } = props

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    if (onChangeCheck) {
      onChangeCheck(value)
    }
  }

  return (
    <>
      <RadioFlexContainer size={size} gap={gap}>
        {select.map((value, index) => (
          <RadioContainer
            key={index}
            className={value.className ? value.className : className}
            as={as}
            aria-hidden={value.aria_hidden}
          >
            <Radio
              data-ratid={value.ratid}
              data-ratevent={value.ratid && 'click'}
              data-ratparam={value.ratid && 'all'}
            >
              <RadioFlexInput
                type="radio"
                name={value.name}
                id={value.id}
                value={value.value}
                defaultChecked={value.defaultChecked}
                disabled={value.disabled}
                aria-invalid={invalid}
                onChange={onChange}
                autoComplete={value.autoComplete}
                ref={value.ref}
              />
              <span role={value.role}>
                <RadioIcon vertical={value.vertical} />
                <RadioContent
                  vertical={value.vertical}
                  className={value.contentClassName}
                >
                  {value.text}
                </RadioContent>
              </span>
            </Radio>
          </RadioContainer>
        ))}
      </RadioFlexContainer>
    </>
  )
}
