import { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../../interfaces/user.interface';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IUser>
) {
	const url: string | string[] | undefined = req.query.url
	try {
		const user: IUser = await fetch(`${url}`,{
			headers: {
				'Accept': 'application/vnd.github+json'
			}
		}).then(value => value.json());
		return res.status(200).json(user);
	} catch (e) {
		return res.status(500).json({} as IUser);
	}
}
