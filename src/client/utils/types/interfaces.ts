export interface IWeeklyGames {
	gameDate: Date;
	home: {
		selected: boolean;
		disabled: boolean;
		weekid: number;
		teamid: number;
		name: string;
	};
	away: {
		selected: boolean;
		disabled: boolean;
		weekid: number;
		teamid: number;
		name: string;
	};
}
