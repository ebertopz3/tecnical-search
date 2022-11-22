import { NextApiRequest, NextApiResponse } from 'next';
import { IOrganization } from '../../../interfaces/user.interface';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<IOrganization[]>
) {
	const url: string | string[] | undefined = req.query.url
	try {
		const organizations: IOrganization[] = await fetch(`${url}`,{
			headers: {
				'Accept': 'application/vnd.github+json'
			}
		}).then(value => value.json());
		return res.status(200).json(organizations);
	} catch (e) {
		return res.status(500).json([]);
	}
}
