
import Head from 'next/head';
import {Header} from '../components/Header';
import '../styles/global.scss';
import {Provider as NextAuthProvider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
