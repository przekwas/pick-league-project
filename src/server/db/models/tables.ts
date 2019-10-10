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

export interface ITokensTable {
	id: number;
	user_id: number;
	unique: string;
	_created: Date;
	_expires: Date;
	token: string;
}

export interface ITeamsTable {
	id: number;
	name: string;
	city: string;
	state: string;
	_created: Date;
}

export interface IPicksTable {
	userid: number;
	teamid: number;
	weekid: number;
	is_winning_pick: number;
	_created: Date;
}

export interface IWeeksTable {
	id: number;
	name: string;
	week_start: Date;
	week_end: Date;
	_created: Date;
}

export interface IScoreBoardTable {
	userid: number;
	total_score: number;
	score_week_1: number;
}
