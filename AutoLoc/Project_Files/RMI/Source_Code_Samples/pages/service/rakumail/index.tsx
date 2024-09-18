import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Utils from '@styles/Utils.module.scss'
import styled, { ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import {
  TxtCap,
  TxtEmp01,
  TxtEmp02,
  AlphanumericSize,
} from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LabelList } from '@components/atoms/Label'
import {
  LinkNormal,
  LinkIconBefore,
  LinkIconAfter,
} from '@components/atoms/Link'
import { ButtonRegularLarge, ButtonRegular } from '@components/atoms/Buttons'
import { IconArrowDown, IconChevronRight } from '@components/icons'
import { Tab } from '@components/atoms/Tab'
import {
  InfoboxBorder,
  InfoboxLight,
  InfoboxWhite,
} from '@components/atoms/Infobox'
import {
  MediaGrid,
  MediaImage,
  MediaList2,
  MediaList3,
} from '@components/layout/Media'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { UlOnly } from '@components/atoms/List'
import { AccordionList } from '@components/atoms/AccordionList'
import { Recommend } from '@components/include/service/Recommend'
import { Related } from '@components/include/service/Related'
import { Table } from '@components/atoms/Table'
import { anchorCallback } from '@components/utils/anchorCallback'

const GrayBox = styled.div`
  padding-block: 16px;
  background-color: ${props => props.theme.colors.monotone97};
`
const ServiceLink = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 32px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 16px;
  }
`
const HeroContainer = styled.div`
  display: grid;
  margin-top: 8px;
  ${mixins.mq.MinL} {
    margin-top: 0;
  }
`
const HeroMain = styled.div`
  grid-area: 1/-1;
`
const HeroSub = styled(SystemContainer)`
  position: relative;
  grid-area: 1/-1;
  z-index: 2;
  ${mixins.mq.MinL} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'label cap';
  }
`
const HeroLabel = styled.div`
  padding-top: 8px;
  ${mixins.mq.MinL} {
    grid-area: label;
  }
`
const HeroCap = styled(TxtCap)`
  text-align: right;
  ${mixins.mq.MinL} {
    grid-area: cap;
    padding-top: 16px;
    color: ${props => props.theme.colors.lightBlack};
  }
  font-size: 12px;
`
const UseStep = styled.div`
  ${mixins.mq.MinL} {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 380px auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'img read'
      'img btn';
    gap: 24px;
  }
  .read {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      grid-area: read;
      margin-top: 0;
    }
  }

  .img {
    margin-top: 16px;
    ${mixins.mq.MinL} {
      grid-area: img;
      margin-top: 0;
    }
  }

  .btn {
    margin-top: 24px;
    ${mixins.mq.MinL} {
      grid-area: btn;
      margin-top: 0;
    }
  }
`

const PriceNumberFree = styled.p`
  font-family: var(--noto-sans-jp), sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`

const ColumnTitle = styled(Heading)`
  display: grid;
  place-content: center;
  min-height: 56px;
