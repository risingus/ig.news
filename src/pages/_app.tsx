
import Head from 'next/head';
import {Header} from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
