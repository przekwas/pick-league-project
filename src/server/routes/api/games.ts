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
				gameDate: raw[i].game_date,
				home: {
					weekid: raw[i].weekid,
					teamid: raw[i].teamid,
					name: raw[i].name,
					selected: false,
					disabled: false
				},
				away: {
					weekid: raw[i + 1].weekid,
					teamid: raw[i + 1].teamid,
					name: raw[i + 1].name,
					selected: false,
					disabled: false
				}
			});
		}
		res.json(gamesForTheWeek);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
