import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CustomHead } from '@components/utils/CustomHead'
const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000;
`
const YoutubeFrame = styled.iframe`
  aspect-ratio: 16/9;
  width: 100%;
  height: auto;
`

const secureId: string[] = [
  'L6tLT5wIJus',
  '3PSqGK-IsE0',
  'zu7gJ7vMEOk',
  'rAhMX9lRfAo',
  'BBY68yxuKG4',
  'csnq2AA6KbY',
  'WwmYQIYyShA',
  'DoXUx90rgBg',
  'bTEwbwbefPM',
  'PCQCJ_gNhIo',
  'kT3PZO5fGJU',
  'PmZGOW1OeU4',
  'byPRQF3m2nw',
  '4KHP8UUAa90',
  'S2FkSkwnos0',
  'KmApGdyZp-U',
  'nI47sdBpLF8',
  'vzLjHqddzj8',
  'RhhMDYEEw5c',
  'tKXdkv1530Q',
  'Vv2n9Fr5hQE',
  'KPRmTnDnJek',
]

const SupportYoutube: NextPage = () => {
  const pagetitle = '動画で見る'
  const directories = [{ path: '/support/', label: '' }]

  const [youtubeId, setYoutubeId] = useState<string>('')

  useEffect(() => {
    const url = new URL(window.location.href).searchParams.get('movie-id')
    url ? setYoutubeId(url) : setYoutubeId('')
  }, [youtubeId])

  return (
    <>
      <CustomHead
        pagetitle={pagetitle}
        directories={directories}
        description="楽天モバイルのお客様サポートページ。楽天回線スマートフォン（スマホ）の設定方法、各種お手続き方法、ご契約時に必要なこと、お問い合わせ（問合せ）、紛失・故障・修理などをご案内します"
        noindex={true}
      />

      {secureId.includes(youtubeId) && (
        <Wrap>
          <YoutubeFrame
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeId}?controls=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Wrap>
      )}
    </>
  )
}

export default SupportYoutube
