import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { Heading } from '@components/atoms/Heading'
import { assets } from '@components/utils/assets'
import { themes } from '@styles/theme/themes'

const CpnStepList = styled.ol`
  display: grid;
  row-gap: 24px;
  margin-top: 16px;
  ${mixins.mq.MaxM} {
    margin-top: 40px;
    row-gap: 40px;
  }
`
const CpnStepListItem = styled.li`
  display: grid;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colors.monotone75};
  position: relative;
  ${mixins.mq.MaxM} {
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 146px;
      height: 2px;
      background: ${props => props.theme.colors.pink5};
    }
  }
  ${mixins.mq.MinL} {
    grid-template-columns: 180px auto;
    overflow: hidden;
    border-radius: 16px;
  }
  .icon {
    display: grid;
    place-items: center;
    ${mixins.mq.MaxM} {
      position: absolute;
      top: -32px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 153px;
      width: 100%;
    }
    ${mixins.mq.MinL} {
      background: ${props => props.theme.colors.pink5};
      padding: 24px 0;
    }
  }
  .body {
    display: grid;
    row-gap: 12px;
    padding: 0 16px 24px;
    ${mixins.mq.MaxM} {
      .heading {
        padding: 30px 0 12px;
        margin: 0 -16px;
        background: ${props => props.theme.colors.pink5};
        text-align: center;
        border-radius: 8px 8px 0px 0px;
      }
    }
    ${mixins.mq.MinL} {
      padding: 24px 32px;
      align-content: start;
    }
  }
`

export interface CpnStepListProps {
  ttl: string
  text: string | JSX.Element
}

export const CampaignMnpStepListList: React.FC<{
  props: CpnStepListProps[]
}> = ({ props }) => {
  const theme = themes.light
  return (
    <CpnStepList>
      {props.map((v, i) => {
        const index = i + 1
        return (
          <CpnStepListItem>
            <div className="icon">
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/campaign/mnp/campaign-flow-step-${index}-sp.png`}
                  width="153"
                  height="56"
                />
                <img
                  src={`${assets}img/campaign/mnp/campaign-flow-step-${index}-pc.png`}
                  width="110"
                  height="132"
                  alt={`STEP${index}}`}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="body">
              <Heading level="3" className="heading">
                {v.ttl}
              </Heading>
              {v.text}
            </div>
          </CpnStepListItem>
        )
      })}
    </CpnStepList>
  )
}
