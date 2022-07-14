// import { serialize } from 'next-mdx-remote/serialize'
// import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import style from '../styles/modules/home.module.css'
import { GetStaticProps } from 'next'

import HomeHero from '../components/hero'

// function calcTime(city, offset) {
//   // create Date object for current location
//   var d = new Date();

//   // convert to msec
//   // subtract local time zone offset
//   // get UTC time in msec
//   var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

//   // create new Date object for different city
//   // using supplied offset
//   var nd = Date(utc + (3600000*offset));

//   // return time as a string
//   return nd.toLocaleString();
// }


export default function Home({ 
  allPostsData 
} : {
  allPostsData: {
    date: string
    title: string
    subtitle: string
    id: string
    readTime: number
    imgid: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <HomeHero />

      <section className={'blogSection'}>
        <h2 className={'sectionTitle'}>Blog</h2>
        {allPostsData.map(({ id, date, title, readTime, imgid, subtitle }) => (

        <Link href={`/posts/${id}`}>
          <div className="blogDiv">
              <Image src={`/images/illustration/${id}.png`} height="200px" width="200px" ></Image>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <p>
                <Date dateString={date} /> &nbsp; <span id="time">{readTime}</span> min read
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* <section>
        <h2>Projects</h2>
      </section>

      <section>
        <h2>Personal Blog</h2>
        
      </section> */}

      <section>
        <div className="contact-section">
          I'm not currently looking for new opportunities, but my inbox is always open. Questions and business proposals will always be answered within 48 hours.
          {/* <br/><br/>
          Kingston, Jamaica &nbsp; TODO:Add my local time and difference between me and user.
          
          <br/><br/>

          <br/> */}
          <br/><br/>
          <Link href="mailto:sabrinamedwinter@gmail.com">
            <a className={'button'}>Email Me</a>
          </Link>
          
        </div> 
      </section>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // get your markdown here

//   // pass your markdown string to the serialize function
//   const mdxSource = await serialize(getSortedPostsData(), {
//     mdxOptions: {
//       // use the image size plugin, you can also specify which folder to load images from
//       // in my case images are in /public/images/, so I just prepend 'public'
//       // rehypePlugins: [[imageSize, { dir: "public" }]],
//     },
//   });

//   // return your serialized content as a prop here
//   return {
//     props: {
//       post: {
//         mdxSource,
//       },
//     },
//   };
// };


export const getStaticProps : GetStaticProps = async() => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
