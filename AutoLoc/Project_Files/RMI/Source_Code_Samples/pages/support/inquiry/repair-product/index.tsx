import type { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import styled from 'styled-components'

import Utils from '@styles/Utils.module.scss'
import { AccordionList } from '@components/atoms/AccordionList'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { ButtonLinkIconBefore } from '@components/atoms/ButtonLink'
import { ButtonRadioNoborder } from '@components/atoms/ButtonRadioNoborder'
import { ButtonRegular, ButtonSecondary } from '@components/atoms/Buttons'
import { Checkbox, CheckboxFreed } from '@components/atoms/Checkbox'
import { DateTimePicker } from '@components/atoms/DateTimePicker'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { Heading } from '@components/atoms/Heading'
import { Input } from '@components/atoms/Input'
import { LinkIconAfter } from '@components/atoms/Link'
import { UlOnly } from '@components/atoms/List'
import { Modal } from '@components/atoms/Modal'
import { Select } from '@components/atoms/Select'
import { Textarea } from '@components/atoms/textarea'
import { TxtEmp01, TxtCap } from '@components/atoms/Txt'
import { IconNewTabLine, IconChevronLeft } from '@components/icons'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { CustomHead } from '@components/utils/CustomHead'
import { mixins } from '@components/utils/Mixins'
import { scrollToElement } from '@components/utils/scrollToElement'
import {
  chkKatakana,
  chkNumeric,
  chkLength,
  chkEmail,
} from '@components/utils/Validator'
import { support_inquiry_repair_product } from '~/js/csv-data/support-inquiry-repair-product'

const InquiryWrapper = styled.div`
  background-color: ${props => props.theme.colors.monotone97};
  padding: 40px 0;
`

const AttentionContainer = styled.div`
  background-color: ${props => props.theme.colors.yellow};
  padding: 16px;
`

const CustomDescriptionList = styled(DescriptionListDefault)`
  border: 1px solid ${props => props.theme.colors.monotone75};
  border-top: none;

  > div > dd {
    ${mixins.mq.MinL} {
      padding-right: 16px;
    }
  }
`

const RadioWrapper = styled.ul`
  li + li {
    margin-top: 24px;
  }
`

const RequiredLabel = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.s};
`

const ModalContent = styled.div`
  color: ${props => props.theme.colors.monotone20};
`

const BorderBox = styled.div`
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.monotone75};
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  .w-fixed {
    flex-shrink: 0;
  }
`

const ErrorTxt = styled.span`
  color: #e60000;
`

type RadioListType = {
  text: string
  value: string
}

type hearingResultType = {
  place: string
  term: string
  damage: string
  warranty: string
  brand: string
  product: string
}

type hearingResultStaticType = {
  place: {
    label: string
    name: string
  }
  term: {
    label: string
    name: string
  }
  damage: {
    label: string
    name: string
  }
  warranty: {
    label: string
    name: string
  }
  brand: {
    label: string
    name: string
  }
  product: {
    label: string
    name: string
  }
}

type receptionResultType = {
  name: {
    label: string
    value?: string
  }
  nameKana: {
    label: string
    value?: string
  }
  contractTel: {
    label: string
    value?: string
  }
  birthday: {
    label: string
    value?: string
  }
  imei: {
    label: string
    value?: string
  }
  defectType: {
    label: string
    value?: string
  }
  defectSituation: {
    label: string
    value?: {
      date?: string
      frequency?: string
      dayBefore?: string[]
      justBefore?: string[]
    }
  }
  email: {
    label: string
    value?: string
  }
  tel: {
    label: string
    value?: string
  }
  address: {
    label: string
    value?: string
  }
  detail: {
    label: string
    value?: string
  }
  lending: {
    label: string
    value?: string
  }
}

type conditionByHearingResultType = {
  place: string
  term: string
  damage: string
  warranty: string
  brand: string
  product: string
  lending: string
  disclaimer: string
  next: string
}

/*** 定義系 ***/
const inqPlaceList: RadioListType[] = [
  { text: '楽天モバイル公式Web', value: '楽天モバイル公式Web' },
  { text: '楽天モバイルショップ', value: '楽天モバイルショップ' },
  { text: '楽天モバイル公式 楽天市場店', value: '楽天モバイル公式 楽天市場店' },
]

const inqTermList: RadioListType[] = [
  { text: '14日以内', value: '14日以内' },
  { text: '15日以上1年未満', value: '15日以上1年未満' },
  { text: '1年以上', value: '1年以上' },
]

const inqDamageList: RadioListType[] = [
  { text: 'あり', value: 'あり' },
  { text: 'なし', value: 'なし' },
]

const inqWarrantyList: RadioListType[] = [
  { text: 'スマホ交換保証プラス', value: 'スマホ交換保証プラス' },
  {
    text: '故障紛失保証 with AppleCare Services',
    value: '故障紛失保証 with AppleCare Services',
  },
  {
    text: 'あんしん保証with AppleCare Services for Apple Watch',
    value: 'あんしん保証with AppleCare Services for Apple Watch',
  },
  { text: '持ち込みスマホあんしん保証', value: '持ち込みスマホあんしん保証' },
  { text: '加入していない', value: '加入していない' },
]

const inqBrandList: RadioListType[] = [
  { text: 'Rakutenオリジナル', value: 'Rakutenオリジナル' },
  { text: 'iPhone', value: 'iPhone' },
  { text: 'arrows', value: 'arrows' },
  { text: 'HUAWEI P/nova', value: 'HUAWEI P/nova' },
  { text: 'OPPO A/Reno', value: 'OPPO A/Reno' },
  { text: 'Samsung Galaxy', value: 'Samsung Galaxy' },
  { text: 'AQUOS', value: 'AQUOS' },
  { text: 'Xperia', value: 'Xperia' },
  { text: 'Redmi', value: 'Redmi' },
  { text: 'Apple watch', value: 'Apple watch' },
  { text: 'Aterm', value: 'Aterm' },
]

const inqProductList: RadioListType[] = [
  { text: 'Rakuten BIG s', value: 'Rakuten BIG s' },
  { text: 'Rakuten Hand 5G', value: 'Rakuten Hand 5G' },
  { text: 'Rakuten WiFi Pocket 2B', value: 'Rakuten WiFi Pocket 2B' },
  { text: 'Rakuten WiFi Pocket 2C', value: 'Rakuten WiFi Pocket 2C' },
]

const hearingResultTemplate = {
  place: '',
  term: '',
  damage: '',
  warranty: '',
  brand: '',
  product: '',
}

const hearingResultStatic: hearingResultStaticType = {
  place: { label: '購入場所', name: '00N2x000009J2qr' },
  term: { label: '購入時期', name: '00N2x000009J2qm' },
  damage: { label: '物理的ダメージの有無', name: '00N2x000009J2r1' },
  warranty: { label: '保証オプションへの加入状況', name: '00N2x000009J2qw' },
  brand: { label: 'ブランド名', name: '00N2x000009J2qc' },
  product: { label: '製品名', name: '00N2x000009J2qh' },
}

const receptionResultTemplate = {
  name: { label: 'ご契約者氏名' },
  nameKana: { label: 'ご契約者氏名（カナ）' },
  contractTel: { label: 'ご契約電話番号' },
  birthday: { label: 'ご契約者生年月日' },
  imei: { label: '製品のIMEI（製造番号）' },
  defectType: { label: '不具合の種類' },
  defectSituation: { label: '不具合の発生状況' },
  email: { label: '返信用メールアドレス' },
  tel: { label: '連絡用電話番号' },
  address: { label: '送付先住所' },
  detail: { label: '修理依頼の詳細' },
  lending: { label: '代替機の貸し出し' },
}

const defectTypes = [
  '電源関連',
  '通信・接続関連',
  '通話関連',
  '製品発熱・バッテリー膨張',
  '製品発火・発煙などの異常',
  'タッチパネル・画面関連',
  'カメラ関連',
  'アプリ・ソフトウェア関連関連',
  '破損、水没関連',
  'その他',
]

const defectFrequencies = [
  '1日に1回発生する',
  '1日に2回以上発生する',
  '数日に1回程度発生する',
  'これまでに一度発生したのみ',
]

const defectDayBefore = [
  'アプリを入れた／更新／削除',
  'OSバージョンアップ／ソフト更新した',
  'データを保存／削除／編集した',
  '端末設定を変更した',
  'UIM／付属品を変更した',
  '利用場所を変更した',
  '外圧を加えた／落下させた',
  '特になし',
  'その他',
]

const defectJustBefore = [
  '何もしていない',
  '電源を起動中',
  '電源を起動した',
  'スリープモードから復帰した',
  '通話を発信した',
  '通話中',
  '通話を終了した',
  '特定のアプリを利用した',
  'ソフトウェアを更新した',
  '電池残量が少なくなった',
  '外部機器と通信・接続した',
  'その他機能を使用した',
  '利用状態に関係ない',
]

// 各質問のkeyを配列に
const hearingResultKeys = Object.keys(
  hearingResultTemplate,
) as (keyof hearingResultType)[]
const receptionResultKeys = Object.keys(
  receptionResultTemplate,
) as (keyof receptionResultType)[]

/*** custom component ***/
const CustomInputElm = styled(Input)<{ isError?: boolean }>`
  border: 1px solid
    ${({ isError }) =>
      isError
        ? props => props.theme.colors.alert
        : props => props.theme.colors.monotone40};
  background-color: ${({ isError }) =>
    isError
      ? props => props.theme.colors.alertLightBg
      : props => props.theme.colors.white};
