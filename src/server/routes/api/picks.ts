import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/week/:weekid', async (req, res) => {
	const weekid = Number(req.params.weekid);
	try {
		const picksForWeek = await db.picks.allForWeek(weekid);
		res.json(picksForWeek);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

router.get('/user/:userid', async (req, res) => {
	const userid = Number(req.params.userid);
	try {
		const picksForUser = await db.picks.allForUser(userid);
		res.json(picksForUser);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

router.post('/', async (req, res) => {
	try {
		res.json('Pick has been made!')
		// const result = await db.picks.makePickForWeek(req.body.userid, req.body.teamid, req.body.weekid);
		// res.json({
		// 	result,
		// 	msg: 'Pick has been made!'
		// });
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

router.put('/', async (req, res) => {
	try {
		const result = await db.picks.updateWinningPick(req.body.userid, req.body.teamid, req.body.weekid, req.body.is_winning_pick);
		res.json({
			result,
			msg: 'Pick has been updated!'
		});
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
