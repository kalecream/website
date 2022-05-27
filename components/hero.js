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

export default function HomeHero({ children, home }) {
  return (
    <section className={'hero'}>
        <div className={'heroLeft'}>
            <Image alt="" src="/images/illustration/green-ball.png" width={500} height={500}></Image>
        </div>

        <div className={'heroRight'}>
            <div className={'glassBox'}>
                <span className={'heroHighlight'}>
                    Follow me
                </span>
                <span className={style.heroTinyText}>on my</span>
                <h1 className={utilStyles.headingXL}>
                    <span className={style.heroJourney}>developer</span> journey
                </h1> 
                <div className={style.socialLinks}>
                <Link href="https://twitter.com/KaleCream">
                    <a>
                        {/* <Twitter /> */}
                        <Image src="/images/social/twitter.svg" width="30px" height="30px" alt="Twitter"></Image>
                    </a>
                </Link>
                <Link href="https://mstdn.social/@KaleCream">
                    <a>
                    <Image src="/images/social/icons8-mastodon.svg" width="30px" height="30px" alt="Mastodon"></Image>
                    </a>
                </Link>
                <Link href="https://www.deviantart.com/kalecream">
                    <a>
                    <Image src="/images/social/icons8-deviantart.svg" width="30px" height="30px" alt="Mastodon"></Image>
                    </a>
                </Link>
                <Link href="https://github.com/kalecream">
                    <a>
                    <Image src="/images/social/icons8-github.svg" width="30px" height="30px" alt="Mastodon"></Image>
                    </a>
                </Link>
                <Link href="http://www.linkedin.com/medwinter">
                    <a>
                    <Image src="/images/social/icons8-linkedin-circled.svg" width="30px" height="30px" alt="LinkedIn"></Image>
                    </a>
                </Link>
                </div>  
                {/* <button className={style.button}>
                    View the blog
                </button> */}
            </div>
        </div>
    </section>
  )
}