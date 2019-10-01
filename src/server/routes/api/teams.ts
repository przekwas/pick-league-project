import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
