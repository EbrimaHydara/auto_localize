import styled from 'styled-components'

export const FormListBasic = styled.dl`
  @media screen and (min-width: ${props => props.theme.min.l}) {
    border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  }
  > div {
    @media screen and (min-width: ${props => props.theme.min.l}) {
      display: flex;
      border-top: 1px solid ${props => props.theme.colors.monotone75};
    }
    > dt {
      background: ${props => props.theme.colors.monotone93};
      font-weight: bold;
    }
  }
`
export const FormList = styled(FormListBasic)`
  > div {
    > dt {
      padding: 16px;
      font-size: 20px;
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
        padding: 24px 16px;
        font-size: 16px;
      }
    }
    > dd {
      padding: 24px 16px 64px;
      background-color: ${props => props.theme.colors.white};
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc(
          (100% + ${props => props.theme.gap.l} * 2) / 3 * 2 +
            ${props => props.theme.gap.l}
        );
        padding: 24px;
      }
    }
  }
`
export const FormListSub = styled.dl`
  margin-top: -16px;
  > div {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    margin-top: 16px;
    margin-right: 24px;
    > dt {
      margin-right: 16px;
    }
  }
`
export const FormListRequired = styled.span`
  margin-left: 12px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.s};
  font-weight: bold;
`
export const FormListOption = styled.span`
  margin-left: 12px;
  color: ${props => props.theme.colors.monotone40};
  font-size: ${props => props.theme.fonts.s};
  font-weight: bold;
`
export const FormListConfirm = styled(FormListBasic)`
  > div {
    > dt {
      padding: 8px;
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
        padding: 16px;
      }
    }
    > dd {
      padding: 8px 0 24px;
      background-color: ${props => props.theme.colors.white};
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc(
          (100% + ${props => props.theme.gap.l} * 2) / 3 * 2 +
            ${props => props.theme.gap.l}
        );
        padding: 16px 24px;
      }
    }
  }
`
