import React from 'react'
import Utils from '@styles/Utils.module.scss'
import { ButtonLinkIconAfter } from '@components/atoms/ButtonLink'
import { TxtCap } from '@components/atoms/Txt'
import { IconChevronRight } from '@components/icons'

interface PlusNotesProps {
  mt: number
}

export const PlusNotes = (props: PlusNotesProps) => {
  const { mt } = props

  return (
    <div className={Utils[`Mt-${mt}`]}>
      <p>
        楽天ひかりのサービスをご利用になった月に料金が発生し、翌月に請求させていただきます。お支払いのタイミングは下記ページよりご確認ください。
      </p>
      <ButtonLinkIconAfter as="a" href="/hikari/fee/schedule/">
        お支払いスケジュール
        <IconChevronRight />
      </ButtonLinkIconAfter>

      <div className={Utils['Mt-16']}>
        <TxtCap as="p">
          ※1楽天ひかり（マンションプランまたはファミリープラン）申し込み月を1カ月目として4カ月目末日までに開通、かつ楽天会員の方が対象。NTT東日本・NTT西日本のフレッツ光回線を楽天ブロードバンドで利用中の方は対象外。楽天モバイル（Rakuten
          UN-LIMIT
          VI）利用中、または楽天ひかり申し込みの翌月15日までに新規申し込みの方は、楽天ひかりの月額基本料が開通月から最大12カ月間無料。13カ月目以降は月額基本料マンションプラン3,800円（税込4,180円）、ファミリープラン4,800円（税込5,280円）。楽天ひかり申し込み時にログインされた楽天IDが楽天モバイルへ登録のIDと異なる場合、または登録の楽天IDを変更した場合特典対象外。楽天モバイル未加入時の月額基本料は、開通月無料、翌月から12カ月間マンションプラン1,800円（税込1,980円）、ファミリープラン2,800円（税込3,080円）。開通から14カ月目以降はマンションプラン3,800円（税込4,180円）、ファミリープラン4,800円（税込5,280円）。初期登録費、工事費、オプション費用等は除く。契約期間中（3年ごとに更新）は契約解除料9,500円（税込10,450円）。
          ※2標準工事費は目安。詳細な初期工事費はご利用開始ご案内時に説明。居宅設備の都合や工事日時により変更される場合あり。
        </TxtCap>
      </div>
    </div>
  )
}
