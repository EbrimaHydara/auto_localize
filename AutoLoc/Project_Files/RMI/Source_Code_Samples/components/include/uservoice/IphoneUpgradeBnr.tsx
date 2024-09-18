import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BannerHover } from '@components/atoms/Banner'

type Props = {
  className?: string
  directory: string
  lazy?: boolean
  serialNumber?: string
}
export const IphoneUpgradeBnr = ({
  className,
  directory,
  lazy,
  serialNumber,
}: Props) => {
  const theme = useContext(ThemeContext)
  const releaseDate = '231222'
  return (
    <div
      className={
        className
          ? `${Utils['Align-center']} ${className}`
          : Utils['Align-center']
      }
    >
      <BannerHover
        href={`/service/replacement-program/?l-id=uservoice_${directory}_service_replacement-program${
          serialNumber && '_' + serialNumber
        }`}
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/replacement-program-328-185-${releaseDate}.png`}
            width="656"
            height="370"
          />
          <img
            src={`${assets}img/bnr/replacement-program-1032-160-${releaseDate}.png`}
            width="1032"
            height="160"
            alt="プラン申し込みがなくてもOK！楽天モバイル買い替え超トクプログラムで対象のiPhoneを購入すると、本体代が最大半額分支払い不要に！"
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      </BannerHover>
    </div>
  )
}
