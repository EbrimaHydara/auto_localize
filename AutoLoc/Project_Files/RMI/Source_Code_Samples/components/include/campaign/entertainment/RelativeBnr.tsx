import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { LinkNormal } from '@components/atoms/Link'

const BnrList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;
  ${mixins.mq.MaxM} {
    flex-wrap: wrap;
  }
  ${mixins.mq.MaxS} {
    flex-direction: column;
  }

  > li {
    width: calc(100% / 3);
    text-align: center;
    ${mixins.mq.MaxM} {
      width: calc((100% - 24px) / 2);
    }
    ${mixins.mq.MaxS} {
      width: 100%;
      height: auto;
    }
  }
  picture,
  img {
    width: 100%;
  }
`

type BnrInfo = {
  path: string
  lId?: string
  imgPath: string
  alt: string
}
type BnrSize = {
  width: number
  height: number
}
type CpnBnrListProps = {
  bnrs: BnrInfo[]
  size: BnrSize
}

/*
  PC/TAB/SP img 共通
  PC:  3column
  TAB: 2column
  SP:  1column
*/
export const CampaignEntertainmentRelativeBnr: React.FC<CpnBnrListProps> = ({
  bnrs,
  size,
}) => {
  return (
    <BnrList>
      {bnrs.map(bnr => {
        const { path, imgPath, alt } = bnr
        const existLId = !!bnr.lId
        const href = `${path}${existLId ? `?l-id=${bnr.lId}` : ''}`
        const src = `${assets}${imgPath}`
        return (
          <li key={path}>
            <LinkNormal href={href}>
              <picture>
                <img src={src} {...size} loading="lazy" alt={alt} />
              </picture>
            </LinkNormal>
          </li>
        )
      })}
    </BnrList>
  )
}
