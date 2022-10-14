// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Head from 'next/head'
import {
  RecoilRoot} from 'recoil';


function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="shortcut icon" href='https://upvotes.co/images/SoftwareLogos/Social-Pilot.png' />
    </Head>
    
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
    </RecoilRoot>
    <Footer />
  </>
  )
}

export default MyApp
