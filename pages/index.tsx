import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col h-full items-center justify-center'>
      <Head>
        <title>App Search Git User</title>
        <meta name="Home" content="This is Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-blue-700 text-6xl font-bold mb-8'>
        Buscador de usuarios de Git
      </h1>

      <Link className='mb-10 text-blue-500 text-2xl font-bold' href='/search'>
        Clik a qui para iniciar la búsqueda.
      </Link>
      <a href="https://github.com/ebertopz3" target="_blank" rel="noopener noreferrer">
        <span className='text-xl text-white font-bold hover:underline hover:decoration-zinc-300'>
          Eberto Jose Polo Zambrano
        </span>
      </a>
    </div>
  )
}
