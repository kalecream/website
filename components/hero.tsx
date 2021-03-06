import Image from 'next/image'
import styles from '../styles/modules/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import style from '../styles/modules/home.module.css'

// import { ReactComponent as Twitter} from '../public/images/social/twitter.svg'
// import Mastodon from '../public/images/social/twitter.svg'
// import DeviantArt from '../public/images/social/twitter.svg'
// import Github from '../public/images/social/twitter.svg'
// import LinkedIn from '../public/images/social/twitter.svg'

export default function HomeHero() {
  return (
    <section className={'hero'}>
        <div className={'heroGradient'}>
            <div className={'heroLeft'}>
                <Image 
                    alt="" 
                    src="/images/illustration/green-ball.png" width={500} 
                    height={500}
                    blurDataURL="data:..."
                    placeholder="blur"
                >
                </Image>
            </div>
            <div className={'heroRight'}>
                <h1>Building Solutions</h1>
                <h3>Learning journey of a web developer.</h3>
                {/* <p>I'm not currently looking for new opportunities, but my inbox is always open. Questions and business proposals will always be answered within 48 hours.</p> */}
                {/* <a className={'button'} href="mailto:sabrinamedwinter@gmail.com">Shoot me an email</a> */}
            </div>
        </div>
    </section>
  )
}