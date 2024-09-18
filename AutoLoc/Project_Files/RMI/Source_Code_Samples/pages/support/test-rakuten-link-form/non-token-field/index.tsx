import type { NextPage } from 'next'
import { CustomHead } from '@components/utils/CustomHead'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { SystemContainer } from '@components/layout/System'
import { Heading } from '@components/atoms/Heading'
import Utils from '@styles/Utils.module.scss'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ButtonRadio } from '@components/atoms/ButtonRadio'
import { IconChevronLeft, IconNewTabLine } from '@components/icons'
import { LinkIconAfter, LinkIconBefore } from '@components/atoms/Link'
import { Link as Anchor } from 'react-scroll'
import {
  AndroidQuestionLevel1,
  AndroidQuestionLevel2,
  AndroidQuestionLevel3,
  AndroidQuestionLevel4,
  DesktopAndroidQuestionLevel2,
  DesktopAndroidQuestionLevel3,
  DesktopAndroidQuestionLevel4,
  DesktopIosQuestionLevel2,
  DesktopIosQuestionLevel3,
  DesktopIosQuestionLevel4,
  DesktopQuestionLevel1,
  IosQuestionLevel1,
  IosQuestionLevel2,
  IosQuestionLevel3,
  IosQuestionLevel4,
  Platform,
  question,
  Troubleshooting,
} from '@components/fragment/support/rakuten-link-form/QuestionData'
import { TxtCap, TxtEmp01, TxtError } from '@components/atoms/Txt'
import { FlowList } from '@components/atoms/Flow'
import React from 'react'
import { assets } from '@components/utils/assets'
import { AccordionList } from '@components/atoms/AccordionList'
import { MediaGridCaptureReverse, MediaImage } from '@components/layout/Media'
import {
  androidFlowList,
  desktopFlowList,
  FlowItem,
  iosFlowList,
  SolutionStatus,
} from '@components/fragment/support/rakuten-link-form/SolutionData'
import {
  Faq1,
  Faq2,
  Faq3,
  Faq4,
  Faq5,
  Faq6,
  Faq7,
  Faq8,
  Faq9,
  Faq10,
  Faq11,
  Faq12,
  Faq13,
  Faq14,
  Faq15,
  Faq16,
  Faq17,
  Faq18,
  Faq19,
  Faq20,
  Faq21,
  FaqStatus,
} from '@components/fragment/support/rakuten-link-form/FaqData'
import {
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonRegularLarge,
} from '@components/atoms/Buttons'
import { Checkbox, CheckedChange } from '@components/atoms/Checkbox'
import { DateTimePicker } from '@components/atoms/DateTimePicker'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import {
  FormList,
  FormListRequired,
  FormListSub,
} from '@components/atoms/Formtemplate'
import { Input } from '@components/atoms/Input'
import { Modal } from '@components/atoms/Modal'
import { Controller, FieldErrors, useForm } from 'react-hook-form'
import { mixins } from '@components/utils/Mixins'
import { Textarea } from '@components/atoms/textarea'
import { Select } from '@components/atoms/Select'
import {
  callingPhoneNumberValidation,
  emailConfirmValidation,
  emailValidation,
  ErrorState,
  inputTextValidation,
  nameValidation,
  phoneNumberValidation,
  requiredErrorValidation,
} from '@components/utils/Validator'
import router from 'next/router'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const LoadingWrapper = styled.div`
  padding: 32px 0 64px;
  position: relative;
  &:not(.js-active)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
  &:not(.js-active) {
    .Load-icon {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(150%);
      color: ${({ theme }) => theme.colors.white};
      z-index: 2;
      &::before {
        position: absolute;
        content: '';
        display: block;
        left: 24px;
        top: -150%;
        width: 30px;
        height: 30px;
        border: 2px solid #000000;
        border-top-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        animation: ${spin} 1s infinite linear;
      }
    }
  }
  .Load-icon {
    display: none;
  }
`
const SelectSection = styled.div<SelectSectionProps>`
  margin-top: 32px;
  padding: ${({ displayForm }) => (displayForm ? '0' : '24px')};
  background-color: ${({ displayForm }) =>
    ({ theme }) =>
      displayForm ? theme.colors.white : theme.colors.monotone97};
`
const SelectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 24px;
  > li {
    display: flex;
    > div {
      display: flex;
      width: 100%;
      > label {
        width: 100%;
        display: flex;
        > div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  ${mixins.mq.MaxM} {
    grid-template-columns: repeat(1, 1fr);
  }
`
const FormListSubCustom = styled(FormListSub)`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  ${mixins.mq.MinM} {
    flex-direction: row;
  }
  dt {
    width: 32px;
  }
  dd {
    flex: 1;
    input {
      width: 160px;
    }
  }
`
const TxtErrorBlock = styled(TxtError)`
  display: block;
  margin-top: 16px;
`
const SelectConfirm = styled.dl`
  dd + dt {
    margin-top: 24px;
  }
  dd {
    margin-top: 8px;
  }
`
const FormSelectTime = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-right: 8px;
  }
`
const CaptureImage = styled.img`
  border: 1px solid ${props => props.theme.colors.monotone88};
  height: auto;
`

type SelectSectionProps = {
  displayForm: boolean
}
type SelectListProps = {
  selectData:
    | AndroidQuestionLevel3
    | IosQuestionLevel3
    | DesktopAndroidQuestionLevel3
    | DesktopIosQuestionLevel3
    | AndroidQuestionLevel2
    | IosQuestionLevel2
    | DesktopAndroidQuestionLevel2
    | DesktopIosQuestionLevel2
    | AndroidQuestionLevel1
    | IosQuestionLevel1
    | DesktopQuestionLevel1
    | Platform
  questionLevel: string
}
type ModalProps = {
  title: string
  text: string
}
type SolutionProps = {
  platform: keyof Platform
}
type RadioOnSelectedChange = (selectedIndex?: string) => void
type UserInput = {
  orgid: string
  subject: string
  '00N2r0000021LO7': string
  '00N2r0000021LNy': string
  '00N2r0000021LNz': string
  '00N2r0000021LO0': string
  '00N2r0000021LO1': string
  gotoform: string
  '00N2r000000gl6S': string
  '00N2r000000gl6P': string
  '00N2r000000gl6N': string
  '00N2r0000021LO8': string
  '00N2r0000021LO9': string
  '00N2r000001lWWS': string
  '00N2r000001lWVo': string
  '00N2r000001lWVt': string
  '00N2r000001lWVy': string
  '00N2r000001lWW3': string
  '00N2r000001lWW8': string
  '00N2r000001lWWD': string
  '00N2r0000021LO5': string
  '00N2r0000021LO4': string
  '00N2r000000gl6J': string
  '00N2r000000gl6K': string
  '00N2r0000021LO3': string
  'confirm-email': string
  agree: boolean
}
type Refs = {
  '00N2r0000021LO7': string
  '00N2r0000021LNy': string
  '00N2r0000021LNz': string
  '00N2r0000021LO0': string
  '00N2r0000021LO1': string
  '00N2r000000gl6S': string
  '00N2r000000gl6P': string
  '00N2r000000gl6N': string
  '00N2r0000021LO8': string
  '00N2r0000021LO9': string
  '00N2r000001lWWS': string
  '00N2r000001lWVo': string
  '00N2r000001lWVt': string
  '00N2r000001lWVy': string
  '00N2r000001lWW3': string
  '00N2r000001lWW8': string
  '00N2r000001lWWD': string
  '00N2r0000021LO5': string
  '00N2r0000021LO4': string
  '00N2r000000gl6J': string
  '00N2r000000gl6K': string
  '00N2r0000021LO3': string
  'confirm-email': string
}
type ErrorMessages = { [K in keyof ErrorState]?: string }
type ErrorMessageProps = {
  errorName: keyof UserInput
  errorState: ErrorState
  errorMessages: ErrorMessages
}
type KeyofRefs = {
  [K in keyof Refs]: React.RefObject<
    HTMLInputElement | HTMLDivElement | HTMLTextAreaElement | HTMLSelectElement
  >
}
type QuestionSectionProps = {
  headerText: string
  questionData:
    | AndroidQuestionLevel3
    | IosQuestionLevel3
    | DesktopIosQuestionLevel3
    | DesktopAndroidQuestionLevel3
    | AndroidQuestionLevel2
    | IosQuestionLevel2
    | DesktopIosQuestionLevel2
    | DesktopAndroidQuestionLevel2
    | AndroidQuestionLevel1
    | IosQuestionLevel1
    | DesktopQuestionLevel1
    | Platform
  questionKey: string
}
type UserInfoProps = {
  phone: string
  last_name: string
  first_name: string
  email: string
}
const linkApi = {
  PROD: {
    PNP: 'https://api-linkage.rmb-ss.jp/linkapi/SendPNP',
    SF: 'https://api-linkage.rmb-ss.jp/linkapi/RegisterSF',
    GetInfo: 'https://api-linkage.rmb-ss.jp/linkapi/GetInfo',
    AuthorizationCode: 'Bearer XBRuHhf9knUPv72fdwZ4Kwi6nv7ABeA',
    redirectUri:
      'https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Fsupport%2Frakuten-link-form%2F%3Fl-id%3Dshort_mno_support_rakuten-link-form&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005',
    testRedirectUri:
      'https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Fsupport%2Ftest-xtbegkzmnhak%2Frakuten-link-form%2F%3Fl-id%3Dshort_mno_support_rakuten-link-form&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005',
  },
  UAT1: {
    PNP: 'https://uat1-api-linkage.rmb-lab.jp/linkapi/SendPNP',
    SF: 'https://uat1-api-linkage.rmb-lab.jp/linkapi/RegisterSF',
    GetInfo: 'https://uat1-api-linkage.rmb-lab.jp/linkapi/GetInfo',
    AuthorizationCode: 'Bearer zRgYGhbWcRnnaBGE27aSGK+tN_Lwn9a',
    redirectUri:
      'https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm001&client_id=rmn_app_web&redirect_uri=https://network.mobile.rakuten.co.jp/support/rakuten-link-form/index.html&scope=90days%40Access%2Cmemberinfo_read_address%2Cmemberinfo_read_basic%2Cmemberinfo_read_mail%2Cmemberinfo_read_pointx%2Cmemberinfo_read_telephone%2Ctokencheck%2Cuserinfo_read_bulk%2Cmemberinfo_read_safebulk%2Cidinfo_read_easyid%2Ceternal%40Refresh&contact_info_required=false&rae_service_id=rm001',
  },
  PREPROD: {
    PNP: 'https://preprod-api-linkage.rmb-lab.jp/linkapi/SendPNP',
    AuthorizationCode: 'Bearer zRgYGhbWcRnnaBGE27aSGK+tN_Lwn9a',
    redirectUri:
      'https://grp03.id.rakuten.co.jp/rms/nid/login?service_id=rm005&client_id=rmn_app_web&redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2Fsupport%2Ftest-rakuten-link-form%2Fnon-token-field%2F%3Fl-id%3Dshort_mno_support_rakuten-link-form&err_redirect_uri=https%3A%2F%2Fnetwork.mobile.rakuten.co.jp%2F&scope=memberinfo_read_safebulk%2Cmemberinfo_read_point%2Cmemberinfo_get_card_token%2C30days%40Access%2C90days%40Refresh&contact_info_required=false&rae_service_id=rm005',
  },
}

const SupportRakutenLinkForm: NextPage = () => {
  const pagetitle = 'Rakuten Linkに関するお問い合わせ'
  const description =
    'Rakuten Linkアプリに関するトラブル解決方法を、メールでご案内いたします。項目を選択のうえ、必要情報をご入力ください。'
  const breadcrumbs = [
    { url: '/', text: 'トップ' },
    { url: '/support/', text: 'お客様サポート' },
    { url: '', text: pagetitle },
  ]
  const contentsLoadRef = useRef<HTMLDivElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isToTroubleshooting, setIsToTroubleshooting] = useState<boolean>(false)
  const [isWebForm, setIsWebForm] = useState<boolean>(false)
  const [displayFaq, setDisplayFaq] = useState<boolean>(false)
  const [displaySolution, setDisplaySolution] = useState<boolean>(false)
  const [displayForm, setDisplayForm] = useState<boolean>(false)
  const [faqComponent, setFaqComponent] = useState<React.ReactNode | null>(null)
  const [solutionList, setSolutionList] = useState<
    Partial<Record<SolutionStatus, FlowItem | null>>
  >({} as Partial<Record<SolutionStatus, FlowItem | null>>)
  const [selectedPlatform, setSelectedPlatform] = useState<
    keyof Platform | null
  >(null)
  const [selectedQuestionLevel1, setSelectedQuestionLevel1] = useState<
    | keyof IosQuestionLevel1
    | keyof AndroidQuestionLevel1
    | keyof DesktopQuestionLevel1
    | null
  >(null)
  const [selectedQuestionLevel2, setSelectedQuestionLevel2] = useState<
    | keyof IosQuestionLevel2
    | keyof AndroidQuestionLevel2
    | keyof DesktopIosQuestionLevel2
    | keyof DesktopAndroidQuestionLevel2
    | null
  >(null)
  const [selectedQuestionLevel3, setSelectedQuestionLevel3] = useState<
    | keyof IosQuestionLevel3
    | keyof AndroidQuestionLevel3
    | keyof DesktopIosQuestionLevel3
    | keyof DesktopAndroidQuestionLevel3
    | null
  >(null)
  const [selectedQuestionLevel4, setSelectedQuestionLevel4] = useState<
    | keyof IosQuestionLevel4
    | keyof AndroidQuestionLevel4
    | keyof DesktopIosQuestionLevel4
    | keyof DesktopAndroidQuestionLevel4
    | null
  >(null)
  const [userInfoData, setUserInfoData] = useState<UserInfoProps | null>(null)

  const [flag, setFlag] = useState<boolean>(false)
  const switchFlag = () => {
    setFlag(prevFlag => !prevFlag)
  }
  const [lastNameErrState, setLastNameErrState] = useState<ErrorState>({
    kanaError: false,
    fullWidthError: false,
    otherError: false,
    requiredError: false,
    inValid: false,
  })
  const [firstNameErrState, setFirstNameErrState] = useState<ErrorState>({
    kanaError: false,
    fullWidthError: false,
    otherError: false,
    requiredError: false,
    inValid: false,
  })
  const [phoneNumberErrState, setPhoneNumberErrState] = useState<ErrorState>({
    requiredError: false,
    digitError: false,
    formatError: false,
    inValid: false,
  })
  const [emailErrState, setEmailErrState] = useState<ErrorState>({
    requiredError: false,
    formatError: false,
    inValid: false,
  })
  const [emailConfirmErrState, setEmailConfirmErrState] = useState<ErrorState>({
    requiredError: false,
    formatError: false,
    matchError: false,
    inValid: false,
  })
  const [osVersionErrState, setOsVersionErrState] = useState<ErrorState>({
    requiredError: false,
    matchError: false,
    inValid: false,
  })
  const [productMakerErrState, setProductMakerErrState] = useState<ErrorState>({
    requiredError: false,
    inValid: false,
  })
  const [productNameErrState, setProductNameErrState] = useState<ErrorState>({
    requiredError: false,
    matchError: false,
    inValid: false,
  })
  const [rakutenLinkVersionErrState, setRakutenLinkVersionErrState] =
    useState<ErrorState>({
      requiredError: false,
      matchError: false,
      inValid: false,
    })
  const [coverageAreaErrState, setCoverageAreaErrState] = useState<ErrorState>({
    requiredError: false,
    inValid: false,
  })
  const [lteSignalStrengthErrState, setLteSignalStrengthErrState] =
    useState<ErrorState>({
      requiredError: false,
      inValid: false,
    })
  const [callingPhoneNumberErrState, setCallingPhoneNumberErrState] =
    useState<ErrorState>({
      digitError: false,
      formatError: false,
      inValid: false,
    })
  const [contactPhoneNumberErrState, setContactPhoneNumberErrState] =
    useState<ErrorState>({
      requiredError: false,
      digitError: false,
      formatError: false,
      inValid: false,
    })
  const [textareaErrState, setTextareaErrState] = useState<ErrorState>({
    requiredError: false,
    inValid: false,
  })

  const handleLoadContent = useCallback(() => {
    if (contentsLoadRef.current && !isLoaded) {
      contentsLoadRef.current.classList.add('js-active')
      setIsLoaded(true)
    }
  }, [isLoaded])

  useEffect(() => {
    const hasRedirected = localStorage.getItem('hasRedirected')
    const queryParameters = new URLSearchParams(window.location.search)
    const authCode = queryParameters.get('code')

    if (authCode) {
      const fetchData = async (authCode: string) => {
        try {
          const url = new URL(linkApi.PROD.GetInfo)
          url.searchParams.append('code', authCode)
          const options = {
            method: 'GET',
            headers: {
              Authorization: linkApi.PROD.AuthorizationCode,
              'Content-Type': 'application/json; charset=utf-8',
            },
          }

          const response = await fetch(url, options)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data = await response.json()
          setUserInfoData(data)
        } catch (error) {
          console.log(error, 'error')
          const errorUserData = {
            phone: '',
            last_name: '',
            first_name: '',
            email: '',
          }
          setUserInfoData(errorUserData)
        }
      }
      fetchData(authCode)
      if (hasRedirected) localStorage.removeItem('hasRedirected')
    } else if (!authCode && !hasRedirected) {
      localStorage.setItem('hasRedirected', 'true')
      window.location.href = linkApi.PREPROD.redirectUri // TODO 本番はredirectUriに変更する
    } else {
      localStorage.removeItem('hasRedirected')
      const defaultUserData = {
        phone: '',
        last_name: '',
        first_name: '',
        email: '',
      }
      setUserInfoData(defaultUserData)
    }
  }, [])

  useEffect(() => {
    handleLoadContent()
  }, [handleLoadContent])

  const refs: KeyofRefs = {
    '00N2r0000021LO7': useRef(null),
    '00N2r0000021LNy': useRef(null),
    '00N2r0000021LNz': useRef(null),
    '00N2r0000021LO0': useRef(null),
    '00N2r0000021LO1': useRef(null),
    '00N2r000000gl6S': useRef(null),
    '00N2r000000gl6P': useRef(null),
    '00N2r000000gl6N': useRef(null),
    '00N2r0000021LO8': React.createRef(),
    '00N2r0000021LO9': useRef(null),
    '00N2r000001lWWS': useRef(null),
    '00N2r000001lWVo': useRef(null),
    '00N2r000001lWVt': useRef(null),
    '00N2r000001lWVy': useRef(null),
    '00N2r000001lWW3': useRef(null),
    '00N2r000001lWW8': useRef(null),
    '00N2r000001lWWD': useRef(null),
    '00N2r0000021LO5': useRef(null),
    '00N2r0000021LO4': useRef(null),
    '00N2r000000gl6J': useRef(null),
    'confirm-email': useRef(null),
    '00N2r000000gl6K': useRef(null),
    '00N2r0000021LO3': useRef(null),
  }
  const formDisplayScrollRef = useRef<HTMLDivElement | null>(null)
  const formEditScrollRef = useRef<HTMLDivElement | null>(null)
  const currentDate = useMemo(() => {
    const now = new Date()
    const year = now.getFullYear()
    const month = ('0' + (now.getMonth() + 1)).slice(-2)
    const date = ('0' + now.getDate()).slice(-2)
    return { year, month, date }
  }, [])
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
    getValues,
    watch,
    reset,
  } = useForm<UserInput>({
    defaultValues: {
      orgid: '00D1s0000000Q35',
      subject: 'Rakuten Linkに関するお問い合わせ',
      '00N2r0000021LO7': '',
      '00N2r0000021LNy': '',
      '00N2r0000021LNz': '',
      '00N2r0000021LO0': '',
      '00N2r0000021LO1': '',
      gotoform: '',
      '00N2r000000gl6S': '',
      '00N2r000000gl6P': '',
      '00N2r000000gl6N': '',
      '00N2r0000021LO8': `${currentDate.year}/${currentDate.month}/${currentDate.date}`,
      '00N2r0000021LO9': '00',
      '00N2r000001lWWS': '00',
      '00N2r000001lWVo': '',
      '00N2r000001lWVt': '',
      '00N2r000001lWVy': '',
      '00N2r000001lWW3': '',
      '00N2r000001lWW8': '',
      '00N2r000001lWWD': '',
      '00N2r0000021LO5': '',
      '00N2r0000021LO4': '',
      '00N2r000000gl6J': '',
      'confirm-email': '',
      '00N2r000000gl6K': '',
      '00N2r0000021LO3': '',
      agree: false,
    },
  })

  const [getFormValues, setGetFormValues] = useState<UserInput>(getValues())
  const isAgree = watch('agree')
  const hoursOptions = Array.from({ length: 24 }, (_, i) => ({
    text: String(i).padStart(2, '0'),
    value: String(i).padStart(2, '0'),
  }))

  const minutesOptions = Array.from({ length: 6 }, (_, i) => ({
    text: String(i * 10).padStart(2, '0'),
    value: String(i * 10).padStart(2, '0'),
  }))

  const targetProductMaker: string[] = [
    '楽天モバイル',
    'Apple',
    'ASUS',
    'Fujitsu Connected Technologies',
    'Google',
    'HUAWEI',
    'Inseego',
    'Lenovo',
    'NEC Platforms',
    'OPPO',
    'SAMSUNG ELECTRONICS JAPAN',
    'SHARP',
    'Sony',
    'Xiaomi',
  ]

  const targetCoverageArea: string[] = [
    'LTE',
    'Wi-Fi＋LTE',
    'Wi-Fi＋機内モード／圏外',
    'わからない',
  ]

  const targetLteSignalStrength: string[] = [
    '強い（3本以上）',
    '弱い（1～2本）',
    '0本あるいは圏外',
  ]

  const targetDestinationCarrier: string[] = [
    '楽天モバイル（楽天回線）',
    '楽天モバイル以外のキャリア',
    '固定電話（特番を含む）',
    '国際電話',
    'その他/わからない',
  ]

  const hasErrors = (errors: Record<string, boolean>): boolean => {
    return Object.values(errors).some(error => error === true)
  }

  const sortErrorsField = (errors: FieldErrors<UserInput>) => {
    const sortedErrors: FieldErrors<UserInput> = {}

    Object.keys(refs)
      .filter(field => errors.hasOwnProperty(field))
      .forEach(field => {
        sortedErrors[field as keyof UserInput] =
          errors[field as keyof UserInput]
      })

    return Object.keys(sortedErrors)[0]
  }

  const onSubmit = async (data: UserInput) => {
    const postData = {
      ...data,
      agree: '',
    }
    const formBody = new URLSearchParams(postData).toString()
    const option = {
      method: 'POST',
      headers: {
        Authorization: linkApi.PREPROD.AuthorizationCode,
        'Content-Type': 'application/x-www-form-urlencoded;',
      },
      body: formBody,
    }

    try {
      const response = await fetch(linkApi.PREPROD.PNP, option)
      if (!response.ok && response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      // router.push('/support/rakuten-link-form/thanks/index.html') //TODO 本番はProdに変更する
      router.push(
        '/support/test-xtbegkzmnhak/rakuten-link-form/thanks/index.html',
      ) //本番テスト
    }
  }

  const handleConfirm = async () => {
    const isValid = await trigger()
    if (isValid) {
      setGetFormValues(getValues())
      switchFlag()
    } else {
      const firstErrorField = sortErrorsField(errors) as keyof Refs
      if (firstErrorField in refs && refs[firstErrorField].current) {
        refs[firstErrorField].current?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleEdit = useCallback(() => {
    switchFlag()
    formEditScrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleDisplayForm = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    formDisplayScrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    const currentValues = getValues()
    setDisplayForm(!displayForm)
    reset({
      ...currentValues,
      '00N2r0000021LO7': currentValues['00N2r0000021LO7'],
      '00N2r0000021LNy': currentValues['00N2r0000021LNy'],
      '00N2r0000021LNz': currentValues['00N2r0000021LNz'],
      '00N2r0000021LO0': currentValues['00N2r0000021LO0'],
      '00N2r0000021LO1': currentValues['00N2r0000021LO1'],
      '00N2r000000gl6S': userInfoData?.phone
        ? userInfoData.phone.replace(/-/g, '')
        : '',
      '00N2r000000gl6P': userInfoData?.last_name ? userInfoData.last_name : '',
      '00N2r000000gl6N': userInfoData?.first_name
        ? userInfoData.first_name
        : '',
      '00N2r000000gl6J': userInfoData?.email ? userInfoData.email : '',
      'confirm-email': userInfoData?.email ? userInfoData.email : '',
      agree: false,
    })
  }

  const checkToTroubleshooting = (questionResult: Troubleshooting) => {
    if (questionResult && questionResult.toTroubleshooting === true) {
      setIsToTroubleshooting(true)
      const faqNumber = questionResult.faq.filter(
        num => num !== null,
      ) as FaqStatus[]
      const solutionNumber = questionResult.solution[0]
      setDisplayFaq(faqNumber.length > 0)
      setDisplaySolution(solutionNumber !== null)
      setIsWebForm(questionResult.webForm)
      if (faqNumber.length > 0) {
        setFaqComponent(<Faq faqNumbers={faqNumber} />)
      }
      if (solutionNumber !== null && questionResult.solution.length > 0) {
        if (selectedPlatform === 'iOS') {
          updateSolutionList(questionResult.solution, iosFlowList)
        } else if (selectedPlatform === 'Android') {
          updateSolutionList(questionResult.solution, androidFlowList)
        } else if (selectedPlatform === 'デスクトップ') {
          updateSolutionList(questionResult.solution, desktopFlowList)
        }
      }
    }
  }

  const handlePreviousSelect = () => {
    if (selectedQuestionLevel4) {
      setSelectedQuestionLevel4(null)
    } else if (selectedQuestionLevel3) {
      setSelectedQuestionLevel3(null)
    } else if (selectedQuestionLevel2) {
      setSelectedQuestionLevel2(null)
    } else if (selectedQuestionLevel1) {
      setSelectedQuestionLevel1(null)
    } else if (selectedPlatform) {
      setSelectedPlatform(null)
    }
    if (isToTroubleshooting) {
      setIsToTroubleshooting(false)
    }
    setSolutionList({} as Partial<Record<SolutionStatus, FlowItem | null>>)
    setFaqComponent(null)
    setDisplayForm(false)
  }

  const handlePlatformSelect = (platform: keyof Platform) => {
    setSelectedPlatform(platform || null)
    setSelectedQuestionLevel1(null)
    setSelectedQuestionLevel2(null)
    setSelectedQuestionLevel3(null)
    setSelectedQuestionLevel4(null)
  }

  const handleQuestionSelect = (
    question1: keyof (IosQuestionLevel1 | AndroidQuestionLevel1) | undefined,
  ) => {
    setSelectedQuestionLevel1(question1 || null)
    setSelectedQuestionLevel2(null)
    setSelectedQuestionLevel3(null)
    setSelectedQuestionLevel4(null)
    if (question && selectedPlatform) {
      const questionResult =
        selectedPlatform === 'iOS'
          ? (question.iOS[
              question1 as keyof IosQuestionLevel1
            ] as Troubleshooting)
          : (question.Android[
              question1 as keyof AndroidQuestionLevel1
            ] as Troubleshooting)
      checkToTroubleshooting(questionResult)
    }
  }

  const handleQuestion2Select = (
    question2:
      | keyof (
          | IosQuestionLevel2
          | AndroidQuestionLevel2
          | DesktopIosQuestionLevel2
          | DesktopAndroidQuestionLevel2
        )
      | undefined,
  ) => {
    setSelectedQuestionLevel2(question2 || null)
    setSelectedQuestionLevel3(null)
    setSelectedQuestionLevel4(null)
    if (selectedPlatform === 'デスクトップ' && question2) {
      const questionResultDesktop =
        selectedQuestionLevel1 === 'iOS'
          ? (question['デスクトップ'].iOS?.[question2] as Troubleshooting)
          : (question['デスクトップ'].Android?.[question2] as Troubleshooting)
      checkToTroubleshooting(questionResultDesktop)
    } else if (selectedPlatform === 'iOS' && question2) {
      const questionResultIos = question.iOS[
        selectedQuestionLevel1 as keyof IosQuestionLevel1
      ]?.[question2] as Troubleshooting
      checkToTroubleshooting(questionResultIos)
    } else if (selectedPlatform === 'Android' && question2) {
      const questionResultAndroid = question.Android[
        selectedQuestionLevel1 as keyof AndroidQuestionLevel1
      ]?.[question2] as Troubleshooting
      checkToTroubleshooting(questionResultAndroid)
    }
  }

  const handleQuestion3Select = (
    question3:
      | keyof (
          | IosQuestionLevel3
          | AndroidQuestionLevel3
          | DesktopIosQuestionLevel3
          | DesktopAndroidQuestionLevel3
        )
      | undefined,
  ) => {
    setSelectedQuestionLevel3(question3 || null)
    setSelectedQuestionLevel4(null)
    if (selectedPlatform === 'デスクトップ' && question3) {
      const questionResultDesktop =
        selectedQuestionLevel1 === 'iOS'
          ? (question['デスクトップ'].iOS?.[
              selectedQuestionLevel2 as keyof DesktopIosQuestionLevel2
            ]?.[question3] as Troubleshooting)
          : (question['デスクトップ'].Android?.[
              selectedQuestionLevel2 as keyof DesktopAndroidQuestionLevel2
            ]?.[question3] as Troubleshooting)
      checkToTroubleshooting(questionResultDesktop)
    } else if (selectedPlatform === 'iOS' && question3) {
      const questionResultIos = question.iOS[
        selectedQuestionLevel1 as keyof IosQuestionLevel1
      ]?.[selectedQuestionLevel2 as keyof IosQuestionLevel2]?.[
        question3
      ] as Troubleshooting
      checkToTroubleshooting(questionResultIos)
    } else if (selectedPlatform === 'Android' && question3) {
      const questionResultAndroid = question.Android[
        selectedQuestionLevel1 as keyof AndroidQuestionLevel1
      ]?.[selectedQuestionLevel2 as keyof AndroidQuestionLevel2]?.[
        question3
      ] as Troubleshooting
      checkToTroubleshooting(questionResultAndroid)
    }
  }

  const handleQuestion4Select = (
    question4:
      | keyof (
          | IosQuestionLevel4
          | AndroidQuestionLevel4
          | DesktopIosQuestionLevel4
          | DesktopAndroidQuestionLevel4
        )
      | undefined,
  ) => {
    setSelectedQuestionLevel4(question4 || null)
    if (selectedPlatform === 'デスクトップ' && question4) {
      const questionResultDesktop =
        selectedQuestionLevel1 === 'iOS'
          ? (question['デスクトップ'].iOS?.[
              selectedQuestionLevel2 as keyof DesktopIosQuestionLevel2
            ]?.[selectedQuestionLevel3 as keyof DesktopIosQuestionLevel3]?.[
              question4
            ] as Troubleshooting)
          : (question['デスクトップ'].Android?.[
              selectedQuestionLevel2 as keyof DesktopAndroidQuestionLevel2
            ]?.[selectedQuestionLevel3 as keyof DesktopAndroidQuestionLevel3]?.[
              question4
            ] as Troubleshooting)
      checkToTroubleshooting(questionResultDesktop)
    } else if (selectedPlatform === 'iOS' && question4) {
      const questionResultIos = question.iOS[
        selectedQuestionLevel1 as keyof IosQuestionLevel1
      ]?.[selectedQuestionLevel2 as keyof IosQuestionLevel2]?.[
        selectedQuestionLevel3 as keyof IosQuestionLevel3
      ]?.[question4] as Troubleshooting
      checkToTroubleshooting(questionResultIos)
    } else if (selectedPlatform === 'Android' && question4) {
      const questionResultAndroid = question.Android[
        selectedQuestionLevel1 as keyof AndroidQuestionLevel1
      ]?.[selectedQuestionLevel2 as keyof AndroidQuestionLevel2]?.[
        selectedQuestionLevel3 as keyof AndroidQuestionLevel3
      ]?.[question4] as Troubleshooting
      checkToTroubleshooting(questionResultAndroid)
    }
  }

  const getOnChangeCheck = (questionLevel: string) => {
    if (questionLevel === 'platform') return handlePlatformSelect
    if (questionLevel === 'question1') return handleQuestionSelect
    if (questionLevel === 'question2') return handleQuestion2Select
    if (questionLevel === 'question3') return handleQuestion3Select
    if (questionLevel === 'question4') return handleQuestion4Select
  }

  const getSelectName = (questionLevel: string) => {
    if (questionLevel === 'platform') return '00N2r0000021LO7'
    if (questionLevel === 'question1') return '00N2r0000021LNy'
    if (questionLevel === 'question2') return '00N2r0000021LNz'
    if (questionLevel === 'question3') return '00N2r0000021LO0'
    if (questionLevel === 'question4') return '00N2r0000021LO1'
    return '00N2r0000021LO7'
  }

  const updateSolutionList = (
    solutionNumbers: (SolutionStatus | null)[],
    selectedFlowList: Partial<Record<SolutionStatus, FlowItem>>,
  ) => {
    const updatedSolutionList: Partial<
      Record<SolutionStatus, FlowItem | null>
    > = {
      ...solutionList,
    }
    solutionNumbers.forEach(solutionNumber => {
      if (solutionNumber !== null) {
        updatedSolutionList[solutionNumber] = selectedFlowList[solutionNumber]
      }
    })
    setSolutionList(updatedSolutionList)
  }

  const addLeadingZeros = (num: string | number, len: number) => {
    return (Array(len).join('0') + num).slice(-len)
  }

  const getImageSource = (
    selectedPlatform: string,
    key: number,
    flowIndex: number,
    imgIndex: number | null,
  ): string => {
    const selectedPlatformPath =
      selectedPlatform === 'デスクトップ'
        ? 'desktop'
        : selectedPlatform.toLocaleLowerCase()
    const paddedIndex = addLeadingZeros(key, 2)
    const paddedFlowIndex = addLeadingZeros(flowIndex + 1, 2)
    const filename = `${paddedIndex}-setup${paddedFlowIndex}`
    const paddedImgIndex = imgIndex !== null ? `-${imgIndex + 1}` : ''

    return `${assets}img/support/rakuten-link-form/${selectedPlatformPath}-${filename}${paddedImgIndex}.png?240417`
  }

  const ErrorMessage: React.FC<ErrorMessageProps> = ({
    errorName,
    errorState,
    errorMessages,
  }) => {
    return (
      <>
        {errors[errorName] &&
          Object.keys(errorState).map((key, i) => {
            const errKey = key as keyof ErrorState
            if (errorState[errKey]) {
              return errorName === '00N2r000001lWWD' ? (
                <TxtError key={i}>{errorMessages[errKey]}</TxtError>
              ) : (
                <TxtErrorBlock key={i}>{errorMessages[errKey]}</TxtErrorBlock>
              )
            }
            return null
          })}
      </>
    )
  }

  const RenderSelectList: React.FC<SelectListProps> = ({
    selectData,
    questionLevel,
  }) => {
    return (
      <SelectList className={Utils['Mt-24']}>
        {Object.keys(selectData).map((key, index) => (
          <li key={index} className="u-Adjust_Pt-16">
            <Controller
              name={getSelectName(questionLevel)}
              control={control}
              render={({ field }) => (
                <ButtonRadio
                  {...field}
                  select={[
                    {
                      text: key,
                      value: key,
                    },
                  ]}
                  onChangeCheck={value => {
                    const handleChange = getOnChangeCheck(
                      questionLevel,
                    ) as RadioOnSelectedChange
                    handleChange(value)
                    field.onChange(value as string)
                    trigger(getSelectName(questionLevel))
                  }}
                />
              )}
            />
          </li>
        ))}
      </SelectList>
    )
  }

  const ModalTextComponent: React.FC<ModalProps> = ({ title, text }) => (
    <div>
      <dt>{title}</dt>
      <dd>
        <div>
          <span>{text}</span>
        </div>
      </dd>
    </div>
  )

  const QuestionSection: React.FC<QuestionSectionProps> = ({
    headerText,
    questionData,
    questionKey,
  }) => (
    <div>
      <p>
        <Anchor
          href="#js-content-wrap"
          to="js-content-wrap"
          smooth={true}
          duration={100}
        >
          <LinkIconBefore as="span" onClick={handlePreviousSelect}>
            <IconChevronLeft />
            ひとつ前の選択に戻る
          </LinkIconBefore>
        </Anchor>
      </p>
      <Heading className={Utils['Mt-16']} level="2">
        {headerText}
      </Heading>
      <RenderSelectList selectData={questionData} questionLevel={questionKey} />
    </div>
  )

  const Faq: React.FC<{ faqNumbers: FaqStatus[] }> = ({ faqNumbers }) => {
    const faqComponents: { [key in FaqStatus]?: React.FC } = {
      [FaqStatus.LOGIN_ERROR]: Faq1,
      [FaqStatus.ACCOUNT_LOCKED_PHONE_AUTH_FAIL]: Faq2,
      [FaqStatus.NETWORK_FAILURE]: Faq3,
      [FaqStatus.SCREEN_DARK_DURING_CALL]: Faq4,
      [FaqStatus.NO_CALLER_ID_WIFI_CONNECTION]: Faq5,
      [FaqStatus.INCOMING_CALL_REJECTED_OR_BAD_SIGNAL]: Faq6,
      [FaqStatus.RINGTONE_SETTING_REMOVED_DUE_TO_LOGOUT]: Faq7,
      [FaqStatus.CHARGES_INCURRED_FOR_UNDIALABLE_NUMBER]: Faq8,
      [FaqStatus.CANNOT_RECEIVE_A2P_BY_LINK]: Faq9,
      [FaqStatus.THIRD_PARTY_CONTACT_SYNC_AFTER_SHARING_ID]: Faq10,
      [FaqStatus.GAME_RELATED_PROBLEMS]: Faq11,
      [FaqStatus.IOS_SPECIFICATION_CHANGES_MISPERCEPTION]: Faq12,
      [FaqStatus.FAQ_INITIAL_SETTINGS]: Faq13,
      [FaqStatus.CANNOT_CHANGE_EMAIL_ADDRESS]: Faq14,
      [FaqStatus.CANNOT_SEND_CERTAIN_EMAILS]: Faq15,
      [FaqStatus.CANNOT_RECEIVE_CERTAIN_EMAILS]: Faq16,
      [FaqStatus.REFUSE_TO_RECEIVE_CERTAIN_EMAILS]: Faq17,
      [FaqStatus.DO_NOT_RECEIVE_EMAIL_NOTIFICATIONS]: Faq18,
      [FaqStatus.DESKTOP_A]: Faq19,
      [FaqStatus.DESKTOP_B]: Faq20,
      [FaqStatus.DESKTOP_C]: Faq21,
    }

    return (
      <>
        {faqNumbers.map(faqNumber => {
          const FaqComponent = faqComponents[faqNumber]
          return FaqComponent ? <FaqComponent key={faqNumber} /> : null
        })}
      </>
    )
  }

  const WebFormCheckbox: React.FC = () => {
    const [isUnresolved, setIsUnresolved] = useState<boolean>(true)
    const handleUnresolvedCheckboxChange = useCallback(
      (checked: boolean | undefined) => {
        if (checked !== undefined) {
          setIsUnresolved(!checked)
        }
      },
      [],
    )
    return (
      <div>
        <Checkbox
          onChangeCheck={handleUnresolvedCheckboxChange}
          text={'トラブルシューティングを全て実行したが、解決しなかった。'}
          value={`${isUnresolved}`}
          checked={!isUnresolved}
        ></Checkbox>
        <div className={Utils['Mt-16']}>
          <ButtonRegular
            as="button"
            aria-disabled={isUnresolved}
            onClick={handleDisplayForm}
          >
            お問い合わせフォームへ
          </ButtonRegular>
        </div>
      </div>
    )
  }

  const Solution: React.FC<SolutionProps> = ({ platform }) => {
    return (
      <div>
        {Object.entries(solutionList).map(
          ([key, item], index) =>
            item && (
              <AccordionList
                text={item.title}
                className={`c-Accordion ${index === 0 ? Utils['Mt-24'] : ''}`}
                isOpened={false}
                key={index}
              >
                {item.text}
                {item.flow !== undefined && (
                  <ol className={Utils['Mt-24']}>
                    {item.flow.map((flowItem, flowIndex) => (
                      <FlowList key={flowIndex}>
                        {selectedPlatform === 'デスクトップ' ? (
                          <>
                            <div>
                              <Heading level="3">{flowItem.title}</Heading>
                              {flowItem.text !== undefined && (
                                <p className={Utils['Mt-16']}>
                                  {flowItem.text}
                                </p>
                              )}
                              {flowItem.cap !== undefined && (
                                <TxtCap as="p" className={Utils['Mt-8']}>
                                  {flowItem.cap}
                                </TxtCap>
                              )}
                            </div>
                            {flowItem.img !== undefined && (
                              <>
                                {[...Array(flowItem.img)].map((_, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className={Utils['Mt-16']}
                                  >
                                    {imgIndex === 0 ? (
                                      <CaptureImage
                                        src={getImageSource(
                                          platform,
                                          parseInt(key),
                                          flowIndex,
                                          null,
                                        )}
                                        width="504"
                                        alt=""
                                      />
                                    ) : (
                                      <div
                                        key={imgIndex}
                                        className={Utils['Mt-16']}
                                      >
                                        <CaptureImage
                                          src={getImageSource(
                                            platform,
                                            parseInt(key),
                                            flowIndex,
                                            imgIndex,
                                          )}
                                          width="504"
                                          alt=""
                                        />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </>
                            )}
                          </>
                        ) : (
                          <MediaGridCaptureReverse>
                            <div>
                              <Heading level="3">{flowItem.title}</Heading>
                              {flowItem.text !== undefined && (
                                <p className={Utils['Mt-16']}>
                                  {flowItem.text}
                                </p>
                              )}
                              {flowItem.cap !== undefined && (
                                <TxtCap as="p" className={Utils['Mt-8']}>
                                  {flowItem.cap}
                                </TxtCap>
                              )}
                            </div>
                            {flowItem.img !== undefined && (
                              <MediaImage>
                                {[...Array(flowItem.img)].map((_, imgIndex) => (
                                  <div key={imgIndex}>
                                    {imgIndex === 0 ? (
                                      <CaptureImage
                                        src={getImageSource(
                                          platform,
                                          parseInt(key),
                                          flowIndex,
                                          null,
                                        )}
                                        width="300"
                                        alt=""
                                      />
                                    ) : (
                                      <div
                                        key={imgIndex}
                                        className={Utils['Mt-16']}
                                      >
                                        <CaptureImage
                                          src={getImageSource(
                                            platform,
                                            parseInt(key),
                                            flowIndex,
                                            imgIndex,
                                          )}
                                          width="300"
                                          alt=""
                                        />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </MediaImage>
                            )}
                          </MediaGridCaptureReverse>
                        )}
                      </FlowList>
                    ))}
                  </ol>
                )}
                <p className={Utils['Mt-16']}>以上で終了です。</p>
              </AccordionList>
            ),
        )}
      </div>
    )
  }

  return (
    <>
      <CustomHead
        directories={[{ path: '/support/', label: 'お客様サポート' }]}
        description={description}
        pagetitle={pagetitle}
        noindex={true}
      />
      <GlobalHeader />
      <BreadcrumbsHead item={breadcrumbs} />
      <LoadingWrapper ref={contentsLoadRef}>
        <div className="Load-icon">読み込み中</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SystemContainer ref={formDisplayScrollRef}>
            <Heading level="1">{pagetitle}</Heading>
            <p className={Utils['Mt-24']}>
              以下からお問い合わせされたい項目をご選択ください。適切な解決法をこのページですぐにご案内いたします
              <br />
              万が一解決しない場合にはメールにてご案内いたしますので、必要な項目をご入力いただきお問い合わせください。
              <br />
              お手数をお掛けいたしますがお問い合わせされたい内容が複数ある場合にはこちらのページにて、項目を一つづつご選択後、表示される内容をご確認、あるいはトラブルシューティングをお試しください。
            </p>
          </SystemContainer>
          <SelectSection id="js-content-wrap" displayForm={displayForm}>
            <SystemContainer>
              {!selectedPlatform && (
                <div className="js-question">
                  <Heading level="2">ご利用のOSをお選びください。</Heading>
                  <RenderSelectList
                    selectData={question}
                    questionLevel="platform"
                  />
                </div>
              )}
              {selectedPlatform && !selectedQuestionLevel1 && (
                <QuestionSection
                  headerText={
                    selectedPlatform === 'デスクトップ'
                      ? 'Rakuten Link スマートフォン版でご利用のOSをお選びください。'
                      : 'アプリに関してお困りの内容をお選びください。'
                  }
                  questionData={question[selectedPlatform]}
                  questionKey="question1"
                />
              )}
              {selectedPlatform &&
                selectedQuestionLevel1 &&
                selectedPlatform !== 'デスクトップ' &&
                !selectedQuestionLevel2 &&
                !isToTroubleshooting && (
                  <QuestionSection
                    headerText={
                      selectedQuestionLevel1 + 'に関する詳細をお選びください。'
                    }
                    questionData={
                      selectedPlatform === 'iOS'
                        ? question.iOS[
                            selectedQuestionLevel1 as keyof IosQuestionLevel1
                          ]
                        : question.Android[
                            selectedQuestionLevel1 as keyof AndroidQuestionLevel1
                          ]
                    }
                    questionKey="question2"
                  />
                )}
              {selectedPlatform &&
                selectedQuestionLevel1 &&
                selectedPlatform === 'デスクトップ' &&
                !selectedQuestionLevel2 &&
                !isToTroubleshooting && (
                  <QuestionSection
                    headerText="アプリに関してお困りの内容をお選びください。"
                    questionData={
                      question['デスクトップ'][
                        selectedQuestionLevel1 as keyof DesktopQuestionLevel1
                      ]
                    }
                    questionKey="question2"
                  />
                )}
              {selectedPlatform &&
                selectedQuestionLevel1 &&
                selectedQuestionLevel2 &&
                selectedPlatform !== 'デスクトップ' &&
                !selectedQuestionLevel3 &&
                !isToTroubleshooting && (
                  <QuestionSection
                    headerText={
                      selectedQuestionLevel2 in
                        question['iOS']['初期設定時の認証・ログイン'] ||
                      selectedQuestionLevel2 in
                        question['Android']['初期設定時の認証・ログイン']
                        ? '表示されるエラー画面のメッセージをお選びください。'
                        : selectedQuestionLevel2 +
                          'に関する詳細をお選びください。'
                    }
                    questionData={
                      selectedPlatform === 'iOS'
                        ? question.iOS[
                            selectedQuestionLevel1 as keyof IosQuestionLevel1
                          ][selectedQuestionLevel2 as keyof IosQuestionLevel2]
                        : question.Android[
                            selectedQuestionLevel1 as keyof AndroidQuestionLevel1
                          ][
                            selectedQuestionLevel2 as keyof AndroidQuestionLevel2
                          ]
                    }
                    questionKey="question3"
                  />
                )}
              {selectedPlatform &&
                selectedQuestionLevel1 &&
                selectedQuestionLevel2 &&
                selectedPlatform === 'デスクトップ' &&
                !selectedQuestionLevel3 &&
                !isToTroubleshooting && (
                  <QuestionSection
                    headerText={
                      selectedQuestionLevel2 + 'に関する詳細をお選びください。'
                    }
                    questionData={
                      selectedQuestionLevel1 === 'iOS'
                        ? question['デスクトップ'].iOS[
                            selectedQuestionLevel2 as keyof DesktopIosQuestionLevel2
                          ]
                        : question['デスクトップ'].Android[
                            selectedQuestionLevel2 as keyof DesktopAndroidQuestionLevel2
                          ]
                    }
                    questionKey="question3"
                  />
                )}
              {selectedPlatform &&
                selectedQuestionLevel1 &&
                selectedQuestionLevel2 &&
                selectedQuestionLevel3 &&
                selectedPlatform !== 'デスクトップ' &&
                !isToTroubleshooting && (
                  <QuestionSection
                    headerText={
                      selectedQuestionLevel3 + 'に関する詳細をお選びください。'
                    }
                    questionData={
                      selectedPlatform === 'iOS'
                        ? question.iOS[
                            selectedQuestionLevel1 as keyof IosQuestionLevel1
                          ][selectedQuestionLevel2 as keyof IosQuestionLevel2][
                            selectedQuestionLevel3
                          ]
                        : question.Android[
                            selectedQuestionLevel1 as keyof AndroidQuestionLevel1
                          ][
                            selectedQuestionLevel2 as keyof AndroidQuestionLevel2
                          ][selectedQuestionLevel3]
                    }
                    questionKey="question4"
                  />
                )}
              {selectedPlatform &&
                selectedQuestionLevel1 &&
                selectedQuestionLevel2 &&
                selectedQuestionLevel3 &&
                selectedPlatform === 'デスクトップ' &&
                !isToTroubleshooting && (
                  <QuestionSection
                    headerText={
                      selectedQuestionLevel3 + 'に関する詳細をお選びください。'
                    }
                    questionData={
                      selectedQuestionLevel1 === 'iOS'
                        ? question['デスクトップ'].iOS[
                            selectedQuestionLevel2 as keyof DesktopIosQuestionLevel2
                          ][selectedQuestionLevel3]
                        : question['デスクトップ'].Android[
                            selectedQuestionLevel2 as keyof DesktopAndroidQuestionLevel2
                          ][selectedQuestionLevel3]
                    }
                    questionKey="question4"
                  />
                )}
              {selectedPlatform &&
                (selectedQuestionLevel1 ||
                  selectedQuestionLevel2 ||
                  selectedQuestionLevel3) &&
                isToTroubleshooting && (
                  <div className={`-Layout_Container`}>
                    <p>
                      <Anchor
                        href="#js-content-wrap"
                        to="js-content-wrap"
                        smooth={true}
                        duration={100}
                      >
                        <LinkIconBefore
                          as="span"
                          onClick={handlePreviousSelect}
                        >
                          <IconChevronLeft />
                          ひとつ前の選択に戻る
                        </LinkIconBefore>
                      </Anchor>
                    </p>
                  </div>
                )}
            </SystemContainer>
          </SelectSection>
          <SystemContainer>
            {selectedPlatform &&
              (selectedQuestionLevel1 ||
                selectedQuestionLevel2 ||
                selectedQuestionLevel3) &&
              isToTroubleshooting &&
              displayFaq &&
              !displayForm && (
                <div className={`-Layout_Container`}>
                  <Heading className={Utils['Mt-24']} level="2">
                    はじめに、こちらをご確認ください。
                  </Heading>
                  {faqComponent}
                </div>
              )}
          </SystemContainer>
          {selectedPlatform &&
            (selectedQuestionLevel1 ||
              selectedQuestionLevel2 ||
              selectedQuestionLevel3) &&
            isToTroubleshooting &&
            !displayForm && (
              <SystemContainer>
                {displaySolution && (
                  <div className={Utils['Mt-32']}>
                    <Heading level="2">
                      トラブルシューティングをお試しください。
                    </Heading>
                    <p className={Utils['Mt-16']}>
                      多くの場合、以下のトラブルシューティングを行うことで問題は解決いたします。
                      <br />
                      お手数をお掛けいたしますが、以下の項目を上から順番にすべてお試しください。なお、ご利用の製品やOSバージョンによって一部順序や表記が異なる場合がございます。恐れ入りますが詳細につきましては製品メーカーへご確認ください。
                    </p>
                    <p>
                      <LinkIconAfter href="/guide/inquiry/" target="_blank">
                        メーカー別 問い合わせ先一覧はこちら
                        <IconNewTabLine />
                      </LinkIconAfter>
                    </p>
                    <Solution platform={selectedPlatform} />
                  </div>
                )}
                <div className={Utils['Mt-32']}>
                  {!isWebForm && (
                    <div>
                      <div>
                        <ButtonRegular
                          as="a"
                          href="/support/?l-id=support_rakuten-link-form_support"
                        >
                          お客様サポートトップへ
                        </ButtonRegular>
                      </div>
                      <div className={Utils['Mt-16']}>
                        <ButtonRegular
                          as="a"
                          href="https://service.link.link/guide/"
                          target="_blank"
                          data-ratid="support_rakuten-link-form_link_guide"
                          data-ratevent="click"
                          data-ratparam="all"
                        >
                          Rakuten Linkの使い方を見る
                        </ButtonRegular>
                      </div>
                      <TxtCap as="p" className={Utils['Mt-8']}>
                        ※Rakuten LinkのWebサイトへアクセスします。
                      </TxtCap>
                    </div>
                  )}
                  {isWebForm && <WebFormCheckbox />}
                </div>
              </SystemContainer>
            )}
          {displayForm && (
            <SystemContainer>
              <div ref={formEditScrollRef}>
                <AccordionList
                  text={'お問い合わせ内容の確認'}
                  className={`c-Accordion  ${Utils['Mt-24']}`}
                  isOpened={false}
                >
                  <SelectConfirm>
                    <dt>
                      <TxtEmp01>Q1.ご利用のOSをお選びください。</TxtEmp01>
                    </dt>
                    <dd>{selectedPlatform}</dd>
                    <dt>
                      <TxtEmp01>
                        Q2.
                        {selectedPlatform === 'デスクトップ'
                          ? 'Rakuten Link スマートフォン版でご利用のOSをお選びください。'
                          : 'アプリに関してお困りの内容をお選びください。'}
                      </TxtEmp01>
                    </dt>
                    <dd>{selectedQuestionLevel1}</dd>
                    {selectedQuestionLevel2 && (
                      <>
                        <dt>
                          <TxtEmp01>
                            Q3.
                            {selectedPlatform === 'デスクトップ'
                              ? 'アプリに関してお困りの内容をお選びください。'
                              : selectedQuestionLevel1 +
                                'に関する詳細をお選びください。'}
                          </TxtEmp01>
                        </dt>
                        <dd>{selectedQuestionLevel2}</dd>
                      </>
                    )}
                    {selectedQuestionLevel2 && selectedQuestionLevel3 && (
                      <>
                        <dt>
                          <TxtEmp01>
                            Q4.
                            {selectedQuestionLevel2 in
                              question['iOS']['初期設定時の認証・ログイン'] ||
                            selectedQuestionLevel2 in
                              question['Android']['初期設定時の認証・ログイン']
                              ? '表示されるエラー画面のメッセージをお選びください。'
                              : selectedQuestionLevel2 +
                                'に関する詳細をお選びください。'}
                          </TxtEmp01>
                        </dt>
                        <dd>{selectedQuestionLevel3}</dd>
                      </>
                    )}
                    {selectedQuestionLevel4 && (
                      <>
                        <dt>
                          <TxtEmp01>
                            Q5.{selectedQuestionLevel3}
                            に関する詳細をお選びください。
                          </TxtEmp01>
                        </dt>
                        <dd>{selectedQuestionLevel4}</dd>
                      </>
                    )}
                  </SelectConfirm>
                </AccordionList>
                <FormList className={Utils['Mt-32']}>
                  <div>
                    <dt>
                      <TxtEmp01>
                        ご契約電話番号<FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※「電話番号」は、my
                        楽天モバイルの「申し込み履歴」からご確認いただけます
                        <br />
                        ※半角数字10文字または半角数字11文字で入力してください
                        <br />
                        ※ー（ハイフン）を入れずに入力してください
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000000gl6S"
                          errorState={phoneNumberErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                            digitError: '半角数字で入力してください',
                            formatError: '正しい電話番号を入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000000gl6S"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                phoneNumberValidation(setPhoneNumberErrState)(
                                  value,
                                ),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）070XXXXXXXX"
                              maxLength={11}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r000000gl6S')
                              }}
                              aria-required="true"
                              aria-invalid={
                                errors['00N2r000000gl6S'] &&
                                phoneNumberErrState.inValid
                              }
                              autoComplete="off"
                              ref={
                                refs[
                                  '00N2r000000gl6S'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        ご契約者 氏名<FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000000gl6P"
                          errorState={lastNameErrState}
                          errorMessages={{
                            requiredError: '「姓」は必須項目です',
                            kanaError: '「姓」は全角で入力してください',
                            fullWidthError:
                              '「姓」は半角英字で入力してください',
                            otherError:
                              '「姓」は英字以外は全角で入力してください',
                          }}
                        />
                        <ErrorMessage
                          errorName="00N2r000000gl6N"
                          errorState={lastNameErrState}
                          errorMessages={{
                            requiredError: '「名」は必須項目です',
                            kanaError: '「名」は全角で入力してください',
                            fullWidthError:
                              '「名」は半角英字で入力してください',
                            otherError:
                              '「名」は英字以外は全角で入力してください',
                          }}
                        />
                      </div>
                      <FormListSubCustom>
                        <div>
                          <dt>姓</dt>
                          <dd>
                            <Controller
                              name="00N2r000000gl6P"
                              control={control}
                              rules={{
                                validate: {
                                  customError: value =>
                                    nameValidation(setLastNameErrState)(value),
                                },
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="例）楽天"
                                  maxLength={80}
                                  size={20}
                                  onBlur={() => {
                                    field.onBlur()
                                    trigger('00N2r000000gl6P')
                                  }}
                                  aria-required="true"
                                  aria-invalid={
                                    errors['00N2r000000gl6P'] &&
                                    lastNameErrState.inValid
                                  }
                                  autoComplete="off"
                                  ref={
                                    refs[
                                      '00N2r000000gl6P'
                                    ] as React.RefObject<HTMLInputElement>
                                  }
                                />
                              )}
                            />
                          </dd>
                        </div>
                        <div>
                          <dt>名</dt>
                          <dd>
                            <Controller
                              name="00N2r000000gl6N"
                              control={control}
                              rules={{
                                validate: {
                                  customError: value =>
                                    nameValidation(setFirstNameErrState)(value),
                                },
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="例）太郎"
                                  maxLength={80}
                                  size={20}
                                  onBlur={() => {
                                    field.onBlur()
                                    trigger('00N2r000000gl6N')
                                  }}
                                  aria-required="true"
                                  aria-invalid={
                                    errors['00N2r000000gl6N'] &&
                                    firstNameErrState.inValid
                                  }
                                  autoComplete="off"
                                  ref={
                                    refs[
                                      '00N2r000000gl6N'
                                    ] as React.RefObject<HTMLInputElement>
                                  }
                                />
                              )}
                            />
                          </dd>
                        </div>
                      </FormListSubCustom>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        事象発生日時
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <p>事象発生日</p>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r0000021LO8"
                          control={control}
                          render={({ field }) => (
                            <DateTimePicker
                              {...field}
                              callback={date => {
                                if (date) {
                                  setValue('00N2r0000021LO8', date)
                                }
                              }}
                              startDateCustom={
                                new Date().toISOString().split('T')[0]
                              }
                              option={{
                                maxDate: new Date(),
                              }}
                              ref={
                                refs[
                                  '00N2r0000021LO8'
                                ] as React.RefObject<HTMLInputElement>
                              }
                              aria-required="true"
                            />
                          )}
                        />
                      </div>
                      <FormSelectTime className={Utils['Pt-16']}>
                        <div>
                          <Controller
                            name="00N2r0000021LO9"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <Select
                                {...field}
                                aria-required="true"
                                autoComplete="off"
                                ref={
                                  refs[
                                    '00N2r0000021LO9'
                                  ] as React.RefObject<HTMLSelectElement>
                                }
                                onSelectedChange={value => {
                                  field.onChange(value as string)
                                  trigger('00N2r0000021LO9')
                                }}
                                options={hoursOptions}
                              />
                            )}
                          />
                        </div>
                        <span className={Utils['Mr-16']}>時</span>
                        <div className="c-Form_Select">
                          <Controller
                            name="00N2r000001lWWS"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <Select
                                {...field}
                                aria-required="true"
                                autoComplete="off"
                                ref={
                                  refs[
                                    '00N2r000001lWWS'
                                  ] as React.RefObject<HTMLSelectElement>
                                }
                                onSelectedChange={value => {
                                  field.onChange(value as string)
                                  trigger('00N2r000001lWWS')
                                }}
                                options={minutesOptions}
                              />
                            )}
                          />
                        </div>
                        <span>分</span>
                      </FormSelectTime>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        OSバージョン
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※デスクトップ版を利用されている方は、スマートフォンとパソコンの両方のOSバージョンを記載してください。
                        <br />
                        例）スマートフォン:Android 12／パソコン:Windows 10
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000001lWVo"
                          errorState={osVersionErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                            matchError: '半角英数字で入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000001lWVo"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                inputTextValidation(setOsVersionErrState)(
                                  value,
                                ),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）スマートフォン:Android 12"
                              maxLength={255}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r000001lWVo')
                              }}
                              aria-required="true"
                              autoComplete="off"
                              aria-invalid={
                                errors['00N2r000001lWVo'] &&
                                osVersionErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r000001lWVo'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        製品名
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <div>スマートフォンのメーカー名</div>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000001lWVt"
                          errorState={productMakerErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000001lWVt"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                requiredErrorValidation(
                                  setProductMakerErrState,
                                )(value),
                            },
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              aria-required="true"
                              autoComplete="off"
                              invalid={
                                errors['00N2r000001lWVt'] &&
                                productMakerErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r000001lWVt'
                                ] as React.RefObject<HTMLSelectElement>
                              }
                              onSelectedChange={value => {
                                field.onChange(value as string)
                                trigger('00N2r000001lWVt')
                              }}
                              options={(() => {
                                const tempArr = [
                                  {
                                    text: '選択してください',
                                    value: '',
                                  },
                                ]
                                targetProductMaker.forEach(elem => {
                                  const obj = {
                                    text: elem,
                                    value: elem,
                                  }
                                  tempArr.push(obj)
                                })
                                return tempArr
                              })()}
                            />
                          )}
                        />
                      </div>
                      <div>
                        <div className={Utils['Mt-32']}>製品名</div>
                        <TxtCap as="div" className={Utils['Mt-16']}>
                          ※デスクトップ版を利用されている方は、スマートフォンとパソコンの両方の製品名を記載してください。
                          <br />
                          例）スマートフォン:AQUOS sense 7／パソコン:NEC
                          VersaPro VK20EA
                        </TxtCap>
                        <div>
                          <ErrorMessage
                            errorName="00N2r000001lWVy"
                            errorState={productNameErrState}
                            errorMessages={{
                              requiredError: '必須項目です',
                              matchError: '半角英数字で入力してください',
                            }}
                          />
                        </div>
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000001lWVy"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                inputTextValidation(setProductNameErrState)(
                                  value,
                                ),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）AQUOS sense 7"
                              maxLength={255}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r000001lWVy')
                              }}
                              aria-required="true"
                              autoComplete="off"
                              aria-invalid={
                                errors['00N2r000001lWVy'] &&
                                productNameErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r000001lWVy'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        Rakuten Linkアプリバージョン
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※デスクトップ版を利用されている方は、スマートフォン版とデスクトップ版の両方のアプリバージョンを記載してください。
                        <br />
                        例）スマートフォン版:2.14.2／デスクトップ版:1.8.1
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000001lWW3"
                          errorState={rakutenLinkVersionErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                            matchError: '半角英数字で入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000001lWW3"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                inputTextValidation(
                                  setRakutenLinkVersionErrState,
                                )(value),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）2.14.2"
                              maxLength={255}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r000001lWW3')
                              }}
                              aria-required="true"
                              autoComplete="off"
                              aria-invalid={
                                errors['00N2r000001lWW3'] &&
                                rakutenLinkVersionErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r000001lWW3'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        通信エリア
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="p">
                        ※接続されている回線エリアは「
                        <LinkIconAfter
                          href="/faq/detail/00001520/"
                          target="_blank"
                        >
                          楽天回線とパートナー回線の調べ方
                          <IconNewTabLine />
                        </LinkIconAfter>
                        」よりご確認ください
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000001lWW8"
                          errorState={coverageAreaErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000001lWW8"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                requiredErrorValidation(
                                  setCoverageAreaErrState,
                                )(value),
                            },
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              aria-required="true"
                              autoComplete="off"
                              invalid={
                                errors['00N2r000001lWW8'] &&
                                coverageAreaErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r000001lWW8'
                                ] as React.RefObject<HTMLSelectElement>
                              }
                              onSelectedChange={value => {
                                field.onChange(value as string)
                                trigger('00N2r000001lWW8')
                              }}
                              options={(() => {
                                const tempArr = [
                                  {
                                    text: '選択してください',
                                    value: '',
                                  },
                                ]
                                targetCoverageArea.forEach(elem => {
                                  const obj = {
                                    text: elem,
                                    value: elem,
                                  }
                                  tempArr.push(obj)
                                })
                                return tempArr
                              })()}
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        LTE回線の強度
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <ErrorMessage
                        errorName="00N2r000001lWWD"
                        errorState={lteSignalStrengthErrState}
                        errorMessages={{
                          requiredError: '必須項目です',
                        }}
                      />
                      <div
                        className={
                          hasErrors(lteSignalStrengthErrState)
                            ? Utils['Mt-16']
                            : ''
                        }
                      >
                        <Controller
                          name="00N2r000001lWWD"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                requiredErrorValidation(
                                  setLteSignalStrengthErrState,
                                )(value),
                            },
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              aria-required="true"
                              autoComplete="off"
                              invalid={
                                errors['00N2r000001lWWD'] &&
                                lteSignalStrengthErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r000001lWWD'
                                ] as React.RefObject<HTMLSelectElement>
                              }
                              onSelectedChange={value => {
                                field.onChange(value as string)
                                trigger('00N2r000001lWWD')
                              }}
                              options={(() => {
                                const tempArr = [
                                  {
                                    text: '選択してください',
                                    value: '',
                                  },
                                ]
                                targetLteSignalStrength.forEach(elem => {
                                  const obj = {
                                    text: elem,
                                    value: elem,
                                  }
                                  tempArr.push(obj)
                                })
                                return tempArr
                              })()}
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>相手先電話番号</TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※半角数字10文字または半角数字11文字で入力してください
                        <br />
                        ※ー（ハイフン）を入れずに入力ください
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r0000021LO5"
                          errorState={callingPhoneNumberErrState}
                          errorMessages={{
                            digitError: '半角数字で入力してください',
                            formatError: '正しい電話番号を入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r0000021LO5"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                callingPhoneNumberValidation(
                                  setCallingPhoneNumberErrState,
                                )(value),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）070XXXXXXXX"
                              min="10"
                              maxLength={11}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r0000021LO5')
                              }}
                              aria-required="true"
                              aria-invalid={
                                errors['00N2r0000021LO5'] &&
                                callingPhoneNumberErrState.inValid
                              }
                              autoComplete="off"
                              ref={
                                refs[
                                  '00N2r0000021LO5'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>相手先キャリア</TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="p">※キャリアを選択してください</TxtCap>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r0000021LO4"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              aria-required="true"
                              autoComplete="off"
                              ref={
                                refs[
                                  '00N2r0000021LO4'
                                ] as React.RefObject<HTMLSelectElement>
                              }
                              onSelectedChange={value => {
                                field.onChange(value as string)
                                trigger('00N2r0000021LO4')
                              }}
                              options={(() => {
                                const tempArr = [
                                  {
                                    text: '選択してください',
                                    value: '',
                                  },
                                ]
                                targetDestinationCarrier.forEach(elem => {
                                  const obj = {
                                    text: elem,
                                    value: elem,
                                  }
                                  tempArr.push(obj)
                                })
                                return tempArr
                              })()}
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        連絡用メールアドレス
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※ご入力いただいたメールアドレスへご連絡いたしますので、現在ご利用されているアドレスをご入力ください
                        <br />
                        ※80文字以内で入力してください
                      </TxtCap>
                      <div>メールアドレス</div>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000000gl6J"
                          errorState={emailErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                            formatError:
                              '正しいメールアドレスを入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000000gl6J"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                emailValidation(setEmailErrState)(value),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）example@example.com"
                              maxLength={80}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r000000gl6J')
                              }}
                              aria-required="true"
                              aria-invalid={
                                errors['00N2r000000gl6J'] &&
                                emailErrState.inValid
                              }
                              autoComplete="off"
                              ref={
                                refs[
                                  '00N2r000000gl6J'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                      <div className={Utils['Mt-32']}>確認用</div>
                      <div>
                        <ErrorMessage
                          errorName="confirm-email"
                          errorState={emailConfirmErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                            matchError: 'メールアドレスが一致していません',
                            formatError:
                              '正しいメールアドレスを入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="confirm-email"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                emailConfirmValidation(
                                  getValues('00N2r000000gl6J'),
                                )(setEmailConfirmErrState)(value),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）example@example.com"
                              maxLength={80}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('confirm-email')
                              }}
                              aria-required="true"
                              aria-invalid={
                                errors['confirm-email'] &&
                                emailConfirmErrState.inValid
                              }
                              autoComplete="off"
                              ref={
                                refs[
                                  'confirm-email'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        連絡用電話番号<FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※お問い合わせには原則メールにてご連絡いたしますのでご了承ください
                        <br />
                        ※半角数字10文字または半角数字11文字で入力してください
                        <br />
                        ※ー（ハイフン）を入れずに入力ください
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r000000gl6K"
                          errorState={contactPhoneNumberErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                            digitError: '半角数字で入力してください',
                            formatError: '正しい電話番号を入力してください',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r000000gl6K"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                phoneNumberValidation(
                                  setContactPhoneNumberErrState,
                                )(value),
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="例）070XXXXXXXX"
                              min="10"
                              maxLength={11}
                              size={20}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r000000gl6K')
                              }}
                              aria-required="true"
                              aria-invalid={
                                errors['00N2r000000gl6K'] &&
                                contactPhoneNumberErrState.inValid
                              }
                              autoComplete="off"
                              ref={
                                refs[
                                  '00N2r000000gl6K'
                                ] as React.RefObject<HTMLInputElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TxtEmp01>
                        お問い合わせの詳細
                        <FormListRequired>必須</FormListRequired>
                      </TxtEmp01>
                    </dt>
                    <dd>
                      <TxtCap as="div">
                        ※お困りごとを詳細にご入力ください
                        <br />
                        （お困りごと詳細／発生時状況／発生頻度 等）
                        <br />
                        ※複数ある場合もこちらにご入力ください
                        <br />
                        ※255文字以内で入力してください
                      </TxtCap>
                      <div>
                        <ErrorMessage
                          errorName="00N2r0000021LO3"
                          errorState={textareaErrState}
                          errorMessages={{
                            requiredError: '必須項目です',
                          }}
                        />
                      </div>
                      <div className={Utils['Mt-16']}>
                        <Controller
                          name="00N2r0000021LO3"
                          control={control}
                          rules={{
                            validate: {
                              customError: value =>
                                requiredErrorValidation(setTextareaErrState)(
                                  value,
                                ),
                            },
                          }}
                          render={({ field }) => (
                            <Textarea
                              {...field}
                              placeholder=""
                              maxLength={255}
                              onBlur={() => {
                                field.onBlur()
                                trigger('00N2r0000021LO3')
                              }}
                              aria-required="true"
                              autoComplete="off"
                              aria-invalid={
                                errors['00N2r0000021LO3'] &&
                                textareaErrState.inValid
                              }
                              ref={
                                refs[
                                  '00N2r0000021LO3'
                                ] as React.RefObject<HTMLTextAreaElement>
                              }
                            />
                          )}
                        />
                      </div>
                    </dd>
                  </div>
                </FormList>

                <Modal switchFlag={switchFlag} flag={flag}>
                  <Heading level="3" as="h2">
                    入力内容の確認
                  </Heading>
                  <DescriptionListDefault className={Utils['Mt-32']}>
                    {selectedPlatform && (
                      <ModalTextComponent
                        title="ご利用のOS"
                        text={getFormValues['00N2r0000021LO7']}
                      />
                    )}
                    {selectedQuestionLevel1 && (
                      <ModalTextComponent
                        title={
                          selectedPlatform === 'デスクトップ'
                            ? 'Rakuten Link スマートフォン版でご利用のOS'
                            : 'アプリに関してお困りの内容'
                        }
                        text={getFormValues['00N2r0000021LNy']}
                      />
                    )}
                    {selectedQuestionLevel2 && (
                      <ModalTextComponent
                        title={
                          selectedPlatform === 'デスクトップ'
                            ? 'アプリに関してお困りの内容'
                            : getFormValues['00N2r0000021LNy']
                        }
                        text={getFormValues['00N2r0000021LNz']}
                      />
                    )}
                    {selectedQuestionLevel2 &&
                      selectedQuestionLevel3 &&
                      selectedPlatform === 'デスクトップ' && (
                        <ModalTextComponent
                          title={getFormValues['00N2r0000021LNz']}
                          text={getFormValues['00N2r0000021LO0']}
                        />
                      )}
                    {selectedQuestionLevel2 &&
                      selectedQuestionLevel3 &&
                      selectedPlatform !== 'デスクトップ' && (
                        <ModalTextComponent
                          title={
                            selectedQuestionLevel2 in
                              question['iOS']['初期設定時の認証・ログイン'] ||
                            selectedQuestionLevel2 in
                              question['Android']['初期設定時の認証・ログイン']
                              ? '表示されるエラー画面のメッセージ'
                              : getFormValues['00N2r0000021LNz']
                          }
                          text={getFormValues['00N2r0000021LO0']}
                        />
                      )}
                    {selectedQuestionLevel4 && (
                      <ModalTextComponent
                        title={getFormValues['00N2r0000021LO0']}
                        text={getFormValues['00N2r0000021LO1']}
                      />
                    )}
                    <ModalTextComponent
                      title="ご契約電話番号"
                      text={getFormValues['00N2r000000gl6S']}
                    />
                    <div>
                      <dt>ご契約者 氏名</dt>
                      <dd>
                        <div>
                          <span>{getFormValues['00N2r000000gl6P']}</span>
                          <span className={Utils['Ml-8']}>
                            {getFormValues['00N2r000000gl6N']}
                          </span>
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt>事象発生日時</dt>
                      <dd>
                        <div>
                          <span>{getFormValues['00N2r0000021LO8']}</span>
                          <span className={Utils['Ml-8']}>
                            {getFormValues['00N2r0000021LO9']}時
                          </span>
                          <span>{getFormValues['00N2r000001lWWS']}分</span>
                        </div>
                      </dd>
                    </div>
                    <ModalTextComponent
                      title="OSバージョン"
                      text={getFormValues['00N2r000001lWVo']}
                    />
                    <div>
                      <dt>製品名</dt>
                      <dd>
                        <div>
                          <span>{getFormValues['00N2r000001lWVt']}</span>
                          <br />
                          <span>{getFormValues['00N2r000001lWVy']}</span>
                        </div>
                      </dd>
                    </div>
                    <ModalTextComponent
                      title="Rakuten Linkアプリバージョン"
                      text={getFormValues['00N2r000001lWW3']}
                    />
                    <ModalTextComponent
                      title="通信エリア"
                      text={getFormValues['00N2r000001lWW8']}
                    />
                    <ModalTextComponent
                      title="LTE回線の強度"
                      text={getFormValues['00N2r000001lWWD']}
                    />
                    <ModalTextComponent
                      title="相手先電話番号"
                      text={
                        getFormValues['00N2r0000021LO5']
                          ? getFormValues['00N2r0000021LO5']
                          : '-'
                      }
                    />
                    <ModalTextComponent
                      title="相手先キャリア"
                      text={
                        getFormValues['00N2r0000021LO4']
                          ? getFormValues['00N2r0000021LO4']
                          : '-'
                      }
                    />
                    <ModalTextComponent
                      title="連絡用メールアドレス"
                      text={getFormValues['00N2r000000gl6J']}
                    />
                    <ModalTextComponent
                      title="連絡用電話番号"
                      text={getFormValues['00N2r000000gl6K']}
                    />
                    <ModalTextComponent
                      title="お問い合わせの詳細"
                      text={getFormValues['00N2r0000021LO3']}
                    />
                  </DescriptionListDefault>
                  <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
                    <div>
                      <ButtonPrimaryLarge
                        type="submit"
                        aria-disabled={isSubmitting}
                      >
                        この内容で送信する
                      </ButtonPrimaryLarge>
                    </div>
                    <div className={Utils['Mt-16']}>
                      <ButtonRegularLarge type="button" onClick={handleEdit}>
                        修正する
                      </ButtonRegularLarge>
                    </div>
                  </div>
                </Modal>
              </div>
              <div>
                <Heading level="2" className={Utils['Mt-48']}>
                  個人情報の取扱いについて
                </Heading>
                <p className={Utils['Mt-16']}>
                  お客様のお問い合わせを調査するにあたり正確な問題の把握の為に端末内に保存されているアプリ動作の履歴を確認する場合がございます。対象のお客様には入力いただいた情報をもとに、お使いの端末に通知を送信いたします。そちらの案内に従い、調査にご協力ください。これには個人を特定できる情報は一切含まれません。弊社のポリシーについては「
                  <LinkIconAfter
                    href="https://corp.mobile.rakuten.co.jp/guide/privacy/"
                    target="_blank"
                  >
                    個人情報の取扱いについて
                    <IconNewTabLine />
                  </LinkIconAfter>
                  」をご確認いただき、同意される場合は下記のチェックボタンをチェックしてください。
                </p>
                <div className={Utils['Mt-16']}>
                  <Controller
                    name="agree"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        onChangeCheck={field.onChange as CheckedChange}
                        checked={field.value}
                        text="個人情報の取扱いに同意します"
                        value={`${field.value}`}
                      />
                    )}
                  />
                </div>
                <TxtCap as="p" className={Utils['Mt-8']}>
                  ※上記の内容を送信後、お使いの端末に通知を送信致します。
                </TxtCap>
                <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
                  <ButtonRegularLarge
                    type="button"
                    data-ratid="cvs-payment-form_confirm"
                    data-ratevent="click"
                    data-ratparam="all"
                    aria-disabled={!isAgree}
                    onClick={handleConfirm}
                  >
                    入力内容を確認する
                  </ButtonRegularLarge>
                </div>
                <TxtCap as="p" className={Utils['Mt-24']}>
                  ※「個人情報の取り扱いに同意します」にチェックする必要があります。
                </TxtCap>
              </div>
            </SystemContainer>
          )}
        </form>
      </LoadingWrapper>
      <GlobalFooter breadcrumbsItem={breadcrumbs} />
    </>
  )
}

export default SupportRakutenLinkForm
