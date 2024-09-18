import styled from 'styled-components'

export const SystemWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  word-wrap: break-word;
`

export const SystemContainer = styled.div`
  width: 100%;
  max-width: ${props => props.theme.max.l};
  margin: 0 auto;
  padding: 0 ${props => props.theme.garter};
  box-sizing: border-box;
`

export const SystemGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // PC  2 : 1
  @media screen and (min-width: ${props => props.theme.min.l}) {
    .gridMain {
      width: calc(
        (100% - ${props => props.theme.gap.l} * 2) / 3 * 2 +
          ${props => props.theme.gap.l}
      );
      margin-right: ${props => props.theme.gap.l};
    }
    .gridSide {
      width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
    }
  }
`
