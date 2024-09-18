import type { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useCallback, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Collapse } from 'react-collapse'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalSimpleHeader } from '@components/molecules/GlobalSimpleHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { TxtEmp01, TxtEmp02, TxtCap, TxtSize } from '@components/atoms/Txt'
import { LinkNormal } from '@components/atoms/Link'
import { ButtonLinkIconBefore } from '@components/atoms/ButtonLink'
import {
  Radio,
  RadioInput,
  RadioWrap,
  RadioIcon,
  RadioContent,
} from '@components/atoms/ButtonRadio'
import {
  ButtonRegularLarge,
  ButtonPrimaryLarge,
} from '@components/atoms/Buttons'
import {
  AcoordionWrapper,
  AccordionTrigger,
  CollapseWrapper,
} from '@components/atoms/AccordionList'
import { Checkbox } from '@components/atoms/Checkbox'
import { mixins } from '@components/utils/Mixins'
import { IconChevronRight, IconChevronLeft } from '@components/icons'
import { Heading } from '@components/atoms/Heading'
import TagManager from 'react-gtm-module'

const Hero = styled.div`
  border-top: 1px solid ${props => props.theme.colors.white};
  text-align: center;
`

const HeroMain = styled(Hero)`
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.primary} 60.7%,
    #fff200 60.7%,
    #fff200 100%
  );
  ${mixins.mq.MaxM} {
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.primary} 0%,
      ${props => props.theme.colors.primary} 61.5%,
      #fff200 61.5%,
      #fff200 100%
    );
  }
`

const HeroSubApplication = styled(Hero)`
  background-color: ${props => props.theme.colors.primary};
  padding: 16px 0;
  text-align: center;
`

const HeroSubVoice = styled(Hero)`
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.white} 0%,
    ${props => props.theme.colors.white} 61.7%,
    ${props => props.theme.colors.primary} 61.7%,
    ${props => props.theme.colors.primary} 100%
  );
  ${mixins.mq.MaxM} {
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.white} 0%,
      ${props => props.theme.colors.white} 45.8%,
      ${props => props.theme.colors.primary} 45.8%,
      ${props => props.theme.colors.primary} 100%
    );
  }
`

const HeroSubData = styled(Hero)`
  background: linear-gradient(
    180deg,
    ${props => props.theme.colors.white} 0%,
    ${props => props.theme.colors.white} 66.6%,
    ${props => props.theme.colors.primary} 66.6%,
    ${props => props.theme.colors.primary} 100%
  );
  ${mixins.mq.MaxM} {
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.white} 0%,
      ${props => props.theme.colors.white} 72.1%,
      ${props => props.theme.colors.primary} 72.1%,
      ${props => props.theme.colors.primary} 100%
    );
  }
`

const CustomSystemContainer = styled(SystemContainer)`
  max-width: 680px;
`

const Ask = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.fonts.m};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`

const Choices = styled.div`
  display: flex;
  gap: 16px;
`

const ChoicesWrapper = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.pink5};
`

const ChoicesItem = styled.div`
  width: 100%;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const CustomRadio = styled(Radio)`
  display: block;
  height: 100%;
`

const CustomRadioInput = styled(RadioInput)`
  &:checked + span {
    padding: ${({ vertical }) => (vertical ? '7px' : '14px')};
  }
  &[aria-invalid='true'] + span {
    &:hover {
      padding: ${({ vertical }) => (vertical ? '7px' : '14px')};
    }
  }
`

const CustomRadioWrap = styled(RadioWrap)<{ hasShadow?: boolean }>`
  height: 100%;
  padding: ${({ vertical }) => (vertical ? '8px' : '15px')};
  box-shadow: ${({ hasShadow }) =>
    hasShadow ? '0px 4px 0px 0px rgba(0, 0, 0, 0.1)' : 'none'};
  &:hover {
    padding: ${({ vertical }) => (vertical ? '7px' : '14px')};
  }
  @media screen and (max-width: 769px) {
    padding: ${({ vertical }) => (vertical ? '8px' : '15px')};
    &:hover {
      padding: ${({ vertical }) => (vertical ? '7px' : '14px')};
    }
  }
`

const CustomRadioContent = styled(RadioContent)`
  display: flex;
  flex-direction: column;
  > span {
    display: block;
  }
