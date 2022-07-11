import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../layout'

export const SiteLogo = './public/logo.svg'


export default function Navbar(children) {
  return (
      <nav>
        <Link href="/" >
            <a id="site-title">
              KaleCream.
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
              <Link href="/about">
                  <a>About</a>
              </Link>
          </li>
        </ul> 
        </div>
    </nav>
   )
}