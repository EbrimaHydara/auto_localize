import type { NextPage } from 'next'
import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { replacement_warranty_sim_price_list } from '~/js/csv-data/replacement-warranty-sim-price-list'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtEmp01, TxtEmp02, TxtSize } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { InfoboxLight } from '@components/atoms/Infobox'
import {
  SearchContainer,
  SearchInput,
  SearchBtn,
  SearchIcon,
} from '@components/atoms/Search'
import { Select } from '@components/atoms/Select'
import { ButtonRegular } from '@components/atoms/Buttons'
import { UlOnly } from '@components/atoms/List'
import { LinkNormal } from '@components/atoms/Link'
import { Table } from '@components/atoms/Table'
import { AccordionList } from '@components/atoms/AccordionList'
import { scrollToElement } from '@components/utils/scrollToElement'
import { mixins } from '@components/utils/Mixins'

const TxtCapCustom = styled(TxtCap)`
  display: block;
  text-indent: 0;
`
const InputArea = styled.div`
  width: 100%;
`
const SearchInputCustom = styled(SearchInput)`
  padding: 15px;
  height: 58px;
  &:hover {
    padding: 15px;
  }
  &:focus {
    padding: 14px;
  }
`
const SearchBtnCustom = styled(SearchBtn)`
  height: 58px;
  width: 58px;
  top: 21%;
  &.disabled {
    cursor: default;
  }
  &:focus {
    margin-top: -12px;
  }
`
const SearchIconCustom = styled(SearchIcon)`
  height: 58px;
  width: 58px;
  &:before {
    line-height: 1;
    position: absolute;
    top: 17px;
    left: 17px;
  }
`
const ManufacturerWrap = styled.div`
  position: relative;
  margin-right: 250px;
  ${mixins.mq.MaxM} {
    margin-right: 0;
  }
`
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${mixins.mq.MaxM} {
    flex-direction: column;
  }
  ${ButtonRegular} {
    min-width: 224px;
    margin-left: 24px;
    ${mixins.mq.MaxM} {
      margin-top: 24px;
      margin-left: auto;
    }
  }
`
const InfoboxLightCustom = styled(InfoboxLight)`
  max-width: 1032px;
  width: 100%;
  margin: 32px auto 0;
  position: relative;
  padding-right: 250px;
  ${mixins.mq.MaxL} {
    padding-right: 24px;
  }
  ${ButtonRegular} {
    position: relative;
    margin-left: -250px;
    ${mixins.mq.MaxM} {
      margin-left: 0px;
    }
  }
`
const SystemContainerCustom = styled(SystemContainer)`
  margin-top: 64px;
  ${mixins.mq.MinL} {
    margin-top: 80px;
  }
`
const TableCustom = styled(Table)`
  th {
    width: 25%;
  }
