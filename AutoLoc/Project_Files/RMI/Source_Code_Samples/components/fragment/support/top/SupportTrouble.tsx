import { Heading } from '@components/atoms/Heading'
import { TxtEmp02 } from '@components/atoms/Txt'
import { ResolutionTime } from '@components/category/Support'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
const Block = styled.div`
  padding: 24px 16px;
  box-shadow: 0 2px 2px #f2eee8;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  background-color: #fff;
  ${mixins.mq.MinL} {
    padding: 40px 16px;
  }
  > .read {
    display: flex;
    align-items: center;
    max-width: 780px;
    ${mixins.mq.MinM} {
      margin-inline: auto;
      justify-content: center;
    }
    > p {
      margin-left: 16px;
      flex: 1;
      ${mixins.mq.MinL} {
        margin-left: 32px;
      }
    }
    &::before {
      display: block;
      content: '';
      width: 120px;
      height: 105px;
      background-image: url(${assets}img/support/icon-trouble-nav.png);
      background-repeat: no-repeat;
      background-size: contain;
      ${mixins.mq.MinL} {
        width: 152px;
        height: 133px;
      }
    }
  }
`
type Props = {
  className?: string
  ratId?: string
  status: string
}

export const SupportTrouble = ({ className, ratId, status }: Props) => {
  return (
    <div
      className={className}
      {...(ratId && {
        'data-ratid': ratId,
        'data-ratevent': 'appear',
        'data-ratparam': 'all',
      })}
    >
      <Heading level="2" className={Utils['Align-center']}>
        トラブル解決ナビ
      </Heading>
      <ResolutionTime className={Utils['Mt-16']}>
        <TxtEmp02>解決の目安…約5分</TxtEmp02>
      </ResolutionTime>
      <Block className={Utils['Mt-16']}>
        <div className="read">
          <p>お困りごとを選んでいくだけで解決方法をご案内します。</p>
        </div>
        <div className={`${Utils['Mt-24']} ${Utils['Align-center']}`}>
          <ButtonRegularLarge
            href={
              status === 'member'
                ? '/guide/trouble-check/?l-id=support_member_guide_trouble-check#/member/'
                : '/guide/trouble-check/?l-id=support_pre-member_guide_trouble-check#/pre-member/'
            }
            as="a"
          >
            トラブル解決ナビへ進む
          </ButtonRegularLarge>
        </div>
      </Block>
    </div>
  )
}
