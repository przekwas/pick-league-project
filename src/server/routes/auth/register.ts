import { Router } from 'express';
import db from '../../db';
import { hashPassword } from '../../utils/security/passwords';
import { createToken } from '../../utils/security/tokens';

const router = Router();

router.post('/', async (req, res) => {
	try {
		const user: { email: string; username: string; password: string; hash?: string } = { ...req.body };
		user.hash = hashPassword(req.body.password);
		delete user.password;
		const [userid] = await db.users.insert(user.email, user.username, user.hash);
		const token = await createToken({ userid });
		res.json({
			token,
			userid,
			role: 'guest'
		});
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
