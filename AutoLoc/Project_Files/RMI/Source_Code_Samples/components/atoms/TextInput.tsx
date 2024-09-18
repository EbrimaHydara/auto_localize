import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`
const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  padding: 16px;
  border: 1px solid
    ${({ isError }) =>
      isError === true ? '#e60000' : props => props.theme.colors.uiBlue20};
  border-radius: 4px;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  &::placeholder {
    color: ${props => props.theme.colors.darkBlue20};
  }
  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.uiBlue80};
  }
`
const Display = styled.div`
  display: flex;
`
const ErrorMessage = styled.span`
  color: #e60000;
  display: block;
  padding-top: 0.25rem;
  font-size: 0.75rem;
  color: #e60000;
`

interface TextInputProps {
  className?: string
  required?: boolean
  defaultValue?: string
  children?: React.ReactElement
  placeholder?: string
  verifyDuringInput?: (e: string) => boolean
  inputValue?: (e: string) => void
  errorDuringInput?: (e: string) => string
  changeValueStyle?: (e: string) => string
  valueFormatInput?: (e: string) => string
}

export const TextInput = (props: TextInputProps) => {
  const {
    className,
    required,
    placeholder,
    defaultValue,
    inputValue,
    verifyDuringInput,
    errorDuringInput,
    changeValueStyle,
    valueFormatInput,
  } = props
  const [errorMsg, setErrorMsg] = React.useState('')
  const initValue = defaultValue ? defaultValue : ''
  const [value, setValue] = React.useState(initValue)
  function onChange(e: any) {
    const value = e.target.value
    if (verifyDuringInput) {
      if (verifyDuringInput(value) === true) {
        if (valueFormatInput) {
          const valueFormat = valueFormatInput(value)
          setValue(valueFormat)
        } else setValue(value)
      }
    } else setValue(value)

    if (value === '' && required === true) {
      setErrorMsg('')
    } else {
      setErrorMsg('')
    }
  }
  function onBlur(e: any) {
    const value = e.target.value
    if (value === '' && required === true) {
      setErrorMsg('')
    } else {
      setErrorMsg('')
    }
    if (changeValueStyle) {
      const newValue = changeValueStyle(value)
      setValue(newValue)
    }
    if (errorDuringInput && value !== '') setErrorMsg(errorDuringInput(value))
  }

  React.useEffect(() => {
    setValue(initValue)
  }, [initValue])

  React.useEffect(() => {
    if (inputValue) {
      if (errorDuringInput) {
        if (errorDuringInput(value) === '') inputValue(value)
        else inputValue('')
      } else {
        inputValue(value)
      }
    }
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <Display>
        <Input
          isError={errorMsg !== ''}
          size={10}
          className={className}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {props.children}
      </Display>
      <ErrorMessage>{errorMsg !== '' ? errorMsg : ''}</ErrorMessage>
    </Wrapper>
  )
}
