import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/Head';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Wine Salon</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}
