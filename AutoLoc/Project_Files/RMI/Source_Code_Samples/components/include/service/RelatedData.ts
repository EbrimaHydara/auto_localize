import { assets } from '@components/utils/assets'
export interface CardData {
  id: string
  url: string
  img: string
  alt?: string
  title: string
  target?: string
  lid?: string
}

export const ServiceRelatedData: CardData[] = [
  {
    id: 'replacement-warranty-plus',
    url: '/service/replacement-warranty-plus/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/replacement-warranty-plus-220825.png`,
    alt: '',
    title: 'スマホ交換保証プラス',
    target: '',
    lid: '',
  },
  {
    id: 'replacement-warranty-sim',
    url: '/service/replacement-warranty-sim/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/replacement-warranty-sim-231101.png`,
    alt: '',
    title: '持ち込みスマホあんしん保証',
    target: '',
    lid: '',
  },
  {
    id: 'applecare',
    url: '/service/iphone/applecare-icloud/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/apple-care-240221.png`,
    alt: '',
    title: '故障紛失保証 with AppleCare Services & iCloud+',
    target: '',
    lid: '',
  },
  {
    id: 'applewatch-care',
    url: '/service/applewatch-care/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/apple-care-220825.png`,
    alt: '',
    title: 'あんしん保証with AppleCare Services for Apple Watch',
    target: '',
    lid: '',
  },
  {
    id: 'number-share',
    url: '/service/number-share/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/number-share-230608.png`,
    alt: '',
    title: '電話番号シェアサービス',
    target: '',
    lid: '',
  },
  {
    id: 'remote-support-for-device-operation',
    url: '/service/remote-support-for-device-operation/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/remote-support-for-device-operation-220825.png`,
    alt: '',
    title: 'スマホ操作遠隔サポート',
    target: '',
    lid: '',
  },
  {
    id: 'i-filter',
    url: '/service/i-filter/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/i-filter-220825.png`,
    alt: '',
    title: 'あんしんコントロール by i-フィルター',
    target: '',
    lid: '',
  },
  {
    id: 'rakumail-portability',
    url: '/service/rakumail-portability/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/rakumail-220825.png`,
    alt: '',
    title: '楽メール持ち運び',
    target: '',
    lid: '',
  },
  {
    id: 'select-number',
    url: '/service/select-number/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/select-number-220825.png`,
    alt: '',
    title: '選べる電話番号サービス',
    target: '',
    lid: '',
  },
  {
    id: 'rakutenmobile-wifi',
    url: '/service/rakutenmobile-wifi/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/rakutenmobile-wifi-231002.png`,
    alt: '',
    title: '楽天モバイルWiFi by エコネクト',
    target: '',
    lid: '',
  },
  {
    id: 'international-unlimited-talk',
    url: '/service/international-unlimited-talk/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/international-unlimited-talk-220825.png`,
    alt: '',
    title: '国際通話かけ放題',
    target: '',
    lid: '',
  },
  {
    id: 'data-charge',
    url: '/service/data-charge/?l-id=service-footer-other_service_',
    img: `${assets}img/service/related/data-charge-220825.png`,
    alt: '',
    title: 'データチャージ',
    target: '',
    lid: '',
  },
]
