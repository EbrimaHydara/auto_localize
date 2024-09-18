import styled from 'styled-components'

export const HikariSectionMain = styled.div`
  position: relative;
  padding-top: 32px;
  margin-bottom: 64px;
`

export const HikariSectionMainLogo = styled.div`
  max-width: ${props => props.theme.max.l};
  padding: 0 16px;
  margin: 0 auto 8px;
`

export const HikariSectionMainCap = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  text-align: right;
  width: 100%;
  max-width: ${props => props.theme.max.l};
  padding: 0 16px;
  transform: translateX(-50%);
`

export const HikariSectionMainLead = styled.div`
  margin-top: 24px;
`

export const HikariSectionSubBare = styled.div`
  margin-top: 0;
`

export const HikariSectionSubShort = styled.div`
  margin-top: 48px;
`

export const HikariSectionSubTall = styled.div`
  margin-top: 64px;
`

export const HikariSectionSubContentShort = styled.div`
  margin-top: 8px;
`

export const HikariSectionSubContentMiddle = styled.div`
  margin-top: 16px;
`

export const HikariSectionSubContentTall = styled.div`
  margin-top: 24px;
`
