export type LinkListFaqItem = {
  path: string
  name: string
  l_id?: string
  ratid?: string
  target?: string
  isIconNewTabLine?: boolean
}
export type LinkListAttentionInfo = {
  path: string
  name: string
}
export type FaqList = {
  link: string
  question: string
}
export type FaqSmallCategoryList = {
  list: FaqList[]
  name: string
}
export type FaqBigCategoryList = {
  category_small: FaqSmallCategoryList[]
  name: string
}
export type FaqMovieList = {
  id: string
  ratId?: string
  title: string
  description: string | JSX.Element
  time?: string
  isYoutube: boolean
  isProduct?: boolean
}
export type ShowMovie = (
  value1?: string,
  value2?: string,
  value3?: number,
  value4?: number,
) => void
export type PipmakerObj = {
  priority?: string[]
  embed?: ShowMovie
}
export type SolvedListType = {
  name: string
  solved: number
  unsolved?: number
}
export type RelatedCategory = {
  path?: string
  name?: string
}

type RelatedCategories = {
  bigCategory: string
  list?: {
    path: string
    name: string
  }[]
}

export const relatedCategories: RelatedCategories[] = [
  {
    bigCategory: 'Rakuten Link',
    list: [
      {
        path: '/support/link/setting/',
        name: '初期設定',
      },
      {
        path: '/support/link/voice/',
        name: '通話サービス',
      },
      {
        path: '/support/link/rakumail/',
        name: '楽メール',
      },
      {
        path: '/support/link/message/',
        name: 'メッセージサービス',
      },
      {
        path: '/support/link/news/',
        name: 'ニュース・ウォレット・ミッション',
      },
      {
        path: '/support/link/manual/',
        name: '操作・設定・不具合',
      },
      {
        path: '/support/link/other/',
        name: 'その他',
      },
    ],
  },
  {
    bigCategory: 'エリア・データ通信・通話',
    list: [
      {
        path: '/support/area/area/',
        name: 'エリアの確認',
      },
      {
        path: '/support/area/data/',
        name: 'データ使用量',
      },
      {
        path: '/support/area/connection/',
        name: 'データ通信速度',
      },
      {
        path: '/support/area/data-trouble/',
        name: 'データ通信・通話の不具合',
      },
    ],
  },
  {
    bigCategory: 'キャンペーン',
    list: [
      {
        path: '/support/price-discount/detail/',
        name: 'キャンペーンの詳細内容の確認の確認',
      },
      {
        path: '/support/price-discount/point-granted/',
        name: 'キャンペーンの適用条件・確認',
      },
    ],
  },
  {
    bigCategory: 'ご利用開始までの設定',
  },
  {
    bigCategory: 'その他',
    list: [
      {
        path: '/support/other/business/',
        name: '法人',
      },
      {
        path: '/support/other/other/',
        name: 'その他',
      },
    ],
  },
  {
    bigCategory: 'ターボ',
  },
  {
    bigCategory: 'プラン・サービス',
    list: [
      {
        path: '/support/plan/detail/',
        name: 'プランの詳細',
      },
      {
        path: '/support/plan/internal-voice/',
        name: '通話/通信サービス（国内）',
      },
      {
        path: '/support/plan/international-voice/',
        name: '通話/通信サービス（国際）',
      },
      {
        path: '/support/plan/sms/',
        name: 'メール・SMSサービス',
      },
      {
        path: '/support/plan/service/',
        name: 'オプションサービス',
      },
      {
        path: '/support/plan/my-rakuten-mobile/',
        name: 'my 楽天モバイル',
      },
      {
        path: '/support/plan/tradein/',
        name: '下取りサービス',
      },
      {
        path: '/support/plan/other/',
        name: 'その他',
      },
    ],
  },
  {
    bigCategory: '契約内容・お手続き',
    list: [
      {
        path: '/support/contract-detail/confirmation/',
        name: '契約内容の確認・変更',
      },
      {
        path: '/support/contract-detail/sim/',
        name: 'SIMの交換・再発行',
      },
      {
        path: '/support/contract-detail/cancellation/',
        name: '解約・MNP転出',
      },
    ],
  },
  {
    bigCategory: '申し込みからお受け取りまで',
    list: [
      {
        path: '/support/application/mnp/',
        name: '他社からの乗り換え（MNP）',
      },
      {
        path: '/support/application/migration/',
        name: '楽天モバイル（ドコモ回線・au回線）からの移行',
      },
      {
        path: '/support/application/compatible-device/',
        name: '対応製品',
      },
      {
        path: '/support/application/flow/',
        name: 'お申し込み方法',
      },
      {
        path: '/support/application/verification/',
        name: '本人確認',
      },
      {
        path: '/support/application/confirmation/',
        name: '申し込み内容の確認・変更',
      },
      {
        path: '/support/application/delivery/',
        name: '配送',
      },
    ],
  },
  {
    bigCategory: '盗難・紛失',
  },
  {
    bigCategory: '製品（Android）',
    list: [
      {
        path: '/support/product/mini/',
        name: 'Rakuten Mini',
      },
      {
        path: '/support/product/hand/',
        name: 'Rakuten Hand',
      },
      {
        path: '/support/product/hand-5g/',
        name: 'Rakuten Hand 5G',
      },
      {
        path: '/support/product/big/',
        name: 'Rakuten BIG',
      },
      {
        path: '/support/product/big-s/',
        name: 'Rakuten BIG s',
      },
      {
        path: '/support/product/casa/',
        name: 'Rakuten Casa',
      },
      {
        path: '/support/product/wifi-pocket/',
        name: 'Rakuten WiFi Pocket',
      },
      {
        path: '/support/product/setting/',
        name: '設定・操作・故障',
      },
      {
        path: '/support/product/product-warranty/',
        name: '製品保証サービス（Android）',
      },
      {
        path: '/support/product/upgrade/',
        name: '機種変更の方法',
      },
    ],
  },
  {
    bigCategory: '製品（iPhone・Apple Watch）',
    list: [
      {
        path: '/support/iphone/iphone/',
        name: '製品',
      },
      {
        path: '/support/iphone/application/',
        name: '申し込みからご利用開始まで',
      },
      {
        path: '/support/iphone/initial-setting/',
        name: '初期設定',
      },
      {
        path: '/support/iphone/setting/',
        name: '操作・設定',
      },
      {
        path: '/support/iphone/product-warranty/',
        name: '製品保証サービス（iPhone・Apple Watch）',
      },
      {
        path: '/support/iphone/etc/',
        name: 'あんしん保証with AppleCare Services for Apple Watch',
      },
      {
        path: '/support/iphone/apple-id/',
        name: 'Apple ID',
      },
    ],
  },
  {
    bigCategory: '請求・お支払い方法',
    list: [
      {
        path: '/support/payment/bill/',
        name: '請求金額の確認',
      },
      {
        path: '/support/payment/payment/',
        name: '支払い方法の確認・変更',
      },
      {
        path: '/support/payment/google/',
        name: '楽天モバイルキャリア決済',
      },
      {
        path: '/support/payment/invoice/',
        name: '未払い料金の確認',
      },
    ],
  },
]
