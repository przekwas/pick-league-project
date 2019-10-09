import { Router } from 'express';
import * as passport from 'passport';
import { createToken } from '../../utils/security/tokens';

const router = Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => {
	try {
		const token = await createToken({ userid: req.user.id });
		res.json({
			token,
			role: req.user.role,
			userid: req.user.id
		});
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
