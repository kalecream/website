import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './global/navbar'
import Footer from './global/footer'

const name = 'KaleCream'
export const siteTitle = 'KaleCream'

export default function Layout({ 
    children, 
    home 
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}