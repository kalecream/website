import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../layout'

export const SiteLogo = './public/logo.svg'

export default function Navbar(children) {
  return (
      <nav>
        <Link href="/" >
            <a id="site-title">
              <Image src="/images/logo.svg" height={100} width={20} alt={siteTitle}></Image>
            </a> 
        </Link>
        <input type={"checkbox"} id={"nav"} className={"hidden"}></input>
        <label htmlFor={"nav"} className={"nav-toggle"}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className={'wrapper'}>
          <ul>
        {/* <li>
            <div>
              <Link href="/about">
                  <a>Blog</a>
              </Link>
            </div> 
          </li> */}
          <li>
            <div>
              <Link href="/about">
                  <a>About</a>
              </Link>
            </div> 
          </li>
        </ul> 
        </div>
    </nav>
   )
}