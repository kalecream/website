import "@styles/global.css";
import { pageview } from "@lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import '../styles/css/global.css'
import Navbar from '@components/global/navbar'

// eslint-disable-next-line import/no-default-export

export const siteTitle = 'KaleCream'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
        		<meta name="og:title" content={siteTitle} />
        		<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<header>
				<Navbar />
			</header>

			<Component {...pageProps} />
		</>
	);
}