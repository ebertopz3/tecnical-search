import { useAtom } from 'jotai';
import { defaultUserData, userData } from '../stores/user.store';
import { NextRouter, useRouter } from 'next/router';
import { goRouter } from './global-functions';


const InfoUser = () => {
	const router: NextRouter = useRouter();
	const [user, ] = useAtom(userData);
	const [ ,defaultUser] = useAtom(defaultUserData);
	
	const onClose = (e: any) => {
	  e.preventDefault()
		defaultUser()
		goRouter('/search', router).then();
	}
	
  return (
		<div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
			<div className="px-6">
				<div className="flex flex-wrap justify-center">
					<div className="w-full flex justify-center">
						<div className="relative">
							<img src={user?.avatar_url ? user?.avatar_url : '' }
									 className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
						</div>
					</div>
					<div className='flex flex-grow justify-end pt-2'>
						<button className='text-slate-700 font-bold hover:text-red-400' onClick={onClose}>
							Cerrar
						</button>
					</div>
					<div className="w-full flex-col text-center mt-20">
						<div className="flex justify-center lg:pt-4 pt-8 pb-0">
							<div className="px-2 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{user?.public_repos}</span>
								<span className="text-sm text-slate-400">Repositorios</span>
							</div>
							<div className="px-2 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{user?.followers}</span>
								<span className="text-sm text-slate-400">Seguidores</span>
							</div>
						
							<div className="px-2 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{user.following}</span>
								<span className="text-sm text-slate-400">Siguiendo</span>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-2">
					<h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
						{user?.name ? user?.name : user?.login}
					</h3>
					<div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
						<span>Ubicación: {user?.location ? user?.location : 'Ninguna'}</span>
					</div>
				</div>
				<div className="mt-6 py-6 border-t border-slate-200 text-center">
					<div className="flex flex-wrap justify-center">
						<div className="w-full px-4">
							<p className="font-light leading-relaxed text-slate-600 mb-4">{user.html_url}</p>
							<a href={user.html_url}
								 target="_blank"
								 className="font-normal text-slate-700 hover:text-slate-400 font-bold hover:underline hover:decoration-zinc-300"
								 rel="noopener noreferrer">
								{user?.login}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default InfoUser