`

interface CustomTextInputProps {
  className?: string
  placeholder?: string
  onChange?: (val: string) => void
  onBlur?: (val: string) => void
  disabled?: boolean
  id?: string
  name?: string
  defaultValue?: string
  valueByExternal?: string
  isError?: boolean
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const {
    className,
    placeholder,
    onChange,
    onBlur,
    disabled,
    id,
    name,
    defaultValue = '',
    valueByExternal = '',
    isError,
  } = props
  const [value, setValue] = useState(valueByExternal || defaultValue)

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      const _value = event.target.value
      setValue(_value)
      if (onChange) {
        onChange(_value)
      }
    },
    [onChange],
  )

  const _onBlur: React.FocusEventHandler<HTMLInputElement> = useCallback(
    event => {
      const _value = event.target.value
      if (onBlur) {
        onBlur(_value)
      }
    },
    [onBlur],
  )

  useEffect(() => {
    setValue(valueByExternal)
  }, [valueByExternal])

  return (
    <CustomInputElm
      isError={isError}
      className={className}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      placeholder={placeholder}
      disabled={disabled}
      id={id}
      name={name}
      type="text"
    />
  )
}

const CustomTextareaElm = styled(Textarea)<{ isError?: boolean }>`
  border: 1px solid
    ${({ isError }) =>
      isError
        ? props => props.theme.colors.alert
        : props => props.theme.colors.monotone40};
  background-color: ${({ isError }) =>
    isError
      ? props => props.theme.colors.alertLightBg
      : props => props.theme.colors.white};
