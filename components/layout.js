import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './global/navbar'

const name = 'KaleCream'
export const siteTitle = 'KaleCream'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Navbar></Navbar>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}