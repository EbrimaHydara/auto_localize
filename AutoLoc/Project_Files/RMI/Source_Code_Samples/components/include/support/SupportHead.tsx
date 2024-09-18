import { Heading } from '@components/atoms/Heading'
import { SupportHeadWrap } from '@components/category/Support'
import Utils from '@styles/Utils.module.scss'

type Props = {
  className?: string
  title: string
  customRead?: string
}
export const SupportHead = ({ className, title, customRead }: Props) => {
  return (
    <SupportHeadWrap>
      <Heading level="1">
        {title}に関する
        <br className={Utils['Disp-sp']} />
        サポート
      </Heading>
      <p className={Utils['Mt-16']}>
        {customRead
          ? `${title}${customRead}`
          : `${title}に関する知りたい・調べたい情報をお選びください。`}
      </p>
    </SupportHeadWrap>
  )
}
