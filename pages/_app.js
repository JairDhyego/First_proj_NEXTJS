/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;500;600;700&display=swap" rel="stylesheet" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
