import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const scores = await db.scoreboard.getScores();
		res.json(scores);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

router.get('/user/:userid', async (req, res) => {
	const userid = req.params.userid;
	try {
		const scoresForUser = await db.scoreboard.getScoreForUser(userid);
		res.json(scoresForUser);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
