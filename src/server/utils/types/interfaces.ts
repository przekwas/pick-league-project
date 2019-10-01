export interface IGame {
	home: {
		weekid: number;
		teamid: number;
		name: string;
	};
	away: {
		weekid: number;
		teamid: number;
		name: string;
	};
}

export interface IGameTable {
	weekid: number;
	teamid: number;
	name: string;
}

export interface IUserTable {
	id: number;
	email: string;
	username: string;
	hash: string;
	role: string;
	_created: Date;
}

export interface IPayload {
	userid: number;
	unique?: string;
	tokenid?: number;
}

export interface IDbInsert {
	insertId: number;
}
