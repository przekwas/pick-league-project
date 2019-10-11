import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			const [week] = await db.weeks.one(id);
			res.json(week);
		} catch (error) {
			console.log(error);
			res.status(500).json("Luke's code sucks, let him know!");
		}
	} else {
		try {
			const weeks = await db.weeks.all();
			res.json(weeks);
		} catch (error) {
			console.log(error);
			res.status(500).json("Luke's code sucks, let him know!");
		}
	}
});

export default router;
