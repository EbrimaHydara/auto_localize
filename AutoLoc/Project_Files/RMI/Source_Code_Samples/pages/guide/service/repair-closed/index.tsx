import type { NextPage } from 'next'
import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
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
import { mixins } from '@components/utils/Mixins'
import { guide_repair_closed } from '~/js/csv-data/guide-repair-closed'

const FlexWrap = styled.div`
  display: flex;
  gap: 24px 32px;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
  ${mixins.mq.MinL} {
    a {
      max-width: 360px;
      width: 100%;
    }
  }
`
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
      margin-left: 0x;
    }
  }
`
const TableCustom = styled(Table)`
  th {
    width: 50%;
    &:first-child {
      width: 50%;
    }
  }
`

interface RepairClosedItem {
  device: string
  oem: string
  day?: string
}

const GuideServiceRepairclosed: NextPage = () => {
  const pagetitle =
    'メーカー修理受付終了機種および終了予定機種一覧（スマホ交換保証プラス／持ち込みスマホあんしん保証）'
  const directories = [
    { path: '/support/', label: 'お客様サポート' },
    {
      path: '/support/plan/service/',
      label: 'オプションサービス',
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

  const sortAscendingCallback = useCallback(
    <T extends RepairClosedItem>(arr: T[]): T[] => {
      return arr.slice().sort((a, b) => a.device.localeCompare(b.device))
    },
    [],
  )

  const searchBoxRef = useRef<HTMLDivElement>(null)
  const [repairClosedListState, updateRepairClosedListState] = useState<
    RepairClosedItem[]
  >(sortAscendingCallback(guide_repair_closed))
  const [prohibitionState, updateProhibitionState] = useState(false)
  const [keywordState, updateKeywordState] = useState('')
  const [manufactureState, updateManufactureState] = useState('')
  const oemList = Array.from(
    new Set(guide_repair_closed.map((item: RepairClosedItem) => item.oem)),
  )

  const searchReset = useCallback(() => {
    if (prohibitionState) {
      return
    }
    updateRepairClosedListState(guide_repair_closed)
    updateKeywordState('')
    updateManufactureState('all')
  }, [prohibitionState])

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
      if (
        (!keywordStateMod && !manufactureStateMod) ||
        (manufactureStateMod === 'all' && !keywordStateMod)
      ) {
        updateRepairClosedListState(guide_repair_closed)
        return
      }
      if (
        keywordStateMod &&
        manufactureStateMod &&
        manufactureStateMod !== 'all'
      ) {
        result = guide_repair_closed
          .filter(item => {
            const toKatakanaOem = hiraganaToKatakana(item.oem.toLowerCase())
            const toKatakanaDevice = hiraganaToKatakana(
              item.device.toLowerCase(),
            )
            const toKatakanaKeyword = zenkakuToHankaku(
              hiraganaToKatakana(keywordStateMod.toLowerCase()),
            )

            return (
              toKatakanaOem.indexOf(toKatakanaKeyword) !== -1 ||
              toKatakanaDevice.indexOf(toKatakanaKeyword) !== -1
            )
          })
          .filter(item => {
            return item.oem === manufactureStateMod
          })
        updateRepairClosedListState(result)
      } else {
        if (keywordStateMod) {
          result = guide_repair_closed.filter(item => {
            const toKatakanaOem = hiraganaToKatakana(item.oem.toLowerCase())
            const toKatkanaDevice = hiraganaToKatakana(
              item.device.toLowerCase(),
            )
            const toKatakanaKeyword = zenkakuToHankaku(
              hiraganaToKatakana(keywordStateMod.toLowerCase()),
            )

            return (
              toKatakanaOem.indexOf(toKatakanaKeyword) !== -1 ||
              toKatkanaDevice.indexOf(toKatakanaKeyword) !== -1
            )
          })
          updateRepairClosedListState(result)
        } else {
          result = guide_repair_closed.filter(item => {
            return item.oem === manufactureStateMod
          })
          updateRepairClosedListState(result)
        }
      }
    },
    [keywordState, manufactureState, hiraganaToKatakana, zenkakuToHankaku],
  )

  const DispPc = useCallback(() => {
    return (
      <TableCustom>
        <table>
          <thead>
            <tr>
              <th scope="col">機種名</th>
              <th scope="col">メーカー</th>
            </tr>
          </thead>
          <tbody>
            {repairClosedListState.map((elem, i) => {
              return (
                <tr key={i}>
                  <td>{elem.device}</td>
                  <td>{elem.oem}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableCustom>
    )
  }, [repairClosedListState])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="スマホ交換保証プラス／持ち込みスマホあんしん保証において、メーカー修理受付終了機種および終了予定機種一覧になります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <div className={Utils['Pb-40']}>
          <SystemContainer>
            <Heading level="1" className={Utils['Mt-24']}>
              メーカー修理受付終了機種および終了予定機種一覧
              <br />
              （スマホ交換保証プラス／持ち込みスマホあんしん保証）
            </Heading>
            <p className={Utils['Mt-32']}>
              製品保証オプションサービス対象機種の内、メーカーの修理受付が終了した機種および終了予定機種一覧です。
              <br />
              <TxtEmp02>
                以下に記載の機種は、弊社側の在庫状況により、同一の交換機の提供ができない場合がございます。
              </TxtEmp02>
            </p>
            <TxtCap as="ul" className={Utils['Mt-16']}>
              <TxtEmp02 as="li">
                ※スマホ交換保証プラス／持ち込みスマホあんしん保証における故障受付は継続して行っていただけます。
              </TxtEmp02>
              <li>
                ※メーカー修理受付終了により同一機種が在庫にない場合は、楽天モバイルが指定する同等の機種の中からご選択いただき、そちらの機種と交換いたします。
              </li>
              <li>
                ※スマホ交換保証プラス／持ち込みスマホあんしん保証は新品同等の同一機種との交換を行うサービスです。お客様からお渡しいただいた機種のメーカー修理対応は原則行っておりません。
              </li>
            </TxtCap>
            <FlexWrap className={Utils['Mt-32']}>
              <ButtonRegular as="a" href="/service/replacement-warranty-plus/">
                スマホ交換保証プラスの詳細を見る
              </ButtonRegular>
              <ButtonRegular as="a" href="/service/replacement-warranty-sim/">
                持ち込みスマホあんしん保証の詳細を見る
              </ButtonRegular>
            </FlexWrap>
          </SystemContainer>

          <InfoboxLightCustom ref={searchBoxRef} className={Utils['Mt-32']}>
            <Form
              onSubmit={e => {
                e.preventDefault()
                searchReset()
              }}
            >
              <InputArea>
                <div>
                  <label>
                    <TxtSize size="m">
                      <TxtEmp01>キーワードから探す</TxtEmp01>
                    </TxtSize>
                  </label>
                  <SearchContainer className={Utils['Mt-16']}>
                    <SearchInputCustom
                      type="text"
                      placeholder="メーカー名または機種名を入力"
                      name="keyword"
                      value={keywordState}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          if (keywordState) {
                            searchBoxRef.current?.scrollIntoView({
                              behavior: 'smooth',
                            })
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
                      as="button"
                      type="button"
                      className={!keywordState ? 'disabled' : ''}
                      onClick={() => {
                        if (keywordState) {
                          searchBoxRef.current?.scrollIntoView({
                            behavior: 'smooth',
                          })
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
                  <label>
                    <TxtSize size="m">
                      <TxtEmp01>メーカーを絞り込む</TxtEmp01>
                    </TxtSize>
                  </label>
                  <Select
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
                      return [
                        { text: 'すべて', value: 'all' },
                        ...oemList.map(elem => ({ text: elem, value: elem })),
                      ]
                    })()}
                  />
                </ManufacturerWrap>
              </InputArea>
              <ButtonRegular type="submit">検索条件をリセット</ButtonRegular>
            </Form>
          </InfoboxLightCustom>
          <SystemContainer className={Utils['Mt-8']}>
            <p className={Utils['Align-right']}>2024年5月14日更新</p>
            <div className={Utils['Mt-32']}>
              {repairClosedListState.length ? (
                <>
                  <DispPc />
                </>
              ) : (
                <>
                  <TxtEmp02 as="p">該当する機種はありません。</TxtEmp02>
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
                        ※楽天回線対応製品でない機種名は表示されません。
                      </TxtCapCustom>
                    </li>
                  </UlOnly>
                </>
              )}
            </div>
          </SystemContainer>
        </div>
        <GlobalFooter
          breadcrumbsItem={breadcrumbs}
          relatedItems={['plan', 'product', 'support']}
        />
      </SystemWrapper>
    </>
  )
}

export default GuideServiceRepairclosed
