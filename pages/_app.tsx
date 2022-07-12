import "@styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import '../styles/css/global.css'
import Navbar from '../components/global/navbar'
import Footer from "../components/global/footer";

// eslint-disable-next-line import/no-default-export

export const siteTitle = 'KaleCream'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
        		<meta name="og:title" content={siteTitle} />
        		<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<header>
				<Navbar />
			</header>

			<main className={'main-wrapper'}>
				<Component {...pageProps} />
			</main>

			<Footer/>
		</>
	);
}