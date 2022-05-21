import Image from 'next/image'
import Navbar from '../components/global/navbar'
import styles from '../styles/about.module.css'

export default function About( children, home ) {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>

      <div className={styles.about__image}>
        <Image 
              src="/images/home/avatar_sab.svg" 
              height={400}
              width={400}
              
              alt=""  
            />
            <h1 className={styles.about__title}>About Me</h1>
      </div>

      <div className={styles.about__textContainer}>
        <p className={styles.about__text}> I&apos;ve been fascinated with computers and the internet for as long as my memory stretches. My personal introduction to coding was through modifying tumblr themes back in 2009. This exposed me to HTML, CSS, JS and JQUERY. This eventually graduated to creating my own pages and websites then learning to modify Wordpress themes which gave me some exposure to PHP and React.js.</p>

        <p className={styles.about__text}>The technologies to learn in order to keep up with the trends feels endless. I&apos;m currently learning the MERN stack and Typescript.</p>

        <p className={styles.about__text}>
        Apart from coding, I&apos;m a hobbyist 3D artist and sound editor when my laptop agrees to work with me. 
        My main method of relaxation is binge-listening to audiodramas and movie audio descriptions.
        </p>

        <div className={styles.about__BlenderImage}>
          {/* <Image 
          src="/images/about/chess__alternate_view__by_kalecream_deqidci-fullview.jpg" 

          width={1920}
          height={1080}

          alt=""/> */}

          <Image 
          src="/images/about/park_by_kalecream_de1sg8k-fullview.jpg" 

          width={1920}
          height={1080}

          alt=""/>
        </div>
        

      </div>

    </div>
  )
}