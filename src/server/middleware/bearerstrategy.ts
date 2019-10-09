import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';
import { validateToken } from '../utils/security/tokens';
import db from '../db';

passport.use(
	new BearerStrategy.Strategy(async (token, done) => {
		try {
			let payload = await validateToken(token);
			let [user] = await db.users.findId(payload.userid);
			if (user) {
				delete user.hash;
				done(null, user);
			} else {
				done(null, false);
			}
		} catch (error) {
			console.log(error);
			done(error);
		}
	})
);
