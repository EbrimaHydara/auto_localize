import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  abtestFlag: Boolean
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"></Head>
        <body>
          <Main />
          <NextScript />
          <input type="hidden" name="rat" id="ratAccountId" value="1312" />
          <input type="hidden" name="rat" id="ratServiceId" value="1" />
          <script
            type="text/javascript"
            src="https://r.r10s.jp/com/rat/js/rat-sec.js"
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
