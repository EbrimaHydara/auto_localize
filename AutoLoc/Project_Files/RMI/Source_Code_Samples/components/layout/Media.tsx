import styled from 'styled-components'

export const MediaImage = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
`
export const MediaIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  > div:first-child {
    width: 96px;
    margin-right: 16px;
  }
  > div:last-child {
    width: calc(100% - 112px);
  }
`

export const MediaGrid = styled.div`
  > div:first-child {
    width: calc((100% - 24px * (3 - 1)) / 3);
    margin-right: 24px;
  }
  > div:last-child {
    width: calc((100% - 24px * 2) / 3 * 2 + 24px);
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridSmall = styled(MediaGrid)`
  > div:first-child {
    width: calc((100% - ${props => props.theme.gap.l} * (4 - 1)) / 4);
    margin-right: ${props => props.theme.gap.l};
  }
  > div:last-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 3) / 4 * 3 +
        ${props => props.theme.gap.l} * 2
    );
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridLarge = styled(MediaGrid)`
  > div:first-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 3) / 12 * 5 +
        ${props => props.theme.gap.l}
    );
    margin-right: ${props => props.theme.gap.l};
  }
  > div:last-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 3) / 12 * 7 +
        ${props => props.theme.gap.l}
    );
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridHalf = styled(MediaGrid)`
  > div:first-child {
    width: calc((100% - ${props => props.theme.gap.l} * (2 - 1)) / 2);
    margin-right: ${props => props.theme.gap.l};
  }
  > div:last-child {
    width: calc((100% - ${props => props.theme.gap.l} * (2 - 1)) / 2);
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridReverse = styled.div`
  > div:first-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 2) / 3 * 2 +
        ${props => props.theme.gap.l}
    );
  }
  > div:last-child {
    width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
    margin-right: ${props => props.theme.gap.l};
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridSmallReverse = styled(MediaGridReverse)`
  > div:first-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 3) / 4 * 3 +
        ${props => props.theme.gap.l} * 2
    );
  }
  > div:last-child {
    width: calc((100% - ${props => props.theme.gap.l} * (4 - 1)) / 4);
    margin-right: ${props => props.theme.gap.l};
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridLargeReverse = styled(MediaGridReverse)`
  > div:first-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 3) / 12 * 7 +
        ${props => props.theme.gap.l}
    );
  }
  > div:last-child {
    width: calc(
      (100% - ${props => props.theme.gap.l} * 3) / 12 * 5 +
        ${props => props.theme.gap.l}
    );
    margin-right: ${props => props.theme.gap.l};
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridHalfReverse = styled(MediaGridReverse)`
  > div:first-child {
    width: calc((100% - ${props => props.theme.gap.l} * (2 - 1)) / 2);
  }
  > div:last-child {
    width: calc((100% - ${props => props.theme.gap.l} * (2 - 1)) / 2);
    margin-right: ${props => props.theme.gap.l};
  }
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridCapture = styled(MediaGrid)`
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    > div {
      width: calc(
        (100% - ${props => props.theme.gap.l} * 2) / 3 * 2 +
          ${props => props.theme.gap.l}
      );
      margin-right: 0;
    }
    > ${MediaImage} {
      text-align: left;
      width: calc((100% - ${props => props.theme.gap.l} * 2) / 3);
      margin-right: ${props => props.theme.gap.l};
    }
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaGridCaptureReverse = styled.div`
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 100%;
    > div {
      width: calc(
        (100% - ${props => props.theme.gap.l} * 2) / 3 * 2 +
          ${props => props.theme.gap.l}
      );
      margin-right: 0;
    }
    > ${MediaImage} {
      text-align: left;
      width: calc((100% - ${props => props.theme.gap.l} * 2) / 3);
      margin-right: ${props => props.theme.gap.l};
    }
  }
  @media screen and (max-width: ${props => props.theme.max.m}) {
    > div:first-child {
      width: 100%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
`
export const MediaListBase = styled.div`
  margin-top: -40px;
  @media screen and (min-width: ${props => props.theme.min.l}) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  ${MediaImage} {
    margin-bottom: 24px;
  }
  > div {
    margin-top: 40px;
  }
`
export const MediaList2 = styled(MediaListBase)`
  > div {
    @media screen and (min-width: ${props => props.theme.min.l}) {
      width: calc((100% - ${props => props.theme.gap.l} * (2 - 1)) / 2);
    }
    &:nth-child(2n) {
      @media screen and (min-width: ${props => props.theme.min.l}) {
        margin-left: ${props => props.theme.gap.l};
      }
    }
  }
`
export const MediaList3 = styled(MediaListBase)`
  > div {
    @media screen and (min-width: ${props => props.theme.min.l}) {
      width: calc((100% - ${props => props.theme.gap.l} * (3 - 1)) / 3);
      margin-left: ${props => props.theme.gap.l};
    }
    &:nth-child(3n + 1) {
      @media screen and (min-width: ${props => props.theme.min.l}) {
        margin-left: 0;
      }
    }
  }
`
