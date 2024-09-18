import { FaqStatus } from '@components/fragment/support/rakuten-link-form/FaqData'
import { SolutionStatus } from '@components/fragment/support/rakuten-link-form/SolutionData'

export type Troubleshooting = {
  toTroubleshooting: boolean
  webForm: boolean
  faq: Array<FaqStatus | null>
  solution: Array<SolutionStatus | null>
}

export type Question = Platform

export type Platform = {
  iOS: IosQuestionLevel1
  Android: AndroidQuestionLevel1
  デスクトップ: DesktopQuestionLevel1
}

export type IosQuestionLevel1 = {
  '初期設定時の認証・ログイン': IosInitialSettingAuthentication
  'アプリのインストール・アップデート': AppInstall
  'アプリの起動、動作': IosLaunchingApps
  '音声通話、通話履歴': IosVoiceCall
  メッセージ: IosMessages
  連絡先: Contact
  '留守番電話・着信転送・割込通話': CallServices
  'ニュース、ウォレット、探す、ミッション、Super Point Screen': News
  メニュー: Troubleshooting
  楽メール: RakuMail
}

export type AndroidQuestionLevel1 = {
  '初期設定時の認証・ログイン': AndroidInitialSettingAuthentication
  'アプリのインストール・アップデート': AppInstall
  'アプリの起動、動作': AndroidLaunchingApps
  '音声通話、通話履歴': AndroidVoiceCall
  ビデオ通話: VideoCall
  'メッセージ・SMS(他アプリの認証SMS等を含む)': AndroidMessages
  連絡先: Contact
  '留守番電話・着信転送・割込通話': CallServices
  'ニュース、ウォレット、探す、ミッション、Super Point Screen': News
  メニュー: Troubleshooting
  楽メール: RakuMail
}

export type DesktopQuestionLevel1 = {
  iOS: DesktopIosQuestionLevel2
  Android: DesktopAndroidQuestionLevel2
}

export type IosQuestionLevel2 =
  | IosInitialSettingAuthentication
  | AppInstall
  | IosLaunchingApps
  | IosVoiceCall
  | IosMessages
  | Contact
  | CallServices
  | News
  | Troubleshooting
  | RakuMail

export type AndroidQuestionLevel2 =
  | AndroidInitialSettingAuthentication
  | AppInstall
  | AndroidLaunchingApps
  | AndroidVoiceCall
  | VideoCall
  | AndroidMessages
  | Contact
  | CallServices
  | News
  | Troubleshooting
  | RakuMail

export type DesktopIosQuestionLevel2 =
  | { '初期設定時の認証・ログイン': Troubleshooting }
  | { 'アプリのインストール・アップデート': Troubleshooting }
  | { 'アプリの起動、動作': Troubleshooting }
  | { '音声通話、通話履歴': DesktopIosVoiceCall }
  | { ビデオ通話: Troubleshooting }
  | { 'メッセージ・SMS(他アプリの認証SMS等を含む)': DesktopIosMessages }
  | { 連絡先: Troubleshooting }
  | { '留守番電話・着信転送・割込通話': Troubleshooting }
  | { その他: Troubleshooting }

export type DesktopAndroidQuestionLevel2 =
  | { ログイン: Troubleshooting }
  | { 'アプリのインストール・アップデート': Troubleshooting }
  | { 'アプリの起動、動作': Troubleshooting }
  | { '音声通話、通話履歴': DesktopAndroidVoiceCall }
  | { ビデオ通話: Troubleshooting }
  | { 'メッセージ・SMS(他アプリの認証SMS等を含む)': DesktopAndroidMessages }
  | { 連絡先: Troubleshooting }
  | { '留守番電話・着信転送・割込通話': Troubleshooting }
  | { その他: Troubleshooting }

export type IosQuestionLevel3 =
  | CantLoginIdPassword
  | PhoneNumberAuthError
  | OnOutgoingCall
  | IosOnIncomingCall
  | IosOnThePhone
  | CallHistory
  | AmountOfCall
  | SendingMessage
  | IosReceivingMessage
  | MessageRates
  | MessageHistory
  | SynchronizingContact
  | RegisterContact
  | AnsweringMachine
  | CallFunction
  | RakuMailSettings
  | RakuMailStarted
  | SendingRakuMail
  | ReceivingRakuMail

export type AndroidQuestionLevel3 =
  | CantLoginIdPassword
  | PhoneNumberAuthError
  | NetworkFailure
  | OnOutgoingCall
  | AndroidOnIncomingCall
  | AndroidOnThePhone
  | CallHistory
  | AmountOfCall
  | SendingMessage
  | AndroidReceivingMessage
  | MessageRates
  | MessageHistory
  | SynchronizingContact
  | RegisterContact
  | AnsweringMachine
  | CallFunction
  | RakuMailSettings
  | RakuMailStarted
  | SendingRakuMail
  | ReceivingRakuMail

export type DesktopIosQuestionLevel3 = DesktopIosVoiceCall | DesktopIosMessages

export type DesktopAndroidQuestionLevel3 =
  | DesktopAndroidVoiceCall
  | DesktopAndroidMessages

