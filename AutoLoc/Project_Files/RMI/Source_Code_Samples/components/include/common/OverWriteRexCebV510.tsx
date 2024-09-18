import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'

export const OverWriteRexCebV510 = styled.div<{
  isButtonSecondary?: boolean
  isPermissionDefault?: boolean
  isPermissionTextDefault?: boolean
  permissionTextBefore?: string
  permissionTextColor?: string
  isCtaFixed?: boolean
}>`
  // ジェネレーターで出力されるRexボタンコンポーネント全体を囲うclass
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
  }
  // チェックボックスとその説明テキストを囲うclass
  .Below,
  // Rexボタンになんらかのエラーがあった場合に表示されるエラー領域を囲うclass（ローカルとSTGではエラーなので出る、本番では通常は消える）
  .Alert,
  // ボタンを囲うclass
  .CampaignButton,
  // ログイン後エントリーしますとかの情報部分を囲うclass
  .InfoText {
    margin-top: 0;
  }

  // ボタン関連上書き
  .CampaignButton {
    width: 100%;
    .RexButton {
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      padding: 15px;
      width: 100%;
      max-width: 500px;
      min-width: 160px;
      ${mixins.mq.MaxM} {
        width: 100%;
        padding: 14px;
      }
    }
    &.CampaignButton-enabled {
      .RexButton {
        ${props =>
          props.isButtonSecondary
            ? `
          background-color: ${props.theme.colors.white} !important;
          border: 1px solid ${props.theme.colors.primary} !important;
          color: ${props.theme.colors.primary} !important;
        `
            : `
          background-color: ${props.theme.colors.primary} !important;
          border: 1px solid ${props.theme.colors.primary} !important;
          color: ${props.theme.colors.white} !important;
        `}
        box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1) !important;
        &:hover,
        &:focus {
          ${props =>
            props.isButtonSecondary
              ? `
            background-color: ${props.theme.colors.pink20} !important;
            border: 1px solid ${props.theme.colors.primary} !important;
            color: ${props.theme.colors.primary} !important;
          `
              : `
            background-color: ${props.theme.colors.pink_80} !important;
            border: 1px solid ${props.theme.colors.pink_80} !important;
            color: ${props.theme.colors.white} !important;
          `}
        }
        &:focus {
          outline: 2px solid ${props => props.theme.colors.linkBlue} !important;
          outline-offset: 2px !important;
        }
        &:active {
          ${props =>
            props.isButtonSecondary
              ? `
            background-color: ${props.theme.colors.pink40} !important;
            border: 1px solid ${props.theme.colors.primary} !important;
            color: ${props.theme.colors.primary} !important;
          `
              : `
            background-color: ${props.theme.colors.pink_60} !important;
            border: 1px solid ${props.theme.colors.pink_60} !important;
            color: ${props.theme.colors.white} !important;
          `}
          outline: 0 !important;
          box-shadow: none !important;
        }
      }
    }
    &.CampaignButton-success,
    &.CampaignButton-loading,
    &.CampaignButton-in_process,
    &.CampaignButton-disabled {
      .RexButton {
        cursor: default;
        outline: 0;
        box-shadow: none;
        pointer-events: none;
      }
    }
    &.CampaignButton-in_process {
      .RexButton {
        background-color: ${props => props.theme.colors.white} !important;
        border: 1px solid ${props => props.theme.colors.primary} !important;
        color: ${props => props.theme.colors.primary} !important;
        svg {
          fill: ${props => props.theme.colors.primary} !important;
        }
      }
    }
    &.CampaignButton-loading {
      .RexButton {
        background-color: ${props => props.theme.colors.pink_60} !important;
        border: 1px solid ${props => props.theme.colors.pink_60} !important;
      }
    }
  }

  .Below {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;

    // Rexジェネレータに渡す内容にJSXは書けないのでUtils使用不可・改行用にDisp系だけは用意しておく
    .Disp-pc-tb {
      ${mixins.mq.MaxS} {
        display: none !important;
      }
    }
    .Disp-tb-sp {
      ${mixins.mq.MinL} {
        display: none !important;
      }
    }
    .Disp-pc {
      ${mixins.mq.MaxM} {
        display: none !important;
      }
    }
    .Disp-tb {
      ${mixins.mq.MaxS} {
        display: none !important;
      }
      ${mixins.mq.MinL} {
        display: none !important;
      }
    }
    .Disp-sp {
      ${mixins.mq.MinM} {
        display: none !important;
      }
    }

    // チェックボックス用のメッセージ文章
    // テキストカラー変更可能
    .agreement-message {
      margin-top: 0;
      font-size: ${props => props.theme.fonts.base};
      color: ${props =>
        props.permissionTextColor
          ? props.permissionTextColor
          : props.theme.colors.black};
      // 文字の前に何か置ける（アイコンとか）
      ${props =>
        props.permissionTextBefore &&
        `
        display: flex;
        column-gap: 0.3em;
        align-items: center;
        &::before {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font: normal 1.3em var(--rex-icon);
          content: '${props.permissionTextBefore}';
        }`}
    }

    // チェックボックスを楽モバのスタイルガイドに合わせる
    .agreement-label {
      color: ${props => props.theme.colors.black} !important;
      padding-top: 2px;
      padding-left: 32px;
    }
    .agreement-checkbox-icon {
      border: 1px solid ${props => props.theme.colors.monotone40} !important;
    }
    .agreement-label:hover {
      .agreement-checkbox-icon {
        border: 2px solid ${props => props.theme.colors.monotone40} !important;
      }
    }
    .agreement-checkbox:focus {
      + .agreement-checkbox-icon {
        border: 1px solid ${props => props.theme.colors.monotone75} !important;
      }
    }
    .agreement-checkbox:checked {
      + .agreement-checkbox-icon {
        background-color: ${props => props.theme.colors.primary} !important;
        border: 2px solid ${props => props.theme.colors.primary} !important;
      }
    }
    .agreement-checkbox:disabled {
      + .agreement-checkbox-icon {
        border: 1px solid ${props => props.theme.colors.monotone75} !important;
      }
    }
  }

  // チェックボックスをボタンの上にしたい場合ここで順番入れ替えしている
  // デフォで上に設定している
  ${props =>
    !props.isPermissionDefault
      ? `
      .Below {
        order: 1;
      }
      .CampaignButton {
        order: 2;
      }
      .Alert {
        order: 3;
      }
      .InfoText {
        order: 4;
      }
    `
      : `
    .CampaignButton {
      order: 1;
    }
    .Below {
      order: 2;
    }
    .Alert {
      order: 3;
    }
    .InfoText {
      order: 4;
    }
  `}
  // チェックボックスの注意文をチェックボックスの上にしたい場合ここで順番入れ替えしている
  // デフォで上に設定している
  ${props =>
    !props.isPermissionTextDefault &&
    `
    .Below {
      .agreement-message {
        order: 1;
      }
      .agreement-label {
        order: 2;
      }
    }
  `}

  // もしCtaFixed内で使うならテキストカラーを白に
  ${props =>
    props.isCtaFixed &&
    `
    .Below .agreement-label,
    .Below .agreement-message,
    .InfoText {
      color: ${props.theme.colors.white} !important;
    }
    .InfoText svg {
      fill: ${props.theme.colors.white} !important;
    }
  `}
`
