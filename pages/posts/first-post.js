import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <h1>First Post</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis odio eu pretium scelerisque. Aenean scelerisque, diam id vestibulum pellentesque, sem ipsum ornare sapien, eget molestie eros nunc vel magna. Aenean eu condimentum nunc. Phasellus leo elit, eleifend non nisl id, molestie hendrerit felis. Vivamus mollis porta ultricies. Proin iaculis dolor eget congue volutpat. Phasellus bibendum purus sapien, sed egestas quam convallis vitae. Suspendisse sit amet congue enim. Cras id est at sapien egestas posuere in ac lorem. Fusce finibus in tortor et aliquam. Ut ut luctus orci. Duis non est id erat iaculis consectetur sed non ipsum. Duis quis lacus neque.</p>

      </Layout>
    </>
  )
}