import navStyles from '/styles/nav.module.css'

import Link from 'next/link'
import Image from 'next/image'

export const SiteLogo = './public/logo.svg'

export default function Navbar({ children}:React.PropsWithChildren<{}>) {
  return (
      <nav className={navStyles.nav}>
          <Link href="/" >
            <a className={navStyles.navName}> Sabrina. </a>
          </Link>
          
          <div className={navStyles.NavContainer}>
            <Link href="/blog">
            <a>Blog</a>
            </Link>
            <Link href="/about">
                <a>Contact</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            
          </div> 
    </nav>
   )
}