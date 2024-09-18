import { Heading } from '@components/atoms/Heading'
import { LinkIconAfter } from '@components/atoms/Link'
import { ListDisc } from '@components/atoms/List'
import { TxtCap } from '@components/atoms/Txt'
import { IconNewTabLine } from '@components/icons'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'

const ListDiscLinkIconAfter = styled(LinkIconAfter)`
  text-indent: initial;
`

export enum SolutionStatus {
  RAKUTEN_LINK_INSTALL = 1,
  UPGRADING_FIRMWARE = 2,
  AIRPLANE_MODE = 3,
  SIM_CARD_REMOVAL_INSERTION = 4,
  ALL_NOTIFICATIONS_IN_THE_APP_ON = 5,
  SILENT_MODE_OFF = 6,
  NETWORK_CONNECTION = 7,
  VPN_CONNECTION = 8,
  PRODUCT_OS_UPDATE = 9,
  RAKUTEN_LINK_DESKTOP_ENV_CHECK = 10,
  RAKUTEN_LINK_DESKTOP_APP_ACTIONS = 11,
}

export type FlowItem = {
  title: string
  text: string | JSX.Element
  img?: number
  cap?: string
  flow?: Array<{
    title: string
    text?: string | JSX.Element
    cap?: string
    img?: number
  }>
}

export const iosFlowList: Partial<Record<SolutionStatus, FlowItem>> = {
  [SolutionStatus.RAKUTEN_LINK_INSTALL]: {
    title: 'Rakuten Linkアプリの再インストール／ログイン',
    text: (
      <>
        <p>
          Rakuten
          Linkアプリを一度ログアウトしたのち、アプリをアンインストールして、再度アプリストアからインストールし、ご利用の楽天IDでログインしてください。
        </p>
        <p className={Utils['Mt-16']}>
          解決しない場合は、お使いの製品の再起動をお試しください。
        </p>
      </>
    ),
    flow: [
      {
        title: '1. 左上のメニューにある「ログアウト」をタップします。',
        img: 2,
      },
      {
        title:
          '2. ホーム画面に戻り、Rakuten Linkアプリを長押しし「Appを削除」をタップします。',
        img: 1,
      },
      {
        title: '3. App Storeより再度インストールします。',
        img: 1,
      },
      {
        title:
          '4. アプリを起動後、各同意ボタンをタップしインストールを完了します。',
        img: 3,
      },
      {
        title: '5. 楽天IDでログインします。',
        text: 'my 楽天モバイルへのログインの際に使用したユーザIDとパスワードを入力してください。',
        cap: '※楽天会員でない場合は、「楽天会員に登録（無料）」をタップし、新規にアカウントを作成してください。',
        img: 1,
      },
      {
        title: '6. 電話番号を入力して認証します。',
        img: 1,
      },
    ],
  },
  [SolutionStatus.UPGRADING_FIRMWARE]: {
    title: 'OSを最新に更新／ファームウェアのバージョンアップ',
    text: (
      <p>
        OS、ファームウェアが最新のバージョンになっていない場合は更新をしてください。
      </p>
    ),
    flow: [
      {
        title: '1. 「設定」をタップします。',
        img: 1,
      },
      {
        title: '2. 「一般」をタップします。',
        img: 1,
      },
      {
        title: '3. 「ソフトウェア・アップデート」をタップします。',
        img: 1,
      },
      {
        title: '4. お使いのシステムが最新の状態か確認します。',
        text: 'OS、ファームウェアが最新のバージョンになっていない場合は更新をしてください。',
        img: 1,
      },
    ],
  },
  [SolutionStatus.AIRPLANE_MODE]: {
    title: '機内モードのON／OFF',
    text: <p>「設定」から、機内モードを一度ONにしてからOFFにしてください。</p>,
  },
  [SolutionStatus.SIM_CARD_REMOVAL_INSERTION]: {
    title: 'SIMカードの抜き差し',
    text: (
      <p>
        一度Rakuten
        Linkアプリからログアウトし、本体の電源を切った後、SIMカードを抜いて再度差し込んでください。
        また、SIMカードがご契約者ご本人のものかご確認ください。
      </p>
    ),
  },
  [SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON]: {
    title: '本体の権限、通知すべてON​',
    text: <p>Rakuten Linkアプリの通知をすべてONにしてください。</p>,
    flow: [
      {
        title: '1. 「設定」をタップします。',
        img: 1,
      },
      {
        title: '2. 「Link」をタップします。',
        img: 1,
      },
      {
        title: '3. 権限をすべてONにします。',
        img: 1,
      },
      {
        title: '4. 「通知」をタップし「通知を許可」をONにします。',
        img: 2,
      },
    ],
  },
  [SolutionStatus.SILENT_MODE_OFF]: {
    title: 'おやすみモードを解除',
    text: <p>「設定」から、おやすみモードをOFFにしてください。</p>,
    flow: [
      {
        title: '1. 「設定」をタップします。',
        img: 1,
      },
      {
        title: '2. 「おやすみモード」をタップします。',
        img: 1,
      },
      {
        title: '3. 「おやすみモード」をOFFにします。',
        img: 1,
      },
    ],
  },
}

