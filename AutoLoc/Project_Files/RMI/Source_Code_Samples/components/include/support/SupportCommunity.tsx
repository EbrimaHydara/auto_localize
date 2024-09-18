import React, { useContext } from 'react'
import Utils from '@styles/Utils.module.scss'
import { Heading } from '@components/atoms/Heading'
import { TxtSize } from '@components/atoms/Txt'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import { ThemeContext } from 'styled-components'
import { IconNewTabLine } from '@components/icons'
import { ButtonRegularLarge } from '@components/atoms/Buttons'

const Contents = styled.div`
  margin-top: 24px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.colors.white};
  ${mixins.mq.MaxS} {
    margin-top: 16px;
    padding-bottom: 24px;
  }
  &.round {
    box-shadow: 0 2px 2px #f2eee8;
    overflow: hidden;
    border: 1px solid ${props => props.theme.colors.monotone75};
    border-radius: 8px;
  }
`

const Main = styled.div`
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  ${mixins.mq.MaxS} {
    margin-top: 16px;
  }
`

type Props = {
  className?: string
  rat?: string
  headAlign?: string
  corner?: string
  lazy?: boolean
}

export const SupportCommunity = ({
  className,
  rat,
  headAlign,
  corner,
  lazy,
}: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={className}>
      <Heading level="2" className={headAlign}>
        <TxtSize size="m">お困りごと解決！</TxtSize>
        <br />
        みんなの楽天モバイル
        <br className={Utils['Disp-sp']} />
        コミュニティ
      </Heading>
      <Contents className={corner}>
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/support/community-support-343-253_230700.png`}
            width="1372"
            height="1012"
          />
          <img
            src={`${assets}img/support/community-support-1032-206_230700.png`}
            width="1032"
            height="206"
            alt=""
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
        <Main>
          <p>
            お困りごとをみんなで質問・回答できる！解決したお困りごとの検索もできます。
          </p>
          <div className={Utils['Mt-16']}>
            <ButtonRegularLarge
              as="a"
              href="https://community.mobile.rakuten.net/"
              target="_blank"
              data-ratid={rat}
              data-ratevent="click"
              data-ratparam="all"
            >
              コミュニティへ進む
              <IconNewTabLine className={`${Utils['Ml-8']} icon-end`} />
            </ButtonRegularLarge>
          </div>
        </Main>
      </Contents>
    </div>
  )
}
