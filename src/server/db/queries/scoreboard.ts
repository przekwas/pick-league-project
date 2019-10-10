import { knextion as knex } from '../index';
import { IScoreBoardTable, IUserTable } from '../models/tables';

const getScores = () => {
	return knex
		.select('scoreboard.*', 'users.username')
		.from<IScoreBoardTable>('scoreboard')
		.join<IUserTable>('users', 'users.id', 'scoreboard.userid');
};

const getScoreForUser = (userid: number) => {
	return knex
		.select('scoreboard.*', 'users.username')
		.from<IScoreBoardTable>('scoreboard')
		.join<IUserTable>('users', 'users.id', 'scoreboard.userid')
		.where({ userid });
};

export default {
    getScores,
    getScoreForUser
};
