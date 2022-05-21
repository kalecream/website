import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import style from '../styles/modules/home.module.css'
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={style.hero}>
        <div className={style.heroLeft}>
          <Image alt="" src="/images/illustration/undraw_ideas_flow_re_bmea.svg" width={500} height={500}></Image>
          

          <div className={style.socialLinks}>
              <Link href="https://twitter.com/KaleCream">
                  <a>
                      <Image src="/images/social/twitter.svg" width="30px" height="30px" alt="Twitter"></Image>
                  </a>
              </Link>
              <Link href="https://mstdn.social/@KaleCream">
                  <a>
                  <Image src="/images/social/icons8-mastodon.svg" width="30px" height="30px" alt="Mastodon"></Image>
                  </a>
              </Link>
              <Link href="https://www.deviantart.com/kalecream">
                  <a>
                  <Image src="/images/social/icons8-deviantart.svg" width="30px" height="30px" alt="Mastodon"></Image>
                  </a>
              </Link>
              <Link href="https://github.com/kalecream">
                  <a>
                  <Image src="/images/social/icons8-github.svg" width="30px" height="30px" alt="Mastodon"></Image>
                  </a>
              </Link>
              <Link href="http://www.linkedin.com/medwinter">
                  <a>
                  <Image src="/images/social/icons8-linkedin-circled.svg" width="30px" height="30px" alt="LinkedIn"></Image>
                  </a>
              </Link>
            </div> 
          </div>
          <div className={style.heroRight}>
            <p>
              A blog on my developer and efficiency journey.
            </p>  
            {/* <button className={style.button}>
              Send Me An Email!
            </button> */}
          </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