`

const ServiceReplacementwarrantysimPricelist: NextPage = () => {
  const pagetitle = '持ち込みスマホあんしん保証（サービス料金一覧）'
  const directories = [
    { path: '/service/', label: 'オプションサービス' },
    {
      path: '/service/replacement-warranty-sim/',
      label: '持ち込みスマホあんしん保証',
    },
  ]
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
      text: directories[1].label,
      url: directories[1].path,
    },
    {
      text: pagetitle,
      url: '',
    },
  ]
  interface KeyStringObj {
    [key: string]: string
  }
  const [priceListState, updatePriceListState] = useState<KeyStringObj[]>([])
  const [defaultPriceListState, updateDefaultPriceListState] = useState<
    KeyStringObj[]
  >([])
  const [oemListState, updateOemListState] = useState<string[]>([])
  const [prohibitionState, updateProhibitionState] = useState(false)
  const [keywordState, updateKeywordState] = useState('')
  const [manufactureState, updateManufactureState] = useState('')

  const searchReset = useCallback(() => {
    if (prohibitionState) {
      return
    }
    updatePriceListState(defaultPriceListState)
    updateKeywordState('')
    updateManufactureState('all')
  }, [prohibitionState, defaultPriceListState])

  const hiraganaToKatakana = useCallback((str: string) => {
    return str.replace(/[\u3041-\u3096]/g, (match: string) => {
      const chr = match.charCodeAt(0) + 0x60
      return String.fromCharCode(chr)
    })
  }, [])
  const zenkakuToHankaku = useCallback((str: string) => {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, (match: string) => {
      return String.fromCharCode(match.charCodeAt(0) - 0xfee0)
    })
  }, [])

  const filterData = useCallback(
    (target: string, flag: string) => {
      const keywordStateMod = flag === 'k' ? target : keywordState
      const manufactureStateMod = flag === 'm' ? target : manufactureState
      let result
      if (manufactureStateMod === 'all' && !keywordStateMod) {
        //this.priceList = this.defaultPriceList;
        updatePriceListState(defaultPriceListState)
        return
      }
      if (
        keywordStateMod &&
        manufactureStateMod &&
        manufactureStateMod !== 'all'
      ) {
        result = defaultPriceListState
          .filter(item => {
            const toKtakanaOem = hiraganaToKatakana(item.oem.toLowerCase())
            const toKtakanaDevice = hiraganaToKatakana(
              item.device.toLowerCase(),
            )
            const toKtakanaKeyword = zenkakuToHankaku(
              hiraganaToKatakana(keywordStateMod.toLowerCase()),
            )

            return (
              toKtakanaOem.indexOf(toKtakanaKeyword) !== -1 ||
              toKtakanaDevice.indexOf(toKtakanaKeyword) !== -1
            )
          })
          .filter(item => {
            return item.oem === manufactureStateMod
          })
        updatePriceListState(result)
      } else {
        if (keywordStateMod) {
          result = defaultPriceListState.filter(item => {
            const toKtakanaOem = hiraganaToKatakana(item.oem.toLowerCase())
            const toKtakanaDevice = hiraganaToKatakana(
              item.device.toLowerCase(),
            )
            const toKtakanaKeyword = zenkakuToHankaku(
              hiraganaToKatakana(keywordStateMod.toLowerCase()),
            )

            return (
              toKtakanaOem.indexOf(toKtakanaKeyword) !== -1 ||
              toKtakanaDevice.indexOf(toKtakanaKeyword) !== -1
            )
          })
          updatePriceListState(result)
        } else {
          result = defaultPriceListState.filter(item => {
            return item.oem === manufactureStateMod
          })
          updatePriceListState(result)
        }
      }
    },
    [
      keywordState,
      manufactureState,
      defaultPriceListState,
      hiraganaToKatakana,
      zenkakuToHankaku,
    ],
  )

  const DispPc = useCallback(() => {
    return (
      <TableCustom className={Utils['Disp-pc']}>
        <table>
          <thead>
            <tr>
              <th scope="col">機種名</th>
              <th scope="col">メーカー</th>
              <th scope="col">月額利用料</th>
              <th scope="col">自己負担金（免責金額）</th>
            </tr>
          </thead>
          <tbody>
            {priceListState.map((elem, i) => {
              return (
                <tr key={i}>
                  <td>{elem.device}</td>
                  <td>{elem.oem}</td>
                  <td>{elem.monthly_fee}</td>
                  <td>{elem.payment}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableCustom>
    )
  }, [priceListState])
  const DispSp = useCallback(() => {
    return (
      <>
        {priceListState.map((elem, i) => {
          return (
            <AccordionList
              text={elem.device}
              isOpened={false}
              key={i}
              className={Utils['Disp-tb-sp']}
            >
              <Table>
                <table>
                  <tbody>
                    <tr>
                      <th scope="row">メーカー</th>
                      <td>{elem.oem}</td>
                    </tr>
                    <tr>
                      <th scope="row">月額利用料</th>
                      <td>{elem.monthly_fee}</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        自己負担金
                        <br />
                        （免責金額）
                      </th>
                      <td>{elem.payment}</td>
                    </tr>
                  </tbody>
                </table>
              </Table>
            </AccordionList>
          )
        })}
      </>
    )
  }, [priceListState])

  useEffect(() => {
    const sortedData = replacement_warranty_sim_price_list
    updateDefaultPriceListState(sortedData)
    updatePriceListState(sortedData)
    const oemArrRaw: string[] = sortedData.map((item: KeyStringObj) => item.oem)
    const oemArr = Array.from(new Set(oemArrRaw))
    updateOemListState(oemArr)
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="「持ち込みスマホあんしん保証」サービスをご利用いただく際の、製品ごとの月額利用料と自己負担金（免責金額）の一覧になります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <div className={Utils['Pb-32']}>
          <SystemContainer>
            <TxtCap
              as="p"
              className={`${Utils['Align-right']} ${Utils['Mt-8']}`}
            >
              ※表記の金額はすべて税込です。
            </TxtCap>
            <Heading level="1" className={Utils['Mt-32']}>
              持ち込みスマホあんしん保証（サービス料金一覧）
            </Heading>
            <p className={Utils['Mt-32']}>
              「持ち込みスマホあんしん保証」サービスをご利用いただく際の、保証対象製品ごとの月額利用料と自己負担金（免責金額）の一覧です。
            </p>
            <TxtCap as="p" className={Utils['Mt-8']}>
              <TxtEmp02>
                ※Xperia Ace（NTTドコモ）、HUAWEI P30 lite
                Premium（au）など一部のキャリア製品や製品購入場所により保証対象外となる場合があります。
                <br />
                ※サービスお申し込み時に購入場所を誤って選択した場合、加入はできますが、保証対象外となりますのでご注意ください。
              </TxtEmp02>
            </TxtCap>
          </SystemContainer>

          <InfoboxLightCustom id="search-box" className={Utils['Mt-32']}>
            <Form
              className="service-Search_Box-inner"
              onSubmit={e => {
                e.preventDefault()
                searchReset()
              }}
            >
              <InputArea>
                <div>
                  <label
                    htmlFor="service-Search_Box-keyword"
                    className="service-Search_Box-label"
                  >
                    <TxtSize size="m">
                      <TxtEmp01>キーワードから探す</TxtEmp01>
                    </TxtSize>
                  </label>
                  <SearchContainer className={Utils['Mt-16']}>
                    <SearchInputCustom
                      type="text"
                      placeholder="機種名またはメーカー名を入力"
                      id={'service-Search_Box-keyword'}
                      name="keyword"
                      value={keywordState}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          if (keywordState) {
                            scrollToElement('search-box')
                          }
                        }
                      }}
                      onChange={e => {
                        updateKeywordState(e.target.value)
                        filterData(e.target.value, 'k')
                      }}
                      onBlur={() => updateProhibitionState(false)}
                    />
                    <SearchBtnCustom
                      id=""
                      as="button"
                      type="button"
                      className={!keywordState ? 'disabled' : ''}
                      onClick={() => {
                        if (keywordState) {
                          scrollToElement('search-box')
                        }
                      }}
                      tabIndex={keywordState ? 0 : -1}
                      aria-disabled={!keywordState && true}
                    >
                      <SearchIconCustom />
                    </SearchBtnCustom>
                  </SearchContainer>
                </div>
                <ManufacturerWrap className={Utils['Mt-24']}>
                  <label
                    htmlFor="service-Search_Box-manufacturer"
                    className="service-Search_Box-label"
                  >
                    <TxtSize size="m">
                      <TxtEmp01>メーカーを絞り込む</TxtEmp01>
                    </TxtSize>
                  </label>
                  <Select
                    id={'service-Search_Box-manufacturer'}
                    name="manufacturer"
                    className={Utils['Mt-16']}
                    currentSelected={manufactureState}
                    onSelectedChange={e => {
                      if (e) {
                        updateManufactureState(e)
                        filterData(e, 'm')
                      }
                    }}
                    options={(() => {
                      const tempArr = [
                        {
                          text: 'すべて',
                          value: 'all',
                        },
                      ]
                      oemListState.forEach(elem => {
                        const obj = {
                          text: elem,
                          value: elem,
                        }
                        tempArr.push(obj)
                      })
                      return tempArr
                    })()}
                  />
                </ManufacturerWrap>
              </InputArea>
              <ButtonRegular type="submit">検索条件をリセット</ButtonRegular>
            </Form>
          </InfoboxLightCustom>
          <SystemContainer className={Utils['Mt-40']}>
            {priceListState.length ? (
              <>
                <DispPc />
                <DispSp />
              </>
            ) : (
              <div>
                <TxtEmp02 as="p">該当する製品はありません。</TxtEmp02>
                <p className={Utils['Mt-40']}>検索のヒント</p>
                <UlOnly className={Utils['Mt-16']}>
                  <li>キーワードに誤字・脱字がないか確認してください。</li>
                  <li>別のキーワードを試してみてください。</li>
                  <li>
                    入力された機種名が
                    <LinkNormal href="/product/certified-products/">
                      楽天回線対応製品
                    </LinkNormal>
                    かご確認ください。
                    <br />
                    <TxtCapCustom className="service-List_Cap c-Txt_Cap u-Adjust_Mt-8">
                      ※楽天回線対応製品でない機種名はヒットしません。
                    </TxtCapCustom>
                  </li>
                </UlOnly>
              </div>
            )}
          </SystemContainer>
          <SystemContainerCustom>
            <ButtonRegular as="a" href="/service/replacement-warranty-sim/">
              持ち込みスマホあんしん保証の詳細を見る
            </ButtonRegular>
          </SystemContainerCustom>
        </div>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default ServiceReplacementwarrantysimPricelist
