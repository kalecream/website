import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../layout'

export const SiteLogo = './public/logo.svg'

export default function Navbar(children) {
  return (
      <nav>
          <Link href="/" >
            <a id="site-title">
              <Image src="/images/logo.svg" height={20} width={20} alt={siteTitle}></Image>
            </a>
            
            
          </Link>
          
          <div>
            <Link href="/about">
                <a>About</a>
            </Link>
            
          </div> 
    </nav>
   )
}