import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import { AccordionList } from '@components/atoms/AccordionList'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { Heading } from '@components/atoms/Heading'
import { LabelList } from '@components/atoms/Label'
import { ListDisc } from '@components/atoms/List'
import {
  AlphanumericSize,
  TxtCap,
  TxtEmp01,
  TxtSize,
} from '@components/atoms/Txt'
import { Recommend } from '@components/include/service/Recommend'
import { MediaGrid } from '@components/layout/Media'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { CustomHead } from '@components/utils/CustomHead'
import Utils from '@styles/Utils.module.scss'
import { Related } from '@components/include/service/Related'

const GrayBox = styled.div`
  padding: 56px 0;
  background-color: ${props => props.theme.colors.monotone97};
`
const BgGray = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
`

const ServiceContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  column-gap: 24px;
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;
  }
`
const DescriptionListDefaultCustom = styled(DescriptionListDefault)`
  dt {
    ${mixins.mq.MinL} {
      width: 33.3%;
    }
  }
`

const ServiceRemoteSupportForDeviceOperation: NextPage = () => {
  const selectedCardIds = ['i-filter']
  const pagetitle = 'スマホ操作遠隔サポート'
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
    item: [{ text: 'サポート', isEmp: false }],
  }

  const ListArgs1 = {
    text: [
      {
        text: '電話の基本操作や電話帳の登録',
      },
      {
        text: 'マナーモード設定方法',
      },
      {
        text: 'アプリの取得、初期設定、操作方法',
      },
      {
        text: 'アプリ起動の不具合における設定確認',
      },
      {
        text: 'ブックマーク登録方法',
      },
      {
        text: 'テザリング設定基本操作',
      },
      {
        text: 'データバックアップの作成、トラブル対応',
      },
      {
        text: '定番アプリの案内',
      },
      {
        text: '製品故障診断',
      },
      {
        text: '海外利用に関する案内',
      },
      {
        text: 'iOSアクティベーション、iOSバージョンアップ',
      },
      {
        text: 'バックアップからの復旧',
      },
      {
        text: 'パソコン（iTunes）との同期設定',
      },
      {
        text: 'パソコンへの写真データ取り込み',
      },
    ],
  }

  const ListArgs2 = {
    text: [
      {
        text: 'OS（Windows、MacOS、Android、iOS）の基本操作',
      },
      {
        text: 'フレッツ接続ツール等NTT提供ソフトウェア',
      },
      {
        text: 'ブラウザ、メーラーの基本的操作方法／トラブルシュート',
      },
      {
        text: '年賀状作成ソフト、デジカメの専用ソフト等',
      },
      {
        text: 'Office全般の基本操作',
      },
      {
        text: '全セキュリティソフトのインストール及び設定',
      },
    ],
  }

  const ListArgs3 = {
    text: [
      {
        text: 'パソコン、テレビ及び家庭内ネットワークとの接続',
      },
      {
        text: 'プリンタなどの周辺機器設定やSTBの初期設定／操作方法、ゲーム機のネットワーク設定',
      },
    ],
  }

  const ListArgs4 = {
    text: [
      {
        text: 'プロバイダサービス（インターネット接続、メール設定）',
      },
      {
        text: '有線、無線LAN設定／トラブルシュート',
      },
      {
        text: 'ISP切替（初期接続設定）',
      },
      {
        text: 'モバイルルーター（WiMAX、LTE）設定等',
      },
      {
        text: 'スマートフォンやタブレットのWi-Fi設定',
      },
    ],
  }

  const ListArgs5 = {
    text: [
      {
        text: 'その他インターネット上の各種サービス （Web メール、映像配信･交換、音楽ダウンロード 等）',
      },
      {
        text: 'データバックアップ／データ移行',
      },
      {
        text: '簡易入力案内（IME等）',
      },
      {
        text: 'その他トラブルシュート全般',
      },
    ],
  }

  const ListArgs6 = {
    text: [
      {
        text: '月途中で加入または解約された場合、月額利用料が日割りとなります。',
      },
      {
        text: 'ネットワーク通信機能のある全てのスマートデバイスについて、公開されているホームページや取扱説明書などを確認し、できる限りのサポートをさせていただきます。ただし、一部対象外となる項目がございます。',
      },
      {
        text: '本サービスをご利用になれるのは、本サービスのご契約者ご本人様のみとなります。ご契約者様以外の方による利用が確認された場合は、サポートをお断りさせていただきますので、ご了承ください。',
      },
    ],
  }
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルの「スマホ操作遠隔サポート」サービス紹介。テクニカル分野に精通したプロの専任オペレータが、スマートフォン（スマホ）だけでなく、さまざまなデジタルデバイスのお困りごとにお答えします"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-8']}>
            スマホ操作遠隔サポート
          </Heading>
          <div className={Utils['Mt-24']}>
            <LabelList {...labelArgs} />
          </div>
          <MediaGrid className={`${Utils['Mt-24']} ${Utils['Pb-32']}`}>
            <div>
              <img
                src={`${assets}img/service/remote-support-for-device-operation/img-01.png`}
                alt=""
                width="343"
                height="172"
              />
            </div>
            <div>
              テクニカル分野に精通したプロの専任オペレータが、スマートフォンだけでなく、さまざまなデジタル機器のお困りごとにお答えします。
              <div className={`${Utils['Align-right']} ${Utils['Mt-24']}`}>
                <TxtEmp01>
                  <AlphanumericSize size="l">550</AlphanumericSize>
                  <TxtSize size="s">円／月</TxtSize>
                </TxtEmp01>
              </div>
              <div className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
                <ButtonRegularLarge
                  href="/guide/remote-support-for-device-operation/"
                  as="a"
                >
                  お申し込み・ご利用方法を見る
                </ButtonRegularLarge>
              </div>
            </div>
          </MediaGrid>
        </SystemContainer>
        <GrayBox>
          <SystemContainer>
            <Heading level="2">
              専任オペレータが、電話で話しながらお客様のスマホ、パソコン、タブレット画面を遠隔操作してサポート！
            </Heading>
            <Heading level="3" className={Utils['Mt-56']}>
              主なサポート例
            </Heading>
            <Heading level="4" className={Utils['Mt-32']}>
              スマートフォン・タブレット・ケータイ
            </Heading>
            <ServiceContent>
              <li>
                <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                  <img
                    src={`${assets}img/service/remote-support-for-device-operation/img-02.png`}
                    alt=""
                    width="656"
                    height="376"
                  />
                </div>
                <Heading level="4" className={Utils['Mt-24']}>
                  遠隔操作でサポート
                </Heading>
                <p className={Utils['Mt-16']}>
                  お客様の画面を遠隔で確認しながら問題解決をサポートします。
                </p>
              </li>
              <li>
                <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                  <img
                    src={`${assets}img/service/remote-support-for-device-operation/img-03.png`}
                    alt=""
                    width="656"
                    height="376"
                  />
                </div>
                <Heading level="4" className={Utils['Mt-24']}>
                  Wi-Fi設定、メール設定
                </Heading>
                <p className={Utils['Mt-16']}>
                  Wi-Fiやメールの設定方法について、ご説明・サポートします。
                </p>
              </li>
              <li>
                <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                  <img
                    src={`${assets}img/service/remote-support-for-device-operation/img-04.png`}
                    alt=""
                    width="656"
                    height="376"
                  />
                </div>
                <Heading level="4" className={Utils['Mt-24']}>
                  データ移行
                </Heading>
                <p className={Utils['Mt-16']}>
                  古い機種から新しい機種へのデータ移行などについて、詳しくご説明・サポートします。
                </p>
              </li>
            </ServiceContent>
          </SystemContainer>
        </GrayBox>
        <SystemContainer>
          <DescriptionListDefaultCustom className={Utils['Mt-80']}>
            <div>
              <dt>その他サポート例</dt>
              <dd>
                <ListDisc {...ListArgs1} />
              </dd>
            </div>
            <div>
              <dt>ソフトウェア</dt>
              <dd>
                <ListDisc {...ListArgs2} />
              </dd>
            </div>
            <div>
              <dt>周辺機器</dt>
              <dd>
                <ListDisc {...ListArgs3} />
              </dd>
            </div>
            <div>
              <dt>ネットワーク／Wi-Fi設定</dt>
              <dd>
                <ListDisc {...ListArgs4} />
              </dd>
            </div>
            <div>
              <dt>パソコン本体／Web関連</dt>
              <dd>
                <ListDisc {...ListArgs5} />
              </dd>
            </div>
            <div>
              <dt>遠隔システム動作環境</dt>
              <dd>
                <Heading level="4">
                  OSのバージョン<TxtSize size="s">※</TxtSize>
                </Heading>
                <p className={Utils['Mt-8']}>
                  Android 5.0〜13.x／iOS 13.0～17.x（iPadOS
                  13.0～17.x）／Windows 10 (～22h2) 、Windows 11 (～22h2) 、
                  Windows Server 2016、 Windows Server 2019／MacOS
                  10.15（Catalina）～13（Ventura） ／ChromeOS
                  100以上（最新版を推奨）
                </p>
                <p className={Utils['Mt-8']}>※2023年10月時点</p>
                <TxtCap as="p" className={`${Utils['Mt-8']}`}>
                  ※2023年10月31日（火）追記：2023年3月時点として記載されていました動作環境のOSのバージョンとOSのサポート対象に一部誤りがございました。「Windows
                  7、Windows Server 2008 R1 R2」は2022年5月31日（火）
                  、「Windows8、Windows8.1」は2023年1月31日（火）を持ちましてサポートが終了しております。
                </TxtCap>
                <Heading level="4" className={Utils['Mt-40']}>
                  ブラウザ<TxtSize size="s">※</TxtSize>
                </Heading>
                <p className={Utils['Mt-8']}>
                  Microsoft Edge（最新Chromium版を推奨）／Mozilla
                  Firefox（最新版を推奨）／Google
                  Chrome（最新版を推奨）／Safari（最新版を推奨）
                </p>
                <p className={Utils['Mt-8']}>※2023年10月時点</p>
              </dd>
            </div>
          </DescriptionListDefaultCustom>

          <AccordionList
            text={'サポート対象範囲'}
            isOpened={false}
            className={Utils['Mt-56']}
          >
            <TxtEmp01 as="p">
              <TxtSize size="l">機器</TxtSize>
            </TxtEmp01>
            <DescriptionListDefaultCustom className={Utils['Mt-32']}>
              <div>
                <dt>サポート対象</dt>
                <dd>
                  パソコン本体、モニタ、キーボード、マウス、ルータ、無線LAN
                  アクセスポイント、ハブLANカード等のネットワーク機器、ネットワーク接続可能なゲーム機器
                </dd>
              </div>
              <div>
                <dt>サポート範囲</dt>
                <dd>
                  インターネット接続設定、家庭内ネットワークとの接続、マニュアルに記載された基本的操作
                </dd>
              </div>
            </DescriptionListDefaultCustom>
            <TxtEmp01 as="p" className={Utils['Mt-40']}>
              <TxtSize size="l">OS</TxtSize>
            </TxtEmp01>
            <DescriptionListDefaultCustom className={Utils['Mt-32']}>
              <div>
                <dt>サポート対象</dt>
                <dd>
                  Android 5.0〜13.x／iOS 13.0～17.x（iPadOS
                  13.0～17.x）／Windows 10 (～22h2) 、Windows 11 (～22h2) 、
                  Windows Server 2016、 Windows Server 2019／macOS
                  10.15（Catalina）～13（Ventura） ／ChromeOS
                  100以上（最新版を推奨）
                </dd>
              </div>
              <div>
                <dt>サポート範囲</dt>
                <dd>
                  インストール方法、個人利用を想定した基本的な操作方法、簡易診断
                </dd>
              </div>
            </DescriptionListDefaultCustom>
            <TxtEmp01 as="p" className={Utils['Mt-40']}>
              <TxtSize size="l">ソフトウェア</TxtSize>
            </TxtEmp01>
            <DescriptionListDefaultCustom className={Utils['Mt-32']}>
              <div>
                <dt>サポート対象</dt>
                <dd>
                  ブラウザ、メーラー、メディアプレーヤー、ウイルス対策、文書作成、接続設定ツール
                </dd>
              </div>
              <div>
                <dt>サポート範囲</dt>
                <dd>
                  インストール方法、初期設定、個人利用を想定した基本的な操作方法、簡易診断
                </dd>
              </div>
            </DescriptionListDefaultCustom>
            <TxtEmp01 as="p" className={Utils['Mt-40']}>
              <TxtSize size="l">接続サービス</TxtSize>
            </TxtEmp01>
            <DescriptionListDefaultCustom className={Utils['Mt-32']}>
              <div>
                <dt>サポート対象</dt>
                <dd>
                  FTTHサービス、DSLサービス、データ通信カード、プロバイダサービス、インターネット上の各種サービス
                </dd>
              </div>
              <div>
                <dt>サポート範囲</dt>
                <dd>
                  インターネット接続設定、初期設定、個人利用を想定した基本的な操作方法
                </dd>
              </div>
            </DescriptionListDefaultCustom>
            <TxtCap className={Utils['Mt-8']} as="p">
              ※サポート対象のOSは2023年10月時点の内容です。
              <br />
              ※2023年10月31日（火）追記：2023年3月時点として記載されていました動作環境のOSのバージョンとOSのサポート対象に一部誤りがございました。「Windows
              7、Windows Server 2008 R1 R2」は2022年5月31日（火）
              、「Windows8、Windows8.1」は2023年1月31日（火）を持ちましてサポートが終了しております。
            </TxtCap>
          </AccordionList>
          <AccordionList text={'ご利用上の注意'} isOpened={false}>
            <ListDisc {...ListArgs6} />
          </AccordionList>
          <div className={`${Utils['Align-center']} ${Utils['Mt-56']}`}>
            <ButtonRegularLarge
              href="/guide/remote-support-for-device-operation/"
              as="a"
            >
              お申し込み・ご利用方法を見る
            </ButtonRegularLarge>
          </div>
        </SystemContainer>
        <BgGray className={Utils['Mt-56']}>
          <SystemContainer className={`${Utils['Pt-56']} ${Utils['Pb-56']}`}>
            <Related
              lId="remote-support-for-device-operation"
              selectedIds={selectedCardIds}
              relatedTitle={'関連サービス'}
            />
            <Recommend
              className={Utils['Mt-32']}
              lId="remote-support-for-device-operation"
              hiddenFreeCall={false}
              hiddenHikari={false}
              hiddenPayment={false}
              hiddenNorton={false}
            />
          </SystemContainer>
        </BgGray>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceRemoteSupportForDeviceOperation
