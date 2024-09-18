import type { NextPage } from 'next'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { SystemContainer } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import { ButtonRegular } from '@components/atoms/Buttons'
import Utils from '@styles/Utils.module.scss'
import { TxtEmp02 } from '@components/atoms/Txt'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'

const SupportRakutenlinkformThanks: NextPage = () => {
  const pagetitle = 'Rakuten Linkに関するお問い合わせ'
  const description =
    'Rakuten Linkに関するトラブル解決方法をメールでご案内いたします。項目を選択のうえ、必要情報をご入力ください。'
  const breadcrumbs = [
    { url: '/', text: 'トップ' },
    { url: '/support/', text: 'お客様サポート' },
    { url: '/support/rakuten-link-form/', text: pagetitle },
    { url: '', text: pagetitle },
  ]

  return (
    <>
      <CustomHead
        directories={[{ path: '/support/', label: 'お客様サポート' }]}
        description={description}
        pagetitle={pagetitle}
        noindex={true}
      />
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <SystemContainer className={Utils['Pb-64']}>
        <Heading className={Utils['Mt-32']} level="1">
          {pagetitle}
        </Heading>
        <p className={Utils['Mt-24']}>
          この度は、Rakuten Linkに関するお問い合わせありがとうございました。
          <br />
          早期解決をはかるため、調査をご希望のお客様には「ご意見・ご要望」より調査に必要な情報の送信をお願いしております。
        </p>
        <p className={Utils['Mt-16']}>
          Rakuten
          Linkをご利用のスマートフォンに通知が送られます。通知をタップのうえ、送信のご協力をお願いいたします。
        </p>
        <p className={Utils['Mt-16']}>
          ※ご利用のバージョンによっては通知が届かない場合がございます。10分待っても通知がない場合は、
          <LinkIconAfter href="https://r10.to/Link146" target="_blank">
            こちら
            <IconNewTabLine />
          </LinkIconAfter>
          の手順に従って弊社からの返信を待たずに、自由入力欄に
          <TxtEmp02>電話番号下4桁</TxtEmp02>
          を入力のうえ、お早めにお送りください。
        </p>
        <p>
          ※デスクトップ版をご利用のお客様には、上記に加え、
          <LinkIconAfter href="https://r10.to/Link145" target="_blank">
            こちら
            <IconNewTabLine />
          </LinkIconAfter>
          の手順に従って調査に必要な情報の送信をお願いしています。同様に自由入力欄に
          <TxtEmp02>電話番号下4桁</TxtEmp02>
          を入力のうえ、お早めに送信ください。
        </p>
        <p className={Utils['Mt-16']}>
          なお、調査にあたって取得する情報に通信先や個人を特定できる内容は一切含まれておりません。ご協力いただきありがとうございました。
        </p>
        <ButtonRegular className={Utils['Mt-32']} href="/" as="a">
          楽天モバイルトップへ
        </ButtonRegular>
      </SystemContainer>
      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default SupportRakutenlinkformThanks
