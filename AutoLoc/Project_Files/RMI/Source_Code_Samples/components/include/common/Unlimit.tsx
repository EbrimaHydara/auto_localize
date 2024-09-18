import { assets } from '@components/utils/assets'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
import Utils from '@styles/Utils.module.scss'
import { useGenerateId } from '@components/utils/useGenerateId'
import { TxtCap } from '@components/atoms/Txt'

const UnlimitBlock = styled.div`
  padding-bottom: 16px;
  background-color: ${props => props.theme.colors.monotone97};

  // karteでstyled-componentsが使えないので
  .karte-buttonSecondaryLarge {
    text-align: center;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    a {
      display: inline-block;
      width: 100%;
      position: relative;
      text-align: center;
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.fonts.base};
      font-weight: bold;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 4px;
      line-height: 1.4;
      border-radius: 50px;
      box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: auto;
      }
      background-color: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      &:hover,
      &:focus {
        background-color: ${props => props.theme.colors.pink20};
        color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
      }
      &:focus {
        outline: 2px ${props => props.theme.colors.linkBlue} solid;
        outline-offset: 2px;
      }
      &:active {
        background-color: ${props => props.theme.colors.pink40};
        outline: 0;
        border: 1px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        box-shadow: none;
      }
      min-width: 160px;
      @media screen and (max-width: ${props => props.theme.max.m}) {
        max-width: 500px;
      }
      font-size: 18px;
      padding: 16px 24px;
      max-width: 500px;
      width: 100%;
      line-height: 1.4;
      span.text-sub {
        display: block;
      }
      @media screen and (min-width: ${props => props.theme.min.l}) {
        width: 100%;
      }
    }
  }
`
const UnlimitCap = styled(TxtCap)`
  margin-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

type UnlimitContents = {
  title?: string
  href: string
  target?: string
  lid?: string
}

type Unlimit = {
  className?: string
  text: UnlimitContents[]
}

export const CommonUnlimit = (props: Unlimit) => {
  const theme = useContext(ThemeContext)
  const { className, text } = props
  const { generateId } = useGenerateId()

  return (
    <UnlimitBlock className={className}>
      <picture>
        <source
          media={`(max-width: ${theme.max.s})`}
          srcSet={`${assets}img/inc/un-limit/img-unlimit-7-sp_230224.png`}
          width="517"
          height="1024"
        />
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={`${assets}img/inc/un-limit/img-unlimit-7-sp_230224.png`}
          width="937"
          height="1855"
        />
        {/*
        20230215-ToDo
        レイアウトシフト対策で
        width、heightを入れてタブレットで見るととても細くなってしまうので
        tab用としてspと同じものを2.5xで書き出したい
        とりあえずsp用をやや拡大している（最新ファイルが見つからず）
        */}
        <img
          src={`${assets}img/inc/un-limit/img-unlimit-7-pc_230224.png`}
          width="1032"
          height="452"
          alt="Rakuten UN-LIMIT VII"
          loading="lazy"
        />
      </picture>
      <div
        className={`${Utils['Align-center']} ${Utils['Mt-16']} ${Utils['Pl-16']} ${Utils['Pr-16']}`}
      >
        {text.map(value => (
          <ButtonPrimaryLarge
            key={generateId()}
            as="a"
            href={value.href}
            {...(value.target && { target: value.target })}
          >
            {value.title ? value.title : '料金プランの詳細を見る'}
          </ButtonPrimaryLarge>
        ))}
      </div>
      <div className="karte-uservoice-unlimit"></div>

      <UnlimitCap as="p" className={Utils['Mt-24']}>
        *1 無制限は通信量のこと。ゲーム内課金、コンテンツ利用料等別 *3
        ダイヤモンド会員がSPU全達成の場合。獲得ポイント上限あり *4
        利用上限等条件あり
      </UnlimitCap>
    </UnlimitBlock>
  )
}
