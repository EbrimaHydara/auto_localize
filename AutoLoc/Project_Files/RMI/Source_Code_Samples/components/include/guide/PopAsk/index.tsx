import React, { useEffect } from 'react'
import { SystemContainer } from '@components/layout/System'
import Utils from '@styles/Utils.module.scss'

interface GuidePopAskProps {
  config?: string
  className?: string
  version?: string
}

export const GuidePopAsk = (props: GuidePopAskProps) => {
  const { config, className, version } = props
  useEffect(() => {
    const scriptLoad1 = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = false
      script.id = 'rex-survey-config'
      const configTxt = config
        ? config
        : `
      window.rexSurveyConfig = {"surveyId":"36762","cId":{"name":"answers[36762_252857]","value":""},"embedded":true,"url":{"name":"answers[36762_252858]"},"triggerIdName":"trigger","expirationPeriod":30,"enableDisplaySuppressionPerPage":true,"enableFormAction":true,"permission":{"inquiryTxt":"今後の改善のため、本ページをご覧いただいた感想を教えてください (複数可)","yesBtnTxt":"協力する","noBtnTxt":"今は協力しない","available":true},"thanks":{"txt0":"ご協力ありがとうございました","txt1":"いただいた情報は、サービス改善のために使用させていただきます。"},"nps":{"available":true,"question":{"label":"このページの総合的な「わかりやすさ」について、どのように感じましたか？"},"options":[{"name":"answers[36762_252859]","value":"701500"},{"name":"answers[36762_252859]","value":"701501"},{"name":"answers[36762_252859]","value":"701502"},{"name":"answers[36762_252859]","value":"701503"},{"name":"answers[36762_252859]","value":"701504"}],"txt0":"わかりにくかった","txt1":"わかりやすかった","checked":4},"inquiry":{"checkList":{"available":true,"question":"今後の改善のため、本ページをご覧いただいた感想を教えてください (複数可)","options":[{"name":"answers[36762_252860][]","value":"701505","label":"知りたい情報が記載されていなかった(次の設問でご記入ください)"},{"name":"answers[36762_252860][]","value":"701506","label":"記載されている内容が理解できなかった"},{"name":"answers[36762_252860][]","value":"701507","label":"記載されているとおりにやってみたが解決しなかった"},{"name":"answers[36762_252860][]","value":"701508","label":"文字数や情報量が多すぎてわかりにくかった"},{"name":"answers[36762_252860][]","value":"701509","label":"色や文字サイズ等のデザインが見にくかった"},{"name":"answers[36762_252860][]","value":"701510","label":"その他(次の設問でご記入ください)"},{"name":"answers[36762_252860][]","value":"701511","label":" 特に無い"}]},"freeInput":{"available":true,"name":"answers[36762_252861]","title":"ご回答いただいた内容の理由や、このページについてのご意見・ご要望がございましたら、ご自由にお書きください【1000文字】"},"sendBtnTxt":"送信する","footerNote":{"available":true,"text":"お客様よりご提供いただく情報はサービス向上のためご利用させていただきます。","link":"https://privacy.rakuten.co.jp/","htmlText":""}},"inquiryNegative":{"checkList":{"available":false,"options":[{"name":"answers[36762_252860][]","value":"701505","label":""},{"name":"answers[36762_252860][]","value":"701506","label":""},{"name":"answers[36762_252860][]","value":"701507","label":""},{"name":"answers[36762_252860][]","value":"701508","label":""},{"name":"answers[36762_252860][]","value":"701509","label":""},{"name":"answers[36762_252860][]","value":"701510","label":""},{"name":"answers[36762_252860][]","value":"701511","label":""}]}},"ua":{"name":"answers[36762_252862]"},"href":{"name":"answers[36762_252863]"},"cookie":{"available":false},"assetPaths":{"closeButton":"","checkIcon":""}}
      `
      const scriptFunction = document.createTextNode(configTxt)
      const element = document.getElementById(script.id)
      if (!element) {
        script.appendChild(scriptFunction)
        document.body.appendChild(script)
      }
    }

    const scriptLoad2 = () => {
      const versionTag = version ? version : '1.5.0'
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = false
      script.id = 'rex-survey-main'
      script.src = `https://cdn.rex.contents.rakuten.co.jp/rex-ips/${versionTag}/js/main.js`
      const element = document.getElementById(script.id)
      if (!element) {
        document.body.appendChild(script)
      }
    }

    scriptLoad1()
    scriptLoad2()
  }, [config])
  return (
    <SystemContainer
      className={className ? className : `${Utils['Mt-64']} ${Utils['Mb-40']}`}
    >
      {/* ReX UX Survey: Mounting point for embedded components */}
      <div id="rexSurveyEmbedded" className="rexSurveyNamespace"></div>
      {/* ReX UX Survey: Config */}

      <div
        id="js-npsRadio-0"
        data-ratid="npsRadio_1"
        data-ratevent="click"
        data-ratparam="all"
      ></div>
      <div
        id="js-npsRadio-1"
        data-ratid="npsRadio_2"
        data-ratevent="click"
        data-ratparam="all"
      ></div>
      <div
        id="js-npsRadio-2"
        data-ratid="npsRadio_3"
        data-ratevent="click"
        data-ratparam="all"
      ></div>
      <div
        id="js-npsRadio-3"
        data-ratid="npsRadio_4"
        data-ratevent="click"
        data-ratparam="all"
      ></div>
      <div
        id="js-npsRadio-4"
        data-ratid="npsRadio_5"
        data-ratevent="click"
        data-ratparam="all"
      ></div>
    </SystemContainer>
  )
}
