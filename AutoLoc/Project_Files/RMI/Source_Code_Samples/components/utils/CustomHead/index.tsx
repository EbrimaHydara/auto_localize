import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useCallback } from 'react'

//let sitename: string = '楽天モバイル'

interface DirectoryItem {
  path: string
  label: string
}
export interface CustomHeadProps {
  redirect?: {
    url: string
    isIndex?: boolean
    delay?: string
  }
  noindex?: boolean
  //isHikari?: boolean
  //top?: boolean
  //hikaritop?: boolean
  directories?: DirectoryItem[]
  pagetitle?: string
  description?: string
  canonical_custom?: string
  ogp_img?: string
  isEnglish?: boolean
  hasHreflang?: boolean
}
export const CustomHead = (props: CustomHeadProps) => {
  const {
    redirect,
    noindex,
    //isHikari,
    //top,
    //hikaritop,
    directories,
    pagetitle,
    description,
    canonical_custom,
    ogp_img,
    isEnglish,
    hasHreflang,
  } = props

  const router = useRouter()
  const pathnameRaw = router.pathname
  const pathname = pathnameRaw.substring(1) + '/'

  const dirs: string[] = []
  let sitename = isEnglish ? 'Rakuten Mobile' : '楽天モバイル'
  const sitedomain = 'https://network.mobile.rakuten.co.jp'
  let jpPageUrl = `${sitedomain}/${pathname}`
  if (isEnglish) {
    jpPageUrl = jpPageUrl.replace(/en(\/)?$/, '')
  }
  /*if (isHikari) {
    sitename = '楽天ひかり'
  }*/
  if (directories) {
    directories.forEach(dir => {
      //if (dir.label !== '光回線の通信速度改善') {
      dirs.push(dir.label)
      //}
    })
  }
  const dirlist = dirs.reverse().join(' | ')
  const titlePattern1 = `${pagetitle} | ${dirlist} | ${sitename}`
  const titlePattern2 = `${pagetitle} | ${sitename}`

  const scriptInsertMemo = useCallback(
    (directories: DirectoryItem[]) => {
      const getStrucrualStrFull = (arr: DirectoryItem[]) => {
        const structuralStrBegin = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
    {
    "@type": "ListItem",
    "position": 1,
    "item":
    {
    "@id": "${sitedomain}",
    "name": "トップ"
    }
    },
    `

        let cnt = 1
        let acc = structuralStrBegin
        if (arr[0].path !== `/${pathname}`) {
          arr.forEach(elem => {
            if (elem.path !== '') {
              const str = `{
    "@type": "ListItem",
    "position": ${++cnt},
    "item":
    {
    "@id": "${sitedomain}${elem.path}",
    "name": "${elem.label}"
    }
    },
      `
              acc = `${acc}${str}`
            }
          })
        }
        const structuralStrEnd = `{
    "@type": "ListItem",
    "position": ${++cnt},
    "item":
    {
    "@id": "${sitedomain}/${pathname}",
    "name": "${pagetitle}"
    }
    }
    ]
    }
    `
        acc = `${acc}${structuralStrEnd}`
        return acc
      }

      const scriptInsert = (directories: DirectoryItem[]) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'structure'
        const scriptFunction = document.createTextNode(`
    ${getStrucrualStrFull(directories)}
    `)
        script.appendChild(scriptFunction)
        document.body.appendChild(script)
      }

      scriptInsert(directories)
    },
    [pagetitle, pathname],
  )
  useEffect(() => {
    const elem = document.getElementById('structure')
    if (!redirect && !noindex && directories) {
      if (!elem) {
        scriptInsertMemo(directories)
      }
    }
  }, [directories, noindex, redirect, scriptInsertMemo])
  return (
    <>
      {(() => {
        if (redirect) {
          return (
            <Head>
              <meta
                http-equiv="refresh"
                content={`${redirect.delay ? redirect.delay : 0};URL=${
                  redirect.url.indexOf('http') === -1
                    ? `/${redirect.url}`
                    : redirect.url
                }`}
              />
              {!redirect.isIndex ? (
                <meta
                  name="robots"
                  content="noindex, nofollow, noarchive"
                  key="robots"
                />
              ) : (
                <meta name="robots" content="noodp, noydir" key="robots" />
              )}
              {/* title tag goes here >>> */}
              {dirlist ? (
                <title key="title">{titlePattern1}</title>
              ) : (
                <title key="title">{titlePattern2}</title>
              )}
              {/* <<< title tag ends here */}
              {redirect.isIndex && (
                <>
                  <meta
                    property="og:url"
                    content={
                      canonical_custom
                        ? canonical_custom
                        : `${sitedomain}/${pathname}`
                    }
                  />
                  <link
                    rel="canonical"
                    href={
                      canonical_custom
                        ? canonical_custom
                        : `${sitedomain}/${pathname}`
                    }
                  />
                </>
              )}
            </Head>
          )
        } else if (noindex) {
          return (
            <Head>
              {/* title tag goes here >>> */}
              {dirlist ? (
                <title key="title">{titlePattern1}</title>
              ) : (
                <title key="title">{titlePattern2}</title>
              )}
              {/* <<< title tag ends here */}
              <meta name="description" content={description} />
              <meta name="author" content="楽天モバイル" />
              {hasHreflang && (
                <>
                  <link rel="alternate" hrefLang="ja" href={jpPageUrl} />
                  <link
                    rel="alternate"
                    hrefLang="en"
                    href={`${jpPageUrl}en/`}
                  />
                </>
              )}
              <meta
                name="robots"
                content="noindex, nofollow, noarchive"
                key="robots"
              />
              <meta name="format-detection" content="telephone=no" />
              <meta
                property="og:title"
                content={dirlist ? titlePattern1 : titlePattern2}
              />
              <meta property="og:description" content={description} />
              <meta property="og:type" content="article" />
              <meta
                property="og:url"
                content={
                  canonical_custom
                    ? canonical_custom
                    : `${sitedomain}/${pathname}`
                }
              />
              {canonical_custom && (
                <link rel="canonical" href={canonical_custom} />
              )}
              <meta
                property="og:image"
                content={
                  ogp_img ? ogp_img : `${sitedomain}/assets/img/common/ogp.png`
                }
              />
              <link rel="shortcut icon" href="/google-search-icon.png" />
              <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>
          )
        } else {
          // normal
          return (
            <Head>
              {/* title tag goes here >>> */}
              {dirlist ? (
                <title key="title">{titlePattern1}</title>
              ) : (
                <title key="title">{titlePattern2}</title>
              )}
              {/* <<< title tag ends here */}
              <meta name="description" content={description} />
              <meta name="author" content="楽天モバイル" />
              {hasHreflang && (
                <>
                  <link rel="alternate" hrefLang="ja" href={jpPageUrl} />
                  <link
                    rel="alternate"
                    hrefLang="en"
                    href={`${jpPageUrl}en/`}
                  />
                </>
              )}
              <meta name="robots" content="noodp, noydir" key="robots" />
              <meta name="format-detection" content="telephone=no" />
              <meta
                property="og:title"
                content={dirlist ? titlePattern1 : titlePattern2}
              />
              <meta property="og:description" content={description} />
              <meta property="og:type" content="article" />
              <meta
                property="og:url"
                content={
                  canonical_custom
                    ? canonical_custom
                    : `${sitedomain}/${pathname}`
                }
              />
              <link
                rel="canonical"
                href={
                  canonical_custom
                    ? canonical_custom
                    : `${sitedomain}/${pathname}`
                }
              />
              <meta
                property="og:image"
                content={
                  ogp_img ? ogp_img : `${sitedomain}/assets/img/common/ogp.png`
                }
              />
              <link rel="shortcut icon" href="/google-search-icon.png" />
              <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>
          )
        }
      })()}
    </>
  )
}
