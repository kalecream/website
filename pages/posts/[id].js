import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  // TODO change to lowercase before or after split 
  const postTags = postData.tags.split(',');

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
                {/* TODO . trim whitespace */}
                {console.log(postTags)}
                { postTags.length > 0 ?
                  (
                    postTags.map(pt => {
                      return (
                      // <Link to='/{pt}' key={pt}>
                        <a href="/" key={pt}>{pt} </a>
                      // </Link>
                      )
                    })
                  ) : ('')
                }
              {/* {postData.postTags.map(
                  (postData.postTags) => 
                  <a>{postData.postTags}</a>
                )} */}
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