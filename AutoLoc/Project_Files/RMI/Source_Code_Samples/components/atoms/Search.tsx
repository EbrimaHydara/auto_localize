import React from 'react'
import styled from 'styled-components'
import { IconSearch } from '@components/icons'

export const SearchContainer = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 56px 12px 16px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.white};

  &::placeholder {
    color: ${props => props.theme.colors.monotone40};
  }

  &:hover {
    background: ${props => props.theme.colors.pink5};
  }

  &:focus {
    border-width: 2px;
    background: ${props => props.theme.colors.white};
    padding: 11px 55px 11px 15px;
  }
`

export const SearchBtn = styled.div`
  position: absolute;
  top: 13px;
  right: 0;
  height: 48px;
  width: 48px;
  margin-top: -12px;
  background: ${props => props.theme.colors.primary};
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &:focus {
    margin-top: -11px;
  }
`

export const SearchSubmit = styled.input`
  visibility: hidden;
  width: 24px;
  height: 24px;
`

export const SearchIcon = styled(IconSearch)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  text-align: center;
  line-height: 48px;
  width: 48px;
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  &:focus {
    line-height: 46px;
  }
`

export interface SearchProps {
  className?: string
  inputValue?: string
  placeholder?: string
  submitBtnType?: string
  submitValue?: string
  onInputChange?: (event: string) => void
  onSubmitHandler?: (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void
  onFocusHandler?: React.FocusEventHandler
  onBlurHandler?: React.FocusEventHandler
}

export const Search = (props: SearchProps) => {
  const { onInputChange, onSubmitHandler, onFocusHandler, onBlurHandler } =
    props
  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    if (onInputChange) {
      onInputChange(value)
    }
  }
  const onClick: React.MouseEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    if (onSubmitHandler) {
      onSubmitHandler(event)
    }
  }
  const onFocus: React.FocusEventHandler = event => {
    event.preventDefault()
    if (onFocusHandler) {
      onFocusHandler(event)
    }
  }
  const onBlur: React.FocusEventHandler = event => {
    event.preventDefault()
    if (onBlurHandler) {
      onBlurHandler(event)
    }
  }
  return (
    <SearchContainer className={props.className}>
      <form onSubmit={onSubmitHandler}>
        <SearchInput
          type="text"
          placeholder={props.placeholder}
          value={props.inputValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <SearchBtn onClick={onClick}>
          <SearchSubmit type="submit" value={props.submitValue}></SearchSubmit>
          <SearchIcon />
        </SearchBtn>
      </form>
    </SearchContainer>
  )
}
