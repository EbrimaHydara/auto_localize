import React from 'react'
import styled from 'styled-components'
import { LinkNormal } from '@components/atoms/Link'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'

const TextWithIndent = styled.span`
  ${mixins.mq.MaxM} {
    display: inline-block;
    text-indent: 4em;
  }
`

export interface UserVoiceProps {
  className?: string
  directory: string
}

export const RakutenInfo: React.FC<UserVoiceProps> = props => {
  return (
    <div className={props.className}>
      <p className={Utils['Align-llc']}>
        楽天モバイル株式会社
        <br />
        所在地：東京都世田谷区玉川一丁目14番1号{' '}
        <br className={Utils['Show-oox']} />
        <TextWithIndent>楽天クリムゾンハウス</TextWithIndent>
      </p>
      <div
        className={`${Utils['Align-center']} ${Utils['Mt-48']} ${Utils['Mt-pc-16']}`}
      >
        <p>
          <LinkNormal
            href={`/support/?l-id=ad_lp_contents_${props.directory}_support`}
          >
            お問い合わせ先
          </LinkNormal>
        </p>
        <p>
          <LinkNormal
            href={`https://corp.mobile.rakuten.co.jp/guide/privacy/?l-id=ad_lp_contents_${props.directory}_guide_privacy`}
            target="_blank"
            rel="noopener"
          >
            個人情報保護ポリシー
          </LinkNormal>
        </p>
      </div>
    </div>
  )
}
