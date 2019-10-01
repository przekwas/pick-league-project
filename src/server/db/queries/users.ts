import { knextion as knex } from '../index';
import { IUserTable } from '../../utils/types/interfaces';

const findEmail = (email: string) =>
	knex('users')
		.select()
		.where({ email });

export default {
	findEmail
};
