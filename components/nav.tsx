import Link from 'next/link';
import { activeClass } from './global-functions';
import { NextRouter, useRouter } from 'next/router';

/**
 * @description Nav de navegación
 */
const Nav = () => {
	const router: NextRouter = useRouter()
  return (
		<nav className='navbar w-full bg-white m-0'>
			<div className='container-lg px-5 py-6'>
				<Link className={activeClass('/', router)}  href='/'>Inicio</Link>
				<Link className={activeClass('/search', router)}  href='/search'>Busqueda</Link>
				<Link className={activeClass('/user', router)}  href='/user'>Usuario</Link>
				<Link className={activeClass('/github', router)}  href='/github'>Github</Link>
			</div>
		</nav>
	)
}
export default Nav;
