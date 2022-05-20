import navStyles from '/styles/nav.module.css'
import Link from 'next/link'

export default function SecondNavbar(children) {
  return (
      <nav className={navStyles.sideNav}>
          <div className={navStyles.middleNavContainer}>
            <Link href="https://twitter.com/KaleCream">
                <a>Twitter</a>
            </Link>
            <Link href="https://www.deviantart.com/kalecream">
                <a>DeviantArt</a>
            </Link>
            <Link href="https://github.com/kalecream">
                <a>Github</a>
            </Link>
            <Link href="http://www.linkedin.com/medwinter">
                <a>LinkedIn</a>
            </Link>
          </div> 
    </nav>
   )
}