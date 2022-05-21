import navStyles from '/styles/nav.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SecondNavbar(children) {
  return (
      <nav className={navStyles.sideNav}>
          <div className={navStyles.middleNavContainer}>
            <Link href="https://twitter.com/KaleCream">
                <a>
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
    </nav>
   )
}