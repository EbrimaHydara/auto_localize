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
  display: grid;
  grid-template-areas:
    'title title'
    'time time'
    'img text'
    'button button';
  grid-template-columns: 96px auto;
  grid-template-rows: 34px 24px 80px 48px;
  gap: 16px;

  ${mixins.mq.MinL} {
    padding: 40px 24px;
    grid-template-areas:
      'title . time'
      'img text .'
      'img button .';
    grid-template-columns: 200px auto 155px;
    grid-template-rows: 50px 60px 60px;
    gap: 10px;
  }
  > .item1 {
    grid-area: title;
  }
  > .item2 {
    grid-area: time;
    height: fit-content;
  }
  > .item3 {
    grid-area: img;
  }
  > .item4 {
    grid-area: text;
  }
  > .item5 {
    grid-area: button;
    > a {
      padding: 12px 24px;
    }
  }
`
const MediaBoxIcon = styled.div`
  width: 96px;
  ${mixins.mq.MinL} {
    width: 152px;
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
      <Block className={Utils['Mt-16']}>
        <Heading level="3" className="item1">
          トラブル解決ナビ
        </Heading>

        <ResolutionTime className="item2">
          <TxtEmp02>解決の目安…約5分</TxtEmp02>
        </ResolutionTime>

        <MediaBoxIcon className="item3">
          <img src={`${assets}img/support/icon-trouble-nav.png`} alt="" />
        </MediaBoxIcon>

        <div className="item4">
          <p>
            お困りごとを選んでいくことで、解決方法や各種手続き方法をご案内いたします。
          </p>
        </div>

        <div className={`${Utils['Align-center']} item5`}>
          <ButtonRegularLarge
            href={
              status === 'member'
                ? '/guide/trouble-check/?l-id=support_inquiry_member_guide_trouble-check#/member/'
                : '/guide/trouble-check/?l-id=support_inquiry_pre-member_guide_trouble-check#/pre-member/'
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
