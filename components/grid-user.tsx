import { usersSearch } from '../stores/search.store';
import { useAtom } from 'jotai';
import { IUser } from '../interfaces/user.interface';
import { NextRouter, useRouter,  } from 'next/router';
import { getUserData, userData } from '../stores/user.store';
import { orgUser, reposUser } from '../stores/repos.store';
import { goRouter } from './global-functions';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const GridUser = () => {
	const router: NextRouter = useRouter();
	const [users, ] = useAtom(usersSearch);
	const [ , setUserData] = useAtom(userData);
	const [ , setRepos] = useAtom(reposUser);
	const [ , setOrg] = useAtom(orgUser);
	const getUser = async (user: IUser): Promise<void> => {
		MySwal.showLoading(null);
	  const userSearch = await getUserData(user);
		setUserData(userSearch.user);
		setRepos(userSearch.repos);
		setOrg(userSearch.organizations);
		await goRouter('/user', router);
		MySwal.close();
	};
  return (
		<div className=" bg-gray-100 text-gray-600 p-4 rounded-2xl h-full overflow-y-auto">
			<div className="flex flex-col justify-center h-auto">
				<div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
					<header className="px-5 py-4 border-b border-gray-100">
						<h2 className="font-semibold text-gray-800">Lista de Usuarios</h2>
					</header>
					<div className="p-3">
						<div className="overflow-x-auto overflow-y-auto h-96 max-w-3xl">
							<table className="table-auto w-full">
								<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
								<tr>
									<th className="p-2 whitespace-nowrap">
										<div className="font-semibold text-left font-bold">Nombre</div>
									</th>
									<th className="p-2 whitespace-nowrap">
										<div className="font-semibold text-left ont-bold">Git Url</div>
									</th>
									<th className="p-2 whitespace-nowrap">
										<div className="font-semibold text-left ont-bold">Score</div>
									</th>
								</tr>
								</thead>
								
								<tbody className="text-sm divide-y divide-gray-100">
									{
										users.map((item: IUser) => (
											<tr key={item.id} onClick={() => {getUser(item)}} className='cursor-pointer hover:bg-cyan-100'>
												<td className="p-2 whitespace-nowrap">
													<div className="flex items-center">
														<div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
															<img className="rounded-full" src={item.avatar_url} width="40" height="40"/>
														</div>
														<div className="font-medium text-gray-800">{item.login}</div>
													</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left">{item.html_url}</div>
												</td>
												<td className="p-2 whitespace-nowrap">
													<div className="text-left font-medium text-green-500">{item.score}</div>
												</td>
											</tr>
										))
									}
								</tbody>
								
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default GridUser;
