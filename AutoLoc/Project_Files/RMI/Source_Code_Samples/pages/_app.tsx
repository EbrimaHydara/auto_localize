import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { NotoSansJP, fontRexIcon } from '@styles/fonts'

import '@styles/ress.css'
import '@styles/library/carousel.scss'
import { themes } from '@styles/theme/themes'
// import GlobalFonts from '../fonts/fonts'
import { GlobalStyle } from '@styles/global-styles'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // GTM IDの設定
  const gtmId = router.pathname.startsWith('/hikari/')
    ? 'GTM-5RBR6Z6'
    : 'GTM-WGPRP54'

  useEffect(() => {
    TagManager.initialize({ gtmId })
  }, [gtmId])

  // テーマの選択
  const theme = router.pathname.startsWith('/hikari/')
    ? themes.hikari
    : themes.light

  return (
    <>
      <style jsx global>{`
        :root {
          --rex-icon: ${fontRexIcon.style.fontFamily};
          --noto-sans-jp: ${NotoSansJP.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
