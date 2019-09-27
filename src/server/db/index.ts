import * as knex from 'knex';
import config from '../config';

export const knextion = knex(config.knex);

import users from './queries/users';
import tokens from './queries/tokens';
import games from './queries/games';
import teams from './queries/teams';
export default {
	users,
	tokens,
	games,
	teams
};
