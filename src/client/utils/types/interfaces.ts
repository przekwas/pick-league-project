export interface IWeeklyGames {
	home: {
		selected: boolean;
		weekid: number;
		teamid: number;
		name: string;
	};
	away: {
		selected: boolean;
		weekid: number;
		teamid: number;
		name: string;
	};
}
