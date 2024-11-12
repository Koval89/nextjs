export type PostsModel = Child[];
export interface Child {
	userId: number;
	id: number;
	title: string;
	body: string;
}