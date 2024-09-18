import { CpnListMark1, CpnListMark2Normal } from '@components/atoms/Campaign'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { LinkNormal } from '@components/atoms/Link'
import { TxtCap, TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import Utils from '@styles/Utils.module.scss'

// ルールを更新する場合はこちらも→ campaign-rule-2138.ejs
export const CampaignRule2138 = () => {
  return (
    <DescriptionListDefault className={Utils['Mt-32']}>
      <div>
        <dt>キャンペーンコード</dt>
        <dd>
          <p>2138</p>
          <CpnListMark1>
            <li>
              本キャンペーンに関してお問い合わせの際は、上記「キャンペーンコード」をお伝えください
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーンお申込み期間</dt>
        <dd>
          <TxtEmp01 as="p">■ エントリー期間</TxtEmp01>
          <p className={Utils['Mt-8']}>
            2024年1月22日（月）10:00～2024年2月29日（木）23:59まで
          </p>
          <TxtEmp01 as="p" className={Utils['Mt-16']}>
            ■ データ利用期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>
            2024年1月1日（月）0:00～2024年1月31日（水）23:59
          </p>
          <p className={Utils['Mt-8']}>
            2024年2月1日（木）0:00～2024年2月29日（木）23:59
          </p>
          <CpnListMark1>
            <li>両期間で達成した場合、当選確率が2倍となります</li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン条件</dt>
        <dd>
          <TxtEmp01 as="p">以下①～④の条件をすべて満たした楽天会員の方</TxtEmp01>
          <TxtCap as="ul">
            <li>(①～④は順不同)</li>
          </TxtCap>

          <TxtEmp01 className={Utils['Mt-16']} as="p">
            ①キャンペーンへのエントリー
          </TxtEmp01>
          <p>エントリー期間内に本キャンペーンページでエントリー</p>

          <TxtEmp01 className={Utils['Mt-16']} as="p">
            ②「Rakuten最強プラン」をご利用中
          </TxtEmp01>
          <p>
            キャンペーン開始時点（2024年1月22日（月）10:00）で「Rakuten最強プラン」をご利用中の方が対象となります
          </p>

          <TxtEmp01 className={Utils['Mt-16']} as="p">
            ③キャンペーン対象となるデータ利用量を使用する
          </TxtEmp01>
          <p>
            キャンペーン開催月である2024年1月1日〜1月31日、または2024年2月1日〜2月29日までの各月のデータ利用量の通算で判定いたします
          </p>
          <CpnListMark1 className={Utils['Mt-8']}>
            <li>
              上記のどちらかの月において対象となるデータ利用量を超過していた場合、本キャンペーンの対象となります
            </li>
            <li>
              ご自身のデータ利用量は
              <LinkNormal
                href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile"
                target="_blank"
              >
                my 楽天モバイル
              </LinkNormal>
              の「ホーム」、または「利用状況」からご確認いただけます
            </li>
            <li>
              <LinkNormal
                href="https://portal.mobile.rakuten.co.jp/my-rakuten-mobile"
                target="_blank"
              >
                my 楽天モバイル
              </LinkNormal>
              で表示されるデータ利用量は概算となり、実際のデータ利用量と異なる場合があります
            </li>
            <li>
              月を跨いでデータ通信を行った場合、当該通信は翌月分のデータ利用量として算定いたします。また、当月末日のデータ通信の一部は翌月分のデータ利用量として算定される場合がございます
            </li>
          </CpnListMark1>

          <TxtEmp01 className={Utils['Mt-16']} as="p">
            ④NBA LEAGUE PASS for 楽天モバイルのコンテンツをご視聴
          </TxtEmp01>
          <CpnListMark1 className={Utils['Mt-8']}>
            <li>
              NBA LEAGUE PASS for
              楽天モバイルのすべてのコンテンツが対象となります
            </li>
            <li>
              楽天モバイルにご登録の楽天IDでNBA
              Rakutenにログインが必要になります
            </li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>キャンペーン特典</dt>
        <dd>
          <TxtEmp01 as="p">■ 特典内容</TxtEmp01>
          <p className={Utils['Mt-8']}>
            抽選で合計60名様に以下の景品をプレゼント
          </p>
          <CpnListMark1 className={Utils['Mt-8']}>
            <li>
              クーポンの当選はメールにて、タオルの当選は商品の発送をもって当選者にのみお知らせさせていただきます
            </li>
          </CpnListMark1>
          <ul className={Utils['Mt-8']}>
            <li>
              （１）対象月のデータ利用量が20GBを超過した方
              <CpnListMark2Normal className={Utils['Pl-pc-16']}>
                <li>
                  楽天スポーツゾーンで使える10,000円OFFクーポン（10名様）
                  <CpnListMark1>
                    <li>
                      <LinkNormal
                        href="https://www.rakuten.co.jp/rakutensportszone/?scid=wi_rmb_rakutensportszone"
                        target="_blank"
                      >
                        楽天スポーツゾーン
                      </LinkNormal>
                    </li>
                    <li>クーポンのご利用は一度限りです</li>
                    <li>当該クーポンとの決済代金との差額は返金いたしません</li>
                  </CpnListMark1>
                </li>
              </CpnListMark2Normal>
            </li>
            <li>
              （２）対象月のデータ利用量が3GBを超過した方
              <CpnListMark2Normal className={Utils['Pl-pc-16']}>
                <li>
                  タオル（50名様）
                  <CpnListMark1>
                    <li>色を指定して応募することはできません</li>
                  </CpnListMark1>
                </li>
              </CpnListMark2Normal>
            </li>
          </ul>

          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ クーポン送付日
          </TxtEmp01>
          <p className={Utils['Mt-8']}>2024年5月末日ごろにメールにて送付</p>
          <CpnListMark1>
            <li>
              クーポンは、楽天モバイルにご登録いただいているメールアドレスに送付いたします。「mobile.rakuten.co.jp」ドメインからのメールが受信できるように設定してください
            </li>
            <li>クーポン送付のメールの再送はできません</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>

          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ クーポン有効期間
          </TxtEmp01>
          <p className={Utils['Mt-8']}>2024年6月30日（日）23:59まで</p>

          <TxtEmp01 as="p" className={Utils['Mt-8']}>
            ■ 景品発送日
          </TxtEmp01>
          <p className={Utils['Mt-8']}>2024年5月末日ごろに発送</p>
          <CpnListMark1>
            <li>
              景品は、楽天モバイルにご登録いただいている氏名、住所に発送いたします
            </li>
            <li>配送先は、日本国内に限らせていただきます</li>
            <li>
              景品発送後のトラブルにつきましては、弊社は一切の責任を負いかねます
            </li>
            <li>宛先不明で返送された場合、当選は無効とさせていただきます</li>
            <li>権利の譲渡はできません</li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>特典適用対象外</dt>
        <dd>
          <TxtEmp01 as="p">
            以下の条件に当てはまる場合は、
            <TxtEmp02>特典適用対象外</TxtEmp02>となります
          </TxtEmp01>
          <CpnListMark1>
            <li>
              本キャンペーン開始後（2024年1月22日（月）10:00以降）に「Rakuten最強プラン」に新規に契約された回線は、本キャンペーン対象外になります
            </li>
            <li>
              エントリーした楽天IDと異なる楽天IDに紐づく回線でデータ利用およびNBA
              Rakutenにログインしコンテンツを視聴した場合
            </li>
            <li>未納・未払いが発生した場合</li>
            <li>
              メール送信日、プレゼント発送日までに楽天会員から
              <TxtEmp01>退会</TxtEmp01>
              している場合
            </li>
            <li>
              楽天モバイル株式会社または楽天グループ株式会社が定める
              <TxtEmp01>規約などに違反</TxtEmp01>した場合
            </li>
            <li>
              そのほか、
              <TxtEmp01>楽天モバイル株式会社が会員として不適格である</TxtEmp01>
              と<TxtEmp01>合理的な根拠に基づき</TxtEmp01>
              と合理的に判断した場合
            </li>
            <li>キャンペーン開始前に楽天モバイルを解約されている場合</li>
          </CpnListMark1>
        </dd>
      </div>
      <div>
        <dt>注意事項</dt>
        <dd>
          <CpnListMark1>
            <li>
              本キャンペーンでの「Rakuten最強プラン」は、「Rakuten最強プラン（データタイプ）」を含みます
            </li>
            <li>
              本キャンペーンは予告なく内容の変更、中止もしくは延長させていただく場合があります。あらかじめご了承ください
            </li>
            <li>
              本キャンペーンの特典付与対象者は、同時期に行われているほかのキャンペーンの対象から除外、または特典総額が景品表示法上・電気通信事業法上の範囲内に制限される場合があります
            </li>
            <li>
              本キャンペーンの対象者以外への転送などの不正利用、不正転売などの違反が見つかった場合や弊社が不正と判断した場合は、抽選の対象外となる場合がございます
            </li>
            <li>
              本キャンペーン参加にかかる費用 (通信費等含む)
              は、お客様のご負担となりますので、あらかじめご了承ください
            </li>
            <li>
              メンテナンス等でキャンペーンにご参加いただけない場合があります
            </li>
            <li>
              エントリーした楽天IDと楽天モバイルにご登録の楽天IDとNBA
              Rakutenにログインした楽天IDが同一でない場合、抽選の対象外となる場合がございますのでご注意ください
            </li>
            <li>
              楽天グループ社員及びキャンペーンの関係者による応募は禁止とします
            </li>
            <li>記載の内容は2024年1月22日（月）時点の情報となります</li>
          </CpnListMark1>
        </dd>
      </div>
    </DescriptionListDefault>
  )
}