export type IosQuestionLevel4 =
  | CallFailure
  | CannotReceiveRakutenLinkCalls
  | CannotReceiveNonRakutenLinkCalls
  | IosReceivingNotification
  | AccountManagement

export type AndroidQuestionLevel4 =
  | CallFailure
  | CannotReceiveRakutenLinkCalls
  | CannotReceiveNonRakutenLinkCalls
  | IncomingCallNotification
  | AndroidReceivingNotification
  | AccountManagement

export type DesktopIosQuestionLevel4 = DesktopOnIncomingCall

export type DesktopAndroidQuestionLevel4 = DesktopOnIncomingCall

type CantLoginIdPassword = {
  '「ログインが失敗しました。再度実行しますか？」': Troubleshooting
  '「ユーザーIDが無効です」 または 「ユーザーID、パスワードの入力に誤りがあるか登録されていません。」': Troubleshooting
  '「ネットワーク障害が発生しました。」': Troubleshooting
}
type PhoneNumberAuthError = {
  '「電話番号認証にエラーが発生しました。しばらく経ってから再度お試しください。」': Troubleshooting
  '「無効な電話番号です。」': Troubleshooting
  '「複数回認証に失敗したため、アカウントが一時的にロックされました。」': Troubleshooting
  '「ログインした楽天IDでご契約された楽天モバイルの電話番号ではないため、認証に失敗しました。正しい楽天モバイルの電話番号を入力してください。」': Troubleshooting
  '「ご利用端末が楽天回線対応製品であり、楽天回線またはパートナー回線に接続していることをご確認ください。」': Troubleshooting
  '「Rakuten Linkアプリのご利用には楽天モバイルのお申込が必要です。」': Troubleshooting
  '「ネットワーク障害が発生しました。」': Troubleshooting
}

type IosInitialSettingAuthentication = {
  '楽天IDとパスワードを入力する画面でログインができない。楽天アカウントのログイン画面で失敗する': CantLoginIdPassword
  電話番号認証にエラーが発生した: PhoneNumberAuthError
  その他: Troubleshooting
}

type AndroidInitialSettingAuthentication = {
  '楽天IDとパスワードを入力する画面でログインができない。楽天アカウントのログイン画面で失敗する': CantLoginIdPassword
  電話番号認証にエラーが発生した: PhoneNumberAuthError
  標準電話アプリに6桁の認証コードが届かない: NetworkFailure
  '6桁の認証コードを入力しても認証されない': NetworkFailure
  その他: Troubleshooting
}
type NetworkFailure = {
  '「ネットワーク障害が発生しました。」': Troubleshooting
  その他: Troubleshooting
}

type IosLaunchingApps = {
  起動できない: Troubleshooting
  動作が遅い: Troubleshooting
  '画面が真っ白、または真っ黒になる': Troubleshooting
  強制終了する: Troubleshooting
  画面が固まる: Troubleshooting
  画面表示が崩れている: Troubleshooting
  その他: Troubleshooting
}

type AndroidLaunchingApps = {
  起動できない: Troubleshooting
  動作が遅い: Troubleshooting
  '画面が真っ白、または真っ黒になる': Troubleshooting
  通話中に画面が暗くなる: Troubleshooting
  強制終了する: Troubleshooting
  画面が固まる: Troubleshooting
  画面表示が崩れている: Troubleshooting
  その他: Troubleshooting
}

type AppInstall = {
  インストールできない: Troubleshooting
  前バージョンからアップデートできない: Troubleshooting
  その他: Troubleshooting
}
type CallFailure = {
  'Rakuten Linkに発信できない': Troubleshooting
  'Rakuten Link以外に発信できない': Troubleshooting
  アナウンスが流れて相手に繋がらない: Troubleshooting
}

