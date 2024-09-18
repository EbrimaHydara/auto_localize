import { LinkIconAfter } from '@components/atoms/Link'
import { ListContents, ListDisc } from '@components/atoms/List'
import { TxtCap } from '@components/atoms/Txt'
import { IconNewTabLine } from '@components/icons'
import Utils from '@styles/Utils.module.scss'
import styled from 'styled-components'

const FaqWrap = styled.div`
  margin-top: 32px;
  > p:first-child {
    margin-top: 16px;
  }
`

export enum FaqStatus {
  LOGIN_ERROR = 1,
  ACCOUNT_LOCKED_PHONE_AUTH_FAIL = 2,
  NETWORK_FAILURE = 3,
  SCREEN_DARK_DURING_CALL = 4,
  NO_CALLER_ID_WIFI_CONNECTION = 5,
  INCOMING_CALL_REJECTED_OR_BAD_SIGNAL = 6,
  RINGTONE_SETTING_REMOVED_DUE_TO_LOGOUT = 7,
  CHARGES_INCURRED_FOR_UNDIALABLE_NUMBER = 8,
  CANNOT_RECEIVE_A2P_BY_LINK = 9,
  THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID = 10,
  GAME_RELATED_PROBLEMS = 11,
  IOS_SPECIFICATION_CHANGES_MISPERCEPTION = 12,
  FAQ_INITIAL_SETTINGS = 13,
  CANNOT_CHANGE_EMAIL_ADDRESS = 14,
  CANNOT_SEND_CERTAIN_EMAILS = 15,
  CANNOT_RECEIVE_CERTAIN_EMAILS = 16,
  REFUSE_TO_RECEIVE_CERTAIN_EMAILS = 17,
  DO_NOT_RECEIVE_EMAIL_NOTIFICATIONS = 18,
  DESKTOP_A = 19,
  DESKTOP_B = 20,
  DESKTOP_C = 21,
}

