import { knextion as knex } from '../index';
import { ITokensTable } from '../models/tables';

const insert = (user_id: number) => {
	return knex('tokens').insert({ user_id });
};
const update = (token: string, unique: string, _expires: Date, id: number) => {
	return knex('tokens')
		.update({ unique, token, _expires })
		.where({ id });
};
const match = (token: string, unique: string, user_id: number) => {
	return knex
		.select()
		.from<ITokensTable>('tokens')
		.where({ token, unique, user_id });
};

export default {
	insert,
	update,
	match
};
