import { Heading } from '@components/atoms/Heading'
import { LinkNormal } from '@components/atoms/Link'
import { TxtEmp01, TxtEmp02 } from '@components/atoms/Txt'
import { MediaImage } from '@components/layout/Media'
import { assets } from '@components/utils/assets'
import Utils from '@styles/Utils.module.scss'

interface RakutenLinkGuideProps {
  lId?: string
}
export const RakutenLinkGuide = (props: RakutenLinkGuideProps) => {
  const { lId } = props
  return (
    <>
      <Heading level="4">Rakuten Link 利用状況の確認方法</Heading>
      <ol className={Utils['Mt-16']}>
        <li>
          <TxtEmp01>
            1. 「
            <LinkNormal
              href={`https://portal.mobile.rakuten.co.jp/my-rakuten-mobile${
                lId ? '?l-id=' + lId : ''
              }`}
            >
              my 楽天モバイル
            </LinkNormal>
            」にアクセス
          </TxtEmp01>
        </li>
        <li className={Utils['Mt-32']}>
          <TxtEmp01>2. 右上のメニューから「利用状況」を選択</TxtEmp01>
          <MediaImage className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <img
              src={`${assets}img/campaign/common/img-cap01-230601-0000.png`}
              width="300"
              alt=""
              loading="lazy"
            />
          </MediaImage>
        </li>
        <li className={Utils['Mt-32']}>
          <TxtEmp01>
            3. 「通話」タブを選択して
            <TxtEmp02>Rakuten Linkでの10秒以上の発信通話履歴</TxtEmp02>
            があることを確認してください
          </TxtEmp01>
          <MediaImage className={`${Utils['Align-center']} ${Utils['Mt-32']}`}>
            <img
              src={`${assets}img/campaign/common/img-cap02.png?220720`}
              width="300"
              alt=""
              loading="lazy"
            />
          </MediaImage>
        </li>
      </ol>
    </>
  )
}
