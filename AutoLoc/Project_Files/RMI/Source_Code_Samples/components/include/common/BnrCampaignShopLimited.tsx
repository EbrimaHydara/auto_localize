import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { Heading, HeadingLevel } from '@components/atoms/Heading'
import { RecommendCarousel } from '@components/molecules/RecommendCarousel'
import { useGenerateId } from '@components/utils/useGenerateId'

type BnrCampaignShopLimitedProps = {
  headingText?: string
  level?: HeadingLevel
  lazy?: boolean
}

export const BnrCampaignShopLimited = ({
  headingText,
  level,
  lazy = true,
}: BnrCampaignShopLimitedProps) => {
  type BnrList = Array<{
    id: string
    url: string
    img: string
    alt: string
    target?: string
  }>

  const { generateId } = useGenerateId()
  const recommendBnrs: BnrList = [
    {
      //パンダデザインshop_240315
      id: generateId(),
      url: '/shop/panda-desgin-shop/?l-id=shop_include_shop_panda-desgin-shop',
      img: `${assets}img/bnr/bnr-panda-design-shop-328-185-240220.png`,
      alt: '楽天モバイルショップ全店舗がお買いものパンダデザインにリニューアル！',
    },
    {
      //お買いものパンダLINEスタンプ_240315
      id: generateId(),
      url: 'https://event.rakuten.co.jp/okaimonopanda/line/mobileshop/?scid=wi_grp_gmx_linemobileshop_mno_shop_include_campaign',
      img: `${assets}img/bnr/bnr-panda-line-stamp-328-185.png`,
      alt: 'お買いものパンダ「最強ポジティブ」LINEスタンプGET！',
      target: '_blank',
    },
  ]

  return (
    <div>
      <Heading level={level ? level : '2'}>
        {headingText ? headingText : 'ショップ限定キャンペーン'}
      </Heading>
      <div className={Utils['Mt-24']}>
        <RecommendCarousel bannerList={recommendBnrs} lazy={lazy} />
      </div>
    </div>
  )
}
