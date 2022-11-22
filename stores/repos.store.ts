import { IOrganization, IRepo } from '../interfaces/user.interface';
import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai';
// Implementación de jotai en estorage
export const reposUser = atomWithStorage<IRepo[]>('reposUserData',[]);
export const orgUser = atomWithStorage<IOrganization[]>('orgUser',[]);
/**
 * @description para dejar valor inicial
 */
export const defaultRepos = atom(() => '', (get, set) => {
	set(reposUser, [])
});
export const defaultOrgUser = atom(() => '', (get, set) => {
	set(orgUser, []);
})
