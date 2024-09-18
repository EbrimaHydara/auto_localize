import styled, { css } from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const MediaImageV2 = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
`
const GridColumnPC = css`
  grid-template-columns: var(--ratio) 1fr;
`
const GridReverse = css`
  > :first-child {
    order: 2;
  }
  > :last-child {
    order: 1;
  }
`
const GridRowsReverse = css`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  ${GridReverse}
`
const GridColumnReversePC = css`
  grid-template-columns: 1fr var(--ratio);
  grid-template-rows: 1fr;
`
const FlexColumn = css`
  flex-direction: column;
  > :first-child,
  > :last-child {
    width: 100%;
  }
`
const FlexColumnReverse = css`
  flex-direction: column-reverse;
`
const FlexRowReverse = css`
  flex-direction: row-reverse;
`
const FlexColumnPC = css`
  flex-direction: row;
  > :first-child {
    width: var(--ratio);
  }
  > :last-child {
    flex: 1;
  }
`

export const MediaIconV2 = styled.div<{
  isFlex?: boolean
  isReverse?: boolean
}>`
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  column-gap: ${props => props.theme.gap.m};
  ${props => !props.isFlex && `grid-template-columns: 96px 1fr;`}
  ${props =>
    props.isReverse &&
    !props.isFlex &&
    `
    grid-template-columns: 1fr 96px;
    ${GridReverse}
    `}

  ${props =>
    props.isFlex &&
    `
    > :first-child {
      width: 96px;
    }
    > :last-child {
      flex: 1;
    }
    `}

  ${props => props.isReverse && props.isFlex && FlexRowReverse}
`

export const MediaGridV2 = styled.div<{
  isFlex?: boolean
  isReverse?: boolean
}>`
  --ratio: calc((100% - var(--gap) * 2) / 3);
  --gap: ${props => props.theme.gap.l};
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  gap: var(--gap);
  ${props => props.isFlex && FlexColumn}
  ${props => props.isReverse && !props.isFlex && GridRowsReverse}
  ${props => props.isReverse && props.isFlex && FlexColumnReverse}

  ${mixins.mq.MinL} {
    ${props => (!props.isFlex ? GridColumnPC : FlexColumnPC)}
    ${props => props.isReverse && !props.isFlex && GridColumnReversePC}
    ${props => props.isReverse && props.isFlex && FlexRowReverse}
  }
`

export const MediaGridSmallV2 = styled.div<{
  isFlex?: boolean
  isReverse?: boolean
}>`
  --ratio: calc((100% - var(--gap) * 3) / 4);
  --gap: ${props => props.theme.gap.l};
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  gap: var(--gap);
  ${props => props.isFlex && FlexColumn}
  ${props => props.isReverse && !props.isFlex && GridRowsReverse}
  ${props => props.isReverse && props.isFlex && FlexColumnReverse}

  ${mixins.mq.MinL} {
    ${props => (!props.isFlex ? GridColumnPC : FlexColumnPC)}
    ${props => props.isReverse && !props.isFlex && GridColumnReversePC}
    ${props => props.isReverse && props.isFlex && FlexRowReverse}
  }
`

export const MediaGridLargeV2 = styled.div<{
  isFlex?: boolean
  isReverse?: boolean
}>`
  --ratio: calc((100% - var(--gap) * 3) / 12 * 5 + var(--gap));
  --gap: ${props => props.theme.gap.l};
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  gap: var(--gap);
  ${props => props.isFlex && FlexColumn}
  ${props => props.isReverse && !props.isFlex && GridRowsReverse}
  ${props => props.isReverse && props.isFlex && FlexColumnReverse}

  ${mixins.mq.MinL} {
    ${props => (!props.isFlex ? GridColumnPC : FlexColumnPC)}
    ${props => props.isReverse && !props.isFlex && GridColumnReversePC}
    ${props => props.isReverse && props.isFlex && FlexRowReverse}
  }
`

export const MediaGridHalfV2 = styled.div<{
  isFlex?: boolean
  isReverse?: boolean
}>`
  --ratio: 1fr;
  --gap: ${props => props.theme.gap.l};
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  gap: var(--gap);
  ${props => props.isFlex && FlexColumn}
  ${props => props.isReverse && !props.isFlex && GridRowsReverse}
  ${props => props.isReverse && props.isFlex && FlexColumnReverse}

  ${mixins.mq.MinL} {
    ${props => (!props.isFlex ? GridColumnPC : FlexColumnPC)}
    ${props => props.isReverse && !props.isFlex && GridColumnReversePC}
    ${props => props.isReverse && props.isFlex && FlexRowReverse}
  }
`

export const MediaGridCaptureV2 = styled.div<{
  isFlex?: boolean
  isReverse?: boolean
}>`
  --ratio: calc((100% - var(--gap) * 2) / 3);
  --gap: ${props => props.theme.gap.l};
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  gap: var(--gap);
  ${props => props.isFlex && FlexColumn}
  ${props => props.isReverse && !props.isFlex && GridRowsReverse}
  ${props => props.isReverse && props.isFlex && FlexColumnReverse}

  ${mixins.mq.MinL} {
    ${props => (!props.isFlex ? GridColumnPC : FlexColumnPC)}
    ${props => props.isReverse && !props.isFlex && GridColumnReversePC}
    ${props => props.isReverse && props.isFlex && FlexRowReverse}
    > ${MediaImageV2} {
      text-align: ${props => (props.isReverse ? 'right' : 'left')};
    }
  }
`

export const MediaListV2 = styled.ul<{
  isFlex?: boolean
  colGap?: string
  rowGap?: string
  column: '2' | '3' | '4'
  justifyContent?: string
}>`
  --colGap: ${props =>
    props.colGap ? `${props.colGap}px` : props.theme.gap.l};
  --rowGap: ${props => (props.rowGap ? `${props.rowGap}px` : '40px')};
  display: ${props => (props.isFlex ? 'flex' : 'grid')};
  width: 100%;
  gap: var(--rowGap) var(--colGap);

  ${props => {
    if (!props.isFlex) {
      switch (props.column) {
        case '4':
          return 'grid-template-columns: repeat(2, 1fr);'
        case '3':
        case '2':
          return 'grid-template-columns: 1fr;'
      }
    }
  }}

  ${props =>
    props.isFlex &&
    `
    flex-direction: column;
    flex-wrap: wrap;
    > div,
    > li {
      width: 100%;
    }
    `}

  ${mixins.mq.MinM} {
    ${props =>
      props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => {
      if (props.isFlex) {
        let width = ''
        switch (props.column) {
          case '4':
            width = 'calc((100% - (var(--colGap) * 2)) / 3)'
            break
          case '3':
          case '2':
            width = 'calc((100% - var(--colGap)) / 2)'
            break
        }
        return `
          flex-direction: row;
          > div,
          > li {
            width: ${width};
          }
        `
      } else {
        switch (props.column) {
          case '4':
            return 'grid-template-columns: repeat(3, 1fr);'
          case '3':
          case '2':
            return 'grid-template-columns: repeat(2, 1fr);'
        }
      }
    }}
  }
  ${mixins.mq.MinL} {
    ${props =>
      props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => {
      if (props.isFlex) {
        return `
          flex-direction: row;
          > div,
          > li {
            width: calc((100% - (var(--colGap) * (${props.column} - 1))) / ${props.column});
          }
        `
      } else {
        return `grid-template-columns: repeat(${props.column}, 1fr);`
      }
    }}
  }

  ${MediaImageV2} + div {
    margin-top: 24px;
  }
`