export const androidFlowList: Partial<Record<SolutionStatus, FlowItem>> = {
  [SolutionStatus.RAKUTEN_LINK_INSTALL]: {
    title: 'Rakuten Linkアプリの再インストール／ログイン',
    text: (
      <>
        <p>
          Rakuten
          Linkアプリを一度ログアウトしたのち、アプリをアンインストールして、再度アプリストアからインストールし、ご利用の楽天IDでログインしてください。
        </p>
        <p className={Utils['Mt-16']}>
          解決しない場合は、お使いの製品の再起動をお試しください。
        </p>
      </>
    ),
    flow: [
      {
        title: '1. 左上のメニューにある「ログアウト」をタップします。',
        img: 2,
      },
      {
        title:
          '2. ホーム画面に戻り、Rakuten Linkアプリを長押しし「アンインストール」をタップします。',
        img: 1,
      },
      {
        title: '3. Google Playストアより「インストール」をタップします。',
        img: 1,
      },
      {
        title:
          '4. アプリを起動後、各同意ボタンをタップしインストールを完了します。',
        img: 3,
      },
      {
        title: '5. 楽天IDでログインします。',
        text: 'my 楽天モバイルへのログインの際に使用したユーザIDとパスワードを入力してください。',
        cap: '※楽天会員でない場合は、「楽天会員に登録（無料）」をタップし、新規にアカウントを作成してください。',
        img: 1,
      },
    ],
  },
  [SolutionStatus.UPGRADING_FIRMWARE]: {
    title: 'OSを最新に更新／ファームウェアのバージョンアップ',
    text: (
      <p>
        OS、ファームウェアが最新のバージョンになっていない場合は更新をしてください。
      </p>
    ),
    flow: [
      {
        title: '1. 「設定」をタップします。',
        img: 1,
      },
      {
        title: '2. 「システム」をタップします。',
        img: 1,
      },
      {
        title: '3. 「詳細設定」をタップします。',
        img: 1,
      },
      {
        title: '4. 「システムアップデート」をタップします。',
        img: 1,
      },
      {
        title: '5. お使いのシステムが最新の状態か確認します。',
        text: 'OS、ファームウェアが最新のバージョンになっていない場合は更新をしてください。',
        img: 1,
      },
    ],
  },
  [SolutionStatus.AIRPLANE_MODE]: {
    title: '機内モードのON／OFF',
    text: <p>「設定」から、機内モードを一度ONにしてからOFFにしてください。</p>,
  },
  [SolutionStatus.SIM_CARD_REMOVAL_INSERTION]: {
    title: 'SIMカードの抜き差し',
    text: (
      <p>
        一度Rakuten
        Linkアプリからログアウトし、本体の電源を切った後、SIMカードを抜いて再度差し込んでください。
        また、SIMカードがご契約者ご本人のものかご確認ください。
      </p>
    ),
  },
  [SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON]: {
    title: 'アプリ内の通知すべてON',
    text: <p>Rakuten Linkアプリの通知をすべてONにしてください。</p>,
    flow: [
      {
        title: '1. 「設定」をタップします。',
        img: 1,
      },
      {
        title: '2. 「アプリと通知」をタップします。',
        img: 1,
      },
      {
        title: '3. 「●個のアプリをすべて表示」をタップします。',
        img: 1,
      },
      {
        title: '4. 「Link」をタップします。',
        img: 1,
      },
      {
        title: '5. 「通知」をタップします。',
        img: 1,
      },
      {
        title: '6.「Linkのすべての通知」をONにします。',
        img: 1,
      },
    ],
  },
  [SolutionStatus.SILENT_MODE_OFF]: {
    title: 'サイレントモードを解除',
    text: (
      <p>
        「設定」から、サイレントモード（DNDモード、おやすみモード、スリープモード）をOFFにしてください。
      </p>
    ),
    flow: [
      {
        title: '1. 「設定」をタップします。',
        img: 1,
      },
      {
        title: '2. 「音」をタップします。',
        img: 1,
      },
      {
        title: '3. 「サイレントモード」をタップします。',
        img: 1,
      },
      {
        title: '4. 「今すぐOFFにする」をタップします。',
        img: 1,
      },
    ],
  },
}

