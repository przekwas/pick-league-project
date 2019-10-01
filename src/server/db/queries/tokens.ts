import { knextion as knex } from '../index';

const insert = (userid: number) => knex('tokens').insert({ userid });

export default {
	insert
};
