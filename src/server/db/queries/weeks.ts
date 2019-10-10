import { knextion as knex } from '../index';
import { IWeeksTable } from '../models/tables';

const all = () => {
	return knex.select().from<IWeeksTable>('weeks');
};

const one = (id: number) => {
	return knex
		.select()
		.from<IWeeksTable>('weeks')
		.where({ id });
};

export default {
	all,
	one
};
