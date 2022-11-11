// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Head from 'next/head'
import {
  RecoilRoot} from 'recoil';
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="shortcut icon" href='https://play-lh.googleusercontent.com/8t6U6HGuMnP1DAJYpb4U_fEwVA7fgaOBJYRyfPHM5OLZllGj-8tsmJhu6Y4ikMrGpZg' />
    </Head>
    <Header title={'I-Shala'}/>
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
    </RecoilRoot>
    <Footer />
  </>
  )
}

export default MyApp
