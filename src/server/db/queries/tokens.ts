import { knextion as knex } from '../index';

const insert = (user_id: number) => {
	return knex('tokens').insert({ user_id });
};
const update = (token: string, unique: string, _expires: Date, id: number) => {
	return knex('tokens')
		.update({ unique, token, _expires })
		.where({ id });
};

export default {
	insert,
	update
};