type OnOutgoingCall = {
  発信できない: CallFailure
  非通知発信になる: Troubleshooting
  その他: Troubleshooting
}
type CannotReceiveRakutenLinkCalls = {
  '着信音(バイブレーション)が鳴らず、着信画面も出ない': Troubleshooting
  '着信音(バイブレーション)は鳴るが、着信画面が出ない': Troubleshooting
  着信応答ボタンを押しても反応しない: Troubleshooting
  着信後すぐに留守番電話になる: Troubleshooting
  その他: Troubleshooting
}
type CannotReceiveNonRakutenLinkCalls = {
  '着信音(バイブレーション)が鳴らず、着信画面も出ない': Troubleshooting
}
type IncomingCallNotification = {
  不在着信が履歴に残らない: Troubleshooting
  '着信音(バイブレーション)が鳴らない': Troubleshooting
  '着信音(バイブレーション)は鳴るが、着信画面が出ない': Troubleshooting
  通話に出た後も着信音が鳴り続ける: Troubleshooting
  着信音が小さい: Troubleshooting
  着信音を変更できない: Troubleshooting
  その他: Troubleshooting
}
type IosOnIncomingCall = {
  'Rakuten Linkをお使いの方から着信できない': CannotReceiveRakutenLinkCalls
  'Rakuten Link以外をお使いの方から着信できない': CannotReceiveNonRakutenLinkCalls
}
type AndroidOnIncomingCall = {
  'Rakuten Linkから着信できない': CannotReceiveRakutenLinkCalls
  'Rakuten Link以外から着信できない': CannotReceiveRakutenLinkCalls
  着信時の通知: IncomingCallNotification
  その他: Troubleshooting
}
type DesktopOnIncomingCall = {
  'Rakuten Link スマートフォン版と同一のアカウントでログインし同じ Wi-Fi 環境にいる': Troubleshooting
  'Rakuten Link スマートフォン版と同一のアカウントでログインしていない、または同じ Wi-Fi 環境にいない': Troubleshooting
}
type IosOnThePhone = {
  通話中にダイヤルパッドが操作できない: Troubleshooting
  お互いの音声が聞こえない: Troubleshooting
  相手もしくは自分の声が聞こえない: Troubleshooting
  通話が途中で終了してしまう: Troubleshooting
  '通話中の音質が悪い・会話が途切れ途切れになる': Troubleshooting
  その他: Troubleshooting
}
type AndroidOnThePhone = {
  通話中にダイヤルパッドが操作できない: Troubleshooting
  お互いの音声が聞こえない: Troubleshooting
  相手もしくは自分の声が聞こえない: Troubleshooting
  通話が途中で終了してしまう: Troubleshooting
  '通話中の音質が悪い・会話が途切れ途切れになる': Troubleshooting
  通話中に画面が暗くなる: Troubleshooting
  その他: Troubleshooting
}
type CallHistory = {
  履歴が新たに更新されない: Troubleshooting
  その他: Troubleshooting
}
type AmountOfCall = {
  アプリを利用して料金が発生した: Troubleshooting
}
type IosVoiceCall = {
  発信時: OnOutgoingCall
  着信時: IosOnIncomingCall
  通話中: IosOnThePhone
  通話履歴: CallHistory
  通話料: AmountOfCall
}
type AndroidVoiceCall = {
  発信時: OnOutgoingCall
  着信時: AndroidOnIncomingCall
  通話中: AndroidOnThePhone
  通話履歴: CallHistory
  通話料: AmountOfCall
}
type DesktopIosVoiceCall = {
  'Rakuten Linkをご利用のお相手に発信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手に発信できない': DesktopOnIncomingCall
  'Rakuten Linkをご利用のお相手から着信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手から着信できない': Troubleshooting
  その他: Troubleshooting
}
type DesktopAndroidVoiceCall = {
  'Rakuten Linkをご利用のお相手に発信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手に発信できない': DesktopOnIncomingCall
  'Rakuten Linkをご利用のお相手から着信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手から着信できない': DesktopOnIncomingCall
  その他: Troubleshooting
}

type VideoCall = {
  発信時の不具合: Troubleshooting
  着信時の不具合: Troubleshooting
  通話中の不具合: Troubleshooting
  その他: Troubleshooting
}