export const Faq1 = () => {
  const context: ListContents[] = [
    {
      text: 'my 楽天モバイルへのログインの際に使用した楽天IDとパスワードを入力されているか',
    },
    { text: '入力欄に半角スペースが入っていないか' },
    { text: '楽天回線対応製品をご利用されているか' },
    { text: '楽天回線またはパートナー回線に接続されているか' },
  ]
  return (
    <FaqWrap>
      <p>
        異なった楽天IDとパスワードを入力した場合、正常に動作しない場合があります。今一度以下をご確認ください。
      </p>
      <ListDisc className={Utils['Mt-8']} text={context} />
      <p className={Utils['Mt-16']}>
        詳細については、
        <LinkIconAfter
          href="https://ichiba.faq.rakuten.net/detail/000006620"
          target="_blank"
        >
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq2 = () => {
  const context: ListContents[] = [
    {
      text: '楽天回線対応製品をご利用されていないか',
    },
    {
      text: 'Wi-Fiをご利用の場合は接続を切断し、楽天回線またはパートナー回線のみに接続されているか',
    },
    { text: 'ご契約時の楽天IDでログインされていないか' },
    { text: 'ご契約のSIMカードに紐づく電話番号をご入力されているか' },
  ]
  return (
    <FaqWrap>
      <p>エラーメッセージが表示される場合、今一度以下をご確認ください。</p>
      <ListDisc className={Utils['Mt-8']} text={context} />
      <p className={Utils['Mt-16']}>
        楽天ログイン画面での詳細については、
        <LinkIconAfter
          href="https://ichiba.faq.rakuten.net/detail/000006620"
          target="_blank"
        >
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq3 = () => {
  return (
    <FaqWrap>
      <p>
        Wi-Fiをご利用の場合は接続を切断し、良好なLTE通信環境下のもと、再度ログインをお試しいただくようお願いいたします。
      </p>
    </FaqWrap>
  )
}
export const Faq4 = () => {
  return (
    <FaqWrap>
      <p>
        近接センサーが影響を及ぼしている可能性がございます。
        <br />
        設定については各端末のメーカーにご確認ください。
      </p>
      <TxtCap as="p" className={Utils['Mt-16']}>
        ※近接センサーとは通話中に端末を顔に近づけたままにしていることを検出して画面をオフにし、電力消費を抑える機能のことです。
      </TxtCap>
    </FaqWrap>
  )
}
export const Faq5 = () => {
  return (
    <FaqWrap>
      <p>
        お相手様の設定、もしくは電波の悪い場所にいらっしゃる場合、音声ガイダンスが流れることがございます。
      </p>
    </FaqWrap>
  )
}
export const Faq6 = () => {
  const context: ListContents[] = [
    {
      text: '楽天モバイルの電波に接続せず、Wi-Fiにのみ接続した状態で発信した場合',
    },
    {
      text: 'デュアルSIM対応製品にて、モバイルデータ通信、通話／音声回線に利用するSIMを楽天モバイル以外のSIMに設定している場合',
    },
    { text: '「184」を電話番号の前に入力し、発信した場合' },
    {
      text: '「my 楽天モバイル」の発信者番号非通知設定をオンにして発信した場合',
    },
  ]
  return (
    <FaqWrap>
      <p>下記のいずれかに該当すると非通知で発信します。</p>
      <ListDisc className={Utils['Mt-8']} text={context} />
      <p className={Utils['Mt-16']}>
        Wi-Fiをオフにし、
        楽天回線、もしくはパートナー回線に接続のうえ、良好な通信環境下のもとご利用をお願いいたします。
        <br />
        詳細については、
        <LinkIconAfter href="/faq/detail/00001428/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq7 = () => {
  return (
    <FaqWrap>
      <p>
        Rakuten
        Link内で設定していただいた着信音は一度ログアウトをすると既定の着信音に戻る仕組みです。再度ログインの上、設定をお願いいたします。
        <br />
        また、着信音の設定方法に関しては
        <LinkIconAfter href="/faq/detail/00001627/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq8 = () => {
  const context: ListContents[] = [
    {
      text: '当社が指定する電話番号へ発信をされた場合',
    },
    {
      text: 'OS標準の電話アプリで発信をされた場合（OS標準の通話履歴やWEBサイト上の電話番号など）',
    },
  ]
  return (
    <FaqWrap>
      <p>通話料金が発生している場合は下記2つに該当することが考えられます。</p>
      <ListDisc className={Utils['Mt-8']} text={context} />
      <p className={Utils['Mt-16']}>
        詳細については、
        <LinkIconAfter href="/faq/detail/00001823/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq9 = () => {
  return (
    <FaqWrap>
      <p>
        Rakuten
        Linkでは企業からのメッセージを受け取ることができない仕組みとなっております。
        <br />
        標準メッセージアプリで受信されているかをご確認ください。
      </p>
      <p className={Utils['Mt-16']}>
        詳細については、
        <LinkIconAfter href="/faq/detail/00001362/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq10 = () => {
  return (
    <FaqWrap>
      <p>
        楽天IDやGoogleアカウント・iCloudのアカウントをご家族や知人と共用した場合には、連絡先が同期されます。
      </p>
      <p className={Utils['Mt-16']}>
        同期に関する詳細については、
        <LinkIconAfter href="/faq/detail/10000271/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq11 = () => {
  return (
    <FaqWrap>
      <p>各ゲームのお問い合わせ窓口までご連絡いただくようお願いいたします。</p>
    </FaqWrap>
  )
}
export const Faq12 = () => {
  return (
    <FaqWrap>
      <p>
        iOS版Rakuten Linkでは下記挙動が仕様となっております。
        <LinkIconAfter href="/information/news/service/647/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        からお客様の事象が該当するかご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq13 = () => {
  return (
    <FaqWrap>
      <p>
        楽メールのご利用にはmy 楽天モバイルでの初期設定が必要です。
        <br />
        詳細については、
        <LinkIconAfter href="/guide/rakumail/initial-setting/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq14 = () => {
  return (
    <FaqWrap>
      <p>
        メールアドレスの変更はmy
        楽天モバイルの楽メール画面より可能です。なおメールアドレスの変更可能回数には制限を設けております。詳細については、
        <LinkIconAfter href="/guide/rakumail/setting/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq15 = () => {
  const context: ListContents[] = [
    {
      text: '送られたメールアドレスが存在しない、あるいは無効のアドレスの場合',
    },
    {
      text: '送信先のメールアドレスに迷惑メールの受信拒否を設定されている場合',
    },
    {
      text: '送信メールの容量が大きすぎる場合',
    },
  ]
  return (
    <FaqWrap>
      <p>メールを送信できない場合以下の条件に当てはまる可能性がございます。</p>
      <ListDisc className={Utils['Mt-8']} text={context} />
      <p className={Utils['Mt-16']}>
        送信メールの容量については、
        <LinkIconAfter href="/faq/detail/10000306/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq16 = () => {
  const context: ListContents[] = [
    {
      text: '迷惑メールフィルターの設定をされている場合',
    },
    {
      text: '受信メールの容量が大きすぎる場合',
    },
    {
      text: '保存データ容量または格納可能なメール件数の上限に達した場合',
    },
  ]
  return (
    <FaqWrap>
      <p>メールを受信できない場合以下の条件に当てはまる可能性がございます。</p>
      <ListDisc className={Utils['Mt-8']} text={context} />
      <p className={Utils['Mt-16']}>
        受信容量については、
        <LinkIconAfter href="/faq/detail/10000306/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq17 = () => {
  return (
    <FaqWrap>
      <p>
        迷惑メールフィルター設定の「拒否リスト」に追加することで、特定のメールアドレスのみを拒否するように設定できます。
        <br />
        詳細については、
        <LinkIconAfter href="/guide/rakumail/filter/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq18 = () => {
  return (
    <FaqWrap>
      <p>
        Linkアプリ内でメール通知が無効になっていないかご確認ください。
        <br />
        操作方法の詳細については、
        <LinkIconAfter href="/faq/detail/10000307/" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq19 = () => {
  return (
    <FaqWrap>
      <p>
        Rakuten Link をご利用でない相手との通話・SMS の際は、Rakuten Link
        デスクトップ版がログイン元スマートフォンと同一の Rakuten Link
        アカウントでログインの上、パソコンがそのスマートフォンとテザリングをしている、または同じ
        Wi-Fi 環境にいることが条件となります。
      </p>
      <TxtCap className={Utils['Mt-8']} as="p">
        ※一部のネットワーク環境(公衆 Wi-Fi など)では Wi-Fi 環境設定により
        Rakuten Link
        同士以外の通話・SMSがご利用いただけない場合があります。その場合、テザリングでご利用ください。
      </TxtCap>
      <p className={Utils['Mt-8']}>
        Rakuten Linkデスクトップ版アプリの通話に関しては、
        <LinkIconAfter href="https://r10.to/Link137" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq20 = () => {
  return (
    <FaqWrap>
      <p>
        スマートフォンでRakuten Link
        iOS版アプリをご利用されている場合、デスクトップ版ではRakuten
        Link以外をご利用のお客様からの着信やメッセージの送受信をご利用いただくことができません。デスクトップ版ではそれらの機能につきましては、スマートフォンでRakuten
        Link
        Android版アプリをご利用されている場合のみご利用いただくことができます。
      </p>
      <p className={Utils['Mt-16']}>
        Rakuten Link Android版アプリとiOS版アプリの機能の差については、
        <LinkIconAfter href="https://r10.to/Link136" target="_blank">
          こちら
          <IconNewTabLine />
        </LinkIconAfter>
        をご確認ください。
      </p>
    </FaqWrap>
  )
}
export const Faq21 = () => {
  return (
    <FaqWrap>
      <p>
        一部のネットワーク環境（公衆 Wi-Fi など）では Wi-Fi 環境設定により
        Rakuten Link
        同士以外の通話・SMSがご利用いただけない場合があります。その場合、テザリングでご利用ください。
      </p>
    </FaqWrap>
  )
}
