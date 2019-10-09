import { knextion as knex } from '../index';
import { IUserTable } from '../models/tables';

const findEmail = (email: string) => {
	return knex
		.select()
		.from<IUserTable>('users')
		.where({ email });
};

export default {
	findEmail
};
