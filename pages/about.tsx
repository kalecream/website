import Image from 'next/image'
import Navbar from '../components/global/navbar'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import style from '../styles/modules/about.module.css'

export default function About( children, home ) {
  return (
    <Layout>
    <section className={style.about}>
        {/* <Image src="/images/home/avatar_sab.svg" 
              height={400}
              width={400}
              
              alt=""  /> */}

        <h1>About Me</h1>

        <div className={style.aboutDiv}>
          <div className={style.aboutLeft}>
            <p> I&apos;ve been fascinated with computers and the internet for as long as my memory stretches. My personal introduction to coding was through modifying tumblr themes back in 2009. This exposed me to HTML, CSS, JS and JQUERY. This eventually graduated to creating my own pages and websites then learning to modify Wordpress themes which gave me some exposure to PHP and React.js.<br/>

            The technologies to learn in order to keep up with the trends feels endless. I&apos;m currently learning the MERN stack and Typescript.<br/><br/>

            
            Apart from coding, I&apos;m a hobbyist 3D artist and sound editor when my laptop agrees to work with me. 
            My main method of relaxation is binge-listening to audiodramas and movie audio descriptions.
            </p>
          </div>
        </div>
      
        

          <Image 
          src="/images/about/park_by_kalecream_de1sg8k-fullview.jpg" 

          width={1920}
          height={1080}

          alt=""/>
    </section>
    </Layout>
  )
}