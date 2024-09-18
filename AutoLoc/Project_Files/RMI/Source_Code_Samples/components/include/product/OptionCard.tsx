import { mixins } from '@components/utils/Mixins'
import { InfoboxLight } from '@components/atoms/Infobox'
import { LinkNormal } from '@components/atoms/Link'
import styled, { ThemeContext } from 'styled-components'
import Utils from '@styles/Utils.module.scss'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { useContext } from 'react'
import { assets } from '@components/utils/assets'
import { BannerHover } from '@components/atoms/Banner'

interface OptionListProps {
  pcInlineGap: string
  pcBlockGap: string
  spGap: string
}
const OptionList = styled.ul<OptionListProps>`
  display: grid;
  ${mixins.mq.MaxM} {
    gap: ${props => props.spGap};
  }
  ${mixins.mq.MinL} {
    gap: ${props => props.pcBlockGap} ${props => props.pcInlineGap};
    grid-template-columns: 1fr 1fr;
  }
`
const OptionLink = styled(LinkNormal)`
  font-weight: 700;
  font-size: 19px;
`
const OptionBodyWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 24px;
  ${mixins.mq.MinL} {
    gap: 32px;
  }
  > img {
    width: 88px;
    height: 100%;
    ${mixins.mq.MinL} {
      width: 136px;
    }
  }
`
const InfoboxLightCustom = styled(InfoboxLight)`
  height: 100%;
`
const OptionFlexImage = styled.div`
  display: flex;
  gap: 4px 8px;
  ${mixins.mq.MaxM} {
    flex-flow: column;
  }
`

interface FlexImage {
  img1: string
  img2: string
}
export interface OptionCardData {
  title: string
  url: string
  imageData: string | FlexImage
  body: JSX.Element
}
export const ProductOptionCard = (props: {
  data: OptionCardData[]
  optionListProps: OptionListProps
  otherOptionLid?: string
  isShowAppendBnr?: boolean
}) => {
  const theme = useContext(ThemeContext)
  const { data, optionListProps, otherOptionLid, isShowAppendBnr } = props
  return (
    <>
      <OptionList
        className={`${Utils['Mt-pc-24']} ${Utils['Mt-sp-16']}`}
        pcInlineGap={optionListProps.pcInlineGap}
        pcBlockGap={optionListProps.pcBlockGap}
        spGap={optionListProps.spGap}
      >
        {data.map(v => (
          <li key={v.url}>
            <InfoboxLightCustom>
              <OptionLink href={v.url}>{v.title}</OptionLink>
              <OptionBodyWrapper>
                {typeof v.imageData === 'object' ? (
                  <>
                    <OptionFlexImage>
                      <div>
                        <img
                          src={v.imageData.img1}
                          width="100"
                          height="100"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={v.imageData.img2}
                          width="100"
                          height="100"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </OptionFlexImage>
                    {v.body}
                  </>
                ) : (
                  <>
                    <img src={v.imageData} alt="" />
                    {v.body}
                  </>
                )}
              </OptionBodyWrapper>
            </InfoboxLightCustom>
          </li>
        ))}
      </OptionList>
      {/* ↓↓バナーは一時的 */}
      {isShowAppendBnr && (
        <BannerHover
          href="/campaign/applecare/?l-id=product_iphone_campaign_applecare"
          className={Utils['Mt-24']}
        >
          <picture>
            <source
              media={`(max-width: ${theme.max.m})`}
              srcSet={`${assets}img/common/bnr-applecare-amonth-free-343-108.png`}
              width="686"
              height="216"
            />
            <img
              src={`${assets}img/common/bnr-applecare-amonth-free-1032-160.png`}
              width="1032"
              height="160"
              alt="故障紛失保証 with AppleCare Services（月額最大1,460円）をiPhone購入と同時申し込みで1,460ポイント還元。実質1カ月無料。"
              loading="lazy"
            />
          </picture>
        </BannerHover>
      )}
      <div className={`${Utils['Align-center']} ${Utils['Mt-24']}`}>
        <ButtonRegularLarge
          as="a"
          href={`/service/${otherOptionLid ? '?l-id=' + otherOptionLid : ''}`}
        >
          他のオプションを探す
        </ButtonRegularLarge>
      </div>
    </>
  )
}
