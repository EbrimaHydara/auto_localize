import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const DescriptionListDefault = styled.dl`
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  > div {
    border-top: 1px solid ${props => props.theme.colors.monotone75};
    > dd {
      padding: 16px 16px 24px;
      background: ${props => props.theme.colors.white};
    }
    > dt {
      padding: 16px;
      font-weight: 700;
      background: ${props => props.theme.colors.monotone93};
    }
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    > div {
      display: flex;
      justify-content: space-between;
      > dt {
        ${mixins.col.ColWidth(3, '16px')}
        font-weight: bold;
      }
      > dd {
        padding: 16px 0;
        width: calc((100% - 16px * 2) / 3 * 2 + 16px);
      }
    }
  }
`
export const DescriptionListDefaultSp2Col = styled.dl`
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  > div {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => props.theme.colors.monotone75};
    > dt {
      padding: 16px;
      font-weight: bold;
      background: ${props => props.theme.colors.monotone93};
      width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
      min-width: 112px;
      @media screen and (max-width: ${props => props.theme.max.m}) {
        padding: 16px 8px;
      }
    }
    > dd {
      padding: 16px 16px 16px 0;
      width: calc(
        (100% - ${props => props.theme.gap.l} * 2) / 3 * 2 +
          ${props => props.theme.gap.l}
      );
      background: ${props => props.theme.colors.white};
      @media screen and (max-width: ${props => props.theme.max.m}) {
        width: calc(
          (100% - ${props => props.theme.gap.s} * 2) / 3 * 2 +
            ${props => props.theme.gap.s}
        );
        padding: 16px 8px 16px 0;
      }
    }
  }
`
export const DescriptionListSimple = styled.dl`
  border-bottom: 1px solid ${props => props.theme.colors.monotone75};
  background-color: ${props => props.theme.colors.white};
  > div {
    border-top: 1px solid ${props => props.theme.colors.monotone75};
    padding-top: 16px;
    padding-bottom: 16px;
    @media screen and (min-width: ${props => props.theme.min.l}) {
      display: flex;
    }

    > dt {
      font-size: ${props => props.theme.fonts.s};
      color: ${props => props.theme.colors.lightBlack};

      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc((100% - ${props => props.theme.gap.l} * (4 - 1)) / 4);
        margin-right: ${props => props.theme.gap.l};
      }
    }
    > dd {
      @media screen and (max-width: ${props => props.theme.max.m}) {
        padding-top: 16px;
      }
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: calc(
          (100% - ${props => props.theme.gap.l} * 2) / 4 * 3 +
            ${props => props.theme.gap.l}
        );
      }
    }
  }
`
