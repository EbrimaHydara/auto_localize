import React from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { TxtCap, TxtEmp02 } from '@components/atoms/Txt'
import { ButtonSecondaryLarge } from '@components/atoms/Buttons'
import { CardNormal } from '@components/atoms/Card'

const CpnList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  ${mixins.mq.MinM} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mixins.mq.MinL} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const CpnCard = styled(CardNormal)`
  height: 100%;
`
const CpnCardName = styled.div`
  margin-top: 8px;
  font-size: ${props => props.theme.fonts.m};
  font-weight: 700;
`
const CpnCardBonus = styled(TxtCap)`
  padding-top: 8px;
  border-top: 1px solid ${props => props.theme.colors.monotone75};
`

// 親でも使ってるのでexport
export type CpnData = {
  link: string
  bnr: string
  title: string
  description: string
  annotation: string
  display_price_text: string
  tag?: string
  service?: string
  display_max_bonus?: string
  benefit?: string
}
type Props = {
  data: CpnData[]
  btnUrl: string
  isHistory?: boolean
  pageType: string
  firstLine: string
  secondLine: string
}

export const CampaignList: React.FC<Props> = ({
  data,
  btnUrl,
  isHistory,
  pageType,
  firstLine,
  secondLine,
}) => {
  const renderTextWithNewlines = (text: string) => {
    return text
      .split(/(\r\n|\n|\r)/gm)
      .map((line, index) =>
        line.match(/(\r\n|\n|\r)/gm) ? <br key={index} /> : line,
      )
  }

  const setBnrRat = () => {
    let ratid = 'campaign_scroll-01_submission'
    if (pageType === 'cpn-member-')
      ratid = 'campaign-member_scroll-01_submission'
    return ratid
  }

  const setSessionSet = (
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
  ) => {
    if (pageType === 'cpn-top-') {
      firstLine && sessionStorage.setItem('cpn-top-Application', firstLine)
      secondLine && sessionStorage.setItem('cpn-top-Product', secondLine)
    } else if (pageType === 'cpn-member-') {
      firstLine && sessionStorage.setItem('cpn-member-service', firstLine)
      secondLine && sessionStorage.setItem('cpn-member-benefit', secondLine)
    }
    ev.preventDefault()
    const scrollY = window.scrollY.toString()
    sessionStorage.setItem(`${pageType}scrolly`, scrollY)
    window.location.href = link
  }

  return (
    <>
      <CpnList>
        {data.map((item, index) => (
          <li key={item.bnr}>
            <CpnCard
              href={item.link}
              // なにかフィルタリングしていればヒストリーバックで戻ってきた時に元の内容と位置になるように
              // クリックしたタイミングでフィルタ内容とスクロール位置を記録しておく
              // 親でクリアする
              onClick={ev => {
                isHistory && setSessionSet(ev, item.link)
              }}
            >
              <div>
                <img
                  src={`${assets}img/bnr/${item.bnr}`}
                  alt={item.title}
                  width="364"
                  height="205"
                  loading={index > 2 ? 'lazy' : undefined}
                />
              </div>
              <CpnCardName
                data-ratid={index === 0 ? setBnrRat() : undefined}
                data-ratevent={index === 0 ? 'appear' : undefined}
                data-ratparam={index === 0 ? 'all' : undefined}
              >
                {renderTextWithNewlines(item.title)}
              </CpnCardName>
              <p className={Utils['Mt-16']}>
                {renderTextWithNewlines(item.description)}
              </p>
              {item.annotation.trim() && (
                <TxtCap as="p" className={Utils['Mt-16']}>
                  {renderTextWithNewlines(item.annotation)}
                </TxtCap>
              )}
              {item.display_max_bonus &&
                item.display_max_bonus.trim() === '1' && (
                  <CpnCardBonus as="p" className={Utils['Mt-16']}>
                    キャンペーン特典は
                    <TxtEmp02>
                      初めてお申し込み限定特典を含む最大での表示
                    </TxtEmp02>
                    です。2回線目以降のお申し込みは初めてお申し込み限定特典の付与対象外となります。対象となる特典は各キャンペーンルールをご確認ください。
                  </CpnCardBonus>
                )}
            </CpnCard>
          </li>
        ))}
      </CpnList>
      <div className={`${Utils['Align-center']} ${Utils['Mt-64']}`}>
        <ButtonSecondaryLarge
          as="a"
          href={btnUrl}
          onClick={ev => {
            isHistory && setSessionSet(ev, btnUrl)
          }}
        >
          過去のキャンペーン・特典はこちら
        </ButtonSecondaryLarge>
      </div>
    </>
  )
}
