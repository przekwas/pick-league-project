import { knextion as knex } from '../index';

const gamesForWeek = (weekid: number) => {
	return knex('games')
		.select('games.weekid', 'teams.id as teamid', 'teams.name')
		.join('teams', function() {
			this.on('teams.id', '=', 'games.home_team').orOn('teams.id', '=', 'games.away_team');
		})
		.where('games.weekid', weekid);
};

export default {
	gamesForWeek
};
