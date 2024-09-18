import type { NextPage } from 'next'
import { CustomHead } from '@components/utils/CustomHead'

const Product: NextPage = () => {
  const pagetitle = '製品（iPhone、Android／スマートフォン）'
  const directories = [
    { path: '/product/', label: 'Rakuten最強プラン（料金プラン）' },
  ]

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのスマホ製品ラインアップ。楽天回線で人気のスマートフォンデバイス、Wi-Fi（ワイファイ）端末ご購入のほか、おすすめ機種の製品仕様、カメラ、価格、新商品のスペック比較がご覧いただけます。"
        canonical_custom="https://network.mobile.rakuten.co.jp/product/"
        noindex={true}
        redirect={{
          url: 'product/',
        }}
      />
    </>
  )
}

export default Product
