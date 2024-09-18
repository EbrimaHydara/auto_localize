import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const BoxApp = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.monotone97};
  ${mixins.mq.MinL} {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 24px;
  }
`

export const AppIcon = styled.div`
  img {
    width: 96px;
  }
  ${mixins.mq.MaxM} {
    text-align: center;
  }
  ${mixins.mq.MinL} {
    width: calc(96px + 24px);
  }
`

export const AppTxt = styled.div`
  ${mixins.mq.MaxM} {
    margin-top: 16px;
    text-align: center;
  }
  ${mixins.mq.MinL} {
    width: calc(100% - 120px);
  }
`

export const AppTtl = styled.p`
  line-height: 1.4;
  font-size: 20px;
  font-weight: 700;
  ${mixins.mq.MaxM} {
    text-align: center;
  }
`

export const AppLink = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 16px;
  ${mixins.mq.MaxM} {
    width: fit-content;
    margin-inline: auto;
  }
  ${mixins.mq.MaxS} {
    gap: 16px 3px;
    width: auto;
    justify-content: space-between;
  }

  ${AppTtl} + & {
    margin-top: 16px;
    ${mixins.mq.MaxM} {
      margin-top: 32px;
    }
  }

  > li {
    ${mixins.mq.MaxS} {
      width: calc(50% - 3px);
    }
    &:last-child {
      ${mixins.mq.MaxS} {
        width: 100%;
      }
    }
  }
`
