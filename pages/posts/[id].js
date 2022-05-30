import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={'post-container'}>
        <article>
          <h3 className={'post-title'}>{postData.title}</h3>

          <div className={'metadata-container'}>

              <Date dateString={postData.date} /> &nbsp;
               ☆ &nbsp;
              <span id="time">{postData.readTime}</span> minute read
              <div className={'tags-container'}>
                <a>{postData.tags}</a>
              </div>
          </div>

          <div className={'post-content'} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <div>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {  postData }
  }
}