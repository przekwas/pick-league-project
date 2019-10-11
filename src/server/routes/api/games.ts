import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:weekid', async (req, res) => {
	const weekid = Number(req.params.weekid);
	try {
		const raw = await db.games.gamesForWeek(weekid);
		const gamesForTheWeek = [];
		for (let i = 0; i < raw.length; i += 2) {
			gamesForTheWeek.push({
				home: raw[i],
				away: raw[i + 1]
			});
		}
		res.json(gamesForTheWeek);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
