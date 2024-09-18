import type { NextPage } from 'next'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { SystemContainer } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import { TxtCap } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'
import { OlOnly } from '@components/atoms/List'

const SupportRestriction: NextPage = () => {
  const pagetitle = 'IMEIの確認方法'
  const breadcrumbs = [
    { url: '/', text: 'トップ' },
    { url: '/support/', text: 'お客様サポート' },
    { url: '', text: pagetitle },
  ]

  return (
    <>
      <CustomHead
        directories={[{ path: '/support/', label: 'お客様サポート' }]}
        pagetitle={pagetitle}
      />
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <SystemContainer>
        <Heading className={Utils['Mt-32']} level="1">
          {pagetitle}
        </Heading>
        <p className={Utils['Mt-32']}>
          携帯電話機の製造番号（IMEI）の確認方法は、以下の画面から確認、箱から確認、製造シールから確認の3つの方法があります。
        </p>
        <Heading className={Utils['Mt-40']} level="2">
          画面から確認する
        </Heading>
        <OlOnly className={Utils['Mt-16']}>
          <li>ホーム画面にある「電話」を選択</li>
          <li>画面下部にある赤いボタンを選択</li>
          <li>ダイヤルキーで「＊＃06＃」を入力</li>
          <li>
            画面にて「35」から始まる15桁の製造番号（IMEI）を確認することができます。
            <br />
            表示された製造番号（IMEI）は必ずメモにお控えください。
          </li>
        </OlOnly>
        <TxtCap as="p" className={Utils['Mt-16']}>
          ※ Android<sup>&trade;</sup> の確認方法になります。
        </TxtCap>
        <Heading className={Utils['Mt-64']} level="2">
          箱から確認する
        </Heading>
        <p className={Utils['Mt-16']}>
          ご購入いただいた携帯電話機の箱の側面もしくは、裏面に記載されています。
        </p>
        <TxtCap as="p" className={Utils['Mt-16']}>
          ※ 一部、記載がない場合があります。
        </TxtCap>
        <Heading className={Utils['Mt-64']} level="2">
          製造シールから確認する
        </Heading>
        <OlOnly className={Utils['Mt-16']}>
          <li>携帯電話機の電源を切る</li>
          <li>
            電池カバー／電池パックを取り出す
            <br />
            <TxtCap as="p">
              ※ 電池パックの取り出し方は、各製品の取扱説明書をご覧ください。
            </TxtCap>
          </li>
          <li>
            製造シールのバーコード下に書かれている、「35」で始まる15桁の数字が製造番号（IMEI）です。
            <br />
            機種によっては「/」などで区切られている場合があります。
          </li>
        </OlOnly>
      </SystemContainer>
      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default SupportRestriction
