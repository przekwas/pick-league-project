import { Router } from 'express';
import db from '../../db'

const router = Router();

router.get('/:id?', async (req, res) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			const [team] = await db.teams.one(id);
			res.json(team);
		} catch (error) {
			console.log(error);
			res.status(500).json("Luke's code sucks, let him know!");
		}
	} else {
		try {
			const teams = await db.teams.all();
			res.json(teams);
		} catch (error) {
			console.log(error);
			res.status(500).json("Luke's code sucks, let him know!");
		}
	}
});

export default router;
