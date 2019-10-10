import { knextion as knex } from '../index';
import { IPicksTable, IUserTable, ITeamsTable } from '../models/tables';

const allForWeek = (weekid: number) => {
	return knex
		.select('picks.*', 'users.username', 'teams.name')
		.from<IPicksTable>('picks')
		.join<IUserTable>('users', 'users.id', 'picks.userid')
		.join<ITeamsTable>('teams', 'teams.id', 'picks.teamid')
		.where({ weekid });
};

const allForUser = (userid: number) => {
	return knex
		.select('picks.*', 'users.username', 'teams.name')
		.from<IPicksTable>('picks')
		.join<IUserTable>('users', 'users.id', 'picks.userid')
		.join<ITeamsTable>('teams', 'teams.id', 'picks.teamid')
		.where({ userid });
};

const makePickForWeek = (userid: number, teamid: number, weekid: number) => {
	return knex('picks').insert({ userid, teamid, weekid });
};

const updateWinningPick = (userid: number, teamid: number, weekid: number, is_winning_pick: number) => {
	return knex('picks')
		.update({ is_winning_pick })
		.where({ userid, teamid, weekid });
};

export default {
	allForWeek,
	allForUser,
	makePickForWeek,
	updateWinningPick
};
