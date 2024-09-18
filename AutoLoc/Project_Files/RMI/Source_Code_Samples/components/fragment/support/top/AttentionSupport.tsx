import { IconNewTabLine } from '@components/icons'
import {
  AttentionBody,
  AttentionContainer,
  AttentionIconInfo,
  AttentionIconAlert,
  AttentionAlert,
  AttentionInfo,
} from '@components/atoms/Attention'
import { LinkIconAfter } from '@components/atoms/Link'

type AttentionItem = {
  title: string | JSX.Element
  link: string
  icon: string
  newTab: boolean
  weighting: number
}

interface AttentionProps {
  data: AttentionItem[]
}

export const AttentionSupport = ({ data }: AttentionProps) => {
  return (
    <>
      {data.map((item, index) => {
        return item.icon === 'emergency' ? (
          <AttentionAlert key={index}>
            <AttentionContainer>
              <AttentionIconAlert />
              <AttentionBody>
                <LinkIconAfter
                  href={item.link}
                  target={item.newTab ? '_blank' : undefined}
                >
                  {item.title}
                  {item.newTab ? <IconNewTabLine /> : undefined}
                </LinkIconAfter>
              </AttentionBody>
            </AttentionContainer>
          </AttentionAlert>
        ) : (
          <AttentionInfo key={index}>
            <AttentionContainer>
              <AttentionIconInfo />
              <AttentionBody>
                <LinkIconAfter
                  href={item.link}
                  target={item.newTab ? '_blank' : undefined}
                >
                  {item.title}
                  {item.newTab ? <IconNewTabLine /> : undefined}
                </LinkIconAfter>
              </AttentionBody>
            </AttentionContainer>
          </AttentionInfo>
        )
      })}
    </>
  )
}
