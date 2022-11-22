import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Nav />
      <div className='p-4 h-full'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
