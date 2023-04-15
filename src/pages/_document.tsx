import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <meta property="og:title" content="Wine Salon" />
        <meta property="og:description" content="와인 살롱" />
        <meta property="og:image" content="https://d1fdloi71mui9q.cloudfront.net/k57NiMjCRzaJjbmswPMX_PYxL7KLT9amE9KmC" />
        <meta property="og:image:width" content="100px" />
        <meta property="og:image:height" content="100px" />
        <link rel="icon" href="/favicon.ico" />
        <title>Wine Salon</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
