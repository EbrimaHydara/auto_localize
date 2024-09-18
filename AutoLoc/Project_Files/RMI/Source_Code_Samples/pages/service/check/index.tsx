import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconBefore } from '@components/atoms/Link'
import { IconChevronLeft } from '@components/icons'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { TxtNormal } from '@components/atoms/Txt'
import { ButtonRadio } from '@components/atoms/ButtonRadio'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'

const ServiceCheckTitle = styled.div`
  width: 100%;
  max-width: 1032px;
  min-height: 326px;
  margin: auto;
  padding-top: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-image: url(${assets}img/service/check/img-title-bg-sp.png);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  ${mixins.mq.MinL} {
    min-height: 194px;
    margin-top: 16px;
    padding-top: 0;
    background-image: url(${assets}img/service/check/img-title-bg-pc.png);
    background-size: 100%;
  }
  ${mixins.mq.MaxS} {
    margin-top: 16px;
  }
`

const ServiceCheckTitleInner = styled.div`
  ${mixins.mq.MaxM} {
    padding-left: 16px;
    padding-right: 16px;
    margin: auto;
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
  }
  > h1 {
    span {
      @media screen and (min-width: 321px) {
        display: block;
      }
    }
  }
  > p {
    margin-top: 16px;
    ${mixins.mq.MaxS} {
      text-align: left;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  div {
    width: 100%;
    &:first-child {
      margin-right: 8px;
    }
    & label {
      width: 100%;
    }
  }
`
const ServiceFormList = styled.dl`
  ${mixins.mq.MinL} {
    border-bottom: 1px solid ${props => props.theme.colors.monotone75};
    margin-bottom: 40px;
  }
  > div {
    ${mixins.mq.MinL} {
      display: flex;
      border-top: 1px solid ${props => props.theme.colors.monotone75};
    }
    > dt {
      background: ${props => props.theme.colors.monotone93};
      font-weight: bold;
    }
  }
  > div {
    > dt {
      padding: 16px;
      font-size: 20px;
      ${mixins.mq.MinL} {
        width: calc(
          (100% - ${props => props.theme.gap.l} * (3 - 1)) / 3 + 110px
        );
        padding: 24px 16px;
        font-size: 16px;
      }
    }
    > dd {
      padding: 24px 16px 64px;
      background-color: ${props => props.theme.colors.white};
      ${mixins.mq.MinL} {
        width: 100%;
        padding: 24px;
      }
    }
    &[aria-hidden='true'] {
      display: none;
    }
  }
`

