import styled, { css } from 'styled-components'

export const CpnListBlock = css`
  margin-top: 8px;
  > li {
    position: relative;
    padding-left: calc(1em + 2px);
    margin-top: 4px;
    &:first-child {
      margin-top: 0;
    }
    &::before {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      line-height: 1.3;
      font-weight: 400;
    }
  }
`
export const CpnTitleBlock = styled.p`
  position: relative;
  padding-left: 2.5em;
  margin-bottom: 8px;
  > span:nth-of-type(1) {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    line-height: 1.3;
  }
`

export const CpnParaBlock = styled.p`
  position: relative;
  padding-left: calc(1em + 2px);
  margin-bottom: 8px;
  > span {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.4;
    font-weight: 400;
  }
`

export const CpnListMark1 = styled.ul`
  ${CpnListBlock}
  line-height: 1.4;
  font-size: ${props => props.theme.fonts.ss};
  > li {
    &:before {
      content: '※';
    }
  }
`

export const CpnListMark1En = styled.ul`
  ${CpnListBlock}
  > li {
    padding-left: 0.5em;
    line-height: 1.4;
    font-size: ${props => props.theme.fonts.ss};
    &:before {
      top: 2px;
      content: '*';
    }
  }
`

export const CpnListMark1Nomark = styled(CpnParaBlock)`
  padding-left: 1.7em !important;
  &:before {
    content: none !important;
  }
`

export const CpnListMark2 = styled.ul`
  ${CpnListBlock}
  > li {
    padding-left: 12px;
    line-height: 1.4;
    font-size: ${props => props.theme.fonts.ss};
    &:before {
      content: '-';
    }
  }
`

export const CpnListMark2Normal = styled.ul`
  ${CpnListBlock}
  > li {
    padding-left: 12px;
    &:before {
      content: '-';
    }
  }
`

export const CpnListOrderedLv1 = styled.ol`
  ${CpnListBlock}
  counter-reset: number;
  > li {
    padding-left: 2.5em;
    &::before {
      content: '（' counter(number) '）';
      counter-increment: number;
      font-weight: 700;
      top: 2px;
    }
  }
`

export const CpnListOrderedLv2 = styled.ol`
  ${CpnListBlock}
  counter-reset: number;
  > li {
    padding-left: 2.5em;
    &::before {
      content: '（' counter(number) '）';
      counter-increment: number;
    }
  }
`

export const CpnListOrderedLv2En = styled.ol`
  ${CpnListBlock}
  counter-reset: number;
  > li {
    padding-left: 2.5em;
    &::before {
      content: '（' counter(number) '）';
      counter-increment: number;
      top: 2px;
    }
  }
`

export const CpnTitlelv1 = styled(CpnTitleBlock)`
  font-weight: 700;
  > span {
    font-weight: 700;
  }
`

export const CpnTitlelv2 = styled(CpnTitleBlock)``

export const CpnTitlelvMark2 = styled.p`
  position: relative;
  padding-left: 12px;
  > span {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    line-height: 1.3;
  }
`
