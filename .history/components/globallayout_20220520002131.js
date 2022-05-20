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
      <Navbar />
      <SecondNavbar />
      <main>
      

      {children}
      
      </main>
    </div>
  )
}