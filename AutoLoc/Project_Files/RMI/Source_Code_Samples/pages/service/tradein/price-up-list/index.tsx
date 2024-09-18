import type { NextPage } from 'next'
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'
import { CustomHead } from '@components/utils/CustomHead'
import { Heading } from '@components/atoms/Heading'
import { GlobalHeader } from '@components/molecules/GlobalHeader'
import { GlobalFooter } from '@components/molecules/GlobalFooter'
import { BreadcrumbsHead } from '@components/atoms/BreadcrumbsHead'
import { TxtCap, TxtSize, TxtEmp02 } from '@components/atoms/Txt'
import { SystemWrapper, SystemContainer } from '@components/layout/System'
import { LinkIconAfter } from '@components/atoms/Link'
import { Select } from '@components/atoms/Select'
import { ButtonRegular, ButtonPrimaryLarge } from '@components/atoms/Buttons'
import { IconChevronRight } from '@components/icons'
import { Table } from '@components/atoms/Table'
import { Tab } from '@components/atoms/Tab'

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  > div {
    width: 250px;
    margin-left: 16px;
    ${mixins.mq.MaxM} {
      width: 200px;
      margin-left: 8px;
    }
  }
  > span {
    ${mixins.mq.MaxM} {
      font-size: 13px;
    }
  }
`

const TableCustom = styled(Table)`
  table {
    th {
      vertical-align: middle;
      text-align: center;
      width: calc(100% / 3);
    }
    td {
      padding: 16px 8px;
      vertical-align: middle;
      text-align: center;
    }
  }
