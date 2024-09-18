import React from 'react'
import { DeviceIphone } from '@components/include/common/ProductType'
import { device_iphone } from '~/js/csv-data/device-iphone'
import { IphoneCard } from '@components/include/service/replacement-program/productlist/IphoneCard'
import { ProductItemWrap } from '@components/include/service/replacement-program/productlist/Styles'

type Props = {
  className?: string
}

// A component for importing device_iphone.js (device_iphone.csv) and passing it to the card component for display in a list.
export const IphoneList: React.FC<Props> = ({ className }) => {
  const rawData: DeviceIphone[] = [...device_iphone]
  return (
    <ProductItemWrap className={className}>
      {rawData.map(data => {
        return <IphoneCard key={data.directory?.trim()} item={data} />
      })}
    </ProductItemWrap>
  )
}
