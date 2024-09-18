import styled from 'styled-components'

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 84px;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.monotone40};
  border-radius: 4px;
  color: ${props => props.theme.colors.monotone20};
  background: ${props => props.theme.colors.white};
  &::placeholder {
    color: ${props => props.theme.colors.monotone40};
  }
  &:hover {
    padding: 15px;
    border: 2px solid ${props => props.theme.colors.monotone40};
  }
  &:focus {
    padding: 15px;
    border: 2px solid ${props => props.theme.colors.primary};
  }
  &:disabled {
    border: 1px solid ${props => props.theme.colors.monotone88};
    background: ${props => props.theme.colors.monotone97};
    &::placeholder {
      color: ${props => props.theme.colors.monotone75};
    }
    &:hover {
      padding: 16px;
    }
  }
  &[aria-invalid='true'] {
    border-color: ${props => props.theme.colors.alert};
    background: ${props => props.theme.colors.alertBg};
    &:hover {
      border: 2px solid ${props => props.theme.colors.monotone40};
      background: ${props => props.theme.colors.white};
    }
    &:focus {
      border: 2px solid ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.white};
    }
  }
`
