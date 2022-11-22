import { NextApiRequest, NextApiResponse } from 'next';
import { IRepo } from '../../../interfaces/user.interface';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IRepo[]>
) {
	const url: string | string[] | undefined = req.query.url
	try {
		const repos: IRepo[] = await fetch(`${url}`,{
			headers: {
				'Accept': 'application/vnd.github+json'
			}
		}).then(value => value.json());
		return res.status(200).json(repos);
	} catch (e) {
		return res.status(500).json([]);
	}
}
