import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import style from '../styles/modules/home.module.css'
import { GetStaticProps } from 'next'

import HomeHero from '../components/hero'

export default function Home({ 
  allPostsData 
} : {
  allPostsData: {
    date: string
    title: string
    id: string
    readTime: number
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <HomeHero />

      <section className={'blogSection'}>
        <h1 className={utilStyles.headingXL}>Blog</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, readTime }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} /> ☆ <span id="time">{readTime}</span> minute read
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // get your markdown here

  // pass your markdown string to the serialize function
  const mdxSource = await serialize(markdown, {
    mdxOptions: {
      // use the image size plugin, you can also specify which folder to load images from
      // in my case images are in /public/images/, so I just prepend 'public'
      rehypePlugins: [[imageSize, { dir: "public" }]],
    },
  });

  // return your serialized content as a prop here
  return {
    props: {
      post: {
        mdxSource,
      },
    },
  };
};


// export const getStaticProps : GetStaticProps = async() => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
