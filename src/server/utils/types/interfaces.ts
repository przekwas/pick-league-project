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

export interface IPayload {
	unique?: string;
	tokenid?: number;
	userid: number;
}