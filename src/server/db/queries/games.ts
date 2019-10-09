import { knextion as knex } from '../index';
import { IGameTable, ITeamsTable } from '../models/tables';

const gamesForWeek = (weekid: number) => {
	return knex
		.select('games.weekid', 'teams.id as teamid', 'teams.name')
		.from<IGameTable>('games')
		.join<ITeamsTable>('teams', function() {
			this.on('teams.id', '=', 'games.home_team').orOn('teams.id', '=', 'games.away_team');
		})
		.where('games.weekid', weekid);
};

export default {
	gamesForWeek
};