`

const CustomRadioIcon = styled(RadioIcon)<{ isHidden?: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`

interface CustomRadioButtonProps {
  children: React.ReactNode
  inputName?: string
  id?: string
  name?: string
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  value: string
  role?: string
  vertical?: boolean
  autoComplete?: string
  ratid?: string
  className?: string
  contentClassName?: string
  aria_hidden?: boolean
  invalid?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  isIconHidden?: boolean
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = props => {
  return (
    <CustomRadio className={props.className}>
      <CustomRadioInput
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        aria-invalid={props.invalid}
        onChange={props.onChange}
        vertical={props.vertical}
        autoComplete={props.autoComplete}
        data-ratid={props.ratid}
        data-ratevent={props.ratid && 'click'}
        data-ratparam={props.ratid && 'all'}
      />
      <CustomRadioWrap
        role={props.role}
        vertical={props.vertical}
        hasShadow={props.isIconHidden}
      >
        <CustomRadioIcon
          vertical={props.vertical}
          isHidden={props.isIconHidden}
        />
        <CustomRadioContent
          vertical={props.vertical}
          className={props.contentClassName}
        >
          {props.children}
        </CustomRadioContent>
      </CustomRadioWrap>
    </CustomRadio>
  )
}

interface CustomAccordionProps {
  children: React.ReactNode
  isOpen: boolean
  id: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const themeCollapse = {
  collapse: 'accordionlist-collapse',
  content: 'accordionlist-collapse-content',
}

const CustomAccordionWrapper = styled(AcoordionWrapper)`
  position: relative;
  border: solid 1px ${props => props.theme.colors.monotone56};

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  & + & {
    border-top: 0;
  }

  .accordionlist-collapse {
    transition: height 600ms;
    height: auto;
    min-height: 140px;
    &[aria-hidden='true'] {
      display: block;
      height: auto;
    }
  }
  .accordionlist-collapse-content {
    padding: 0;
  }

  iframe {
    border: none;
  }

  &.isOpen {
    iframe {
      padding-bottom: 0;
    }
  }
  &.isClose {
    iframe {
      padding-bottom: 140px;
    }
  }
`
const CustomAccordionTrigger = styled(AccordionTrigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2px;
  padding: 8px 0 16px;
  text-align: center;
  line-height: 0;
  &[aria-expanded='true'] {
    font-weight: normal;
  }

  ${IconChevronRight} {
    display: inline-block;
    color: ${props => props.theme.colors.primary};
    padding-top: 2px;
    &.isOpen {
      transform: rotate(270deg);
    }
    &.isClose {
      transform: rotate(90deg);
    }
  }
`

const CustomAccordionMoreButton = styled.span`
  color: ${props => props.theme.colors.link};
  text-decoration: underline;
`

const AccordionTail = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.monotone97};
  border: solid 1px ${props => props.theme.colors.monotone56};
  border-top: 0;
  border-radius: 0 0 4px 4px;
`

const CustomAccordion: React.FC<CustomAccordionProps> = props => {
  return (
    <CustomAccordionWrapper className={props.isOpen ? 'isOpen' : 'isClose'}>
      <CollapseWrapper>
        <Collapse
          isOpened={props.isOpen}
          theme={themeCollapse}
          initialStyle={{ height: '280px' }}
        >
          {props.children}
        </Collapse>
      </CollapseWrapper>
      <CustomAccordionTrigger
        aria-expanded={props.isOpen ? 'true' : 'false'}
        aria-controls={props.id}
        onClick={props.handleClick}
        type="button"
      >
        <IconChevronRight className={props.isOpen ? 'isOpen' : 'isClose'} />
        <CustomAccordionMoreButton as="span">
          {props.isOpen ? 'とじる' : 'もっと見る'}
        </CustomAccordionMoreButton>
      </CustomAccordionTrigger>
    </CustomAccordionWrapper>
  )
}

const BssQueries = {
  actions: {
    data: 'datasimoneclick',
    voice: 'oneclick',
  },
  dpis: {
    checked: 'Yes',
    unchecked: 'No',
  },
  simTypes: {
    eSim: 'eSim',
    pSim: 'pSim',
  },
  portIn: {
    yes: 'true',
    no: 'false',
  },
} as const

type BssQueriesActionsType =
  (typeof BssQueries.actions)[keyof typeof BssQueries.actions]
type BssQueriesDpisType = (typeof BssQueries.dpis)[keyof typeof BssQueries.dpis]
type BssQueriesSimTypesType =
  (typeof BssQueries.simTypes)[keyof typeof BssQueries.simTypes]
type BssQueriesPortInType =
  (typeof BssQueries.portIn)[keyof typeof BssQueries.portIn]

const OnboardingFast: NextPage = () => {
  const theme = useContext(ThemeContext)
  const pagetitle = 'Web申し込み'
  const imgPath = `${assets}img/onboarding/fast/`
  // const bssUrl = 'https://preprod-onboarding.rmb-lab.jp/' // stg
  const bssUrl = 'https://onboarding.mobile.rakuten.co.jp/' // prd
  const iframeUrl = '/' // localで確認するときはこれを変更

  const [step, setStep] = useState(1)

  const updateStep = useCallback(
    (value: number, isBack: boolean = false) => {
      if (isBack) {
        switch (step) {
          case 2:
            setQueryAction('')
            break
          case 3:
            setQueryPortIn('')
            break
          case 4:
            setQuerySimType(BssQueries.simTypes.eSim)
            setIsValidated(false)
            setQueryDPI(BssQueries.dpis.unchecked)
            setAccState1(false)
            setAccState2(false)
            setAccState3(false)
            break
          default:
            break
        }
        setStep(value)
      } else {
        setTimeout(() => {
          setStep(value)
        }, 300)
      }
    },
    [step],
  )

  // accordion周り
  const [accState1, setAccState1] = useState(false)
  const [accState2, setAccState2] = useState(false)
  const [accState3, setAccState3] = useState(false)

  const updateAccState = useCallback((id: number) => {
    switch (id) {
      case 1:
        setAccState1(prevState => !prevState)
        break
      case 2:
        setAccState2(prevState => !prevState)
        break
      case 3:
        setAccState3(prevState => !prevState)
        break
      default:
        break
    }
  }, [])

  const [queryAction, setQueryAction] = useState<BssQueriesActionsType | ''>('')
  const [queryPortIn, setQueryPortIn] = useState<BssQueriesPortInType | ''>('')
  const [querySimType, setQuerySimType] = useState<BssQueriesSimTypesType>(
    BssQueries.simTypes.eSim,
  )
  const [queryDPI, setQueryDPI] = useState<BssQueriesDpisType>(
    BssQueries.dpis.unchecked,
  )
  const [querySourceExternalChannel, setQuerySourceExternalChannel] =
    useState('')

  const updatePortIn = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQueryPortIn(e.target.value as BssQueriesPortInType)
      updateStep(step + 1)
    },
    [step],
  )