`

const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceRakumail: NextPage = () => {
  const selectedCardIds = ['select-number', 'rakumail-portability']
  const theme = useContext(ThemeContext)
  const pagetitle = '楽メール'
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

  const heading1 = '主要機能'
  const heading2 = '仕様一覧'

  const Content1 = () => (
    <div>
      <Heading level="4" className={Utils['Mt-40']}>
        メールアドレス設定
      </Heading>
      <TxtCap as="p" className={Utils['Mt-16']}>
        ※初期設定（メールアドレスの登録）や変更は「my
        楽天モバイル」から設定いただけます。
        <LinkNormal href="/guide/rakumail/?l-id=service_rakumail_guide_rakumail">
          楽メール（ご利用方法）
        </LinkNormal>
        よりご確認ください。
      </TxtCap>
      <DescriptionListDefault className={Utils['Mt-16']}>
        <div>
          <dt>登録</dt>
          <dd>メールアドレスの登録が可能です。</dd>
        </div>
        <div>
          <dt>変更</dt>
          <dd>
            メールアドレスの変更が可能です。
            <TxtCap as="p">
              ※月に1回まで変更が可能です（毎月1日の0時にリセットされます）。
            </TxtCap>
          </dd>
        </div>
      </DescriptionListDefault>

      <Heading level="4" className={Utils['Mt-40']}>
        メール機能
      </Heading>
      <TxtCap as="p" className={Utils['Mt-16']}>
        ※楽メールは、Rakuten
        Linkアプリ内でご利用いただけます。各種メール機能の設定もアプリ内で可能です。各種操作方法等は、
        <LinkNormal href="/guide/rakumail/?l-id=service_rakumail_guide_rakumail">
          楽メール（ご利用方法）
        </LinkNormal>
        よりご確認ください。
      </TxtCap>
      <DescriptionListDefault className={Utils['Mt-16']}>
        <div>
          <dt>メールの作成</dt>
          <dd>作成中メールは保存が可能です。</dd>
        </div>
        <div>
          <dt>ファイル添付</dt>
          <dd>
            スマホのストレージから、様々な形式のファイルを添付することが可能です。
            <br />
            また、受信した添付ファイルはスマホにダウンロードが可能です。
          </dd>
        </div>
        <div>
          <dt>送信／受信／転送</dt>
          <dd>メールの送信／受信／転送が可能です。</dd>
        </div>
        <div>
          <dt>未読／既読／☆マーク</dt>
          <dd>
            メールの未読／既読の状態を変更したり、重要なメールに☆マークを付けて管理することが可能です。
          </dd>
        </div>
        <div>
          <dt>メール削除と復元</dt>
          <dd>
            メールの削除が可能です。
            <br />
            削除したメールは30日以内であればゴミ箱フォルダーから復元が可能です。削除したメールは30日が経過すると自動でゴミ箱フォルダーからも削除されます。
          </dd>
        </div>
        <div>
          <dt>フォルダー作成と移動</dt>
          <dd>
            フォルダーを作成してメールの管理をしたり、メールを他のフォルダーへ移動したりすることが可能です。
          </dd>
        </div>
        <div>
          <dt>バウンス通知</dt>
          <dd>
            迷惑メールフィルターなどによりメールが受信できない場合に、送信した相手に、受信されなかった旨の通知メールを送ります。
          </dd>
        </div>
      </DescriptionListDefault>
      <Heading level="4" className={Utils['Mt-40']}>
        迷惑メールフィルター機能
      </Heading>
      <DescriptionListDefault className={Utils['Mt-16']}>
        <div>
          <dt>受信リスト</dt>
          <dd>
            受信したいメールアドレスやドメインを個別に設定することが可能です。
          </dd>
        </div>
        <div>
          <dt>拒否リスト</dt>
          <dd>
            拒否したいメールアドレスやドメインを個別に設定することが可能です。
          </dd>
        </div>
        <div>
          <dt>おすすめフィルター設定</dt>
          <dd>
            あらかじめ設定された迷惑メールフィルターの各種設定を以下3つから選択いただけます。
            <br />
            ・おすすめフィルター設定（オフ）：すべてのフィルターがOFF
            <br />
            ・おすすめフィルター設定（強）：ウイルスメールフィルター、大量送信者フィルター、なりすましメールフィルターがON
            <br />
            ・おすすめフィルター設定（標準）：大量送信者フィルター、なりすましメールフィルターがON
            <br />
            <TxtCap as="p">※デフォルトはおすすめフィルター設定（強）</TxtCap>
          </dd>
        </div>
        <div>
          <dt>携帯／Webメール拒否設定</dt>
          <dd>
            携帯／Webメールを受信するか設定が可能です。（事業者ごとに設定可）
          </dd>
        </div>
        <div>
          <dt>URLリンクメールフィルター</dt>
          <dd>
            URLが含まれるメールを自動的に迷惑メールフォルダーに保存するように設定が可能です。
          </dd>
        </div>
        <div>
          <dt>なりすましメールフィルター</dt>
          <dd>
            アドレスを偽って送られてくるメールを受信しないように設定できます。（DMARC対応）
            <br />
            <TxtCap as="p">
              ※ DMARC（Domain-based Message Authentication, Reporting, and
              Conformance）とは、送信ドメイン認証とよばれる電子メールの送信元のドメインを認証する技術の一つです。
              <br />
              ※送信元のポリシーに応じて処理が実施されます。
            </TxtCap>
          </dd>
        </div>
        <div>
          <dt>大量送信者フィルター</dt>
          <dd>
            大量送信者からのメールを自動的に迷惑メールフォルダーに保存するように設定が可能です。
          </dd>
        </div>
        <div>
          <dt>ウイルスメールフィルター</dt>
          <dd>
            添付ファイルがウイルスに感染しているメールを自動的に迷惑メールフォルダーに保存するように設定が可能です。
          </dd>
        </div>
      </DescriptionListDefault>
    </div>
  )
  const Content2 = () => (
    <div className={Utils['Mt-40']}>
      <TxtCap as="p">
        ※容量や上限を超過する場合、送受信できない場合があります。
      </TxtCap>
      <DescriptionListDefault className={Utils['Mt-16']}>
        <div>
          <dt>一斉送信可能件数</dt>
          <dd>200件</dd>
        </div>
        <div>
          <dt>メールボックスの最大容量</dt>
          <dd>
            1GB
            <TxtCap as="p">
              ※1GBを超えた場合、送信／受信／転送／下書き保存ができなくなり、エラーメッセージが表示されます。既存のメールが自動で消えることはありません。
            </TxtCap>
          </dd>
        </div>
        <div>
          <dt>メールボックスの最大メール件数</dt>
          <dd>
            最大500,000件
            <TxtCap as="p">
              ※アドレス情報保存数が増えると、その分メールボックスの格納可能件数が減少します。
              <br />
              ※最大件数を超える場合には送受信制限が行われる場合があります。
            </TxtCap>
          </dd>
        </div>
        <div>
          <dt>受信メールの最大容量</dt>
          <dd>50MB</dd>
        </div>
        <div>
          <dt>送信メールの最大容量</dt>
          <dd>25MB</dd>
        </div>
        <div>
          <dt>添付ファイルの最大容量</dt>
          <dd>
            10MB（1ファイルあたり）
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※
              送信メール1通あたりの添付ファイルの上限数は50件です。添付ファイルの上限数を超過した場合、容量に関わらず送信できない場合があります。容量などにより上限数が前後する場合があります。予めご了承ください。
            </TxtCap>
          </dd>
        </div>
      </DescriptionListDefault>
    </div>
  )
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイル公式メールサービス「楽メール」のサービス紹介。楽天モバイルのドメイン（@rakumail.jp）でメールアドレスを設定いただくことで、メールサービスがご利用いただけます。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        <HeroContainer>
          <HeroSub>
            <HeroCap as="p">※表記の金額はすべて税込です。</HeroCap>
            <HeroLabel>
              <LabelList {...labelArgs} />
            </HeroLabel>
          </HeroSub>

          <HeroMain>
            <h1>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${assets}img/service/rakumail/hero_sp-230414.png`}
                  width="834"
                />
                <img
                  src={`${assets}img/service/rakumail/hero_pc.png`}
                  alt="楽天モバイル公式メールサービス　メールがもっと、あんしん、便利に。　楽メール"
                  width="100%"
                />
              </picture>
            </h1>
          </HeroMain>
        </HeroContainer>

        <SystemContainer className={Utils['Mt-24']}>
          <p>
            楽天モバイル公式メールサービスです。楽天モバイルのドメイン（@rakumail.jp）でメールアドレスを設定いただくことで、メールサービスがご利用いただけます。
          </p>
          <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
            <PriceNumberFree>無料</PriceNumberFree>
          </div>
          <TxtEmp01 className={Utils['Mt-8']} as="p">
            <TxtCap>
              ※「Rakuten最強プラン（データタイプ）」は対象外です。
            </TxtCap>
          </TxtEmp01>
          <TxtCap as="p">
            ※初期設定が必要。データ利用量としてカウントされます。
            <br />
            ※楽天モバイル（楽天回線）のご契約が必要。楽天IDに対して、1つのメールアドレスの設定が可能。複数回線をご契約の場合も同様。
            <br />
            ※ストレージ容量の上限を超える場合、メールの送受信が制限される場合があります。受信されなかったメールは、後日ストレージ容量が空いた場合でも受信できないことがあります。
          </TxtCap>
        </SystemContainer>

        <SystemContainer className={Utils['Mt-32']}>
          <InfoboxBorder>
            <Heading level="3" className={Utils['Align-center']}>
              ご利用までは簡単2ステップ
            </Heading>
            <UseStep>
              <p className="read">
                難しいメール設定は不要。メールアドレスを設定後、すぐにご利用いただけます。
              </p>
              <div className={`${Utils['Align-center']} img`}>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${assets}img/service/rakumail/img-step01-sp.png?220711`}
                    width="380"
                  />
                  <img
                    src={`${assets}img/service/rakumail/img-step01.png?220711`}
                    width="760"
                    height="310"
                    alt="メールアドレスを決める→Rakuten Linkアプリ内で利用開始"
                  />
                </picture>
              </div>
              <div className="btn">
                <ButtonRegular
                  as="a"
                  href="/guide/rakumail/initial-setting/#setting01"
                >
                  メールアドレス設定方法を見る
                </ButtonRegular>
              </div>
            </UseStep>
          </InfoboxBorder>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge
              as="a"
              href="/guide/rakumail/?l-id=service_rakumail_guide_rakumail"
            >
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>

          <ServiceLink>
            <li>
              <InfoboxLight>
                <LinkIconBefore
                  href="#about"
                  onClick={e => anchorCallback(e, 'about')}
                >
                  <IconArrowDown />
                  楽メールとは
                </LinkIconBefore>
              </InfoboxLight>
            </li>
            <li>
              <InfoboxLight>
                <LinkIconBefore
                  href="#feature"
                  onClick={e => anchorCallback(e, 'feature')}
                >
                  <IconArrowDown />
                  特長
                </LinkIconBefore>
              </InfoboxLight>
            </li>
            <li>
              <InfoboxLight>
                <LinkIconBefore
                  href="#functional"
                  onClick={e => anchorCallback(e, 'functional')}
                >
                  <IconArrowDown />
                  機能・仕様
                </LinkIconBefore>
              </InfoboxLight>
            </li>
            <li>
              <InfoboxLight>
                <LinkIconBefore
                  href="#caution"
                  onClick={e => anchorCallback(e, 'caution')}
                >
                  <IconArrowDown />
                  注意事項
                </LinkIconBefore>
              </InfoboxLight>
            </li>
          </ServiceLink>
        </SystemContainer>

        <GrayBox
          className={`${Utils['Mt-56']} ${Utils['Pt-56']} ${Utils['Pb-48']}`}
        >
          <SystemContainer>
            <Heading as="h3" level="3" id="about">
              楽メールとは
            </Heading>
            <MediaGrid className={Utils['Mt-32']}>
              <MediaImage>
                <img
                  src={`${assets}img/service/rakumail/img-01.png`}
                  alt=""
                  width="646"
                  height="400"
                />
              </MediaImage>
              <div>
                <p>
                  楽天モバイルのRakuten
                  Linkアプリ内で、メールサービスが無料でご利用いただけます。
                </p>
                <TxtCap as="p">
                  ※楽メールのご利用は、データ利用量としてカウントされます。
                </TxtCap>
                <InfoboxWhite className={Utils['Mt-24']}>
                  <p>お好きなメールアドレスを設定いただけます</p>
                  <TxtCap as="p">
                    ※すでに他の方が登録済のメールアドレスは設定いただけません。
                  </TxtCap>
                  <AlphanumericSize as="p" size="m" className={Utils['Mt-8']}>
                    ●●●●@rakumail.jp
                  </AlphanumericSize>
                </InfoboxWhite>
              </div>
            </MediaGrid>
            <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
              <ButtonRegularLarge
                as="a"
                href="/guide/rakumail/initial-setting/#setting01"
              >
                メールアドレス設定方法を見る
              </ButtonRegularLarge>
            </div>

            <MediaList2 className={Utils['Pt-32']}>
              <div>
                <Heading as="h4" level="4" className={Utils['Align-center']}>
                  楽天ドメインのメールが使える
                </Heading>
                <MediaImage className={`${Utils['Mt-16']} ${Utils['Mb-16']}`}>
                  <img
                    src={`${assets}img/service/rakumail/img-02.png?220711`}
                    alt=""
                    width="328"
                  />
                </MediaImage>
                <p>
                  NTTドコモ、au、SoftBankの携帯メールアドレスはもちろん、GmailやYahoo!メールなどのメールアドレスともメールの送受信が可能です。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※メール受信先が迷惑メール対策としてメール送信元を制限（メール受信設定、ドメイン指定受信など）している等の理由により、送信したメールが正常に届かないことがあります。
                </TxtCap>
              </div>
              <div>
                <Heading as="h4" level="4" className={Utils['Align-center']}>
                  会員情報の登録にも使える
                </Heading>
                <MediaImage className={`${Utils['Mt-16']} ${Utils['Mb-16']}`}>
                  <img
                    src={`${assets}img/service/rakumail/img-03.png`}
                    alt=""
                    width="328"
                  />
                </MediaImage>
                <p>
                  設定いただく楽メールアドレス（●●●@rakumail.jp）を、ネットショッピングの会員登録時などの、各種メールアドレス設定にご利用いただけます。
                </p>
              </div>
            </MediaList2>

            <Heading level="3" id="feature" className={Utils['Mt-56']}>
              特長
            </Heading>
            <MediaList3 className={Utils['Pt-16']}>
              <div>
                <ColumnTitle level="4" className={Utils['Align-center']}>
                  あんしんのセキュリティ対策
                </ColumnTitle>
                <MediaImage className={`${Utils['Mt-16']} ${Utils['Mb-16']}`}>
                  <img
                    src={`${assets}img/service/rakumail/img-04.png`}
                    alt=""
                  />
                </MediaImage>
                <p className={Utils['Mt-16']}>
                  フィルター機能のセキュリティ対策が充実。様々な迷惑メールフィルター機能を設定いただくことで、安心してご利用いただけます。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※迷惑メールではないメールが受信拒否又は迷惑メールフォルダーに保存されたり、迷惑メールが受信フォルダに保存される場合があります。
                </TxtCap>
              </div>
              <div>
                <ColumnTitle level="4" className={Utils['Align-center']}>
                  大きな容量のメール送受信も可能
                </ColumnTitle>
                <MediaImage className={`${Utils['Mt-16']} ${Utils['Mb-16']}`}>
                  <img
                    src={`${assets}img/service/rakumail/img-05.png`}
                    alt=""
                  />
                </MediaImage>
                <p className={Utils['Mt-16']}>
                  メール受信は最大50MBなので、容量の大きな添付ファイルの受信が可能。また、メールの送信は最大25MB（1つのファイル添付につき最大10MB）なので、動画や容量の大きな写真の送信も可能です。
                </p>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※容量や上限を超過する場合、送受信できない場合があります。添付ファイルは一定の上限数を超過した場合、容量に関わらず送信できない場合があります。
                </TxtCap>
              </div>
              <div>
                <ColumnTitle level="4" className={Utils['Align-center']}>
                  Rakuten Linkアプリで一括管理できて便利
                </ColumnTitle>
                <MediaImage className={`${Utils['Mt-16']} ${Utils['Mb-16']}`}>
                  <img
                    src={`${assets}img/service/rakumail/img-06.png`}
                    alt=""
                  />
                </MediaImage>
                <p className={Utils['Mt-16']}>
                  楽メールはRakuten Linkアプリ内でご利用いただけます。
                  <br />
                  Rakuten
                  Linkアプリの通話やメッセージ機能と合わせて、アプリ内で一括で管理が可能。操作も簡単です。
                </p>
                <p className={Utils['Mt-8']}>
                  <LinkIconAfter href="/service/rakuten-link/?l-id=service_rakumail_service_rakuten-link">
                    Rakuten Linkアプリの詳細を見る
                    <IconChevronRight />
                  </LinkIconAfter>
                </p>
              </div>
            </MediaList3>
          </SystemContainer>
        </GrayBox>
        <SystemContainer className={Utils['Mt-56']}>
          <Heading level="3" id="functional">
            機能・仕様
          </Heading>
          <TxtCap as="p" className={Utils['Mt-8']}>
            ※楽メールのご利用にはインターネット接続が必要です。
            <br />
            接続がない場合に受信したメールは、受信リストに表示されません。インターネット環境下でご利用ください。
          </TxtCap>
          <Tab
            className={Utils['Mt-24']}
            heading1={heading1}
            heading2={heading2}
            content1={<Content1 />}
            content2={<Content2 />}
            id1="tab-menu1"
            id2="tab-menu2"
          />
        </SystemContainer>

        <SystemContainer className={Utils['Mt-56']}>
          <Heading level="3" id="caution">
            注意事項
          </Heading>
          <UlOnly className={Utils['Mt-16']}>
            <li>
              <TxtEmp01>迷惑メールへの対策</TxtEmp01>
              <br />
              迷惑メールに関するお問い合わせまたは申告については以下よりご連絡ください。
              <br />
              <LinkIconAfter href="/guide/anti-spam/?l-id=service_rakumail_guide_anti-spam">
                迷惑メールを申告する方法
                <IconChevronRight />
              </LinkIconAfter>
              <br />
              <TxtCap>
                ※楽メールを利用して迷惑行為を行った場合、事前に通知をすることなく、本サービスの全部または一部の提供を停止または中断する場合があります。
              </TxtCap>
            </li>
            <li>
              <TxtEmp01>解約について</TxtEmp01>
              <br />
              楽メールのみの解約は受け付けておりません。
              <br />
              <TxtEmp02>
                ご契約中のすべての楽天モバイル（楽天回線）の解約から31日間は、メールアカウント・データは削除されずに保持されます。
                <br />
              </TxtEmp02>
              ・回線解約もしくはMNP転出後、楽メールを使用するには、
              <TxtEmp02>
                解約から31日以内に有料オプションサービス「楽メール持ち運び」のお申し込みが必要です。
              </TxtEmp02>
              <br />
              <LinkIconAfter href="/service/rakumail-portability/?l-id=service_rakumail_service_rakumail-portability">
                楽メール持ち運びの詳細を見る
                <IconChevronRight />
              </LinkIconAfter>
              <br />
              <TxtEmp02>
                ・解約から31日を過ぎるとユーザーが再度、回線契約をしても、メールアカウントおよびメールボックス内のメールは復旧できません。
              </TxtEmp02>
              <br />
              <TxtCap>
                <TxtEmp02>
                  ※楽天モバイル（楽天回線）契約後、再度楽メールのご利用を希望される場合には、改めて楽メール利用規約に同意、メールアドレスの登録などの手続を行う必要があります。この手続きを経ても、一度削除されたメールアカウントおよびメールボックス内のメールの復旧はできません。
                </TxtEmp02>
              </TxtCap>
            </li>
            <li>
              <TxtEmp01>譲渡について</TxtEmp01>
              <br />
              メールデータやメールアカウントの譲渡はできません。
              <br />
              楽天モバイル（楽天回線）を譲渡する場合、楽メールは楽天IDに紐づいているため、譲渡先は譲渡元の楽メールアカウントにアクセスできません。
              <br />
              <TxtCap>
                ※譲渡したのは回線であり、使用する楽天IDが異なるため。
                <br />
                譲渡先は、楽メールを申し込みましたら、回線契約時に利用した楽天IDに紐づく新しい楽メールアカウントが付与されます。
              </TxtCap>
            </li>
            <li>
              <TxtEmp01>楽天IDの退会・変更</TxtEmp01>
              <br />
              現在ご利用中の楽天IDを退会・変更すると、楽メールアカウントにアクセスできなくなります。
              <br />
              my 楽天モバイルでご利用中の楽天IDを変更
              した場合でも、変更後の楽天IDでRakuten
              Linkアプリに改めてログインいただくことで、今までの楽メールアカウントをご利用いただけます。
            </li>
            <li>
              楽天モバイル（ドコモ回線・au回線）で提供していたRメール（@rakuten.jp）は、楽天モバイル（楽天回線）移行後もご利用いただけ、楽メール（@rakumail.jp）と併用してご利用可能です。
            </li>
          </UlOnly>
          <AccordionList
            className={Utils['Mt-56']}
            text={`迷惑メールフィルター機能について`}
            isOpened={false}
          >
            <UlOnly>
              <li>
                「迷惑メールフィルター」は、お客様のメールアドレスが迷惑メールの可能性があるメールを受信した際に、メールを受信拒否したり、迷惑メール専用フォルダーに保存したりすることができる機能です。
              </li>
              <li>
                あらかじめ楽天モバイルの推奨するフィルター設定が適用された「おすすめフィルター設定（強）」「おすすめフィルター設定（標準）」の他、7項目のフィルターをお客様のご希望により設定することが可能です（初期設定は「おすすめフィルター設定（強）」が適用された状態です）。フィルター設定の詳細についてはFAQをご確認ください。
              </li>
              <li>
                初期設定として適用される「おすすめフィルター設定（強）」は、大量送信者からのメールの検知、DMARC（※1）を利用したなりすましメールの検知、及びウイルスメールの検知が設定されています。
              </li>
              <li>
                迷惑メールフィルターのご利用に関して、ご利用料金はかかりません。無料でご利用が可能です。
              </li>
              <li>
                なお、当メールサービスのご利用開始以降、迷惑メールフィルター機能はお客様のご要望により解除・再設定することができます。解除・再設定はサービスご利用開始後、当社が定める方法によりご設定をお願いいたします。
              </li>
            </UlOnly>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※1 DMARC（Domain-based Message Authentication, Reporting, and
              Conformance）とは、送信ドメイン認証とよばれる電子メールの送信元のドメインを認証する技術の一つです。
            </TxtCap>
            <Heading level="4" className={Utils['Mt-32']}>
              注意事項
            </Heading>
            <UlOnly className={Utils['Mt-16']}>
              <li>
                迷惑メールフィルター機能は、完全に迷惑メールを防止できることを保証しません。受信フォルダーに迷惑メールが保存されたり、迷惑メール専用フォルダーに迷惑メールではないメールが保存されたりする場合があります。また、迷惑メールではないメールが受信拒否され届かない場合もございますので、あらかじめご了承ください。
              </li>
              <li>
                迷惑メールフィルター機能をご利用いただいていない場合であっても、短時間に大量のメールの流入を検知した場合等、サービス継続の観点から当社が必要と判断した場合において、一部のメールの受信を拒否する場合があります。
              </li>
              <li>
                迷惑メールとして判定されたメールに関して、判定理由に関するお問い合わせにはお答えすることができません。
              </li>
              <li>
                迷惑メールフィルター機能を利用することにより、または利用できなかったこと
                によりお客様または第三者に発生した損害については、当社は一切の責任を負いません。
              </li>
            </UlOnly>
          </AccordionList>
          <AccordionList
            text={`DMARCによる受信メールの認証について`}
            isOpened={false}
          >
            <p>
              当メールサービスでは、なりすましメールへの対策として、DMARC（※1）による受信メールの照合を行います。受信されるメールのDMARCレコードを照合した結果、なりすましメールであると識別された場合、そのメールには送信元ドメインのDMARCポリシー（※2）に応じた処理が適用されます。
            </p>

            <Table className={Utils['Mt-16']}>
              <table>
                <tbody>
                  <tr>
                    <th>送信元ドメインのDMARCポリシー</th>
                    <th>当メールサービスでの処理</th>
                  </tr>
                  <tr>
                    <td>none</td>
                    <td>受信フォルダーに受信する（※3）</td>
                  </tr>
                  <tr>
                    <td>quarantine</td>
                    <td>迷惑メール専用フォルダーに受信する</td>
                  </tr>
                  <tr>
                    <td>reject</td>
                    <td>メールを受信拒否し、送信元に対しエラーを通知する</td>
                  </tr>
                </tbody>
              </table>
            </Table>

            <p className={Utils['Mt-16']}>
              なお、当メールサービスから送信されるメールは、DMARCポリシーを「reject」として送信されています。このため、rakumail.jpドメインを偽装したメールを受信した場合は、受信者側で「reject」に応じた処理がなされます。「reject」処理が行われた場合、送信先のお客様はそのメール内容を確認することができない場合があります。
            </p>
            <TxtCap as="p" className={Utils['Mt-16']}>
              ※1 DMARC（Domain-based Message Authentication, Reporting, and
              Conformance）とは、送信ドメイン認証とよばれる電子メールの送信元のドメインを認証する技術の一つです。
              <br />
              ※2
              DMARCポリシーとは、メールの正規の送信元による「なりすましメール」の取り扱いに関する定義のことを指します。
              <br />
              ※3
              DMARC以外のフィルターによって迷惑メールと判定されたメールは、迷惑メール専用フォルダーに保存されるか
              、受信拒否されます。
            </TxtCap>
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <ButtonRegularLarge
              as="a"
              href="/guide/rakumail/?l-id=service_rakumail_guide_rakumail"
            >
              ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>

        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="rakumail"
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

      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ServiceRakumail
