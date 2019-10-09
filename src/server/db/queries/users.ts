import { knextion as knex } from '../index';
import { IUserTable } from '../models/tables';

const findEmail = (email: string) => {
	return knex
		.select()
		.from<IUserTable>('users')
		.where({ email });
};

const findId = (id: number) => {
	return knex
		.select()
		.from<IUserTable>('users')
		.where({ id });
};

const insert = (email: string, username: string, hash: string) => {
	return knex('users').insert({ email, username, hash });
};

export default {
	findEmail,
	findId,
	insert
};
