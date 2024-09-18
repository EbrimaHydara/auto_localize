import React, { useEffect, useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import { Heading } from '@components/atoms/Heading'
import { TxtSize, TxtCap, TxtEmp02, TxtNormal } from '@components/atoms/Txt'
import { InfoboxLight } from '@components/atoms/Infobox'
import { Select } from '@components/atoms/Select'
import {
  ButtonPrimaryLarge,
  ButtonRegular,
  ButtonSecondaryLarge,
} from '@components/atoms/Buttons'
import { LinkIconAfter } from '@components/atoms/Link'
import { IconNewTabLine } from '@components/icons'
import { Table as TableWrapper } from '@components/atoms/Table'
import { Tooltip } from '@components/atoms/Tooltip'
import { tradein_pricelist } from '~/js/csv-data/tradein-pricelist'
import { scrollToElement } from '@components/utils/scrollToElement'
import { BannerHover } from '@components/atoms/Banner'

const TxtWeightNormal = styled(TxtNormal)`
  font-weight: normal;
`
const TradeinLayout = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`
const TradeinLayoutContainer = styled(InfoboxLight)`
  margin-top: 64px;
  padding: 24px 16px;
  ${mixins.mq.MaxS} {
    margin: 72px -16px 0;
    padding: 24px 16px;
  }
`
const Heading2Custom = styled(Heading)`
  text-align: center;
  ${mixins.mq.MaxM} {
    text-align: left;
  }
`
const TradeinResultWrap = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  ${mixins.mq.MaxM} {
    width: 100%;
    max-width: 100%;
  }
  .Pc {
    th {
      background: ${props => props.theme.colors.monotone93};
    }
    ${mixins.mq.MaxM} {
      display: none;
    }
  }
  .Sp {
    th {
      text-align: center;
      background: ${props => props.theme.colors.monotone93};
    }
    td {
      text-align: center;
    }
    ${mixins.mq.MinL} {
      display: none;
    }
  }
`
const ButtonSecondaryLargeCustom = styled(ButtonSecondaryLarge)<{
  pointerEvents: string
}>`
  pointer-events: ${props => props.pointerEvents};
`
type Props = {
  onUpdateDate: (formattedDate: string) => void
}
export const TradeinPrice: React.FC<Props> = ({ onUpdateDate }) => {
  const theme = useContext(ThemeContext)
  const [questionDispState, updateQuestionDispState] = useState(true)

  const [makerDisabledState, updateMakerDisabledState] = useState(true)
  const [deviceDisabledState, updateDeviceDisabledState] = useState(true)
  const [memoryDisabledState, updateMemoryDisabledState] = useState(true)
  const [buttonDisabledState, updateButtonDisabledState] = useState(true)
  const [pointerState, updatePointerState] = useState('none')

  const [lastUpdateState, updateLastUpdateState] = useState('')
  const [defaultListState, updateDefaultListState] = useState<
    { [key: string]: string }[]
  >([])
  const [makerListState, updateMakerListState] = useState<string[]>([])
  const [deviceListState, updateDeviceListState] = useState<string[]>([])
  const [memoryListState, updateMemoryListState] = useState<string[]>([])
  const [filterDeviceListState, updateFilterDeviceListState] = useState<
    { [key: string]: string }[]
  >([])
  const [filterMemoryListState, updateFilterMemoryListState] = useState<
    { [key: string]: string }[]
  >([])
  const [carrierSelectedState, updateCarrierSelectedState] =
    useState<string>('')
  const [makerSelectedState, updateMakerSelectedState] = useState<string>('')
  const [deviceSelectedState, updateDeviceSelectedState] = useState<string>('')
  const [memorySelectedState, updateMemorySelectedState] = useState<string>('')

  const [priceListState, updatePriceListState] = useState<{
    [key: string]: string
  }>({})

  const filterSet = (arr: string[]) => {
    return arr
      .filter((x: string, i: number, self: string[]) => {
        return self.indexOf(x) === i
      })
      .sort((a, b) => {
        return a.toLowerCase() > b.toLowerCase()
          ? 1
          : b.toLowerCase() > a.toLowerCase()
          ? -1
          : 0
      })
  }

  const carrierFilter = (carrier: string) => {
    let carrierName = ''
    switch (carrier) {
      case '楽天モバイル':
        carrierName = 'Rakuten'
        break
      case 'NTTドコモ':
        carrierName = 'docomo'
        break
      case 'au':
        carrierName = 'au'
        break
      case 'ソフトバンク':
        carrierName = 'Softbank'
        break
      case 'その他（SIMフリースマホ＆Apple Watch）':
        carrierName = 'Generic'
        break
      default:
        break
    }
    return carrierName
  }

  const allCheck = (memorySelectedDirect?: string) => {
    if (
      carrierFilter(carrierSelectedState) &&
      makerSelectedState &&
      deviceSelectedState &&
      memorySelectedDirect
    ) {
      updateButtonDisabledState(false)
      updatePointerState('auto')
    } else {
      updateButtonDisabledState(true)
      updatePointerState('none')
    }
  }

  const generateMakerOptions = (tar: string[]) => {
    const result = tar.map(elem => {
      const tempObj = {
        text: elem,
        value: elem,
      }
      return tempObj
    })
    result.unshift({ text: 'メーカーを選択', value: '' })
    return result
  }
  const generateDeviceOptions = (tar: string[]) => {
    const result = tar.map(elem => {
      const tempObj = {
        text: elem,
        value: elem,
      }
      return tempObj
    })
    result.unshift({ text: 'モデルを選択', value: '' })
    return result
  }
  const generateMemoryOptions = (tar: string[]) => {
    const result = tar.map(elem => {
      const tempObj = {
        text: elem,
        value: elem,
      }
      return tempObj
    })
    result.unshift({ text: '容量を選択', value: '' })
    return result
  }

  const handleCarrierChange = (e: string | undefined) => {
    if (typeof e !== 'undefined' && e.length >= 0) {
      updateCarrierSelectedState(e)

      let manufacturer_tmp: string[] = []
      let filterdeviceList_tmp: { [key: string]: string }[] = []
      updateMakerSelectedState('')
      defaultListState.forEach(elem => {
        if (elem.carrier === carrierFilter(e)) {
          manufacturer_tmp.push(elem.manufacturer)
          filterdeviceList_tmp.push(elem)
        }
      })
      console.log(filterSet(manufacturer_tmp))
      updateMakerListState(filterSet(manufacturer_tmp))
      updateFilterDeviceListState(filterdeviceList_tmp)
      updateMakerSelectedState('')
      updateMakerDisabledState(false)
      updateDeviceSelectedState('')
      updateDeviceDisabledState(true)
      updateMemorySelectedState('')
      updateMemoryDisabledState(true)
      updateMemoryListState([])
      allCheck()
    }
  }

  const handleMakerChange = (e: string | undefined) => {
    if (typeof e !== 'undefined' && e.length >= 0) {
      updateMakerSelectedState(e)

      let device_tmp: string[] = []
      const deviceList = filterDeviceListState
      let filtermemoryList_tmp: { [key: string]: string }[] = []

      updateDeviceSelectedState('')
      deviceList.forEach(elem => {
        if (elem.manufacturer === e) {
          device_tmp.push(elem.device)
          filtermemoryList_tmp.push(elem)
        }
      })

      updateDeviceListState(filterSet(device_tmp))
      updateFilterMemoryListState(filtermemoryList_tmp)
      updateDeviceDisabledState(false)
      updateMemorySelectedState('')
      updateMemoryDisabledState(true)
      allCheck()
    }
  }

  const handleDeviceChange = (e: string | undefined) => {
    if (typeof e !== 'undefined' && e.length >= 0) {
      updateDeviceSelectedState(e)

      let memory_tmp: string[] = []
      const memoryList = filterMemoryListState

      updateMemorySelectedState('')
      memoryList.forEach(elem => {
        if (elem.device === e) {
          memory_tmp.push(elem.memory)
        }
      })
      updateMemoryListState(memory_tmp)
      updateMemoryDisabledState(false)
      allCheck()
    }
  }

  const handleMemoryChange = (e: string | undefined) => {
    if (typeof e !== 'undefined' && e.length >= 0) {
      updateMemorySelectedState(e)
      allCheck(e)
    }
  }
  const handleSubmit = () => {
    let pricelist_tmp: { [key: string]: string } = {}
    updatePriceListState({})
    defaultListState.forEach(elem => {
      if (
        elem.carrier === carrierFilter(carrierSelectedState) &&
        elem.manufacturer === makerSelectedState &&
        elem.device === deviceSelectedState &&
        elem.memory === memorySelectedState
      ) {
        pricelist_tmp.good_price = elem.good_price
        pricelist_tmp.fair_price = elem.fair_price
        pricelist_tmp.poor_price = elem.poor_price
      }
    })
    updatePriceListState(pricelist_tmp)
    updateQuestionDispState(false)
    scrollToElement('js-content-top')
  }
  const yenTrim = (value: string) => {
    return value.split('¥')[1]
  }

  const handleCheckOther = () => {
    updateQuestionDispState(true)
    scrollToElement('js-tradeintxt')
  }
  useEffect(() => {
    const date = new Date(tradein_pricelist[0].update)
    const formattedDate = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`
    updateLastUpdateState(formattedDate)
    onUpdateDate(formattedDate)
    const tempDefaultList: { [key: string]: string }[] = []
    const tempMakerList: string[] = []
    tradein_pricelist.forEach((elem: { [key: string]: string }) => {
      tempDefaultList.push(elem)
      tempMakerList.push(elem.manufacturer)
    })
    updateMakerListState(filterSet(tempMakerList))
    updateDefaultListState(tempDefaultList)
  }, [onUpdateDate])

  return (
    <>
      <BannerHover
        href="/campaign/iphone-point/?l-id=service_tradein_campaign_iphone-point"
        className={Utils['Mt-48']}
        data-ratid="service_tradein_scroll-01b_recommend"
        data-ratevent="appear"
        data-ratparam="all"
      >
        <picture>
          <source
            media={`(max-width: ${theme.max.m})`}
            srcSet={`${assets}img/bnr/bnr-iphone-point-343-108-240517.png`}
            width="686"
            height="216"
          />
          <img
            src={`${assets}img/bnr/bnr-iphone-point-1032-160-240517.png`}
            width="1032"
            height="160"
            alt="対象iPhoneを一括または24回払いで購入＆楽天モバイルへ初めて申し込み＆他社から電話番号そのまま乗り換えで最大32,000円相当おトク！"
          />
        </picture>
      </BannerHover>
      <TradeinLayoutContainer
        id="js-content-top"
        data-ratid="service_tradein_scroll-02_check-price"
        data-ratevent="appear"
        data-ratparam="all"
      >
        <Heading2Custom level="2">対象製品の下取り価格を確認</Heading2Custom>
        {questionDispState ? (
          <TradeinLayout id="js-question">
            <Heading level="4" as="h3" className={Utils['Mt-32']}>
              1.製品を購入したキャリアを選択
            </Heading>
            <TxtCap as="p" className={Utils['Mt-8']}>
              ※キャリア以外でご購入された製品は、その他（SIMフリースマホ＆Apple
              Watch）を選択してください。
              <br />
              <TxtEmp02>
                ※Apple
                Watchの下取り価格を確認する場合は、その他（SIMフリースマホ＆Apple
                Watch）を選択してください。
              </TxtEmp02>
            </TxtCap>
            <Select
              options={[
                { text: '携帯電話会社を選択', value: '' },
                { text: '楽天モバイル', value: '楽天モバイル' },
                { text: 'NTTドコモ', value: 'NTTドコモ' },
                { text: 'au', value: 'au' },
                { text: 'ソフトバンク', value: 'ソフトバンク' },
                {
                  text: 'その他（SIMフリースマホ＆Apple Watch）',
                  value: 'その他（SIMフリースマホ＆Apple Watch）',
                },
              ]}
              className={Utils['Mt-16']}
              disabled={false}
              onSelectedChange={e => handleCarrierChange(e)}
              currentSelected={carrierSelectedState}
            />
            <Heading level="4" as="h3" className={Utils['Mt-24']}>
              2. 製品のメーカーを選択
            </Heading>
            <Select
              options={generateMakerOptions(makerListState)}
              className={Utils['Mt-16']}
              disabled={makerDisabledState}
              onSelectedChange={e => handleMakerChange(e)}
              currentSelected={makerSelectedState}
            />
            <Heading level="4" as="h3" className={Utils['Mt-24']}>
              3. 製品のモデルを選択
            </Heading>
            <Select
              options={generateDeviceOptions(deviceListState)}
              className={Utils['Mt-16']}
              disabled={deviceDisabledState}
              onSelectedChange={e => handleDeviceChange(e)}
              currentSelected={deviceSelectedState}
            />
            <Heading level="4" as="h3" className={Utils['Mt-24']}>
              4. 製品の容量を選択
            </Heading>
            <Select
              options={generateMemoryOptions(memoryListState)}
              className={Utils['Mt-16']}
              disabled={memoryDisabledState}
              onSelectedChange={e => handleMemoryChange(e)}
              currentSelected={memorySelectedState}
            />
            <div className={`${Utils['Mt-32']} ${Utils['Align-center']}`}>
              <ButtonSecondaryLargeCustom
                id="js-tradein-btn"
                aria-disabled={buttonDisabledState}
                data-ratid="tradein_pricecheck"
                data-ratevent="click"
                data-ratparam="all"
                pointerEvents={pointerState}
                onClick={() => handleSubmit()}
              >
                <span>下取り価格を見る</span>
              </ButtonSecondaryLargeCustom>
            </div>
            <TxtCap
              as="p"
              className={`${Utils['Mt-16']} ${Utils['Align-center']}`}
            >
              ※ {lastUpdateState}時点 ※
              製品の状態によっては下取り価格が下がる場合があります。 ※
              表示価格は税込です。
            </TxtCap>
          </TradeinLayout>
        ) : (
          <div id="js-result">
            <TradeinResultWrap>
              <TxtEmp02
                as="div"
                className={`${Utils['Align-center']} ${Utils['Mt-32']}`}
              >
                <TxtSize size="s">{carrierSelectedState}</TxtSize>
                <p>
                  {makerSelectedState}
                  {deviceSelectedState}&nbsp;
                  {memorySelectedState}
                </p>
              </TxtEmp02>
              <div className={Utils['Mt-24']}>
                <TableWrapper>
                  <table className="Pc">
                    <tr>
                      <th>製品状態</th>
                      <td>良品</td>
                      <td>画面損傷品</td>
                      <td>外装損傷・機能不具合品</td>
                    </tr>
                    {/* <tr v-for="(price, index) in priceList" :key="index"> */}
                    <tr>
                      <th>
                        下取り価格目安
                        <br />
                        <TxtWeightNormal>
                          （楽天キャッシュ
                          <Tooltip id="rakuten-cash-pc">
                            楽天ペイなど、楽天のたくさんのサービスでご利用可能なオンライン電子マネーです。
                          </Tooltip>
                          ）
                        </TxtWeightNormal>
                      </th>
                      <td
                        className={`${Utils['Valign-middle']} ${Utils['Align-right']}`}
                      >
                        <TxtSize size="l" style={{ fontWeight: 'bold' }}>
                          {yenTrim(priceListState.good_price)}
                        </TxtSize>
                        円
                      </td>
                      <td
                        className={`${Utils['Valign-middle']} ${Utils['Align-right']}`}
                      >
                        <TxtSize size="l" style={{ fontWeight: 'bold' }}>
                          {yenTrim(priceListState.fair_price)}
                        </TxtSize>
                        円
                      </td>
                      <td
                        className={`${Utils['Valign-middle']} ${Utils['Align-right']}`}
                      >
                        <TxtSize size="l" style={{ fontWeight: 'bold' }}>
                          {yenTrim(priceListState.poor_price)}
                        </TxtSize>
                        円
                      </td>
                    </tr>
                  </table>
                </TableWrapper>

                <TableWrapper>
                  <table className="Sp">
                    <thead>
                      <tr>
                        <th>製品状態</th>
                        <th>
                          下取り価格目安
                          <br />
                          <span className="c-Txt_Weight-normal">
                            （楽天キャッシュ
                            <Tooltip id="楽天回線エリア">
                              楽天ペイなど、楽天のたくさんのサービスでご利用可能なオンライン電子マネーです。
                            </Tooltip>
                            ）
                          </span>
                        </th>
                      </tr>
                    </thead>
                    {/* <tbody v-for="(price, index) in priceList" :key="index"> */}
                    <tbody>
                      <tr>
                        <td>良品</td>
                        <td className={Utils['Align-right']}>
                          <TxtSize size="l" style={{ fontWeight: 'bold' }}>
                            {yenTrim(priceListState.good_price)}
                          </TxtSize>
                          円
                        </td>
                      </tr>
                      <tr>
                        <td>画面損傷品</td>
                        <td className={Utils['Align-right']}>
                          <TxtSize size="l" style={{ fontWeight: 'bold' }}>
                            {yenTrim(priceListState.fair_price)}
                          </TxtSize>
                          円
                        </td>
                      </tr>
                      <tr>
                        <td>外装損傷・機能不具合品</td>
                        <td className={Utils['Align-right']}>
                          <TxtSize size="l" style={{ fontWeight: 'bold' }}>
                            {yenTrim(priceListState.poor_price)}
                          </TxtSize>
                          円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TableWrapper>
              </div>
              <TxtCap as="p" className={Utils['Mt-8']}>
                ※ {lastUpdateState}時点 ※
                製品の状態によっては下取り価格が下がる場合があります。 ※
                表示価格は税込です。
                <br />※
                <LinkIconAfter
                  href="https://cash.rakuten.co.jp/overview/"
                  rel="noopener"
                  target="_blank"
                >
                  楽天キャッシュの詳細はこちら
                  <IconNewTabLine />
                </LinkIconAfter>
                をご覧ください。
                <br />
                ※価格が「-」と表示されるものは下取り対象外となります。
              </TxtCap>

              <div className={`${Utils['Align-center']} ${Utils['Mt-16']}`}>
                <ButtonPrimaryLarge
                  as="a"
                  href="https://r10.to/hM569V"
                  data-ratid="tradein_apply_simlulation"
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <span>下取りのお申し込みに進む</span>
                </ButtonPrimaryLarge>
                <ButtonRegular
                  className={Utils['Mt-16']}
                  data-ratid="tradein_otherproduct"
                  data-ratevent="click"
                  data-ratparam="all"
                  onClick={() => handleCheckOther()}
                >
                  <span>別の製品を確認する</span>
                </ButtonRegular>
              </div>
            </TradeinResultWrap>
          </div>
        )}
      </TradeinLayoutContainer>
    </>
  )
}