  const updateSimType = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuerySimType(e.target.value as BssQueriesSimTypesType)
    },
    [],
  )

  const updateAction = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQueryAction(e.target.value as BssQueriesActionsType)
      if (e.target.value === BssQueries.actions.data) {
        updateStep(step + 2)
      } else {
        updateStep(step + 1)
      }
    },
    [step],
  )

  const updateDPI = useCallback((checked?: boolean) => {
    if (checked) {
      setQueryDPI(BssQueries.dpis.checked)
    } else {
      setQueryDPI(BssQueries.dpis.unchecked)
    }
  }, [])

  const [isValidated, setIsValidated] = useState(false)
  const checkTerms = useCallback((checked?: boolean) => {
    if (checked) {
      setIsValidated(true)
    } else {
      setIsValidated(false)
    }
  }, [])

  const searchParams = useSearchParams()
  const sourceExternalChannel = searchParams.get('sourceExternalChannel') || ''
  const scid = searchParams.get('scid') || ''

  useEffect(() => {
    const _sourceExternalChannel = scid || sourceExternalChannel
    if (_sourceExternalChannel) {
      setQuerySourceExternalChannel(_sourceExternalChannel)
    }
  }, [scid, sourceExternalChannel])

  useEffect(() => {
    if (typeof RAT === 'undefined') {
      return
    }
    // 同一classでRAT.bind([classname])でもおk
    const ratClickWrapperElm = RAT.$Selector('.dynamic-rat-click-wrapper').find(
      '[data-ratId]',
    )
    const ratClickElm = RAT.$Selector('.dynamic-rat-click')
    const ratAppearElm = RAT.$Selector('.dynamic-rat-appear')
    RAT.bindClick(ratClickWrapperElm)
    RAT.bindClick(ratClickElm)
    RAT.bindAppear(ratAppearElm)
  }, [step])

  const gtmId = 'GTM-KTBRZQ8K'

  useEffect(() => {
    TagManager.initialize({ gtmId })
  }, [gtmId])

  const navigateBss = useCallback(
    (lId?: string) => {
      if (lId) {
        window.location.href = `${bssUrl}?l-id=${lId}`
      } else {
        window.location.href = bssUrl
      }
    },
    [bssUrl],
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        description="Rakuten最強プラン“サクッ”とWeb申し込み。最短3分で開通！"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalSimpleHeader isNoLink={true} />
        {step === 1 && (
          <HeroMain>
            <h1>
              <picture>
                <source
                  media={`(max-width: ${theme.max.m})`}
                  srcSet={`${imgPath}kv-main-sp-240315.png`}
                  width="750"
                  height="234"
                />
                <img
                  src={`${imgPath}kv-main-pc-240315.png`}
                  alt="電話番号そのまま乗り換え（MNP）＆初めて申込みで6,000ポイント データ3GB(1,078円)×5カ月分ポイント還元で実質5カ月無料"
                  width="1032"
                  height="152"
                />
              </picture>
            </h1>
          </HeroMain>
        )}
        {(step === 2 || step === 3) && (
          <HeroSubApplication>
            <img
              src={`${imgPath}text-plan-application.png`}
              alt="プランのお申し込み"
              width="187"
              height="24"
            />
          </HeroSubApplication>
        )}
        {step === 4 && (
          <>
            {queryAction === BssQueries.actions.voice && (
              <HeroSubVoice>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}kv-voice-sp.png`}
                    width="750"
                    height="480"
                  />
                  <img
                    src={`${imgPath}kv-voice-pc.png`}
                    alt="Rakuten最強プランお申し込み 日本全国の通信エリアでデータ高速無制限2,980円/月[税込3,278円] ※公平なサービスのため、速度制限の場合あり。通話料等別"
                    width="1032"
                    height="240"
                  />
                </picture>
              </HeroSubVoice>
            )}
            {queryAction === BssQueries.actions.data && (
              <HeroSubData>
                <picture>
                  <source
                    media={`(max-width: ${theme.max.m})`}
                    srcSet={`${imgPath}kv-data-sp-231101.png`}
                    width="750"
                    height="460"
                  />
                  <img
                    src={`${imgPath}kv-data-pc.png`}
                    alt="データ通信専用 Rakuten最強プラン データタイプ お申し込み 【楽天カードをお持ちのお客様限定】 3GB 1,081円/月が1,081ポイント還元で初月実質3GB相当無料でお試し!※"
                    width="1032"
                    height="240"
                  />
                </picture>
              </HeroSubData>
            )}
          </>
        )}
        <CustomSystemContainer>
          {step === 4 && queryAction === BssQueries.actions.data && (
            <div className={Utils['Mt-8']}>
              <TxtCap as="p">
                ※ 1回限り、開通翌々月末に進呈、他キャンペーン併用不可
              </TxtCap>
            </div>
          )}
          <div className={Utils['Mt-24']}>
            {step === 1 && (
              <>
                <ChoicesWrapper>
                  <Ask
                    className="dynamic-rat-appear"
                    data-ratid="onboarding-fast-application"
                    data-ratevent="appear"
                    data-ratparam="all"
                  >
                    お申し込み内容を
                    <br />
                    選択してください
                  </Ask>
                  <Choices
                    className={`${Utils['Mt-16']} dynamic-rat-click-wrapper`}
                  >
                    <ChoicesItem>
                      <CustomRadioButton
                        value="only-plan"
                        name="application"
                        vertical={true}
                        onChange={() => updateStep(step + 1)}
                        ratid="onboarding-fast-application-only-plan"
                        isIconHidden={true}
                      >
                        <TxtEmp01>
                          プランのみ
                          <br />
                          お申し込み
                        </TxtEmp01>
                        <span className={Utils['Mt-8']}>
                          <img
                            src={`${imgPath}icon-step1-01.png`}
                            alt=""
                            width="170"
                            height="80"
                          />
                        </span>
                      </CustomRadioButton>
                    </ChoicesItem>
                    <ChoicesItem>
                      <CustomRadioButton
                        value="set-smartphone"
                        name="application"
                        vertical={true}
                        ratid="onboarding-fast-application-set-smartphone"
                        onChange={() =>
                          navigateBss('onboarding-fast-set-smartphone')
                        }
                        isIconHidden={true}
                      >
                        <TxtEmp01>
                          スマホとセットで
                          <br />
                          お申し込み
                        </TxtEmp01>
                        <span className={Utils['Mt-8']}>
                          <img
                            src={`${imgPath}icon-step1-02.png`}
                            alt=""
                            width="170"
                            height="80"
                          />
                        </span>
                      </CustomRadioButton>
                    </ChoicesItem>
                  </Choices>
                </ChoicesWrapper>
                <div className={Utils['Mt-16']}>
                  <TxtCap as="p">
                    ※アプリ利用条件等あり※翌々月末日ごろから3カ月にわたり付与※上記キャンペーンルールは
                    <LinkNormal href="/campaign/mnp/?l-id=onboarding_campaign_mnp#campaign-rule2091">
                      こちら
                    </LinkNormal>
                    <br />
                    ※「実質価格」とは、キャンペーンの条件達成（楽天モバイルを初めてお申し込み、対象製品のご購入、Rakuten
                    Linkアプリのご利用など）により後日付与されるポイントを加味した価格であり、実際のお支払い金額とは異なります。
                  </TxtCap>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <ChoicesWrapper>
                  <Ask
                    className="dynamic-rat-appear"
                    data-ratid="onboarding-fast-plan"
                    data-ratevent="appear"
                    data-ratparam="all"
                  >
                    プランのタイプを
                    <br />
                    選択してください
                  </Ask>
                  <Choices
                    className={`${Utils['Mt-16']} dynamic-rat-click-wrapper`}
                  >
                    <ChoicesItem>
                      <CustomRadioButton
                        value={BssQueries.actions.voice}
                        name="action"
                        vertical={true}
                        onChange={updateAction}
                        ratid="onboarding-fast-plan-oneclick"
                        isIconHidden={true}
                      >
                        <TxtEmp01>Rakuten 最強プラン</TxtEmp01>
                        <span className={Utils['Mt-8']}>
                          <img
                            src={`${imgPath}icon-step2-01.png`}
                            alt=""
                            width="170"
                            height="80"
                          />
                        </span>
                        <TxtSize size="s" className={Utils['Mt-16']}>
                          音声通話＋データ通信
                        </TxtSize>
                      </CustomRadioButton>
                    </ChoicesItem>
                    <ChoicesItem>
                      <CustomRadioButton
                        value={BssQueries.actions.data}
                        name="action"
                        vertical={true}
                        onChange={updateAction}
                        ratid="onboarding-fast-plan-datasimoneclick"
                        isIconHidden={true}
                      >
                        <TxtEmp01>
                          Rakuten 最強プラン{' '}
                          <TxtSize size="s">(データタイプ)</TxtSize>
                        </TxtEmp01>
                        <span className={Utils['Mt-8']}>
                          <img
                            src={`${imgPath}icon-step2-02-231101.png`}
                            alt=""
                            width="170"
                            height="80"
                          />
                        </span>
                        <TxtSize size="s" className={Utils['Mt-16']}>
                          データ通信
                        </TxtSize>
                        <TxtCap>※本人確認書類の提出不要</TxtCap>
                      </CustomRadioButton>
                    </ChoicesItem>
                  </Choices>
                </ChoicesWrapper>
                <div className={Utils['Mt-32']}>
                  <ButtonLinkIconBefore
                    className="dynamic-rat-click"
                    onClick={() => updateStep(step - 1, true)}
                    data-ratid="onboarding-fast-plan-back"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <IconChevronLeft />
                    <span>前の選択に戻る</span>
                  </ButtonLinkIconBefore>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <ChoicesWrapper>
                  <Ask
                    className="dynamic-rat-appear"
                    data-ratid="onboarding-fast-port-in"
                    data-ratevent="appear"
                    data-ratparam="all"
                  >
                    今お使いの電話番号を
                    <br />
                    引き継ぎますか？
                  </Ask>
                  <Choices
                    className={`${Utils['Mt-16']} dynamic-rat-click-wrapper`}
                  >
                    <ChoicesItem>
                      <CustomRadioButton
                        value={BssQueries.portIn.yes}
                        name="portIn"
                        vertical={true}
                        onChange={updatePortIn}
                        ratid="onboarding-fast-port-in-yes"
                        isIconHidden={true}
                      >
                        <TxtEmp01>引き継ぐ</TxtEmp01>
                        <TxtSize size="s">他社から乗り換え（MNP）</TxtSize>
                      </CustomRadioButton>
                    </ChoicesItem>
                    <ChoicesItem>
                      <CustomRadioButton
                        value={BssQueries.portIn.no}
                        name="portIn"
                        vertical={true}
                        onChange={updatePortIn}
                        ratid="onboarding-fast-port-in-no"
                        isIconHidden={true}
                      >
                        <TxtEmp01>引き継がない</TxtEmp01>
                        <TxtSize size="s">新規電話番号お申し込み</TxtSize>
                      </CustomRadioButton>
                    </ChoicesItem>
                  </Choices>
                </ChoicesWrapper>
                <div className={Utils['Mt-32']}>
                  <ButtonLinkIconBefore
                    className="dynamic-rat-click"
                    onClick={() => updateStep(step - 1, true)}
                    data-ratid="onboarding-fast-port-in-back"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <IconChevronLeft />
                    <span>前の選択に戻る</span>
                  </ButtonLinkIconBefore>
                </div>
              </>
            )}
            {step === 4 && (
              <>
                <div>
                  <ChoicesWrapper className={Utils['Mt-16']}>
                    <Ask
                      className="dynamic-rat-appear"
                      data-ratid="onboarding-fast-sim-type"
                      data-ratevent="appear"
                      data-ratparam="all"
                    >
                      ご利用になる
                      <br />
                      SIMタイプを選択してください
                    </Ask>
                    <div className={Utils['Mt-24']}>
                      {queryAction === BssQueries.actions.voice && (
                        <>
                          <TxtEmp01 as="p">
                            <TxtEmp02>最短3分！</TxtEmp02>すぐに利用開始できる
                          </TxtEmp01>
                          <TxtCap as="p">
                            ※
                            eSIM対応製品の場合。審査状況により変動。アプリ最新版利用時
                          </TxtCap>
                        </>
                      )}
                      {queryAction === BssQueries.actions.data && (
                        <p>
                          <TxtEmp01>iPhone XR</TxtEmp01>以上なら
                          <TxtEmp02>SIMカード不要のeSIM</TxtEmp02>
                          ですぐに始められる！
                        </p>
                      )}
                    </div>
                    <Choices
                      className={`${Utils['Mt-8']} dynamic-rat-click-wrapper`}
                    >
                      <ChoicesItem>
                        <CustomRadioButton
                          value={BssQueries.simTypes.eSim}
                          name="simType"
                          vertical={true}
                          onChange={updateSimType}
                          contentClassName={Utils['Mt-8']}
                          ratid="onboarding-fast-sim-type-esim"
                          defaultChecked={true}
                        >
                          <TxtEmp01>eSIM</TxtEmp01>
                        </CustomRadioButton>
                      </ChoicesItem>
                      <ChoicesItem>
                        <CustomRadioButton
                          value={BssQueries.simTypes.pSim}
                          name="simType"
                          vertical={true}
                          onChange={updateSimType}
                          contentClassName={Utils['Mt-8']}
                          ratid="onboarding-fast-sim-type-psim"
                        >
                          <TxtEmp01>SIMカード</TxtEmp01>
                        </CustomRadioButton>
                      </ChoicesItem>
                    </Choices>
                    <TxtSize size="s" as="p" className={Utils['Mt-8']}>
                      eSIMを選択の場合、お持ちの製品が楽天モバイル対応のeSIM対応製品かご確認ください。
                    </TxtSize>
                    <TxtCap as="p">
                      ※iPhone XR 以降がeSIM対応製品です。
                      <br />
                      ※Androidやその他のeSIM対応製品の詳細は
                      <LinkNormal href="/product/sim/esim/">こちら</LinkNormal>
                    </TxtCap>
                  </ChoicesWrapper>
                </div>
                <div className={`${Utils['Mt-40']} ${Utils['Px-8']}`}>
                  <Heading level="4" as="h4">
                    重要事項説明・利用規約の確認
                  </Heading>
                  <div className={Utils['Mt-24']}>
                    <CustomAccordion
                      isOpen={accState1}
                      id="accordion-content-1"
                      handleClick={() => updateAccState(1)}
                    >
                      {queryAction === BssQueries.actions.voice && (
                        <iframe
                          src={`${iframeUrl}ecare/terms/rakuten-mobile/r9_xo36kg2oiwahx8s/`}
                          width="100%"
                          height="280px"
                        ></iframe>
                      )}
                      {queryAction === BssQueries.actions.data && (
                        <iframe
                          src={`${iframeUrl}ecare/terms/data-type/r8_2a_3_kttlamwy5g2koq6/`}
                          width="100%"
                          height="280px"
                        ></iframe>
                      )}
                    </CustomAccordion>
                    <CustomAccordion
                      isOpen={accState2}
                      id="accordion-content-2"
                      handleClick={() => updateAccState(2)}
                    >
                      <iframe
                        src={`${iframeUrl}ecare/terms/bandwidth-control/r8_2a_2_fbkakcvtneuynv0/`}
                        width="100%"
                        height="280px"
                      ></iframe>
                    </CustomAccordion>
                    <AccordionTail>
                      <p>
                        <LinkNormal href="/terms/">利用規約</LinkNormal> (
                        <LinkNormal href="https://corp.mobile.rakuten.co.jp/guide/privacy/">
                          プライバシーポリシー
                        </LinkNormal>
                        を含む)
                      </p>
                      <Checkbox
                        text="上記内容を確認し、同意しました"
                        value="terms"
                        onChangeCheck={checked => checkTerms(checked)}
                        className={Utils['Mt-16']}
                      />
                    </AccordionTail>
                  </div>
                </div>
                <div className={`${Utils['Mt-16']} ${Utils['Px-8']}`}>
                  <div>
                    <CustomAccordion
                      isOpen={accState3}
                      id="accordion-content-3"
                      handleClick={() => updateAccState(3)}
                    >
                      <iframe
                        src={`${iframeUrl}ecare/terms/privacy/r8_2a_2_fbkakcvtneuynv0/`}
                        width="100%"
                        height="280px"
                      ></iframe>
                    </CustomAccordion>
                    <AccordionTail>
                      <Checkbox
                        text="位置情報と通信履歴の提供に同意します"
                        value="位置情報と通信履歴"
                        onChangeCheck={checked => updateDPI(checked)}
                      />
                    </AccordionTail>
                  </div>
                </div>
                <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                  <ButtonPrimaryLarge
                    className=""
                    as="a"
                    aria-disabled={!isValidated}
                    href={`${bssUrl}oneclick?action=${queryAction}&port-in=${queryPortIn}&simType=${querySimType}&DPI=${queryDPI}&sourceExternalChannel=${querySourceExternalChannel}`}
                  >
                    次に進む
                  </ButtonPrimaryLarge>
                </div>
                <TxtSize size="s" as="p" className={Utils['Mt-24']}>
                  「次へ進む」をクリックすると楽天モバイルからお送りするおトクなお知らせの受信に同意いただいたものとみなします。
                </TxtSize>
                {queryAction === BssQueries.actions.data && (
                  <TxtSize size="s" as="p">
                    ※配信設定変更はmy 楽天モバイルから
                    <br />
                    18歳未満のお客様は、
                    <LinkNormal href="https://r10.to/h5RvLj">こちら</LinkNormal>
                    からお申し込みください
                  </TxtSize>
                )}
                <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
                  <ButtonRegularLarge
                    className="dynamic-rat-click"
                    onClick={() =>
                      updateStep(
                        step -
                          (queryAction === BssQueries.actions.data ? 2 : 1),
                        true,
                      )
                    }
                    data-ratid="onboarding-fast-sim-type-back"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    戻る
                  </ButtonRegularLarge>
                </div>
              </>
            )}
          </div>
        </CustomSystemContainer>
        <GlobalFooter copyrightSimple={true} className={Utils['Mt-32']} />
      </SystemWrapper>
    </>
  )
}
export default OnboardingFast