`

interface CustomTextareaProps {
  className?: string
  placeholder?: string
  onChange?: (val: string) => void
  onBlur?: (val: string) => void
  id?: string
  name?: string
  rows?: number
  maxLength?: number
  isError?: boolean
}

const CustomTextarea: React.FC<CustomTextareaProps> = props => {
  const {
    className,
    placeholder,
    onChange,
    onBlur,
    id,
    name,
    rows,
    maxLength,
    isError,
  } = props
  const [value, setValue] = useState('')

  const _onChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    event => {
      const _value = event.target.value
      setValue(_value)
      if (onChange) {
        onChange(_value)
      }
    },
    [onChange],
  )

  const _onBlur: React.FocusEventHandler<HTMLTextAreaElement> = useCallback(
    event => {
      const _value = event.target.value
      if (onBlur) {
        onBlur(_value)
      }
    },
    [onBlur],
  )

  return (
    <CustomTextareaElm
      isError={isError}
      className={className}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      placeholder={placeholder}
      id={id}
      name={name}
      rows={rows}
      maxLength={maxLength}
    />
  )
}

const SupportInquiryRepairproduct: NextPage = () => {
  const pagetitle = '製品の交換・修理に関するお問い合わせ'
  const directories = [{ path: '/support/', label: 'お客様サポート' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: directories[0].label,
      url: directories[0].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  // errorCodeを取得
  const searchParams = useSearchParams()
  const errorCodeByQuery = searchParams.get('errorCode') || ''

  // 今日の日付を取得してformat
  const formattedDate = useCallback(() => {
    const date = new Date()
    const y = date.getFullYear()
    const m = ('00' + (date.getMonth() + 1)).slice(-2)
    const d = ('00' + date.getDate()).slice(-2)
    return y + '/' + m + '/' + d
  }, [])

  // modal系
  const [isModalExpanded, setIsModalExpanded] = useState(false)
  const toggleModalExpanded = useCallback(() => {
    setIsModalExpanded(!isModalExpanded)
  }, [isModalExpanded])

  const updateModal = useCallback((flag: boolean) => {
    setIsModalExpanded(flag)
    if (flag) {
      scrollToElement('js-modal-top', {
        containerElement: 'js-modal-container',
      })
    }
  }, [])

  // step1 = ヒアリング画面, step2 = 交換・修理受付画面
  const [step, setStep] = useState(1)

  const [hearingResult, setHearingResult] = useState<hearingResultType>(
    hearingResultTemplate,
  )
  const [receptionResult, setReceptionResult] = useState<receptionResultType>({
    ...receptionResultTemplate,
    birthday: { ...receptionResultTemplate.birthday, value: formattedDate() },
  })

  const [isDisplayDamageRadio, setIsDisplayDamageRadio] = useState(false)
  const [isDisplayWarrantyRadio, setIsDisplayWarrantyRadio] = useState(false)
  const [isDisplayBrandRadio, setIsDisplayBrandRadio] = useState(false)
  const [isDisplayProductRadio, setIsDisplayProductRadio] = useState(false)

  const updateStep = useCallback((num: number) => {
    setIsModalExpanded(false)
    setStep(num)
    scrollToElement('js-inq-top')
  }, [])

  // 選択された事前情報を更新
  const updateHearingResultOne = useCallback(
    (key: keyof hearingResultType, val: string) => {
      switch (key) {
        case 'term':
          setHearingResult(prev => ({
            ...prev,
            [key]: val,
            damage: '',
            warranty: '',
            brand: '',
            product: '',
          }))
          setIsDisplayDamageRadio(false)
          setIsDisplayWarrantyRadio(false)
          setIsDisplayBrandRadio(false)
          setIsDisplayProductRadio(false)
          break
        case 'damage':
          setHearingResult(prev => ({
            ...prev,
            [key]: val,
            warranty: '',
            brand: '',
            product: '',
          }))
          setIsDisplayWarrantyRadio(false)
          setIsDisplayBrandRadio(false)
          setIsDisplayProductRadio(false)
          break
        case 'warranty':
          setHearingResult(prev => ({
            ...prev,
            [key]: val,
            brand: '',
            product: '',
          }))
          setIsDisplayBrandRadio(false)
          setIsDisplayProductRadio(false)
          break
        case 'brand':
          setHearingResult(prev => ({
            ...prev,
            [key]: val,
            product: '',
          }))
          setIsDisplayProductRadio(false)
          break
        default:
          setHearingResult(prev => ({
            ...prev,
            [key]: val,
          }))
          break
      }
    },
    [],
  )

  // 事前情報のラジオ出しわけ
  useEffect(() => {
    if (
      hearingResult.term === '14日以内' ||
      hearingResult.term === '15日以上1年未満'
    ) {
      setIsDisplayDamageRadio(true)
    } else {
      setIsDisplayDamageRadio(false)
    }

    if (hearingResult.damage === 'あり' || hearingResult.term === '1年以上') {
      setIsDisplayWarrantyRadio(true)
    } else {
      setIsDisplayWarrantyRadio(false)
    }

    if (
      hearingResult.warranty === '加入していない' ||
      (hearingResult.damage === 'なし' && hearingResult.term !== '14日以内')
    ) {
      setIsDisplayBrandRadio(true)
    } else {
      setIsDisplayBrandRadio(false)
    }
    if (hearingResult.brand === 'Rakutenオリジナル') {
      setIsDisplayProductRadio(true)
    } else {
      setIsDisplayProductRadio(false)
    }
  }, [hearingResult])

  // 修理受付画面で入力された情報を更新
  const updateReceptionResultOne = useCallback(
    (
      key: keyof receptionResultType,
      val: string | receptionResultType['defectSituation']['value'],
    ) => {
      setReceptionResult(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          value: val,
        },
      }))
    },
    [],
  )

  // 修理受付画面系
  const [receptionFirstName, setReceptionFirstName] = useState('')
  const [receptionLastName, setReceptionLastName] = useState('')
  const [receptionFirstNameKana, setReceptionFirstNameKana] = useState('')
  const [receptionLastNameKana, setReceptionLastNameKana] = useState('')
  const [imeiChecked, setImeiChecked] = useState(false)
  const [receptionImei, setReceptionImei] = useState('')
  const [receptionDefectType, setReceptionDefectType] = useState('')
  const [receptionDefectDate, setReceptionDefectDate] = useState(formattedDate)
  const [receptionDefectFrequency, setReceptionDefectFrequency] = useState('')
  const [receptionDefectDayBefore, setReceptionDefectDayBefore] = useState(
    Array.from({ length: defectDayBefore.length }, () => ''),
  )
  const [receptionDefectJustBefore, setReceptionDefectJustBefore] = useState(
    Array.from({ length: defectJustBefore.length }, () => ''),
  )
  const [receptionEmail, setReceptionEmail] = useState('')
  const [receptionEmailConfirm, setReceptionEmailConfirm] = useState('')
  const [telChecked, setTelChecked] = useState(false)
  const [receptionTel, setReceptionTel] = useState('')
  const [receptionPostalcode, setReceptionPostalcode] = useState('')
  const [receptionAddressByPostalcode, setReceptionAddressByPostalcode] =
    useState('')
  const [receptionLending, setReceptionLending] = useState('')

  // csvから取得する出しわけ各パターンの情報
  const repairProductData = support_inquiry_repair_product
  const [conditionByHearingResult, setConditionByHearingResult] =
    useState<conditionByHearingResultType | null>()

  // 事前情報の結果を元に、出しわけパターンを特定
  const getData = useCallback(() => {
    let data = repairProductData
    data = data.filter(
      item =>
        item.place === hearingResult.place && item.term === hearingResult.term,
    )

    data = data.filter(item => {
      if (item.damage) {
        return item.damage === hearingResult.damage
      } else {
        return true // 関係ない時は引き継ぎ
      }
    })

    if (data.length > 1) {
      data = data.filter(item => {
        if (item.warranty) {
          return item.warranty === hearingResult.warranty
        } else {
          return true // 関係ない時は引き継ぎ
        }
      })
    }

    if (data.length > 1) {
      data = data.filter(item => item.brand === hearingResult.brand)
    }

    if (data.length > 1) {
      data = data.filter(item => item.product === hearingResult.product)
    }

    setConditionByHearingResult(data[0])
  }, [hearingResult, repairProductData])

  // imeiのcheckが押されたらinputをリセット
  useEffect(() => {
    if (imeiChecked) {
      setIsErrImeiRequired(false)
      setIsErrImei(false)
      setReceptionImei('')
      updateReceptionResultOne('imei', '')
    }
  }, [imeiChecked, updateReceptionResultOne])

  // telのcheckが押されたらinputをリセット
  useEffect(() => {
    const copyTel = receptionResult.contractTel.value || ''
    if (telChecked) {
      setIsErrTelRequired(false)
      setIsErrTel(false)
      setReceptionTel(copyTel)
      updateReceptionResultOne('tel', copyTel)
    } else {
      setReceptionTel('')
      updateReceptionResultOne('tel', '')
    }
  }, [telChecked, receptionResult.contractTel.value, updateReceptionResultOne])

  // step2の各項目エラー
  const [isErrFirstNameRequired, setIsErrFirstNameRequired] = useState(false)
  const [isErrLastNameRequired, setIsErrLastNameRequired] = useState(false)
  const [isErrFirstNameKana, setIsErrFirstNameKana] = useState(false)
  const [isErrLastNameKana, setIsErrLastNameKana] = useState(false)
  const [isErrFirstNameKanaRequired, setIsErrFirstNameKanaRequired] =
    useState(false)
  const [isErrLastNameKanaRequired, setIsErrLastNameKanaRequired] =
    useState(false)
  const [isErrContractTel, setIsErrContractTel] = useState(false)
  const [isErrContractTelRequired, setIsErrContractTelRequired] =
    useState(false)
  const [isErrImei, setIsErrImei] = useState(false)
  const [isErrImeiRequired, setIsErrImeiRequired] = useState(false)
  const [isErrDefectTypeRequired, setIsErrDefectTypeRequired] = useState(false)
  const [isErrDefectFrequencyRequired, setIsErrDefectFrequencyRequired] =
    useState(false)
  const [isErrDefectDayBeforeRequired, setIsErrDefectDayBeforeRequired] =
    useState(false)
  const [isErrDefectJustBeforeRequired, setIsErrDefectJustBeforeRequired] =
    useState(false)
  const [isErrEmailCondition, setIsErrEmailCondition] = useState(false)
  const [isErrEmailCorrect, setIsErrEmailCorrect] = useState(false)
  const [isErrEmailRequired, setIsErrEmailRequired] = useState(false)
  const [isErrEmailConfirm, setIsErrEmailConfirm] = useState(false)
  const [isErrEmailConfirmRequired, setIsErrEmailConfirmRequired] =
    useState(false)
  const [isErrTel, setIsErrTel] = useState(false)
  const [isErrTelRequired, setIsErrTelRequired] = useState(false)
  const [isErrPostalcode, setIsErrPostalcode] = useState(false)
  const [isErrPostalcodeRequired, setIsErrPostalcodeRequired] = useState(false)
  const [isErrAddress, setIsErrAddress] = useState(false)
  const [isErrAddressRequired, setIsErrAddressRequired] = useState(false)
  const [isErrDetailRequired, setIsErrDetailRequired] = useState(false)
  const [isErrLendingRequired, setIsErrLendingRequired] = useState(false)
  const [isErrAgreeToTheRepairDisclaimer, setIsErrAgreeToTheRepairDisclaimer] =
    useState(false)
  const [
    isErrAgreeToTheHandlingOfPersonalInformation,
    setIsErrAgreeToTheHandlingOfPersonalInformation,
  ] = useState(false)

  // step2の規約などのチェック管理
  const [disclaimerCheck, setDisclaimerCheck] = useState(false)
  const [personalInfoCheck, setPersonalInfoCheck] = useState(false)

  // 確認ボタンのアクティブ化管理
  const [step1ConfirmBtnDisabled, setStep1ConfirmBtnDisabled] = useState(true)

  // step2で入力された姓名を結合
  useEffect(() => {
    if (!receptionFirstName || !receptionLastName) {
      return
    }
    updateReceptionResultOne(
      'name',
      `${receptionLastName} ${receptionFirstName}`,
    )
  }, [receptionFirstName, receptionLastName, updateReceptionResultOne])

  // step2で入力されたセイメイを結合
  useEffect(() => {
    if (!receptionFirstNameKana || !receptionLastNameKana) {
      return
    }
    updateReceptionResultOne(
      'nameKana',
      `${receptionLastNameKana} ${receptionFirstNameKana}`,
    )
  }, [receptionFirstNameKana, receptionLastNameKana, updateReceptionResultOne])

  // step2で入力された各不具合状況を結合
  useEffect(() => {
    if (
      !receptionDefectDate ||
      !receptionDefectFrequency ||
      !receptionDefectDayBefore.some(val => val !== '') ||
      !receptionDefectJustBefore.some(val => val !== '')
    ) {
      return
    }
    updateReceptionResultOne('defectSituation', {
      date: receptionDefectDate,
      frequency: receptionDefectFrequency,
      dayBefore: receptionDefectDayBefore,
      justBefore: receptionDefectJustBefore,
    })
  }, [
    receptionDefectDate,
    receptionDefectFrequency,
    receptionDefectDayBefore,
    receptionDefectJustBefore,
    updateReceptionResultOne,
  ])

  // step2で入力されたメールアドレスの一致をチェック
  useEffect(() => {
    if (!receptionEmail || !receptionEmailConfirm) {
      return
    }
    if (receptionEmail !== receptionEmailConfirm) {
      setIsErrEmailConfirm(true)
      return
    }
    setIsErrEmailConfirm(false)
    updateReceptionResultOne('email', receptionEmail)
  }, [receptionEmail, receptionEmailConfirm, updateReceptionResultOne])

  // 郵便番号から住所取得
  const getAddressByPostalcode = useCallback(() => {
    if (typeof window.AjaxZip3 === 'undefined') {
      return
    }
    if (!receptionPostalcode || isErrPostalcode) {
      return
    }
    setReceptionAddressByPostalcode('')
    const { AjaxZip3 } = window
    const inputPostalcodeName = '00N2x000009J2j7'
    const inputAddressName = '00N2x000009J2jC'
    const inputAddressId = 'js-input-address'
    AjaxZip3.zip2addr(
      inputPostalcodeName,
      '',
      inputAddressName,
      inputAddressName,
    )
    // @ts-ignore
    AjaxZip3.onSuccess = () => {
      const elm = document.getElementById(inputAddressId) as HTMLInputElement
      if (elm.value) {
        setReceptionAddressByPostalcode(elm.value)
        updateReceptionResultOne('address', elm.value)
      }
    }
  }, [
    receptionPostalcode, // 未使用だけど郵便番号が変わるたびに更新
    isErrPostalcode,
    updateReceptionResultOne,
  ])

  // step1でエラーなければ確認するボタンのアクティブ化
  useEffect(() => {
    let isValidated = true
    for (const [key, val] of Object.entries(hearingResult)) {
      switch (key) {
        case 'damage':
          if (isDisplayDamageRadio && !val) {
            isValidated = false
          }
          break
        case 'warranty':
          if (isDisplayWarrantyRadio && !val) {
            isValidated = false
          }
          break
        case 'brand':
          if (isDisplayBrandRadio && !val) {
            isValidated = false
          }
          break
        case 'product':
          if (isDisplayProductRadio && !val) {
            isValidated = false
          }
          break
        default:
          if (!val) {
            isValidated = false
          }
          break
      }
    }
    setStep1ConfirmBtnDisabled(!isValidated)
  }, [
    hearingResult,
    isDisplayDamageRadio,
    isDisplayWarrantyRadio,
    isDisplayBrandRadio,
    isDisplayProductRadio,
  ])

  // step2必須箇所が全て入力または選択されているか
  const checkRequired = useCallback(() => {
    setIsErrLastNameRequired(!receptionLastName)
    setIsErrFirstNameRequired(!receptionFirstName)
    setIsErrLastNameKanaRequired(!receptionLastNameKana)
    setIsErrFirstNameKanaRequired(!receptionFirstNameKana)
    setIsErrContractTelRequired(!receptionResult.contractTel.value)
    setIsErrImeiRequired(!(receptionResult.imei.value || imeiChecked))
    setIsErrDefectTypeRequired(!receptionResult.defectType.value)
    setIsErrDefectFrequencyRequired(!receptionDefectFrequency)
    setIsErrDefectDayBeforeRequired(
      !receptionDefectDayBefore.some(val => val !== ''),
    )
    setIsErrDefectJustBeforeRequired(
      !receptionDefectJustBefore.some(val => val !== ''),
    )
    setIsErrEmailRequired(!receptionEmail)
    setIsErrEmailConfirmRequired(!receptionEmailConfirm)
    setIsErrTelRequired(!receptionResult.tel.value)
    setIsErrPostalcodeRequired(!receptionPostalcode)
    setIsErrAddressRequired(!receptionResult.address.value)
    setIsErrDetailRequired(!receptionResult.detail.value)
    // lendingは条件によっては非表示のときがある
    if (conditionByHearingResult?.lending === 'true') {
      setIsErrLendingRequired(!receptionResult.lending.value)
    }
    setIsErrAgreeToTheRepairDisclaimer(!disclaimerCheck)
    setIsErrAgreeToTheHandlingOfPersonalInformation(!personalInfoCheck)

    if (
      !receptionLastName ||
      !receptionFirstName ||
      !receptionLastNameKana ||
      !receptionFirstNameKana ||
      !receptionResult.contractTel.value ||
      !(receptionResult.imei.value || imeiChecked) ||
      !receptionResult.defectType.value ||
      !receptionDefectFrequency ||
      !receptionDefectDayBefore.some(val => val !== '') ||
      !receptionDefectJustBefore.some(val => val !== '') ||
      !receptionEmail ||
      !receptionEmailConfirm ||
      !receptionResult.tel.value ||
      !receptionPostalcode ||
      !receptionResult.address.value ||
      !receptionResult.detail.value ||
      (conditionByHearingResult?.lending === 'true' &&
        !receptionResult.lending.value) ||
      !disclaimerCheck ||
      !personalInfoCheck
    ) {
      return true
    } else {
      return false
    }
  }, [
    receptionLastName,
    receptionFirstName,
    receptionLastNameKana,
    receptionFirstNameKana,
    receptionResult.contractTel.value,
    receptionResult.imei.value,
    receptionResult.defectType.value,
    receptionDefectFrequency,
    receptionDefectDayBefore,
    receptionDefectJustBefore,
    receptionEmail,
    receptionEmailConfirm,
    receptionResult.tel.value,
    receptionPostalcode,
    receptionResult.address.value,
    receptionResult.detail.value,
    receptionResult.lending.value,
    imeiChecked,
    conditionByHearingResult?.lending,
    disclaimerCheck,
    personalInfoCheck,
  ])

  // step1 確認modalを立ち上げて事前出しわけパターン特定
  const clickStep1Confirm = useCallback(() => {
    getData()
    updateModal(true)
  }, [getData, updateModal])

  // step2 確認modalを立ち上げ
  const clickStep2Confirm = useCallback(async () => {
    const isErrorRequired = await checkRequired()
    const firstElementOfTheErrorFlag =
      document.getElementsByClassName('js-error-flg')[0]

    // isErrorRequiredがtrueの場合、または.js-error-flgが存在する場合、処理を終了する
    if (isErrorRequired || firstElementOfTheErrorFlag) {
      if (firstElementOfTheErrorFlag) {
        // .js-error-flgが存在する場合、その要素にスムーズスクロール
        firstElementOfTheErrorFlag.scrollIntoView({
          behavior: 'smooth',
        })
      }
      return // モーダルを開かずに処理を終了
    }

    // isErrorRequiredがfalseで.js-error-flgが存在しない場合のみモーダルを更新
    updateModal(true)
  }, [checkRequired, updateModal])

  // step2で入力または選択された情報を初期化
  const resetReceptionResult = useCallback(() => {
    setReceptionResult(receptionResultTemplate)

    setIsErrFirstNameRequired(false)
    setIsErrLastNameRequired(false)
    setIsErrFirstNameKana(false)
    setIsErrLastNameKana(false)
    setIsErrFirstNameKanaRequired(false)
    setIsErrLastNameKanaRequired(false)
    setIsErrContractTel(false)
    setIsErrContractTelRequired(false)
    setIsErrImei(false)
    setIsErrImeiRequired(false)
    setIsErrDefectTypeRequired(false)
    setIsErrDefectFrequencyRequired(false)
    setIsErrDefectDayBeforeRequired(false)
    setIsErrDefectJustBeforeRequired(false)
    setIsErrEmailCondition(false)
    setIsErrEmailCorrect(false)
    setIsErrEmailRequired(false)
    setIsErrEmailConfirm(false)
    setIsErrEmailConfirmRequired(false)
    setIsErrTel(false)
    setIsErrTelRequired(false)
    setIsErrPostalcode(false)
    setIsErrPostalcodeRequired(false)
    setIsErrAddress(false)
    setIsErrAddressRequired(false)
    setIsErrDetailRequired(false)
    setIsErrLendingRequired(false)
    setDisclaimerCheck(false)
    setPersonalInfoCheck(false)
    setReceptionFirstName('')
    setReceptionLastName('')
    setReceptionFirstNameKana('')
    setReceptionLastNameKana('')
    setImeiChecked(false)
    setReceptionImei('')
    setReceptionDefectType('')
    setReceptionDefectDate(formattedDate)
    setReceptionDefectFrequency('')
    setReceptionDefectDayBefore(
      Array.from({ length: defectDayBefore.length }, () => ''),
    )
    setReceptionDefectJustBefore(
      Array.from({ length: defectJustBefore.length }, () => ''),
    )
    setReceptionEmail('')
    setReceptionEmailConfirm('')
    setTelChecked(false)
    setReceptionTel('')
    setReceptionPostalcode('')
    setReceptionAddressByPostalcode('')
    setReceptionLending('')
    setConditionByHearingResult(null)
  }, [formattedDate])

  // modal内のratEventを再バインド
  useEffect(() => {
    if (typeof RAT !== 'undefined') {
      if (isModalExpanded) {
        const ratEventElms = RAT.$Selector('#js-modal-container').find(
          '[data-ratId]',
        )
        RAT.bindClick(ratEventElms)
      }
    }
  }, [isModalExpanded])

  // step2内のratEventを再バインド
  const isSkipRatBind = useRef(true)
  useEffect(() => {
    // 初回レンダリング時はスキップ(既に表示されてるratタグは再バインドしたくない)
    if (isSkipRatBind.current) {
      isSkipRatBind.current = false
      return
    }
    if (typeof RAT !== 'undefined') {
      const ratEventElms = RAT.$Selector(`#js-step${step}`).find('[data-ratId]')
      RAT.bind(ratEventElms)
    }
  }, [step])

  // scriptタグ埋め込み
  useEffect(() => {
    const script = document.createElement('script') as HTMLScriptElement
    script.type = 'text/javascript'
    script.src = 'https://ajaxzip3.github.io/ajaxzip3.js'
    script.async = false
    document.body.appendChild(script)
  }, [])

  // form送信
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault()
      // step2の情報が揃っている && modalが開いてるときのみsubmitできるように
      if (!isModalExpanded) {
        return
      }
      const form = e.target as HTMLFormElement
      form.submit()
    },
    [isModalExpanded],
  )

  // step1確認画面
  const Step1Confirm: React.FC = useCallback(() => {
    return (
      <div>
        <Heading level="2" as="h2">
          入力内容をご確認ください。
        </Heading>
        <p className={Utils['Mt-16']}>
          ご入力いただいた内容をご確認のうえ、次のお手続きへお進みください。
        </p>
        <CustomDescriptionList className={Utils['Mt-16']}>
          {hearingResultKeys.map(key => (
            <React.Fragment key={key}>
              {hearingResult[key] && (
                <div>
                  <dt>{hearingResultStatic[key].label}</dt>
                  <dd>{hearingResult[key]}</dd>
                </div>
              )}
            </React.Fragment>
          ))}
        </CustomDescriptionList>
        <BorderBox className={Utils['Mt-32']}>
          {conditionByHearingResult?.next === '修理受付フォーム' && (
            <>
              <Heading level="3" as="h3" className={Utils['Align-center']}>
                交換・修理受付
              </Heading>
              <p className={Utils['Mt-16']}>
                修理・交換の対象となりますので、次の画面にてご契約者様情報や故障の詳細をご入力ください。
              </p>
              <p className={Utils['Mt-16']}>
                購入から1年未満でも有償修理となる場合があります。
                <br />
                有償修理の場合、お見積り金額をメールにてお送りしますが、金額にご納得できない場合は無料でキャンセルが可能です。その際、製品保証オプションに加入されている方はオプションの利用もご検討ください。
              </p>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <ButtonSecondary
                  onClick={() => updateStep(2)}
                  type="button"
                  data-ratid="support_inquiry_repair-product_hearing_confirm_form"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  交換・修理受付へ進む
                </ButtonSecondary>
              </div>
            </>
          )}
          {(conditionByHearingResult?.next === 'スマホ交換保証プラスページ' ||
            conditionByHearingResult?.next ===
              '故障紛失保証 with AppleCare Servicesページ' ||
            conditionByHearingResult?.next ===
              'あんしん保証with AppleCare Services for Apple Watchページ' ||
            conditionByHearingResult?.next ===
              '持ち込みスマホあんしん保証ページ') && (
            <>
              <Heading level="3" as="h3" className={Utils['Align-center']}>
                保証サービスの利用
              </Heading>
              <p className={Utils['Mt-16']}>
                製品購入時に加入した保証オプションサービスを利用する場合、以下の利用方法をご確認ください。
              </p>
              {conditionByHearingResult.next ===
                'スマホ交換保証プラスページ' && (
                <p className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="/guide/replacement-warranty-plus/replacement-reception/"
                    target="_blank"
                    data-ratid="support_inquiry_repair-product_hearing_confirm_guide_replacement-warranty-plus_replacement-reception"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    スマホ交換保証プラス
                    <IconNewTabLine />
                  </LinkIconAfter>
                </p>
              )}
              {conditionByHearingResult.next ===
                '持ち込みスマホあんしん保証ページ' && (
                <p className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="/guide/replacement-warranty-sim/replacement-reception/"
                    target="_blank"
                    data-ratid="support_inquiry_repair-product_hearing_confirm_guide_replacement-warranty-sim_replacement-reception"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    持ち込みスマホあんしん保証
                    <IconNewTabLine />
                  </LinkIconAfter>
                </p>
              )}
              {conditionByHearingResult.next ===
                '故障紛失保証 with AppleCare Servicesページ' && (
                <p className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="/guide/iphone/applecare/"
                    target="_blank"
                    data-ratid="support_inquiry_repair-product_hearing_confirm_guide_iphone_applecare"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    故障紛失保証 with AppleCare Services
                    <IconNewTabLine />
                  </LinkIconAfter>
                </p>
              )}
              {conditionByHearingResult.next ===
                'あんしん保証with AppleCare Services for Apple Watchページ' && (
                <p className={Utils['Mt-16']}>
                  <LinkIconAfter
                    href="/guide/applewatch-care/"
                    target="_blank"
                    data-ratid="support_inquiry_repair-product_hearing_confirm_guide_applewatch-care"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    あんしん保証with AppleCare Services for Apple Watch
                    <IconNewTabLine />
                  </LinkIconAfter>
                </p>
              )}
            </>
          )}
          {conditionByHearingResult?.next ===
            '各製品メーカーへのお問い合わせページ' && (
            <>
              <Heading level="3" as="h3" className={Utils['Align-center']}>
                各製品メーカーへ
                <br className={Utils['Show-oox']} />
                お問い合わせ
              </Heading>
              <p className={Utils['Mt-16']}>
                ご利用製品のメーカーへお問い合わせください。
              </p>
              <p className={Utils['Mt-16']}>
                購入から1年未満でも修理代金が発生する場合があります。
                <br />
                メーカーから修理代金が発生すると判断された場合、製品保証オプションに加入されている方はオプションの利用もご検討ください。
              </p>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <ButtonSecondary
                  as="a"
                  href="/guide/inquiry/"
                  target="_blank"
                  data-ratid="support_inquiry_repair-product_hearing_confirm_guide_inquiry"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  各製品メーカーの
                  <br />
                  お問い合わせ先を確認する
                  <IconNewTabLine />
                </ButtonSecondary>
              </div>
            </>
          )}
          {conditionByHearingResult?.next === '楽天市場店ページ' && (
            <>
              <Heading level="3" as="h3" className={Utils['Align-center']}>
                楽天モバイル公式 楽天市場店へお問い合わせ
              </Heading>
              <p className={Utils['Mt-16']}>
                楽天モバイル公式 楽天市場店へお問い合わせください
              </p>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <ButtonSecondary
                  as="a"
                  href="https://www.rakuten.ne.jp/gold/rakutenmobile-store/help/"
                  target="_blank"
                  data-ratid="support_inquiry_repair-product_hearing_confirm_rakutenmobile-store_help"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  お問い合わせページへ進む
                  <IconNewTabLine />
                </ButtonSecondary>
              </div>
            </>
          )}
          {conditionByHearingResult?.next === '店舗ページ' && (
            <>
              <Heading level="3" as="h3" className={Utils['Align-center']}>
                ショップ（店舗）へ
                <br className={Utils['Show-oox']} />
                お問い合わせ
              </Heading>
              <p className={Utils['Mt-16']}>
                楽天モバイルショップで購入した製品で初期不良が発生した場合、ご購入いただいた店舗にて交換を受けて付けております。
                <br />
                来店予約も可能ですので、ご検討ください。
              </p>
              <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
                <ButtonSecondary
                  as="a"
                  href="/shop/"
                  target="_blank"
                  data-ratid="support_inquiry_repair-product_hearing_confirm_shop"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  ショップ（店舗）ページへ進む
                  <IconNewTabLine />
                </ButtonSecondary>
              </div>
            </>
          )}
        </BorderBox>
        <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
          <ButtonRegular
            onClick={() => updateModal(false)}
            type="button"
            data-ratid="support_inquiry_repair-product_hearing_confirm_back"
            data-ratevent="click"
            data-ratparam="all"
          >
            修正する
          </ButtonRegular>
        </div>
      </div>
    )
  }, [hearingResult, conditionByHearingResult, updateModal, updateStep])

  // step2確認画面
  const Step2Confirm: React.FC = useCallback(() => {
    return (
      <div>
        <Heading level="2" as="h2">
          入力内容をご確認ください。
        </Heading>
        <p className={Utils['Mt-16']}>
          ご入力いただいた内容をご確認のうえ、「送信する」ボタンをタップしてください。
        </p>
        <Heading level="3" as="h3" className={Utils['Mt-48']}>
          事前情報
        </Heading>
        <CustomDescriptionList className={Utils['Mt-16']}>
          {hearingResultKeys.map(key => (
            <React.Fragment key={key}>
              {hearingResult[key] && (
                <div>
                  <dt>{hearingResultStatic[key].label}</dt>
                  <dd>{hearingResult[key]}</dd>
                </div>
              )}
            </React.Fragment>
          ))}
        </CustomDescriptionList>
        <Heading level="3" as="h3" className={Utils['Mt-48']}>
          ご契約者情報
        </Heading>
        <CustomDescriptionList className={Utils['Mt-16']}>
          {receptionResultKeys.map(key => (
            <React.Fragment key={key}>
              {receptionResult[key].value && (
                <div>
                  <dt>{receptionResult[key].label}</dt>
                  <dd>
                    {key === 'defectSituation' ? (
                      <>
                        <p>{receptionResult[key].value?.date}</p>
                        <p>{receptionResult[key].value?.frequency}</p>
                        {receptionResult[key].value?.dayBefore?.map(
                          (val, idx) => (
                            <React.Fragment key={idx}>
                              {val && <p>{val}</p>}
                            </React.Fragment>
                          ),
                        )}
                        {receptionResult[key].value?.justBefore?.map(
                          (val, idx) => (
                            <React.Fragment key={idx}>
                              {val && <p>{val}</p>}
                            </React.Fragment>
                          ),
                        )}
                      </>
                    ) : (
                      <>{receptionResult[key].value}</>
                    )}
                  </dd>
                </div>
              )}
            </React.Fragment>
          ))}
        </CustomDescriptionList>
        <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
          <ButtonSecondary
            type="submit"
            data-ratid="support_inquiry_repair-product_form_confirm_submit"
            data-ratevent="click"
            data-ratparam="all"
          >
            送信する
          </ButtonSecondary>
        </div>
        <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
          <ButtonRegular
            onClick={() => updateModal(false)}
            type="button"
            data-ratid="support_inquiry_repair-product_form_confirm_back"
            data-ratevent="click"
            data-ratparam="all"
          >
            修正する
          </ButtonRegular>
        </div>
      </div>
    )
  }, [hearingResult, receptionResult, updateModal])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルで購入した製品の交換・修理に関するお問い合わせページです。"
        noindex={true}
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer className={Utils['Mt-24']}>
          <Heading level="1" as="h1">
            製品の交換・修理に関するお問い合わせ
          </Heading>
        </SystemContainer>

        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D2r000000CtMv"
          method="POST"
          onSubmit={handleSubmit}
        >
          <InquiryWrapper className={Utils['Mt-48']} id="js-inq-top">
            <SystemContainer>
              <input type="hidden" name="orgid" value="00D2r000000CtMv" />
              <input
                type="hidden"
                name="retURL"
                value="https://network.mobile.rakuten.co.jp/support/inquiry/repair-product/thanks/"
              />

              {/*  修理受付フォーム用のコード*/}
              <input type="hidden" name="recordType" value="0122x0000010qRi" />
              {/* 製品ページ用のコード */}
              <input type="hidden" name="00N2x000009J2rQ" value="製品" />
              {/* urlから取得*/}
              <input
                type="hidden"
                name="00N2x000009J2iT"
                value={errorCodeByQuery}
              />
              {step === 1 && (
                <div id="js-step1">
                  <Heading
                    level="2"
                    as="h2"
                    ratId="support_inquiry_repair-product_hearing"
                    ratEvent="appear"
                  >
                    事前情報をご入力ください。
                  </Heading>
                  <AttentionContainer className={Utils['Mt-16']}>
                    <Heading level="3" as="h3">
                      注意事項
                    </Heading>
                    <UlOnly className={Utils['Mt-16']}>
                      <li>
                        修理／交換の受付後は依頼のキャンセルができませんのでご注意ください。
                      </li>
                      <li>
                        楽天モバイル、もしくは楽天モバイル公式
                        楽天市場店で購入した製品が対象です。
                      </li>
                      <li>
                        譲渡品は譲渡元（購入者）からのご申告のみ修理／交換対応が可能です。ご購入者様の確認が取れない場合、修理／交換を受け付けておりません。
                      </li>
                      <li>中古品は修理／交換を受け付けておりません</li>
                      <li>
                        購入から1年未満でも修理代金が発生する場合があります。
                      </li>
                    </UlOnly>
                  </AttentionContainer>

                  <CustomDescriptionList className={Utils['Mt-32']}>
                    <div>
                      <dt>
                        {hearingResultStatic['place'].label}
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        <RadioWrapper>
                          <ButtonRadioNoborder
                            name={hearingResultStatic['place'].name}
                            select={inqPlaceList}
                            as="li"
                            onChangeCheck={val =>
                              val && updateHearingResultOne('place', val)
                            }
                          />
                        </RadioWrapper>
                      </dd>
                    </div>
                    <div>
                      <dt>
                        {hearingResultStatic['term'].label}
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        <TxtCap as="p">
                          ※店舗で購入の場合は購入からの期間、Webで購入の場合は製品到着からの期間をご選択ください。
                          <br />
                          ※楽天モバイルで購入した場合の確認方法は
                          <LinkIconAfter
                            href="https://network.mobile.rakuten.co.jp/faq/detail/00001911/?l-id=support_inquiry_repair-product_faq_00001911"
                            target="_blank"
                          >
                            こちら
                            <IconNewTabLine />
                          </LinkIconAfter>
                          。
                        </TxtCap>
                        <RadioWrapper className={Utils['Mt-16']}>
                          <ButtonRadioNoborder
                            name={hearingResultStatic['term'].name}
                            select={inqTermList}
                            as="li"
                            onChangeCheck={val =>
                              val && updateHearingResultOne('term', val)
                            }
                          />
                        </RadioWrapper>
                      </dd>
                    </div>
                    {isDisplayDamageRadio && (
                      <div>
                        <dt>
                          {hearingResultStatic['damage'].label}
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </dt>
                        <dd>
                          <TxtCap as="p">
                            ※落下などにより物理的な衝撃を与えてしまったことがある場合は、「あり」を選択してください。
                          </TxtCap>
                          <RadioWrapper className={Utils['Mt-16']}>
                            <ButtonRadioNoborder
                              name={hearingResultStatic['damage'].name}
                              select={inqDamageList}
                              as="li"
                              onChangeCheck={val =>
                                val && updateHearingResultOne('damage', val)
                              }
                            />
                          </RadioWrapper>
                        </dd>
                      </div>
                    )}
                    {isDisplayWarrantyRadio && (
                      <div>
                        <dt>
                          {hearingResultStatic['warranty'].label}
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </dt>
                        <dd>
                          <TxtCap as="p">
                            ※保証オプションの加入状況の確認方法は
                            <LinkIconAfter
                              href="/guide/change-options/?l-id=support_inquiry_repair-product_guide_change-options#contract_confirmation"
                              target="_blank"
                            >
                              こちら
                              <IconNewTabLine />
                            </LinkIconAfter>
                            。
                          </TxtCap>
                          <RadioWrapper className={Utils['Mt-16']}>
                            <ButtonRadioNoborder
                              name={hearingResultStatic['warranty'].name}
                              select={inqWarrantyList}
                              as="li"
                              onChangeCheck={val =>
                                val && updateHearingResultOne('warranty', val)
                              }
                            />
                          </RadioWrapper>
                        </dd>
                      </div>
                    )}
                    {isDisplayBrandRadio && (
                      <div>
                        <dt>
                          {hearingResultStatic['brand'].label}
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </dt>
                        <dd>
                          <RadioWrapper>
                            <ButtonRadioNoborder
                              name={hearingResultStatic['brand'].name}
                              select={inqBrandList}
                              as="li"
                              onChangeCheck={val => {
                                val && updateHearingResultOne('brand', val)
                              }}
                            />
                          </RadioWrapper>
                        </dd>
                      </div>
                    )}
                    {isDisplayProductRadio && (
                      <div>
                        <dt>
                          {hearingResultStatic['product'].label}
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </dt>
                        <dd>
                          <TxtCap as="p">
                            ※Rakuten
                            Miniの修理／交換受付は2023年11月28日に終了しました。
                            <br />
                            ※Rakuten
                            Handの修理／交換受付は2023年11月28日に終了しました。
                            <br />
                            ※Rakuten WiFi
                            Pocketの修理／交換受付は2023年3月31日に終了しました。
                            <br />
                            ※Rakuten
                            BIGの修理／交換受付は2024年4月19日に終了しました。
                          </TxtCap>
                          <RadioWrapper className={Utils['Mt-16']}>
                            <ButtonRadioNoborder
                              name={hearingResultStatic['product'].name}
                              select={inqProductList}
                              as="li"
                              onChangeCheck={val =>
                                val && updateHearingResultOne('product', val)
                              }
                            />
                          </RadioWrapper>
                        </dd>
                      </div>
                    )}
                  </CustomDescriptionList>
                  <div className={`${Utils['Mt-48']} ${Utils['Align-center']}`}>
                    <ButtonSecondary
                      aria-disabled={step1ConfirmBtnDisabled}
                      onClick={clickStep1Confirm}
                      type="button"
                      data-ratid="support_inquiry_repair-product_hearing_confirm"
                      data-ratevent="click"
                      data-ratparam="all"
                    >
                      入力内容を確認する
                    </ButtonSecondary>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div id="js-step2">
                  <input
                    type="hidden"
                    name={hearingResultStatic.place.name}
                    value={hearingResult.place}
                  />
                  <input
                    type="hidden"
                    name={hearingResultStatic.term.name}
                    value={hearingResult.term}
                  />
                  <input
                    type="hidden"
                    name={hearingResultStatic.damage.name}
                    value={hearingResult.damage}
                  />
                  <input
                    type="hidden"
                    name={hearingResultStatic.warranty.name}
                    value={hearingResult.warranty}
                  />
                  <input
                    type="hidden"
                    name={hearingResultStatic.brand.name}
                    value={hearingResult.brand}
                  />
                  {hearingResult.product && (
                    <input
                      type="hidden"
                      name={hearingResultStatic.product.name}
                      value={hearingResult.product}
                    />
                  )}
                  <ButtonLinkIconBefore
                    onClick={() => {
                      updateStep(1)
                      resetReceptionResult()
                    }}
                    type="button"
                    data-ratid="support_inquiry_repair-product_form_back"
                    data-ratevent="click"
                    data-ratparam="all"
                  >
                    <IconChevronLeft />
                    <span>事前情報の入力へ戻る</span>
                  </ButtonLinkIconBefore>
                  <Heading
                    level="3"
                    as="h3"
                    className={Utils['Mt-24']}
                    ratId="support_inquiry_repair-product_form"
                    ratEvent="appear"
                  >
                    交換・修理受付
                  </Heading>
                  <p className={Utils['Mt-16']}>
                    my
                    楽天モバイルの契約者情報にご登録されている内容を入力ください。
                  </p>
                  <CustomDescriptionList className={Utils['Mt-48']}>
                    <div>
                      <dt>
                        ご契約者氏名
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrLastNameRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            「姓」は必須項目です
                          </ErrorTxt>
                        )}
                        {isErrFirstNameRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            「名」は必須項目です
                          </ErrorTxt>
                        )}
                        <TxtCap as="p">
                          ※英字以外は全角で入力してください。
                        </TxtCap>
                        <FlexContainer className={Utils['Mt-16']}>
                          <TxtEmp01 className="w-fixed" as="p">
                            姓
                          </TxtEmp01>
                          <CustomTextInput
                            className={Utils['Ml-16']}
                            name="00N2x000009J2hk"
                            placeholder="例）楽天"
                            onBlur={val => {
                              setReceptionLastName(val)
                              setIsErrLastNameRequired(!val)
                            }}
                            isError={isErrLastNameRequired}
                          />
                        </FlexContainer>
                        <FlexContainer className={Utils['Mt-24']}>
                          <TxtEmp01 className="w-fixed" as="p">
                            名
                          </TxtEmp01>
                          <CustomTextInput
                            className={Utils['Ml-16']}
                            name="00N2x000009J2hu"
                            placeholder="例）太郎"
                            onBlur={val => {
                              setReceptionFirstName(val)
                              setIsErrFirstNameRequired(!val)
                            }}
                            isError={isErrFirstNameRequired}
                          />
                        </FlexContainer>
                      </dd>
                    </div>
                    <div>
                      <dt>
                        ご契約者氏名（カナ）
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrLastNameKanaRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            「セイ」は必須項目です
                          </ErrorTxt>
                        )}
                        {isErrLastNameKana && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            「セイ」は全角カタカナで入力してください
                          </ErrorTxt>
                        )}
                        {isErrFirstNameKanaRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            「メイ」は必須項目です
                          </ErrorTxt>
                        )}
                        {isErrFirstNameKana && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            「メイ」は全角カタカナで入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p">
                          ※全角カタカナで入力してください。
                        </TxtCap>
                        <FlexContainer className={Utils['Mt-16']}>
                          <TxtEmp01 className="w-fixed" as="p">
                            セイ
                          </TxtEmp01>
                          <CustomTextInput
                            className={Utils['Ml-16']}
                            name="00N2x000009J2hp"
                            placeholder="例）ラクテン"
                            onBlur={val => {
                              setReceptionLastNameKana(val)
                              setIsErrLastNameKana(!!chkKatakana(val))
                              setIsErrLastNameKanaRequired(!val)
                            }}
                            isError={
                              isErrLastNameKana || isErrLastNameKanaRequired
                            }
                          />
                        </FlexContainer>
                        <FlexContainer className={Utils['Mt-24']}>
                          <TxtEmp01 className="w-fixed" as="p">
                            メイ
                          </TxtEmp01>
                          <CustomTextInput
                            className={Utils['Ml-16']}
                            name="00N2x000009J2hz"
                            placeholder="例）タロウ"
                            onBlur={val => {
                              setReceptionFirstNameKana(val)
                              setIsErrFirstNameKana(!!chkKatakana(val))
                              setIsErrFirstNameKanaRequired(!val)
                            }}
                            isError={
                              isErrFirstNameKana || isErrFirstNameKanaRequired
                            }
                          />
                        </FlexContainer>
                      </dd>
                    </div>
                    <div>
                      <dt>
                        ご契約電話番号
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrContractTelRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrContractTel && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            半角数字11文字で入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p">
                          ※半角数字11文字で入力してください。
                          <br />
                          ※-（ハイフン）を入れずに入力ください。
                        </TxtCap>
                        <CustomTextInput
                          className={Utils['Mt-16']}
                          name="00N2x000009J2i4"
                          placeholder="例）090XXXXXXXX"
                          onBlur={val => {
                            updateReceptionResultOne('contractTel', val)
                            setIsErrContractTel(
                              !!chkNumeric(val) || !!chkLength(val, 11, 11),
                            )
                            setIsErrContractTelRequired(!val)
                          }}
                          isError={isErrContractTel || isErrContractTelRequired}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        ご契約者生年月日
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        <DateTimePicker
                          name="00N2x000009J2i9"
                          callback={val =>
                            val && updateReceptionResultOne('birthday', val)
                          }
                          startDateCustom="today"
                          option={{ selectedView: 'year' }}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        製品のIMEI（製造番号）
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrImeiRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrImei && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            半角数字15文字で入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p">
                          ※半角数字15桁で入力してください。ご入力いただくと修理受付や製品交換までの時間が短縮されます。
                          <br />
                          ※製品のIMEI（製造番号）が複数ある場合は、「IMEI」または「IMEI1」の番号をご入力ください。
                        </TxtCap>
                        <AccordionList
                          text="IMEI（製造番号）の調べ方を見る"
                          isOpened={false}
                          className={Utils['Mt-16']}
                        >
                          <div>
                            <p>
                              製品のIMEIを確認したい場合は、以下のよくあるご質問ページをご確認ください。
                            </p>
                            <p>
                              <LinkIconAfter
                                href="https://network.mobile.rakuten.co.jp/faq/detail/10000283/"
                                target="_blank"
                              >
                                製品のIMEIを確認したい
                                <IconNewTabLine />
                              </LinkIconAfter>
                            </p>
                          </div>
                        </AccordionList>
                        <Checkbox
                          text="製品のIMEIを確認できない"
                          value="1"
                          inputName="00N2x000009J2iJ"
                          onChangeCheck={checked => {
                            if (typeof checked !== 'undefined') {
                              setImeiChecked(checked)
                              if (!checked) {
                                setIsErrImeiRequired(true)
                              }
                            }
                          }}
                          className={Utils['Mt-16']}
                        />
                        <CustomTextInput
                          className={Utils['Mt-16']}
                          name="00N2x000009J2iE"
                          placeholder="例）123456789012345"
                          disabled={imeiChecked}
                          onBlur={val => {
                            updateReceptionResultOne('imei', val)
                            setReceptionImei(val)
                            setIsErrImei(
                              !!chkNumeric(val) || !!chkLength(val, 15, 15),
                            )
                            setIsErrImeiRequired(!(val || imeiChecked))
                          }}
                          isError={isErrImei || isErrImeiRequired}
                          valueByExternal={receptionImei}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        不具合の種類
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrDefectTypeRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        <Select
                          name="00N2x000009J2iY"
                          className={Utils['Mt-16']}
                          currentSelected={receptionDefectType}
                          onSelectedChange={val => {
                            if (typeof val !== 'string') {
                              return
                            }
                            updateReceptionResultOne('defectType', val)
                            setReceptionDefectType(val)
                            setIsErrDefectTypeRequired(!val)
                          }}
                          onBlurCallback={val => {
                            setIsErrDefectTypeRequired(!val)
                          }}
                          options={(() => {
                            return [
                              {
                                text: '選択してください',
                                value: '',
                                disabled: true,
                                selected: true,
                              },
                              ...defectTypes.map(defectType => ({
                                text: defectType,
                                value: defectType,
                              })),
                            ]
                          })()}
                          isError={isErrDefectTypeRequired}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        不具合の発生状況
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        <TxtEmp01 as="p">不具合の発生日</TxtEmp01>
                        <DateTimePicker
                          name="00N2x000009J2id"
                          callback={val => val && setReceptionDefectDate(val)}
                          startDateCustom="today"
                          className={Utils['Mt-16']}
                        />
                        <TxtEmp01 as="p" className={Utils['Mt-24']}>
                          不具合の発生頻度
                        </TxtEmp01>
                        {isErrDefectFrequencyRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        <Select
                          name="00N2x000009J2ii"
                          className={Utils['Mt-16']}
                          currentSelected={receptionDefectFrequency}
                          onSelectedChange={val => {
                            if (typeof val !== 'string') {
                              return
                            }
                            setReceptionDefectFrequency(val)
                            setIsErrDefectFrequencyRequired(!val)
                          }}
                          onBlurCallback={val => {
                            setIsErrDefectFrequencyRequired(!val)
                          }}
                          options={(() => {
                            return [
                              {
                                text: '選択してください',
                                value: '',
                                disabled: true,
                                selected: true,
                              },
                              ...defectFrequencies.map(defectFrequency => ({
                                text: defectFrequency,
                                value: defectFrequency,
                              })),
                            ]
                          })()}
                          isError={isErrDefectFrequencyRequired}
                        />
                        <TxtEmp01 as="p" className={Utils['Mt-24']}>
                          不具合発生の前日に行った操作
                        </TxtEmp01>
                        {isErrDefectDayBeforeRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        <div>
                          {defectDayBefore.map((val, key) => (
                            <div key={key} className={Utils['Mt-16']}>
                              <Checkbox
                                text={val}
                                value={val}
                                inputName="00N2x000009J94a"
                                onChangeCheck={checked => {
                                  setReceptionDefectDayBefore(prev => {
                                    const arr = [...prev]
                                    arr[key] = checked ? val : ''
                                    setIsErrDefectDayBeforeRequired(
                                      !arr.some(val => val !== ''),
                                    )
                                    return arr
                                  })
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        <TxtEmp01 as="p" className={Utils['Mt-24']}>
                          不具合発生の直前に行った操作
                        </TxtEmp01>
                        {isErrDefectJustBeforeRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        <div>
                          {defectJustBefore.map((val, key) => (
                            <div key={key} className={Utils['Mt-16']}>
                              <Checkbox
                                text={val}
                                value={val}
                                inputName="00N2x000009J94f"
                                onChangeCheck={checked => {
                                  setReceptionDefectJustBefore(prev => {
                                    const arr = [...prev]
                                    arr[key] = checked ? val : ''
                                    setIsErrDefectJustBeforeRequired(
                                      !arr.some(val => val !== ''),
                                    )
                                    return arr
                                  })
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </dd>
                    </div>
                    <div>
                      <dt>
                        返信用メールアドレス
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        <TxtEmp01 as="p">メールアドレス</TxtEmp01>
                        {isErrEmailRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrEmailCondition && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            半角80文字以内で入力してください
                          </ErrorTxt>
                        )}
                        {isErrEmailCorrect && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            正しいメールアドレスを入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※ご入力いただいたメールアドレスへご連絡いたします
                          <br />
                          ※半角80文字以内で入力してください。
                        </TxtCap>
                        <CustomTextInput
                          className={Utils['Mt-16']}
                          name="00N2x000009J2is"
                          placeholder="例）example@example.com"
                          onBlur={val => {
                            setReceptionEmail(val)
                            setIsErrEmailCondition(!!chkLength(val, 0, 80))
                            setIsErrEmailCorrect(!!chkEmail(val))
                            setIsErrEmailRequired(!val)
                          }}
                          isError={
                            isErrEmailCondition ||
                            isErrEmailCorrect ||
                            isErrEmailRequired
                          }
                        />
                        <TxtEmp01 as="p" className={Utils['Mt-24']}>
                          確認用
                        </TxtEmp01>
                        {isErrEmailConfirmRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrEmailConfirm && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            メールアドレスが一致していません
                          </ErrorTxt>
                        )}
                        <CustomTextInput
                          className={Utils['Mt-16']}
                          placeholder="例）example@example.com"
                          onBlur={val => {
                            setReceptionEmailConfirm(val)
                            setIsErrEmailConfirmRequired(!val)
                          }}
                          isError={
                            isErrEmailConfirm || isErrEmailConfirmRequired
                          }
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        連絡用電話番号
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrTelRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrTel && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            半角数字で入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※半角数字で入力してください。
                          <br />
                          ※-（ハイフン）を入れずに入力ください。
                        </TxtCap>
                        <Checkbox
                          text="ご契約電話番号と同じ"
                          inputName="00N2x000009J2j2"
                          value="1"
                          onChangeCheck={checked => {
                            if (typeof checked !== 'undefined') {
                              setTelChecked(checked)
                              if (!checked) {
                                setIsErrTelRequired(true)
                              }
                            }
                          }}
                          className={Utils['Mt-16']}
                        />
                        <CustomTextInput
                          className={Utils['Mt-16']}
                          name="00N2x000009J2ix"
                          placeholder="例）090XXXXXXXX"
                          onBlur={val => {
                            updateReceptionResultOne('tel', val)
                            setReceptionTel(val)
                            setIsErrTel(
                              !!chkNumeric(val) || !!chkLength(val, 11, 11),
                            )
                            setIsErrTelRequired(!(val || telChecked))
                          }}
                          disabled={telChecked}
                          isError={isErrTel || isErrTelRequired}
                          valueByExternal={receptionTel}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        送付先住所
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        <div>
                          <TxtEmp01>郵便番号</TxtEmp01>
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </div>
                        {isErrPostalcodeRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrPostalcode && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            半角数字7文字で入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※半角数字7文字で入力してください。
                          <br />
                          ※-（ハイフン）を入れずに入力ください。
                        </TxtCap>
                        <CustomTextInput
                          className={Utils['Mt-16']}
                          name="00N2x000009J2j7"
                          placeholder="例）1580094"
                          onBlur={val => {
                            setReceptionPostalcode(val)
                            setIsErrPostalcode(
                              !!chkNumeric(val) || !!chkLength(val, 7, 7),
                            )
                            setIsErrPostalcodeRequired(!val)
                          }}
                          isError={isErrPostalcode || isErrPostalcodeRequired}
                        />
                        <div
                          className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
                        >
                          <ButtonRegular
                            onClick={getAddressByPostalcode}
                            type="button"
                          >
                            郵便番号から住所表示
                          </ButtonRegular>
                        </div>
                        <div className={Utils['Mt-24']}>
                          <TxtEmp01>住所</TxtEmp01>
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </div>
                        {isErrAddressRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        {isErrAddress && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            255文字以内で入力してください
                          </ErrorTxt>
                        )}
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※255文字以内で入力してください。
                        </TxtCap>
                        <CustomTextInput
                          id="js-input-address"
                          name="00N2x000009J2jC"
                          className={Utils['Mt-16']}
                          placeholder="例）東京都世田谷区玉川1-14-1"
                          onBlur={val => {
                            updateReceptionResultOne('address', val)
                            setIsErrAddress(!!chkLength(val, 0, 255))
                            setIsErrAddressRequired(!val)
                          }}
                          isError={isErrAddress || isErrAddressRequired}
                          valueByExternal={receptionAddressByPostalcode}
                        />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        修理依頼の詳細
                        <RequiredLabel className={Utils['Ml-8']}>
                          必須
                        </RequiredLabel>
                      </dt>
                      <dd>
                        {isErrDetailRequired && (
                          <ErrorTxt
                            className={`${Utils['Mb-16']} js-error-flg`}
                            as="p"
                          >
                            必須項目です
                          </ErrorTxt>
                        )}
                        <TxtCap as="p" className={Utils['Mt-16']}>
                          ※お困りごとを詳細にご入力ください（お困りごと詳細／発生時状況
                          等）。
                          <br />
                          ※複数ある場合もこちらにご入力ください。
                          <br />
                          ※255文字以内で入力してください。
                          <br />
                          ※内容に不足がある場合、お電話にて詳細を確認させていただく場合があります。
                        </TxtCap>
                        <CustomTextarea
                          className={Utils['Mt-16']}
                          name="00N2x000009J2qX"
                          rows={3}
                          maxLength={255}
                          onBlur={val => {
                            updateReceptionResultOne('detail', val)
                            setIsErrDetailRequired(!val)
                          }}
                          isError={isErrDetailRequired}
                        />
                      </dd>
                    </div>
                    {conditionByHearingResult?.lending === 'true' && (
                      <div>
                        <dt>
                          代替機の貸し出し
                          <RequiredLabel className={Utils['Ml-8']}>
                            必須
                          </RequiredLabel>
                        </dt>
                        <dd>
                          {isErrLendingRequired && (
                            <ErrorTxt
                              className={`${Utils['Mb-16']} js-error-flg`}
                              as="p"
                            >
                              必須項目です
                            </ErrorTxt>
                          )}
                          <Select
                            name="00N2x000009J2jH"
                            className={Utils['Mt-16']}
                            currentSelected={receptionLending}
                            onSelectedChange={val => {
                              if (typeof val !== 'string') {
                                return
                              }
                              updateReceptionResultOne('lending', val)
                              setReceptionLending(val)
                              setIsErrLendingRequired(!val)
                            }}
                            onBlurCallback={val => {
                              setIsErrLendingRequired(!val)
                            }}
                            options={[
                              {
                                text: '選択してください',
                                value: '',
                                disabled: true,
                              },
                              { text: '希望する', value: '希望する' },
                              { text: '希望しない', value: '希望しない' },
                            ]}
                            isError={isErrLendingRequired}
                          />
                        </dd>
                      </div>
                    )}
                  </CustomDescriptionList>
                  <div className={Utils['Mt-48']}>
                    {isErrAgreeToTheRepairDisclaimer && (
                      <ErrorTxt
                        className={`${Utils['Mb-16']} js-error-flg`}
                        as="p"
                      >
                        必須項目です
                      </ErrorTxt>
                    )}
                    <div>
                      <CheckboxFreed
                        value="1"
                        onChangeCheck={checked => {
                          if (typeof checked !== 'undefined') {
                            setDisclaimerCheck(checked)
                          }
                          setIsErrAgreeToTheRepairDisclaimer(disclaimerCheck)
                        }}
                      >
                        「
                        <LinkIconAfter
                          href={conditionByHearingResult?.disclaimer}
                          target="_blank"
                        >
                          修理免責事項
                          <IconNewTabLine />
                        </LinkIconAfter>
                        」を確認しました
                      </CheckboxFreed>
                    </div>
                    {isErrAgreeToTheHandlingOfPersonalInformation && (
                      <ErrorTxt
                        className={`${Utils['Mt-16']} js-error-flg`}
                        as="p"
                      >
                        必須項目です
                      </ErrorTxt>
                    )}
                    <div>
                      <CheckboxFreed
                        value="1"
                        onChangeCheck={checked => {
                          if (typeof checked !== 'undefined') {
                            setPersonalInfoCheck(checked)
                          }
                          setIsErrAgreeToTheHandlingOfPersonalInformation(
                            personalInfoCheck,
                          )
                        }}
                        className={Utils['Mt-16']}
                      >
                        「
                        <LinkIconAfter
                          href="https://corp.mobile.rakuten.co.jp/guide/privacy/"
                          target="_blank"
                        >
                          個人情報の取り扱い
                          <IconNewTabLine />
                        </LinkIconAfter>
                        」に同意しました
                      </CheckboxFreed>
                    </div>
                    <TxtCap as="p" className={Utils['Mt-32']}>
                      ※マイナポータルアプリでスマホ用電子証明書を登録している方は、修理・交換の前にマイナポータルアプリからスマホ用電子証明書の失効手続きを行うことが法律により義務付けられています。
                    </TxtCap>
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      <LinkIconAfter
                        href="https://img.myna.go.jp/manual/04-02/0209.html"
                        target="_blank"
                      >
                        スマホ用電子証明書の利用停止を行う方法
                        <IconNewTabLine />
                      </LinkIconAfter>
                    </TxtCap>
                    <div
                      className={`${Utils['Mt-32']} ${Utils['Align-center']}`}
                    >
                      <ButtonSecondary
                        onClick={clickStep2Confirm}
                        aria-disabled="false"
                        type="button"
                        data-ratid="support_inquiry_repair-product_form_confirm"
                        data-ratevent="click"
                        data-ratparam="all"
                      >
                        入力内容を確認する
                      </ButtonSecondary>
                    </div>
                  </div>
                </div>
              )}
            </SystemContainer>
          </InquiryWrapper>

          <Modal
            flag={isModalExpanded}
            switchFlag={toggleModalExpanded}
            id="js-modal-container"
            wrapperId="js-modal-top"
          >
            <ModalContent>
              {step === 1 && <Step1Confirm />}
              {step === 2 && <Step2Confirm />}
            </ModalContent>
          </Modal>
        </form>

        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapper>
    </>
  )
}
export default SupportInquiryRepairproduct
