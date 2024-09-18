import React, { useState } from 'react'
import styled from 'styled-components'
import { mixins } from '@components/utils/Mixins'
import Utils from '@styles/Utils.module.scss'
import { Modal } from '@components/atoms/Modal'
import {
  ButtonLinkIconBefore,
  ButtonLinkNormal,
} from '@components/atoms/ButtonLink'
import { IconZoomLine } from '@components/icons'

const ButtonLinkNormalHover = styled(ButtonLinkNormal)`
  &:hover {
    img {
      opacity: 0.7;
    }
  }

  ${mixins.mq.MaxM} {
    pointer-events: none;
  }

  .zoom {
    ${mixins.mq.MaxM} {
      display: none;
    }
  }
`

type Props = {
  className?: string
  title: string
  img: string
  id?: string
}

export const TradeinItemModal: React.FC<Props> = ({
  className,
  title,
  img,
  id,
}) => {
  const [flag, setFlag] = useState<boolean>(false)
  const switchFlag = () => {
    setFlag(!flag)
  }
  return (
    <>
      <li>
        {title && (
          <p className={Utils['Mb-8']} {...(id && { id: id })}>
            {title}
          </p>
        )}
        {img && (
          <ButtonLinkNormalHover
            onClick={() => {
              switchFlag()
            }}
          >
            <img src={img} alt="" loading="lazy" />
            <ButtonLinkIconBefore className={`${Utils['Mt-8']} zoom`} as="span">
              <IconZoomLine />
              <span>拡大する</span>
            </ButtonLinkIconBefore>
          </ButtonLinkNormalHover>
        )}
        {img && (
          <Modal switchFlag={switchFlag} flag={flag}>
            <p className={Utils['Mb-16']}>{title}</p>
            <div>
              <img src={img} alt="" loading="lazy" />
            </div>
          </Modal>
        )}
      </li>
    </>
  )
}
