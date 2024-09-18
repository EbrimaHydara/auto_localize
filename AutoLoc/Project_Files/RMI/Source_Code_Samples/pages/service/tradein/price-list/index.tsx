import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { tradein_pricelist } from '~/js/csv-data/tradein-pricelist'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtSize } from '@components/atoms/Txt'
import { Scrollhint } from '@components/atoms/Scrollhint'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter, LinkIconBefore } from '@components/atoms/Link'
import { Select } from '@components/atoms/Select'
import { ButtonRegular, ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { InfoboxLight } from '@components/atoms/Infobox'
import {
  IconArrowDown,
  IconNewTabLine,
  IconChevronRight,
} from '@components/icons'
import { anchorCallback } from '@components/utils/anchorCallback'
import { Table } from '@components/atoms/Table'
import { TradeinGuide } from '@components/include/service/tradein/TradeinGuide'

const ContainerList = styled(InfoboxLight)`
  margin-top: 16px;
  padding: 24px 40px;
  ${mixins.mq.MaxM} {
    padding: 24px 16px;
  }
  ${mixins.mq.MaxS} {
    margin: 16px -16px 0;
    padding: 24px 16px;
  }
`
const TableCustom = styled(Table)`
  thead {
    th {
      text-align: center;
      vertical-align: middle;
    }
  }
  .normal {
    font-weight: normal;
  }
  .price {
    text-align: right;
  }
`
const TableAnchor = styled.div`
  width: fit-content;
  margin-inline-start: auto;
`

const PriceUpBox = styled.div`
  background-color: ${props => props.theme.colors.warningBg};
  border-color: ${props => props.theme.colors.warning};
  padding: 24px;
`

const ServiceTradeinPricelist: NextPage = () => {
  const pagetitle = '下取り対象製品の価格一覧'
  const directories = [
    {
      path: '/service/',
      label: 'オプションサービス',
    },
    {
      path: '/service/tradein/',
      label: 'スマホ下取りサービス',
    },
  ]
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
      text: 'スマホ下取りサービス',
      url: '/service/tradein/',
    },
    {
      text: pagetitle,
      url: '',
    },
  ]

  const [dispState, updateDispState] = useState(false)

  const [lastUpdateState, updateLastUpdateState] = useState('')
  const [defaultListState, updateDefaultListState] = useState<
    { [key: string]: string }[]
  >([])
  const [makerListState, updateMakerListState] = useState<string[]>([])
  const [carrierSelectedState, updateCarrierSelectedState] =
    useState<string>('')
  const [makerSelectedState, updateMakerSelectedState] = useState<string>('')
  const [priceListState, updatePriceListState] = useState<
    { [key: string]: string }[]
  >([])

  const filterSet = (arr: string[]) => {
    return arr
      .filter((x, i, self) => {
        return self.indexOf(x) === i
      })
      .sort((a: string, b: string) => {
        return a.toLowerCase() > b.toLowerCase()
          ? 1
          : b.toLowerCase() > a.toLowerCase()
          ? -1
          : 0
      })
  }

  const yenTrim = (value: string) => {
    return value.split('¥')[1]
  }

  const carrierFilter = (carrier: string) => {
    let carrierName = ''
    switch (carrier) {
      case '楽天モバイル':
        carrierName = 'Rakuten'
        break
      case 'ドコモ':
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
        carrierName = ''
        break
    }
    return carrierName
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

  const handleCarrierChange = (e: string | undefined) => {
    if (typeof e !== 'undefined' && e.length > 0) {
      updateCarrierSelectedState(e)

      let maker_tmp: string[] = []
      updateMakerSelectedState('')
      defaultListState.forEach(elem => {
        if (elem.carrier === carrierFilter(e)) {
          maker_tmp.push(elem.manufacturer)
        }
      })
      updateMakerListState(filterSet(maker_tmp))
      resultShow(e, makerSelectedState)
    } else {
      updateCarrierSelectedState('')
      resultShow('', makerSelectedState)
    }
  }

  const handleMakerChange = (e: string | undefined) => {
    if (typeof e !== 'undefined' && e.length > 0) {
      updateMakerSelectedState(e)
      resultShow(carrierSelectedState, e)
    } else {
      updateMakerSelectedState('')
      resultShow(carrierSelectedState, '')
    }
  }

  const resultShow = (carrier: string, maker: string) => {
    const selectedCarrier = carrierFilter(carrier)
    const selectedMaker = maker

    let pricelist_tmp: { [key: string]: string }[] = []
    if (selectedCarrier !== '' && selectedMaker === '') {
      defaultListState.forEach(elm => {
        if (elm.carrier === selectedCarrier) {
          pricelist_tmp.push({
            carrier: elm.carrier,
            maker: elm.manufacturer,
            device: elm.device,
            memory: elm.memory,
            good: elm.good_price,
            fair: elm.fair_price,
            poor: elm.poor_price,
          })
        }
      })
    }
    if (selectedCarrier === '' && selectedMaker !== '') {
      defaultListState.forEach(elm => {
        if (elm.manufacturer === selectedMaker) {
          pricelist_tmp.push({
            carrier: elm.carrier,
            maker: elm.manufacturer,
            device: elm.device,
            memory: elm.memory,
            good: elm.good_price,
            fair: elm.fair_price,
            poor: elm.poor_price,
          })
        }
      })
    }
    if (selectedCarrier !== '' && selectedMaker !== '') {
      defaultListState.forEach(elm => {
        if (
          elm.carrier === selectedCarrier &&
          elm.manufacturer === selectedMaker
        ) {
          pricelist_tmp.push({
            carrier: elm.carrier,
            maker: elm.manufacturer,
            device: elm.device,
            memory: elm.memory,
            good: elm.good_price,
            fair: elm.fair_price,
            poor: elm.poor_price,
          })
        }
      })
    }

    const carrierList: string[] = [
      'Rakuten',
      'docomo',
      'au',
      'Softbank',
      'Generic',
    ]
    const pricelist_tmp1 = pricelist_tmp.sort(function (a, b) {
      return carrierList.indexOf(a.carrier) - carrierList.indexOf(b.carrier)
    })
    const pricelist_tmp2 = pricelist_tmp1.sort(function (a, b) {
      return a.maker.toLowerCase() > b.maker.toLowerCase()
        ? 1
        : b.maker.toLowerCase() > a.maker.toLowerCase()
        ? -1
        : 0
    })

    if (selectedCarrier === '' && selectedMaker === '') {
      updateDispState(false)
    } else {
      updatePriceListState(pricelist_tmp2)
      updateDispState(true)
    }
  }

  const carrierRename = (carrier: string) => {
    let carrierName = ''
    switch (carrier) {
      case 'Rakuten':
        carrierName = '楽天モバイル'
        break
      case 'docomo':
        carrierName = 'ドコモ'
        break
      case 'au':
        carrierName = 'au'
        break
      case 'Softbank':
        carrierName = 'ソフトバンク'
        break
      case 'Generic':
        carrierName = 'その他（SIMフリー）'
        break
      default:
        carrierName = ''
        break
    }
    return carrierName
  }

  const ResultTable = () => {
    return (
      <>
        {priceListState.map((value, index) => (
          <tr key={index}>
            <td>{carrierRename(value.carrier)}</td>
            <td>{value.maker}</td>
            <td>{value.device}</td>
            <td>{value.memory}</td>
            <td className="price">{yenTrim(`${value.good}`)}円</td>
            <td className="price">{yenTrim(`${value.fair}`)}円</td>
            <td className="price">{yenTrim(`${value.poor}`)}円</td>
          </tr>
        ))}
      </>
    )
  }

  useEffect(() => {
    updateLastUpdateState(tradein_pricelist[0].update)
    const tempDefaultList: { [key: string]: string }[] = []
    const tempMakerList: string[] = []

    tradein_pricelist.forEach((elem: { [key: string]: string }) => {
      tempDefaultList.push(elem)
      tempMakerList.push(elem.manufacturer)
    })
    updateMakerListState(filterSet(tempMakerList))
    updateDefaultListState(tempDefaultList)
  }, [])
  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="お持ちのスマホの下取り価格をご確認いただける一覧となります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <TxtCap as="p" className={`${Utils['Align-right']} ${Utils['Mt-8']}`}>
            ※表記の金額はすべて税込です。
          </TxtCap>
          <Heading level="1" className={Utils['Mt-32']}>
            {pagetitle}
          </Heading>
          <p className={Utils['Mt-16']}>
            お持ちのスマホの下取り価格をご確認いただける一覧です。携帯電話会社・メーカーを選択すると一覧が表示されます。
          </p>
          <TxtCap as="ul" className={Utils['Mt-8']}>
            <li>
              ※<span id="lastupdate">{lastUpdateState}</span>時点
            </li>
            <li>※製品の状態によっては下取り価格が下がる場合があります。</li>
            <li>
              ※
              <LinkIconAfter
                href="https://cash.rakuten.co.jp/overview/"
                rel="noopener"
                target="_blank"
              >
                楽天キャッシュの詳細はこちら
                <IconNewTabLine />
              </LinkIconAfter>
              をご覧ください。
            </li>
            <li>※価格が「-」と表示されるものは下取り対象外となります。</li>
          </TxtCap>

          <div className={Utils['Mt-40']}>
            <PriceUpBox className={`${Utils['Align-center']}`}>
              <Heading level="4">
                iPhone、Androidを下取りに出すなら今がチャンス
              </Heading>
              <p className={Utils['Mt-16']}>
                2024年3月1日より、iPhone 11 / iPhone X / iPhone XR / iPhone
                XSと、一部Android製品の下取り価格がアップ！
              </p>
              <div className={Utils['Mt-8']}>
                <LinkIconAfter href="/service/tradein/price-up-list/?l-id=service_tradein_price-list_service_tradein_price-up-list">
                  下取り価格アップ製品の一覧を見る
                  <IconChevronRight />
                </LinkIconAfter>
              </div>
            </PriceUpBox>
            <ContainerList>
              <Heading level="4" as="h3">
                携帯電話会社から探す
              </Heading>
              <Select
                className={Utils['Mt-16']}
                options={[
                  { text: '携帯電話会社を選択', value: '' },
                  { text: '楽天モバイル', value: '楽天モバイル' },
                  { text: 'ドコモ', value: 'ドコモ' },
                  { text: 'au', value: 'au' },
                  { text: 'ソフトバンク', value: 'ソフトバンク' },
                  {
                    text: 'その他（SIMフリースマホ＆Apple Watch）',
                    value: 'その他（SIMフリースマホ＆Apple Watch）',
                  },
                ]}
                onSelectedChange={e => handleCarrierChange(e)}
                currentSelected={carrierSelectedState}
              />
              <Heading level="4" as="h3" className={Utils['Mt-24']}>
                メーカーから探す
              </Heading>
              <Select
                className={Utils['Mt-16']}
                options={generateMakerOptions(makerListState)}
                onSelectedChange={e => handleMakerChange(e)}
                currentSelected={makerSelectedState}
              />
            </ContainerList>
          </div>
          <div>
            {dispState && (
              <>
                <TableAnchor className={Utils['Mt-16']}>
                  <LinkIconBefore
                    href="#about"
                    onClick={e => anchorCallback(e, 'about')}
                  >
                    <IconArrowDown />
                    査定基準の詳細
                  </LinkIconBefore>
                </TableAnchor>
                <Scrollhint text="スクロールできます">
                  <TableCustom
                    pcWidth="1032px"
                    spWidth="1032px"
                    className={Utils['Mt-16']}
                  >
                    <table>
                      <thead>
                        <tr>
                          <th rowSpan={2}>携帯電話会社</th>
                          <th rowSpan={2}>メーカー</th>
                          <th rowSpan={2}>製品</th>
                          <th rowSpan={2}>容量</th>
                          <th colSpan={3}>
                            下取り価格目安
                            <br />
                            <TxtSize size="s" className="normal">
                              （楽天キャッシュ）
                            </TxtSize>
                          </th>
                        </tr>
                        <tr>
                          <th>良品</th>
                          <th>画面損傷品</th>
                          <th>
                            外装損傷
                            <br />・<br />
                            機能不具合品
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <ResultTable />
                      </tbody>
                    </table>
                  </TableCustom>
                </Scrollhint>
              </>
            )}
          </div>

          <Heading level="3" id="about" className={Utils['Mt-64']}>
            査定基準について
          </Heading>
          <p className={Utils['Mt-16']}>
            お客様の製品状態を4段階で評価し、査定価格を決定しております。
            <br />
            製品状態の判断については以下をご参照のうえ、お申し込みください。
          </p>
          <TradeinGuide className={Utils['Mt-16']} />

          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <ButtonPrimaryLarge
              href="https://r10.to/hM569V"
              as="a"
              data-ratid="tradein_price-list_apply"
              data-ratevent="click"
              data-ratparam="all"
            >
              下取りのお申し込みはこちら
            </ButtonPrimaryLarge>
            <div className={Utils['Mt-16']}>
              <ButtonRegular href="/service/tradein/" as="a">
                スマホ下取りサービスの詳細を見る
              </ButtonRegular>
            </div>
          </div>
        </SystemContainer>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          copyrightSimple={false}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceTradeinPricelist
