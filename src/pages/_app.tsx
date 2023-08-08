import type { AppProps } from 'next/app';
import { Global } from '../styles/globalTheme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Global/>
    <Component {...pageProps} />
  </>
  );
}