const ServiceCheckTypeA: NextPage = () => {
  const pagetitle = 'オプションサービス診断'
  const directories = [{ path: '/service/', label: 'オプションサービス' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'オプションサービス',
      url: '/service/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  const buttonArgs1 = {
    select: [
      {
        inputName: 'q01',
        id: 'yes01',
        name: 'q01',
        value: 'yes',
        defaultChecked: false,
        disabled: false,
        text: `Yes`,
        vertical: false,
      },
      {
        inputName: 'q01',
        id: 'no01',
        name: 'q01',
        value: 'no',
        defaultChecked: false,
        disabled: false,
        text: `No`,
        vertical: false,
      },
    ],
  }

  const buttonArgs2 = {
    select: [
      {
        inputName: 'q02',
        id: 'yes02',
        name: 'q02',
        value: 'yes',
        defaultChecked: false,
        disabled: false,
        text: `Yes`,
        vertical: false,
      },
      {
        inputName: 'q02',
        id: 'no02',
        name: 'q02',
        value: 'no',
        defaultChecked: false,
        disabled: false,
        text: `No`,
        vertical: false,
      },
    ],
  }

  const buttonArgs3 = {
    select: [
      {
        inputName: 'q03',
        id: 'yes03',
        name: 'q03',
        value: 'yes',
        defaultChecked: false,
        disabled: false,
        text: `Yes`,
        vertical: false,
      },
      {
        inputName: 'q03',
        id: 'no03',
        name: 'q03',
        value: 'no',
        defaultChecked: false,
        disabled: false,
        text: `No`,
        vertical: false,
      },
    ],
  }

  const buttonArgs4 = {
    select: [
      {
        inputName: 'q04',
        id: 'yes04',
        name: 'q04',
        value: 'yes',
        defaultChecked: false,
        disabled: false,
        text: `Yes`,
        vertical: false,
      },
      {
        inputName: 'q04',
        id: 'no04',
        name: 'q04',
        value: 'no',
        defaultChecked: false,
        disabled: false,
        text: `No`,
        vertical: false,
      },
    ],
  }

  const buttonArgs5 = {
    select: [
      {
        inputName: 'q05',
        id: 'yes05',
        name: 'q05',
        value: 'yes',
        defaultChecked: false,
        disabled: false,
        text: `Yes`,
        vertical: false,
      },
      {
        inputName: 'q05',
        id: 'no05',
        name: 'q05',
        value: 'no',
        defaultChecked: false,
        disabled: false,
        text: `No`,
        vertical: false,
      },
    ],
  }

  const buttonArgs6 = {
    select: [
      {
        inputName: 'q06',
        id: 'yes06',
        name: 'q06',
        value: 'yes',
        defaultChecked: false,
        disabled: false,
        text: `Yes`,
        vertical: false,
      },
      {
        inputName: 'q06',
        id: 'no06',
        name: 'q06',
        value: 'no',
        defaultChecked: false,
        disabled: false,
        text: `No`,
        vertical: false,
      },
    ],
  }
  useEffect(() => {
    const questions = [
      {
        name: 'q01',
        text: '好奇心は旺盛なほうだと思う',
        nextYes: 'q02-01',
        nextNo: 'q02-02',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q02-01',
        text: '頭で考えるよりも行動する派である',
        nextYes: 'q03-01',
        nextNo: 'q03-02',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q02-02',
        text: '一つのことを長く継続できる',
        nextYes: 'q03-03',
        nextNo: 'q03-02',
      },
      {
        name: 'q03-01',
        text: '暇な時間やぼーっとしている時間はあまり好きではない',
        nextYes: 'q04-01',
        nextNo: 'q04-02',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q03-02',
        text: '友人関係は狭く、深く、が心地よい',
        nextYes: 'q04-03',
        nextNo: 'q04-02',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q03-03',
        text: '自分は個性的またはユニークだと思う',
        nextYes: 'q04-04',
        nextNo: 'q04-03',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q04-01',
        text: '組織やグループのリーダーになることが多い',
        nextYes: 'q05-01',
        nextNo: 'q05-02',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q04-02',
        text: '料理や雑貨など、買わずに自分で作ることが多い方だ',
        nextYes: 'q05-03',
        nextNo: 'q05-02',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q04-03',
        text: 'ボランティア活動など誰かの役に立てることが好きだ',
        nextYes: 'q05-03',
        nextNo: 'q05-04',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q04-04',
        text: '物事に熱中していると時間を忘れてしまうことがある',
        nextYes: 'q05-05',
        nextNo: 'q05-04',
        resultYes: '',
        resultNo: '',
      },
      {
        name: 'q05-01',
        text: '新しいものや知らないことは少々危険が伴っても試してみたくなる',
        nextYes: '',
        nextNo: 'q06-01',
        resultYes: '/service/check/type-a/',
        resultNo: '',
      },
      {
        name: 'q05-02',
        text: '特定の人と関わるよりも、大勢の友人と仲良くしたい',
        nextYes: '',
        nextNo: '',
        resultYes: '/service/check/type-a/',
        resultNo: '/service/check/type-b/',
      },
      {
        name: 'q05-03',
        text: '他人の手伝い等を優先して自分のことを後回しにしてしまうことがある',
        nextYes: '',
        nextNo: '',
        resultYes: '/service/check/type-b/',
        resultNo: '/service/check/type-c/',
      },
      {
        name: 'q05-04',
        text: '事前に計画をたて慎重にすすめていく方である',
        nextYes: '',
        nextNo: '',
        resultYes: '/service/check/type-c/',
        resultNo: '/service/check/type-d/',
      },
      {
        name: 'q05-05',
        text: '物事は一つ一つこだわって選ぶ方だ',
        nextYes: '',
        nextNo: 'q06-02',
        resultYes: '/service/check/type-d/',
        resultNo: '',
      },
      {
        name: 'q06-01',
        text: '特定の人と関わるよりも、大勢の友人と仲良くしたい',
        nextYes: '',
        nextNo: '',
        resultYes: '/service/check/type-a/',
        resultNo: '/service/check/type-b/',
      },
      {
        name: 'q06-02',
        text: '事前に計画をたて慎重にすすめていく方である',
        nextYes: '',
        nextNo: '',
        resultYes: '/service/check/type-c/',
        resultNo: '/service/check/type-d/',
      },
    ]

    const questionsElm = [...document.querySelectorAll('.js-list > div')]
    console.log(questionsElm)
    const diagnosisBtn = document.getElementById('submit-diagnosis')

    window.onpageshow = () => {
      $('input[type="radio"]').prop('checked', false)
    }

    if (questionsElm) {
      questionsElm.forEach((question, i) => {
        const radioBtn = question.querySelector('.js-radio-btn')
        console.log(radioBtn)
        if (radioBtn) {
          radioBtn.addEventListener('change', (radioBtn: any) => {
            answer(radioBtn)
          })
        }
      })
    }

    const answer = (radioBtn: any) => {
      const target = radioBtn.target
      const targetName = radioBtn.target.name

      if (diagnosisBtn) {
        switch (true) {
          case /^q01/.test(targetName):
            diagnosisBtn.ariaDisabled === 'false' && resetSubmitBtn()
            setNextQuestion(target)
            break
          case /^q02/.test(targetName):
            diagnosisBtn.ariaDisabled === 'false' && resetSubmitBtn()
            setNextQuestion(target)
            break
          case /^q03/.test(targetName):
            diagnosisBtn.ariaDisabled === 'false' && resetSubmitBtn()
            setNextQuestion(target)
            break
          case /^q04/.test(targetName):
            diagnosisBtn.ariaDisabled === 'false' && resetSubmitBtn()
            setNextQuestion(target)
            break
          case /^q05/.test(targetName):
            diagnosisBtn.ariaDisabled === 'false' && resetSubmitBtn()
            setNextQuestion(target)
            break
          case /^q06/.test(targetName):
            setNextQuestion(target)
            break
          default:
            break // do nothing
        }
      }
    }

    const setNextQuestion = (target: any) => {
      const getInputs = (node: any) => {
        return [...node.querySelectorAll('input')]
      }

      for (const currentQ of questions) {
        if (currentQ.name === target.name) {
          const next = target.value === 'yes' ? 'nextYes' : 'nextNo'

          for (const nextQ of questions) {
            if (nextQ.name === currentQ[next]) {
              const setHelper = (order: number) => {
                questionsElm[
                  order - 1
                ].children[0].textContent = `${order}. ${nextQ.text}`
                getInputs(questionsElm[order - 1].children[1]).map(input =>
                  input.setAttribute('name', nextQ.name),
                )
                showNextQuestion(order - 1)
              }

              switch (true) {
                case /^q02/.test(nextQ.name):
                  setHelper(2)
                  break
                case /^q03/.test(nextQ.name):
                  setHelper(3)
                  break
                case /^q04/.test(nextQ.name):
                  setHelper(4)
                  break
                case /^q05/.test(nextQ.name):
                  setHelper(5)
                  break
                case /^q06/.test(nextQ.name):
                  setHelper(6)
                  break
                default:
                  break //do nothing
              }
              return
            }
          }

          if (/^q05/.test(currentQ.name)) {
            questionsElm[5].setAttribute('aria-hidden', 'true')
          }

          const result = target.value === 'yes' ? 'resultYes' : 'resultNo'
          activeSubmitBtn(currentQ[result])
        }
      }
    }

    const showNextQuestion = (targetIndex: number) => {
      questionsElm.forEach((question, i) => {
        const radioBtns = [...question.querySelectorAll('input')]

        if (targetIndex >= i) {
          question.setAttribute('aria-hidden', 'false')

          const radioNameRegex = new RegExp(`^q0${targetIndex + 1}`)
          radioBtns.forEach(btn => {
            if (radioNameRegex.test(btn.name)) {
              btn.checked = false
            }
          })
        } else {
          question.setAttribute('aria-hidden', 'true')
          radioBtns.map(btn => (btn.checked = false))
        }
      })
    }

    const activeSubmitBtn = (url?: string) => {
      if (diagnosisBtn && url) {
        diagnosisBtn.setAttribute(
          'href',
          `${url}?l-id=service_check_service_type`,
        )
        diagnosisBtn.setAttribute('aria-disabled', 'false')
      }
    }

    const resetSubmitBtn = () => {
      if (diagnosisBtn) {
        diagnosisBtn.setAttribute('href', '')
        diagnosisBtn.setAttribute('aria-disabled', 'true')
      }
    }
  }, [])
  // React的に直している時間はない！anyを解決している時間がない！！！！
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="あなたにぴったりなオプションサービスを診断します。最大6個の質問にYESかNOでお答えいただくだけで簡単にわかります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <ServiceCheckTitle>
          <ServiceCheckTitleInner>
            <Heading level="1">
              オプションサービス
              <br className={Utils['Disp-sp']} />
              診断
            </Heading>
            <TxtNormal className={Utils['Mt-16']} as="p">
              最大6個の質問にYESかNOでお答えいただくだけで、
              <br />
              あなたにぴったりなオプションサービスがわかります！
            </TxtNormal>
          </ServiceCheckTitleInner>
        </ServiceCheckTitle>

        <SystemContainer>
          <ServiceFormList className="js-list">
            <div aria-hidden="false">
              <dt>1. 好奇心は旺盛なほうだと思う</dt>
              <dd>
                <ButtonWrapper className="js-radio-btn">
                  <ButtonRadio {...buttonArgs1} />
                </ButtonWrapper>
              </dd>
            </div>
            <div aria-hidden="true">
              <dt>2.</dt>
              <dd>
                <ButtonWrapper className="js-radio-btn">
                  <ButtonRadio {...buttonArgs2} />
                </ButtonWrapper>
              </dd>
            </div>
            <div aria-hidden="true">
              <dt>3.</dt>
              <dd>
                <ButtonWrapper className="js-radio-btn">
                  <ButtonRadio {...buttonArgs3} />
                </ButtonWrapper>
              </dd>
            </div>
            <div aria-hidden="true">
              <dt>4.</dt>
              <dd>
                <ButtonWrapper className="js-radio-btn">
                  <ButtonRadio {...buttonArgs4} />
                </ButtonWrapper>
              </dd>
            </div>
            <div aria-hidden="true">
              <dt>5.</dt>
              <dd>
                <ButtonWrapper className="js-radio-btn">
                  <ButtonRadio {...buttonArgs5} />
                </ButtonWrapper>
              </dd>
            </div>
            <div aria-hidden="true">
              <dt>6.</dt>
              <dd>
                <ButtonWrapper className="js-radio-btn">
                  <ButtonRadio {...buttonArgs6} />
                </ButtonWrapper>
              </dd>
            </div>
          </ServiceFormList>
          <div className={Utils['Align-center']}>
            <ButtonPrimaryLarge
              as="a"
              href="#"
              id="submit-diagnosis"
              aria-disabled="true"
            >
              診断する
            </ButtonPrimaryLarge>
          </div>
          <div className={Utils['Mt-48']}>
            <LinkIconBefore href="/service/">
              <IconChevronLeft />
              オプションサービスの一覧に戻る
            </LinkIconBefore>
          </div>
        </SystemContainer>
      </SystemWrapper>

      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default ServiceCheckTypeA
