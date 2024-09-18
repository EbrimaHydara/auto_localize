import styled from 'styled-components'

export const Infobox = styled.div`
  padding: 24px;
  @media screen and (max-width: ${props => props.theme.min.l}) {
    padding: 16px;
  }
`
export const InfoboxBorder = styled(Infobox)`
  border: 1px;
  border-color: ${props => props.theme.colors.monotone75};
  border-style: solid;
`
export const InfoboxLight = styled(Infobox)`
  background-color: ${props => props.theme.colors.monotone97};
`
export const InfoboxEmphasis1 = styled(Infobox)`
  background-color: ${props => props.theme.colors.pink5};
`
export const InfoboxEmphasis2 = styled(Infobox)`
  background-color: ${props => props.theme.colors.yellow};
`
export const InfoboxWhite = styled(Infobox)`
  background-color: ${props => props.theme.colors.white};
`
export const InfoboxScroll = styled(Infobox)`
  background-color: ${props => props.theme.colors.white};
  height: 240px;
  overflow-y: scroll;
`
export const InfoboxAlert = styled(Infobox)`
  background-color: ${props => props.theme.colors.alertLightBg};
`
export const InfoboxInfo = styled(Infobox)`
  background-color: ${props => props.theme.colors.infoBg};
  border-color: ${props => props.theme.colors.info};
`
export const InfoboxSuccess = styled(Infobox)`
  background-color: ${props => props.theme.colors.successBg};
  border-color: ${props => props.theme.colors.success};
`
export const InfoboxWarning = styled(Infobox)`
  background-color: ${props => props.theme.colors.warningBg};
  border-color: ${props => props.theme.colors.warning};
`
