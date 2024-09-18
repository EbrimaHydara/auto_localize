import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { ButtonRegular } from '@components/atoms/Buttons'
import { Heading, HeadingLevel } from '@components/atoms/Heading'
import { RecommendCarousel } from '@components/molecules/RecommendCarousel'
import { useGenerateId } from '@components/utils/useGenerateId'

type BnrCampaignRecommendProps = {
  headingText?: string
  level?: HeadingLevel
  lazy?: boolean
}

export const BnrCampaignRecommend = ({
  headingText,
  level,
  lazy = true,
}: BnrCampaignRecommendProps) => {
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
      //MNP6,000ポイントCPN_240315
      id: generateId(),
      url: '/campaign/mnp/?l-id=include_campaign_campaign_mnp',
      img: `${assets}img/bnr/bnr-mnp-328-185-240315.png`,
      alt: 'スマホそのまま乗り換え！電話番号もそのまま他社から乗り換え＆初めてお申し込みで6,000ポイントプレゼント!データ3GB（税込1,078円）x5カ月分がポイント還元で実質5カ月無料！',
      target: '',
    },
    {
      //iPhone CPN_240517
      id: generateId(),
      url: '/campaign/iphone-point/?l-id=include_campaign_campaign_iphone-point',
      img: `${assets}img/bnr/bnr-iphone-point-328-185-240517.png`,
      alt: '対象iPhoneを一括または24回払いで購入＆楽天モバイルへ初めて申し込み＆他社から電話番号そのまま乗り換えで最大32,000円相当おトク！',
      target: '',
    },
    {
      //Android値引き_240522
      id: generateId(),
      url: '/campaign/android-discount/?l-id=include_campaign_campaign_android-discount',
      img: `${assets}img/bnr/bnr-android-discount-328-185-240522.png`,
      alt: '楽天モバイルお申し込み＆対象製品ご購入で最大26,930円値引き！',
      target: '',
    },
    {
      //Android CPN_240522
      id: generateId(),
      url: '/campaign/start-point/?l-id=include_campaign_campaign_start-point',
      img: `${assets}img/bnr/bnr-start-point-328-185-240522.png`,
      alt: '楽天モバイルへ初めてお申し込み＋他社から電話番号そのまま乗り換え＋対象のAndroid製品をご購入いただくと最大12,000ポイント還元！他社から乗り換え以外の方でも最大8,000ポイント還元中！',
      target: '',
    },
    {
      //紹介CPN_240201
      id: generateId(),
      url: '/campaign/referral/?l-id=include_campaign_campaign_referral',
      img: `${assets}img/bnr/bnr-referral-328-185-240201.png`,
      alt: '楽天モバイル紹介キャンペーン！紹介1人につき7,000ポイント、紹介される方も最大13,000ポイントプレゼント！ ',
      target: '',
    },
    {
      //料金シミュレーション_240216
      id: generateId(),
      url: '/fee/simulation/?l-id=include_campaign_fee_simulation',
      img: `${assets}img/bnr/bnr-fee-simulation-328-185-240216.png`,
      alt: '楽天モバイルに乗り換えるだけでどれだけおトクになる？3ステップでわかる！料金＆ポイントかんたんシミュレーション！他社プランと比較もできる',
      target: '',
    },
    {
      //電話番号シェアサービスCPN_240301
      id: generateId(),
      url: '/service/number-share/?l-id=include_campaign_service_number-share',
      img: `${assets}img/bnr/bnr-service_number-share-campaign-328-185-240301.png`,
      alt: '電話番号シェアサービス（月額550円）。期間中にお申し込みで3カ月分（1,650円）を1,650ポイント還元で実質3カ月無料！',
      target: '',
    },
    {
      //最強プラン_240221
      id: generateId(),
      url: '/fee/saikyo-plan/?l-id=include_campaign_fee_saikyo-plan',
      img: `${assets}img/bnr/bnr-saikyo-plan-328-185-240430.png`,
      alt: 'Rakuten最強プランは家族割引適用時、全キャリアのデータ3GB/無制限で最安！※2024年2月時点',
      target: '',
    },
    {
      //市場連動5月後半マラソン_240521
      id: generateId(),
      url: '/campaign/marathon/?l-id=include_campaign_campaign_bigsale',
      img: `${assets}img/bnr/bnr-marathon-notes-328-185-240521.png`,
      alt: '楽天市場のお買い物マラソン連動企画 楽天モバイルのお申し込みで楽天市場でのお買い物ポイント＋9倍キャンペーン',
      target: '',
    },
    {
      //ひかりCPN_20240122
      id: generateId(),
      url: '/hikari/campaign/six-month-free/?l-id=include_campaign_hikari_campaign_six-month-free',
      img: `${assets}img/bnr/bnr-hikari_campaign_six-month-free-328-185-240122.png`,
      alt: '楽天ひかり初めてお申し込み&楽天モバイルご利用で楽天ひかりの月額基本料6カ月0円 ※ 契約解除料、その他条件あり',
      target: '',
    },
    {
      //Rakuten Turbo CPN_240221
      id: generateId(),
      url: '/internet/turbo/campaign/six-month-free/?l-id=include_campaign_internet_turbo_campaign_six-month-free',
      img: `${assets}img/bnr/bnr-turbo_campaign_six-month-free-328-185-240221.png`,
      alt: '工事不要！すぐに使える おうちのWi-Fi Rakuten Turboのプラン料金が6カ月0円！さらにスマホとセットで20,000ポイント還元。※製品代金 別途41,580円。7カ月目以降4,840円／月※Rakuten最強プランの利用が必要 ※その他条件あり',
      target: '',
    },
    {
      //市場_Android_240520
      id: generateId(),
      url: 'https://www.rakuten.ne.jp/gold/rakutenmobile-store/product/smartphone/android/?scid=wi_rmb_ich_include_campaign_product_smartphone_android',
      img: `${assets}img/bnr/bnr-ichiba-event-328-185-240520.png`,
      alt: '楽天モバイル公式 楽天市場店限定！対象Android製品購入＋楽天モバイルお申し込みで使える6,000円OFFクーポン！※対象プラン等条件あり',
      target: '',
    },
    {
      //New2,000CPN_231207
      id: generateId(),
      url: '/campaign/new-application/?l-id=include_campaign_campaign_new-application',
      img: `${assets}img/bnr/bnr-new-application-328-185-231207.png`,
      alt: '楽天モバイルへ初めてお申し込みで2,000ポイントプレゼント!',
      target: '',
    },
    {
      //15分かけほ1カ月無料_231227
      id: generateId(),
      url: '/service/standard-free-call/?l-id=include_service_standard-free-call',
      img: `${assets}img/bnr/bnr-standard-free-call-328-185-231227.png`,
      alt: '15分（標準）通話かけ放題がはじめてのお申し込みで1カ月無料！',
      target: '',
    },
    {
      //デジコン_240423
      id: generateId(),
      url: '/campaign/digital-contents/?l-id=include_campaign_campaign_digital-contents',
      img: `${assets}img/bnr/bnr-digital-top-contents-328-185-240423.png`,
      alt: 'NBA、パ・リーグ、ミュージックが楽天モバイルなら追加料金0円で楽しめる！※ミュージックは30日ごとに5時間無料',
      target: '',
    },
    {
      //SPU_221101
      id: generateId(),
      url: '/campaign/spu/?l-id=include_campaign_campaign_spu',
      img: `${assets}img/bnr/bnr-spu-mobile-328-185-231201-member.png`,
      alt: '契約後は楽天市場のお買い物でポイントが貯まりやすく！',
      target: '',
    },
  ]

  return (
    <div>
      <Heading
        level={level ? level : '2'}
        ratId="scroll_include-bnr-cpn-recommend-v2"
        ratEvent="appear"
      >
        {headingText ? headingText : 'キャンペーン・おすすめ情報'}
      </Heading>
      <div className={Utils['Mt-24']}>
        <RecommendCarousel bannerList={recommendBnrs} lazy={lazy} />
      </div>
      <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
        <ButtonRegular
          as="a"
          href="/campaign/?l-id=campaign_carousel_campaign-top"
        >
          キャンペーン一覧を見る
        </ButtonRegular>
      </div>
    </div>
  )
}
