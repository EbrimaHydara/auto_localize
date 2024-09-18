import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import Utils from '@styles/Utils.module.scss'
import {
  ButtonPrimaryLarge,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { useCtaBottom } from '~/hooks/useCtaBottom'
import { SystemContainer } from '@components/layout/System'
import {
  CtaButtomFixedWrap,
  CtaButtomFixedTitleWrap,
  CtaButtomFixedSubTxt,
  CtaButtomFixedInner,
} from '@components/atoms/CtaButtomFixed'

// ボタンが増える場合はbtnTypeの型を増やして（渡ってくる名前縛り）
type BtnItems = {
  btnType: 'application' | 'shop' | 'plan' | 'application_en' | 'shop_en'
  blank?: boolean
  isSecondary?: boolean
}
// 渡せる値は2個までにしたい
type BtnNum = [BtnItems, BtnItems?]

type CtaBottomFixedProps = {
  scrollTrigger: React.RefObject<HTMLDivElement>
  btnItems: BtnNum
  lid: string
}
type ElementType = {
  title: string | JSX.Element
  url: [string, string]
}
type ElementsType = {
  application: ElementType
  shop: ElementType
  plan: ElementType
  application_en: ElementType
  shop_en: ElementType
}

export const CommonCtaBottomFixed = ({
  scrollTrigger,
  btnItems,
  lid,
}: CtaBottomFixedProps) => {
  const item = btnItems.length
  // ボタンが増える場合は型を改修してelementsの中を増やして（渡ってくる名前と同じにして）
  const elements: ElementsType = useMemo(
    () => ({
      application: {
        title: (
          <>
            新規／乗り換え
            <span className={Utils['Disp-pc-tb']}>（MNP）お申し込み</span>
            <span className={Utils['Disp-sp']}>(MNP)</span>
          </>
        ),
        url: ['/guide/application/?lid-r=', '_floating_guide_application'],
      },
      shop: {
        title: 'お近くのショップを探す',
        url: ['/shop/?l-id=', '_floating_shop'],
      },
      plan: {
        title: (
          <>
            <CtaButtomFixedSubTxt>
              スーパーホーダイ、組み合わせプランからの
            </CtaButtomFixedSubTxt>
            <br />
            プラン変更（移行）
            <span className={Utils['Disp-pc']}>お申し込み</span>
          </>
        ),
        url: [
          'https://members-station.mobile.rakuten.co.jp/members/rmb/login?language=J&campaign=web-rakuten&l-id=',
          '_floating_ms&mno_migration=1',
        ],
      },
      application_en: {
        title: 'Apply Here (New/MNP Transfer)',
        url: [
          'https://onboarding.mobile.rakuten.co.jp/?locale=en&l-id=',
          '_footer_onb',
        ],
      },
      shop_en: {
        title: 'Find a Shop Near You/Book a Visit',
        url: ['/shop/en/?l-id=', '_floating_shop_en'],
      },
    }),
    [],
  )

  const outputBtns = useCallback(
    (btns: BtnNum) => {
      return btns.map((btn: BtnItems | undefined) => {
        if (!btn) return null

        const element = elements[btn.btnType]
        const commonProps = {
          as: 'a',
          href: `${element.url[0]}${lid}${element.url[1]}`,
          key: btn.btnType,
          target: btn.blank ? '_blank' : undefined,
          className: 'custom-btn',
        }

        const ButtonComponent: React.ElementType = btn.isSecondary
          ? ButtonSecondaryLarge
          : ButtonPrimaryLarge

        return (
          <ButtonComponent {...commonProps}>
            <CtaButtomFixedTitleWrap>{element.title}</CtaButtomFixedTitleWrap>
          </ButtonComponent>
        )
      })
    },
    [elements, lid],
  )

  const { isExpanded } = useCtaBottom(scrollTrigger)

  const wrapperElem = useRef<HTMLDivElement>(null)

  const adjustPadding = (wrapperHeight: number, target: HTMLElement) => {
    target.style.paddingBottom = `${wrapperHeight}px`
  }
  useEffect(() => {
    const footerElem = document.getElementById('g-footer')
    if (footerElem && wrapperElem.current) {
      const e = wrapperElem.current
      let wrapperHeight = 120
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
    <CtaButtomFixedWrap aria-expanded={isExpanded} ref={wrapperElem}>
      <SystemContainer>
        <CtaButtomFixedInner className={item === 2 ? 'multiple' : undefined}>
          {outputBtns(btnItems)}
        </CtaButtomFixedInner>
      </SystemContainer>
    </CtaButtomFixedWrap>
  )
}
