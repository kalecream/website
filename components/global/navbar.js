import navStyles from '/styles/nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../layout'

export const SiteLogo = './public/logo.svg'

export default function Navbar(children) {
  return (
      <nav className={navStyles.nav}>
          <Link href="/" >
            <a className={navStyles.navName}>{siteTitle}</a>
          </Link>
          
          <div className={navStyles.NavContainer}>
            <Link href="/about">
                <a>About</a>
            </Link>
            
          </div> 
    </nav>
   )
}