import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
	try {
		res.json('Test');
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
