import { assets } from '@components/utils/assets'
import {
  IconCampaignFill,
  IconCreditCardFill,
  IconDomesticAreaFill,
  IconListFill,
  IconMeatballHorizontalFill,
  IconNewUserFill,
  IconPriceFill,
  IconProductRakutenLink,
  IconRakutenAccountFill,
  IconSettingsFill,
  IconSignWarningFill,
} from '@components/icons'

export type Category = {
  category: string
  title: string
  icon: React.ComponentType<{}> | string
  menu: {
    name: string
    link: string
    target?: string
  }[]
}
export const members = [
  {
    category: 'm-contract-detail',
    title: '契約内容・お手続き',
    icon: IconRakutenAccountFill,
    menu: [
      {
        name: '契約内容の確認・変更',
        link: '/support/contract-detail/confirmation/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'SIMの交換・再発行',
        link: '/support/contract-detail/sim/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '解約・MNP転出',
        link: '/support/contract-detail/cancellation/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-payment',
    title: '請求・お支払い方法',
    icon: IconCreditCardFill,
    menu: [
      {
        name: '請求金額の確認',
        link: '/support/payment/bill/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '支払い方法の確認・変更',
        link: '/support/payment/payment/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '楽天モバイル キャリア決済',
        link: '/support/payment/google/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '未払い料金のお支払い',
        link: '/support/payment/invoice/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-area',
    title: 'エリア・データ通信・通話',
    icon: IconDomesticAreaFill,
    menu: [
      {
        name: 'エリアの確認',
        link: '/support/area/area/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'データ使用量',
        link: '/support/area/data/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'データ通信速度',
        link: '/support/area/connection/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'データ通信・通話の不具合',
        link: '/support/area/data-trouble/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-suspension',
    title: '盗難・紛失',
    icon: IconSignWarningFill,
    menu: [
      {
        name: 'スマートフォンの紛失・盗難',
        link: '/support/suspension/suspension/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-application',
    title: '申し込みからお受け取りまで',
    icon: IconListFill,
    menu: [
      {
        name: '他社からの乗り換え（MNP）',
        link: '/support/application/mnp/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '楽天モバイル（ドコモ回線・au回線）からの移行',
        link: '/support/application/migration/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '対応製品',
        link: '/support/application/compatible-device/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'お申し込み方法',
        link: '/support/application/flow/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '本人確認',
        link: '/support/application/verification/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '申し込み内容の確認・変更',
        link: '/support/application/confirmation/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '配送',
        link: '/support/application/delivery/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-setting',
    title: 'ご利用開始までの設定',
    icon: IconNewUserFill,
    menu: [
      {
        name: 'Android製品の設定手順',
        link: '/support/setting/android/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'iPhone・Apple Watchの設定手順',
        link: '/support/iphone/initial-setting/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-link',
    title: 'Rakuten Link',
    icon: IconProductRakutenLink,
    menu: [
      {
        name: 'ご利用開始までの設定',
        link: '/support/link/setting/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '通話サービス',
        link: '/support/link/voice/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '楽メール',
        link: '/support/link/rakumail/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'メッセージサービス',
        link: '/support/link/message/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'ニュース・ウォレット・ミッション',
        link: '/support/link/news/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '操作・設定・不具合',
        link: '/support/link/manual/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'その他',
        link: '/support/link/other/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-plan',
    title: 'プラン・サービス',
    icon: IconPriceFill,
    menu: [
      {
        name: 'プランの詳細',
        link: '/support/plan/detail/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '通話/通信サービス（国内）',
        link: '/support/plan/internal-voice/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '通話/通信サービス（国際）',
        link: '/support/plan/international-voice/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'メール・SMSサービス',
        link: '/support/plan/sms/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'オプションサービス',
        link: '/support/plan/service/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'my 楽天モバイル',
        link: '/support/plan/my-rakuten-mobile/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '下取りサービス',
        link: '/support/plan/tradein/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'その他',
        link: '/support/plan/other/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-product',
    title: '製品（Android）',
    icon: IconSettingsFill,
    menu: [
      {
        name: 'Rakuten Mini',
        link: '/support/product/mini/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Rakuten Hand',
        link: '/support/product/hand/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Rakuten Hand 5G',
        link: '/support/product/hand-5g/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Rakuten BIG',
        link: '/support/product/big/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Rakuten BIG s',
        link: '/support/product/big-s/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Rakuten Casa',
        link: '/support/product/casa/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Rakuten WiFi Pocket',
        link: '/support/product/wifi-pocket/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '設定・操作・故障',
        link: '/support/product/setting/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '製品保証サービス（Android）',
        link: '/support/product/product-warranty/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '機種変更の方法',
        link: '/support/product/upgrade/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-product',
    title: '製品（iPhone・Apple Watch）',
    icon: IconSettingsFill,
    menu: [
      {
        name: '製品',
        link: '/support/iphone/iphone/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '申し込みからお受け取りまで',
        link: '/support/iphone/application/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'ご利用開始までの設定',
        link: '/support/iphone/initial-setting/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '設定・操作・故障',
        link: '/support/iphone/setting/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '製品保証サービス（iPhone・Apple Watch）',
        link: '/support/iphone/product-warranty/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'Apple ID',
        link: '/support/iphone/apple-id/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-detail',
    title: 'キャンペーン',
    icon: IconCampaignFill,
    menu: [
      {
        name: '詳細内容の確認',
        link: '/support/price-discount/detail/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: '適用条件・確認',
        link: '/support/price-discount/point-granted/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
  {
    category: 'm-other',
    title: 'その他',
    icon: IconMeatballHorizontalFill,
    menu: [
      {
        name: '法人',
        link: '/support/other/business/?l-id=support_top_member_category',
        target: '',
      },
      {
        name: 'その他',
        link: '/support/other/other/?l-id=support_top_member_category',
        target: '',
      },
    ],
  },
]
export const preMembers = [
  {
    category: 'pm-plan',
    title: 'プラン・サービス',
    icon: IconPriceFill,
    menu: [
      {
        name: 'プランの詳細',
        link: '/support/plan/detail/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '通話/通信サービス（国内）',
        link: '/support/plan/internal-voice/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '通話/通信サービス（国際）',
        link: '/support/plan/international-voice/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: 'メール・SMSサービス',
        link: '/support/plan/sms/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: 'オプションサービス',
        link: '/support/plan/service/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: 'my 楽天モバイル',
        link: '/support/plan/my-rakuten-mobile/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '下取りサービス',
        link: '/support/plan/tradein/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: 'その他',
        link: '/support/plan/other/?l-id=support_top_pre-member_category',
        target: '',
      },
    ],
  },
  {
    category: 'pm-detail',
    title: 'キャンペーン',
    icon: IconCampaignFill,
    menu: [
      {
        name: '詳細内容の確認',
        link: '/support/price-discount/detail/?l-id=support_top_pre-_member_category',
        target: '',
      },
      {
        name: '適用条件・確認',
        link: '/support/price-discount/point-granted/?l-id=support_top_pre-member_category',
        target: '',
      },
    ],
  },
  {
    category: 'pm-application',
    title: '申し込みからお受け取りまで',
    icon: IconListFill,
    menu: [
      {
        name: 'お申し込み方法',
        link: '/support/application/flow/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '他社からの乗り換え（MNP）',
        link: '/support/application/mnp/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '楽天モバイル（ドコモ回線・au回線）からの移行',
        link: '/support/application/migration/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '対応製品',
        link: '/support/application/compatible-device/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '本人確認',
        link: '/support/application/verification/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '申し込み内容の確認・変更',
        link: '/support/application/confirmation/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: '配送',
        link: '/support/application/delivery/?l-id=support_top_pre-member_category',
        target: '',
      },
    ],
  },
  {
    category: 'pm-setting',
    title: 'ご利用開始までの設定',
    icon: IconRakutenAccountFill,
    menu: [
      {
        name: 'Android製品の設定手順',
        link: '/support/setting/android/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: 'iPhone・Apple Watchの設定手順',
        link: '/support/iphone/initial-setting/?l-id=support_top_pre-member_category',
        target: '',
      },
    ],
  },
  {
    category: 'pm-turbo',
    title: 'Rakuten Turbo',
    icon: `${assets}img/support/icon-product.svg`,
    menu: [
      {
        name: '製品',
        link: '/internet/turbo/support/product/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: 'プラン・サービス',
        link: '/internet/turbo/support/plan/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: 'お申し込みからお受け取りまで',
        link: '/internet/turbo/support/flow/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: 'キャンペーン',
        link: '/internet/turbo/support/campaign/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: '操作・設定・不具合',
        link: '/internet/turbo/support/setting/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: '請求・お支払い方法',
        link: '/internet/turbo/support/payment/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: '契約内容・お手続き',
        link: '/internet/turbo/support/contract/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
    ],
  },
  {
    category: 'u-hikari',
    title: '楽天ひかり',
    icon: `${assets}img/support/img-hikari.svg`,
    menu: [
      {
        name: '料金表・お支払い方法',
        link: '/hikari/fee/pricelist/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: '利用可能エリア',
        link: '/hikari/internet/area/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: 'IPv6（クロスパス）対応ルーター',
        link: '/hikari/support/wifi-router/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
      {
        name: 'キャンペーン',
        link: '/hikari/campaign/six-month-free/?l-id=support_top_pre-member_category_hikari_campaign_six-month-free',
        target: '_blank',
      },
      {
        name: 'お申し込みの流れ',
        link: '/hikari/flow/?l-id=support_top_pre-member_category',
        target: '_blank',
      },
    ],
  },
  {
    category: 'u-other',
    title: 'その他',
    icon: IconMeatballHorizontalFill,
    menu: [
      {
        name: '法人',
        link: '/support/other/business/?l-id=support_top_pre-member_category',
        target: '',
      },
      {
        name: 'その他',
        link: '/support/other/other/?l-id=support_top_pre-member_category',
        target: '',
      },
    ],
  },
]
