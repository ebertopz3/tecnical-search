import { NextApiRequest, NextApiResponse } from 'next';
import { IResUsers, IUser } from '../../../interfaces/user.interface';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IUser[]>
) {
	const text: string | string[] | undefined = req.query.text
	try {
		const result: IResUsers = await fetch(` https://api.github.com/search/users?q=${text}`,{
			headers: {
				'Accept': 'application/vnd.github+json'
			}
		}).then(value => value.json());
		return res.status(200).json(result.items);
	} catch (e) {
		return [];
	}
}
