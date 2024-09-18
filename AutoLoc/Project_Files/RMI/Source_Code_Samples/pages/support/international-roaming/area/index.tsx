import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { LinkIconAfter, LinkNormal } from '@components/atoms/Link'
import Utils from '@styles/Utils.module.scss'
import { CustomHead } from '@components/utils/CustomHead'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { Heading } from '@components/atoms/Heading'
import { ButtonRegular, ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { AccordionList } from '@components/atoms/AccordionList'
import { TxtCap, TxtSize } from '@components/atoms/Txt'
import { BoxApp, AppIcon, AppTxt, AppTtl, AppLink } from '@components/atoms/Box'
import {
  StoreButtonAppStore,
  StoreButtonGooglePlay,
} from '@components/atoms/StoreButton'
import { mixins } from '@components/utils/Mixins'
import axios from 'axios'
import { ButtonRadioNoborder } from '@components/atoms/ButtonRadioNoborder'
import { Select } from '@components/atoms/Select'
import { DescriptionListDefault } from '@components/atoms/DescriptionList'
import { InfoboxBorder } from '@components/atoms/Infobox'
import { Scrollhint } from '@components/atoms/Scrollhint'
import { Table } from '@components/atoms/Table'
import { IconNewTabLine } from '@components/icons'
import { ServiceGlobalBnr } from '@components/include/common/ServicesGlobalBnr'

const SystemWrapperCustom = styled(SystemWrapper)`
  .roaming-Layout_Word-keep {
    word-wrap: break-word;
  }
  .c-Txt_Weight-normal {
    font-weight: normal;
  }
  .roaming-Layout_Txt-emp {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
`

const GuideWrap = styled.div`
  padding: 32px 0 64px;
`
const CountryList = styled.ul`
  > li {
    margin: 0 0 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  ${mixins.mq.MinL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    > li {
      padding-right: 16px;
    }
  }
`
const SelectCustom = styled(Select)`
  max-width: 342px;
`
const TableCustom = styled.table`
  .txt-emp {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
  .th-emp {
    background-color: ${props => props.theme.colors.pink5};
  }
`
const NonSupported = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 185px;
`
const ButtonRegularCustom = styled(ButtonRegular)`
  ${mixins.mq.MaxM} {
    min-width: 160px;
    width: auto;
  }
`
const SupportInternationalroamingArea: NextPage = () => {
  const pagetitle = '海外ローミング　対応エリア・料金'
  const directories = [{ path: 'support/', label: 'お客様サポート' }]
  const breadcrumbs = [
    {
      text: 'トップ',
      url: '/',
    },
    {
      text: 'お客様サポート',
      url: '/support/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  type TargetMobiles = {
    [key: string]: string[]
  }
  const targetMobiles: TargetMobiles = {
    SHARP: [
      'SH-RM12 Sense3 lite',
      'SH-RM11 Sense3 plus',
      'SH-M05',
      'SH-M06',
      'SH-M07',
      'SH-M08',
      'SH-M09',
      'SH-M10',
      'AQUOS R5G',
      'AQUOS sense4 lite',
      'AQUOS sense4 plus',
      'AQUOS zero6',
      'AQUOS sense6',
      'AQUOS sense5G',
      'AQUOS wish',
      'AQUOS wish3',
      'AQUOS sense6s',
      'AQUOS sense7',
      'AQUOS sense8',
    ],
    FUJITSU: ['Arrows RX'],
    SONY: [
      'Xperia Ace',
      'Xperia 10 III Lite',
      'Xperia 10 IV',
      'Xperia 10 V',
      'Xperia 5 IV',
      'Xperia 5 V',
    ],
    OPPO: [
      'A5',
      'A55s 5G',
      'A73',
      'AX7',
      'Find X',
      'R17 PRO',
      'Reno 10x Zoom',
      'Reno A',
      'Reno3 A',
      'Reno5 A',
      'Reno7 A',
      'Reno9 A',
    ],
    Samsung: [
      'Galaxy A7',
      'Galaxy Note 10＋',
      'Galaxy S10',
      'Galaxy Z Flip4',
      'Galaxy A23 5G',
      'Galaxy S23',
    ],
    Huawei: ['nova 5T', 'P 30 lite', 'nova lite 3'],
    Rakuten: [
      'Rakuten Mini 製造番号（IMEI）351676110356708以前の製品',
      'Rakuten Mini 製造番号（IMEI）351676110356716～351676110680487の製品',
      'Rakuten Mini 製造番号（IMEI）351676110682491以降の製品',
      'Rakuten BIG',
      'Rakuten BIG s',
      'Rakuten Hand',
      'Rakuten Hand 5G',
      'Rakuten WiFi Pocket 2B',
      'Rakuten WiFi Pocket 2C',
    ],
    Xiaomi: ['Redmi Note 11 Pro 5G'],
    Apple: [
      'iPhone 6s',
      'iPhone 6s Plus',
      'iPhone 7',
      'iPhone 7 Plus',
      'iPhone 8',
      'iPhone 8 Plus',
      'iPhone X',
      'iPhone XR',
      'iPhone XS',
      'iPhone XS Max',
      'iPhone 11',
      'iPhone 11 Pro',
      'iPhone 11 Pro Max',
      'iPhone 12 Pro',
      'iPhone 12 Pro Max',
      'iPhone 12',
      'iPhone 12 mini',
      'iPhone SE',
      'iPhone SE（第2世代）',
      'iPhone SE（第3世代）',
      'iPhone 13',
      'iPhone 13 mini',
      'iPhone 13 Pro',
      'iPhone 13 Pro Max',
      'iPhone 14 Pro Max',
      'iPhone 14 Pro',
      'iPhone 14 Plus',
      'iPhone 14',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15 Plus',
      'iPhone 15',
    ],
  }
  interface KeyStringObj {
    [key: string]: string
  }
  interface SelectedCountryItem {
    country_name: string
    detail: KeyStringObj
  }
  interface BaseObj {
    [key: string]: {
      name: string
      countries: SelectedCountryItem[]
    }
  }
  interface RoamingItem {
    [key: string]: {
      name: string
      countries: SelectedCountryItem[]
    }
  }
  const [roamingDataState, updateRoamingDataState] = useState<RoamingItem>({})
  const [selectedCountryState, updateSelectedCountryState] = useState<
    SelectedCountryItem[]
  >([])
  const [rakutenState, updateRakutenState] = useState(false)
  const [selectedMakerState, updateSelectedMakerState] = useState('')
  const [selectedMobileState, updateSelectedMobileState] = useState('')
  const [pressedState, updatePressedStaste] = useState(false)
  //const [mobileDateState, updateMobileDateState] = useState({}) /* 機能復活時のために念の為残し */
  const [supportedState, updateSupportedState] = useState(false)

  const handleRest = () => {
    updatePressedStaste(false)
    updateSupportedState(false)
  }

  const countryfilter = (data: SelectedCountryItem[]) => {
    let countryArray: string[] = []
    data.forEach(element => {
      countryArray.push(element.country_name + '.' + element.detail.Country_JP)
    })
    const countryNameData = countryArray.filter(function (x, i, self) {
      return self.indexOf(x) === i
    })
    return countryNameData
  }
  const selectCountry = (val?: string, id?: string) => {
    if (val) {
      const items = roamingDataState[val].countries
      const filterItems = items.filter(data => data.country_name === id)
      updateSelectedCountryState(filterItems)
      handleRest()
    }
  }

  const enName = (name: string) => {
    const enName = name.split('.')[0]
    return enName
  }
  const jpName = (name: string) => {
    const jpName = name.split('.')[1]
    return jpName
  }
  const getAllMobiles = (data: TargetMobiles) => {
    if (!data) return

    let arr: KeyStringObj[] = []

    Object.keys(data).forEach((key, i) => {
      const mapped = data[key].map(val => {
        return {
          name: val,
          value: `${key}/${val}`,
        }
      })

      arr = arr.concat(mapped)
    })

    return arr
  }
  const getMobilesForMaker = (maker: string) => {
    const mapped = targetMobiles[maker].map(val => {
      return {
        name: val,
        value: `${maker}/${val}`,
      }
    })

    return mapped
  }

  const mobilesForMaker = selectedMakerState
    ? getMobilesForMaker(selectedMakerState)
    : getAllMobiles(targetMobiles)

  const checkUtilizationSituation = () => {
    updatePressedStaste(true)
    let support: string[] = []

    selectedCountryState.forEach(data => {
      const split = data.detail[selectedMobileState].split('/')
      /*updateMobileDateState({ // 機能復活時のために念の為残し
        '4g': split[0],
        '3g': split[1],
      })*/

      data.detail.VCS_Launched === 'NO' ? support.push('0') : support.push('1')

      if (split[0] === '' || (undefined && split[1] === '') || undefined) {
        support.push('0')
      } else {
        support.push(split[0])
        support.push(split[1])
      }
    })

    const supportFilter = support.filter(function (x, i, self) {
      return self.indexOf(x) === i
    })

    const supported = supportFilter.join('')
    supported === '0' ? updateSupportedState(false) : updateSupportedState(true)
  }
  const isIndia = () => {
    return selectedCountryState[0].country_name === 'India' ? true : false
  }
  const isIos = (flag?: string) => {
    const mobileMaker = selectedMobileState.split('/')[0]
    if (mobileMaker === 'Apple') {
      return true
    } else {
      return false
    }
  }
  const isIosNote = () => {
    const filtered = selectedCountryState.filter(elem => {
      if (
        parseInt(elem.detail[selectedMobileState].split('/')[0], 10) >= 1 ||
        parseInt(elem.detail[selectedMobileState].split('/')[1], 10) >= 1 ||
        parseInt(elem.detail[selectedMobileState].split('/')[2], 10) >= 1 ||
        parseInt(elem.detail[selectedMobileState].split('/')[7], 10) >= 1
      ) {
        return true
      } else {
        return false
      }
    })
    if (filtered.length) {
      return true
    } else {
      return false
    }
  }

  /*const isAllSupport = () => { // 機能復活時のため念の為残し
    let os: string[] = []
    selectedCountryState.forEach(data => {
      os.push(data.detail.VCS_Launched)
    })
    const osFilter = os.filter(function (x, i, self) {
      return self.indexOf(x) === i
    })
    if (osFilter.length === 1) {
      return osFilter[0] === 'NO' ? false : true
    } else {
      return true
    }
  }*/
  const isLinkPrice = () => {
    let price: string[] = []
    selectedCountryState.forEach(data => {
      price.push(data.detail[selectedMobileState].split('/')[0])
      price.push(data.detail[selectedMobileState].split('/')[1])
      price.push(data.detail[selectedMobileState].split('/')[2])
      price.push(data.detail[selectedMobileState].split('/')[7])
    })
    const priceFilter = price.filter(function (x, i, self) {
      return self.indexOf(x) === i
    })

    if (priceFilter.length === 1) {
      return priceFilter[0] === '0' ? false : true
    } else {
      return true
    }
  }
  const isRemarkTarget = () => {
    const countries = [
      'アメリカ（本土）',
      'アラスカ',
      'ハワイ',
      'プエルトリコ',
      '米領バージン諸島',
    ]
    const mobiles = [
      'Rakuten/Rakuten WiFi Pocket',
      'Rakuten/Rakuten WiFi Pocket 2B',
      'Rakuten/Rakuten WiFi Pocket 2C',
    ]
    return (
      countries.includes(selectedCountryState[0].detail.Country_JP) &&
      mobiles.includes(selectedMobileState)
    )
  }
  const getIsTmobileNoteFlg = () => {
    const split = selectedCountryState[0].detail[selectedMobileState].split('/')
    if (
      split[3] === '1' &&
      split[2] === '0' &&
      selectedCountryState[0].detail.Network_Display_Name_on_Handset ===
        'T-Mobile / 310260'
    ) {
      return true
    } else {
      return false
    }
  }
  const isTmobileRule = () => {
    if (getIsTmobileNoteFlg() && !isIos() && !isIndia()) {
      return true
    } else {
      return false
    }
  }
  const isVolteRule = (elm?: SelectedCountryItem) => {
    if (elm) {
      const split = elm.detail[selectedMobileState].split('/')
      if (split[6] === '1' && split[3] === '1') {
        return true
      } else {
        return false
      }
    } else {
      return selectedCountryState.some(e => {
        const split = e.detail[selectedMobileState].split('/')
        return split[6] === '1' && split[3] === '1'
      })
    }
  }
  const convertSelectedCountryAllData = (price?: string) => {
    const isSupportInfo = selectedCountryState.find(country => {
      // numberではなく文字列へ変更。 >= 1 から === '1'
      return (
        country.detail[selectedMobileState].split('/')[0] === '1' ||
        country.detail[selectedMobileState].split('/')[1] === '1' ||
        country.detail[selectedMobileState].split('/')[2] === '1' ||
        country.detail[selectedMobileState].split('/')[7] === '1'
      )
    })
    if (isSupportInfo && price) {
      return isSupportInfo.detail[price]
    } else if (isSupportInfo) {
      return true
    } else {
      return false
    }
  }
  const convertSelectedCountry = (num: number, price: string) => {
    const isSupportInfo = selectedCountryState.find(country => {
      return country.detail[selectedMobileState].split('/')[num] === '1'
    })
    return isSupportInfo ? `${isSupportInfo.detail[price]}円` : '非対応'
  }
  const isVolteRuleSMS = (elm?: SelectedCountryItem) => {
    if (elm) {
      const split = elm.detail[selectedMobileState].split('/')
      if (split[6] === '1' && split[4] === '1') {
        return true
      } else {
        return false
      }
    } else {
      return selectedCountryState.some(e => {
        const split = e.detail[selectedMobileState].split('/')
        return split[6] === '1' && split[4] === '1'
      })
    }
  }
  const convertSelectedCountryForSupportIphone = () => {
    const isSupportInfo = selectedCountryState.find(country => {
      return (
        country.detail[selectedMobileState].split('/')[4] === '0' &&
        country.detail[selectedMobileState].split('/')[5] === '1'
      )
    })
    return isSupportInfo
  }

  useEffect(() => {
    const getCountryData = (data: KeyStringObj) => {
      const object: SelectedCountryItem = {
        country_name: '',
        detail: {},
      }
      Object.keys(data).forEach(key => {
        if (key === 'Region') {
          return
        }
        if (key === 'Country_EN') {
          object.country_name = data[key]
        } else {
          object.detail[key] = data[key]
        }
      })
      return object
    }
    const getRegionID = (region: string) => {
      let response = ''
      switch (region) {
        case 'ヨーロッパ':
          response = 'europe'
          break
        case '中東':
          response = 'middle_east'
          break
        case 'アフリカ':
          response = 'africa'
          break
        case '中南米':
          response = 'latin_america'
          break
        case 'アジア':
          response = 'asia'
          break
        case 'オセアニア':
          response = 'oceania'
          break
        case '北米':
          response = 'north_america'
          break
        default:
          response = 'north_america'
      }
      return response
    }
    const targetRegions = [
      '北米',
      'アジア',
      'ヨーロッパ',
      'オセアニア',
      '中東',
      '中南米',
      'アフリカ',
    ]
    const createRoamingData = (jsonData: KeyStringObj[], object: BaseObj) => {
      jsonData.forEach((data: KeyStringObj) => {
        const countryData = getCountryData(data)
        const regionID = getRegionID(data.Region)
        if (regionID) {
          object[regionID].countries.push(countryData)
        }
      })
      return object
    }
    const createBaseObject = () => {
      const object: BaseObj = {}
      targetRegions.forEach(region => {
        const regionID = getRegionID(region)
        if (regionID) {
          object[regionID] = {
            name: region,
            countries: [],
          }
        }
      })
      return object
    }
    const getJson = async () => {
      const res = await axios.get(`${assets}json/roaming-area.json`)
      const data = res.status === 200 ? res.data : []
      return data
    }
    getJson()
      .then(response => {
        const baseObject = createBaseObject()
        //console.log(response) /* for debugging */
        updateRoamingDataState(createRoamingData(response, baseObject))
      })
      .catch(err => {
        console.log(err)
      })

    //console.log(selectedCountryState) /* for debugging */
    //console.log(selectedMobileState) /* for debugging */
  }, [selectedCountryState, updateSelectedMobileState, selectedMobileState])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="海外渡航先での、お客様がご利用の製品の利用可否、データ通信の利用可否を調べることができます。"
      />
      <SystemWrapperCustom>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />

        <SystemContainer>
          <GuideWrap>
            <Heading level="1">{pagetitle}</Heading>
            <p className={Utils['Mt-16']}>
              海外渡航先で楽天モバイル（Rakuten最強プラン）をご利用の場合の、国や地域ごとのご利用中製品の利用可否、データ通信や国際通話、国際SMSの料金をご確認いただけます。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※アメリカ（本土）・アラスカ・ハワイ・プエルトリコ・米領バージン諸島の地域の着信料金は、2023年4月1日より195円／分となります。
            </TxtCap>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※「
              <LinkIconAfter
                href="https://corp.mobile.rakuten.co.jp/news/press/2022/0909_01/"
                target="_blank"
                rel="noopener"
              >
                5G NSA海外ローミング
                <IconNewTabLine />
              </LinkIconAfter>
              」の提供準備に伴い、一部の国・地域ではローミングのテストを実施しています。
            </TxtCap>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※製品選択欄に選択肢のない端末は海外ローミングの動作保証対象外です。ご利用はお客様のご判断でお願いします。
            </TxtCap>
            <Heading level="2" className={Utils['Mt-32']}>
              渡航先を選択する
            </Heading>
            <div>
              <div className={Utils['Mt-16']}>
                {roamingDataState ? (
                  <>
                    {Object.keys(roamingDataState).map(
                      (elem: string, i, arr) => {
                        return (
                          <AccordionList
                            text={roamingDataState[elem].name}
                            isOpened={false}
                            key={i}
                          >
                            <CountryList>
                              {(() => {
                                type RadioElem = {
                                  disabled: boolean
                                  id: string
                                  inputName: string
                                  name: string
                                  text: string
                                  value: string
                                }
                                const tempArr: RadioElem[] = []
                                countryfilter(
                                  roamingDataState[elem].countries,
                                ).forEach((e, j) => {
                                  const obj = {
                                    disabled: false,
                                    id: enName(e),
                                    inputName: 'country',
                                    name: 'country',
                                    text: jpName(e),
                                    value: arr[i],
                                  }
                                  tempArr.push(obj)
                                })
                                return (
                                  <ButtonRadioNoborder
                                    onChangeCheck={selectCountry}
                                    select={tempArr}
                                    as="li"
                                  />
                                )
                              })()}
                            </CountryList>
                          </AccordionList>
                        )
                      },
                    )}
                  </>
                ) : (
                  ''
                )}
              </div>
              <div className={Utils['Mt-32']}>
                <Heading level="2">製品メーカーを選択する</Heading>
                <SelectCustom
                  onSelectedChange={e => {
                    if (e) {
                      updateSelectedMakerState(e)
                    } else {
                      updateSelectedMakerState('')
                    }
                    updateSelectedMobileState('')
                    handleRest()
                    if (e === 'Rakuten') {
                      updateRakutenState(true)
                    } else {
                      updateRakutenState(false)
                    }
                  }}
                  options={(() => {
                    const tempArr = [
                      {
                        text: 'メーカーを選択',
                        value: '',
                      },
                    ]
                    Object.keys(targetMobiles).forEach((elem, i, arr) => {
                      const obj = {
                        text: elem,
                        value: elem,
                      }
                      tempArr.push(obj)
                    })
                    return tempArr
                  })()}
                  className={Utils['Mt-24']}
                />
                <Heading level="2" className={Utils['Mt-32']}>
                  製品を選択する
                </Heading>
                <SelectCustom
                  onSelectedChange={e => {
                    if (e) {
                      updateSelectedMobileState(e)
                      handleRest()
                      if (e.indexOf('Rakuten') === 0) {
                        updateRakutenState(true)
                      } else {
                        updateRakutenState(false)
                      }
                    }
                  }}
                  options={(() => {
                    const tempArr = [
                      {
                        text: '製品を選択',
                        value: '',
                      },
                    ]
                    if (mobilesForMaker) {
                      Object.keys(mobilesForMaker).forEach((elem, i, arr) => {
                        const obj = {
                          text: mobilesForMaker[i].name,
                          value: mobilesForMaker[i].value,
                        }
                        tempArr.push(obj)
                      })
                    }
                    return tempArr
                  })()}
                  currentSelected={selectedMobileState}
                  className={Utils['Mt-24']}
                />
                {rakutenState && (
                  <p className={Utils['Mt-16']}>
                    お客様のIMEI情報は、端末の「設定」→「端末情報」→「IMEI」からご確認いただけます。
                  </p>
                )}
              </div>
              <div className={`${Utils['Mt-64']} ${Utils['Align-center']}`}>
                <ButtonPrimaryLarge
                  type="button"
                  aria-disabled={
                    selectedCountryState.length && selectedMobileState
                      ? false
                      : true
                  }
                  aria-current={pressedState ? true : false}
                  onClick={() => checkUtilizationSituation()}
                >
                  利用可否・料金を確認する
                </ButtonPrimaryLarge>
              </div>
              {pressedState &&
              selectedCountryState &&
              selectedMobileState &&
              supportedState ? (
                <InfoboxBorder className={Utils['Mt-64']}>
                  <Heading level="2">選択された国の対応状況</Heading>
                  <p className={Utils['Mt-16']}>
                    海外ローミング（データ通信）は海外ローミングエリア2GBの高速データ容量を消費します。
                  </p>

                  <DescriptionListDefault className={Utils['Mt-16']}>
                    <div>
                      <dt>渡航先</dt>
                      <dd>{selectedCountryState[0].detail.Country_JP}</dd>
                    </div>
                    <div>
                      <dt>選択した製品</dt>
                      <dd>{selectedMobileState}</dd>
                    </div>
                  </DescriptionListDefault>
                  {isRemarkTarget() && (
                    <TxtCap as="p" className={Utils['Mt-8']}>
                      ※T-mobileの通信事情により、一部地域で接続できない場合があります。
                    </TxtCap>
                  )}
                  <AccordionList
                    text="データ通信"
                    isOpened={true}
                    className={Utils['Mt-32']}
                  >
                    <TxtCap as="p">
                      ※現地事業者の通信事情により一部地域で接続できない場合があります。
                      <br />
                      お客様が渡航先の通信事業者の通信事情により本サービスをご利用いただけない場合があっても、当社は一切の責任を負いません。
                    </TxtCap>
                    <TxtCap as="p">
                      ※事業者名はご利用のデバイスによって表示が異なります。
                    </TxtCap>
                    <Scrollhint
                      text="スクロールできます"
                      className={Utils['Mt-16']}
                    >
                      <Table spWidth="982px">
                        <TableCustom className="scroll">
                          <colgroup>
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                          </colgroup>
                          <tr>
                            <th scope="col">事業者名</th>
                            <th scope="col">2G</th>
                            <th scope="col">3G</th>
                            <th scope="col">4G</th>
                            <th scope="col">5G</th>
                          </tr>
                          {selectedCountryState.map((elem, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  {elem.detail.Network_Display_Name_on_Handset}
                                  {isIndia() && <TxtCap>※5</TxtCap>}
                                </td>
                                {parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[2],
                                  10,
                                ) >= 1 ? (
                                  <td className="txt-emp">
                                    <span>2GBまで </span>
                                    <TxtSize size="l">0 </TxtSize>
                                    <TxtSize size="m">円 </TxtSize>
                                    <TxtSize
                                      size="s"
                                      className="c-Txt_Weight-normal"
                                    >
                                      ※1
                                    </TxtSize>
                                  </td>
                                ) : (
                                  <td>非対応</td>
                                )}
                                {parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[1],
                                  10,
                                ) >= 1 ? (
                                  <td className="txt-emp">
                                    <span>2GBまで </span>
                                    <TxtSize size="l">0 </TxtSize>
                                    <TxtSize size="m">円 </TxtSize>
                                    <TxtSize
                                      size="s"
                                      className="c-Txt_Weight-normal"
                                    >
                                      ※1
                                    </TxtSize>
                                  </td>
                                ) : (
                                  <td>非対応</td>
                                )}
                                {parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[0],
                                  10,
                                ) >= 1 ? (
                                  <td className="txt-emp">
                                    <span>2GBまで </span>
                                    <TxtSize size="l">0 </TxtSize>
                                    <TxtSize size="m">円 </TxtSize>
                                    <TxtSize
                                      size="s"
                                      className="c-Txt_Weight-normal"
                                    >
                                      ※1
                                    </TxtSize>
                                  </td>
                                ) : (
                                  <td>非対応</td>
                                )}
                                {parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[7],
                                  10,
                                ) >= 1 ? (
                                  <td className="txt-emp">
                                    <span>2GBまで </span>
                                    <TxtSize size="l">0 </TxtSize>
                                    <TxtSize size="m">円 </TxtSize>
                                    <TxtSize
                                      size="s"
                                      className="c-Txt_Weight-normal"
                                    >
                                      ※1
                                    </TxtSize>
                                  </td>
                                ) : (
                                  <td>非対応</td>
                                )}
                              </tr>
                            )
                          })}
                        </TableCustom>
                      </Table>
                    </Scrollhint>
                    <TxtCap as="p" className={Utils['Mt-16']}>
                      ※1
                      「Rakuten最強プラン」プラン料金に含む。2GB超過後は、海外ローミングエリアでの通信速度が最大128kbpsに制限されます。
                      データ容量を追加したい場合は、my
                      楽天モバイルから500円（不課税）／1GBでデータチャージ可能です。
                    </TxtCap>
                    {isIndia() && (
                      <TxtCap as="p">
                        ※5
                        一部の州・連邦直轄領では、現地事業者の通信事情によりご利用いただけない地域がございます
                      </TxtCap>
                    )}
                  </AccordionList>
                  <AccordionList
                    text="Rakuten Linkアプリ同士の国際通話・国際SMS"
                    isOpened={false}
                  >
                    <p>自分も相手もRakuten Linkアプリを使用している場合</p>
                    <Scrollhint
                      text="スクロールできます"
                      className={Utils['Mt-16']}
                    >
                      <Table spWidth="982px">
                        <TableCustom className="scroll">
                          <tr>
                            <th rowSpan={2} colSpan={2}></th>
                            <th scope="col">国際通話</th>
                            <th scope="col">国際SMS</th>
                          </tr>
                          <tr>
                            <th scope="col" className="txt-emp th-emp">
                              Rakuten Link
                              <br />
                              <TxtSize
                                size="s"
                                className="c-Txt_Weight-normal roaming-Layout_Word-keep"
                              >
                                円（不課税）／30秒
                              </TxtSize>
                            </th>
                            <th scope="col" className="txt-emp th-emp">
                              Rakuten Link
                              <br />
                              <TxtSize
                                size="s"
                                className="c-Txt_Weight-normal roaming-Layout_Word-keep"
                              >
                                円（不課税）／70文字（全角半角問わず）
                              </TxtSize>
                            </th>
                          </tr>
                          {selectedCountryState.map((elem, i, arr) => {
                            return (
                              <tr key={i}>
                                {i === 0 ? (
                                  <td rowSpan={arr.length}>事業者名</td>
                                ) : (
                                  ''
                                )}
                                <td>
                                  {elem.detail.Network_Display_Name_on_Handset}
                                  {isIndia() && (
                                    <TxtCap v-if="isIndia()">※5</TxtCap>
                                  )}
                                </td>
                                <td colSpan={2}>
                                  {parseInt(
                                    elem.detail[selectedMobileState].split(
                                      '/',
                                    )[0],
                                    10,
                                  ) >= 1 ||
                                  parseInt(
                                    elem.detail[selectedMobileState].split(
                                      '/',
                                    )[1],
                                    10,
                                  ) >= 1 ||
                                  parseInt(
                                    elem.detail[selectedMobileState].split(
                                      '/',
                                    )[2],
                                    10,
                                  ) >= 1 ||
                                  parseInt(
                                    elem.detail[selectedMobileState].split(
                                      '/',
                                    )[7],
                                    10,
                                  ) >= 1
                                    ? '対応'
                                    : '非対応'}
                                </td>
                              </tr>
                            )
                          })}
                          <tr>
                            <td rowSpan={2}>利用料金</td>
                            <td>発信 / 送信料金</td>
                            {isLinkPrice() ? (
                              <td className="txt-emp">
                                <TxtSize size="l">0 </TxtSize>
                                <TxtSize size="m">円</TxtSize>
                              </td>
                            ) : (
                              <td>非対応</td>
                            )}
                            {isLinkPrice() ? (
                              <td className="txt-emp">
                                <TxtSize size="l">0 </TxtSize>
                                <TxtSize size="m">円</TxtSize>
                              </td>
                            ) : (
                              <td>非対応</td>
                            )}
                          </tr>
                          <tr>
                            <td>着信 / 受信料金</td>
                            {isLinkPrice() ? (
                              <td className="txt-emp">
                                <TxtSize size="l">0 </TxtSize>
                                <TxtSize size="m">円</TxtSize>
                              </td>
                            ) : (
                              <td>非対応</td>
                            )}
                            {isLinkPrice() ? (
                              <td className="txt-emp">
                                <TxtSize size="l">0 </TxtSize>
                                <TxtSize size="m">円</TxtSize>
                              </td>
                            ) : (
                              <td>非対応</td>
                            )}
                          </tr>
                        </TableCustom>
                      </Table>
                    </Scrollhint>
                    {isIndia() && (
                      <TxtCap as="p" className={Utils['Mt-16']}>
                        ※5
                        一部の州・連邦直轄領では、現地事業者の通信事情によりご利用いただけない地域がございます
                      </TxtCap>
                    )}
                  </AccordionList>

                  <AccordionList
                    text="Rakuten Linkアプリ以外との国際通話・国際SMS"
                    isOpened={false}
                  >
                    <p>
                      自分はRakuten
                      Linkアプリ、または通常のアプリを使用し、相手がRakuten
                      Link以外を使用している場合
                    </p>
                    <Heading level="4" as="h3" className={Utils['Mt-16']}>
                      国際通話
                    </Heading>
                    <Scrollhint
                      text="スクロールできます"
                      className={Utils['Mt-16']}
                    >
                      <Table spWidth="982px">
                        <TableCustom className="scroll">
                          <colgroup>
                            <col width="15%" />
                            <col width="15%" />
                            <col width="20%" />
                            <col width="25%" />
                            <col width="25%" />
                          </colgroup>
                          <tr>
                            <th colSpan={3} rowSpan={2}></th>
                            <th scope="col" colSpan={2}>
                              国際通話
                            </th>
                          </tr>
                          <tr>
                            <th scope="col" className="txt-emp th-emp">
                              Rakuten Link
                              <br />
                              <TxtSize
                                size="s"
                                className="c-Txt_Weight-normal roaming-Layout_Word-keep"
                              >
                                円（不課税）／30秒
                              </TxtSize>
                            </th>
                            <th scope="col">
                              OS標準のアプリ
                              <br />
                              <TxtSize
                                size="s"
                                className="c-Txt_Weight-normal roaming-Layout_Word-keep"
                              >
                                円（不課税）／1分
                              </TxtSize>
                            </th>
                          </tr>
                          {selectedCountryState.map((elem, i, arr) => {
                            return (
                              <tr key={i}>
                                {i === 0 ? (
                                  <td rowSpan={arr.length}>事業者名</td>
                                ) : (
                                  ''
                                )}
                                <td colSpan={2}>
                                  {elem.detail.Network_Display_Name_on_Handset}
                                  {isIndia() && (
                                    <TxtCap v-if="isIndia()">※{6 + i}</TxtCap>
                                  )}
                                </td>
                                {parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[0],
                                  10,
                                ) >= 1 ||
                                parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[1],
                                  10,
                                ) >= 1 ||
                                parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[2],
                                  10,
                                ) >= 1 ||
                                parseInt(
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[7],
                                  10,
                                ) >= 1 ? (
                                  <td>
                                    対応
                                    {isIos() && <TxtCap> ※2</TxtCap>}
                                  </td>
                                ) : (
                                  <td>非対応</td>
                                )}
                                <td>
                                  {parseInt(
                                    elem.detail[selectedMobileState].split(
                                      '/',
                                    )[3],
                                    10,
                                  ) >= 1
                                    ? '対応'
                                    : '非対応'}
                                  {(() => {
                                    if (isTmobileRule() && !isVolteRule(elem)) {
                                      return <TxtCap> ※9</TxtCap>
                                    } else if (
                                      !isTmobileRule() &&
                                      isVolteRule(elem)
                                    ) {
                                      return <TxtCap> ※10</TxtCap>
                                    } else if (
                                      isTmobileRule() &&
                                      isVolteRule(elem)
                                    ) {
                                      return <TxtCap> ※9, 10</TxtCap>
                                    } else {
                                      return null
                                    }
                                  })()}
                                </td>
                              </tr>
                            )
                          })}
                          <tr>
                            <td rowSpan={4}>利用料金</td>
                            <td rowSpan={3}>発信料金</td>
                            <td>海外から現地の電話番号へかける</td>
                            <td>
                              {convertSelectedCountryAllData() ? (
                                <span>
                                  {convertSelectedCountryAllData(
                                    'Link_Call_Local (30 sec)',
                                  )}
                                  円
                                </span>
                              ) : (
                                <span>非対応</span>
                              )}
                            </td>
                            <td>
                              {convertSelectedCountry(
                                3,
                                'Native_Call_Local (min)',
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>海外から日本の電話番号へかける</td>
                            <td>
                              {convertSelectedCountryAllData() ? (
                                <TxtSize
                                  size="l"
                                  className="roaming-Layout_Txt-emp"
                                >
                                  {convertSelectedCountryAllData(
                                    'Link_Call_Japan_Free',
                                  )}
                                  <TxtSize size="m">円</TxtSize>
                                </TxtSize>
                              ) : (
                                <span>非対応</span>
                              )}
                            </td>
                            <td>
                              {convertSelectedCountry(
                                3,
                                'Native_Call_Japan (min)',
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>海外からその他の国の電話番号へかける</td>
                            <td>
                              {convertSelectedCountryAllData() ? (
                                <span>
                                  <a href="/guide/international-call/overseas/">
                                    国・地域別従量課金
                                  </a>
                                </span>
                              ) : (
                                <span>非対応</span>
                              )}
                            </td>
                            <td>
                              {convertSelectedCountry(
                                3,
                                'Native_Call_RoW (min)',
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>着信料金</td>
                            {isIos() ? (
                              <td>
                                利用不可
                                <TxtCap> ※3</TxtCap>
                              </td>
                            ) : (
                              <td>
                                {convertSelectedCountryAllData() ? (
                                  <TxtSize
                                    size="l"
                                    className="roaming-Layout_Txt-emp"
                                  >
                                    {convertSelectedCountryAllData(
                                      'Link_Call_MT_Free',
                                    )}
                                    <TxtSize size="m">円</TxtSize>
                                  </TxtSize>
                                ) : (
                                  <span>非対応</span>
                                )}
                              </td>
                            )}
                            <td>
                              {convertSelectedCountry(
                                3,
                                'Native_Call_MT (min)',
                              )}
                            </td>
                          </tr>
                        </TableCustom>
                      </Table>
                    </Scrollhint>
                    <Heading level="4" as="h3" className={Utils['Mt-16']}>
                      国際SMS
                    </Heading>
                    <Scrollhint
                      text="スクロールできます"
                      className={`${Utils['Mt-16']} ${Utils['Mb-16']}`}
                    >
                      <Table spWidth="982px">
                        <TableCustom className="scroll">
                          <colgroup>
                            <col width="15%" />
                            <col width="15%" />
                            <col width="20%" />
                            <col width="25%" />
                            <col width="25%" />
                          </colgroup>
                          <tr>
                            <th colSpan={3} rowSpan={2}></th>
                            <th scope="col" colSpan={2}>
                              国際SMS
                            </th>
                          </tr>
                          <tr>
                            <th scope="col" className="txt-emp th-emp">
                              Rakuten Link
                              <br />
                              <TxtSize
                                size="s"
                                className="c-Txt_Weight-normal roaming-Layout_Word-keep"
                              >
                                円（不課税）／70文字（全角半角問わず）
                              </TxtSize>
                            </th>
                            <th scope="col">
                              OS標準のアプリ
                              <br />
                              <TxtSize
                                size="s"
                                className="c-Txt_Weight-normal roaming-Layout_Word-keep"
                              >
                                円（不課税）／全角70文字・半角160字
                              </TxtSize>
                            </th>
                          </tr>
                          {selectedCountryState.map((elem, i, arr) => {
                            return (
                              <tr key={i}>
                                {i === 0 ? (
                                  <td rowSpan={arr.length}>事業者名</td>
                                ) : (
                                  ''
                                )}
                                <td colSpan={2}>
                                  {elem.detail.Network_Display_Name_on_Handset}
                                  {isIndia() && (
                                    <TxtCap v-if="isIndia()">※{6 + i}</TxtCap>
                                  )}
                                </td>
                                {!isIos() &&
                                (elem.detail[selectedMobileState].split(
                                  '/',
                                )[0] === '1' ||
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[1] === '1' ||
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[2] === '1' ||
                                  elem.detail[selectedMobileState].split(
                                    '/',
                                  )[7] === '1') ? (
                                  <td>対応</td>
                                ) : (
                                  <td>
                                    非対応
                                    {isIos() && <TxtCap> ※4</TxtCap>}
                                  </td>
                                )}
                                {elem.detail[selectedMobileState].split(
                                  '/',
                                )[4] === '1' ? (
                                  <td>
                                    対応
                                    {isVolteRuleSMS(elem) && (
                                      <TxtCap> ※10</TxtCap>
                                    )}
                                  </td>
                                ) : (
                                  <td>
                                    非対応
                                    {elem.detail[selectedMobileState].split(
                                      '/',
                                    )[4] === '0' &&
                                      elem.detail[selectedMobileState].split(
                                        '/',
                                      )[5] === '1' && <TxtCap> ※8</TxtCap>}
                                  </td>
                                )}
                              </tr>
                            )
                          })}
                          <tr>
                            <td rowSpan={4}>利用料金</td>
                            <td
                              rowSpan={3}
                              className="roaming-Layout_Word-keep"
                            >
                              発信料金
                            </td>
                            <td>海外から日本の電話番号へ送信する</td>
                            {isIos() ? (
                              <td>利用不可</td>
                            ) : (
                              <td>
                                {convertSelectedCountryAllData() ? (
                                  <TxtSize
                                    size="l"
                                    className="roaming-Layout_Txt-emp"
                                  >
                                    {convertSelectedCountryAllData(
                                      'Link_SMS_Japan_Free',
                                    )}
                                    <TxtSize size="m">円</TxtSize>
                                  </TxtSize>
                                ) : (
                                  <span>非対応</span>
                                )}
                              </td>
                            )}
                            <td>
                              {convertSelectedCountry(4, 'Native_SMS_66')}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              海外から海外の対象国と地域の電話番号へ送信する
                            </td>
                            {isIos() ? (
                              <td>非対応</td>
                            ) : (
                              <td>
                                {convertSelectedCountryAllData() ? (
                                  <TxtSize
                                    size="l"
                                    className="roaming-Layout_Txt-emp"
                                  >
                                    {convertSelectedCountryAllData(
                                      'Link_SMS_66_Free',
                                    )}
                                    <TxtSize size="m">円</TxtSize>
                                  </TxtSize>
                                ) : (
                                  <span>非対応</span>
                                )}
                              </td>
                            )}
                            <td>
                              {convertSelectedCountry(4, 'Native_SMS_66')}
                            </td>
                          </tr>
                          <tr>
                            <td>海外からその他の国の電話番号へ送信する</td>
                            {isIos() ? (
                              <td>非対応</td>
                            ) : (
                              <td>
                                {convertSelectedCountryAllData() ? (
                                  <span>
                                    {convertSelectedCountryAllData(
                                      'Link_SMS_RoW_100 JPY',
                                    )}
                                    円
                                  </span>
                                ) : (
                                  <span>非対応</span>
                                )}
                              </td>
                            )}
                            <td>
                              {convertSelectedCountry(4, 'Native_SMS_Japan')}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>受信料金</td>
                            {isIos() ? (
                              <td>非対応</td>
                            ) : (
                              <td>
                                {convertSelectedCountryAllData() ? (
                                  <TxtSize
                                    size="l"
                                    className="roaming-Layout_Txt-emp"
                                  >
                                    {convertSelectedCountryAllData(
                                      'Link_SMS_MT_Free',
                                    )}
                                    <TxtSize size="m">円</TxtSize>
                                  </TxtSize>
                                ) : (
                                  <span>非対応</span>
                                )}
                              </td>
                            )}
                            <td>
                              {convertSelectedCountry(5, 'Native_SMS_MT')}
                            </td>
                          </tr>
                        </TableCustom>
                      </Table>
                    </Scrollhint>
                    {isIos() && isIosNote() && (
                      <TxtCap as="p">
                        ※2 通信相手がRakuten
                        Linkアプリをご利用ではない場合、Rakuten
                        Linkアプリで国際通話を着信することはできません。
                      </TxtCap>
                    )}
                    {isIos() && (
                      <>
                        <TxtCap as="p">
                          ※3 Rakuten LinkアプリiOS版をご利用のお客様は、Rakuten
                          Linkアプリ以外からの国際通話をiOS標準の電話アプリに着信いたします。海外にいるときは着信料が発生いたしますのでご注意ください。
                        </TxtCap>
                        <TxtCap as="p">
                          ※4 Rakuten LinkアプリiOS版をご利用のお客様は、Rakuten
                          Linkアプリ以外の宛先に国際SMSを送ることができません。国際SMSをご利用の際は、iOS標準のメッセージアプリをご利用ください。
                        </TxtCap>
                        <TxtCap as="p">
                          ※4 Rakuten LinkアプリiOS版をご利用のお客様は、Rakuten
                          Linkアプリ以外からの国際SMSをiOS標準のメッセージアプリに受信致します
                        </TxtCap>
                      </>
                    )}
                    {isIndia() && (
                      <>
                        <TxtCap as="p">
                          ※6
                          通常のアプリをご利用になる場合、Gujarat、Karnataka、Kerala、Maharashtra/Goa、Mumbai、Punjab、Rajasthan、Tamil
                          Nadu、Uttar Pradesh Westの地域でご利用いただけます。
                        </TxtCap>
                        <TxtCap as="p">
                          ※7
                          通常のアプリをご利用になる場合、Delhi、Mumbai、Rajasthanの地域でご利用いただけます
                        </TxtCap>
                      </>
                    )}
                    {convertSelectedCountryForSupportIphone() && (
                      <TxtCap as="p">
                        ※8
                        通常のアプリを利用した国際SMSの受信は無料でご利用いただけます。
                      </TxtCap>
                    )}
                    {isTmobileRule() && (
                      <TxtCap as="p">
                        ※9
                        T-Mobileのネットワーク通信事情により、OS標準の電話アプリによる国際通話をご利用いただけない場合があります。Rakuten
                        Linkアプリをご利用ください。
                      </TxtCap>
                    )}
                    {(isVolteRule() || isVolteRuleSMS()) && (
                      <TxtCap as="p">
                        ※10 VoLTE海外ローミングにも対応しております。詳細は
                        <LinkNormal href="/faq/detail/10000402/">
                          VoLTE海外ローミングとは何か知りたい
                        </LinkNormal>
                        でご確認ください。
                      </TxtCap>
                    )}
                  </AccordionList>
                </InfoboxBorder>
              ) : (
                <>
                  {pressedState && (
                    <InfoboxBorder className={Utils['Mt-64']}>
                      <NonSupported>
                        <p>選択した渡航先では、利用できません。</p>
                      </NonSupported>
                    </InfoboxBorder>
                  )}
                </>
              )}
            </div>
            <ServiceGlobalBnr
              className={Utils['Mt-56']}
              lid="support_international-roaming_area"
              lazy={true}
            />
            <div className={Utils['Mt-64']}>
              <BoxApp className={Utils['Mt-16']}>
                <AppIcon>
                  <img src={`${assets}img/common/icon-rmb-app.png`} alt="" />
                </AppIcon>
                <AppTxt>
                  <AppTtl>Rakuten Link</AppTtl>
                  <p className={`${Utils['Mt-16']} ${Utils['Align-left']}`}>
                    無料通話、無料メッセージやグループメッセージに、ニュースの閲覧やお支払い機能が加わった、楽天モバイルオリジナルの次世代メッセージサービスアプリです。
                  </p>
                  <AppLink className={Utils['Mt-16']}>
                    <li>
                      <StoreButtonGooglePlay
                        alt="Google Play"
                        url="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.rcs"
                      />
                    </li>
                    <li>
                      <StoreButtonAppStore
                        alt="App Store"
                        url="https://apps.apple.com/jp/app/id1498877539"
                      />
                    </li>
                    <li>
                      <ButtonRegularCustom as="a" href="/service/rakuten-link/">
                        詳細を見る
                      </ButtonRegularCustom>
                    </li>
                  </AppLink>
                </AppTxt>
              </BoxApp>
            </div>
          </GuideWrap>
        </SystemContainer>
        <GlobalFooter breadcrumbsItem={breadcrumbs} />
      </SystemWrapperCustom>
    </>
  )
}

export default SupportInternationalroamingArea
