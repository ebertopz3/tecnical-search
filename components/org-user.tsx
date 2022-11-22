import { IOrganization } from '../interfaces/user.interface';
import { useAtom } from 'jotai';
import { orgUser } from '../stores/repos.store';

const OrgUser = () => {
	const [org,] = useAtom(orgUser);
  return (
		<div className="flex flex-col justify-center h-auto">
			<div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-md border border-gray-200">
				<header className="px-5 py-4 border-b border-gray-100">
					<h2 className="font-semibold text-gray-800">Lista de Organizaciones</h2>
				</header>
				<div className="p-3">
					<div className="overflow-x-auto hover:overflow-y-scroll h-80 max-w-3xl w-full">
					
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
									<div className="font-semibold text-left ont-bold">Descripción</div>
								</th>
							</tr>
							</thead>
						
							<tbody className="text-sm divide-y divide-gray-100 min-h-max">
							{
								org.map((item: IOrganization) => (
									<tr key={item.id}>
										<td className="p-2 whitespace-nowrap">
											<div className="flex items-center min-w-80" title={item?.login ? item?.login : 'Nulo'}>
												<div className="font-medium text-gray-800 truncate md:w-40">
													{item?.login ? item?.login : 'Nulo'}
												</div>
											</div>
										</td>
										<td className="p-2 whitespace-nowrap">
											<div className="text-left text-gray-800 truncate md:w-56" title={item.url}>
												{item.url}
											</div>
										</td>
										<td className="p-2 whitespace-nowrap">
											<div className="text-left font-medium text-gray-800 truncate md:w-64" title={item.description}>
												{item.description}
											</div>
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
export default OrgUser;
