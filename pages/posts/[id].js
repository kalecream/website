import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
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
              <Date dateString={postData.date} /> 
              <div className={'tags-container'}>
                <a>{postData.tags}</a>
              </div>
          </div>

          <div className={'post-content'} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

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