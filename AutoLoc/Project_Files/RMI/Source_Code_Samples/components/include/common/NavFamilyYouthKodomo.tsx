import React, { useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { assets } from '@components/utils/assets'
import { mixins } from '@components/utils/Mixins'
import { ButtonRegular } from '@components/atoms/Buttons'
import { Heading, HeadingLevel } from '@components/atoms/Heading'
import Utils from '@styles/Utils.module.scss'
import { TxtEmp02 } from '@components/atoms/Txt'

const ContentWrapperSingle = styled.div`
  display: flex;
  justify-content: center;
`
const ContentItemSingle = styled.div`
  ${mixins.mq.MaxM} {
    width: 100%;
    max-width: 686px;
  }
`
const ContentItemImg = styled.div`
  border-radius: 8px 8px 0 0;
`
const buttonWrapStyle = css`
  display: flex;
  justify-content: center;
  padding-block: 16px;
  border-radius: 0 0 8px 8px;
`
const ContentBtnWrapFamily = styled.div`
  ${buttonWrapStyle}
  background-color: #F8FAB9;
`
const ContentBtnWrapYouth = styled.div`
  ${buttonWrapStyle}
  background-color: #CEE5F5;
`
const ContentBtnWrapKodomo = styled.div`
  ${buttonWrapStyle}
  background-color: #D1F0D4;
`
const ButtonRegularCustom = styled(ButtonRegular)`
  width: auto;
`
const ContentWrapperMulti = styled.div`
  display: flex;
  gap: 24px;
  ${mixins.mq.MaxM} {
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }
`
const ContentItemMulti = styled.div`
  width: 50%;
  ${mixins.mq.MaxM} {
    width: 100%;
    max-width: 686px;
  }
`

const isHeadingLevel = (value: string): value is HeadingLevel =>
  ['1', '2', '3', '4'].includes(value)

type ShowElements = {
  first?: string
  second?: string[]
}
interface CommonNavFamilyYouthKodomoProps {
  headingLevels?: string[]
  originalHeading1?: JSX.Element | JSX.Element[]
  originalHeading2?: JSX.Element | JSX.Element[]
  familyParam?: string
  youthParam?: string
  kidsParam?: string
  showElements: ShowElements
  className?: string
}
export const CommonNavFamilyYouthKodomo = (
  props: CommonNavFamilyYouthKodomoProps,
) => {
  const theme = useContext(ThemeContext)
  const {
    headingLevels,
    originalHeading1,
    originalHeading2,
    familyParam,
    youthParam,
    kidsParam,
    showElements,
    className,
  } = props
  return (
    <div className={className}>
      {headingLevels &&
      headingLevels.length &&
      isHeadingLevel(headingLevels[0]) ? (
        <Heading level={headingLevels[0]} className={Utils['Align-center']}>
          Rakuten最強プランと
          <br className={Utils['Show-oox']} />
          セットでさらにおトク！
        </Heading>
      ) : (
        <>{originalHeading1}</>
      )}
      {showElements.first === 'family' && (
        <ContentWrapperSingle className={Utils['Mt-16']}>
          <ContentItemSingle className="single">
            <ContentItemImg>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/inc/nav-family-youth-kodomo/program-family-sp.png`}
                  width="686"
                  height="296"
                />
                <img
                  src={`${assets}img/inc/nav-family-youth-kodomo/program-family-wide-pc.png`}
                  loading="lazy"
                  width="1032"
                  height="112"
                  alt="家族みんな 毎月ずーっと100円（税別）引き 最強家族プログラム 親戚や同居者もOK!"
                />
              </picture>
            </ContentItemImg>
            <ContentBtnWrapFamily>
              <ButtonRegularCustom
                as="a"
                href={`/fee/family/${
                  familyParam ? `?l-id=${familyParam}` : ''
                }`}
              >
                詳細を見る
              </ButtonRegularCustom>
            </ContentBtnWrapFamily>
          </ContentItemSingle>
        </ContentWrapperSingle>
      )}
      {headingLevels &&
      headingLevels.length &&
      isHeadingLevel(headingLevels[1]) ? (
        <Heading
          level={headingLevels[1]}
          className={`${Utils['Align-center']}${
            showElements.first !== undefined ? ` ${Utils['Mt-32']}` : ''
          }`}
        >
          0歳から22歳までは
          <br className={Utils['Show-oxx']} />
          <TxtEmp02>もーっとおトク!</TxtEmp02>
        </Heading>
      ) : (
        <>{originalHeading2}</>
      )}
      <ContentWrapperMulti className={Utils['Mt-8']}>
        {showElements.second && showElements.second.includes('family') ? (
          <ContentItemMulti>
            <ContentItemImg>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/inc/nav-family-youth-kodomo/program-family-sp.png`}
                  width="686"
                  height="296"
                />
                <img
                  src={`${assets}img/inc/nav-family-youth-kodomo/program-family-slim-pc.png`}
                  loading="lazy"
                  width="504"
                  height="112"
                  alt="家族みんな 毎月ずーっと100円（税別）引き 最強家族プログラム 親戚や同居者もOK!"
                />
              </picture>
            </ContentItemImg>
            <ContentBtnWrapFamily>
              <ButtonRegularCustom
                as="a"
                href={`/fee/family/${
                  familyParam ? `?l-id=${familyParam}` : ''
                }`}
              >
                詳細を見る
              </ButtonRegularCustom>
            </ContentBtnWrapFamily>
          </ContentItemMulti>
        ) : (
          ''
        )}
        {showElements.second && showElements.second.includes('youth') ? (
          <ContentItemMulti>
            <ContentItemImg>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/inc/nav-family-youth-kodomo/program-seisyun-sp.png`}
                  width="686"
                  height="296"
                />
                <img
                  src={`${assets}img/inc/nav-family-youth-kodomo/program-seisyun-pc.png`}
                  loading="lazy"
                  width="504"
                  height="112"
                  alt="22歳まで 毎月110ポイント還元! 最強青春プログラム U22 ※要エントリー"
                />
              </picture>
            </ContentItemImg>
            <ContentBtnWrapYouth>
              <ButtonRegularCustom
                as="a"
                href={`/fee/youth/${youthParam ? `?l-id=${youthParam}` : ''}`}
              >
                詳細を見る
              </ButtonRegularCustom>
            </ContentBtnWrapYouth>
          </ContentItemMulti>
        ) : (
          ''
        )}
        {showElements.second && showElements.second.includes('kodomo') ? (
          <ContentItemMulti>
            <ContentItemImg>
              <picture>
                <source
                  media={`(max-width:${theme.max.m})`}
                  srcSet={`${assets}img/inc/nav-family-youth-kodomo/program-kodomo-sp.png`}
                  width="686"
                  height="296"
                />
                <img
                  src={`${assets}img/inc/nav-family-youth-kodomo/program-kodomo-pc.png`}
                  loading="lazy"
                  width="504"
                  height="112"
                  alt="新登場！ 12歳まで 毎月最大440ポイント還元 ※ 3GB超過時の還元額は110ポイント 最強こどもプログラム新登場 U12 ※要エントリー"
                />
              </picture>
            </ContentItemImg>
            <ContentBtnWrapKodomo>
              <ButtonRegularCustom
                as="a"
                href={`/fee/kids/${kidsParam ? `?l-id=${kidsParam}` : ''}`}
              >
                詳細を見る
              </ButtonRegularCustom>
            </ContentBtnWrapKodomo>
          </ContentItemMulti>
        ) : (
          ''
        )}
      </ContentWrapperMulti>
    </div>
  )
}
