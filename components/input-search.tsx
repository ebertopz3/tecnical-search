import {useAtom} from 'jotai';
import { textSearch, getUsersSearch, usersSearch } from '../stores/search.store';
import { IUser } from '../interfaces/user.interface';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)


const InputSearch = () => {
	
	const [text, setText] = useAtom(textSearch);
	const [, setUsers] = useAtom(usersSearch);
	// Trae y setea los users
	const onGetUsers = async (): Promise<void> => {
		if (text) {
			MySwal.showLoading(null);
			const users: IUser[] = await getUsersSearch(text);
			setUsers(users)
			MySwal.close();
		} else {
			MySwal.fire({
				title: <p>Escriba el nombre de un usuario.</p>,
				showConfirmButton: true
			}).then()
		}
	}
	const onEnter = (e: any) => {
		const keycode = e.keyCode || e.which;
		if (keycode == 13) {
			onGetUsers().then();
		}
	}
  return (
		<div className="flex items-center max-w-1/2">
			<label htmlFor="voice-search" className="sr-only">Search</label>
			<div className="relative w-full">
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
							 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						></path>
					</svg>
				</div>
				<input type="text" id="search"
							 onChange={(event) => {setText(event.target.value)}}
							 onKeyUp={onEnter}
							 className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							 placeholder="Search user Git..."/>
				<div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
					</svg>
				</div>
			</div>
			<button
				onClick={(event) => {onGetUsers()}}
				className="rounded inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						 xmlns="http://www.w3.org/2000/svg">
					<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
				Search
			</button>
		</div>
	)
}
export default InputSearch;
