import { CpnListMark1, CpnTitlelv1 } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

export const CampaignRule2172 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2172</p>
          <CpnListMark1>
            <li>
              本キャンペーンに関してお問い合わせの際は、上記「キャンペーンコード」をお伝えください
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン期間</dt>
        <dd>
          <p>2024年1月15日（月）開店～2024年3月3日（日）閉店</p>
          <CpnListMark1>
            <li>景品がなくなり次第終了になります。</li>
            <li>
              家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外となります。
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp02 as="p">
            上記各項目の期間内に【1】、【2】の条件をすべて満たした方
          </TxtEmp02>
          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【1】</span>
            「Rakuten最強プラン」ご利用中、または、キャンペーン期間中に「Rakuten最強プラン」へのお申し込み＆プラン利用開始
          </CpnTitlelv1>
          <CpnListMark1>
            <li>
              「Rakuten最強プラン」ご利用中の方は、Rakuten
              Linkまたはmy楽天モバイルのホーム画面のご提示をお願いいたします。
            </li>
          </CpnListMark1>

          <CpnTitlelv1 className={Utils['Mt-16']}>
            <span>【2】</span>楽天モバイルショップで抽選の実施
          </CpnTitlelv1>
          <CpnListMark1>
            <li>おひとり様1回限りご参加いただけます。</li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            抽選でお買いものパンダグッズをプレゼント
          </TxtEmp01>
          <CpnListMark1>
            <li>店舗によって景品が異なります。</li>
            <li>
              抽選結果によりお渡しするお買いものパンダグッズが異なります。
            </li>
          </CpnListMark1>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ 特典進呈時期
          </TxtEmp01>
          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            その場でお渡し
          </TxtEmp01>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>おひとり様1回限りご参加いただけます。</li>
            <li>
              家電量販店内の楽天モバイルショップ及び一部楽天モバイルショップはキャンペーン対象外となります。
            </li>
            <li>景品がなくなり次第終了とさせていただく場合がございます。</li>
            <li>店舗によって景品が異なる場合があります。</li>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください。
            </li>
            <li>
              本キャンペーンの景品のお渡し対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法・電気通信事業法の範囲内に制限される場合があります。
            </li>
            <li>
              本キャンペーン終了後も類似または同様のキャンペーンが開催される場合があります。
            </li>
            <li>
              本キャンペーンを転売等の営利目的で利用した場合、今後のキャンペーンご参加をお断りする場合があります。
            </li>
            <li>その他詳細は店舗スタッフにお問い合わせください。</li>
            <li>記載の内容は2024年1月9日（火）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