type SendingMessage = {
  'Rakuten Linkをご利用のお相手に送信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手に送信できない': Troubleshooting
  '画面表示が崩れてメッセージが送れない(メッセージの入力欄が表示されない)': Troubleshooting
  その他: Troubleshooting
}
type IosReceivingNotification = {
  '通知音(バイブレーション)が鳴らない': Troubleshooting
  受信通知が届かない: Troubleshooting
  その他: Troubleshooting
}
type AndroidReceivingNotification = {
  '通知音(バイブレーション)が鳴らない': Troubleshooting
  通知音が小さい: Troubleshooting
  通知音が変更できない: Troubleshooting
  受信通知が届かない: Troubleshooting
  その他: Troubleshooting
}
type IosReceivingMessage = {
  'Rakuten Linkをご利用のお相手から受信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手から受信できない': Troubleshooting
  他アプリや企業等からの認証コードを含むSMSが受け取れない: Troubleshooting
  受信時の通知: IosReceivingNotification
}
type AndroidReceivingMessage = {
  'Rakuten Linkをご利用のお相手から受信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手から受信できない': Troubleshooting
  他アプリや企業等からの認証コードを含むSMSが受け取れない: Troubleshooting
  受信時の通知: AndroidReceivingNotification
  その他: Troubleshooting
}
type MessageRates = {
  アプリを利用して料金が発生した: Troubleshooting
}
type MessageHistory = {
  メッセージ履歴が更新されない: Troubleshooting
  その他: Troubleshooting
}
type IosMessages = {
  送信時: SendingMessage
  受信時: IosReceivingMessage
  料金: MessageRates
  メッセージ履歴: MessageHistory
}
type AndroidMessages = {
  送信時: SendingMessage
  受信時: AndroidReceivingMessage
  料金: MessageRates
  メッセージ履歴: MessageHistory
}
type DesktopIosMessages = {
  'Rakuten Linkをご利用のお相手にメッセージを送信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手にメッセージを送信できない': Troubleshooting
  'Rakuten Linkをご利用のお相手からメッセージを受信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手からメッセージを受信できない': Troubleshooting
  他アプリや企業等からの認証コードを含むSMSが受け取れない: Troubleshooting
  その他: Troubleshooting
}
type DesktopAndroidMessages = {
  'Rakuten Linkをご利用のお相手にメッセージを送信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手にメッセージを送信できない': DesktopOnIncomingCall
  'Rakuten Linkをご利用のお相手からメッセージを受信できない': Troubleshooting
  'Rakuten Linkをご利用されていないお相手からメッセージを受信できない': DesktopOnIncomingCall
  他アプリや企業等からの認証コードを含むSMSが受け取れない: Troubleshooting
  その他: Troubleshooting
}
type SynchronizingContact = {
  連絡先情報が全く同期されない: Troubleshooting
  連絡先情報が同期されたが不足している: Troubleshooting
  '連絡先情報が消えた（写真や住所等も含む）': Troubleshooting
  その他: Troubleshooting
}
type RegisterContact = {
  '連絡先情報を追加で登録できない（写真や住所等も含む）': Troubleshooting
  '連絡先情報が編集できない（写真や住所等も含む）': Troubleshooting
  '連絡先情報が消えた（写真や住所等も含む）': Troubleshooting
  その他: Troubleshooting
}
type Contact = {
  同期: SynchronizingContact
  '登録・編集': RegisterContact
}
type AnsweringMachine = {
  設定をオンにしても作動しない: Troubleshooting
  設定をオフにしても作動する: Troubleshooting
  応答時間設定が反映されない: Troubleshooting
  その他: Troubleshooting
}
type CallFunction = {
  設定をオンにしても作動しない: Troubleshooting
  設定をオフにしても作動する: Troubleshooting
  その他: Troubleshooting
}
type CallServices = {
  留守番電話: AnsweringMachine
  着信転送: CallFunction
  割込機能: CallFunction
}
type News = {
  ニュース: Troubleshooting
  ウォレット: Troubleshooting
  探す: Troubleshooting
  'ミッション、Super Point Screen': Troubleshooting
  その他: Troubleshooting
}
type AccountManagement = {
  メールアドレスが変更できない: Troubleshooting
  プロフィールに関するお問い合わせ: Troubleshooting
  'アカウント管理・設定に関するその他のお問い合わせ': Troubleshooting
}
type RakuMailSettings = {
  初期設定時に関するお問い合わせ: Troubleshooting
  'アカウント管理・設定': AccountManagement
}
type RakuMailStarted = {
  楽メールが起動できない: Troubleshooting
  起動時に関するその他のお問い合わせ: Troubleshooting
}
type SendingRakuMail = {
  メールを送信できない: Troubleshooting
  送信時に関するその他のお問い合わせ: Troubleshooting
}
type ReceivingRakuMail = {
  メールを受信できない: Troubleshooting
  受信したメールを開封できない: Troubleshooting
  迷惑メールを拒否したい: Troubleshooting
  メールの通知が届かない: Troubleshooting
  受信時に関するその他のお問い合わせ: Troubleshooting
}
type RakuMail = {
  '設定(初期設定を含む)': RakuMailSettings
  起動時: RakuMailStarted
  送信時: SendingRakuMail
  受信時: ReceivingRakuMail
  その他: Troubleshooting
}

