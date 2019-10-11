import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:id', async (req, res) => {
	const id = Number(req.params.id);
	try {
		const [user] = await db.users.findId(id);
		delete user.hash;
		delete user.role;
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
