import { IRepo, IUser, IUserRepo } from '../interfaces/user.interface';
import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai';

/**
 * @description Implementacion de jotai en storaje
 */
export const userData = atomWithStorage<IUser>('userData', {} as IUser)
/**
 * @description PAra dejar valor inicial
 */
export const defaultUserData = atom(() => '', (get, set) => {
	set(userData, {} as IUser);
})
/**
 * @description Trae user repos y organizations
 */
export const getUserData = async ({url, repos_url, organizations_url}: IUser): Promise<IUserRepo> => {
	try {
		const user: IUser = await fetch(`/api/search-user/user?url=${url}`)
			.then(value => value.json());
		const repos: IRepo[] = await fetch(`/api/search-user/repos?url=${repos_url}`)
			.then(value => value.json());
		const organizations = await fetch(`/api/search-user/organizations?url=${organizations_url}`)
			.then(value => value.json());
		return {user, repos, organizations} as IUserRepo;
	} catch (e) {
		return {} as IUserRepo;
	}
}
