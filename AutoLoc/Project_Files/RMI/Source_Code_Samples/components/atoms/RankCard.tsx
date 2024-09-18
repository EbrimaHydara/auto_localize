import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { CardNormal } from '@components/atoms/Card'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { RankLabel } from '@components/atoms/RankLabel'
import { LazyLoadImage } from '@components/atoms/EmblaCarouselLazyLoadImage'
import { useRouter } from 'next/router'

const CardNormalCustom = styled(CardNormal)`
  position: relative;
  padding: 16px 8px 12px;
  border-radius: 4px;
`

const GridBox = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const GridImg = styled.img`
  max-width: max-content;
  width: 100%;
  height: 124px;
  overflow: hidden;
  ${mixins.mq.MaxM} {
    height: auto;
  }
`
const GridTitle = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
`
const GridPrice = styled.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: normal;
  color: ${props => props.theme.colors.lightBlack};
  > span {
    font-size: 16px;
  }
`
export interface rankListProps {
  summary: any
  selectDeviceName: string
  lazy?: boolean
  inView: boolean
  suffix?: string
}
export const RankCard: React.FC<rankListProps> = ({
  summary,
  selectDeviceName,
  lazy = true,
  suffix,
  inView,
}) => {
  const [imgPathState, setImgPathState] = useState<string>()
  const [isAppleState, updateIsAppleState] = useState<boolean>()

  const getPageType = (pathname: string, dividedPath: string[]) => {
    if (dividedPath[1] !== 'product' && dividedPath[1] !== 'product_b') return

    const numberOfSlash = pathname.match(/\//g)?.length ?? 0
    if (numberOfSlash === 1) {
      return 'productTop'
    } else if (numberOfSlash === 2) {
      if (dividedPath[2] === 'smartphone') {
        return 'eachSmartphone'
      } else if (dividedPath[2] === 'iphone') {
        return 'eachIphone'
      }
    }
  }
  const imgPath = useCallback(
    (isApples: boolean) => {
      const param = summary.update?.trim() ? `?${summary.update.trim()}` : ''
      const productType = isApples ? 'iphone/' : ''
      const imgPathState = `${assets}img/product/${productType}${summary.directory.trim()}/rank-thumb.png${param}`
      setImgPathState(imgPathState)
    },
    [summary],
  )

  const router = useRouter()
  const pathname = router.pathname

  const linkPath = () => {
    const dividedPath = pathname.split('/')
    const checkValue = getPageType(pathname, dividedPath)
    const productType = isAppleState ? 'iphone' : 'smartphone'
    const baseLink = `/product/${productType}/${summary.directory.trim()}/`

    let lId = ''
    if (checkValue === 'productTop') {
      lId = `?l-id=product_ranking_product_${productType}_${summary.directory.trim()}${
        suffix || ''
      }`
    } else {
      lId = `?l-id=product_${productType}_ranking_product_${productType}_${summary.directory.trim()}${
        suffix || ''
      }`
    }

    return `${baseLink}${lId}`
  }

  const getDeviceRankingThisMonth = (device: string) => {
    return device === 'both'
      ? summary['rank-this-month']
      : summary['rank-add-this-month']
  }

  useEffect(() => {
    const isApples =
      summary.manufacturer && summary.manufacturer.trim() === 'Apple'
    imgPath(isApples)
    updateIsAppleState(isApples)
  }, [summary, imgPath, updateIsAppleState])

  return (
    <>
      <CardNormalCustom className="slideItem" href={linkPath()}>
        <RankLabel
          ranking={getDeviceRankingThisMonth(selectDeviceName)}
        ></RankLabel>
        <GridBox>
          <div className={`${Utils['Align-center']}`}>
            {lazy ? (
              <LazyLoadImage
                imgSrc={imgPathState ? imgPathState : ''}
                width="136"
                height="124"
                alt={summary.alt}
                inView={inView}
              />
            ) : (
              <GridImg
                src={imgPathState}
                alt={summary.alt}
                width="136"
                height="124"
              />
            )}
          </div>
          <GridTitle>{summary.product}</GridTitle>
          {isAppleState ? (
            <GridPrice>
              <span>{(+summary.payment1).toLocaleString()}</span>円~
            </GridPrice>
          ) : (
            <GridPrice>
              <span>{(+summary.price2).toLocaleString()}</span>円
            </GridPrice>
          )}
        </GridBox>
      </CardNormalCustom>
    </>
  )
}
