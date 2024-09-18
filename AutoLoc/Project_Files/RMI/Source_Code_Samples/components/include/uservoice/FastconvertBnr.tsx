import { assets } from '@components/utils/assets'
import React from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { BannerHover } from '@components/atoms/Banner'

const CardList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
  user-select: none;

  ${mixins.mq.MinL} {
    gap: 24px;
    margin-top: 24px;
  }

  > li {
    width: 100%;
    ${mixins.mq.MinL} {
      ${mixins.col.ColWidth(2, '24px')}
    }
  }

  img {
    pointer-events: none;
    @media print {
      display: none;
    }
  }
`
interface FastconvertBnrProps {
  mt?: string
  className?: string
  directory: string
}

export const FastconvertBnr = ({
  mt = '32',
  className,
  directory,
}: FastconvertBnrProps) => {
  const theme = useContext(ThemeContext)

  return (
    <div className={Utils[`Mt-${mt}`]}>
      <CardList as="ul">
        <li>
          <div
            className={
              className
                ? `${Utils['Align-center']} ${className}`
                : Utils['Align-center']
            }
          >
            <BannerHover
              href={`https://network.mobile.rakuten.co.jp/guide/mnp/fast-convert/?l-id=uservoice_${directory}_guide_mnp_fast-convert`}
            >
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/bnr-fast-convert-343-108-231201.png`}
                  width="656"
                  height="371"
                />
                <img
                  src={`${assets}img/bnr/bnr-fast-convert-504-158-231201.png`}
                  width="1032"
                  height="160"
                  alt="電話番号そのまま！MNP予約番号なしで乗り換えできる！MNPワンストップ  Webでの申し込みがさらに簡単に。乗り換えるなら楽天モバイル"
                  loading="lazy"
                />
              </picture>
            </BannerHover>
          </div>
        </li>
        <li>
          <div
            className={
              className
                ? `${Utils['Align-center']} ${className}`
                : Utils['Align-center']
            }
          >
            <BannerHover
              href={`https://network.mobile.rakuten.co.jp/sumakatsu/?l-id=uservoice_${directory}_media_gnavi`}
            >
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/bnr/media-mobile-328-185.png`}
                  width="656"
                  height="371"
                />
                <img
                  src={`${assets}img/bnr/bnr-sumakatsu-504-158-230524.png`}
                  width="1032"
                  height="160"
                  alt="スマ活 わかる！スマホ活用術"
                  loading="lazy"
                />
              </picture>
            </BannerHover>
          </div>
        </li>
      </CardList>
    </div>
  )
}
