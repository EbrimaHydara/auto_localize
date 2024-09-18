import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Utils from '@styles/Utils.module.scss'
import {
  SupportMovieDescription,
  SupportMovieHead,
  SupportMovieList,
  SupportMovieMain,
  SupportMoviePipThumbnail,
  SupportMovieSpacer,
  SupportMovieThumbnail,
  SupportMovieTime,
  SupportMovieWrap,
  SupportReadmore,
  SupportReadmoreArrow,
} from '@components/category/Support'
import {
  FaqMovieList,
  PipmakerObj,
} from '@components/include/support/supportData'
import { Heading } from '@components/atoms/Heading'
import { ButtonRegularLarge } from '@components/atoms/Buttons'
import { TxtSize } from '@components/atoms/Txt'

type Props = {
  className?: string
  arr: FaqMovieList[]
  isGuide?: boolean
}

export const SupportMovie = ({ className, arr, isGuide }: Props) => {
  const countMovieReadmore = 6

  const countMovieState = useMemo(() => arr.length, [arr.length])
  const [countMovieVisibleState, updateCountMovieVisibleState] =
    useState<number>(countMovieReadmore)
  const [isMovieReadmore, updateCountMovieReadmoreState] =
    useState<boolean>(false)

  const clickMovieReadMore = useCallback(() => {
    let count = countMovieVisibleState + countMovieReadmore
    if (countMovieState < count) {
      count = countMovieState
      updateCountMovieReadmoreState(true)
    }
    updateCountMovieVisibleState(count)
  }, [countMovieState, countMovieVisibleState])

  useEffect(() => {
    if (countMovieState < countMovieReadmore) {
      updateCountMovieVisibleState(countMovieReadmore)
      updateCountMovieReadmoreState(true)
    }

    const isPipMaker = arr.some(data => !data.isYoutube)
    if (isPipMaker && typeof document !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://www.pip-maker.com/js/pipmaker.js'
      script.onload = () => {
        let pipmaker = (window as any).pipmaker as PipmakerObj
        if (pipmaker) {
          pipmaker.priority = ['HTML5', 'WebGL']
          arr.forEach(data => {
            if (!data.isYoutube && pipmaker.embed) {
              pipmaker.embed(
                `//www.pip-maker.com/?view=${data.id}`,
                `pipmaker${data.id}`,
                320,
                180,
              )
            }
          })
        }
      }
      document.body.append(script)
    }
  }, [countMovieState, arr])

  return (
    <SupportMovieWrap className={className} isGuide={isGuide ? true : false}>
      <SupportMovieHead>
        <Heading level="2" className={Utils['Align-center']}>
          動画で見る
        </Heading>
      </SupportMovieHead>
      <p className={`${Utils['Mt-16']} ${Utils['Align-center']}`}>
        設定手順に関する知りたい・調べたい情報を動画でご案内いたします。
      </p>
      <SupportMovieMain>
        {arr.map((value, index) => (
          <SupportMovieList
            key={'movie' + index}
            aria-hidden={countMovieVisibleState <= index ? 'true' : 'false'}
          >
            {value.isYoutube ? (
              <SupportMovieThumbnail>
                <a
                  href={
                    '/support/youtube/?movie-id=' +
                    value.id +
                    '&l-id=support_movie_' +
                    value.ratId
                  }
                  data-ratid={
                    value.isProduct
                      ? 'support_product_setting_movie_'
                      : 'support_movie_' + value.ratId
                  }
                  data-ratevent="click"
                  data-ratparam="all"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      'https://img.youtube.com/vi/' +
                      value.id +
                      '/mqdefault.jpg'
                    }
                    alt={
                      typeof value.title == 'string'
                        ? value.title.replace(/(<([^>]+)>)/gi, '')
                        : ''
                    }
                  />
                </a>
                <SupportMovieTime>{value.time}</SupportMovieTime>
              </SupportMovieThumbnail>
            ) : (
              <SupportMoviePipThumbnail>
                <div
                  id={`pipmaker${value.id}`}
                  data-ratid={`support_movie_${value.ratId}`}
                  data-ratevent="click"
                  data-ratparam="all"
                >
                  <noscript>
                    For viewing this content please enable the JavaScript.
                  </noscript>
                </div>
              </SupportMoviePipThumbnail>
            )}
            <SupportMovieDescription>
              <TxtSize size="base" as="h3">
                {value.title}
              </TxtSize>
              <TxtSize size="s" as="p" className={Utils['Mt-8']}>
                {value.description}
              </TxtSize>
            </SupportMovieDescription>
          </SupportMovieList>
        ))}
        {countMovieState > 2 && (
          <SupportMovieSpacer
            aria-hidden={!isMovieReadmore}
          ></SupportMovieSpacer>
        )}
        {countMovieState > 3 && (
          <SupportMovieSpacer
            aria-hidden={!isMovieReadmore}
          ></SupportMovieSpacer>
        )}
      </SupportMovieMain>
      <SupportReadmore
        aria-hidden={isMovieReadmore}
        onClick={clickMovieReadMore}
        className={Utils['Mt-8']}
      >
        もっと見る<SupportReadmoreArrow></SupportReadmoreArrow>
      </SupportReadmore>
      {isGuide && (
        <div className={`${Utils['Mt-48']} ${Utils['Align-center']}`}>
          <ButtonRegularLarge
            href="/guide/support-movie/?l-id=support_category_support-movie"
            as="a"
          >
            サポート動画一覧へ
          </ButtonRegularLarge>
        </div>
      )}
    </SupportMovieWrap>
  )
}
