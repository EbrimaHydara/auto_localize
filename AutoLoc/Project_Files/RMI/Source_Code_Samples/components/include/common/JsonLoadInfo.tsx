import React, { useEffect, useState } from 'react'
import {
  AttentionContainer,
  AttentionIconAlert,
  AttentionIconInfo,
  AttentionInfo,
  AttentionBody,
  AttentionAlert,
} from '@components/atoms/Attention'
import styled from 'styled-components'
import { LinkNormal } from '@components/atoms/Link'

const AttentionBodys = styled(AttentionBody)`
  & + & {
    margin-top: 8px;
  }
`

type Information = {
  text: string
  link: string
}

type Informations = {
  attention: Information[] | never[]
  information: Information[] | never[]
}

type Props = {
  json: string
}

export const JsonLoadInfo: React.FC<Props> = ({ json }) => {
  const [jsonData, setJsonData] = useState<Informations>()

  useEffect(() => {
    const jsonFilePath = json

    fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
        setJsonData(data[0])
      })
      .catch(error => {
        console.error('データを読み込めませんでした: ', error)
      })
  }, [json])
  return (
    <>
      {jsonData && (
        <>
          {jsonData.attention.length > 0 && (
            <AttentionAlert>
              {jsonData.attention.map((item, index) => {
                return (
                  <AttentionBodys as="div" key={index}>
                    <AttentionContainer>
                      <AttentionIconAlert />
                      <LinkNormal href={item.link}>{item.text}</LinkNormal>
                    </AttentionContainer>
                  </AttentionBodys>
                )
              })}
            </AttentionAlert>
          )}
          {jsonData.information.length > 0 && (
            <AttentionInfo>
              {jsonData.information.map((item, index) => {
                return (
                  <AttentionBodys as="div" key={index}>
                    <AttentionContainer>
                      <AttentionIconInfo />
                      <LinkNormal href={item.link}>{item.text}</LinkNormal>
                    </AttentionContainer>
                  </AttentionBodys>
                )
              })}
            </AttentionInfo>
          )}
        </>
      )}
    </>
  )
}
