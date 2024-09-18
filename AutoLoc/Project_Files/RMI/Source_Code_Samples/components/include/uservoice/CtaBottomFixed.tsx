import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { TxtSize } from '@components/atoms/Txt'
import { mixins } from '@components/utils/Mixins'
import { useUservoice } from '@components/include/uservoice/hooks/useUservoice'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 8px 16px;
  width: 100%;
  background-color: rgba(77, 77, 77, 0.8);

  ${mixins.mq.MinL} {
    padding: 16px;
  }

  &[aria-expanded='false'] {
    bottom: -200px;
    transition: 0.5s;
  }
  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1032px;
  ${mixins.mq.MaxL} {
    width: 100%;
  }
`

const ButtonPrimaryLargeCustom = styled(ButtonPrimaryLarge)`
  max-width: 504px;
  padding: 22px 24px;
  display: flex;
  justify-content: center;
  font-size: 16px;
`

const ButtonSecondaryLargeCustom = styled(ButtonSecondaryLarge)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;

  .subTxt {
    display: block;
  }
`

const CustomButtonSp = styled.div`
  width: 100%;

  ${props => mixins.mq.MinCustom(props.theme.max.s)} {
    display: none;
  }
`

const CustomButton = styled.div`
  display: flex;
  width: 100%;

  & + & {
    margin-left: 24px;
  }

  &[aria-expanded='true'] {
    bottom: 0;
    transition: 0.5s;
  }
  ${mixins.mq.MaxS} {
    display: none;
  }
`

interface CtaBottomFixedProps {
  scrollTrigger: React.RefObject<HTMLDivElement>
}

export const CtaBottomFixed = ({ scrollTrigger }: CtaBottomFixedProps) => {
  const { isExpanded } = useUservoice(scrollTrigger)

  const wrapperElem = useRef<HTMLDivElement>(null)

  const adjustPadding = (wrapperHeight: number, target: HTMLElement) => {
    target.style.paddingBottom = `${wrapperHeight}px`
  }
  useEffect(() => {
    const footerElem = document.getElementById('g-footer')
    if (footerElem && wrapperElem.current) {
      const e = wrapperElem.current
      let wrapperHeight = 100
      setTimeout(() => {
        wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
        adjustPadding(wrapperHeight, footerElem)
      }, 500)
      window.addEventListener('resize', () => {
        wrapperHeight = e.clientHeight ? e.clientHeight : wrapperHeight
        adjustPadding(wrapperHeight, footerElem)
      })
    }
  }, [])

  return (
    <Container aria-expanded={isExpanded} ref={wrapperElem}>
      <Inner>
        <CustomButton>
          <ButtonPrimaryLargeCustom
            as="a"
            href="/guide/application/?lid-r=uservoice_guide_application"
          >
            新規／乗り換え（MNP）お申し込み
          </ButtonPrimaryLargeCustom>
        </CustomButton>
        <CustomButton aria-hidden="false">
          <ButtonSecondaryLargeCustom
            className={`${Utils['Pt-8']} ${Utils['Pb-8']}`}
            as="a"
            href="https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=uservoice_ms&mno_migration=1"
          >
            <TxtSize size="s" className="subTxt">
              スーパーホーダイ、組み合わせプランからの
            </TxtSize>
            プラン変更（移行）お申し込み
          </ButtonSecondaryLargeCustom>
        </CustomButton>
        <CustomButtonSp>
          <ButtonPrimaryLarge
            as="a"
            href="/guide/application/?lid-r=top_sp-modal_guide"
          >
            お申し込みはこちら
          </ButtonPrimaryLarge>
        </CustomButtonSp>
      </Inner>
    </Container>
  )
}
