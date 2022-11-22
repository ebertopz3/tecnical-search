import GridUser from '../components/grid-user';
import InputSearch from '../components/input-search';
import {Provider as JotaiProvider} from 'jotai'
import Head from 'next/head';

const Search = () => {
	return (
		<JotaiProvider>
			<Head>
				<title>Search Users</title>
				<meta name='Search' content='This is search page'/>
			</Head>
			<div className='flex flex-col w-full h-full'>
				<div className={'pt-8 px-8'} >
					<InputSearch />
				</div>
				<div className='flex flex-col w-full pt-6 h-full'>
					<GridUser />
				</div>
			</div>
		</JotaiProvider>
	)
}
export default Search;