export const question: Question = {
  iOS: {
    '初期設定時の認証・ログイン': {
      '楽天IDとパスワードを入力する画面でログインができない。楽天アカウントのログイン画面で失敗する':
        {
          '「ログインが失敗しました。再度実行しますか？」': {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.LOGIN_ERROR],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
            ],
          },
          '「ユーザーIDが無効です」 または 「ユーザーID、パスワードの入力に誤りがあるか登録されていません。」':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.LOGIN_ERROR],
              solution: [
                SolutionStatus.RAKUTEN_LINK_INSTALL,
                SolutionStatus.UPGRADING_FIRMWARE,
              ],
            },
          '「ネットワーク障害が発生しました。」': {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.NETWORK_FAILURE],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        },
      電話番号認証にエラーが発生した: {
        '「電話番号認証にエラーが発生しました。しばらく経ってから再度お試しください。」':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
            ],
          },
        '「無効な電話番号です。」': {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
          ],
        },
        '「複数回認証に失敗したため、アカウントが一時的にロックされました。」':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        '「ログインした楽天IDでご契約された楽天モバイルの電話番号ではないため、認証に失敗しました。正しい楽天モバイルの電話番号を入力してください。」':
          {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        '「ご利用端末が楽天回線対応製品であり、楽天回線またはパートナー回線に接続していることをご確認ください。」':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
            ],
          },
        '「Rakuten Linkアプリのご利用には楽天モバイルのお申込が必要です。」': {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
          ],
        },
        '「ネットワーク障害が発生しました。」': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.NETWORK_FAILURE],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
        ],
      },
    },
    'アプリのインストール・アップデート': {
      インストールできない: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.AIRPLANE_MODE,
        ],
      },
      前バージョンからアップデートできない: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.AIRPLANE_MODE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.AIRPLANE_MODE,
        ],
      },
    },
    'アプリの起動、動作': {
      起動できない: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      動作が遅い: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      '画面が真っ白、または真っ黒になる': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      強制終了する: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      画面が固まる: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      画面表示が崩れている: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
    '音声通話、通話履歴': {
      発信時: {
        発信できない: {
          'Rakuten Linkに発信できない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          'Rakuten Link以外に発信できない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          アナウンスが流れて相手に繋がらない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        },
        非通知発信になる: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.INCOMING_CALL_REJECTED_OR_BAD_SIGNAL],
          solution: [null],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      着信時: {
        'Rakuten Linkをお使いの方から着信できない': {
          '着信音(バイブレーション)が鳴らず、着信画面も出ない': {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            ],
          },
          '着信音(バイブレーション)は鳴るが、着信画面が出ない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            ],
          },
          着信応答ボタンを押しても反応しない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          着信後すぐに留守番電話になる: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          その他: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        },
        'Rakuten Link以外をお使いの方から着信できない': {
          '着信音(バイブレーション)が鳴らず、着信画面も出ない': {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
            solution: [null],
          },
        },
      },
      通話中: {
        通話中にダイヤルパッドが操作できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        お互いの音声が聞こえない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        相手もしくは自分の声が聞こえない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        通話が途中で終了してしまう: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        '通話中の音質が悪い・会話が途切れ途切れになる': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      通話履歴: {
        履歴が新たに更新されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      通話料: {
        アプリを利用して料金が発生した: {
          toTroubleshooting: true,
          webForm: true,
          faq: [
            FaqStatus.CHARGES_INCURRED_FOR_UNDIALABLE_NUMBER,
            FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION,
          ],
          solution: [null],
        },
      },
    },
    メッセージ: {
      送信時: {
        'Rakuten Linkをご利用のお相手に送信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        'Rakuten Linkをご利用されていないお相手に送信できない': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
          solution: [null],
        },
        '画面表示が崩れてメッセージが送れない(メッセージの入力欄が表示されない)':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      受信時: {
        'Rakuten Linkをご利用のお相手から受信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        'Rakuten Linkをご利用されていないお相手から受信できない': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
          solution: [null],
        },
        他アプリや企業等からの認証コードを含むSMSが受け取れない: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.CANNOT_RECEIVE_A2P_BY_LINK],
          solution: [null],
        },
        受信時の通知: {
          '通知音(バイブレーション)が鳴らない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          受信通知が届かない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          その他: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
        },
      },
      料金: {
        アプリを利用して料金が発生した: {
          toTroubleshooting: true,
          webForm: true,
          faq: [
            FaqStatus.CHARGES_INCURRED_FOR_UNDIALABLE_NUMBER,
            FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION,
          ],
          solution: [null],
        },
      },
      メッセージ履歴: {
        メッセージ履歴が更新されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
    },
    連絡先: {
      同期: {
        連絡先情報が全く同期されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        連絡先情報が同期されたが不足している: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        '連絡先情報が消えた（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
      },
      '登録・編集': {
        '連絡先情報を追加で登録できない（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        '連絡先情報が編集できない（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        '連絡先情報が消えた（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
    },
    '留守番電話・着信転送・割込通話': {
      留守番電話: {
        設定をオンにしても作動しない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        設定をオフにしても作動する: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        応答時間設定が反映されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      着信転送: {
        設定をオンにしても作動しない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        設定をオフにしても作動する: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      割込機能: {
        設定をオンにしても作動しない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        設定をオフにしても作動する: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
    },
    'ニュース、ウォレット、探す、ミッション、Super Point Screen': {
      ニュース: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      ウォレット: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      探す: {
        toTroubleshooting: true,
        webForm: true,
        faq: [FaqStatus.GAME_RELATED_PROBLEMS],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      'ミッション、Super Point Screen': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
    メニュー: {
      toTroubleshooting: true,
      webForm: true,
      faq: [null],
      solution: [
        SolutionStatus.RAKUTEN_LINK_INSTALL,
        SolutionStatus.UPGRADING_FIRMWARE,
      ],
    },
    楽メール: {
      '設定(初期設定を含む)': {
        初期設定時に関するお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.FAQ_INITIAL_SETTINGS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        'アカウント管理・設定': {
          メールアドレスが変更できない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.CANNOT_CHANGE_EMAIL_ADDRESS],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
          プロフィールに関するお問い合わせ: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
          'アカウント管理・設定に関するその他のお問い合わせ': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        },
      },
      起動時: {
        楽メールが起動できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        起動時に関するその他のお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      送信時: {
        メールを送信できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.CANNOT_SEND_CERTAIN_EMAILS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        送信時に関するその他のお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      受信時: {
        メールを受信できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.CANNOT_RECEIVE_CERTAIN_EMAILS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        受信したメールを開封できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        迷惑メールを拒否したい: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.REFUSE_TO_RECEIVE_CERTAIN_EMAILS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        メールの通知が届かない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.DO_NOT_RECEIVE_EMAIL_NOTIFICATIONS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        受信時に関するその他のお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
  },
  Android: {
    '初期設定時の認証・ログイン': {
      '楽天IDとパスワードを入力する画面でログインができない。楽天アカウントのログイン画面で失敗する':
        {
          '「ログインが失敗しました。再度実行しますか？」': {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.LOGIN_ERROR],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
            ],
          },
          '「ユーザーIDが無効です」 または 「ユーザーID、パスワードの入力に誤りがあるか登録されていません。」':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.LOGIN_ERROR],
              solution: [
                SolutionStatus.RAKUTEN_LINK_INSTALL,
                SolutionStatus.UPGRADING_FIRMWARE,
              ],
            },
          '「ネットワーク障害が発生しました。」': {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.NETWORK_FAILURE],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        },
      電話番号認証にエラーが発生した: {
        '「電話番号認証にエラーが発生しました。しばらく経ってから再度お試しください。」':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
            ],
          },
        '「無効な電話番号です。」': {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
          ],
        },
        '「複数回認証に失敗したため、アカウントが一時的にロックされました。」':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        '「ログインした楽天IDでご契約された楽天モバイルの電話番号ではないため、認証に失敗しました。正しい楽天モバイルの電話番号を入力してください。」':
          {
            toTroubleshooting: true,
            webForm: false,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        '「ご利用端末が楽天回線対応製品であり、楽天回線またはパートナー回線に接続していることをご確認ください。」':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
            ],
          },
        '「Rakuten Linkアプリのご利用には楽天モバイルのお申込が必要です。」': {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
          ],
        },
        '「ネットワーク障害が発生しました。」': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.NETWORK_FAILURE],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      標準電話アプリに6桁の認証コードが届かない: {
        '「ネットワーク障害が発生しました。」': {
          toTroubleshooting: true,
          webForm: false,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
          ],
        },
      },
      '6桁の認証コードを入力しても認証されない': {
        '「ネットワーク障害が発生しました。」': {
          toTroubleshooting: true,
          webForm: false,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
          ],
        },
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.SIM_CARD_REMOVAL_INSERTION,
        ],
      },
    },
    'アプリのインストール・アップデート': {
      インストールできない: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.AIRPLANE_MODE,
        ],
      },
      前バージョンからアップデートできない: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.AIRPLANE_MODE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
          SolutionStatus.AIRPLANE_MODE,
        ],
      },
    },
    'アプリの起動、動作': {
      起動できない: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      動作が遅い: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      '画面が真っ白、または真っ黒になる': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      通話中に画面が暗くなる: {
        toTroubleshooting: true,
        webForm: false,
        faq: [FaqStatus.SCREEN_DARK_DURING_CALL],
        solution: [null],
      },
      強制終了する: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      画面が固まる: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      画面表示が崩れている: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
    '音声通話、通話履歴': {
      発信時: {
        発信できない: {
          'Rakuten Linkに発信できない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          'Rakuten Link以外に発信できない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          アナウンスが流れて相手に繋がらない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        },
        非通知発信になる: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.INCOMING_CALL_REJECTED_OR_BAD_SIGNAL],
          solution: [null],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      着信時: {
        'Rakuten Linkから着信できない': {
          '着信音(バイブレーション)が鳴らず、着信画面も出ない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          '着信音(バイブレーション)は鳴るが、着信画面が出ない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            ],
          },
          着信応答ボタンを押しても反応しない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          着信後すぐに留守番電話になる: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          その他: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        },
        'Rakuten Link以外から着信できない': {
          '着信音(バイブレーション)が鳴らず、着信画面も出ない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          '着信音(バイブレーション)は鳴るが、着信画面が出ない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            ],
          },
          着信応答ボタンを押しても反応しない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          着信後すぐに留守番電話になる: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          その他: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        },
        着信時の通知: {
          不在着信が履歴に残らない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          '着信音(バイブレーション)が鳴らない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          '着信音(バイブレーション)は鳴るが、着信画面が出ない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            ],
          },
          通話に出た後も着信音が鳴り続ける: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          着信音が小さい: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          着信音を変更できない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.RINGTONE_SETTING_REMOVED_DUE_TO_LOGOUT],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
          その他: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      通話中: {
        通話中にダイヤルパッドが操作できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        お互いの音声が聞こえない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        相手もしくは自分の声が聞こえない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        通話が途中で終了してしまう: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        '通話中の音質が悪い・会話が途切れ途切れになる': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        通話中に画面が暗くなる: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.SCREEN_DARK_DURING_CALL],
          solution: [null],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      通話履歴: {
        履歴が新たに更新されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      通話料: {
        アプリを利用して料金が発生した: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.CHARGES_INCURRED_FOR_UNDIALABLE_NUMBER],
          solution: [null],
        },
      },
    },
    ビデオ通話: {
      発信時の不具合: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      着信時の不具合: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      通話中の不具合: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
    'メッセージ・SMS(他アプリの認証SMS等を含む)': {
      送信時: {
        'Rakuten Linkをご利用のお相手に送信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        'Rakuten Linkをご利用されていないお相手に送信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        '画面表示が崩れてメッセージが送れない(メッセージの入力欄が表示されない)':
          {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.AIRPLANE_MODE,
            ],
          },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
      受信時: {
        'Rakuten Linkをご利用のお相手から受信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        'Rakuten Linkをご利用されていないお相手から受信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        他アプリや企業等からの認証コードを含むSMSが受け取れない: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.CANNOT_RECEIVE_A2P_BY_LINK],
          solution: [null],
        },
        受信時の通知: {
          '通知音(バイブレーション)が鳴らない': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          通知音が小さい: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
          通知音が変更できない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            ],
          },
          受信通知が届かない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
          その他: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
              SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
              SolutionStatus.SILENT_MODE_OFF,
            ],
          },
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
            SolutionStatus.SILENT_MODE_OFF,
          ],
        },
      },
      料金: {
        アプリを利用して料金が発生した: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.CHARGES_INCURRED_FOR_UNDIALABLE_NUMBER],
          solution: [null],
        },
      },
      メッセージ履歴: {
        メッセージ履歴が更新されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
      },
    },
    連絡先: {
      同期: {
        連絡先情報が全く同期されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        連絡先情報が同期されたが不足している: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        '連絡先情報が消えた（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
      },
      '登録・編集': {
        '連絡先情報を追加で登録できない（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        '連絡先情報が編集できない（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        '連絡先情報が消えた（写真や住所等も含む）': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
    },
    '留守番電話・着信転送・割込通話': {
      留守番電話: {
        設定をオンにしても作動しない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        設定をオフにしても作動する: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        応答時間設定が反映されない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      着信転送: {
        設定をオンにしても作動しない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        設定をオフにしても作動する: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      割込機能: {
        設定をオンにしても作動しない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        設定をオフにしても作動する: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
    },
    'ニュース、ウォレット、探す、ミッション、Super Point Screen': {
      ニュース: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      ウォレット: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      探す: {
        toTroubleshooting: true,
        webForm: true,
        faq: [FaqStatus.GAME_RELATED_PROBLEMS],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      'ミッション、Super Point Screen': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
    メニュー: {
      toTroubleshooting: true,
      webForm: true,
      faq: [null],
      solution: [
        SolutionStatus.RAKUTEN_LINK_INSTALL,
        SolutionStatus.UPGRADING_FIRMWARE,
      ],
    },
    楽メール: {
      '設定(初期設定を含む)': {
        初期設定時に関するお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.FAQ_INITIAL_SETTINGS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        'アカウント管理・設定': {
          メールアドレスが変更できない: {
            toTroubleshooting: true,
            webForm: true,
            faq: [FaqStatus.CANNOT_CHANGE_EMAIL_ADDRESS],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
          プロフィールに関するお問い合わせ: {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
          'アカウント管理・設定に関するその他のお問い合わせ': {
            toTroubleshooting: true,
            webForm: true,
            faq: [null],
            solution: [
              SolutionStatus.RAKUTEN_LINK_INSTALL,
              SolutionStatus.UPGRADING_FIRMWARE,
            ],
          },
        },
      },
      起動時: {
        楽メールが起動できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        起動時に関するその他のお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      送信時: {
        メールを送信できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.CANNOT_SEND_CERTAIN_EMAILS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        送信時に関するその他のお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      受信時: {
        メールを受信できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.CANNOT_RECEIVE_CERTAIN_EMAILS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        受信したメールを開封できない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
          ],
        },
        迷惑メールを拒否したい: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.REFUSE_TO_RECEIVE_CERTAIN_EMAILS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
        メールの通知が届かない: {
          toTroubleshooting: true,
          webForm: true,
          faq: [FaqStatus.DO_NOT_RECEIVE_EMAIL_NOTIFICATIONS],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
            SolutionStatus.AIRPLANE_MODE,
            SolutionStatus.ALL_NOTIFICATIONS_IN_THE_APP_ON,
          ],
        },
        受信時に関するその他のお問い合わせ: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.RAKUTEN_LINK_INSTALL,
            SolutionStatus.UPGRADING_FIRMWARE,
          ],
        },
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.RAKUTEN_LINK_INSTALL,
          SolutionStatus.UPGRADING_FIRMWARE,
        ],
      },
    },
  },
  デスクトップ: {
    iOS: {
      '初期設定時の認証・ログイン': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      'アプリのインストール・アップデート': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      'アプリの起動、動作': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      '音声通話、通話履歴': {
        'Rakuten Linkをご利用のお相手に発信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手に発信できない': {
          'Rakuten Link スマートフォン版と同一のアカウントでログインし同じ Wi-Fi 環境にいる':
            {
              toTroubleshooting: true,
              webForm: true,
              faq: [FaqStatus.DESKTOP_C],
              solution: [
                SolutionStatus.NETWORK_CONNECTION,
                SolutionStatus.VPN_CONNECTION,
                SolutionStatus.PRODUCT_OS_UPDATE,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
              ],
            },
          'Rakuten Link スマートフォン版と同一のアカウントでログインしていない、または同じ Wi-Fi 環境にいない':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.DESKTOP_A],
              solution: [null],
            },
        },
        'Rakuten Linkをご利用のお相手から着信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手から着信できない': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.DESKTOP_B],
          solution: [null],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
      },
      ビデオ通話: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      'メッセージ・SMS(他アプリの認証SMS等を含む)': {
        'Rakuten Linkをご利用のお相手にメッセージを送信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手にメッセージを送信できない': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.DESKTOP_B],
          solution: [null],
        },
        'Rakuten Linkをご利用のお相手からメッセージを受信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手からメッセージを受信できない': {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.DESKTOP_B],
          solution: [null],
        },
        他アプリや企業等からの認証コードを含むSMSが受け取れない: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.CANNOT_RECEIVE_A2P_BY_LINK],
          solution: [null],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
      },
      連絡先: {
        toTroubleshooting: true,
        webForm: true,
        faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      '留守番電話・着信転送・割込通話': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
    },
    Android: {
      ログイン: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      'アプリのインストール・アップデート': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      'アプリの起動、動作': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      '音声通話、通話履歴': {
        'Rakuten Linkをご利用のお相手に発信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手に発信できない': {
          'Rakuten Link スマートフォン版と同一のアカウントでログインし同じ Wi-Fi 環境にいる':
            {
              toTroubleshooting: true,
              webForm: true,
              faq: [FaqStatus.DESKTOP_C],
              solution: [
                SolutionStatus.NETWORK_CONNECTION,
                SolutionStatus.VPN_CONNECTION,
                SolutionStatus.PRODUCT_OS_UPDATE,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
              ],
            },
          'Rakuten Link スマートフォン版と同一のアカウントでログインしていない、または同じ Wi-Fi 環境にいない':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.DESKTOP_A],
              solution: [null],
            },
        },
        'Rakuten Linkをご利用のお相手から着信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手から着信できない': {
          'Rakuten Link スマートフォン版と同一のアカウントでログインし同じ Wi-Fi 環境にいる':
            {
              toTroubleshooting: true,
              webForm: true,
              faq: [FaqStatus.DESKTOP_C],
              solution: [
                SolutionStatus.NETWORK_CONNECTION,
                SolutionStatus.VPN_CONNECTION,
                SolutionStatus.PRODUCT_OS_UPDATE,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
              ],
            },
          'Rakuten Link スマートフォン版と同一のアカウントでログインしていない、または同じ Wi-Fi 環境にいない':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.DESKTOP_A],
              solution: [null],
            },
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
      },
      ビデオ通話: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      'メッセージ・SMS(他アプリの認証SMS等を含む)': {
        'Rakuten Linkをご利用のお相手にメッセージを送信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手にメッセージを送信できない': {
          'Rakuten Link スマートフォン版と同一のアカウントでログインし同じ Wi-Fi 環境にいる':
            {
              toTroubleshooting: true,
              webForm: true,
              faq: [FaqStatus.DESKTOP_C],
              solution: [
                SolutionStatus.NETWORK_CONNECTION,
                SolutionStatus.VPN_CONNECTION,
                SolutionStatus.PRODUCT_OS_UPDATE,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
              ],
            },
          'Rakuten Link スマートフォン版と同一のアカウントでログインしていない、または同じ Wi-Fi 環境にいない':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.DESKTOP_A],
              solution: [null],
            },
        },
        'Rakuten Linkをご利用のお相手からメッセージを受信できない': {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
        'Rakuten Linkをご利用されていないお相手からメッセージを受信できない': {
          'Rakuten Link スマートフォン版と同一のアカウントでログインし同じ Wi-Fi 環境にいる':
            {
              toTroubleshooting: true,
              webForm: true,
              faq: [FaqStatus.DESKTOP_C],
              solution: [
                SolutionStatus.NETWORK_CONNECTION,
                SolutionStatus.VPN_CONNECTION,
                SolutionStatus.PRODUCT_OS_UPDATE,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
                SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
              ],
            },
          'Rakuten Link スマートフォン版と同一のアカウントでログインしていない、または同じ Wi-Fi 環境にいない':
            {
              toTroubleshooting: true,
              webForm: false,
              faq: [FaqStatus.DESKTOP_A],
              solution: [null],
            },
        },
        他アプリや企業等からの認証コードを含むSMSが受け取れない: {
          toTroubleshooting: true,
          webForm: false,
          faq: [FaqStatus.CANNOT_RECEIVE_A2P_BY_LINK],
          solution: [null],
        },
        その他: {
          toTroubleshooting: true,
          webForm: true,
          faq: [null],
          solution: [
            SolutionStatus.NETWORK_CONNECTION,
            SolutionStatus.VPN_CONNECTION,
            SolutionStatus.PRODUCT_OS_UPDATE,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
            SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
          ],
        },
      },
      連絡先: {
        toTroubleshooting: true,
        webForm: true,
        faq: [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      '留守番電話・着信転送・割込通話': {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
      その他: {
        toTroubleshooting: true,
        webForm: true,
        faq: [null],
        solution: [
          SolutionStatus.NETWORK_CONNECTION,
          SolutionStatus.VPN_CONNECTION,
          SolutionStatus.PRODUCT_OS_UPDATE,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_ENV_CHECK,
          SolutionStatus.RAKUTEN_LINK_DESKTOP_APP_ACTIONS,
        ],
      },
    },
  },
}
