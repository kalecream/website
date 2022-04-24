import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import GlobalLayout from '../components/global/globalLayout'
import Navbar from '../components/global/navbar'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home: NextPage = ({allPostsData}:GetStaticPaths ) => {
  return (
    <GlobalLayout >
     <div className={styles.container}>
      <main className={styles.main}>

        <div className="hero">
            <p>Let me design your world</p>
            <Image src="" alt="" />
        </div>
        
        <section 
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
    </ GlobalLayout>
  )
}

export default Home
