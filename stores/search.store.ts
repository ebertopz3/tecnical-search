import { IResUsers, IUser, } from '../interfaces/user.interface';
import {atom} from 'jotai';


// Inplementación de jotai
export const textSearch = atom<string>('');
export const usersSearch = atom<IUser[]>([]);

/**
 * @description trae los users de git segun text
 */
export const getUsersSearch = async (text: string): Promise<IUser[]> => {
	try {
		const res: IUser[] = await fetch('/api/search-user/search?text=' + text, {
			method: 'GET',
		}).then(value => value.json())
		return res;
	} catch (e) {
		return [];
	}
};

