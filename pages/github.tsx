import Head from 'next/head';

const Github = () => {
  return (
		<div className='flex flex-col h-full items-center justify-center'>
			<Head>
				<title>Git repo tecnical search</title>
				<meta name="GitHub" content="This is GitHub page" />
			</Head>
			<h1 className='text-blue-700 text-6xl font-bold mb-8'>
				Buscador de usuarios de Git
			</h1>
		
			<a href="https://github.com/ebertopz3/tecnical-search"
				 className='mb-10 text-blue-500 text-2xl font-bold'
				 target="_blank"
				 rel="noopener noreferrer">
				Clik a qui para ir al repositorio.
			</a>
			<a href="https://github.com/ebertopz3" target="_blank" rel="noopener noreferrer">
        <span className='text-xl text-white font-bold hover:underline hover:decoration-zinc-300'>
          Eberto Jose Polo Zambrano
        </span>
			</a>
		</div>
	)
}
export default Github;
