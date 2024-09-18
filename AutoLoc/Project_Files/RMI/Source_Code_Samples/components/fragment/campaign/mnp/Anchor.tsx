import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { anchorCallback } from '@components/utils/anchorCallback'
import { IconArrowDown } from '@components/icons'

const MnpAnchorList = styled.ul`
  display: grid;
  gap: 8px 16px;
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const MnpAnchor = styled.a`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 56px;
  padding: 10px 36px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.monotone75};
  color: ${props => props.theme.colors.monotone30};
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.monotone93};
    color: ${props => props.theme.colors.monotone30};
  }
  &:active {
    background-color: ${props => props.theme.colors.monotone88};
    color: ${props => props.theme.colors.monotone30};
  }
  .arrow-down {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 24px;
    height: 24px;
    left: 8px;
    color: ${props => props.theme.colors.pink100};
  }
`

export interface CampaignMnpAnchorProps {
  href: string
  text: string | JSX.Element
  ratid?: string
}

export const CampaignMnpAnchorList: React.FC<{
  props: CampaignMnpAnchorProps[]
}> = ({ props }) => {
  return (
    <MnpAnchorList>
      {props.map((v, i) => (
        <li key={i}>
          <MnpAnchor
            href={`#${v.href}`}
            onClick={e => anchorCallback(e, v.href)}
            data-ratid={v.ratid}
            data-ratevent={v.ratid && 'click'}
            data-ratparam={v.ratid && 'all'}
          >
            <IconArrowDown className="arrow-down" />
            {v.text}
          </MnpAnchor>
        </li>
      ))}
    </MnpAnchorList>
  )
}
