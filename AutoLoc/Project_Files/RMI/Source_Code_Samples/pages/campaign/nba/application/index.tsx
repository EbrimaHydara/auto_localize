import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { CustomHead } from '@components/utils/CustomHead'

const CampaignNbaApplication: NextPage = () => {
  const pagetitle =
    '楽天モバイルご契約者様限定！ NBA LEAGUE PASS for 楽天モバイルが無料！'
  const directories = [
    { path: '/campaign/', label: 'キャンペーン・特典' },
    {
      path: '/campaign/nba/',
      label:
        '楽天モバイルご契約者様限定！ NBA LEAGUE PASS for 楽天モバイルが無料！',
    },
  ]

  const InsertCvTag = () => {
    const scriptLoadIMobileConversionTag = () => {
      const fragmentElement = document.createDocumentFragment()

      // 計測データ作成
      const measurementScript = document.createElement('script')
      measurementScript.type = 'text/javascript'
      const measurementScriptFunction = document.createTextNode(`
      (function (IMobile) {
        (function (cv) {
          cv.push({
            sid: "34002",
          })
        })(IMobile.cv || (IMobile.cv = []));
      })(window.IMobile || (window.IMobile = {}));
      `)
      measurementScript.appendChild(measurementScriptFunction)
      fragmentElement.appendChild(measurementScript)

      // 計測データ集計用script読み込み
      const excuteScript = document.createElement('script')
      excuteScript.type = 'text/javascript'
      excuteScript.async = true
      excuteScript.src = 'https://spmeasure.i-mobile.co.jp/script/v2/cnv.js'
      fragmentElement.appendChild(excuteScript)

      document.body.appendChild(fragmentElement)
    }

    useEffect(() => {
      scriptLoadIMobileConversionTag()
    }, [])
  }
  InsertCvTag()

  const [paramsStr, setParamStr] = useState('')
  useEffect(() => {
    const currentSerachParams = new URLSearchParams(window.location.search)
    const lidRParam = currentSerachParams.get('lid-r')
    setParamStr(lidRParam ? `?lid-r=${lidRParam}` : '')
  }, [])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        noindex={true}
        redirect={{
          url: `guide/application/${paramsStr}`,
          delay: '2',
        }}
      />
    </>
  )
}

export default CampaignNbaApplication
