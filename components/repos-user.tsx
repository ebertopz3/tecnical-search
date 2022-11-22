import { useAtom } from 'jotai';
import { reposUser } from '../stores/repos.store';
import { IRepo } from '../interfaces/user.interface';


const ReposUser = () => {
	const [repos,] = useAtom(reposUser);
  return (
		<div className="flex flex-col justify-center h-auto">
			<div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-md border border-gray-200">
				<header className="px-5 py-4 border-b border-gray-100">
					<h2 className="font-semibold text-gray-800">Lista de Repositorios</h2>
				</header>
				<div className="p-3">
					<div className="overflow-x-auto overflow-y-auto h-80 max-w-3xl">
						
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
									<div className="font-semibold text-left ont-bold">Actualizado</div>
								</th>
							</tr>
							</thead>
							
							<tbody className="text-sm divide-y divide-gray-100 ">
							{
								repos.map((item: IRepo) => (
									<tr key={item.name}>
										<td className="p-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="font-medium text-gray-800 truncate md:w-64"
														 title={item?.name ? item?.name : item?.full_name}>
													{item?.name ? item?.name : item?.full_name}
												</div>
											</div>
										</td>
										<td className="p-2 whitespace-nowrap">
											<div className="text-left text-gray-800 truncate md:w-64"
													 title={item?.html_url ? item?.html_url : item.clone_url}>
												{item?.html_url ? item?.html_url : item.clone_url}
											</div>
										</td>
										<td className="p-2 whitespace-nowrap">
											<div className="text-left font-medium text-green-500">{item.updated_at}</div>
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
	)
}
export default ReposUser;
