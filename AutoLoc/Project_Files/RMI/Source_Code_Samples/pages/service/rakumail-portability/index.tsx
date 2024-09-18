import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtSize,
  TxtEmp02,
  AlphanumericSize,
  TxtWeightBold,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import { MediaGrid, MediaImage } from '@components/layout/Media'
import {
  LinkNormal,
  LinkIconAfter,
  LinkIconBefore,
} from '@components/atoms/Link'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { Table } from '@components/atoms/Table'
import { IconArrowDown, IconChevronRight } from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { UlOnly } from '@components/atoms/List'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'

const GrayBox = styled.div`
  padding: 32px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const IntroNote = styled.div`
  ${mixins.mq.MinL} {
    text-align: center;
  }
`
const AnchorArea = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  ${mixins.mq.MaxM} {
    flex-direction: column;
    row-gap: 16px;
  }
`
const Merit = styled.div`
  ${mixins.mq.MinL} {
    display: grid;
    grid-template-columns: 32% auto;
    grid-template-rows: minmax(0, auto) 1fr;
    grid-template-areas:
      'img title'
      'img txt';
    column-gap: 24px;
  }

  .title {
    ${mixins.mq.MinL} {
      grid-area: title;
      align-self: start;
    }
  }

  .img {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      margin-top: 0;
      grid-area: img;
    }
  }

  .txt {
    ${mixins.mq.MinL} {
      grid-area: txt;
      align-self: start;
    }
  }
`
const CustomTableWrapper = styled(Table)`
  th,
  td {
    width: 50%;
    ${mixins.mq.MinL} {
      width: 42%;
    }
  }
  th:first-child {
    ${mixins.mq.MinL} {
      width: 16%;
    }
  }
  .pink {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.pink5};
  }
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceRakumailPortability: NextPage = () => {
  const selectedCardIds = ['select-number']
  const pagetitle = '楽メール持ち運び'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'オプションサービス',
      url: '/service/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const labelArgs = {
    item: [{ text: '通話・SMS・メール', isEmp: false }],
  }

  return (
    <>
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイル公式メールサービス「楽メール持ち運び」のサービス紹介。楽天モバイル（楽天回線）を解約、譲渡もしくは、MNP転出後も引き続き、楽メールを利用し続けるためのオプションサービスです。"
      />
      <SystemWrapper>
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            楽メール持ち運び
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={Utils['Mt-16']}>
            <MediaImage>
              <img
                src={`${assets}img/service/rakumail-portability/img01.png`}
                alt=""
              />
            </MediaImage>
            <div>
              楽天モバイル公式メールサービス「楽メール」ご利用者が、楽天モバイル（楽天回線）を解約、譲渡もしくは他の携帯電話会社へ移行後も、「楽メール」を引き続きご利用いただくためのサービスです。
              <div className={Utils['Mt-16']}>
                <LinkIconAfter href="/service/rakumail/?l-id=service_rakumail-portability_service_rakumail">
                  「楽メール」の詳細を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">330</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
                <p className={Utils['Mt-8']}>お申し込み：必要</p>
              </div>
              <TxtCap as="p" className={Utils['Mt-8']}>
                <TxtWeightBold>
                  ※「Rakuten最強プラン（データタイプ）」は対象外です。
                </TxtWeightBold>
                <br />
                <TxtEmp02>
                  ※加入できるのは、
                  楽天モバイル（楽天回線）を解約、譲渡、MNP転出時点で楽メールアカウント保有者のみ、解約日を含めて31日以内。
                </TxtEmp02>
              </TxtCap>
            </div>
          </MediaGrid>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge
              href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability"
              as="a"
            >
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
          <IntroNote className={Utils['Mt-32']}>
            <TxtCap as="p">
              <TxtEmp02>
                ※楽天モバイル（楽天回線）解約時に楽メールのアカウントをお持ちでない場合は、「楽メール持ち運び」にはお申し込みいただけません。
              </TxtEmp02>
            </TxtCap>
            <TxtCap as="p">
              <TxtEmp02>
                ※「楽メール持ち運び」は、my 楽天モバイルアプリからのお申し込みはできません。
              </TxtEmp02>
            </TxtCap>
            <TxtCap as="p">
              ※楽天モバイル（楽天回線）契約中は、お申し込みいただけません。
            </TxtCap>
            <TxtCap as="p">
              ※お申し込み期間を過ぎた場合、メールアカウントが削除され、楽メールで送受信したメールやサービスご利用に係る情報等が閲覧できなくなります。
            </TxtCap>
          </IntroNote>

          <AnchorArea className={Utils['Mt-24']}>
            <li>
              <LinkIconBefore
                href="#feature"
                onClick={e => anchorCallback(e, 'feature')}
              >
                <IconArrowDown />
                特長
              </LinkIconBefore>
            </li>
            <li>
              <LinkIconBefore
                href="#service"
                onClick={e => anchorCallback(e, 'service')}
              >
                <IconArrowDown />
                楽メールとのサービス仕様比較
              </LinkIconBefore>
            </li>

            <li>
              <LinkIconBefore
                href="#notes"
                onClick={e => anchorCallback(e, 'notes')}
              >
                <IconArrowDown />
                注意事項
              </LinkIconBefore>
            </li>
          </AnchorArea>
        </SystemContainer>

        <GrayBox
          className={`${Utils['Pt-56']} ${Utils['Pb-56']} ${Utils['Mt-56']}`}
          id="feature"
        >
          <SystemContainer>
            <Heading level="2">特長</Heading>
            <Merit className={Utils['Mt-32']}>
              <Heading level="3" className="title">
                楽天モバイル（楽天回線）解約後も
                <br className={Utils['Disp-pc']} />
                <TxtEmp02>
                  楽メールのメールアドレス（xxx@rakumail.jp）が使える
                </TxtEmp02>
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/rakumail-portability/img02.png`}
                  alt=""
                  width="328"
                  height="180"
                />
              </div>
              <p className={`txt ${Utils['Mt-16']}`}>
                ネットショッピングなどの会員情報として楽メールのメールアドレスをご利用中の場合、メールアドレスの変更手続き不要でそのままネットショッピングなどを継続利用いただけます。
              </p>
            </Merit>
            <Merit className={Utils['Mt-40']}>
              <Heading level="3" className="title">
                <TxtEmp02>データ容量1GB</TxtEmp02>の
                <br className={Utils['Disp-sp']} />
                メールボックスもそのまま
              </Heading>
              <div className="img">
                <img
                  src={`${assets}img/service/rakumail-portability/img03.png`}
                  alt=""
                  width="328"
                  height="180"
                />
              </div>
              <div className={`txt ${Utils['Mt-16']}`}>
                <p>
                  メールボックスのデータ容量は「楽メール」と同様に最大1GBまでご利用いただけます。
                  <br />
                  メールボックスに保管されている、過去のメールもそのまま残るので、解約後もご確認いただけます。
                </p>
                <TxtCap as="p" className={Utils['Mt-16']}>
                  ※「楽メール持ち運び」では、Rakuten
                  Linkアプリは利用できません。任意の電子メールアプリにてご利用ください。
                  <LinkIconAfter href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability#howto-use">
                    ご利用方法の詳細はこちら
                    <IconChevronRight style={{ fontSize: 'inherit' }} />
                  </LinkIconAfter>
                </TxtCap>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※データ容量を超えた場合、メールの送受信やメールのドラフトの保存が制限されます。既存のメールが自動で消えることはありません。
                </TxtCap>
              </div>
            </Merit>
          </SystemContainer>
        </GrayBox>

        <SystemContainer className={Utils['Pt-56']} id="service">
          <Heading level="2">
            楽メールとの
            <br className={Utils['Disp-sp']} />
            サービス仕様比較
          </Heading>
          <p className={Utils['Mt-24']}>
            楽メールと同様の機能・仕様をご利用いただくことが可能です。詳しい機能・仕様は以下をご確認ください。
          </p>
          <p className={Utils['Mt-8']}>
            <LinkIconAfter href="/service/rakumail/?l-id=service_rakumail-portability_service_rakumail#functional">
              楽メールの機能・仕様について
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <p className={Utils['Mt-32']}>
            楽メールとの相違点は、以下になります。
          </p>

          <div className={`${Utils['Disp-pc']} ${Utils['Mt-32']}`}>
            <CustomTableWrapper>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th scope="row" className="pink">
                      楽メール持ち運び
                    </th>
                    <th scope="row">楽メール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">
                      メールの
                      <br />
                      ご利用方法
                    </th>
                    <td>
                      任意の電子メールアプリ内で利用
                      <TxtCap as="p">
                        ※IMAP／SMTPが利用可能 （
                        <LinkNormal href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability#howto-use">
                          設定方法はこちら
                        </LinkNormal>
                        ）
                      </TxtCap>
                      <TxtCap as="p">
                        ※Rakuten Linkアプリは利用できません。
                      </TxtCap>
                    </td>
                    <td>
                      Rakuten Linkアプリ内で利用
                      <TxtCap as="p">※IMAP／SMTPは利用できません。</TxtCap>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">料金</th>
                    <td>
                      330円／月（税込）
                      <TxtCap as="p">
                        ※月途中で解約された場合、当該月の料金は日割り計算となります。
                      </TxtCap>
                    </td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <th scope="col">
                      メールアドレス
                      <br />
                      の変更
                    </th>
                    <td>不可</td>
                    <td>my 楽天モバイルから変更可能</td>
                  </tr>
                  <tr>
                    <th scope="col">メールフィルター</th>
                    <td>
                      設定変更不可。楽天モバイル（楽天回線）
                      <br />
                      契約時に使用していた設定を引き継ぎます。
                      <TxtCap as="p">
                        <TxtEmp02>
                          ※2024年春以降に迷惑メールフィルターの設定変更機能を提供予定
                          <br />
                          （2023年12月28日に提供開始時期を更新しました。）
                        </TxtEmp02>
                      </TxtCap>
                    </td>
                    <td>Rakuten Linkから設定変更可能</td>
                  </tr>
                  <tr>
                    <th scope="col">
                      メールボックス
                      <br />
                      容量の通知
                    </th>
                    <td>
                      メールにて通知
                      <br />
                      メールボックス容量が80%を超えるとメールにて通知されます
                    </td>
                    <td>
                      プッシュ通知とポップアップにて通知
                      <br />
                      また、設定画面からも容量の確認が可能
                    </td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapper>
          </div>

          <div className={`${Utils['Disp-tb-sp']} ${Utils['Mt-32']}`}>
            <Heading level="3" className={Utils['Mt-32']}>
              メールのご利用方法
            </Heading>

            <CustomTableWrapper className={Utils['Mt-16']}>
              <table>
                <thead>
                  <tr>
                    <th scope="row" className="pink">
                      楽メール持ち運び
                    </th>
                    <th scope="row">楽メール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      任意の電子メールアプリ内で利用
                      <TxtCap as="p">
                        ※IMAP／SMTPが利用可能（
                        <LinkNormal href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability#howto-use">
                          設定方法はこちら
                        </LinkNormal>
                        ）
                      </TxtCap>
                      <TxtCap as="p">
                        ※Rakuten Linkアプリは利用できません。
                      </TxtCap>
                    </td>
                    <td>
                      Rakuten Linkアプリ内で利用
                      <TxtCap as="p">※IMAP／SMTPは利用できません。</TxtCap>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapper>

            <Heading level="3" className={Utils['Mt-32']}>
              料金
            </Heading>

            <CustomTableWrapper className={Utils['Mt-16']}>
              <table>
                <thead>
                  <tr>
                    <th scope="row" className="pink">
                      楽メール持ち運び
                    </th>
                    <th scope="row">楽メール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      330円／月（税込）
                      <TxtCap as="p">
                        ※月途中で解約された場合、当該月の料金は日割り計算となります。
                      </TxtCap>
                    </td>
                    <td>無料</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapper>

            <Heading level="3" className={Utils['Mt-32']}>
              メールアドレスの変更
            </Heading>

            <CustomTableWrapper className={Utils['Mt-16']}>
              <table>
                <thead>
                  <tr>
                    <th scope="row" className="pink">
                      楽メール持ち運び
                    </th>
                    <th scope="row">楽メール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>不可</td>
                    <td>my 楽天モバイルから変更可能</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapper>

            <Heading level="3" className={Utils['Mt-32']}>
              メールフィルター
            </Heading>

            <CustomTableWrapper className={Utils['Mt-16']}>
              <table>
                <thead>
                  <tr>
                    <th scope="row" className="pink">
                      楽メール持ち運び
                    </th>
                    <th scope="row">楽メール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      設定変更不可。楽天モバイル（楽天回線）
                      <br />
                      契約時に使用していた設定を引き継ぎます。
                      <TxtCap as="p">
                        <TxtEmp02>
                          ※2024年春以降に迷惑メールフィルターの設定変更機能を提供予定（2023年12月28日に提供開始時期を更新しました。）
                        </TxtEmp02>
                      </TxtCap>
                    </td>
                    <td>Rakuten Linkから設定変更可能</td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapper>

            <Heading level="3" className={Utils['Mt-32']}>
              メールボックス容量の通知
            </Heading>

            <CustomTableWrapper className={Utils['Mt-16']}>
              <table>
                <thead>
                  <tr>
                    <th scope="row" className="pink">
                      楽メール持ち運び
                    </th>
                    <th scope="row">楽メール</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      メールにて通知
                      <br />
                      メールボックス容量が80%を超えるとメールにて通知されます
                    </td>
                    <td>
                      プッシュ通知とポップアップにて通知
                      <br />
                      また、設定画面からも容量の確認が可能
                    </td>
                  </tr>
                </tbody>
              </table>
            </CustomTableWrapper>
          </div>
          <p className={Utils['Mt-32']}>
            「楽メール持ち運び」のお申し込み・解約方法につきましては下記ご確認ください。
          </p>
          <p className={Utils['Mt-16']}>
            <LinkIconAfter href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability#howto-apply">
              お申し込み方法を見る
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <p className={Utils['Mt-16']}>
            <LinkIconAfter href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability#howto-cancel">
              解約方法を見る
              <IconChevronRight />
            </LinkIconAfter>
          </p>
        </SystemContainer>

        <SystemContainer id="notes" className={Utils['Pt-56']}>
          <Heading level="2">注意事項</Heading>
          <Heading level="3" className={Utils['Mt-32']}>
            お申し込みについて
          </Heading>
          <UlOnly className={Utils['Mt-24']}>
            <li>
              <TxtEmp02>
                 「楽メール持ち運び」は、my 楽天モバイルアプリからのお申し込みはできません。
              </TxtEmp02>
            </li>
            <li>
              <TxtEmp02>
                ご契約中の楽天モバイル（楽天回線）を解約、譲渡もしくは、MNP転出時に、楽メールのアカウントを所有していたお客様のみ
              </TxtEmp02>
              「楽メール持ち運び」にお申し込み可能です。お申し込み可能期間は
              <TxtEmp02>
                楽天モバイル（楽天回線）を解約した日を含めて31日間
              </TxtEmp02>
              です。
            </li>
            <li>
              楽天モバイル（楽天回線）解約時に楽メールのアカウントを所有していなかった場合、「楽メール持ち運び」にはお申し込みいただけません。
            </li>
            <li>
              楽天モバイル（楽天回線）契約中は、「楽メール持ち運び」にはお申し込みいただけません。「
              <LinkNormal href="/service/rakumail/?l-id=service_rakumail-portability_service_rakumail">
                楽メール
              </LinkNormal>
              」サービスをご利用ください。
            </li>
            <li>
              <TxtEmp02>
                楽天モバイル（楽天回線）を解約した日を含めて31日間を過ぎると、お客様が楽天モバイル（楽天回線）ご契約中に楽メールで使用していたメールアカウントは削除されます。削除後は「楽メール持ち運び」のお申し込みはできません。
              </TxtEmp02>
              <br />
              【8/10 9:00に解約した場合】
              <br />
              31日目となる9/9 23:59まで申し込み可能。9/10
              0:00にメールアカウントが削除。
            </li>
          </UlOnly>

          <Heading level="3" className={Utils['Mt-32']}>
            料金の未払い
          </Heading>
          <UlOnly className={Utils['Mt-24']}>
            <li>
              「楽メール持ち運び」の料金未払いの場合、楽天モバイル（楽天回線）契約者同様のスケジュールでサービスの利用停止、契約解除等の措置を行います。
            </li>
          </UlOnly>
          <p className={Utils['Mt-16']}>
            <LinkIconAfter href="/guide/payment/invoice/flow/">
              料金未払いのお知らせが届いた、未払い料金を支払いたい
              <IconChevronRight />
            </LinkIconAfter>
          </p>
          <UlOnly className={Utils['Mt-16']}>
            <li>
              <TxtEmp02>
                メールアカウントが停止している間に届いたメールは受信できません。また、停止中に送られてきたメールは、利用再開後も受信することはできません。
                <br />
                未納状態が続き、契約解除となった場合、メールアカウントが削除されます。その場合、アカウントを復旧することはできません。
              </TxtEmp02>
            </li>
          </UlOnly>

          <Heading level="3" className={Utils['Mt-32']}>
            楽天回線の再契約
          </Heading>
          <UlOnly className={Utils['Mt-24']}>
            <li>
              「楽メール持ち運び」を利用中のユーザーが、再度楽天モバイル（楽天回線）を申し込む場合、「楽メール持ち運び」は自動解約され、通常の楽メールの利用契約申込があったものとみなされます。「楽メール持ち運び」でご利用いただいていたメールアカウントは、楽メールの利用契約が承認された後、通常の楽メールに引き継がれます。
              <br />
              <TxtEmp02>
                利用していたIMAPパスワードはリセットされ、任意のメールアプリで楽メールを利用することはできなくなります。
              </TxtEmp02>
            </li>
          </UlOnly>

          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge
              href="/guide/rakumail-portability/?l-id=service_rakumail-portability_guide_rakumail-portability"
              as="a"
            >
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="rakumail-portability"
              selectedIds={selectedCardIds}
              relatedTitle={
                <>
                  <span>その他の</span>
                  <span>通話・SMS・メールサービス</span>
                </>
              }
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="select-number"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
      </SystemWrapper>
      <GlobalFooter
        breadcrumbsItem={breadcrumbs}
        relatedItems={['plan', 'product', 'support']}
      />
    </>
  )
}

export default ServiceRakumailPortability
