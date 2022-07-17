import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../layout'
import React, {useState, useEffect} from 'react'

export const SiteLogo = '/images/logo.svg'
const favicon = '/images/favicon.ico'
const moon = '/images/moon.svg'
const sun = '/images/sun.svg'
const toggler = {moon, sun}

export default function Navbar(children) {
  const [darkMode, setDarkMode] = useState(false);
  const [selected, setSelected] = useState(toggler.moon)

  // todo: react change svg image on click
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      setSelected(toggler.sun)
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

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
              {/* <Link href="/about">
                  <a>About</a>
              </Link> */}
          </li>
          <li>
              <button id={"theme-toggle"} 
              onClick={
                () => {setDarkMode(!darkMode); setSelected(selected === toggler.moon ? toggler.sun : toggler.moon)}
                } >
                    <Image src={moon} width="20" height="20" />
              </button>
          </li>
        </ul> 
        </div>
    </nav>
   )
}