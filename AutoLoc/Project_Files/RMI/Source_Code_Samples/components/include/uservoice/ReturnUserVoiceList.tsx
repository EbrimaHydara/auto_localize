import { ButtonRegular } from '@components/atoms/Buttons'

type Props = {
  className?: string
  directory: string
}
export const ReturnUserVoiceList = ({ directory }: Props) => {
  return (
    <ButtonRegular
      as="a"
      href={`/uservoice/?l-id=uservoice_${directory}_uservoice`}
    >
      お客様の声一覧に戻る
    </ButtonRegular>
  )
}
