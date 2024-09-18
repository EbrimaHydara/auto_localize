import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { assets } from '@components/utils/assets'
import { Select } from '@components/atoms/Select'
import { ButtonPrimaryLarge } from '@components/atoms/Buttons'
import Utils from '@styles/Utils.module.scss'
import { mixins } from '@components/utils/Mixins'

const SelectWrap = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  ${mixins.mq.MaxM} {
    display: block;
  }
  > div {
    width: 100%;
    ${mixins.mq.MaxM} {
      margin-bottom: 16px;
    }
  }
`
type SearchBtnType = {
  lid?: string
}

const ShopSearch: React.FC<SearchBtnType> = ({ lid }) => {
  const [selectedPrefecture, setSelectedPrefecture] = useState('都道府県を選択')
  const [cities, setCities] = useState<any>([
    { text: '市区町村を選択', value: '' },
  ])
  const [selectedCity, setSelectedCity] = useState('')
  const [url, setUrl] = useState('')

  const prefectures = [
    '都道府県を選択',
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県',
    '山形県',
    '福島県',
    '茨城県',
    '栃木県',
    '群馬県',
    '埼玉県',
    '千葉県',
    '東京都',
    '神奈川県',
    '新潟県',
    '富山県',
    '石川県',
    '福井県',
    '山梨県',
    '長野県',
    '岐阜県',
    '静岡県',
    '愛知県',
    '三重県',
    '滋賀県',
    '京都府',
    '大阪府',
    '兵庫県',
    '奈良県',
    '和歌山県',
    '鳥取県',
    '島根県',
    '岡山県',
    '広島県',
    '山口県',
    '徳島県',
    '香川県',
    '愛媛県',
    '高知県',
    '福岡県',
    '佐賀県',
    '長崎県',
    '熊本県',
    '大分県',
    '宮崎県',
    '鹿児島県',
    '沖縄県',
  ]

  const isLocal = false

  useEffect(() => {
    // ここで選択された都道府県に基づいて都市データをフェッチします
    if (selectedPrefecture) {
      fetchCities(selectedPrefecture) // 実際にはフェッチ処理を実装する必要があります
    }
  }, [selectedPrefecture])

  const fetchCities = async (prefecture: string) => {
    try {
      const apiUrl = isLocal
        ? `${assets}json/shop_dummy.json`
        : 'https://network.mobile.rakuten.co.jp/shopmaster-public/v1/shops'

      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('データの取得に失敗しました')
      }
      const data = await response.json()

      // レスポンスから都市データを抽出して加工
      const cityOptions = data
        .filter((item: any) => item.location.prefecture === prefecture)
        .map((item: any) => ({
          text: item.location.city,
          value: item.location.city,
        }))

      // 重複を排除（同じ都市名が複数含まれる可能性があるため）
      const uniqueCities = Array.from(
        new Set(cityOptions.map((option: any) => option.text)),
      ).map(text => ({
        text,
        value: text,
      }))

      const cityDefaultOption = [
        { text: '市区町村を選択', value: '' },
        ...uniqueCities,
      ]

      setCities(cityDefaultOption)
    } catch (error) {
      console.error('都市データのフェッチ中にエラーが発生しました', error)
      // エラーハンドリングをここで行う（ユーザーに通知する等）
    }
  }

  const handlePrefectureChange = (value?: string) => {
    setSelectedPrefecture(value || '')
    setSelectedCity('') // 都道府県が変わると都市の選択をリセット
  }

  const handleCityChange = (value?: string) => {
    setSelectedCity(value || '')
  }

  useEffect(() => {
    if (selectedPrefecture !== '都道府県を選択') {
      const newUrl = `/shop/search/?prefecture=${selectedPrefecture}&city=${selectedCity}&l-id=${lid}`
      setUrl(newUrl)
    } else {
      setUrl('')
    }
  }, [selectedPrefecture, selectedCity, lid])

  return (
    <>
      <SelectWrap>
        <Select
          options={prefectures.map(pref => ({ text: pref, value: pref }))}
          onSelectedChange={handlePrefectureChange}
          currentSelected={selectedPrefecture}
        />
        <Select
          options={cities}
          onSelectedChange={handleCityChange}
          currentSelected={selectedCity}
          disabled={cities.length === 1 ? true : false}
        />
      </SelectWrap>
      <div className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
        <ButtonPrimaryLarge
          aria-disabled={!url}
          onClick={() => (window.location.href = url)}
        >
          ショップを探す
        </ButtonPrimaryLarge>
      </div>
    </>
  )
}

export default ShopSearch
