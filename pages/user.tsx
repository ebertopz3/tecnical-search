import InfoUser from '../components/info-user';
import ReposUser from '../components/repos-user';
import { useAtom } from 'jotai';
import { userData } from '../stores/user.store';
import NoneUser from '../components/none-user';
import OrgUser from '../components/org-user';
import Head from 'next/head';

const User = () => {
	const [user,] = useAtom(userData);
	if (user && user.login) {
		return (
			<div className='flex flex-col w-full'>
				<Head>
					<title>User</title>
					<meta name='User' content='This is user pege'/>
				</Head>
				<InfoUser />
				<div className='flex flex-col 2xl:flex-row justify-center  2xl:justify-between py-3 w-full '>
					<div className='flex-row w-full p-2'>
						<ReposUser />
					</div>
					<div className='flex-row w-full p-2'>
						<OrgUser />
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className='flex flex-col w-full'>
				<NoneUser />
			</div>
		)
	}
};
export default User;
