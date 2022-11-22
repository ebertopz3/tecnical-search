export interface IUser {
	login: string;
	id: number,
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	subscriptions_url: string;
	
	organizations_url: string;
	repos_url: string;
	
	received_events_url: string;
	type: string;
	score: number;
	following_url: string;
	gists_url: string;
	starred_url: string;
	events_url: string;
	site_admin: boolean;
	blog: string;
	company: string | null;
	created_at: string;
	email: string | null;
	location: string;
	name: string;
	public_repos: number;
	followers: number;
	following: number;
}
export interface IResUsers {
	total_count: number;
	incomplete_results: boolean;
	items: IUser[];
}
export interface IUserRepo {
	user: IUser;
	repos: IRepo[];
	organizations: IOrganization[]
}
export interface IRepo {
	name: string;
	full_name: string;
	visibility: string;
	updated_at: string;
	html_url: string;
	clone_url: string;
}
export interface IOrganization {
	avatar_url: string;
	description: string;
	events_url: string;
	hooks_url: string;
	id: number;
	issues_url: string;
	login: string;
	members_url: string;
	node_id: string;
	public_members_url: string;
	repos_url: string;
	url: string;
}
