import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { CardNormal } from '@components/atoms/Card'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { HistoryDevice } from '@components/include/common/product/CardType'
import { LazyLoadImage } from '@components/atoms/EmblaCarouselLazyLoadImage'
import { useRouter } from 'next/router'

const CardNormalCustom = styled(CardNormal)`
  margin-inline: auto;
  padding: 8px 14.5px;
  ${mixins.mq.MinL} {
    padding: 8px 8px;
  }
`
const GridBox = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`
const GridImg = styled.img`
  height: 80px;
  overflow: hidden;
  ${mixins.mq.MaxM} {
    height: auto;
  }
`
const GridTitle = styled.h3`
  margin-top: 8px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
`

export interface rankListProps {
  summary: HistoryDevice
  index: number | string
  lazy?: boolean
  inView: boolean
  suffix?: string
}

export const HistoryCard: React.FC<rankListProps> = ({
  summary,
  index,
  inView,
  lazy,
  suffix,
  ...rest
}) => {
  const [dividedData, setDividedData] = useState({
    path: '',
    productName: '',
    time: '',
    img: '',
    link: '',
  })

  const getImgName = (path: string) => {
    return path.split('/').slice(-2, -1)[0]
  }

  const router = useRouter()

  const updateDeviceData = useCallback(() => {
    const pathname = router.pathname
    const dividedPath = pathname.split('/')
    const imgName = getImgName(summary.path)
    const isIphone = imgName.includes('iphone')
    const imgPath = `${assets}img/product/${
      isIphone ? 'iphone/' : ''
    }${imgName}/rank-thumb.png`
    const isProductTop = ['/product', '/product_b'].includes(pathname)
    const currentProduct = isProductTop
      ? 'top'
      : dividedPath[dividedPath.length - 1]
    const linkPath = `${summary.path}?l-id=product_${
      currentProduct ? `${currentProduct}_` : ''
    }history_${imgName}${suffix || ''}`
    setDividedData({
      ...summary,
      img: imgPath,
      link: linkPath,
    })
  }, [summary, suffix, router.pathname])

  useEffect(() => {
    updateDeviceData()
  }, [updateDeviceData])

  return (
    <>
      <CardNormalCustom
        className="slideItem"
        href={dividedData.link}
        key={index}
      >
        <GridBox>
          {lazy ? (
            <LazyLoadImage
              imgSrc={dividedData.img}
              width="80"
              height="80"
              alt={dividedData.productName}
              inView={inView}
            />
          ) : (
            <GridImg
              src={dividedData.img}
              alt={dividedData.productName}
              width="80"
              height="80"
            />
          )}
          <GridTitle>{dividedData.productName}</GridTitle>
        </GridBox>
      </CardNormalCustom>
    </>
  )
}
