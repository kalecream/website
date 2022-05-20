import Head from 'next/head'

import styles from '../globallayout.module.css'
import utilStyles from './utils.module.css'

import Link from 'next/link'
import Navbar from './navbar'
import SecondNavbar from './second-nav'
import Footer from './footer'

const name = 'Sabrina Medwinter'
export const siteTitle = 'Sab Medwinter'

export default function GlobalLayout(children, home ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jamaican Web Developer"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="images/favicon.ico"></link>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link> */}
        <script defer src="https://66analytics.com/demo/pixel/9sa8ozT1DEm5VJOl"></script>
      </Head>
      <Navbar />
      <SecondNavbar />
      <main>
      

      {children}
      
      </main>
    </div>
  )
}