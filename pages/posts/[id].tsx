import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }:
  {
    postData: {
    title: string
    subtitle: string
    date: string
    updated: string
    tags: string
    readTime: number
    contentHtml: string
    }
  }) {
  // TODO change to lowercase before or after split 
  const postTags = postData.tags.split(',');

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={'post-container'}>
        <article>
          <div className={'post-header'}>
            {/* <Image src={`/images/illustration/${postData.imgid}.png`} width="300" height="300"></Image> */}
            <div className={'tags-container'}>
                    {/* TODO . trim whitespace */}
                    { postTags.length > 0 ?
                        ( postTags.map(pt => {
                            return (
                            // <Link to='/{pt}' key={pt}>
                            <a key={pt}>{pt} </a>
                            // </Link>
                            )
                          })
                        ) : ('')
                    }
            </div>

            <h1 className={'post-title'}>{postData.title}</h1>
              {
                  postData.subtitle != '' ? <span>
                    <h3>{postData.subtitle}</h3>
                  </span>  : ''
                }
            <div className={'metadata-container'}>
              By Sabrina Medwinter &nbsp; • &nbsp;
                {
                  postData.updated != '' ? <span>
                    Updated: <Date dateString={postData.updated} />
                  </span>  : 
                  <span>
                    <Date dateString={postData.date} />
                  </span>
                }
                &nbsp; • &nbsp;
                <span id="time">{postData.readTime}</span> minute read
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

export const getStaticPaths: GetStaticPaths = async() => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {  postData }
  }
}