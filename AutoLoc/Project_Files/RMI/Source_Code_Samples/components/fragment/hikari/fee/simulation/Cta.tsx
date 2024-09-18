import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'

const Container = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`

interface CtaProps {
  mt: number
}

export const Cta = (props: CtaProps) => {
  const theme = useContext(ThemeContext)
  const { mt } = props
  const imgPath = '/img/hikari/fee/'

  return (
    <Container className={`${Utils[`Mt-${mt}`]} hikari-simulation-Btn`}>
      <picture>
        <source
          media={`(max-width: ${theme.max.m})`}
          srcSet={`${imgPath}img-fee-free_sp.png`}
        />
        <img
          src={`${imgPath}img-fee-free_pc.png`}
          alt="月額基本料が1年無料になるキャンペーンをチェック!"
          width="500"
        />
      </picture>
      <ButtonPrimaryLarge
        as="a"
        href="https://secure3.gol.com/mod-pl/rbb/rmch.cgi?scode=qngTI9rXJpRlc1l6roM&cpnkind=mnocampaign"
        data-lid_no="01"
        className={`${Utils['Mt-16']}`}
        data-ratid="rhk_onb_01"
        data-ratevent="click"
        data-ratparam="all"
      >
        楽天ひかりに申し込む
      </ButtonPrimaryLarge>
    </Container>
  )
}
