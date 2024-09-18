import { SupportOtherCategoryNav } from '@components/category/Support'
import { ButtonRegular } from '@components/atoms/Buttons'

type Props = {
  className?: string
}
export const SupportFooter = ({ className }: Props) => {
  return (
    <SupportOtherCategoryNav className={className}>
      <div>
        <ButtonRegular href="/support/?l-id=footer_related_support" as="a">
          お客様サポートトップへ
        </ButtonRegular>
      </div>
      <div>
        <ButtonRegular href="/?l-id=footer_related_top" as="a">
          楽天モバイルトップへ
        </ButtonRegular>
      </div>
    </SupportOtherCategoryNav>
  )
}
