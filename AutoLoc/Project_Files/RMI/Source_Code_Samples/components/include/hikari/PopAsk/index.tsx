import React, { useEffect } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  div[class^='nps-message'].nps-message {
    width: auto;
  }
`

export const HikariPopAskFooter = () => {
  const scriptLoad1 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    const scriptFunction = document.createTextNode(`
      window.rexSurveyConfig = {"surveyId":"38201","cId":{"name":"answers[38201_261839]","value":""},"embedded":true,"url":{"name":"answers[38201_261840]"},"triggerIdName":"trigger","expirationPeriod":0,"enableDisplaySuppressionPerPage":false,"enableFormAction":false,"permission":{"inquiryTxt":"キャンペーンをより分かりやすくするためにアンケートにご協力ください (選択式1問) ","yesBtnTxt":"協力する","noBtnTxt":"今は協力しない","available":true},"thanks":{"txt0":"ご協力ありがとうございました","txt1":"いただいた情報はサービス改善のために使用させていただきます。"},"nps":{"available":true,"question":{"label":"このページはわかりやすかったですか？"},"options":[{"name":"answers[38201_261841]","value":"724975"},{"name":"answers[38201_261841]","value":"724976"},{"name":"answers[38201_261841]","value":"724977"},{"name":"answers[38201_261841]","value":"724978"},{"name":"answers[38201_261841]","value":"724979"}],"txt0":"わかりづらかった","txt1":"わかりやすかった","checked":4},"inquiry":{"checkList":{"available":true,"question":"キャンペーンやページについて感じたことで、当てはまるものを選択してください 。（複数選択可）","options":[{"name":"answers[38201_261842][]","value":"724980","label":"1. キャンペーンの適用条件がわかりにくい"},{"name":"answers[38201_261842][]","value":"724981","label":"2. 料金に関する説明がわかりにくい"},{"name":"answers[38201_261842][]","value":"724982","label":"3. ポイントに関する説明がわかりにくい"},{"name":"answers[38201_261842][]","value":"724983","label":"4. 回線速度に関する説明がわかりにくい"},{"name":"answers[38201_261842][]","value":"724984","label":"5. 楽天ひかりの申し込み方法がわかりにくい"},{"name":"answers[38201_261842][]","value":"724985","label":"6. 文字数や情報量が多すぎてわかりにくい"},{"name":"answers[38201_261842][]","value":"724986","label":"7. 色や文字サイズ等のデザインが見にくい"}]},"freeInput":{"available":true,"name":"answers[38201_261843]","title":"ご回答いただいた内容の理由や、その他のご意見・ご要望を記入してください（任意）【1000文字】"},"sendBtnTxt":"送信する","footerNote":{"available":true,"text":"お客様よりご提供いただく情報はサービス向上のためご利用させていただきます。","link":"https://corp.mobile.rakuten.co.jp/guide/privacy/","htmlText":""}},"inquiryNegative":{"checkList":{"available":false,"options":[{"name":"answers[38201_261842][]","value":"724980","label":""},{"name":"answers[38201_261842][]","value":"724981","label":""},{"name":"answers[38201_261842][]","value":"724982","label":""},{"name":"answers[38201_261842][]","value":"724983","label":""},{"name":"answers[38201_261842][]","value":"724984","label":""},{"name":"answers[38201_261842][]","value":"724985","label":""},{"name":"answers[38201_261842][]","value":"724986","label":""}]}},"ua":{"name":"answers[38201_261844]"},"href":{"name":"answers[38201_261845]"},"cookie":{"available":false},"assetPaths":{"closeButton":"","checkIcon":""}}
    `)
    script.appendChild(scriptFunction)
    document.body.appendChild(script)
  }

  const scriptLoad2 = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src =
      'https://cdn.rex.contents.rakuten.co.jp/rex-ips/1.5.0/js/main.js'
    document.body.appendChild(script)
  }
  useEffect(() => {
    scriptLoad1()
    scriptLoad2()
  }, [])
  return <Div id="rexSurveyEmbedded" className="rexSurveyNamespace"></Div>
}