`

const ServiceTradeinPriceuplist: NextPage = () => {
  const pagetitle = '下取り価格アップ製品一覧'
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

  const sortListIphone: selectBoxItem[] = [
    { text: '全機種', value: 'all' },
    { text: 'iPhone 11 Pro Max', value: 'iPhone 11 Pro Max' },
    { text: 'iPhone 11 Pro', value: 'iPhone 11 Pro' },
    { text: 'iPhone 11', value: 'iPhone 11' },
    { text: 'iPhone XS', value: 'iPhone XS' },
    { text: 'iPhone XR', value: 'iPhone XR' },
    { text: 'iPhone X', value: 'iPhone X' },
  ]

  const sortListAndroid: selectBoxItem[] = [
    { text: '全ブランド', value: 'all' },
    { text: 'Galaxy', value: 'Galaxy' },
    { text: 'AQUOS', value: 'AQUOS' },
    { text: 'Xperia', value: 'Xperia' },
  ]

  const dataIphone: tradeinPriceUpItem[] = [
    {
      device: 'iPhone 11 Pro Max 512GB',
      carrier: 'docomo',
      price: '27,000',
      maxPrice: '32,740',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 512GB',
      carrier: 'au',
      price: '27,000',
      maxPrice: '32,700',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 512GB',
      carrier: 'Softbank',
      price: '27,000',
      maxPrice: '33,070',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 512GB',
      carrier: 'SIMフリー',
      price: '27,000',
      maxPrice: '33,070',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 256GB',
      carrier: 'docomo',
      price: '22,500',
      maxPrice: '28,240',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 256GB',
      carrier: 'au',
      price: '23,400',
      maxPrice: '28,570',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 256GB',
      carrier: 'Softbank',
      price: '23,400',
      maxPrice: '28,570',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 256GB',
      carrier: 'SIMフリー',
      price: '23,400',
      maxPrice: '28,570',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 64GB',
      carrier: 'docomo',
      price: '15,300',
      maxPrice: '23,370',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 64GB',
      carrier: 'au',
      price: '15,300',
      maxPrice: '23,370',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 64GB',
      carrier: 'Softbank',
      price: '15,300',
      maxPrice: '23,370',
      group: 'iPhone 11 Pro Max',
    },
    {
      device: 'iPhone 11 Pro Max 64GB',
      carrier: 'SIMフリー',
      price: '15,300',
      maxPrice: '23,370',
      group: 'iPhone 11 Pro Max',
    },

    {
      device: 'iPhone 11 Pro 512GB',
      carrier: 'docomo',
      price: '20,520',
      maxPrice: '26,870',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 512GB',
      carrier: 'au',
      price: '20,520',
      maxPrice: '26,470',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 512GB',
      carrier: 'Softbank',
      price: '20,520',
      maxPrice: '27,200',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 512GB',
      carrier: 'SIMフリー',
      price: '20,520',
      maxPrice: '27,200',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 256GB',
      carrier: 'docomo',
      price: '18,000',
      maxPrice: '21,600',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 256GB',
      carrier: 'au',
      price: '18,900',
      maxPrice: '21,940',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 256GB',
      carrier: 'Softbank',
      price: '18,900',
      maxPrice: '21,940',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 256GB',
      carrier: 'SIMフリー',
      price: '18,900',
      maxPrice: '21,940',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 64GB',
      carrier: 'docomo',
      price: '12,600',
      maxPrice: '18,140',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 64GB',
      carrier: 'au',
      price: '12,600',
      maxPrice: '18,140',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 64GB',
      carrier: 'Softbank',
      price: '12,600',
      maxPrice: '18,140',
      group: 'iPhone 11 Pro',
    },
    {
      device: 'iPhone 11 Pro 64GB',
      carrier: 'SIMフリー',
      price: '12,600',
      maxPrice: '18,140',
      group: 'iPhone 11 Pro',
    },

    {
      device: 'iPhone 11 256GB',
      carrier: 'docomo',
      price: '14,400',
      maxPrice: '18,340',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 256GB',
      carrier: 'au',
      price: '14,400',
      maxPrice: '18,340',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 256GB',
      carrier: 'Softbank',
      price: '14,400',
      maxPrice: '18,340',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 256GB',
      carrier: 'SIMフリー',
      price: '14,400',
      maxPrice: '18,340',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 128GB',
      carrier: 'docomo',
      price: '13,500',
      maxPrice: '17,300',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 128GB',
      carrier: 'au',
      price: '13,500',
      maxPrice: '17,300',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 128GB',
      carrier: 'Softbank',
      price: '13,500',
      maxPrice: '17,300',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 128GB',
      carrier: 'SIMフリー',
      price: '13,500',
      maxPrice: '17,300',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 64GB',
      carrier: 'docomo',
      price: '10,800',
      maxPrice: '15,540',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 64GB',
      carrier: 'au',
      price: '10,800',
      maxPrice: '15,540',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 64GB',
      carrier: 'Softbank',
      price: '10,800',
      maxPrice: '15,540',
      group: 'iPhone 11',
    },
    {
      device: 'iPhone 11 64GB',
      carrier: 'SIMフリー',
      price: '10,800',
      maxPrice: '15,540',
      group: 'iPhone 11',
    },

    {
      device: 'iPhone XS 512GB',
      carrier: 'docomo',
      price: '14,040',
      maxPrice: '16,400',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 512GB',
      carrier: 'au',
      price: '14,040',
      maxPrice: '16,400',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 512GB',
      carrier: 'Softbank',
      price: '14,040',
      maxPrice: '16,400',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 512GB',
      carrier: 'SIMフリー',
      price: '14,040',
      maxPrice: '16,400',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 256GB',
      carrier: 'docomo',
      price: '9,000',
      maxPrice: '13,670',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 256GB',
      carrier: 'au',
      price: '9,000',
      maxPrice: '13,670',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 256GB',
      carrier: 'Softbank',
      price: '9,000',
      maxPrice: '13,670',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 256GB',
      carrier: 'SIMフリー',
      price: '9,000',
      maxPrice: '13,670',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 64GB',
      carrier: 'docomo',
      price: '4,500',
      maxPrice: '10,900',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 64GB',
      carrier: 'au',
      price: '4,500',
      maxPrice: '10,900',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 64GB',
      carrier: 'Softbank',
      price: '4,500',
      maxPrice: '10,900',
      group: 'iPhone XS',
    },
    {
      device: 'iPhone XS 64GB',
      carrier: 'SIMフリー',
      price: '4,500',
      maxPrice: '10,900',
      group: 'iPhone XS',
    },

    {
      device: 'iPhone XR 256GB',
      carrier: 'docomo',
      price: '10,800',
      maxPrice: '12,740',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 256GB',
      carrier: 'au',
      price: '10,800',
      maxPrice: '12,740',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 256GB',
      carrier: 'Softbank',
      price: '10,800',
      maxPrice: '12,740',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 256GB',
      carrier: 'SIMフリー',
      price: '10,800',
      maxPrice: '12,740',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 128GB',
      carrier: 'docomo',
      price: '8,100',
      maxPrice: '11,040',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 128GB',
      carrier: 'au',
      price: '8,100',
      maxPrice: '11,040',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 128GB',
      carrier: 'Softbank',
      price: '8,100',
      maxPrice: '11,040',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 128GB',
      carrier: 'SIMフリー',
      price: '8,100',
      maxPrice: '11,040',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 64GB',
      carrier: 'docomo',
      price: '3,600',
      maxPrice: '8,270',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 64GB',
      carrier: 'au',
      price: '3,600',
      maxPrice: '8,270',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 64GB',
      carrier: 'Softbank',
      price: '3,600',
      maxPrice: '8,270',
      group: 'iPhone XR',
    },
    {
      device: 'iPhone XR 64GB',
      carrier: 'SIMフリー',
      price: '3,600',
      maxPrice: '8,270',
      group: 'iPhone XR',
    },

    {
      device: 'iPhone X 256GB',
      carrier: 'docomo',
      price: '4,500',
      maxPrice: '7,040',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 256GB',
      carrier: 'au',
      price: '4,500',
      maxPrice: '7,040',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 256GB',
      carrier: 'Softbank',
      price: '4,500',
      maxPrice: '7,040',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 256GB',
      carrier: 'SIMフリー',
      price: '4,500',
      maxPrice: '7,040',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 64GB',
      carrier: 'docomo',
      price: '3,600',
      maxPrice: '5,970',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 64GB',
      carrier: 'au',
      price: '3,600',
      maxPrice: '5,970',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 64GB',
      carrier: 'Softbank',
      price: '3,600',
      maxPrice: '5,970',
      group: 'iPhone X',
    },
    {
      device: 'iPhone X 64GB',
      carrier: 'SIMフリー',
      price: '3,600',
      maxPrice: '5,970',
      group: 'iPhone X',
    },
  ]

  const dataAndroid: tradeinPriceUpItem[] = [
    {
      device: 'Galaxy Z Fold4',
      carrier: 'docomo',
      price: '56,700',
      maxPrice: '63,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy Z Flip4',
      carrier: 'docomo',
      price: '31,500',
      maxPrice: '42,300',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy Z Flip4',
      carrier: 'au',
      price: '33,300',
      maxPrice: '42,300',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy Z Flip4',
      carrier: 'Rakuten',
      price: '33,300',
      maxPrice: '42,300',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy Z Flip 3 5G SCG12',
      carrier: 'au',
      price: '19,500',
      maxPrice: '22,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S22 Ultra',
      carrier: 'docomo',
      price: '43,000',
      maxPrice: '49,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S22 Ultra',
      carrier: 'au',
      price: '48,000',
      maxPrice: '49,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S21+ 5G SCG10',
      carrier: 'au',
      price: '17,280',
      maxPrice: '21,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S21 5G SC51B',
      carrier: 'docomo',
      price: '17,280',
      maxPrice: '19,200',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S20+ 5G SCG02',
      carrier: 'au',
      price: '15,840',
      maxPrice: '16,600',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S20+ 5G SC-52A',
      carrier: 'docomo',
      price: '15,300',
      maxPrice: '17,670',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S20 Ultra 5G SCG03',
      carrier: 'au',
      price: '12,960',
      maxPrice: '28,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S20 5G SCG01',
      carrier: 'au',
      price: '8,100',
      maxPrice: '13,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S20 5G SC-51A',
      carrier: 'docomo',
      price: '8,100',
      maxPrice: '15,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S10+ SCV42',
      carrier: 'au',
      price: '6,300',
      maxPrice: '10,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S10+ SC-04L',
      carrier: 'docomo',
      price: '6,300',
      maxPrice: '10,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S10+ (Olympic Games Edition) SC-05L',
      carrier: 'docomo',
      price: '6,300',
      maxPrice: '11,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S10 SCV41',
      carrier: 'au',
      price: '3,600',
      maxPrice: '5,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S10 SC-03L',
      carrier: 'docomo',
      price: '3,600',
      maxPrice: '5,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy S10',
      carrier: 'Rakuten',
      price: '3,600',
      maxPrice: '5,000',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy A53 5G',
      carrier: 'docomo',
      price: '11,000',
      maxPrice: '14,400',
      group: 'Galaxy',
    },
    {
      device: 'Galaxy A53 5G',
      carrier: 'au',
      price: '12,000',
      maxPrice: '16,000',
      group: 'Galaxy',
    },
    {
      device: 'AQUOS sense7',
      carrier: 'docomo',
      price: '11,700',
      maxPrice: '13,000',
      group: 'AQUOS',
    },
    {
      device: 'AQUOS sense7',
      carrier: 'au',
      price: '12,600',
      maxPrice: '13,000',
      group: 'AQUOS',
    },
    {
      device: 'AQUOS sense7',
      carrier: 'Rakuten',
      price: '12,600',
      maxPrice: '13,000',
      group: 'AQUOS',
    },
    {
      device: 'Xperia 10 IV',
      carrier: 'docomo',
      price: '14,800',
      maxPrice: '17,300',
      group: 'Xperia',
    },
    {
      device: 'Xperia 10 IV',
      carrier: 'au',
      price: '11,700',
      maxPrice: '15,300',
      group: 'Xperia',
    },
    {
      device: 'Xperia 10 IV',
      carrier: 'Softbank',
      price: '11,700',
      maxPrice: '15,300',
      group: 'Xperia',
    },
    {
      device: 'Xperia 10 III SOG04',
      carrier: 'au',
      price: '8,910',
      maxPrice: '11,880',
      group: 'Xperia',
    },
    {
      device: 'Xperia 10 III SO52B',
      carrier: 'docomo',
      price: '8,910',
      maxPrice: '11,880',
      group: 'Xperia',
    },
    {
      device: 'Xperia 10 III Lite',
      carrier: 'Rakuten',
      price: '7,920',
      maxPrice: '8,500',
      group: 'Xperia',
    },
    {
      device: 'Xperia 1 IV',
      carrier: 'docomo',
      price: '29,700',
      maxPrice: '31,500',
      group: 'Xperia',
    },
  ]

  const [tradeinItemsIphone, setTradeinItemsIphone] = useState(dataIphone)
  const [tradeinItemsAndroid, setTradeinItemsAndroid] = useState(dataAndroid)
  const [selectedItemIphone, setSelectedItemIphone] = useState('')
  const [selectedItemAndroid, setSelectedItemAndroid] = useState('')

  const selectIphone = (selectedValue: string) => {
    let sortedListIphone
    if (selectedValue === 'all') {
      sortedListIphone = dataIphone
    } else {
      sortedListIphone = dataIphone.filter(item => item.group === selectedValue)
    }

    setTradeinItemsIphone(sortedListIphone)
    setSelectedItemIphone(selectedValue)
  }

  const selectAndroid = (selectedValue: string) => {
    let sortedListAndroid
    if (selectedValue === 'all') {
      sortedListAndroid = dataAndroid
    } else {
      sortedListAndroid = dataAndroid.filter(
        item => item.group === selectedValue,
      )
    }

    setTradeinItemsAndroid(sortedListAndroid)
    setSelectedItemAndroid(selectedValue)
  }

  type selectBoxItem = {
    text: string
    value: string
  }

  type tradeinPriceUpItem = {
    device: string
    carrier: string
    price: string
    maxPrice: string
    group: string
  }

  const TradeinPriceUpTable = useCallback((items: tradeinPriceUpItem[]) => {
    return (
      <TableCustom className={Utils['Mt-24']}>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>対象製品</th>
              <th colSpan={2}>下取り価格</th>
            </tr>
            <tr>
              <th>
                通常<TxtCap>※1</TxtCap>
              </th>
              <th>アップ期間（3/1〜）</th>
            </tr>
          </thead>
          <tbody>
            {items.map(
              item =>
                item.device && (
                  <tr key={item.device + item.carrier}>
                    <td>
                      {item.device}
                      <br className={Utils['Show-oxx']} />
                      <TxtCap className={Utils['Pl-8']}>
                        ({item.carrier})
                      </TxtCap>
                    </td>
                    <td>{item.price}円</td>
                    <td>
                      最大
                      <br className={Utils['Show-oxx']} />
                      <TxtEmp02>
                        <TxtSize size="m">{item.maxPrice}</TxtSize>
                      </TxtEmp02>
                      円
                      <br className={Utils['Show-oox']} />
                      {(() => {
                       if (item.device === 'Galaxy S20+ 5G SC-52A') {
                         return <TxtCap>※2</TxtCap>
                       } else if (item.device === 'Xperia 10 III SO52B') {
                         return <TxtCap>※2</TxtCap>
                       } else {
                       }
                      })()}
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </table>
      </TableCustom>
    )
  }, [])

  const TabContent1 = () => (
    <>
      <div>
        <SelectWrap>
          <span>機種で絞り込む</span>
          <Select
            options={sortListIphone}
            onSelectedChange={selectedVal =>
              typeof selectedVal === 'string' && selectIphone(selectedVal)
            }
            currentSelected={selectedItemIphone}
          />
        </SelectWrap>
        <div>{TradeinPriceUpTable(tradeinItemsIphone)}</div>
      </div>
    </>
  )

  const TabContent2 = () => (
    <>
      <div>
        <SelectWrap>
          <span>ブランドで絞り込む</span>
          <Select
            options={sortListAndroid}
            onSelectedChange={selectedVal =>
              typeof selectedVal === 'string' && selectAndroid(selectedVal)
            }
            currentSelected={selectedItemAndroid}
          />
        </SelectWrap>
        <div>{TradeinPriceUpTable(tradeinItemsAndroid)}</div>
      </div>
    </>
  )

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="2024年3月1日より下取り価格がアップしている製品一覧となります。"
      />
      <SystemWrapper>
        <GlobalHeader />
        <BreadcrumbsHead item={breadcrumbs} />
        <SystemContainer>
          <Heading level="1" className={Utils['Mt-32']}>
            {pagetitle}
          </Heading>
          <p className={Utils['Mt-32']}>
            2024年3月1日より下取り価格がアップしている、iPhone 11 / iPhone X /
            iPhone XR / iPhone XSと、Android製品の一覧がご確認いただけます。
          </p>

          <Tab
            className={Utils['Mt-24']}
            heading1={'iPhone'}
            heading2={'Android'}
            content1={<TabContent1 />}
            content2={<TabContent2 />}
          />
          <TxtCap as="p" className={Utils['Mt-16']}>
           ※1 2024年1月25日～2月29日の期間の下取り価格 。良品下取時。
           <br />
           ※2 2024年4月1日より価格変更。良品下取り時。
          </TxtCap>

          <div className={`${Utils['Align-center']} ${Utils['Mt-40']}`}>
            <ButtonPrimaryLarge
              href="https://r10.to/hM569V"
              as="a"
              data-ratid="tradein_price-up-list_apply"
              data-ratevent="click"
              data-ratparam="all"
            >
              下取りを申し込む
            </ButtonPrimaryLarge>
            <div className={Utils['Mt-16']}>
              <ButtonRegular
                href="/service/tradein/?l-id=service_tradein_price-up-list_service_tradein"
                as="a"
              >
                スマホ下取りサービスの詳細を見る
              </ButtonRegular>
            </div>
            <div className={Utils['Mt-8']}>
              <LinkIconAfter href="/service/tradein/price-list/?l-id=service_tradein_price-up-list_service_tradein_price-list">
                下取り価格を一覧で確認する
                <IconChevronRight />
              </LinkIconAfter>
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

export default ServiceTradeinPriceuplist