export const desktopFlowList: Partial<Record<SolutionStatus, FlowItem>> = {
  [SolutionStatus.NETWORK_CONNECTION]: {
    title: 'インターネット接続のON／OFF',
    text: (
      <p>
        Wi-Fi等のインターネット接続をOFFにしてからONにし、再度インターネットに接続してください。
      </p>
    ),
  },
  [SolutionStatus.VPN_CONNECTION]: {
    title: 'VPN（バーチャルプライベートネットワーク）接続の確認',
    text: (
      <p>
        VPN（バーチャルプライベートネットワーク）に接続している場合、通話がご利用できない場合があります。現在使用中のVPNをOFFにして再度お試しください。
        <br />
        <TxtCap as="span">
          ※VPNサービスをご利用時に行った操作・通話については、Rakuten
          Linkの動作保証対象外です。
        </TxtCap>
      </p>
    ),
  },
  [SolutionStatus.PRODUCT_OS_UPDATE]: {
    title: 'ご利用製品のOSアップデート',
    text: (
      <>
        <p>
          2023年8月現在、Rakuten
          Linkデスクトップ版をご利用いただくには、下記のOSを搭載した製品が必要です。
          <br />
          最新版のOSにアップデートしてご利用ください。
        </p>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: 'Windows: Windows10 以降',
            },
            {
              text: 'MacOS: MacOS10.15 以降',
            },
          ]}
        />
        <p className={Utils['Mt-16']}>
          OSに関するご不明点がある際は、ご利用製品の提供元へお問い合わせください。
        </p>
      </>
    ),
  },
  [SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK]: {
    title: 'Rakuten Linkデスクトップ版の推奨利用環境を確認',
    text: (
      <>
        <p>
          Rakuten
          Linkデスクトップ版の推奨利用環境については以下の通りになります。
          <br />
          快適にご利用いただくには、推奨利用環境での利用をお願いいたします。
        </p>
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          Rakuten Linkデスクトップ版対応OS
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: 'Windows: Windows10 以降',
            },
            {
              text: 'MacOS: MacOS10.15 以降',
            },
          ]}
        />
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          CPU
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: '1.80GHz以上',
            },
          ]}
        />
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          メモリ
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: '1GB以上',
            },
          ]}
        />
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          ストレージ
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: '空き容量4GB以上',
            },
          ]}
        />
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          Rakuten Linkスマートフォン版アプリバージョン
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: 'Android: 2.16以降',
            },
            {
              text: 'iOS: 2.14.1以降',
            },
          ]}
        />
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          対象スマートフォン
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: (
                <>
                  上記アプリバージョンに対応するスマートフォン機種は
                  <ListDiscLinkIconAfter
                    href="https://r10.to/Link135"
                    target="_blank"
                  >
                    こちら
                    <IconNewTabLine />
                  </ListDiscLinkIconAfter>
                  よりRakuten Linkデスクトップ版アプリをインストールします。
                </>
              ),
            },
          ]}
        />
        <Heading level="4" as="h3" className={Utils['Mt-32']}>
          ご注意
        </Heading>
        <ListDisc
          className={Utils['Mt-16']}
          text={[
            {
              text: '楽天モバイルをご契約中のお客様のみご利用できます。',
            },
            {
              text: 'Rakuten Link をご利用でない自社回線、他社回線や固定電話のお相手との通話・SMS の際は、Rakuten Link デスクトップ版がログイン元スマートフォンと同一の Rakuten Link アカウントでログインの上、パソコンがそのスマートフォンとテザリングをしている、または同じ Wi-Fi 環境にいることが条件となります。',
            },
            {
              text: (
                <>
                  推奨環境でない機器でもご利用いただけることがありますが動作保証外となります。
                  <br />
                  また、今後の仕様の変更などによりご利用いただけなくなる可能性がございます。
                </>
              ),
            },
            {
              text: '推奨環境を満たしている場合でもお客様個別の環境により動作しないことがございます。',
            },
          ]}
        />
      </>
    ),
  },
  [SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS]: {
    title:
      'Rakuten Linkデスクトップ版アプリの再インストール／ログイン／パソコンの再起動',
    text: (
      <p>
        Rakuten
        Linkデスクトップ版アプリを一度ログアウトしたのち、アプリをアンインストールして、パソコンを再起動してください。
        <br />
        その後、Rakuten Linkデスクトップ版アプリを
        <LinkIconAfter href="https://r10.to/Link134" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        からインストールし、パソコンを再起動後、QRコードをスキャンしてログインしてください。
      </p>
    ),
    flow: [
      {
        title:
          '1. 左上のプロフィール画像をクリックし、一覧にある「ログアウト」をタップします。',
        img: 3,
      },
      {
        title:
          '2. Rakuten Linkデスクトップ版アプリを「アンインストール」します。',
        text: (
          <>
            ご利用の製品によってアンインストール方法が異なります。
            <br />
            恐れ入りますが、ご利用の製品に合わせてアンインストールの対応をお願いいたします。
          </>
        ),
      },
      {
        title: '3. パソコンを再起動します。',
        text: (
          <>
            ご利用の製品によって再起動方法が異なります。
            <br />
            恐れ入りますが、ご利用の製品に合わせて再起動の対応をお願いいたします。
          </>
        ),
      },
      {
        title: '4. 再インストールします。',
        text: (
          <>
            <LinkIconAfter href="https://r10.to/Link134" target="_blank">
              こちら
              <IconNewTabLine />
            </LinkIconAfter>
            よりRakuten Linkデスクトップ版アプリをインストールします。
          </>
        ),
      },
      {
        title: '5. パソコンを再起動します。',
        text: (
          <>
            ご利用の製品によって再起動方法が異なります。
            <br />
            恐れ入りますが、ご利用の製品に合わせて再起動の対応をお願いいたします。
          </>
        ),
      },
      {
        title: '6. QRコードをスキャンしてログインします。',
        text: 'Rakuten Linkデスクトップ版アプリを起動後、QRコードをスキャンしてログインします。',
        img: 1,
      },
    ],
  },
}
