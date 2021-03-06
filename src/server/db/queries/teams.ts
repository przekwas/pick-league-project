import { knextion as knex } from '../index';
import { ITeamsTable } from '../models/tables';

const all = () => {
	return knex.select().from<ITeamsTable>('teams');
};

const one = (id: number) => {
	return knex
		.select()
		.from<ITeamsTable>('teams')
		.where({ id });
};

export default {
	all,
	one
};
